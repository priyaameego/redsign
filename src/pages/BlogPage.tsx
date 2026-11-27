import React, { useState, useEffect, useMemo } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import {
  Calendar,
  Clock,
  User,
  Tag,
  ArrowRight,
  Share2,
  ChevronRight,
  BookOpen,
  ArrowLeft,
  Search,
  CheckCircle2,
  Layers,
  Filter,
  X,
  Send,
  Building2
} from 'lucide-react';
import { BLOGS, BlogItem } from '../data/siteData';

export const BlogPage: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState<any[]>(BLOGS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Framer Motion Scroll Hooks for Interactive Up/Down Animation
  const { scrollY, scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  const heroImageY = useTransform(scrollY, [0, 600], [0, 110]);
  const heroImageScale = useTransform(scrollY, [0, 600], [1, 1.15]);
  const heroTextY = useTransform(scrollY, [0, 500], [0, 45]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.5]);

  useEffect(() => {
    fetch('/api/blogs')
      .then((res) => res.json())
      .then((data) => {
        if (data.blogs && Array.isArray(data.blogs) && data.blogs.length > 0) {
          const formatted = data.blogs.map((b: any) => ({
            ...b,
            image: b.featuredImage || b.image || '/blog/1.jpeg',
            content: Array.isArray(b.content)
              ? b.content
              : typeof b.content === 'string'
              ? b.content.split('\n\n').filter(Boolean)
              : [String(b.content || '')],
            keyTakeaways: Array.isArray(b.keyTakeaways) ? b.keyTakeaways : [],
            tags: Array.isArray(b.tags) ? b.tags : [],
            url: b.url || `/blog/${b.slug || b.id}`
          }));
          setBlogs(formatted);
        }
      })
      .catch(() => {
        // Fallback to static BLOGS
      });
  }, []);

  const selectedBlog = useMemo(() => {
    if (!id) return null;
    return blogs.find(
      (b) =>
        b.id.toString() === id ||
        b.slug === id ||
        (b.url && (b.url.endsWith(`/${id}`) || b.url === `/blog/${id}`))
    );
  }, [id, blogs]);

  // Dynamic Document Title
  useEffect(() => {
    window.scrollTo(0, 0);
    if (selectedBlog) {
      document.title = `${selectedBlog.title} | ZisanTech Enterprise Insights`;
    } else {
      document.title = 'Blogs & Insights | Enterprise SAP & Digital Architecture | ZisanTech';
    }
  }, [selectedBlog, id]);

  // =========================================================================
  // DETAIL VIEW: Single Blog Post
  // =========================================================================
  if (id) {
    if (!selectedBlog) {
      return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center py-24 px-4 text-center">
          <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#087FE5] flex items-center justify-center mb-4">
            <BookOpen className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2 font-outfit">Article Not Found</h2>
          <p className="text-sm text-slate-500 mb-6 max-w-md">
            The requested technical article could not be located or may have been updated.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#063B83] to-[#087FE5] text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-md hover:shadow-lg"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to All Insights</span>
          </Link>
        </div>
      );
    }

    const relatedBlogs = blogs.filter((b) => b.id !== selectedBlog.id).slice(0, 3);

    return (
      <div className="bg-white text-slate-800 font-sans selection:bg-[#087FE5] selection:text-white relative">
        <motion.div
          style={{ scaleX }}
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#063B83] via-[#087FE5] to-[#38BDF8] z-50 origin-left shadow-[0_0_12px_rgba(56,189,248,0.7)] pointer-events-none"
        />

        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="bg-[#040E26] border-b border-white/10 py-3 relative z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              <Link to="/blog" className="hover:text-white transition-colors">
                Blogs &amp; Insights
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              <span className="text-[#38BDF8] font-semibold truncate max-w-xs sm:max-w-md">
                {selectedBlog.title}
              </span>
            </div>
          </div>
        </nav>

        {/* Single Blog Luxury Header Banner */}
        <section className="bg-slate-950 text-white py-16 sm:py-20 border-b border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#03091e]/95 via-[#041333]/90 to-[#020b1e]/60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(8,127,229,0.25)_0%,transparent_60%)]" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-5">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-xs text-[#38BDF8] hover:text-white font-semibold font-mono tracking-wider uppercase transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Articles</span>
            </Link>

            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#087FE5]/25 text-[#38BDF8] border border-[#087FE5]/40 font-mono uppercase">
                {selectedBlog.category}
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1.5 font-mono">
                <Clock className="w-3.5 h-3.5 text-[#38BDF8]" />
                {selectedBlog.readTime || '5 min read'}
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1.5 font-mono">
                <Calendar className="w-3.5 h-3.5 text-[#38BDF8]" />
                {selectedBlog.date}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-[1.18] font-outfit tracking-tight">
              {selectedBlog.title}
            </h1>

            <div className="pt-3 flex items-center justify-between text-xs text-slate-300 border-t border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#063B83] to-[#087FE5] text-white font-bold flex items-center justify-center shadow-md">
                  ZT
                </div>
                <div>
                  <p className="text-white font-semibold">{selectedBlog.author || 'ZisanTech Enterprise Team'}</p>
                  <p className="text-[11px] text-slate-400 font-mono">Enterprise SAP Practice Lead</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Body */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="space-y-8 text-slate-700 leading-relaxed">
            {selectedBlog.image && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="rounded-3xl overflow-hidden border-2 border-slate-100 shadow-xl max-h-[460px] bg-slate-900"
              >
                <img
                  src={selectedBlog.image}
                  alt={selectedBlog.title}
                  className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.05]"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/hero_sap_enterprise_luxury.jpg';
                  }}
                />
              </motion.div>
            )}

            {selectedBlog.excerpt && (
              <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-50/70 to-slate-50 border-l-4 border-[#087FE5] text-base sm:text-lg font-medium text-[#071B49] italic shadow-xs">
                "{selectedBlog.excerpt}"
              </div>
            )}

            {Array.isArray(selectedBlog.content) ? (
              selectedBlog.content.map((para: string, idx: number) => (
                <p key={idx} className="text-base sm:text-[17px] text-slate-700 leading-relaxed font-normal">
                  {para}
                </p>
              ))
            ) : (
              <p className="text-base sm:text-[17px] text-slate-700 leading-relaxed font-normal">
                {String(selectedBlog.content || '')}
              </p>
            )}

            {/* Key Strategic Takeaways Box */}
            {selectedBlog.keyTakeaways && selectedBlog.keyTakeaways.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="my-10 p-8 rounded-3xl bg-gradient-to-br from-[#061b48] via-[#072460] to-[#041233] text-white border-2 border-[#087FE5]/40 shadow-2xl space-y-4 relative overflow-hidden"
              >
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#38BDF8] font-mono relative z-10">
                  <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" />
                  <span>KEY STRATEGIC TAKEAWAYS FOR LEADERSHIP:</span>
                </div>
                <ul className="space-y-3 relative z-10">
                  {selectedBlog.keyTakeaways.map((takeaway: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-100">
                      <div className="w-5 h-5 rounded-full bg-[#087FE5] text-white flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs shadow-md shadow-[#087FE5]/40">
                        ✓
                      </div>
                      <span className="leading-relaxed font-medium">{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Tags */}
            {selectedBlog.tags && selectedBlog.tags.length > 0 && (
              <div className="pt-8 border-t border-slate-200 flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">Tagged In:</span>
                {selectedBlog.tags.map((tag: string, idx: number) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold font-mono border border-slate-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </article>

        {/* Related Articles Strip */}
        {relatedBlogs.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#071B49] mb-8 font-outfit">
              Related Enterprise Insights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedBlogs.map((b) => (
                <div
                  key={b.id}
                  onClick={() => navigate(b.url || `/blog/${b.slug || b.id}`)}
                  className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#087FE5] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  <div className="space-y-3">
                    <span className="text-xs font-bold text-[#087FE5] font-mono uppercase">{b.category}</span>
                    <h3 className="text-lg font-bold text-[#071B49] group-hover:text-[#087FE5] transition-colors leading-snug font-outfit">
                      {b.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {b.excerpt}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#087FE5] mt-4">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    );
  }

  // =========================================================================
  // LISTING VIEW: Blogs & Insights Directory
  // =========================================================================
  const allCategories = useMemo(() => {
    return ['All', ...Array.from(new Set(blogs.map((b) => b.category).filter(Boolean)))];
  }, [blogs]);

  const filteredBlogs = useMemo(() => {
    return blogs.filter((b) => {
      const matchCat =
        selectedCategory === 'All' ||
        (b.category || '').toLowerCase() === selectedCategory.toLowerCase();
      const matchQuery =
        !searchQuery.trim() ||
        b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (b.tags && b.tags.some((t: string) => t.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchCat && matchQuery;
    });
  }, [blogs, selectedCategory, searchQuery]);

  const featuredBlog = blogs.length > 0 ? blogs[0] : null;

  return (
    <div className="bg-white text-slate-800 font-sans selection:bg-[#087FE5] selection:text-white relative">
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#063B83] via-[#087FE5] to-[#38BDF8] z-50 origin-left shadow-[0_0_12px_rgba(56,189,248,0.7)] pointer-events-none"
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="bg-[#040E26] border-b border-white/10 py-3 relative z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-[#38BDF8] font-semibold">Blogs &amp; Insights</span>
          </div>
        </div>
      </nav>

      {/* Luxury Hero Banner with Parallax */}
      <section className="relative w-full overflow-hidden bg-slate-950 py-16 sm:py-20 lg:py-24 text-white">
        <motion.div
          style={{ y: heroImageY, scale: heroImageScale }}
          className="absolute inset-0 pointer-events-none"
        >
          <img
            src="/hero_sap_slide3.jpg"
            alt="ZisanTech Enterprise Technology Insights"
            className="w-full h-full object-cover object-center filter brightness-[0.55] contrast-[1.12]"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/hero_sap_enterprise_luxury.jpg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#03091e]/95 via-[#041333]/85 to-[#020b1e]/50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(8,127,229,0.30)_0%,transparent_65%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020612]/95 via-transparent to-[#020612]/30" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            style={{ y: heroTextY, opacity: heroOpacity }}
            className="max-w-3xl space-y-5"
          >
            <motion.div
              initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 border border-white/15 text-blue-100 text-xs font-semibold tracking-wider uppercase font-mono"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#08B9E8]"></span>
              <span>THOUGHT LEADERSHIP &amp; ENTERPRISE RESEARCH</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-semibold text-white leading-[1.15] font-outfit tracking-[-0.02em]"
            >
              Strategic Enterprise SAP &amp;{' '}
              <span className="text-[#38BDF8]">
                Technology Insights
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#38BDF8] font-mono"
            >
              S/4HANA MIGRATIONS • STATUTORY COMPLIANCE • CLEAN-CORE BLUEPRINTS • CAREER PATHWAYS
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-sm sm:text-base text-slate-200/90 leading-relaxed max-w-2xl font-normal drop-shadow-sm"
            >
              In-depth architectural analyses, practical ERP configuration methodologies, Indian GST compliance updates, and career advice crafted directly by ZisanTech senior practice leads.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Search & Dynamic Filter Control Bar */}
      <section className="relative z-20 -mt-7 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-4 sm:p-5 rounded-3xl shadow-xl shadow-slate-900/10 border border-slate-200 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          {/* Search Input */}
          <div className="relative flex-grow max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles by topic, keyword, or module..."
              className="w-full pl-11 pr-10 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#087FE5] focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer font-mono ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-[#063B83] to-[#087FE5] text-white shadow-md'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Insight Banner (Shown when no search query is active) */}
      {!searchQuery && selectedCategory === 'All' && featuredBlog && (
        <section className="pt-14 sm:pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-gradient-to-br from-[#020617] via-[#05143A] to-[#063B83] text-white p-8 sm:p-12 lg:p-14 border border-white/15 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-[#087FE5]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl space-y-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#087FE5]/30 text-[#38BDF8] border border-[#087FE5]/40 font-mono uppercase">
                FEATURED ARCHITECTURAL BRIEF • {featuredBlog.category}
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white font-outfit leading-tight">
                <Link
                  to={featuredBlog.url || `/blog/${featuredBlog.slug || featuredBlog.id}`}
                  className="hover:text-[#38BDF8] transition-colors"
                >
                  {featuredBlog.title}
                </Link>
              </h2>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                {featuredBlog.excerpt}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to={featuredBlog.url || `/blog/${featuredBlog.slug || featuredBlog.id}`}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#087FE5] to-[#38BDF8] hover:from-[#38BDF8] hover:to-[#087FE5] text-[#020617] font-bold text-xs tracking-wider uppercase transition-all inline-flex items-center gap-2 shadow-md"
                >
                  <span>READ FULL ARCHITECTURAL GUIDE</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <span className="text-xs text-slate-300 font-mono flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#38BDF8]" />
                  {featuredBlog.readTime}
                </span>
                <span className="text-xs text-slate-300 font-mono flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#38BDF8]" />
                  {featuredBlog.date}
                </span>
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* Main Grid of Articles */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10 pb-4 border-b border-slate-200">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#071B49] font-outfit">
              All Enterprise Perspectives
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Showing {filteredBlogs.length} {filteredBlogs.length === 1 ? 'insight' : 'insights'} in {selectedCategory}
            </p>
          </div>
        </div>

        {filteredBlogs.length === 0 ? (
          <div className="py-16 text-center space-y-3">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-lg font-bold text-slate-700">No matching articles found</h3>
            <p className="text-xs text-slate-500">
              Try adjusting your search query or selecting a different category filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="text-xs font-bold text-[#087FE5] hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog, idx) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{
                  y: -8,
                  borderColor: '#087FE5',
                  boxShadow: '0 20px 35px -10px rgba(8, 127, 229, 0.2)'
                }}
                onClick={() => navigate(blog.url || `/blog/${blog.slug || blog.id}`)}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm transition-all duration-300 flex flex-col justify-between group cursor-pointer relative"
              >
                <div>
                  {/* Article Banner Image */}
                  <div className="relative h-52 sm:h-56 overflow-hidden bg-slate-900">
                    <img
                      src={blog.image || `/blog/${blog.id}.jpeg`}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/hero_sap_enterprise_luxury.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#05143A]/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

                    {/* Category Pill Tag */}
                    <div className="absolute top-3 left-3 bg-[#05143A]/90 backdrop-blur-md text-[#38BDF8] border border-white/20 px-3 py-1 rounded-lg text-[10px] font-bold font-mono uppercase shadow">
                      {blog.category}
                    </div>

                    {/* Reading Time */}
                    <div className="absolute top-3 right-3 bg-white/95 text-[#071B49] px-2.5 py-1 rounded-lg text-[11px] font-bold font-mono shadow flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#087FE5]" />
                      <span>{blog.readTime || '5 min'}</span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 sm:p-7 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                      <span>{blog.author || 'ZisanTech Team'}</span>
                      <span>•</span>
                      <span>{blog.date}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-[#071B49] group-hover:text-[#087FE5] transition-colors leading-snug font-outfit">
                      {blog.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 font-normal">
                      {blog.excerpt}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-6 sm:p-7 pt-0">
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#087FE5]">
                    <span className="font-mono uppercase tracking-wider">Read Full Article</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Quarterly Enterprise Advisory Subscription Banner */}
      <section className="pb-16 sm:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl bg-gradient-to-br from-[#020617] via-[#05143A] to-[#063B83] text-white p-8 sm:p-12 border border-white/15 shadow-2xl relative overflow-hidden"
        >
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#38BDF8] font-mono">
              STAY INFORMED
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-outfit leading-tight">
              Subscribe to Quarterly Enterprise SAP &amp; Cloud Digests
            </h2>
            <p className="text-sm text-slate-200 leading-relaxed font-normal">
              Receive curated technical architectures, S/4HANA migration post-mortems, and statutory tax integration briefs delivered straight to your inbox.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3 max-w-md">
              <input
                type="email"
                placeholder="Enter corporate email address..."
                className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-[#38BDF8] flex-grow"
              />
              <button
                type="button"
                onClick={() => alert('Thank you for subscribing to ZisanTech Enterprise Insights!')}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#087FE5] to-[#38BDF8] text-[#020617] font-bold text-xs tracking-wider uppercase transition-all shadow-md hover:shadow-xl cursor-pointer"
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
