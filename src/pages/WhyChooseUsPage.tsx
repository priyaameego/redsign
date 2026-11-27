import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Cpu,
  Layers,
  Award,
  Clock,
  ChevronRight,
  ChevronDown,
  Building2,
  Users,
  Compass,
  Target,
  BarChart3,
  Workflow,
  Check,
  X,
  FileCheck,
  PhoneCall,
  Zap,
  Globe2
} from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export const WhyChooseUsPage: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Why Choose ZisanTech | Enterprise SAP Advisory & Digital Cloud Excellence';
  }, []);

  // Framer Motion Scroll Hooks for Interactive Up/Down Animation
  const { scrollY, scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  const heroImageY = useTransform(scrollY, [0, 600], [0, 110]);
  const heroImageScale = useTransform(scrollY, [0, 600], [1, 1.15]);
  const heroTextY = useTransform(scrollY, [0, 500], [0, 45]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.5]);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const strategicPillars = [
    {
      id: '01',
      title: 'Clean-Core Architectural Discipline',
      module: 'SAP S/4HANA & SAP BTP',
      desc: 'We safeguard standard SAP core tables by building custom business logic and extensions on SAP Business Technology Platform (BTP). This eliminates brittle legacy code and ensures seamless, zero-downtime bi-annual cloud upgrades.',
      benefits: [
        'Zero core system modifications ensuring 100% upgrade safety',
        'Decoupled business logic via RESTful cloud APIs and BTP microservices',
        'Future-proof foundation ready for continuous AI and automation updates',
        'Elimination of technical debt common in traditional custom ABAP builds'
      ]
    },
    {
      id: '02',
      title: 'Deep Domain Industry Specialization',
      module: '6 Tailored Industry Blueprints',
      desc: 'Our consulting architects possess genuine shop-floor, gantry, and mill operating experience. We design solutions tailored to the physical workflows of Manufacturing, Retail, Oil & Gas, Agro Chemical, Steel, and Pharma.',
      benefits: [
        'Pre-configured industry templates accelerating go-live timelines',
        'Direct machine PLC, weighbridge, and SCADA telemetry integrations',
        'Batch genealogy, FEFO picking, and GxP regulatory compliance workflows',
        'Elimination of generic, ill-fitting software configurations'
      ]
    },
    {
      id: '03',
      title: '100% Statutory Compliance Assurance',
      module: 'Indian GST & Tax Integration Bridge',
      desc: 'We eliminate dispatch gate detentions with our dedicated high-velocity statutory bridge that auto-generates government IRN numbers, signed QR codes, and E-Way Bills in under 3 seconds directly from SAP SD.',
      benefits: [
        'Automated multi-GSP failover handling 10,000+ invoices per hour',
        'Direct weighbridge ANPR camera and load-cell weight synchronization',
        'Hazardous material, eBMR, and chemical registry audit compliance',
        'Zero truck detentions at terminal gates and state border checkpoints'
      ]
    },
    {
      id: '04',
      title: 'Senior Architect-Led Collaborative Consulting',
      module: 'Transparent Engagement Model',
      desc: 'Every client engagement is directed by seasoned enterprise architects with over a decade of real-world implementation experience. We do not bait-and-switch with junior contractors or hide behind rigid change requests.',
      benefits: [
        'Direct access to principal architects throughout project lifecycle',
        'Transparent milestone deliverables with clear accountability metrics',
        'Collaborative discovery aligning technology with executive business goals',
        'No bloated corporate layers or unaccountable offshore handoffs'
      ]
    },
    {
      id: '05',
      title: '24/7 SLA-Governed Hypercare & AMS',
      module: 'Enterprise Support Practice',
      desc: 'Technology success does not conclude at go-live. Our dedicated Application Management Services (AMS) practice provides round-the-clock proactive health monitoring, incident remediation, and continuous workflow tuning.',
      benefits: [
        'Strict SLA response times for critical P1/P2 production incidents',
        'Proactive system health checks and background batch job audits',
        'Periodic statutory patch releases and regulatory rule adjustments',
        'Dedicated account management with executive governance reviews'
      ]
    },
    {
      id: '06',
      title: 'Enterprise Workforce Talent Incubation',
      module: 'Practical Sandbox Training',
      desc: 'We bridge the crucial gap between software deployment and employee adoption. Our dedicated academy has upskilled over 3,000+ professionals, ensuring your internal team achieves total operational self-sufficiency.',
      benefits: [
        'Hands-on sandbox labs covering 10 functional and 5 technical SAP modules',
        'Real-world business scenario simulations instead of passive slide decks',
        'Role-specific training for power users, line managers, and IT leads',
        'Reduced long-term consulting dependency through internal capability'
      ]
    }
  ];

  const comparisonRows = [
    {
      dimension: 'Architecture Philosophy',
      zisan: 'Clean-Core via SAP BTP extensions with zero upgrade friction',
      others: 'Heavy custom ABAP tables creating severe upgrade lock-in'
    },
    {
      dimension: 'Consulting Leadership',
      zisan: 'Senior practice architects actively manage every sprint',
      others: 'Junior contractors deployed after senior pitch team exits'
    },
    {
      dimension: 'Statutory GST Compliance',
      zisan: 'Native sub-second automated E-Invoice & E-Way Bill bridge',
      others: 'Manual Excel uploads and fragile third-party desktop utilities'
    },
    {
      dimension: 'Industry Specialization',
      zisan: '6 dedicated vertical blueprints with real shop-floor integrations',
      others: 'Generic, one-size-fits-all ERP templates with huge scope creep'
    },
    {
      dimension: 'Post-Deployment Support',
      zisan: 'Dedicated 24/7 SLA-governed hypercare and continuous AMS tuning',
      others: 'Rigid ticketing queues with slow offshore resolution cycles'
    },
    {
      dimension: 'Workforce Enablement',
      zisan: 'Hands-on sandbox labs upskilling internal teams for self-reliance',
      others: 'Minimal user manuals leaving client perpetually vendor-dependent'
    }
  ];

  const whyChooseFaqs = [
    {
      question: 'How does ZisanTech differ from large multi-national consulting firms?',
      answer:
        'Large firms often delegate implementation to junior personnel while charging exorbitant overhead fees. At ZisanTech, every project is spearheaded by seasoned enterprise architects who remain hands-on from initial process blueprinting through go-live. We offer high architectural rigor paired with executive agility, transparent pricing, and zero bureaucracy.'
    },
    {
      question: 'What does Clean-Core SAP implementation mean for my business?',
      answer:
        'A clean-core approach keeps standard SAP S/4HANA ERP software untouched by custom modifications. Any unique business logic, customer portals, or machine interfaces are built on SAP Business Technology Platform (BTP) using cloud APIs. This ensures your enterprise can adopt bi-annual SAP cloud updates in days without fear of breaking customizations.'
    },
    {
      question: 'How do you guarantee on-time project completion?',
      answer:
        'We employ a structured 4-phase agile methodology with pre-defined milestones, automated testing suites, and weekly steering committee reviews. By identifying edge cases early during discovery and using pre-configured industry templates, we eliminate project creep and deliver on committed go-live dates.'
    },
    {
      question: 'Can ZisanTech take over and stabilize a troubled existing SAP implementation?',
      answer:
        'Yes. We regularly conduct comprehensive architectural recovery audits for enterprises struggling with slow performance, failed data cutovers, or statutory compliance gaps. Our team isolates root causes, refactors customizations, and stabilizes operations under SLA hypercare.'
    },
    {
      question: 'What SLA commitments do you provide under Application Management Services (AMS)?',
      answer:
        'Our enterprise AMS contracts provide 24/7 coverage with guaranteed initial response times under 15 minutes for critical P1 production outages, 2-hour response for P2 issues, proactive database health monitoring, and quarterly process optimization reviews.'
    }
  ];

  return (
    <div className="bg-white text-slate-800 font-sans selection:bg-[#087FE5] selection:text-white relative">
      {/* Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#063B83] via-[#087FE5] to-[#38BDF8] z-50 origin-left shadow-[0_0_12px_rgba(56,189,248,0.7)] pointer-events-none"
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="bg-[#040E26] border-b border-white/10 py-3 relative z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-[#38BDF8] font-semibold">Why Choose Us</span>
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
                <span>THE ZISANTECH ENTERPRISE ADVANTAGE</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-semibold text-white leading-[1.14] font-outfit tracking-[-0.02em]"
              >
                Specialized Enterprise Advisory &amp;{' '}
                <span className="text-[#38BDF8]">
                  Digital Cloud Engineering
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xs sm:text-[13px] font-bold tracking-widest uppercase text-[#38BDF8] font-mono flex items-center gap-2"
              >
                <span className="w-5 h-0.5 bg-[#38BDF8] rounded-full inline-block"></span>
                <span>ARCHITECTURAL MASTERY • STATUTORY AUTOMATION • 24/7 HYPERCARE</span>
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="text-sm sm:text-base text-slate-200/90 leading-relaxed font-normal max-w-xl drop-shadow-sm"
              >
                We combine deep technical mastery, client-focused agility, and dedicated post-deployment SLA support to ensure your technology investments deliver enduring operational velocity and total statutory peace of mind.
              </motion.p>

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
                  <span>CONNECT WITH AN ARCHITECT</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </Link>

                <a
                  href="#pillars"
                  className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm tracking-wider uppercase rounded-xl backdrop-blur-md border border-white/25 transition-all hover:-translate-y-0.5 active:scale-95 cursor-pointer text-center"
                >
                  EXPLORE OUR 6 PILLARS
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
                  Clean-Core Standard
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
              <div className="absolute -inset-2 bg-gradient-to-r from-[#087FE5]/35 via-[#38BDF8]/20 to-[#08B9E8]/30 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="relative rounded-3xl overflow-hidden border-2 border-white/20 shadow-[0_25px_60px_-15px_rgba(8,127,229,0.4)] bg-[#03091e] group">
                <img
                  src="/hero_sap_consulting_2.jpg"
                  alt="Why Choose ZisanTech Enterprise Technology - Senior Architecture Advisory"
                  className="w-full h-[320px] sm:h-[380px] lg:h-[400px] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108 filter brightness-[0.95] contrast-[1.08]"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/hero_sap_boardroom_luxury.jpg';
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#02081c] via-[#02081c]/35 to-transparent pointer-events-none" />
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#040e28]/90 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono shadow-xl">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="font-bold text-slate-100 uppercase tracking-wider">RISE WITH SAP PRACTICE</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-[#05143A]/90 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-2xl flex items-center justify-between text-white">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono text-[#38BDF8] uppercase font-bold tracking-wider">
                      DELIVERY COMMITMENT
                    </span>
                    <p className="text-xl sm:text-2xl font-extrabold font-outfit text-white">
                      100% Milestone Track
                    </p>
                    <p className="text-[11px] text-slate-300 font-medium">
                      Senior Architect Oversight • Zero Surprises
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

      {/* Verified Strengths Strip */}
      <section className="relative z-20 -mt-8 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {[
            { value: '100%', label: 'Delivery Commitment', sub: 'Milestone-governed execution' },
            { value: 'Clean Core', label: 'Architecture Standard', sub: 'Zero modification upgrades' },
            { value: '< 3s', label: 'E-Invoice API Latency', sub: 'Instantaneous NIC compliance' },
            { value: '24/7', label: 'SLA Support Coverage', sub: 'Dedicated production hypercare' }
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

      {/* 6 Core Strategic Value Pillars */}
      <section id="pillars" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#087FE5]/10 text-[#087FE5] text-[11px] font-bold tracking-widest uppercase font-mono">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>VALUE PROPOSITION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#071B49] font-outfit">
            Six Foundational Reasons Enterprises Trust ZisanTech
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            From technical precision to disciplined execution and long-term talent enablement, here is how our practice delivers enduring competitive advantage.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strategicPillars.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{
                y: -10,
                borderColor: '#087FE5',
                boxShadow: '0 25px 40px -15px rgba(8, 127, 229, 0.2)'
              }}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm transition-all duration-300 flex flex-col justify-between group cursor-default"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-lg bg-blue-50 text-[#087FE5] font-mono font-bold text-xs">
                    PILLAR {p.id}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 font-semibold">
                    {p.module}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#071B49] group-hover:text-[#087FE5] transition-colors font-outfit">
                  {p.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {p.desc}
                </p>

                <div className="pt-2 border-t border-slate-100 space-y-2">
                  {p.benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-blue-50 text-[#087FE5] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="font-medium leading-snug">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Comparative Matrix: ZisanTech vs Traditional IT Vendors */}
      <section className="py-16 sm:py-24 bg-[#f8fafc] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-2xl mx-auto mb-14 space-y-3"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#087FE5] font-mono">
              THE STRATEGIC CONTRAST
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#071B49] font-outfit">
              How ZisanTech Compares
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Clear, transparent operational differences between our dedicated practice and generic corporate systems integrators.
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <div className="min-w-[680px] bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#05143A] text-white">
                    <th className="py-4 px-6 text-xs font-bold font-mono uppercase tracking-wider w-1/4">
                      Evaluation Dimension
                    </th>
                    <th className="py-4 px-6 text-xs font-bold font-mono uppercase tracking-wider text-[#38BDF8] w-3/8 bg-[#071B49]">
                      ✓ ZisanTech Enterprise Practice
                    </th>
                    <th className="py-4 px-6 text-xs font-bold font-mono uppercase tracking-wider text-slate-400 w-3/8">
                      Traditional Generic IT Vendors
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                  {comparisonRows.map((r, idx) => (
                    <tr key={idx} className="hover:bg-blue-50/30 transition-colors">
                      <td className="py-4 px-6 font-bold text-[#071B49] font-outfit">
                        {r.dimension}
                      </td>
                      <td className="py-4 px-6 font-medium text-[#063B83] bg-blue-50/20">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#087FE5] flex-shrink-0 mt-0.5" />
                          <span>{r.zisan}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-slate-500">
                        <div className="flex items-start gap-2">
                          <X className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                          <span>{r.others}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Stage Engagement Delivery Blueprint */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-14 space-y-3"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#087FE5] font-mono">
            ENGAGEMENT RIGOR
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#071B49] font-outfit">
            The ZisanTech Delivery Blueprint
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            A structured, transparent roadmap from initial shop-floor discovery to continuous post go-live optimization.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              step: '01',
              title: 'Workflow Discovery',
              desc: 'On-site interviews and data audits to map real physical bottlenecks, statutory compliance mandates, and operational targets.'
            },
            {
              step: '02',
              title: 'Clean-Core Design',
              desc: 'Architecting standard S/4HANA transactional models and isolating custom integrations on SAP BTP to preserve upgrade integrity.'
            },
            {
              step: '03',
              title: 'Sprint Testing & Training',
              desc: 'Rigorous integration dry-runs, simulated cutovers, and practical role-based hands-on user enablement in sandbox environments.'
            },
            {
              step: '04',
              title: 'Go-Live & 24/7 SLA Hypercare',
              desc: 'Zero-disruption cutover, immediate war-room support, and long-term proactive health checks under our SLA-governed AMS practice.'
            }
          ].map((st, idx) => (
            <motion.div
              key={st.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, borderColor: '#087FE5' }}
              className="p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3 relative group"
            >
              <div className="text-3xl font-extrabold text-[#087FE5]/30 font-mono group-hover:text-[#087FE5] transition-colors">
                {st.step}
              </div>
              <h3 className="text-lg font-bold text-[#071B49] font-outfit">
                {st.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {st.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Expandable FAQs Accordion */}
      <section className="py-16 sm:py-24 bg-[#f8fafc] border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-12 space-y-3"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#087FE5] font-mono">
              COMMON INQUIRIES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#071B49] font-outfit">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Direct insights into how we partner, manage risk, and guarantee enterprise architecture excellence.
            </p>
          </motion.div>

          <div className="space-y-4">
            {whyChooseFaqs.map((faq, idx) => {
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
                      isOpen ? 'text-[#063B83]' : 'text-[#071B49] group-hover:text-[#087FE5]'
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
                              Delivery Assurance Insight
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
        </div>
      </section>

      {/* Luxury Call to Action Banner */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl bg-gradient-to-br from-[#071B49] via-[#05143A] to-[#063B83] text-white p-8 sm:p-12 lg:p-16 border border-white/15 shadow-2xl relative overflow-hidden"
        >
          <div className="relative z-10 max-w-3xl space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#38BDF8] font-mono">
              ELEVATE YOUR ENTERPRISE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-outfit leading-tight">
              Ready to Experience the ZisanTech Difference?
            </h2>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
              Schedule an architecture discovery session with our senior practice leads. We will review your current systems, evaluate pain points, and present a practical transformation roadmap.
            </p>
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-[#087FE5] to-[#38BDF8] hover:from-[#38BDF8] hover:to-[#087FE5] text-[#020617] font-bold text-xs sm:text-sm tracking-wider uppercase rounded-xl shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer text-center"
              >
                <span>BOOK AN ARCHITECTURE DISCOVERY SESSION</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm tracking-wider uppercase rounded-xl backdrop-blur-md border border-white/20 transition-all text-center"
              >
                ABOUT OUR COMPANY
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
