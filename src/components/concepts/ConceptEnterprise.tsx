import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
  MapPin,
  Mail,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Award,
  Users,
  Briefcase,
  TrendingUp,
  Clock,
  Sparkles,
  Phone,
  Layers,
  Cpu,
  GraduationCap,
  Play,
  MessageSquare,
  Rocket,
  ThumbsUp,
  BarChart3,
  Globe,
  User,
  Tag,
  Zap,
  Search,
  Check,
  Star,
  Quote
} from 'lucide-react';
import {
  COMPANY_INFO,
  SERVICES,
  TRAINING_MODULES,
  INDUSTRIES,
  BLOGS,
  ServiceItem,
  IndustryItem,
  TrainingItem,
  BlogItem
} from '../../data/siteData';

// Clean Enterprise Brand Social Icons
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

const YouTubeIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const WhatsAppIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12.031 2C6.511 2 2.023 6.488 2.023 12.008c0 1.761.458 3.479 1.33 4.992L2 22l5.133-1.346c1.465.799 3.111 1.22 4.898 1.22 5.52 0 10.008-4.488 10.008-10.008C22.039 6.488 17.551 2 12.031 2zm5.842 14.225c-.243.684-1.416 1.309-1.956 1.389-.523.078-1.205.111-3.666-.889-2.915-1.185-4.809-4.148-4.954-4.341-.145-.193-1.179-1.571-1.179-2.997 0-1.426.747-2.128 1.012-2.418.265-.29.579-.362.772-.362.193 0 .386.002.555.01.179.008.418-.068.654.498.243.58.828 2.022.901 2.167.072.145.121.314.024.507-.097.193-.145.314-.29.483-.145.169-.304.377-.435.507-.145.145-.296.302-.128.59.169.29.749 1.237 1.607 2.002 1.104.984 2.035 1.29 2.325 1.435.29.145.459.121.628-.073.169-.193.724-.845.917-1.135.193-.29.386-.242.652-.145.265.097 1.688.796 1.978.941.29.145.483.217.555.338.072.121.072.701-.171 1.385z" />
  </svg>
);

// Animated Counter Component that starts from 1 up to target in run-time
const MetricCounter: React.FC<{ target: number; suffix?: string; duration?: number }> = ({
  target,
  suffix = '+',
  duration = 2600
}) => {
  const [count, setCount] = useState<number>(1);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    let startTime: number | null = null;
    let animationFrameId: number;

    const startVal = 1;
    const endVal = target;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutCubic: continuous, relaxed and natural counting progression
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.round(startVal + (endVal - startVal) * easeProgress);
      setCount(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(endVal);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export const ConceptEnterprise: React.FC = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      badge: 'INTELLIGENT ENTERPRISE SOLUTIONS',
      line1: 'Empowering Global Enterprise',
      highlight: 'Through Precision SAP Innovation',
      line2: '',
      description: 'Business-focused SAP S/4HANA implementations, cloud migration roadmaps, and continuous technical advisory tailored to dynamic enterprise workflows.',
      bgImage: '/hero_sap_enterprise_luxury.jpg',
      btnText: 'EXPLORE SERVICES',
      btnLink: '#services',
      secondaryBtnText: 'REQUEST CONSULTATION',
      secondaryBtnLink: '#contact-cta'
    },
    {
      badge: 'CONNECTED CLOUD ARCHITECTURE',
      line1: 'Architecting Clean Core',
      highlight: 'With Seamless S/4HANA Cloud',
      line2: '',
      description: 'Synchronize disparate operations, streamline supplier collaboration, and connect third-party platforms with clean-core SAP integration and tailored engineering.',
      bgImage: '/hero_sap_boardroom_luxury.jpg',
      btnText: 'VIEW SOLUTIONS',
      btnLink: '#services',
      secondaryBtnText: 'EXPLORE MODULES',
      secondaryBtnLink: '#training'
    },
    {
      badge: 'ENTERPRISE DATA & TALENT ENABLEMENT',
      line1: 'Driving Operational Agility',
      highlight: 'With Actionable SAP Intelligence',
      line2: '',
      description: 'Equipping global organizations and technology teams with real-time decision visibility, clean data pipelines, and industry-proven SAP expertise.',
      bgImage: '/sap_hero_slide1_enterprise.jpg',
      btnText: 'OUR EXPERTISE',
      btnLink: '#about',
      secondaryBtnText: 'TALK TO AN ARCHITECT',
      secondaryBtnLink: '#contact-cta'
    }
  ];

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="bg-white text-slate-800 font-sans selection:bg-[#063B83] selection:text-white overflow-hidden relative">



      {/* =========================================================================
          1. ZisanTech AUTHENTIC REVOLUTION SLIDER HERO BANNER
      ========================================================================= */}
      <section className="relative w-full h-[580px] sm:h-[640px] md:h-[680px] lg:h-[720px] overflow-hidden bg-slate-950">
        {/* Slides Container - Smooth crossfade with luxury cinematic animation */}
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
                }`}
            >
              {/* Background Visual with Luxury Cinematic Ken Burns Effect */}
              <motion.img
                src={slide.bgImage}
                alt={slide.line1}
                animate={
                  isActive
                    ? { scale: [1.02, 1.14], x: [0, -15], y: [0, -8] }
                    : { scale: 1, x: 0, y: 0 }
                }
                transition={{
                  duration: 9,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.82] contrast-[1.08]"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/zisantech_header_page.png';
                }}
              />

              {/* Digital Transformation HUD Overlay with Royal Navy & Electric Cyan Lighting */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#03091e]/90 via-[#041333]/65 to-[#020b1e]/30"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_45%,rgba(8,127,229,0.22)_0%,transparent_65%)]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(8,185,232,0.15)_0%,transparent_50%)]"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#020612]/95 via-transparent to-[#020612]/20"></div>

              {/* Slide Content */}
              {isActive && (
                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                  <div className="max-w-3xl text-left space-y-5 sm:space-y-6 pt-8 sm:pt-0">
                    {/* Top Badge */}
                    <motion.div
                      key={`badge-${currentSlide}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#031333]/85 backdrop-blur-md border border-[#08B9E8]/35 shadow-md shadow-[#08B9E8]/10"
                    >
                      <span className="w-5 h-0.5 bg-[#08B9E8] rounded-full shadow-[0_0_8px_#08B9E8]"></span>
                      <span className="text-[10px] sm:text-xs font-bold tracking-widest text-slate-100 uppercase font-mono">
                        {slide.badge}
                      </span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                      key={`headline-${currentSlide}`}
                      initial={{ opacity: 0, y: 35, filter: 'blur(6px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                      className="text-2xl sm:text-4xl md:text-5xl lg:text-[50px] font-normal sm:font-medium font-outfit text-white leading-[1.2] tracking-[-0.02em] drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]"
                    >
                      {slide.line1} <br />
                      <span className="font-semibold bg-gradient-to-r from-[#38bdf8] via-[#08B9E8] to-[#60a5fa] bg-clip-text text-transparent drop-shadow-[0_2px_18px_rgba(8,185,232,0.35)]">
                        {slide.highlight}
                      </span>
                      {slide.line2 && (
                        <>
                          {' '}
                          <br />
                          {slide.line2}
                        </>
                      )}
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                      key={`desc-${currentSlide}`}
                      initial={{ opacity: 0, y: 25 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="text-xs sm:text-sm md:text-base text-slate-200/90 leading-relaxed max-w-xl font-normal drop-shadow-sm font-sans"
                    >
                      {slide.description}
                    </motion.p>

                    {/* Action CTA Buttons */}
                    <motion.div
                      key={`btns-${currentSlide}`}
                      initial={{ opacity: 0, y: 20, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto"
                    >
                      <a
                        href={slide.btnLink}
                        className="w-full sm:w-auto text-center px-8 py-3.5 sm:py-4 bg-gradient-to-r from-[#063B83] via-[#087FE5] to-[#08B9E8] hover:from-[#087FE5] hover:to-[#063B83] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-lg shadow-xl shadow-[#087FE5]/25 transition-all flex items-center justify-center gap-2 group hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                      >
                        <span>{slide.btnText}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                      </a>

                      <a
                        href={slide.secondaryBtnLink}
                        className="w-full sm:w-auto text-center px-6 sm:px-7 py-3.5 sm:py-4 bg-white/15 hover:bg-white/25 text-white font-medium text-xs sm:text-sm tracking-wider uppercase rounded-lg backdrop-blur-md border border-white/25 transition-all hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                      >
                        {slide.secondaryBtnText}
                      </a>
                    </motion.div>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {/* Carousel Arrow Controls */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-[#087FE5] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all hover:scale-110 active:scale-90 cursor-pointer"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-[#087FE5] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all hover:scale-110 active:scale-90 cursor-pointer"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 transition-all rounded-full cursor-pointer ${i === currentSlide ? 'w-8 bg-[#087FE5]' : 'w-2.5 bg-white/40 hover:bg-white'
                }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* =========================================================================
          2.5 THREE VALUE PROPOSITION / BENEFIT CARDS (UNDER HERO)
      ========================================================================= */}
      <section id="benefits" className="relative z-30 -mt-8 sm:-mt-12 lg:-mt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {[
            {
              icon: BarChart3,
              title: "Rapid Deployment Methodology",
              description: "Structured project phases and clean-core migration roadmaps designed to minimize cutover downtime and protect operational continuity."
            },
            {
              icon: Rocket,
              title: "Operational Intelligence",
              description: "Transform business data into actionable execution metrics with integrated S/4HANA visibility and executive reporting dashboards."
            },
            {
              icon: ThumbsUp,
              title: "Flexible Enterprise Growth",
              description: "Future-ready cloud infrastructure and scalable application frameworks that evolve alongside your multi-entity business requirements."
            }
          ].map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group relative bg-white hover:bg-[#071B49] p-6 sm:p-7 rounded-2xl shadow-lg border border-slate-200/80 hover:border-[#087FE5]/60 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl overflow-hidden cursor-pointer flex flex-col justify-start"
              >
                {/* Background Glow Orb on Hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle,rgba(8,127,229,0.35)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none blur-lg"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#071B49] via-[#05143A] to-[#040F2B] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                <div className="relative z-10 flex flex-col items-start text-left w-full">
                  {/* Icon Box */}
                  <div className="w-12 h-12 rounded-xl bg-[#0066CC] text-white flex items-center justify-center mb-5 shadow-sm shadow-[#0066CC]/20 transition-transform duration-300 group-hover:scale-105 shrink-0">
                    <Icon className="w-6 h-6 stroke-[2.2]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-[18px] font-semibold text-[#0c1e3d] group-hover:text-white transition-colors duration-200 mb-2.5 tracking-tight leading-snug">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#4b5563] group-hover:text-slate-200 text-[13.5px] sm:text-[14px] leading-relaxed font-normal transition-colors duration-200">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          3. ZISANTECH ENTERPRISE TRANSFORMATION PRACTICE
      ========================================================================= */}
      <section id="about" className="py-14 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Vertical Brand Electric Blue Accent Pill (from Screenshot) */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-16 w-2.5 h-16 bg-gradient-to-b from-[#087FE5] to-[#08B9E8] rounded-full shadow-md shadow-[#087FE5]/30 z-20 pointer-events-none" />

          {/* Left Multi-Layer Image Montage */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative pb-8 sm:pb-0"
          >
            {/* Base Image: Direct Enterprise SAP IT Consulting Discussion */}
            <div className="relative w-full sm:w-[86%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group cursor-pointer transition-all duration-500 hover:shadow-[#087FE5]/25 hover:shadow-2xl">
              {/* 3D Diagonal Light Sheen Sweep on Hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-10" />

              <img
                src="/hero_sap_consulting_1.jpg"
                alt="SAP Enterprise Consulting & IT Architecture Discussion"
                className="w-full h-[360px] sm:h-[420px] object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-[0.5deg]"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/zisantech_collaborative_consulting.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071B49]/70 via-transparent to-transparent opacity-80 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none"></div>

              {/* Subtle Corner Glow Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#087FE5]/30 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
            </div>

            {/* Overlapping Image: Live SAP S/4HANA ERP System Screens & Analytics Interface */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative sm:absolute sm:right-0 sm:bottom-6 w-full sm:w-[68%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white mt-4 sm:mt-0 z-10 group bg-slate-900 cursor-pointer transition-all duration-500 hover:shadow-[#087FE5]/35 hover:shadow-2xl"
            >
              {/* 3D Diagonal Light Sheen Sweep on Hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none z-10" />

              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85"
                alt="SAP Analytics & Real-Time Enterprise Dashboard"
                className="w-full h-[230px] sm:h-[260px] object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/hero_sap_slide3.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071B49]/60 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"></div>

              {/* Corner Glow Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#08B9E8]/35 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
            </motion.div>

            {/* Floating Counter Badge: 360+ Satisfied Clients */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.2 }}
              whileHover={{ scale: 1.03, y: -2 }}
              className="relative sm:absolute sm:-bottom-5 sm:left-6 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-xl border border-blue-100/80 flex items-center gap-3 mt-3 sm:mt-0 max-w-[230px] sm:max-w-xs transition-all duration-300 hover:shadow-2xl hover:shadow-[#087FE5]/15 cursor-default"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#063B83] to-[#087FE5] text-white flex items-center justify-center font-medium shadow-md shadow-[#087FE5]/25 flex-shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl sm:text-2xl font-bold text-[#063B83] font-outfit">
                    360+
                  </span>
                  <span className="text-[11px] font-semibold text-[#087FE5]">Global</span>
                </div>
                <p className="text-[11px] sm:text-xs font-medium text-slate-600 mt-0.5">
                  Satisfied Enterprise Clients
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0066CC] font-mono">
                  ENTERPRISE TRANSFORMATION PRACTICE
                </span>
                <span className="w-8 h-0.5 bg-[#0066CC] rounded-full"></span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-semibold text-[#071B49] mt-3 leading-[1.22] font-outfit">
                <span className="text-[#0066CC] font-semibold">ZisanTech Solutions:</span> Intelligent Business Systems Engineered for Long-Term Value
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal"
            >
              ZisanTech Solutions partners with enterprises to modernise operational systems, align technology with core organizational objectives, and ensure measurable business outcomes across:
            </motion.p>

            {/* Feature 1: Enterprise SAP Advisory & Delivery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-start gap-4 py-1 group"
            >
              <div className="w-12 h-12 rounded-xl border border-sky-300 bg-sky-50/70 text-[#0066CC] flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                <Rocket className="w-6 h-6 stroke-[1.75]" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-bold text-[#071B49] font-heading group-hover:text-[#0066CC] transition-colors">
                  Enterprise SAP Advisory &amp; Delivery
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  End-to-end S/4HANA solution architecture, system configuration, data migration, and dedicated ongoing maintenance.
                </p>
              </div>
            </motion.div>

            {/* Feature 2: Statutory Compliance & System Integration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-start gap-4 py-1 group"
            >
              <div className="w-12 h-12 rounded-xl border border-sky-300 bg-sky-50/70 text-[#0066CC] flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                <Globe className="w-6 h-6 stroke-[1.75]" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-bold text-[#071B49] font-heading group-hover:text-[#0066CC] transition-colors">
                  Statutory Compliance &amp; System Integration
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Automated GST e-invoicing, e-way bill generation, weighbridge connectivity, and direct banking interfaces integrated into core workflows.
                </p>
              </div>
            </motion.div>

            {/* Feature 3: Value-Driven Solutions Engineered for Agility */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-3 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 border-t-2 border-t-[#087FE5] shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
            >
              <div>
                <h3 className="text-sm sm:text-base font-bold text-[#071B49] font-heading group-hover:text-[#087FE5] transition-colors">
                  High-Impact Digital Solutions for Growing Enterprises
                </h3>
                <p className="text-xs text-slate-600 mt-1 font-normal">
                  Pragmatic technology frameworks designed to adapt with your expanding operations
                </p>
              </div>
              <a
                href="#services"
                className="text-xs font-bold text-[#087FE5] hover:text-[#063B83] flex items-center gap-1.5 uppercase tracking-wider transition-colors cursor-pointer flex-shrink-0"
              >
                <span>EXPLORE</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. WHY CHOOSE ZISANTECH / RISE WITH SAP PARTNER (Screenshot 2)
      ========================================================================= */}
      <section id="why-choose-zisantech" className="bg-[#071B49] text-white py-14 lg:py-16 relative overflow-hidden">
        {/* Subtle Ambient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#05143A] via-[#071B49] to-[#040F2B] opacity-95"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#087FE5]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-[#08B9E8] font-mono">
                WHY WORK WITH ZISANTECH
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-semibold text-white leading-tight font-outfit">
                Specialized Enterprise SAP Advisory &amp; Digital Cloud Engineering
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                We combine deep technical mastery, client-focused agility, and dedicated post-deployment support to ensure your technology systems deliver enduring operational value.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Full lifecycle SAP implementation, version migration, and hyper-care support.',
                  'Collaborative consulting focused on practical, scalable business workflows.',
                  'Specialized integration across enterprise applications, banking, and statutory portals.',
                  'Automated Indian GST e-invoicing and e-way bill generation compliance.',
                  'Accessible technical architects offering dedicated SLA-governed support.'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-[#087FE5] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                      <CheckCircle className="w-3.5 h-3.5" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <a
                  href="#contact-cta"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#087FE5] hover:bg-[#063B83] text-white text-xs font-bold uppercase tracking-wider rounded transition-all shadow-lg hover:shadow-xl active:scale-95 cursor-pointer"
                >
                  <span>CONNECT WITH AN ARCHITECT</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Right Visual Enterprise Image Banner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <div className="rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl border-2 border-white/25 relative group bg-gradient-to-br from-[#061b48] to-[#040b1e]">
                {/* 3D Diagonal Sheen Sweep on Hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-20" />

                {/* Ambient Corner Glow */}
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#087FE5]/30 rounded-full blur-2xl pointer-events-none z-10" />

                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=85"
                  alt="ZisanTech SAP Enterprise Architecture & Digital Practice"
                  className="w-full h-[370px] sm:h-[430px] object-cover object-center transition-all duration-700 ease-out group-hover:scale-105 group-hover:contrast-[1.03]"
                />

                {/* Elegant enterprise gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#05143A]/90 via-[#071B49]/30 to-transparent pointer-events-none" />

                {/* Floating Glassmorphism Enterprise Credential Badge */}
                <div className="absolute bottom-5 left-5 right-5 bg-[#05143A]/85 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-2xl flex items-center justify-between z-20 group-hover:bg-[#05143A]/95 transition-colors">
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#087FE5]/25 border border-[#087FE5]/40 text-[#38BDF8] text-[10px] font-mono font-bold tracking-wider uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse"></span>
                      <span>ENTERPRISE ARCHITECTURE</span>
                    </div>
                    <p className="text-xs sm:text-[13px] font-bold text-white font-heading">
                      Next-Gen SAP Cloud &amp; S/4HANA Practice
                    </p>
                    <p className="text-[11px] text-slate-300 font-medium">
                      Disciplined delivery • Clean-core modernization
                    </p>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#087FE5] to-[#08B9E8] text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#087FE5]/40 ml-3">
                    <ShieldCheck className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. ZisanTech FUN FACTS / METRICS STRIP (Tailored Enterprise Brand Card Design)
      ========================================================================= */}
      <section id="metrics" className="relative py-14 bg-[#f8fafc] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            
            {/* Card 1: 10+ YEARS OF TRUST */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-xl hover:shadow-[#063B83]/10 border border-slate-200/90 hover:border-[#063B83] transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-default"
            >
              {/* Soft Signature Watermark Corner Curve (Matches Website Services/Training Cards) */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#063B83]/10 to-transparent rounded-bl-full pointer-events-none group-hover:from-[#063B83]/20 transition-all duration-500" />

              <div>
                {/* Top Badge: Matches website's blue pill tags */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-bold text-[#063B83] bg-blue-50/90 border border-blue-200/60 px-2.5 py-1 rounded-md shadow-xs group-hover:bg-[#063B83] group-hover:text-white transition-colors">
                    EXPERIENCE
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#063B83]/30 group-hover:bg-[#063B83] transition-colors" />
                </div>

                {/* Number: Regular Semibold/Medium (Not Overly Bold) */}
                <p className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#063B83] font-heading tracking-tight leading-tight group-hover:text-[#087FE5] transition-colors my-2">
                  <MetricCounter target={10} suffix="+" duration={2400} />
                </p>
              </div>

              {/* Bottom Label Strip */}
              <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  YEARS OF TRUST
                </span>
                <span className="text-[11px] font-mono text-slate-400 group-hover:text-[#063B83] transition-colors">
                  01
                </span>
              </div>
            </motion.div>

            {/* Card 2: 120+ HAPPY CLIENTS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-xl hover:shadow-[#087FE5]/15 border border-slate-200/90 hover:border-[#087FE5] transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-default"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#087FE5]/10 to-transparent rounded-bl-full pointer-events-none group-hover:from-[#087FE5]/25 transition-all duration-500" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-bold text-[#087FE5] bg-sky-50/90 border border-sky-200/60 px-2.5 py-1 rounded-md shadow-xs group-hover:bg-[#087FE5] group-hover:text-white transition-colors">
                    ENTERPRISE
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#087FE5]/30 group-hover:bg-[#087FE5] transition-colors" />
                </div>

                <p className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#087FE5] font-heading tracking-tight leading-tight group-hover:text-[#063B83] transition-colors my-2">
                  <MetricCounter target={120} suffix="+" duration={2800} />
                </p>
              </div>

              <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  HAPPY CLIENTS
                </span>
                <span className="text-[11px] font-mono text-slate-400 group-hover:text-[#087FE5] transition-colors">
                  02
                </span>
              </div>
            </motion.div>

            {/* Card 3: 50+ SAP CONSULTANTS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-xl hover:shadow-[#063B83]/10 border border-slate-200/90 hover:border-[#063B83] transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-default"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#063B83]/10 to-transparent rounded-bl-full pointer-events-none group-hover:from-[#063B83]/20 transition-all duration-500" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-bold text-[#063B83] bg-blue-50/90 border border-blue-200/60 px-2.5 py-1 rounded-md shadow-xs group-hover:bg-[#063B83] group-hover:text-white transition-colors">
                    CONSULTING
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#063B83]/30 group-hover:bg-[#063B83] transition-colors" />
                </div>

                <p className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#063B83] font-heading tracking-tight leading-tight group-hover:text-[#087FE5] transition-colors my-2">
                  <MetricCounter target={50} suffix="+" duration={2600} />
                </p>
              </div>

              <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  SAP CONSULTANTS
                </span>
                <span className="text-[11px] font-mono text-slate-400 group-hover:text-[#063B83] transition-colors">
                  03
                </span>
              </div>
            </motion.div>

            {/* Card 4: 3,500+ TRAINED PROFESSIONALS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-xl hover:shadow-[#087FE5]/15 border border-slate-200/90 hover:border-[#087FE5] transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-default"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#087FE5]/10 to-transparent rounded-bl-full pointer-events-none group-hover:from-[#087FE5]/25 transition-all duration-500" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-bold text-[#087FE5] bg-sky-50/90 border border-sky-200/60 px-2.5 py-1 rounded-md shadow-xs group-hover:bg-[#087FE5] group-hover:text-white transition-colors">
                    WORKFORCE
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#087FE5]/30 group-hover:bg-[#087FE5] transition-colors" />
                </div>

                <p className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#087FE5] font-heading tracking-tight leading-tight group-hover:text-[#063B83] transition-colors my-2">
                  <MetricCounter target={3500} suffix="+" duration={3000} />
                </p>
              </div>

              <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  TRAINED PROFESSIONALS
                </span>
                <span className="text-[11px] font-mono text-slate-400 group-hover:text-[#087FE5] transition-colors">
                  04
                </span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          FIRST BLUE DIVIDER: Exact Client Requested Position
      ========================================================================= */}
      <div className="relative w-full py-1 bg-gradient-to-r from-[#071B49] via-[#087FE5] to-[#071B49] shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="h-0.5 w-1/3 bg-gradient-to-r from-transparent via-[#08B9E8]/80 to-transparent"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#08B9E8] shadow-[0_0_10px_#08B9E8] mx-auto"></div>
          <div className="h-0.5 w-1/3 bg-gradient-to-r from-transparent via-[#08B9E8]/80 to-transparent"></div>
        </div>
      </div>


      {/* =========================================================================
          7. ENTERPRISE SAP & IT SERVICES SECTION (Original Screenshot Section + New Client Additions)
      ========================================================================= */}
      <section id="services" className="bg-[#f8fafc] py-16 border-t border-slate-200 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#087FE5]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-0 w-80 h-80 bg-[#063B83]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">

          {/* =========================================================================
              PART 1: ORIGINAL ENTERPRISE SAP & IT SERVICES (6 Screenshot Cards Exact Match)
          ========================================================================= */}
          <div>
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-[#0369A1] text-xs font-bold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-[#0284C7]"></span>
                <span>ENTERPRISE SAP CAPABILITIES</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#071B49] font-outfit leading-tight tracking-tight">
                Modern Enterprise SAP Solutions &amp; Technical Services
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
                Strategic roadmap formulation, clean-core application modernization, custom extension engineering, and SLA-governed support delivered by seasoned enterprise consultants.
              </p>
              <div className="pt-2">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#087FE5] hover:bg-[#063B83] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
                >
                  <span>VIEW ALL PRACTICES</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* 7 Client-Requested SAP Services Matching Header Dropdown Exactly */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  id: 'sap-rollout',
                  title: 'SAP Rollout',
                  desc: 'Scale your standardized corporate SAP blueprint to new business units, international subsidiaries, and operating facilities with disciplined cutover governance.',
                  image: '/sap_service_card_rollout_fullhd.jpg',
                  badge: 'SAP SERVICES'
                },
                {
                  id: 'sap-ams',
                  title: 'SAP AMS (Application Management Services)',
                  desc: 'Dependable L1-L3 SLA-governed support, 24/7 proactive monitoring, incident management, and continuous ERP performance tuning.',
                  image: '/sap_service_card_support_fullhd.jpg',
                  badge: 'SAP SERVICES'
                },
                {
                  id: 'rise-with-sap',
                  title: 'Rise with SAP',
                  desc: 'Comprehensive business transformation as a service guiding your journey to SAP S/4HANA Cloud with minimal risk and guaranteed ROI.',
                  image: '/zisantech_collaborative_consulting.jpg',
                  badge: 'SAP SERVICES'
                },
                {
                  id: 'sap-migration',
                  title: 'SAP Migration',
                  desc: 'Safe, predictable migration from SAP ECC to S/4HANA via Brownfield, Greenfield, or Selective Data Transition pathways.',
                  image: '/hero_sap_consulting_1.jpg',
                  badge: 'SAP SERVICES'
                },
                {
                  id: 'sap-integration-btp',
                  title: 'SAP Integration & BTP',
                  desc: 'Seamlessly bridge SAP with third-party software, cloud platforms, e-commerce stores, logistics APIs, and SAP BTP extensions.',
                  image: '/sap_service_card_integration_fullhd.jpg',
                  badge: 'SAP SERVICES'
                },
                {
                  id: 'sap-analytics',
                  title: 'SAP Analytics',
                  desc: 'Real-time corporate dashboards, predictive financial modeling, and unified data intelligence with SAP Analytics Cloud (SAC) and Datasphere.',
                  image: '/photo-1542744173-8e7e53415bb0.jpg',
                  badge: 'SAP SERVICES'
                },
                {
                  id: 'sap-ai-automation',
                  title: 'SAP AI & Automation',
                  desc: 'Infuse artificial intelligence, machine learning, and automated statutory compliance into core enterprise ERP workflows.',
                  image: '/modern_dev_team_hd.jpg',
                  badge: 'SAP SERVICES'
                }
              ].map((svc, idx) => (
                <motion.div
                  key={svc.id}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  whileHover={{ y: -8 }}
                  onClick={() => navigate(`/services/${svc.id}`)}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-[#087FE5]/20 transition-all duration-500 border border-slate-200/90 hover:border-[#087FE5] flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    <div className="relative h-56 sm:h-60 overflow-hidden bg-slate-900">
                      <img
                        src={svc.image}
                        alt={svc.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-[0.5deg]"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/hero_sap_consulting_2.jpg';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071B49]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
                      <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-md bg-[#071B49]/90 backdrop-blur-md text-[#08B9E8] text-[10px] font-bold uppercase font-mono tracking-wider border border-[#087FE5]/40 shadow-md">
                        {svc.badge}
                      </div>
                      <div className="absolute bottom-3.5 right-3.5 w-8 h-8 rounded-full bg-white/95 backdrop-blur text-[#063B83] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-75 transition-all duration-300 shadow-md group-hover:bg-[#087FE5] group-hover:text-white">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="p-7 space-y-3">
                      <h3 className="text-xl font-bold text-[#071B49] group-hover:text-[#087FE5] transition-colors font-heading leading-snug">
                        <Link
                          to={`/services/${svc.id}`}
                          onClick={(e) => e.stopPropagation()}
                          className="hover:text-[#087FE5] transition-colors"
                        >
                          {svc.title}
                        </Link>
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {svc.desc}
                      </p>
                    </div>
                  </div>

                  <div className="px-7 pb-6 pt-0">
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                      <Link
                        to={`/services/${svc.id}`}
                        onClick={(e) => e.stopPropagation()}
                        className="font-bold text-[#087FE5] group-hover:text-[#063B83] flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <span>Explore Scope</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                      </Link>
                      <Link
                        to={`/services/${svc.id}`}
                        onClick={(e) => e.stopPropagation()}
                        className="text-slate-400 group-hover:text-[#071B49] font-semibold transition-colors cursor-pointer"
                      >
                        <span>Enquire Now →</span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
          8. TRAINING & ENABLEMENT SECTION: (Images 1 & 2 - 8 Modules Grid)
      ========================================================================= */}
      <section id="training" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-[#0369A1] text-xs font-bold tracking-wide">
            <span>CAREER INCUBATION &amp; ENABLEMENT</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#071B49] font-outfit leading-tight tracking-tight">
            Build Practical Industry Competence with Hands-on SAP Training
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Practical learning programs featuring live system simulation, realistic business scenarios, and dedicated mentorship by experienced SAP practitioners.
          </p>
        </motion.div>

        {/* 8 Module Cards in 2 Rows of 4 (Images 1 & 2 Exact Match) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {[
            {
              id: 'sap-sd',
              badge: 'SAP-SD',
              title: 'SAP SD (Sales & Distribution)',
              desc: 'Hands-on configuration of Order-to-Cash (O2C) lifecycles, enterprise billing conditions, sales order fulfillment, shipping point determination, and credit management.',
              duration: '8 - 10 Weeks'
            },
            {
              id: 'sap-mm',
              badge: 'SAP-MM',
              title: 'SAP MM (Materials Management)',
              desc: 'Comprehensive inventory procurement lifecycles, material requirement planning, purchase order automation, valuation class mapping, and invoice verification.',
              duration: '8 - 10 Weeks'
            },
            {
              id: 'sap-pp',
              badge: 'SAP-PP',
              title: 'SAP PP (Production Planning)',
              desc: 'Live shop-floor manufacturing simulations, work center capacity planning, bill of materials (BOM) hierarchy, routing sequences, and production order execution.',
              duration: '8 - 10 Weeks'
            },
            {
              id: 'sap-qm',
              badge: 'SAP-QM',
              title: 'SAP QM (Quality Management)',
              desc: 'Structured quality inspection planning, sampling schemes, calibration protocols, certificate of analysis generation, and enterprise non-conformance tracking.',
              duration: '6 - 8 Weeks'
            },
            {
              id: 'sap-fico',
              badge: 'SAP-FICO',
              title: 'SAP FICO (Financial & Cost Management)',
              desc: 'Financial ledger harmonization, accounts payable/receivable automation, asset capitalization, internal cost allocation, and statutory financial reporting.',
              duration: '10 - 12 Weeks'
            },
            {
              id: 'sap-hcm',
              badge: 'SAP-HCM',
              title: 'SAP HCM (Human Capital Management)',
              desc: 'Workforce organizational hierarchy modeling, personnel administration, enterprise time evaluation schemas, compensation structures, and payroll run lifecycles.',
              duration: '8 - 10 Weeks'
            },
            {
              id: 'sap-ccm',
              badge: 'SAP-CCM',
              title: 'SAP CCM (Create Contact Management)',
              desc: 'Configuring enterprise contact management lifecycles, contract settlement agreements, incentive structures, and operational workflow reconciliation.',
              duration: '6 - 8 Weeks'
            },
            {
              id: 'sap-tm',
              badge: 'SAP-TM',
              title: 'SAP TM (Transportation Management)',
              desc: 'Multimodal freight order planning, dynamic carrier tendering, route optimization, real-time container tracking, and freight charge settlement workflows.',
              duration: '8 - 10 Weeks'
            }
          ].map((mod, idx) => (
            <motion.div
              key={mod.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              whileHover={{ y: -6, scale: 1.015 }}
              className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-[#087FE5]/15 border border-slate-200/90 hover:border-[#087FE5] transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
            >
              {/* Soft Watermark Corner Curve (Matching zisantech.vercel.app & Screenshot 1) */}
              <div
                className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#087FE5]/10 to-transparent rounded-bl-full pointer-events-none group-hover:from-[#087FE5]/25 transition-all duration-500"
              />

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono font-bold text-[#063B83] bg-blue-50/90 border border-blue-200/60 px-2.5 py-1 rounded-md shadow-xs group-hover:bg-[#063B83] group-hover:text-white transition-colors">
                    {mod.badge}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 font-mono">
                    Live Sandbox
                  </span>
                </div>

                <h3 className="text-base font-semibold text-[#071B49] group-hover:text-[#087FE5] transition-colors font-heading mb-2">
                  {mod.title}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-3 mb-4 leading-relaxed font-normal">
                  {mod.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between relative z-10">
                <a
                  href="#contact"
                  className="text-xs font-bold text-[#087FE5] group-hover:text-[#063B83] flex items-center gap-1 group-hover:gap-1.5 transition-all cursor-pointer"
                >
                  <span>Request Syllabus</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <span className="text-[11px] font-semibold text-slate-500 font-mono bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                  {mod.duration}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          5. INDUSTRIES WE SERVE SECTION: Placed directly after Counter Strip (Screenshot 1, 2, 3)
      ========================================================================= */}
      <section id="industries" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-3"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#087FE5]">
            INDUSTRIES WE SERVE
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#071B49] font-outfit leading-tight tracking-tight">
            Tailored Industry Solutions Powered by Enterprise SAP Architectures
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Vertical-specific SAP implementations engineered to address unique compliance, supply chain traceability, and shop-floor manufacturing challenges across dynamic business environments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              id: 'manufacturing',
              title: 'Manufacturing',
              tagline: 'END-TO-END SHOP FLOOR TO TOP FLOOR ORCHESTRATION',
              desc: 'Enabling discrete and continuous process facilities with lean manufacturing cycles, integrated production planning, machine telemetrics, and predictive maintenance.',
              image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
              titleColor: 'text-white',
              linkColor: 'text-[#38BDF8]'
            },
            {
              id: 'retail-textile',
              title: 'Retail & Textile',
              tagline: 'AGILE OMNICHANNEL FULFILLMENT & YARN-TO-GARMENT LIFECYCLE',
              desc: 'Orchestrating multi-tier textile inventories, shade-wise dye lot segregation, warehouse dispatch pipelines, and synchronized point-of-sale commerce platforms.',
              image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
              titleColor: 'text-white',
              linkColor: 'text-[#38BDF8]'
            },
            {
              id: 'oil-gas',
              title: 'Oil & Gas',
              tagline: 'RESILIENT DOWNSTREAM & UPSTREAM ASSET GOVERNANCE',
              desc: 'Enforcing regulatory traceability, preventive capital plant asset maintenance, joint-venture accounting structures, and multi-entity governance protocols.',
              image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
              titleColor: 'text-white',
              linkColor: 'text-[#38BDF8]'
            },
            {
              id: 'agro-chemical',
              title: 'Agro Chemical',
              tagline: 'STRINGENT FORMULATION GOVERNANCE & DISTRIBUTED DEALER NETWORKS',
              desc: 'Managing active ingredient recipe formulation, hazardous raw material documentation, seasonal distribution pricing, and statutory batch genealogy.',
              image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80',
              titleColor: 'text-white',
              linkColor: 'text-[#38BDF8]'
            },
            {
              id: 'steel',
              title: 'Steel & Metallurgy',
              tagline: 'HIGH-VOLUME MILL LOGISTICS, HEAT TRACKING & METAL YIELDS',
              desc: 'Streamlining furnace-to-finishing logistics, heat-wise metallurgical chemistry tracking, automated weighbridge integration, and heavy plant uptime.',
              image: '/industry_steel_metallurgy.jpg',
              titleColor: 'text-[#38BDF8]',
              linkColor: 'text-white'
            },
            {
              id: 'pharma',
              title: 'Pharma & Life Sciences',
              tagline: 'GXP VALIDATED FORMULATIONS, SERIALIZATION & COLD CHAIN INTEGRITY',
              desc: 'Delivering GxP-compliant validation frameworks, automated batch release controls, clinical-grade serialization tracking, and electronic audit logs.',
              image: '/industry_pharma_lifesciences.jpg',
              titleColor: 'text-white',
              linkColor: 'text-[#38BDF8]'
            }
          ].map((ind, idx) => (
            <motion.div
              key={ind.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="relative h-[390px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#087FE5]/35 border border-slate-800/80 hover:border-[#087FE5] transition-all duration-500 hover:-translate-y-2.5 group cursor-pointer bg-slate-900"
            >
              {/* Background Image with Zoom & Rotation Hover Animation */}
              <img
                src={ind.image}
                alt={ind.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-[0.5deg]"
              />

              {/* 3D Diagonal Sheen Sweep Reflection on Hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-10" />

              {/* Gradient Dark Vignette Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071B49] via-[#071B49]/70 to-[#071B49]/15 group-hover:via-[#071B49]/75 transition-all duration-500" />

              {/* Radial Luminous Blue Glow on Hover in Corner */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-[radial-gradient(circle,rgba(8,127,229,0.45)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl" />

              {/* Top-Right Badge: ● SAP Vertical (with hover lift) */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#071B49]/90 backdrop-blur-md border border-white/10 text-[#38BDF8] text-[10px] font-bold tracking-wider font-mono shadow flex items-center gap-1.5 group-hover:scale-105 group-hover:border-[#087FE5]/60 transition-all z-20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#087FE5] animate-pulse"></span>
                <span>SAP Vertical</span>
              </div>

              {/* Floating Action Circle Button on Hover */}
              <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg group-hover:bg-[#087FE5] z-20">
                <ArrowRight className="w-4 h-4" />
              </div>

              {/* Bottom Content Container */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 space-y-3 z-20">
                {/* Translucent Blue Tagline Box */}
                <div className="inline-block px-3 py-1.5 rounded-md bg-[#0284C7]/20 border border-[#0284C7]/40 backdrop-blur-sm group-hover:border-[#38BDF8]/60 group-hover:bg-[#0284C7]/35 transition-all">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#38BDF8] font-mono block">
                    {ind.tagline}
                  </span>
                </div>

                <h3 className={`text-2xl font-semibold ${ind.titleColor} font-heading group-hover:text-[#38BDF8] transition-colors leading-tight`}>
                  {ind.title}
                </h3>

                <p className="text-xs sm:text-[13px] text-slate-200 line-clamp-2 leading-relaxed font-normal">
                  {ind.desc}
                </p>

                <div className="pt-2">
                  <a
                    href="#contact"
                    className={`inline-flex items-center gap-1.5 text-xs font-bold ${ind.linkColor} group-hover:text-[#38BDF8] transition-colors`}
                  >
                    <span>Explore Industry Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-2 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      {/* =========================================================================
          SECOND BLUE DIVIDER: Exact Client Requested Position
      ========================================================================= */}
      <div className="relative w-full py-1 bg-gradient-to-r from-[#071B49] via-[#087FE5] to-[#071B49] shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="h-0.5 w-1/3 bg-gradient-to-r from-transparent via-[#08B9E8]/80 to-transparent"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#08B9E8] shadow-[0_0_10px_#08B9E8] mx-auto"></div>
          <div className="h-0.5 w-1/3 bg-gradient-to-r from-transparent via-[#08B9E8]/80 to-transparent"></div>
        </div>
      </div>

      {/* =========================================================================
          10. BLOGS & INSIGHTS SECTION (Images 3 & 4 Exact Match)
      ========================================================================= */}
      <section id="blogs" className="bg-[#f8fafc] py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-10 space-y-2"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#087FE5]">
              INSIGHTS &amp; PERSPECTIVES
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#071B49] font-outfit leading-tight tracking-tight mt-1">
              Blogs
            </h2>
            <div className="w-12 h-1 bg-[#087FE5] mx-auto mt-2 rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                day: '15',
                month: 'MAR',
                title: 'How SAP Consulting Helps Businesses Work Smarter',
                author: 'by ZisanTech Team',
                category: 'SAP Strategy',
                image: '/blog/1.jpeg',
                excerpt: 'Modern ERP is no longer just a digital ledger; it is the central operational engine orchestrating lean supply chains, rapid compliance, and real-time leadership insights.'
              },
              {
                id: 2,
                day: '18',
                month: 'MAR',
                title: 'Why Reliable IT Services Matter for Growing Businesses',
                author: 'by ZisanTech Team',
                category: 'IT Strategy',
                image: '/blog/2.jpeg',
                excerpt: 'Scaling an enterprise requires dependable, high-availability IT infrastructure and managed services that eliminate downtime and safeguard critical company data.'
              },
              {
                id: 3,
                day: '20',
                month: 'MAR',
                title: 'Building Your Career Through Practical SAP Training',
                author: 'by ZisanTech Team',
                category: 'SAP Careers',
                image: '/blog/3.jpeg',
                excerpt: 'Theoretical slide decks do not prepare you for enterprise consulting. Why hands-on sandbox experience, real-world case studies, and business acumen define successful SAP professionals.'
              }
            ].map((blog, idx) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => navigate(`/blog/${blog.id}`)}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-2xl hover:shadow-[#087FE5]/20 hover:border-[#087FE5]/80 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between group cursor-pointer relative"
              >
                <div>
                  <div className="relative h-52 sm:h-56 overflow-hidden bg-slate-900">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-[0.5deg]"
                    />
                    {/* 3D Diagonal Sheen Sweep on Hover */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

                    {/* Gradient overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071B49]/70 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-500" />

                    {/* Blue Square Date Badge */}
                    <div className="absolute top-3 right-3 bg-[#087FE5] text-white px-3 py-1.5 rounded-lg text-center shadow-lg font-mono flex flex-col items-center min-w-[46px] group-hover:scale-105 group-hover:bg-[#0663c0] transition-all">
                      <span className="text-base font-extrabold leading-none">{blog.day}</span>
                      <span className="text-[10px] font-bold tracking-wider uppercase leading-tight mt-0.5">{blog.month}</span>
                    </div>

                    {/* Circle Arrow Button Pop-in on Hover */}
                    <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/95 backdrop-blur text-[#063B83] flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 shadow-md group-hover:bg-[#087FE5] group-hover:text-white">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-4 text-xs text-slate-500">
                      <span className="flex items-center gap-1.5 text-slate-600 font-medium">
                        <User className="w-3.5 h-3.5 text-[#087FE5]" />
                        <span>{blog.author}</span>
                      </span>
                      <span className="flex items-center gap-1.5 text-slate-600 font-medium">
                        <Tag className="w-3.5 h-3.5 text-[#087FE5]" />
                        <span>{blog.category}</span>
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#071B49] group-hover:text-[#087FE5] transition-colors leading-snug font-heading">
                      <Link
                        to={`/blog/${blog.id}`}
                        onClick={(e) => e.stopPropagation()}
                        className="hover:text-[#087FE5] transition-colors"
                      >
                        {blog.title}
                      </Link>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                      {blog.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0">
                  <div className="pt-4 border-t border-slate-100">
                    <Link
                      to={`/blog/${blog.id}`}
                      onClick={(e) => e.stopPropagation()}
                      className="font-bold text-xs text-[#087FE5] group-hover:text-[#063B83] flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Articles Action */}
          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#063B83] hover:bg-[#087FE5] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
            >
              <span>VIEW ALL BLOGS &amp; INSIGHTS</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          11. CLIENT REVIEWS / FEEDBACK (Small Cards - Polished Continuous Carousel)
      ========================================================================= */}
      <section id="reviews" className="bg-[#f0f4f9] py-16 sm:py-20 border-t border-slate-200 overflow-hidden relative">
        {/* Soft Ambient Background Highlights */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#087FE5]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#063B83]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#087FE5]/10 text-[#087FE5] text-[11px] font-bold tracking-widest uppercase mb-1">
              <Sparkles className="w-3 h-3 text-[#087FE5]" />
              <span>TESTIMONIALS &amp; CLIENT SUCCESS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#071B49] font-outfit leading-tight tracking-tight">
              Client Feedback &amp; Reviews
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-[#063B83] via-[#087FE5] to-[#08B9E8] mx-auto mt-2 rounded-full"></div>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 font-normal max-w-xl mx-auto">
              Trusted by enterprise leaders across manufacturing, retail, and process industries.
            </p>
          </motion.div>
        </div>

        {/* Continuous Automatic Smooth Looping Carousel */}
        <div className="relative w-full overflow-hidden py-3">
          {/* Subtle side fade masks for elegant enterprise feel */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-[#f0f4f9] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-[#f0f4f9] to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-5 w-max px-4 sm:px-8 cursor-grab active:cursor-grabbing"
            animate={{
              x: ['0%', '-50%']
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 32,
                ease: 'linear'
              }
            }}
            whileHover={{ transition: { duration: 60 } }}
          >
            {[
              {
                id: 1,
                name: 'Vikram Malhotra',
                role: 'VP of Technology',
                company: 'Precision Engineering Ltd.',
                rating: 5,
                feedback:
                  'ZisanTech delivered our S/4HANA migration ahead of timeline. Their consulting team ensured zero downtime for shop-floor operations.',
                initials: 'VM',
                accent: '#063B83'
              },
              {
                id: 2,
                name: 'Ananya Deshmukh',
                role: 'Supply Chain Director',
                company: 'Aura Apparels & Textiles',
                rating: 5,
                feedback:
                  'Their deep expertise in SAP MM & SD transformed our inventory visibility across 40+ warehouse locations seamlessly.',
                initials: 'AD',
                accent: '#087FE5'
              },
              {
                id: 3,
                name: 'Rajesh K. Singhania',
                role: 'Chief Financial Officer',
                company: 'Apex Metal & Mining Corp',
                rating: 5,
                feedback:
                  'Statutory GST e-invoicing and direct banking integration were deployed flawlessly with full audit readiness. Exceptional quality.',
                initials: 'RS',
                accent: '#063B83'
              },
              {
                id: 4,
                name: 'Siddharth Rao',
                role: 'General Manager - IT',
                company: 'BioPharma Solutions',
                rating: 5,
                feedback:
                  'Practical corporate training and 24/7 post-implementation support helped our team adapt to new ERP modules effortlessly.',
                initials: 'SR',
                accent: '#087FE5'
              },
              {
                id: 5,
                name: 'Pooja Venkatesh',
                role: 'Head of Operations',
                company: 'Kavita Process Chemicals',
                rating: 5,
                feedback:
                  'Unmatched domain depth in PP & QM batch tracing. Our production audit compliance time reduced by nearly 45%.',
                initials: 'PV',
                accent: '#063B83'
              },
              {
                id: 6,
                name: 'Harish Mehta',
                role: 'Enterprise Architect',
                company: 'NovaLogix Distribution',
                rating: 5,
                feedback:
                  'Proactive support and structured milestone governance made our RISE with SAP journey completely predictable and cost-effective.',
                initials: 'HM',
                accent: '#087FE5'
              },
              // Duplicate set to guarantee seamless infinite loop starting from Card 1
              {
                id: 'dup-1',
                name: 'Vikram Malhotra',
                role: 'VP of Technology',
                company: 'Precision Engineering Ltd.',
                rating: 5,
                feedback:
                  'ZisanTech delivered our S/4HANA migration ahead of timeline. Their consulting team ensured zero downtime for shop-floor operations.',
                initials: 'VM',
                accent: '#063B83'
              },
              {
                id: 'dup-2',
                name: 'Ananya Deshmukh',
                role: 'Supply Chain Director',
                company: 'Aura Apparels & Textiles',
                rating: 5,
                feedback:
                  'Their deep expertise in SAP MM & SD transformed our inventory visibility across 40+ warehouse locations seamlessly.',
                initials: 'AD',
                accent: '#087FE5'
              },
              {
                id: 'dup-3',
                name: 'Rajesh K. Singhania',
                role: 'Chief Financial Officer',
                company: 'Apex Metal & Mining Corp',
                rating: 5,
                feedback:
                  'Statutory GST e-invoicing and direct banking integration were deployed flawlessly with full audit readiness. Exceptional quality.',
                initials: 'RS',
                accent: '#063B83'
              },
              {
                id: 'dup-4',
                name: 'Siddharth Rao',
                role: 'General Manager - IT',
                company: 'BioPharma Solutions',
                rating: 5,
                feedback:
                  'Practical corporate training and 24/7 post-implementation support helped our team adapt to new ERP modules effortlessly.',
                initials: 'SR',
                accent: '#087FE5'
              },
              {
                id: 'dup-5',
                name: 'Pooja Venkatesh',
                role: 'Head of Operations',
                company: 'Kavita Process Chemicals',
                rating: 5,
                feedback:
                  'Unmatched domain depth in PP & QM batch tracing. Our production audit compliance time reduced by nearly 45%.',
                initials: 'PV',
                accent: '#063B83'
              },
              {
                id: 'dup-6',
                name: 'Harish Mehta',
                role: 'Enterprise Architect',
                company: 'NovaLogix Distribution',
                rating: 5,
                feedback:
                  'Proactive support and structured milestone governance made our RISE with SAP journey completely predictable and cost-effective.',
                initials: 'HM',
                accent: '#087FE5'
              }
            ].map((review, idx) => (
              <motion.div
                key={review.id}
                whileHover={{
                  y: -6,
                  scale: 1.015,
                  boxShadow: '0 20px 30px -10px rgba(8, 127, 229, 0.18)'
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="w-[280px] sm:w-[320px] flex-shrink-0 bg-white/95 backdrop-blur-sm rounded-xl p-5 border border-slate-200/90 shadow-sm hover:border-[#087FE5]/60 flex flex-col justify-between group transition-colors duration-300 relative overflow-hidden"
              >
                {/* Subtle top accent gradient bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 transition-all duration-300 opacity-60 group-hover:opacity-100"
                  style={{
                    background:
                      idx % 2 === 0
                        ? 'linear-gradient(90deg, #063B83, #087FE5)'
                        : 'linear-gradient(90deg, #087FE5, #08B9E8)'
                  }}
                />

                <div className="space-y-3 pt-1">
                  {/* Top row: 5 Stars + Subtle Quote Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400 drop-shadow-xs" />
                      ))}
                    </div>
                    <Quote className="w-4 h-4 text-slate-300 group-hover:text-[#087FE5] transition-colors" />
                  </div>

                  {/* Feedback Text - Compact & Balanced Typography */}
                  <p className="text-xs text-slate-700 leading-relaxed italic line-clamp-4">
                    "{review.feedback}"
                  </p>
                </div>

                {/* Client Profile Footer */}
                <div className="pt-3.5 mt-3.5 border-t border-slate-100 flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 shadow-sm ring-2 ring-white"
                    style={{ backgroundColor: review.accent }}
                  >
                    {review.initials}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-[#071B49] truncate font-heading group-hover:text-[#087FE5] transition-colors">
                      {review.name}
                    </h4>
                    <p className="text-[10px] text-slate-500 truncate leading-tight">
                      {review.role} • <span className="font-medium text-slate-700">{review.company}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          ENTERPRISE CTA BANNER WITH CONTACT STRIP (Exact Match to User Screenshot 1)
      ========================================================================= */}
      <section
        id="contact-cta"
        className="relative z-10 text-white border-t border-b border-[#051232]"
      >
        {/* Top Part: Gradient from deep navy blue to dark midnight */}
        <div className="bg-gradient-to-r from-[#061b48] via-[#05143d] to-[#040b1e] pt-14 pb-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl lg:text-[34px] font-semibold text-white font-outfit tracking-tight leading-snug"
            >
              Accelerate Your Enterprise Transformation with ZisanTech
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xs sm:text-[13.5px] text-slate-300 max-w-xl mx-auto leading-relaxed"
            >
              Consult directly with our experienced SAP practitioners to assess system architecture, formulate migration milestones, and integrate enterprise compliance workflows.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="#contact"
                className="w-full sm:w-auto text-center px-7 py-2.5 bg-[#087FE5] hover:bg-[#0663c0] text-white text-[11px] font-bold uppercase tracking-wider rounded-md transition-all shadow-md active:scale-95 cursor-pointer leading-normal"
              >
                SCHEDULE AN ARCHITECTURE REVIEW
              </a>
              <a
                href="tel:+918797818499"
                style={{ border: '1px solid #374262', backgroundColor: '#1d2848' }}
                className="w-full sm:w-auto text-center px-6 py-2.5 hover:bg-[#253254] text-white text-[11px] font-bold uppercase tracking-wider rounded-md transition-all active:scale-95 cursor-pointer leading-normal"
              >
                CONNECT DIRECTLY: +91 87978 18499
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Floating Action / Chat Button on the Right Edge (Matches Screenshot) */}
      <a
        href="#contact"
        className="fixed right-6 bottom-8 z-40 w-14 h-14 rounded-full bg-[#087FE5] hover:bg-[#063B83] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group cursor-pointer"
        aria-label="Enquire / Chat"
      >
        <MessageSquare className="w-6 h-6 group-hover:scale-110 transition-transform fill-current text-white" />
      </a>
    </div>
  );
};
