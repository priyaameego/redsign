import React from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  ShieldCheck,
  BookOpen,
  Globe2,
  Lock,
  ChevronUp,
  MapPin,
  CalendarCheck
} from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

// Circular Outline / Minimal Social Icons matching the design
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

const WhatsAppIcon = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
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

  const galleryImages = [
    '/gallery_thumb1.jpg',
    '/gallery_thumb2.jpg',
    '/gallery_thumb3.jpg',
    '/gallery_thumb4.jpg',
    '/gallery_thumb5.jpg',
    '/gallery_thumb6.jpg'
  ];

  const FOOTER_INDUSTRIES = [
    'Manufacturing',
    'Retail & Textile',
    'Oil & Gas',
    'Agro Chemical',
    'Steel & Metallurgy',
    'Pharma & Life Sciences'
  ];

  return (
    <footer className="relative w-full bg-[#111622] text-[#9ca3af] font-sans border-t border-slate-800/80 overflow-hidden">
      
      {/* 
        PREMIUM BACKGROUND IMAGE BACKDROP:
        Subtle architectural/circuit image overlay blended with dark enterprise gradient
      */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.07] pointer-events-none mix-blend-luminosity"
        style={{ backgroundImage: `url('/footer-image.png')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0e131d]/90 via-[#111622]/95 to-[#0b0e14] pointer-events-none" />

      {/* =========================================================================
          TOP QUICK CONTACT & CONSULTING STRIP (From Image 1)
      ========================================================================= */}
      <div className="relative z-10 border-b border-slate-800/80 bg-[#161c28]/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            
            {/* Contact Item 1: Phone */}
            <a 
              href={`tel:${COMPANY_INFO.primaryPhone}`} 
              className="flex items-center gap-3.5 group p-2 rounded-xl transition-all duration-200 hover:bg-slate-800/40"
            >
              <div className="w-11 h-11 rounded-xl bg-[#087FE5]/15 border border-[#087FE5]/30 text-[#087FE5] flex items-center justify-center flex-shrink-0 group-hover:bg-[#087FE5] group-hover:text-white transition-all duration-200 shadow-sm">
                <Phone className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400 group-hover:text-[#08B9E8] transition-colors">
                  Talk to an Enterprise Architect
                </p>
                <p className="text-sm font-semibold text-white tracking-wide truncate">
                  {COMPANY_INFO.primaryPhone}
                </p>
              </div>
            </a>

            {/* Contact Item 2: Email */}
            <a 
              href={`mailto:${COMPANY_INFO.primaryEmail}`} 
              className="flex items-center gap-3.5 group p-2 rounded-xl transition-all duration-200 hover:bg-slate-800/40"
            >
              <div className="w-11 h-11 rounded-xl bg-[#087FE5]/15 border border-[#087FE5]/30 text-[#087FE5] flex items-center justify-center flex-shrink-0 group-hover:bg-[#087FE5] group-hover:text-white transition-all duration-200 shadow-sm">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400 group-hover:text-[#08B9E8] transition-colors">
                  Official Consulting Enquiry
                </p>
                <p className="text-sm font-semibold text-white tracking-wide truncate">
                  {COMPANY_INFO.primaryEmail}
                </p>
              </div>
            </a>

            {/* Contact Item 3: Headquarters */}
            <div className="flex items-center gap-3.5 p-2 rounded-xl">
              <div className="w-11 h-11 rounded-xl bg-[#087FE5]/15 border border-[#087FE5]/30 text-[#087FE5] flex items-center justify-center flex-shrink-0 shadow-sm">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                  Headquarters & Delivery Hub
                </p>
                <p className="text-sm font-semibold text-white tracking-wide truncate">
                  {COMPANY_INFO.address}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* =========================================================================
          MAIN 5-COLUMN HIGH-END FOOTER LAYOUT
          Combines Image 1 Content (SAP Gold Partner, ISO 9001, Quick Links with
          Blogs pill, Industries, Corporate Office, Global Delivery Card) 
          + Image 2 Gallery (3x2 thumbnail grid with hover zoom & circular socials)
      ========================================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12 lg:pt-16 lg:pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-7 items-start">
          
          {/* COLUMN 1: Brand Logo, Enterprise Bio, SAP Gold Partner Badge, ISO Cert & Socials (lg:col-span-4) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 space-y-4"
          >
            {/* White Card Container for ZisanTech Brand Logo */}
            <div>
              <a
                href="#top"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('top');
                }}
                className="inline-block bg-white px-3.5 py-2 rounded-lg shadow-sm hover:opacity-95 transition-all cursor-pointer"
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

            {/* ZisanTech Company Bio from Image 1 */}
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pr-3 font-normal">
              ZisanTech Solutions is an enterprise SAP Consulting and Technology Practice. We drive full-lifecycle SAP S/4HANA Cloud implementations, legacy migrations, custom ERP automation, and career-oriented workforce training programs.
            </p>

            {/* Official SAP Gold Partner Certified Partner Badge (Image 1) */}
            <div className="inline-flex items-center gap-3 bg-white px-3 py-1.5 rounded-lg shadow-md border border-slate-200">
              <img
                src="/sap_gold_partner_tight.png"
                alt="SAP Gold Partner"
                className="h-6 w-auto object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/sap_partner_clean.png';
                }}
              />
              <div className="border-l border-slate-300 pl-2.5">
                <span className="block text-[11px] font-bold text-slate-900 leading-none">Certified Partner</span>
                <span className="block text-[9px] font-medium text-slate-600 tracking-wide mt-0.5">Enterprise SAP Delivery</span>
              </div>
            </div>

            {/* ISO 9001:2015 & SAP Delivery Standards Certification Line */}
            <div className="flex items-center gap-2 text-[11px] text-[#08B9E8] font-medium pt-0.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#08B9E8] flex-shrink-0" />
              <span>ISO 9001:2015 & SAP Global Delivery Standards</span>
            </div>

            {/* Circular Social Media Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              {[
                { icon: <WhatsAppIcon />, href: "https://wa.me/918797818499", label: "WhatsApp", color: "hover:bg-[#25D366]" },
                { icon: <LinkedInIcon />, href: COMPANY_INFO.social.linkedin, label: "LinkedIn", color: "hover:bg-[#0077b5]" },
                { icon: <TwitterIcon />, href: "https://twitter.com", label: "Twitter / X", color: "hover:bg-slate-700" },
                { icon: <FacebookIcon />, href: "https://facebook.com", label: "Facebook", color: "hover:bg-[#1877f2]" },
                { icon: <InstagramIcon />, href: "https://instagram.com", label: "Instagram", color: "hover:bg-[#e4405f]" }
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`w-7 h-7 rounded-full bg-[#1b2230] text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-sm border border-slate-700/60 ${s.color}`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* COLUMN 2: Quick Links with Highlighted Blogs & Tech Insights Pill (lg:col-span-2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 space-y-3.5"
          >
            <div>
              <h4 className="text-sm font-bold text-white tracking-wider uppercase">
                Quick Links
              </h4>
              <div className="h-[2px] w-8 bg-[#087FE5] mt-1.5" />
            </div>

            {/* Highlighted Blogs & Tech Insights Pill Button (from Image 1) */}
            <a
              href="#blogs"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('blogs');
              }}
              className="inline-flex items-center justify-between w-full px-2.5 py-1.5 rounded-lg bg-[#087FE5]/15 border border-[#087FE5]/40 text-[#08B9E8] hover:bg-[#087FE5] hover:text-white transition-all duration-200 text-xs font-semibold group cursor-pointer shadow-sm"
            >
              <span className="flex items-center gap-1.5 truncate">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Blogs & Insights</span>
              </span>
              <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-[#087FE5]/40 text-white font-bold ml-1">
                Articles
              </span>
            </a>

            <ul className="space-y-2 text-xs text-slate-400 pt-1 font-normal">
              {[
                { title: 'About ZisanTech', id: 'about' },
                { title: 'SAP Implementations', id: 'services' },
                { title: 'SAP Training', id: 'training' },
                { title: 'Industries We Serve', id: 'industries' },
                { title: 'Why Choose ZisanTech', id: 'why-choose-zisantech' },
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

          {/* COLUMN 3: Industries We Serve (lg:col-span-2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-2 space-y-3.5"
          >
            <div>
              <h4 className="text-sm font-bold text-white tracking-wider uppercase">
                Industries
              </h4>
              <div className="h-[2px] w-8 bg-[#087FE5] mt-1.5" />
            </div>

            <ul className="space-y-2 text-xs text-slate-400 pt-1 font-normal">
              {FOOTER_INDUSTRIES.map((ind) => (
                <li key={ind}>
                  <a
                    href="#industries"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo('industries');
                    }}
                    className="hover:text-white hover:translate-x-1 inline-flex items-center gap-1 transition-all duration-150 cursor-pointer"
                  >
                    <span className="text-[#087FE5] text-[10px]">›</span>
                    <span>{ind}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* COLUMN 4: Corporate Office & Global Delivery Card (lg:col-span-2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-3.5"
          >
            <div>
              <h4 className="text-sm font-bold text-white tracking-wider uppercase">
                Corporate Office
              </h4>
              <div className="h-[2px] w-8 bg-[#087FE5] mt-1.5" />
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              {COMPANY_INFO.address}
            </p>

            <div className="space-y-1.5 pt-1 text-xs">
              <a
                href={`tel:${COMPANY_INFO.primaryPhone}`}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#087FE5] flex-shrink-0" />
                <span className="truncate">{COMPANY_INFO.primaryPhone}</span>
              </a>
              <a
                href={`mailto:${COMPANY_INFO.primaryEmail}`}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#087FE5] flex-shrink-0" />
                <span className="truncate">{COMPANY_INFO.primaryEmail}</span>
              </a>
            </div>

            {/* Global Delivery Capabilities Card (Image 1) */}
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-700/70 shadow-md space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
                <Globe2 className="w-3.5 h-3.5 text-[#08B9E8] flex-shrink-0" />
                <span className="text-[11px] leading-tight">Global Delivery</span>
              </div>
              <p className="text-[10px] text-slate-400 leading-tight">
                Delivering verified SAP consulting for India, Middle East, and worldwide clients.
              </p>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('contact');
                }}
                className="inline-flex items-center justify-center w-full py-1.5 px-2 rounded-lg bg-gradient-to-r from-[#087FE5] to-[#08B9E8] hover:from-[#063B83] hover:to-[#087FE5] text-white text-[10px] font-bold tracking-wider uppercase shadow transition-all cursor-pointer text-center"
              >
                Schedule Consultation
              </a>
            </div>
          </motion.div>

          {/* COLUMN 5: Gallery 3x2 Thumbnail Grid with Hover Zoom (lg:col-span-2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="lg:col-span-2 space-y-3.5"
          >
            <div>
              <h4 className="text-sm font-bold text-white tracking-wider uppercase">
                Gallery
              </h4>
              <div className="h-[2px] w-8 bg-[#087FE5] mt-1.5" />
            </div>

            {/* 3 columns x 2 rows image grid */}
            <div className="grid grid-cols-3 gap-1.5 pt-1">
              {galleryImages.map((src, idx) => (
                <div
                  key={idx}
                  className="aspect-square rounded-md overflow-hidden bg-slate-800 border border-slate-700/70 shadow-sm group cursor-pointer relative"
                >
                  <img
                    src={src}
                    alt={`ZisanTech Portfolio ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-115"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/zisantech_collaborative_consulting.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/20 transition-colors pointer-events-none" />
                </div>
              ))}
            </div>

            <p className="text-[10px] text-slate-400 leading-tight pt-1">
              Enterprise project delivery & technical competence across modern ERP landscape.
            </p>
          </motion.div>

        </div>
      </div>

      {/* =========================================================================
          SUB-FOOTER COPYRIGHT BAR (Pure ZisanTech Enterprise Notice)
      ========================================================================= */}
      <div className="relative z-10 border-t border-slate-800/80 bg-[#0c0f16] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-400 relative">
          
          <div className="text-center md:text-left text-[11px] sm:text-xs">
            <span>© {new Date().getFullYear()} ZisanTech Solutions. All Rights Reserved.</span>
            <span className="hidden sm:inline text-slate-600 mx-2">|</span>
            <span className="text-slate-400 hidden sm:inline">SAP, SAP S/4HANA, and RISE with SAP are registered trademarks of SAP SE.</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs text-slate-400 pr-12 md:pr-14">
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
            <span className="text-slate-600">•</span>
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
            <span className="text-slate-600">•</span>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('contact');
              }}
              className="hover:text-white inline-flex items-center gap-1 transition-colors cursor-pointer"
            >
              <Lock className="w-3 h-3 text-[#087FE5]" />
              <span>Client Portal</span>
            </a>
          </div>

          {/* Circular Scroll-To-Top Button matching design */}
          <button
            onClick={() => scrollTo('top')}
            className="absolute right-4 sm:right-6 bottom-3 w-8 h-8 rounded-full bg-[#087FE5] hover:bg-[#063B83] text-white flex items-center justify-center shadow-lg transition-all cursor-pointer flex-shrink-0"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-4 h-4 stroke-[2.5]" />
          </button>

        </div>
      </div>

    </footer>
  );
};
