import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  FileText,
  Images,
  LogOut,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  BarChart3,
  Layers,
  Database
} from 'lucide-react';
import { clearStoredSession, getStoredUser, apiFetch } from '../../admin/api';
import { BlogManager } from './BlogManager';
import { GalleryManager } from './GalleryManager';

export const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const user = getStoredUser();
  const [activeTab, setActiveTab] = useState<'blogs' | 'gallery'>('blogs');

  // Dashboard Stats
  const [blogStats, setBlogStats] = useState({ total: 0, published: 0, drafts: 0 });
  const [galleryStats, setGalleryStats] = useState({ total: 0, published: 0, drafts: 0 });

  const loadStats = async () => {
    try {
      const [blogData, galleryData] = await Promise.all([
        apiFetch<{ stats?: any }>('/api/blogs'),
        apiFetch<{ stats?: any }>('/api/gallery')
      ]);

      if (blogData.stats) setBlogStats(blogData.stats);
      if (galleryData.stats) setGalleryStats(galleryData.stats);
    } catch (err) {
      console.warn('Failed to refresh stats:', err);
    }
  };

  useEffect(() => {
    loadStats();
  }, [activeTab]);

  const handleLogout = async () => {
    try {
      await apiFetch('/api/auth/logout', { method: 'POST' });
    } catch {}
    clearStoredSession();
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-[#F3F7FC] text-slate-800 font-sans flex flex-col">
      {/* =========================================================================
          ADMIN TOP NAVIGATION HEADER
      ========================================================================= */}
      <header className="bg-gradient-to-r from-[#03091e] via-[#04143a] to-[#03091e] text-white border-b border-white/10 sticky top-0 z-40 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          {/* Left: Brand & Admin Badge */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2 group cursor-pointer" title="Return to ZisanTech Home">
              <div className="bg-white px-3 py-1 rounded-lg shadow-sm border border-white/20 flex items-center transition-transform group-hover:scale-105">
                <img
                  src="/zisantech_official_logo.png"
                  alt="ZisanTech"
                  className="h-7 sm:h-8 w-auto object-contain"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/zisantech_logo_transparent.png';
                  }}
                />
              </div>
            </Link>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#087FE5]/20 border border-[#08B9E8]/30 text-[#08B9E8] text-[11px] font-mono font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Admin Management Hub</span>
            </span>
          </div>

          {/* Right: User status & Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* View Live Website Button */}
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-xs text-white font-medium backdrop-blur-md transition-all cursor-pointer"
            >
              <span>View Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {/* User Profile Tag */}
            <div className="hidden md:flex items-center gap-2 pl-3 border-l border-white/15 text-xs">
              <div className="w-7 h-7 rounded-full bg-[#087FE5] text-white font-bold flex items-center justify-center text-[11px] uppercase">
                {user?.username ? user.username.charAt(0) : 'A'}
              </div>
              <div>
                <div className="font-bold text-white leading-none">{user?.username || 'Admin'}</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Enterprise Role</div>
              </div>
            </div>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-rose-600/80 hover:bg-rose-600 text-white text-xs font-bold transition-all shadow-sm cursor-pointer"
              title="Sign Out"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* =========================================================================
          MAIN ADMIN WORKSPACE
      ========================================================================= */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Welcome & System Summary Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0c1e3d] tracking-tight">
              Content Administration & Digital Publishing
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Manage enterprise blog publications, custom gallery showcases, and multi-image uploads.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 shadow-sm font-mono">
            <Database className="w-3.5 h-3.5 text-[#087FE5]" />
            <span>SQLite Database Active • Local Disk Storage</span>
          </div>
        </div>

        {/* Quick KPI Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Card 1: Total Blogs */}
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                Total Blogs
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#0c1e3d] mt-1 font-mono">
                {blogStats.total}
              </div>
              <div className="text-[11px] text-emerald-600 font-semibold mt-1">
                ✓ {blogStats.published} Published Live
              </div>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#087FE5] flex items-center justify-center flex-shrink-0">
              <FileText className="w-6 h-6" />
            </div>
          </div>

          {/* Card 2: Draft Blogs */}
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                Draft Blogs
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#0c1e3d] mt-1 font-mono">
                {blogStats.drafts}
              </div>
              <div className="text-[11px] text-amber-600 font-semibold mt-1">
                Hidden from public view
              </div>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6" />
            </div>
          </div>

          {/* Card 3: Total Gallery Posts */}
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                Gallery Posts
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#0c1e3d] mt-1 font-mono">
                {galleryStats.total}
              </div>
              <div className="text-[11px] text-emerald-600 font-semibold mt-1">
                ✓ {galleryStats.published} Live Showcases
              </div>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
              <Images className="w-6 h-6" />
            </div>
          </div>

          {/* Card 4: Draft Gallery */}
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                Draft Galleries
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#0c1e3d] mt-1 font-mono">
                {galleryStats.drafts}
              </div>
              <div className="text-[11px] text-slate-500 mt-1">
                Unpublished offline drafts
              </div>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-600 flex items-center justify-center flex-shrink-0">
              <Layers className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* =========================================================================
            ADMIN MODULE TABS
        ========================================================================= */}
        <div className="border-b border-slate-200 flex items-center gap-6">
          <button
            onClick={() => setActiveTab('blogs')}
            className={`pb-3.5 text-sm font-bold flex items-center gap-2 border-b-2 transition-all cursor-pointer ${
              activeTab === 'blogs'
                ? 'text-[#063B83] border-[#063B83]'
                : 'text-slate-500 border-transparent hover:text-slate-800'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Blog Posts Management</span>
            <span className="px-2 py-0.5 rounded-full text-[10px] bg-slate-100 text-slate-700">
              {blogStats.total}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('gallery')}
            className={`pb-3.5 text-sm font-bold flex items-center gap-2 border-b-2 transition-all cursor-pointer ${
              activeTab === 'gallery'
                ? 'text-[#063B83] border-[#063B83]'
                : 'text-slate-500 border-transparent hover:text-slate-800'
            }`}
          >
            <Images className="w-4 h-4" />
            <span>Custom Gallery & Projects</span>
            <span className="px-2 py-0.5 rounded-full text-[10px] bg-slate-100 text-slate-700">
              {galleryStats.total}
            </span>
          </button>
        </div>

        {/* Tab Content Display */}
        {activeTab === 'blogs' ? <BlogManager /> : <GalleryManager />}
      </main>

      {/* Admin Footer */}
      <footer className="mt-auto py-5 bg-white border-t border-slate-200 text-center text-xs text-slate-500">
        ZisanTech Solutions • Local Administration Console • Production-grade SQLite Engine
      </footer>
    </div>
  );
};
