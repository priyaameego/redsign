import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  MessageSquare,
  ChevronDown,
  ChevronRight,
  ShieldCheck,
  Headphones,
  ArrowRight,
  ExternalLink,
  AlertCircle,
  PhoneCall,
  Check,
  Building
} from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/siteData';

interface FormState {
  fullName: string;
  workEmail: string;
  phoneNumber: string;
  companyName: string;
  serviceInterest: string;
  timeline: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  workEmail?: string;
  phoneNumber?: string;
  companyName?: string;
  message?: string;
}

export const ContactPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get('service');

  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    workEmail: '',
    phoneNumber: '',
    companyName: '',
    serviceInterest: serviceParam || 'sap-s4hana-migration',
    timeline: 'Within 30 Days',
    message: ''
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Contact Us | ZisanTech Enterprise SAP Advisory & Digital Solutions';
  }, []);

  useEffect(() => {
    if (serviceParam) {
      setFormData((prev) => ({ ...prev, serviceInterest: serviceParam }));
    }
  }, [serviceParam]);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const validateForm = (): boolean => {
    const errors: FormErrors = {};

    if (!formData.fullName.trim()) {
      errors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      errors.fullName = 'Name must be at least 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.workEmail.trim()) {
      errors.workEmail = 'Corporate email address is required';
    } else if (!emailRegex.test(formData.workEmail.trim())) {
      errors.workEmail = 'Please provide a valid corporate email address';
    }

    const phoneDigits = formData.phoneNumber.replace(/\D/g, '');
    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = 'Phone number is required';
    } else if (phoneDigits.length < 8) {
      errors.phoneNumber = 'Please enter a valid phone number';
    }

    if (!formData.companyName.trim()) {
      errors.companyName = 'Company or Organization name is required';
    }

    if (!formData.message.trim()) {
      errors.message = 'Please provide a brief description of your requirements';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Please describe your requirement with at least 10 characters';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable enterprise inquiry dispatch
    setTimeout(() => {
      const generatedRef = 'ZT-REQ-' + Math.floor(100000 + Math.random() * 900000);
      setReferenceId(generatedRef);
      setIsSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 380, behavior: 'smooth' });
    }, 900);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      workEmail: '',
      phoneNumber: '',
      companyName: '',
      serviceInterest: 'sap-s4hana-migration',
      timeline: 'Within 30 Days',
      message: ''
    });
    setFormErrors({});
    setSubmitted(false);
    setReferenceId('');
  };

  const contactFaqs = [
    {
      question: 'How quickly can your solution architects initiate a discovery call?',
      answer:
        'Our principal solution architects review all inbound enterprise requests within 4 business hours. For time-critical P1 production landscapes, go-live escalations, or fiscal e-invoicing compliance requirements, same-day technical alignment sessions can be scheduled directly with our practice leadership.'
    },
    {
      question: 'Do you execute mutual Non-Disclosure Agreements (NDAs) prior to landscape reviews?',
      answer:
        'Yes, universally. We enforce strict enterprise-grade data protection. We routinely sign bilateral mutual NDAs before reviewing landscape diagrams, transport logs, custom ABAP code repositories, or operational supply chain data schemas.'
    },
    {
      question: 'Can ZisanTech support both offshore and on-premise hybrid delivery models?',
      answer:
        'Yes. We offer fully adaptable delivery structures: 100% remote delivery orchestrated from our Noida Global Delivery Center, on-site principal consultant deployment for critical blueprinting, cutover, and hyper-care go-lives, or balanced hybrid models optimized for cost and agility.'
    },
    {
      question: 'What engagement models are available for ongoing SAP AMS support?',
      answer:
        'We offer flexible enterprise AMS models: dedicated monthly bucket hours, SLA-backed fixed retainer tiers with guaranteed resolution timeframes (P1 to P4), and shared team support models tailored to your operational budget and production landscape complexity.'
    },
    {
      question: 'How does the onboarding process work for corporate SAP workforce training?',
      answer:
        'We begin with an organizational capability and skills gap audit, curate customized role-specific curriculum paths (functional, technical, or end-user), provision dedicated SAP sandbox environments, and deliver interactive instructor-led training cohorts with practical industry case studies.'
    }
  ];

  const engagementSteps = [
    {
      step: '01',
      title: 'Architecture Discovery',
      desc: 'Collaborative discovery call with our Senior SAP Principal Architect to map your business objectives, system version, and landscape challenges.'
    },
    {
      step: '02',
      title: 'Landscape & GAP Review',
      desc: 'Comprehensive technical review of your ERP core, cloud readiness, interfaces, custom Z-programs, and operational dependencies.'
    },
    {
      step: '03',
      title: 'Execution Roadmap & SLA',
      desc: 'Detailed milestone delivery schedule, resource matrix, transparent commercial structure, and guaranteed SLA governance model.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col justify-between">
      <div>
        {/* =========================================================================
            1. HERO / BANNER SECTION (Dual-Column Luxury Architecture Showcase)
        ========================================================================= */}
        <section className="relative bg-[#071B49] text-white pt-12 pb-20 lg:pt-16 lg:pb-28 overflow-hidden border-b border-blue-900/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb Navigation */}
            <motion.nav
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="flex items-center gap-2 text-xs font-medium text-blue-200/80 mb-6"
              aria-label="Breadcrumb"
            >
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-blue-300/60" />
              <span className="text-white font-semibold">Contact Us</span>
            </motion.nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
              {/* Left Column: Heading, Subtitle & Trust Badges */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                className="lg:col-span-7 space-y-6"
              >
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-white/10 border border-white/15 text-blue-100 text-xs font-semibold tracking-wider uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                  Enterprise Advisory &amp; Solutions Desk
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.18] font-outfit">
                  Connect With Our Certified SAP Architects &amp; Advisory Team
                </h1>

                <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-light">
                  Whether you are planning an end-to-end SAP S/4HANA migration, seeking 24/7 mission-critical AMS SLA support, integrating BTP cloud workflows, or empowering your enterprise workforce through structured training, our senior practice leaders are ready to assist.
                </p>

                {/* Trust Metrics Pill Strip */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <Clock className="w-4 h-4 text-[#38BDF8] shrink-0" />
                    <div>
                      <div className="text-[11px] font-bold text-white tracking-tight">&lt; 4 Hours Response</div>
                      <div className="text-[10px] text-slate-400">Guaranteed business SLA</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-[11px] font-bold text-white tracking-tight">Mutual NDA Protected</div>
                      <div className="text-[10px] text-slate-400">Confidential architecture review</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0" />
                    <div>
                      <div className="text-[11px] font-bold text-white tracking-tight">Zero-Obligation Audit</div>
                      <div className="text-[10px] text-slate-400">Technical scoping evaluation</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: High-Res Visual Showcase Card */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
                className="lg:col-span-5 relative"
              >
                <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl shadow-blue-950/60 group">
                  <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-slate-900">
                    <img
                      src="/cand_office_wide.jpg"
                      alt="ZisanTech Enterprise Technology Center and Advisory Boardroom"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[0.92]"
                    />
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071B49]/90 via-[#071B49]/35 to-transparent pointer-events-none" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#071B49]/80 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium">
                      <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                      Noida Technology Center
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-[10px] font-semibold tracking-wider uppercase font-mono">
                      Active SLA Support
                    </span>
                  </div>

                  {/* Bottom Information Strip */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white uppercase tracking-wider">
                        120+ Enterprises Supported
                      </span>
                      <span className="text-xs text-cyan-300 font-mono">India • Global</span>
                    </div>
                    <p className="text-[11px] text-slate-200 font-light leading-snug">
                      High-availability SAP architecture consulting, GST compliance bridges, and multi-plant production support.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            2. FOUR KEY DIRECT CONTACT CHANNELS
        ========================================================================= */}
        <section className="relative -mt-10 lg:-mt-12 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* 1. Phone Support */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-md hover:shadow-xl hover:border-[#087FE5]/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#087FE5] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#087FE5] group-hover:text-white transition-all duration-300 shadow-xs">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#071B49]">Direct Telephone</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Immediate technical advisory & scoping</p>
                </div>
                <div className="space-y-1 pt-1">
                  <a
                    href={`tel:${COMPANY_INFO.primaryPhone}`}
                    className="text-sm font-semibold text-slate-800 hover:text-[#087FE5] block transition-colors"
                  >
                    {COMPANY_INFO.primaryPhone}
                  </a>
                  <a
                    href="tel:+919310857867"
                    className="text-xs font-medium text-slate-600 hover:text-[#087FE5] block transition-colors"
                  >
                    +91 93108 57867 (Support Desk)
                  </a>
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>Mon - Sat: 9AM - 7PM IST</span>
                <span className="text-[#087FE5] font-semibold group-hover:translate-x-1 transition-transform">Call Now &rarr;</span>
              </div>
            </motion.div>

            {/* 2. Corporate Email */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-md hover:shadow-xl hover:border-[#087FE5]/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#087FE5] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#087FE5] group-hover:text-white transition-all duration-300 shadow-xs">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#071B49]">Corporate Email</h3>
                  <p className="text-xs text-slate-500 mt-0.5">RFPs, proposals & technical inquiries</p>
                </div>
                <div className="pt-1">
                  <a
                    href={`mailto:${COMPANY_INFO.primaryEmail}`}
                    className="text-sm font-semibold text-slate-800 hover:text-[#087FE5] block transition-colors break-all"
                  >
                    {COMPANY_INFO.primaryEmail}
                  </a>
                  <p className="text-[11px] text-slate-500 mt-1">Guaranteed 4-hour review</p>
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>Direct Inbound Desk</span>
                <span className="text-[#087FE5] font-semibold group-hover:translate-x-1 transition-transform">Send Email &rarr;</span>
              </div>
            </motion.div>

            {/* 3. Delivery Headquarters */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.15 }}
              className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-md hover:shadow-xl hover:border-[#087FE5]/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#087FE5] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#087FE5] group-hover:text-white transition-all duration-300 shadow-xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#071B49]">Headquarters</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Technology Center & Training Labs</p>
                </div>
                <div className="pt-1 text-xs text-slate-700 leading-relaxed font-medium">
                  {COMPANY_INFO.address}
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>In-Person Briefings</span>
                <a href="#location-map" className="text-[#087FE5] font-semibold hover:underline">View Map &rarr;</a>
              </div>
            </motion.div>

            {/* 4. 24/7 SLA Hyper-Care */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.2 }}
              className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-md hover:shadow-xl hover:border-[#087FE5]/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#087FE5] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#087FE5] group-hover:text-white transition-all duration-300 shadow-xs">
                  <Headphones className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#071B49]">24/7 SLA Hyper-Care</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Mission-critical production support</p>
                </div>
                <div className="pt-1">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-50 text-emerald-700 text-xs font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    P1/P2 Active Incident SLA
                  </span>
                  <p className="text-[11px] text-slate-500 mt-1.5">For contracted enterprise clients</p>
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>Dedicated Ticketing Portal</span>
                <span className="text-[#087FE5] font-semibold">Live 24/7</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================================
            3. STRUCTURED ENGAGEMENT ROADMAP (How We Work)
        ========================================================================= */}
        <section className="py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#087FE5] font-mono">
              COLLABORATION METHODOLOGY
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#071B49] font-outfit">
              How We Engage With Enterprise Clients
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Transparent, structured, and predictable engagement pathways designed to minimize risk and accelerate return on investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {engagementSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 relative space-y-3 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-[#087FE5]/30 group-hover:text-[#087FE5] transition-colors font-mono">
                    {step.step}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#087FE5] flex items-center justify-center font-bold text-xs">
                    Phase {idx + 1}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#071B49] pt-1">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            4. MAIN SECTION: INTERACTIVE INQUIRY FORM + LOCATION VERIFICATION
        ========================================================================= */}
        <section id="inquiry-form-section" className="py-8 lg:py-12 bg-gradient-to-b from-white via-slate-50 to-white border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Left Column (Cols 1-7): Enterprise Contact Form */}
              <div className="lg:col-span-7">
                <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl relative overflow-hidden">
                  {/* Decorative subtle blue accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#087FE5]" />

                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="py-10 text-center space-y-6"
                    >
                      <div className="w-18 h-18 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>

                      <div className="space-y-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold font-mono">
                          <Check className="w-3.5 h-3.5" />
                          Inquiry Dispatched Successfully
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] font-outfit">
                          Thank You, {formData.fullName}
                        </h3>
                        <p className="text-slate-600 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
                          Your enterprise request has been logged in our solutions desk under reference ID:
                        </p>
                      </div>

                      {/* Reference Badge Card */}
                      <div className="inline-block p-4 rounded-xl bg-slate-50 border border-slate-200/90 text-center space-y-1">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          Inquiry Reference Ticket
                        </div>
                        <div className="text-lg font-black text-[#087FE5] font-mono">
                          {referenceId}
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 text-xs text-slate-700 max-w-md mx-auto text-left space-y-1.5">
                        <div className="font-semibold text-[#071B49] flex items-center gap-1.5">
                          <Clock className="w-4 h-4 text-[#087FE5]" />
                          What Happens Next?
                        </div>
                        <p className="text-[12px] text-slate-600 leading-relaxed">
                          1. Our Lead SAP Practice Architect will review your requirements.<br />
                          2. A tailored technical scoping document and scheduling link will be sent to <span className="font-semibold text-slate-800">{formData.workEmail}</span> within 4 business hours.<br />
                          3. For urgent escalations, you may quote reference <span className="font-mono font-semibold text-slate-800">{referenceId}</span> when calling our hotline.
                        </p>
                      </div>

                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={handleReset}
                          className="px-6 py-2.5 rounded-xl bg-[#087FE5] hover:bg-[#063B83] text-white font-semibold text-xs transition-colors shadow-md cursor-pointer"
                        >
                          Submit Another Enterprise Inquiry
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-1">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#087FE5] font-mono">
                          Enterprise Consultation Desk
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] font-outfit">
                          Schedule a Consultation / Send RFP
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-500 font-light">
                          Provide your organization details and project scope for a prompt, structured architecture evaluation.
                        </p>
                      </div>

                      {/* Row 1: Full Name & Corporate Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                            Full Name <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="text"
                            value={formData.fullName}
                            onChange={(e) => {
                              setFormData({ ...formData, fullName: e.target.value });
                              if (formErrors.fullName) setFormErrors({ ...formErrors, fullName: undefined });
                            }}
                            placeholder="e.g. Vikramaditya Rathore"
                            className={`w-full px-4 py-3 rounded-xl border text-sm transition-all outline-none ${
                              formErrors.fullName
                                ? 'border-rose-400 focus:ring-1 focus:ring-rose-400 bg-rose-50/20'
                                : 'border-slate-200 focus:border-[#087FE5] focus:ring-1 focus:ring-[#087FE5]'
                            }`}
                          />
                          {formErrors.fullName && (
                            <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />
                              {formErrors.fullName}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                            Corporate Work Email <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="email"
                            value={formData.workEmail}
                            onChange={(e) => {
                              setFormData({ ...formData, workEmail: e.target.value });
                              if (formErrors.workEmail) setFormErrors({ ...formErrors, workEmail: undefined });
                            }}
                            placeholder="name@enterprise.com"
                            className={`w-full px-4 py-3 rounded-xl border text-sm transition-all outline-none ${
                              formErrors.workEmail
                                ? 'border-rose-400 focus:ring-1 focus:ring-rose-400 bg-rose-50/20'
                                : 'border-slate-200 focus:border-[#087FE5] focus:ring-1 focus:ring-[#087FE5]'
                            }`}
                          />
                          {formErrors.workEmail && (
                            <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />
                              {formErrors.workEmail}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Row 2: Phone Number & Company Name */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                            Phone / WhatsApp Number <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="tel"
                            value={formData.phoneNumber}
                            onChange={(e) => {
                              setFormData({ ...formData, phoneNumber: e.target.value });
                              if (formErrors.phoneNumber) setFormErrors({ ...formErrors, phoneNumber: undefined });
                            }}
                            placeholder="+91 98765 43210"
                            className={`w-full px-4 py-3 rounded-xl border text-sm transition-all outline-none ${
                              formErrors.phoneNumber
                                ? 'border-rose-400 focus:ring-1 focus:ring-rose-400 bg-rose-50/20'
                                : 'border-slate-200 focus:border-[#087FE5] focus:ring-1 focus:ring-[#087FE5]'
                            }`}
                          />
                          {formErrors.phoneNumber && (
                            <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />
                              {formErrors.phoneNumber}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                            Enterprise / Organization Name <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="text"
                            value={formData.companyName}
                            onChange={(e) => {
                              setFormData({ ...formData, companyName: e.target.value });
                              if (formErrors.companyName) setFormErrors({ ...formErrors, companyName: undefined });
                            }}
                            placeholder="e.g. Apex Manufacturing Ltd."
                            className={`w-full px-4 py-3 rounded-xl border text-sm transition-all outline-none ${
                              formErrors.companyName
                                ? 'border-rose-400 focus:ring-1 focus:ring-rose-400 bg-rose-50/20'
                                : 'border-slate-200 focus:border-[#087FE5] focus:ring-1 focus:ring-[#087FE5]'
                            }`}
                          />
                          {formErrors.companyName && (
                            <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />
                              {formErrors.companyName}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Row 3: Service Selection & Project Timeline */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                            Service / Solution Area <span className="text-rose-500">*</span>
                          </label>
                          <select
                            value={formData.serviceInterest}
                            onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#087FE5] focus:ring-1 focus:ring-[#087FE5] outline-none text-sm bg-white font-medium text-slate-800 transition-all cursor-pointer"
                          >
                            <optgroup label="SAP Enterprise Transformations">
                              <option value="sap-s4hana-migration">SAP S/4HANA Clean-Core Migration</option>
                              <option value="sap-btp-integration">SAP BTP Cloud & API Integration Bridge</option>
                              <option value="sap-ams-support">SAP Application Management Services (24/7 AMS)</option>
                              <option value="sap-einvoicing">GST E-Invoicing & E-Way Bill Automation</option>
                              <option value="sap-implementation">SAP Implementation, Rollout & Multi-Plant</option>
                              <option value="sap-custom-development">SAP Custom Development & Fiori UX</option>
                            </optgroup>
                            <optgroup label="Workforce Training & Enablement">
                              <option value="corporate-sap-training">Corporate Team SAP Upskilling Cohort</option>
                              <option value="sap-training-functional">SAP Functional Certification (FICO, MM, SD)</option>
                              <option value="sap-training-technical">SAP Technical Program (ABAP, HANA, Basis)</option>
                            </optgroup>
                            <optgroup label="Other Inquiries">
                              <option value="general-partnership">Strategic Advisory & General Partnership</option>
                            </optgroup>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                            Estimated Project Timeline
                          </label>
                          <select
                            value={formData.timeline}
                            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#087FE5] focus:ring-1 focus:ring-[#087FE5] outline-none text-sm bg-white font-medium text-slate-800 transition-all cursor-pointer"
                          >
                            <option value="Immediate (< 30 Days)">Immediate (&lt; 30 Days)</option>
                            <option value="Within 1 - 3 Months">Within 1 - 3 Months</option>
                            <option value="3 - 6 Months">3 - 6 Months</option>
                            <option value="Exploratory / Budgeting">Exploratory / Budgeting Phase</option>
                          </select>
                        </div>
                      </div>

                      {/* Row 4: Detailed Requirements */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Project Landscape & Technical Requirements <span className="text-rose-500">*</span>
                        </label>
                        <textarea
                          rows={4}
                          value={formData.message}
                          onChange={(e) => {
                            setFormData({ ...formData, message: e.target.value });
                            if (formErrors.message) setFormErrors({ ...formErrors, message: undefined });
                          }}
                          placeholder="Please describe your current SAP version (e.g., ECC 6.0, S/4HANA 2022), module requirements, operational challenges, or team training goals..."
                          className={`w-full px-4 py-3 rounded-xl border text-sm transition-all outline-none resize-none ${
                            formErrors.message
                              ? 'border-rose-400 focus:ring-1 focus:ring-rose-400 bg-rose-50/20'
                              : 'border-slate-200 focus:border-[#087FE5] focus:ring-1 focus:ring-[#087FE5]'
                          }`}
                        />
                        {formErrors.message && (
                          <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {formErrors.message}
                          </p>
                        )}
                      </div>

                      {/* Submit CTA Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-[#063B83] via-[#087FE5] to-[#063B83] hover:from-[#087FE5] hover:to-[#063B83] text-white font-bold text-sm shadow-xl shadow-blue-900/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed group"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                            <span>Processing Enterprise Request...</span>
                          </>
                        ) : (
                          <>
                            <span>Submit Enterprise Request</span>
                            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>

                      <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 pt-1">
                        <span className="flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                          Confidential Data Handling
                        </span>
                        <span>•</span>
                        <span>No Spam Guarantee</span>
                        <span>•</span>
                        <span>Direct Architect Response</span>
                      </div>
                    </form>
                  )}
                </div>
              </div>

              {/* Right Column (Cols 8-12): Verified Office Location & Interactive Map */}
              <div id="location-map" className="lg:col-span-5 space-y-6">
                {/* Office Details Card */}
                <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-md space-y-5">
                  <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-4">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#087FE5] font-mono">
                        Global Delivery Hub
                      </span>
                      <h4 className="text-xl font-bold text-[#071B49] mt-0.5">
                        ZisanTech Solutions
                      </h4>
                      <p className="text-xs text-slate-500">Corporate & Technical Operations</p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#087FE5] flex items-center justify-center shrink-0">
                      <Building className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Location Address Details */}
                  <div className="space-y-3.5 text-xs text-slate-600">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[#087FE5] mt-0.5 shrink-0" />
                      <div>
                        <strong className="text-slate-800 block text-xs">Official Address:</strong>
                        <span className="leading-relaxed block mt-0.5">{COMPANY_INFO.address}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-4 h-4 text-[#087FE5] mt-0.5 shrink-0" />
                      <div>
                        <strong className="text-slate-800 block text-xs">Visiting Hours:</strong>
                        <span className="block mt-0.5">Monday to Saturday: 9:00 AM – 7:00 PM IST</span>
                        <span className="text-[11px] text-slate-400 block">Prior appointment recommended for executive briefings</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <ShieldCheck className="w-4 h-4 text-[#087FE5] mt-0.5 shrink-0" />
                      <div>
                        <strong className="text-slate-800 block text-xs">Security & Access:</strong>
                        <span className="block mt-0.5">Dedicated visitor parking, guest Wi-Fi & AV conference boardrooms.</span>
                      </div>
                    </div>
                  </div>

                  {/* Transit Connectivity Pills */}
                  <div className="pt-2 border-t border-slate-100 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Transit Connectivity
                    </span>
                    <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600 font-medium">
                      <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                        🚆 Metro: Noida Sector 16 / 15
                      </div>
                      <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                        🚗 15 Mins to DND Flyway
                      </div>
                    </div>
                  </div>
                </div>

                {/* Interactive Map Embed Container */}
                <div className="rounded-3xl overflow-hidden border border-slate-200/90 shadow-md bg-white">
                  <div className="p-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs font-semibold text-slate-700">
                    <span className="flex items-center gap-1.5 text-[11px]">
                      <MapPin className="w-3.5 h-3.5 text-[#087FE5]" />
                      Interactive Geographic Locator
                    </span>
                    <a
                      href="https://maps.google.com/?q=Noida+Sector+3+Uttar+Pradesh+India"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#087FE5] hover:underline flex items-center gap-1 text-[11px]"
                    >
                      Open in Maps
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="h-64 sm:h-72 w-full relative bg-slate-100">
                    <iframe
                      title="ZisanTech Technology Center Location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14013.91617267198!2d77.31165749341753!3d28.585375537675718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4599a0e6945%3A0x77d1326c7e3aa0e8!2sSector%203%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full filter saturate-[0.85] contrast-[1.05]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. DEDICATED FREQUENT QUESTIONS (Ultra-Premium, Non-Cramped Layout)
        ========================================================================= */}
        <section className="py-16 lg:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#087FE5] font-mono">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#071B49] font-outfit">
              Enterprise Advisory & Engagement FAQs
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Clear answers regarding our scoping process, NDA protection, project timelines, and operational SLA commitments.
            </p>
          </div>

          <div className="space-y-4">
            {contactFaqs.map((faq, idx) => {
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
                              Advisory Insight
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
            6. BOTTOM LUXURY CALL TO ACTION BANNER
        ========================================================================= */}
        <section className="bg-gradient-to-r from-[#071B49] via-[#063B83] to-[#071B49] text-white py-14 lg:py-16 relative overflow-hidden border-t border-slate-700/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 border border-white/15 text-blue-100 text-xs font-semibold tracking-wider uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-[#38BDF8]" />
              Immediate Architect Engagement
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight max-w-2xl mx-auto font-outfit">
              Ready to Accelerate Your Enterprise SAP Transformation?
            </h2>

            <p className="text-blue-100 text-xs sm:text-sm lg:text-base max-w-xl mx-auto font-light leading-relaxed">
              Schedule a confidential discovery session with our certified architects to evaluate your architecture, eliminate custom technical debt, and ensure seamless delivery.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href={`tel:${COMPANY_INFO.primaryPhone}`}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white text-[#071B49] hover:bg-blue-50 font-bold text-xs uppercase tracking-wider transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#087FE5]" />
                Call Hotline: {COMPANY_INFO.primaryPhone}
              </a>

              <Link
                to="/services"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-blue-900/50 hover:bg-blue-900/70 border border-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                <span>Explore All Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
