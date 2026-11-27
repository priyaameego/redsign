import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import {
  ShieldCheck,
  Target,
  Compass,
  ArrowRight,
  Users,
  Building2,
  MapPin,
  ChevronRight,
  CheckCircle2,
  Cpu,
  Layers,
  Award,
  Clock,
  PhoneCall,
  Mail,
  ChevronDown,
  Globe2,
  Workflow,
  Factory,
  ShoppingBag,
  Fuel,
  Sprout,
  FlaskConical,
  GraduationCap,
  Briefcase
} from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export const AboutPage: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'About ZisanTech Solutions | Enterprise SAP & Digital Cloud Practice';
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

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const industriesServed = [
    {
      name: 'Manufacturing',
      slug: 'manufacturing',
      image: '/manufacturing.jpg',
      icon: <Factory className="w-5 h-5 text-[#38BDF8]" />,
      desc: 'Discrete & process shop-floor MES, PP/DS finite scheduling, automated EWM staging, and machine telemetrics.',
      modules: ['SAP PP / PP-DS', 'SAP QM', 'SAP EWM', 'SAP PM']
    },
    {
      name: 'Retail & Textile',
      slug: 'retail-textile',
      image: '/retail.jpg',
      icon: <ShoppingBag className="w-5 h-5 text-[#38BDF8]" />,
      desc: 'Omnichannel POS, fabric dye-lot segregation, RFID distribution center cross-docking, and dynamic markdown pricing.',
      modules: ['SAP S/4HANA Retail', 'SAP CAR', 'SAP SD', 'SAP MM']
    },
    {
      name: 'Oil & Gas',
      slug: 'oil-gas',
      image: '/gas and oil.png',
      icon: <Fuel className="w-5 h-5 text-[#38BDF8]" />,
      desc: 'Hydrocarbon custody transfer, plant asset maintenance, gantry terminal automation, and high-volume e-invoicing.',
      modules: ['SAP IS-Oil', 'SAP PM', 'ASTM Standards', 'Tax Bridge']
    },
    {
      name: 'Agro Chemical',
      slug: 'agro-chemical',
      image: '/Agro Chemical.jpg',
      icon: <Sprout className="w-5 h-5 text-[#38BDF8]" />,
      desc: 'Active ingredient recipe governance, FEFO warehouse automation, rural distributor ordering, and CIB&RC compliance.',
      modules: ['SAP PP-PI', 'SAP EWM (FEFO)', 'SAP BTP', 'Batch QM']
    },
    {
      name: 'Steel & Metallurgy',
      slug: 'steel-metallurgy',
      image: '/Steel & Metallurgy.webp',
      icon: <Workflow className="w-5 h-5 text-[#38BDF8]" />,
      desc: 'Melt-shop spectrometer testing, heat number tracking, 14 automated weighbridges, and bulk rail-rake logistics.',
      modules: ['SAP TM', 'Weighbridge ANPR', 'SAP QM', 'SAP CO']
    },
    {
      name: 'Pharma & Life Sciences',
      slug: 'pharma-life-sciences',
      image: '/Pharma & Life Sciences.jpg',
      icon: <FlaskConical className="w-5 h-5 text-[#38BDF8]" />,
      desc: 'GxP computer system validation, electronic batch records (eBMR), stability testing, and IoT cold-chain tracking.',
      modules: ['SAP Life Sciences', 'SAP ATTP', 'eBMR', 'GAMP 5 CSV']
    }
  ];

  const aboutFaqs = [
    {
      question: 'What is ZisanTech Solutions core business focus?',
      answer:
        'ZisanTech Solutions operates as a specialized enterprise technology advisory and digital engineering firm. We focus primarily on SAP S/4HANA Cloud and On-Premise implementations, Clean-Core SAP BTP integrations, statutory compliance automation (Indian GST e-Invoicing & E-Way Bills), ongoing Application Management Services (AMS), and professional enterprise talent enablement.'
    },
    {
      question: 'How does ZisanTech approach Clean-Core SAP architecture?',
      answer:
        'We adhere strictly to SAP modern clean-core principles. Rather than heavily modifying standard SAP ABAP core tables with brittle custom code, we build custom extensions, business logic, and portal interfaces on SAP Business Technology Platform (BTP). This guarantees that clients receive bi-annual cloud upgrades with zero operational downtime and no technical debt.'
    },
    {
      question: 'Which industries does ZisanTech have direct domain practice in?',
      answer:
        'Our senior consulting architects have deep, dedicated practice experience across six foundational verticals: Industrial Manufacturing, Retail & Textile, Oil & Gas, Agro Chemical, Steel & Metallurgy, and Pharmaceutical & Life Sciences.'
    },
    {
      question: 'How does ZisanTech support enterprises post go-live?',
      answer:
        'We provide SLA-governed 24/7 Application Management Services (AMS) and hypercare. Our support covers proactive system health checks, ticket incident resolution, statutory tax patch upgrades, batch job monitoring, and end-user enablement.'
    },
    {
      question: 'Does ZisanTech offer practical workforce SAP training for corporate teams?',
      answer:
        'Yes. We maintain a dedicated talent incubation practice that has upskilled over 3,000+ professionals. We deliver hands-on, sandbox-driven training across 10 functional SAP modules and 5 technical specializations to ensure internal client teams achieve complete operational self-sufficiency.'
    }
  ];

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
            <span className="text-[#38BDF8] font-semibold">About ZisanTech</span>
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
                <span>ENTERPRISE SAP &amp; DIGITAL TECHNOLOGY PRACTICE</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-semibold text-white leading-[1.14] font-outfit tracking-[-0.02em]"
              >
                Empowering Global Enterprises Through{' '}
                <span className="text-[#38BDF8]">
                  Precision SAP Innovation
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xs sm:text-[13px] font-bold tracking-widest uppercase text-[#38BDF8] font-mono flex items-center gap-2"
              >
                <span className="w-5 h-0.5 bg-[#38BDF8] rounded-full inline-block"></span>
                <span>PRACTICAL ARCHITECTURE • CLEAN CORE • MEASURABLE OUTCOMES</span>
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="text-sm sm:text-base text-slate-200/90 leading-relaxed font-normal max-w-xl drop-shadow-sm"
              >
                At ZisanTech Solutions, we align intelligent enterprise software with real-world corporate objectives to drive operational transparency, statutory revenue compliance, and sustainable scalability. From strategy formulation to 24/7 post go-live SLA hypercare, our seasoned consultants ensure smooth, disruption-free digital transformations.
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
                  <span>CONNECT WITH OUR ARCHITECTS</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </Link>

                <Link
                  to="/services"
                  className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm tracking-wider uppercase rounded-xl backdrop-blur-md border border-white/25 transition-all hover:-translate-y-0.5 active:scale-95 cursor-pointer text-center"
                >
                  EXPLORE ALL 13 SERVICES
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
                  10+ Years Practice
                </span>
                <span className="text-slate-600">•</span>
                <span className="flex items-center gap-1.5 text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8]" />
                  100% Delivery Commitment
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
                  src="/hero_sap_boardroom_luxury.jpg"
                  alt="ZisanTech Enterprise Technology Advisory & SAP Practice"
                  className="w-full h-[320px] sm:h-[380px] lg:h-[400px] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108 filter brightness-[0.95] contrast-[1.08]"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/hero_sap_consulting_1.jpg';
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#02081c] via-[#02081c]/35 to-transparent pointer-events-none" />
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#040e28]/90 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono shadow-xl">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="font-bold text-slate-100 uppercase tracking-wider">ENTERPRISE ADVISORY</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-[#05143A]/90 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-2xl flex items-center justify-between text-white">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono text-[#38BDF8] uppercase font-bold tracking-wider">
                      VERIFIED ENTERPRISE METRICS
                    </span>
                    <p className="text-xl sm:text-2xl font-extrabold font-outfit text-white">
                      10+ Years Excellence
                    </p>
                    <p className="text-[11px] text-slate-300 font-medium">
                      20+ Deployments • 90% Repeat Engagements
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
          3. VERIFIED QUANTITATIVE MILESTONES (Interactive Scroll Strip)
      ========================================================================= */}
      <section className="relative z-20 -mt-8 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {[
            { value: '10+ Years', label: 'Consulting Excellence', sub: 'Dedicated Enterprise SAP Practice' },
            { value: '20+ Clients', label: 'Enterprise Deployments', sub: 'Manufacturing, Energy, Pharma & Retail' },
            { value: '90%', label: 'Repeat Engagements', sub: 'Long-term client partnerships' },
            { value: '3,000+', label: 'Upskilled Learners', sub: 'Industry-ready talent incubation' }
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
          4. COMPANY INTRODUCTION & STRATEGIC COMMITMENT (Alternating Image Reveal)
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
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>MEASURABLE BUSINESS IMPACT</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#071B49] font-outfit leading-tight">
              Our Commitment to Client Success &amp; Digital Growth
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              At ZisanTech Solutions, we believe that modernizing enterprise software or executing an ERP rollout is never merely a technical task—it is an organizational evolution. We measure our achievements solely by client operational outcomes, reduced inventory lead times, and seamless statutory compliance.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Every project—whether solution design, S/4HANA migration, custom BTP portal engineering, or professional workforce enablement—is rooted in deep workflow discovery. We tailor systems that solve immediate operational bottlenecks while establishing an upgrade-safe, clean-core foundation for long-term scalability.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {[
                'Disciplined Clean-Core SAP Architectural Compliance',
                'Sub-Second Indian GST, E-Invoice & E-Way Bill Integration',
                'Transparent Milestone Tracking with 100% Delivery Commitment',
                'Continuous 24/7 Production SLA Hypercare & Incident Support'
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
          </motion.div>

          {/* Right Visual Image Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group bg-slate-900">
              <img
                src="/hero_sap_consulting_1.jpg"
                alt="ZisanTech Enterprise Consulting Session"
                className="w-full h-[380px] sm:h-[440px] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/hero_sap_slide3.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071B49] via-[#071B49]/40 to-transparent pointer-events-none" />
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-5 left-5 right-5 bg-[#05143A]/90 backdrop-blur-md rounded-xl p-4 border border-white/20 text-white shadow-xl flex items-center justify-between"
              >
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#087FE5]/30 text-[#38BDF8] text-[10px] font-bold font-mono uppercase mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-ping" />
                    <span>FOUNDATIONAL PRAGMATISM</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold font-heading">
                    Strategy • Engineering • Enablement
                  </p>
                  <p className="text-[11px] text-slate-300">
                    Trusted by manufacturing, energy &amp; retail leaders
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
          5. VISION & MISSION (Interactive Cards with Kinetic Hover)
      ========================================================================= */}
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
              PURPOSE &amp; ASPIRATION
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#071B49] font-outfit">
              Our Vision &amp; Mission
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Driving innovation, empowering businesses, and shaping resilient enterprises through intelligent SAP systems and practical technical enablement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, boxShadow: '0 25px 40px -15px rgba(6, 59, 131, 0.15)' }}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-6 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#063B83] to-[#087FE5] text-white flex items-center justify-center shadow-md">
                  <Target className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#087FE5] font-mono">
                    OUR PURPOSE
                  </span>
                  <h3 className="text-2xl font-bold text-[#071B49] font-outfit">
                    🚀 Mission Statement
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  We empower organizations with dependable, pragmatic SAP consulting, practical workforce training, and scalable IT solutions that eliminate operational friction.
                </p>

                <div className="space-y-2.5 pt-2">
                  {[
                    'Drive real-world business problem solving across the value chain',
                    'Build industry-ready professionals via practical hands-on sandbox labs',
                    'Deliver scalable, clean-core systems designed for zero-friction upgrades',
                    'Foster enduring, trust-anchored client partnerships based on outcomes'
                  ].map((pt, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-blue-100 text-[#087FE5] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-[10px]">
                        ✓
                      </div>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, boxShadow: '0 25px 40px -15px rgba(8, 127, 229, 0.15)' }}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-6 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#087FE5] to-[#38BDF8] text-white flex items-center justify-center shadow-md">
                  <Compass className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#087FE5] font-mono">
                    OUR HORIZON
                  </span>
                  <h3 className="text-2xl font-bold text-[#071B49] font-outfit">
                    🌍 Vision Statement
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  To become the most trusted global technology advisor and specialized enterprise ERP practice, renowned for combining architectural rigor with localized operational agility.
                </p>

                <div className="space-y-2.5 pt-2">
                  {[
                    'Empowering sustainable corporate growth through continuous digital innovation',
                    'Bridging global architectural standards with localized compliance prerequisites',
                    'Creating agile, cloud-ready enterprises prepared for market disruption',
                    'Establishing a premier center of excellence for enterprise technology talent'
                  ].map((pt, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-[10px]">
                        ✓
                      </div>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. FOUR CORE VALUES (Interactive Cards with Staggered Scroll-In)
      ========================================================================= */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-14 space-y-3"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#087FE5] font-mono">
            GUIDING PILLARS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#071B49] font-outfit">
            Our Core Values
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            The foundational compass guiding our work, technical recommendations, and lasting enterprise relationships.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Ethical Integrity',
              desc: 'We believe in doing the right thing—being honest, transparent in scoping, and fully accountable in every interaction to build lasting trust.',
              badge: 'FOUNDATION'
            },
            {
              title: 'Focused on Your Success',
              desc: 'Our clients’ and learners’ goals are our primary priority. We listen closely and engineer solutions that deliver real, measurable operational outcomes.',
              badge: 'COMMITMENT'
            },
            {
              title: 'Innovate and Evolve',
              desc: 'We embrace the rapid pace of technology by continuously adopting modern cloud adapters, SAP BTP integrations, and automated digital workflows.',
              badge: 'PROGRESS'
            },
            {
              title: 'Excellence in Delivery',
              desc: 'Quality is non-negotiable. We commit to providing precise, reliable, and SLA-governed SAP solutions and training that exceed expectations.',
              badge: 'EXECUTION'
            }
          ].map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{
                y: -8,
                borderColor: '#087FE5',
                boxShadow: '0 20px 30px -10px rgba(8, 127, 229, 0.18)'
              }}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm transition-all duration-300 space-y-3 flex flex-col justify-between group cursor-default"
            >
              <div className="space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#087FE5] font-mono bg-blue-50 px-2.5 py-1 rounded-md">
                  {val.badge}
                </span>
                <h3 className="text-lg font-bold text-[#071B49] group-hover:text-[#087FE5] transition-colors font-outfit">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {val.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          7. INDUSTRIES SERVED AT A GLANCE (Ultra-Premium Visual Showcase)
      ========================================================================= */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-[#f8fafc] via-white to-[#f1f5f9] border-y border-slate-200/80 relative overflow-hidden">
        {/* Subtle Ambient Radial Lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#087FE5]/10 via-[#38BDF8]/10 to-transparent blur-3xl pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-3xl mx-auto mb-16 space-y-3"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#087FE5]/10 text-[#087FE5] text-[11px] font-bold tracking-widest uppercase font-mono">
              <Layers className="w-3.5 h-3.5" />
              <span>INDUSTRY SPECIALIZATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#071B49] font-outfit tracking-tight">
              Industries We Serve
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Explore how ZisanTech architects tailored SAP S/4HANA workflows, statutory integrations, and physical shop-floor synchronizations across six foundational enterprise sectors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesServed.map((ind, idx) => (
              <motion.div
                key={ind.slug}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{
                  y: -8,
                  borderColor: '#087FE5',
                  boxShadow: '0 25px 40px -15px rgba(8, 127, 229, 0.22)'
                }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm transition-all duration-300 flex flex-col justify-between group relative"
              >
                <div>
                  {/* High-Resolution Industry Photography Header */}
                  <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-950">
                    <img
                      src={ind.image}
                      alt={ind.name}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-[0.88] contrast-[1.08]"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/hero_sap_enterprise_luxury.jpg';
                      }}
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#05143A] via-[#05143A]/40 to-transparent pointer-events-none" />

                    {/* 3D Diagonal Sheen Sweep */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

                    {/* Top Left Floating Pill */}
                    <div className="absolute top-3.5 left-3.5 p-2 rounded-xl bg-[#05143A]/90 backdrop-blur-md border border-white/20 text-[#38BDF8] shadow-md flex items-center gap-2">
                      {ind.icon}
                      <span className="text-[10px] font-mono uppercase font-bold text-white tracking-wider">
                        {ind.slug.toUpperCase()}
                      </span>
                    </div>

                    {/* Top Right Sector Number */}
                    <div className="absolute top-3.5 right-3.5 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-bold text-[#071B49] shadow-md border border-slate-200 font-mono">
                      SECTOR 0{idx + 1}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-7 space-y-3.5">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#071B49] group-hover:text-[#087FE5] transition-colors font-outfit">
                      {ind.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {ind.desc}
                    </p>

                    {/* Modules Badges */}
                    <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1.5">
                      {ind.modules.map((m, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-mono text-[10px] font-semibold"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="p-6 sm:p-7 pt-0">
                  <Link
                    to={`/industries/${ind.slug}`}
                    className="w-full py-3 px-4 rounded-xl bg-slate-50 group-hover:bg-gradient-to-r group-hover:from-[#063B83] group-hover:to-[#087FE5] text-[#071B49] group-hover:text-white font-semibold text-xs font-mono tracking-wider uppercase transition-all duration-300 flex items-center justify-between border border-slate-200/80 group-hover:border-transparent shadow-xs"
                  >
                    <span>Inspect Architecture</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. 4-STAGE METHODOLOGY & DELIVERY RIGOR
      ========================================================================= */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-14 space-y-3"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#087FE5] font-mono">
            DISCIPLINED EXECUTION
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#071B49] font-outfit">
            How We Deliver Enterprise Certainty
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            A battle-tested engagement lifecycle designed to eliminate project surprises and guarantee clean-core software integrity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              step: '01',
              title: 'Strategic Discovery',
              desc: 'Deep operational workflow audits, identifying friction points in order-to-cash, procure-to-pay, and plant floor scheduling.'
            },
            {
              step: '02',
              title: 'Clean-Core Architecture',
              desc: 'Designing standard S/4HANA workflows, mapping statutory compliance connectors, and architecting BTP cloud extensions.'
            },
            {
              step: '03',
              title: 'Agile Build & Testing',
              desc: 'Iterative sprint configurations, automated test scripts, mock cutover dry-runs, and user acceptance sign-offs.'
            },
            {
              step: '04',
              title: 'Go-Live & SLA Hypercare',
              desc: 'Zero-disruption cutover, on-site war room coordination, and dedicated 24/7 post go-live SLA application support.'
            }
          ].map((st, idx) => (
            <motion.div
              key={st.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, borderColor: '#087FE5' }}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3 relative group"
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

      {/* =========================================================================
          9. FREQUENTLY ASKED QUESTIONS (Smooth Expandable Accordions)
      ========================================================================= */}
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
              CLEAR ANSWERS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#071B49] font-outfit">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Key insights into our enterprise consulting methodology, technical practice, and operational support model.
            </p>
          </motion.div>

          <div className="space-y-4">
            {aboutFaqs.map((faq, idx) => {
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
                              Executive Advisory Insight
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

      {/* =========================================================================
          10. VERIFIED BUSINESS LOCATION & CONTACT COORDINATES
      ========================================================================= */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-lg flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#087FE5] bg-blue-50 px-3 py-1 rounded-md font-mono">
              VERIFIED BUSINESS HEADQUARTERS
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#071B49] font-outfit">
              {COMPANY_INFO.name}
            </h3>
            <div className="space-y-2 text-xs sm:text-sm text-slate-600">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#087FE5] flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-[#087FE5] flex-shrink-0" />
                <span>{COMPANY_INFO.primaryPhone} | +91 93108 57867</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#087FE5] flex-shrink-0" />
                <span>{COMPANY_INFO.primaryEmail}</span>
              </p>
            </div>
            <p className="text-xs text-slate-500">
              Consulting center &amp; talent academy supporting enterprise clients across India, the Middle East, and international operating corridors.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3.5 flex-shrink-0 w-full sm:w-auto">
            <Link
              to="/contact"
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#063B83] via-[#087FE5] to-[#08B9E8] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all shadow-md hover:shadow-xl active:scale-95 text-center"
            >
              CONNECT WITH LEADERSHIP
            </Link>
            <Link
              to="/training"
              className="px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all text-center"
            >
              EXPLORE ACADEMY
            </Link>
          </div>
        </motion.div>
      </section>

      {/* =========================================================================
          11. LUXURY CALL TO ACTION BANNER
      ========================================================================= */}
      <section className="pb-16 sm:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl bg-gradient-to-br from-[#071B49] via-[#05143A] to-[#063B83] text-white p-8 sm:p-12 lg:p-16 border border-white/15 shadow-2xl relative overflow-hidden"
        >
          <div className="relative z-10 max-w-3xl space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#38BDF8] font-mono">
              DISCOVER WHAT IS POSSIBLE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-outfit leading-tight">
              Ready to Accelerate Your Enterprise Digital Transformation?
            </h2>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
              Schedule a technical discovery session with our senior practice leads. We will review your current ERP topography, audit operational pain points, and provide an actionable roadmap.
            </p>
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-[#087FE5] to-[#38BDF8] hover:from-[#38BDF8] hover:to-[#087FE5] text-[#020617] font-bold text-xs sm:text-sm tracking-wider uppercase rounded-xl shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer text-center"
              >
                <span>BOOK AN ARCHITECTURAL DISCOVERY</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
              <Link
                to="/industries"
                className="px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm tracking-wider uppercase rounded-xl backdrop-blur-md border border-white/20 transition-all text-center"
              >
                VIEW ALL 6 INDUSTRIES
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
