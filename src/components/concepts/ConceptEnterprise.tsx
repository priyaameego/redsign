import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
  Check
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

export const ConceptEnterprise: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      badge: 'ENTERPRISE SAP CLOUD ARCHITECTURE',
      line1: 'Accelerate Growth With',
      highlight: 'SAP S/4HANA & Digital Cloud',
      line2: 'With ZisanTech Solutions',
      description: 'End-to-end enterprise SAP ERP consulting, agile implementations, cloud modernization, and continuous SLA support engineered for high-growth businesses.',
      bgImage: '/hero_sap_consulting_1.jpg',
      btnText: 'EXPLORE SERVICES',
      btnLink: '#services',
      secondaryBtnText: 'REQUEST CONSULTATION',
      secondaryBtnLink: '#contact-cta'
    },
    {
      badge: 'STRATEGIC SAP IT CONSULTING',
      line1: 'Seamless Integration &',
      highlight: 'Enterprise Process Automation',
      line2: 'Across Global Standards',
      description: 'Simplify business workflows, unify multi-plant operations, and connect distributed supply chains with reliable SAP integration and custom ERP solutions.',
      bgImage: '/hero_sap_consulting_2.jpg',
      btnText: 'SCHEDULE A DEMO',
      btnLink: '#contact-cta',
      secondaryBtnText: 'EXPLORE MODULES',
      secondaryBtnLink: '#training'
    },
    {
      badge: 'DATA-DRIVEN BUSINESS INTELLIGENCE',
      line1: 'Transforming Operations',
      highlight: 'Through SAP Intelligence & IT',
      line2: 'For Enterprise Excellence',
      description: 'Empowering enterprises and professionals with real-time analytics visibility, proven industry solutions, and career-oriented SAP training.',
      bgImage: '/hero_sap_consulting_3.jpg',
      btnText: 'KNOW OUR STORY',
      btnLink: '#know-our-story',
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
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
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
                      className="inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 shadow-md"
                    >
                      <span className="w-5 h-0.5 bg-[#08B9E8] rounded-full shadow-[0_0_8px_#08B9E8]"></span>
                      <span className="text-[11px] sm:text-xs font-bold tracking-widest text-slate-100 uppercase font-mono">
                        {slide.badge}
                      </span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                      key={`headline-${currentSlide}`}
                      initial={{ opacity: 0, y: 35, filter: 'blur(6px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                      className="text-2xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold text-white leading-[1.14] tracking-tight font-heading"
                    >
                      {slide.line1} <br />
                      <span className="text-[#08B9E8] drop-shadow-[0_2px_14px_rgba(8,185,232,0.45)]">
                        {slide.highlight}
                      </span>{' '}
                      <br />
                      {slide.line2}
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                      key={`desc-${currentSlide}`}
                      initial={{ opacity: 0, y: 25 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="text-xs sm:text-sm md:text-base text-slate-200 leading-relaxed max-w-xl font-normal"
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
                        className="w-full sm:w-auto text-center px-8 py-3.5 sm:py-4 bg-gradient-to-r from-[#063B83] via-[#087FE5] to-[#08B9E8] hover:from-[#087FE5] hover:to-[#063B83] text-white text-xs sm:text-sm font-extrabold tracking-wider uppercase rounded-lg shadow-xl shadow-[#087FE5]/30 transition-all flex items-center justify-center gap-2 group hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                      >
                        <span>{slide.btnText}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                      </a>

                      <a
                        href={slide.secondaryBtnLink}
                        className="w-full sm:w-auto text-center px-6 sm:px-7 py-3.5 sm:py-4 bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm tracking-wider uppercase rounded-lg backdrop-blur-md border border-white/25 transition-all hover:-translate-y-0.5 active:scale-95 cursor-pointer"
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
              className={`h-2 transition-all rounded-full cursor-pointer ${
                i === currentSlide ? 'w-8 bg-[#087FE5]' : 'w-2.5 bg-white/40 hover:bg-white'
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
              title: "Swift ERP Implementation",
              description: "Minimize downtime with our seasoned consulting team, ensuring a fast and seamless SAP S/4HANA Cloud rollout."
            },
            {
              icon: Rocket,
              title: "Real-time Analytics",
              description: "Gain a decisive operational edge with instant data insights from SAP, driving enterprise efficiency and executive visibility."
            },
            {
              icon: ThumbsUp,
              title: "Affordable Scalability",
              description: "Enjoy the scalability and flexibility of SAP Cloud offerings, adapting seamlessly to your corporate growth without friction."
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
                  <h3 className="text-lg sm:text-[19px] font-bold text-[#0c1e3d] group-hover:text-white transition-colors duration-200 mb-2.5 tracking-tight leading-snug">
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
          3. ZISANTECH "BUILDING A SUSTAINABLE DIGITAL FUTURE WITH SAP" (Screenshot 1)
      ========================================================================= */}
      <section id="about" className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
            {/* Base Image: Team working around table */}
            <div className="relative w-full sm:w-[86%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
              <img
                src="/zisantech_target_team_base.jpg"
                alt="ZisanTech Team Collaboration"
                className="w-full h-[360px] sm:h-[420px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/zisantech_collaborative_consulting.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071B49]/50 via-transparent to-transparent pointer-events-none"></div>
            </div>

            {/* Overlapping Image: Earth night lights from orbit */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative sm:absolute sm:right-0 sm:bottom-6 w-full sm:w-[68%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white mt-4 sm:mt-0 z-10 group bg-slate-900"
            >
              <img
                src="/zisantech_target_earth_front.jpg"
                alt="Digital Enterprise Cloud Mesh"
                className="w-full h-[230px] sm:h-[260px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/zisantech_enterprise_cloud_mesh.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071B49]/40 via-transparent to-transparent pointer-events-none"></div>
            </motion.div>

            {/* Floating Counter Badge: 360+ Satisfied Clients */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative sm:absolute sm:-bottom-4 sm:left-4 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-2xl border border-slate-100 flex items-center gap-3.5 mt-4 sm:mt-0 max-w-xs"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#063B83] to-[#087FE5] text-white flex items-center justify-center font-bold shadow-md shadow-[#087FE5]/20 flex-shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-[#087FE5] leading-none font-heading">
                  360+
                </p>
                <p className="text-xs font-bold text-[#071B49] mt-1">
                  Satisfied Clients
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
                  DIGITIZE YOUR BUSINESS PROCESSES
                </span>
                <span className="w-8 h-0.5 bg-[#0066CC] rounded-full"></span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#071B49] mt-3 leading-[1.18] font-heading">
                <span className="text-[#0066CC]">ZisanTech,</span> Your Partner in Building a Sustainable Digital Future with SAP
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal"
            >
              ZisanTech, a leading enterprise RISE with SAP S/4HANA Partner, delivers proven solutions drawn from over a decade of verified industry expertise, recognized for innovative ERP services including:
            </motion.p>

            {/* Feature 1: ZisanTech Services (Image 2 Exact Match) */}
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
                  ZisanTech Services
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  As a certified SAP Gold Partner, ZisanTech provides licensing, implementation, consulting, and 24/7 SLA hyper-care support services.
                </p>
              </div>
            </motion.div>

            {/* Feature 2: Customized ERP Add-ons (Image 2 Exact Match) */}
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
                  Customized ERP Add-ons
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Specialized GST E-Invoicing, E-Way Bill integrations, and automated statutory compliance modules built for Indian enterprises.
                </p>
              </div>
            </motion.div>

            {/* Feature 3: Affordable ERP Solution for your Business (Image 3 Exact Match with Sleek Blue Top Border) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-3 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 border-t-2 border-t-[#087FE5] shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
            >
              <div>
                <h3 className="text-sm sm:text-base font-bold text-[#071B49] font-heading group-hover:text-[#087FE5] transition-colors">
                  Affordable ERP Solution for your Business
                </h3>
                <p className="text-xs text-slate-600 mt-1 font-normal">
                  Tailored implementations engineered for enterprise agility
                </p>
              </div>
              <a
                href="#services"
                className="text-xs font-bold text-[#087FE5] hover:text-[#063B83] flex items-center gap-1.5 uppercase tracking-wider transition-colors cursor-pointer flex-shrink-0"
              >
                <span>MORE</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. WHY CHOOSE ZISANTECH / RISE WITH SAP PARTNER (Screenshot 2)
      ========================================================================= */}
      <section id="why-choose-zisantech" className="bg-[#071B49] text-white py-20 lg:py-24 relative overflow-hidden">
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
                WHY CHOOSE ZISANTECH
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white leading-tight font-heading">
                Your Certified RISE with SAP S/4HANA Cloud Implementation Partner
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                We take pride in our extensive experience and dedication to delivering innovative solutions that drive business success. We're doing the right thing, the right way.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'End-to-end SAP services, pre and post-implementation.',
                  'Trusted SAP partner with proven enterprise delivery.',
                  '10+ Years of specialized SAP S/4HANA implementations.',
                  'Automated Indian statutory compliance: E-Invoice & E-Way Bill.',
                  'Expert certified SAP consultants with 24/7 round-the-clock support.'
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

            {/* Right Video / Visual Banner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <div className="rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 relative group bg-slate-900 cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80"
                  alt="ZisanTech Enterprise Team"
                  className="w-full h-[360px] sm:h-[400px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#063B83]/30 group-hover:bg-[#063B83]/20 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white text-[#063B83] flex items-center justify-center shadow-2xl pl-1 group-hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current text-[#063B83]" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. ZisanTech FUN FACTS / METRICS STRIP
      ========================================================================= */}
      <section id="metrics" className="bg-[#f5f8fc] py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="space-y-2"
            >
              <p className="text-4xl sm:text-5xl font-extrabold text-[#063B83] font-heading">
                10+
              </p>
              <p className="text-xs uppercase tracking-wider text-slate-600 font-bold">YEARS OF TRUST</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="space-y-2"
            >
              <p className="text-4xl sm:text-5xl font-extrabold text-[#087FE5] font-heading">
                120+
              </p>
              <p className="text-xs uppercase tracking-wider text-slate-600 font-bold">HAPPY CLIENTS</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="space-y-2"
            >
              <p className="text-4xl sm:text-5xl font-extrabold text-[#063B83] font-heading">
                50+
              </p>
              <p className="text-xs uppercase tracking-wider text-slate-600 font-bold">SAP CONSULTANTS</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="space-y-2"
            >
              <p className="text-4xl sm:text-5xl font-extrabold text-[#087FE5] font-heading">
                3,500+
              </p>
              <p className="text-xs uppercase tracking-wider text-slate-600 font-bold">TRAINED PROFESSIONALS</p>
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
      <section id="services" className="bg-[#f8fafc] py-24 border-t border-slate-200 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#087FE5]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-0 w-80 h-80 bg-[#063B83]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
          
          {/* =========================================================================
              PART 1: ORIGINAL ENTERPRISE SAP & IT SERVICES (6 Screenshot Cards Exact Match)
          ========================================================================= */}
          <div>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
              <div className="space-y-3 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-[#0369A1] text-xs font-bold tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-[#0284C7]"></span>
                  <span>PROVEN ENTERPRISE PRACTICE</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071B49] font-heading leading-tight tracking-tight">
                  Enterprise SAP &amp; IT Services
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  End-to-end consulting, migration, customization, and 24/7 managed support powered by certified SAP architects.
                </p>
              </div>
              <div className="flex-shrink-0">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#087FE5] hover:bg-[#063B83] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
                >
                  <span>EXPLORE ALL SERVICES</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* 6 Original White Cards Matching Screenshot 1, 2, 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  id: 'orig-sap-rollout',
                  title: 'SAP Rollout',
                  desc: 'Expand your global SAP template seamlessly across branches, subsidiaries, and manufacturing plants with minimal operational disruption.',
                  image: '/hero_sap_slide1.jpg',
                  badge: 'SAP SERVICES'
                },
                {
                  id: 'orig-sap-custom-solutions',
                  title: 'SAP Custom Solutions',
                  desc: 'Bespoke ABAP, Fiori apps, workflow automation, and custom enhancements tailored to your unique proprietary operational edges.',
                  image: '/hero_sap_slide3.jpg',
                  badge: 'SAP SERVICES'
                },
                {
                  id: 'orig-sap-support',
                  title: 'SAP Support',
                  desc: 'Dependable L1-L3 SLA-governed support, performance monitoring, defect resolution, and continuous system optimization.',
                  image: '/zisantech_collaborative_consulting.jpg',
                  badge: 'SAP SERVICES'
                },
                {
                  id: 'orig-sap-integration',
                  title: 'SAP Integration',
                  desc: 'Seamlessly bridge SAP with third-party software, cloud platforms, e-commerce stores, logistics APIs, and IoT devices.',
                  image: '/hero_sap_slide2.jpg',
                  badge: 'SAP SERVICES'
                },
                {
                  id: 'orig-sap-consulting',
                  title: 'SAP Consulting',
                  desc: 'Strategic ERP roadmapping, S/4HANA migration advisory, architecture reviews, and business process re-engineering.',
                  image: '/hero_sap_consulting_1.jpg',
                  badge: 'SAP SERVICES'
                },
                {
                  id: 'orig-sap-einvoice',
                  title: 'SAP E-Invoice & E-Way Bill',
                  desc: 'Direct, automated statutory compliance for GST E-Invoicing, QR codes, and E-Way Bill generation directly inside SAP.',
                  image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
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
                        {svc.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {svc.desc}
                      </p>
                    </div>
                  </div>

                  <div className="px-7 pb-6 pt-0">
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                      <a
                        href="#contact"
                        className="font-bold text-[#087FE5] group-hover:text-[#063B83] flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <span>Explore Scope</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                      </a>
                      <a
                        href="#contact"
                        className="text-slate-400 group-hover:text-[#071B49] font-semibold transition-colors cursor-pointer"
                      >
                        <span>Enquire Now →</span>
                      </a>
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
      <section id="training" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-[#0369A1] text-xs font-bold tracking-wide">
            <span>CAREER INCUBATION &amp; ENABLEMENT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071B49] font-heading leading-tight tracking-tight">
            Take Your Careers to New Heights with the Leading ERP Solution Provider
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Upskill with real enterprise projects, 24/7 dedicated server sandboxes, and structured curriculum designed by veteran SAP consultants.
          </p>
        </motion.div>

        {/* 8 Module Cards in 2 Rows of 4 (Images 1 & 2 Exact Match) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {[
            {
              id: 'sap-sd',
              badge: 'SAP-SD',
              title: 'SAP SD (Sales & Distribution)',
              desc: 'Master order-to-cash (O2C) cycles, enterprise sales structures, pricing procedures, delivery workflows, and...',
              duration: '8 - 10 Weeks'
            },
            {
              id: 'sap-mm',
              badge: 'SAP-MM',
              title: 'SAP MM (Materials Management)',
              desc: 'Master Procure-to-Pay (P2P), inventory governance, vendor evaluation, valuation, and physical inventory reconciliations.',
              duration: '8 - 10 Weeks'
            },
            {
              id: 'sap-pp',
              badge: 'SAP-PP',
              title: 'SAP PP (Production Planning)',
              desc: 'Master manufacturing work centers, bill of materials (BOM), routings, demand management, MRP, and shop floor...',
              duration: '8 - 10 Weeks'
            },
            {
              id: 'sap-qm',
              badge: 'SAP-QM',
              title: 'SAP QM (Quality Management)',
              desc: 'Master inspection lots, sampling procedures, quality certificates, defect recording, and audit management.',
              duration: '6 - 8 Weeks'
            },
            {
              id: 'sap-fico',
              badge: 'SAP-FICO',
              title: 'SAP FICO (Financial & Cost Management)',
              desc: 'Master general ledger, accounts payable/receivable, asset accounting, cost centers, profit centers, and fiscal...',
              duration: '10 - 12 Weeks'
            },
            {
              id: 'sap-hcm',
              badge: 'SAP-HCM',
              title: 'SAP HCM (Human Capital Management)',
              desc: 'Master organizational management, personnel administration, time recording, and payroll run configurations.',
              duration: '8 - 10 Weeks'
            },
            {
              id: 'sap-ccm',
              badge: 'SAP-CCM',
              title: 'SAP CCM (Compensation & Claims Management)',
              desc: 'Master inbound/outbound shipments, delivery documentation, picking strategies, packing units, and carrier...',
              duration: '6 - 8 Weeks'
            },
            {
              id: 'sap-tm',
              badge: 'SAP-TM',
              title: 'SAP TM (Transportation Management)',
              desc: 'Master freight order execution, carrier selection, route optimization, container tracking, and charge calculations.',
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

                <h3 className="text-base font-bold text-[#071B49] group-hover:text-[#087FE5] transition-colors font-heading mb-2">
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
      <section id="industries" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#087FE5]">
            INDUSTRIES WE SERVE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071B49] font-heading leading-tight tracking-tight">
            Digitize your industry performance with our top SAP ERP Solution
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Your industry-specific customized SAP ERP solutions for all business sizes, ensuring statutory compliance. We optimize processes, integrate best practices, and drive operational success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              id: 'manufacturing',
              title: 'Manufacturing',
              tagline: 'END-TO-END SHOP FLOOR TO TOP FLOOR ORCHESTRATION',
              desc: 'Empowering discrete and process manufacturers with lean production workflows, integrated supply chain forecasting, and IoT predictive maintenance.',
              image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
              titleColor: 'text-white',
              linkColor: 'text-[#38BDF8]'
            },
            {
              id: 'retail-textile',
              title: 'Retail & Textile',
              tagline: 'AGILE OMNICHANNEL FULFILLMENT & YARN-TO-GARMENT LIFECYCLE',
              desc: 'Delivering unified retail ERP, multi-channel commerce sync, inventory visibility, and structured yarn-to-garment supply chain execution.',
              image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
              titleColor: 'text-white',
              linkColor: 'text-[#38BDF8]'
            },
            {
              id: 'oil-gas',
              title: 'Oil & Gas',
              tagline: 'RESILIENT DOWNSTREAM & UPSTREAM ASSET GOVERNANCE',
              desc: 'Ensuring strict compliance, capital asset lifecycle integrity, vendor audit trails, and multi-currency global operational governance.',
              image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
              titleColor: 'text-white',
              linkColor: 'text-[#38BDF8]'
            },
            {
              id: 'agro-chemical',
              title: 'Agro Chemical',
              tagline: 'STRINGENT FORMULATION GOVERNANCE & DISTRIBUTED DEALER NETWORKS',
              desc: 'Accelerating formula versioning, hazardous material governance, seasonal distributor credit, and compliance-driven chemical batches.',
              image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80',
              titleColor: 'text-white',
              linkColor: 'text-[#38BDF8]'
            },
            {
              id: 'steel',
              title: 'Steel & Metallurgy',
              tagline: 'HIGH-VOLUME MILL LOGISTICS, HEAT TRACKING & METAL YIELDS',
              desc: 'Optimizing melt-shop to rolling-mill yields, heat-wise traceability, weighbridge integrations, and heavy furnace asset uptime.',
              image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
              titleColor: 'text-[#38BDF8]',
              linkColor: 'text-white'
            },
            {
              id: 'pharma',
              title: 'Pharma & Life Sciences',
              tagline: 'GXP VALIDATED FORMULATIONS, SERIALIZATION & COLD CHAIN INTEGRITY',
              desc: 'Enabling FDA 21 CFR Part 11 electronic records, batch release automation, clinical inventory serialization, and audit validation.',
              image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
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

                <h3 className={`text-2xl font-bold ${ind.titleColor} font-heading group-hover:text-[#38BDF8] transition-colors leading-tight`}>
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
      <section id="blogs" className="bg-[#f8fafc] py-24 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16 space-y-2"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#087FE5]">
              INSIGHTS &amp; PERSPECTIVES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071B49] font-heading leading-tight tracking-tight mt-1">
              Blogs
            </h2>
            <div className="w-12 h-1 bg-[#087FE5] mx-auto mt-2 rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                day: '2',
                month: 'DEC',
                title: 'Empowering Your Business with SAP',
                author: 'by Admin',
                category: 'Technology',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
                excerpt: 'How next-generation SAP ERP cloud architectures drive operational agility, eliminate...'
              },
              {
                id: 2,
                day: '7',
                month: 'JAN',
                title: 'SAP: Driving Industry Transformation ...',
                author: 'by Admin',
                category: 'Technology',
                image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
                excerpt: 'Explore how AI-integrated SAP S/4HANA automates predictive maintenance, supply...'
              },
              {
                id: 3,
                day: '12',
                month: 'FEB',
                title: 'SAP S/4HANA Cloud: Private or Public? ...',
                author: 'by Admin',
                category: 'Technology',
                image: '/hero_sap_consulting_1.jpg',
                excerpt: 'Comprehensive decision framework comparing private versus public cloud ERP deployments for...'
              }
            ].map((blog, idx) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
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

                    {/* Blue Square Date Badge (Image 3 exact) */}
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
                      <a href="#contact">{blog.title}</a>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                      {blog.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0">
                  <div className="pt-4 border-t border-slate-100">
                    <a
                      href="#contact"
                      className="font-bold text-xs text-[#087FE5] group-hover:text-[#063B83] flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>Read Full Insight</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
              className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-white font-heading tracking-tight leading-snug"
            >
              Need Expert SAP ERP Consulting for Your Business?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xs sm:text-[13.5px] text-slate-300 max-w-xl mx-auto leading-relaxed"
            >
              Speak directly with our senior SAP S/4HANA architects to evaluate your ERP roadmap, cloud migration strategy, and statutory tax integrations.
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
                GET A FREE DEMO / CONSULTATION
              </a>
              <a
                href="tel:+918797818499"
                style={{ border: '1px solid #374262', backgroundColor: '#1d2848' }}
                className="w-full sm:w-auto text-center px-6 py-2.5 hover:bg-[#253254] text-white text-[11px] font-bold uppercase tracking-wider rounded-md transition-all active:scale-95 cursor-pointer leading-normal"
              >
                CALL: +91 87978 18499
              </a>
            </motion.div>
          </div>
        </div>

        {/* Bottom Part: Darker midnight navy strip separated by precise border matching Screenshot 1 (#212c4a) */}
        <div 
          className="bg-[#04102a] py-6 border-t border-[#212c4a]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center text-left">
              {/* Phone */}
              <div className="flex items-center gap-3.5 group">
                <div className="w-10 h-10 rounded-xl bg-[#0066CC] text-white flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(0,102,204,0.6)] group-hover:scale-105 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block font-mono">
                    TALK TO AN ENTERPRISE ARCHITECT
                  </span>
                  <a
                    href="tel:+918797818499"
                    className="text-sm font-bold text-white hover:text-[#08B9E8] transition-colors"
                  >
                    +91 87978 18499
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3.5 group">
                <div className="w-10 h-10 rounded-xl bg-[#0066CC] text-white flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(0,102,204,0.6)] group-hover:scale-105 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block font-mono">
                    OFFICIAL CONSULTING ENQUIRY
                  </span>
                  <a
                    href="mailto:info@zisantech.com"
                    className="text-sm font-bold text-white hover:text-[#08B9E8] transition-colors"
                  >
                    info@zisantech.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center gap-3.5 group">
                <div className="w-10 h-10 rounded-xl bg-[#0066CC] text-white flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(0,102,204,0.6)] group-hover:scale-105 transition-transform">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block font-mono">
                    HEADQUARTERS &amp; DELIVERY HUB
                  </span>
                  <span className="text-xs font-semibold text-white block">
                    Commercial Business District, New Delhi, India
                  </span>
                </div>
              </div>
            </div>
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
