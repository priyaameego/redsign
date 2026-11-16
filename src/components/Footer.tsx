import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  BookOpen,
  Globe2,
  Lock,
  Phone,
  Mail,
  ChevronUp
} from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

// Clean Enterprise Brand Social Icons
const TwitterIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const FacebookIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const LinkedInIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.91 0-1.64.73-1.64 1.64s.73 1.64 1.64 1.64 1.64-.73 1.64-1.64-.73-1.64-1.64-1.64Z" />
  </svg>
);

const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const WhatsAppIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12.031 2C6.511 2 2.023 6.488 2.023 12.008c0 1.761.458 3.479 1.33 4.992L2 22l5.133-1.346c1.465.799 3.111 1.22 4.898 1.22 5.52 0 10.008-4.488 10.008-10.008C22.039 6.488 17.551 2 12.031 2zm5.842 14.225c-.243.684-1.416 1.309-1.956 1.389-.523.078-1.205.111-3.666-.889-2.915-1.185-4.809-4.148-4.954-4.341-.145-.193-1.179-1.571-1.179-2.997 0-1.426.747-2.128 1.012-2.418.265-.29.579-.362.772-.362.193 0 .386.002.555.01.179.008.418-.068.654.498.243.58.828 2.022.901 2.167.072.145.121.314.024.507-.097.193-.145.314-.29.483-.145.169-.304.377-.435.507-.145.145-.296.302-.128.59.169.29.749 1.237 1.607 2.002 1.104.984 2.035 1.29 2.325 1.435.29.145.459.121.628-.073.169-.193.724-.845.917-1.135.193-.29.386-.242.652-.145.265.097 1.688.796 1.978.941.29.145.483.217.555.338.072.121.072.701-.171 1.385z" />
  </svg>
);

export const Footer: React.FC = () => {
  // Smooth scroll handler to stay exclusively on the Homepage
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

  const FOOTER_INDUSTRIES = [
    'Manufacturing',
    'Retail & Textile',
    'Oil & Gas',
    'Agro Chemical',
    'Steel & Metallurgy',
    'Pharma & Life Sciences'
  ];

  return (
    <footer className="relative w-full bg-[#171a21] text-slate-300 font-sans border-t border-slate-800 overflow-hidden">
      
      {/* Background Subtle Tech Matrix Watermark */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)`,
          backgroundSize: '28px 28px'
        }}
      />

      {/* Ambient Blue/Cyan Glow for Enterprise Depth */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#087FE5]/10 via-[#08B9E8]/5 to-transparent blur-[120px]" />
        <div className="absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#063B83]/15 via-transparent to-transparent blur-[120px]" />
      </div>

      {/* =========================================================================
          MAIN 4-COLUMN FOOTER LAYOUT (Exact Content + Homepage Smooth Scroll)
      ========================================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 lg:pt-20 lg:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* 1. COLUMN 1: LOGO, CREDENTIALS, SAP GOLD PARTNER & BIO (Span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 space-y-4"
          >
            {/* White Card Logo Container */}
            <div className="inline-block">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#top"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('top');
                }}
                className="inline-block bg-white px-3.5 py-2 rounded-xl shadow-md group transition-all cursor-pointer"
              >
                <img
                  src="/zisantech_official_logo.png"
                  alt="ZisanTech - INNOVATE • DEVELOP • GROW"
                  className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/zisantech_logo_transparent.png';
                  }}
                />
              </motion.a>

              {/* Animated Horizontal Accent Line */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                className="h-[2px] bg-gradient-to-r from-[#087FE5] via-[#08B9E8] to-transparent mt-3.5"
              />
            </div>

            {/* Official Enterprise Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal pr-4"
            >
              ZisanTech Solutions is an enterprise SAP Consulting and Technology Practice. We drive full-lifecycle SAP S/4HANA Cloud implementations, legacy migrations, custom ERP automation, and career-oriented workforce training programs.
            </motion.p>

            {/* SAP Gold Partner Showcase Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="p-2.5 bg-white rounded-xl shadow-md border border-slate-700/30 flex items-center gap-3 w-fit"
            >
              <img
                src="/sap_gold_partner_perfect.svg"
                alt="SAP Gold Partner"
                className="h-7 w-auto object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/sap_partner_logo.png';
                }}
              />
              <div className="border-l border-slate-300 pl-3">
                <div className="text-[11px] font-bold text-slate-900 leading-tight">Certified Partner</div>
                <div className="text-[10px] text-slate-600 font-medium leading-tight">Enterprise SAP Delivery</div>
              </div>
            </motion.div>

            {/* ISO Quality Standards Line */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex items-center gap-2 text-xs text-slate-400 pt-1"
            >
              <ShieldCheck className="w-4 h-4 text-[#08B9E8] flex-shrink-0" />
              <span>ISO 9001:2015 &amp; SAP Global Delivery Standards</span>
            </motion.div>

            {/* Clean Social Media Icons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="pt-2 flex items-center gap-4 text-slate-400"
            >
              {[
                { icon: <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />, href: "https://wa.me/918797818499", label: "WhatsApp" },
                { icon: <LinkedInIcon className="w-4 h-4" />, href: COMPANY_INFO.social.linkedin, label: "LinkedIn" },
                { icon: <TwitterIcon className="w-4 h-4" />, href: "https://twitter.com", label: "Twitter" },
                { icon: <FacebookIcon className="w-4 h-4" />, href: "https://facebook.com", label: "Facebook" },
                { icon: <InstagramIcon className="w-4 h-4" />, href: "https://instagram.com", label: "Instagram" }
              ].map((social) => (
                <motion.a
                  key={social.label}
                  whileHover={{ scale: 1.25, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#08B9E8] transition-colors p-1 cursor-pointer"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* 2. COLUMN 2: QUICK LINKS (Span 3) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 space-y-4"
          >
            <div>
              <h4 className="text-base font-bold text-white font-heading tracking-wide">
                QUICK LINKS
              </h4>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="h-[2px] bg-[#087FE5] mt-2.5"
              />
            </div>

            {/* Special Blogs Pill Button */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="pt-1 pb-2"
            >
              <a
                href="#blogs"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('blogs');
                }}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#08B9E8] hover:text-white transition-colors cursor-pointer group"
              >
                <BookOpen className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Blogs &amp; Tech Insights</span>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-[#087FE5]/20 text-[#08B9E8] border border-[#087FE5]/40 ml-1">
                  Articles
                </span>
              </a>
            </motion.div>

            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              {[
                { title: 'About ZisanTech', id: 'about' },
                { title: 'SAP S/4HANA Implementations', id: 'services' },
                { title: 'SAP Professional Training', id: 'training' },
                { title: 'Industries We Serve', id: 'industries' },
                { title: 'Why Choose ZisanTech', id: 'why-choose-zisantech' },
                { title: 'Contact Support & Enquiries', id: 'contact' }
              ].map((link, idx) => (
                <motion.li
                  key={link.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + idx * 0.04 }}
                >
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.id);
                    }}
                    className="hover:text-white hover:translate-x-1.5 transition-all duration-200 inline-flex items-center gap-1.5 py-0.5 group cursor-pointer"
                  >
                    <span className="text-[#087FE5] group-hover:text-[#08B9E8] font-mono">›</span>
                    <span className="group-hover:text-[#08B9E8] transition-colors">
                      {link.title}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* 3. COLUMN 3: INDUSTRIES (Span 2) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 space-y-4"
          >
            <div>
              <h4 className="text-base font-bold text-white font-heading tracking-wide">
                INDUSTRIES
              </h4>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="h-[2px] bg-[#087FE5] mt-2.5"
              />
            </div>

            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              {FOOTER_INDUSTRIES.map((industry, idx) => (
                <motion.li
                  key={industry}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + idx * 0.04 }}
                >
                  <a
                    href="#industries"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo('industries');
                    }}
                    className="hover:text-white hover:translate-x-1.5 transition-all duration-200 inline-flex items-center gap-1.5 py-0.5 group cursor-pointer"
                  >
                    <span className="text-[#087FE5] group-hover:text-[#08B9E8] font-mono">›</span>
                    <span className="group-hover:text-[#08B9E8] transition-colors">
                      {industry}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* 4. COLUMN 4: CORPORATE OFFICE & CONSULTATION (Span 3) */}
          <motion.div
            id="contact"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 space-y-4"
          >
            <div>
              <h4 className="text-base font-bold text-white font-heading tracking-wide">
                CORPORATE OFFICE
              </h4>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="h-[2px] bg-[#087FE5] mt-2.5"
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-xs sm:text-sm text-slate-400 leading-relaxed"
            >
              Commercial Business District, New Delhi, India
            </motion.p>

            {/* Direct Official Phone & Email */}
            <div className="space-y-2 pt-1 text-xs sm:text-sm">
              <motion.a
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.35 }}
                href="tel:+918797818499"
                className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-all duration-200 group cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#087FE5] group-hover:text-[#08B9E8] group-hover:scale-110 transition-all flex-shrink-0" />
                <span className="font-semibold text-white tracking-wide group-hover:translate-x-1 transition-transform">
                  +91 8797818499
                </span>
              </motion.a>

              <motion.a
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.4 }}
                href="mailto:info@zisantech.com"
                className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-all duration-200 group cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#087FE5] group-hover:text-[#08B9E8] group-hover:scale-110 transition-all flex-shrink-0" />
                <span className="text-slate-300 group-hover:text-[#08B9E8] group-hover:translate-x-1 transition-transform">
                  info@zisantech.com
                </span>
              </motion.a>
            </div>

            {/* Global Delivery Capabilities Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="bg-slate-800/80 backdrop-blur border border-slate-700/80 rounded-xl p-4 space-y-3.5 shadow-lg"
            >
              <div className="flex items-center gap-2 text-white text-xs font-bold">
                <Globe2 className="w-4 h-4 text-[#08B9E8]" />
                <span>Global Delivery Capabilities</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-normal">
                Delivering verified SAP consulting for India, Middle East, and worldwide clients.
              </p>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('contact');
                }}
                className="block text-center w-full py-2 px-3 bg-gradient-to-r from-[#087FE5] to-[#08B9E8] text-white font-bold text-xs rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer uppercase tracking-wider"
              >
                SCHEDULE CONSULTATION
              </motion.a>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* =========================================================================
          BOTTOM COPYRIGHT BAR (Pure ZisanTech Solutions, #0f1116)
      ========================================================================= */}
      <div className="relative z-10 border-t border-slate-800 bg-[#0f1116] py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left"
          >
            <span>© {new Date().getFullYear()} ZisanTech Solutions. All Rights Reserved.</span>
            <span className="hidden sm:inline">|</span>
            <span>SAP, SAP S/4HANA, and RISE with SAP are registered trademarks of SAP SE.</span>
          </motion.div>

          <div className="flex items-center gap-4">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('about');
              }}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </a>
            <span>|</span>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('about');
              }}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Terms of Service
            </a>
            <span>|</span>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('contact');
              }}
              className="hover:text-slate-300 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Lock className="w-3 h-3 text-[#08B9E8]" /> Client Portal
            </a>

            {/* Round Scroll-To-Top Button with Spring Hover */}
            <motion.button
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollTo('top')}
              className="w-8 h-8 rounded-full bg-[#087FE5] hover:bg-[#08B9E8] text-white flex items-center justify-center shadow-md transition-all cursor-pointer flex-shrink-0 ml-2"
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
