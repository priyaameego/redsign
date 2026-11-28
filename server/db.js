import { DatabaseSync } from 'node:sqlite';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { hashPassword } from './auth.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.resolve(__dirname, 'data');
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

const DB_PATH = path.resolve(DATA_DIR, 'zisantech.db');
export const db = new DatabaseSync(DB_PATH);

// Enable WAL mode for high performance and concurrency
db.exec('PRAGMA journal_mode = WAL;');
db.exec('PRAGMA foreign_keys = ON;');

/**
 * Initialize Tables
 */
export function initDatabase() {
  // 1. Users Table
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      salt TEXT NOT NULL,
      role TEXT NOT NULL DEFAULT 'admin',
      created_at TEXT NOT NULL
    );
  `);

  // 2. Sessions Table
  db.exec(`
    CREATE TABLE IF NOT EXISTS sessions (
      token TEXT PRIMARY KEY,
      user_id INTEGER NOT NULL,
      expires_at INTEGER NOT NULL,
      created_at TEXT NOT NULL,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );
  `);

  // 3. Blogs Table
  db.exec(`
    CREATE TABLE IF NOT EXISTS blogs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      slug TEXT UNIQUE NOT NULL,
      category TEXT NOT NULL,
      featured_image TEXT,
      excerpt TEXT,
      content TEXT NOT NULL,
      read_time TEXT DEFAULT '6 min read',
      author TEXT DEFAULT 'ZisanTech Enterprise Team',
      date TEXT NOT NULL,
      seo_title TEXT,
      seo_description TEXT,
      key_takeaways TEXT DEFAULT '[]',
      tags TEXT DEFAULT '[]',
      status TEXT NOT NULL DEFAULT 'published',
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    );
  `);

  // 4. Custom Gallery Posts Table
  db.exec(`
    CREATE TABLE IF NOT EXISTS gallery_posts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT,
      category TEXT DEFAULT 'Enterprise Architecture',
      cover_image TEXT,
      images TEXT NOT NULL,
      date TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'published',
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    );
  `);

  // Seed Default Admin Users if not exist
  const seedUsers = [
    { username: 'admin', password: process.env.ADMIN_PASSWORD || 'ZisanTech@2026!' },
    { username: 'admin@zisantech.com', password: 'ZisanTech@2026!' },
    { username: 'info@zisantech.com', password: 'ZisanTech@2026!' },
    { username: 'zisantech', password: 'ZisanTech@2026!' }
  ];

  for (const u of seedUsers) {
    const existing = db.prepare('SELECT id FROM users WHERE username = ?').get(u.username);
    if (!existing) {
      const { hash, salt } = hashPassword(u.password);
      db.prepare(`
        INSERT INTO users (username, password_hash, salt, role, created_at)
        VALUES (?, ?, ?, 'admin', ?)
      `).run(u.username, hash, salt, new Date().toISOString());
      console.log(`[ZisanTech DB] Initialized user: ${u.username}`);
    }
  }

  // Seed Initial Blogs if empty
  const blogCount = db.prepare('SELECT COUNT(*) as count FROM blogs').get();
  if (!blogCount || blogCount.count === 0) {
    seedInitialBlogs();
  }

  // Seed Initial Gallery Posts if empty
  const galleryCount = db.prepare('SELECT COUNT(*) as count FROM gallery_posts').get();
  if (!galleryCount || galleryCount.count === 0) {
    seedInitialGallery();
  }
}

function seedInitialBlogs() {
  const initialBlogs = [
    {
      title: 'How SAP Consulting Helps Businesses Work Smarter',
      slug: 'how-sap-consulting-helps-businesses-work-smarter',
      category: 'SAP Strategy',
      featured_image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
      read_time: '6 min read',
      author: 'ZisanTech Enterprise Team',
      date: 'March 15, 2026',
      excerpt: 'In today’s hyper-competitive global marketplace, operational complexity slows down innovation. Discover how strategic SAP consulting unifies fragmented systems.',
      content: JSON.stringify([
        "Modern enterprises frequently suffer from application sprawl—operating disconnected CRM tools, legacy inventory databases, and siloed accounting spreadsheets. This fragmentation slows decision-making, introduces costly reconciliation errors, and severely limits executive visibility across the global value chain.",
        "Strategic SAP consulting provides the architectural framework necessary to replace disjointed software stacks with a clean, cohesive ERP core. By aligning supply chain operations, financial ledgers, and human capital workflows onto SAP S/4HANA, organizations achieve real-time operational synchronization.",
        "At ZisanTech Solutions, our enterprise consultants focus on business-first digital architectures. We evaluate operational bottlenecks, streamline multi-entity transaction flows, and deploy automated business processes that reduce overhead and provide measurable ROI from Day 1."
      ]),
      seo_title: 'How SAP Consulting Drives Enterprise Efficiency | ZisanTech',
      seo_description: 'Discover how strategic SAP consulting unifies fragmented systems, reduces operational overhead, and drives measurable enterprise growth.',
      key_takeaways: JSON.stringify([
        'Elimination of siloed databases through unified S/4HANA core architectures.',
        'Real-time automated transaction reconciliation and financial consolidation.',
        'Standardized global processes with statutory localized compliance.'
      ]),
      tags: JSON.stringify(['SAP', 'DigitalTransformation', 'EnterpriseERP', 'Consulting']),
      status: 'published'
    },
    {
      title: 'Why Reliable IT Services Matter for Growing Businesses',
      slug: 'why-reliable-it-services-matter-for-growing-businesses',
      category: 'IT Strategy',
      featured_image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
      read_time: '5 min read',
      author: 'ZisanTech Technology Group',
      date: 'February 28, 2026',
      excerpt: 'Infrastructure downtime costs mid-market and enterprise businesses millions annually. Proactive application management and round-the-clock monitoring protect revenue.',
      content: JSON.stringify([
        "Information technology is no longer a back-office support utility; it is the fundamental circulatory system of modern enterprise commerce. When transactional systems falter, business halts immediately—orders cannot ship, invoices cannot clear, and customer trust erodes rapidly.",
        "Mid-market and expanding enterprises cannot afford reactive IT firefighting. A proactive Application Management Service (AMS) model delivers 24/7/365 infrastructure monitoring, automated security patch cycles, and preventative database tuning before bottlenecks escalate into mission-critical outages.",
        "ZisanTech's managed IT services combine strict ITIL governance with automated telemetry to guarantee high system availability, zero unplanned production disruptions, and round-the-clock peace of mind."
      ]),
      seo_title: 'The Critical Business Value of Reliable IT Services | ZisanTech',
      seo_description: 'Learn why proactive managed IT services and 24/7 SLA governance are essential for maintaining continuous enterprise operational resilience.',
      key_takeaways: JSON.stringify([
        'Transitioning from reactive IT firefighting to proactive SLA-governed support.',
        'Continuous automated telemetry to preempt database and network bottlenecks.',
        'Predictable operational expenditure with dedicated technical account governance.'
      ]),
      tags: JSON.stringify(['ITServices', 'ManagedServices', 'CloudResilience', 'AMS']),
      status: 'published'
    },
    {
      title: 'Building Your Career Through Practical SAP Training',
      slug: 'building-your-career-through-practical-sap-training',
      category: 'SAP Careers',
      featured_image: '/blog_sap_training_fresh.jpg',
      read_time: '7 min read',
      author: 'ZisanTech Academic Council',
      date: 'January 22, 2026',
      excerpt: 'Theoretical slide decks do not prepare you for enterprise consulting. Why hands-on sandbox experience, real-world case studies, and business acumen define successful SAP professionals.',
      content: JSON.stringify([
        "Enterprise technology continues to face a massive shortage of qualified, implementation-ready SAP talent. However, companies are increasingly wary of candidates who only memorize theoretical certification dumps without real business understanding.",
        "To excel as an SAP consultant—whether in functional modules like SD, MM, FICO, and PP, or technical paths like ABAP and CPI—you must understand the underlying business problem. A true consultant knows why an organization configures an automatic credit check, how an inventory movement type affects general ledger balance sheets, and what happens when an invoice reference number fails at the tax gateway.",
        "ZisanTech's training academy bridges this critical gap. Our candidates work on live enterprise sandboxes, execute end-to-end business transactions, and navigate actual client edge cases, turning knowledge into career-defining consulting mastery."
      ]),
      seo_title: 'Hands-on SAP Career Development & Training | ZisanTech',
      seo_description: 'Why real-world sandbox practice and business process knowledge are essential for a successful career in SAP enterprise consulting.',
      key_takeaways: JSON.stringify([
        'Live enterprise sandbox access for hands-on configuration experience.',
        'Cross-modular process integration rather than isolated textbook learning.',
        'Direct mentoring from seasoned implementation consultants with live project exposure.'
      ]),
      tags: JSON.stringify(['SAPTraining', 'CareerGrowth', 'SAPConsulting', 'HandsOnLearning']),
      status: 'published'
    },
    {
      title: 'Architecting Clean-Core SAP S/4HANA: Modern Strategies for Agile Enterprises',
      slug: 'architecting-clean-core-sap-s4hana-modern-strategies',
      category: 'SAP Strategy & Architecture',
      featured_image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
      read_time: '8 min read',
      author: 'ZisanTech Enterprise Architecture Board',
      date: 'November 10, 2026',
      excerpt: 'Legacy SAP ECC systems were crippled by excessive custom ABAP modifications. Clean-core architecture on SAP BTP preserves standard ERP code while enabling rapid side-by-side innovation.',
      content: JSON.stringify([
        "For over two decades, enterprise ERP implementations followed a dangerous trend: modifying standard SAP core code directly via custom Z-tables and intrusive user exits. While this solved immediate localized requests, it created catastrophic technical debt that made version upgrades agonizingly slow and astronomically expensive.",
        "The SAP Clean-Core methodology revolutionizes this paradigm. By keeping the central S/4HANA ERP codebase strictly standard and building all bespoke business logic as side-by-side decoupled extensions on SAP Business Technology Platform (BTP), enterprises achieve zero-friction continuous upgrades.",
        "ZisanTech's enterprise architects guide organizations through comprehensive custom code remediation, leveraging SAP Integration Suite and RAP/CAP development frameworks to maintain a clean digital core."
      ]),
      seo_title: 'Clean-Core SAP S/4HANA Architecture Strategy | ZisanTech Insights',
      seo_description: 'Explore how clean-core ERP architectures decouple customizations onto SAP BTP, enabling seamless upgrades and agile enterprise innovation.',
      key_takeaways: JSON.stringify([
        'Zero modifications to standard SAP ERP core code.',
        'Decoupled side-by-side extension development on SAP BTP using RAP and CAP.',
        'Near-zero downtime continuous cloud upgrades without breaking business extensions.'
      ]),
      tags: JSON.stringify(['CleanCore', 'S4HANA', 'SAPBTP', 'EnterpriseArchitecture']),
      status: 'published'
    }
  ];

  const now = new Date().toISOString();
  const insertStmt = db.prepare(`
    INSERT INTO blogs (
      title, slug, category, featured_image, excerpt, content, read_time, author, date,
      seo_title, seo_description, key_takeaways, tags, status, created_at, updated_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  for (const b of initialBlogs) {
    insertStmt.run(
      b.title,
      b.slug,
      b.category,
      b.featured_image,
      b.excerpt,
      b.content,
      b.read_time,
      b.author,
      b.date,
      b.seo_title,
      b.seo_description,
      b.key_takeaways,
      b.tags,
      b.status,
      now,
      now
    );
  }
  console.log(`[ZisanTech DB] Seeded ${initialBlogs.length} initial published blogs.`);
}

function seedInitialGallery() {
  const initialGallery = [
    {
      title: 'Cloud Architecture & Global Data Center Infrastructure',
      description: 'High-availability hybrid cloud architecture deployed across tier-4 data centers for multinational SAP ERP operations.',
      category: 'Cloud Infrastructure',
      cover_image: '/gallery_thumb1.jpg',
      images: JSON.stringify([
        '/gallery_thumb1.jpg',
        '/gallery_thumb4.jpg',
        '/cand_workspace.jpg'
      ]),
      date: 'October 2026',
      status: 'published'
    },
    {
      title: 'Enterprise Technology Consulting & Client Discovery Session',
      description: 'Collaborative architectural sprint with executive stakeholders to map corporate template blueprints and clean-core migration roadmaps.',
      category: 'Enterprise Consulting',
      cover_image: '/gallery_thumb3.jpg',
      images: JSON.stringify([
        '/gallery_thumb3.jpg',
        '/zisantech_meeting_presentation.png',
        '/meeting_room_hd.jpg'
      ]),
      date: 'November 2026',
      status: 'published'
    },
    {
      title: 'Real-Time SAP Analytics & Executive Boardroom Implementation',
      description: 'Unified operational telemetry dashboard connecting shop-floor metrics, financial consolidation, and executive KPI forecasting.',
      category: 'Analytics & Delivery',
      cover_image: '/gallery_thumb5.jpg',
      images: JSON.stringify([
        '/gallery_thumb5.jpg',
        '/gallery_thumb2.jpg',
        '/gallery_thumb6.jpg'
      ]),
      date: 'December 2026',
      status: 'published'
    }
  ];

  const now = new Date().toISOString();
  const insertStmt = db.prepare(`
    INSERT INTO gallery_posts (
      title, description, category, cover_image, images, date, status, created_at, updated_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  for (const g of initialGallery) {
    insertStmt.run(
      g.title,
      g.description,
      g.category,
      g.cover_image,
      g.images,
      g.date,
      g.status,
      now,
      now
    );
  }
  console.log(`[ZisanTech DB] Seeded ${initialGallery.length} initial gallery posts.`);
}
