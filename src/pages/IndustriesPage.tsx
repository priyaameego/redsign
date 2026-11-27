import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import {
  Factory,
  ShoppingBag,
  Fuel,
  Sprout,
  Workflow,
  FlaskConical,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  BarChart3,
  Cpu,
  CheckCircle2,
  Building2,
  ExternalLink
} from 'lucide-react';
import { DETAILED_INDUSTRIES } from '../data/industryDetails/detailedIndustries';
import { IndustryDetailPage } from './IndustryDetailPage';

export const IndustriesPage: React.FC = () => {
  const { industryId } = useParams<{ industryId?: string }>();

  // If a sub-path is accessed via /industries/:industryId, delegate to IndustryDetailPage
  if (industryId) {
    return <IndustryDetailPage />;
  }

  // Update dynamic document title & scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Industries We Serve | Enterprise SAP & Digital Engineering | ZisanTech';
  }, []);

  // Framer Motion Scroll Hooks for Interactive Up/Down Animation
  const { scrollY, scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  // Parallax calculations for hero background & text
  const heroImageY = useTransform(scrollY, [0, 600], [0, 110]);
  const heroImageScale = useTransform(scrollY, [0, 600], [1, 1.15]);
  const heroTextY = useTransform(scrollY, [0, 500], [0, 45]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.5]);

  const industriesList = Object.values(DETAILED_INDUSTRIES);

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
      case 'pharma-life-sciences':
      case 'pharma':
        return <FlaskConical className={className} />;
      default:
        return <Building2 className={className} />;
    }
  };

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
          1. BREADCRUMBS BAR (Accessible & Clean)
      ========================================================================= */}
      <nav aria-label="Breadcrumb" className="bg-[#040E26] border-b border-white/10 py-3 relative z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-[#38BDF8] font-semibold">Industries We Serve</span>
          </div>
        </div>
      </nav>

      {/* =========================================================================
          2. LUXURY HERO BANNER WITH BALANCED DUAL-COLUMN SHOWCASE
      ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#071B49] py-16 sm:py-20 lg:py-24 text-white border-b border-blue-900/40">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column */}
            <motion.div
              style={{ y: heroTextY, opacity: heroOpacity }}
              className="lg:col-span-7 space-y-5"
            >
              <motion.div
                initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 border border-white/15 text-blue-100 text-xs font-semibold tracking-wider uppercase font-mono"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]"></span>
                <span>ENTERPRISE VERTICAL PRACTICES</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-semibold text-white leading-[1.14] font-outfit tracking-[-0.02em]"
              >
                Tailored Industry Solutions Powered by{' '}
                <span className="text-[#38BDF8]">
                  Enterprise SAP Architectures
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xs sm:text-[13px] font-bold tracking-widest uppercase text-[#38BDF8] font-mono flex items-center gap-2"
              >
                <span className="w-5 h-0.5 bg-[#38BDF8] rounded-full inline-block"></span>
                <span>6 FOUNDATIONAL SECTORS • CLEAN CORE • STATUTORY COMPLIANCE</span>
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="text-sm sm:text-base text-slate-200/90 leading-relaxed font-normal max-w-xl drop-shadow-sm"
              >
                Every industry vertical possesses distinctive shop-floor rhythms, batch traceability demands, GST/IRP compliance mandates, and supply chain constraints. Explore how ZisanTech delivers specialized SAP S/4HANA Cloud and BTP architectures across six foundational sectors.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5"
              >
                <a
                  href="#industries-grid"
                  className="px-7 py-3.5 bg-gradient-to-r from-[#063B83] via-[#087FE5] to-[#38BDF8] hover:from-[#087FE5] hover:to-[#063B83] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-xl shadow-xl shadow-[#087FE5]/35 hover:shadow-2xl transition-all flex items-center justify-center gap-2 group hover:-translate-y-0.5 active:scale-95 cursor-pointer text-center"
                >
                  <span>EXPLORE ALL 6 VERTICALS</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </a>

                <Link
                  to="/contact"
                  className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm tracking-wider uppercase rounded-xl backdrop-blur-md border border-white/25 transition-all hover:-translate-y-0.5 active:scale-95 cursor-pointer text-center"
                >
                  SCHEDULE ARCHITECT DISCOVERY
                </Link>
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
                  6 Dedicated Practices
                </span>
                <span className="text-slate-600">•</span>
                <span className="flex items-center gap-1.5 text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8]" />
                  Sub-Second GST/E-Way
                </span>
                <span className="text-slate-600">•</span>
                <span className="flex items-center gap-1.5 text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8]" />
                  Clean-Core S/4HANA
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
              <div className="absolute -inset-2 bg-gradient-to-r from-[#087FE5]/35 via-[#38BDF8]/20 to-[#08B9E8]/30 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="relative rounded-3xl overflow-hidden border-2 border-white/20 shadow-[0_25px_60px_-15px_rgba(8,127,229,0.4)] bg-[#03091e] group">
                <img
                  src="/hero_sap_enterprise_luxury.jpg"
                  alt="Enterprise SAP Architecture Solutions"
                  className="w-full h-[320px] sm:h-[380px] lg:h-[400px] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108 filter brightness-[0.95] contrast-[1.08]"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/manufacturing.jpg';
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#02081c] via-[#02081c]/35 to-transparent pointer-events-none" />
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#040e28]/90 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono shadow-xl">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="font-bold text-slate-100 uppercase tracking-wider">ENTERPRISE ARCHITECTURE</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-[#05143A]/90 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-2xl flex items-center justify-between text-white">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono text-[#38BDF8] uppercase font-bold tracking-wider">
                      CROSS-INDUSTRY EXCELLENCE
                    </span>
                    <p className="text-xl sm:text-2xl font-extrabold font-outfit text-white">
                      6 Foundational Sectors
                    </p>
                    <p className="text-[11px] text-slate-300 font-medium">
                      Zero Disruption Rollouts • 99.98% SLA Uptime
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
          3. ENTERPRISE KPI HIGHLIGHTS STRIP (Interactive Scroll In/Out)
      ========================================================================= */}
      <section className="relative z-20 -mt-8 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {[
            { value: '6 Verticals', label: 'Dedicated Practices', sub: 'Industry-Specific Templates' },
            { value: '100% Audit', label: 'Statutory Compliance', sub: 'GST, E-Invoice & E-Way Bill' },
            { value: '99.98%', label: 'Production Uptime', sub: 'Continuous Mission Critical SLA' },
            { value: '45-90 Days', label: 'Rapid Deployment', sub: 'Pre-Packaged Core Frameworks' }
          ].map((st, idx) => (
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
                {st.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          4. 6 DEDICATED INDUSTRY VERTICAL CARDS (Interactive Scroll Up/Down)
      ========================================================================= */}
      <section id="industries-grid" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#087FE5]/10 text-[#087FE5] text-[11px] font-bold tracking-widest uppercase font-mono">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>FULL VALUE CHAIN COVERAGE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#071B49] font-outfit">
            Engineered for High-Consequence Operational Domains
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Select an industry vertical below to inspect architectural blue-prints, operational challenges, SAP module integrations, measurable KPI benchmarks, and verified customer case studies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industriesList.map((ind, idx) => (
            <motion.div
              key={ind.id}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{
                y: -10,
                boxShadow: '0 25px 40px -15px rgba(8, 127, 229, 0.22)'
              }}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col justify-between group transition-all duration-300 relative"
            >
              <div>
                {/* Image Banner with Sheen & Badge */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-950">
                  <img
                    src={ind.primaryImage}
                    alt={ind.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-[0.88] contrast-[1.08]"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/hero_sap_enterprise_luxury.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05143A] via-[#05143A]/40 to-transparent pointer-events-none" />

                  {/* 3D Diagonal Sheen Sweep on hover */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

                  {/* Top Left Icon Pill */}
                  <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-[#05143A]/90 backdrop-blur-md border border-white/20 text-[#38BDF8] shadow-md flex items-center gap-2">
                    {getIndustryIcon(ind.id, 'w-5 h-5 text-[#38BDF8]')}
                    <span className="text-[10px] font-mono uppercase font-bold text-white tracking-wider">
                      {ind.id.toUpperCase()}
                    </span>
                  </div>

                  {/* Bottom Stats Floating Chip */}
                  <div className="absolute bottom-3 right-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-lg text-[11px] font-bold text-[#071B49] shadow-md border border-slate-200 flex items-center gap-1.5 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>{ind.stats[0]?.value || 'Proven'}</span>
                    <span className="text-slate-500 font-normal">Impact</span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#087FE5] font-mono block">
                      {ind.heroBadge}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#071B49] group-hover:text-[#087FE5] transition-colors font-outfit">
                      {ind.name}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 font-mono">
                      {ind.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {ind.executiveSummary}
                  </p>

                  {/* Core Deployed Modules Pills */}
                  <div className="pt-2 border-t border-slate-100 space-y-1.5">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                      Deployed ERP Modules:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {ind.modules.slice(0, 4).map((mod, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-mono text-[11px] font-semibold"
                        >
                          {mod}
                        </span>
                      ))}
                      {ind.modules.length > 4 && (
                        <span className="px-1.5 py-0.5 rounded-md bg-slate-50 text-slate-400 font-mono text-[10px]">
                          +{ind.modules.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer with Link */}
              <div className="p-6 pt-0">
                <Link
                  to={`/industries/${ind.slug}`}
                  className="w-full py-3 px-4 rounded-xl bg-slate-50 hover:bg-gradient-to-r hover:from-[#063B83] hover:to-[#087FE5] text-[#071B49] hover:text-white font-semibold text-xs transition-all duration-300 flex items-center justify-between group/btn border border-slate-200/80 hover:border-transparent shadow-xs"
                >
                  <span className="font-mono tracking-wider uppercase">View Full Architecture</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          5. METHODOLOGY & ARCHITECTURAL APPROACH (Interactive Multi-column)
      ========================================================================= */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-[#f8fafc] via-white to-[#f1f5f9] border-y border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-2xl mx-auto mb-16 space-y-3"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#087FE5]/10 text-[#087FE5] text-[11px] font-bold tracking-widest uppercase font-mono">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>THE ZISANTECH ADVANTAGE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-[#071B49] font-outfit tracking-tight">
              How We Deliver Industry Precision
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Moving past cookie-cutter ERP rollouts to build bespoke, resilient digital infrastructure tailored to your exact statutory and physical workflows.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Cpu className="w-6 h-6 text-white" />,
                title: 'Clean Core Architecture',
                desc: 'Preserving vanilla S/4HANA core integrity via SAP BTP extensions, ensuring seamless bi-annual upgrades with zero legacy technical debt.'
              },
              {
                icon: <ShieldCheck className="w-6 h-6 text-white" />,
                title: 'Statutory Compliance Guarantee',
                desc: 'Native integration with Indian GST e-Invoicing, E-Way Bill portals, hazardous material norms, and FDA 21 CFR Part 11 validation protocols.'
              },
              {
                icon: <BarChart3 className="w-6 h-6 text-white" />,
                title: 'Shop-Floor to Boardroom Data',
                desc: 'Direct PLC/SCADA telemetry sync into SAP Digital Manufacturing (DM) for true instantaneous plant floor visibility and analytics.'
              }
            ].map((col, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{
                  y: -8,
                  borderColor: '#087FE5',
                  boxShadow: '0 20px 35px -10px rgba(8, 127, 229, 0.18)'
                }}
                className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-sm transition-all duration-300 space-y-4 group cursor-default"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#063B83] via-[#087FE5] to-[#08B9E8] flex items-center justify-center shadow-lg shadow-[#087FE5]/25 group-hover:scale-105 transition-transform">
                  {col.icon}
                </div>
                <h3 className="text-xl font-bold text-[#071B49] group-hover:text-[#087FE5] transition-colors font-outfit">
                  {col.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {col.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. LUXURY CALL TO ACTION BANNER (Interactive Glow & Hover)
      ========================================================================= */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl bg-gradient-to-br from-[#020617] via-[#05143A] to-[#063B83] text-white p-8 sm:p-12 lg:p-16 border border-white/15 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 rounded-full bg-[#087FE5]/25 blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#38BDF8] font-mono">
              GET IN TOUCH WITH AN INDUSTRY SPECIALIST
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-outfit leading-tight">
              Ready to Accelerate Your Enterprise Transformation?
            </h2>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
              Schedule a technical discovery session with our senior SAP practice leads. We will review your current ERP topography, audit operational pain points, and provide a tailored digital roadmap.
            </p>
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-[#087FE5] to-[#38BDF8] hover:from-[#38BDF8] hover:to-[#087FE5] text-[#020617] font-bold text-xs sm:text-sm tracking-wider uppercase rounded-xl shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer text-center"
              >
                <span>BOOK AN INDUSTRY DISCOVERY SESSION</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm tracking-wider uppercase rounded-xl backdrop-blur-md border border-white/20 transition-all text-center"
              >
                EXPLORE ALL 13 SAP SERVICES
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
