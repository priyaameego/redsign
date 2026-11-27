export interface IndustryStat {
  value: string;
  label: string;
  sublabel: string;
}

export interface IndustryChallenge {
  id: string;
  title: string;
  impact: string;
  description: string;
}

export interface IndustrySolution {
  id: string;
  title: string;
  module: string;
  description: string;
  features: string[];
}

export interface IndustryWorkflowStep {
  step: string;
  name: string;
  stage: string;
  description: string;
}

export interface IndustryOutcome {
  metric: string;
  label: string;
  detail: string;
}

export interface IndustryFaq {
  question: string;
  answer: string;
}

export interface DetailedIndustry {
  id: string;
  slug: string;
  alternateSlugs?: string[];
  name: string;
  tagline: string;
  heroBadge: string;
  heroHeading: string;
  heroHighlight: string;
  heroDescription: string;
  primaryImage: string;
  secondaryImage: string;
  accentColor: string;
  stats: IndustryStat[];
  executiveSummary: string;
  challenges: IndustryChallenge[];
  solutions: IndustrySolution[];
  operationalWorkflows: IndustryWorkflowStep[];
  outcomes: IndustryOutcome[];
  modules: string[];
  caseStudy: {
    clientType: string;
    headline: string;
    challenge: string;
    architecture: string;
    outcome: string;
  };
  faqs: IndustryFaq[];
}

export const DETAILED_INDUSTRIES: Record<string, DetailedIndustry> = {
  manufacturing: {
    id: 'manufacturing',
    slug: 'manufacturing',
    alternateSlugs: ['industrial-manufacturing', 'production'],
    name: 'Manufacturing',
    tagline: 'End-to-End Shop Floor to Top Floor Orchestration',
    heroBadge: 'DISCRETE & PROCESS INDUSTRIAL MANUFACTURING',
    heroHeading: 'Architecting Autonomous, Clean-Core',
    heroHighlight: 'Shop Floor to Top Floor Industrial Agility',
    heroDescription:
      'Synchronizing multi-plant production planning (SAP PP), machine capacity scheduling, automated warehouse staging (SAP EWM), and machine telemetrics for resilient discrete and batch industrial operations.',
    primaryImage: '/manufacturing.jpg',
    secondaryImage: '/austin_tech_hd.jpg',
    accentColor: '#087FE5',
    stats: [
      { value: '28%', label: 'Cycle Turnaround', sublabel: 'Faster end-to-end production runs' },
      { value: '99.4%', label: 'Batch Traceability', sublabel: 'Raw material to customer dispatch' },
      { value: '22%', label: 'Downtime Reduction', sublabel: 'Predictive plant maintenance tuning' },
      { value: '45+', label: 'Plants Deployed', sublabel: 'Across industrial production corridors' }
    ],
    executiveSummary:
      'Industrial manufacturers face escalating raw material price volatility, complex multi-tier bills of materials (BOM), and tight delivery SLAs. ZisanTech engineers unified manufacturing ERP architectures that bridge shop-floor PLCs, SCADA telemetrics, and executive S/4HANA financials into a single real-time operational engine.',
    challenges: [
      {
        id: 'CH-01',
        title: 'Unsynchronized Shop-Floor Scheduling & Bottlenecks',
        impact: 'High idle machine time and unpredictable job completion dates.',
        description:
          'Manual production planning spreadsheets create communication disconnects between sales promises and shop-floor workstation capacity, resulting in frequent changeover delays and unoptimized shift schedules.'
      },
      {
        id: 'CH-02',
        title: 'Multi-Tier BOM Latency & Engineering Changes',
        impact: 'Costly scrap from outdated revision drawings and component mismatch.',
        description:
          'When design engineering modifies component specifications, legacy disconnected ERPs fail to alert shop-floor supervisors immediately, causing obsolete revisions to be assembled.'
      },
      {
        id: 'CH-03',
        title: 'Work-in-Progress (WIP) Capital Locking',
        impact: 'Inflated working capital tied up in semi-finished parts across lines.',
        description:
          'Without real-time material staging notifications and automated kanban replenishment, intermediate inventory accumulates across shop floors without clear traceability.'
      },
      {
        id: 'CH-04',
        title: 'Unplanned Machinery Breakdown Delays',
        impact: 'Entire production cell halts during peak dispatch cycles.',
        description:
          'Reactive maintenance schedules lead to catastrophic spindle and motor failures that halt critical lines during high-volume customer fulfillment windows.'
      }
    ],
    solutions: [
      {
        id: 'SOL-01',
        title: 'Closed-Loop Production Planning & Detailed Scheduling',
        module: 'SAP PP & PP-DS',
        description:
          'Implement constraint-based sequencing considering tool availability, machine load, worker shifts, and priority customer orders to maximize overall equipment effectiveness (OEE).',
        features: [
          'Dynamic finite capacity scheduling across parallel workstations',
          'Automated material reservation & component availability checks',
          'Digital production order confirmations via barcode scanners',
          'Real-time scrap and yield reporting directly to cost accounting'
        ]
      },
      {
        id: 'SOL-02',
        title: 'Precision In-Line Quality Management',
        module: 'SAP QM',
        description:
          'Enforce rigorous inspection lot generation at raw material goods receipt, in-process production milestones, and final pre-dispatch packing.',
        features: [
          'Automatic inspection characteristic triggers on machine completion',
          'Statistical process control (SPC) run charts and defect recording',
          'Instant non-conformance quarantine locking to protect quality',
          'Digital certificate of analysis (CoA) generation upon sign-off'
        ]
      },
      {
        id: 'SOL-03',
        title: 'Autonomous Smart Warehouse & Kanban Staging',
        module: 'SAP EWM',
        description:
          'Synchronize warehouse picking directly with shop-floor job release schedules using automated guided vehicle (AGV) interfaces and wave-picking logic.',
        features: [
          'Two-step material staging to production supply areas (PSA)',
          'Automated bin replenish signals via electronic Kanban cards',
          'Serial number & batch genealogy tracking across assembly steps',
          'Voice and RF picking integration for sub-second confirmations'
        ]
      },
      {
        id: 'SOL-04',
        title: 'Reliability-Centered Plant Asset Maintenance',
        module: 'SAP PM & APM',
        description:
          'Transform scheduled maintenance into condition-based predictive actions by integrating vibration and thermal IoT sensors directly into SAP PM notification pipelines.',
        features: [
          'Automated maintenance work order generation from threshold breaches',
          'Spare parts inventory reservation and consumption tracking',
          'Mean Time Between Failures (MTBF) and MTTR executive analytics',
          'Mobile technician app for on-site checklist completions'
        ]
      }
    ],
    operationalWorkflows: [
      {
        step: '01',
        name: 'Sales & Demand Signal',
        stage: 'Demand Capture',
        description: 'Customer order ingestion trigger automated MRP run calculating net material requirements and work center slots.'
      },
      {
        step: '02',
        name: 'Material Allocation & Staging',
        stage: 'Warehouse Picking',
        description: 'SAP EWM reserves raw materials, verifying inspection lot release, and automatically dispatches to shop floor supply bins.'
      },
      {
        step: '03',
        name: 'Shop-Floor Execution',
        stage: 'Assembly & Telemetrics',
        description: 'Workstations execute jobs against digital routing sheets while IoT gateways capture real-time run hours and power draw.'
      },
      {
        step: '04',
        name: 'In-Line Quality & Confirmation',
        stage: 'Quality Gate',
        description: 'Quality technicians record dimensional checks; upon green pass, finished goods are palletized with serialized barcodes.'
      },
      {
        step: '05',
        name: 'Finished Goods & Dispatch',
        stage: 'Fulfillment',
        description: 'Automated E-Way Bill and GST e-invoicing generation synchronized with carrier pick-up manifests.'
      }
    ],
    outcomes: [
      { metric: '28%', label: 'Cycle Time Reduction', detail: 'Accelerated order-to-dispatch turnaround across high-mix production lines.' },
      { metric: '18%', label: 'WIP Inventory Reduction', detail: 'Optimized material staging eliminating shop-floor inventory buildup.' },
      { metric: '99.4%', label: 'First-Time-Right Quality', detail: 'Rigorous in-line QM preventing defective parts from reaching packing.' },
      { metric: '3.4x', label: 'ROI on Preventive PM', detail: 'Eliminated costly catastrophic machine downtime through sensor triggers.' }
    ],
    modules: ['SAP PP / PP-DS', 'SAP QM', 'SAP MM', 'SAP EWM', 'SAP PM', 'SAP S/4HANA'],
    caseStudy: {
      clientType: 'Multi-Plant Industrial Equipment Manufacturer',
      headline: 'Harmonizing Production Across 4 Heavy Fabrication Facilities with S/4HANA',
      challenge:
        'The client experienced widespread delivery delays due to independent legacy accounting systems at each plant, causing chronic inventory shortages and inaccurate job-cost allocations.',
      architecture:
        'ZisanTech deployed a unified SAP S/4HANA clean-core template across all 4 plants, implementing synchronized SAP PP-DS finite scheduling, integrated EWM material staging, and automated weighbridge logging.',
      outcome:
        'Achieved real-time multi-plant capacity visibility, compressed production lead times by 28%, and delivered 100% on-time customer fulfillment over 18 consecutive months.'
    },
    faqs: [
      {
        question: 'How does ZisanTech connect legacy shop-floor machinery with SAP S/4HANA?',
        answer:
          'We utilize industrial IoT edge gateways, OPC-UA protocol converters, and SAP BTP Integration Suite to translate machine PLC signals (vibration, cycle count, temperature) directly into SAP maintenance notifications and production confirmations without requiring costly machine overhauls.'
      },
      {
        question: 'Can your manufacturing solution handle both discrete and process manufacturing simultaneously?',
        answer:
          'Yes. Many enterprise plants have hybrid operations (e.g. bulk chemical synthesis followed by discrete packaging). We configure SAP PP-PI for batch formulation alongside SAP PP for discrete assembly within a unified bill of materials architecture.'
      },
      {
        question: 'How do you handle engineering change orders (ECO) during active production?',
        answer:
          'Through SAP Engineering Change Management (ECM), any CAD/BOM modification triggers automated validity dates, quarantine of obsolete stock, and immediate notifications to shop-floor digital terminal screens to prevent misassembly.'
      },
      {
        question: 'Does the system support Indian statutory compliance like GST E-Invoicing and E-Way Bills for dispatches?',
        answer:
          'Yes, our pre-configured ZisanTech GST Compliance Bridge connects SAP SD directly with the government NIC portal, generating IRN numbers, signed QR codes, and E-Way Bills in under 3 seconds upon goods issue.'
      }
    ]
  },

  'retail-textile': {
    id: 'retail-textile',
    slug: 'retail-textile',
    alternateSlugs: ['retail', 'textile', 'retail-and-textile'],
    name: 'Retail & Textile',
    tagline: 'Agile Omnichannel Fulfillment & Yarn-to-Garment Lifecycle',
    heroBadge: 'FASHION, APPAREL & OMNICHANNEL RETAIL ERP',
    heroHeading: 'Synchronizing Omnichannel Commerce with',
    heroHighlight: 'Precision Yarn-to-Garment Supply Chain Visibility',
    heroDescription:
      'Harmonizing multi-channel POS transactions, fabric shade-lot and dye batch segregation, dynamic markdown pricing, automated distribution center replenishment, and global garment export fulfillment.',
    primaryImage: '/retail.jpg',
    secondaryImage: '/cand_open_office.jpg',
    accentColor: '#0284C7',
    stats: [
      { value: '35%', label: 'Fulfillment Velocity', sublabel: 'Across retail stores & e-commerce' },
      { value: '< 1s', label: 'Inventory Sync', sublabel: 'Sub-second omnichannel accuracy' },
      { value: '42%', label: 'Deadstock Reduction', sublabel: 'Predictive seasonal markdown tuning' },
      { value: '1,200+', label: 'Connected Outlets', sublabel: 'Synchronized POS and mobile billing' }
    ],
    executiveSummary:
      'Textile mills and fashion retailers navigate short seasonal product lifecycles, complex fabric shade-lot variations, and intense customer expectations for same-day omnichannel delivery. ZisanTech builds unified retail architectures connecting yarn procurement, dye-house batch genealogy, multi-tier warehouse replenishment, and seamless e-commerce checkout.',
    challenges: [
      {
        id: 'CH-01',
        title: 'Channel Inventory Divergence & Stockouts',
        impact: 'Cancelled e-commerce orders and lost physical store sales due to phantom inventory.',
        description:
          'Disparate physical POS systems and online e-commerce platforms update inventory periodically, creating discrepancies where items sold in-store are still presented as available online.'
      },
      {
        id: 'CH-02',
        title: 'Fabric Shade-Lot & Dye-Batch Segregation Errors',
        impact: 'Color mismatches in finished garments resulting in entire shipment rejections.',
        description:
          'In textile manufacturing, dye lots vary subtly across production batches. Mixing fabric rolls from different dye baths in garment cutting causes mismatched sleeves and collars, leading to severe export penalties.'
      },
      {
        id: 'CH-03',
        title: 'Seasonal Markdown & Margin Erosion',
        impact: 'High unsold inventory write-downs at end-of-season clearance.',
        description:
          'Retailers struggle to identify slow-moving styles early in the season, resulting in panic discounts rather than proactive regional transfers to stores with active demand.'
      },
      {
        id: 'CH-04',
        title: 'High Returns & Reverse Logistics Overhead',
        impact: 'Returned apparel items sit unprocessed in distribution centers for weeks.',
        description:
          'Customer returns from online channels overwhelm distribution centers when return authorization, quality grading, and restocking cannot be reconciled automatically with ERP inventory.'
      }
    ],
    solutions: [
      {
        id: 'SOL-01',
        title: 'Unified Omnichannel Inventory & Order Management',
        module: 'SAP SD & S/4HANA Retail',
        description:
          'Establish a single global inventory pool accessible to physical store associates, web storefronts, and third-party marketplace portals with sub-second synchronization.',
        features: [
          'Buy-Online-Pick-Up-in-Store (BOPIS) and ship-from-store orchestration',
          'Dynamic order routing based on proximity and store stock surplus',
          'Automated safety stock thresholds per store format and footfall',
          'Centralized promotional pricing and coupon matrix management'
        ]
      },
      {
        id: 'SOL-02',
        title: 'Textile Lot-Level Batch & Dye-Bath Governance',
        module: 'SAP MM / QM Batch Management',
        description:
          'Capture spinning, weaving, and dye-lot parameters with unique serialized roll tags, ensuring cutting rooms only receive matched fabric rolls.',
        features: [
          'Shade-lot, shrinkage percentage, and GSM attribute tracking',
          'Automated fabric roll reservation for specific garment export orders',
          'Full backward traceability from finished garment barcode to yarn vendor',
          'Digital color fastness and tensile strength test certification'
        ]
      },
      {
        id: 'SOL-03',
        title: 'Automated Distribution Center & Store Replenishment',
        module: 'SAP EWM',
        description:
          'Drive cross-docking and carton-level replenishment from central textile distribution centers directly to regional store hubs based on daily POS sell-through.',
        features: [
          'Cross-docking logic minimizing storage handling for fast-fashion lines',
          'Size-ratio and color-pack picking optimization for store racks',
          'RFID scanning tunnels verifying carton contents in seconds',
          'Automated return-to-vendor (RTV) and refurbishment tracking'
        ]
      },
      {
        id: 'SOL-04',
        title: 'Point-of-Sale (POS) Synchronous Integration',
        module: 'SAP Customer Activity Repository (CAR)',
        description:
          'Process high-volume store transactions in real time, updating gross margins, tax accounts, and inventory reserves with zero latency.',
        features: [
          'Unified customer loyalty profiles across physical counters and web apps',
          'Automated GST multi-rate tax compliance and digital invoice SMS generation',
          'Cashier shift reconciliation and cash-in-transit loss prevention',
          'Offline POS resilience with automated queue synchronization upon reconnect'
        ]
      }
    ],
    operationalWorkflows: [
      {
        step: '01',
        name: 'Yarn Procurement & Dyeing',
        stage: 'Raw Material',
        description: 'Yarn receipt triggers automated chemical dye-lot creation with lab spectral values captured in SAP QM.'
      },
      {
        step: '02',
        name: 'Fabric Weaving & Roll Serial Tagging',
        stage: 'Textile Processing',
        description: 'Woven fabric rolls receive QR barcodes encoding GSM, dye-lot, and length before transfer to the garment division.'
      },
      {
        step: '03',
        name: 'Garment Cutting & Stitching',
        stage: 'Apparel Assembly',
        description: 'SAP PP verifies matched dye lots before cutting markers are released, ensuring 100% color consistency.'
      },
      {
        step: '04',
        name: 'Distribution Center Cross-Docking',
        stage: 'Logistics',
        description: 'Finished garments arrive pre-packed in size-assortment cartons, cross-docked immediately to retail trucks.'
      },
      {
        step: '05',
        name: 'Omnichannel Store & Web Sale',
        stage: 'Consumer Checkout',
        description: 'Point-of-sale purchase or online checkout decrements central stock pool instantaneously across all channels.'
      }
    ],
    outcomes: [
      { metric: '35%', label: 'Order Velocity', detail: 'Rapid fulfillment across physical outlets and marketplace channels.' },
      { metric: '0%', label: 'Dye Mismatch Claims', detail: 'Complete elimination of fabric shade-lot discrepancy rejections.' },
      { metric: '42%', label: 'Deadstock Reduction', detail: 'Dynamic inter-store transfers based on predictive demand analytics.' },
      { metric: '99.9%', label: 'Inventory Accuracy', detail: 'Continuous RFID and barcode cycle counts across all distribution hubs.' }
    ],
    modules: ['SAP S/4HANA Retail', 'SAP SD', 'SAP MM', 'SAP QM', 'SAP EWM', 'SAP CAR'],
    caseStudy: {
      clientType: 'Premier Apparel Retailer & Garment Exporter',
      headline: 'Connecting 85+ Retail Stores and Export Manufacturing onto Unified S/4HANA',
      challenge:
        'The client struggled with 48-hour inventory lag between retail outlets and their central garment factory, causing overproduction of slow styles and frequent online order cancellations.',
      architecture:
        'ZisanTech deployed SAP S/4HANA Retail with real-time POS integration, automated distribution center cross-docking, and textile batch genealogy from spinning mills to retail hangers.',
      outcome:
        'Sub-second inventory synchronization, 35% faster store replenishment, and a 42% decline in end-of-season markdown losses within the first fiscal year.'
    },
    faqs: [
      {
        question: 'How does your solution manage fabric shade-lot and dye variations in textile production?',
        answer:
          'We configure SAP Batch Management with custom characteristics for dye bath ID, laboratory delta-E color variance, and fabric roll shrinkage. The system automatically prevents mixing rolls from different dye batches in the same cutting marker.'
      },
      {
        question: 'Can the retail architecture integrate with Shopify, Magento, and marketplace portals?',
        answer:
          'Yes. Using SAP BTP Integration Suite and REST APIs, inventory changes, price updates, and customer orders synchronize bidirectionally between your SAP ERP and e-commerce platforms in sub-second intervals.'
      },
      {
        question: 'How do store associates check stock across other branches when a size is out of stock?',
        answer:
          'Our mobile POS and associate lookup interface allows store staff to query real-time stock across neighboring outlets within a 15 km radius and initiate an instant store-to-store transfer or customer home dispatch.'
      },
      {
        question: 'What happens to retail operations if the internet connection drops in a store?',
        answer:
          'The store POS operates on a resilient offline caching architecture that allows uninterrupted barcode scanning and customer billing. When connectivity restores, all transactions upload and reconcile automatically.'
      }
    ]
  },

  'oil-gas': {
    id: 'oil-gas',
    slug: 'oil-gas',
    alternateSlugs: ['oil-and-gas', 'energy', 'petroleum'],
    name: 'Oil & Gas',
    tagline: 'Resilient Downstream & Upstream Asset Governance',
    heroBadge: 'ENERGY, PETROLEUM & REFINERY OPERATIONS',
    heroHeading: 'Mission-Critical Plant Asset Reliability &',
    heroHighlight: 'High-Volume Downstream Hydrocarbon Governance',
    heroDescription:
      'Enforcing strict environmental and safety (EHS) compliance, capital equipment maintenance integrity, temperature-adjusted bulk depot inventory balancing, and automated statutory fiscal compliance.',
    primaryImage: '/gas and oil.png',
    secondaryImage: '/skyscraper_hd.jpg',
    accentColor: '#D97706',
    stats: [
      { value: '100%', label: 'Statutory Compliance', sublabel: 'GST E-Invoice & E-Way Bill accuracy' },
      { value: '18%', label: 'Asset Downtime Drop', sublabel: 'Reliability-centered plant maintenance' },
      { value: '500K+', label: 'Monthly Invoices', sublabel: 'High-volume transaction throughput' },
      { value: '24/7', label: 'Mission Support', sublabel: 'SLA-governed dedicated operations' }
    ],
    executiveSummary:
      'Energy and hydrocarbon operators operate in high-consequence environments where equipment reliability is paramount and regulatory mandates are non-negotiable. ZisanTech designs resilient enterprise ERP architectures for refineries, pipeline operators, and fuel distribution networks that guarantee asset safety, supply chain auditability, and flawless fiscal compliance.',
    challenges: [
      {
        id: 'CH-01',
        title: 'Rigorous Environmental, Health & Safety (EHS) Mandates',
        impact: 'Heavy statutory fines and operational shutdown risks for safety non-compliance.',
        description:
          'Refineries and distribution terminals require strict incident reporting, work permit tracking, and hazardous emissions monitoring that legacy manual logbooks cannot substantiate during government audits.'
      },
      {
        id: 'CH-02',
        title: 'Catastrophic Capital Equipment Breakdown Risks',
        impact: 'Multi-million dollar daily losses during unplanned compressor and catalytic cracker shutdowns.',
        description:
          'In continuous chemical processes, unexpected pump or turbine failures force emergency plant flaring and costly downtime that could be prevented through proactive predictive maintenance.'
      },
      {
        id: 'CH-03',
        title: 'Bulk Hydrocarbon Temperature-Volume Variations',
        impact: 'Significant apparent inventory leaks during transit and bulk terminal storage.',
        description:
          'Liquid fuels expand and contract with ambient temperature changes. Failing to calculate standardized density and temperature-adjusted volume at every custody transfer point leads to massive reconciliation discrepancies.'
      },
      {
        id: 'CH-04',
        title: 'High-Volume Statutory Tax & E-Way Bill Velocity',
        impact: 'Fuel tanker trucks detained at state checkpoints due to missing or delayed e-way bills.',
        description:
          'With thousands of road tankers dispatched daily across states, any delay in generating government IRN numbers and E-Way Bills halts distribution fleets at refinery gates.'
      }
    ],
    solutions: [
      {
        id: 'SOL-01',
        title: 'Reliability-Centered Plant Maintenance (RCM)',
        module: 'SAP PM & Asset Performance Management',
        description:
          'Manage the complete lifecycle of heavy rotating equipment, pressure vessels, and safety relief valves with automated calibration intervals and permit-to-work protocols.',
        features: [
          'Digital Permit-to-Work (PTW) workflows with hazardous gas lockout sign-offs',
          'Vibration, pressure, and acoustic sensor telemetry integration',
          'Equipment criticality ranking and spares inventory optimization',
          'Turnaround (TAR) shutdown planning with project milestone controls'
        ]
      },
      {
        id: 'SOL-02',
        title: 'High-Velocity Statutory Tax & E-Way Bill Bridge',
        module: 'SAP Integration Suite & ZisanTech Tax Engine',
        description:
          'Dedicated enterprise connector capable of generating hundreds of thousands of GST E-Invoices and signed E-Way Bills with sub-second response times.',
        features: [
          'Automated queue processing handling 10,000+ invoices per hour during peak cycles',
          'Fallback redundancy with multi-GSP failover ensuring 99.99% uptime',
          'Automated vehicle number updates for multi-modal tanker transshipments',
          'Digital QR code and driver manifest printing at automated terminal gantries'
        ]
      },
      {
        id: 'SOL-03',
        title: 'Bulk Hydrocarbon Custody Transfer & Terminal Balancing',
        module: 'SAP Oil & Gas (IS-Oil)',
        description:
          'Standardize liquid volume accounting using ASTM petroleum measurement tables, reconciling pipeline flow meters and storage tank dips accurately.',
        features: [
          'Automatic temperature and density volume correction (gross to net)',
          'Depot terminal automation system (TAS) serial data interface',
          'Pipeline batch scheduling and transmix interface tracking',
          'Daily reconciliation of opening dips, receipts, sales, and closing stock'
        ]
      },
      {
        id: 'SOL-04',
        title: 'Contractor Lifecycle & Capital Sourcing Automation',
        module: 'SAP Ariba & SAP FICO',
        description:
          'Streamline hazardous site contractor onboarding, safety qualification verification, service entry sheets (SES), and milestone progress billing.',
        features: [
          'Mandatory safety training and insurance certification verification gates',
          'Service entry sheet (SES) mobile verification for field engineers',
          'Joint venture cost allocation and partner billing statements',
          'Automated statutory tax deduction at source (TDS) compliance'
        ]
      }
    ],
    operationalWorkflows: [
      {
        step: '01',
        name: 'Depot Stock Balancing & Tank Dipping',
        stage: 'Terminal Custody',
        description: 'Electronic radar gauges capture fuel levels and temperatures, auto-calculating standardized metric volume in SAP.'
      },
      {
        step: '02',
        name: 'Order Entry & Credit Authorization',
        stage: 'Commercial Clearance',
        description: 'Distributor dealer purchase order is validated against bank guarantees and allocated available fuel quota.'
      },
      {
        step: '03',
        name: 'Gantry Loading & Flowmeter Verification',
        stage: 'Terminal Automation',
        description: 'Tanker driver swipes smart RFID card; automated loading arm pumps exact authorized volume and passes flow data to ERP.'
      },
      {
        step: '04',
        name: 'Sub-Second E-Invoice & E-Way Bill',
        stage: 'Statutory Clearance',
        description: 'ZisanTech bridge connects to NIC portal, returning signed IRN and E-Way Bill before tanker reaches security gate.'
      },
      {
        step: '05',
        name: 'Plant Reliability & Inspection',
        stage: 'Ongoing Operations',
        description: 'SCADA sensors continuously feed motor current and pressure readings into SAP PM condition-monitoring tables.'
      }
    ],
    outcomes: [
      { metric: '100%', label: 'Zero Truck Detention', detail: 'Zero tanker delays due to instantaneous automated E-Way Bill generation.' },
      { metric: '18%', label: 'Less Asset Downtime', detail: 'Proactive component replacements avoiding emergency plant trip-offs.' },
      { metric: '0.02%', label: 'Stock Reconciliation Gap', detail: 'Near-zero transit variance with ASTM temperature-adjusted tracking.' },
      { metric: '99.99%', label: 'Gateway Reliability', detail: 'Mission-critical failover infrastructure handling massive billing spikes.' }
    ],
    modules: ['SAP PM', 'SAP IS-Oil', 'SAP MM', 'SAP FICO', 'SAP BTP', 'ZisanTech Tax Bridge'],
    caseStudy: {
      clientType: 'Downstream Petroleum & Industrial Lubricants Distributor',
      headline: 'Automating High-Volume Tax Compliance Across 500,000+ Monthly Transactions',
      challenge:
        'The client experienced severe dispatch gate congestion and penalties when government tax portals had high latency, blocking fuel tankers at loading gantries.',
      architecture:
        'ZisanTech implemented a dedicated, high-availability SAP integration bridge with asynchronous queueing, multi-GSP automated failover, and sub-second E-Way Bill generation directly integrated into the gantry automation system.',
      outcome:
        'Eliminated all gate-out dispatch delays, processed 500,000+ monthly transactional e-invoices with zero failure, and guaranteed 100% statutory tax alignment.'
    },
    faqs: [
      {
        question: 'How does your solution handle government portal downtime during high-volume fuel dispatches?',
        answer:
          'Our ZisanTech Tax Bridge features multi-GSP automated failover and asynchronous queuing. If the primary government server has latency, transactions route through alternate verified gateway pipes without interrupting physical truck departures.'
      },
      {
        question: 'Does the system integrate with depot Terminal Automation Systems (TAS)?',
        answer:
          'Yes. We interface with Emerson, Honeywell, Yokogawa, and Schneider Terminal Automation Systems via OPC, Modbus, and secure REST APIs to exchange loading manifests and flow meter receipts in real time.'
      },
      {
        question: 'How are temperature-induced volume changes accounted for in fuel inventories?',
        answer:
          'We configure SAP IS-Oil Hydrocarbon Management to apply ASTM Table 53B/54B density and temperature corrections automatically, ensuring that physical liters are converted to standardized volume at 15°C for billing and tax.'
      },
      {
        question: 'Can plant technicians manage work permits and hazardous sign-offs on mobile devices?',
        answer:
          'Yes. Technicians use ruggedized intrinsically safe tablets running our SAP Fiori mobile maintenance suite to review safety checklists, lock-out tag-out (LOTO) protocols, and digitally sign work permits on-site.'
      }
    ]
  },

  'agro-chemical': {
    id: 'agro-chemical',
    slug: 'agro-chemical',
    alternateSlugs: ['agrochem', 'agriculture-chemicals', 'fertilizer'],
    name: 'Agro Chemical',
    tagline: 'Stringent Formulation Governance & Distributed Dealer Networks',
    heroBadge: 'CROP PROTECTION, FERTILIZERS & SPECIALTY AGRO-CHEMICALS',
    heroHeading: 'Precision Chemical Formulation Governance &',
    heroHighlight: 'Scalable Rural Agricultural Distribution Networks',
    heroDescription:
      'Accelerating active ingredient formula versioning, hazardous material documentation, First-Expiry-First-Out (FEFO) warehouse automation, seasonal dealer rebate structures, and batch-wise regulatory traceability.',
    primaryImage: '/Agro Chemical.jpg',
    secondaryImage: '/exact_earth_night_hd.jpg',
    accentColor: '#16A34A',
    stats: [
      { value: 'Zero', label: 'Expired Write-Offs', sublabel: 'Automated FEFO warehouse enforcement' },
      { value: '48 Hrs', label: 'Claim Settlements', sublabel: 'Compressed from 45 days previously' },
      { value: '100%', label: 'Hazard Compliance', sublabel: 'Statutory chemical registry tracking' },
      { value: '1,200+', label: 'Rural Distributors', sublabel: 'Connected via digital dealer portal' }
    ],
    executiveSummary:
      'Agro chemical and fertilizer manufacturers operate under intense seasonal demand compressions tied to monsoon weather patterns, while adhering to stringent toxicological and environmental regulations. ZisanTech deploys robust process manufacturing architectures that safeguard chemical recipe formulation, prevent expired stock write-offs, and accelerate rural dealer order processing.',
    challenges: [
      {
        id: 'CH-01',
        title: 'Stringent Chemical Registration & Environmental Compliance',
        impact: 'Risk of license revocation and product seizures for unrecorded hazardous batches.',
        description:
          'Pesticide and fertilizer formulas require detailed environmental impact sheets, raw active ingredient percentages, and safety data sheets (SDS) that must be furnished instantly to statutory agricultural inspectors.'
      },
      {
        id: 'CH-02',
        title: 'Severe Seasonal Demand Compression',
        impact: 'Lost annual revenue during pre-monsoon farmer sowing windows due to stock unavailability.',
        description:
          'Over 60% of annual crop protection sales occur within a compressed 8-week pre-sowing window. Inability to ramp up production and pre-position inventory at regional agricultural hubs forfeits market share.'
      },
      {
        id: 'CH-03',
        title: 'Active Ingredient Degradation & Shelf-Life Expiry',
        impact: 'Costly hazardous waste disposal of expired chemical formulations.',
        description:
          'Chemical potency decays over time. Without automated First-Expiry-First-Out (FEFO) controls, older batches get trapped behind newer pallets in regional warehouses until they exceed their legal efficacy dates.'
      },
      {
        id: 'CH-04',
        title: 'Complex Rural Dealer Rebates & Disputed Schemes',
        impact: 'Distributor dissatisfaction, delayed payments, and prolonged audit disputes.',
        description:
          'Incentive schemes based on seasonal volume targets, early-order discounts, and freight subsidies take weeks to calculate on spreadsheets, stalling working capital recovery from rural distribution networks.'
      }
    ],
    solutions: [
      {
        id: 'SOL-01',
        title: 'Process Manufacturing & Recipe Formula Governance',
        module: 'SAP PP-PI',
        description:
          'Manage complex active ingredient (AI) chemical syntheses with variable raw material purities, master recipes, and automated potency compensation.',
        features: [
          'Active ingredient assay compensation auto-calculating filler quantities',
          'Strict formula versioning with dual chemical engineer sign-offs',
          'Hazardous raw material storage compatibility matrix checks',
          'By-product and solvent recovery recycling accounting'
        ]
      },
      {
        id: 'SOL-02',
        title: 'First-Expiry-First-Out (FEFO) Warehouse Automation',
        module: 'SAP EWM & QM Batch Management',
        description:
          'Enforce automated picking rules that prioritize lots closest to expiration while ensuring minimum remaining shelf-life requirements are met for retail distribution.',
        features: [
          'Automated remaining shelf-life percentage validation on picking',
          'System-enforced quarantine locks upon expiration date breach',
          'Barcoded drum and container serial identification',
          'Hazardous material segregation in compliance with safety standards'
        ]
      },
      {
        id: 'SOL-03',
        title: 'B2B Rural Dealer Portal & Order Processing',
        module: 'SAP BTP & SAP SD',
        description:
          'Empower agricultural distributors to place orders via mobile apps, check credit limits, track dispatches, and review verified scheme rebate balances in real time.',
        features: [
          'Instant dealer credit scoring with automated order hold / release logic',
          'Seasonal pre-booking with tiered volume discount calculations',
          'Integration with regional logistics carriers for dispatch tracking',
          'Automated credit note generation for seasonal scheme achievements'
        ]
      },
      {
        id: 'SOL-04',
        title: 'Statutory Chemical Batch Genealogy & QR Traceability',
        module: 'SAP QM & Global Track and Trace',
        description:
          'Print unique serialization QR codes on pesticide bottles and secondary cartons, enabling agricultural officers and farmers to verify authentic formulas via smartphone scans.',
        features: [
          'End-to-end genealogy from imported active ingredient to retail bottle',
          'Anti-counterfeit digital verification portal for agricultural dealers',
          'Instant safety data sheet (SDS) and emergency response generation',
          'Automated reporting to national agricultural compliance portals'
        ]
      }
    ],
    operationalWorkflows: [
      {
        step: '01',
        name: 'Raw Active Ingredient Receipt & Assay',
        stage: 'Quality Quarantine',
        description: 'Raw chemical active ingredients enter quarantine; lab testing records purity percentages into SAP QM tables.'
      },
      {
        step: '02',
        name: 'Formula Calculation & Recipe Release',
        stage: 'Process Synthesis',
        description: 'SAP PP-PI calculates exact raw material batch quantities, compensating for chemical purity variations.'
      },
      {
        step: '03',
        name: 'Filling, Packaging & QR Serialization',
        stage: 'Packaging Line',
        description: 'Automated bottling lines serialize bottles and cartons with unique anti-counterfeit QR codes linked to batch data.'
      },
      {
        step: '04',
        name: 'FEFO Warehouse Placement',
        stage: 'Storage Staging',
        description: 'SAP EWM allocates pallet bins according to expiration milestones, locking out any inverted picking.'
      },
      {
        step: '05',
        name: 'Seasonal Dealer Dispatch',
        stage: 'Regional Distribution',
        description: 'Pre-monsoon distributor orders trigger FEFO wave picks, generating instant E-Way Bills and scheme rebate credits.'
      }
    ],
    outcomes: [
      { metric: 'Zero', label: 'Expired Chemical Losses', detail: '100% elimination of expired inventory write-offs through FEFO logic.' },
      { metric: '48 Hrs', label: 'Rebate Settlement', detail: 'Automated scheme calculations reducing claim processing from 45 days.' },
      { metric: '100%', label: 'Traceability Compliance', detail: 'Instant batch genealogy report generation for government inspections.' },
      { metric: '32%', label: 'Pre-Season Sales Surge', detail: 'Mobile dealer ordering accelerating distributor stocking velocity.' }
    ],
    modules: ['SAP PP-PI', 'SAP QM', 'SAP MM', 'SAP EWM', 'SAP SD', 'SAP BTP'],
    caseStudy: {
      clientType: 'Crop Protection & Bio-Stimulants Manufacturer',
      headline: 'Digitizing Formula Governance and Dealer Ordering Across 1,200 Distributors',
      challenge:
        'The client struggled with recurring write-offs of expired crop chemicals and experienced severe dealer disputes over seasonal incentive calculations that took two months to resolve.',
      architecture:
        'ZisanTech implemented SAP PP-PI recipe management with active ingredient potency compensation, automated FEFO warehouse rules, and a dedicated B2B dealer portal connected to SAP SD.',
      outcome:
        'Completely eradicated expired stock disposal costs, slashed dealer rebate reconciliation from 45 days to 48 hours, and expanded seasonal pre-booking by 32%.'
    },
    faqs: [
      {
        question: 'How does SAP PP-PI handle fluctuations in chemical active ingredient purity?',
        answer:
          'We configure active ingredient management in SAP PP-PI. When raw material lots arrive with varying assay percentages (e.g. 92% vs 96% purity), the system automatically adjusts the required recipe weight and neutral filler quantity to guarantee finished formula consistency.'
      },
      {
        question: 'How do you prevent expired or near-expiry pesticides from being shipped to dealers?',
        answer:
          'SAP EWM enforces strict shelf-life expiration date (SLED) checks. It will not allow a warehouse worker to pick a lot that does not meet the minimum remaining shelf-life threshold (e.g. at least 6 months remaining before retail distribution).'
      },
      {
        question: 'Can the rural dealer portal work on low-bandwidth smartphone connections?',
        answer:
          'Yes. The ZisanTech Dealer Portal is built as a lightweight Progressive Web App (PWA) on SAP BTP that caches product catalogs and allows order queuing even on intermittent 3G/4G rural networks.'
      },
      {
        question: 'How does the anti-counterfeit serialization system protect against fake pesticides?',
        answer:
          'Each bottle receives a cryptographically unique 2D data-matrix barcode. When a farmer or dealer scans the code via their smartphone, it verifies authenticity against central SAP records and alerts if the code has been scanned repeatedly.'
      }
    ]
  },

  'steel-metallurgy': {
    id: 'steel-metallurgy',
    slug: 'steel-metallurgy',
    alternateSlugs: ['steel', 'metallurgy', 'metals'],
    name: 'Steel & Metallurgy',
    tagline: 'High-Volume Mill Logistics, Heat Tracking & Metal Yields',
    heroBadge: 'HEAVY METALS, SMELTING & ROLLING MILL LOGISTICS',
    heroHeading: 'High-Velocity Melt-Shop Chemistry Tracking &',
    heroHighlight: 'End-to-End Weighbridge-Integrated Mill Logistics',
    heroDescription:
      'Harmonizing melt-shop to rolling-mill yields, heat-wise chemical composition tracking, automated serial weighbridge interfaces, scrap blend cost variance, and bulk multi-axle freight logistics.',
    primaryImage: '/Steel & Metallurgy.webp',
    secondaryImage: '/austin_tech_hd.jpg',
    accentColor: '#08B9E8',
    stats: [
      { value: '42 Min', label: 'Gate Turnaround', sublabel: 'Faster truck weighment and exit' },
      { value: '99.8%', label: 'Heat Number Trace', sublabel: 'Melt-to-coil chemical genealogy' },
      { value: '16%', label: 'Scrap Recovery Gain', sublabel: 'Optimized furnace charge optimization' },
      { value: '14', label: 'Weighbridges Synced', sublabel: 'Zero manual slip discrepancies' }
    ],
    executiveSummary:
      'Steelmakers and metallurgical plants operate under high thermal energy demands, continuous production line speeds, and immense bulk raw material freight flows. ZisanTech architects unified enterprise platforms that connect melt-shop spectrometer labs, automated weighbridges, scrap blend cost analytics, and rail-rake dispatches directly into SAP ERP.',
    challenges: [
      {
        id: 'CH-01',
        title: 'Tracking Heat Numbers & Chemical Grades Across Stages',
        impact: 'High-value coils downgraded or scrapped due to lost chemical certification data.',
        description:
          'Molten steel undergoes continuous changes in carbon, manganese, and silicon levels. If spectrometer heat test results fail to link seamlessly to cast billets, slabs, and rolled coils, product grades cannot be certified.'
      },
      {
        id: 'CH-02',
        title: 'Weighbridge Congestion & Manual Invoicing Discrepancies',
        impact: 'Hours-long truck queues outside plant gates and revenue leaks from fraudulent weight slips.',
        description:
          'Manual entry of gross and tare weights by weighbridge operators creates massive bottleneck lines of scrap trucks, rail wagons, and finished steel carriers, while exposing the company to weight manipulation.'
      },
      {
        id: 'CH-03',
        title: 'Volatile Scrap & Electrical Power Cost Variance',
        impact: 'Unpredictable unit cost swings in electric arc furnace (EAF) production.',
        description:
          'Scrap grade quality and fluctuating power tariffs make calculating the true cost per metric ton of steel challenging without automated consumption tracking linked to heat batches.'
      },
      {
        id: 'CH-04',
        title: 'Bulk Fleet & Multi-Axle Logistics Coordination',
        impact: 'Heavy demurrage charges on delayed rail rakes and multi-trailer transports.',
        description:
          'Moving tens of thousands of metric tons of structural steel, TMT bars, and coils requires synchronized crane loading, vehicle capacity validation, and instantaneous road transit permits.'
      }
    ],
    solutions: [
      {
        id: 'SOL-01',
        title: 'Automated Weighbridge & Crane Scale Interface',
        module: 'SAP Integration Suite & Serial Hardware Bridge',
        description:
          'Eliminate manual operator keying by reading digital weight indicators directly from weighbridges and crane load cells into SAP goods receipt and delivery documents.',
        features: [
          'Automatic license plate recognition (ANPR) camera integration',
          'Optical beam positioning sensors ensuring trucks are centered on scale',
          'Digital weight capture with zero operator override capability',
          'Instant tamper-evident weight slip and gate pass generation'
        ]
      },
      {
        id: 'SOL-02',
        title: 'Heat Number & Metallurgical Grade Batch Genealogy',
        module: 'SAP QM & Batch Classification',
        description:
          'Integrate melt-shop optical emission spectrometers directly with SAP QM inspection lots, stamping unique heat IDs onto continuous casting lines.',
        features: [
          'Automated chemical analysis ingestion (C, Mn, Si, S, P, Cr percentages)',
          'Automated grade determination matching customer tensile specifications',
          'Parent-child batch tracking from liquid heat to billets and finished TMT bundles',
          'Digital mill test certificate (MTC) PDF generation upon invoice release'
        ]
      },
      {
        id: 'SOL-03',
        title: 'Electric Arc Furnace Scrap Blend & Power Accounting',
        module: 'SAP CO & Process Manufacturing',
        description:
          'Model charge mixes (sponge iron, heavy scrap, shredded scrap, alloys) against real-time power consumption to identify the lowest-cost-to-melt recipe.',
        features: [
          'Yield variance analysis comparing molten metal output against scrap input',
          'Specific power consumption (kWh per ton) analytics per heat cycle',
          'Refractory brick wear and electrode consumption tracking',
          'Real-time cost variance reporting to plant financial controllers'
        ]
      },
      {
        id: 'SOL-04',
        title: 'Heavy Logistics & Multi-Axle Fleet Management',
        module: 'SAP TM (Transportation Management)',
        description:
          'Optimize multi-trailer dispatch loading, axle load distribution calculations, and automated E-Way Bill generation for bulk road and rail movements.',
        features: [
          'Trailer coil rack distribution calculations preventing vehicle overload',
          'Rail rake loading manifest consolidation and railway freight calculation',
          'Automated Indian GST E-Way Bill generation integrated with weighbridge release',
          'Real-time GPS vehicle tracking from mill dispatch to customer stockyards'
        ]
      }
    ],
    operationalWorkflows: [
      {
        step: '01',
        name: 'Inbound Scrap & Ore Weighment',
        stage: 'Gate Inbound',
        description: 'Truck enters automated weighbridge; ANPR reads registration and load cells transmit gross weight directly into SAP.'
      },
      {
        step: '02',
        name: 'Furnace Charging & Spectrometer Test',
        stage: 'Melt Shop',
        description: 'Molten heat chemistry is tested via optical emission spectrometer; values feed SAP QM to create heat batch number.'
      },
      {
        step: '03',
        name: 'Continuous Casting & Rolling',
        stage: 'Mill Rolling',
        description: 'Billets stamped with heat IDs roll into TMT bars or coils, retaining parent metallurgical attributes.'
      },
      {
        step: '04',
        name: 'Finished Steel Tagging & Quality Approval',
        stage: 'Bundle Inspection',
        description: 'Bundles receive high-temperature metal barcodes; lab tests verify yield strength and elongation before green release.'
      },
      {
        step: '05',
        name: 'Automated Tare Weighment & Gate Out',
        stage: 'Outbound Dispatch',
        description: 'Outbound carrier tare weight is confirmed, generating mill test certificate, invoice, and E-Way Bill simultaneously.'
      }
    ],
    outcomes: [
      { metric: '42 Min', label: 'Faster Gate Turnaround', detail: 'Automated weighbridges eliminated manual slip bottlenecks.' },
      { metric: '0%', label: 'Weight Discrepancy Claims', detail: 'Tamper-proof digital weight transfer direct from scale load cells.' },
      { metric: '99.8%', label: 'Heat Number Traceability', detail: 'Instant mill test certificate lookup for any delivered steel bundle.' },
      { metric: '16%', label: 'Scrap Blend Recovery', detail: 'Optimized furnace charge recipes lowering cost per metric ton.' }
    ],
    modules: ['SAP TM', 'SAP QM', 'SAP MM', 'SAP CO', 'SAP Integration Suite', 'SAP S/4HANA'],
    caseStudy: {
      clientType: 'Integrated Steel Mill & Sponge Iron Manufacturer',
      headline: 'Digitizing 14 Weighbridges and Mill Tracking into Central SAP Instance',
      challenge:
        'The steel plant experienced severe truck congestion with average 90-minute weighment queues, frequent invoicing disputes over weight variations, and lost heat identification on finished rebar bundles.',
      architecture:
        'ZisanTech deployed an automated weighbridge interface connecting 14 digital weighbridges and crane load cells directly to SAP ERP with automated ANPR cameras, integrated spectrometer lab testing, and automated Mill Test Certificate generation.',
      outcome:
        'Reduced truck gate-in to gate-out turnaround by 42 minutes, eradicated weight manipulation leaks, and achieved 99.8% heat traceability across 650,000 metric tons of annual production.'
    },
    faqs: [
      {
        question: 'How does your weighbridge automation prevent operator weight manipulation?',
        answer:
          'The weighbridge weight indicator connects directly to SAP ERP via an encrypted serial or TCP/IP interface. Operators cannot manually type or alter the weight figure on their screen. Optical position sensors verify the vehicle is completely on the platform before the reading is accepted.'
      },
      {
        question: 'Can customers access digital Mill Test Certificates (MTC) online?',
        answer:
          'Yes. Every invoice generated automatically bundles a cryptographically signed Mill Test Certificate PDF showing actual chemical composition and mechanical test results corresponding to the specific heat numbers delivered.'
      },
      {
        question: 'How does the system handle multi-grade steel rolling schedules?',
        answer:
          'SAP PP-DS sequences rolling campaigns from pure grades to high-alloy grades to minimize roll wear and roll-change turnaround times, while grouping orders by target diameter and length.'
      },
      {
        question: 'Does the system integrate with rail wagon weighment and rake manifests?',
        answer:
          'Yes. Our logistics module handles in-motion rail weighbridge integrations, calculating axle loads, gross weight per wagon, and consolidating individual wagon tallies into composite railway receipts (RR).'
      }
    ]
  },

  pharma: {
    id: 'pharma',
    slug: 'pharma-life-sciences',
    alternateSlugs: ['pharma', 'life-sciences', 'pharmaceuticals'],
    name: 'Pharma & Life Sciences',
    tagline: 'GxP Validated Formulations, Serialization & Cold Chain Integrity',
    heroBadge: 'GxP COMPLIANT PHARMACEUTICAL & BIOTECH ERP',
    heroHeading: 'GxP-Validated Pharmaceutical Operations &',
    heroHighlight: 'End-to-End Cold Chain Track-and-Trace Integrity',
    heroDescription:
      'Engineering validated active pharmaceutical ingredient (API) synthesis, electronic batch record (EBR) execution, stability chamber testing, automated quarantine release, and serialization compliance.',
    primaryImage: '/Pharma & Life Sciences.jpg',
    secondaryImage: '/industry_pharma_lifesciences.jpg',
    accentColor: '#4F46E5',
    stats: [
      { value: '100%', label: 'Audit Readiness', sublabel: 'For regulatory inspection standards' },
      { value: '65%', label: 'Batch Release Speed', sublabel: 'Compressed quality review cycle' },
      { value: 'Zero', label: 'Cold-Chain Loss', sublabel: 'Continuous thermal excursion alerts' },
      { value: '120+', label: 'Validated SOPs', sublabel: 'Computer System Validation (CSV)' }
    ],
    executiveSummary:
      'Pharmaceutical manufacturers and biotechnology laboratories operate in heavily audited regulatory environments where product quality directly impacts human health. ZisanTech designs validated, audit-ready SAP architectures that enforce electronic signatures, automated batch release controls, clean-core integrations, and end-to-end supply chain serialization.',
    challenges: [
      {
        id: 'CH-01',
        title: 'Rigorous GxP & Electronic Record Mandates',
        impact: 'Warning letters and import alerts for deficient data integrity.',
        description:
          'Paper-based batch records and disconnected laboratory systems create severe audit risks when records lack timestamped electronic signatures, user attribution, and unalterable audit trails.'
      },
      {
        id: 'CH-02',
        title: 'Prolonged Quality Release Cycle Times',
        impact: 'Millions of dollars in finished medicine inventory frozen in quarantine.',
        description:
          'Manual cross-checking of batch manufacturing records (BMR), laboratory analytical results, and deviation reports delays product release by weeks, delaying revenue recognition.'
      },
      {
        id: 'CH-03',
        title: 'Temperature-Sensitive Biologicals & Cold-Chain Excursions',
        impact: 'Spoilage of high-value injectable medications and vaccines during transit.',
        description:
          'Biologics and temperature-sensitive APIs lose efficacy if cold-chain parameters (2°C - 8°C) are breached during shipping, requiring immediate automated quarantine locking in the ERP.'
      },
      {
        id: 'CH-04',
        title: 'Counterfeiting Risks & Global Serialization Standards',
        impact: 'Exclusion from export markets lacking unit-level serial traceability.',
        description:
          'Regulatory authorities require serialization from blister packs to bundles and shipping cartons with automated verification reporting to national track-and-trace repositories.'
      }
    ],
    solutions: [
      {
        id: 'SOL-01',
        title: 'Computer System Validation (CSV) & Audit Trail Engine',
        module: 'SAP Quality Management & Security Governance',
        description:
          'Implement audit-trail-verified SAP S/4HANA workflows compliant with GAMP 5 principles, dual electronic signatures, and immutable change logs.',
        features: [
          'Role-based access control (RBAC) with dual authorization for critical parameters',
          'Automated audit trail logging capturing old value, new value, user, and reason for change',
          'Validated documentation accelerator templates minimizing deployment audit timelines',
          'Periodic user access review and segregation of duties (SoD) enforcement'
        ]
      },
      {
        id: 'SOL-02',
        title: 'Electronic Batch Manufacturing Records (eBMR)',
        module: 'SAP PP-PI & Digital Manufacturing',
        description:
          'Transition paper batch records into guided digital workflows that enforce step-by-step operator sign-offs, equipment calibration checks, and raw material barcode scans.',
        features: [
          'Pre-execution equipment clean-in-place (CIP) and sterilization sign-offs',
          'Barcode scanning ensuring exact raw material dispensing accuracy',
          'In-process control (IPC) parameter checks with immediate out-of-spec halts',
          'Review-by-exception accelerating quality assurance batch release'
        ]
      },
      {
        id: 'SOL-03',
        title: 'Stability Testing & Sample Management',
        module: 'SAP QM Stability Studies',
        description:
          'Automate long-term, accelerated, and intermediate stability testing programs across controlled climatic storage chambers with automated notification schedules.',
        features: [
          'Automatic sample pull notifications based on stability time protocols',
          'Testing interval calendars linked to stability chamber storage locations',
          'Out-of-trend (OOT) and out-of-specification (OOS) automated deviation creation',
          'Automated shelf-life calculation and re-test date determination'
        ]
      },
      {
        id: 'SOL-04',
        title: 'IoT Cold Chain & Track-and-Trace Serialization',
        module: 'SAP Advanced Track and Trace for Pharma (ATTP)',
        description:
          'Assign cryptographically secure serial numbers across packaging hierarchies (unit, pack, case, pallet) with automated environmental sensor telemetry.',
        features: [
          'Parent-child aggregation across high-speed blister packing lines',
          'Real-time IoT temperature data-logger ingestion triggering transit quarantine locks',
          'Compliance interfaces supporting national serialization repositories',
          'Automated recall management capable of pinpointing distribution coordinates in minutes'
        ]
      }
    ],
    operationalWorkflows: [
      {
        step: '01',
        name: 'API Raw Material Receipt & Strict Quarantine',
        stage: 'Quarantine Gate',
        description: 'Active ingredients enter physical and electronic quarantine; SAP QM generates random sample testing lots.'
      },
      {
        step: '02',
        name: 'Digital Dispensing & Gravimetric Check',
        stage: 'Clean Room Dispensing',
        description: 'Barcoded containers are scanned on calibrated digital balances, verifying exact recipe weights before cleanroom release.'
      },
      {
        step: '03',
        name: 'eBMR Formulation & IPC Testing',
        stage: 'Formulation Suite',
        description: 'Granulation, compression, and coating steps require dual electronic signatures on digital touchscreen terminals.'
      },
      {
        step: '04',
        name: 'High-Speed Packaging & Serialization',
        stage: 'Blister & Carton Line',
        description: 'Vision systems print unique 2D barcodes, aggregate blisters into cases, and report serial batches to SAP ATTP.'
      },
      {
        step: '05',
        name: 'Quality Assurance Review & Batch Release',
        stage: 'Market Release',
        description: 'QA leads review exceptions digitally; upon approval, finished pharmaceuticals transfer to temperature-controlled logistics.'
      }
    ],
    outcomes: [
      { metric: '100%', label: 'Regulatory Audit Readiness', detail: 'Impeccable data integrity verified across inspection audits.' },
      { metric: '65%', label: 'Compressed QA Release Time', detail: 'Review-by-exception replacing manual multi-day paper record audits.' },
      { metric: 'Zero', label: 'Cold-Chain Losses', detail: 'Instant thermal excursion alerts preventing spoiled medication releases.' },
      { metric: '100%', label: 'Serialization Compliance', detail: 'End-to-end carton-to-pallet traceability across global supply chains.' }
    ],
    modules: ['SAP S/4HANA Life Sciences', 'SAP QM', 'SAP PP-PI', 'SAP ATTP', 'SAP EWM', 'SAP BTP'],
    caseStudy: {
      clientType: 'Sterile Injectables & Active Pharmaceutical Ingredient Major',
      headline: 'Digitizing Electronic Batch Records and Quality Release for FDA Compliance',
      challenge:
        'The client relied on 200-page manual paper batch records per manufacturing lot, causing a 14-day QA review backlog and increasing vulnerability to manual record discrepancies during audit reviews.',
      architecture:
        'ZisanTech implemented SAP S/4HANA with electronic batch records (eBMR), dual-signature digital dispensing, automated stability chamber sample management, and complete CSV validation packages.',
      outcome:
        'Compressed quality batch release turnaround by 65%, eliminated documentation errors, and maintained 100% audit readiness across multiple national and international regulatory audits.'
    },
    faqs: [
      {
        question: 'How does your solution guarantee data integrity for electronic signatures?',
        answer:
          'All electronic signatures require dual-factor authentication (username and unique encrypted password) with mandatory predefined reason-for-signing metadata. All changes are recorded with millisecond timestamps in unalterable audit trail tables.'
      },
      {
        question: 'Do you provide Computer System Validation (CSV) documentation packages?',
        answer:
          'Yes. We provide comprehensive GAMP 5-aligned validation dossiers, including User Requirement Specifications (URS), Functional Specifications (FS), Installation Qualification (IQ), Operational Qualification (OQ), and Performance Qualification (PQ) testing scripts.'
      },
      {
        question: 'How does the system handle Out of Specification (OOS) lab test results?',
        answer:
          'Any test result breaching pre-set pharmacopeia specification limits immediately halts the batch workflow in SAP QM, generates an automated deviation notification, locks the material in electronic quarantine, and triggers root-cause investigation workflows.'
      },
      {
        question: 'Can the platform integrate with cold-chain transit temperature loggers?',
        answer:
          'Yes. Bluetooth and cellular temperature loggers automatically upload time-temperature profiles to SAP upon receipt at distribution hubs. If temperature thresholds were breached during transit, the batch is automatically locked from commercial release.'
      }
    ]
  }
};
