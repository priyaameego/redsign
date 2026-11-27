import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion, AnimatePresence, Variants } from 'framer-motion';
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

const FIVE_D_FRAMEWORK = [
  {
    num: '01',
    phase: 'Stage 01 • Assessment',
    title: 'Discover',
    subtitle: 'Architecture Audit & Fit-Gap Analysis',
    icon: Search,
    iconBg: '#E0F2FE',
    accentColor: '#0284C7',
    desc: 'Deep-dive architectural evaluation, existing process landscape audit, and business fit-gap analysis to identify requirements and operational risks.',
    points: ['Architecture Fit-Gap Audit', 'ERP Landscape Discovery', 'Readiness & Risk Matrix'],
  },
  {
    num: '02',
    phase: 'Stage 02 • Blueprinting',
    title: 'Define',
    subtitle: 'Solution Blueprint & Governance',
    icon: Target,
    iconBg: '#EEF2FF',
    accentColor: '#4F46E5',
    desc: 'Formulating strategic solution blueprints, global template harmonization, security matrices, and risk-mitigated cutover roadmaps.',
    points: ['Target Solution Blueprint', 'Statutory Localization Plan', 'Execution Roadmap'],
  },
  {
    num: '03',
    phase: 'Stage 03 • Engineering',
    title: 'Develop',
    subtitle: 'Clean-Core Build & BTP Extensions',
    icon: Code2,
    iconBg: '#F0FDF4',
    accentColor: '#16A34A',
    desc: 'Clean-core ERP configurations, custom SAP BTP cloud extensions, API integrations, and robust automated data transformation pipelines.',
    points: ['SAP BTP Extension Build', 'API & Peripheral Integration', 'Data Cleansing Engine'],
  },
  {
    num: '04',
    phase: 'Stage 04 • Cutover',
    title: 'Deliver',
    subtitle: 'Rehearsed Cutover & Go-Live',
    icon: Rocket,
    iconBg: '#EFF6FF',
    accentColor: '#2563EB',
    desc: 'Meticulously rehearsed cutover blackout simulations, rigorous UAT sign-offs, and seamless go-live deployment with zero unplanned downtime.',
    points: ['Rehearsed Cutover Protocols', 'End-to-End UAT Sign-Off', 'Command Center Deployment'],
  },
  {
    num: '05',
    phase: 'Stage 05 • Optimization',
    title: 'Drive Growth',
    subtitle: 'Post-Go-Live Value Realization',
    icon: TrendingUp,
    iconBg: '#FEF3C7',
    accentColor: '#D97706',
    desc: 'Continuous post-go-live hypercare, 24/7 SLA-governed support, AI-driven process optimization, and sustained enterprise value realization.',
    points: ['Dedicated Hypercare Warranty', '24/7 SLA Support Operations', 'Value Realization & Scale'],
  },
];

interface DeliverableMeta {
  phase: string;
  description: string;
  standard: string;
  metric: string;
  format: string;
}

const DELIVERABLE_EXTENDED_MAP: Record<string, DeliverableMeta[]> = {
  'sap-rollout': [
    {
      phase: 'PHASE 01 • ARCHITECTURAL HARMONIZATION',
      description: 'Site-specific delta configuration matrix harmonizing Indian GST e-invoicing, statutory TDS/TCS rules, localized chart of accounts, and multi-plant business units.',
      standard: 'SAP Activate & Statutory Matrix',
      metric: '340+ Scope Gates Passed',
      format: 'Executive Sign-Off Dossier'
    },
    {
      phase: 'PHASE 02 • FORENSIC DATA RECONCILIATION',
      description: 'Automated data cleansing scripts, legacy GL trial balance migration logs, and cryptographically verified opening balance reconciliation ledgers.',
      standard: 'Checksum-Verified Ledger',
      metric: '100% Balance Parity',
      format: 'Forensic Audit Report'
    },
    {
      phase: 'PHASE 03 • ASSURANCE & COMPLIANCE GATE',
      description: 'Cross-functional UAT test scenario logs, Segregation of Duties (SoD) risk validation, and strict role-based authorization matrices approved by internal audit.',
      standard: 'SOX & ISO 27001 Compliant',
      metric: '0 High-Risk Exceptions',
      format: 'Signed Acceptance Record'
    },
    {
      phase: 'PHASE 04 • CUTOVER & HYPERCARE WARRANTY',
      description: 'Minute-by-minute weekend cutover blackout sequence, automated rollback contingency plans, and dedicated 24/7 hypercare support warranty.',
      standard: 'Zero Unplanned Downtime',
      metric: '24/7 Dedicated Warranty',
      format: 'Production Runbook & SLA'
    }
  ],
  'sap-ams': [
    {
      phase: 'PHASE 01 • SERVICE LEVEL ARCHITECTURE',
      description: 'Tailored enterprise SLA contract specifying 15-minute P1 emergency response, root-cause resolution covenants, and multi-tier escalation hierarchy.',
      standard: 'ITIL v4 & ISO 20000',
      metric: '99.9% Uptime Commitment',
      format: 'Signed SLA Agreement'
    },
    {
      phase: 'PHASE 02 • OBSERVABILITY & MONITORING',
      description: 'Real-time incident cockpit deployment with automated system heartbeat telemetry, ABAP dump monitors, and early warning threshold alerts.',
      standard: '24/7 Live Telemetry',
      metric: '<15 Min Critical Response',
      format: 'Live Portal Credentials'
    },
    {
      phase: 'PHASE 03 • CONTINUOUS IMPROVEMENT',
      description: 'Monthly executive governance reviews detailing incident trends, recurring problem ticket root cause analyses, and proactive performance tuning.',
      standard: 'Monthly Executive Audit',
      metric: 'Zero Repeated Incidents',
      format: 'Boardroom Review Dossier'
    },
    {
      phase: 'PHASE 04 • PREVENTIVE STABILITY',
      description: 'Comprehensive scheduled database archiving runbook, transport management protocols, and quarterly disaster recovery simulation logs.',
      standard: 'Proactive Health Warranty',
      metric: '100% Backup Compliance',
      format: 'Annual Maintenance Matrix'
    }
  ],
  'rise-with-sap': [
    {
      phase: 'PHASE 01 • VALUE DISCOVERY & ROADMAP',
      description: 'Boardroom-level RISE transformation business case, total cost of ownership (TCO) benchmarks, and cloud sovereign architecture roadmap.',
      standard: 'SAP Clean Core Framework',
      metric: '30%+ TCO Reduction Target',
      format: 'Executive Business Case'
    },
    {
      phase: 'PHASE 02 • PROCESS INTELLIGENCE BLUEPRINT',
      description: 'SAP Signavio process mining discovery report identifying cross-departmental bottlenecks, automation candidates, and industry-standard workflows.',
      standard: 'Signavio Process Standard',
      metric: '45+ Process Optimizations',
      format: 'Process Mining Dossier'
    },
    {
      phase: 'PHASE 03 • CLEAN-CORE CODE REMEDIATION',
      description: 'Custom ABAP code simplification matrix decoupling legacy Z-modifications and migrating custom business logic to SAP BTP cloud extensions.',
      standard: 'Zero Core Modifications',
      metric: '100% ABAP Cloud Cleanliness',
      format: 'Clean-Core Code Registry'
    },
    {
      phase: 'PHASE 04 • CLOUD CUTOVER & CERTIFICATION',
      description: 'Near-zero downtime hyperscaler cloud migration runbook with comprehensive hypercare governance and enterprise cloud SLA certification.',
      standard: 'Hyperscaler High Availability',
      metric: 'Zero Business Disruption',
      format: 'Cloud Handover Certificate'
    }
  ],
  'sap-migration': [
    {
      phase: 'PHASE 01 • S/4HANA READINESS BLUEPRINT',
      description: 'Full-scope system conversion assessment covering Simplification Item Catalog, sizing verification, and business partner customer-vendor integration.',
      standard: 'SAP S/4HANA Certified',
      metric: '100% Readiness Clearance',
      format: 'Architecture Assessment'
    },
    {
      phase: 'PHASE 02 • CODE ADAPTATION INVENTORY',
      description: 'Algorithmic ABAP code remediation catalog eliminating obsolete database calls, adapting CDS views, and modernizing custom transaction flows.',
      standard: 'HANA DB Optimized',
      metric: '0 Obsolete Queries',
      format: 'Code Remediation Log'
    },
    {
      phase: 'PHASE 03 • CUTOVER DRY-RUN BENCHMARK',
      description: 'Rehearsed production mock cutover timetables verifying data transfer throughput, downtime blackout minutes, and disaster recovery failover.',
      standard: 'Tested Fallback Protocol',
      metric: 'Sub-48h Cutover Window',
      format: 'Mock Cutover Certification'
    },
    {
      phase: 'PHASE 04 • FINANCIAL RECONCILIATION',
      description: 'Forensic Universal Journal (ACDOCA) reconciliation records certifying 100% ledger balance accuracy, asset balances, and operational sign-off.',
      standard: 'Statutory Ledger Sign-Off',
      metric: '100% Financial Parity',
      format: 'Signed General Ledger Audit'
    }
  ],
  'sap-integration-btp': [
    {
      phase: 'PHASE 01 • INTEGRATION BLUEPRINT',
      description: 'End-to-end cloud enterprise interface catalog detailing API contracts, event brokers, RFC connections, and cloud-to-ground security proxies.',
      standard: 'SAP Integration Suite Standard',
      metric: 'REST / OData / RFC Harmonized',
      format: 'API Catalog & Contract Specs'
    },
    {
      phase: 'PHASE 02 • RESILIENT ERROR HANDLING',
      description: 'Automated exception handling framework with guaranteed message delivery queues, retry policies, and real-time dead-letter alerting.',
      standard: 'Zero Message Loss SLA',
      metric: '99.99% Message Delivery',
      format: 'Exception Routing Runbook'
    },
    {
      phase: 'PHASE 03 • ZERO-TRUST SECURITY GATEWAY',
      description: 'Enterprise API gateway hardening with mTLS cryptographic handshakes, OAuth2 token validation, and IP whitelisting compliance audit.',
      standard: 'ISO 27001 & mTLS Hardened',
      metric: 'Enterprise Cryptography',
      format: 'Security Penetration Report'
    },
    {
      phase: 'PHASE 04 • PERFORMANCE & STRESS AUDIT',
      description: 'High-concurrency stress testing certification demonstrating sub-200ms latency under peak enterprise transaction volume spikes.',
      standard: 'Enterprise Load SLA',
      metric: '5,000+ Req/Sec Validated',
      format: 'Stress Test Certification'
    }
  ],
  'sap-analytics': [
    {
      phase: 'PHASE 01 • EXECUTIVE METRIC ARCHITECTURE',
      description: 'Tailored C-suite KPI data dictionary establishing single source of truth across finance, supply chain, and operational revenue pipelines.',
      standard: 'Enterprise Semantic Model',
      metric: '50+ Verified Executive KPIs',
      format: 'KPI Governance Blueprint'
    },
    {
      phase: 'PHASE 02 • REAL-TIME DATA PIPELINES',
      description: 'Optimized SAP Datasphere and SAC calculation models delivering sub-second real-time queries over billions of transaction records.',
      standard: 'Real-Time In-Memory Engine',
      metric: '<1s Dashboard Latency',
      format: 'Calculation View Registry'
    },
    {
      phase: 'PHASE 03 • AUTOMATED INTELLIGENCE SUITE',
      description: 'Scheduled automated board report distribution matrices, proactive threshold notification triggers, and mobile executive viewports.',
      standard: 'Automated Executive Alerting',
      metric: 'Daily Automated Delivery',
      format: 'Executive Broadcast Schedule'
    },
    {
      phase: 'PHASE 04 • ANALYST TRAINING & PLAYBOOKS',
      description: 'Comprehensive self-service business analyst querying manuals, data lineage documentation, and long-term model governance handbooks.',
      standard: 'Client Capability Transfer',
      metric: '100% Internal Adoption',
      format: 'Analyst Enablement Pack'
    }
  ],
  'sap-ai-automation': [
    {
      phase: 'PHASE 01 • INTELLIGENT PIPELINE BLUEPRINT',
      description: 'Architectural blueprint integrating Generative AI & machine learning models with SAP BTP AI Core and enterprise ERP workflows.',
      standard: 'SAP Responsible AI Protocol',
      metric: 'Clean-Core AI Architecture',
      format: 'AI Governance Blueprint'
    },
    {
      phase: 'PHASE 02 • HUMAN-IN-THE-LOOP COCKPIT',
      description: 'Exception review interface ensuring financial approval audits, confidence score gating, and seamless human override for edge cases.',
      standard: 'Zero Unmonitored Output',
      metric: '99.4% Automated Accuracy',
      format: 'Operational Cockpit Guide'
    },
    {
      phase: 'PHASE 03 • STATUTORY COMPLIANCE CONNECTOR',
      description: 'Automated invoice OCR, e-way bill verification, and statutory GST auto-reconciliation connectors with zero manual data entry.',
      standard: '100% Tax Statute Compliant',
      metric: '85% Processing Speedup',
      format: 'API Connector Spec'
    },
    {
      phase: 'PHASE 04 • MODEL ACCURACY SLA & BENCHMARKS',
      description: 'Continuous model drift monitoring logs, periodic re-training workflows, and dedicated operational accuracy SLA maintenance agreements.',
      standard: 'Sustained Model Accuracy SLA',
      metric: '99%+ Enterprise Precision',
      format: 'SLA Maintenance Protocol'
    }
  ],
  'crm-solutions': [
    {
      phase: 'PHASE 01 • SALES PIPELINE ARCHITECTURE',
      description: 'Omnichannel CRM architecture mapping lead-to-opportunity stages, custom entity schemas, and executive sales territory assignments.',
      standard: 'Enterprise CRM Standard',
      metric: '100% Funnel Visibility',
      format: 'CRM Data Dictionary'
    },
    {
      phase: 'PHASE 02 • DATA CLEANSING & MIGRATION',
      description: 'Algorithmic customer master deduplication scripts, contact hierarchy consolidation, and legacy account migration balance registers.',
      standard: 'Zero Duplicate Guarantee',
      metric: '100% Verified Records',
      format: 'Migration Verification Log'
    },
    {
      phase: 'PHASE 03 • REVENUE FORECASTING SUITE',
      description: 'Executive pipeline forecasting dashboards, automated lead routing workflows, and real-time quota attainment tracking telemetry.',
      standard: 'Forecasting Accuracy SLA',
      metric: 'Real-Time Quota Tracking',
      format: 'Dashboard Configuration Spec'
    },
    {
      phase: 'PHASE 04 • SALES TEAM ENABLEMENT',
      description: 'Role-specific sales rep playbooks, administrator configuration manuals, and automated email/calendar synchronization runbooks.',
      standard: 'User Adoption Standard',
      metric: '100% Field Force Trained',
      format: 'Sales Enablement Guide'
    }
  ],
  'erp-solutions': [
    {
      phase: 'PHASE 01 • BUSINESS PROCESS BLUEPRINT',
      description: 'Holistic ERP architecture blueprint unifying procurement, inventory, sales, production planning, and financial general ledger modules.',
      standard: 'Enterprise Architecture Spec',
      metric: 'End-to-End Workflow Sync',
      format: 'Comprehensive Blueprint'
    },
    {
      phase: 'PHASE 02 • MASTER DATA & OPENING LEDGERS',
      description: 'Forensic master data extraction, transformation, item master valuation, and certified trial balance opening balance sign-off.',
      standard: 'Statutory Accounting Standard',
      metric: '100% Balance Parity',
      format: 'Audited Opening Ledger'
    },
    {
      phase: 'PHASE 03 • STATUTORY TEMPLATE SUITE',
      description: 'Fully compliant tax invoice formats, automated e-way bill generation, delivery challans, and audited purchase requisition templates.',
      standard: '100% GST / Fiscal Compliance',
      metric: 'Print & Digital Sign Ready',
      format: 'Statutory Template Pack'
    },
    {
      phase: 'PHASE 04 • OPERATIONAL TRAINING PLAYBOOKS',
      description: 'Departmental role playbooks, warehouse terminal operation guides, and comprehensive system administration handover documentation.',
      standard: 'Zero Production Lag',
      metric: 'Complete Staff Enablement',
      format: 'System Handover Dossier'
    }
  ],
  'e-commerce-development': [
    {
      phase: 'PHASE 01 • CLOUD STOREFRONT ARCHITECTURE',
      description: 'Headless, multi-tenant digital commerce architecture with Next.js/React storefront, serverless microservices, and CDN edge caching.',
      standard: 'PCI-DSS & SOC2 Certified',
      metric: '99.99% Availability Target',
      format: 'Architecture Specification'
    },
    {
      phase: 'PHASE 02 • CUSTOM ADMIN COCKPIT',
      description: 'High-efficiency catalog and order management dashboard featuring bulk price revisions, inventory tracking, and refund workflows.',
      standard: 'Role-Based Access Control',
      metric: 'Instant Order Management',
      format: 'Admin User Guide'
    },
    {
      phase: 'PHASE 03 • ERP & PAYMENT CONNECTORS',
      description: 'Two-way synchronized inventory connectors, automated order push to ERP, and resilient multi-gateway checkout with fallback routing.',
      standard: 'Zero Order Drop SLA',
      metric: '<1s Payment Handshake',
      format: 'Integration Connector Code'
    },
    {
      phase: 'PHASE 04 • PERFORMANCE & SECURITY AUDIT',
      description: 'Production performance certification achieving 95+ Google Core Web Vitals on mobile, SSL hardening, and automated penetration testing sign-off.',
      standard: 'Top-Tier Core Web Vitals',
      metric: '95+ Lighthouse Score',
      format: 'Security & Speed Audit'
    }
  ],
  'hrms-solution': [
    {
      phase: 'PHASE 01 • HR POLICY & GRADE MATRIX',
      description: 'Enterprise organizational hierarchy blueprint defining salary bands, department cost centers, leave encashment rules, and promotion tracks.',
      standard: 'Statutory Labor Law Matrix',
      metric: '100% Policy Alignment',
      format: 'HR Architecture Blueprint'
    },
    {
      phase: 'PHASE 02 • HISTORICAL DATA MIGRATION',
      description: 'Cleansed employee master data migration registers with complete historical attendance logs, leave balances, and tax declaration records.',
      standard: 'Data Privacy & GDPR Compliant',
      metric: 'Zero Record Discrepancy',
      format: 'Migration Audit Record'
    },
    {
      phase: 'PHASE 03 • AUTOMATED STATUTORY PAYROLL',
      description: 'Automated bank salary disbursement NACHA/NEFT file generators, automated PF/ESIC computation schedules, and digital Form-16 issuance.',
      standard: '100% On-Time Payroll SLA',
      metric: 'Zero Payroll Calculation Lag',
      format: 'Bank Integration Registry'
    },
    {
      phase: 'PHASE 04 • EMPLOYEE SELF-SERVICE PACK',
      description: 'Mobile-responsive employee self-service onboarding guides, manager approval workflow playbooks, and HR administration manuals.',
      standard: 'Self-Service Adoption Standard',
      metric: '100% Digital Onboarding',
      format: 'HR Admin & ESS Playbook'
    }
  ],
  'digital-marketing': [
    {
      phase: 'PHASE 01 • TECHNICAL AUDIT & COMPETITIVE MATRIX',
      description: 'Forensic technical SEO audit resolving crawl budget leaks, page speed bottlenecks, and comprehensive competitor keyword share-of-voice analysis.',
      standard: 'Google Webmaster Best Practices',
      metric: '100% Crawl Optimization',
      format: 'Technical Audit Dossier'
    },
    {
      phase: 'PHASE 02 • ACCOUNT-BASED MARKETING SUITE',
      description: 'Curated Target Account Lists (TAL), decision-maker persona profiles, and tailored LinkedIn/programmatic account-targeted ad campaign architectures.',
      standard: 'B2B High-Intent Audience Target',
      metric: '3x Pipeline Engagement',
      format: 'ABM Campaign Blueprint'
    },
    {
      phase: 'PHASE 03 • CONVERSION LANDING PAGES',
      description: 'High-converting enterprise landing page templates with multi-step lead capture funnels, UTM tracking telemetry, and CRM auto-sync.',
      standard: 'Conversion Rate Optimization',
      metric: 'Tested Ad & Copy Variants',
      format: 'Landing Page & Copy Assets'
    },
    {
      phase: 'PHASE 04 • BI-WEEKLY ROI ATTRIBUTION',
      description: 'Executive boardroom performance dashboards tracking Cost-Per-Qualified-Lead (CPQL), multi-touch attribution, and pipeline contribution metrics.',
      standard: 'Full Multi-Touch Attribution',
      metric: 'Bi-Weekly Executive Review',
      format: 'ROI Attribution Reports'
    }
  ],
  'app-web-development': [
    {
      phase: 'PHASE 01 • CLEAN-CODE REPOSITORY (GIT)',
      description: 'Production-ready, version-controlled git codebase with strict ESLint/Prettier standards, structured atomic modular architecture, and CI/CD pipelines.',
      standard: 'Enterprise Clean-Code Standard',
      metric: '100% Documented Codebase',
      format: 'Full Source Code & Git Repo'
    },
    {
      phase: 'PHASE 02 • AUTOMATED TEST SUITE & QA',
      description: 'Comprehensive automated test coverage including unit tests, API integration tests, and Cypress/Playwright end-to-end regression test harnesses.',
      standard: 'Zero-Defect Release Gate',
      metric: '85%+ Code Test Coverage',
      format: 'Automated QA Test Reports'
    },
    {
      phase: 'PHASE 03 • INFRASTRUCTURE-AS-CODE (IaC)',
      description: 'Containerized Docker configurations, Kubernetes Helm charts, or Terraform cloud blueprints enabling reproducible zero-downtime deployments.',
      standard: 'Cloud-Native & Twelve-Factor',
      metric: '1-Click Cloud Deployment',
      format: 'Terraform & Docker Configs'
    },
    {
      phase: 'PHASE 04 • API SPECS & OPERATIONAL HANDOVER',
      description: 'Interactive OpenAPI / Swagger documentation, developer onboarding guides, and operational production maintenance and monitoring runbooks.',
      standard: '100% IP Transfer Guarantee',
      metric: 'Full Technical Ownership',
      format: 'API Specs & Ops Runbooks'
    }
  ]
};

const getDeliverableMeta = (serviceSlug: string | undefined, index: number): DeliverableMeta => {
  if (serviceSlug && DELIVERABLE_EXTENDED_MAP[serviceSlug] && DELIVERABLE_EXTENDED_MAP[serviceSlug][index]) {
    return DELIVERABLE_EXTENDED_MAP[serviceSlug][index];
  }
  const defaultPhases: DeliverableMeta[] = [
    {
      phase: 'PHASE 01 • ARCHITECTURAL BASELINE',
      description: 'Comprehensive architectural blueprint, functional specifications, and institutional requirements matrix signed off prior to execution.',
      standard: 'Enterprise Standard & ISO 27001',
      metric: '100% Scope Sign-Off',
      format: 'Executive Architecture Dossier'
    },
    {
      phase: 'PHASE 02 • TRANSFORMATION & DATA INTEGRITY',
      description: 'Forensic data extraction, validation, and transformation logs certifying zero data loss and automated checksum reconciliation.',
      standard: 'Checksum Data Integrity',
      metric: 'Zero Data Loss Guarantee',
      format: 'Data Reconciliation Register'
    },
    {
      phase: 'PHASE 03 • QUALITY ASSURANCE & AUDIT GATE',
      description: 'Rigorous end-to-end functional test execution, security vulnerability penetration testing, and regulatory compliance clearance.',
      standard: 'SOX & Internal Audit Ready',
      metric: '0 High-Severity Issues',
      format: 'UAT Acceptance Sign-Off'
    },
    {
      phase: 'PHASE 04 • PRODUCTION CUTOVER & WARRANTY',
      description: 'Detailed cutover blackout execution runbook, rollback contingency protocols, and dedicated post-launch hypercare SLA support.',
      standard: 'Zero Unplanned Downtime SLA',
      metric: '24/7 Hypercare Warranty',
      format: 'Operational Production Runbook'
    }
  ];
  return defaultPhases[index % defaultPhases.length];
};

export const ServicesPage: React.FC = () => {
  const { slug, category, id } = useParams<{ slug?: string; category?: string; id?: string }>();
  const [activeTab, setActiveTab] = useState<'all' | 'sap' | 'enterprise'>('all');
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [jumbleKey, setJumbleKey] = useState(0);

  // Periodic subtle re-jumble animation for the hero banner heading
  useEffect(() => {
    const timer = setInterval(() => {
      setJumbleKey((prev) => prev + 1);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  // Staggered Jumble / Jump spring animation for characters
  const letterVariants: Variants = {
    hidden: (i: number) => ({
      opacity: 0,
      y: (i % 2 === 0 ? 1 : -1) * (18 + (i % 3) * 6),
      rotate: (i % 2 === 0 ? 1 : -1) * (8 + (i % 4) * 3),
      scale: 0.65,
      filter: 'blur(5px)',
    }),
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotate: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        type: 'spring' as const,
        damping: 11,
        stiffness: 190,
        delay: 0.38 + i * 0.032,
      },
    }),
  };

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
                </motion.div>

                {/* Layer-Up Headline: One after another text reveal */}
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[50px] font-normal sm:font-medium text-white leading-[1.2] tracking-[-0.02em] font-outfit space-y-2">
                  <motion.span
                    initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="block text-white"
                  >
                    {detailedData.heroHeadline}
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 0.75, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="block font-semibold bg-gradient-to-r from-[#38bdf8] via-[#08B9E8] to-[#60a5fa] bg-clip-text text-transparent drop-shadow-[0_2px_18px_rgba(8,185,232,0.35)]"
                  >
                    {detailedData.heroHighlight}
                  </motion.span>
                </h1>

                {/* Animated Description Paragraph */}
                <motion.p
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.7, ease: 'easeOut' }}
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
                    to={`/contact?service=${detailedData.slug}`}
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
                      100% SLA-Governed
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
              className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0c1e3d] tracking-tight leading-tight font-outfit"
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
                  src={detailedData.montageImage || '/photo-1542744173-8e7e53415bb0.jpg'}
                  alt="Real-Time Enterprise SAP Dashboard"
                  className="w-full h-[220px] sm:h-[250px] object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/photo-1542744173-8e7e53415bb0.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071B49]/60 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />

                {/* Corner Glow Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#08B9E8]/35 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
              </motion.div>

              {/* Floating Counter Badge: 100% SLA-Governed Implementation */}
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

              <h3 className="text-lg sm:text-xl font-semibold text-[#0c1e3d] leading-snug font-outfit">
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
                  to={`/contact?service=${detailedData.slug}`}
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
                    <Workflow className="w-3.5 h-3.5" />
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
            SECTION 4: CORE SCOPE & CAPABILITIES PILLARS
           ========================================================================= */}
        <section className="py-16 sm:py-24 bg-white border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-[#0369A1] text-xs font-semibold tracking-wider uppercase mb-3">
                <span className="w-2 h-2 rounded-full bg-[#0284C7]" />
                <span>Technical Blueprint</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium sm:font-semibold text-[#071B49] font-outfit tracking-[-0.02em] leading-tight">
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
                    <span className="text-xs sm:text-sm font-medium text-slate-800 leading-relaxed group-hover:text-[#087FE5] transition-colors duration-300">
                      {cap.name}
                    </span>
                  </div>

                  <span className="inline-block text-[11px] font-medium tracking-wide text-[#0369A1] bg-[#E0F2FE]/80 border border-[#BAE6FD]/80 px-2.5 py-0.5 rounded-md w-fit relative z-10 group-hover:bg-[#087FE5] group-hover:text-white group-hover:border-[#087FE5] transition-colors duration-200">
                    {cap.highlight}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Enterprise Project Assurance & Executive Governance Box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-14 rounded-3xl bg-gradient-to-br from-[#071E54] via-[#0A2972] to-[#05163D] text-white p-8 sm:p-12 border-t-2 border-t-[#38BDF8] border border-blue-400/25 shadow-2xl relative overflow-hidden"
            >
              {/* Ambient Radiant Glow Effects */}
              <div className="absolute top-0 right-0 w-[450px] h-[350px] bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.22)_0%,transparent_70%)] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[350px] h-[300px] bg-[radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.2)_0%,transparent_70%)] pointer-events-none" />

              {/* Header with Title, Tag, and SLA Seal */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pb-8 border-b border-white/15 relative z-10 mb-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-400/15 border border-sky-400/30 text-sky-300 text-xs font-semibold tracking-wider uppercase mb-3">
                    <ShieldCheck className="w-4 h-4 text-sky-400" />
                    <span>Institutional Assurance & Executive Governance</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug font-outfit">
                    Verified Enterprise Deliverables & Executive Sign-Off Dossier
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl font-light leading-relaxed">
                    Every deployment milestone culminates in audited technical blueprints, forensic data reconciliation ledgers, and zero-defect handover certificates validated by institutional governance gates.
                  </p>
                </div>

                {/* SLA Seal Badge */}
                <div className="flex items-center gap-3.5 bg-white/10 border border-white/20 backdrop-blur-md px-5 py-3.5 rounded-2xl shadow-xl flex-shrink-0">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#087FE5] via-[#0284c7] to-[#38BDF8] flex items-center justify-center text-white font-bold shadow-md">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-white uppercase tracking-wider font-outfit flex items-center gap-1.5">
                      <span>100% Audit-Ready</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                    <div className="text-[11px] text-sky-200 font-medium">Guaranteed Boardroom Handover</div>
                  </div>
                </div>
              </div>

              {/* Deliverables Grid with Staggered Interactive Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 relative z-10">
                {detailedData.deliverables.map((d, i) => {
                  const meta = getDeliverableMeta(detailedData.slug, i);
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="group relative p-6 sm:p-7 rounded-2xl bg-white/[0.07] hover:bg-white/[0.13] border border-white/15 hover:border-sky-400/50 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-500/20 flex flex-col justify-between overflow-hidden cursor-default"
                    >
                      {/* 3D Diagonal Light Sheen Sweep on Hover */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none z-10" />

                      <div>
                        {/* Top Row: Phase / Artifact Code & Verification Pill */}
                        <div className="flex items-center justify-between gap-2 mb-3.5 flex-wrap">
                          <span className="text-[10.5px] font-mono font-bold tracking-wider text-sky-300 uppercase bg-sky-400/15 px-2.5 py-1 rounded-md border border-sky-400/25">
                            {meta.phase}
                          </span>
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10.5px] font-semibold border border-emerald-500/30">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Executive Sign-Off</span>
                          </span>
                        </div>

                        {/* Deliverable Title */}
                        <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-sky-200 transition-colors leading-snug font-outfit mb-2.5">
                          {d}
                        </h4>

                        {/* In-depth Scope Description */}
                        <p className="text-xs sm:text-[13px] text-slate-300/90 leading-relaxed font-light mb-4">
                          {meta.description}
                        </p>

                        {/* Quality & Audit Badges */}
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                          <span className="inline-flex items-center gap-1.5 text-[10.5px] font-medium text-sky-200 bg-white/10 px-2.5 py-1 rounded-md border border-white/10">
                            <ShieldCheck className="w-3 h-3 text-sky-400 flex-shrink-0" />
                            <span>{meta.standard}</span>
                          </span>
                          <span className="inline-flex items-center gap-1.5 text-[10.5px] font-medium text-emerald-200 bg-emerald-500/15 px-2.5 py-1 rounded-md border border-emerald-500/25">
                            <Award className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                            <span>{meta.metric}</span>
                          </span>
                        </div>
                      </div>

                      {/* Bottom Metadata & Format */}
                      <div className="mt-2 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-300 flex-wrap gap-2">
                        <span className="text-slate-300/80 font-mono text-[10.5px] flex items-center gap-1.5">
                          <FileCheck className="w-3 h-3 text-sky-400" />
                          <span>{meta.format}</span>
                        </span>
                        <span className="text-sky-300 font-mono font-medium text-[10.5px] bg-sky-950/60 px-2 py-0.5 rounded border border-sky-400/30">
                          SLA-Locked • 100% IP Handover
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom Reassurance Banner */}
              <div className="mt-8 pt-6 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-300 relative z-10">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
                  <span>
                    Full intellectual property transfer: version-controlled codebases, forensic audit runbooks & certified configuration matrices transfer 100% to client ownership upon milestone sign-off.
                  </span>
                </div>
                <div className="text-[11px] font-mono text-sky-300 uppercase tracking-wider font-semibold whitespace-nowrap bg-white/10 px-3 py-1 rounded-full border border-sky-400/30">
                  Zero Technical Debt SLA Guarantee
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================================
            ZISANTECH 5D DELIVERY FRAMEWORK
            Proprietary 5-Stage Execution Framework for Flawless Enterprise Delivery
           ========================================================================= */}
        <section className="py-20 sm:py-28 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC] border-b border-slate-200/80 relative overflow-hidden">
          {/* Subtle geometric pattern background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#087FE508_1px,transparent_1px),linear-gradient(to_bottom,#087FE508_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-[#0369A1] text-xs font-semibold tracking-wider uppercase mb-3 shadow-sm">
                <Workflow className="w-3.5 h-3.5 text-[#0284C7]" />
                <span>Proprietary Methodology</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#071B49] font-outfit tracking-[-0.02em] leading-tight">
                ZisanTech 5D Delivery Framework
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-4 font-normal leading-relaxed max-w-2xl mx-auto">
                A battle-tested five-stage execution model engineered to eliminate deployment risks, enforce architectural governance, and maximize enterprise value realization.
              </p>
            </div>

            {/* 5D Grid / Flow */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 relative">
              {/* Connecting line on desktop behind cards */}
              <div className="hidden lg:block absolute top-14 left-12 right-12 h-0.5 bg-gradient-to-r from-[#0284C7]/20 via-[#087FE5]/40 to-[#0284C7]/20 z-0 pointer-events-none" />

              {FIVE_D_FRAMEWORK.map((step, idx) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: idx * 0.08 }}
                    whileHover={{ y: -6, transition: { duration: 0.25 } }}
                    className="relative z-10 bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#087FE5]/60 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
                  >
                    {/* Top Ambient Glow on Hover */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle,rgba(8,127,229,0.12)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <div>
                      {/* Header: Number & Step Icon */}
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className="w-11 h-11 rounded-xl flex items-center justify-center font-bold text-lg shadow-sm transition-transform duration-300 group-hover:scale-110"
                          style={{ background: step.iconBg, color: step.accentColor }}
                        >
                          <IconComponent className="w-5 h-5" />
                        </span>
                        <span className="text-xl font-mono font-bold text-slate-300 group-hover:text-[#087FE5] transition-colors">
                          {step.num}
                        </span>
                      </div>

                      <div className="text-[11px] font-semibold uppercase tracking-wider text-[#0284C7] mb-1">
                        {step.phase}
                      </div>

                      <h3 className="text-xl font-semibold text-[#071B49] font-outfit mb-1 group-hover:text-[#087FE5] transition-colors">
                        {step.title}
                      </h3>

                      <p className="text-[12px] font-medium text-slate-500 mb-3">
                        {step.subtitle}
                      </p>

                      <p className="text-slate-600 text-xs leading-relaxed mb-5 font-normal">
                        {step.desc}
                      </p>
                    </div>

                    {/* Key Highlights / Outcomes */}
                    <div className="pt-3.5 border-t border-slate-100 space-y-1.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Key Outcomes
                      </div>
                      {step.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-1.5 text-[11px] font-medium text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                          <span className="truncate">{pt}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Framework Reassurance Bar */}
            <div className="mt-12 sm:mt-16 bg-[#071B49] text-white p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10">
              <div className="flex items-center gap-4 text-center md:text-left">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#087FE5] to-[#08B9E8] flex items-center justify-center flex-shrink-0 text-white shadow-md">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold font-outfit">Standardized Governance Across All Engagements</h4>
                  <p className="text-xs sm:text-sm text-slate-300 font-light mt-0.5">Every phase is gated by formal quality audits, SLA guarantees, and enterprise compliance protocols.</p>
                </div>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <span className="px-4 py-2 rounded-full bg-white/10 border border-white/15 text-xs font-medium text-sky-300">
                  100% On-Time Cutover SLA
                </span>
              </div>
            </div>
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
            SECTION 6: WHY PARTNER WITH ZISANTECH SOLUTIONS? (Ultra-Premium Wider Enterprise Showcase)
           ========================================================================= */}
        <section className="py-24 sm:py-32 bg-[#051129] relative overflow-hidden text-white border-y border-white/10">
          {/* Ambient Multi-Layered Radiant Glow & Grid Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(8,127,229,0.28),transparent_75%)] pointer-events-none" />
          <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(56,189,248,0.14),transparent_65%)] pointer-events-none blur-2xl" />
          <div className="absolute bottom-10 -right-32 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(99,102,241,0.14),transparent_65%)] pointer-events-none blur-2xl" />
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

          {/* Wider Fluid Container for Expansive High-Impact Presence */}
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
            {/* Header with Premium Pill & Balanced Typography */}
            <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-400/10 border border-sky-400/30 text-sky-300 text-xs font-semibold tracking-wider uppercase mb-4 shadow-sm backdrop-blur-md">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                <span>Institutional Advantage &amp; Proven Leadership</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight font-outfit text-white leading-tight">
                {detailedData.whyPartnerTitle}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mt-4 font-light leading-relaxed max-w-2xl mx-auto">
                {detailedData.whyPartnerSubtitle}
              </p>
            </div>

            {/* 4 Wider, Distinct Enterprise Architecture Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
              {detailedData.whyCards.map((card, idx) => {
                // Dynamic contextual icon for each card
                const icons = [Globe2, ShieldCheck, Zap, Cpu];
                const IconComp = icons[idx % icons.length];
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: idx * 0.08 }}
                    whileHover={{ y: -8, scale: 1.015, transition: { duration: 0.25 } }}
                    className="relative p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/15 hover:border-sky-400/60 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(8,127,229,0.22)] flex flex-col justify-between group overflow-hidden cursor-default"
                  >
                    {/* 3D Diagonal Light Sheen Sweep on Hover */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none z-10" />

                    {/* Watermark Index Number */}
                    <span className="absolute top-5 right-6 text-3xl font-mono font-bold text-white/[0.07] group-hover:text-sky-400/25 transition-colors select-none">
                      0{idx + 1}
                    </span>

                    <div className="relative z-10">
                      {/* Icon Container with Luminous Gradient */}
                      <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-sky-400/20 to-blue-600/30 border border-sky-400/30 p-3 mb-6 flex items-center justify-center text-sky-300 shadow-lg group-hover:scale-110 group-hover:bg-[#087FE5] group-hover:text-white transition-all duration-300">
                        <IconComp className="w-6 h-6 sm:w-7 sm:h-7" />
                      </div>

                      {/* Card Title */}
                      <h3 className="text-xl sm:text-[21px] font-semibold text-white font-outfit mb-3 leading-snug group-hover:text-sky-200 transition-colors">
                        {card.title}
                      </h3>

                      {/* Card Description */}
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                        {card.desc}
                      </p>
                    </div>

                    {/* Bottom Verification Seal */}
                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-[11px] text-sky-300 font-medium font-outfit relative z-10">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>Enterprise Architecture Standard</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Quick Consultation CTA with Dedicated High-Impact Button */}
            <div className="mt-14 sm:mt-18 text-center relative z-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                to={`/contact?service=${detailedData.slug}`}
                className="relative group overflow-hidden inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#087FE5] via-[#0664B5] to-[#043E7A] hover:from-[#0091ff] hover:via-[#087FE5] hover:to-[#0664B5] text-white font-bold rounded-xl text-sm sm:text-base border border-white/20 shadow-xl shadow-blue-950/60 hover:shadow-2xl hover:shadow-[#087FE5]/40 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 cursor-pointer"
              >
                {/* 3D Diagonal Light Sheen Sweep */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
                <span>Request Solution Blueprint for {detailedData.title}</span>
                <div className="w-6 h-6 rounded-lg bg-white/20 group-hover:bg-white text-white group-hover:text-[#063B83] flex items-center justify-center transition-all duration-300 flex-shrink-0">
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>

              <a
                href={`tel:${COMPANY_INFO.primaryPhone}`}
                className="inline-flex items-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/15 text-white font-medium rounded-xl text-sm border border-white/15 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5"
              >
                <PhoneCall className="w-4 h-4 text-[#08B9E8]" />
                <span>Talk to SAP Architect</span>
              </a>
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
                  className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#071B49] font-outfit tracking-[-0.02em] leading-tight"
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
                  <span>Explore Complete Portfolio ({SERVICES.length} Solutions)</span>
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
      {/* =========================================================================
          HERO BANNER: CINEMATIC KEN BURNS MOTION BACKGROUND & JUMBLE TEXT ANIMATION
         ========================================================================= */}
      <section className="relative min-h-[500px] lg:min-h-[540px] bg-[#020b1e] text-white overflow-hidden flex items-center border-b border-white/10">
        {/* Background Visual with Cinematic Ken Burns Slow Pan/Zoom */}
        <motion.img
          src="/hero_sap_consulting_1.jpg"
          alt="Enterprise Services & Solutions"
          animate={{
            scale: [1.02, 1.12],
            x: [0, -12],
            y: [0, -6]
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: [0.25, 0.1, 0.25, 1]
          }}
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.70] contrast-[1.15]"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = '/hero1.jpg';
          }}
        />

        {/* Digital Transformation Multi-Layer Lighting Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020b1e]/98 via-[#031535]/85 to-[#020b1e]/60 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(8,127,229,0.30)_0%,transparent_65%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_75%,rgba(8,185,232,0.20)_0%,transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020b1e] via-transparent to-[#020b1e]/40 pointer-events-none" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 w-full">
          <div className="max-w-3xl lg:max-w-4xl space-y-5">
            {/* Breadcrumb Navigation with Fade In */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="flex items-center gap-2 text-xs text-slate-300 font-medium"
            >
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-[#08B9E8] font-bold">Services & Solutions</span>
            </motion.div>

            {/* Animated Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease: 'easeOut' }}
              className="flex items-center gap-3"
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 shadow-md">
                <span className="w-2.5 h-2.5 rounded-full bg-[#08B9E8] shadow-[0_0_8px_#08B9E8]" />
                <span className="text-[11px] sm:text-xs font-bold tracking-widest text-slate-100 uppercase font-mono">
                  Enterprise Technology Practice
                </span>
              </div>
            </motion.div>

            {/* Main Headline with Sequential Jumble / Jump Animation */}
            <div 
              className="cursor-pointer select-none"
              onClick={() => setJumbleKey(prev => prev + 1)}
              title="Click to replay motion animation"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-extrabold text-white leading-[1.15] tracking-tight font-outfit">
                <motion.span
                  initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block text-white mr-3 drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]"
                >
                  Enterprise
                </motion.span>
                <span key={jumbleKey} className="inline-flex flex-wrap items-baseline">
                  {/* "Services" Jumble Characters */}
                  <span className="inline-flex whitespace-nowrap bg-gradient-to-r from-[#38bdf8] via-[#08B9E8] to-[#60a5fa] bg-clip-text text-transparent drop-shadow-[0_2px_18px_rgba(8,185,232,0.35)]">
                    {"Services".split("").map((char, index) => (
                      <motion.span
                        key={`srv-${jumbleKey}-${index}`}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        variants={letterVariants}
                        className="inline-block"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>

                  {/* Ampersand */}
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', damping: 12, stiffness: 220, delay: 0.38 + 8 * 0.032 }}
                    className="inline-block text-slate-300 mx-2.5 font-light"
                  >
                    &
                  </motion.span>

                  {/* "Solutions" Jumble Characters */}
                  <span className="inline-flex whitespace-nowrap bg-gradient-to-r from-[#60a5fa] via-[#087FE5] to-[#38bdf8] bg-clip-text text-transparent drop-shadow-[0_2px_18px_rgba(8,127,229,0.35)]">
                    {"Solutions".split("").map((char, index) => (
                      <motion.span
                        key={`sol-${jumbleKey}-${index}`}
                        custom={index + 9}
                        initial="hidden"
                        animate="visible"
                        variants={letterVariants}
                        className="inline-block"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                </span>
              </h1>
            </div>

            {/* Subtitle with Animated Reveal */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.85 }}
              className="text-slate-200 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl font-normal drop-shadow-sm"
            >
              Explore our full catalog of 13 verified SAP and Enterprise & Cloud Solutions, delivered with SLA accountability and clean-core engineering.
            </motion.p>

            {/* Filter Tabs with Motion */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.95 }}
              className="flex flex-wrap items-center gap-2.5 pt-2"
            >
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors flex items-center gap-2 cursor-pointer ${
                  activeTab === 'all'
                    ? 'bg-[#087FE5] text-white shadow-sm'
                    : 'bg-white/10 text-slate-200 hover:bg-white/20'
                }`}
              >
                <span>All Services (13)</span>
              </button>
              <button
                onClick={() => setActiveTab('sap')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors flex items-center gap-2 cursor-pointer ${
                  activeTab === 'sap'
                    ? 'bg-[#087FE5] text-white shadow-sm'
                    : 'bg-white/10 text-slate-200 hover:bg-white/20'
                }`}
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>SAP Services (7)</span>
              </button>
              <button
                onClick={() => setActiveTab('enterprise')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors flex items-center gap-2 cursor-pointer ${
                  activeTab === 'enterprise'
                    ? 'bg-[#087FE5] text-white shadow-sm'
                    : 'bg-white/10 text-slate-200 hover:bg-white/20'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Enterprise & Cloud Solutions (6)</span>
              </button>
            </motion.div>
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
