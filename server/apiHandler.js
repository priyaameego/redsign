import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { db, initDatabase } from './db.js';
import {
  verifyPassword,
  createSession,
  deleteSession,
  validateSession,
  extractToken
} from './auth.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const UPLOADS_DIR = path.resolve(__dirname, '../public/uploads');

// Ensure database and uploads directory are initialized
initDatabase();
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

// In-memory rate limiter for login attempts (5 attempts per 15 mins per IP)
const loginAttempts = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const record = loginAttempts.get(ip);
  if (!record) return false;
  if (now > record.resetAt) {
    loginAttempts.delete(ip);
    return false;
  }
  return record.count >= 5;
}

function recordFailedLogin(ip) {
  const now = Date.now();
  const record = loginAttempts.get(ip) || { count: 0, resetAt: now + 15 * 60 * 1000 };
  record.count += 1;
  loginAttempts.set(ip, record);
}

function clearFailedLogins(ip) {
  loginAttempts.delete(ip);
}

/**
 * Parse incoming JSON body
 */
function parseJson(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
      // 25MB limit on request payload
      if (body.length > 25 * 1024 * 1024) {
        req.destroy();
        reject(new Error('Payload too large (25MB limit)'));
      }
    });
    req.on('end', () => {
      if (!body) return resolve({});
      try {
        resolve(JSON.parse(body));
      } catch (err) {
        reject(new Error('Invalid JSON payload'));
      }
    });
    req.on('error', reject);
  });
}

/**
 * Send JSON response helper
 */
function sendJson(res, statusCode, data, headers = {}) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-store, no-cache, must-revalidate',
    ...headers
  });
  res.end(JSON.stringify(data));
}

/**
 * Generate a clean, URL-safe slug
 */
function generateSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Ensure unique slug in blogs table
 */
function ensureUniqueBlogSlug(desiredSlug, currentBlogId = null) {
  let baseSlug = generateSlug(desiredSlug) || 'untitled-post';
  let slug = baseSlug;
  let counter = 1;

  while (true) {
    const query = currentBlogId
      ? db.prepare('SELECT id FROM blogs WHERE slug = ? AND id != ?').get(slug, currentBlogId)
      : db.prepare('SELECT id FROM blogs WHERE slug = ?').get(slug);

    if (!query) return slug;
    counter++;
    slug = `${baseSlug}-${counter}`;
  }
}

/**
 * Main API Request Dispatcher
 */
export async function handleApiRequest(req, res) {
  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = parsedUrl.pathname;
  const method = req.method.toUpperCase();
  const clientIp = req.socket?.remoteAddress || '127.0.0.1';

  // Extract auth user if token exists
  const token = extractToken(req);
  const user = token ? validateSession(token) : null;

  try {
    // =========================================================================
    // 1. AUTHENTICATION ROUTES
    // =========================================================================

    // POST /api/auth/login
    if (pathname === '/api/auth/login' && method === 'POST') {
      if (isRateLimited(clientIp)) {
        return sendJson(res, 429, {
          error: 'Too many failed login attempts. Please try again after 15 minutes.'
        });
      }

      const body = await parseJson(req);
      const { username, password } = body;

      if (!username || !password) {
        return sendJson(res, 400, { error: 'Username and password are required.' });
      }

      const userRecord = db.prepare('SELECT * FROM users WHERE username = ?').get(username.trim());
      if (!userRecord || !verifyPassword(password, userRecord.password_hash, userRecord.salt)) {
        recordFailedLogin(clientIp);
        return sendJson(res, 401, { error: 'Invalid username or password.' });
      }

      clearFailedLogins(clientIp);
      const session = createSession(userRecord.id);

      // Set secure cookie
      const cookieHeader = `admin_token=${encodeURIComponent(session.token)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${7 * 24 * 60 * 60}`;

      return sendJson(
        res,
        200,
        {
          success: true,
          token: session.token,
          user: {
            id: userRecord.id,
            username: userRecord.username,
            role: userRecord.role
          }
        },
        { 'Set-Cookie': cookieHeader }
      );
    }

    // POST /api/auth/logout
    if (pathname === '/api/auth/logout' && method === 'POST') {
      if (token) {
        deleteSession(token);
      }
      return sendJson(
        res,
        200,
        { success: true, message: 'Logged out successfully.' },
        { 'Set-Cookie': 'admin_token=; Path=/; HttpOnly; Max-Age=0' }
      );
    }

    // GET /api/auth/me
    if (pathname === '/api/auth/me' && method === 'GET') {
      if (!user) {
        return sendJson(res, 401, { authenticated: false, error: 'Unauthorized' });
      }
      return sendJson(res, 200, {
        authenticated: true,
        user: { id: user.id, username: user.username, role: user.role }
      });
    }

    // =========================================================================
    // 2. BLOGS MANAGEMENT ROUTES
    // =========================================================================

    // GET /api/blogs - List blogs
    if (pathname === '/api/blogs' && method === 'GET') {
      if (user) {
        // Admin gets all blogs (published and drafts)
        const allBlogs = db.prepare('SELECT * FROM blogs ORDER BY id DESC').all();
        const total = allBlogs.length;
        const published = allBlogs.filter((b) => b.status === 'published').length;
        const drafts = allBlogs.filter((b) => b.status === 'draft').length;

        // Parse JSON fields
        const formatted = allBlogs.map(formatBlogRecord);

        return sendJson(res, 200, {
          success: true,
          blogs: formatted,
          stats: { total, published, drafts }
        });
      } else {
        // Public gets ONLY published blogs
        const publishedBlogs = db
          .prepare("SELECT * FROM blogs WHERE status = 'published' ORDER BY id DESC")
          .all();
        const formatted = publishedBlogs.map(formatBlogRecord);
        return sendJson(res, 200, { success: true, blogs: formatted });
      }
    }

    // Single blog detail: /api/blogs/:idOrSlug
    const blogDetailMatch = pathname.match(/^\/api\/blogs\/([^/]+)$/);
    if (blogDetailMatch) {
      const idOrSlug = blogDetailMatch[1];

      // GET /api/blogs/:idOrSlug
      if (method === 'GET') {
        let blog = null;
        if (/^\d+$/.test(idOrSlug)) {
          blog = db.prepare('SELECT * FROM blogs WHERE id = ?').get(parseInt(idOrSlug, 10));
        } else {
          blog = db.prepare('SELECT * FROM blogs WHERE slug = ?').get(idOrSlug);
        }

        if (!blog) {
          return sendJson(res, 404, { error: 'Blog post not found.' });
        }

        // If blog is draft and user is not admin, hide it
        if (blog.status === 'draft' && !user) {
          return sendJson(res, 404, { error: 'Blog post not found or unpublished.' });
        }

        return sendJson(res, 200, { success: true, blog: formatBlogRecord(blog) });
      }

      // PUT /api/blogs/:id - Update blog
      if (method === 'PUT') {
        if (!user) return sendJson(res, 401, { error: 'Unauthorized.' });
        const blogId = parseInt(idOrSlug, 10);
        if (isNaN(blogId)) return sendJson(res, 400, { error: 'Invalid blog ID.' });

        const existing = db.prepare('SELECT * FROM blogs WHERE id = ?').get(blogId);
        if (!existing) return sendJson(res, 404, { error: 'Blog post not found.' });

        const body = await parseJson(req);
        const {
          title,
          slug,
          category,
          featured_image,
          featuredImage,
          excerpt,
          content,
          read_time,
          readTime,
          author,
          date,
          seo_title,
          seoTitle,
          seo_description,
          seoDescription,
          key_takeaways,
          keyTakeaways,
          tags,
          status
        } = body;

        const finalTitle = title !== undefined ? title : existing.title;
        if (!finalTitle || !finalTitle.trim()) {
          return sendJson(res, 400, { error: 'Blog title is required.' });
        }

        const validStatus = status !== undefined
          ? (status === 'draft' ? 'draft' : 'published')
          : existing.status;

        const finalSlug = slug !== undefined
          ? ensureUniqueBlogSlug(slug || finalTitle, blogId)
          : existing.slug;

        const finalImage = featuredImage !== undefined ? featuredImage : (featured_image !== undefined ? featured_image : existing.featured_image);
        const finalExcerpt = excerpt !== undefined ? excerpt : existing.excerpt;
        const finalCategory = category !== undefined ? category.trim() : existing.category;
        const finalReadTime = readTime !== undefined ? readTime : (read_time !== undefined ? read_time : existing.read_time);
        const finalAuthor = author !== undefined ? author : existing.author;
        const finalDate = date !== undefined ? date : existing.date;
        const finalSeoTitle = seoTitle !== undefined ? seoTitle : (seo_title !== undefined ? seo_title : existing.seo_title);
        const finalSeoDesc = seoDescription !== undefined ? seoDescription : (seo_description !== undefined ? seo_description : existing.seo_description);

        const rawContent = content !== undefined ? content : existing.content;
        const finalContent = Array.isArray(rawContent) ? JSON.stringify(rawContent) : (rawContent || '');

        const rawTakeaways = keyTakeaways !== undefined ? keyTakeaways : (key_takeaways !== undefined ? key_takeaways : existing.key_takeaways);
        const finalTakeaways = Array.isArray(rawTakeaways) ? JSON.stringify(rawTakeaways) : (rawTakeaways || '[]');

        const rawTags = tags !== undefined ? tags : existing.tags;
        const finalTags = Array.isArray(rawTags) ? JSON.stringify(rawTags) : (rawTags || '[]');

        const now = new Date().toISOString();

        db.prepare(`
          UPDATE blogs SET
            title = ?,
            slug = ?,
            category = ?,
            featured_image = ?,
            excerpt = ?,
            content = ?,
            read_time = ?,
            author = ?,
            date = ?,
            seo_title = ?,
            seo_description = ?,
            key_takeaways = ?,
            tags = ?,
            status = ?,
            updated_at = ?
          WHERE id = ?
        `).run(
          finalTitle.trim(),
          finalSlug,
          finalCategory || 'SAP Strategy',
          finalImage || '',
          finalExcerpt || '',
          finalContent,
          finalReadTime || '6 min read',
          finalAuthor || 'ZisanTech Enterprise Team',
          finalDate || new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
          finalSeoTitle || finalTitle,
          finalSeoDesc || finalExcerpt || '',
          finalTakeaways,
          finalTags,
          validStatus,
          now,
          blogId
        );

        const updated = db.prepare('SELECT * FROM blogs WHERE id = ?').get(blogId);
        return sendJson(res, 200, { success: true, blog: formatBlogRecord(updated) });
      }

      // DELETE /api/blogs/:id
      if (method === 'DELETE') {
        if (!user) return sendJson(res, 401, { error: 'Unauthorized.' });
        const blogId = parseInt(idOrSlug, 10);
        if (isNaN(blogId)) return sendJson(res, 400, { error: 'Invalid blog ID.' });

        const existing = db.prepare('SELECT id FROM blogs WHERE id = ?').get(blogId);
        if (!existing) return sendJson(res, 404, { error: 'Blog post not found.' });

        db.prepare('DELETE FROM blogs WHERE id = ?').run(blogId);
        return sendJson(res, 200, { success: true, message: 'Blog deleted successfully.' });
      }

      // PATCH /api/blogs/:id/status (toggle draft/published)
      if (method === 'PATCH') {
        if (!user) return sendJson(res, 401, { error: 'Unauthorized.' });
        const blogId = parseInt(idOrSlug, 10);
        if (isNaN(blogId)) return sendJson(res, 400, { error: 'Invalid blog ID.' });

        const body = await parseJson(req);
        const newStatus = body.status === 'draft' ? 'draft' : 'published';

        db.prepare('UPDATE blogs SET status = ?, updated_at = ? WHERE id = ?').run(
          newStatus,
          new Date().toISOString(),
          blogId
        );

        return sendJson(res, 200, { success: true, status: newStatus });
      }
    }

    // POST /api/blogs - Create new blog
    if (pathname === '/api/blogs' && method === 'POST') {
      if (!user) return sendJson(res, 401, { error: 'Unauthorized.' });

      const body = await parseJson(req);
      const {
        title,
        slug,
        category,
        featured_image,
        excerpt,
        content,
        read_time,
        author,
        date,
        seo_title,
        seo_description,
        key_takeaways,
        tags,
        status
      } = body;

      if (!title || !title.trim()) {
        return sendJson(res, 400, { error: 'Blog title is required.' });
      }

      const validStatus = status === 'draft' ? 'draft' : 'published';
      const finalSlug = ensureUniqueBlogSlug(slug || title);
      const now = new Date().toISOString();

      const finalContent = Array.isArray(content) ? JSON.stringify(content) : (content || '');
      const finalTakeaways = Array.isArray(key_takeaways) ? JSON.stringify(key_takeaways) : (key_takeaways || '[]');
      const finalTags = Array.isArray(tags) ? JSON.stringify(tags) : (tags || '[]');

      const result = db.prepare(`
        INSERT INTO blogs (
          title, slug, category, featured_image, excerpt, content, read_time, author, date,
          seo_title, seo_description, key_takeaways, tags, status, created_at, updated_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).run(
        title.trim(),
        finalSlug,
        (category || 'SAP Strategy').trim(),
        featured_image || '',
        excerpt || '',
        finalContent,
        read_time || '6 min read',
        author || 'ZisanTech Enterprise Team',
        date || new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        seo_title || title,
        seo_description || excerpt || '',
        finalTakeaways,
        finalTags,
        validStatus,
        now,
        now
      );

      const created = db.prepare('SELECT * FROM blogs WHERE id = ?').get(result.lastInsertRowid);
      return sendJson(res, 201, { success: true, blog: formatBlogRecord(created) });
    }

    // =========================================================================
    // 3. CUSTOM GALLERY POSTS MANAGEMENT ROUTES
    // =========================================================================

    // GET /api/gallery - List gallery posts
    if (pathname === '/api/gallery' && method === 'GET') {
      if (user) {
        // Admin gets all gallery posts
        const allPosts = db.prepare('SELECT * FROM gallery_posts ORDER BY id DESC').all();
        const total = allPosts.length;
        const published = allPosts.filter((g) => g.status === 'published').length;
        const drafts = allPosts.filter((g) => g.status === 'draft').length;

        const formatted = allPosts.map(formatGalleryRecord);
        return sendJson(res, 200, {
          success: true,
          posts: formatted,
          stats: { total, published, drafts }
        });
      } else {
        // Public gets ONLY published gallery posts
        const publishedPosts = db
          .prepare("SELECT * FROM gallery_posts WHERE status = 'published' ORDER BY id DESC")
          .all();
        const formatted = publishedPosts.map(formatGalleryRecord);
        return sendJson(res, 200, { success: true, posts: formatted });
      }
    }

    // Single gallery post: /api/gallery/:id
    const galleryDetailMatch = pathname.match(/^\/api\/gallery\/(\d+)$/);
    if (galleryDetailMatch) {
      const postId = parseInt(galleryDetailMatch[1], 10);

      // GET /api/gallery/:id
      if (method === 'GET') {
        const post = db.prepare('SELECT * FROM gallery_posts WHERE id = ?').get(postId);
        if (!post) {
          return sendJson(res, 404, { error: 'Gallery post not found.' });
        }
        if (post.status === 'draft' && !user) {
          return sendJson(res, 404, { error: 'Gallery post not found.' });
        }
        return sendJson(res, 200, { success: true, post: formatGalleryRecord(post) });
      }

      // PUT /api/gallery/:id - Update gallery post
      if (method === 'PUT') {
        if (!user) return sendJson(res, 401, { error: 'Unauthorized.' });
        const existing = db.prepare('SELECT * FROM gallery_posts WHERE id = ?').get(postId);
        if (!existing) return sendJson(res, 404, { error: 'Gallery post not found.' });

        const body = await parseJson(req);
        const { title, description, category, cover_image, coverImage, images, date, status } = body;

        const finalTitle = title !== undefined ? title : existing.title;
        if (!finalTitle || !finalTitle.trim()) {
          return sendJson(res, 400, { error: 'Gallery title is required.' });
        }

        const validStatus = status !== undefined
          ? (status === 'draft' ? 'draft' : 'published')
          : existing.status;

        const rawImages = images !== undefined ? images : JSON.parse(existing.images || '[]');
        const imgArray = Array.isArray(rawImages) ? rawImages : [];
        const finalCover = coverImage !== undefined
          ? coverImage
          : (cover_image !== undefined ? cover_image : existing.cover_image || (imgArray.length > 0 ? imgArray[0] : ''));
        const finalDesc = description !== undefined ? description : existing.description;
        const finalCategory = category !== undefined ? category.trim() : existing.category;
        const finalDate = date !== undefined ? date : existing.date;
        const now = new Date().toISOString();

        db.prepare(`
          UPDATE gallery_posts SET
            title = ?,
            description = ?,
            category = ?,
            cover_image = ?,
            images = ?,
            date = ?,
            status = ?,
            updated_at = ?
          WHERE id = ?
        `).run(
          finalTitle.trim(),
          finalDesc || '',
          finalCategory || 'Enterprise Project',
          finalCover,
          JSON.stringify(imgArray),
          finalDate || new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
          validStatus,
          now,
          postId
        );

        const updated = db.prepare('SELECT * FROM gallery_posts WHERE id = ?').get(postId);
        return sendJson(res, 200, { success: true, post: formatGalleryRecord(updated) });
      }

      // DELETE /api/gallery/:id
      if (method === 'DELETE') {
        if (!user) return sendJson(res, 401, { error: 'Unauthorized.' });
        const existing = db.prepare('SELECT id FROM gallery_posts WHERE id = ?').get(postId);
        if (!existing) return sendJson(res, 404, { error: 'Gallery post not found.' });

        db.prepare('DELETE FROM gallery_posts WHERE id = ?').run(postId);
        return sendJson(res, 200, { success: true, message: 'Gallery post deleted.' });
      }

      // PATCH /api/gallery/:id/status
      if (method === 'PATCH') {
        if (!user) return sendJson(res, 401, { error: 'Unauthorized.' });
        const body = await parseJson(req);
        const newStatus = body.status === 'draft' ? 'draft' : 'published';

        db.prepare('UPDATE gallery_posts SET status = ?, updated_at = ? WHERE id = ?').run(
          newStatus,
          new Date().toISOString(),
          postId
        );

        return sendJson(res, 200, { success: true, status: newStatus });
      }
    }

    // POST /api/gallery - Create gallery post
    if (pathname === '/api/gallery' && method === 'POST') {
      if (!user) return sendJson(res, 401, { error: 'Unauthorized.' });

      const body = await parseJson(req);
      const { title, description, category, cover_image, images, date, status } = body;

      if (!title || !title.trim()) {
        return sendJson(res, 400, { error: 'Gallery title is required.' });
      }

      const validStatus = status === 'draft' ? 'draft' : 'published';
      const imgArray = Array.isArray(images) ? images : [];
      const finalCover = cover_image || (imgArray.length > 0 ? imgArray[0] : '');
      const now = new Date().toISOString();

      const result = db.prepare(`
        INSERT INTO gallery_posts (
          title, description, category, cover_image, images, date, status, created_at, updated_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).run(
        title.trim(),
        description || '',
        (category || 'Enterprise Project').trim(),
        finalCover,
        JSON.stringify(imgArray),
        date || new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
        validStatus,
        now,
        now
      );

      const created = db.prepare('SELECT * FROM gallery_posts WHERE id = ?').get(result.lastInsertRowid);
      return sendJson(res, 201, { success: true, post: formatGalleryRecord(created) });
    }

    // =========================================================================
    // 4. IMAGE UPLOAD ROUTE (Supports Single & Multiple Image Uploads)
    // =========================================================================
    if (pathname === '/api/upload' && method === 'POST') {
      if (!user) return sendJson(res, 401, { error: 'Unauthorized.' });

      const body = await parseJson(req);
      const filesToProcess = [];

      // Accept { files: [ { name, type, data } ] } OR single { name, type, data }
      if (Array.isArray(body.files)) {
        filesToProcess.push(...body.files);
      } else if (body.data && body.name) {
        filesToProcess.push(body);
      }

      if (filesToProcess.length === 0) {
        return sendJson(res, 400, { error: 'No files provided for upload.' });
      }

      const allowedMimes = new Set([
        'image/jpeg',
        'image/jpg',
        'image/png',
        'image/webp',
        'image/gif',
        'image/svg+xml'
      ]);

      const savedUrls = [];

      for (const file of filesToProcess) {
        let mime = (file.type || '').toLowerCase();
        let base64Data = file.data || '';

        // If data URL format: data:image/png;base64,....
        if (base64Data.includes(';base64,')) {
          const parts = base64Data.split(';base64,');
          mime = parts[0].replace('data:', '').toLowerCase();
          base64Data = parts[1];
        }

        // Validate MIME type
        if (!allowedMimes.has(mime)) {
          return sendJson(res, 400, {
            error: `Unsupported image format (${mime || 'unknown'}). Allowed: JPG, PNG, WEBP, GIF, SVG.`
          });
        }

        const buffer = Buffer.from(base64Data, 'base64');

        // 10MB limit per file
        if (buffer.length > 10 * 1024 * 1024) {
          return sendJson(res, 400, {
            error: `File ${file.name || 'image'} exceeds the 10MB maximum limit.`
          });
        }

        // Determine extension
        const extMap = {
          'image/jpeg': '.jpg',
          'image/jpg': '.jpg',
          'image/png': '.png',
          'image/webp': '.webp',
          'image/gif': '.gif',
          'image/svg+xml': '.svg'
        };
        const ext = extMap[mime] || path.extname(file.name || '') || '.jpg';
        const cleanName = (file.name || 'image')
          .replace(/\.[^/.]+$/, '')
          .replace(/[^\w-]/g, '_')
          .substring(0, 40);

        const filename = `${cleanName}-${Date.now()}-${Math.random().toString(36).substring(2, 8)}${ext}`;
        const filePath = path.join(UPLOADS_DIR, filename);

        fs.writeFileSync(filePath, buffer);
        savedUrls.push(`/uploads/${filename}`);
      }

      return sendJson(res, 200, {
        success: true,
        urls: savedUrls,
        url: savedUrls[0] // for single-file upload convenience
      });
    }

    // 404 for unhandled API paths
    return sendJson(res, 404, { error: `Endpoint ${pathname} not found.` });
  } catch (err) {
    console.error('[ZisanTech API Error]:', err);
    return sendJson(res, 500, { error: err.message || 'Internal server error.' });
  }
}

/**
 * Format raw SQL blog record for frontend consumption
 */
function formatBlogRecord(b) {
  let content = b.content;
  try {
    const parsed = JSON.parse(b.content);
    if (Array.isArray(parsed)) content = parsed;
  } catch {
    // Keep as string
  }

  let keyTakeaways = [];
  try {
    keyTakeaways = JSON.parse(b.key_takeaways || '[]');
  } catch {}

  let tags = [];
  try {
    tags = JSON.parse(b.tags || '[]');
  } catch {}

  return {
    id: b.id,
    title: b.title,
    slug: b.slug,
    url: `/blog/${b.id}`,
    category: b.category,
    featuredImage: b.featured_image || '',
    image: b.featured_image || '', // compatibility with siteData
    excerpt: b.excerpt || '',
    content: content,
    readTime: b.read_time,
    author: b.author,
    date: b.date,
    seoTitle: b.seo_title || b.title,
    seoDescription: b.seo_description || b.excerpt || '',
    keyTakeaways: keyTakeaways,
    tags: tags,
    status: b.status,
    createdAt: b.created_at,
    updatedAt: b.updated_at
  };
}

/**
 * Format raw SQL gallery record for frontend consumption
 */
function formatGalleryRecord(g) {
  let images = [];
  try {
    images = JSON.parse(g.images || '[]');
  } catch {
    images = [];
  }

  return {
    id: g.id,
    title: g.title,
    description: g.description || '',
    category: g.category || 'Enterprise Architecture',
    coverImage: g.cover_image || (images[0] || ''),
    images: images,
    date: g.date,
    status: g.status,
    createdAt: g.created_at,
    updatedAt: g.updated_at
  };
}
