import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Clock,
  Laptop,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  BookOpen,
  Award,
  Users2,
  Sparkles
} from 'lucide-react';
import { TRAINING_MODULES, COMPANY_INFO } from '../data/siteData';

const codeToSlug: Record<string, string> = {
  'SAP-SD': 'sap-sd',
  'SAP-MM': 'sap-mm',
  'SAP-PP': 'sap-pp',
  'SAP-QM': 'sap-qm',
  'SAP-FICO': 'sap-fico',
  'SAP-HCM': 'sap-hcm',
  'SAP-CCM': 'sap-le',
  'SAP-LE': 'sap-le',
  'SAP-TM': 'sap-tm',
  'SAP-EWM': 'sap-ewm',
  'SAP-ARIBA': 'sap-ariba',
  'SAP-ABAP': 'sap-abap',
  'SAP-BASIS': 'sap-basis',
  'SAP-PI-PO': 'sap-pi-po',
  'SAP-CPI': 'sap-cpi',
  'SAP-CIDS': 'sap-cids',
};

export const TrainingPage: React.FC = () => {
  const { category, id } = useParams<{ category?: string; id?: string }>();
  const [activeTab, setActiveTab] = useState<'all' | 'functional' | 'technical'>('all');

  const selectedModule = id
    ? TRAINING_MODULES.find(
        (t) =>
          t.id === parseInt(id) &&
          (category
            ? t.category.toLowerCase().replace(/s$/, '') === decodeURIComponent(category).toLowerCase().replace(/s$/, '')
            : true)
      )
    : null;

  // Single Training Module Detail
  if (selectedModule) {
    return (
      <div className="space-y-16 pb-20">
        {/* Module Header */}
        <section className="bg-navy-950 text-white py-16 border-b border-white/10 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
              <Link to="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <Link to="/training" className="hover:text-white">Training</Link>
              <span>/</span>
              <span className="text-teal-400 font-semibold">{selectedModule.title}</span>
            </div>

            <div className="max-w-4xl space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {selectedModule.category}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  CODE: {selectedModule.code}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-display">
                {selectedModule.title}
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed">
                {selectedModule.shortDesc}
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-teal-400" />
                  <span>Duration: <strong className="text-white">{selectedModule.duration}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Laptop className="w-4 h-4 text-teal-400" />
                  <span>Format: <strong className="text-white">{selectedModule.format}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-teal-400" />
                  <span>100% Placement & Sandbox Lab Support</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Training Syllabus & Details */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-12">
              {/* Program Overview */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-navy-950">Program Overview & Real-World Context</h2>
                {selectedModule.overview.map((p, idx) => (
                  <p key={idx} className="text-slate-700 leading-relaxed text-sm">
                    {p}
                  </p>
                ))}
              </div>

              {/* Core Syllabus Topics */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-navy-950">Detailed Hands-On Curriculum</h3>
                <div className="space-y-3">
                  {selectedModule.coreTopics.map((top, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="text-xs text-slate-800 font-medium leading-relaxed">{top}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Audience */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-navy-950">🎯 Who Is This Program For?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {selectedModule.targetAudience.map((aud, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 leading-relaxed font-medium">
                      {aud}
                    </div>
                  ))}
                </div>
              </div>

              {/* Career Outcomes */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-navy-950">📈 Target Job Roles & Career Outcomes</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {selectedModule.careerOutcomes.map((role, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-teal-50 border border-teal-200 text-center space-y-2">
                      <Award className="w-5 h-5 text-teal-700 mx-auto" />
                      <p className="text-xs font-bold text-navy-950">{role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar with all modules */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-white via-[#fbfdff] to-[#f0f6fd] border border-[#087FE5]/25 shadow-sm space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-wider text-navy-950 pb-2 border-b border-[#087FE5]/15">
                  All 15 Training Modules
                </h4>
                <div className="space-y-1 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                  {TRAINING_MODULES.map((t) => (
                    <Link
                      key={t.id}
                      to={t.url}
                      className={`block p-2 rounded-lg text-xs transition-colors flex items-center justify-between ${
                        t.id === selectedModule.id && t.category === selectedModule.category
                          ? 'bg-emerald-600 text-white font-semibold'
                          : 'text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <span className="truncate">{t.code} - {t.title.split(' (')[0]}</span>
                      <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Enrollment CTA */}
              <div className="p-6 rounded-2xl bg-navy-950 text-white border border-white/10 space-y-4">
                <h4 className="text-base font-bold text-white">Enroll in {selectedModule.code}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Join the upcoming batch with dedicated live trainer access, 24/7 sandbox lab server, and full mock interview preparation.
                </p>
                <Link
                  to="/contact"
                  className="w-full block text-center py-3 bg-teal-500 hover:bg-teal-400 text-navy-950 font-bold rounded-xl text-xs transition-colors"
                >
                  Request Batch Schedule & Fees
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // All Training Listing
  const filteredModules = TRAINING_MODULES.filter((t) => {
    if (activeTab === 'functional') return t.type === 'functional';
    if (activeTab === 'technical') return t.type === 'technical';
    return true;
  });

  return (
    <div className="space-y-20 pb-20">
      <section className="bg-navy-950 text-white py-20 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/30">
              Workforce Development Practice
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-display">
              Enterprise SAP Training Programs
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Master end-to-end business cycles across 10 functional modules and 5 technical specializations, taught through live real-time scenario simulation and dedicated lab servers.
            </p>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 pt-4">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'all' ? 'bg-emerald-600 text-white shadow-md' : 'bg-white/10 text-slate-300 hover:bg-white/20'
                }`}
              >
                All Modules (15)
              </button>
              <button
                onClick={() => setActiveTab('functional')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'functional' ? 'bg-emerald-600 text-white shadow-md' : 'bg-white/10 text-slate-300 hover:bg-white/20'
                }`}
              >
                Functional Modules (10)
              </button>
              <button
                onClick={() => setActiveTab('technical')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'technical' ? 'bg-emerald-600 text-white shadow-md' : 'bg-white/10 text-slate-300 hover:bg-white/20'
                }`}
              >
                Technical Modules (5)
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredModules.map((mod, idx) => (
            <motion.div
              key={mod.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              whileHover={{ y: -8, scale: 1.015 }}
              className="relative overflow-hidden p-7 rounded-3xl bg-gradient-to-br from-white via-[#fbfdff] to-[#f0f6fd] border border-[#087FE5]/30 hover:border-[#087FE5]/80 shadow-[0_6px_24px_-2px_rgba(8,127,229,0.08)] hover:shadow-[0_18px_40px_-6px_rgba(8,127,229,0.20)] transition-all duration-500 flex flex-col justify-between group cursor-default"
            >
              {/* 3D Diagonal Light Sheen Sweep */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none z-10" />

              {/* Ambient Corner Glow Accent - ALWAYS VISIBLE */}
              <div className="absolute top-0 right-0 w-36 h-36 rounded-bl-full pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(8,185,232,0.16),transparent_70%)] group-hover:scale-110 transition-transform duration-500" />

              {/* Background Code Watermark */}
              <span className="absolute -right-2 -bottom-2 text-6xl font-black text-[#087FE5]/10 font-mono select-none pointer-events-none group-hover:text-[#087FE5]/20 transition-colors duration-300">
                {mod.code.replace('SAP-', '')}
              </span>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold font-mono uppercase bg-white/95 text-[#063B83] border border-[#087FE5]/40 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#087FE5] animate-pulse" />
                    <span>{mod.code === 'SAP-CCM' ? 'SAP-LE' : mod.code}</span>
                  </span>
                  <span className="text-xs text-slate-500 font-semibold">{mod.duration}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#063B83] transition-colors">
                  <Link to={`/training/${codeToSlug[mod.code] || mod.slug}`}>
                    {mod.code === 'SAP-CCM' ? 'SAP LE (Logistics Execution)' : mod.title}
                  </Link>
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {mod.shortDesc}
                </p>

                <div className="space-y-2 mb-6">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Curriculum Highlights:</p>
                  {mod.coreTopics.slice(0, 3).map((top, tidx) => (
                    <div key={tidx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#087FE5] mt-0.5 flex-shrink-0" />
                      <span className="line-clamp-1">{top}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between relative z-10">
                <Link
                  to={`/training/${codeToSlug[mod.code] || mod.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#087FE5] group-hover:text-[#063B83] transition-colors"
                >
                  <span className="relative">
                    Explore Syllabus
                    <span className="absolute left-0 -bottom-0.5 w-0 group-hover:w-full h-0.5 bg-[#087FE5] transition-all duration-300" />
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="px-3 py-1 rounded-lg text-xs font-bold text-slate-500 hover:text-[#063B83] hover:bg-slate-100 transition-colors"
                >
                  Enroll Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

