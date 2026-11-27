import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  GraduationCap,
  Clock,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  Award,
  BookOpen,
  Calendar,
  PhoneCall,
  Terminal,
  Server,
  Layers,
  Cpu,
  Workflow,
  FileCheck,
  Database,
  Network,
  Zap,
  HelpCircle,
  Users2,
  Check,
  Send,
  Building2,
  Lock,
  ChevronDown,
  X,
  ExternalLink,
  Target,
  BarChart3,
  Flame,
  CheckCircle,
  Eye,
  Compass,
  Star
} from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';
import {
  getTrainingBySlug,
  getTrainingById,
  ALL_TRAINING_MODULES,
  DetailedTrainingModule
} from '../data/trainingDetails';

// Dynamic Icon Helper
const RenderHighlightIcon: React.FC<{ iconName: string; className?: string }> = ({
  iconName,
  className = 'w-5 h-5 text-[#087FE5]'
}) => {
  switch (iconName) {
    case 'Cpu':
      return <Cpu className={className} />;
    case 'Workflow':
      return <Workflow className={className} />;
    case 'Layers':
      return <Layers className={className} />;
    case 'ShieldCheck':
      return <ShieldCheck className={className} />;
    case 'FileCheck':
      return <FileCheck className={className} />;
    case 'Database':
      return <Database className={className} />;
    case 'Network':
      return <Network className={className} />;
    case 'Zap':
      return <Zap className={className} />;
    case 'Terminal':
      return <Terminal className={className} />;
    case 'BarChart3':
      return <BarChart3 className={className} />;
    default:
      return <CheckCircle2 className={className} />;
  }
};

export const TrainingDetailPage: React.FC = () => {
  const { slug, category, id } = useParams<{ slug?: string; category?: string; id?: string }>();
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();

  // Active state for curriculum accordion & FAQs
  const [openPhases, setOpenPhases] = useState<number[]>([0]);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const togglePhase = (idx: number) => {
    setOpenPhases(prev =>
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  const toggleAllPhases = () => {
    if (!moduleData) return;
    if (openPhases.length === moduleData.curriculum.length) {
      setOpenPhases([]);
    } else {
      setOpenPhases(moduleData.curriculum.map((_, i) => i));
    }
  };

  // Form State for Quick Enrollment / Syllabus Request
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    mode: 'Live Weekend Batch',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Lookup module: prioritize slug, fallback to id
  let moduleData: DetailedTrainingModule | undefined;
  if (slug) {
    const normalizedSlug = slug.replace(/-training$/, '');
    moduleData = getTrainingBySlug(normalizedSlug);
  } else if (id) {
    moduleData = getTrainingById(parseInt(id, 10));
  }

  // Scroll to top on module change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setOpenPhases([0]);
    setOpenFaqIndex(0);
    setFormSubmitted(false);
  }, [slug, id]);

  // If module not found, render elegant fallback
  if (!moduleData) {
    return (
      <div className="min-h-[70vh] bg-[#F6F9FD] text-slate-800 flex items-center justify-center px-4">
        <div className="max-w-md text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#087FE5] flex items-center justify-center mx-auto border border-blue-200">
            <GraduationCap className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-extrabold font-heading text-[#063B83]">Training Track Not Found</h1>
          <p className="text-slate-600 text-sm leading-relaxed">
            The requested SAP training program could not be located. Explore our catalog of 15 comprehensive SAP Functional and Technical tracks.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/training"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#087FE5] to-[#043E7A] text-white font-bold text-sm hover:shadow-lg transition-all"
            >
              Explore All 15 Tracks
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const isFunctional = moduleData.type === 'functional';
  const relatedModules = ALL_TRAINING_MODULES.filter(
    (m) => m.type === moduleData!.type && m.id !== moduleData!.id
  );

  // Signature ZisanTech Enterprise Brand Palette (Uniform across all 15 pages)
  const BRAND_COLOR = '#087FE5';
  const BRAND_NAVY = '#063B83';
  const BRAND_CYAN = '#08B9E8';
  const BRAND_GRADIENT = 'from-[#087FE5] via-[#0664B5] to-[#043E7A]';
  const BANNER_GRADIENT = 'from-[#063B83] via-[#042A63] to-[#02183B]';

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
    }, 2800);
  };

  return (
    <div className="bg-[#F6F9FD] min-h-screen text-slate-800 selection:bg-[#087FE5] selection:text-white font-sans overflow-x-hidden">
      {/* =========================================================================
          SECTION 1: CINEMATIC LUXURY HERO BANNER WITH KEN BURNS & SAPPHIRE GLOW
         ========================================================================= */}
      <section className="relative min-h-[620px] lg:min-h-[670px] bg-[#020b1e] text-white overflow-hidden flex items-center">
        {/* Module-Specific Background Visual with Subtle Ken Burns Zoom */}
        <motion.img
          key={moduleData.slug + '-hero'}
          src={moduleData.heroImage}
          alt={moduleData.title}
          initial={shouldReduceMotion ? false : { scale: 1.02 }}
          animate={
            shouldReduceMotion
              ? false
              : {
                  scale: [1.02, 1.12],
                  x: [0, -12],
                  y: [0, -6]
                }
          }
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: [0.25, 0.1, 0.25, 1]
          }}
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.70] contrast-[1.18]"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = '/cand_workspace.jpg';
          }}
        />

        {/* Dynamic Multi-Layer Cinematic Lighting Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020b1e]/98 via-[#031535]/85 to-[#020b1e]/55 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(8,127,229,0.30)_0%,transparent_65%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_75%,rgba(8,185,232,0.20)_0%,transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020b1e] via-transparent to-[#020b1e]/40 pointer-events-none" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 w-full">
          {/* Breadcrumb Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs text-slate-300 mb-8 font-medium"
          >
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/training" className="hover:text-white transition-colors">SAP Training</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-400">{moduleData.category}</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#08B9E8] font-semibold">{moduleData.code}</span>
          </motion.nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headlines, Highlights, and CTAs */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badges Bar */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="flex flex-wrap items-center gap-3"
              >
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 shadow-md">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#08B9E8] shadow-[0_0_8px_#08B9E8]" />
                  <span className="text-[11px] sm:text-xs font-bold tracking-widest text-slate-100 uppercase font-mono">
                    {moduleData.category} • Module 0{moduleData.id}
                  </span>
                </div>

                
              </motion.div>

              {/* Layer-Up Headline: One after another text reveal */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-extrabold text-white leading-[1.14] tracking-tight font-heading space-y-2">
                <motion.span
                  initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-white"
                >
                  {moduleData.heroHeadline}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 0.75, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="block bg-gradient-to-r from-[#38bdf8] via-[#08B9E8] to-[#60a5fa] bg-clip-text text-transparent drop-shadow-[0_2px_18px_rgba(8,185,232,0.35)] font-semibold"
                >
                  {moduleData.heroHighlight}
                </motion.span>
              </h1>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7, ease: 'easeOut' }}
                className="text-slate-200 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl font-light"
              >
                {moduleData.heroTagline}
              </motion.p>

              {/* CTA Button with 3D Light Sheen */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
                className="pt-6 flex flex-wrap items-center gap-4"
              >
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="relative group overflow-hidden inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#087FE5] via-[#0664B5] to-[#043E7A] text-white font-bold rounded-xl text-sm shadow-xl shadow-blue-950/60 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] active:scale-100 cursor-pointer"
                >
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
                  <Calendar className="w-4 h-4 text-white" />
                  <span>Request Batch Schedule &amp; Fees</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </div>

            {/* Right Column: Hero Visual Card with Floating Badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:border-white/40">
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none z-10" />

                <img
                  src={moduleData.heroImage}
                  alt={moduleData.title}
                  className="w-full h-[350px] sm:h-[430px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/hero_sap_slide1.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020b1e]/95 via-[#020b1e]/35 to-transparent pointer-events-none" />



                {/* Floating Rating Badge */}
                <div className="absolute top-4 right-4 bg-[#03142e]/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 text-white flex items-center gap-1.5 z-20 shadow-lg">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-xs font-bold font-mono">{moduleData.rating}</span>
                </div>

                {/* Bottom Glassmorphic Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#03142e]/92 backdrop-blur-md border border-white/20 text-white flex items-center justify-between shadow-2xl transition-all duration-300 hover:border-white/40 z-20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl border border-[#087FE5] bg-[#087FE5]/25 flex items-center justify-center text-[#08B9E8]">
                      <Terminal className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white uppercase tracking-wider">Live S/4HANA Sandbox</div>
                      <div className="text-[11px] text-slate-300">Dedicated Login & SPRO Config Access</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#087FE5]/30 text-white">
                    24/7 Live
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: 4-COLUMN METRICS HIGHLIGHT BAR (LUXURY FROSTED GLASS CARDS WITH AMBIENT GLOW)
         ========================================================================= */}
      <section className="bg-white/90 backdrop-blur-md border-y border-slate-200/80 py-10 shadow-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {moduleData.metrics.map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={shouldReduceMotion ? undefined : { y: -8, scale: 1.02 }}
                className="relative overflow-hidden flex flex-col items-center text-center p-6 rounded-3xl bg-gradient-to-br from-white via-[#fbfdff] to-[#f0f6fd] border border-[#087FE5]/30 hover:border-[#087FE5]/80 shadow-[0_4px_20px_-2px_rgba(8,127,229,0.08)] hover:shadow-[0_16px_36px_-6px_rgba(8,127,229,0.20)] transition-all duration-500 group cursor-default"
              >
                {/* 3D Diagonal Light Sheen Sweep */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none z-10" />

                {/* Ambient Top Border Highlight */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#087FE5] to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Ambient Corner Glow Accent - ALWAYS VISIBLE */}
                <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(8,185,232,0.16),transparent_70%)] group-hover:scale-110 transition-transform duration-500" />

                <span className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight text-[#063B83] group-hover:text-[#087FE5] group-hover:scale-105 transition-all duration-300">
                  {metric.val}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-700 mt-2 max-w-[180px] leading-snug">
                  {metric.label}
                </span>

                {/* Animated Bottom Indicator */}
                <div className="w-8 h-1 rounded-full mt-3 bg-[#087FE5] opacity-40 group-hover:w-14 group-hover:opacity-100 transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: ZISANTECH MULTI-LAYER IMAGE MONTAGE & ENTERPRISE OVERVIEW
          (Faded image with diagonal light sheen sweeps & floating SLA counter badge)
         ========================================================================= */}
      <section className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#063B83] uppercase tracking-wider mb-3 shadow-sm"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#087FE5]" />
              <span>Executive Program Blueprint</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#071B49] font-sans tracking-tight leading-tight"
            >
              {moduleData.overviewHeading}
            </motion.h2>

            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider mt-2.5 text-[#087FE5] font-sans">
              {moduleData.overviewSubheading}
            </p>
          </div>

          {/* Alternating Layout: Multi-Layer Overlapping Image Montage on Left, Narrative on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: Overlapping Dual Image Montage */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 relative pb-10 sm:pb-8"
            >
              {/* Base Image */}
              <div className="relative w-full sm:w-[88%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group cursor-pointer transition-all duration-500 hover:shadow-2xl">
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-10" />

                <img
                  src={moduleData.secondaryImage}
                  alt={`${moduleData.title} Enterprise Session`}
                  className="w-full h-[340px] sm:h-[400px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/cand_workspace.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#063B83]/70 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />
              </div>

              {/* Overlapping Floating Secondary Visual */}
              <motion.div
                animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative sm:absolute sm:right-0 sm:bottom-4 w-full sm:w-[68%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white mt-4 sm:mt-0 z-10 group bg-slate-900 cursor-pointer transition-all duration-500 hover:shadow-2xl"
              >
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none z-10" />

                <img
                  src={moduleData.featureImage || '/hero_sap_slide3.jpg'}
                  alt="Real-Time Enterprise S/4HANA Architecture"
                  className="w-full h-[210px] sm:h-[240px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/hero_sap_slide3.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020b1e]/60 via-transparent to-transparent opacity-70 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />
              </motion.div>

              {/* Floating Counter Badge */}
              <div className="absolute -bottom-4 left-6 z-20 bg-white/95 backdrop-blur-md py-3 px-5 rounded-2xl shadow-xl border border-slate-200/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#087FE5] flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-[#063B83]">100% S/4HANA SPRO</div>
                  <div className="text-[11px] text-slate-500 font-medium">Enterprise Production Sandbox</div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Narrative with Staggered Fade Up */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#087FE5]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#087FE5]" />
                <span>Real-World Architectural Mastery</span>
              </div>

              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#071B49] font-sans leading-snug">
                {moduleData.overviewLead}
              </h3>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
                {moduleData.overviewParagraphs.map((paragraph, idx) => (
                  <p key={idx} className="leading-relaxed font-normal">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="pt-2 flex items-center gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-2 font-bold text-sm text-[#087FE5] hover:text-[#063B83] group transition-colors cursor-pointer font-sans"
                >
                  <span>Request Cohort Syllabus & Evaluation</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: UNIQUE ENTERPRISE WORKFLOW PROCESS LIFECYCLE (4-STEP PIPELINE)
          (As seen in user screenshot: All cards with ambient color, blue border & glow)
         ========================================================================= */}
      {moduleData.workflowSteps && moduleData.workflowSteps.length > 0 && (
        <section className="py-20 bg-white/90 backdrop-blur-md border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#063B83] uppercase tracking-wider shadow-sm"
              >
                <Workflow className="w-3.5 h-3.5 text-[#087FE5]" />
                <span>End-to-End Business Flow</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-4xl font-extrabold text-[#063B83] font-heading tracking-tight"
              >
                {moduleData.workflowTitle || `${moduleData.code} Core Business Flow`}
              </motion.h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Step-by-step enterprise execution sequence trained in live S/4HANA environments.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {moduleData.workflowSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.1 }}
                  whileHover={shouldReduceMotion ? undefined : { y: -8, scale: 1.02 }}
                  className="relative overflow-hidden p-7 rounded-3xl bg-gradient-to-br from-white via-[#fbfdff] to-[#f0f6fd] border border-[#087FE5]/35 hover:border-[#087FE5]/85 shadow-[0_6px_24px_-2px_rgba(8,127,229,0.10)] hover:shadow-[0_18px_40px_-6px_rgba(8,127,229,0.22)] transition-all duration-500 flex flex-col justify-between group cursor-default"
                >
                  {/* 3D Diagonal Light Sheen Sweep */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none z-10" />

                  {/* Corner Accent Glow - ALWAYS VISIBLE (Subtle & Delicate) */}
                  <div className="absolute top-0 right-0 w-36 h-36 rounded-bl-full pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(8,185,232,0.18),transparent_70%)] group-hover:scale-110 transition-transform duration-500" />

                  <div className="space-y-3 relative z-10">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-black font-mono tracking-tight text-[#087FE5] group-hover:scale-105 transition-transform duration-300">
                        {step.stepNum}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/95 border border-[#087FE5]/25 text-[#063B83] shadow-sm">
                        {step.subtitle}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 group-hover:text-[#063B83] transition-colors">
                      {step.title}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#087FE5]/20 flex items-center gap-1.5 text-[11px] font-bold text-[#087FE5] group-hover:text-[#063B83] transition-colors relative z-10">
                    <span>S/4HANA Execution</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          SECTION 5: ENTERPRISE CONNECTED ROADMAP & MILESTONE DOSSIER JOURNEY
          (Ultra-Premium Executive Timeline Design with Animated Expandable Sprints)
         ========================================================================= */}
      <section className="py-24 bg-gradient-to-b from-[#f8faff] via-[#edf5fc] to-[#f4f9ff] text-slate-900 relative overflow-hidden border-y border-slate-200/80">
        {/* Soft Ambient Precision Glows & Blueprint Lattice */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(8,127,229,0.12),transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_100%_100%,rgba(8,185,232,0.08),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#087FE508_1px,transparent_1px),linear-gradient(to_bottom,#087FE508_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
          {/* Header & Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-[#087FE5]/30 text-xs font-bold text-[#063B83] uppercase tracking-wider font-sans shadow-xs"
              >
                <Layers className="w-3.5 h-3.5 text-[#087FE5]" />
                <span>Enterprise Architectural Mastery Roadmap</span>
              </motion.div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#071B49] font-sans tracking-tight leading-tight">
                Complete Hands-on Learning Roadmap
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
                Progressive engineering sprints combining foundational architecture with live SPRO configuration inside your dedicated S/4HANA sandbox.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={toggleAllPhases}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-white/90 hover:bg-white border border-slate-300/80 hover:border-[#087FE5]/60 text-slate-700 hover:text-[#063B83] font-bold text-xs transition-all shadow-xs hover:shadow-sm cursor-pointer font-sans"
              >
                <ChevronDown
                  className={`w-4 h-4 text-[#087FE5] transition-transform duration-300 ${
                    openPhases.length === moduleData.curriculum.length ? 'rotate-180' : ''
                  }`}
                />
                <span>
                  {openPhases.length === moduleData.curriculum.length
                    ? 'Collapse All Sprints'
                    : 'Expand All Sprints'}
                </span>
              </button>
            </div>
          </div>

          {/* Quick-Jump Milestone Scrubber Bar */}
          <div className="bg-white/80 backdrop-blur-md p-2 rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-0.5 px-1 scrollbar-none">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 pl-2 pr-1 font-mono whitespace-nowrap hidden sm:inline">
                Sprints:
              </span>
              {moduleData.curriculum.map((phase, idx) => {
                const isOpen = openPhases.includes(idx);
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      if (!isOpen) togglePhase(idx);
                      const el = document.getElementById(`phase-card-${idx}`);
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }}
                    className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                      isOpen
                        ? 'bg-gradient-to-r from-[#071B49] to-[#087FE5] text-white shadow-sm shadow-blue-500/20'
                        : 'bg-slate-100/80 hover:bg-slate-200/80 text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <span className="font-mono text-[11px] font-bold">{phase.phaseNum}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Connected Vertical Timeline Cards */}
          <div className="relative space-y-6">
            {/* Ambient Vertical Rail Spine */}
            <div className="absolute left-5 sm:left-7 top-6 bottom-6 w-0.5 bg-gradient-to-b from-[#087FE5] via-[#08B9E8] to-[#071B49]/20 pointer-events-none" />

            {moduleData.curriculum.map((phase, idx) => {
              const isOpen = openPhases.includes(idx);
              const stepNumber = String(idx + 1).padStart(2, '0');

              return (
                <div
                  id={`phase-card-${idx}`}
                  key={idx}
                  className="relative pl-12 sm:pl-16 transition-all duration-300"
                >
                  {/* Milestone Node Badge on the Timeline */}
                  <button
                    onClick={() => togglePhase(idx)}
                    className={`absolute left-0 top-5 w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center font-bold font-mono text-xs sm:text-sm transition-all duration-300 z-10 cursor-pointer shadow-md ${
                      isOpen
                        ? 'bg-gradient-to-br from-[#071B49] to-[#087FE5] text-white shadow-lg shadow-blue-500/40 ring-4 ring-blue-100 scale-110'
                        : 'bg-white text-slate-700 border-2 border-slate-300 hover:border-[#087FE5] hover:text-[#087FE5]'
                    }`}
                    aria-label={`Toggle ${phase.phaseNum}`}
                  >
                    {stepNumber}
                  </button>

                  {/* Main Phase Dossier Card */}
                  <div
                    className={`rounded-3xl transition-all duration-300 overflow-hidden relative ${
                      isOpen
                        ? 'bg-gradient-to-br from-white via-[#fcfdff] to-[#f4f8fe] border-2 border-[#087FE5] shadow-[0_16px_40px_-6px_rgba(8,127,229,0.20)] ring-4 ring-[#087FE5]/10'
                        : 'bg-white hover:bg-[#fafcff] border border-slate-200/90 hover:border-[#087FE5]/70 shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_28px_rgba(8,127,229,0.12)]'
                    }`}
                  >
                    {/* Clickable Card Header */}
                    <button
                      onClick={() => togglePhase(idx)}
                      className="w-full text-left p-5 sm:p-7 flex items-start justify-between gap-4 cursor-pointer group"
                    >
                      <div className="space-y-2.5 flex-1 min-w-0">
                        {/* Tags Row */}
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[10px] sm:text-xs font-extrabold font-sans uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-to-r from-[#071B49] to-[#087FE5] text-white shadow-xs">
                            {phase.phaseNum}
                          </span>
                          <span className="text-[11px] sm:text-xs font-semibold text-[#0369A1] bg-sky-50 border border-sky-200/80 px-2.5 py-0.5 rounded-full inline-flex items-center gap-1.5 shadow-2xs">
                            <Layers className="w-3.5 h-3.5 text-[#087FE5]" />
                            <span>{phase.topics.length} SPRO Modules</span>
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#071B49] font-sans tracking-tight group-hover:text-[#087FE5] transition-colors">
                          {phase.title}
                        </h3>

                        {/* Collapsed Preview Teaser */}
                        {!isOpen && (
                          <p className="text-xs sm:text-sm text-slate-500 font-sans line-clamp-1 leading-relaxed">
                            {phase.description}
                          </p>
                        )}
                      </div>

                      {/* Animated Toggle Button */}
                      <div
                        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-2xl flex items-center justify-center transition-all duration-300 flex-shrink-0 mt-1 ${
                          isOpen
                            ? 'bg-[#087FE5] text-white shadow-md shadow-blue-500/30'
                            : 'bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-[#087FE5]'
                        }`}
                      >
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                    </button>

                    {/* Smooth Expanded Content Area */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: 'easeInOut' }}
                          className="overflow-hidden border-t border-slate-100"
                        >
                          <div className="p-5 sm:p-7 pt-4 space-y-6 bg-gradient-to-b from-transparent via-[#fcfdff] to-[#f6faff]">
                            {/* Full Narrative Overview */}
                            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                              {phase.description}
                            </p>

                            {/* Core Topics Breakdown Grid */}
                            <div className="space-y-3">
                              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#087FE5] font-sans">
                                <Layers className="w-4 h-4 text-[#087FE5]" />
                                <span>Curriculum Modules & Architectural Focus</span>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                                {phase.topics.map((topic, tidx) => (
                                  <div
                                    key={tidx}
                                    className="p-4 rounded-2xl bg-white hover:bg-gradient-to-br hover:from-white hover:to-blue-50/40 border border-slate-200/90 hover:border-[#087FE5]/60 shadow-[0_2px_8px_rgba(8,127,229,0.04)] hover:shadow-[0_6px_20px_rgba(8,127,229,0.12)] flex items-start gap-3.5 transition-all duration-300 group/item hover:-translate-y-0.5 relative overflow-hidden"
                                  >
                                    <div className="w-6 h-6 rounded-lg bg-blue-50 text-[#087FE5] border border-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-[#087FE5] group-hover/item:text-white transition-all duration-300">
                                      <CheckCircle2 className="w-3.5 h-3.5" />
                                    </div>
                                    <span className="text-xs sm:text-sm text-slate-800 leading-relaxed font-semibold font-sans group-hover/item:text-[#063B83] transition-colors">
                                      {topic}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Dedicated Hands-On Lab Challenge Banner */}
                            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#071B49] via-[#063B83] to-[#087FE5] text-white border border-[#08B9E8]/35 shadow-lg relative overflow-hidden space-y-2">
                              {/* Background Luxury Ambient Glow */}
                              <div className="absolute top-0 right-0 w-56 h-56 bg-white/10 rounded-full blur-3xl pointer-events-none" />

                              <div className="flex flex-wrap items-center justify-between gap-2 relative z-10">
                                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#38bdf8] uppercase tracking-wider font-sans">
                                  <Terminal className="w-4 h-4 text-[#38bdf8]" />
                                  <span>Dedicated S/4HANA Sandbox Hands-On Lab</span>
                                </div>
                                <span className="text-[10px] font-bold font-mono px-2.5 py-0.5 rounded-full bg-white/15 text-white border border-white/20">
                                  24/7 SERVER LAB #{stepNumber}
                                </span>
                              </div>

                              <p className="text-xs sm:text-sm text-slate-100 leading-relaxed font-normal font-sans relative z-10 pt-1">
                                {phase.handsOnLab}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: REAL-WORLD CAPSTONE PROJECTS (ULTRA-PREMIUM DOSSIER CARDS WITH AMBIENT GLOW)
         ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-3xl space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#063B83] uppercase tracking-wider shadow-sm"
          >
            <Building2 className="w-3.5 h-3.5 text-[#087FE5]" />
            <span>Industrial Capstone Portfolio</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-[#063B83] font-heading tracking-tight"
          >
            Real-World Enterprise Capstone Projects
          </motion.h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Graduate with portfolio-ready case studies based on actual Fortune 500 manufacturing, retail, and supply chain implementations led by ZisanTech consultants.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {moduleData.realWorldProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={shouldReduceMotion ? undefined : { y: -8, scale: 1.012 }}
              className="relative overflow-hidden p-8 rounded-3xl bg-gradient-to-br from-white via-[#fbfdff] to-[#f0f6fd] border border-[#087FE5]/30 hover:border-[#087FE5]/80 shadow-[0_6px_24px_-2px_rgba(8,127,229,0.09)] hover:shadow-[0_18px_40px_-6px_rgba(8,127,229,0.20)] transition-all duration-500 space-y-6 flex flex-col justify-between group cursor-default"
            >
              {/* 3D Diagonal Light Sheen Sweep */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none z-10" />

              {/* Ambient Corner Glow Accent - ALWAYS VISIBLE */}
              <div className="absolute top-0 right-0 w-40 h-40 rounded-bl-full pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(8,185,232,0.16),transparent_70%)] group-hover:scale-110 transition-transform duration-500" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold font-mono border bg-white border-[#087FE5]/30 text-[#063B83] shadow-sm">
                    Industry: {project.industry}
                  </span>
                  <span className="text-xs font-bold text-slate-400 font-mono">
                    Project 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 leading-snug group-hover:text-[#063B83] transition-colors">
                  {project.title}
                </h3>

                <div className="space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-rose-700 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                    <span>Business Challenge:</span>
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed bg-rose-50/60 p-3.5 rounded-2xl border border-rose-100/90">
                    {project.challenge}
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#063B83] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#087FE5]" />
                    <span>Architectural Solution:</span>
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed bg-blue-50/60 p-3.5 rounded-2xl border border-blue-100/90">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Deliverables List */}
              <div className="space-y-2 pt-4 border-t border-slate-200/60 relative z-10">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-700">Client Deliverables Produced:</p>
                <div className="space-y-2">
                  {project.deliverables.map((del, didx) => (
                    <div key={didx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Visual Showcase Card */}
        {moduleData.featureImage && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-3xl bg-gradient-to-r from-[#03142e] to-[#042044] text-white border border-white/20 shadow-xl overflow-hidden relative"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold font-mono uppercase tracking-wider text-[#08B9E8]">
                  Clean-Core Enterprise Standards
                </span>
                <h3 className="text-2xl font-bold font-heading">
                  Verified S/4HANA Implementation Architecture
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Every participant builds configurations adhering to SAP clean-core extension principles, ensuring seamless compatibility with automated S/4HANA cloud upgrades.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-6 py-3 rounded-xl bg-white text-[#063B83] font-bold text-xs hover:bg-slate-100 transition-all cursor-pointer shadow-lg hover:scale-105"
                  >
                    Request Cohort Syllabus
                  </button>
                  <a
                    href={`tel:${COMPANY_INFO.primaryPhone}`}
                    className="text-xs font-semibold text-slate-200 hover:text-white flex items-center gap-1.5"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-[#08B9E8]" />
                    <span>Talk to Course Advisor</span>
                  </a>
                </div>
              </div>
              <div className="lg:col-span-5">
                <img
                  src={moduleData.featureImage}
                  alt="Enterprise Architecture Showcase"
                  className="rounded-2xl border border-white/20 shadow-2xl w-full h-[220px] object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/cand_workspace.jpg';
                  }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </section>

      {/* =========================================================================
          SECTION 7: ENTERPRISE TALENT READINESS & CANDIDATE PROFILES
         ========================================================================= */}
      <section className="py-20 bg-gradient-to-b from-[#f9fbfe] via-white to-[#f4f8fe] relative overflow-hidden border-y border-slate-200/80">
        {/* Soft Ambient Precision Lighting */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[radial-gradient(circle_at_50%_0%,rgba(8,127,229,0.08),transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-[radial-gradient(circle_at_20%_100%,rgba(8,185,232,0.06),transparent_60%)] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-[#087FE5]/30 text-xs font-bold text-[#063B83] uppercase tracking-wider font-sans shadow-xs">
              <Award className="w-3.5 h-3.5 text-[#087FE5]" />
              <span>Enterprise Career Enablement</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#071B49] font-sans tracking-tight leading-tight">
              Architected for High-Impact <span className="text-[#087FE5]">Corporate Consulting Roles</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans max-w-2xl mx-auto">
              Equipping you with production-grade SPRO customizing, cross-module integration mastery, and the architectural confidence demanded by Fortune 500 enterprises.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: High-Impact Enterprise Placement Metrics Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 p-6 sm:p-7 rounded-3xl bg-white border border-[#087FE5]/25 shadow-[0_10px_30px_-5px_rgba(8,127,229,0.10)] relative overflow-hidden space-y-5"
            >
              <div className="absolute top-0 right-0 w-44 h-44 rounded-bl-full pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(8,185,232,0.14),transparent_70%)]" />

              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-2 text-xs font-bold font-sans uppercase tracking-wider text-[#063B83]">
                  <ShieldCheck className="w-4 h-4 text-[#087FE5]" />
                  <span>Corporate Deployment Standards</span>
                </div>
                <span className="text-[11px] font-bold font-sans px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Tier-1 Ready
                </span>
              </div>

              {/* 3 Metric Pills */}
              <div className="grid grid-cols-3 gap-3 relative z-10 pt-1">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-[#f8faff] to-[#f0f6fd] border border-[#087FE5]/15 text-center space-y-1">
                  <div className="text-lg sm:text-xl font-bold font-mono text-[#071B49]">100%</div>
                  <div className="text-[10px] sm:text-[11px] font-medium text-slate-600 leading-tight">SPRO Hands-on</div>
                </div>
                <div className="p-3 rounded-2xl bg-gradient-to-br from-[#f8faff] to-[#f0f6fd] border border-[#087FE5]/15 text-center space-y-1">
                  <div className="text-lg sm:text-xl font-bold font-mono text-[#087FE5]">1-on-1</div>
                  <div className="text-[10px] sm:text-[11px] font-medium text-slate-600 leading-tight">Mock Interviews</div>
                </div>
                <div className="p-3 rounded-2xl bg-gradient-to-br from-[#f8faff] to-[#f0f6fd] border border-[#087FE5]/15 text-center space-y-1">
                  <div className="text-lg sm:text-xl font-bold font-mono text-emerald-600">98%</div>
                  <div className="text-[10px] sm:text-[11px] font-medium text-slate-600 leading-tight">Hiring Success</div>
                </div>
              </div>

              {/* Smooth Gradient Visual Bar */}
              <div className="space-y-2 relative z-10 pt-1">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-600 font-sans">
                  <span>Target Outcome: S/4HANA Implementation Consultant</span>
                  <span className="text-[#087FE5] font-bold font-mono">98% Verified</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden p-0.5">
                  <div className="bg-gradient-to-r from-[#071B49] via-[#087FE5] to-emerald-400 h-full w-[98%] rounded-full shadow-xs" />
                </div>
              </div>
            </motion.div>

            {/* Right: Target Candidate Profiles */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 space-y-3.5"
            >
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 font-sans">
                <Users2 className="w-4 h-4 text-[#087FE5]" />
                <span>Target Candidate Profiles for {moduleData.code}</span>
              </div>

              <div className="grid grid-cols-1 gap-2.5">
                {moduleData.targetAudience.map((aud, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-white/90 border border-slate-200/90 hover:border-[#087FE5]/50 shadow-2xs hover:shadow-xs flex items-center gap-3.5 transition-all duration-300 group"
                  >
                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#087FE5] border border-blue-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-[#087FE5] group-hover:text-white transition-all duration-300">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 font-medium font-sans leading-relaxed flex-1">
                      {aud}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: MODULE-SPECIFIC FAQS ACCORDION
         ========================================================================= */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#063B83] uppercase tracking-wider shadow-sm"
          >
            <HelpCircle className="w-3.5 h-3.5 text-[#087FE5]" />
            <span>Frequently Asked Questions</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-[#063B83] font-heading tracking-tight"
          >
            Common Inquiries About {moduleData.code}
          </motion.h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            Clear, transparent answers regarding prerequisites, lab infrastructure, batch timings, and certification assistance.
          </p>
        </div>

        <div className="space-y-4">
          {moduleData.faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#087FE5]/40 shadow-lg shadow-blue-500/5 ring-1 ring-[#087FE5]/10'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full px-6 sm:px-7 py-5 text-left flex items-center justify-between gap-4 cursor-pointer transition-colors group select-none"
                >
                  <span className={`text-sm sm:text-base font-bold tracking-tight transition-colors ${
                    isOpen ? 'text-[#063B83]' : 'text-slate-900 group-hover:text-[#087FE5]'
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
                <AnimatePresence initial={false}>
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
                            Curriculum & Enrollment Advisory
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
          SECTION 9: OTHER RELATED MODULES SWITCHER (PREMIUM PILL CARDS)
         ========================================================================= */}
      <section className="py-16 bg-[#020b1e] text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <h3 className="text-xl font-bold font-heading text-white">
                Explore Other {isFunctional ? 'Functional' : 'Technical'} SAP Modules
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Expand your cross-module enterprise expertise
              </p>
            </div>
            <Link
              to="/training"
              className="text-xs font-bold text-[#08B9E8] hover:underline flex items-center gap-1"
            >
              <span>View All 15 Tracks</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
            {relatedModules.slice(0, 6).map((m) => (
              <motion.div
                key={m.id}
                whileHover={shouldReduceMotion ? undefined : { y: -5, scale: 1.03 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to={`/training/${m.slug}`}
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/15 hover:border-[#08B9E8] hover:shadow-xl transition-all text-center group block"
                >
                  <span className="text-[11px] font-bold font-mono block uppercase tracking-wider text-[#08B9E8]">
                    {m.code}
                  </span>
                  <span className="text-xs font-semibold text-slate-200 group-hover:text-white block mt-1 truncate">
                    {m.title.replace(' Training', '')}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: ENTERPRISE ENROLLMENT CTA FOOTER (UNIFORM DEEP NAVY ACROSS ALL PAGES)
         ========================================================================= */}
      <section className="relative py-20 bg-gradient-to-r from-[#063B83] via-[#042A63] to-[#02183B] text-white overflow-hidden">
        {/* Ambient Brand Lighting Overlays */}
        <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-[#087FE5]/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-[#08B9E8]/15 rounded-full blur-[90px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-[#08B9E8] uppercase tracking-wider font-mono shadow-sm">
            Next Batch Starts Soon • Limited 12 Seats Per Cohort
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight">
            Accelerate Your Enterprise SAP Career with {moduleData.code}
          </h2>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Gain immediate access to live mentor sessions, a 24/7 dedicated S/4HANA sandbox, interview preparation, and official certification mentoring.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-white text-[#063B83] hover:bg-slate-100 font-bold rounded-xl text-sm shadow-xl transition-all hover:scale-105 cursor-pointer"
            >
              Request Batch Schedule & Fees
            </button>
            <a
              href={`tel:${COMPANY_INFO.primaryPhone}`}
              className="inline-flex items-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl text-sm border border-white/20 backdrop-blur-md transition-all cursor-pointer hover:border-white/40"
            >
              <PhoneCall className="w-4 h-4 text-[#08B9E8]" />
              <span>Call Course Counselor</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MODAL: INQUIRY & BATCH SCHEDULE REGISTRATION
         ========================================================================= */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl relative overflow-hidden text-slate-800"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {formSubmitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 font-heading">
                    Inquiry Received!
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Our lead SAP counselor will contact you within 2 business hours with upcoming batch schedules, fee breakdowns, and demo server credentials.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <span className="text-[10px] font-bold font-mono uppercase tracking-wider text-[#087FE5]">
                      Admissions Desk • {moduleData.code}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#063B83] font-heading mt-1">
                      Enroll in Next Batch
                    </h3>
                    <p className="text-xs text-slate-500">
                      Reserve your seat in the upcoming interactive cohort.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:border-[#087FE5] focus:outline-none focus:ring-1 focus:ring-[#087FE5]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:border-[#087FE5] focus:outline-none focus:ring-1 focus:ring-[#087FE5]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:border-[#087FE5] focus:outline-none focus:ring-1 focus:ring-[#087FE5]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Preferred Cohort Mode
                    </label>
                    <select
                      value={formData.mode}
                      onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:border-[#087FE5] focus:outline-none focus:ring-1 focus:ring-[#087FE5]"
                    >
                      <option value="Live Weekend Batch">Live Weekend Batch (Sat-Sun 4 hrs)</option>
                      <option value="Live Weekday Evening Batch">Live Weekday Evening Batch (Mon-Thu 2 hrs)</option>
                      <option value="1-on-1 Fast-Track Mentorship">1-on-1 Fast-Track Mentorship</option>
                      <option value="Corporate Team Training">Corporate Team Training</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Your Goals / Questions (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Looking to switch from legacy ECC to S/4HANA..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:border-[#087FE5] focus:outline-none focus:ring-1 focus:ring-[#087FE5]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#087FE5] via-[#0664B5] to-[#043E7A] text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Enrollment Request</span>
                  </button>

                  <p className="text-[11px] text-slate-400 text-center">
                    Your details are protected under ZisanTech enterprise confidentiality policy.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TrainingDetailPage;
