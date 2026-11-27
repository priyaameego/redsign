import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import {
  Factory,
  ShoppingBag,
  Fuel,
  Sprout,
  Workflow,
  FlaskConical,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  TrendingUp,
  Cpu,
  PhoneCall,
  Clock,
  Layers,
  BarChart3,
  Check,
  ChevronDown,
  Building2,
  FileCheck,
  Send,
  HelpCircle,
  Compass
} from 'lucide-react';
import {
  DETAILED_INDUSTRIES,
  DetailedIndustry
} from '../data/industryDetails/detailedIndustries';
import { COMPANY_INFO } from '../data/siteData';

interface IndustryDetailPageProps {
  industrySlugOverride?: string;
}

export const IndustryDetailPage: React.FC<IndustryDetailPageProps> = ({ industrySlugOverride }) => {
  const { industryId } = useParams<{ industryId?: string }>();
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Normalize slug resolution
  const targetSlug = (industrySlugOverride || industryId || 'manufacturing').toLowerCase().trim();

  // Find matching industry data
  const industry: DetailedIndustry = React.useMemo(() => {
    if (DETAILED_INDUSTRIES[targetSlug]) {
      return DETAILED_INDUSTRIES[targetSlug];
    }
    const found = Object.values(DETAILED_INDUSTRIES).find(
      (ind) =>
        ind.slug === targetSlug ||
        ind.id === targetSlug ||
        ind.alternateSlugs?.some((alt) => alt.toLowerCase() === targetSlug)
    );
    return found || DETAILED_INDUSTRIES.manufacturing;
  }, [targetSlug]);

  // Update dynamic document title & scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${industry.name} Industry Solutions & SAP Architecture | ZisanTech`;
  }, [industry]);

  // Framer Motion Scroll Hooks for Interactive Up/Down Animation
  const { scrollY, scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  // Parallax calculations for hero background & decorative ambient lighting
  const heroImageY = useTransform(scrollY, [0, 600], [0, 130]);
  const heroImageScale = useTransform(scrollY, [0, 600], [1.02, 1.16]);
  const heroTextY = useTransform(scrollY, [0, 500], [0, 50]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.45]);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const getIndustryIcon = (id: string, className = 'w-6 h-6') => {
    switch (id) {
      case 'manufacturing':
        return <Factory className={className} />;
      case 'retail-textile':
        return <ShoppingBag className={className} />;
      case 'oil-gas':
        return <Fuel className={className} />;
      case 'agro-chemical':
        return <Sprout className={className} />;
      case 'steel-metallurgy':
      case 'steel':
        return <Workflow className={className} />;
      case 'pharma':
      case 'pharma-life-sciences':
        return <FlaskConical className={className} />;
      default:
        return <Building2 className={className} />;
    }
  };

  const allIndustriesList = Object.values(DETAILED_INDUSTRIES);

  return (
    <div className="bg-white text-slate-800 font-sans selection:bg-[#087FE5] selection:text-white relative">
      {/* =========================================================================
          INTERACTIVE SCROLL PROGRESS BAR (Glowing Electric Cyan)
      ========================================================================= */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#063B83] via-[#087FE5] to-[#38BDF8] z-50 origin-left shadow-[0_0_12px_rgba(56,189,248,0.7)] pointer-events-none"
      />

      {/* =========================================================================
          1. BREADCRUMBS BAR (Clean & Accessible)
      ========================================================================= */}
      <nav aria-label="Breadcrumb" className="bg-[#040E26] border-b border-white/10 py-3 relative z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <Link to="/industries" className="hover:text-white transition-colors">
              Industries We Serve
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-[#38BDF8] font-semibold">{industry.name}</span>
          </div>
        </div>
      </nav>

      {/* =========================================================================
          2. INDUSTRY LUXURY HERO BANNER WITH BALANCED DUAL-COLUMN SHOWCASE
      ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#071B49] py-16 sm:py-20 lg:py-24 text-white border-b border-blue-900/40">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column */}
            <motion.div
              style={{ y: heroTextY, opacity: heroOpacity }}
              className="lg:col-span-7 space-y-5"
            >
              {/* Industry Pill Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 border border-white/15 text-blue-100 text-xs font-semibold tracking-wider uppercase font-mono"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]"></span>
                <span>{industry.heroBadge}</span>
              </motion.div>

              {/* Main Title with Staggered Layer-Up Reveal */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-semibold text-white leading-[1.14] font-outfit tracking-[-0.02em] space-y-2">
                <motion.span
                  initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-white"
                >
                  {industry.heroHeading}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 0.75, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="block font-semibold bg-gradient-to-r from-[#38bdf8] via-[#08B9E8] to-[#60a5fa] bg-clip-text text-transparent drop-shadow-[0_2px_18px_rgba(8,185,232,0.35)]"
                >
                  {industry.heroHighlight}
                </motion.span>
              </h1>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-xs sm:text-[13px] font-bold tracking-widest uppercase text-[#38BDF8] font-mono flex items-center gap-2"
              >
                <span className="w-5 h-0.5 bg-[#38BDF8] rounded-full inline-block"></span>
                <span>{industry.tagline}</span>
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="text-sm sm:text-base text-slate-200/90 leading-relaxed font-normal max-w-xl drop-shadow-sm"
              >
                {industry.heroDescription}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5"
              >
                <Link
                  to="/contact"
                  className="px-7 py-3.5 bg-gradient-to-r from-[#063B83] via-[#087FE5] to-[#38BDF8] hover:from-[#087FE5] hover:to-[#063B83] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-xl shadow-xl shadow-[#087FE5]/35 hover:shadow-2xl transition-all flex items-center justify-center gap-2 group hover:-translate-y-0.5 active:scale-95 cursor-pointer text-center"
                >
                  <span>CONSULT WITH AN ARCHITECT</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </Link>

                <a
                  href="#solutions"
                  className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm tracking-wider uppercase rounded-xl backdrop-blur-md border border-white/25 transition-all hover:-translate-y-0.5 active:scale-95 cursor-pointer text-center"
                >
                  EXPLORE ARCHITECTURAL PILLARS
                </a>
              </motion.div>

              {/* Trust Checkpoints */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="pt-3 flex flex-wrap items-center gap-4 text-[11px] sm:text-xs text-slate-300 font-mono"
              >
                <span className="flex items-center gap-1.5 text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8]" />
                  Clean-Core Ready
                </span>
                <span className="text-slate-600">•</span>
                <span className="flex items-center gap-1.5 text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8]" />
                  Sub-Second GST/IRN
                </span>
                <span className="text-slate-600">•</span>
                <span className="flex items-center gap-1.5 text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8]" />
                  24/7 SLA Hypercare
                </span>
              </motion.div>
            </motion.div>

            {/* Right Visual Card Showcase Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative"
            >
              {/* Ambient Sapphire Card Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#087FE5]/35 via-[#38BDF8]/20 to-[#08B9E8]/30 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity pointer-events-none" />

              {/* Main Visual Showcase Frame */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-white/20 shadow-[0_25px_60px_-15px_rgba(8,127,229,0.4)] bg-[#03091e] group">
                <img
                  src={industry.primaryImage}
                  alt={industry.name}
                  className="w-full h-[320px] sm:h-[380px] lg:h-[400px] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108 filter brightness-[0.95] contrast-[1.08]"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/hero_sap_enterprise_luxury.jpg';
                  }}
                />

                {/* Layered Vignette for maximum depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#02081c] via-[#02081c]/35 to-transparent pointer-events-none" />

                {/* 3D Diagonal Light Sheen Sweep on hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

                {/* Top Floating Pill: Live Practice Status */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#040e28]/90 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono shadow-xl">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="font-bold text-slate-100 uppercase tracking-wider">{industry.name} Practice</span>
                </div>

                {/* Bottom Floating Glassmorphism Metric Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#05143A]/90 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-2xl flex items-center justify-between text-white">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono text-[#38BDF8] uppercase font-bold tracking-wider">
                      VERIFIED ARCHITECTURAL BENCHMARK
                    </span>
                    <p className="text-xl sm:text-2xl font-extrabold font-outfit text-white">
                      {industry.stats[0]?.value || 'Production Grade'}
                    </p>
                    <p className="text-[11px] text-slate-300 font-medium truncate max-w-[200px] sm:max-w-xs">
                      {industry.stats[0]?.label || 'Proven Enterprise SLA Standard'}
                    </p>
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#087FE5] to-[#38BDF8] text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#087FE5]/40 ml-3">
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. FOUR VALUE / METRIC KPI STRIP (Interactive Scroll In/Out)
      ========================================================================= */}
      <section className="relative z-20 -mt-8 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {industry.stats.map((st, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{
                y: -6,
                scale: 1.025,
                boxShadow: '0 20px 30px -10px rgba(8, 127, 229, 0.25)',
                borderColor: '#087FE5'
              }}
              className="bg-white p-5 sm:p-6 rounded-2xl shadow-lg shadow-slate-900/5 border border-slate-200/90 transition-all duration-300 group cursor-default"
            >
              <span className="text-2xl sm:text-3xl font-extrabold text-[#071B49] group-hover:text-[#087FE5] transition-colors font-outfit block">
                {st.value}
              </span>
              <p className="text-xs sm:text-[13px] font-bold text-slate-800 mt-1 uppercase tracking-wider font-mono">
                {st.label}
              </p>
              <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 font-normal">
                {st.sublabel}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          4. EXECUTIVE SUMMARY & STRATEGIC COMPOSITION (Interactive Image Reveal)
      ========================================================================= */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -30, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#087FE5]/10 text-[#087FE5] text-[11px] font-bold tracking-widest uppercase font-mono">
              <Layers className="w-3.5 h-3.5" />
              <span>INDUSTRY DOMAIN EXPERTISE</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#071B49] font-outfit leading-tight">
              Strategic ERP Foundations for {industry.name} Operations
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {industry.executiveSummary}
            </p>

            {/* Key Deliverables Checkpoints with Staggered Hover Effect */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {[
                'Standardized SAP Template & Rapid Rollout Methodology',
                'Statutory Indian GST, E-Invoice & E-Way Bill Integration',
                'Automated Real-Time Plant & Logistics Visibility',
                'Clean-Core Architecture Ready for Continuous Innovation'
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-start gap-2.5 p-1 rounded-lg hover:bg-blue-50/50 transition-colors"
                >
                  <div className="w-5 h-5 rounded-full bg-blue-50 text-[#087FE5] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Deployed Modules Pills */}
            <div className="pt-4 border-t border-slate-100 space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono block">
                Deployed Core Systems &amp; Modules:
              </span>
              <div className="flex flex-wrap gap-2">
                {industry.modules.map((mod, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3 py-1 rounded-lg bg-slate-100 hover:bg-[#071B49] hover:text-white transition-all text-slate-800 text-xs font-semibold font-mono border border-slate-200 cursor-default shadow-xs"
                  >
                    {mod}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Image Composition with Floating Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group bg-slate-900">
              {/* Secondary Image with Ken Burns Hover */}
              <img
                src={industry.secondaryImage}
                alt={`${industry.name} Strategic Architecture`}
                className="w-full h-[380px] sm:h-[440px] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/hero_sap_boardroom_luxury.jpg';
                }}
              />

              {/* Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071B49] via-[#071B49]/40 to-transparent pointer-events-none" />

              {/* 3D Diagonal Sheen Sweep */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

              {/* Floating Credential Badge with Gentle Floating Loop */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-5 left-5 right-5 bg-[#05143A]/90 backdrop-blur-md rounded-xl p-4 border border-white/20 text-white shadow-xl flex items-center justify-between"
              >
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#087FE5]/30 text-[#38BDF8] text-[10px] font-bold font-mono uppercase mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-ping" />
                    <span>PRODUCTION GRADE</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold font-heading">
                    {industry.name} Practice Center of Excellence
                  </p>
                  <p className="text-[11px] text-slate-300">
                    SLA-governed deployment &amp; 24/7 post go-live support
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#087FE5] to-[#08B9E8] text-white flex items-center justify-center flex-shrink-0 shadow-md ml-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          5. KEY INDUSTRY CHALLENGES (Interactive Staggered Entry on Scroll)
      ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#f8fafc] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-2xl mx-auto mb-12 space-y-2"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#087FE5] font-mono">
              COMPLEXITIES WE SOLVE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#071B49] font-outfit">
              Critical Challenges in {industry.name}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Overcoming systemic operational hurdles, compliance bottlenecks, and data disconnects across the value chain.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industry.challenges.map((ch, idx) => (
              <motion.div
                key={ch.id}
                initial={{ opacity: 0, y: 30, x: idx % 2 === 0 ? -12 : 12 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{
                  y: -8,
                  scale: 1.015,
                  borderColor: '#f59e0b',
                  boxShadow: '0 20px 35px -10px rgba(245, 158, 11, 0.2)'
                }}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-sm transition-all duration-300 flex flex-col justify-between group cursor-default"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded bg-amber-50 text-amber-700 font-mono text-[11px] font-bold border border-amber-200">
                      PAIN POINT {ch.id}
                    </span>
                    <AlertCircle className="w-5 h-5 text-amber-500 group-hover:scale-110 transition-transform" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#063B83] transition-colors">
                    {ch.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {ch.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-start gap-2 text-xs text-amber-800 bg-amber-50/60 p-2.5 rounded-lg">
                  <span className="font-bold font-mono shrink-0">IMPACT:</span>
                  <span className="font-medium">{ch.impact}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. TAILORED ARCHITECTURAL SOLUTIONS & PILLARS (Interactive 3D Hover)
      ========================================================================= */}
      <section id="solutions" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-12 space-y-2"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#087FE5] font-mono">
            ARCHITECTURAL FRAMEWORK
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#071B49] font-outfit">
            Tailored Architectural Solutions
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Engineered ERP capabilities and clean-core integrations designed specifically for {industry.name} workflows.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {industry.solutions.map((sol, idx) => (
            <motion.div
              key={sol.id}
              initial={{ opacity: 0, y: 35, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{
                y: -10,
                scale: 1.02,
                borderColor: '#087FE5',
                boxShadow: '0 25px 45px -12px rgba(8, 127, 229, 0.25)'
              }}
              className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-sm transition-all duration-300 flex flex-col justify-between group cursor-default"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-md bg-[#087FE5]/10 text-[#087FE5] font-mono text-xs font-bold border border-[#087FE5]/30">
                    {sol.module}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#087FE5] flex items-center justify-center group-hover:bg-[#087FE5] group-hover:text-white transition-colors group-hover:rotate-6">
                    <Cpu className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#071B49] group-hover:text-[#087FE5] transition-colors">
                  {sol.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {sol.description}
                </p>

                <div className="space-y-2 pt-2">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                    Key Architectural Capabilities:
                  </p>
                  <ul className="space-y-1.5">
                    {sol.features.map((feat, fIdx) => (
                      <motion.li
                        key={fIdx}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.15 }}
                        className="flex items-start gap-2 text-xs sm:text-sm text-slate-700"
                      >
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5 stroke-[2.5]" />
                        <span>{feat}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#087FE5]">
                <span>Deployed on SAP S/4HANA &amp; BTP</span>
                <Link to="/contact" className="hover:underline flex items-center gap-1 group-hover:gap-2 transition-all">
                  Consult Architect <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          7. END-TO-END OPERATIONAL WORKFLOW (Sequential Scroll Progression)
      ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#071B49] text-white relative overflow-hidden">
        {/* Animated Background Highlights */}
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 right-0 w-96 h-96 bg-[#087FE5]/15 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-[#063B83]/25 rounded-full blur-3xl pointer-events-none"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-2xl mx-auto mb-12 space-y-2"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#38BDF8] font-mono">
              SYSTEMIC ORCHESTRATION
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white font-outfit">
              End-to-End {industry.name} Operational Workflow
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              How data, physical inventory, and financial balances execute seamlessly through every operational stage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-5">
            {industry.operationalWorkflows.map((wk, idx) => (
              <motion.div
                key={wk.step}
                initial={{ opacity: 0, y: 30, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.09, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{
                  y: -8,
                  scale: 1.04,
                  backgroundColor: 'rgba(255, 255, 255, 0.18)',
                  boxShadow: '0 15px 30px rgba(8, 127, 229, 0.35)'
                }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 flex flex-col justify-between transition-all duration-300 group cursor-default"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-extrabold text-[#38BDF8] font-mono group-hover:scale-110 transition-transform inline-block">
                      {wk.step}
                    </span>
                    <span className="text-[10px] font-mono font-bold uppercase text-slate-300 bg-white/10 px-2 py-0.5 rounded">
                      {wk.stage}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white group-hover:text-[#38BDF8] transition-colors">
                    {wk.name}
                  </h4>

                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {wk.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. MEASURABLE PROVEN OUTCOMES (KPI Bounce on Scroll)
      ========================================================================= */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-12 space-y-2"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#087FE5] font-mono">
            VERIFIABLE IMPACT
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#071B49] font-outfit">
            Measurable Proven Outcomes
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Real operational efficiencies and ROI delivered across enterprise deployments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industry.outcomes.map((out, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{
                y: -8,
                scale: 1.03,
                boxShadow: '0 20px 35px -10px rgba(8, 127, 229, 0.25)'
              }}
              className="p-6 rounded-2xl bg-gradient-to-br from-blue-50/70 via-white to-slate-50 border border-blue-200/70 shadow-sm text-center space-y-3 transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-[#087FE5]/10 text-[#087FE5] flex items-center justify-center mx-auto transition-transform group-hover:scale-110">
                <TrendingUp className="w-6 h-6" />
              </div>
              <span className="text-3xl sm:text-4xl font-extrabold text-[#071B49] font-outfit block">
                {out.metric}
              </span>
              <p className="text-xs font-bold uppercase tracking-wider text-[#087FE5] font-mono">
                {out.label}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                {out.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          9. VERIFIED INDUSTRY CASE STUDY SNAPSHOT (3D Glassmorphism)
      ========================================================================= */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{
            scale: 1.01,
            boxShadow: '0 30px 60px -15px rgba(8, 127, 229, 0.25)'
          }}
          className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden transition-all duration-500"
        >
          {/* Accent glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#087FE5]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="px-3.5 py-1 rounded-full bg-[#087FE5]/20 text-[#38BDF8] border border-[#087FE5]/40 text-xs font-bold font-mono tracking-wider uppercase">
                VERIFIED CASE SNAPSHOT • {industry.caseStudy.clientType}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Enterprise Practice Lead: ZisanTech
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-outfit text-white">
              {industry.caseStudy.headline}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 space-y-2.5 hover:bg-white/15 hover:border-amber-400/50 transition-all shadow-lg">
                <span className="text-xs font-bold font-mono text-amber-300 uppercase block tracking-wider">
                  The Operational Challenge:
                </span>
                <p className="text-xs sm:text-sm text-slate-100 leading-relaxed font-normal">
                  {industry.caseStudy.challenge}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 space-y-2.5 hover:bg-white/15 hover:border-[#38BDF8]/60 transition-all shadow-lg">
                <span className="text-xs font-bold font-mono text-[#38BDF8] uppercase block tracking-wider">
                  Architectural Solution:
                </span>
                <p className="text-xs sm:text-sm text-slate-100 leading-relaxed font-normal">
                  {industry.caseStudy.architecture}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 space-y-2.5 hover:bg-white/15 hover:border-emerald-400/50 transition-all shadow-lg">
                <span className="text-xs font-bold font-mono text-emerald-300 uppercase block tracking-wider">
                  Verified Business Outcome:
                </span>
                <p className="text-xs sm:text-sm text-slate-100 leading-relaxed font-normal">
                  {industry.caseStudy.outcome}
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10">
              <span className="text-xs text-slate-400">
                Detailed architecture dossiers and reference client contacts available under NDA.
              </span>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-[#087FE5] hover:bg-[#063B83] text-white text-xs font-bold transition-all hover:scale-105 active:scale-95"
              >
                <span>Request Architecture Dossier</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* =========================================================================
          10. INDUSTRY SPECIFIC FREQUENTLY ASKED QUESTIONS (ACCORDION)
      ========================================================================= */}
      <section className="py-16 sm:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-10 space-y-2"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#087FE5] font-mono">
            FREQUENT QUESTIONS
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#071B49] font-outfit">
            {industry.name} Architecture FAQs
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Answers to common implementation, integration, and operational questions for this industry vertical.
          </p>
        </motion.div>

        <div className="space-y-4">
          {industry.faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#087FE5]/40 shadow-lg shadow-blue-500/5 ring-1 ring-[#087FE5]/10'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 sm:px-7 py-5 text-left flex items-center justify-between gap-4 cursor-pointer transition-colors group select-none"
                >
                  <span className={`text-sm sm:text-base font-bold tracking-tight transition-colors ${
                    isOpen ? 'text-[#063B83]' : 'text-slate-800 group-hover:text-[#087FE5]'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen
                      ? 'bg-[#087FE5] text-white rotate-180 shadow-xs'
                      : 'bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-[#087FE5]'
                  }`}>
                    <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-7 pb-6 pt-1">
                        <div className="p-4 sm:p-5 rounded-xl bg-slate-50/90 border border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed space-y-1.5">
                          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#087FE5]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#087FE5]" />
                            Verified Solution Insight
                          </div>
                          <p className="text-slate-600 font-normal leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          11. ALL 6 VERTICALS SWITCHER (EXPLORE OTHER SECTORS)
      ========================================================================= */}
      <section className="py-14 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#087FE5] font-mono">
                CONNECTED SECTORS
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#071B49] font-outfit">
                Explore Other Industry Verticals
              </h3>
            </div>
            <Link
              to="/industries"
              className="text-xs font-bold text-[#087FE5] hover:text-[#063B83] flex items-center gap-1 group"
            >
              <span>View All 6 Industries Landing</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
            {allIndustriesList.map((ind, i) => {
              const isCurrent = ind.id === industry.id;
              return (
                <motion.div
                  key={ind.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  whileHover={{ y: -6, scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <Link
                    to={`/industries/${ind.id}`}
                    className={`p-4 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-2 group h-full ${
                      isCurrent
                        ? 'bg-[#071B49] border-[#087FE5] text-white shadow-md'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-[#087FE5] hover:shadow-md'
                    }`}
                  >
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                        isCurrent
                          ? 'bg-[#087FE5] text-white'
                          : 'bg-slate-100 text-slate-600 group-hover:bg-[#087FE5]/10 group-hover:text-[#087FE5]'
                      }`}
                    >
                      {getIndustryIcon(ind.id, 'w-5 h-5')}
                    </div>
                    <span className="text-xs font-bold leading-tight line-clamp-1">
                      {ind.name}
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          12. CALL TO ACTION BANNER (CONSULT AN ARCHITECT)
      ========================================================================= */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.01 }}
          className="rounded-3xl bg-gradient-to-r from-[#071B49] via-[#063B83] to-[#087FE5] text-white p-10 sm:p-14 shadow-2xl relative overflow-hidden transition-all duration-500"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl space-y-5 relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#38BDF8] font-mono">
              GET IN TOUCH WITH SPECIALISTS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-outfit text-white">
              Ready to Accelerate Your {industry.name} Architecture?
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-2xl">
              Connect directly with our dedicated {industry.name} practice directors to audit your existing operational workflows, statutory tax requirements, and shop-floor integrations.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <Link
                to="/contact"
                className="px-8 py-4 rounded-xl bg-white text-[#071B49] hover:bg-slate-100 font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 text-center"
              >
                Schedule Vertical Discovery Session
              </Link>
              <a
                href={`tel:${COMPANY_INFO.primaryPhone}`}
                className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider backdrop-blur-md border border-white/25 transition-all text-center flex items-center gap-2 hover:scale-105 active:scale-95"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call {COMPANY_INFO.primaryPhone}</span>
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
export default IndustryDetailPage;
