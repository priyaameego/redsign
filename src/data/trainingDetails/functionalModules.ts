import { DetailedTrainingModule } from './types';

export const FUNCTIONAL_MODULES: Record<string, DetailedTrainingModule> = {
  // 1. SAP SD (Sales and Distribution)
  'sap-sd': {
    id: 1,
    code: 'SAP-SD',
    slug: 'sap-sd',
    title: 'SAP SD Training',
    fullName: 'SAP Sales and Distribution in S/4HANA',
    type: 'functional',
    category: 'Functional Modules',
    heroBadge: 'Enterprise Order-to-Cash (O2C) Mastery',
    heroHeadline: 'Architect Global Commercial Channels with',
    heroHighlight: 'SAP SD & S/4HANA Sales Execution',
    heroTagline: 'Master end-to-end commercial operations: pricing procedures, credit governance, dispatch logistics, billing automation, and S/4HANA Business Partner integration.',
    heroImage: '/hero_sap_cinema1.jpg',
    secondaryImage: '/exact_sap_consulting_hd.jpg',
    featureImage: '/hero_sap_slide2.jpg',
    accentColor: '#087FE5',
    accentGradient: 'from-[#087FE5] via-[#0664B5] to-[#043E7A]',
    workflowTitle: 'End-to-End Order-to-Cash (O2C) Business Flow',
    workflowSteps: [
      {
            "stepNum": "01",
            "title": "Inquiry & Quotation",
            "subtitle": "Commercial Pipeline",
            "desc": "Capture customer inquiries, simulate price discounts, calculate profit margins, and formalize binding quotation documents."
      },
      {
            "stepNum": "02",
            "title": "Sales Order & Credit Check",
            "subtitle": "Risk & Availability",
            "desc": "Validate Business Partner master records, trigger real-time ATP checks, and enforce automated credit limits via S/4HANA Credit Management."
      },
      {
            "stepNum": "03",
            "title": "Shipping & Delivery",
            "subtitle": "Fulfillment & Logistics",
            "desc": "Generate outbound delivery, execute warehouse picking, pack into Handling Units (HUs), and confirm Post Goods Issue (PGI)."
      },
      {
            "stepNum": "04",
            "title": "Billing & Accounting",
            "subtitle": "Revenue Recognition",
            "desc": "Automate billing document generation, calculate statutory GST/VAT, and post instantly to General Ledger via VKOA revenue account determination."
      }
],
    duration: '10 Weeks (Weekend & Weekday Batches)',
    format: 'Live Interactive Mentor-Led + 24/7 Dedicated S/4HANA Sandbox',
    prerequisites: 'Basic understanding of sales, commerce, or general business concepts. No prior coding required.',
    certificationTrack: 'SAP Enterprise Application Associate - Sales and Distribution in SAP S/4HANA',
    certificationCode: 'C_TS462_2023',
    rating: '4.95 / 5.0',
    enrolledStudents: '1,420+ Alumni Trained',
    metrics: [
      { val: '100%', label: 'Hands-on SPRO Configuration' },
      { val: '24/7', label: 'Dedicated S/4HANA Lab Server' },
      { val: '2', label: 'End-to-End Enterprise Projects' },
      { val: '98%', label: 'Placement & Industry Readiness' }
    ],
    overviewHeading: 'Strategic Commerce Orchestration Across Modern Global Enterprises',
    overviewSubheading: 'Order-to-Cash • Pricing Engine • Shipping Execution • Financial Settlement',
    overviewLead: 'Master end-to-end Order-to-Cash (O2C) lifecycles, automated pricing, and S/4HANA financial settlement.',
    overviewParagraphs: [
      'At ZisanTech Solutions, our SAP SD curriculum is engineered by veteran solution architects who have led global rollouts for Fortune 500 manufacturers and retail distributors. Rather than rote transaction execution, we train you in real architectural decision-making: how to configure multi-tier enterprise sales structures, design complex condition techniques for statutory pricing, and implement robust credit management.',
      'You will work directly inside live S/4HANA environments implementing modern Business Partner (BP) models, automated ATP (Available-to-Promise) checks, dropshipping scenarios, consignment pipelines, and seamless integration touchpoints with SAP MM, PP, and FICO.',
      'Through structured weekly milestones and real-world project scenarios, you will graduate with the muscle memory and analytical confidence demanded by top-tier consulting firms and global system integrators.'
    ],
    keyHighlights: [
      { title: 'Full O2C Process Cycle', desc: 'Configure end-to-end inquiry, quotation, standard sales order, outbound delivery, picking, PGI, and invoice generation.', icon: 'Workflow' },
      { title: 'Condition Technique & Pricing', desc: 'Master condition tables, access sequences, condition types, calculation types, and 16-step pricing procedure determination.', icon: 'Cpu' },
      { title: 'Shipping & Transportation', desc: 'Implement delivery document types, route determination, shipping points, staging bays, and handling units.', icon: 'Layers' },
      { title: 'Credit Management & BP', desc: 'Govern credit limit checks, automated risk classifications, and S/4HANA centralized Business Partner master records.', icon: 'ShieldCheck' }
    ],
    architecturePillars: [
      { tag: 'Enterprise Sales Hierarchy', title: 'Sales Organization, Channel & Division', desc: 'Set up company codes, sales areas, distribution networks, and assign plant storage locations to unify multi-subsidiary sales.' },
      { tag: 'Master Data Governance', title: 'Customer Business Partner & Material Masters', desc: 'Configure account groups, field status controls, customer-material info records (CMIR), and cross-system partner functions.' },
      { tag: 'Logistics Integration', title: 'Automated Shipping & Delivery Schedules', desc: 'Design backwards/forwards scheduling, transfer of requirements (TOR), backward ATP checks, and Goods Issue accounting postings.' },
      { tag: 'Financial Reconciliation', title: 'Billing Engines & Revenue Account Determination', desc: 'Configure billing types, cancellation documents, credit/debit memos, rebate agreements, and automated GL account posting via VKOA.' }
    ],
    curriculum: [
      {
        phaseNum: 'Phase 01',
        duration: 'Weeks 1 - 2',
        title: 'Enterprise Architecture & S/4HANA Master Data',
        description: 'Establish the foundation of SAP SD by designing multi-entity enterprise structures and centralized Business Partner data models.',
        topics: [
          'Overview of ERP, S/4HANA Enterprise Management & Sales Modules',
          'SPRO: Defining & Assigning Sales Organizations, Distribution Channels, Divisions, and Sales Areas',
          'Creating & Assigning Sales Offices, Sales Groups, and Shipping Points',
          'Customer-Vendor Integration (CVI): Business Partner (BP) Roles (FLCU00, FLCU01)',
          'Material Master (MM01) Sales Views, Tax Classifications, and Item Category Groups',
          'Customer-Material Information Record (VD51) and Partner Determination Procedures'
        ],
        handsOnLab: 'Lab: Configure a multi-tier enterprise sales structure for an automotive parts manufacturer with domestic and export channels.'
      },
      {
        phaseNum: 'Phase 02',
        duration: 'Weeks 3 - 4',
        title: 'Order Processing & Document Control Framework',
        description: 'Dive deep into sales order architecture, document type controls, item category determinations, and schedule lines.',
        topics: [
          'Sales Document Header Controls (VOV8): Number Ranges, Incompletion Logs, and Reference Controls',
          'Item Category Determination (VOV4) and Controls (VOV7): Billing Relevance, Pricing Flags, and Text Determination',
          'Schedule Line Category Determination (VOV5) and Movement Type Postings (VOV6)',
          'Inquiry (VA11), Quotation (VA21), and Standard Order (VA01) Execution',
          'Free-of-Charge Deliveries, Subsequent Deliveries, and Return Orders (VA01)',
          'Special Sales Workflows: Consignment Fill-Up, Issue, Pick-Up, and Returns'
        ],
        handsOnLab: 'Lab: Build custom sales document types with tailored incompletion procedures and automated item category determinations.'
      },
      {
        phaseNum: 'Phase 03',
        duration: 'Weeks 5 - 6',
        title: 'The Enterprise Pricing Engine (Condition Technique)',
        description: 'Master the most critical configuration domain in SAP SD: condition tables, access sequences, condition types, and calculation formulas.',
        topics: [
          'Architecture of the Condition Technique in S/4HANA',
          'Creating Condition Tables (V/03, V/04, V/05) and Field Catalogs',
          'Designing Access Sequences (V/07) with Exclusive and Non-Exclusive Search Logic',
          'Configuring Condition Types (V/06): Base Prices (PR00), Discounts (K004/K007), Freight (KF00), and Taxes (MWST)',
          'Building Custom Pricing Procedures (V/08): Calculation Types, Account Keys, Subtotals, and Requirements',
          'Condition Records Maintenance (VK11), Validity Dates, and Scale Pricing (Quantity/Value)'
        ],
        handsOnLab: 'Lab: Engineer a 14-condition pricing schema for a wholesale electronics distributor with volume rebates and regional GST calculations.'
      },
      {
        phaseNum: 'Phase 04',
        duration: 'Weeks 7 - 8',
        title: 'Shipping Execution, ATP & Handling Unit Logistics',
        description: 'Bridge sales commitments with physical fulfillment: shipping point determination, picking, packing, and Post Goods Issue (PGI).',
        topics: [
          'Delivery Document Types (VL01N, VL02N) and Item Category Configuration (OVLP)',
          'Shipping Point Determination based on Shipping Conditions, Loading Groups, and Delivering Plants',
          'Route Determination: Departure Zone, Shipping Conditions, Transit Times, and Factory Calendars',
          'Picking Strategies, Transfer Orders, and Warehouse Management Integration touchpoints',
          'Packing Logic, Handling Unit Management (HUM), and Shipping Labels',
          'Post Goods Issue (PGI) Financial & Material Impact (COGS vs Inventory Valuation)'
        ],
        handsOnLab: 'Lab: Execute complete outbound fulfillment with batch picking, packing, and automated goods issue for perishable FMCG inventory.'
      },
      {
        phaseNum: 'Phase 05',
        duration: 'Weeks 9 - 10',
        title: 'Billing Automation, Revenue Account Determination & S/4HANA Cutover',
        description: 'Complete the revenue lifecycle: invoice generation, credit management, revenue account assignment (VKOA), and go-live preparation.',
        topics: [
          'Billing Document Types (VF01, VF02): Invoices, Proforma Invoices, Credit Memos, and Debit Memos',
          'Billing Plans: Milestone Billing (Project Systems) and Periodic Billing (Subscriptions)',
          'Revenue Account Determination (VKOA): Chart of Accounts, Sales Org, Account Keys, and GL Postings',
          'Credit Management: Static vs Dynamic Credit Checks, Risk Categories, and Credit Release (VKM3)',
          'S/4HANA Clean-Core Sales Innovations: Advanced ATP (aATP), Settlement Management, and Fiori Apps',
          'Cutover Strategy: Master Data Migration (LTMC / Migration Cockpit) and Open Sales Order Migration'
        ],
        handsOnLab: 'Lab: Final Capstone Project: End-to-end blueprinting, SPRO configuration, master data upload, and cutover testing for an MNC retail client.'
      }
    ],
    realWorldProjects: [
      {
        title: 'Global FMCG Order-to-Cash Overhaul',
        industry: 'Consumer Goods & Retail Distribution',
        challenge: 'A multinational beverage corporation required standardized pricing across 4 regional operating companies with tiered wholesale discounts and automated GST reconciliation.',
        solution: 'Designed a unified S/4HANA sales enterprise structure, custom pricing procedures with 12 condition types, automated route determination, and real-time inventory ATP checks across 6 central warehouses.',
        deliverables: ['SPRO Configuration Documentation', 'Business Blueprint Sign-off', 'Custom Pricing Matrix', 'User Acceptance Test Scripts (UAT)']
      },
      {
        title: 'Industrial Machinery Spares & Warranty Service Portal',
        industry: 'Heavy Engineering & Capital Equipment',
        challenge: 'Client faced high delivery delays and invoice discrepancies due to manual warranty checks and fragmented customer credit validation across global branches.',
        solution: 'Implemented automated Business Partner credit checks, consignment inventory workflows, milestone billing schedules, and automated VKOA GL account integration.',
        deliverables: ['Credit Management Matrix', 'Consignment Workflow Blueprint', 'VKOA Account Mapping Sheet', 'Go-Live Cutover Plan']
      }
    ],
    careerOutcomes: [
      { role: 'SAP SD Functional Consultant', experience: '0 - 3 Years', salary: '₹7.5 - ₹12.5 LPA' },
      { role: 'Senior S/4HANA O2C Specialist', experience: '3 - 6 Years', salary: '₹14.0 - ₹22.0 LPA' },
      { role: 'Enterprise SAP Solution Architect', experience: '7+ Years', salary: '₹26.0 - ₹38.0+ LPA' }
    ],
    targetAudience: [
      'Graduates in Engineering, Commerce, or Business Administration targeting high-paying IT consulting careers',
      'Sales, marketing, and logistics professionals seeking a lucrative transition to enterprise SAP consulting',
      'Junior functional analysts and end-users looking to master configuration and achieve global SAP certification'
    ],
    faqs: [
      {
        question: 'Do I need prior programming or coding knowledge to learn SAP SD?',
        answer: 'No. SAP SD is a functional consulting module that focuses on business process analysis, requirement gathering, and SPRO configuration. You will work with transactions, data schemas, and business workflows rather than writing code.'
      },
      {
        question: 'What version of SAP is used in the training lab?',
        answer: 'You will practice inside a dedicated SAP S/4HANA 2023 / 2022 private sandbox with Fiori UX access, ensuring you are proficient in modern clean-core enterprise standards.'
      },
      {
        question: 'Will ZisanTech assist with global SAP certification?',
        answer: 'Yes. The curriculum includes specialized preparation for C_TS462_2023 (SAP Enterprise Application Associate - Sales and Distribution in SAP S/4HANA), including official question dumps, mock exams, and topic weightage breakdowns.'
      },
      {
        question: 'What placement and interview preparation is provided?',
        answer: 'We conduct 1-on-1 resume reviews, enterprise mock interviews with active SAP consultants, scenario-based case study assessments, and referral connections across our consulting client network.'
      }
    ]
  },

  // 2. SAP MM (Materials Management)
  'sap-mm': {
    id: 2,
    code: 'SAP-MM',
    slug: 'sap-mm',
    title: 'SAP MM Training',
    fullName: 'SAP Materials Management & Sourcing in S/4HANA',
    type: 'functional',
    category: 'Functional Modules',
    heroBadge: 'Enterprise Procure-to-Pay (P2P) Mastery',
    heroHeadline: 'Govern Global Sourcing & Supply Networks with',
    heroHighlight: 'SAP MM & S/4HANA Procurement',
    heroTagline: 'Master Procure-to-Pay (P2P), inventory logistics, release strategies with classification, valuation split, automatic account determination (OBYC), and vendor evaluations.',
    heroImage: '/hero_sap_consulting_1.jpg',
    secondaryImage: '/cand_office_wide.jpg',
    featureImage: '/hero_sap_boardroom_luxury.jpg',
    accentColor: '#059669',
    accentGradient: 'from-[#059669] via-[#047857] to-[#064e3b]',
    workflowTitle: 'End-to-End Procure-to-Pay (P2P) Lifecycle',
    workflowSteps: [
      {
            "stepNum": "01",
            "title": "Purchase Requisition",
            "subtitle": "Requirement Planning",
            "desc": "Automated PR generation via MRP Live runs or department manual requisitions with account assignment categories."
      },
      {
            "stepNum": "02",
            "title": "Vendor Selection & PO",
            "subtitle": "Sourcing & Release",
            "desc": "Issue RFQs, evaluate vendor quotations, create Purchase Orders, and route through multi-level managerial release strategies."
      },
      {
            "stepNum": "03",
            "title": "Goods Receipt (MIGO)",
            "subtitle": "Physical Inventory",
            "desc": "Execute movement type 101, trigger sample inspection lots, record storage bin placements, and generate material valuation documents."
      },
      {
            "stepNum": "04",
            "title": "Invoice Verification (MIRO)",
            "subtitle": "Financial Settlement",
            "desc": "Perform 3-way matching between PO, GR, and supplier invoice, verify variance thresholds, and post to Accounts Payable via OBYC."
      }
],
    duration: '10 Weeks (Weekend & Weekday Batches)',
    format: 'Live Interactive Mentor-Led + 24/7 Dedicated S/4HANA Sandbox',
    prerequisites: 'Basic familiarity with procurement, inventory, supply chain, or engineering operations.',
    certificationTrack: 'SAP Enterprise Application Associate - Sourcing and Procurement in SAP S/4HANA',
    certificationCode: 'C_TS452_2022',
    rating: '4.96 / 5.0',
    enrolledStudents: '1,680+ Alumni Trained',
    metrics: [
      { val: '100%', label: 'Hands-on SPRO Configuration' },
      { val: '24/7', label: 'Dedicated S/4HANA Lab Server' },
      { val: '2', label: 'End-to-End Enterprise Projects' },
      { val: '98%', label: 'Placement & Industry Readiness' }
    ],
    overviewHeading: 'Strategic Sourcing & Lean Supply Chain Architecture',
    overviewSubheading: 'Procure-to-Pay • Inventory Valuation • Release Strategy • Logistics Invoice Verification',
    overviewLead: 'SAP Materials Management (MM) governs the enterprise supply pipeline, orchestrating raw material acquisitions, vendor negotiations, inventory movements, and logistics invoice clearances across global plants.',
    overviewParagraphs: [
      'Modern enterprise supply chains demand real-time visibility, automated vendor evaluation, and lean inventory control. The SAP MM module forms the bedrock of supply chain operations in manufacturing, healthcare, retail, and energy sectors worldwide.',
      'Our mentor-led program immerses you into the authentic role of a Lead SAP MM Consultant. You will learn to construct complex multi-plant procurement hierarchies, manage S/4HANA Business Partner supplier governance, configure tiered multi-level purchase order release strategies using classification systems, and engineer automatic GL account determination (OBYC).',
      'You will gain deep mastery over inventory management transactions (MIGO), goods receipts, transfer postings, physical inventory audits, and logistics invoice verification (MIRO) with three-way matching.'
    ],
    keyHighlights: [
      { title: 'Complete P2P Cycle', desc: 'Configure Purchase Requisitions, RFQs, Quotation Comparisons, Purchase Orders, Goods Receipt, and Invoice Verification.', icon: 'Workflow' },
      { title: 'Release Strategy Architecture', desc: 'Build multi-level PO and PR approval workflows using characteristics, classes, and authorization groups.', icon: 'ShieldCheck' },
      { title: 'Inventory Valuation & OBYC', desc: 'Configure valuation areas, valuation classes, account category references, and automated FI postings for price variances.', icon: 'Cpu' },
      { title: 'Special Procurement Workflows', desc: 'Master subcontracting, vendor consignment, stock transport orders (STO), third-party procurement, and pipeline materials.', icon: 'Layers' }
    ],
    architecturePillars: [
      { tag: 'Enterprise Procurement Structure', title: 'Plant, Storage Location & Purchasing Org', desc: 'Configure company codes, plants, storage locations, purchasing organizations, and cross-company purchasing groups.' },
      { tag: 'Material & Supplier Governance', title: 'Material Types & Business Partner Masters', desc: 'Design material types (ROH, HALB, FERT), number ranges, field selection groups, purchasing info records, and source lists.' },
      { tag: 'Physical Inventory Operations', title: 'Goods Movements & Movement Types', desc: 'Govern Goods Receipt (101), Goods Issue (201/261), Stock Transfers (301/311), and physical inventory reconciliation.' },
      { tag: 'Financial Integration', title: 'Logistics Invoice Verification (LIV)', desc: 'Configure MIRO tolerances, price variance accounts (PRD), GR/IR clearing (WRX), and credit memo dispute settlements.' }
    ],
    curriculum: [
      {
        phaseNum: 'Phase 01',
        duration: 'Weeks 1 - 2',
        title: 'Procurement Hierarchy & Enterprise Master Data',
        description: 'Define organizational plants, storage locations, purchasing organizations, and configure Material Master and Business Partner models.',
        topics: [
          'ERP Sourcing Fundamentals & S/4HANA Sourcing and Procurement Architecture',
          'SPRO: Creating Plants, Storage Locations, and Purchasing Organizations',
          'Assignment of Purchasing Organizations to Company Codes and Plants',
          'Material Master Architecture: Material Types (ROH, FERT), Industry Sectors, and Field Reference Controls',
          'Business Partner (BP) for Suppliers: Roles FLVN00 (Financial) and FLVN01 (Purchasing)',
          'Purchasing Info Records (PIR) and Source List Maintenance (ME01)'
        ],
        handsOnLab: 'Lab: Set up complete multi-plant procurement structure for a discrete manufacturing facility with centralized purchasing.'
      },
      {
        phaseNum: 'Phase 02',
        duration: 'Weeks 3 - 4',
        title: 'Procure-to-Pay (P2P) Cycle & Purchasing Workflows',
        description: 'Configure purchase requisitions, request for quotations, purchase orders, outline agreements, and contracts.',
        topics: [
          'Purchase Requisition (PR) Document Types, Number Ranges, and Item Categories',
          'Request for Quotation (RFQ) Processing, Quotation Entry, and Price Comparison Sheets (ME49)',
          'Purchase Order (PO) Architecture: Standard, Subcontracting, and Consignment Order Types',
          'Outline Agreements: Quantity Contracts, Value Contracts, and Scheduling Agreements',
          'Pricing Procedure for Purchasing: Condition Tables, Calculation Schemas, and Condition Types (PB00, FRA1)',
          'Vendor Evaluation: Criteria, Sub-Criteria, Scoring, and Automatic Ranking'
        ],
        handsOnLab: 'Lab: Configure end-to-end purchasing pricing procedure with freight surcharges, cash discounts, and customs duties.'
      },
      {
        phaseNum: 'Phase 03',
        duration: 'Weeks 5 - 6',
        title: 'Multi-Level Release Strategies with Classification',
        description: 'Build robust approval workflows for Purchase Requisitions and Purchase Orders based on dollar thresholds, plant, and purchasing group.',
        topics: [
          'Classification System Architecture: Characteristics (CT04) and Classes (CL02)',
          'Configuring Release Groups, Release Codes, Release Indicators, and Release Prerequisites',
          'Release Strategy Determination without Classification (PR Item Level)',
          'Release Strategy with Classification for PO Header Level (Communication Structure CEKKO)',
          'Simulation, Testing, and Authorization Controls for Release Approvals',
          'Workflow Integration & Email Triggers for Pending Purchase Orders'
        ],
        handsOnLab: 'Lab: Implement a 4-tier PO approval hierarchy ($0-$5K, $5K-$50K, $50K-$250K, $250K+) with multi-department sign-offs.'
      },
      {
        phaseNum: 'Phase 04',
        duration: 'Weeks 7 - 8',
        title: 'Inventory Management, Movement Types & Special Stocks',
        description: 'Master warehouse receipts, goods issues, transfer postings, and specialized supplier workflows like subcontracting and consignment.',
        topics: [
          'Inventory Movements Architecture: Movement Types (MIGO) and Transaction Keys',
          'Goods Receipt (101) against PO, Delivery Tolerance Limits, and Quality Inspection Hold',
          'Goods Issue for Cost Center (201) and Production Orders (261)',
          'Stock Transport Orders (STO): Intra-Company and Inter-Company with Delivery and Billing',
          'Subcontracting Process: Component Staging (541), Goods Receipt of Finished Product, and Component Consumption (543)',
          'Vendor Consignment: Consignment Stock Staging, Withdrawal (411 K), and Consignment Settlement (MRKO)'
        ],
        handsOnLab: 'Lab: Execute complete subcontracting lifecycle: BOM staging, toll-manufacturing dispatch, finished goods receipt, and vendor clearing.'
      },
      {
        phaseNum: 'Phase 05',
        duration: 'Weeks 9 - 10',
        title: 'Valuation, Automatic Account Determination (OBYC) & LIV',
        description: 'Deep dive into accounting integration: price control (Standard vs Moving Average), account determination (OBYC), and invoice verification (MIRO).',
        topics: [
          'Valuation Structure: Valuation Area, Valuation Class, and Material Price Control (S vs V)',
          'Automatic Account Determination Architecture (OBYC): Chart of Accounts, Valuation Modif., Valuation Class, Account Key',
          'Configuring Key Posting Keys: BSX (Inventory Posting), WRX (GR/IR Clearing), PRD (Price Differences)',
          'Logistics Invoice Verification (LIV - MIRO): 3-Way Matching (PO vs GR vs Invoice)',
          'Invoice Variances: Price Variance, Quantity Variance, and Tolerance Keys',
          'Physical Inventory Verification: Creating Physical Inventory Documents, Counting, and Difference Postings'
        ],
        handsOnLab: 'Lab: Complete OBYC accounting setup for a new company code, followed by end-to-end P2P execution with price variance reconciliation.'
      }
    ],
    realWorldProjects: [
      {
        title: 'Automotive OEM Supplier Network & P2P Streamlining',
        industry: 'Automotive Manufacturing',
        challenge: 'A heavy commercial vehicle OEM faced severe stockouts and month-end invoice disputes across 5 assembly plants sourcing 18,000 components from 350 vendors.',
        solution: 'Engineered unified S/4HANA procurement structure, automated Scheduling Agreements with ERS (Evaluated Receipt Settlement), 3-tier release strategy, and real-time inventory valuations.',
        deliverables: ['Procurement Blueprint Document', 'SPRO Configuration Workbook', 'OBYC Account Matrix', 'UAT Scripts & Test Logs']
      },
      {
        title: 'Pharmaceutical Raw Material Cold-Chain & Subcontracting',
        industry: 'Life Sciences & Specialty Chemicals',
        challenge: 'Pharma manufacturer required batch-managed procurement with strict quality inspection holds (QM integration) and multi-tier toll-manufacturing tracking.',
        solution: 'Configured batch-managed material masters, subcontracting with component reconciliation, automated GR/IR clearing, and quality inspection staging.',
        deliverables: ['Subcontracting Architecture Guide', 'Batch Management Matrix', 'GR/IR Variance Settlement Manual', 'Go-Live Cutover Runbook']
      }
    ],
    careerOutcomes: [
      { role: 'SAP MM Functional Consultant', experience: '0 - 3 Years', salary: '₹7.5 - ₹13.0 LPA' },
      { role: 'Senior S/4HANA Sourcing Specialist', experience: '3 - 6 Years', salary: '₹14.5 - ₹23.0 LPA' },
      { role: 'Lead Supply Chain Solution Architect', experience: '7+ Years', salary: '₹25.0 - ₹38.0+ LPA' }
    ],
    targetAudience: [
      'Graduates with engineering, business, or logistics backgrounds targeting top-tier SAP consulting positions',
      'Procurement, purchasing, and warehouse managers transitioning into enterprise technology consulting',
      'ERP analysts seeking to master S/4HANA sourcing configuration and global certification'
    ],
    faqs: [
      {
        question: 'How is SAP MM relevant in modern S/4HANA environments?',
        answer: 'SAP MM remains the core operational module for all physical supply chains in S/4HANA, incorporating modern Business Partner integration, Fiori procurement cockpits, and real-time analytics.'
      },
      {
        question: 'Will I learn OBYC account determination in depth?',
        answer: 'Yes. Account determination (OBYC) is the most critical and frequently tested interview topic. You will configure BSX, WRX, PRD, and GBB accounts from scratch in the sandbox lab.'
      },
      {
        question: 'What exam certification is targeted in this course?',
        answer: 'This training prepares you directly for the official SAP S/4HANA Sourcing and Procurement Associate Certification (C_TS452_2022 / C_TS452_2023).'
      },
      {
        question: 'Do you provide real project experience?',
        answer: 'Yes. You will complete two end-to-end enterprise capstone projects simulating full industrial implementations from business blueprinting to cutover testing.'
      }
    ]
  },

  // 3. SAP PP (Production Planning)
  'sap-pp': {
    id: 3,
    code: 'SAP-PP',
    slug: 'sap-pp',
    title: 'SAP PP Training',
    fullName: 'SAP Production Planning & Manufacturing in S/4HANA',
    type: 'functional',
    category: 'Functional Modules',
    heroBadge: 'Smart Factory & MRP Live Mastery',
    heroHeadline: 'Optimize Shop-Floor & Supply Planning with',
    heroHighlight: 'SAP PP & S/4HANA Manufacturing',
    heroTagline: 'Master Bills of Materials (BOM), Work Centers, Routing, Demand Management, MRP Live on HANA, Production Orders, and Capacity Requirements Planning (CRP).',
    heroImage: '/industry_steel_metallurgy.jpg',
    secondaryImage: '/modern_dev_team_hd.jpg',
    featureImage: '/exact_office_card2_hd.jpg',
    accentColor: '#d97706',
    accentGradient: 'from-[#d97706] via-[#b45309] to-[#78350f]',
    workflowTitle: 'Plan-to-Produce (P2P) Manufacturing Lifecycle',
    workflowSteps: [
      {
            "stepNum": "01",
            "title": "Demand Management",
            "subtitle": "Forecasting & PIR",
            "desc": "Aggregate sales forecasts into Planned Independent Requirements (PIR) using Make-to-Stock (MTS) and Make-to-Order (MTO) strategies."
      },
      {
            "stepNum": "02",
            "title": "MRP Live Engine",
            "subtitle": "In-Memory Explosion",
            "desc": "Run high-speed HANA MRP to explode multi-level BOMs, calculate net requirements, and convert into planned orders and purchase requisitions."
      },
      {
            "stepNum": "03",
            "title": "Order Release & Staging",
            "subtitle": "Shop Floor Dispatch",
            "desc": "Convert planned orders to production orders, check material availability, generate pick lists, and release shop floor travel packets."
      },
      {
            "stepNum": "04",
            "title": "Confirmation & Settlement",
            "subtitle": "Cost Accounting",
            "desc": "Confirm actual labor/machine hours, post Goods Receipt (101) for finished goods, calculate WIP, and settle cost variances to CO-PC."
      }
],
    duration: '10 Weeks (Weekend & Weekday Batches)',
    format: 'Live Interactive Mentor-Led + 24/7 Dedicated S/4HANA Sandbox',
    prerequisites: 'Basic knowledge of manufacturing, engineering, operations, or industrial production.',
    certificationTrack: 'SAP Enterprise Application Associate - Production Planning and Manufacturing in SAP S/4HANA',
    certificationCode: 'C_TS422_2022',
    rating: '4.94 / 5.0',
    enrolledStudents: '1,210+ Alumni Trained',
    metrics: [
      { val: '100%', label: 'Hands-on SPRO Configuration' },
      { val: '24/7', label: 'Dedicated S/4HANA Lab Server' },
      { val: '2', label: 'End-to-End Enterprise Projects' },
      { val: '98%', label: 'Placement & Industry Readiness' }
    ],
    overviewHeading: 'Digital Manufacturing & Agile Shop-Floor Execution',
    overviewSubheading: 'Master Data • MRP Live • Capacity Planning • Production Orders • Confirmation',
    overviewLead: 'SAP Production Planning (PP) coordinates shop-floor schedules, component availability, equipment capacities, and manufacturing execution for discrete, process, and repetitive manufacturing plants.',
    overviewParagraphs: [
      'In an era of Industry 4.0, smart factories require synchronized production planning that balances customer delivery promises with plant utilization and raw material arrival. The SAP PP module bridges strategic demand forecasts with physical factory machines.',
      'Our curriculum covers both Discrete Manufacturing and Process Industry (PP-PI) methodologies. You will build manufacturing master data from scratch: multi-level Bills of Material (BOM), complex Work Centers with machine formulas, and detailed Operation Routings.',
      'You will gain hands-on experience running high-speed MRP Live directly on the SAP HANA in-memory database, evaluating planned orders, converting to production orders, staging components, confirming operations, and closing production variances.'
    ],
    keyHighlights: [
      { title: 'Manufacturing Master Data', desc: 'Configure multi-level BOMs, Work Centers with standard values and formulas, and operational Routings.', icon: 'Cpu' },
      { title: 'MRP Live on HANA', desc: 'Master Material Requirements Planning in S/4HANA, running real-time planning runs across plants in seconds.', icon: 'Workflow' },
      { title: 'Capacity Planning (CRP)', desc: 'Analyze machine bottlenecks, work center overloads, capacity leveling, and dispatch operational schedules.', icon: 'Layers' },
      { title: 'Shop-Floor Execution', desc: 'Execute order release, material staging, milestone confirmations, and auto Goods Receipt of finished goods.', icon: 'ShieldCheck' }
    ],
    architecturePillars: [
      { tag: 'Plant Master Architecture', title: 'BOMs, Work Centers & Production Routings', desc: 'Design alternative BOMs, cost center linkage to work centers, standard value keys, and operational setup/machine/labor times.' },
      { tag: 'Demand Management Engine', title: 'Planning Strategies (Make-to-Stock & Make-to-Order)', desc: 'Configure Strategy 10, Strategy 40, Strategy 20, and consume Planned Independent Requirements (PIR) via sales orders.' },
      { tag: 'Fast-Track Engine', title: 'S/4HANA MRP Live & Planning Scenarios', desc: 'Govern MRP types (PD, VB), lot sizing procedures (EX, FX), scheduling keys, and exception message resolution.' },
      { tag: 'Costing & Settlement', title: 'Product Costing & Order Variance Settlement', desc: 'Integrate with CO-PC: calculate preliminary order cost, capture actual consumption, calculate WIP, and settle variances.' }
    ],
    curriculum: [
      {
        phaseNum: 'Phase 01',
        duration: 'Weeks 1 - 2',
        title: 'Manufacturing Master Data Engineering',
        description: 'Construct the core building blocks of manufacturing: Bills of Material, Work Centers, Cost Center links, and Production Routings.',
        topics: [
          'Overview of S/4HANA Manufacturing & Planning Philosophies (Discrete vs Process vs Repetitive)',
          'Bill of Materials (BOM) Architecture: Item Categories, Alternative BOMs, Recursive BOMs, and Engineering Change Management',
          'Work Center Configuration (CR01): Standard Value Keys, Formulas for Scheduling & Costing, and Capacity Categories',
          'Linkage of Work Centers with Controlling Cost Centers and Activity Types',
          'Production Routing (CA01): Operations, Work Centers, Standard Times, Inspection Characteristics, and Component Allocation',
          'Production Versions (C223): Mandatory Linking of BOM + Routing in S/4HANA'
        ],
        handsOnLab: 'Lab: Build master data for a multi-stage industrial turbine assembly including 3-tier sub-assemblies and machine work centers.'
      },
      {
        phaseNum: 'Phase 02',
        duration: 'Weeks 3 - 4',
        title: 'Sales & Operations Planning and Demand Management',
        description: 'Translate commercial sales targets into operational production plans using planning strategies and PIR forecasting.',
        topics: [
          'Demand Management Architecture: Planned Independent Requirements (PIR - MD61)',
          'Make-to-Stock Planning Strategies: Strategy 10 (Net Requirements) vs Strategy 40 (Planning with Final Assembly)',
          'Make-to-Order Planning Strategies: Strategy 20 (MTO for Sales Orders) vs Strategy 50 (Planning without Final Assembly)',
          'PIR Consumption Logic by Sales Orders (Backward and Forward Consumption Periods)',
          'Forecasting Techniques and Integration with Sales & Operations Planning (SOP / IBP)'
        ],
        handsOnLab: 'Lab: Configure Strategy 40 for a consumer electronics company and simulate PIR consumption across seasonal demand spikes.'
      },
      {
        phaseNum: 'Phase 03',
        duration: 'Weeks 5 - 6',
        title: 'Material Requirements Planning (MRP) & S/4HANA MRP Live',
        description: 'Master the core calculation engine of SAP PP: lot sizing, lead time scheduling, and MRP Live on the HANA database.',
        topics: [
          'MRP Architecture: Net Requirements Calculation, Stock-Requirement List (MD04), and Planning File Entries',
          'MRP Parameters: Plant Parameters (OPPQ) and MRP Groups (OPPR)',
          'Lot Sizing Procedures: Static (Lot-for-Lot, Fixed), Periodic (Weekly, Monthly), and Optimum Lot Sizing',
          'Scheduling: Basic Date Scheduling vs Lead Time Scheduling with Routing',
          'Running MRP Live (MD01N) vs Classic MRP: Architecture Differences, HANA Pushdown, and Performance Gains',
          'Evaluating MRP Results: Exception Messages, Rescheduling Dates, and MRP Cockpit Apps'
        ],
        handsOnLab: 'Lab: Run MRP Live on a 500-item bill of materials, evaluate exception messages, and convert planned orders to production orders.'
      },
      {
        phaseNum: 'Phase 04',
        duration: 'Weeks 7 - 8',
        title: 'Production Order Lifecycle & Shop Floor Control',
        description: 'Govern the physical factory floor: order release, component availability checks, material staging, and operation confirmations.',
        topics: [
          'Production Order Configuration: Order Types (OPL8), Number Ranges, and Dependent Parameters',
          'Order Creation (CO01) and Conversion from Planned Orders (CO40)',
          'Material Availability Check (ATP) and Batch Determination for Production Components',
          'Order Release Procedures: Header Release vs Operation Release and Shop Floor Printing',
          'Component Staging and Goods Issue (MIGO / Movement Type 261) against Production Orders',
          'Operation Confirmations (CO11N): Milestone Confirmation, Progress Confirmation, and Scrap Recording',
          'Goods Receipt (MIGO / Movement Type 101) of Finished Product into Warehouse Stock'
        ],
        handsOnLab: 'Lab: Execute full factory order cycle: order release, pick list generation, 261 issue, milestone confirmation, and 101 GR.'
      },
      {
        phaseNum: 'Phase 05',
        duration: 'Weeks 9 - 10',
        title: 'Capacity Planning, Order Costing & S/4HANA Integration',
        description: 'Resolve shop-floor bottlenecks with capacity leveling, analyze manufacturing variances, and master PP-PI process orders.',
        topics: [
          'Capacity Requirements Planning (CRP): Capacity Evaluation (CM01) and Capacity Leveling (CM21/CM25)',
          'Product Costing Integration (CO-PC): Costing Sheets, Preliminary Cost Estimate, and Actual Cost Calculation',
          'Technical Completion (TECO) and Financial Settlement (KO88) of Production Orders',
          'Overview of Process Industries (PP-PI): Master Recipes, Process Messages, and PI Sheets',
          'Cutover & Master Data Migration: Uploading BOMs and Routings via SAP Migration Cockpit'
        ],
        handsOnLab: 'Lab: Capstone Project: End-to-end blueprinting, SPRO setup, master data upload, and factory execution for an industrial equipment manufacturer.'
      }
    ],
    realWorldProjects: [
      {
        title: 'Automated Electronics Assembly MRP & Capacity Leveling',
        industry: 'High-Tech & Industrial Electronics',
        challenge: 'A consumer appliance maker suffered chronic line stoppages due to late component deliveries and unbalanced surface-mount assembly line bottlenecks.',
        solution: 'Configured MRP Live with weekly dynamic lot sizing, Work Center capacity formulas, Strategy 40 demand consumption, and automated Fiori production confirmations.',
        deliverables: ['Production Blueprint', 'SPRO Master Config Sheet', 'CRP Leveling Guide', 'UAT Scripts & Test Protocols']
      },
      {
        title: 'Chemical Specialty Batch Manufacturing (PP-PI)',
        industry: 'Process Chemicals & Lubricants',
        challenge: 'Specialty chemical plant required precise ingredient dosing, master recipe control, and batch trace forward/backward compliance.',
        solution: 'Implemented Master Recipes with phase-dependent resource allocations, automated batch determination, and PI-sheet digital execution.',
        deliverables: ['Master Recipe Specs', 'Batch Determination Matrix', 'Costing Variance Analysis', 'Cutover Master Plan']
      }
    ],
    careerOutcomes: [
      { role: 'SAP PP Functional Consultant', experience: '0 - 3 Years', salary: '₹7.5 - ₹12.5 LPA' },
      { role: 'Senior S/4HANA Manufacturing Specialist', experience: '3 - 6 Years', salary: '₹14.0 - ₹22.0 LPA' },
      { role: 'Lead Supply Chain & Manufacturing Architect', experience: '7+ Years', salary: '₹24.0 - ₹36.0+ LPA' }
    ],
    targetAudience: [
      'Engineers (Mechanical, Industrial, Production, Electrical) seeking careers in digital manufacturing and enterprise ERP',
      'Plant operations, production managers, and planning officers transitioning to SAP consulting',
      'Functional analysts aiming to master MRP Live and S/4HANA manufacturing certification'
    ],
    faqs: [
      {
        question: 'What is the difference between Discrete and Process (PP-PI) Manufacturing?',
        answer: 'Discrete manufacturing involves assembling distinct units (automobiles, computers), whereas Process Manufacturing deals with formulas, recipes, and bulk products (chemicals, food, pharma). We cover both frameworks.'
      },
      {
        question: 'How does S/4HANA change SAP Production Planning?',
        answer: 'S/4HANA introduces MRP Live (MD01N), which runs 10x faster directly on HANA, combines Production Versions as mandatory, and delivers modern Fiori apps for capacity leveling and dispatching.'
      },
      {
        question: 'Which certification exam does this course prepare me for?',
        answer: 'You will be prepared for C_TS422_2022 / C_TS422_2023 (SAP Enterprise Application Associate - Production Planning and Manufacturing in SAP S/4HANA).'
      },
      {
        question: 'Do we practice Product Costing integration?',
        answer: 'Yes. Understanding the integration between PP and Controlling (CO-PC) for standard cost estimates, WIP calculation, and order variance settlement is an essential part of Phase 05.'
      }
    ]
  },

  // 4. SAP QM (Quality Management)
  'sap-qm': {
    id: 4,
    code: 'SAP-QM',
    slug: 'sap-qm',
    title: 'SAP QM Training',
    fullName: 'SAP Quality Management & Compliance in S/4HANA',
    type: 'functional',
    category: 'Functional Modules',
    heroBadge: 'Zero-Defect Quality Assurance Mastery',
    heroHeadline: 'Govern Total Quality & Regulatory Compliance with',
    heroHighlight: 'SAP QM & S/4HANA Inspection Controls',
    heroTagline: 'Master Quality Planning, Inspection Lot Processing, Sampling Procedures, Quality Certificates, Defect Recording, Usage Decisions, and Audit Management.',
    heroImage: '/industry_pharma_lifesciences.jpg',
    secondaryImage: '/meeting_room_hd.jpg',
    featureImage: '/exact_sap_consulting_hd.jpg',
    accentColor: '#0891b2',
    accentGradient: 'from-[#0891b2] via-[#0e7490] to-[#155e75]',
    workflowTitle: 'Inspection-to-Release Quality Governance Cycle',
    workflowSteps: [
      {
            "stepNum": "01",
            "title": "Inspection Lot Creation",
            "subtitle": "Quality Trigger",
            "desc": "Automatic lot generation upon procurement Goods Receipt (01), in-process production (04), or outbound customer shipment (10)."
      },
      {
            "stepNum": "02",
            "title": "Sampling & Plan Binding",
            "subtitle": "Standards Assignment",
            "desc": "Determine statistical sample size via ISO sampling tables and attach Master Inspection Characteristics (MIC) with tolerance limits."
      },
      {
            "stepNum": "03",
            "title": "Results & Defect Recording",
            "subtitle": "Quantitative Testing",
            "desc": "Log quantitative measurements and qualitative pass/fail attributes, document deviations, and record defect codes in Q-notifications."
      },
      {
            "stepNum": "04",
            "title": "Usage Decision (UD)",
            "subtitle": "Stock Disposition",
            "desc": "Execute Usage Decision, release stock from quality inspection to unrestricted inventory, scrap defective batches, and issue Certificate of Analysis (CoA)."
      }
],
    duration: '8 Weeks (Weekend & Weekday Batches)',
    format: 'Live Interactive Mentor-Led + 24/7 Dedicated S/4HANA Sandbox',
    prerequisites: 'Basic knowledge of quality standards, inspection, testing, manufacturing, or pharma/chemical compliance.',
    certificationTrack: 'SAP Enterprise Application Associate - Quality Management in SAP S/4HANA',
    certificationCode: 'C_TS413_2021',
    rating: '4.92 / 5.0',
    enrolledStudents: '980+ Alumni Trained',
    metrics: [
      { val: '100%', label: 'Hands-on SPRO Configuration' },
      { val: '24/7', label: 'Dedicated S/4HANA Lab Server' },
      { val: '2', label: 'End-to-End Enterprise Projects' },
      { val: '98%', label: 'Placement & Industry Readiness' }
    ],
    overviewHeading: 'Enterprise Quality Governance Across the Value Chain',
    overviewSubheading: 'Quality Planning • Inspection Lots • Results Recording • Usage Decisions • Certificates',
    overviewLead: 'SAP Quality Management (QM) enforces rigorous quality controls across procurement, manufacturing, and customer delivery, ensuring zero-defect standards and strict regulatory compliance.',
    overviewParagraphs: [
      'In heavily regulated industries such as pharmaceuticals, aerospace, medical devices, and precision automotive, quality failures lead to severe compliance penalties and recall costs. SAP QM provides automated gates ensuring that unverified materials cannot be used or shipped.',
      'Our mentor-led training equips you with deep configuration knowledge across all QM domains: master inspection characteristics (MICs), sampling schemes, inspection methods, and catalog codes.',
      'You will master inspection lot lifecycles across the supply chain: Origin 01 (Goods Receipt from vendor), Origin 04 (Production Goods Receipt), Origin 03 (In-process inspection), and Origin 08 (Stock Transfers). You will configure automatic Usage Decision (UD) stock postings, non-conformance notifications, and Certificate of Analysis (CoA) generation.'
    ],
    keyHighlights: [
      { title: 'Quality Planning Engineering', desc: 'Design Master Inspection Characteristics (MICs), Sampling Procedures, and Inspection Plans.', icon: 'Cpu' },
      { title: 'Inspection Lot Management', desc: 'Configure automatic inspection lot triggers for vendor receipts, shop floor operations, and customer returns.', icon: 'Workflow' },
      { title: 'Results Recording & UD', desc: 'Execute quantitative and qualitative results capture, defect logging, and automated stock clearance decisions.', icon: 'ShieldCheck' },
      { title: 'Quality Notifications & CoAs', desc: 'Manage vendor dispute notifications (Q1), internal defect workflows (Q2), and customer certificates.', icon: 'Layers' }
    ],
    architecturePillars: [
      { tag: 'Master Data Foundations', title: 'Inspection Catalogs & Master Characteristics', desc: 'Configure Catalogs 1-9 (Defect Types, Causes, Tasks), Quantitative/Qualitative MICs, and Dynamic Modification Rules.' },
      { tag: 'Procurement Quality Integration', title: 'Quality Info Records & Vendor Release', desc: 'Set up QM in Procurement: Vendor release keys, QM Info Records (QI01), and blocked vendor stock quarantines.' },
      { tag: 'Manufacturing Quality Gates', title: 'In-Process Routing & Early Warning Checks', desc: 'Embed inspection points inside production routings, control recipe execution, and shop-floor statistical process control.' },
      { tag: 'Customer Quality Assurance', title: 'Certificate of Analysis & Return Audits', desc: 'Generate automated Certificates of Analysis (CoA) for customer shipments and process customer complaint notifications (Q3).' }
    ],
    curriculum: [
      {
        phaseNum: 'Phase 01',
        duration: 'Weeks 1 - 2',
        title: 'Quality Planning & Master Data Architecture',
        description: 'Set up the foundational quality structures: catalogs, master inspection characteristics, sampling procedures, and inspection plans.',
        topics: [
          'Overview of Total Quality Management (TQM) in S/4HANA Enterprise Systems',
          'SPRO: Basic Settings for Quality Management and Plant Parameters',
          'Quality Inspection Catalogs (QS21): Defect Codes, Task Codes, Cause Codes, and Characteristic Attributes',
          'Master Inspection Characteristics - MICs (QS21): Quantitative (Tolerances) vs Qualitative Characteristics',
          'Sampling Procedures and Sampling Schemes (QDV1): Fixed Samples, 100% Inspection, and MIL-STD Tables',
          'Dynamic Modification Rules (DMR - QDR1): Skip Lots, Tightened Inspection, and Normal Inspection'
        ],
        handsOnLab: 'Lab: Configure inspection catalogs and quantitative MICs for chemical viscosity and packaging integrity testing.'
      },
      {
        phaseNum: 'Phase 02',
        duration: 'Weeks 3 - 4',
        title: 'Quality in Procurement (QM-MM Integration)',
        description: 'Configure incoming goods inspection, quarantine holding, vendor evaluation based on quality, and QM info records.',
        topics: [
          'Material Master Quality View (MM01): Inspection Setup and Inspection Types (01, 0101)',
          'QM in Procurement Settings: Quality Info Record (QI01) and Vendor Release Controls',
          'Automatic Generation of Inspection Lots upon MIGO (Goods Receipt / 101)',
          'Quarantine Stock Management (Quality Inspection Stock - QI)',
          'Results Recording (QE01/QE51N) for Incoming Materials',
          'Usage Decision (QA11/QA12) and Automated Stock Postings: Unrestricted, Scrapped, Blocked, or Returned to Vendor'
        ],
        handsOnLab: 'Lab: Execute incoming raw material inspection with automatic sample drawing, results entry, and quarantine clearance to unrestricted stock.'
      },
      {
        phaseNum: 'Phase 03',
        duration: 'Weeks 5 - 6',
        title: 'Quality in Manufacturing & In-Process Controls',
        description: 'Implement quality gates inside shop floor production: in-process inspection (03), finished goods release (04), and defect recording.',
        topics: [
          'QM in Production: In-Process Inspection Lots (Origin 03) embedded in Routing Operations',
          'Finished Goods Production Inspection (Origin 04) linked to Production Order Confirmation (CO11N)',
          'Recurring Inspections for Perishable Inventory (Origin 09) and Shelf-Life Expiration Date (SLED)',
          'Defect Recording Architecture: Creating Defect Items directly during Results Recording',
          'Statistical Process Control (SPC) and Control Charts in S/4HANA',
          'Quality Certificates: Certificate Profile Design (QC01) and Certificate of Analysis (CoA) Generation'
        ],
        handsOnLab: 'Lab: Configure in-process inspection for a precision engineering plant with milestone operational sign-offs and CoA printouts.'
      },
      {
        phaseNum: 'Phase 04',
        duration: 'Weeks 7 - 8',
        title: 'Quality Notifications, Audit Management & S/4HANA Cutover',
        description: 'Manage non-conformance reports, CAPA workflows, supplier scorecards, calibration inspections, and cutover data migration.',
        topics: [
          'Quality Notifications Architecture: Vendor Complaints (Q1), Internal Defects (Q2), Customer Returns (Q3)',
          'Corrective and Preventive Actions (CAPA): Action Tasks, Activities, and Status Management',
          'Calibration Inspection for Plant Maintenance Test Equipment (Origin 14)',
          'Integration of QM with SD: Certificate Dispatch with Customer Outbound Deliveries',
          'QM Master Data Migration using SAP S/4HANA Migration Cockpit (LTMC)',
          'Preparation for SAP QM Global Certification Exam (C_TS413_2021)'
        ],
        handsOnLab: 'Lab: Capstone Project: End-to-end blueprinting and SPRO configuration for a medical device manufacturer with full CAPA workflow.'
      }
    ],
    realWorldProjects: [
      {
        title: 'Pharma Sterile Injectables Quality Gate & CoA Automation',
        industry: 'Pharmaceuticals & Biotechnology',
        challenge: 'A vaccine manufacturer needed strict GMP-compliant inspection lots at every production stage with automated Certificate of Analysis validation before customer dispatch.',
        solution: 'Implemented Origin 01, 03, and 04 inspection types, automated sampling procedures according to pharmacopeia standards, and instant CoA generation on delivery creation.',
        deliverables: ['GMP Quality Blueprint', 'SPRO Configuration Workbook', 'Inspection Plan Master Guide', 'Validation & UAT Protocol']
      },
      {
        title: 'Aerospace Precision Machining Defect & CAPA System',
        industry: 'Aerospace & Defense Engineering',
        challenge: 'Aircraft component supplier faced high scrap rates and audit penalties due to disconnected defect logging and delayed supplier corrective actions.',
        solution: 'Configured automated non-conformance notifications (Q2/Q1), 8D CAPA resolution workflows, and dynamic modification rules (skip lot vs tightened).',
        deliverables: ['Defect Catalog Specs', 'CAPA Workflow Design', 'Calibration Maintenance Guide', 'Cutover Data Migration Plan']
      }
    ],
    careerOutcomes: [
      { role: 'SAP QM Functional Consultant', experience: '0 - 3 Years', salary: '₹7.0 - ₹12.0 LPA' },
      { role: 'Lead Quality & Compliance Consultant', experience: '3 - 6 Years', salary: '₹13.5 - ₹21.0 LPA' },
      { role: 'Enterprise Quality & Supply Chain Architect', experience: '7+ Years', salary: '₹23.0 - ₹34.0+ LPA' }
    ],
    targetAudience: [
      'Quality engineers, QA/QC specialists, and compliance officers transitioning to enterprise consulting',
      'Manufacturing, chemical, and pharma professionals looking for high-demand SAP functional roles',
      'SAP MM/PP consultants looking to cross-skill in Quality Management for full supply chain mastery'
    ],
    faqs: [
      {
        question: 'Which industries hire SAP QM consultants most actively?',
        answer: 'Pharmaceuticals, chemicals, medical devices, automotive OEM, aerospace, and food/beverage industries have the highest demand due to strict regulatory compliance mandates.'
      },
      {
        question: 'Is SAP QM difficult to learn without an engineering background?',
        answer: 'Not at all. The module focuses on business processes, master data, and SPRO configuration. Anyone with a structured analytical mindset can master QM.'
      },
      {
        question: 'What certification will I be eligible to take after this training?',
        answer: 'You will be prepared for C_TS413_2021 (SAP Enterprise Application Associate - Quality Management in SAP S/4HANA).'
      },
      {
        question: 'How does QM integrate with MM and SD?',
        answer: 'QM triggers automatic inspection lots upon Goods Receipt from vendors (MM) and blocks payment/usage until Usage Decision is made. In SD, QM generates Certificate of Analysis (CoA) matching customer specifications.'
      }
    ]
  },

  // 5. SAP FICO (Financial Accounting & Controlling)
  'sap-fico': {
    id: 5,
    code: 'SAP-FICO',
    slug: 'sap-fico',
    title: 'SAP FICO Training',
    fullName: 'SAP Financial Accounting & Management Controlling in S/4HANA',
    type: 'functional',
    category: 'Functional Modules',
    heroBadge: 'Universal Journal (ACDOCA) & Financial Governance',
    heroHeadline: 'Command Corporate Finance & Profitability with',
    heroHighlight: 'SAP FICO & S/4HANA Finance Architecture',
    heroTagline: 'Master General Ledger, Accounts Payable, Accounts Receivable, Asset Accounting, Cost Center Accounting, Internal Orders, Product Costing, and Profitability Analysis (CO-PA).',
    heroImage: '/hero_sap_cinema3.jpg',
    secondaryImage: '/zisantech_executive_boardroom.jpg',
    featureImage: '/exact_office_card2_hd.jpg',
    accentColor: '#4f46e5',
    accentGradient: 'from-[#4f46e5] via-[#4338ca] to-[#312e81]',
    workflowTitle: 'Universal Financial Governance & Period-End Close',
    workflowSteps: [
      {
            "stepNum": "01",
            "title": "Document Entry & Subledger",
            "subtitle": "Operational Accounting",
            "desc": "Book AP/AR invoices with automated TDS/GST withholding tax calculation, electronic bank statement (EBS) clearing, and asset acquisitions."
      },
      {
            "stepNum": "02",
            "title": "ACDOCA Universal Journal",
            "subtitle": "Single Source of Truth",
            "desc": "Unified real-time persistence across General Ledger, Asset Accounting, Cost Centers, and Profit Centers without secondary reconciliation."
      },
      {
            "stepNum": "03",
            "title": "Cost Allocations & Overhead",
            "subtitle": "Managerial Controlling",
            "desc": "Run periodic assessment/distribution cycles, settle internal orders, compute production cost variances, and calculate profitability segments."
      },
      {
            "stepNum": "04",
            "title": "Financial Close & Reporting",
            "subtitle": "Statutory Consolidation",
            "desc": "Perform foreign currency revaluation, asset depreciation runs, balance sheet/P&L generation, and executive CO-PA multi-dimensional margin reporting."
      }
],
    duration: '12 Weeks (Weekend & Weekday Batches)',
    format: 'Live Interactive Mentor-Led + 24/7 Dedicated S/4HANA Sandbox',
    prerequisites: 'Foundational understanding of accounting principles (Debit/Credit, Balance Sheet, P&L) or commerce education.',
    certificationTrack: 'SAP Enterprise Application Associate - Financial Accounting in SAP S/4HANA',
    certificationCode: 'C_TS4FI_2023',
    rating: '4.98 / 5.0',
    enrolledStudents: '2,240+ Alumni Trained',
    metrics: [
      { val: '100%', label: 'Hands-on SPRO Configuration' },
      { val: '24/7', label: 'Dedicated S/4HANA Lab Server' },
      { val: '2', label: 'End-to-End Enterprise Projects' },
      { val: '98%', label: 'Placement & Industry Readiness' }
    ],
    overviewHeading: 'Modern Financial Governance on the S/4HANA Universal Journal',
    overviewSubheading: 'General Ledger • AP/AR • Asset Accounting • Cost Centers • Product Costing • CO-PA',
    overviewLead: 'SAP FICO is the central nervous system of enterprise management, combining regulatory external financial reporting (FI) with internal management cost accounting and profitability analytics (CO).',
    overviewParagraphs: [
      'In S/4HANA, the historical separation between FI and CO has been unified through the groundbreaking Universal Journal (Table ACDOCA). This clean-core architecture provides instantaneous balance sheet reconciliation, real-time margin visibility, and automated multi-GAAP financial closings.',
      'Our flagship SAP FICO curriculum is led by chartered accountants and senior enterprise finance architects. You will configure complex global holding company structures, multi-currency ledgers, automated bank statement reconciliations (EBS), fixed asset depreciation runs, and inter-company trading reconciliations.',
      'On the Controlling side, you will master cost center hierarchies, activity allocation cycles, internal order budget tracking, full Product Costing (CO-PC) for manufacturing, and Market Segment Profitability Analysis (CO-PA) on live Fiori dashboards.'
    ],
    keyHighlights: [
      { title: 'The Universal Journal (ACDOCA)', desc: 'Understand the unified single source of truth connecting FI-GL, AP, AR, Asset Accounting, and Management Controlling.', icon: 'Cpu' },
      { title: 'Full Financial Accounting (FI)', desc: 'Configure Chart of Accounts, Document Splitting, Vendor/Customer Sub-ledgers, and Asset Depreciation keys.', icon: 'Workflow' },
      { title: 'Advanced Management Controlling (CO)', desc: 'Design Cost Center Accounting, Internal Orders with budget controls, and Profit Center hierarchies.', icon: 'ShieldCheck' },
      { title: 'Product Costing & CO-PA', desc: 'Calculate standard manufacturing cost estimates (CK11N/CK24), WIP calculations, and margin profitability analytics.', icon: 'Layers' }
    ],
    architecturePillars: [
      { tag: 'Enterprise Legal Hierarchy', title: 'Company Codes, Ledgers & Currency Types', desc: 'Configure Company Codes, Non-Leading Ledgers for multi-GAAP reporting (IFRS vs US-GAAP vs Local Tax), and currency types.' },
      { tag: 'Operational Sub-Ledgers', title: 'Accounts Payable & Accounts Receivable', desc: 'Implement Business Partner vendor/customer accounting, terms of payment, automatic payment program (F110), and dunning.' },
      { tag: 'Asset Lifecycle Management', title: 'New Asset Accounting in S/4HANA', desc: 'Configure Asset Classes, Chart of Depreciation, Depreciation Keys, asset acquisitions, retirement, and month-end runs.' },
      { tag: 'Strategic Profitability', title: 'Margin Analysis & Cost Object Controlling', desc: 'Design operating concerns, costing-based vs margin analysis CO-PA, cost component splits, and contribution margin reporting.' }
    ],
    curriculum: [
      {
        phaseNum: 'Phase 01',
        duration: 'Weeks 1 - 2',
        title: 'Enterprise Financial Hierarchy & General Ledger (New GL)',
        description: 'Configure corporate legal structures, chart of accounts, fiscal year variants, and the Universal Journal in S/4HANA.',
        topics: [
          'Overview of S/4HANA Finance Architecture: The Universal Journal (ACDOCA) vs Classic ERP Tables',
          'SPRO: Defining Company Code, Assigning to Operating Entities, Fiscal Year Variants (K4, V3), and Posting Period Variants',
          'Chart of Accounts Architecture: Operating, Group, and Country-Specific Charts',
          'GL Account Master Records (FS00): Balance Sheet, Non-Operating Expense/Revenue, Primary Cost, Secondary Cost',
          'Document Types, Number Ranges, Tolerance Groups, and Field Status Variants',
          'Document Splitting Configuration: Active Splitting, Zero-Balance Clearing, and Segment Reporting (IFRS 8)'
        ],
        handsOnLab: 'Lab: Configure a complete corporate financial structure for a multinational holding company operating across India, US, and Europe.'
      },
      {
        phaseNum: 'Phase 02',
        duration: 'Weeks 3 - 4',
        title: 'Accounts Payable (AP) & Accounts Receivable (AR)',
        description: 'Master sub-ledger accounting: vendor invoices, automatic payment program (F110), customer dunning, and EBS.',
        topics: [
          'Business Partner Integration for Vendors and Customers in S/4HANA',
          'Vendor Invoice Posting (FB60), Credit Memos, Terms of Payment, and Cash Discounts',
          'Automatic Payment Program - APP (F110): Payment Methods, House Banks, Bank Accounts, and DMEE Engine',
          'Customer Invoicing (FB70), Incoming Payments (F-28), and Down Payment Clearing (Special G/L Indicators)',
          'Automated Dunning Program (F150): Dunning Areas, Dunning Keys, and Escalation Notices',
          'Electronic Bank Statement (EBS): MT940 / CAMT.053 Format Processing and Automated Account Clearing'
        ],
        handsOnLab: 'Lab: Configure automatic payment program (F110) with multi-currency bank accounts, vendor invoice netting, and payment file output.'
      },
      {
        phaseNum: 'Phase 03',
        duration: 'Weeks 5 - 6',
        title: 'New Asset Accounting in S/4HANA',
        description: 'Govern fixed assets: asset classes, chart of depreciation, depreciation keys, capital work-in-progress, and retirements.',
        topics: [
          'New Asset Accounting Architecture in S/4HANA: Real-time Ledger Postings',
          'Chart of Depreciation, Depreciation Areas (Book, Tax, IFRS), and Ledger Mapping',
          'Asset Classes: Plant & Machinery, Buildings, IT Hardware, and Vehicles',
          'Asset Master Record (AS01), Sub-Assets, and Capital Work in Progress (CWIP - Investment Measures)',
          'Asset Acquisitions: External Acquisition via Vendor (F-90) and Acquisition via MM Purchase Order (MIGO)',
          'Asset Depreciation Run (AFAB), Asset Scrapping, Retirements, and Inter-Company Transfers'
        ],
        handsOnLab: 'Lab: Execute CWIP capitalization for a new factory construction with asset componentization and automated depreciation runs.'
      },
      {
        phaseNum: 'Phase 04',
        duration: 'Weeks 7 - 8',
        title: 'Management Controlling (CO-CCA, CO-PCA, & Internal Orders)',
        description: 'Master internal cost governance: cost centers, cost elements, secondary allocations, internal orders, and profit centers.',
        topics: [
          'Controlling Area Configuration and Assignment to Multiple Company Codes',
          'Primary vs Secondary Cost Elements in S/4HANA Universal Journal',
          'Cost Center Accounting (CO-CCA): Standard Hierarchy, Cost Centers, and Activity Types',
          'Cost Allocation Cycles: Distribution vs Assessment (Cycles & Segments) and Activity Allocation (KB21N)',
          'Internal Orders (IO): Real Orders vs Statistical Orders, Budgeting, and Order Settlement (KO88)',
          'Profit Center Accounting (CO-PCA): Profit Center Hierarchy, Segment Allocation, and Balance Sheet per Profit Center'
        ],
        handsOnLab: 'Lab: Set up corporate IT service cost center and execute periodic assessment allocation across manufacturing and sales divisions.'
      },
      {
        phaseNum: 'Phase 05',
        duration: 'Weeks 9 - 10',
        title: 'Product Costing (CO-PC) in Manufacturing',
        description: 'The premier specialization in SAP Controlling: material cost estimates, cost component splits, and production variances.',
        topics: [
          'Product Cost Planning Fundamentals: Costing Variant Architecture (PPC1)',
          'Cost Component Structure (OKTZ): Materials, Labor, Machine Overheads, and Subcontracting',
          'Overhead Costing Sheets: Calculation Bases, Overhead Keys, and Credit Rules',
          'Costing Run Execution (CK11N, CK40N): Marking and Releasing Standard Prices (CK24)',
          'Cost Object Controlling: Preliminary Costing, Simultaneous Costing (Actual Postings), and Final Costing',
          'Work-in-Progress (WIP) Calculation and Production Order Variance Analysis (KKS2, KO88)'
        ],
        handsOnLab: 'Lab: Execute full costing run for a finished manufacturing product with multi-tier BOM, machine overheads, and price release.'
      },
      {
        phaseNum: 'Phase 06',
        duration: 'Weeks 11 - 12',
        title: 'Profitability Analysis (CO-PA) & S/4HANA Financial Closing',
        description: 'Analyze real-time commercial margins by customer, product, and channel; master month-end financial closing workflows.',
        topics: [
          'CO-PA Architecture: Costing-Based CO-PA vs Margin Analysis (Account-Based) in S/4HANA',
          'Operating Concern Configuration: Characteristics and Value Fields / Accounts',
          'Derivation Rules (KEDR) and Flow of Actual Values from SD Invoices (VKEK)',
          'Profitability Reporting and Executive Fiori Margin Analytics',
          'Month-End & Year-End Closing Workflows: Financial Closing Cockpit, Foreign Currency Valuation (FAGL_FCV)',
          'Financial Data Migration using S/4HANA Migration Cockpit (LTMC) & C_TS4FI_2023 Certification Exam Prep'
        ],
        handsOnLab: 'Lab: Capstone Project: End-to-end financial setup for a global enterprise, including AP/AR, Assets, CO allocations, and closing.'
      }
    ],
    realWorldProjects: [
      {
        title: 'Global Retail Multi-GAAP S/4HANA Finance Transformation',
        industry: 'Retail & Multi-Channel E-Commerce',
        challenge: 'A multinational retail holding company required unified financial reporting across 8 subsidiaries under both IFRS and Indian AS, with daily automated bank clearing.',
        solution: 'Implemented S/4HANA Universal Journal with leading and non-leading ledgers, document splitting by segment, automated EBS clearing, and F110 payment engine.',
        deliverables: ['Financial Blueprint Document', 'Chart of Accounts & Ledger Specs', 'EBS MT940 Configuration Guide', 'Year-End Closing Checklist']
      },
      {
        title: 'Discrete Manufacturing Product Costing & Profitability Overhaul',
        industry: 'Industrial Equipment & Electrical Hardware',
        challenge: 'Client lacked accurate product gross margin visibility due to manual spreadsheet overhead allocations and unintegrated production order variances.',
        solution: 'Configured Product Cost Controlling (CO-PC) with costing sheets, standard price release workflows, automated WIP calculation, and Margin Analysis CO-PA.',
        deliverables: ['Cost Component Structure Blueprint', 'Overhead Allocation Schema', 'Variance Settlement Runbook', 'Cutover Master Plan']
      }
    ],
    careerOutcomes: [
      { role: 'SAP FICO Functional Consultant', experience: '0 - 3 Years', salary: '₹8.0 - ₹14.0 LPA' },
      { role: 'Senior S/4HANA Finance Consultant', experience: '3 - 6 Years', salary: '₹15.0 - ₹24.0 LPA' },
      { role: 'Enterprise Finance Solution Architect', experience: '7+ Years', salary: '₹26.0 - ₹42.0+ LPA' }
    ],
    targetAudience: [
      'Chartered Accountants (CA), CMA, MBA Finance, and M.Com / B.Com graduates targeting top enterprise consulting careers',
      'Finance and accounting professionals seeking to upgrade their manual accounting background to SAP S/4HANA consulting',
      'Experienced SAP functional consultants seeking full financial integration mastery'
    ],
    faqs: [
      {
        question: 'Do I need a CA or MBA Finance to learn SAP FICO?',
        answer: 'While a finance or commerce background is beneficial, it is not mandatory. Anyone who understands fundamental debits, credits, and financial statements can master SAP FICO configuration.'
      },
      {
        question: 'How is S/4HANA Finance different from classic ECC FICO?',
        answer: 'S/4HANA replaces separate tables (BKPF, BSEG, COEP, BSIS) with the unified Universal Journal (ACDOCA), eliminating month-end reconciliation reconciliation delays, introducing Document Splitting, and replacing Vendor/Customer masters with Business Partner.'
      },
      {
        question: 'What exam certification is targeted in this course?',
        answer: 'You will be prepared directly for C_TS4FI_2023 (SAP Enterprise Application Associate - SAP S/4HANA for Financial Accounting Associates).'
      },
      {
        question: 'Is Product Costing (CO-PC) included in this curriculum?',
        answer: 'Yes. Product Costing and Profitability Analysis (CO-PA) are fully taught in Phases 05 and 06 with live end-to-end manufacturing exercises.'
      }
    ]
  },

  // 6. SAP HCM (Human Capital Management)
  'sap-hcm': {
    id: 6,
    code: 'SAP-HCM',
    slug: 'sap-hcm',
    title: 'SAP HCM Training',
    fullName: 'SAP Human Capital Management & SuccessFactors Hybrid',
    type: 'functional',
    category: 'Functional Modules',
    heroBadge: 'Workforce Architecture & Payroll Engineering',
    heroHeadline: 'Govern Global Talent & Strategic Payroll with',
    heroHighlight: 'SAP HCM & SuccessFactors Architecture',
    heroTagline: 'Master Organizational Management (OM), Personnel Administration (PA), Time Management, Payroll Accounting schemas, and SuccessFactors hybrid integration.',
    heroImage: '/women_meeting_hd.jpg',
    secondaryImage: '/cand_open_office.jpg',
    featureImage: '/hero_sap_consulting_2.jpg',
    accentColor: '#7c3aed',
    accentGradient: 'from-[#7c3aed] via-[#6d28d9] to-[#4c1d95]',
    workflowTitle: 'Hire-to-Retire Global Workforce Lifecycle',
    workflowSteps: [
      {
            "stepNum": "01",
            "title": "Org Management (OM)",
            "subtitle": "Enterprise Hierarchy",
            "desc": "Model enterprise organization units, jobs, positions, and reporting relationships to maintain structural governance across international subsidiaries."
      },
      {
            "stepNum": "02",
            "title": "Personnel Admin (PA)",
            "subtitle": "Employee Master Records",
            "desc": "Execute hiring personnel actions, maintain infotypes (0000, 0001, 0002, 0006), and govern employee lifecycle transfers and promotions."
      },
      {
            "stepNum": "03",
            "title": "Time Evaluation (PT)",
            "subtitle": "Attendance & Quotas",
            "desc": "Configure positive/negative time recording, manage annual leave quotas, compute shift premiums, and evaluate complex overtime rules via RPTIME00."
      },
      {
            "stepNum": "04",
            "title": "Payroll & FI Posting (PY)",
            "subtitle": "Compensation Engine",
            "desc": "Run gross-to-net payroll drivers, calculate statutory tax deductions (PF/ESI/TDS), generate direct bank transfers, and post to General Ledger via CIPE."
      }
],
    duration: '10 Weeks (Weekend & Weekday Batches)',
    format: 'Live Interactive Mentor-Led + 24/7 Dedicated S/4HANA Sandbox',
    prerequisites: 'Basic knowledge of HR functions, payroll concepts, talent operations, or MBA in Human Resources.',
    certificationTrack: 'SAP Enterprise Application Associate - SAP Human Capital Management',
    certificationCode: 'C_THR12_67',
    rating: '4.93 / 5.0',
    enrolledStudents: '1,150+ Alumni Trained',
    metrics: [
      { val: '100%', label: 'Hands-on SPRO Configuration' },
      { val: '24/7', label: 'Dedicated S/4HANA Lab Server' },
      { val: '2', label: 'End-to-End Enterprise Projects' },
      { val: '98%', label: 'Placement & Industry Readiness' }
    ],
    overviewHeading: 'Strategic Human Capital Engineering Across the Enterprise',
    overviewSubheading: 'Organizational Structures • Personnel Administration • Time Management • Payroll Schemas',
    overviewLead: 'SAP Human Capital Management (HCM) automates the entire employee lifecycle: recruitment, onboarding, org hierarchies, attendance tracking, statutory payroll calculation, and talent succession.',
    overviewParagraphs: [
      'Managing global workforces across complex statutory tax jurisdictions requires bulletproof enterprise HR software. SAP HCM powers the payroll and workforce operations of the world’s largest corporate employers.',
      'Our curriculum bridges traditional on-premise SAP HCM with modern SAP SuccessFactors Employee Central cloud architectures. You will configure Organizational Management (OM) objects and relationships, build customized Infotypes, configure dynamic actions, and master both positive and negative Time Management.',
      'A centerpiece of our training is deep configuration of the SAP Payroll Engine: building custom wage types, configuring processing classes, writing Personnel Calculation Rules (PCR), and customizing Payroll Schemas for statutory tax and provident fund compliance.'
    ],
    keyHighlights: [
      { title: 'Organizational Management (OM)', desc: 'Design enterprise job architecture, organizational units, positions, cost center assignments, and reporting trees.', icon: 'Workflow' },
      { title: 'Personnel Administration (PA)', desc: 'Configure customized Infotypes, number ranges, hiring actions, personnel areas, and dynamic event triggers.', icon: 'Cpu' },
      { title: 'Time Management Systems', desc: 'Implement work schedules, break schedules, holiday calendars, attendance quotas, and positive time clock recording.', icon: 'Layers' },
      { title: 'Payroll Calculation Engine', desc: 'Master wage types, valuation bases, payroll schemas, Personnel Calculation Rules (PCR), and FI-CO payroll postings.', icon: 'ShieldCheck' }
    ],
    architecturePillars: [
      { tag: 'Enterprise Organizational Map', title: 'Enterprise & Personnel Structures', desc: 'Configure Personnel Areas, Personnel Sub-Areas, Employee Groups, Employee Sub-Groups, and Org Units.' },
      { tag: 'Employee Lifecycle Operations', title: 'Infotypes & Dynamic Actions', desc: 'Design InfoGroups, Personnel Actions (Hiring, Transfer, Promotion, Termination), and automated secondary Infotype triggers.' },
      { tag: 'Workforce Attendance Logic', title: 'Work Schedules & Absence Quotas', desc: 'Configure daily work schedule variants, period work schedules, quota deduction rules, and CATS timesheet recording.' },
      { tag: 'Statutory Payroll Governance', title: 'Gross-to-Net Payroll & Statutory Rules', desc: 'Build gross wage types, deduction wage types, statutory tax deductions, loan deductions, and wage type valuation.' }
    ],
    curriculum: [
      {
        phaseNum: 'Phase 01',
        duration: 'Weeks 1 - 2',
        title: 'Enterprise HR Structures & Organizational Management (OM)',
        description: 'Construct the architectural framework of enterprise HR: organizational units, jobs, positions, and reporting relationships.',
        topics: [
          'Overview of SAP HCM Architecture & SuccessFactors Cloud Integration Roadmap',
          'SPRO: Configuring Personnel Areas, Personnel Sub-Areas, Employee Groups, and Employee Sub-Groups',
          'Organizational Management (OM) Object Architecture: O (Org Unit), S (Position), C (Job), K (Cost Center)',
          'Configuring Plan Versions, Number Ranges, and Object Evaluation Paths',
          'Defining Relationships (A/B: Reports to, Belongs to, Incorporates)',
          'Simple Maintenance vs Expert Mode (PO10, PO13, PO03) and Organization and Staffing (PPOME)'
        ],
        handsOnLab: 'Lab: Build full organizational structure for a 2,000-employee enterprise with matrix reporting and multi-department hierarchies.'
      },
      {
        phaseNum: 'Phase 02',
        duration: 'Weeks 3 - 4',
        title: 'Personnel Administration (PA) & Master Data Configuration',
        description: 'Configure employee records, custom Infotypes, Personnel Actions (Hiring, Promotion), and automated dynamic actions.',
        topics: [
          'Personnel Administration Master Data: Structure of Infotypes (IT0000, IT0001, IT0002, IT0006, IT0007, IT0008)',
          'Configuring Custom Infotype Menus and Header Definitions',
          'Designing Personnel Actions (Hiring, Transfer, Termination) using InfoGroups and Action Types',
          'Configuring Dynamic Actions (Table T588Z): Automated Infotype Creation based on Event Triggers',
          'Number Range Intervals: Internal vs External for Personnel Numbers',
          'Fast Entry of Master Data and Personnel Data Audits'
        ],
        handsOnLab: 'Lab: Configure complete Hiring and Promotion personnel actions with automated dynamic creation of bank details and tax records.'
      },
      {
        phaseNum: 'Phase 03',
        duration: 'Weeks 5 - 6',
        title: 'Time Management Architecture (Positive & Negative Time)',
        description: 'Govern workforce schedules, public holiday calendars, shift patterns, absence quotas, and cross-application timesheets.',
        topics: [
          'Time Management Philosophies: Negative Time Recording vs Positive Time Clock In/Out',
          'Public Holiday Calendars and Factory Calendars',
          'Work Schedules: Daily Work Schedules, Period Work Schedules, and Work Schedule Rules (T508A)',
          'Absence and Attendance Types: Casual Leave, Sick Leave, Earned Leave, and Paid Time Off',
          'Absence Quota Generation Rules (RPTQTA00) and Deduction Rules',
          'Time Evaluation Driver (RPTIME00): Time Types, Pairs, Balances, and Overtime Calculation'
        ],
        handsOnLab: 'Lab: Implement 3-shift rotational work schedule with automatic overtime calculation and dynamic annual leave accruals.'
      },
      {
        phaseNum: 'Phase 04',
        duration: 'Weeks 7 - 8',
        title: 'Payroll Accounting Engine & Schema Engineering',
        description: 'The premier technical domain in SAP HCM: wage types, payroll drivers, processing classes, and Personnel Calculation Rules (PCR).',
        topics: [
          'Payroll Fundamentals: Payroll Areas, Payroll Control Records (PA03), and Period Modifiers',
          'Wage Type Architecture: Primary (Gross, Allowance) vs Secondary/Technical (/101, /559, /560)',
          'Wage Type Characteristics: Valuation Bases, Permissibility per Employee Subgroup, and Processing Classes',
          'Structure of Payroll Driver (RPCALC) and Standard Payroll Schemas',
          'Introduction to Personnel Calculation Rules (PCR - PE02): Operations (AMT, RTE, NUM, ADDWT, ELIMI)',
          'Statutory Deductions, Income Tax Configurations, Provident Fund, and Garnishments'
        ],
        handsOnLab: 'Lab: Write custom Personnel Calculation Rules to compute performance allowances and statutory tax deductions.'
      },
      {
        phaseNum: 'Phase 05',
        duration: 'Weeks 9 - 10',
        title: 'Payroll Integration with FI/CO & SuccessFactors Hybrid',
        description: 'Complete the workforce financial cycle: FI/CO payroll postings, bank transfers, and hybrid cloud integration.',
        topics: [
          'Payroll Posting to Financial Accounting (FI/CO - RPCIPE00): Symbolic Accounts and GL Account Mapping (OBYG)',
          'Bank Transfer Processing: Pre-DME Program and DMEE File Creation for Corporate Banking',
          'Employee Self-Service (ESS) and Manager Self-Service (MSS) Portals',
          'SuccessFactors Hybrid Architecture: Employee Central (EC) to SAP HCM Core Data Replication',
          'Data Migration using SAP Migration Cockpit and Cutover Master Data Verification',
          'Preparation for SAP HCM Global Certification (C_THR12_67)'
        ],
        handsOnLab: 'Lab: Capstone Project: End-to-end blueprinting, OM hierarchy, PA actions, Time quotas, and simulated payroll run with FI posting.'
      }
    ],
    realWorldProjects: [
      {
        title: 'National Retail Chain Workforce & Multi-State Payroll Rollout',
        industry: 'Retail & Consumer Services',
        challenge: 'A national retail enterprise with 8,500 store employees faced chronic payroll delays and statutory compliance non-conformities across 14 state tax regimes.',
        solution: 'Engineered unified OM hierarchies, dynamic hiring actions, rotational shift rules, and custom statutory payroll schemas with automated bank DME transfers.',
        deliverables: ['HR Master Data Blueprint', 'SPRO Configuration Guide', 'Payroll Schema PCR Documentation', 'Cutover Master Plan']
      },
      {
        title: 'Heavy Engineering Shift-Time Evaluation & Cost Allocation',
        industry: 'Engineering & Manufacturing',
        challenge: 'Manufacturing plant required positive time evaluation linked to biometrics, automated hazard pay allowances, and direct labor cost allocation to production orders.',
        solution: 'Configured RPTIME00 positive time evaluation, time wage type generation, and automated payroll-to-controlling cost center postings.',
        deliverables: ['Time Management Architecture Guide', 'Time Wage Type Matrix', 'Payroll-FI Posting Protocol', 'UAT Scripts']
      }
    ],
    careerOutcomes: [
      { role: 'SAP HCM Functional Consultant', experience: '0 - 3 Years', salary: '₹7.0 - ₹12.5 LPA' },
      { role: 'Senior Payroll & Time Management Specialist', experience: '3 - 6 Years', salary: '₹14.0 - ₹22.0 LPA' },
      { role: 'Lead Workforce Solution Architect', experience: '7+ Years', salary: '₹24.0 - ₹36.0+ LPA' }
    ],
    targetAudience: [
      'HR professionals, payroll managers, and HR operations specialists seeking high-paying consulting careers',
      'MBA in HR or business graduates aiming to start careers at global IT consulting firms',
      'Junior SAP functional analysts seeking end-to-end payroll configuration mastery'
    ],
    faqs: [
      {
        question: 'Is payroll configuration (PCRs) too technical for an HR background?',
        answer: 'No. Our step-by-step mentor methodology breaks down Personnel Calculation Rules (PCR) and schemas into logical operations that anyone with basic arithmetic logic can master.'
      },
      {
        question: 'Does this course cover modern cloud HR like SuccessFactors?',
        answer: 'Yes. In Phase 05, we cover the hybrid integration architecture connecting SAP SuccessFactors Employee Central (EC) with on-premise SAP HCM payroll engines.'
      },
      {
        question: 'Which certification exam is targeted?',
        answer: 'You will be prepared for C_THR12_67 (SAP Enterprise Application Associate - SAP Human Capital Management).'
      },
      {
        question: 'Do we get hands-on access to practice payroll runs?',
        answer: 'Yes. You will have full access to execute live payroll runs (RPCALC), inspect payroll clusters (PC_PAYRESULT), and simulate posting to General Ledger.'
      }
    ]
  },

  // 7. SAP LE (Logistics Execution)
  'sap-le': {
    id: 7,
    code: 'SAP-LE',
    slug: 'sap-le',
    title: 'SAP LE Training',
    fullName: 'SAP Logistics Execution & Shipping in S/4HANA',
    type: 'functional',
    category: 'Functional Modules',
    heroBadge: 'Inbound & Outbound Logistics Mastery',
    heroHeadline: 'Command Shipping Pipelines & Freight Settlements with',
    heroHighlight: 'SAP LE & S/4HANA Logistics Execution',
    heroTagline: 'Master delivery document types, route determination, shipping points, wave picking, handling unit management (HUM), packing stations, and freight cost settlements.',
    heroImage: '/sap_hero_slide2_architecture.jpg',
    secondaryImage: '/hero_sap_consulting_3.jpg',
    featureImage: '/cand_office_wide.jpg',
    accentColor: '#0d9488',
    accentGradient: 'from-[#0d9488] via-[#0f766e] to-[#115e59]',
    workflowTitle: 'Outbound Logistics & Dispatch Orchestration',
    workflowSteps: [
      {
            "stepNum": "01",
            "title": "Delivery Creation",
            "subtitle": "Shipping Scheduling",
            "desc": "Automate outbound delivery generation, shipping point assignment, backward delivery scheduling, and route determination based on weight/volume."
      },
      {
            "stepNum": "02",
            "title": "Picking & Handling Units",
            "subtitle": "Packaging Logistics",
            "desc": "Execute warehouse picking, assemble multi-tier Handling Units (carton on pallet), apply SSCC barcode labels, and confirm picking quantities."
      },
      {
            "stepNum": "03",
            "title": "Staging & Carrier Loading",
            "subtitle": "Dock Operations",
            "desc": "Assign staging bays and dock doors, monitor vehicle check-in, record driver seal numbers, and verify loading sequence conformity."
      },
      {
            "stepNum": "04",
            "title": "Post Goods Issue (PGI)",
            "subtitle": "Inventory Handover",
            "desc": "Execute PGI to update inventory quantities, generate legal delivery notes/bills of lading, and post cost of goods sold (COGS) to financial accounts."
      }
],
    duration: '8 Weeks (Weekend & Weekday Batches)',
    format: 'Live Interactive Mentor-Led + 24/7 Dedicated S/4HANA Sandbox',
    prerequisites: 'Basic familiarity with logistics, transportation, supply chain, or shipping operations.',
    certificationTrack: 'SAP Enterprise Application Associate - Supply Chain & Logistics Execution',
    certificationCode: 'C_TS462_2023',
    rating: '4.91 / 5.0',
    enrolledStudents: '920+ Alumni Trained',
    metrics: [
      { val: '100%', label: 'Hands-on SPRO Configuration' },
      { val: '24/7', label: 'Dedicated S/4HANA Lab Server' },
      { val: '2', label: 'End-to-End Enterprise Projects' },
      { val: '98%', label: 'Placement & Industry Readiness' }
    ],
    overviewHeading: 'High-Velocity Logistics, Shipping & Freight Governance',
    overviewSubheading: 'Deliveries • Shipping Points • Wave Picking • Handling Units • Freight Costs',
    overviewLead: 'SAP Logistics Execution (LE) bridges the crucial transition between commercial sales orders and physical supply fulfillment: outbound delivery generation, cross-docking, packing, carrier shipping, and freight cost settlement.',
    overviewParagraphs: [
      'In high-volume distribution networks, logistics execution determines whether customer commitments are fulfilled on time or penalized with late delivery fines. SAP LE coordinates the complete physical fulfillment pipeline across warehouses, transit carriers, and receiving docks.',
      'Our mentor-led course provides deep architectural immersion into logistics configuration: delivery document types, item categories, route determination with transit lead times, picking strategies, and Handling Unit Management (HUM) for multi-level palletization.',
      'You will also master Shipment Document Processing (VT01N), Transportation Planning Points, freight cost calculation using pricing condition techniques, and vendor freight settlement (VI01) integrating directly with SAP MM and FI.'
    ],
    keyHighlights: [
      { title: 'Inbound & Outbound Deliveries', desc: 'Configure delivery types (LF, LR, EL), item categories, copy controls, and automated delivery creation.', icon: 'Workflow' },
      { title: 'Route & Shipping Determination', desc: 'Implement automated route calculation based on departure zones, shipping conditions, and transit times.', icon: 'Cpu' },
      { title: 'Handling Unit Management (HUM)', desc: 'Design packaging materials, packaging instructions, multi-tier palletization, and barcode tracking.', icon: 'Layers' },
      { title: 'Shipment & Freight Settlements', desc: 'Build transportation planning points, shipment documents, freight pricing conditions, and carrier payment runs.', icon: 'ShieldCheck' }
    ],
    architecturePillars: [
      { tag: 'Shipping Infrastructure', title: 'Shipping Points & Staging Areas', desc: 'Configure shipping points, loading points, storage locations, and automated picking location determinations.' },
      { tag: 'Route Engineering', title: 'Transit Times & Carrier Routes', desc: 'Model delivery routes with transportation lead times, transit times, factory calendars, and carrier assignment.' },
      { tag: 'Packing & Containerization', title: 'Handling Units & Packing Stations', desc: 'Implement packaging materials, handling units, packing tolerances, and automated barcode packing slips.' },
      { tag: 'Freight Cost Accounting', title: 'Freight Calculation & FI Settlement', desc: 'Configure freight pricing schemas, shipment cost documents, purchase order accruals, and carrier invoice matching.' }
    ],
    curriculum: [
      {
        phaseNum: 'Phase 01',
        duration: 'Weeks 1 - 2',
        title: 'Enterprise Shipping Structures & Delivery Configuration',
        description: 'Set up the organizational nodes for logistics: shipping points, loading groups, delivery document types, and item categories.',
        topics: [
          'Overview of Logistics Execution Architecture in S/4HANA Enterprise Systems',
          'SPRO: Defining Shipping Points, Loading Points, and Transportation Planning Points',
          'Assigning Shipping Points to Plants and Storage Locations',
          'Delivery Document Types (LF - Outbound, EL - Inbound, LR - Returns) Configuration',
          'Delivery Item Category Determination (OVLP): Picking Relevance, Storage Location Determination',
          'Automated Delivery Creation Workflows and Collective Delivery Runs (VL10A/VL10B)'
        ],
        handsOnLab: 'Lab: Configure complete shipping hierarchy for a regional distribution hub with multiple loading docks.'
      },
      {
        phaseNum: 'Phase 02',
        duration: 'Weeks 3 - 4',
        title: 'Route Determination & Shipping Lead Time Scheduling',
        description: 'Master the rules governing how materials travel from factory to customer docks with accurate transit and loading times.',
        topics: [
          'Route Determination Architecture: Departure Zone, Country, Shipping Conditions, Transport Group, Transportation Zone',
          'Configuring Stages, Legs, and Border Crossing Points inside Routes',
          'Transit Times, Lead Times, Loading Times, and Pick/Pack Duration Configuration',
          'Factory Calendars and Working Day Calculation for Dispatch Dates',
          'Automatic Route Determination in Sales Orders and Overwrite Scenarios in Deliveries'
        ],
        handsOnLab: 'Lab: Configure automated route determination across domestic rail and interstate road corridors with lead-time scheduling.'
      },
      {
        phaseNum: 'Phase 03',
        duration: 'Weeks 5 - 6',
        title: 'Picking, Packing & Handling Unit Management (HUM)',
        description: 'Manage warehouse floor logistics: picking confirmation, packing stations, handling units, and Post Goods Issue.',
        topics: [
          'Picking Strategies: Lean Warehouse Management (Lean WM) vs Extended Warehouse Integration',
          'Picking Confirmation: Transfer Orders and Pick Lists',
          'Packing Logic: Packaging Materials, Packaging Material Types, and Packing Stations',
          'Handling Unit Management (HUM): Single-Level, Multi-Level Palletization, and Serial Number Tracking',
          'Post Goods Issue (PGI) Execution (VL02N) and Material/Financial Document Updates'
        ],
        handsOnLab: 'Lab: Build multi-tier handling units (Cartons on Euro-pallets) with barcode verification and PGI inventory posting.'
      },
      {
        phaseNum: 'Phase 04',
        duration: 'Weeks 7 - 8',
        title: 'Shipments, Freight Cost Settlement & S/4HANA Cutover',
        description: 'Consolidate deliveries into multi-modal shipments, calculate freight tariffs, and settle carrier invoices.',
        topics: [
          'Shipment Document Architecture (VT01N): Individual, Collective, and Multi-Leg Shipments',
          'Shipment Cost Document (VI01): Pricing Condition Technique applied to Freight',
          'Freight Cost Calculation: Distance-Based, Weight-Based, and Flat-Rate Tariffs',
          'Carrier Settlement: Automated Service PO Creation, Service Entry Sheet, and FI Accrual Postings',
          'Transition Pathway from SAP LE to SAP TM in S/4HANA Enterprise Architecture',
          'Master Data Migration for Shipping using SAP Migration Cockpit'
        ],
        handsOnLab: 'Lab: Capstone Project: End-to-end logistics execution setup for an FMCG distributor with carrier freight settlement.'
      }
    ],
    realWorldProjects: [
      {
        title: 'Consumer Electronics National Distribution Hub',
        industry: 'Consumer Durables & Electronics',
        challenge: 'A national electronics distributor faced severe dispatch bottlenecks, misrouted shipments, and delayed carrier freight invoice settlements.',
        solution: 'Implemented automated shipping point determination, handling unit packing instructions, wave picking, and automated shipment cost calculation.',
        deliverables: ['Logistics Blueprint', 'SPRO Shipping Workbook', 'HUM Configuration Guide', 'UAT Test Scripts']
      },
      {
        title: 'Chemical Bulk Dispatch & Multi-Leg Transportation',
        industry: 'Chemicals & Petroleum Products',
        challenge: 'Specialty chemical manufacturer required multi-leg shipment planning (plant to rail-head, rail to port, port to export vessel) with weight-based freight settlement.',
        solution: 'Configured complex multi-stage shipment types, stage-dependent freight calculation schemas, and carrier settlement PO generation.',
        deliverables: ['Shipment Architecture Guide', 'Freight Pricing Matrix', 'Carrier Settlement SOP', 'Cutover Plan']
      }
    ],
    careerOutcomes: [
      { role: 'SAP LE Functional Consultant', experience: '0 - 3 Years', salary: '₹7.5 - ₹12.5 LPA' },
      { role: 'Senior Logistics & Shipping Consultant', experience: '3 - 6 Years', salary: '₹14.0 - ₹21.5 LPA' },
      { role: 'Lead Supply Chain Execution Architect', experience: '7+ Years', salary: '₹24.0 - ₹35.0+ LPA' }
    ],
    targetAudience: [
      'Logistics coordinators, dispatch supervisors, and supply chain analysts wanting to transition to enterprise consulting',
      'SAP SD and MM consultants looking to complete their mastery over the physical delivery and shipping lifecycle',
      'Engineering and MBA operations graduates seeking specialized supply chain IT roles'
    ],
    faqs: [
      {
        question: 'How is SAP LE different from SAP SD Shipping?',
        answer: 'SAP LE expands basic SD shipping into full logistics orchestration: handling multi-leg shipments, packaging units (HUM), advanced picking, and carrier freight settlements.'
      },
      {
        question: 'Is SAP LE still used in S/4HANA?',
        answer: 'Yes. SAP LE remains the foundational shipping execution engine in S/4HANA, interfacing with both embedded TM and EWM modules.'
      },
      {
        question: 'Does this course cover Freight Cost Calculation?',
        answer: 'Yes. In Phase 04, we cover the full shipment cost document (VI01), condition techniques for freight, and automated carrier settlement.'
      },
      {
        question: 'What certification does this training align with?',
        answer: 'This training aligns with the Logistics and Supply Chain Execution competencies evaluated under C_TS462_2023.'
      }
    ]
  },

  // 8. SAP TM (Transportation Management)
  'sap-tm': {
    id: 8,
    code: 'SAP-TM',
    slug: 'sap-tm',
    title: 'SAP TM Training',
    fullName: 'SAP Transportation Management in S/4HANA',
    type: 'functional',
    category: 'Functional Modules',
    heroBadge: 'Multi-Modal Logistics & Fleet Optimization',
    heroHeadline: 'Architect Global Freight Networks with',
    heroHighlight: 'SAP TM & S/4HANA Supply Chain Logistics',
    heroTagline: 'Master Transportation Cockpit, Freight Units, Freight Orders, Route Optimization, Automated Carrier Tendering, Charge Management, and Freight Settlement.',
    heroImage: '/hero_sap_enterprise_luxury.jpg',
    secondaryImage: '/sap_service_integration_hd.jpg',
    featureImage: '/hero_sap_slide1.jpg',
    accentColor: '#2563eb',
    accentGradient: 'from-[#2563eb] via-[#1d4ed8] to-[#1e3a8a]',
    workflowTitle: 'Multi-Modal Freight Planning & Settlement Lifecycle',
    workflowSteps: [
      {
            "stepNum": "01",
            "title": "Freight Unit Building",
            "subtitle": "Demand Consolidation",
            "desc": "Split sales, purchase, and delivery orders into optimized Freight Units (FUBR) based on split limits, capacities, and compatibility rules."
      },
      {
            "stepNum": "02",
            "title": "Transportation Cockpit",
            "subtitle": "Automated Optimization",
            "desc": "Launch visual Gantt and map planning, run heuristic route optimization algorithms, consolidate multi-stop shipments, and build Freight Orders."
      },
      {
            "stepNum": "03",
            "title": "Carrier Tendering",
            "subtitle": "Procurement & Tracking",
            "desc": "Execute automated broadcast or peer-to-peer tendering, capture carrier acceptance via collaboration portal, and monitor milestone tracking events."
      },
      {
            "stepNum": "04",
            "title": "Freight Charge Settlement",
            "subtitle": "Audit & Invoicing",
            "desc": "Compute charges via complex rate tables and fuel surcharges, generate Freight Settlement Documents (FSD), and post Service POs in S/4HANA."
      }
],
    duration: '10 Weeks (Weekend & Weekday Batches)',
    format: 'Live Interactive Mentor-Led + 24/7 Dedicated S/4HANA Sandbox',
    prerequisites: 'Basic knowledge of logistics, shipping, transportation, or SAP SD/LE fundamentals.',
    certificationTrack: 'SAP Enterprise Application Associate - Transportation Management in SAP S/4HANA',
    certificationCode: 'C_S4TM_2023',
    rating: '4.95 / 5.0',
    enrolledStudents: '840+ Alumni Trained',
    metrics: [
      { val: '100%', label: 'Hands-on SPRO Configuration' },
      { val: '24/7', label: 'Dedicated S/4HANA Lab Server' },
      { val: '2', label: 'End-to-End Enterprise Projects' },
      { val: '98%', label: 'Placement & Industry Readiness' }
    ],
    overviewHeading: 'Next-Generation Multi-Modal Freight Network Optimization',
    overviewSubheading: 'Transportation Cockpit • Freight Units • Optimizer • Carrier Tendering • Freight Settlement',
    overviewLead: 'SAP Transportation Management (TM) delivers end-to-end multi-modal freight planning, carrier collaboration, automated route optimization, and financial settlement for global shippers and 3PL freight forwarders.',
    overviewParagraphs: [
      'Global supply disruptions and surging fuel costs demand intelligent transportation management that maximizes truckload capacity, selects optimal multi-modal routes, and automates freight audit reconciliation. In S/4HANA, SAP TM is embedded directly into the core ERP.',
      'Our hands-on training immerses you into the Transportation Cockpit: configuring the Transportation Network (nodes, zones, lanes, and means of transport), defining Freight Unit Building Rules (FUBR), and executing automated optimization runs.',
      'You will master carrier procurement: tendering rules, freight agreements, rate tables, charge calculation engines, and automated Freight Settlement Documents (FSD) integrating directly with SAP S/4HANA Financials.'
    ],
    keyHighlights: [
      { title: 'Transportation Cockpit', desc: 'Master the visual multi-panel planning dashboard: map-based dispatch, Gantt charts, and manual/automated load planning.', icon: 'Workflow' },
      { title: 'Freight Units & Building Rules', desc: 'Configure FUBR rules to break down sales orders and deliveries into weight, volume, and split-compliant freight units.', icon: 'Cpu' },
      { title: 'Automated Carrier Tendering', desc: 'Build broadcast, peer-to-peer, and rank-based carrier tendering with automated timeout and rejection fallbacks.', icon: 'ShieldCheck' },
      { title: 'Charge Management & Settlement', desc: 'Configure calculation sheets, rate tables, freight agreements, and automated carrier settlement PO generation.', icon: 'Layers' }
    ],
    architecturePillars: [
      { tag: 'Transportation Network Map', title: 'Locations, Trans Zones & Transit Lanes', desc: 'Configure shipping locations, customer geofences, transportation zones, transportation lanes, and means of transport.' },
      { tag: 'Demand to Logistics Units', title: 'Order Integration & Freight Unit Building', desc: 'Integrate sales orders, purchase orders, and deliveries into real-time Freight Units (FUs) with capacity splits.' },
      { tag: 'Planning & Capacity Optimization', title: 'Automated Route Planning & Load Optimization', desc: 'Execute automated route optimization, 3D truckload planning, compatibility constraints, and freight order creation.' },
      { tag: 'Financial Dispute Elimination', title: 'Freight Charge Calculation & FSD Settlement', desc: 'Engineer rate tables with fuel surcharges, demurrage rates, dimensional weights, and settle invoices with carrier accounts.' }
    ],
    curriculum: [
      {
        phaseNum: 'Phase 01',
        duration: 'Weeks 1 - 2',
        title: 'Transportation Network & S/4HANA Embedded TM Overview',
        description: 'Build the geographic and physical transit network: locations, business partners, transportation zones, and transit lanes.',
        topics: [
          'Overview of SAP TM Architecture: Embedded TM in S/4HANA vs Standalone TM',
          'SPRO: Defining Transportation Management Basic Settings and Number Ranges',
          'Master Data: Locations (Plants, Customers, Ports, Airports) and Geocoding',
          'Transportation Zones and Transportation Lanes (TLanes): Means of Transport, Distance, and Duration',
          'Equipment Types, Equipment Groups, and Vehicle Resource Definitions',
          'Business Partner Integration: Carrier Master Setup and Carrier Capabilities'
        ],
        handsOnLab: 'Lab: Configure a nationwide transportation network across 6 hub warehouses and 24 regional distribution centers.'
      },
      {
        phaseNum: 'Phase 02',
        duration: 'Weeks 3 - 4',
        title: 'Order Integration & Freight Unit Building (FUBR)',
        description: 'Connect commercial orders to transportation: configure Freight Unit Building Rules (FUBR) and order integration profiles.',
        topics: [
          'Order-Based Transportation Planning (OTR) vs Delivery-Based Planning (DTR)',
          'Direct Integration of Sales Orders, Purchase Orders, and Stock Transport Orders (STOs)',
          'Freight Unit Building Rules (FUBR): Split Rules by Weight, Volume, Capacity, and Compatibility',
          'Incompatibility Definitions: Hazmat and Temperature Control constraints',
          'Managing Freight Units: Life Cycle Statuses and Tracking Dates'
        ],
        handsOnLab: 'Lab: Configure FUBR rules for palletized retail distribution with weight thresholds and temperature-controlled constraints.'
      },
      {
        phaseNum: 'Phase 03',
        duration: 'Weeks 5 - 6',
        title: 'The Transportation Cockpit & Load Optimization',
        description: 'Command the central planning dashboard: manual dispatching, 3D truck load planning, and automated route optimization.',
        topics: [
          'Transportation Cockpit Architecture: Layouts, Page Configurations, and Planning Views',
          'Interactive Planning: Drag-and-Drop Freight Units onto Vehicle Resources and Stages',
          'Automated Optimization Engine: Cost Profiles, Optimization Profiles, and Turnaround Times',
          'Freight Orders (Road) and Freight Bookings (Ocean / Air)',
          'Carrier Tendering Architecture: Broadcast, Direct Tendering, and Peer-to-Peer with Acceptance Timers'
        ],
        handsOnLab: 'Lab: Execute automated route optimization across 120 customer delivery stops to minimize total fleet mileage and vehicle count.'
      },
      {
        phaseNum: 'Phase 04',
        duration: 'Weeks 7 - 8',
        title: 'Charge Management, Carrier Contracts & Freight Settlement',
        description: 'Configure freight tariffs, calculation sheets, carrier agreements, and automated freight settlement documents (FSD).',
        topics: [
          'Charge Management Foundations: Scales, Rate Tables, and Calculation Sheets',
          'Freight Agreements with Carriers: Rates per KM, Per Tonne, Dimensional Weight, and Fuel Surcharges',
          'Charge Calculation Engine: Charge Types, Base Values, and Surcharges',
          'Freight Settlement Documents (FSD): Creation, Verification, and Transfer to S/4HANA Financials',
          'Service Purchase Order Generation, Service Entry Sheet, and Carrier Invoice Match'
        ],
        handsOnLab: 'Lab: Configure tiered freight rate tables with dynamic diesel fuel surcharges and execute automated carrier settlement.'
      },
      {
        phaseNum: 'Phase 05',
        duration: 'Weeks 9 - 10',
        title: 'Execution Tracking, Integration & Certification Preparation',
        description: 'Track real-time shipment milestones, integrate with EWM, and prepare for the official SAP TM certification exam.',
        topics: [
          'Execution Tracking: Execution Statuses, Event Tracking, and Discrepancy Reporting',
          'Integration between SAP TM and SAP EWM (Advanced Shipping and Receiving - ASR)',
          'Carrier Collaboration Portal Overview and Mobile Driver Confirmation touchpoints',
          'Master Data Migration using Migration Cockpit for Transportation Networks',
          'Mock Exam Reviews & Preparation for SAP TM Certification (C_S4TM_2023)'
        ],
        handsOnLab: 'Lab: Capstone Project: End-to-end design and execution of an enterprise freight network with multi-carrier tendering and settlement.'
      }
    ],
    realWorldProjects: [
      {
        title: 'National 3PL Fleet Optimization & Carrier Tendering Network',
        industry: 'Logistics & 3PL Freight Forwarding',
        challenge: 'A national logistics service provider operating 600 vehicles struggled with sub-optimal truckload capacity, manual phone-based carrier tendering, and 45-day freight audit backlogs.',
        solution: 'Implemented S/4HANA embedded TM with automated Transportation Cockpit layouts, broadcast carrier tendering with mobile acceptance, and automated FSD settlement.',
        deliverables: ['Transportation Blueprint', 'FUBR & Network Specs', 'Charge Management Matrix', 'Carrier Settlement Protocol']
      },
      {
        title: 'Global Chemical Container Multi-Modal Freight Pipeline',
        industry: 'Chemicals & Energy Logistics',
        challenge: 'Specialty chemical firm needed multi-modal transit tracking (Plant Rail -> Port Terminal -> Ocean Vessel) with hazmat compatibility constraints and fuel tariff calculations.',
        solution: 'Configured multi-leg Freight Bookings, strict hazmat incompatibility matrices, distance-based rate tables, and automated PO clearing.',
        deliverables: ['Multi-Modal Architecture Blueprint', 'Incompatibility Rules Matrix', 'Freight Rate Configuration Sheet', 'Cutover Plan']
      }
    ],
    careerOutcomes: [
      { role: 'SAP TM Functional Consultant', experience: '0 - 3 Years', salary: '₹8.0 - ₹13.5 LPA' },
      { role: 'Senior Transportation Solution Specialist', experience: '3 - 6 Years', salary: '₹15.0 - ₹23.5 LPA' },
      { role: 'Lead Supply Chain & Logistics Architect', experience: '7+ Years', salary: '₹26.0 - ₹40.0+ LPA' }
    ],
    targetAudience: [
      'Logistics professionals, fleet managers, and supply chain analysts targeting high-demand modern SAP consulting',
      'SAP SD, MM, and LE consultants seeking to specialize in the high-growth SAP TM domain',
      'Engineers and MBA graduates looking for lucrative careers in enterprise supply chain technology'
    ],
    faqs: [
      {
        question: 'What is the market demand for SAP TM consultants?',
        answer: 'Demand for SAP TM is exceptionally high because S/4HANA embeds TM natively as the primary transportation solution, replacing older LE-TRA and standalone middleware.'
      },
      {
        question: 'Is it necessary to know SAP SD or LE before learning SAP TM?',
        answer: 'While basic knowledge of orders and shipping is helpful, our course covers all foundational order integration and shipping fundamentals from scratch.'
      },
      {
        question: 'What version of SAP TM is taught in this course?',
        answer: 'We train on embedded SAP TM in S/4HANA 2023 / 2022, ensuring you are proficient in modern clean-core architecture and Fiori Transportation Cockpit apps.'
      },
      {
        question: 'Which certification exam does this course target?',
        answer: 'This training targets C_S4TM_2023 (SAP Enterprise Application Associate - Transportation Management in SAP S/4HANA).'
      }
    ]
  },

  // 9. SAP EWM (Extended Warehouse Management)
  'sap-ewm': {
    id: 9,
    code: 'SAP-EWM',
    slug: 'sap-ewm',
    title: 'SAP EWM Training',
    fullName: 'SAP Extended Warehouse Management in S/4HANA',
    type: 'functional',
    category: 'Functional Modules',
    heroBadge: 'Smart Warehouse & Automation Mastery',
    heroHeadline: 'Command High-Throughput Warehousing with',
    heroHighlight: 'SAP EWM & S/4HANA Smart Logistics',
    heroTagline: 'Master Warehouse Structure, Storage Bins, Inbound Slotting, Outbound Wave Picking, Storage Control (POSC/LOSC), RF Barcode Framework, and Yard Management.',
    heroImage: '/sap_service_card_rollout_fullhd.jpg',
    secondaryImage: '/cand_austin1.jpg',
    featureImage: '/hero_sap_slide3.jpg',
    accentColor: '#ea580c',
    accentGradient: 'from-[#ea580c] via-[#c2410c] to-[#9a3412]',
    workflowTitle: 'Automated High-Bay Warehouse & RF Flow',
    workflowSteps: [
      {
            "stepNum": "01",
            "title": "Inbound ASN & Yard Entry",
            "subtitle": "Receiving Dock Gate",
            "desc": "Process Advanced Shipping Notifications (ASN), assign yard parking/dock doors, inspect seal verification, and check in delivery containers."
      },
      {
            "stepNum": "02",
            "title": "Automated Putaway & Slotting",
            "subtitle": "Bin Optimization",
            "desc": "Calculate optimal storage bins based on velocity turnover, weight restrictions, hazardous classifications, and cross-docking rules."
      },
      {
            "stepNum": "03",
            "title": "Wave Planning & RF Picking",
            "subtitle": "Order Fulfillment",
            "desc": "Group customer orders into synchronized waves, release Warehouse Tasks, and guide RF scanner pickers along optimized travel routes."
      },
      {
            "stepNum": "04",
            "title": "Packing, Staging & Dispatch",
            "subtitle": "Outbound Release",
            "desc": "Consolidate items at packing work centers, weigh Handling Units, stage in designated shipping lanes, and confirm truck departure."
      }
],
    duration: '10 Weeks (Weekend & Weekday Batches)',
    format: 'Live Interactive Mentor-Led + 24/7 Dedicated S/4HANA Sandbox',
    prerequisites: 'Basic understanding of warehousing, materials, inventory, or SAP MM/LE fundamentals.',
    certificationTrack: 'SAP Enterprise Application Associate - Extended Warehouse Management in SAP S/4HANA',
    certificationCode: 'C_S4EWM_2023',
    rating: '4.97 / 5.0',
    enrolledStudents: '1,530+ Alumni Trained',
    metrics: [
      { val: '100%', label: 'Hands-on SPRO Configuration' },
      { val: '24/7', label: 'Dedicated S/4HANA Lab Server' },
      { val: '2', label: 'End-to-End Enterprise Projects' },
      { val: '98%', label: 'Placement & Industry Readiness' }
    ],
    overviewHeading: 'High-Velocity Distribution & Automated Smart Warehousing',
    overviewSubheading: 'Warehouse Structure • Putaway Strategies • Wave Picking • Storage Control • RF Scanners',
    overviewLead: 'SAP Extended Warehouse Management (EWM) delivers ultra-fast inventory movement, automated storage bin optimization, RF mobile execution, and multi-tier picking for high-throughput distribution centers.',
    overviewParagraphs: [
      'Modern omni-channel distribution centers handle millions of SKU movements daily, coordinating robotic sorters, conveyor systems, RF barcode scanners, and automated guided vehicles (AGVs). SAP EWM is the industry-standard software for high-throughput warehousing.',
      'Our mentor-led curriculum trains you in the full architectural design of an enterprise warehouse: configuring Warehouse Numbers, Storage Types, Storage Sections, and Storage Bins. You will engineer intelligent putaway strategies (slotting, empty bin, bulk storage) and advanced removal strategies (FIFO, LIFO, batch expiration).',
      'You will master Process-Oriented and Layout-Oriented Storage Control (POSC/LOSC), Wave Management, Pick-Pack-and-Pass workflows, Yard Management, Physical Inventory reconciliation, and RF Gun mobile transactions.'
    ],
    keyHighlights: [
      { title: 'Warehouse Structural Hierarchy', desc: 'Design Warehouse Numbers, Storage Types, Sections, Storage Bins, Activity Areas, and Work Centers.', icon: 'Workflow' },
      { title: 'Inbound Putaway & Slotting', desc: 'Configure automatic storage bin search, deconsolidation, quality inspection, and multi-step putaway (POSC).', icon: 'Cpu' },
      { title: 'Outbound Wave Picking & Packing', desc: 'Implement automated wave generation, 2-step picking, packing stations, staging bays, and loading.', icon: 'Layers' },
      { title: 'RF Mobile Framework & Yard Mgmt', desc: 'Configure barcode scanning screens, resource management, yard parking spots, and dock door scheduling.', icon: 'ShieldCheck' }
    ],
    architecturePillars: [
      { tag: 'Warehouse Physical Topology', title: 'Storage Bins, Types & Activity Areas', desc: 'Design warehouse coordinate systems, bin sorting, aisle-bay-tier configurations, and travel distance optimization.' },
      { tag: 'Multi-Step Movement Logic', title: 'Process-Oriented Storage Control (POSC)', desc: 'Configure unloading -> deconsolidation -> quality inspection -> final putaway pipelines with automated warehouse tasks.' },
      { tag: 'Order Fulfillment Velocity', title: 'Wave Templates & Batch Picking', desc: 'Group customer orders into waves based on dispatch deadlines, carrier departure times, and optimized picking routes.' },
      { tag: 'Shop Floor Automation', title: 'RF Gun Framework & Resource Management', desc: 'Implement mobile transaction menus, barcode verification fields, queue assignment, and warehouse task confirmation.' }
    ],
    curriculum: [
      {
        phaseNum: 'Phase 01',
        duration: 'Weeks 1 - 2',
        title: 'Warehouse Structural Setup & S/4HANA EWM Integration',
        description: 'Construct the physical and logical warehouse layout: warehouse numbers, storage types, sections, and storage bin coordinates.',
        topics: [
          'Overview of S/4HANA EWM: Embedded EWM (Basic vs Advanced) vs Decentralized EWM',
          'SPRO: Defining EWM Warehouse Numbers and Mapping to S/4HANA Plant & Storage Locations',
          'Configuring Storage Types (High-Rack, Bulk, Picking Area, Packing Area, Staging Bay)',
          'Storage Sections, Storage Bin Types, and Bin Structure Definitions (/SCWM/LS01)',
          'Activity Areas, Bin Sorting (/SCWM/SBST), and Travel Distance Optimization',
          'Work Center Configuration (/SCWM/TWORKST) for Packing and Deconsolidation'
        ],
        handsOnLab: 'Lab: Configure complete warehouse topology for a 50,000-bin high-bay distribution center with dedicated picking and bulk reserves.'
      },
      {
        phaseNum: 'Phase 02',
        duration: 'Weeks 3 - 4',
        title: 'Inbound Logistics, Putaway Strategies & POSC',
        description: 'Master the incoming material pipeline: Inbound Delivery Notifications, Putaway Rules, Deconsolidation, and Multi-Step Storage Control.',
        topics: [
          'Inbound Delivery Processing (/SCWM/PRDI): Inbound Notifications and Inbound Deliveries',
          'Putaway Strategies: Empty Bin, Fixed Bin, Addition to Existing Stock, Bulk Storage, and General Storage',
          'Storage Type Search Sequences and Storage Section Search Logic',
          'Process-Oriented Storage Control - POSC: External Steps (Unloading, Deconsolidation, Quality Check, Putaway)',
          'Layout-Oriented Storage Control - LOSC: Conveyor Points and Intermediate Pick Points',
          'Deconsolidation Process: Breaking Mixed Pallets into SKU-Specific Bins'
        ],
        handsOnLab: 'Lab: Configure POSC pipeline: Unload from truck -> Move to Deconsolidation table -> Quality inspection -> Final high-rack putaway.'
      },
      {
        phaseNum: 'Phase 03',
        duration: 'Weeks 5 - 6',
        title: 'Outbound Logistics, Wave Management & Picking Strategies',
        description: 'Orchestrate high-speed order fulfillment: stock removal rules, wave templates, packing stations, and goods issue staging.',
        topics: [
          'Outbound Delivery Orders (/SCWM/PRDO): Integration with Sales Orders and Stock Transport Orders',
          'Stock Removal Strategies: FIFO (Strict First-In-First-Out), LIFO, Expiration Date, and Partial Quantities',
          'Wave Management (/SCWM/WAVET): Wave Templates, Wave Filters, Capacity Limits, and Release Rules',
          'Warehouse Order Creation Rules (WOCR): Workload Splitting, Filter Rules, and Limit Values',
          'Two-Step Picking (Pick Collective Quantities -> Disaggregate to Customer Orders)',
          'Packing at Work Center (/SCWM/PACK), Shipping Staging Bays, and Loading to Truck'
        ],
        handsOnLab: 'Lab: Configure automated wave release for 50 customer orders with optimized batch picking and work center packing.'
      },
      {
        phaseNum: 'Phase 04',
        duration: 'Weeks 7 - 8',
        title: 'RF Mobile Framework, Resource Management & Yard Control',
        description: 'Empower warehouse operators with mobile RF barcode scanners, automated work queues, and yard truck management.',
        topics: [
          'Radio Frequency (RF) Framework Architecture (/SCWM/RFUI): Screen Navigation and Customization',
          'Resource Management: Resource Types, Handling Equipment, Users, and Queues',
          'Configuring RF Menus for Putaway, Picking, Packing, and Physical Inventory',
          'Verification Profiles: Barcode Scanning of Storage Bins, Material Barcodes, and Quantities',
          'Yard Management: Parking Spaces, Check-In/Check-Out, Dock Doors, and Truck Scheduling',
          'Physical Inventory in EWM: Annual, Continuous, Cycle Counting, and Difference Clearing'
        ],
        handsOnLab: 'Lab: Execute full RF mobile picking workflow: scan bin barcode, scan item barcode, confirm quantity, and stage at dock door.'
      },
      {
        phaseNum: 'Phase 05',
        duration: 'Weeks 9 - 10',
        title: 'Advanced EWM Features, Migration & Certification Prep',
        description: 'Master advanced value-added services (VAS), slotting/rearrangement, migration cockpit, and official certification preparation.',
        topics: [
          'Value-Added Services (VAS): Kitting to Order and Kitting to Stock',
          'Slotting and Rearrangement: Dynamic Bin Allocation based on Velocity and Turn Rates',
          'Cross-Docking: Opportunistic Cross-Docking (Direct Inbound to Outbound Staging)',
          'Master Data Migration using Migration Cockpit (/SCWM/MIG_BIN)',
          'Mock Exam Reviews & Full Preparation for SAP EWM Certification (C_S4EWM_2023)'
        ],
        handsOnLab: 'Lab: Capstone Project: End-to-end design, SPRO configuration, master data load, and full inbound/outbound execution of a retail DC.'
      }
    ],
    realWorldProjects: [
      {
        title: 'Omni-Channel FMCG Distribution Center EWM Implementation',
        industry: 'Retail & Consumer Goods',
        challenge: 'A national supermarket chain struggled with slow picking speeds, inventory count mismatches, and truck detention fees across its 40,000 sqm central hub.',
        solution: 'Implemented S/4HANA embedded EWM with POSC deconsolidation, automated wave templates, RF barcode validation, and dock door scheduling.',
        deliverables: ['EWM Architecture Blueprint', 'SPRO Configuration Workbook', 'RF Menu Specs', 'UAT Scripts & Test Logs']
      },
      {
        title: 'Pharmaceutical Temperature-Controlled Cold-Chain Warehouse',
        industry: 'Life Sciences & Pharma Logistics',
        challenge: 'Vaccine distribution facility required strict FEFO (First-Expired-First-Out) batch picking, temperature-zone bin restrictions, and lot sampling holds.',
        solution: 'Configured FEFO stock removal rules, temperature-restricted storage types, QM inspection hold integration, and mobile barcode verification.',
        deliverables: ['Cold-Chain Storage Topology Specs', 'FEFO Removal Logic Guide', 'Quality Hold SOP', 'Cutover Master Plan']
      }
    ],
    careerOutcomes: [
      { role: 'SAP EWM Functional Consultant', experience: '0 - 3 Years', salary: '₹8.5 - ₹14.5 LPA' },
      { role: 'Senior Warehouse Solutions Specialist', experience: '3 - 6 Years', salary: '₹15.5 - ₹25.0 LPA' },
      { role: 'Lead Supply Chain & EWM Architect', experience: '7+ Years', salary: '₹27.0 - ₹42.0+ LPA' }
    ],
    targetAudience: [
      'Warehouse supervisors, supply chain managers, and logistics engineers transitioning to enterprise IT consulting',
      'SAP MM, WM, and SD consultants seeking to cross-train into the premier, highest-paying warehousing module',
      'Engineers and MCA/MBA graduates looking for top-tier supply chain technology consulting roles'
    ],
    faqs: [
      {
        question: 'Why is SAP EWM considered one of the highest-paying SAP modules?',
        answer: 'SAP EWM is an advanced, highly specialized module critical to global supply chain operations. With classic WM ending support, thousands of enterprises are migrating to EWM, creating enormous consultant shortages.'
      },
      {
        question: 'What is the difference between Basic EWM and Advanced EWM?',
        answer: 'Basic EWM is included in S/4HANA enterprise core licenses and covers core bin management, putaway, and picking. Advanced EWM adds Wave Management, POSC/LOSC, Slotting, Kitting, and Yard Management. We cover both levels in detail.'
      },
      {
        question: 'Which certification exam does this course target?',
        answer: 'This training prepares you directly for C_S4EWM_2023 (SAP Enterprise Application Associate - Extended Warehouse Management in SAP S/4HANA).'
      },
      {
        question: 'Do we practice RF scanner mobile transactions?',
        answer: 'Yes. You will practice directly using the SAP EWM RF Framework (/SCWM/RFUI) inside your browser, simulating handheld barcode scanner operations.'
      }
    ]
  },

  // 10. SAP ARIBA
  'sap-ariba': {
    id: 10,
    code: 'SAP-ARIBA',
    slug: 'sap-ariba',
    title: 'SAP Ariba Training',
    fullName: 'SAP Ariba Strategic Sourcing & Supplier Network',
    type: 'functional',
    category: 'Functional Modules',
    heroBadge: 'Cloud Procurement & Supplier Collaboration',
    heroHeadline: 'Command Global B2B Procurement with',
    heroHighlight: 'SAP Ariba & Digital Sourcing Networks',
    heroTagline: 'Master Strategic Sourcing, Contract Management, Supplier Lifecycle & Performance (SLP), Guided Buying, Ariba Network Collaboration, and CIG/BTP Integration.',
    heroImage: '/hero_sap_boardroom_luxury.jpg',
    secondaryImage: '/cand_austin2.jpg',
    featureImage: '/exact_sap_consulting_hd.jpg',
    accentColor: '#e11d48',
    accentGradient: 'from-[#e11d48] via-[#be123c] to-[#881337]',
    workflowTitle: 'Strategic Sourcing & Supplier Network Collaboration',
    workflowSteps: [
      {
            "stepNum": "01",
            "title": "Strategic Sourcing & RFP",
            "subtitle": "Supplier Discovery",
            "desc": "Create electronic RFI/RFP events, invite global verified vendors across the Ariba Network, and analyze multi-attribute competitive bids."
      },
      {
            "stepNum": "02",
            "title": "Reverse Auction & Award",
            "subtitle": "Contract Negotiation",
            "desc": "Host real-time dynamic reverse auctions, evaluate total cost of ownership, and publish legally binding Master Services Agreements."
      },
      {
            "stepNum": "03",
            "title": "Guided Buying Procurement",
            "subtitle": "Self-Service Requisition",
            "desc": "Provide catalog-based shopping experiences for employees with automatic corporate policy compliance and touchless PO approval routing."
      },
      {
            "stepNum": "04",
            "title": "Ariba Network Transacting",
            "subtitle": "Collaborative Settlement",
            "desc": "Suppliers receive POs, acknowledge schedules, transmit Advance Ship Notices (ASN), and flip POs to electronic invoices with auto-reconciliation."
      }
],
    duration: '8 Weeks (Weekend & Weekday Batches)',
    format: 'Live Interactive Mentor-Led + Dedicated Cloud Lab Access',
    prerequisites: 'Basic understanding of purchasing, procurement, vendor management, or SAP MM fundamentals.',
    certificationTrack: 'SAP Enterprise Application Associate - SAP Ariba Sourcing / Contracts',
    certificationCode: 'C_ARCON_2308',
    rating: '4.93 / 5.0',
    enrolledStudents: '1,020+ Alumni Trained',
    metrics: [
      { val: '100%', label: 'Hands-on Cloud Lab Configuration' },
      { val: '24/7', label: 'Dedicated Ariba Cloud Sandbox' },
      { val: '2', label: 'End-to-End Enterprise Projects' },
      { val: '98%', label: 'Placement & Industry Readiness' }
    ],
    overviewHeading: 'Digital Sourcing, Guided Buying & Global B2B Networks',
    overviewSubheading: 'Strategic Sourcing • Contract Life Cycle • Supplier Onboarding • Guided Buying • CIG',
    overviewLead: 'SAP Ariba is the world’s largest cloud procurement network, connecting millions of enterprises to streamline spend analysis, supplier sourcing, contract lifecycle, and automated invoice processing.',
    overviewParagraphs: [
      'Enterprises today demand digital, transparent, and compliant procurement. SAP Ariba eliminates manual vendor negotiations and paper-based purchase orders by digitizing the entire supplier relationship on the cloud-based Ariba Business Network.',
      'Our comprehensive training covers both Upstream (Strategic Sourcing, Contract Management, and Supplier Lifecycle & Performance - SLP) and Downstream (Guided Buying, Ariba Buying & Invoicing, and Catalogs) procurement workflows.',
      'You will also master the critical architectural integration bridge: configuring the Cloud Integration Gateway (CIG) powered by SAP BTP, connecting cloud Ariba tenants to backend S/4HANA and ECC ERP systems for real-time document synchronization.'
    ],
    keyHighlights: [
      { title: 'Strategic Sourcing & RFX', desc: 'Build RFI, RFP, and Reverse Auction events with automated multi-criteria supplier bid scoring.', icon: 'Workflow' },
      { title: 'Supplier Lifecycle & Performance', desc: 'Govern vendor onboarding registrations, qualification matrices, risk segmentation, and performance scorecards.', icon: 'ShieldCheck' },
      { title: 'Guided Buying & Catalog Mgmt', desc: 'Configure consumer-grade procurement storefronts, punchout catalogs, and automated policy approvals.', icon: 'Cpu' },
      { title: 'CIG & S/4HANA Integration', desc: 'Connect Ariba cloud tenants with on-premise S/4HANA using Cloud Integration Gateway (CIG) on BTP.', icon: 'Layers' }
    ],
    architecturePillars: [
      { tag: 'Upstream Strategic Procurement', title: 'Sourcing Events & Reverse Auctions', desc: 'Design template-driven sourcing projects, supplier bidding consoles, competitive dynamic auctions, and award scenarios.' },
      { tag: 'Supplier Relationship Governance', title: 'Supplier Lifecycle & Performance (SLP)', desc: 'Implement self-service supplier registration, compliance questionnaires, internal approval workflows, and status synchronization.' },
      { tag: 'Downstream Operational Buying', title: 'Ariba Buying & Invoicing (P2P)', desc: 'Design requisition approval chains, catalog enablement (CIF/Punchout), purchase order transmission, and invoice reconciliation.' },
      { tag: 'Hybrid Enterprise Connectivity', title: 'Cloud Integration Gateway (CIG / BTP)', desc: 'Configure SAP BTP CIG connectors, document mapping, certificate exchange, and automated master/transactional data sync.' }
    ],
    curriculum: [
      {
        phaseNum: 'Phase 01',
        duration: 'Weeks 1 - 2',
        title: 'SAP Ariba Architecture & Strategic Sourcing Execution',
        description: 'Understand the Ariba cloud suite: configure Sourcing Projects, RFI, RFP, and reverse dynamic bidding auctions.',
        topics: [
          'Overview of SAP Ariba Cloud Architecture & The Ariba Network (Ariba Discovery)',
          'Ariba Sourcing Architecture: Sourcing Requests, Sourcing Projects, and Event Templates',
          'Configuring Requests for Information (RFI) and Requests for Proposal (RFP)',
          'Competitive Reverse Auctions: English Auctions, Dutch Auctions, and Sealed Bid Events',
          'Supplier Bidding Consoles, Multi-Currency Bids, and Surrogate Bidding Execution',
          'Bid Evaluation, Multi-Criteria Scoring Rules, and Award Scenario Creation'
        ],
        handsOnLab: 'Lab: Build an end-to-end RFP and dynamic reverse auction event for industrial equipment procurement with 5 competing vendors.'
      },
      {
        phaseNum: 'Phase 02',
        duration: 'Weeks 3 - 4',
        title: 'Contract Lifecycle Management & Compliance',
        description: 'Govern contract drafting, clause libraries, workflow approvals, electronic signatures, and backend compliance.',
        topics: [
          'Ariba Contract Management Architecture: Contract Workspaces (Procurement vs Sales)',
          'Contract Templates, Number Ranges, and Contract Hierarchy (Master Agreement vs Sub-Agreements)',
          'Clause Library Configuration, Section Management, and Microsoft Word Integration',
          'Contract Approval Workflows, Milestones, and Task Assignments',
          'Electronic Signatures (DocuSign / Adobe Sign) Integration',
          'Contract Compliance: Linking Sourcing Awards to Contract Workspaces and Requisition Tracking'
        ],
        handsOnLab: 'Lab: Author and execute an enterprise master service agreement with dynamic clauses and electronic signature routing.'
      },
      {
        phaseNum: 'Phase 03',
        duration: 'Weeks 5 - 6',
        title: 'Supplier Lifecycle & Performance (SLP) Operations',
        description: 'Master self-service vendor registration, qualification surveys, preferred supplier matrix, and vendor scorecards.',
        topics: [
          'Overview of Supplier Lifecycle & Performance (SLP) on SAP Ariba',
          'Supplier Request & Supplier Self-Registration Workflows with Custom Questionnaires',
          'Supplier Qualification Architecture: Commodity, Region, and Business Unit Matrix',
          'Preferred Supplier Management and Tiered Sourcing Eligibility',
          'Supplier Performance Management (SPM): Surveys, KPI Scorecards, and Performance Reviews',
          'Supplier Risk Overview: Compliance Screening, Operational Risk, and Financial Risk Alerts'
        ],
        handsOnLab: 'Lab: Configure end-to-end supplier onboarding workflow: registration request -> qualification questionnaire -> approval -> vendor creation.'
      },
      {
        phaseNum: 'Phase 04',
        duration: 'Weeks 7 - 8',
        title: 'Guided Buying, CIG Integration with S/4HANA & Certification',
        description: 'Deploy consumer-like Guided Buying storefronts and connect Ariba cloud to S/4HANA via Cloud Integration Gateway (CIG).',
        topics: [
          'Ariba Guided Buying Architecture: Landing Pages, Tiles, and Commodity Codes',
          'Catalog Enablement: Internal Catalogs (CIF Format) vs External PunchOut Catalogs (cXML)',
          'Approval Workflow Engine: Approval Rules, Conditions, and Exception Approvals',
          'Cloud Integration Gateway (CIG / BTP): Integration Framework, Setup, and Add-On Installation in S/4HANA',
          'Replicating Master Data (Suppliers, Materials, GL Accounts) and Transactional Documents (PR, PO, Invoices)',
          'Preparation for SAP Ariba Certification (C_ARCON_2308)'
        ],
        handsOnLab: 'Lab: Capstone Project: Configure Guided Buying storefront tile, execute requisition to PO, and synchronize to S/4HANA backend via CIG.'
      }
    ],
    realWorldProjects: [
      {
        title: 'Global Energy Enterprise Cloud Sourcing & SLP Deployment',
        industry: 'Oil & Gas and Energy Infrastructure',
        challenge: 'A global energy provider with 2,400 suppliers faced fragmented vendor evaluations, regulatory compliance blindspots, and lack of contract visibility.',
        solution: 'Implemented SAP Ariba Sourcing, Contract Workspace with clause libraries, and SLP self-service vendor registration with qualification matrix.',
        deliverables: ['Ariba Sourcing Blueprint', 'SLP Questionnaire Specs', 'Contract Clause Library Guide', 'UAT Scripts & Test Logs']
      },
      {
        title: 'Automotive OEM Guided Buying & S/4HANA CIG Integration',
        industry: 'Automotive & Discrete Manufacturing',
        challenge: 'Client required consumer-grade requisitioning for 12,000 employees with automated catalog punchout and real-time PO sync into S/4HANA.',
        solution: 'Configured Guided Buying landing pages, PunchOut catalogs with leading suppliers, and CIG integration with S/4HANA backend.',
        deliverables: ['Guided Buying Architecture Guide', 'CIG Mapping Specification', 'Catalog Enablement Manual', 'Cutover Master Plan']
      }
    ],
    careerOutcomes: [
      { role: 'SAP Ariba Functional Consultant', experience: '0 - 3 Years', salary: '₹8.0 - ₹14.0 LPA' },
      { role: 'Senior Cloud Sourcing Specialist', experience: '3 - 6 Years', salary: '₹15.0 - ₹24.0 LPA' },
      { role: 'Lead Procurement & Cloud Architect', experience: '7+ Years', salary: '₹26.0 - ₹40.0+ LPA' }
    ],
    targetAudience: [
      'Procurement specialists, buyers, and sourcing officers wanting to enter enterprise cloud consulting',
      'SAP MM consultants looking to upgrade to modern cloud procurement and BTP integration',
      'IT analysts and business graduates aiming for high-growth SaaS enterprise careers'
    ],
    faqs: [
      {
        question: 'Do I need to know SAP MM before learning SAP Ariba?',
        answer: 'While knowing SAP MM is advantageous, it is not mandatory. We teach the fundamentals of procurement before diving into Ariba cloud configuration.'
      },
      {
        question: 'What is the difference between Upstream and Downstream Ariba?',
        answer: 'Upstream covers strategic sourcing, vendor contracts, and supplier performance (SLP). Downstream covers operational procurement, Guided Buying catalogs, and automated invoicing. Both are covered in our course.'
      },
      {
        question: 'Which certification exam does this training prepare me for?',
        answer: 'This training prepares you for C_ARCON_2308 (SAP Enterprise Application Associate - SAP Ariba Contracts & Sourcing).'
      },
      {
        question: 'Is Cloud Integration Gateway (CIG) covered in the syllabus?',
        answer: 'Yes. Phase 04 specifically covers CIG on SAP BTP, including how master and transactional data sync between Ariba and S/4HANA.'
      }
    ]
  }
};
