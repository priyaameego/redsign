import React, { useState, useEffect } from 'react';
import {
  Plus,
  Search,
  Edit2,
  Trash2,
  Eye,
  CheckCircle2,
  Upload,
  X,
  AlertCircle,
  Images,
  Sparkles,
  ExternalLink,
  Layers,
  Calendar,
  Star
} from 'lucide-react';
import { apiFetch, uploadImages } from '../../admin/api';

export interface GalleryPost {
  id: number;
  title: string;
  description?: string;
  category: string;
  coverImage?: string;
  images: string[];
  date: string;
  status: 'published' | 'draft';
  createdAt?: string;
  updatedAt?: string;
}

export const GalleryManager: React.FC = () => {
  const [posts, setPosts] = useState<GalleryPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'published' | 'draft'>('all');

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<GalleryPost | null>(null);
  const [saving, setSaving] = useState(false);
  const [modalError, setModalError] = useState<string | null>(null);

  // Form Fields
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Enterprise Architecture');
  const [coverImage, setCoverImage] = useState('');
  const [images, setImages] = useState<string[]>([]);
  const [date, setDate] = useState(
    new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
  );
  const [status, setStatus] = useState<'published' | 'draft'>('published');
  const [manualImageUrl, setManualImageUrl] = useState('');
  const [uploadingImages, setUploadingImages] = useState(false);

  // Fetch all gallery posts
  const fetchGalleryPosts = async () => {
    setLoading(true);
    try {
      const data = await apiFetch<{ success: boolean; posts: GalleryPost[] }>('/api/gallery');
      setPosts(data.posts || []);
    } catch (err: any) {
      setError(err.message || 'Failed to load gallery posts.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGalleryPosts();
  }, []);

  const suggestedGalleryCategories = Array.from(
    new Set([
      'Enterprise Architecture',
      'S/4HANA Transformation',
      'Cloud Infrastructure',
      'SAP Rollout Projects',
      'System Integrations',
      'Data & Analytics',
      'Client Milestones',
      ...posts.map((p) => p.category).filter(Boolean)
    ])
  );

  const popularGalleryChips = [
    'Enterprise Architecture',
    'S/4HANA Transformation',
    'Cloud Infrastructure',
    'SAP Rollout Projects'
  ];

  // Open Add Modal
  const handleOpenAdd = () => {
    setEditingPost(null);
    setTitle('');
    setDescription('');
    setCategory('Enterprise Architecture');
    setCoverImage('');
    setImages([]);
    setDate(new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }));
    setStatus('published');
    setManualImageUrl('');
    setModalError(null);
    setIsModalOpen(true);
  };

  // Open Edit Modal
  const handleOpenEdit = (post: GalleryPost) => {
    setEditingPost(post);
    setTitle(post.title);
    setDescription(post.description || '');
    setCategory(post.category);
    setCoverImage(post.coverImage || '');
    setImages(post.images || []);
    setDate(post.date);
    setStatus(post.status);
    setManualImageUrl('');
    setModalError(null);
    setIsModalOpen(true);
  };

  // Multi-Image File Upload
  const handleMultiImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploadingImages(true);
    setModalError(null);
    try {
      const fileList = Array.from(files);
      const uploadedUrls = await uploadImages(fileList);
      if (uploadedUrls && uploadedUrls.length > 0) {
        setImages((prev) => {
          const updated = [...prev, ...uploadedUrls];
          if (!coverImage) {
            setCoverImage(updated[0]);
          }
          return updated;
        });
      }
    } catch (err: any) {
      setModalError(err.message || 'Failed to upload images.');
    } finally {
      setUploadingImages(false);
    }
  };

  // Add Manual Image URL
  const handleAddManualUrl = () => {
    if (!manualImageUrl.trim()) return;
    setImages((prev) => {
      const updated = [...prev, manualImageUrl.trim()];
      if (!coverImage) setCoverImage(updated[0]);
      return updated;
    });
    setManualImageUrl('');
  };

  // Remove individual image
  const handleRemoveImage = (imgUrl: string) => {
    setImages((prev) => {
      const updated = prev.filter((u) => u !== imgUrl);
      if (coverImage === imgUrl) {
        setCoverImage(updated[0] || '');
      }
      return updated;
    });
  };

  // Save Gallery Post
  const handleSave = async (e: React.FormEvent, targetStatus?: 'published' | 'draft') => {
    e.preventDefault();
    setModalError(null);

    const finalStatus = targetStatus || status;

    if (!title.trim()) {
      setModalError('Title is required.');
      return;
    }
    if (images.length === 0) {
      setModalError('Please upload or add at least one gallery image.');
      return;
    }

    setSaving(true);
    try {
      const finalCover = coverImage || images[0];

      const payload = {
        title: title.trim(),
        description: description.trim(),
        category: category.trim(),
        cover_image: finalCover,
        images: images,
        date: date.trim(),
        status: finalStatus
      };

      if (editingPost) {
        // Update
        await apiFetch(`/api/gallery/${editingPost.id}`, {
          method: 'PUT',
          body: JSON.stringify(payload)
        });
      } else {
        // Create
        await apiFetch('/api/gallery', {
          method: 'POST',
          body: JSON.stringify(payload)
        });
      }

      setIsModalOpen(false);
      fetchGalleryPosts();
    } catch (err: any) {
      setModalError(err.message || 'Failed to save gallery post.');
    } finally {
      setSaving(false);
    }
  };

  // Delete Gallery Post
  const handleDelete = async (id: number, postTitle: string) => {
    if (!window.confirm(`Are you sure you want to delete gallery post "${postTitle}"?`)) {
      return;
    }

    try {
      await apiFetch(`/api/gallery/${id}`, { method: 'DELETE' });
      setPosts((prev) => prev.filter((p) => p.id !== id));
    } catch (err: any) {
      alert(err.message || 'Failed to delete gallery post.');
    }
  };

  // Toggle Status
  const handleToggleStatus = async (post: GalleryPost) => {
    const newStatus = post.status === 'published' ? 'draft' : 'published';
    try {
      await apiFetch(`/api/gallery/${post.id}/status`, {
        method: 'PATCH',
        body: JSON.stringify({ status: newStatus })
      });
      setPosts((prev) =>
        prev.map((p) => (p.id === post.id ? { ...p, status: newStatus } : p))
      );
    } catch (err: any) {
      alert(err.message || 'Failed to toggle gallery post status.');
    }
  };

  // Filtered List
  const filteredPosts = posts.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.description || '').toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || p.status === statusFilter;
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
              placeholder="Search gallery posts by title, category, or keyword..."
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
                {s} ({posts.filter((p) => (s === 'all' ? true : p.status === s)).length})
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
          <span>New Gallery Post</span>
        </button>
      </div>

      {error && (
        <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4" />
          <span>{error}</span>
        </div>
      )}

      {/* Gallery Cards Grid */}
      {loading ? (
        <div className="py-20 text-center text-slate-500 text-sm bg-white rounded-2xl border border-slate-200">
          <div className="w-8 h-8 border-2 border-[#087FE5] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          Loading gallery records...
        </div>
      ) : filteredPosts.length === 0 ? (
        <div className="py-16 text-center text-slate-500 bg-white rounded-2xl border border-slate-200 space-y-3">
          <Images className="w-10 h-10 text-slate-300 mx-auto" />
          <p className="text-sm font-semibold">No gallery posts found.</p>
          <button
            onClick={handleOpenAdd}
            className="text-xs font-bold text-[#087FE5] hover:underline"
          >
            Create your first custom gallery post &rarr;
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Cover Image & Badges */}
                <div className="relative aspect-video bg-slate-900 overflow-hidden">
                  <img
                    src={post.coverImage || (post.images[0] || '/gallery_thumb1.jpg')}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/gallery_thumb1.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Top Status & Count Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-[#031333]/85 text-white backdrop-blur-md border border-white/20">
                      {post.category}
                    </span>

                    <button
                      onClick={() => handleToggleStatus(post)}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold backdrop-blur-md transition-all cursor-pointer ${
                        post.status === 'published'
                          ? 'bg-emerald-500/90 text-white'
                          : 'bg-amber-500/90 text-white'
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                      <span className="capitalize">{post.status}</span>
                    </button>
                  </div>

                  {/* Bottom Photo Count */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-[11px] font-mono text-slate-200">
                    <Images className="w-3.5 h-3.5" />
                    <span>{post.images.length} {post.images.length === 1 ? 'Photo' : 'Photos'}</span>
                  </div>
                  <div className="absolute bottom-3 right-3 text-[11px] font-mono text-slate-300">
                    {post.date}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-2">
                  <h4 className="font-bold text-slate-900 text-base leading-snug group-hover:text-[#087FE5] transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  {post.description && (
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {post.description}
                    </p>
                  )}

                  {/* Mini Thumbnails Strip */}
                  {post.images.length > 1 && (
                    <div className="flex items-center gap-1.5 pt-2 overflow-x-auto">
                      {post.images.slice(0, 5).map((img, i) => (
                        <div
                          key={i}
                          className="w-10 h-10 rounded-md overflow-hidden bg-slate-100 flex-shrink-0 border border-slate-200"
                        >
                          <img
                            src={img}
                            alt=""
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.currentTarget as HTMLImageElement).src = '/gallery_thumb1.jpg';
                            }}
                          />
                        </div>
                      ))}
                      {post.images.length > 5 && (
                        <span className="text-[10px] text-slate-400 font-mono">
                          +{post.images.length - 5}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Actions Footer */}
              <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <a
                  href="/gallery"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#087FE5] hover:underline inline-flex items-center gap-1"
                >
                  <span>View Public Gallery</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleOpenEdit(post)}
                    className="p-1.5 rounded-lg text-slate-500 hover:text-[#063B83] hover:bg-slate-200/60 transition-colors cursor-pointer"
                    title="Edit gallery post"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => handleDelete(post.id, post.title)}
                    className="p-1.5 rounded-lg text-slate-500 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                    title="Delete gallery post"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* =========================================================================
          CREATE / EDIT GALLERY POST MODAL
      ========================================================================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/70 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden my-auto animate-fade-in">
            {/* Modal Header */}
            <div className="p-6 bg-gradient-to-r from-[#03091e] via-[#04143a] to-[#03091e] text-white flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#08B9E8]">
                  {editingPost ? `Edit Post • ID #${editingPost.id}` : 'New Gallery Post'}
                </span>
                <h3 className="text-xl font-extrabold text-white">
                  {editingPost ? 'Update Custom Gallery Post' : 'Create Custom Gallery Post'}
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

              {/* Title & Category */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Gallery Post Title <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. S/4HANA Cloud Implementation Milestone Celebration"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#087FE5] focus:ring-2 focus:ring-[#087FE5]/15"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Category / Section
                    </label>
                    <span className="text-[10px] text-[#087FE5] font-semibold">Custom / Typeable</span>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      list="gallery-category-options"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      placeholder="e.g. Cloud Infrastructure"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#087FE5]"
                    />
                    <datalist id="gallery-category-options">
                      {suggestedGalleryCategories.map((cat) => (
                        <option key={cat} value={cat} />
                      ))}
                    </datalist>
                  </div>
                  {/* Quick Select Chips */}
                  <div className="mt-2 flex flex-wrap gap-1">
                    {popularGalleryChips.map((chip) => (
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
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Description / Story
                </label>
                <textarea
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Detailed description of the project milestone, client workshop, architecture review, or technology delivery event..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#087FE5] focus:ring-2 focus:ring-[#087FE5]/15"
                />
              </div>

              {/* Multiple Image Upload Section */}
              <div className="p-6 rounded-2xl bg-[#f8fafc] border border-slate-200 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                      <Images className="w-4 h-4 text-[#087FE5]" />
                      <span>Multiple Photo Gallery Upload ({images.length} added)</span>
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Select one or multiple image files (JPG, PNG, WEBP). Click any photo to set it as Cover Image.
                    </p>
                  </div>

                  <label className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#087FE5] to-[#063B83] text-white text-xs font-bold shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 flex-shrink-0">
                    <Upload className="w-3.5 h-3.5" />
                    <span>{uploadingImages ? 'Uploading Photos...' : 'Upload Photos (Multi)'}</span>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleMultiImageUpload}
                      disabled={uploadingImages}
                      className="hidden"
                    />
                  </label>
                </div>

                {/* Uploaded Photos Grid */}
                {images.length > 0 ? (
                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3 pt-2">
                    {images.map((imgUrl, i) => {
                      const isCover = coverImage === imgUrl;
                      return (
                        <div
                          key={i}
                          className={`group relative aspect-square rounded-xl overflow-hidden border-2 bg-slate-900 transition-all ${
                            isCover ? 'border-[#087FE5] ring-2 ring-[#087FE5]/30' : 'border-slate-200'
                          }`}
                        >
                          <img
                            src={imgUrl}
                            alt=""
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.currentTarget as HTMLImageElement).src = '/gallery_thumb1.jpg';
                            }}
                          />

                          {/* Cover Image Indicator */}
                          {isCover && (
                            <span className="absolute top-1 left-1 px-1.5 py-0.5 rounded bg-[#087FE5] text-white text-[9px] font-bold shadow-md flex items-center gap-1">
                              <Star className="w-2.5 h-2.5 fill-current" /> Cover
                            </span>
                          )}

                          {/* Hover Overlay with Action Buttons */}
                          <div className="absolute inset-0 bg-slate-900/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-1.5">
                            <div className="flex justify-end">
                              <button
                                type="button"
                                onClick={() => handleRemoveImage(imgUrl)}
                                className="w-6 h-6 rounded-full bg-rose-600/90 text-white flex items-center justify-center hover:bg-rose-700"
                                title="Remove photo"
                              >
                                <X className="w-3.5 h-3.5" />
                              </button>
                            </div>

                            {!isCover && (
                              <button
                                type="button"
                                onClick={() => setCoverImage(imgUrl)}
                                className="w-full py-1 rounded bg-[#087FE5] text-white text-[10px] font-bold hover:bg-[#0664B5] transition-colors"
                              >
                                Set Cover
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="py-8 text-center text-slate-400 border-2 border-dashed border-slate-300 rounded-xl">
                    <Images className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                    <p className="text-xs">No photos added yet. Use the upload button above.</p>
                  </div>
                )}

                {/* Manual URL input fallback */}
                <div className="pt-2 flex items-center gap-2">
                  <input
                    type="text"
                    value={manualImageUrl}
                    onChange={(e) => setManualImageUrl(e.target.value)}
                    placeholder="Or paste an image URL here (/gallery_thumb1.jpg or https://...)"
                    className="flex-1 px-3 py-2 rounded-lg border border-slate-200 text-xs font-mono focus:outline-none focus:border-[#087FE5]"
                  />
                  <button
                    type="button"
                    onClick={handleAddManualUrl}
                    className="px-4 py-2 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold transition-colors"
                  >
                    Add URL
                  </button>
                </div>
              </div>

              {/* Date & Publication Status */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Display Date
                  </label>
                  <input
                    type="text"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    placeholder="e.g. November 2026"
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
                  {saving ? 'Saving...' : editingPost ? 'Update & Publish' : 'Publish Live Gallery'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
