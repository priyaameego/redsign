import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layers,
  Cpu,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  ChevronLeft,
  FileCheck,
  Workflow,
  Sparkles,
  PhoneCall,
  Rocket,
  TrendingUp,
  Network,
  Users,
  ShoppingCart,
  UserCheck,
  Code2,
  Calendar,
  Clock,
  Award,
  BarChart3,
  Server,
  Zap,
  Check,
  Globe2,
  ShieldAlert,
  Search,
  Compass,
  Sliders,
  Send,
  Headphones,
  Briefcase,
  MonitorCheck,
  Play,
  Pause,
  CheckCircle,
  Database,
  RefreshCw,
  Target
} from 'lucide-react';
import { SERVICES, COMPANY_INFO } from '../data/siteData';
import { DETAILED_SERVICES_MAP, DetailedService } from '../data/serviceDetails/detailedServices';

export const ServicesPage: React.FC = () => {
  const { slug, category, id } = useParams<{ slug?: string; category?: string; id?: string }>();
  const [activeTab, setActiveTab] = useState<'all' | 'sap' | 'enterprise'>('all');
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Match service by slug OR by id + category
  const baseService = slug
    ? SERVICES.find((s) => s.slug === slug)
    : id
    ? SERVICES.find(
        (s) =>
          s.id === parseInt(id) &&
          (category
            ? s.category.toLowerCase().replace(/s$/, '') === decodeURIComponent(category).toLowerCase().replace(/s$/, '')
            : true)
      )
    : null;

  // Retrieve rich, dedicated service data
  const detailKey = baseService ? baseService.slug : '';
  const detailedData: DetailedService | undefined = DETAILED_SERVICES_MAP[detailKey];

  // Auto-slide effect for the interactive showcase slider
  useEffect(() => {
    if (!detailedData || !detailedData.sliderSlides || detailedData.sliderSlides.length <= 1 || !isAutoPlaying) {
      return;
    }
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % detailedData.sliderSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [detailedData, isAutoPlaying]);

  if (baseService && detailedData) {
    const isSap = baseService.category === 'SAP Services';
    const slides = detailedData.sliderSlides || [];
    const activeSlide = slides[currentSlideIndex] || slides[0];
    const relatedServices = SERVICES.filter(
      (s) => s.category === baseService.category && s.id !== baseService.id
    );
    const otherCategoryServices = SERVICES.filter(
      (s) => s.category !== baseService.category
    );
    const otherCategoryName = isSap ? 'Enterprise & Cloud Solutions' : 'SAP Services';

    return (
      <div className="bg-[#F3F7FC] min-h-screen selection:bg-[#087FE5] selection:text-white">
        
        {/* =========================================================================
            SECTION 1: CINEMATIC HERO BANNER WITH KEN BURNS FADED IMAGE & TEXT REVEAL
           ========================================================================= */}
        <section className="relative min-h-[580px] lg:min-h-[640px] bg-[#03091e] text-white overflow-hidden flex items-center">
          {/* Background Visual with Luxury Cinematic Ken Burns Effect */}
          <motion.img
            src={detailedData.heroImage}
            alt={detailedData.title}
            animate={{
              scale: [1.02, 1.12],
              x: [0, -12],
              y: [0, -6]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: [0.25, 0.1, 0.25, 1]
            }}
            className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.1]"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = '/hero_sap_consulting_1.jpg';
            }}
          />

          {/* Digital Transformation Lighting Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#03091e]/95 via-[#041333]/75 to-[#020b1e]/40 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_45%,rgba(8,127,229,0.28)_0%,transparent_65%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(8,185,232,0.18)_0%,transparent_50%)] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#03091e] via-transparent to-[#03091e]/30 pointer-events-none" />

          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 w-full">
            {/* Breadcrumb Navigation with Fade In */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="flex items-center gap-2 text-xs text-slate-300 mb-8 font-medium"
            >
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-[#08B9E8] font-semibold">{detailedData.title}</span>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Staggered Animated Headings with Blur-Reveal */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Animated Pill Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="flex flex-wrap items-center gap-3"
                >
                  <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 shadow-md">
                    <span className="w-4 h-0.5 bg-[#08B9E8] rounded-full shadow-[0_0_8px_#08B9E8]" />
                    <span className="text-[11px] sm:text-xs font-bold tracking-widest text-slate-100 uppercase font-mono">
                      {detailedData.category} • Module 0{detailedData.id}
                    </span>
                  </div>

                  {isSap && (
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#063B83]/80 text-[#38bdf8] border border-[#08B9E8]/30 backdrop-blur-md text-xs font-bold shadow-sm">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#08B9E8]" />
                      <span>SAP Gold Partner Standards</span>
                    </div>
                  )}
                </motion.div>

                {/* Animated Headline with Blur-to-Focus */}
                <motion.h1
                  initial={{ opacity: 0, y: 35, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-white leading-[1.12] tracking-tight font-heading"
                >
                  {detailedData.heroHeadline} <br />
                  <span className="text-[#08B9E8] drop-shadow-[0_2px_18px_rgba(8,185,232,0.45)]">
                    {detailedData.heroHighlight}
                  </span>
                </motion.h1>

                {/* Animated Description Paragraph */}
                <motion.p
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
                  className="text-slate-200 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl font-light"
                >
                  {detailedData.heroTagline}
                </motion.p>

                {/* Animated CTA Buttons with Sheen */}
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.45, ease: 'easeOut' }}
                  className="pt-2 flex flex-wrap items-center gap-4"
                >
                  <Link
                    to="/contact"
                    className="relative group overflow-hidden inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#087FE5] via-[#0664B5] to-[#043E7A] text-white font-bold rounded-xl text-sm shadow-xl shadow-blue-950/60 transition-all duration-300 hover:shadow-2xl hover:shadow-[#087FE5]/40 transform hover:-translate-y-1 active:translate-y-0 cursor-pointer"
                  >
                    {/* 3D Diagonal Light Sheen Sweep on Hover */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
                    <span>Schedule Solution Discovery</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <a
                    href={`tel:${COMPANY_INFO.primaryPhone}`}
                    className="inline-flex items-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl text-sm border border-white/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <PhoneCall className="w-4 h-4 text-[#08B9E8]" />
                    <span>Talk to an Architect</span>
                  </a>
                </motion.div>
              </div>

              {/* Right Column: Floating Multi-Layer Montage in Hero */}
              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-5 relative"
              >
                <div className="relative rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl group cursor-pointer transition-all duration-500 hover:shadow-[#087FE5]/35 hover:shadow-2xl">
                  {/* 3D Diagonal Sheen Sweep */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none z-10" />

                  <img
                    src={detailedData.heroImage}
                    alt={detailedData.title}
                    className="w-full h-[330px] sm:h-[400px] object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/hero_sap_slide1.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020b1e]/90 via-[#020b1e]/25 to-transparent pointer-events-none" />

                  {/* Top Floating SAP Logo */}
                  {isSap && (
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl shadow-lg border border-white/30 flex items-center gap-2 z-20">
                      <img src="/SAPlogo.webp" alt="SAP Logo" className="h-4 w-auto object-contain" />
                      <span className="text-[11px] font-bold text-[#063B83] tracking-wider uppercase">SAP Certified</span>
                    </div>
                  )}

                  {/* Floating Glassmorphic SLA Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#03142e]/90 backdrop-blur-md border border-white/20 text-white flex items-center justify-between shadow-2xl transition-all duration-300 hover:border-[#08B9E8]/70 z-20">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#087FE5]/30 border border-[#08B9E8] flex items-center justify-center text-[#08B9E8]">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white uppercase tracking-wider">Enterprise Verified</div>
                        <div className="text-[11px] text-slate-300">Clean-Core & SLA-Governed</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#08B9E8] bg-white/10 px-2.5 py-1 rounded">
                      100% Certified
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: ZISANTECH MULTI-LAYER IMAGE MONTAGE & ENTERPRISE OVERVIEW
            (Faded image with diagonal light sheen sweeps and floating counter badge)
           ========================================================================= */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs sm:text-sm font-extrabold tracking-widest uppercase mb-2 text-[#087FE5]"
            >
              ZisanTech Solutions • {detailedData.overviewSubheading}
            </motion.h3>

            <motion.h2
              initial={{ opacity: 0, y: 25, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0c1e3d] tracking-tight leading-tight"
            >
              {detailedData.overviewHeading}
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Multi-Layer Image Montage (Authentic ZisanTech Style) */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 relative pb-10 sm:pb-8"
            >
              {/* Base Image: Direct Enterprise SAP IT Discussion */}
              <div className="relative w-full sm:w-[88%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group cursor-pointer transition-all duration-500 hover:shadow-[#087FE5]/25 hover:shadow-2xl">
                {/* 3D Diagonal Light Sheen Sweep on Hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-10" />

                <img
                  src={detailedData.secondaryImage}
                  alt={`${detailedData.title} Enterprise Discussion`}
                  className="w-full h-[360px] sm:h-[420px] object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/hero_sap_slide1.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071B49]/70 via-transparent to-transparent opacity-80 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none" />

                {/* Subtle Corner Glow Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#087FE5]/30 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
              </div>

              {/* Overlapping Image: Live SAP Analytics Screen & UI Interface with Floating Float Animation */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative sm:absolute sm:right-0 sm:bottom-4 w-full sm:w-[68%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white mt-4 sm:mt-0 z-10 group bg-slate-900 cursor-pointer transition-all duration-500 hover:shadow-[#087FE5]/35 hover:shadow-2xl"
              >
                {/* 3D Diagonal Light Sheen Sweep on Hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none z-10" />

                <img
                  src="/hero_sap_slide3.jpg"
                  alt="Real-Time Enterprise SAP Dashboard"
                  className="w-full h-[220px] sm:h-[250px] object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/exact_sap_consulting_hd.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071B49]/60 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />

                {/* Corner Glow Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#08B9E8]/35 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
              </motion.div>

              {/* Floating Counter Badge: 100% Certified Implementation */}
              <div className="absolute -bottom-4 left-6 z-20 bg-white/95 backdrop-blur-md py-3 px-5 rounded-2xl shadow-xl border border-slate-200/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#087FE5]/10 text-[#087FE5] flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-[#0c1e3d]">SLA-Backed</div>
                  <div className="text-[11px] text-slate-500 font-medium">Zero Production Disruption</div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Text Details with Staggered Fade In */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#087FE5]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#087FE5]" />
                <span>Enterprise Architecture Blueprint</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0c1e3d] leading-snug">
                {detailedData.overviewLead}
              </h3>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                {detailedData.overviewBody.map((paragraph, idx) => (
                  <p key={idx} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 font-bold text-sm text-[#087FE5] hover:text-[#063B83] group transition-colors"
                >
                  <span>Request an Architectural Evaluation</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>

          </div>
        </section>

        {/* =========================================================================
            SECTION 2.5: INTERACTIVE ANIMATED ENTERPRISE WORKFLOW SHOWCASE SLIDER
            Features active crossfade, slide indicators, rich metrics & real SAP images
           ========================================================================= */}
        {slides.length > 0 && (
          <section className="py-16 sm:py-24 bg-gradient-to-br from-[#03091e] via-[#041333] to-[#020b1e] text-white relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-1/3 w-[450px] h-[450px] bg-[#087FE5]/15 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#08B9E8]/12 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              
              {/* Header with Navigation Controls & Pause/Play */}
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#08B9E8] border border-white/20 mb-3">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Interactive Workflow Showcase</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                    Key Execution Dimensions for {detailedData.title}
                  </h2>
                </div>

                <div className="flex items-center gap-3">
                  {/* Slide Indicators */}
                  <div className="flex items-center gap-2 mr-2">
                    {slides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlideIndex(idx)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          currentSlideIndex === idx ? 'w-8 bg-[#08B9E8]' : 'w-2 bg-white/30 hover:bg-white/50'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  {/* Previous / Next Buttons */}
                  <button
                    onClick={() => setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length)}
                    className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    onClick={() => setCurrentSlideIndex((prev) => (prev + 1) % slides.length)}
                    className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
                    aria-label="Next Slide"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Autoplay Pause/Play Toggle */}
                  <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-[#08B9E8] flex items-center justify-center transition-all cursor-pointer"
                    title={isAutoPlaying ? 'Pause Autoplay' : 'Resume Autoplay'}
                  >
                    {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Animated Slide Container */}
              <div
                className="relative bg-white/[0.05] border border-white/15 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl min-h-[420px] flex items-center"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlideIndex}
                    initial={{ opacity: 0, x: 30, filter: 'blur(6px)' }}
                    animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, x: -30, filter: 'blur(6px)' }}
                    transition={{ duration: 0.55, ease: 'easeOut' }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full"
                  >
                    {/* Slide Information */}
                    <div className="lg:col-span-6 space-y-5">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#087FE5]/25 text-[#08B9E8] border border-[#08B9E8]/40">
                        {activeSlide.badge}
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                        {activeSlide.title}
                      </h3>

                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                        {activeSlide.subtitle}
                      </p>

                      <div className="space-y-3 pt-2">
                        {activeSlide.points.map((pt, i) => (
                          <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                            <CheckCircle2 className="w-4 h-4 text-[#08B9E8] mt-0.5 flex-shrink-0" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>

                      {/* Stat Card */}
                      <div className="pt-4 flex items-center gap-4 border-t border-white/10">
                        <div className="text-3xl font-extrabold font-mono text-[#08B9E8]">
                          {activeSlide.metric}
                        </div>
                        <div className="text-xs uppercase font-bold text-slate-300 tracking-wider">
                          {activeSlide.metricLabel}
                        </div>
                      </div>
                    </div>

                    {/* Slide Visual */}
                    <div className="lg:col-span-6 relative">
                      <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl group cursor-pointer">
                        {/* 3D Diagonal Light Sheen Sweep on Hover */}
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-10" />

                        <img
                          src={activeSlide.image}
                          alt={activeSlide.title}
                          className="w-full h-[280px] sm:h-[340px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).src = '/hero_sap_slide1.jpg';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#020b1e]/85 via-transparent to-transparent pointer-events-none" />

                        {/* Slide Number Watermark */}
                        <div className="absolute bottom-4 right-4 font-mono font-extrabold text-4xl text-white/20">
                          0{currentSlideIndex + 1}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </section>
        )}

        {/* =========================================================================
            SECTION 3: 6 DEDICATED VALUE PILLARS (Authentic ZisanTech Card Hover System)
            bg-white hover:bg-[#071B49] with radial glow orb and color transitions
           ========================================================================= */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#087FE5] text-xs sm:text-sm font-extrabold uppercase tracking-wider block mb-2">
              Proven Commercial Value
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0c1e3d]">
              {detailedData.pillarsHeading}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {detailedData.pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="group relative bg-white hover:bg-[#071B49] p-7 rounded-2xl shadow-lg border border-slate-200/80 hover:border-[#087FE5]/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden cursor-pointer flex flex-col justify-start"
              >
                {/* Background Glow Orb on Hover */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-[radial-gradient(circle,rgba(8,127,229,0.35)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none blur-lg" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#071B49] via-[#05143A] to-[#040F2B] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10 flex flex-col items-start text-left w-full">
                  {/* Tag Pill */}
                  <div className="text-xs font-bold uppercase tracking-wider text-[#087FE5] group-hover:text-[#08B9E8] mb-3 transition-colors duration-200">
                    {pillar.tag}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-[19px] font-bold text-[#0c1e3d] group-hover:text-white transition-colors duration-200 mb-2.5 tracking-tight leading-snug">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#4b5563] group-hover:text-slate-200 text-xs sm:text-sm leading-relaxed font-normal transition-colors duration-200">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: CORE SCOPE & CAPABILITIES PILLARS
           ========================================================================= */}
        <section className="py-16 sm:py-24 bg-white border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[#087FE5] text-xs sm:text-sm font-extrabold uppercase tracking-wider block mb-2">
                Technical Blueprint
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0c1e3d]">
                {detailedData.capabilitiesHeading}
              </h2>
            </div>

            {/* 8 Capability Cards with Interactive Pop Effect & Sheen Sweeps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {detailedData.capabilities.map((cap, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.25 } }}
                  className="p-6 rounded-2xl bg-white hover:bg-gradient-to-br hover:from-white hover:to-blue-50/60 border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-[#087FE5]/10 transition-all duration-300 hover:border-[#087FE5] flex flex-col justify-between group relative overflow-hidden cursor-default"
                >
                  {/* 3D Diagonal Light Sheen Sweep on Hover */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-blue-100/35 to-transparent pointer-events-none z-10" />
                  
                  <div className="flex items-start gap-3.5 mb-3 relative z-10">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#087FE5] mt-1.5 flex-shrink-0 group-hover:scale-150 group-hover:bg-[#0c1e3d] transition-all duration-300" />
                    <span className="text-xs sm:text-sm font-bold text-slate-800 leading-relaxed group-hover:text-[#087FE5] transition-colors duration-300">
                      {cap.name}
                    </span>
                  </div>

                  <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-wider text-[#087FE5] bg-[#087FE5]/10 px-2.5 py-1 rounded w-fit relative z-10 group-hover:bg-[#087FE5] group-hover:text-white transition-colors duration-200">
                    {cap.highlight}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Client Deliverables & Governance Box: Luxury Enterprise Showcase */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-14 rounded-3xl bg-gradient-to-br from-[#020b1e] via-[#04153b] to-[#030e28] text-white p-8 sm:p-12 border border-white/15 shadow-2xl relative overflow-hidden"
            >
              {/* Ambient Radial Glow and Background Light */}
              <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-[radial-gradient(ellipse_at_top_right,rgba(8,127,229,0.22)_0%,transparent_70%)] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[250px] bg-[radial-gradient(ellipse_at_bottom_left,rgba(8,185,232,0.15)_0%,transparent_70%)] pointer-events-none" />

              {/* Header with Title, Tag, and SLA Seal */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pb-8 border-b border-white/15 relative z-10 mb-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#087FE5]/20 border border-[#08B9E8]/30 text-[#08B9E8] text-xs font-bold uppercase tracking-widest mb-3">
                    <ShieldCheck className="w-4 h-4 text-[#08B9E8]" />
                    <span>Contractual Project Handover Protocol</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                    Client Deliverables & Formal Governance Sign-Off
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl font-light">
                    Every deployment milestone concludes with enterprise-grade artifacts, rigorous sign-off validation, and complete intellectual property transfer.
                  </p>
                </div>

                {/* SLA Seal Badge */}
                <div className="flex items-center gap-3 bg-white/10 border border-white/20 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#087FE5] to-[#08B9E8] flex items-center justify-center text-white font-bold shadow-md">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white uppercase tracking-wider">100% Audit-Ready</div>
                    <div className="text-[11px] text-[#08B9E8]">Signed Milestone Handover</div>
                  </div>
                </div>
              </div>

              {/* Deliverables Grid with Staggered Interactive Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 relative z-10">
                {detailedData.deliverables.map((d, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="group relative p-5 sm:p-6 rounded-2xl bg-white/[0.05] hover:bg-white/[0.12] border border-white/15 hover:border-[#08B9E8]/70 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#087FE5]/20 flex flex-col justify-between overflow-hidden cursor-default"
                  >
                    {/* 3D Diagonal Light Sheen Sweep on Hover */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-10" />

                    <div>
                      {/* Top Row: Artifact Code & Verification Pill */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-mono font-bold tracking-wider text-[#08B9E8] uppercase">
                          ARTIFACT 0{i + 1}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                          <span>Milestone Verified</span>
                        </span>
                      </div>

                      {/* Deliverable Title */}
                      <p className="text-sm sm:text-base font-bold text-white group-hover:text-[#38bdf8] transition-colors leading-relaxed">
                        {d}
                      </p>
                    </div>

                    {/* Bottom Metadata */}
                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                      <span>Governance Standard</span>
                      <span className="text-slate-300 font-mono">SLA-Locked</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Reassurance Banner */}
              <div className="mt-8 pt-6 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-300 relative z-10">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#08B9E8] flex-shrink-0" />
                  <span>Full intellectual property transfer, versioned runbooks & configuration codebases.</span>
                </div>
                <div className="text-[11px] font-mono text-[#08B9E8] uppercase tracking-wider font-semibold">
                  Zero Technical Debt Guarantee
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: 6-STEP DELIVERY METHODOLOGY (Animated Cards 01 to 06)
           ========================================================================= */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0c1e3d] tracking-tight">
              {detailedData.methodologyHeading}
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-4">
              {detailedData.methodologySubheading}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {detailedData.methodology.map((m, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 hover:border-[#087FE5] relative group cursor-default overflow-hidden flex flex-col justify-between"
              >
                {/* 3D Diagonal Light Sheen Sweep on Hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-blue-100/30 to-transparent pointer-events-none z-10" />

                {/* Subtle Side Color Bar on Hover */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#087FE5] to-[#08B9E8] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-2xl" />

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-extrabold text-[#087FE5] font-mono group-hover:text-[#063B83] transition-colors duration-300">
                      {m.num}
                    </span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                      Stage 0{idx + 1}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-[#0c1e3d] mb-1.5 group-hover:text-[#087FE5] transition-colors duration-300 leading-snug">
                    {m.title}
                  </h4>
                  <div className="text-[11px] font-semibold text-[#08B9E8] mb-3">
                    {m.tags}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {m.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-400 group-hover:text-[#087FE5] transition-colors">
                  <span>Phase Governance</span>
                  <span>SLA Check &rarr;</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 6: WHY PARTNER WITH ZISANTECH SOLUTIONS? (Animated Glassmorphic Dark Section)
           ========================================================================= */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-[#03091e] via-[#041333] to-[#020b1e] text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
                {detailedData.whyPartnerTitle}
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm mt-3 font-light">
                {detailedData.whyPartnerSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {detailedData.whyCards.map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.25 } }}
                  className="p-7 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-md hover:bg-white/[0.1] hover:border-[#08B9E8]/50 transition-all duration-300 text-center flex flex-col items-center group shadow-xl cursor-default"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#087FE5] to-[#08B9E8] p-0.5 mb-5 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <div className="w-full h-full rounded-full bg-[#03091e] flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6 text-[#08B9E8]" />
                    </div>
                  </div>
                  <h4 className="text-base font-bold text-white mb-2.5">
                    {card.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Quick Consultation CTA with Dedicated Gradient Button */}
            <div className="mt-16 text-center">
              <Link
                to="/contact"
                className="relative group overflow-hidden inline-flex items-center gap-2.5 px-9 py-4 bg-gradient-to-r from-[#087FE5] via-[#0664B5] to-[#043E7A] text-white font-bold rounded-xl text-sm shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl cursor-pointer"
              >
                {/* Sheen sweep */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
                <span>Request Solution Blueprint for {detailedData.title}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 7: CONNECTED ECOSYSTEM & OTHER SOLUTIONS NAVIGATION
            Premium animated cards, hover lift, glow, diagonal sheen sweep & full text
           ========================================================================= */}
        <section className="py-20 sm:py-28 bg-gradient-to-b from-white via-[#F8FAFC] to-[#F1F5F9] border-t border-slate-200/80 relative overflow-hidden">
          {/* Subtle background ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-100/40 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Header & Catalog Link */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#087FE5]/10 border border-[#087FE5]/20 text-[#087FE5] text-xs font-bold uppercase tracking-widest mb-3"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Integrated Enterprise Ecosystem</span>
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0c1e3d] tracking-tight leading-tight"
                >
                  Other Solutions in {detailedData.category}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-slate-600 text-xs sm:text-sm mt-2 max-w-2xl"
                >
                  Connect this capability with our complementary enterprise consulting modules to build a unified, high-performance digital core.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Link
                  to="/services"
                  className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-white hover:bg-[#071B49] text-slate-800 hover:text-white border border-slate-300/80 hover:border-[#071B49] text-xs sm:text-sm font-bold shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <span>Explore Complete Portfolio (13 Services)</span>
                  <ArrowRight className="w-4 h-4 text-[#087FE5] group-hover:text-[#08B9E8] transform group-hover:translate-x-1 transition-all" />
                </Link>
              </motion.div>
            </div>

            {/* Grid of Related Services with Premium Animated Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((s, idx) => (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                >
                  <Link
                    to={`/services/${s.slug}`}
                    className="group relative bg-white hover:bg-gradient-to-br hover:from-white hover:to-blue-50/70 p-6 sm:p-7 rounded-2xl border border-slate-200/90 hover:border-[#087FE5] shadow-sm hover:shadow-2xl hover:shadow-[#087FE5]/15 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between h-full overflow-hidden block"
                  >
                    {/* 3D Diagonal Light Sheen Sweep on Hover */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-blue-100/40 to-transparent pointer-events-none z-10" />

                    {/* Subtle Corner Glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#087FE5]/12 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <div>
                      {/* Top Bar with Module Number & Arrow */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 group-hover:bg-[#087FE5]/10 text-slate-600 group-hover:text-[#087FE5] text-[11px] font-mono font-bold tracking-wider transition-colors duration-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#087FE5]" />
                          Module 0{s.id}
                        </span>

                        <div className="w-9 h-9 rounded-xl bg-slate-100 group-hover:bg-[#087FE5] text-slate-500 group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-sm">
                          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </div>

                      {/* Title - Full, Untruncated */}
                      <h4 className="text-lg font-bold text-[#0c1e3d] group-hover:text-[#087FE5] transition-colors duration-200 mb-2 leading-snug">
                        {s.title}
                      </h4>

                      {/* Short Description */}
                      <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-3 mb-6">
                        {s.shortDesc}
                      </p>
                    </div>

                    {/* Bottom Action Strip */}
                    <div className="pt-4 border-t border-slate-100 group-hover:border-blue-100/80 flex items-center justify-between text-xs font-bold text-[#087FE5] group-hover:text-[#063B83] transition-colors mt-auto">
                      <span>View Solution Blueprint</span>
                      <span className="inline-block transform group-hover:translate-x-1.5 transition-transform duration-300">
                        &rarr;
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Cross-Category Discovery Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#03091e] via-[#051840] to-[#03091e] border border-white/10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden"
            >
              {/* Decorative Glow */}
              <div className="absolute top-0 right-0 w-80 h-full bg-[#087FE5]/15 blur-3xl pointer-events-none" />

              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#087FE5] to-[#08B9E8] flex items-center justify-center text-white shadow-lg flex-shrink-0">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#08B9E8]">
                    Cross-Functional Discovery
                  </div>
                  <h4 className="text-base sm:text-lg font-extrabold text-white">
                    Looking for {otherCategoryName}?
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Explore our {otherCategoryServices.length} dedicated enterprise & cloud delivery frameworks.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 relative z-10 w-full md:w-auto">
                {otherCategoryServices.slice(0, 4).map((other) => (
                  <Link
                    key={other.id}
                    to={`/services/${other.slug}`}
                    className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-xs text-white font-medium backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5"
                  >
                    {other.title}
                  </Link>
                ))}
                <Link
                  to="/services"
                  className="px-3.5 py-2 rounded-xl bg-[#087FE5] hover:bg-[#0664B5] text-xs text-white font-bold transition-all duration-200 shadow-md hover:shadow-[#087FE5]/40"
                >
                  +{otherCategoryServices.length - 4} More &rarr;
                </Link>
              </div>
            </motion.div>

          </div>
        </section>

      </div>
    );
  }

  // =========================================================================
  // LISTING VIEW (When navigating to /services directly)
  // =========================================================================
  const filteredServices = SERVICES.filter((s) => {
    if (activeTab === 'sap') return s.type === 'sap';
    if (activeTab === 'enterprise') return s.type === 'enterprise';
    return true;
  });

  return (
    <div className="space-y-16 pb-20 bg-[#F3F7FC]">
      <section className="bg-gradient-to-r from-[#03091e] via-[#041333] to-[#020b1e] text-white py-20 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs text-slate-300 mb-6 font-medium">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#08B9E8] font-bold">Services & Solutions</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#08B9E8] bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
              Enterprise Technology Practice
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
              Enterprise Services & Solutions
            </h1>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
              Explore our full catalog of 13 verified SAP and Enterprise & Cloud Solutions, delivered with SLA accountability and clean-core engineering.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 pt-4">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'all' ? 'bg-[#087FE5] text-white shadow-md' : 'bg-white/10 text-slate-200 hover:bg-white/20'
                }`}
              >
                All Services (13)
              </button>
              <button
                onClick={() => setActiveTab('sap')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'sap' ? 'bg-[#087FE5] text-white shadow-md' : 'bg-white/10 text-slate-200 hover:bg-white/20'
                }`}
              >
                SAP Services (7)
              </button>
              <button
                onClick={() => setActiveTab('enterprise')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'enterprise' ? 'bg-[#087FE5] text-white shadow-md' : 'bg-white/10 text-slate-200 hover:bg-white/20'
                }`}
              >
                Enterprise & Cloud Solutions (6)
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-7 border border-slate-200 hover:border-[#087FE5] shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700">
                    {service.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">0{service.id}</span>
                </div>

                <h3 className="text-xl font-bold text-[#0c1e3d] mb-3 group-hover:text-[#087FE5] transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-6 font-normal">
                  {service.shortDesc}
                </p>

                <div className="space-y-2 mb-6">
                  {service.keyFeatures.slice(0, 3).map((f, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <span className="w-2 h-2 rounded-full bg-[#087FE5] mt-1.5 flex-shrink-0" />
                      <span className="line-clamp-1">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  to={`/services/${service.slug}`}
                  className="text-xs font-bold text-[#063B83] hover:text-[#087FE5] flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  <span>Explore Scope</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link to="/contact" className="text-xs text-slate-400 hover:text-slate-700">
                  Enquire
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
