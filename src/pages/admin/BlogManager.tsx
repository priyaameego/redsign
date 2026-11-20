import React, { useState, useEffect } from 'react';
import {
  Plus,
  Search,
  Edit2,
  Trash2,
  Eye,
  CheckCircle2,
  Clock,
  Upload,
  X,
  AlertCircle,
  FileText,
  Sparkles,
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { apiFetch, uploadImages } from '../../admin/api';

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  url: string;
  category: string;
  featuredImage?: string;
  image?: string;
  excerpt?: string;
  content: string | string[];
  readTime: string;
  author: string;
  date: string;
  seoTitle?: string;
  seoDescription?: string;
  keyTakeaways?: string[];
  tags?: string[];
  status: 'published' | 'draft';
  createdAt?: string;
  updatedAt?: string;
}

export const BlogManager: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'published' | 'draft'>('all');

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [saving, setSaving] = useState(false);
  const [modalError, setModalError] = useState<string | null>(null);

  // Form Fields
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [category, setCategory] = useState('SAP Strategy');
  const [featuredImage, setFeaturedImage] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [readTime, setReadTime] = useState('6 min read');
  const [author, setAuthor] = useState('ZisanTech Enterprise Team');
  const [date, setDate] = useState(
    new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
  );
  const [seoTitle, setSeoTitle] = useState('');
  const [seoDescription, setSeoDescription] = useState('');
  const [keyTakeaways, setKeyTakeaways] = useState<string[]>(['']);
  const [tags, setTags] = useState('SAP, Enterprise, Consulting');
  const [status, setStatus] = useState<'published' | 'draft'>('published');
  const [uploadingImage, setUploadingImage] = useState(false);

  // Fetch all blogs (both published and drafts for admin)
  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const data = await apiFetch<{ success: boolean; blogs: BlogPost[] }>('/api/blogs');
      setBlogs(data.blogs || []);
    } catch (err: any) {
      setError(err.message || 'Failed to load blog posts.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Suggested categories derived dynamically from all existing blogs + 13 core enterprise solutions
  const suggestedCategories = Array.from(
    new Set([
      'SAP Strategy',
      'SAP Rollout',
      'SAP AMS',
      'RISE with SAP',
      'SAP Migration',
      'SAP Integration & BTP',
      'SAP Analytics',
      'SAP AI & Automation',
      'CRM Solutions',
      'ERP Solutions',
      'E-Commerce Development',
      'HRMS Solution',
      'Digital Marketing',
      'App & Web Development',
      'Cloud Architecture',
      'Enterprise Technology',
      ...blogs.map((b) => b.category).filter(Boolean)
    ])
  );

  const popularCategoryChips = [
    'SAP Strategy',
    'SAP Rollout',
    'SAP Migration',
    'SAP BTP',
    'Cloud ERP',
    'AI & Automation'
  ];

  // Open Add Modal
  const handleOpenAdd = () => {
    setEditingBlog(null);
    setTitle('');
    setSlug('');
    setCategory('SAP Strategy');
    setFeaturedImage('');
    setExcerpt('');
    setContent('');
    setReadTime('6 min read');
    setAuthor('ZisanTech Enterprise Team');
    setDate(new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }));
    setSeoTitle('');
    setSeoDescription('');
    setKeyTakeaways(['']);
    setTags('SAP, Enterprise, Consulting');
    setStatus('published');
    setModalError(null);
    setIsModalOpen(true);
  };

  // Open Edit Modal
  const handleOpenEdit = (blog: BlogPost) => {
    setEditingBlog(blog);
    setTitle(blog.title);
    setSlug(blog.slug);
    setCategory(blog.category);
    setFeaturedImage(blog.featuredImage || blog.image || '');
    setExcerpt(blog.excerpt || '');
    setContent(Array.isArray(blog.content) ? blog.content.join('\n\n') : blog.content || '');
    setReadTime(blog.readTime || '6 min read');
    setAuthor(blog.author || 'ZisanTech Enterprise Team');
    setDate(blog.date);
    setSeoTitle(blog.seoTitle || blog.title);
    setSeoDescription(blog.seoDescription || blog.excerpt || '');
    setKeyTakeaways(blog.keyTakeaways && blog.keyTakeaways.length > 0 ? blog.keyTakeaways : ['']);
    setTags((blog.tags || []).join(', '));
    setStatus(blog.status);
    setModalError(null);
    setIsModalOpen(true);
  };

  // Auto-generate slug when title changes (if adding or slug was empty)
  const handleTitleChange = (newTitle: string) => {
    setTitle(newTitle);
    if (!editingBlog || !slug) {
      const autoSlug = newTitle
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
      setSlug(autoSlug);
    }
  };

  // Handle Image File Upload
  const handleImageFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploadingImage(true);
    setModalError(null);
    try {
      const urls = await uploadImages([files[0]]);
      if (urls && urls.length > 0) {
        setFeaturedImage(urls[0]);
      }
    } catch (err: any) {
      setModalError(err.message || 'Image upload failed.');
    } finally {
      setUploadingImage(false);
    }
  };

  // Save Blog (Create or Update)
  const handleSave = async (e: React.FormEvent, targetStatus?: 'published' | 'draft') => {
    e.preventDefault();
    setModalError(null);

    const finalStatus = targetStatus || status;

    if (!title.trim()) {
      setModalError('Title is required.');
      return;
    }
    if (!content.trim()) {
      setModalError('Content is required.');
      return;
    }

    setSaving(true);
    try {
      const cleanedTakeaways = keyTakeaways.map((t) => t.trim()).filter(Boolean);
      const cleanedTags = tags
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean);

      // Split content into clean paragraphs if multi-paragraph
      const contentParagraphs = content
        .split(/\n\s*\n/)
        .map((p) => p.trim())
        .filter(Boolean);

      const payload = {
        title: title.trim(),
        slug: slug.trim() || undefined,
        category: category.trim(),
        featured_image: featuredImage.trim(),
        excerpt: excerpt.trim(),
        content: contentParagraphs,
        read_time: readTime.trim(),
        author: author.trim(),
        date: date.trim(),
        seo_title: seoTitle.trim() || title.trim(),
        seo_description: seoDescription.trim() || excerpt.trim(),
        key_takeaways: cleanedTakeaways,
        tags: cleanedTags,
        status: finalStatus
      };

      if (editingBlog) {
        // Update
        await apiFetch(`/api/blogs/${editingBlog.id}`, {
          method: 'PUT',
          body: JSON.stringify(payload)
        });
      } else {
        // Create
        await apiFetch('/api/blogs', {
          method: 'POST',
          body: JSON.stringify(payload)
        });
      }

      setIsModalOpen(false);
      fetchBlogs();
    } catch (err: any) {
      setModalError(err.message || 'Failed to save blog post.');
    } finally {
      setSaving(false);
    }
  };

  // Delete Blog
  const handleDelete = async (id: number, blogTitle: string) => {
    if (!window.confirm(`Are you sure you want to permanently delete "${blogTitle}"?`)) {
      return;
    }

    try {
      await apiFetch(`/api/blogs/${id}`, { method: 'DELETE' });
      setBlogs((prev) => prev.filter((b) => b.id !== id));
    } catch (err: any) {
      alert(err.message || 'Failed to delete blog post.');
    }
  };

  // Toggle Status (Publish / Draft)
  const handleToggleStatus = async (blog: BlogPost) => {
    const newStatus = blog.status === 'published' ? 'draft' : 'published';
    try {
      await apiFetch(`/api/blogs/${blog.id}/status`, {
        method: 'PATCH',
        body: JSON.stringify({ status: newStatus })
      });
      setBlogs((prev) =>
        prev.map((b) => (b.id === blog.id ? { ...b, status: newStatus } : b))
      );
    } catch (err: any) {
      alert(err.message || 'Failed to update blog status.');
    }
  };

  // Filtered List
  const filteredBlogs = blogs.filter((b) => {
    const matchesSearch =
      b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || b.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Top Action & Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-1">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search blogs by title, category, or author..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#087FE5] focus:ring-2 focus:ring-[#087FE5]/15"
            />
          </div>

          {/* Status Filter */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl">
            {(['all', 'published', 'draft'] as const).map((s) => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all cursor-pointer ${
                  statusFilter === s
                    ? 'bg-white text-[#063B83] shadow-sm font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {s} ({blogs.filter((b) => (s === 'all' ? true : b.status === s)).length})
              </button>
            ))}
          </div>
        </div>

        {/* Create Button */}
        <button
          onClick={handleOpenAdd}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#087FE5] to-[#063B83] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 cursor-pointer flex-shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>New Blog Post</span>
        </button>
      </div>

      {error && (
        <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4" />
          <span>{error}</span>
        </div>
      )}

      {/* Blogs Table */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
        {loading ? (
          <div className="py-20 text-center text-slate-500 text-sm">
            <div className="w-8 h-8 border-2 border-[#087FE5] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            Loading blog records...
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="py-16 text-center text-slate-500 space-y-3">
            <FileText className="w-10 h-10 text-slate-300 mx-auto" />
            <p className="text-sm font-semibold">No blog posts found matching your criteria.</p>
            <button
              onClick={handleOpenAdd}
              className="text-xs font-bold text-[#087FE5] hover:underline"
            >
              Create your first blog post &rarr;
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#f8fafc] text-slate-600 font-bold uppercase text-[11px] tracking-wider border-b border-slate-200">
                <tr>
                  <th className="py-3.5 px-4">Article</th>
                  <th className="py-3.5 px-4">Category</th>
                  <th className="py-3.5 px-4">Author & Date</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredBlogs.map((blog) => (
                  <tr key={blog.id} className="hover:bg-slate-50/80 transition-colors">
                    {/* Article title & image */}
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-slate-100 flex-shrink-0 border border-slate-200">
                          {blog.featuredImage || blog.image ? (
                            <img
                              src={blog.featuredImage || blog.image}
                              alt={blog.title}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                (e.currentTarget as HTMLImageElement).src = '/hero_sap_slide1.jpg';
                              }}
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-slate-400">
                              <FileText className="w-5 h-5" />
                            </div>
                          )}
                        </div>
                        <div className="max-w-md">
                          <h4 className="font-bold text-slate-900 leading-snug line-clamp-1 hover:text-[#087FE5] transition-colors">
                            {blog.title}
                          </h4>
                          <span className="text-[11px] font-mono text-slate-400 block mt-0.5 truncate">
                            /blog/{blog.slug}
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* Category */}
                    <td className="py-4 px-4 whitespace-nowrap">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#087FE5]/10 text-[#063B83]">
                        {blog.category}
                      </span>
                    </td>

                    {/* Author & Date */}
                    <td className="py-4 px-4 whitespace-nowrap text-slate-600">
                      <div className="text-xs font-semibold text-slate-800">{blog.author}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{blog.date}</div>
                    </td>

                    {/* Status Pill & Toggle */}
                    <td className="py-4 px-4 whitespace-nowrap">
                      <button
                        onClick={() => handleToggleStatus(blog)}
                        title={`Click to ${blog.status === 'published' ? 'Unpublish' : 'Publish'}`}
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                          blog.status === 'published'
                            ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                            : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                        }`}
                      >
                        <span
                          className={`w-2 h-2 rounded-full ${
                            blog.status === 'published' ? 'bg-emerald-600' : 'bg-amber-500'
                          }`}
                        />
                        <span className="capitalize">{blog.status}</span>
                      </button>
                    </td>

                    {/* Action buttons */}
                    <td className="py-4 px-4 whitespace-nowrap text-right">
                      <div className="inline-flex items-center gap-1.5">
                        {/* View in new tab */}
                        <a
                          href={`/blog/${blog.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg text-slate-500 hover:text-[#087FE5] hover:bg-slate-100 transition-colors"
                          title="Preview public page"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>

                        {/* Edit */}
                        <button
                          onClick={() => handleOpenEdit(blog)}
                          className="p-1.5 rounded-lg text-slate-500 hover:text-[#063B83] hover:bg-slate-100 transition-colors cursor-pointer"
                          title="Edit post"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>

                        {/* Delete */}
                        <button
                          onClick={() => handleDelete(blog.id, blog.title)}
                          className="p-1.5 rounded-lg text-slate-500 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                          title="Delete post"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* =========================================================================
          CREATE / EDIT BLOG MODAL
      ========================================================================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/70 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden my-auto animate-fade-in">
            {/* Modal Header */}
            <div className="p-6 bg-gradient-to-r from-[#03091e] via-[#04143a] to-[#03091e] text-white flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#08B9E8]">
                  {editingBlog ? `Edit Article • ID #${editingBlog.id}` : 'New Enterprise Post'}
                </span>
                <h3 className="text-xl font-extrabold text-white">
                  {editingBlog ? 'Update Blog Post' : 'Create New Blog Post'}
                </h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSave} className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
              {modalError && (
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  <span>{modalError}</span>
                </div>
              )}

              {/* Title & Slug */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Post Title <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    placeholder="e.g. Modernizing Legacy SAP Landscape to Clean Core"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#087FE5] focus:ring-2 focus:ring-[#087FE5]/15"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    URL Slug
                  </label>
                  <input
                    type="text"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    placeholder="e.g. modernizing-legacy-sap-landscape"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-mono text-xs focus:outline-none focus:border-[#087FE5] focus:ring-2 focus:ring-[#087FE5]/15"
                  />
                  <span className="text-[11px] text-slate-400 mt-1 block">
                    Public URL: /blog/{slug || 'untitled-post'}
                  </span>
                </div>
              </div>

              {/* Category, Author, Date, Read Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Category <span className="text-rose-500">*</span>
                    </label>
                    <span className="text-[10px] text-[#087FE5] font-semibold">Custom / Typeable</span>
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      list="blog-category-options"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      placeholder="e.g. SAP Rollout, Cloud, AI..."
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#087FE5] focus:ring-2 focus:ring-[#087FE5]/15"
                      required
                    />
                    <datalist id="blog-category-options">
                      {suggestedCategories.map((cat) => (
                        <option key={cat} value={cat} />
                      ))}
                    </datalist>
                  </div>

                  {/* Quick Select Suggestion Chips */}
                  <div className="mt-2 flex flex-wrap gap-1">
                    {popularCategoryChips.map((chip) => (
                      <button
                        key={chip}
                        type="button"
                        onClick={() => setCategory(chip)}
                        className={`text-[10px] font-medium px-2 py-0.5 rounded transition-colors cursor-pointer ${
                          category === chip
                            ? 'bg-[#087FE5] text-white'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Author
                  </label>
                  <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#087FE5]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Publication Date
                  </label>
                  <input
                    type="text"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#087FE5]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Read Time
                  </label>
                  <input
                    type="text"
                    value={readTime}
                    onChange={(e) => setReadTime(e.target.value)}
                    placeholder="e.g. 6 min read"
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#087FE5]"
                  />
                </div>
              </div>

              {/* Featured Image Upload */}
              <div className="p-5 rounded-2xl bg-[#f8fafc] border border-slate-200 space-y-3">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Featured Image
                </label>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  {featuredImage ? (
                    <div className="relative w-32 h-20 rounded-xl overflow-hidden border-2 border-[#087FE5] bg-slate-900 flex-shrink-0 group">
                      <img
                        src={featuredImage}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => setFeaturedImage('')}
                        className="absolute inset-0 bg-slate-900/70 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity"
                      >
                        <X className="w-5 h-5 text-rose-400" />
                      </button>
                    </div>
                  ) : (
                    <div className="w-32 h-20 rounded-xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center text-slate-400 text-[10px] text-center p-2 flex-shrink-0">
                      <Upload className="w-5 h-5 mb-1" />
                      <span>No image</span>
                    </div>
                  )}

                  <div className="flex-1 space-y-2 w-full">
                    <div className="flex items-center gap-3">
                      <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 hover:border-[#087FE5] text-xs font-bold text-slate-700 shadow-sm transition-all hover:-translate-y-0.5">
                        <Upload className="w-3.5 h-3.5 text-[#087FE5]" />
                        <span>{uploadingImage ? 'Uploading...' : 'Upload Image File'}</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageFileChange}
                          disabled={uploadingImage}
                          className="hidden"
                        />
                      </label>
                      <span className="text-xs text-slate-400">or enter image path / URL below:</span>
                    </div>
                    <input
                      type="text"
                      placeholder="e.g. /blog_sap_training_fresh.jpg or https://..."
                      value={featuredImage}
                      onChange={(e) => setFeaturedImage(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs font-mono focus:outline-none focus:border-[#087FE5]"
                    />
                  </div>
                </div>
              </div>

              {/* Excerpt */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Summary / Excerpt
                </label>
                <textarea
                  rows={2}
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  placeholder="Short, high-impact summary appearing in search cards and top lead paragraph..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#087FE5] focus:ring-2 focus:ring-[#087FE5]/15"
                />
              </div>

              {/* Content Body */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Article Content <span className="text-rose-500">*</span>
                  </label>
                  <span className="text-[11px] text-slate-400">Separate paragraphs with a blank line</span>
                </div>
                <textarea
                  rows={8}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Write full enterprise article content here..."
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-sans leading-relaxed focus:outline-none focus:border-[#087FE5] focus:ring-2 focus:ring-[#087FE5]/15"
                />
              </div>

              {/* Key Takeaways Builder */}
              <div className="p-5 rounded-2xl bg-[#f8fafc] border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Key Strategic Takeaways
                  </label>
                  <button
                    type="button"
                    onClick={() => setKeyTakeaways([...keyTakeaways, ''])}
                    className="text-xs font-bold text-[#087FE5] hover:underline flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Bullet Point</span>
                  </button>
                </div>
                {keyTakeaways.map((takeaway, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#087FE5] w-5">0{idx + 1}.</span>
                    <input
                      type="text"
                      value={takeaway}
                      onChange={(e) => {
                        const copy = [...keyTakeaways];
                        copy[idx] = e.target.value;
                        setKeyTakeaways(copy);
                      }}
                      placeholder={`Key Strategic Takeaway #${idx + 1}`}
                      className="flex-1 px-3 py-2 rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[#087FE5]"
                    />
                    {keyTakeaways.length > 1 && (
                      <button
                        type="button"
                        onClick={() => setKeyTakeaways(keyTakeaways.filter((_, i) => i !== idx))}
                        className="p-1.5 text-slate-400 hover:text-rose-500 rounded-lg"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {/* Tags & Status */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Tags (Comma Separated)
                  </label>
                  <input
                    type="text"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    placeholder="SAP, S4HANA, CleanCore, Cloud"
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#087FE5]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Publication Status
                  </label>
                  <div className="flex items-center gap-3 pt-1">
                    <button
                      type="button"
                      onClick={() => setStatus('published')}
                      className={`flex-1 py-2 px-3 rounded-xl border text-xs font-bold transition-all ${
                        status === 'published'
                          ? 'bg-emerald-500 text-white border-emerald-600 shadow-md'
                          : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      ✓ Publish Live
                    </button>
                    <button
                      type="button"
                      onClick={() => setStatus('draft')}
                      className={`flex-1 py-2 px-3 rounded-xl border text-xs font-bold transition-all ${
                        status === 'draft'
                          ? 'bg-amber-500 text-white border-amber-600 shadow-md'
                          : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      Save as Draft
                    </button>
                  </div>
                </div>
              </div>

              {/* SEO Settings Accordion */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#087FE5]" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    Search Engine Optimization (SEO Metadata)
                  </h4>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs font-semibold text-slate-700">SEO Meta Title</label>
                    <span className="text-[11px] text-slate-400 font-mono">
                      {seoTitle.length}/60 chars
                    </span>
                  </div>
                  <input
                    type="text"
                    value={seoTitle}
                    onChange={(e) => setSeoTitle(e.target.value)}
                    placeholder={title || 'Page title for Google search results'}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[#087FE5]"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs font-semibold text-slate-700">
                      SEO Meta Description
                    </label>
                    <span className="text-[11px] text-slate-400 font-mono">
                      {seoDescription.length}/160 chars
                    </span>
                  </div>
                  <textarea
                    rows={2}
                    value={seoDescription}
                    onChange={(e) => setSeoDescription(e.target.value)}
                    placeholder={excerpt || 'Meta description shown in Google search snippets'}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[#087FE5]"
                  />
                </div>
              </div>
            </form>

            {/* Modal Footer Actions */}
            <div className="p-5 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-100 transition-colors"
              >
                Cancel
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={saving}
                  onClick={(e) => handleSave(e, 'draft')}
                  className="px-5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-bold shadow-sm transition-all"
                >
                  Save as Draft
                </button>

                <button
                  type="button"
                  disabled={saving}
                  onClick={(e) => handleSave(e, 'published')}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#087FE5] to-[#063B83] text-white text-xs font-bold shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 disabled:opacity-50"
                >
                  {saving ? 'Saving...' : editingBlog ? 'Update & Publish' : 'Publish Live Post'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
