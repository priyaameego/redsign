export interface ServiceSlide {
  title: string;
  subtitle: string;
  image: string;
  badge: string;
  metric: string;
  metricLabel: string;
  points: string[];
}

export interface DetailedService {
  id: number;
  slug: string;
  category: 'SAP Services' | 'Enterprise & Cloud Solutions';
  title: string;
  heroHeadline: string;
  heroHighlight: string;
  heroTagline: string;
  heroImage: string;
  secondaryImage: string;
  montageImage?: string;
  sliderSlides: ServiceSlide[];
  overviewSubheading: string;
  overviewHeading: string;
  overviewLead: string;
  overviewBody: string[];
  pillarsHeading: string;
  pillars: {
    tag: string;
    title: string;
    desc: string;
  }[];
  capabilitiesHeading: string;
  capabilities: {
    name: string;
    highlight: string;
  }[];
  deliverables: string[];
  methodologyHeading: string;
  methodologySubheading: string;
  methodology: {
    num: string;
    title: string;
    tags: string;
    desc: string;
  }[];
  whyPartnerTitle: string;
  whyPartnerSubtitle: string;
  whyCards: {
    title: string;
    desc: string;
  }[];
}

export const DETAILED_SERVICES_MAP: Record<string, DetailedService> = {
  // 1. SAP Rollout
  'sap-rollout': {
    id: 1,
    slug: 'sap-rollout',
    category: 'SAP Services',
    title: 'SAP Rollout',
    heroHeadline: 'Multi-Location Enterprise Expansion',
    heroHighlight: 'Through Disciplined SAP Rollout',
    heroTagline: 'Scale verified corporate templates to international subsidiaries, newly acquired operating entities, and multi-plant hubs with zero operational disruption.',
    heroImage: '/skyscraper_hd.jpg',
    secondaryImage: '/hero_sap_consulting_1.jpg',
    montageImage: '/zisantech_collaborative_consulting.jpg',
    sliderSlides: [
      {
        title: 'Global Core Template Harmonization',
        subtitle: 'Standardize Corporate Master Governance Across Multi-Entity Facilities',
        image: '/skyscraper_hd.jpg',
        badge: 'Template Governance',
        metric: '100%',
        metricLabel: 'Chart of Accounts Alignment',
        points: [
          'Pre-tested corporate blueprint replication across new subsidiaries',
          'Harmonized material master, customer master, and vendor hierarchies',
          'Strict prevention of localized codebase divergence and forks'
        ]
      },
      {
        title: 'Statutory & Regional Localization',
        subtitle: 'Automated Tax Compliance, E-Invoicing & Regional Jurisdictions',
        image: '/exact_sap_consulting_hd.jpg',
        badge: 'Statutory Compliance',
        metric: '0 Penalty',
        metricLabel: 'GST & E-Way Bill Integration',
        points: [
          'Pre-configured statutory tax engines (GST, TDS/TCS, E-Way Bill)',
          'Digital invoicing compliance with automated IRN portal handshake',
          'Local jurisdictional financial reporting and audit trail readiness'
        ]
      },
      {
        title: 'Rehearsed Cutover & Hyper-Care',
        subtitle: 'Dry-Run Execution Protocols for Zero Unplanned Production Downtime',
        image: '/exact_sap_consulting_hd.jpg',
        badge: 'Cutover Execution',
        metric: '< 48 Hrs',
        metricLabel: 'Weekend Cutover Window',
        points: [
          'Minute-by-minute dry-run cutover rehearsal during blackout periods',
          'Automated data cleansing, trial migrations, and reconciliation checks',
          'Dedicated on-site hyper-care teams for immediate operational stability'
        ]
      }
    ],
    overviewSubheading: 'Standardization • Localization • Cutover Governance',
    overviewHeading: 'Strategic Multi-Entity SAP ERP Rollout',
    overviewLead: 'Balancing global ERP process harmonization with regional statutory compliance across expanding enterprise entities.',
    overviewBody: [
      'ZisanTech Solutions engineers enterprise SAP Rollout frameworks designed to clone corporate template blueprints across newly acquired plants, sales depots, and regional business units. We ensure your master data governance, corporate financial charts, and supply chain controls remain unified.',
      'Our dedicated rollout teams navigate complex local statutory mandates—including regional tax structures, e-invoicing protocols, GST/e-way bills, and multi-currency reporting—without compromising the integrity of your central ERP core.',
      'Through disciplined wave-based cutover planning, automated data cleansing, and structured change enablement, we turn multi-site rollouts into predictable, low-risk business milestones.'
    ],
    pillarsHeading: 'Strategic Rollout Pillars & Governance',
    pillars: [
      {
        tag: 'Template Harmonization',
        title: 'Global Core Template Replication',
        desc: 'Replicate vetted corporate ERP blueprints across regional plants while strictly safeguarding core data governance.'
      },
      {
        tag: 'Statutory Localization',
        title: 'Country & State Tax Compliance',
        desc: 'Zero-gap compliance integration for GST e-invoicing, digital e-way bills, statutory reporting, and jurisdictional tax regimes.'
      },
      {
        tag: 'Master Data Cleansing',
        title: 'Automated Migration Cockpits',
        desc: 'High-throughput data extraction, cleansing, and deduplication to ensure Day-1 transactional accuracy in new operating sites.'
      },
      {
        tag: 'Clean-Core Extensibility',
        title: 'Decoupled Cloud Extensions (BTP)',
        desc: 'Build plant-specific customizations as side-by-side extensions on SAP BTP, preserving standard ERP code across all entities.'
      },
      {
        tag: 'Intercompany Operations',
        title: 'Unified Supply Chain & Billing',
        desc: 'Streamline intercompany purchase orders, stock transfers, and automated reconciliation across multi-entity hierarchies.'
      },
      {
        tag: 'Cutover Runbooks',
        title: 'Dry-Run Benchmarks & Hyper-Care',
        desc: 'Rehearsed minute-by-minute cutover simulations and dedicated on-site hyper-care teams for immediate post-go-live stability.'
      }
    ],
    capabilitiesHeading: 'Rollout Capabilities & Implementation Scope',
    capabilities: [
      { name: 'Corporate Blueprint Harmonization & Scope Matrix', highlight: 'Global Baseline' },
      { name: 'Multi-Country Localization & Statutory Tax Integration', highlight: 'Statutory Compliant' },
      { name: 'Automated Master Data Extraction & Validation Protocol', highlight: 'Data Precision' },
      { name: 'Intercompany Stock Transport Order (STO) & Cross-Billing', highlight: 'Supply Chain' },
      { name: 'Plant Maintenance & Shop-Floor System Alignment', highlight: 'Manufacturing' },
      { name: 'Integration with Weighbridges, RFID & Peripheral Systems', highlight: 'Peripheral Sync' },
      { name: 'Role-Based Authorization & Regional Audit Compliance', highlight: 'Security Matrix' },
      { name: 'Post Go-Live Hyper-Care & Knowledge Transfer Workshops', highlight: 'Day-1 Stability' }
    ],
    deliverables: [
      'Site-Specific Fit-Gap Analysis & Localization Blueprint',
      'Data Cleansing & Transformation Verification Log',
      'User Acceptance Testing (UAT) Sign-Off Protocols',
      'Rehearsed Cutover Blackout Schedule & Stabilization Runbook'
    ],
    methodologyHeading: 'SAP Rollout Delivery Methodology',
    methodologySubheading: 'A disciplined 6-stage lifecycle engineered for zero production downtime across multi-plant deployments.',
    methodology: [
      {
        num: '01',
        title: 'Site Discovery & Readiness Audit',
        tags: 'Landscape Scoping • Local Statutory Audit',
        desc: 'Assess target entity readiness, legacy data structures, peripheral hardware, and mandatory local fiscal requirements.'
      },
      {
        num: '02',
        title: 'Template Harmonization & Gap Design',
        tags: 'Core Alignment • Delta Localization Blueprint',
        desc: 'Map corporate master templates against site operations, isolating genuine statutory deltas from redundant local habits.'
      },
      {
        num: '03',
        title: 'System Build & BTP Integration',
        tags: 'Configuration • Peripheral APIs • Role Setup',
        desc: 'Configure regional company codes, plants, valuation areas, and side-by-side cloud extensions on SAP BTP.'
      },
      {
        num: '04',
        title: 'Data Extraction & Cleansing Wave',
        tags: 'Automated Scrubbing • Trial Migration',
        desc: 'Execute data migration waves using automated tools, validating historical open orders, vendor ledgers, and inventory balances.'
      },
      {
        num: '05',
        title: 'Rehearsed Cutover Simulation',
        tags: 'Minute-by-Minute Runbook • Go-Live Execution',
        desc: 'Conduct end-to-end dry-run cutovers during blackout windows, verifying balance handshakes before official production release.'
      },
      {
        num: '06',
        title: 'On-Site Hyper-Care & Handover',
        tags: '24/7 Floor Support • Operational SLA Transition',
        desc: 'Embed senior consultants on-site during initial fiscal periods, transitioning operations into long-term SLA governance.'
      }
    ],
    whyPartnerTitle: 'Why Choose ZisanTech for SAP Rollout?',
    whyPartnerSubtitle: 'Decades of multi-plant implementation expertise ensuring seamless enterprise scalability.',
    whyCards: [
      { title: 'Multi-Plant Deployment Record', desc: 'Proven success delivering complex rollouts across diverse manufacturing, chemical, and retail landscapes.' },
      { title: 'Statutory Tax Automation', desc: 'Pre-built localization connectors for rapid GST e-invoicing, e-way bills, and jurisdictional compliance.' },
      { title: 'Zero Downtime Architecture', desc: 'Disciplined cutover methodologies designed to maintain normal corporate billing throughout deployments.' },
      { title: 'Decoupled Clean-Core Model', desc: 'Protect your core SAP system from fragmented site modifications through modern SAP BTP extensibility.' }
    ]
  },

  // 2. SAP AMS
  'sap-ams': {
    id: 2,
    slug: 'sap-ams',
    category: 'SAP Services',
    title: 'SAP AMS (Application Management Services)',
    heroHeadline: '24/7 SLA-Governed Operational Continuity',
    heroHighlight: 'Through Expert SAP AMS Support',
    heroTagline: 'Protect your mission-critical ERP environment with proactive health monitoring, rapid ticket resolution, and continuous performance tuning.',
    heroImage: '/exact_women.jpg',
    secondaryImage: '/sap_service_support_hd.jpg',
    sliderSlides: [
      {
        title: 'L1–L3 SLA-Governed Support Matrix',
        subtitle: 'Round-the-Clock Functional & Technical Incident Resolution',
        image: '/exact_women.jpg',
        badge: 'Incident Management',
        metric: '99.9%',
        metricLabel: 'SLA Adherence Rate',
        points: [
          'Guaranteed 15-minute response for critical P1 business-halting tickets',
          'Cross-module expertise spanning FICO, MM, SD, PP, PM, and BASIS',
          'Structured escalation paths backed by dedicated Service Delivery Leads'
        ]
      },
      {
        title: 'Proactive System Diagnostics',
        subtitle: 'Background Job Health, Spool Queue Tuning & Dump Analysis',
        image: '/sap_service_support_hd.jpg',
        badge: 'System Health',
        metric: '-40%',
        metricLabel: 'Reduction in Recurring Issues',
        points: [
          'Automated background batch monitoring preventing nocturnal batch stalls',
          'Database index maintenance and memory dump root-cause remediation',
          'Periodic security audits and role authorization compliance reviews'
        ]
      },
      {
        title: 'Financial Period-End Standby Desks',
        subtitle: 'Dedicated Hyper-Care for Month-End, Quarter-End & Fiscal Closing',
        image: '/hero_sap_consulting_2.jpg',
        badge: 'Period-End Hyper-Care',
        metric: 'Zero Delay',
        metricLabel: 'In Financial Ledger Closings',
        points: [
          'Standby accounting support desks for depreciation runs and balance sheet consolidation',
          'Rapid resolution of inventory valuation and ledger reconciliation differences',
          'Immediate post-closing audits to ensure 100% audit-ready ledgers'
        ]
      }
    ],
    overviewSubheading: 'Application Support • Maintenance • Continuous Optimization',
    overviewHeading: 'Dependable L1–L3 SLA Governance Engineered for Zero Unplanned Downtime',
    overviewLead: 'Enterprise ERP landscapes cannot afford transactional bottlenecks, background job failures, or delayed period-end financial closings.',
    overviewBody: [
      'ZisanTech Solutions delivers enterprise-grade SAP Application Management Services (AMS) designed to protect operational stability, elevate user productivity, and optimize system total cost of ownership.',
      'Our expert functional and technical consultants provide round-the-clock support across all core modules—including FICO, MM, SD, PP, PM, and QM—operating under strict, transparent Service Level Agreements.',
      'Beyond routine ticket clearing, we focus on continuous preventive maintenance: analyzing recurring incident dumps, fine-tuning background processing, and implementing minor functional enhancements that drive ongoing business efficiency.'
    ],
    pillarsHeading: 'Core Pillars of Enterprise SAP AMS',
    pillars: [
      {
        tag: 'Tiered Support Governance',
        title: 'Multi-Tier L1–L3 Incident Resolution',
        desc: 'Structured escalation hierarchies ensuring rapid user assistance, functional bug fixes, and deep ABAP debugging.'
      },
      {
        tag: 'Proactive System Monitoring',
        title: 'Background Jobs & Dump Diagnostics',
        desc: 'Continuous surveillance of background scheduling, RFC connections, spool queues, and database health metrics.'
      },
      {
        tag: 'Period-End Hyper-Care',
        title: 'Financial & Fiscal Year-End Support',
        desc: 'Dedicated on-demand support desks during monthly, quarterly, and annual balance sheet closing cycles.'
      },
      {
        tag: 'Preventive Code Tuning',
        title: 'Performance & ABAP Query Optimization',
        desc: 'Identify and refactor long-running custom Z-reports, table lock bottlenecks, and memory-intensive SQL queries.'
      },
      {
        tag: 'Continuous Minor Releases',
        title: 'Change Request & Enhancement Cycles',
        desc: 'Agile turnaround for configuration adjustments, new statutory challans, tax changes, and operational feature updates.'
      },
      {
        tag: 'Transparency & SLA Metrics',
        title: 'Monthly Incident Trends & KPI Audits',
        desc: 'Comprehensive reporting on SLA compliance rates, root-cause analyses, and proactive recommendations.'
      }
    ],
    capabilitiesHeading: 'Enterprise AMS Scope & Service Modules',
    capabilities: [
      { name: '24/7 Helpdesk & Multi-Channel Incident Logging', highlight: 'Always-On' },
      { name: 'Cross-Module Functional Support (FICO, MM, SD, PP, PM)', highlight: 'Full Coverage' },
      { name: 'Technical ABAP, Interface, IDoc & RFC Troubleshooting', highlight: 'Technical Core' },
      { name: 'SAP Security, User Authorizations & Audit Compliance', highlight: 'Access Control' },
      { name: 'Statutory Patch Regression Testing & Application', highlight: 'Compliance' },
      { name: 'Database Growth Audits & Archiving Strategies', highlight: 'Optimization' },
      { name: 'Fiscal Month-End & Year-End Closing Standby Desks', highlight: 'Closing Protection' },
      { name: 'Dedicated Service Delivery Manager & Weekly Reviews', highlight: 'Accountability' }
    ],
    deliverables: [
      'Tailored SLA Agreement with Guaranteed Response & Resolution Times',
      'Real-Time Incident Tracking Dashboard Access',
      'Monthly Service Review Reports & Root Cause Action Plans',
      'Preventive Maintenance & Archiving Schedule Documentation'
    ],
    methodologyHeading: 'AMS Service Delivery Framework',
    methodologySubheading: 'A continuous ITIL-aligned governance cycle ensuring predictable service quality and rapid problem eradication.',
    methodology: [
      {
        num: '01',
        title: 'Knowledge Transition & Shadowing',
        tags: 'Landscape Discovery • SOP Documentation',
        desc: 'Comprehensive shadowing of current operations, custom programs, third-party interfaces, and unresolved ticket backlogs.'
      },
      {
        num: '02',
        title: 'Primary Support Handover',
        tags: 'Joint SLA Run • Baseline Stabilization',
        desc: 'ZisanTech assumes primary ticket ownership alongside client leads, benchmarking initial response and resolution tempos.'
      },
      {
        num: '03',
        title: 'SLA-Governed Steady State',
        tags: '24/7 Coverage • Incident Routing',
        desc: 'Full operational takeover under contractual SLAs, routing tickets swiftly through functional, technical, and BASIS queues.'
      },
      {
        num: '04',
        title: 'Root-Cause & Defect Eradication',
        tags: 'Trend Analysis • Problem Management',
        desc: 'Cluster recurring user issues into structured problem tickets, refactoring underlying configuration or code to prevent repeats.'
      },
      {
        num: '05',
        title: 'Change Release Management',
        tags: 'Minor Enhancements • Testing Transport',
        desc: 'Deploy minor business enhancements through structured sandbox, quality staging, and production transport verification.'
      },
      {
        num: '06',
        title: 'Strategic Architecture Advisory',
        tags: 'Quarterly Reviews • Clean-Core Evolution',
        desc: 'Regular executive roadmaps evaluating system health, cloud migration readiness, and total cost of ownership reductions.'
      }
    ],
    whyPartnerTitle: 'Why Partner With ZisanTech for SAP AMS?',
    whyPartnerSubtitle: 'Guaranteed service reliability and reduced total cost of ownership for your enterprise ERP.',
    whyCards: [
      { title: 'Strict Contractual SLAs', desc: 'Up to 99.9% uptime compliance with transparent MTTR (Mean Time to Resolution) tracking.' },
      { title: 'Flexible Engagement Models', desc: 'Shared-services, dedicated team, or hybrid ticket-bucket models aligned to your exact operating budget.' },
      { title: 'Proactive Problem Elimination', desc: 'Focus on root-cause eradication to continuously decrease monthly ticket volume over time.' },
      { title: 'Direct Access to Senior Leads', desc: 'Experienced solution architects oversee complex functional challenges without intermediary delays.' }
    ]
  },

  // 3. RISE with SAP
  'rise-with-sap': {
    id: 3,
    slug: 'rise-with-sap',
    category: 'SAP Services',
    title: 'RISE with SAP',
    heroHeadline: 'Business Transformation as a Service',
    heroHighlight: 'Accelerated with RISE with SAP',
    heroTagline: 'Unify cloud ERP software, industry best practices, process intelligence, and hyperscaler infrastructure into one agile transformation journey.',
    heroImage: '/zisantech_collaborative_consulting.jpg',
    secondaryImage: '/exact_sap_consulting_hd.jpg',
    sliderSlides: [
      {
        title: 'Business Process Intelligence with Signavio',
        subtitle: 'Process Mining to Uncover Hidden Bottlenecks and Modernization Gains',
        image: '/zisantech_collaborative_consulting.jpg',
        badge: 'Process Intelligence',
        metric: '35%',
        metricLabel: 'Faster Order-to-Cash Velocity',
        points: [
          'Real-time process mining directly on historical transactional data',
          'Benchmark company processes against proven SAP Best Practices',
          'Targeted recommendations for operational simplification before migration'
        ]
      },
      {
        title: 'Clean-Core Cloud Architecture',
        subtitle: 'Decouple Custom Extensions onto SAP Business Technology Platform',
        image: '/exact_sap_consulting_hd.jpg',
        badge: 'Clean-Core Model',
        metric: '0 Rework',
        metricLabel: 'On Quarterly Cloud Upgrades',
        points: [
          'Eliminate technical debt and brittle custom Z-modifications in the ERP core',
          'Shift business-specific custom apps to side-by-side runtimes on SAP BTP',
          'Maintain an agile, perpetually upgradable cloud ERP foundation'
        ]
      },
      {
        title: 'Managed Hyperscaler Infrastructure',
        subtitle: 'Single-SLA Cloud Hosting Across AWS, Microsoft Azure & Google Cloud',
        image: '/hero_sap_consulting_3.jpg',
        badge: 'Cloud Infrastructure',
        metric: '99.95%',
        metricLabel: 'High-Availability Cloud SLA',
        points: [
          'High-availability geo-redundancy and automated disaster recovery failover',
          'Consolidated contract covering cloud infrastructure, licenses, and technical BASIS',
          'Lower total cost of ownership compared to legacy on-premise hardware refreshes'
        ]
      }
    ],
    overviewSubheading: 'Cloud Transformation • Clean-Core ERP • Outcome-Driven Modernization',
    overviewHeading: 'Modernize Your Legacy Landscape into an Agile, Cloud-Native Enterprise',
    overviewLead: 'RISE with SAP is not just a technical hosting migration; it is a holistic business reimagination that replaces legacy customization burdens with continuous innovation.',
    overviewBody: [
      'ZisanTech Solutions serves as your trusted advisory and implementation partner on the journey to SAP S/4HANA Cloud via RISE with SAP. We structure, de-risk, and execute your transition from on-premise ECC or legacy ERP systems.',
      'Our senior cloud architects leverage SAP Signavio for process mining and gap analysis, identifying real operational bottlenecks before code is ever touched. We guide organizations toward a sustainable "clean-core" strategy, decoupling custom extensions onto the SAP Business Technology Platform.',
      'With unified contract governance covering cloud software, underlying infrastructure (AWS, Azure, GCP), and technical managed services, we guarantee faster time-to-value and predictable total cost of ownership.'
    ],
    pillarsHeading: 'The Strategic Tenets of RISE with SAP',
    pillars: [
      {
        tag: 'Process Mining',
        title: 'SAP Signavio Process Intelligence',
        desc: 'Mine live transactional records to uncover operational bottlenecks, execution delays, and immediate automation targets.'
      },
      {
        tag: 'Clean-Core Architecture',
        title: 'Decoupled Cloud Extensibility',
        desc: 'Preserve standard ERP core integrity by shifting unique business custom logic to SAP BTP side-by-side runtimes.'
      },
      {
        tag: 'Hyperscaler Flexibility',
        title: 'Managed Cloud Infrastructure',
        desc: 'Deploy S/4HANA Cloud seamlessly across world-class infrastructure providers including AWS, Microsoft Azure, or GCP.'
      },
      {
        tag: 'Continuous Innovation',
        title: 'Frictionless Version Upgrades',
        desc: 'Eliminate multi-year disruptive upgrade projects with regular, automated quarterly cloud feature releases.'
      },
      {
        tag: 'Unified SLA Ownership',
        title: 'Single-Contract Simplicity',
        desc: 'Consolidate software licensing, cloud hosting, technical BASIS, and disaster recovery under one contractual SLA.'
      },
      {
        tag: 'Business Network Access',
        title: 'Interconnected Trading Partners',
        desc: 'Direct integration with SAP Business Network for digital procurement, logistics visibility, and asset collaboration.'
      }
    ],
    capabilitiesHeading: 'RISE with SAP Enablement Capabilities',
    capabilities: [
      { name: 'Cloud Readiness Assessment & TCO Modernization Blueprint', highlight: 'Readiness Audit' },
      { name: 'SAP Signavio Business Process Mining & Simulation', highlight: 'Process Mining' },
      { name: 'Custom Code Impact Analysis & Clean-Core Migration', highlight: 'Clean-Core' },
      { name: 'S/4HANA Cloud (Private & Public Edition) Deployment', highlight: 'Cloud ERP' },
      { name: 'SAP Business Technology Platform (BTP) Extension Build', highlight: 'BTP Extensibility' },
      { name: 'Automated Migration Wave Execution with Minimal Downtime', highlight: 'Fast Cutover' },
      { name: 'Enterprise Identity & Role-Based Security Hardening', highlight: 'Cloud Security' },
      { name: 'Continuous Post-Migration Advisory & Feature Enablement', highlight: 'Sustained Value' }
    ],
    deliverables: [
      'RISE with SAP Transformation Roadmap & TCO Comparison',
      'Signavio Process Benchmark & Improvement Blueprint',
      'Custom Code Adaptation Matrix & Simplification Report',
      'Zero-Downtime Migration Execution Runbook & Cutover Protocol'
    ],
    methodologyHeading: 'RISE with SAP Transformation Journey',
    methodologySubheading: 'A disciplined, cloud-native path designed to accelerate time-to-value while de-risking enterprise migration.',
    methodology: [
      {
        num: '01',
        title: 'Value Discovery & Landscape Assessment',
        tags: 'TCO Analysis • Cloud Readiness Matrix',
        desc: 'Audit existing ECC systems, custom development volumes, and hardware lifecycles to design the optimal cloud edition.'
      },
      {
        num: '02',
        title: 'Process Mining with SAP Signavio',
        tags: 'Bottleneck Detection • Best Practice Mapping',
        desc: 'Analyze actual transactional workflows against SAP Best Practice benchmarks to eliminate non-standard process variances.'
      },
      {
        num: '03',
        title: 'Clean-Core Refactoring Blueprint',
        tags: 'Custom Code Remediations • BTP Target Topology',
        desc: 'Categorize legacy custom programs, converting valid custom requirements into decoupled cloud extensions on SAP BTP.'
      },
      {
        num: '04',
        title: 'Cloud Infrastructure & Sandbox Dry-Runs',
        tags: 'Hyperscaler Setup • Trial Conversion',
        desc: 'Provision target cloud environments and conduct iterative migration test runs to validate data integrity.'
      },
      {
        num: '05',
        title: 'Near-Zero Downtime Cutover',
        tags: 'Final Data Sync • Production Release',
        desc: 'Execute structured cutovers during designated maintenance windows, switching users smoothly to the S/4HANA Cloud environment.'
      },
      {
        num: '06',
        title: 'Continuous Value Enablement',
        tags: 'Quarterly Release Advisory • Feature Adoption',
        desc: 'Guide your internal teams through periodic cloud releases, turning new SAP AI and analytical capabilities into business gains.'
      }
    ],
    whyPartnerTitle: 'Why Partner with ZisanTech for RISE with SAP?',
    whyPartnerSubtitle: 'Strategic vision backed by enterprise engineering across enterprise cloud migrations.',
    whyCards: [
      { title: 'Clean-Core Delivery Methodology', desc: 'Protect future flexibility by strictly preventing technical debt from infiltrating your new cloud ERP.' },
      { title: 'Proven Process Mining Expertise', desc: 'Direct experience translating SAP Signavio insights into tangible reduction in order-to-cash cycle times.' },
      { title: 'Multi-Cloud Architecture Mastery', desc: 'Deep technical proficiency configuring enterprise SAP landscapes across AWS, Azure, and GCP.' },
      { title: 'End-to-End Accountability', desc: 'Single-source partner managing advisory, technical conversion, integration, and ongoing hyper-care.' }
    ]
  },

  // 4. SAP Migration
  'sap-migration': {
    id: 4,
    slug: 'sap-migration',
    category: 'SAP Services',
    title: 'SAP Migration',
    heroHeadline: 'De-Risked Enterprise Transition',
    heroHighlight: 'Through Disciplined SAP S/4HANA Migration',
    heroTagline: 'Seamlessly migrate legacy SAP ECC environments to high-performance S/4HANA via Brownfield, Greenfield, or Selective Data Transition pathways.',
    heroImage: '/hero_sap_consulting_1.jpg',
    secondaryImage: '/hero_sap_consulting_2.jpg',
    sliderSlides: [
      {
        title: 'Custom Code Remediation for S/4HANA',
        subtitle: 'Automated ABAP Refactoring Aligned to Simplification Items',
        image: '/hero_sap_consulting_1.jpg',
        badge: 'Code Adaptation',
        metric: '100%',
        metricLabel: 'Simplification Compatibility',
        points: [
          'Automated scanning of custom Z-programs against the S/4HANA dictionary',
          'Elimination of obsolete database calls and performance bottleneck queries',
          'Pre-conversion verification of all third-party add-ons and interfaces'
        ]
      },
      {
        title: 'Financial Ledger Consolidation (ACDOCA)',
        subtitle: 'Universal Journal Restructuring for Instant Profitability Visibility',
        image: '/hero_sap_consulting_2.jpg',
        badge: 'Universal Journal',
        metric: 'Zero Loss',
        metricLabel: 'Financial Reconciliation Record',
        points: [
          'Harmonization of General Ledger (FI-GL), Asset Accounting (FI-AA), and Controlling (CO)',
          'Single source of financial truth eliminating painful period-end reconciliation runs',
          'Multi-currency and parallel ledger enablement for global consolidated reporting'
        ]
      },
      {
        title: 'Near-Zero Downtime (NZDT) Execution',
        subtitle: 'Production Cutover Rehearsals Squeezed into a Single Weekend',
        image: '/hero_sap_consulting_3.jpg',
        badge: 'Near-Zero Downtime',
        metric: '< 36 Hrs',
        metricLabel: 'Total Weekend Production Cutover',
        points: [
          'Continuous real-time delta replication prior to final blackout initiation',
          'Customer-Vendor Integration (CVI) synchronization into unified Business Partners',
          'Structured CFO sign-off checkpoints before production system handshakes'
        ]
      }
    ],
    overviewSubheading: 'System Conversion • Greenfield • Selective Data Transition',
    overviewHeading: 'Modernize Transactional Systems with Near-Zero Production Downtime',
    overviewLead: 'Migrating to SAP S/4HANA is a mission-critical infrastructure transformation that demands flawless custom code adaptation, financial ledger restructuring, and data consistency.',
    overviewBody: [
      'ZisanTech Solutions delivers comprehensive SAP S/4HANA migration services engineered to de-risk corporate transitions, safeguard historical records, and unlock the speed of in-memory database computing.',
      'Whether your corporate roadmap calls for a Brownfield system conversion (preserving existing configuration and transactional history), a fresh Greenfield deployment (re-architecting on industry best practices), or a Selective Data Transition, our architects guide every phase.',
      'We utilize automated code remediation toolsets, simplification item checks, and rigorous rehearsal cutovers to eliminate technical debt and ensure your business operations remain uninterrupted.'
    ],
    pillarsHeading: 'Cornerstones of a Risk-Free SAP Migration',
    pillars: [
      {
        tag: 'Pathway Selection',
        title: 'Brownfield vs Greenfield vs Selective',
        desc: 'Evaluate system age, custom code volume, and data quality to choose the most cost-effective migration pathway.'
      },
      {
        tag: 'Code Remediation',
        title: 'Automated Custom Code Adaptation',
        desc: 'Scan, refactor, or retire legacy ABAP programs, ensuring full compatibility with S/4HANA Simplification Items.'
      },
      {
        tag: 'Financial Consolidation',
        title: 'Universal Journal (ACDOCA) Restructuring',
        desc: 'Harmonize general ledgers, asset accounting, and controlling into the unified Universal Journal architecture.'
      },
      {
        tag: 'Business Partner Architecture',
        title: 'Customer-Vendor Integration (CVI)',
        desc: 'Cleanse and synchronize legacy customer and vendor databases into unified SAP Business Partner master records.'
      },
      {
        tag: 'Minimal Downtime',
        title: 'Near-Zero Downtime Technology (NZDT)',
        desc: 'Utilize advanced replication tools and blackout simulations to condense cutover windows into a standard weekend.'
      },
      {
        tag: 'Data Archiving',
        title: 'Historical Data Volume Management',
        desc: 'Archive obsolete transactional data prior to migration to shrink database footprint and reduce in-memory hardware costs.'
      }
    ],
    capabilitiesHeading: 'Comprehensive Migration Capabilities',
    capabilities: [
      { name: 'S/4HANA Readiness Assessment & Simplification Audit', highlight: 'Readiness Audit' },
      { name: 'Customer-Vendor Integration (CVI) Cleansing & Sync', highlight: 'CVI Harmonization' },
      { name: 'Universal Journal Financial Ledger Consolidation', highlight: 'ACDOCA Restructuring' },
      { name: 'Automated ABAP Custom Code Remediation for S/4HANA', highlight: 'Code Remediation' },
      { name: 'Selective Data Transition & Historical Archiving', highlight: 'Selective Data' },
      { name: 'Near-Zero Downtime (NZDT) Rehearsed Cutover Execution', highlight: 'Minimal Downtime' },
      { name: 'Comprehensive Functional & Integration Regression Testing', highlight: 'Zero Defect Testing' },
      { name: 'Post-Migration Stabilization & Hyper-Care Governance', highlight: 'Handover SLA' }
    ],
    deliverables: [
      'Comprehensive S/4HANA Migration Blueprint & Pathway Report',
      'Custom Code Adaptation Inventory & Simplification Remediation Log',
      'Rehearsed Cutover Dry-Run Timetable & Performance Benchmark',
      'Financial Reconciliation & Post Go-Live Stabilization Verification'
    ],
    methodologyHeading: 'Structured SAP Migration Lifecycle',
    methodologySubheading: 'A disciplined 6-stage roadmap ensuring data integrity, minimal downtime, and immediate operational adoption.',
    methodology: [
      {
        num: '01',
        title: 'Readiness Check & Discovery',
        tags: 'Simplification Check • Add-On Compatibility',
        desc: 'Execute SAP Readiness Checks, evaluate third-party add-ons, and audit custom code repositories.'
      },
      {
        num: '02',
        title: 'Pre-Transition Data Preparation',
        tags: 'CVI Synchronization • Data Archiving',
        desc: 'Synchronize customer-vendor records into Business Partners and archive inactive historical records to reduce database size.'
      },
      {
        num: '03',
        title: 'Custom Code Adaptation Wave',
        tags: 'Automated Remediation • ABAP Optimization',
        desc: 'Adapt custom ABAP queries to the S/4HANA database schema, eliminating obsolete database access statements.'
      },
      {
        num: '04',
        title: 'Sandbox Conversion & Dry-Runs',
        tags: 'Trial Cutover • Runtime Benchmarking',
        desc: 'Convert a live copy of production in an isolated sandbox, timing every script and validating financial ledger reconciliation.'
      },
      {
        num: '05',
        title: 'Production Cutover & Go-Live',
        tags: 'Weekend Execution • ACDOCA Generation',
        desc: 'Execute the tested cutover runbook during a scheduled maintenance window, migrating core ledgers into the Universal Journal.'
      },
      {
        num: '06',
        title: 'Financial Sign-Off & Hyper-Care',
        tags: 'Ledger Reconciliation • 24/7 Floor Support',
        desc: 'Validate financial balance sheets with CFO teams and provide immediate hyper-care to ensure smooth business operation.'
      }
    ],
    whyPartnerTitle: 'Why Choose ZisanTech for SAP Migration?',
    whyPartnerSubtitle: 'Trusted execution that eliminates technical risk and preserves business continuity.',
    whyCards: [
      { title: 'Proven Technical Conversion Track Record', desc: 'Seamlessly converted complex manufacturing and supply chain ECC systems to S/4HANA on schedule.' },
      { title: 'Financial Reconciliation Precision', desc: 'Flawless balance sheet and general ledger reconciliations into ACDOCA with zero historical loss.' },
      { title: 'Minimal Downtime Guarantee', desc: 'Optimized cutover strategies that fit large enterprise conversions within standard weekend maintenance windows.' },
      { title: 'Clean-Core Futureproofing', desc: 'Refactor custom code to prevent legacy technical debt from migrating into your modernized ERP core.' }
    ]
  },

  // 5. SAP Integration & BTP
  'sap-integration-btp': {
    id: 5,
    slug: 'sap-integration-btp',
    category: 'SAP Services',
    title: 'SAP Integration & BTP',
    heroHeadline: 'Connected Enterprise Architecture',
    heroHighlight: 'Through SAP Integration Suite & BTP',
    heroTagline: 'Seamlessly bridge your SAP core with third-party cloud platforms, SaaS solutions, logistics APIs, and bespoke side-by-side extensions.',
    heroImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: '/photo-1504384308090-c894fdcc538d.jpg',
    sliderSlides: [
      {
        title: 'SAP Integration Suite (CPI) Flows',
        subtitle: 'Enterprise Orchestration Across Cloud SaaS and On-Premise Endpoints',
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80',
        badge: 'Integration Suite',
        metric: '100M+',
        metricLabel: 'Monthly API Calls Processed',
        points: [
          'Pre-packaged and custom integration flows connecting SAP with CRM & eCommerce',
          'Automated data transformation supporting REST, SOAP, OData, and IDoc formats',
          'High-throughput message queues with zero data drop resilience'
        ]
      },
      {
        title: 'Decoupled Side-by-Side Cloud Apps',
        subtitle: 'Build Custom Applications on SAP BTP Preserving Standard ERP Code',
        image: '/photo-1504384308090-c894fdcc538d.jpg',
        badge: 'BTP Extensibility',
        metric: 'Zero Core Mods',
        metricLabel: 'Permanent Upgrade Readiness',
        points: [
          'Develop bespoke enterprise apps using SAP Cloud Application Programming (CAP)',
          'Modern responsive UI with SAP Fiori / UI5 without touching backend core tables',
          'Automated event triggers using SAP Event Mesh for real-time notifications'
        ]
      },
      {
        title: 'Direct Banking & Statutory Connectors',
        subtitle: 'Host-to-Host Bank Rails, Real-Time Payouts & Automated Tax Portals',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
        badge: 'Banking & Statutory',
        metric: 'Real-Time',
        metricLabel: 'Bank Ledger Reconciliation',
        points: [
          'Direct host-to-host bank integration for instant vendor payment disbursements',
          'Automated electronic bank statement (EBS) scraping and reconciliation',
          'Direct government portal handshake for statutory GST and e-way bill generation'
        ]
      }
    ],
    overviewSubheading: 'Integration Suite • Cloud Integration (CPI) • Side-by-Side Extensions',
    overviewHeading: 'Unify Fragmented Systems with Scalable, Clean-Core API Connectivity',
    overviewLead: 'Modern enterprises depend on dozens of specialized platforms. Operating in data silos slows operations and introduces costly manual errors.',
    overviewBody: [
      'ZisanTech Solutions architect enterprise connectivity pipelines utilizing the SAP Business Technology Platform (BTP) and SAP Integration Suite. We eliminate operational data silos and build resilient real-time interfaces without modifying standard SAP code.',
      'Our expert integration engineers build high-throughput connections across cloud and on-premise endpoints—including Salesforce, HubSpot, Shopify, banking payment rails, logistics providers, and statutory compliance portals.',
      'Leveraging SAP Cloud Integration (CPI), Event Mesh, API Management, and the Cloud Application Programming (CAP) model, we keep your enterprise core clean and future-ready.'
    ],
    pillarsHeading: 'Pillars of Enterprise Integration & BTP',
    pillars: [
      {
        tag: 'Integration Suite Mastery',
        title: 'SAP Cloud Integration (CPI)',
        desc: 'Build secure, pre-packaged, and bespoke integration flows connecting SAP with cloud SaaS and legacy on-premise systems.'
      },
      {
        tag: 'Decoupled Cloud Apps',
        title: 'Side-by-Side Extensions (CAP/RAP)',
        desc: 'Develop bespoke business applications on SAP BTP using modern Node.js or ABAP Cloud without bloating the core ERP.'
      },
      {
        tag: 'Direct Banking Rails',
        title: 'Host-to-Host Treasury Connections',
        desc: 'Automated bank statement reconciliation, vendor payout pipelines, and instant payment confirmations with major banks.'
      },
      {
        tag: 'Real-Time Commerce Sync',
        title: 'E-Commerce & CRM Orchestration',
        desc: 'Bidirectional synchronization for sales orders, live stock availability, customer profiles, and order fulfillment updates.'
      },
      {
        tag: 'Event-Driven Velocity',
        title: 'SAP Event Mesh & Asynchronous Queues',
        desc: 'Decouple high-volume transactional spikes using enterprise event brokers, ensuring zero message loss during peak demand.'
      },
      {
        tag: 'Security & Governance',
        title: 'API Management & OAuth Protocols',
        desc: 'Govern enterprise API access with rate limiting, encryption, digital certificate management, and granular audit trails.'
      }
    ],
    capabilitiesHeading: 'Enterprise BTP & Integration Capabilities',
    capabilities: [
      { name: 'SAP Cloud Integration (CPI) Flow Architecture & Build', highlight: 'CPI Pipeline' },
      { name: 'Legacy PO/PI to SAP Integration Suite Migration', highlight: 'Legacy Modernization' },
      { name: 'SAP BTP Custom App Development (CAP / RAP Framework)', highlight: 'Side-by-Side App' },
      { name: 'Host-to-Host Banking & Direct Payment Rail Connectivity', highlight: 'Banking Bridge' },
      { name: 'Omnichannel E-Commerce & CRM Data Synchronization', highlight: 'Commerce Sync' },
      { name: 'Statutory E-Invoice & E-Way Bill Auto-Connector Services', highlight: 'Statutory API' },
      { name: 'SAP Event Mesh Architecture for Real-Time Event Brokers', highlight: 'Event Mesh' },
      { name: 'Enterprise API Gateway, Threat Protection & Rate Limiting', highlight: 'API Security' }
    ],
    deliverables: [
      'Enterprise Interface Architecture Catalog & Mapping Documents',
      'Automated Monitoring & Error Exception Handling Framework',
      'API Gateway Security Configuration & Certificate Handshake Logs',
      'End-to-End Stress Testing & Throughput Verification Certificates'
    ],
    methodologyHeading: 'Structured Integration Lifecycle',
    methodologySubheading: 'A disciplined blueprint ensuring high throughput, zero data loss, and permanent core upgradability.',
    methodology: [
      {
        num: '01',
        title: 'Interface Landscape Mapping',
        tags: 'Endpoint Catalog • Protocol Audit',
        desc: 'Map all inbound and outbound data flows, data formats (JSON/XML/IDoc), frequencies, and security boundaries.'
      },
      {
        num: '02',
        title: 'Target Architecture & Security Design',
        tags: 'CPI Topology • OAuth Configuration',
        desc: 'Establish integration topologies on SAP BTP, configuring certificates, credential stores, and gateway endpoints.'
      },
      {
        num: '03',
        title: 'Pipeline Development & Schema Mapping',
        tags: 'iFlow Construction • Mapping Transformations',
        desc: 'Construct modular integration flows with automated schema mapping, data enrichment, and error-handling routines.'
      },
      {
        num: '04',
        title: 'Asynchronous Error Queue Setup',
        tags: 'Dead-Letter Queues • Automated Retry Rules',
        desc: 'Build resilient retry mechanisms and exception-handling dashboards to handle network drops and external downtime.'
      },
      {
        num: '05',
        title: 'End-to-End Load & Stress Testing',
        tags: 'High-Volume Concurrency • Data Verification',
        desc: 'Simulate peak transactional volumes across staging endpoints, verifying latency, memory thresholds, and data accuracy.'
      },
      {
        num: '06',
        title: 'Production Activation & Live Monitoring',
        tags: 'Cutover Handshake • 24/7 SLA Alarms',
        desc: 'Deploy live integration endpoints with automated telemetry alarms notifying support engineers of any queue delays.'
      }
    ],
    whyPartnerTitle: 'Why Choose ZisanTech for SAP Integration & BTP?',
    whyPartnerSubtitle: 'Preserve clean-core architecture while connecting your entire business ecosystem.',
    whyCards: [
      { title: 'Clean-Core Preservation', desc: 'Keep standard ERP code completely pristine by building custom capabilities exclusively on SAP BTP.' },
      { title: 'Zero Message Loss Architecture', desc: 'Resilient event-driven queues ensure transactional records are never dropped, even during partner outages.' },
      { title: 'Deep Multi-Platform Proficiency', desc: 'Expert integration specialists connecting SAP smoothly with Salesforce, Shopify, AWS, and enterprise banking.' },
      { title: 'Rapid Pre-Packaged Connectors', desc: 'Accelerate deployment schedules using our verified integration accelerators for statutory and bank feeds.' }
    ]
  },

  // 6. SAP Analytics
  'sap-analytics': {
    id: 6,
    slug: 'sap-analytics',
    category: 'SAP Services',
    title: 'SAP Analytics',
    heroHeadline: 'Real-Time Enterprise Intelligence',
    heroHighlight: 'Powered by SAP Analytics Cloud & Datasphere',
    heroTagline: 'Transform transactional complexity into predictive boardroom intelligence with interactive dashboards, semantic data layers, and automated forecasting.',
    heroImage: '/photo-1542744173-8e7e53415bb0.jpg',
    secondaryImage: '/exact_office_card2_hd.jpg',
    sliderSlides: [
      {
        title: 'Executive Cockpits in SAP Analytics Cloud',
        subtitle: 'Real-Time Visual Storytelling from Enterprise KPIs to Transactional Line Items',
        image: '/photo-1542744173-8e7e53415bb0.jpg',
        badge: 'Boardroom Cockpits',
        metric: '< 1 Sec',
        metricLabel: 'Query Execution on Live Ledgers',
        points: [
          'Pre-built executive stories covering consolidated EBITDA, revenue trends, and working capital',
          'Drill-down capabilities navigating from high-level corporate charts to sales invoice details',
          'Responsive C-suite tablets and mobile interfaces with secure biometric access'
        ]
      },
      {
        title: 'SAP Datasphere Business Data Fabric',
        subtitle: 'Harmonize Disparate Data Sources into One Unified Semantic Layer',
        image: '/exact_office_card2_hd.jpg',
        badge: 'Data Fabric',
        metric: 'Single Source',
        metricLabel: 'Of Corporate Truth',
        points: [
          'Bridge transactional ERP data with non-SAP databases and cloud data lakes',
          'Eliminate redundant data duplication while maintaining live virtual connections',
          'Strict row-level authorization governance protecting sensitive financial figures'
        ]
      },
      {
        title: 'Predictive Financial Modeling & Simulation',
        subtitle: 'Machine Learning Budgeting, Rolling Forecasts & Variance Simulations',
        image: '/hero_sap_consulting_1.jpg',
        badge: 'Predictive Planning',
        metric: '95%+',
        metricLabel: 'Forecast Accuracy Benchmark',
        points: [
          'Automated rolling financial forecasts factoring in historical seasonal cycles',
          'What-if scenario modeling for supply chain disruptions, currency shifts, and raw material inflation',
          'Integrated business planning synchronizing sales forecasts directly with production scheduling'
        ]
      }
    ],
    overviewSubheading: 'SAP Analytics Cloud (SAC) • Datasphere • CDS Views • Decision Cockpits',
    overviewHeading: 'Turn Raw ERP Transactions into Actionable Strategic Clarity',
    overviewLead: 'Operating on outdated spreadsheets or fragmented departmental reports blinds executive decision-makers to emerging risks and opportunities.',
    overviewBody: [
      'ZisanTech Solutions delivers modern enterprise analytics architectures powered by SAP Analytics Cloud (SAC), SAP Datasphere, and embedded S/4HANA Core Data Services (CDS) views.',
      'We unify transactional data from SAP and non-SAP sources into a coherent semantic business data fabric. Our analytics consultants design intuitive executive cockpits, predictive cash flow projections, and drill-down operational reporting.',
      'From real-time profitability tracking to automated financial planning, we empower business leaders with trusted, single-source-of-truth intelligence accessible on mobile and web.'
    ],
    pillarsHeading: 'Pillars of Modern Enterprise Analytics',
    pillars: [
      {
        tag: 'Executive Visualizations',
        title: 'SAP Analytics Cloud (SAC) Cockpits',
        desc: 'Interactive visual storytelling dashboards offering real-time drill-down from enterprise KPIs down to individual line items.'
      },
      {
        tag: 'Semantic Data Fabric',
        title: 'SAP Datasphere Harmonization',
        desc: 'Connect disparate cloud data lakes and on-premise warehouses into a unified business semantic layer without data duplication.'
      },
      {
        tag: 'Embedded Operational Reporting',
        title: 'S/4HANA Core Data Services (CDS)',
        desc: 'Sub-second operational reporting directly on live transactional data using embedded CDS views and analytical queries.'
      },
      {
        tag: 'Predictive Financial Modeling',
        title: 'Automated Budgeting & Variance Planning',
        desc: 'Machine learning-driven revenue forecasting, operational expense planning, and rolling scenario simulations.'
      },
      {
        tag: 'Self-Service Enablement',
        title: 'Governed Business Query Tools',
        desc: 'Empower departmental analysts to build ad-hoc reports safely within pre-governed security and calculation rules.'
      },
      {
        tag: 'Mobile Intelligence',
        title: 'Anywhere Executive Decision Support',
        desc: 'Responsive analytical cockpits designed specifically for C-suite tablets and smartphones with offline capability.'
      }
    ],
    capabilitiesHeading: 'Comprehensive SAP Analytics Capabilities',
    capabilities: [
      { name: 'SAP Analytics Cloud (SAC) Boardroom Dashboard Design', highlight: 'SAC Cockpits' },
      { name: 'SAP Datasphere Business Data Fabric Architecture', highlight: 'Data Fabric' },
      { name: 'Embedded S/4HANA Real-Time CDS View Modeling', highlight: 'Real-Time CDS' },
      { name: 'Financial Planning & Predictive Cash Flow Modeling', highlight: 'Predictive Planning' },
      { name: 'Supply Chain, Procurement & Inventory KPI Telemetry', highlight: 'Supply Chain KPIs' },
      { name: 'Automated Scheduled Report Distribution Pipelines', highlight: 'Automated Reports' },
      { name: 'Role-Based Row-Level Security & Governance Rules', highlight: 'Data Governance' },
      { name: 'Business Analyst Training & Self-Service Playbooks', highlight: 'User Enablement' }
    ],
    deliverables: [
      'Tailored Executive KPI Dashboard Suite with Mobile Optimization',
      'Semantic Data Dictionary & Calculation Governance Models',
      'Automated Distribution Schedules & Alert Notification Matrix',
      'Analyst Query Training Guide & Model Maintenance Runbook'
    ],
    methodologyHeading: 'Structured Analytics Delivery Lifecycle',
    methodologySubheading: 'From raw database tables to intuitive boardroom intelligence in a transparent 6-stage delivery cycle.',
    methodology: [
      {
        num: '01',
        title: 'KPI Definition & Stakeholder Discovery',
        tags: 'Executive Metrics • Reporting Audit',
        desc: 'Identify core commercial metrics across finance, manufacturing, procurement, and sales to define target cockpits.'
      },
      {
        num: '02',
        title: 'Data Architecture & Source Modeling',
        tags: 'CDS Views • Datasphere Connections',
        desc: 'Design high-performance CDS views on S/4HANA tables and connect external sources into SAP Datasphere.'
      },
      {
        num: '03',
        title: 'UX/UI Dashboard Wireframing',
        tags: 'Executive Cockpit Layout • Visual Hierarchy',
        desc: 'Prototype clean, intuitive layouts with logical visual hierarchies, ensuring key insights are visible in three seconds.'
      },
      {
        num: '04',
        title: 'SAC Model Development & Calculations',
        tags: 'Formula Modeling • Currency Conversion Rules',
        desc: 'Build analytical models in SAP Analytics Cloud, configuring automated exchange rates, variances, and time-series projections.'
      },
      {
        num: '05',
        title: 'Data Validation & User Acceptance',
        tags: 'Reconciliation • Cross-Verification with GL',
        desc: 'Reconcile analytical figures against underlying general ledgers to ensure 100% data trust across leadership.'
      },
      {
        num: '06',
        title: 'Deployment & Self-Service Training',
        tags: 'Role-Based Rollout • Analyst Workshops',
        desc: 'Deploy cockpits with row-level security permissions and deliver hands-on workshops for department query builders.'
      }
    ],
    whyPartnerTitle: 'Why Partner with ZisanTech for SAP Analytics?',
    whyPartnerSubtitle: 'Transform transactional data into your organization’s greatest strategic asset.',
    whyCards: [
      { title: 'Sub-Second Real-Time Querying', desc: 'Eliminate overnight batch jobs with live, in-memory analytical views running directly on S/4HANA.' },
      { title: 'Single Source of Executive Truth', desc: 'Unify conflicting department spreadsheets into one verified, auditable data layer.' },
      { title: 'Predictive Planning Expertise', desc: 'Leverage machine learning algorithms to forecast seasonal inventory demands and quarterly cash positions.' },
      { title: 'C-Suite Ready Interfaces', desc: 'Bespoke dashboards designed with executive-grade typography, responsive design, and intuitive drill-downs.' }
    ]
  },

  // 7. SAP AI & Automation
  'sap-ai-automation': {
    id: 7,
    slug: 'sap-ai-automation',
    category: 'SAP Services',
    title: 'SAP AI & Automation',
    heroHeadline: 'Autonomous Enterprise Operations',
    heroHighlight: 'Powered by SAP Joule & Intelligent AI',
    heroTagline: 'Infuse artificial intelligence, machine learning, and robotic process automation into core ERP transactions to eliminate repetitive human overhead.',
    heroImage: '/sap_service_card_einvoice_fullhd.jpg',
    secondaryImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    sliderSlides: [
      {
        title: 'Intelligent Document Processing (IDP)',
        subtitle: 'AI-Powered Supplier Invoice Ingestion with 3-Way PO Matching',
        image: '/sap_service_card_einvoice_fullhd.jpg',
        badge: 'Automated Accounting',
        metric: '80%',
        metricLabel: 'Manual Effort Reduction',
        points: [
          'High-accuracy optical recognition extracting line items, taxes, and vendor details',
          'Automated three-way matching against purchase orders and goods receipt notes (GRN)',
          'Automated routing of exceptions to approval queues with audit-logged confidence scores'
        ]
      },
      {
        title: 'Automated GST & E-Way Bill Compliance',
        subtitle: 'Instantaneous Government Portal Handshake for Every Outbound Shipment',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
        badge: 'Statutory Auto',
        metric: 'Instant',
        metricLabel: 'IRN & QR Code Generation',
        points: [
          'Direct API handshake with the GST Invoice Registration Portal (IRP)',
          'Immediate generation of digitally signed QR codes embedded on invoice prints',
          'Automated generation and cancellation of digital e-way bills with zero vehicle detention'
        ]
      },
      {
        title: 'SAP Joule Generative AI Assistant',
        subtitle: 'Context-Aware AI Copilot Built Directly into Core Enterprise Workflows',
        image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
        badge: 'Joule Copilot',
        metric: '24/7',
        metricLabel: 'Autonomous Business Insights',
        points: [
          'Natural language querying for sales order statuses, stock reserves, and supplier histories',
          'AI-guided code refactoring and extension development in SAP Build environment',
          'Strict corporate security governance ensuring proprietary corporate data remains private'
        ]
      }
    ],
    overviewSubheading: 'Intelligent ERP • Document Processing • SAP Joule • Statutory Automation',
    overviewHeading: 'Harness Artificial Intelligence Directly Alongside Your Enterprise Data',
    overviewLead: 'Manual invoice data entry, repetitive reconciliation checks, and delayed statutory filings hold enterprise teams back from strategic growth.',
    overviewBody: [
      'ZisanTech Solutions bridges modern artificial intelligence and machine learning with core transactional enterprise ERP systems. We turn routine business operations into autonomous, self-learning workflows.',
      'Our automation engineers deploy Intelligent Document Processing (IDP) to automatically ingest supplier invoices, match three-way purchase orders, and flag anomalies before processing. We integrate SAP Joule generative AI capabilities to provide contextual business assistance.',
      'Furthermore, our automated tax compliance engines generate GST e-invoices and e-way bills instantaneously without human intervention, ensuring zero transport detention and total statutory compliance.'
    ],
    pillarsHeading: 'Pillars of Enterprise AI & Automation',
    pillars: [
      {
        tag: 'Document Ingestion',
        title: 'Intelligent Document Processing (IDP)',
        desc: 'AI-driven optical recognition that extracts, categorizes, and validates supplier invoices, POs, and shipping manifests.'
      },
      {
        tag: 'Conversational Enterprise',
        title: 'SAP Joule & Generative AI Assistance',
        desc: 'Contextual AI copilots that assist business users with policy inquiries, report synthesis, and workflow execution.'
      },
      {
        tag: 'Zero-Touch Compliance',
        title: 'Automated GST & E-Way Bill Engines',
        desc: 'Trigger automated e-invoice IRN generation and dispatch e-way bills directly upon invoice creation in SAP.'
      },
      {
        tag: 'Predictive Demand',
        title: 'Algorithmic Inventory Forecasting',
        desc: 'Machine learning algorithms that predict component reorder points based on seasonal demand, lead times, and weather.'
      },
      {
        tag: 'Robotic Automation',
        title: 'SAP Build Process Automation (RPA)',
        desc: 'Software bots that execute multi-step reconciliation, bank statement scraping, and cross-application data keying.'
      },
      {
        tag: 'Anomaly Detection',
        title: 'Audit & Fraud Prevention Alerts',
        desc: 'Algorithmic inspection of transactional anomalies, duplicate vendor payments, and uncharacteristic ledger variances.'
      }
    ],
    capabilitiesHeading: 'Comprehensive AI & Automation Capabilities',
    capabilities: [
      { name: 'Intelligent Invoice OCR & 3-Way Automated PO Matching', highlight: 'Automated Invoices' },
      { name: 'Automated Statutory GST E-Invoice & E-Way Bill Engine', highlight: 'Statutory Auto' },
      { name: 'SAP Joule Generative AI Integration & Copilot Enablement', highlight: 'Joule Copilot' },
      { name: 'Algorithmic Stock Demand & Predictive Reorder Analytics', highlight: 'Predictive Stock' },
      { name: 'SAP Build Process Automation (RPA Bots) Implementation', highlight: 'RPA Bots' },
      { name: 'Bank Statement Auto-Scraping & Reconciliation Pipelines', highlight: 'Bank Reconciliation' },
      { name: 'Human-in-the-Loop Exception Handling Dashboards', highlight: 'Exception Cockpit' },
      { name: 'Enterprise AI Governance, Data Privacy & Security Hardening', highlight: 'AI Governance' }
    ],
    deliverables: [
      'Validated AI Processing Pipelines Integrated with SAP BTP',
      'Exception Management Cockpit for Human-in-the-Loop Reviews',
      'Automated Statutory Compliance Connector & Validation Gateway',
      'Model Accuracy Benchmark & Maintenance Governance Protocol'
    ],
    methodologyHeading: 'Enterprise AI & Automation Framework',
    methodologySubheading: 'A disciplined approach taking automation from pilot evaluation to production steady-state.',
    methodology: [
      {
        num: '01',
        title: 'Automation Feasibility Discovery',
        tags: 'Process Selection • ROI Benchmarking',
        desc: 'Identify high-volume, error-prone manual processes across finance and procurement with high automation ROI.'
      },
      {
        num: '02',
        title: 'Model Training & Data Pipeline Setup',
        tags: 'Sample Invoices • Extraction Accuracy',
        desc: 'Train document extraction models on historical vendor invoices, calibrating confidence score thresholds.'
      },
      {
        num: '03',
        title: 'SAP Core & BTP Integration',
        tags: 'API Handshakes • Process Automation',
        desc: 'Connect extraction engines with SAP BTP and core transactional APIs (BAPIs/OData) for automated posting.'
      },
      {
        num: '04',
        title: 'Exception Handling Workflow Design',
        tags: 'Human-in-the-Loop • Confidence Routing',
        desc: 'Configure intuitive review queues where low-confidence extractions are flagged for quick human approval before posting.'
      },
      {
        num: '05',
        title: 'Pilot Wave Validation & Stress Run',
        tags: 'Parallel Processing • Audit Reconciliation',
        desc: 'Run automation in parallel with manual teams, validating that posted transactional ledgers match exactly.'
      },
      {
        num: '06',
        title: 'Full Autonomous Production Deployment',
        tags: 'SLA Monitoring • Continuous Learning',
        desc: 'Release automated workflows to live operations, monitoring accuracy drift and continuously training models.'
      }
    ],
    whyPartnerTitle: 'Why Choose ZisanTech for SAP AI & Automation?',
    whyPartnerSubtitle: 'Harness the power of autonomous intelligence grounded in transactional precision.',
    whyCards: [
      { title: '80% Manual Labor Reduction', desc: 'Dramatically reduce operational overhead in high-volume accounts payable and warehouse logistics.' },
      { title: '100% Statutory Compliance', desc: 'Completely eliminate tax penalties and transit detentions with automated, instantaneous e-invoicing.' },
      { title: 'Safe Human-in-the-Loop Governance', desc: 'Ensure total control with automated exception routing for edge cases and low-confidence items.' },
      { title: 'Enterprise-Grade Data Security', desc: 'Zero data leakage: all AI pipelines adhere to strict corporate data sovereignty and encryption standards.' }
    ]
  },

  // 8. CRM Solutions
  'crm-solutions': {
    id: 8,
    slug: 'crm-solutions',
    category: 'Enterprise & Cloud Solutions',
    title: 'CRM Solutions',
    heroHeadline: 'Unified Revenue Architecture',
    heroHighlight: 'Through Enterprise CRM Solutions',
    heroTagline: 'Connect marketing outreach, sales pipelines, client retention, and after-sales customer service into one high-velocity revenue engine.',
    heroImage: '/zisantech_meeting_presentation.png',
    secondaryImage: '/photo-1542744173-8e7e53415bb0.jpg',
    sliderSlides: [
      {
        title: 'Visual Multi-Stage Deal Pipelines',
        subtitle: 'Automated Quoting, Discount Authorization & Sales Velocity Telemetry',
        image: '/zisantech_meeting_presentation.png',
        badge: 'Sales Acceleration',
        metric: '+35%',
        metricLabel: 'Faster Deal Progression',
        points: [
          'Visual drag-and-drop opportunity pipelines mapped to your commercial sales stages',
          'Automated branded PDF quotation generation with dynamic discounting thresholds',
          'Real-time executive forecasting showing weighted revenue projections by sales rep'
        ]
      },
      {
        title: 'Bi-Directional ERP Customer Sync',
        subtitle: 'Give Reps Instant Access to Customer Credit Limits, Ledgers & Live Stock',
        image: '/photo-1542744173-8e7e53415bb0.jpg',
        badge: 'ERP Connectivity',
        metric: '360°',
        metricLabel: 'Live Customer Visibility',
        points: [
          'View real-time customer credit limit balances and overdue invoice ledgers',
          'Check actual warehouse stock levels directly inside CRM before confirming delivery dates',
          'Automatic order push from CRM deal stage directly into ERP sales orders'
        ]
      },
      {
        title: 'Omnichannel Support Desk & SLAs',
        subtitle: 'Automated Ticket Escalation, Knowledge Bases & Satisfaction Surveys',
        image: '/meeting_room_hd.jpg',
        badge: 'Customer Retention',
        metric: '98%',
        metricLabel: 'Support Ticket SLA Resolution',
        points: [
          'Unified inbox aggregating emails, phone calls, WhatsApp inquiries, and portal tickets',
          'Configurable SLA response thresholds with automated manager escalation alerts',
          'Automated customer satisfaction (CSAT) surveys sent upon ticket resolution'
        ]
      }
    ],
    overviewSubheading: 'Customer Management • Sales Automation • Service Desks • CRM Integration',
    overviewHeading: 'Empower Revenue Teams with 360-Degree Customer Visibility',
    overviewLead: 'Disjointed communication, scattered lead tracking, and disconnected service tickets lead to revenue leakage and client frustration.',
    overviewBody: [
      'ZisanTech Solutions designs, implements, and integrates tailored enterprise CRM platforms that align marketing outreach, sales deal velocity, customer onboarding, and long-term retention.',
      'We eliminate disconnected spreadsheets and build automated pipeline cadences that alert sales reps to hot opportunities, streamline quote approvals, and give leadership clear visibility into forecasted revenue.',
      'Every CRM implementation is deeply integrated with your back-end ERP and communication platforms (email, WhatsApp, telephony), ensuring your team operates with complete, real-time client history at their fingertips.'
    ],
    pillarsHeading: 'Pillars of Enterprise CRM Success',
    pillars: [
      {
        tag: 'Omnichannel Lead Capture',
        title: 'Intelligent Routing & Qualification',
        desc: 'Capture inbound leads across web forms, ads, and telephony, routing them instantaneously based on geography and quota.'
      },
      {
        tag: 'Visual Deal Pipelines',
        title: 'Automated Quoting & Approvals',
        desc: 'Manage multi-stage deal progressions, generate branded quotes with discount approval rules, and forecast closings.'
      },
      {
        tag: 'Customer Service Desks',
        title: 'SLA-Driven Support Ticketing',
        desc: 'Omnichannel customer support desks with automated escalations, knowledge management, and customer satisfaction surveys.'
      },
      {
        tag: 'ERP Bi-Directional Bridge',
        title: 'Order Status & Credit Limits Sync',
        desc: 'Allow sales reps to view live customer credit limits, outstanding invoices, and dispatch tracking directly in CRM.'
      },
      {
        tag: 'Automated Cadences',
        title: 'Email & WhatsApp Follow-Ups',
        desc: 'Set up multi-touch nurture sequences that trigger automated emails and reminders based on prospect behavior.'
      },
      {
        tag: 'Executive Reporting',
        title: 'Conversion Analytics & Quota Telemetry',
        desc: 'Clear visual cockpits tracking lead velocity, win-loss ratios, average deal size, and individual rep performance.'
      }
    ],
    capabilitiesHeading: 'Comprehensive CRM Capabilities & Scope',
    capabilities: [
      { name: 'Custom CRM Architecture & Pipeline Configuration', highlight: 'Bespoke Pipeline' },
      { name: 'Omnichannel Lead Ingestion (Web, Social, Telephony, Mail)', highlight: 'Omnichannel Leads' },
      { name: 'Automated Quotation Generation & Multi-Tier Approvals', highlight: 'Quote Automation' },
      { name: 'Customer Support Ticketing & SLA Escalation Matrices', highlight: 'Service Desk' },
      { name: 'Bi-Directional ERP Connectivity (SAP, Oracle, Custom)', highlight: 'ERP Connectivity' },
      { name: 'Field Sales Mobile Accessibility with Geo-Fencing', highlight: 'Mobile Field App' },
      { name: 'Legacy Data Cleansing, Deduplication & Migration', highlight: 'Data Migration' },
      { name: 'Sales Team Onboarding & Administrator Playbooks', highlight: 'Adoption Training' }
    ],
    deliverables: [
      'Tailored CRM Architecture Blueprint & Custom Field Dictionary',
      'Clean Data Migration Verification & Deduplication Protocols',
      'Automated Executive Pipeline & Conversion Tracking Dashboards',
      'Sales Team Workflow Playbook & Administrator Manual'
    ],
    methodologyHeading: 'Structured CRM Deployment Lifecycle',
    methodologySubheading: 'From sales discovery to company-wide adoption with measurable conversion acceleration.',
    methodology: [
      {
        num: '01',
        title: 'Sales Workflow & Funnel Discovery',
        tags: 'Pipeline Audit • Stakeholder Interviews',
        desc: 'Map out the exact customer lifecycle from first contact to deal closing, identifying friction points and drop-offs.'
      },
      {
        num: '02',
        title: 'Data Model & Security Design',
        tags: 'Role Permissions • Custom Entity Modeling',
        desc: 'Configure custom fields, accounts, territory hierarchies, and role-based data visibility permissions.'
      },
      {
        num: '03',
        title: 'Platform Build & Automation Flows',
        tags: 'Stage Triggers • Notification Rules',
        desc: 'Build automated deal stage progressions, discount authorization triggers, and automated task assignments.'
      },
      {
        num: '04',
        title: 'ERP & Communication Integration',
        tags: 'Mail Sync • Telephony APIs • ERP Handshake',
        desc: 'Connect Outlook/Gmail, VoIP telephony, WhatsApp APIs, and your central ERP system for live transactional data.'
      },
      {
        num: '05',
        title: 'Data Migration & User Testing',
        tags: 'Deduplication • Role-Based UAT',
        desc: 'Scrub legacy contact databases, import sanitized records, and conduct rigorous user acceptance testing with sales champions.'
      },
      {
        num: '06',
        title: 'Rollout, Training & Optimization',
        tags: 'Go-Live Coaching • Funnel Analytics',
        desc: 'Conduct role-specific sales training sessions and monitor adoption metrics, adjusting pipelines based on real feedback.'
      }
    ],
    whyPartnerTitle: 'Why Choose ZisanTech for CRM Solutions?',
    whyPartnerSubtitle: 'Drive measurable sales velocity and long-term customer satisfaction.',
    whyCards: [
      { title: 'Zero Lead Leakage', desc: 'Automated SLAs ensure every single inbound inquiry is assigned and contacted within minutes.' },
      { title: 'Deep ERP Integration', desc: 'Sales reps view customer ledger balances, live stock availability, and dispatched shipments in real time.' },
      { title: 'Field Team Mobility', desc: 'Lightweight mobile applications designed for sales reps on the road with offline note-taking and check-ins.' },
      { title: 'Measurable Conversion Uplift', desc: 'Our clients typically realize a 25–35% increase in lead-to-opportunity velocity within the first quarter.' }
    ]
  },

  // 9. ERP Solutions
  'erp-solutions': {
    id: 9,
    slug: 'erp-solutions',
    category: 'Enterprise & Cloud Solutions',
    title: 'ERP Solutions',
    heroHeadline: 'Unified Enterprise Operations',
    heroHighlight: 'Through Robust ERP Solutions',
    heroTagline: 'Unite procurement, inventory, production, accounting, and sales operations into one seamless operational foundation engineered for growth.',
    heroImage: '/photo-1504384308090-c894fdcc538d.jpg',
    secondaryImage: '/modern_dev_team_hd.jpg',
    sliderSlides: [
      {
        title: 'Integrated Double-Entry Accounting',
        subtitle: 'Automated Ledger Postings from Procurement Invoices & Dispatch Challans',
        image: '/photo-1504384308090-c894fdcc538d.jpg',
        badge: 'Financial Precision',
        metric: '100%',
        metricLabel: 'Real-Time Ledger Balancing',
        points: [
          'Automatic posting of debits and credits upon invoice approval and stock receipt',
          'Multi-currency and multi-branch financial consolidation in a single dashboard',
          'Pre-configured statutory tax engines handling GST, VAT, and withholding taxes'
        ]
      },
      {
        title: 'Multi-Warehouse & Batch Inventory Control',
        subtitle: 'Real-Time Valuation Across Central Plants, Depots & Consignment Stocks',
        image: '/modern_dev_team_hd.jpg',
        badge: 'Inventory Control',
        metric: '> 99.5%',
        metricLabel: 'Physical vs System Accuracy',
        points: [
          'Batch and serial number traceability from raw material receipt to finished goods',
          'Automated reorder point algorithms based on historical consumption lead times',
          'Barcode and RFID scanning integration for instantaneous warehouse pick and pack'
        ]
      },
      {
        title: 'Manufacturing & Production BOM Scheduling',
        subtitle: 'Multi-Level Bill of Materials, Machine Work Centers & Scrap Control',
        image: '/cand_workspace.jpg',
        badge: 'Shop Floor Control',
        metric: '-20%',
        metricLabel: 'Production Idle Time Reduction',
        points: [
          'Dynamic multi-tier BOM configuration with variable yield and scrap allowances',
          'Work center capacity planning preventing machine bottlenecks and worker idle time',
          'Shop-floor job card creation with actual vs standard material consumption tracking'
        ]
      }
    ],
    overviewSubheading: 'Procurement • Inventory • Production • Finance • Operational Excellence',
    overviewHeading: 'Streamline Complex Business Lifecycles with Scalable ERP Systems',
    overviewLead: 'Fragmented departmental software leads to inventory discrepancies, delayed customer shipments, and chaotic month-end financial reconciliation.',
    overviewBody: [
      'ZisanTech Solutions delivers comprehensive cloud and on-premise ERP platforms tailored to mid-market and enterprise businesses across manufacturing, distribution, retail, and service sectors.',
      'We integrate core business functions into a synchronized digital workflow—connecting purchasing purchase orders, multi-warehouse stock valuations, production Bill of Materials (BOM), and sales order fulfillment directly with general ledgers.',
      'With automated statutory tax handling, role-based access security, and real-time operational reporting, we help executive leadership take control of working capital and scale with confidence.'
    ],
    pillarsHeading: 'Pillars of Unified ERP Architecture',
    pillars: [
      {
        tag: 'Financial Precision',
        title: 'Integrated General Ledgers & AP/AR',
        desc: 'Automated double-entry accounting that posts debits and credits automatically from purchase receipts and sales invoices.'
      },
      {
        tag: 'Inventory Optimization',
        title: 'Multi-Warehouse & Batch Traceability',
        desc: 'Real-time stock valuation across multi-location warehouses with automated reorder triggers and expiry tracking.'
      },
      {
        tag: 'Procurement Governance',
        title: 'Vendor Portals & Requisition Workflows',
        desc: 'Streamline purchase requisitions, comparative quote matrices, purchase orders, and three-way invoice verification.'
      },
      {
        tag: 'Manufacturing Control',
        title: 'Bill of Materials & Shop-Floor Tracking',
        desc: 'Define multi-level BOMs, track work center capacities, schedule job orders, and monitor scrap rates in real time.'
      },
      {
        tag: 'Sales Order Fulfillment',
        title: 'Dispatch Workflows & Delivery Challans',
        desc: 'Convert sales quotes to orders with automatic credit checks, reserve stock, and generate compliant packing slips.'
      },
      {
        tag: 'Statutory Adherence',
        title: 'Tax Compliance & Automated E-Invoicing',
        desc: 'Built-in statutory tax calculations (GST, VAT, TDS), automated e-invoicing generation, and digital tax returns.'
      }
    ],
    capabilitiesHeading: 'Comprehensive ERP Capabilities & Modules',
    capabilities: [
      { name: 'General Ledger, Cash Management & Accounts Payable/Receivable', highlight: 'Core Finance' },
      { name: 'Multi-Location Inventory Valuation & Barcode/RFID Tracking', highlight: 'Inventory Control' },
      { name: 'Procurement Lifecycle, Vendor Ratings & Purchase Orders', highlight: 'Procurement' },
      { name: 'Production Planning, Multi-Tier BOM & Capacity Scheduling', highlight: 'Manufacturing' },
      { name: 'Sales Order Processing, Pricing Matrices & Dispatch Tracking', highlight: 'Sales Fulfillment' },
      { name: 'Statutory Tax Engines (GST, E-Invoice, E-Way Bill Generation)', highlight: 'Statutory Engine' },
      { name: 'Role-Based Permissions & Strict Transactional Audit Trails', highlight: 'Security & Audit' },
      { name: 'Executive Operations Cockpit with Real-Time Margin Analysis', highlight: 'Executive KPIs' }
    ],
    deliverables: [
      'Comprehensive ERP System Architecture & Business Process Blueprint',
      'Master Data Migration & Opening Balance Reconciliation Reports',
      'Statutory Invoice, Delivery Challan & Purchase Order Template Suite',
      'Departmental User Playbooks & System Administration Training'
    ],
    methodologyHeading: 'Structured ERP Implementation Methodology',
    methodologySubheading: 'A disciplined, milestone-governed deployment cycle ensuring operational stability from Day 1.',
    methodology: [
      {
        num: '01',
        title: 'Operational Process Audit & Blueprinting',
        tags: 'Departmental Discovery • Workflow Mapping',
        desc: 'Map every current operational workflow, inventory movement, and ledger classification with department heads.'
      },
      {
        num: '02',
        title: 'System Configuration & Chart of Accounts',
        tags: 'Ledger Setup • Warehouse Topologies',
        desc: 'Configure financial ledgers, tax codes, multi-warehouse hierarchies, and role permissions in the staging environment.'
      },
      {
        num: '03',
        title: 'Master Data Cleansing & Formatting',
        tags: 'Item Masters • Vendor/Customer Ledgers',
        desc: 'Extract, clean, and standardize legacy item masters, customer accounts, and vendor registers for initialization.'
      },
      {
        num: '04',
        title: 'Pilot Testing & Order-to-Cash Simulation',
        tags: 'Full-Cycle Scenarios • Departmental UAT',
        desc: 'Run complete commercial cycles—from purchase requisition to production, dispatch, and ledger posting—with core teams.'
      },
      {
        num: '05',
        title: 'Opening Balance Cutover & Go-Live',
        tags: 'Inventory Cutover • Financial Opening Balances',
        desc: 'Freeze legacy books over a designated cutover weekend, transfer physical stock balances, and initiate live operations.'
      },
      {
        num: '06',
        title: 'Stabilization & Month-End Support',
        tags: 'On-Site Hyper-Care • First Month-End Close',
        desc: 'Provide hands-on floor support through the first full monthly financial closing, ensuring 100% ledger harmony.'
      }
    ],
    whyPartnerTitle: 'Why Choose ZisanTech for ERP Solutions?',
    whyPartnerSubtitle: 'Scalable architecture that eliminates operational chaos and unlocks working capital.',
    whyCards: [
      { title: 'Real-Time Financial Visibility', desc: 'No more waiting for month-end reports: see live operational margins and cash flow every morning.' },
      { title: 'Inventory Accuracy Over 99%', desc: 'Strict transactional discipline eliminates stock discrepancies between warehouse floors and accounting books.' },
      { title: 'Built-In Statutory Automation', desc: 'Generate digital tax invoices, e-way bills, and compliance returns directly without manual portals.' },
      { title: 'Modular Scalability', desc: 'Start with core finance and inventory, then expand seamlessly to manufacturing, CRM, and B2B portals.' }
    ]
  },

  // 10. E-Commerce Development
  'e-commerce-development': {
    id: 10,
    slug: 'e-commerce-development',
    category: 'Enterprise & Cloud Solutions',
    title: 'E-Commerce Development',
    heroHeadline: 'High-Conversion Digital Commerce',
    heroHighlight: 'Through Enterprise E-Commerce Solutions',
    heroTagline: 'Build scalable B2B distributor portals and modern B2C digital storefronts tightly integrated with back-end ERP inventory and automated logistics booking.',
    heroImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: '/cand_workspace.jpg',
    sliderSlides: [
      {
        title: 'B2B Distributor Wholesale Portals',
        subtitle: 'Tiered Contract Pricing, Credit Limits & Self-Service Order Matrices',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
        badge: 'B2B Commerce',
        metric: '24/7',
        metricLabel: 'Dealer Self-Service Ordering',
        points: [
          'Contractual customer-specific price tiers and minimum order quantities',
          'Live credit line validation allowing orders on terms with credit limit alerts',
          'Bulk CSV order entry and instant ledger statement downloads'
        ]
      },
      {
        title: 'Real-Time ERP Inventory Synchronization',
        subtitle: 'Prevent Stock Overselling with Sub-Second Bidirectional Stock Sync',
        image: '/cand_workspace.jpg',
        badge: 'ERP Sync',
        metric: 'Sub-Second',
        metricLabel: 'Stock Counter Latency',
        points: [
          'Immediate stock reservation upon checkout prevents embarrassing out-of-stock cancellations',
          'Automated sales order ingestion directly into your central ERP shipping queue',
          'Live fulfillment status updates pushed back to customer portals automatically'
        ]
      },
      {
        title: 'Automated Carrier API Booking',
        subtitle: 'Instant Airway Bill Generation & WhatsApp Tracking Telemetry',
        image: '/photo-1504384308090-c894fdcc538d.jpg',
        badge: 'Logistics Auto',
        metric: 'Zero Touch',
        metricLabel: 'AWB & Label Generation',
        points: [
          'Automated carrier selection based on freight cost, destination pincode, and delivery SLA',
          'Automatic generation of shipping labels, packing slips, and pickup manifests',
          'Automated customer tracking notifications sent via WhatsApp and SMS'
        ]
      }
    ],
    overviewSubheading: 'B2B Wholesale Portals • B2C Storefronts • Payment Rails • ERP Synchronization',
    overviewHeading: 'Frictionless Digital Shopping Experiences Engineered for Massive Scale',
    overviewLead: 'Modern consumers and wholesale business buyers demand lightning-fast catalog navigation, real-time stock checks, and instant checkout experiences.',
    overviewBody: [
      'ZisanTech Solutions designs, develops, and scales modern digital commerce platforms engineered to drive conversion and handle peak transaction volumes without degradation.',
      'For B2B brands, we build custom dealer portals featuring customer-specific tier pricing, credit line purchases, bulk CSV order uploads, and automated tax challans. For B2C enterprises, we deliver high-velocity, mobile-first storefronts with instant payment gateways and real-time shipping tracking.',
      'Every store we build is tightly coupled to your back-end ERP system, ensuring inventory counts update automatically and orders flow directly into dispatch queues without manual intervention.'
    ],
    pillarsHeading: 'Pillars of Enterprise Digital Commerce',
    pillars: [
      {
        tag: 'B2B Wholesale Portals',
        title: 'Custom Pricing & Credit Lines',
        desc: 'Customer-specific discount contracts, minimum order quantity rules, credit line balances, and bulk order matrices.'
      },
      {
        tag: 'High-Speed B2C Storefronts',
        title: 'Sub-Second Page Loads & Mobile First',
        desc: 'Headless storefront architectures optimized for Core Web Vitals, lightning-fast filtering, and frictionless checkout.'
      },
      {
        tag: 'ERP Inventory Synchronization',
        title: 'Real-Time Stock & Order Push',
        desc: 'Live stock quantity reflection preventing overselling, with automatic sales order ingestion directly into your ERP.'
      },
      {
        tag: 'Payment Rails & Security',
        title: 'Multi-Gateway & Localized Payments',
        desc: 'Integration with UPI, cards, net banking, BNPL, and global payment rails under strict PCI-DSS security compliance.'
      },
      {
        tag: 'Automated Logistics Booking',
        title: 'Carrier APIs & Tracking Telemetry',
        desc: 'Automated airway bill (AWB) generation, shipping label printing, and automated SMS/WhatsApp delivery updates.'
      },
      {
        tag: 'Conversion & SEO Architecture',
        title: 'Search Optimization & Abandonment Recovery',
        desc: 'Structured product schema, fast CDN caching, and automated cart abandonment recovery sequences.'
      }
    ],
    capabilitiesHeading: 'Comprehensive Digital Commerce Capabilities',
    capabilities: [
      { name: 'Headless & Modern Storefront Architecture (Next.js / Shopify Plus)', highlight: 'Modern Frontend' },
      { name: 'B2B Distributor Self-Service Portals with Tiered Pricing', highlight: 'B2B Wholesale' },
      { name: 'Bi-Directional ERP Inventory & Order Handshake APIs', highlight: 'ERP Auto-Sync' },
      { name: 'Multi-Gateway Payment Integration (UPI, Credit/Debit, Net Banking)', highlight: 'Payment Rails' },
      { name: 'Logistics Partner API Automation (Shiprocket, Bluedart, Delhivery)', highlight: 'Logistics Auto' },
      { name: 'Enterprise Product Information Management (PIM) Systems', highlight: 'PIM Catalog' },
      { name: 'Automated Abandoned Cart Sequences & Marketing Integrations', highlight: 'CRO Automation' },
      { name: 'Performance Optimization & Core Web Vitals Hardening', highlight: 'Sub-Second Speed' }
    ],
    deliverables: [
      'Production-Ready Scalable Web Storefront with SSL & PCI-DSS Hardening',
      'Custom Admin Management Dashboard for Catalog & Order Management',
      'Verified ERP Integration API Connectors with Automated Retry Queues',
      'Performance Audit Report Exceeding 90+ Mobile Core Web Vitals'
    ],
    methodologyHeading: 'E-Commerce Engineering Roadmap',
    methodologySubheading: 'From conversion wireframing to high-concurrency launch and scaling.',
    methodology: [
      {
        num: '01',
        title: 'Buyer Journey & Commercial Discovery',
        tags: 'Checkout Audit • B2B/B2C Workflow Scoping',
        desc: 'Map out the shopping experience, payment preferences, shipping requirements, and back-end integration touchpoints.'
      },
      {
        num: '02',
        title: 'High-Converting UI/UX Prototyping',
        tags: 'Mobile-First Layouts • Frictionless Checkout',
        desc: 'Design intuitive product catalog layouts, facet search filtering, and single-page checkout flows.'
      },
      {
        num: '03',
        title: 'Modern Frontend & Backend Development',
        tags: 'Headless Stacks • Secure API Construction',
        desc: 'Code fast responsive storefronts using modern web frameworks connected to robust headless commerce engines.'
      },
      {
        num: '04',
        title: 'Payment, Tax & Logistics Integrations',
        tags: 'Payment Gateways • GST Calculation • Shipping APIs',
        desc: 'Connect payment processors, automated GST tax calculation engines, and courier API dispatch webhooks.'
      },
      {
        num: '05',
        title: 'ERP Integration & Concurrency Stress Testing',
        tags: 'Load Testing • Order Auto-Sync Validation',
        desc: 'Simulate high-traffic flash sale spikes, verifying that inventory counters decrement accurately in the ERP core.'
      },
      {
        num: '06',
        title: 'Production Launch & Growth Analytics',
        tags: 'Zero-Downtime DNS Switch • Funnel Tracking',
        desc: 'Execute smooth cutovers, configure conversion attribution tracking, and initiate continuous performance monitoring.'
      }
    ],
    whyPartnerTitle: 'Why Choose ZisanTech for E-Commerce?',
    whyPartnerSubtitle: 'Engineered for high-volume conversion and seamless back-end fulfillment.',
    whyCards: [
      { title: 'Sub-Second Mobile Speeds', desc: 'Optimized frontend architectures that load instantly, significantly improving search rankings and checkout conversion.' },
      { title: 'Eliminate Stock Discrepancies', desc: 'Real-time two-way synchronization with your ERP eliminates overselling and back-order cancellations.' },
      { title: 'B2B Wholesale Mastery', desc: 'Empower dealer networks with self-service order booking, credit tracking, and invoice downloads 24/7.' },
      { title: 'Automated Fulfillment', desc: 'Orders automatically book carrier shipping labels and trigger track-and-trace notifications without human effort.' }
    ]
  },

  // 11. HRMS Solution
  'hrms-solution': {
    id: 11,
    slug: 'hrms-solution',
    category: 'Enterprise & Cloud Solutions',
    title: 'HRMS Solution',
    heroHeadline: 'Modern Human Capital Operations',
    heroHighlight: 'Through Agile HRMS Platforms',
    heroTagline: 'Modernize workforce operations from hire to retire with automated statutory payroll, geo-fenced attendance, and transparent employee self-service.',
    heroImage: '/photo-1522071820081-009f0129c71c.jpg',
    secondaryImage: '/photo-1522202176988-66273c2fd55f_1600.jpg',
    sliderSlides: [
      {
        title: 'One-Click Statutory Payroll Engine',
        subtitle: 'Automated Calculation for PF, ESI, Professional Tax, TDS & Bank Salary Files',
        image: '/photo-1522071820081-009f0129c71c.jpg',
        badge: 'Automated Payroll',
        metric: '100%',
        metricLabel: 'Statutory Payroll Compliance',
        points: [
          'Pre-configured legal deduction tables automatically updated with tax slab changes',
          'Instant generation of bank salary transfer files compatible with major banks',
          'Automated email distribution of encrypted password-protected digital payslips'
        ]
      },
      {
        title: 'Geo-Fenced & Biometric Attendance',
        subtitle: 'Real-Time Clock-Ins Across Factory Biometrics and Field Staff Mobile Apps',
        image: '/photo-1522202176988-66273c2fd55f_1600.jpg',
        badge: 'Smart Attendance',
        metric: 'Zero Buddy Punching',
        metricLabel: 'Face & GPS Verification',
        points: [
          'Seamless API integration with existing factory biometric fingerprint and face scanners',
          'Mobile check-ins restricted to authorized client geofences with selfie capture',
          'Automatic deduction rules for late punches, half-days, and overtime shift rules'
        ]
      },
      {
        title: 'Employee Self-Service (ESS) Mobile App',
        subtitle: 'Empower Staff with Direct Access to Time-Off, Claims & Tax Declarations',
        image: '/meeting_room_hd.jpg',
        badge: 'Employee Self-Service',
        metric: '-70%',
        metricLabel: 'Reduction in Routine HR Inquiries',
        points: [
          'Instant leave applications with automatic multi-level manager approval routing',
          'Expense reimbursement submission with camera receipt snapshot and OCR amount reading',
          'Self-service tax investment declaration submissions with automated TDS impact simulation'
        ]
      }
    ],
    overviewSubheading: 'Recruitment • Attendance • Automated Payroll • Employee Self-Service (ESS)',
    overviewHeading: 'Eliminate Administrative Burden with People-Centric Human Capital Technology',
    overviewLead: 'Manual payroll calculation, messy leave spreadsheets, and compliance risks drain HR bandwidth and frustrate employees.',
    overviewBody: [
      'ZisanTech Solutions delivers intuitive, enterprise-grade Human Resource Management Systems (HRMS) designed to automate repetitive workforce operations and ensure 100% statutory labor compliance.',
      'Our platforms streamline the complete employee lifecycle—from digital applicant onboarding and biometric/mobile attendance tracking to automated statutory payroll, expense claims, and performance appraisals.',
      'Employees enjoy self-service mobile portals for payslips, leave applications, and tax investment proofs, while leadership gains real-time visibility into headcount costs, retention trends, and workforce productivity.'
    ],
    pillarsHeading: 'Pillars of Enterprise HRMS Architecture',
    pillars: [
      {
        tag: 'Automated Payroll Engine',
        title: 'One-Click Statutory Payroll',
        desc: 'Exact calculations for PF, ESI, Professional Tax, TDS deductions, and automated bank salary disbursement files.'
      },
      {
        tag: 'Smart Attendance Tracking',
        title: 'Biometric & Mobile Geo-Fencing',
        desc: 'Capture real-time clock-ins across factory biometrics and mobile app check-ins with selfie and GPS verification.'
      },
      {
        tag: 'Employee Self-Service (ESS)',
        title: 'Mobile Access for Leave & Payslips',
        desc: 'Empower staff to view payslips, request time off, submit reimbursement receipts, and submit tax declarations.'
      },
      {
        tag: 'Paperless Onboarding',
        title: 'Digital Documentation & E-Sign',
        desc: 'Streamline new hire paperwork with digital document collection, automated credential generation, and policy sign-offs.'
      },
      {
        tag: 'Performance Management',
        title: 'OKR Alignment & 360 Reviews',
        desc: 'Establish clear quarterly goals, track ongoing milestones, and conduct objective 360-degree appraisal cycles.'
      },
      {
        tag: 'People Analytics',
        title: 'Attrition & Compensation Cockpits',
        desc: 'Gain instant executive visibility into department headcount costs, overtime trends, and talent retention metrics.'
      }
    ],
    capabilitiesHeading: 'Comprehensive HRMS Modules & Scope',
    capabilities: [
      { name: 'Statutory Payroll Engine (PF, ESI, TDS, PTax Compliance)', highlight: 'Payroll Engine' },
      { name: 'Multi-Location Biometric & Geo-Fenced Mobile Attendance', highlight: 'Attendance Tracking' },
      { name: 'Employee Self-Service (ESS) Mobile & Web Portals', highlight: 'ESS Portal' },
      { name: 'Automated Leave Policies, Shift Scheduling & Overtime Rules', highlight: 'Leave & Shifts' },
      { name: 'Expense Reimbursement Workflows with OCR Receipt Reading', highlight: 'Expense OCR' },
      { name: 'Digital Applicant Tracking (ATS) & Paperless Onboarding', highlight: 'Recruitment & ATS' },
      { name: 'Performance Appraisals, OKRs & Continuous Feedback Modules', highlight: 'Performance Management' },
      { name: 'Direct ERP Financial Posting for Monthly Salary Overhead', highlight: 'ERP GL Posting' }
    ],
    deliverables: [
      'Company HR Policy & Grade/Designation Matrix Configuration Blueprint',
      'Historical Employee Master Data Cleansing & Migration Records',
      'Automated Bank Salary Disbursement Template File Formats',
      'HR Admin User Guide & Employee Self-Service Mobile Onboarding Pack'
    ],
    methodologyHeading: 'Structured HRMS Deployment Lifecycle',
    methodologySubheading: 'Smooth transition from spreadsheets to automated payroll in six predictable stages.',
    methodology: [
      {
        num: '01',
        title: 'HR Policy & Salary Structure Audit',
        tags: 'Compensation Bands • Statutory Rules',
        desc: 'Review company compensation structures, allowances, deductions, leave rules, and shift timing matrices.'
      },
      {
        num: '02',
        title: 'System Setup & Hierarchy Modeling',
        tags: 'Department Trees • Approval Chains',
        desc: 'Configure reporting relationships, approval hierarchies, and role-based permissions in the HRMS environment.'
      },
      {
        num: '03',
        title: 'Biometric & Attendance Hardware Sync',
        tags: 'Hardware APIs • Geo-Fence Boundaries',
        desc: 'Connect physical biometric devices across branch offices and configure GPS radius parameters for mobile staff.'
      },
      {
        num: '04',
        title: 'Historical Data Migration & Payroll Test',
        tags: 'Employee Records • Parallel Payroll Run',
        desc: 'Import active personnel files and execute parallel payroll runs against legacy calculations to verify 100% penny accuracy.'
      },
      {
        num: '05',
        title: 'Live Payroll Go-Live & ESS Rollout',
        tags: 'Employee App Launch • Salary Slip Release',
        desc: 'Disburse monthly salaries via automated bank export files and launch employee self-service mobile applications.'
      },
      {
        num: '06',
        title: 'Continuous Support & Statutory Updates',
        tags: 'Tax Slab Updates • Feature Enablement',
        desc: 'Provide ongoing support desk assistance and automatically update system tax calculation rules as statutory laws evolve.'
      }
    ],
    whyPartnerTitle: 'Why Choose ZisanTech for HRMS?',
    whyPartnerSubtitle: 'Delight employees and eliminate payroll errors with enterprise-grade human capital software.',
    whyCards: [
      { title: 'Zero Payroll Calculation Errors', desc: 'Automated algorithms eliminate manual Excel formulas and ensure exact statutory tax deductions every single month.' },
      { title: '100% Labor Law Compliance', desc: 'Stay permanently compliant with PF, ESI, Gratuity, and state labor regulations with pre-configured reports.' },
      { title: 'Dramatically Reduced HR Overhead', desc: 'Free HR teams from routine leave queries and tax slip distribution through transparent employee self-service.' },
      { title: 'Seamless ERP Financial Posting', desc: 'Salary overheads and tax liabilities post directly to your ERP general ledger with one click.' }
    ]
  },

  // 12. Digital Marketing
  'digital-marketing': {
    id: 12,
    slug: 'digital-marketing',
    category: 'Enterprise & Cloud Solutions',
    title: 'Digital Marketing',
    heroHeadline: 'Data-Driven Enterprise Acquisition',
    heroHighlight: 'Through Strategic Digital Marketing',
    heroTagline: 'Convert digital channels into reliable, high-value customer acquisition engines with B2B search optimization, LinkedIn account-based marketing, and performance analytics.',
    heroImage: '/meeting_room_hd.jpg',
    secondaryImage: '/photo-1519389950473-47ba0277781c_1600.jpg',
    sliderSlides: [
      {
        title: 'High-Intent B2B Organic Search Dominance',
        subtitle: 'Capture Commercial Searches from Active Enterprise Procurement Decision-Makers',
        image: '/meeting_room_hd.jpg',
        badge: 'Enterprise SEO',
        metric: 'Top 3',
        metricLabel: 'Rankings on Commercial Queries',
        points: [
          'In-depth technical SEO resolving indexation bottlenecks, crawl depth, and core vitals',
          'Commercial intent keyword targeting focusing on software implementation and consulting phrases',
          'Authoritative thought leadership case studies that build institutional domain authority'
        ]
      },
      {
        title: 'Targeted LinkedIn Account-Based Marketing',
        subtitle: 'Reach C-Suite Decision-Makers (CIO, CFO, VP Operations) with Precision',
        image: '/photo-1519389950473-47ba0277781c_1600.jpg',
        badge: 'LinkedIn ABM',
        metric: 'Zero Waste',
        metricLabel: 'Ad Spend on Casual Consumers',
        points: [
          'Targeting restricted strictly to verified corporate accounts meeting your revenue criteria',
          'Sponsored content showcasing executive whitepapers, customer case studies, and ROI calculators',
          'Direct synchronization of qualified form submissions into your sales team’s CRM'
        ]
      },
      {
        title: 'Conversion Rate Optimization & Funnel CRO',
        subtitle: 'Turn Inbound Website Visitors into Qualified Enterprise Sales Discovery Calls',
        image: '/photo-1542744173-8e7e53415bb0.jpg',
        badge: 'Conversion Engineering',
        metric: '+45%',
        metricLabel: 'Inbound Opportunity Conversion',
        points: [
          'Bespoke landing pages engineered with frictionless inquiry forms and social proof',
          'Multi-touch attribution tracking linking every ad dollar to closed-won revenue',
          'Bi-weekly performance reviews analyzing Cost-Per-Lead (CPL) and sales pipeline value'
        ]
      }
    ],
    overviewSubheading: 'Technical SEO • B2B Account-Based Marketing • Performance Ads • Funnel CRO',
    overviewHeading: 'Build High-Intent Inbound Sales Pipelines with Measurable ROI',
    overviewLead: 'High-value enterprise and technology service providers cannot rely on vanity metrics or unfocused consumer advertising campaigns.',
    overviewBody: [
      'ZisanTech Solutions delivers structured, outcome-driven digital marketing programs engineered specifically for enterprise technology providers, industrial manufacturers, and professional service firms.',
      'We combine technical search engine optimization (SEO), high-intent B2B keyword dominance, targeted LinkedIn Account-Based Marketing (ABM), and precision Google Search performance campaigns to connect your brand directly with senior decision-makers.',
      'Every campaign is supported by transparent conversion attribution tracking and executive reporting cockpits, ensuring every marketing dollar spent translates into qualified enterprise sales opportunities.'
    ],
    pillarsHeading: 'Pillars of Enterprise B2B Digital Marketing',
    pillars: [
      {
        tag: 'Organic Search Authority',
        title: 'Technical & Commercial SEO Strategy',
        desc: 'Dominate high-intent commercial keywords with technical site optimization, schema markup, and authoritative thought leadership.'
      },
      {
        tag: 'Account-Based Marketing',
        title: 'Targeted B2B LinkedIn Campaigns',
        desc: 'Engage designated corporate accounts and senior executives (CIO, CFO, VP) through hyper-targeted ABM ad campaigns.'
      },
      {
        tag: 'High-Intent Acquisition',
        title: 'Google Search Performance Marketing',
        desc: 'Capture active enterprise buyers searching for specific software implementations, migrations, and consulting services.'
      },
      {
        tag: 'Conversion Rate Optimization',
        title: 'Landing Page Architecture & CRO',
        desc: 'Design high-converting landing pages with tailored copy, fast load speeds, and friction-free inquiry forms.'
      },
      {
        tag: 'Thought Leadership Content',
        title: 'Case Studies & Industry Whitepapers',
        desc: 'Produce authoritative technical case studies and executive whitepapers that build corporate trust and educate buyers.'
      },
      {
        tag: 'Attribution & Analytics',
        title: 'Multi-Touch Pipeline Reporting',
        desc: 'Track exact customer acquisition costs (CAC) and lead-to-opportunity conversion velocity using unified analytics dashboards.'
      }
    ],
    capabilitiesHeading: 'Comprehensive Digital Marketing Capabilities',
    capabilities: [
      { name: 'Technical Website SEO Audits & Core Web Vitals Optimization', highlight: 'Technical SEO' },
      { name: 'Commercial Keyword Strategy for B2B & Enterprise Services', highlight: 'Keyword Strategy' },
      { name: 'Targeted LinkedIn Account-Based Marketing (ABM) Campaigns', highlight: 'LinkedIn ABM' },
      { name: 'High-Intent Google Search Ad Management & Negative Keyword Scrubbing', highlight: 'Search Ads' },
      { name: 'B2B Case Study, Technical Blog & Whitepaper Production', highlight: 'Content Marketing' },
      { name: 'High-Converting Landing Page Design & A/B Split Testing', highlight: 'Landing Page CRO' },
      { name: 'End-to-End CRM Lead Attribution & Funnel Analytics', highlight: 'CRM Attribution' },
      { name: 'Executive Bi-Weekly Performance Dashboards & ROI Reviews', highlight: 'ROI Reporting' }
    ],
    deliverables: [
      'Comprehensive Technical SEO & Competitive Landscape Audit',
      'Target Account List (TAL) & LinkedIn ABM Audience Configuration',
      'High-Intent Paid Search Campaigns with Tested Ad Copy & Landing Pages',
      'Bi-Weekly Executive Performance Reports with Cost-Per-Lead (CPL) Metrics'
    ],
    methodologyHeading: 'Data-Driven Growth Methodology',
    methodologySubheading: 'A disciplined framework transforming digital visibility into qualified enterprise sales pipeline.',
    methodology: [
      {
        num: '01',
        title: 'Market Audit & Ideal Customer Profiling',
        tags: 'Competitive Analysis • ICP Definition',
        desc: 'Define ideal customer profiles (revenue, industry, job titles) and analyze competitor keyword dominance.'
      },
      {
        num: '02',
        title: 'Technical Foundation & Conversion Tracking',
        tags: 'Site Architecture • GA4/CRM Handshake',
        desc: 'Fix technical SEO crawl barriers, install conversion tracking pixels, and link campaign attribution directly into your CRM.'
      },
      {
        num: '03',
        title: 'High-Intent Content & Landing Page Build',
        tags: 'Targeted Copy • Conversion Engineering',
        desc: 'Develop dedicated landing pages tailored to specific corporate pain points with strong value propositions.'
      },
      {
        num: '04',
        title: 'Targeted Paid Acquisition Launch',
        tags: 'Search Ads • LinkedIn ABM Sprints',
        desc: 'Launch laser-focused campaigns targeting senior decision-makers actively searching for enterprise solutions.'
      },
      {
        num: '05',
        title: 'Organic Search Authority Expansion',
        tags: 'Content Cadence • Backlink Engineering',
        desc: 'Publish authoritative technical guides and case studies to build domain authority and organic rankings.'
      },
      {
        num: '06',
        title: 'A/B Testing & Pipeline Optimization',
        tags: 'CRO Iterations • CAC Reduction',
        desc: 'Continuously iterate ad copy, form fields, and landing page headlines to drive down cost per qualified lead.'
      }
    ],
    whyPartnerTitle: 'Why Choose ZisanTech for Digital Marketing?',
    whyPartnerSubtitle: 'Commercial focus on revenue pipeline rather than superficial traffic clicks.',
    whyCards: [
      { title: 'Focus on Enterprise Deal Value', desc: 'We target decision-makers capable of signing high-value enterprise contracts, not casual consumers.' },
      { title: 'Transparent Cost-Per-Lead Metrics', desc: 'Clear visibility into exact spend, cost per qualified lead, and pipeline contribution every two weeks.' },
      { title: 'Technical Industry Domain Knowledge', desc: 'Our copywriters understand enterprise ERP, cloud architecture, and IT consulting terminology.' },
      { title: 'Integrated Sales Handover', desc: 'Inbound inquiries route directly into your sales team’s CRM with full behavioral attribution data.' }
    ]
  },

  // 13. App & Web Development
  'app-web-development': {
    id: 13,
    slug: 'app-web-development',
    category: 'Enterprise & Cloud Solutions',
    title: 'App & Web Development',
    heroHeadline: 'Modern Digital Engineering',
    heroHighlight: 'Through Custom App & Web Development',
    heroTagline: 'Build scalable, cloud-native web applications, SaaS platforms, and cross-platform mobile apps engineered for speed, security, and high user adoption.',
    heroImage: '/cand_workspace.jpg',
    secondaryImage: '/austin_tech_hd.jpg',
    sliderSlides: [
      {
        title: 'Modern Cloud-Native Frontend Architecture',
        subtitle: 'React, Next.js, and TypeScript Engineered for Sub-Second Performance',
        image: '/cand_workspace.jpg',
        badge: 'Modern Frontend',
        metric: '< 100ms',
        metricLabel: 'Time-to-Interactive UI Latency',
        points: [
          'Server-side rendering (SSR) and edge caching maximizing Core Web Vitals performance',
          'Modular enterprise component design systems ensuring brand and design uniformity',
          'Strict TypeScript type safety preventing production runtime script exceptions'
        ]
      },
      {
        title: 'High-Concurrency Microservices & APIs',
        subtitle: 'Node.js, Python, and Golang Backends Processing High Transaction Volumes',
        image: '/austin_tech_hd.jpg',
        badge: 'Scalable Microservices',
        metric: '99.99%',
        metricLabel: 'API Microservice Availability',
        points: [
          'Decoupled microservice architectures communicating through asynchronous event streams',
          'PostgreSQL and Redis caching layers optimized for millions of concurrent queries',
          'Automated Docker containerization with Kubernetes auto-scaling across cloud clusters'
        ]
      },
      {
        title: 'Cross-Platform iOS & Android Mobile Apps',
        subtitle: 'Deliver Native-Performance Mobile Apps from a Single Maintainable Codebase',
        image: '/modern_dev_team_hd.jpg',
        badge: 'Mobile Engineering',
        metric: '60 FPS',
        metricLabel: 'Smooth Native Frame Rates',
        points: [
          'Flutter and React Native development providing true native look, feel, and hardware access',
          'Offline-first synchronization allowing field teams to work without internet connectivity',
          'Automated CI/CD deployment pushing store updates to Google Play and Apple App Store'
        ]
      }
    ],
    overviewSubheading: 'Web Applications • SaaS Platforms • Mobile Apps • Cloud-Native Architecture',
    overviewHeading: 'Modern Software Engineering Tailored for Enterprise Performance',
    overviewLead: 'Off-the-shelf software often fails to support unique business operations, while legacy internal tools frustrate employees and slow growth.',
    overviewBody: [
      'ZisanTech Solutions designs, builds, and maintains bespoke web applications, enterprise customer portals, and high-performance cross-platform mobile applications that give businesses a distinct competitive edge.',
      'Our software engineers utilize modern technology stacks—including React, Next.js, Node.js, Python, TypeScript, and Flutter—to build clean, maintainable software engineered to scale effortlessly.',
      'Every digital product is built with cloud-native resilience, containerized microservices (Docker/Kubernetes), automated CI/CD deployment pipelines, and stringent OWASP security standards, ensuring 99.9% operational reliability.'
    ],
    pillarsHeading: 'Pillars of Enterprise Digital Engineering',
    pillars: [
      {
        tag: 'Modern Frontend Stacks',
        title: 'React, Next.js & TypeScript',
        desc: 'Lightning-fast, responsive web interfaces with type-safe architectures, server-side rendering, and sub-second load times.'
      },
      {
        tag: 'Scalable Microservices',
        title: 'Node.js, Python & Golang Backends',
        desc: 'High-throughput REST and GraphQL APIs capable of processing millions of concurrent database requests reliably.'
      },
      {
        tag: 'Cross-Platform Mobile',
        title: 'iOS & Android via React Native & Flutter',
        desc: 'Deploy native-feel mobile applications across iOS and Android from a single clean, high-performance codebase.'
      },
      {
        tag: 'Cloud-Native Infrastructure',
        title: 'Docker, Kubernetes & Serverless',
        desc: 'Containerized deployments across AWS, Google Cloud, or Microsoft Azure with automated horizontal auto-scaling.'
      },
      {
        tag: 'Security & Compliance',
        title: 'OWASP Hardening & Data Encryption',
        desc: 'Role-based access control (RBAC), end-to-end data encryption at rest and in transit, and vulnerability audits.'
      },
      {
        tag: 'Continuous Delivery',
        title: 'Automated CI/CD Deployment Pipelines',
        desc: 'Automated testing and zero-downtime deployment workflows ensuring rapid, reliable feature release cadences.'
      }
    ],
    capabilitiesHeading: 'Comprehensive Software Engineering Capabilities',
    capabilities: [
      { name: 'Custom Enterprise Web Application Development (React / Next.js)', highlight: 'Modern Web Apps' },
      { name: 'Multi-Tenant SaaS Platform Engineering & Cloud Architecture', highlight: 'SaaS Platforms' },
      { name: 'Cross-Platform iOS & Android Mobile Apps (Flutter / React Native)', highlight: 'Mobile Apps' },
      { name: 'High-Throughput Microservice API Architecture (Node.js / Python)', highlight: 'Microservices' },
      { name: 'Cloud Infrastructure Setup & Auto-Scaling (AWS / GCP / Azure)', highlight: 'Cloud Hosting' },
      { name: 'Legacy System Modernization & Monolith-to-Microservice Refactoring', highlight: 'Modernization' },
      { name: 'Database Architecture, Indexing & Caching (PostgreSQL, Redis, Mongo)', highlight: 'Database Scalability' },
      { name: 'Automated CI/CD Pipelines, Automated Testing & SLA Maintenance', highlight: 'DevOps & CI/CD' }
    ],
    deliverables: [
      'Documented, Version-Controlled Clean Source Code Repository (Git)',
      'Automated Test Suite (Unit, Integration & End-to-End Coverage)',
      'Cloud Architecture Infrastructure-as-Code (Terraform / Docker)',
      'Technical API Documentation & Operational Handover Runbooks'
    ],
    methodologyHeading: 'Agile Software Engineering Methodology',
    methodologySubheading: 'From user experience prototyping to scalable cloud deployment in disciplined two-week sprints.',
    methodology: [
      {
        num: '01',
        title: 'Product Scope & Technical Architecture',
        tags: 'Requirement Discovery • Database Modeling',
        desc: 'Define functional user stories, system boundaries, database schemas, and integration points with existing systems.'
      },
      {
        num: '02',
        title: 'UX/UI Wireframing & Design Tokens',
        tags: 'Figma Prototyping • Design System Creation',
        desc: 'Design intuitive, modern user interfaces and interactive prototypes validated with business stakeholders.'
      },
      {
        num: '03',
        title: 'Full-Stack Agile Sprints',
        tags: 'Two-Week Sprints • Clean-Code Standards',
        desc: 'Develop frontend components and backend APIs in iterative sprints with continuous code reviews and test coverage.'
      },
      {
        num: '04',
        title: 'Automated Testing & Security Hardening',
        tags: 'Penetration Testing • Performance Profiling',
        desc: 'Conduct automated regression tests, load testing, and security vulnerability scans to ensure rock-solid stability.'
      },
      {
        num: '05',
        title: 'Staging Validation & Cloud Deployment',
        tags: 'Docker Containers • Zero-Downtime Launch',
        desc: 'Deploy containerized applications to staging for final client sign-off before executing production cutovers.'
      },
      {
        num: '06',
        title: 'Continuous Monitoring & Feature Iteration',
        tags: '24/7 Telemetry • Performance Optimization',
        desc: 'Monitor application health, server latencies, and user behavior metrics, deploying feature updates seamlessly.'
      }
    ],
    whyPartnerTitle: 'Why Choose ZisanTech for App & Web Development?',
    whyPartnerSubtitle: 'Engineered for scalability, security, and outstanding user satisfaction.',
    whyCards: [
      { title: 'Sub-Second Performance', desc: 'Modern frontend and backend architectures optimized for lightning-fast speeds and high concurrent user volume.' },
      { title: 'Clean, Maintainable Code', desc: 'Strict coding conventions, type safety, and comprehensive documentation ensure your software is easily extendable.' },
      { title: 'Cloud-Native Reliability', desc: 'Auto-scaling cloud architectures that maintain 99.9% uptime during intense traffic spikes.' },
      { title: 'Full Intellectual Property Transfer', desc: 'You retain 100% ownership of all source code, design assets, and cloud deployment repositories.' }
    ]
  },
  // 14. SAP Custom Solutions
  'sap-custom-solutions': {
    id: 14,
    slug: 'sap-custom-solutions',
    category: 'SAP Services',
    title: 'SAP Custom Solutions',
    heroHeadline: 'Bespoke Enterprise Extensions',
    heroHighlight: 'Engineered for Unique Business Operations',
    heroTagline: 'Design and deploy clean-core ABAP extensions, modern SAP Fiori applications, and BTP cloud microservices tailored to your exact industry workflows without technical debt.',
    heroImage: '/sap_service_card_custom_fullhd.jpg',
    secondaryImage: '/exact_sap_consulting_hd.jpg',
    montageImage: '/photo-1542744173-8e7e53415bb0.jpg',
    sliderSlides: [
      {
        title: 'Modern SAP Fiori & UI5 Applications',
        subtitle: 'Consumer-Grade Experiences for High-Volume Enterprise Operations',
        image: '/sap_service_card_custom_fullhd.jpg',
        badge: 'User Experience',
        metric: '75%',
        metricLabel: 'Faster Task Completion',
        points: [
          'Responsive desktop, tablet, and mobile interfaces designed for shop floor and field teams',
          'Role-based dashboards eliminating cumbersome multi-screen SAP GUI transactions',
          'Offline synchronization capabilities for warehouse and remote plant environments'
        ]
      },
      {
        title: 'Side-by-Side BTP Cloud Extensions',
        subtitle: 'Decoupled Microservices Preserving S/4HANA Clean-Core Upgradeability',
        image: '/exact_sap_consulting_hd.jpg',
        badge: 'Clean Core',
        metric: '100%',
        metricLabel: 'Upgrade-Proof Architecture',
        points: [
          'Custom cloud applications built on SAP Business Technology Platform (BTP)',
          'Event-driven architecture connecting SAP core via standard REST and OData APIs',
          'Zero custom code modifications inside the ERP core, guaranteeing smooth release upgrades'
        ]
      },
      {
        title: 'ABAP RESTful Application Programming (RAP)',
        subtitle: 'High-Performance Backend Business Logic & CDS View Optimization',
        image: '/hero_sap_slide3.jpg',
        badge: 'Enterprise Backend',
        metric: '4x',
        metricLabel: 'Query Execution Speed',
        points: [
          'State-of-the-art RAP and BOPF framework implementations for robust transaction management',
          'Core Data Services (CDS) views pushing computational logic directly to HANA in-memory DB',
          'Automated unit testing suites enforcing strict SAP code inspector governance'
        ]
      }
    ],
    overviewSubheading: 'Custom Enterprise Development • Clean-Core Architecture • Process Optimization',
    overviewHeading: 'Tailored SAP Engineering Bridging Standard ERP with Specialized Realities',
    overviewLead: 'Standard ERP capabilities provide the baseline, but bespoke extensions create the competitive advantage that sets industry leaders apart.',
    overviewBody: [
      'Every enterprise possesses proprietary production algorithms, specialized supply chain arrangements, and unique operational logic that off-the-shelf software cannot adequately accommodate.',
      'ZisanTech Solutions engineers bespoke SAP Custom Solutions adhering strictly to SAP Clean-Core principles. By decoupling extensions through SAP BTP and leveraging ABAP RESTful programming, we deliver maximum operational agility while guaranteeing your core ERP remains 100% upgrade-ready.'
    ],
    pillarsHeading: 'Pillars of Clean-Core SAP Engineering',
    pillars: [
      {
        tag: 'Decoupled Core',
        title: 'Side-by-Side BTP Extensions',
        desc: 'Execute custom application logic on SAP BTP to preserve a clean core, preventing costly regression and technical debt during upgrades.'
      },
      {
        tag: 'Modern UI',
        title: 'Fiori User Experience',
        desc: 'Replace legacy transactional screens with streamlined, role-tailored SAP Fiori apps that boost employee speed and eliminate user error.'
      },
      {
        tag: 'In-Memory Speed',
        title: 'CDS & In-Memory Pushdown',
        desc: 'Leverage Core Data Services to push heavy business calculations directly to the SAP HANA database layer for instantaneous response.'
      },
      {
        tag: 'System Connectivity',
        title: 'API & Event Mesh Integration',
        desc: 'Connect custom SAP applications with legacy enterprise software and third-party SaaS platforms through secure, standardized APIs.'
      },
      {
        tag: 'Automated Logic',
        title: 'Custom Workflow Engines',
        desc: 'Automate multi-tier approval hierarchies, dynamic pricing matrices, and condition validations tailored to your operating rules.'
      },
      {
        tag: 'Code Governance',
        title: 'Automated Quality Benchmarks',
        desc: 'Enforce SAP ABAP Test Cockpit (ATC) governance and automated regression testing across all delivered software transports.'
      }
    ],
    capabilitiesHeading: 'Custom Development Capabilities & Implementation Scope',
    capabilities: [
      { name: 'Custom SAP Fiori / UI5 Responsive Web Apps', highlight: 'USER EXPERIENCE' },
      { name: 'Side-by-Side Cloud Extensions on SAP BTP', highlight: 'CLEAN CORE' },
      { name: 'ABAP RESTful Application Programming (RAP)', highlight: 'MODERN BACKEND' },
      { name: 'Core Data Services (CDS) Views & Analytics', highlight: 'IN-MEMORY SPEED' },
      { name: 'Proprietary Industry Calculation Engines', highlight: 'ALGORITHMIC LOGIC' },
      { name: 'Third-Party Webhook & Event Mesh Connectors', highlight: 'EVENT-DRIVEN' },
      { name: 'Custom Report Cockpits & Operational Dashboards', highlight: 'REAL-TIME DATA' },
      { name: 'Automated Regression Testing & ATC Compliance', highlight: 'ZERO DEBT' }
    ],
    deliverables: [
      'Functional & Technical Design Blueprint (FSD/TSD)',
      'Clean-Core Versioned Code Repository & Transports',
      'Comprehensive UAT Sign-Off & Test Runbooks',
      'Administrator Handover & API Contract Specifications'
    ],
    methodologyHeading: 'Custom Solution Development Lifecycle',
    methodologySubheading: 'Agile sprint-driven engineering ensuring rapid prototyping, disciplined testing, and zero business interruption.',
    methodology: [
      {
        num: '01',
        title: 'Business Requirement Scoping',
        tags: 'Requirement Matrix • Fit-Gap Audit',
        desc: 'Detailed discovery sessions with process owners to define exact input parameters, business logic rules, and user journey personas.'
      },
      {
        num: '02',
        title: 'Clean-Core Architecture Design',
        tags: 'BTP vs On-Stack • Data Modeling',
        desc: 'Architecting the optimal extension pattern (in-app vs side-by-side) with strict adherence to SAP S/4HANA clean-core principles.'
      },
      {
        num: '03',
        title: 'Agile Iterative Development',
        tags: 'RAP Backend • Fiori UI5 Frontend',
        desc: 'Sprint-based engineering of backend services, CDS views, and responsive user interfaces with continuous stakeholder demonstrations.'
      },
      {
        num: '04',
        title: 'Integration & Performance Tuning',
        tags: 'HANA Optimization • API Security',
        desc: 'Rigorous query profiling, SQL trace diagnostics, and stress testing under peak transaction loads to ensure sub-second response times.'
      },
      {
        num: '05',
        title: 'Comprehensive UAT & Quality Audit',
        tags: 'Test Automation • ATC Code Check',
        desc: 'Formal user acceptance validation covering boundary conditions, automated security checks, and formal stakeholder sign-offs.'
      },
      {
        num: '06',
        title: 'Deployment & Hypercare Support',
        tags: 'Transport Management • SLA Warranty',
        desc: 'Production cutover execution followed by dedicated hypercare stabilization and operational knowledge transfer to internal IT teams.'
      }
    ],
    whyPartnerTitle: 'Why Choose ZisanTech for SAP Custom Solutions?',
    whyPartnerSubtitle: 'Decades of combined engineering excellence delivering clean-core custom innovations that evolve with your enterprise.',
    whyCards: [
      {
        title: 'Clean-Core Architecture',
        desc: 'Upgrade-safe extensions that preserve SAP standard functionality and ensure future S/4HANA release compatibility without rework.'
      },
      {
        title: 'Agile Delivery Speed',
        desc: 'Rapid sprint-based prototyping delivering functional enterprise applications in weeks rather than months.'
      },
      {
        title: 'Intuitive User Experience',
        desc: 'Modern consumer-grade SAP Fiori interfaces designed to eliminate user training curves and boost workforce data entry accuracy.'
      },
      {
        title: 'Zero Technical Debt',
        desc: 'Stringent code reviews, automated unit tests, and comprehensive documentation guaranteeing maintainable institutional software.'
      }
    ]
  },

  // 15. SAP Consulting
  'sap-consulting': {
    id: 15,
    slug: 'sap-consulting',
    category: 'SAP Services',
    title: 'SAP Consulting',
    heroHeadline: 'Strategic Enterprise SAP Advisory',
    heroHighlight: 'Aligning Technology with Growth Objectives',
    heroTagline: 'End-to-end strategic guidance from seasoned enterprise architects—covering business case modeling, cloud migration strategy, and process optimization.',
    heroImage: '/sap_service_card_consulting_fullhd.jpg',
    secondaryImage: '/exact_sap_consulting_hd.jpg',
    montageImage: '/photo-1542744173-8e7e53415bb0.jpg',
    sliderSlides: [
      {
        title: 'S/4HANA Business Case & Value Realization',
        subtitle: 'Objective Financial Modeling & Strategic ROI Justification',
        image: '/sap_service_card_consulting_fullhd.jpg',
        badge: 'Executive Advisory',
        metric: '35%',
        metricLabel: 'Average TCO Reduction',
        points: [
          'Detailed assessment of current ECC landscape and operational pain points',
          'Quantified business case analysis mapping efficiency gains to bottom-line ROI',
          'Multi-year capital budgeting and software license optimization guidance'
        ]
      },
      {
        title: 'Core Process Harmonization & Benchmarking',
        subtitle: 'Eliminating Operational Silos Across Multi-Entity Subsidiaries',
        image: '/exact_sap_consulting_hd.jpg',
        badge: 'Process Excellence',
        metric: '90%',
        metricLabel: 'Standard Template Alignment',
        points: [
          'Industry benchmark comparisons across procurement, manufacturing, and finance',
          'Consolidation of divergent entity charts of accounts and regional master data',
          'Elimination of redundant non-standard custom developments and offline spreadsheets'
        ]
      },
      {
        title: 'Independent Quality Assurance & Governance',
        subtitle: 'De-Risking Complex Multi-Vendor ERP Implementation Programs',
        image: '/hero_sap_slide1.jpg',
        badge: 'Program Governance',
        metric: 'Zero',
        metricLabel: 'Unplanned Project Overruns',
        points: [
          'Third-party milestone sign-off validation and deliverable audit review',
          'Architectural gatekeeper oversight preventing scope creep and core modification',
          'Executive steering committee reporting with objective project health telemetrics'
        ]
      }
    ],
    overviewSubheading: 'Executive Advisory • Digital Strategy • S/4HANA Transformation',
    overviewHeading: 'Transforming Legacy Operations into High-Performance Intelligent Enterprises',
    overviewLead: 'Technology alone does not drive transformation; disciplined strategy, process alignment, and experienced governance turn ERP investments into enterprise value.',
    overviewBody: [
      'Enterprise digital modernization requires clear executive foresight to navigate trade-offs between speed, cost, and long-term architectural agility.',
      'ZisanTech Solutions partners with leadership teams as a trusted strategic advisor. Our senior principal consultants bring decades of hands-on experience guiding global enterprises through complex ERP transitions, cloud adoption journeys, and process optimization initiatives.'
    ],
    pillarsHeading: 'Pillars of Enterprise SAP Strategic Advisory',
    pillars: [
      {
        tag: 'Business Strategy',
        title: 'Value Realization Roadmap',
        desc: 'Formulate quantifiable transformation roadmaps directly tied to key operational KPIs, cash flow improvements, and strategic corporate objectives.'
      },
      {
        tag: 'Architecture',
        title: 'Target Architecture Design',
        desc: 'Design scalable, future-ready enterprise architectures balancing public cloud agility, private cloud security, and clean-core modularity.'
      },
      {
        tag: 'Operational Efficiency',
        title: 'Process Re-Engineering',
        desc: 'Streamline end-to-end business workflows to eliminate redundancies, reduce cycle times, and unlock cross-departmental automation.'
      },
      {
        tag: 'Program Oversight',
        title: 'Independent Governance',
        desc: 'Provide objective project audit and quality gate assurance to keep multi-vendor transformation programs on time and on budget.'
      },
      {
        tag: 'Licensing & Cloud',
        title: 'TCO & License Optimization',
        desc: 'Optimize SAP software contracts, Digital Access licensing, and hyperscaler cloud infrastructure to significantly lower operating costs.'
      },
      {
        tag: 'Workforce Enablement',
        title: 'Executive Change Management',
        desc: 'Align organizational culture, leadership stakeholders, and operational workforce to ensure rapid adoption of new digital tools.'
      }
    ],
    capabilitiesHeading: 'Consulting Advisory Capabilities & Practice Scope',
    capabilities: [
      { name: 'Enterprise Digital Maturity & IT Health Audits', highlight: 'DIAGNOSTICS' },
      { name: 'S/4HANA Business Case & ROI Justification', highlight: 'FINANCIAL MODEL' },
      { name: 'Target Operating Model (TOM) Architecture', highlight: 'ARCHITECTURE' },
      { name: 'Cloud Roadmap Advisory (Public vs Private)', highlight: 'CLOUD STRATEGY' },
      { name: 'Process Harmonization & Template Governance', highlight: 'BEST PRACTICES' },
      { name: 'Independent Quality Assurance & Gate Audits', highlight: 'DE-RISKING' },
      { name: 'SAP License & Hyperscaler Infrastructure Sizing', highlight: 'TCO OPTIMIZATION' },
      { name: 'Executive Steering & Change Enablement', highlight: 'ORGANIZATIONAL FIT' }
    ],
    deliverables: [
      'Digital Transformation Strategic Roadmap & Target Architecture',
      'Process Benchmarking Scorecard & ROI Justification Model',
      'Infrastructure Sizing & Hyperscaler Cloud TCO Analysis',
      'Program Governance Protocols & Quality Sign-Off Rubrics'
    ],
    methodologyHeading: 'Strategic Consulting Framework',
    methodologySubheading: 'Structured advisory lifecycle engineered to build consensus, establish governance, and guarantee strategic ROI.',
    methodology: [
      {
        num: '01',
        title: 'Landscape Assessment & Baseline Audit',
        tags: 'Executive Interviews • IT Health Check',
        desc: 'Comprehensive diagnostic evaluation of existing ERP systems, process inefficiencies, and organizational strategic ambitions.'
      },
      {
        num: '02',
        title: 'Strategic Fit-Gap & ROI Modeling',
        tags: 'Cost-Benefit Matrix • Risk Profile',
        desc: 'Quantifying potential business value, license optimization options, and operational cost reductions across transformation pathways.'
      },
      {
        num: '03',
        title: 'Target Architecture & Roadmap Design',
        tags: 'Clean Core • Cloud Strategy',
        desc: 'Defining future-state system architecture, hyperscaler hosting model, and phased deployment milestones with zero business disruption.'
      },
      {
        num: '04',
        title: 'Implementation Governance Setup',
        tags: 'PMO Charter • Quality Gates',
        desc: 'Establishing formal steering committees, change management charters, and quality assurance gates to guide project execution.'
      },
      {
        num: '05',
        title: 'Execution Oversight & Quality Audits',
        tags: 'Milestone Review • Risk Mitigation',
        desc: 'Continuous independent review of implementation deliverables, cutover readiness checklists, and vendor performance metrics.'
      },
      {
        num: '06',
        title: 'Value Realization & Continuous Review',
        tags: 'Post-Launch Audit • KPI Tracking',
        desc: 'Measuring post-go-live operational metrics against the original business case to verify bottom-line financial and operational gains.'
      }
    ],
    whyPartnerTitle: 'Why Choose ZisanTech for SAP Consulting?',
    whyPartnerSubtitle: 'Senior principal consultants with proven enterprise track records delivering actionable strategies, not generic slide decks.',
    whyCards: [
      {
        title: 'Senior Practitioner-Led',
        desc: 'Engage directly with principal consultants possessing 15+ years of hands-on enterprise implementation and architecture experience.'
      },
      {
        title: 'Vendor-Neutral Objectivity',
        desc: 'Unbiased recommendations focused exclusively on what delivers the lowest TCO and highest return for your specific business.'
      },
      {
        title: 'Holistic Transformation',
        desc: 'Harmonizing people, processes, and technology to guarantee institutional adoption and sustainable long-term performance.'
      },
      {
        title: 'Proven Business Outcomes',
        desc: 'Documented track record helping enterprises reduce operational overheads, accelerate closing cycles, and de-risk major cutovers.'
      }
    ]
  },

  // 16. SAP E-Invoice & E-Way Bill
  'sap-e-invoice-eway-bill': {
    id: 16,
    slug: 'sap-e-invoice-eway-bill',
    category: 'SAP Services',
    title: 'SAP E-Invoice & E-Way Bill',
    heroHeadline: 'Automated Statutory GST Compliance',
    heroHighlight: 'Direct Real-Time Government Portal Integration',
    heroTagline: 'Eliminate manual tax compliance with our pre-built, secure connector communicating natively between SAP ERP and government IRP/NIC portals for instant IRN, QR code, and E-Way bill generation.',
    heroImage: '/sap_service_card_einvoice_fullhd.jpg',
    secondaryImage: '/photo-1542744173-8e7e53415bb0.jpg',
    montageImage: '/exact_sap_consulting_hd.jpg',
    sliderSlides: [
      {
        title: 'Real-Time Direct API Integration',
        subtitle: 'Sub-Second Handshake with Government Invoice Registration Portals (IRP)',
        image: '/sap_service_card_einvoice_fullhd.jpg',
        badge: 'Instant Compliance',
        metric: '< 1 Sec',
        metricLabel: 'IRN Generation Latency',
        points: [
          'Direct machine-to-machine REST API connectivity without third-party middleman clouds',
          'Automatic generation of 64-character Invoice Reference Numbers (IRN) upon invoice save',
          'Embedded digitally signed B2B QR code placed automatically on standard invoice layouts'
        ]
      },
      {
        title: 'Single-Click E-Way Bill Automation',
        subtitle: 'Synchronized Logistics Documentation for Zero Dispatch Delays',
        image: '/photo-1542744173-8e7e53415bb0.jpg',
        badge: 'Logistics Continuity',
        metric: '100%',
        metricLabel: 'Zero Vehicle Detention',
        points: [
          'Automatic generation of Part-A and Part-B E-Way bills directly from SAP delivery orders',
          'Seamless vehicle number updation and transporter code mapping for multi-modal transit',
          'Instant cancellation and extension handling managed directly within SAP transactions'
        ]
      },
      {
        title: 'Enterprise Reconciliation & Error Cockpit',
        subtitle: 'Automated Data Validation and Zero-Discrepancy Audit Trails',
        image: '/exact_sap_consulting_hd.jpg',
        badge: 'Audit Defense',
        metric: 'Zero',
        metricLabel: 'Statutory Mismatch Penalties',
        points: [
          'Pre-validation algorithms identifying GSTIN errors, HSN code mismatches, and rounding gaps',
          'User-friendly management cockpit for bulk status tracking and one-click error correction',
          'Automated data reconciliation matching SAP sales registers with official GSTR-1 filings'
        ]
      }
    ],
    overviewSubheading: 'Statutory Automation • Real-Time IRP Sync • Zero Audit Discrepancies',
    overviewHeading: 'Government-Compliant E-Invoicing and E-Way Bill Operations Embedded in SAP',
    overviewLead: 'Manual data entry into tax portals creates bottlenecks, introduces human error, and exposes enterprises to heavy non-compliance penalties.',
    overviewBody: [
      'Regulatory authorities mandate strict compliance standards for high-turnover enterprises, requiring real-time registration of B2B transactions with official government gateways.',
      'ZisanTech Solutions delivers a robust, enterprise SAP integration solution that embeds statutory compliance directly into your daily transactional workflow. Our connector operates seamlessly inside SAP ECC 6.0 and S/4HANA, executing instantaneous API exchanges with the GST Invoice Registration Portal (IRP) and NIC without altering standard sales billing processes.'
    ],
    pillarsHeading: 'Pillars of Automated Statutory Tax Compliance',
    pillars: [
      {
        tag: 'Instant Handshake',
        title: 'Direct Government API Sync',
        desc: 'Connect directly to official GSTN IRP gateways (NIC, ClearTax, etc.) without intermediate data exposure or latency.'
      },
      {
        tag: 'QR Code Printing',
        title: 'Automated Invoice Layouts',
        desc: 'Dynamically print digitally signed QR codes, IRNs, and acknowledgment numbers on standard SAP SmartForms and Adobe Forms.'
      },
      {
        tag: 'Supply Chain Sync',
        title: 'Integrated E-Way Bill Cockpit',
        desc: 'Generate, update vehicle numbers, and extend E-Way Bills directly from SAP outbound delivery documents with zero dispatch delays.'
      },
      {
        tag: 'Data Integrity',
        title: 'Pre-Submission Validation',
        desc: 'Built-in validation rules verify GSTIN checksums, HSN codes, and tax calculation splits before submission to eliminate gateway rejections.'
      },
      {
        tag: 'High Throughput',
        title: 'Bulk Processing Engine',
        desc: 'Tested to process thousands of multi-plant invoices concurrently during peak month-end billing hours without system degradation.'
      },
      {
        tag: 'Security & Audit',
        title: '100% Audit-Trail Archival',
        desc: 'Securely archive signed JSON payloads, IRNs, and response logs inside SAP for complete regulatory inspection defense.'
      }
    ],
    capabilitiesHeading: 'E-Invoicing Capabilities & Technical Scope',
    capabilities: [
      { name: 'Direct REST API Integration with Government IRP', highlight: 'OFFICIAL GATEWAY' },
      { name: 'Automated IRN & Signed QR Code Generation', highlight: 'INSTANT SYNC' },
      { name: 'Integrated E-Way Bill Part-A & Part-B Creation', highlight: 'LOGISTICS AUTO' },
      { name: 'Pre-Validation Engine for GSTIN & HSN Codes', highlight: 'ERROR PREVENTION' },
      { name: 'SmartForm & Adobe Form Print Program Upgrades', highlight: 'PRINT READY' },
      { name: 'Error Management Cockpit & Auto-Resubmission', highlight: 'EXCEPTION DESK' },
      { name: 'Compatible with SAP ECC 6.0, S/4HANA & B1', highlight: 'ERP VERSATILE' },
      { name: 'Auto-Reconciliation with GSTR-1 & Sales Ledger', highlight: 'AUDIT RECON' }
    ],
    deliverables: [
      'Pre-Configured SAP Transport Packages & Custom Tables',
      'Invoice Print Layout Enhancements (SmartForms / Adobe Forms)',
      'Direct Gateway Encryption & API Key Security Setup',
      'Standard Operating Procedure (SOP) & User Exception Runbooks'
    ],
    methodologyHeading: 'E-Invoicing Implementation Lifecycle',
    methodologySubheading: 'Rapid turnkey deployment delivering fully functional, government-validated compliance in as little as 10 to 14 days.',
    methodology: [
      {
        num: '01',
        title: 'Tax Master & Process Discovery',
        tags: 'HSN Audit • Tax Code Mapping',
        desc: 'Reviewing current billing document types, tax determination procedures, and master data consistency across company codes.'
      },
      {
        num: '02',
        title: 'SAP Transport Import & Configuration',
        tags: 'Custom Tables • API Setup',
        desc: 'Importing standardized transport requests, configuring connection credentials, and establishing encryption certificates.'
      },
      {
        num: '03',
        title: 'Print Form & QR Code Enhancement',
        tags: 'Adobe Forms • SmartForms',
        desc: 'Updating tax invoice layouts to dynamically render government-signed 2D QR codes, IRN hashes, and statutory disclaimers.'
      },
      {
        num: '04',
        title: 'Sandbox Testing on Government IRP',
        tags: 'Test Invoices • Edge Cases',
        desc: 'Conducting comprehensive testing against official IRP sandbox portals covering B2B invoices, credit notes, and export billing.'
      },
      {
        num: '05',
        title: 'Production Cutover & Portal Go-Live',
        tags: 'Production APIs • Live Testing',
        desc: 'Transitioning to live production IRP credentials with real-time verification of generated IRNs and E-Way bills.'
      },
      {
        num: '06',
        title: 'Post-Go-Live Support & Patch Updates',
        tags: 'Hypercare • Regulatory Tracking',
        desc: 'Continuous monitoring during initial billing cycles with guaranteed SLA updates whenever government GST rules change.'
      }
    ],
    whyPartnerTitle: 'Why Choose ZisanTech for SAP E-Invoicing?',
    whyPartnerSubtitle: 'Battle-tested, turnkey tax compliance trusted by high-volume enterprises across India.',
    whyCards: [
      {
        title: 'Native In-SAP Integration',
        desc: 'Operates 100% inside your SAP environment without routing sensitive pricing data through third-party cloud servers.'
      },
      {
        title: 'Sub-Second Response',
        desc: 'High-performance direct API connection generating IRNs and QR codes in under a second during standard billing runs.'
      },
      {
        title: 'Zero Dispatch Delays',
        desc: 'Simultaneous generation of E-Way bills with invoices guarantees transport vehicles leave operating plants without delay.'
      },
      {
        title: 'Continuous Statutory Warranty',
        desc: 'Dedicated regulatory tracking ensuring your SAP system automatically updates whenever the GST Council announces new mandates.'
      }
    ]
  },

};
