import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Images,
  ChevronRight,
  Sparkles,
  Calendar,
  X,
  ChevronLeft,
  ArrowRight,
  Layers,
  ShieldCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface PublicGalleryPost {
  id: number;
  title: string;
  description: string;
  category: string;
  coverImage: string;
  images: string[];
  date: string;
  status: string;
}

export const GalleryPage: React.FC = () => {
  const [posts, setPosts] = useState<PublicGalleryPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Lightbox State
  const [lightboxPost, setLightboxPost] = useState<PublicGalleryPost | null>(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    fetch('/api/gallery')
      .then((res) => res.json())
      .then((data) => {
        if (data.posts && Array.isArray(data.posts)) {
          // Public endpoint returns only published posts
          setPosts(data.posts);
        }
      })
      .catch((err) => {
        console.warn('Failed to load gallery posts:', err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const openLightbox = (post: PublicGalleryPost, initialIndex = 0) => {
    setLightboxPost(post);
    setCurrentImgIndex(initialIndex);
  };

  const closeLightbox = () => {
    setLightboxPost(null);
  };

  const nextImage = () => {
    if (!lightboxPost) return;
    setCurrentImgIndex((prev) => (prev + 1) % lightboxPost.images.length);
  };

  const prevImage = () => {
    if (!lightboxPost) return;
    setCurrentImgIndex(
      (prev) => (prev - 1 + lightboxPost.images.length) % lightboxPost.images.length
    );
  };

  const allCategories = [
    'All',
    ...Array.from(new Set(posts.map((p) => p.category).filter(Boolean)))
  ];

  const filteredPosts =
    selectedCategory === 'All'
      ? posts
      : posts.filter(
          (p) => (p.category || '').toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <div className="bg-[#F3F7FC] min-h-screen selection:bg-[#087FE5] selection:text-white">
      {/* =========================================================================
          HERO BANNER
      ========================================================================= */}
      <section className="bg-gradient-to-r from-[#03091e] via-[#04143a] to-[#03091e] text-white py-20 border-b border-white/10 relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#087FE5]/20 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs text-slate-300 mb-6 font-medium">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#08B9E8] font-bold">Project Gallery</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#08B9E8] text-xs font-bold uppercase tracking-wider">
              <Images className="w-3.5 h-3.5" />
              <span>Enterprise Delivery Showcase</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Custom Gallery & Project Portfolios
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Visual records of our enterprise SAP rollouts, cloud infrastructure deployments,
              collaborative architecture workshops, and client go-live milestones.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          GALLERY POSTS LISTING
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Dynamic Category Filter Pills */}
        {!loading && allCategories.length > 2 && (
          <div className="flex items-center gap-2 overflow-x-auto pb-8 scrollbar-none">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#087FE5] text-white shadow-md shadow-blue-500/20'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {loading ? (
          <div className="py-24 text-center text-slate-500 text-sm">
            <div className="w-8 h-8 border-2 border-[#087FE5] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            Loading enterprise gallery records...
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="py-20 text-center bg-white rounded-3xl border border-slate-200 p-8 space-y-3 max-w-xl mx-auto shadow-sm">
            <Images className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-lg font-bold text-slate-800">No Gallery Showcases Found</h3>
            <p className="text-xs text-slate-500">
              No gallery items in the &quot;{selectedCategory}&quot; category.
            </p>
            {selectedCategory !== 'All' && (
              <button
                onClick={() => setSelectedCategory('All')}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#087FE5] hover:underline pt-2 cursor-pointer"
              >
                <span>View All Categories</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        ) : (
          <div className="space-y-16">
            {filteredPosts.map((post, postIdx) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: postIdx * 0.1 }}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden p-6 sm:p-8 space-y-6"
              >
                {/* Post Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-5">
                  <div>
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <span className="px-3 py-1 rounded-md text-[11px] font-bold bg-[#087FE5]/10 text-[#063B83] uppercase tracking-wider">
                        {post.category}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">• {post.date}</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-[#0c1e3d] leading-snug">
                      {post.title}
                    </h2>
                  </div>

                  <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-xl self-start sm:self-auto flex items-center gap-1.5">
                    <Images className="w-3.5 h-3.5 text-[#087FE5]" />
                    <span>{post.images.length} {post.images.length === 1 ? 'Photo' : 'Photos'}</span>
                  </span>
                </div>

                {/* Description */}
                {post.description && (
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-4xl">
                    {post.description}
                  </p>
                )}

                {/* Multi-Image Grid with Hover Zoom & Click to Open Lightbox */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {post.images.map((imgUrl, imgIdx) => (
                    <motion.div
                      key={imgIdx}
                      whileHover={{ scale: 1.02, y: -3 }}
                      onClick={() => openLightbox(post, imgIdx)}
                      className="aspect-square rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/80 group cursor-pointer relative shadow-sm hover:shadow-lg hover:border-[#087FE5] transition-all"
                    >
                      <img
                        src={imgUrl}
                        alt={`${post.title} - photo ${imgIdx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = '/gallery_thumb1.jpg';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 pointer-events-none">
                        <span className="text-[11px] font-semibold text-white">Click to Expand &rarr;</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* =========================================================================
          INTERACTIVE FULLSCREEN LIGHTBOX MODAL
      ========================================================================= */}
      <AnimatePresence>
        {lightboxPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4 sm:p-8">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-20 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            {lightboxPost.images.length > 1 && (
              <button
                onClick={prevImage}
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-20 cursor-pointer"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>
            )}

            {/* Next Button */}
            {lightboxPost.images.length > 1 && (
              <button
                onClick={nextImage}
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-20 cursor-pointer"
              >
                <ChevronRight className="w-7 h-7" />
              </button>
            )}

            {/* Central Image Card */}
            <div className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center z-10">
              <motion.img
                key={currentImgIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                src={lightboxPost.images[currentImgIndex]}
                alt={lightboxPost.title}
                className="max-w-full max-h-[70vh] object-contain rounded-2xl shadow-2xl border border-white/20"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/gallery_thumb1.jpg';
                }}
              />

              {/* Caption & Counter */}
              <div className="text-center text-white mt-4 space-y-1 max-w-xl">
                <h3 className="text-base font-bold text-white leading-tight">
                  {lightboxPost.title}
                </h3>
                <p className="text-xs text-slate-300 font-mono">
                  Photo {currentImgIndex + 1} of {lightboxPost.images.length} • {lightboxPost.category}
                </p>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
