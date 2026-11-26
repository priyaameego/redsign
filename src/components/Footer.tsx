import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  BookOpen,
  Phone,
  Mail,
  ChevronUp,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

// Circular Minimal Social Icons
const TwitterIcon = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const FacebookIcon = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const LinkedInIcon = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.91 0-1.64.73-1.64 1.64s.73 1.64 1.64 1.64 1.64-.73 1.64-1.64-.73-1.64-1.64-1.64Z" />
  </svg>
);

const InstagramIcon = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const [galleryImages, setGalleryImages] = useState([
    { src: '/gallery_thumb1.jpg', label: 'Cloud Architecture' },
    { src: '/gallery_thumb2.jpg', label: 'Semiconductor Hardware' },
    { src: '/gallery_thumb3.jpg', label: 'Consulting Delivery' },
    { src: '/gallery_thumb4.jpg', label: 'Server Infrastructure' },
    { src: '/gallery_thumb5.jpg', label: 'Process Analytics' },
    { src: '/gallery_thumb6.jpg', label: 'Enterprise Hub' }
  ]);

  useEffect(() => {
    fetch('/api/gallery')
      .then((res) => res.json())
      .then((data) => {
        if (data.posts && Array.isArray(data.posts) && data.posts.length > 0) {
          const dynamicItems: { src: string; label: string }[] = [];
          data.posts.forEach((post: any) => {
            if (post.coverImage) {
              dynamicItems.push({ src: post.coverImage, label: post.title });
            }
            if (Array.isArray(post.images)) {
              post.images.forEach((img: string) => {
                if (dynamicItems.length < 6 && img !== post.coverImage) {
                  dynamicItems.push({ src: img, label: post.title });
                }
              });
            }
          });

          if (dynamicItems.length > 0) {
            const defaults = [
              { src: '/gallery_thumb1.jpg', label: 'Cloud Architecture' },
              { src: '/gallery_thumb2.jpg', label: 'Semiconductor Hardware' },
              { src: '/gallery_thumb3.jpg', label: 'Consulting Delivery' },
              { src: '/gallery_thumb4.jpg', label: 'Server Infrastructure' },
              { src: '/gallery_thumb5.jpg', label: 'Process Analytics' },
              { src: '/gallery_thumb6.jpg', label: 'Enterprise Hub' }
            ];
            const combined = [...dynamicItems, ...defaults].slice(0, 6);
            setGalleryImages(combined);
          }
        }
      })
      .catch(() => {});
  }, []);

  return (
    <footer className="relative w-full bg-[#1b1d22] text-[#9ca3af] font-sans border-t border-slate-700/60 overflow-hidden">
      
      {/* =========================================================================
          ENTERPRISE IT CONSULTING BACKGROUND ANIMATION (Circuit Grid + Data Pulses)
      ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        
        {/* 1. Interactive Tech Circuit SVG Grid with Live Glowing Data Pulses */}
        <svg 
          className="absolute inset-0 w-full h-full opacity-[0.14]" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="it-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(8, 185, 232, 0.45)" strokeWidth="0.8" />
              <circle cx="0" cy="0" r="1.5" fill="rgba(8, 127, 229, 0.7)" />
            </pattern>
            {/* Horizontal Data Line Gradient */}
            <linearGradient id="data-pulse" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#08B9E8" stopOpacity="0.9" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#it-grid)" />
        </svg>

        {/* 2. Flowing Data Streams (Horizontal & Vertical Glowing Rays) */}
        <motion.div
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
          className="absolute top-[28%] left-0 w-80 h-[1.5px] bg-gradient-to-r from-transparent via-[#08B9E8] to-transparent shadow-[0_0_12px_#08B9E8]"
        />

        <motion.div
          animate={{ x: ['200%', '-100%'] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear', delay: 2 }}
          className="absolute top-[68%] left-0 w-96 h-[1.5px] bg-gradient-to-r from-transparent via-[#087FE5] to-transparent shadow-[0_0_12px_#087FE5]"
        />

        <motion.div
          animate={{ y: ['-100%', '200%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear', delay: 1 }}
          className="absolute top-0 left-[22%] w-[1.5px] h-60 bg-gradient-to-b from-transparent via-[#08B9E8] to-transparent shadow-[0_0_12px_#08B9E8]"
        />

        <motion.div
          animate={{ y: ['200%', '-100%'] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'linear', delay: 4 }}
          className="absolute top-0 right-[28%] w-[1.5px] h-64 bg-gradient-to-b from-transparent via-[#087FE5] to-transparent shadow-[0_0_12px_#087FE5]"
        />

        {/* 3. Floating ERP Cloud Nodes (Pulsing glowing cyber points) */}
        {[
          { x: '12%', y: '35%', size: 3, delay: 0 },
          { x: '38%', y: '18%', size: 4, delay: 1.2 },
          { x: '62%', y: '42%', size: 3.5, delay: 2.5 },
          { x: '82%', y: '24%', size: 4, delay: 0.8 },
          { x: '91%', y: '65%', size: 3, delay: 1.8 },
          { x: '24%', y: '78%', size: 3.5, delay: 3 }
        ].map((node, idx) => (
          <motion.div
            key={idx}
            style={{ left: node.x, top: node.y }}
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.3, 0.9, 0.3]
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              delay: node.delay,
              ease: 'easeInOut'
            }}
            className="absolute rounded-full bg-[#08B9E8] shadow-[0_0_14px_#08B9E8]"
          >
            <div 
              style={{ width: `${node.size}px`, height: `${node.size}px` }}
              className="rounded-full bg-white" 
            />
          </motion.div>
        ))}

        {/* 4. Deep Ambient Atmospheric Auroras for Enterprise Elegance */}
        <motion.div
          animate={{
            x: [0, 35, -25, 0],
            y: [0, -25, 20, 0],
            scale: [1, 1.15, 0.95, 1],
            opacity: [0.12, 0.22, 0.14, 0.12]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-36 -left-20 w-[460px] h-[460px] rounded-full bg-gradient-to-br from-[#087FE5]/35 via-[#08B9E8]/20 to-transparent blur-[110px]"
        />

        <motion.div
          animate={{
            x: [0, -45, 30, 0],
            y: [0, 35, -20, 0],
            scale: [1, 1.2, 0.9, 1],
            opacity: [0.1, 0.2, 0.12, 0.1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-32 right-12 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#063B83]/35 via-[#087FE5]/20 to-transparent blur-[120px]"
        />
      </div>

      {/* =========================================================================
          BALANCED, CLUTTER-FREE 4-COLUMN PREMIUM FOOTER
          1. Brand & Credentials
          2. Quick Links
          3. Contact & Office
          4. Animated Gallery (3x2 Grid)
      ========================================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12 lg:pt-16 lg:pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* COLUMN 1: Brand Logo, Enterprise Bio, SAP Gold Partner Badge (lg:col-span-4) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 space-y-4"
          >
            {/* White Card Logo */}
            <div>
              <a
                href="#top"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('top');
                }}
                className="inline-block bg-white px-3.5 py-2 rounded-lg shadow-sm hover:opacity-95 transition-all cursor-pointer footer-logo-btn !transform-none !shadow-none"
              >
                <img
                  src="/zisantech_official_logo.png"
                  alt="ZisanTech Solutions"
                  className="h-10 sm:h-11 w-auto object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/zisantech_logo_transparent.png';
                  }}
                />
              </a>
              <div className="h-[2px] w-12 bg-gradient-to-r from-[#087FE5] to-[#08B9E8] mt-2.5" />
            </div>

            {/* Clean Enterprise Bio */}
            <p className="text-xs sm:text-sm text-[#9ca3af] leading-relaxed pr-3 font-normal">
              ZisanTech Solutions is dedicated to empowering enterprises through specialized SAP consulting, modern IT architecture, and practical workforce enablement. We help organizations simplify workflows, integrate digital platforms, and achieve sustainable operational growth.
            </p>

            {/* Circular Social Media Icons */}
            <div className="pt-1 flex items-center gap-2.5 text-slate-400">
              {[
                { icon: <LinkedInIcon />, href: COMPANY_INFO.social.linkedin, label: "LinkedIn" },
                { icon: <TwitterIcon />, href: "https://twitter.com", label: "Twitter" },
                { icon: <FacebookIcon />, href: "https://facebook.com", label: "Facebook" },
                { icon: <InstagramIcon />, href: "https://instagram.com", label: "Instagram" }
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full bg-[#14161a] hover:bg-[#087FE5] text-[#9ca3af] hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-sm border border-slate-700/50"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* COLUMN 2: Quick Links (lg:col-span-2) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-3.5"
          >
            <div>
              <h4 className="text-sm font-bold text-white tracking-wider uppercase">
                Quick Links
              </h4>
              <div className="h-[2px] w-8 bg-[#087FE5] mt-1.5" />
            </div>

            {/* Blogs & Insights Pill Button */}
            <a
              href="#blogs"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('blogs');
              }}
              className="inline-flex items-center justify-between w-full px-2.5 py-1.5 rounded-lg bg-[#087FE5]/15 border border-[#087FE5]/30 text-[#08B9E8] hover:bg-[#087FE5] hover:text-white transition-all text-xs font-semibold group cursor-pointer"
            >
              <span className="flex items-center gap-1.5 truncate">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Tech Insights</span>
              </span>
              <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-[#087FE5]/30 text-white font-bold ml-1">
                Blogs
              </span>
            </a>

            <ul className="space-y-2 text-xs sm:text-sm text-[#9ca3af] pt-1 font-normal">
              {[
                { title: 'About ZisanTech', id: 'about' },
                { title: 'SAP Services', id: 'services' },
                { title: 'SAP Training', id: 'training' },
                { title: 'Industries We Serve', id: 'industries' },
                { title: 'Why Choose Us', id: 'why-choose-zisantech' },
                { title: 'Contact Support', id: 'contact' }
              ].map((item) => (
                <li key={item.title}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(item.id);
                    }}
                    className="hover:text-white hover:translate-x-1 inline-flex items-center gap-1 transition-all duration-150 cursor-pointer"
                  >
                    <span className="text-[#087FE5] text-[10px]">›</span>
                    <span>{item.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* COLUMN 3: Contact Details & Office (lg:col-span-3) */}
          <motion.div
            id="contact"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 space-y-3.5"
          >
            <div>
              <h4 className="text-sm font-bold text-white tracking-wider uppercase">
                Contact Office
              </h4>
              <div className="h-[2px] w-8 bg-[#087FE5] mt-1.5" />
            </div>

            <p className="text-xs text-[#9ca3af] leading-relaxed">
              {COMPANY_INFO.address}
            </p>

            <div className="space-y-2 pt-1 text-xs">
              <a
                href={`tel:${COMPANY_INFO.primaryPhone}`}
                className="flex items-center gap-2.5 text-[#cbd5e1] hover:text-white transition-colors group cursor-pointer"
              >
                <div className="w-5 h-5 rounded flex items-center justify-center bg-[#087FE5] text-white flex-shrink-0 shadow-sm">
                  <Phone className="w-3 h-3" />
                </div>
                <span className="font-semibold text-white tracking-wide group-hover:translate-x-1 transition-transform">
                  {COMPANY_INFO.primaryPhone}
                </span>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.primaryEmail}`}
                className="flex items-center gap-2.5 text-[#cbd5e1] hover:text-white transition-colors group cursor-pointer"
              >
                <div className="w-5 h-5 rounded flex items-center justify-center bg-[#087FE5] text-white flex-shrink-0 shadow-sm">
                  <Mail className="w-3 h-3" />
                </div>
                <span className="text-[#cbd5e1] group-hover:text-white group-hover:translate-x-1 transition-transform truncate">
                  {COMPANY_INFO.primaryEmail}
                </span>
              </a>
            </div>

            {/* Minimal Schedule Consultation CTA */}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('contact');
                }}
                className="inline-flex items-center justify-center gap-2 w-full py-2 px-3 bg-gradient-to-r from-[#087FE5] to-[#08B9E8] hover:from-[#063B83] hover:to-[#087FE5] text-white font-bold text-xs rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer uppercase tracking-wider"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Schedule Consultation</span>
              </a>
            </div>
          </motion.div>

          {/* COLUMN 4: Gallery (3x2 Grid with Smooth Hover Animation) (lg:col-span-3) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3 space-y-3.5"
          >
            <div className="flex items-center justify-between">
              <div>
                <Link
                  to="/gallery"
                  className="text-sm font-bold text-white tracking-wider uppercase hover:text-[#08B9E8] transition-colors"
                >
                  Gallery
                </Link>
                <div className="h-[2px] w-8 bg-[#087FE5] mt-1.5" />
              </div>
              <Link
                to="/gallery"
                className="text-[11px] text-[#08B9E8] hover:underline font-semibold flex items-center gap-1"
              >
                <span>View All</span>
                <span>→</span>
              </Link>
            </div>

            {/* 3x2 Thumbnail Grid with Framer Motion Scale & Border Glow */}
            <div className="grid grid-cols-3 gap-2 pt-1">
              {galleryImages.map((img, i) => (
                <Link
                  to="/gallery"
                  key={i}
                  className="block"
                  title={img.label}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.1 + i * 0.04 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="aspect-square rounded-md overflow-hidden bg-slate-800 border border-slate-700/60 group cursor-pointer shadow-sm hover:border-[#08B9E8] transition-all relative"
                  >
                    <img
                      src={img.src}
                      alt={img.label}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-120"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/zisantech_collaborative_consulting.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-[#087FE5]/0 group-hover:bg-[#087FE5]/20 transition-colors pointer-events-none" />
                  </motion.div>
                </Link>
              ))}
            </div>

            <p className="text-[10px] text-[#9ca3af] leading-tight pt-1">
              Enterprise SAP project delivery &amp; cloud competence.
            </p>
          </motion.div>

        </div>
      </div>

      {/* =========================================================================
          SUB-FOOTER COPYRIGHT BAR
      ========================================================================= */}
      <div className="relative z-10 border-t border-slate-800 bg-[#14161a] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#9ca3af]">
          
          <div className="text-center sm:text-left text-xs text-[#9ca3af]">
            <span>© {new Date().getFullYear()} ZisanTech Solutions. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-4 text-xs text-[#9ca3af]">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('about');
              }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </a>
            <span className="text-slate-600">|</span>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('about');
              }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Service
            </a>
            <span className="text-slate-600">|</span>
            <Link
              to="/admin"
              className="text-slate-500 hover:text-white transition-colors cursor-pointer"
            >
              Admin Portal
            </Link>

            {/* Circular Scroll-To-Top Button */}
            <motion.button
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollTo('top')}
              className="w-8 h-8 rounded-full bg-[#087FE5] hover:bg-[#063B83] text-white flex items-center justify-center shadow-md transition-all cursor-pointer flex-shrink-0 ml-1"
              aria-label="Scroll to top"
            >
              <ChevronUp className="w-4 h-4 stroke-[2.5]" />
            </motion.button>
          </div>

        </div>
      </div>

    </footer>
  );
};
