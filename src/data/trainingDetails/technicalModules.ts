import { DetailedTrainingModule } from './types';

export const TECHNICAL_MODULES: Record<string, DetailedTrainingModule> = {
  // 11. SAP ABAP on HANA
  'sap-abap': {
    id: 11,
    code: 'SAP-ABAP',
    slug: 'sap-abap',
    title: 'SAP ABAP on HANA Training',
    fullName: 'SAP ABAP on HANA & RESTful Application Programming (RAP)',
    type: 'technical',
    category: 'Technical Modules',
    heroBadge: 'Modern Development & Clean-Core Extensibility',
    heroHeadline: 'Engineer High-Performance S/4HANA Applications with',
    heroHighlight: 'Modern ABAP, CDS Views & RAP Architecture',
    heroTagline: 'Master ABAP 7.5+ expressions, Core Data Services (CDS Views), ABAP RESTful Application Programming Model (RAP), OData services, AMDP, and clean-core side-by-side extensions.',
    heroImage: '/modern_dev_team_hd.jpg',
    secondaryImage: '/austin_tech_hd.jpg',
    featureImage: '/photo-1531482615713-2afd69097998_1600.jpg',
    accentColor: '#0284c7',
    accentGradient: 'from-[#0284c7] via-[#0369a1] to-[#075985]',
    workflowTitle: 'Modern ABAP RESTful Application Programming (RAP) Pipeline',
    workflowSteps: [
      {
            "stepNum": "01",
            "title": "CDS View Data Modeling",
            "subtitle": "In-Memory Definition",
            "desc": "Build Core Data Services (CDS Views) in Eclipse ADT with entity relationships, semantic annotations, parameters, and access controls (DCL)."
      },
      {
            "stepNum": "02",
            "title": "RAP Behavior Definition",
            "subtitle": "Business Object Design",
            "desc": "Define behavior definition (BDEF) specifying managed or unmanaged implementation, draft capabilities, transactional locks, and field controls."
      },
      {
            "stepNum": "03",
            "title": "Determinations & Validations",
            "subtitle": "Business Logic Execution",
            "desc": "Implement business logic in Behavior Pools (BP): write determinations for automated defaults, validations for data integrity, and custom actions."
      },
      {
            "stepNum": "04",
            "title": "OData V4 & Fiori Elements",
            "subtitle": "Service Exposure",
            "desc": "Create Service Definition and Service Binding, expose high-performance OData V4 APIs, and test instantly in live Fiori Elements preview."
      }
],
    duration: '10 Weeks (Weekend & Weekday Batches)',
    format: 'Live Interactive Mentor-Led + 24/7 Dedicated S/4HANA Sandbox',
    prerequisites: 'Basic understanding of programming logic (C, Java, Python, or SQL). Prior ABAP knowledge is not required.',
    certificationTrack: 'SAP Enterprise Development Associate - ABAP with SAP NetWeaver 7.50 / S/4HANA',
    certificationCode: 'C_TAW12_750',
    rating: '4.98 / 5.0',
    enrolledStudents: '1,890+ Alumni Trained',
    metrics: [
      { val: '100%', label: 'Hands-on Code & Eclipse ADT' },
      { val: '24/7', label: 'Dedicated S/4HANA Lab Server' },
      { val: '2', label: 'End-to-End Enterprise Projects' },
      { val: '98%', label: 'Placement & Industry Readiness' }
    ],
    overviewHeading: 'Modern Cloud-Ready Software Engineering on SAP HANA',
    overviewSubheading: 'Modern Syntax • Core Data Services • RAP Model • OData V4 • AMDP • Clean Core',
    overviewLead: 'SAP ABAP on HANA is the primary language for building mission-critical enterprise applications, leveraging in-memory database acceleration, Core Data Services, and the RESTful Application Programming model (RAP).',
    overviewParagraphs: [
      'The transition to S/4HANA has fundamentally revolutionized ABAP development. Legacy procedural ABAP has been superseded by in-memory code pushdown techniques, Core Data Services (CDS Views), and the ABAP RESTful Application Programming Model (RAP) for Fiori cloud applications.',
      'Our curriculum takes you from core object-oriented software engineering to advanced S/4HANA clean-core development. Using Eclipse with ABAP Development Tools (ADT), you will write modern inline syntax, construct complex CDS views with associations and annotations, and publish OData V2/V4 services.',
      'You will build full-stack enterprise Fiori applications using RAP: defining data models, behavior definitions, authorization controls, validations, determinations, and ABAP Managed Database Procedures (AMDP) executing directly in the HANA database layer.'
    ],
    keyHighlights: [
      { title: 'Modern ABAP 7.5+ Syntax', desc: 'Master inline declarations, constructor operators (VALUE, CORRESPONDING), string templates, and table expressions.', icon: 'Cpu' },
      { title: 'Core Data Services (CDS)', desc: 'Build semantic data models directly in the database with annotations, associations, parameters, and input filters.', icon: 'Workflow' },
      { title: 'The RAP Model Framework', desc: 'Develop full-stack Fiori apps using the ABAP RESTful Application Programming Model with draft capabilities.', icon: 'Layers' },
      { title: 'HANA Code Pushdown & AMDP', desc: 'Write SQLScript database procedures inside ABAP (AMDP), leveraging parallel processing and vector execution.', icon: 'ShieldCheck' }
    ],
    architecturePillars: [
      { tag: 'Development Tooling', title: 'Eclipse ADT & ABAP Environment', desc: 'Shift from legacy SAP GUI SE38 to Eclipse ABAP Development Tools (ADT), Git integration, and Cloud ABAP development.' },
      { tag: 'In-Memory Data Modeling', title: 'Core Data Services (CDS Views)', desc: 'Design analytical and transactional data models with associations, access controls (DCL), and metadata extensions.' },
      { tag: 'Enterprise Application Model', title: 'RESTful Programming (RAP) Pipeline', desc: 'Implement business objects with managed/unmanaged implementation, determinations, validations, and actions.' },
      { tag: 'Performance & Clean Core', title: 'HANA Tuning & Side-by-Side Extensions', desc: 'Analyze code with ABAP Test Cockpit (ATC), SQL Trace (ST05), Runtime Analysis (SAT), and BTP clean-core extensions.' }
    ],
    curriculum: [
      {
        phaseNum: 'Phase 01',
        duration: 'Weeks 1 - 2',
        title: 'ABAP Fundamentals, Data Dictionary & Modern Syntax',
        description: 'Establish programming foundations in Eclipse ADT: data types, internal tables, and modern ABAP 7.5+ syntax.',
        topics: [
          'Setting up Eclipse IDE with ABAP Development Tools (ADT) & S/4HANA Connection',
          'ABAP Data Dictionary (SE11 / ADT): Domain, Data Element, Database Tables, Structures, and Views',
          'Modern ABAP Syntax Expressions: Inline Declarations (DATA(..)), VALUE, CORRESPONDING, and REDUCE',
          'Internal Table Operations: Hashed vs Sorted vs Standard Tables, FOR Expressions, and Table Comprehensions',
          'Object-Oriented ABAP (OO-ABAP): Classes, Methods, Interfaces, Inheritance, and Polymorphism',
          'Debugging Techniques in Eclipse ADT and Exception Handling (TRY...CATCH)'
        ],
        handsOnLab: 'Lab: Build an object-oriented business engine in Eclipse using modern inline syntax, table comprehensions, and custom exception classes.'
      },
      {
        phaseNum: 'Phase 02',
        duration: 'Weeks 3 - 4',
        title: 'Core Data Services (CDS Views) on SAP HANA',
        description: 'Design semantic in-memory data models using CDS: associations, joins, parameters, annotations, and access controls.',
        topics: [
          'The Code-to-Data (Pushdown) Paradigm: Classical Database Access vs In-Memory Execution',
          'Defining Basic, Composite, and Consumption CDS Views in Eclipse ADT',
          'CDS View Syntax: Calculated Fields, Case Statements, String Functions, and Arithmetic Functions',
          'Associations vs Joins: On-Demand Lazy Loading and Path Expressions',
          'Input Parameters in CDS Views and Session Variables ($session.user, $session.system_date)',
          'Data Control Language (DCL): Row-Level Security, Authorizations, and Access Rules'
        ],
        handsOnLab: 'Lab: Engineer a 3-tier CDS data model (Basic -> Composite -> Consumption) aggregating real-time Sales Order and Billing data.'
      },
      {
        phaseNum: 'Phase 03',
        duration: 'Weeks 5 - 6',
        title: 'OData Service Creation & Fiori Elements Integration',
        description: 'Expose enterprise data models as RESTful OData services for SAP Fiori Elements web applications.',
        topics: [
          'REST Principles and OData Protocol (OData V2 vs OData V4) in SAP S/4HANA',
          'Exposing CDS Views via SADL (Service Adaptation Description Language)',
          'Auto-Exposure with @OData.publish: true and Service Maintenance (/IWFND/MAINT_SERVICE)',
          'Creating OData Services via SAP Gateway Service Builder (SEGW): Entity Types, Entity Sets, CRUD-Q Operations',
          'CDS UI Annotations: LineItem, HeaderInfo, SelectionField, and Facet Annotations',
          'Testing OData Services using SAP Gateway Client and previewing in SAP Fiori Elements'
        ],
        handsOnLab: 'Lab: Expose a customer order CDS consumption view as an OData service and render a dynamic Fiori Elements List Report app.'
      },
      {
        phaseNum: 'Phase 04',
        duration: 'Weeks 7 - 8',
        title: 'The ABAP RESTful Application Programming Model (RAP)',
        description: 'Master the premier S/4HANA cloud development framework: Business Objects, Managed Implementation, and Drafts.',
        topics: [
          'Architecture of the ABAP RESTful Application Programming Model (RAP)',
          'RAP Building Blocks: Data Model (CDS), Behavior Definition (BDEF), and Behavior Implementation',
          'Managed vs Unmanaged RAP Implementation Scenarios',
          'Implementing Business Logic: Determinations (On Modify/Save), Validations, and Actions',
          'Enabling Draft Capabilities: Draft Database Tables, Activation, and Discard Actions',
          'Service Definition and Service Binding (OData V4 Web API & UI Services)'
        ],
        handsOnLab: 'Lab: Build a complete full-stack enterprise Travel and Booking Management RAP application with draft management and validations.'
      },
      {
        phaseNum: 'Phase 05',
        duration: 'Weeks 9 - 10',
        title: 'AMDP, Performance Tuning & Clean-Core Certification Prep',
        description: 'Execute high-speed SQLScript database procedures, optimize code performance, and achieve global ABAP certification.',
        topics: [
          'ABAP Managed Database Procedures (AMDP): Writing SQLScript inside ABAP Class Methods',
          'AMDP Functions and CDS Table Functions',
          'Performance Tools: ABAP Test Cockpit (ATC), SQL Trace (ST05), and Runtime Analysis (SAT)',
          'S/4HANA Clean-Core Strategy: Key-User Extensibility, Developer Extensibility, and Side-by-Side BTP Extensions',
          'Mock Exam Reviews & Full Preparation for SAP ABAP Certification (C_TAW12_750)'
        ],
        handsOnLab: 'Lab: Capstone Project: End-to-end development of an enterprise inventory forecasting application using CDS, AMDP, and RAP.'
      }
    ],
    realWorldProjects: [
      {
        title: 'High-Volume Financial Reporting CDS & RAP Fiori Suite',
        industry: 'Banking & Financial Services',
        challenge: 'A global financial corporation faced 45-minute report execution delays and timeout errors on classic ALV reports processing 20 million ledger records.',
        solution: 'Built optimized multi-tier CDS Views with AMDP aggregation pushdown and an OData V4 RAP Fiori application delivering sub-second reporting.',
        deliverables: ['Technical Architecture Blueprint', 'CDS View Code Repository', 'RAP Behavior Implementation Specs', 'ATC Performance Sign-off']
      },
      {
        title: 'Custom Procurement Workflow & Automated Approval Engine',
        industry: 'Manufacturing & Engineering',
        challenge: 'Client needed an automated material requisition portal supporting dynamic validation rules, complex price threshold calculations, and draft editing.',
        solution: 'Developed a Managed RAP application with draft handling, custom business logic validations, automated approval actions, and clean-core Fiori UI.',
        deliverables: ['RAP BDEF Specifications', 'Behavior Class Code', 'Service Binding Manual', 'UAT Test Protocols']
      }
    ],
    careerOutcomes: [
      { role: 'SAP ABAP on HANA Developer', experience: '0 - 3 Years', salary: '₹8.0 - ₹14.0 LPA' },
      { role: 'Senior S/4HANA RAP & Fiori Engineer', experience: '3 - 6 Years', salary: '₹15.0 - ₹24.0 LPA' },
      { role: 'Lead Enterprise Technical Architect', experience: '7+ Years', salary: '₹26.0 - ₹42.0+ LPA' }
    ],
    targetAudience: [
      'B.Tech / MCA / B.Sc Computer Science graduates seeking premier enterprise software engineering careers',
      'Classical procedural ABAP developers seeking to modernize to CDS, RAP, and S/4HANA clean-core development',
      'Java, Python, and SQL software engineers transitioning to high-paying enterprise SAP engineering roles'
    ],
    faqs: [
      {
        question: 'Do I need prior ABAP experience to join this course?',
        answer: 'No. The course begins with core programming concepts and the ABAP Data Dictionary before progressing through modern 7.5+ syntax, CDS views, and RAP architecture.'
      },
      {
        question: 'Is Eclipse ADT used instead of SAP GUI?',
        answer: 'Yes. In modern S/4HANA development, Eclipse with ABAP Development Tools (ADT) is the industry standard. We train entirely in Eclipse ADT.'
      },
      {
        question: 'What certification will I be prepared for?',
        answer: 'You will be prepared for C_TAW12_750 (SAP Enterprise Development Associate - ABAP with SAP NetWeaver 7.50 / SAP BTP ABAP Environment).'
      },
      {
        question: 'Will I learn the ABAP RESTful Application Programming Model (RAP)?',
        answer: 'Yes. RAP is covered extensively in Phase 04, including managed implementations, draft handling, determinations, validations, and OData V4 service bindings.'
      }
    ]
  },

  // 12. SAP BASIS & Cloud Administration
  'sap-basis': {
    id: 12,
    code: 'SAP-BASIS',
    slug: 'sap-basis',
    title: 'SAP BASIS Training',
    fullName: 'SAP BASIS Administration & Enterprise Cloud Infrastructure',
    type: 'technical',
    category: 'Technical Modules',
    heroBadge: 'Systems Architecture & 24/7 Enterprise Reliability',
    heroHeadline: 'Command Enterprise Landscape Infrastructure with',
    heroHighlight: 'SAP BASIS & S/4HANA Cloud Administration',
    heroTagline: 'Master SAP NetWeaver architecture, HANA in-memory database administration, Transport Management System (TMS/ChaRM), security authorizations, client copies, and kernel upgrades.',
    heroImage: '/sap_hero_slide2_architecture.jpg',
    secondaryImage: '/meeting_room_hd.jpg',
    featureImage: '/photo-1504384308090-c894fdcc538d.jpg',
    accentColor: '#334155',
    accentGradient: 'from-[#334155] via-[#1e293b] to-[#0f172a]',
    workflowTitle: 'Mission-Critical Enterprise Operations & System Governance',
    workflowSteps: [
      {
            "stepNum": "01",
            "title": "Landscape & System Setup",
            "subtitle": "High Availability",
            "desc": "Install and configure S/4HANA instances, configure Web Dispatcher load balancing, and implement HANA System Replication (HSR) with automatic failover."
      },
      {
            "stepNum": "02",
            "title": "TMS Transport Governance",
            "subtitle": "Change Deployment",
            "desc": "Establish Transport Management System (TMS) domains, design multi-tier DEV-QAS-PRD transport routes, and govern automated cutover imports."
      },
      {
            "stepNum": "03",
            "title": "Proactive Performance Tuning",
            "subtitle": "System Health Diagnostics",
            "desc": "Monitor work process queues (SM50), analyze slow SQL statements (ST05), tune SAP memory buffer pools (ST02), and clear table locks (SM12)."
      },
      {
            "stepNum": "04",
            "title": "Patching, SUM & Disaster Recovery",
            "subtitle": "Zero-Downtime Maintenance",
            "desc": "Execute Support Package Stack upgrades via Software Update Manager (SUM), configure HANA storage backups, and test DR recovery points (RPO/RTO)."
      }
],
    duration: '10 Weeks (Weekend & Weekday Batches)',
    format: 'Live Interactive Mentor-Led + 24/7 Dedicated Server Root Access',
    prerequisites: 'Basic knowledge of operating systems (Linux/Windows), computer networks, databases, or IT infrastructure.',
    certificationTrack: 'SAP Enterprise Technology Consultant - SAP S/4HANA System Administration',
    certificationCode: 'C_TADM_23',
    rating: '4.96 / 5.0',
    enrolledStudents: '1,320+ Alumni Trained',
    metrics: [
      { val: '100%', label: 'Hands-on Server Administration' },
      { val: '24/7', label: 'Dedicated S/4HANA Linux Sandbox' },
      { val: '2', label: 'End-to-End Enterprise Projects' },
      { val: '98%', label: 'Placement & Industry Readiness' }
    ],
    overviewHeading: 'Enterprise System Architecture, High Availability & Database Operations',
    overviewSubheading: 'NetWeaver • HANA DB Cockpit • TMS & ChaRM • User Authorizations • Performance Tuning',
    overviewLead: 'SAP BASIS is the administrative backbone of the entire SAP landscape, ensuring 99.999% uptime, seamless database performance, enterprise security, and automated transport deployments.',
    overviewParagraphs: [
      'Enterprises run their multi-billion dollar operations on SAP landscapes. Any infrastructure downtime or database bottleneck halts factories, warehouses, and billing systems worldwide. SAP BASIS administrators are the mission-critical engineers who keep these enterprise engines running.',
      'Our hands-on training provides root-level administrative access to live Linux-based SAP S/4HANA and HANA 2.0 database environments. You will learn to architect 3-tier landscapes (Development, Quality, Production), configure the Transport Management System (TMS), and govern automated transport release protocols.',
      'You will master SAP HANA Database operations using HANA Studio and SAP HANA Cockpit: memory sizing, backup/recovery protocols, table partitioning, user authorizations (PFCG), background job management, spool configuration, kernel patch updates, and system copies.'
    ],
    keyHighlights: [
      { title: 'NetWeaver & S/4HANA Architecture', desc: 'Master AS ABAP processes: Dispatcher, Work Processes (DIA, UPD, BGD, SPO), Message Server, and Enqueue Server.', icon: 'Cpu' },
      { title: 'SAP HANA DB Administration', desc: 'Govern in-memory database operations, backup/recovery, memory dumps, license installation, and CPU telemetry.', icon: 'Workflow' },
      { title: 'Transport Management (TMS)', desc: 'Configure transport domains, virtual systems, import queues, ChaRM integration, and transport troubleshooting.', icon: 'Layers' },
      { title: 'Security & User Authorizations', desc: 'Build role-based access control (PFCG): composite roles, single roles, authorization objects, and SU01 governance.', icon: 'ShieldCheck' }
    ],
    architecturePillars: [
      { tag: 'Landscape Topologies', title: '3-Tier Architecture & System Sizing', desc: 'Configure Development, Quality, and Production landscapes, SAP profiles (DEFAULT, INSTANCE), and memory allocation parameters.' },
      { tag: 'In-Memory Engine Ops', title: 'SAP HANA Database Governance', desc: 'Perform system backups, point-in-time recovery, delta merges, tenant database administration, and HDBLCM operations.' },
      { tag: 'Change & Release Control', title: 'Transport Management System (TMS)', desc: 'Design transport routes, import schedules, cross-system transport locks, and resolve transport return code errors (RC 4/8/12).' },
      { tag: 'Enterprise Security & Audit', title: 'User Governance & Compliance Matrix', desc: 'Implement segregation of duties (SoD), authorization traces (ST01/STAUTHTRACE), security audit logs (SM19/SM20), and SSO.' }
    ],
    curriculum: [
      {
        phaseNum: 'Phase 01',
        duration: 'Weeks 1 - 2',
        title: 'SAP Architecture Fundamentals & Instance Profiles',
        description: 'Understand the multi-tier NetWeaver architecture: application servers, work processes, and system profile parameters.',
        topics: [
          'Overview of SAP NetWeaver Architecture & S/4HANA Technology Stack',
          'AS ABAP Architecture: Dispatcher, Work Processes (Dialog, Update, Batch, Spool), Enqueue, and Message Server',
          'Starting and Stopping SAP Systems (STARTSAP / STOPSAP, SAPCONTROL commands on Linux)',
          'SAP Instance Profiles: DEFAULT.PFL, START.PFL, and Instance Profiles (RZ10)',
          'Memory Management Architecture: Roll Area, Extended Memory, and Heap Memory parameters',
          'Client Concept: Client 000, 001, Client Copy Operations (SCC4, SCCL, SCC9)'
        ],
        handsOnLab: 'Lab: Log in as root on Linux, inspect work process memory allocation, tune profile parameters in RZ10, and execute a local client copy.'
      },
      {
        phaseNum: 'Phase 02',
        duration: 'Weeks 3 - 4',
        title: 'SAP HANA 2.0 Database Administration & Cockpit',
        description: 'Master the in-memory database: HANA architecture, HANA Cockpit, backup/recovery, and performance optimization.',
        topics: [
          'SAP HANA Database Architecture: In-Memory Engine, Column Store vs Row Store, Persistence Layer',
          'HANA Multi-Tenant Database Containers (MDC): SystemDB vs Tenant DBs',
          'SAP HANA Cockpit and HANA Studio Administration Consoles',
          'Backup and Recovery Operations: Full, Differential, Incremental, and Point-in-Time Recovery',
          'Monitoring HANA Memory: Used Memory vs Peak Allocation, Memory Dumps, and Out-of-Memory (OOM) resolution',
          'Delta Merge Operations, Table Partitioning, and License Key Maintenance'
        ],
        handsOnLab: 'Lab: Perform full database backup of tenant DB, simulate corrupt table dropped, and execute automated point-in-time recovery.'
      },
      {
        phaseNum: 'Phase 03',
        duration: 'Weeks 5 - 6',
        title: 'Transport Management System (TMS) & Change Control',
        description: 'Configure software change management: transport domains, transport routes, import queues, and error troubleshooting.',
        topics: [
          'Transport Management System Architecture (STMS): Transport Domain Controller and Member Systems',
          'Configuring Transport Routes: Development -> Quality -> Production Pipelines',
          'Customizing Requests vs Workbench Requests (SE09 / SE10)',
          'Transport Tools: R3trans, tp commands at OS level, and Transport Directory (/usr/sap/trans)',
          'Importing Transports: Import Single, Import All, and Resolving Return Codes (RC 4, 8, 12)',
          'Introduction to Change Request Management (ChaRM) in SAP Solution Manager'
        ],
        handsOnLab: 'Lab: Configure STMS transport domain across 3 virtual instances, release workbench transport, and import into Quality queue.'
      },
      {
        phaseNum: 'Phase 04',
        duration: 'Weeks 7 - 8',
        title: 'User Administration, PFCG Roles & Enterprise Security',
        description: 'Design enterprise access control: user master records, role maintenance (PFCG), authorization traces, and security audits.',
        topics: [
          'User Master Records (SU01): User Types (Dialog, System, Communication), Validity, and Password Rules',
          'Mass User Maintenance (SU10) and User Locking/Unlocking protocols',
          'Role Maintenance (PFCG): Single Roles, Composite Roles, Derived Roles, and Menu Structures',
          'Authorization Architecture: Authorization Objects, Fields, and Field Values (SU24)',
          'Security Traces: System Trace (ST01) and Authorization Trace (STAUTHTRACE) to troubleshoot authorization failures (SU53)',
          'Security Audit Log (SM19/SM20) and Segregation of Duties (SoD) overview'
        ],
        handsOnLab: 'Lab: Build a functional SD consultant composite role restricting plant access and troubleshoot authorization failures via ST01 trace.'
      },
      {
        phaseNum: 'Phase 05',
        duration: 'Weeks 9 - 10',
        title: 'Spool, Background Jobs, System Maintenance & Certification Prep',
        description: 'Manage printing, batch jobs, kernel upgrades, support packages (SUM), and prepare for the C_TADM_23 certification.',
        topics: [
          'Spool Administration (SPAD): Output Devices, Access Methods, and Spool Requests (SP01/SP02)',
          'Background Job Scheduling (SM36) and Monitoring (SM37): Job Steps, Start Conditions, and Failure Diagnosis',
          'System Monitoring & Performance Tuning: Work Process Overview (SM50/SM66), Workload Analysis (ST03N), and Lock Entries (SM12)',
          'Software Update Manager (SUM): Applying Support Packages and Kernel Upgrades',
          'SAP S/4HANA System Administration Certification Exam Prep (C_TADM_23)'
        ],
        handsOnLab: 'Lab: Capstone Project: End-to-end setup of a virtual landscape: client creation, STMS configuration, user roles, and kernel patch upgrade.'
      }
    ],
    realWorldProjects: [
      {
        title: 'Multi-Tenant S/4HANA 3-Tier Landscape Build & TMS Rollout',
        industry: 'Global Technology Services & Telecommunications',
        challenge: 'A global telecommunications provider required a greenfield 3-tier S/4HANA landscape deployment on Linux with multi-tenant HANA database isolation.',
        solution: 'Configured instance profiles, HANA MDC tenant databases with automated daily differential backups, STMS transport domain, and central user administration.',
        deliverables: ['Landscape Architecture Blueprint', 'STMS Route Matrix', 'HANA Backup Runbook', 'Disaster Recovery Plan']
      },
      {
        title: 'Enterprise Role Restructuring & Audit Compliance Security',
        industry: 'Banking & Financial Technology',
        challenge: 'Financial services client failed compliance audit due to widespread SAP_ALL permissions and lack of segregation of duties (SoD) among 450 users.',
        solution: 'Engineered comprehensive role restructuring using PFCG derived roles, restricted SU24 authorization objects, automated SU53 trace resolution, and security audit logging.',
        deliverables: ['Role Design Matrix', 'PFCG Configuration Specs', 'Security Audit Logging Policy', 'UAT Sign-off Protocol']
      }
    ],
    careerOutcomes: [
      { role: 'SAP BASIS Administrator', experience: '0 - 3 Years', salary: '₹8.0 - ₹13.5 LPA' },
      { role: 'Senior S/4HANA Cloud & Infrastructure Consultant', experience: '3 - 6 Years', salary: '₹15.0 - ₹24.0 LPA' },
      { role: 'Lead Enterprise Technical Architect / BASIS Director', experience: '7+ Years', salary: '₹26.0 - ₹45.0+ LPA' }
    ],
    targetAudience: [
      'System administrators, Linux engineers, and database administrators seeking high-paying enterprise IT roles',
      'Computer science and IT graduates aiming for enterprise cloud and system administration careers',
      'Junior SAP administrators seeking S/4HANA and HANA database certification mastery'
    ],
    faqs: [
      {
        question: 'Do I need prior Linux experience to learn SAP BASIS?',
        answer: 'While basic familiarity with Linux commands is helpful, our course covers all necessary Linux terminal commands and server navigation from day one.'
      },
      {
        question: 'Will I get hands-on access to a live SAP server?',
        answer: 'Yes. You will have full 24/7 dedicated access to an SAP S/4HANA Linux server and SAP HANA Cockpit to practice real system administration tasks.'
      },
      {
        question: 'What certification will I be eligible to take?',
        answer: 'You will be prepared directly for C_TADM_23 (SAP Enterprise Technology Consultant - SAP S/4HANA System Administration).'
      },
      {
        question: 'Is SAP HANA database administration included in the training?',
        answer: 'Yes. SAP HANA 2.0 administration (HANA Cockpit, Studio, backup/recovery, memory tuning) is a core component of Phase 02.'
      }
    ]
  },

  // 13. SAP PI/PO (Process Integration & Process Orchestration)
  'sap-pi-po': {
    id: 13,
    code: 'SAP-PI-PO',
    slug: 'sap-pi-po',
    title: 'SAP PI/PO Training',
    fullName: 'SAP Process Integration & Orchestration (PI/PO 7.5)',
    type: 'technical',
    category: 'Technical Modules',
    heroBadge: 'Enterprise Middleware & B2B Integration Mastery',
    heroHeadline: 'Connect Disparate Enterprise Landscapes with',
    heroHighlight: 'SAP PI/PO & Process Orchestration Architecture',
    heroTagline: 'Master Enterprise Services Repository (ESR), Integration Directory (ID), Adapter Framework (IDoc, RFC, REST, SOAP, JDBC), Graphical/Java Mappings, and BPM/BRM.',
    heroImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
    featureImage: '/photo-1522202176988-66273c2fd55f_1600.jpg',
    accentColor: '#7c3aed',
    accentGradient: 'from-[#7c3aed] via-[#5b21b6] to-[#3b0764]',
    workflowTitle: 'Enterprise Service Bus (ESB) Integration Pipeline',
    workflowSteps: [
      {
            "stepNum": "01",
            "title": "SLD Technical Modeling",
            "subtitle": "Landscape Inventory",
            "desc": "Register technical systems, create business systems, define software products, and establish transport targets inside System Landscape Directory."
      },
      {
            "stepNum": "02",
            "title": "ESR Interface & Mapping",
            "subtitle": "Transformation Design",
            "desc": "Design Data Types, Message Types, Service Interfaces, and construct complex Graphical and Java Message Mappings with custom User-Defined Functions."
      },
      {
            "stepNum": "03",
            "title": "Integration Directory Routing",
            "subtitle": "Channel Configuration",
            "desc": "Configure communication channels (IDoc_AAE, SOAP, REST, JDBC, SFTP), establish receiver determination rules, and bind interface agreements."
      },
      {
            "stepNum": "04",
            "title": "Monitoring & Cloud Migration",
            "subtitle": "Audit & Modernization",
            "desc": "Monitor runtime payloads via SXMB_MONI / Communication Channel Monitor, set up alert rules, and assess interfaces for automated CPI migration."
      }
],
    duration: '8 Weeks (Weekend & Weekday Batches)',
    format: 'Live Interactive Mentor-Led + 24/7 Dedicated Server Access',
    prerequisites: 'Basic knowledge of XML, Web Services, HTTP, or general software integration concepts.',
    certificationTrack: 'SAP Enterprise Technology Associate - SAP Process Orchestration 7.50',
    certificationCode: 'C_PO_7517',
    rating: '4.91 / 5.0',
    enrolledStudents: '890+ Alumni Trained',
    metrics: [
      { val: '100%', label: 'Hands-on Integration Scenarios' },
      { val: '24/7', label: 'Dedicated PI/PO 7.5 Java Server' },
      { val: '2', label: 'End-to-End Enterprise Projects' },
      { val: '98%', label: 'Placement & Industry Readiness' }
    ],
    overviewHeading: 'Enterprise SOA Middleware & Heterogeneous System Connectivity',
    overviewSubheading: 'ESR Repository • Integration Directory • Adapter Engine • Java Mapping • BPM/BRM',
    overviewLead: 'SAP Process Orchestration (PO) is the battle-tested enterprise middleware hub that connects SAP ERP with non-SAP databases, cloud SaaS platforms, banking APIs, and global B2B trading partners.',
    overviewParagraphs: [
      'Enterprises run on interconnected software ecosystems: SAP backend systems must continuously exchange data with Salesforce CRM, e-commerce stores, legacy mainframe databases, logistics carriers, and government tax portals. SAP PI/PO orchestrates these mission-critical data exchanges.',
      'Our hands-on training covers the complete single-stack Java Process Orchestration 7.5 architecture: designing data types, message types, and service interfaces in the Enterprise Services Repository (ESR), and configuring communication channels, sender/receiver agreements, and integrated configurations (ICO) in the Integration Directory (ID).',
      'You will master complex data transformations: graphical message mapping with User-Defined Functions (UDFs), Java mapping, and XSLT. You will also learn the modernization bridge to migrate on-premise PI/PO scenarios to cloud-native SAP CPI.'
    ],
    keyHighlights: [
      { title: 'Enterprise Services Repository (ESR)', desc: 'Design XML schemas, data types, message types, fault message types, and inbound/outbound service interfaces.', icon: 'Workflow' },
      { title: 'Integration Directory (ID)', desc: 'Configure Integrated Configuration (ICO), business systems, communication channels, and sender/receiver routing.', icon: 'Cpu' },
      { title: 'Comprehensive Adapter Framework', desc: 'Configure IDoc_AAE, RFC, SOAP, REST, JDBC, SFTP, and Mail adapters with security certificates.', icon: 'Layers' },
      { title: 'Business Process Management (BPM)', desc: 'Design automated multi-step integration workflows, asynchronous correlation, and Business Rules (BRM).', icon: 'ShieldCheck' }
    ],
    architecturePillars: [
      { tag: 'Data Definition Standards', title: 'ESR Data Types & Service Interfaces', desc: 'Build standardized XML schemas, data types, message types, and abstract/inbound/outbound service contracts.' },
      { tag: 'Transformation Engines', title: 'Graphical, Java & XSLT Mappings', desc: 'Design graphical field mappings with User-Defined Functions (UDF), Java DOM/SAX transformations, and XSLT templates.' },
      { tag: 'Connectivity Framework', title: 'Adapter Engine & Communication Channels', desc: 'Connect heterogeneous endpoints using JDBC database drivers, SFTP keys, REST JSON converters, and IDoc packages.' },
      { tag: 'Operations & Modernization', title: 'Monitoring & CPI Migration Bridge', desc: 'Monitor messages via PIMON, troubleshoot payload errors, reprocess failed queues, and map migration paths to SAP CPI.' }
    ],
    curriculum: [
      {
        phaseNum: 'Phase 01',
        duration: 'Weeks 1 - 2',
        title: 'SAP PI/PO Architecture & System Landscape Directory (SLD)',
        description: 'Understand the Java-only Process Orchestration 7.5 stack: Enterprise Services Repository, Integration Directory, and SLD.',
        topics: [
          'Overview of Enterprise SOA Middleware & SAP PI/PO 7.5 Java-Only Architecture',
          'System Landscape Directory (SLD): Technical Systems, Business Systems, Products, and Software Components',
          'Enterprise Services Repository (ESR) Foundations: Software Component Versions, Namespaces',
          'Data Types, Message Types, and Fault Message Types in XML Schema Definition (XSD)',
          'Service Interfaces: Inbound, Outbound, Synchronous vs Asynchronous Communication Patterns'
        ],
        handsOnLab: 'Lab: Set up technical and business systems in SLD, define custom XML data structures, and create service interfaces in ESR.'
      },
      {
        phaseNum: 'Phase 02',
        duration: 'Weeks 3 - 4',
        title: 'Message Mapping, Transformations & User-Defined Functions (UDF)',
        description: 'Master data transformation: node functions, contextual queues, User-Defined Functions (UDF) in Java, and XSLT.',
        topics: [
          'Graphical Message Mapping: Mapping Tool Overview, Standard Functions (Boolean, Conversions, Date)',
          'Context Handling: Understanding Queues, Context Changes, and Node Functions (SplitByValue, CollapseContexts)',
          'User-Defined Functions (UDF): Simple UDFs vs Advanced Queue-Handling UDFs in Java',
          'Java Mapping Architecture: DOM vs SAX Parsers for High-Volume Transformations',
          'XSLT Mapping and Value Mapping in Integration Directory'
        ],
        handsOnLab: 'Lab: Build advanced graphical message mapping with custom Java UDFs to transform a nested CSV order payload into canonical XML.'
      },
      {
        phaseNum: 'Phase 03',
        duration: 'Weeks 5 - 6',
        title: 'Integration Directory & The Adapter Framework',
        description: 'Configure real-world endpoints: IDoc, RFC, REST, SOAP, JDBC, and SFTP adapters using Integrated Configuration (ICO).',
        topics: [
          'Integration Directory (ID) Objects: Business Components, Communication Channels, and Routing Rules',
          'Integrated Configuration (ICO): Advanced Adapter Engine (AAE) Architecture and High-Throughput Routing',
          'IDoc_AAE Adapter: Inbound and Outbound IDoc Processing with SAP ERP (ORDERS, INVOIC, DESADV)',
          'RFC Adapter: BAPI Invocations from External Systems',
          'REST Adapter: JSON to XML Conversion, HTTP Methods, and REST Polling',
          'JDBC Adapter (Database Select/Insert) and SFTP Adapter with PGP Encryption'
        ],
        handsOnLab: 'Lab: Configure end-to-end B2B integration: receive external REST JSON order, transform via ICO, and post SAP IDoc into S/4HANA.'
      },
      {
        phaseNum: 'Phase 04',
        duration: 'Weeks 7 - 8',
        title: 'BPM, Monitoring, Troubleshooting & CPI Modernization',
        description: 'Build automated multi-step workflows, manage operational alerts in PIMON, and plan modernization to SAP CPI.',
        topics: [
          'Business Process Management (BPM): Process Modeling, Correlation, and Gateway Branches',
          'Message Monitoring (PIMON): Message Search, Payload Inspection, and Error Log Diagnosis',
          'Alert Configuration and Automated Notification Triggers for Integration Failures',
          'Modernization Pathway: Migrating SAP PI/PO Scenarios to SAP Cloud Platform Integration (CPI)',
          'Preparation for SAP Process Orchestration Certification (C_PO_7517)'
        ],
        handsOnLab: 'Lab: Capstone Project: End-to-end design, mapping, adapter configuration, and testing of a multi-endpoint banking integration.'
      }
    ],
    realWorldProjects: [
      {
        title: 'Global Retail Multi-Carrier Shipping & Logistics Interface',
        industry: 'Retail & Global E-Commerce',
        challenge: 'A multinational retailer needed real-time automated dispatch notifications and tracking number synchronization between SAP ERP and 8 logistics carrier REST APIs.',
        solution: 'Built high-throughput ICO configurations using REST and SFTP adapters with automated payload encryption and error recovery alerting.',
        deliverables: ['Interface Design Document', 'ESR Mapping Repository', 'Integration Directory Config Specs', 'PIMON Monitoring Guide']
      },
      {
        title: 'Banking Electronic Funds Transfer (NEFT/RTGS) Middleware',
        industry: 'Banking & Financial Technology',
        challenge: 'Corporate client required automated secure file-based payment transmission from SAP F110 to corporate banking servers with PGP encryption.',
        solution: 'Configured SFTP adapter with PGP module, automated bank acknowledgement processing, and automated reverse status update into SAP.',
        deliverables: ['Security Architecture Guide', 'Payment Interface Specification', 'UDF Code Library', 'UAT Test Protocols']
      }
    ],
    careerOutcomes: [
      { role: 'SAP PI/PO Integration Consultant', experience: '0 - 3 Years', salary: '₹8.0 - ₹13.5 LPA' },
      { role: 'Senior Middleware Solution Architect', experience: '3 - 6 Years', salary: '₹14.5 - ₹23.0 LPA' },
      { role: 'Lead Enterprise Integration Architect', experience: '7+ Years', salary: '₹25.0 - ₹38.0+ LPA' }
    ],
    targetAudience: [
      'Java developers, middleware engineers, and web service developers transitioning to enterprise SAP integration consulting',
      'Computer science graduates seeking careers in enterprise integration and B2B communication architectures',
      'SAP ABAP consultants looking to expand into enterprise middleware and cloud integration'
    ],
    faqs: [
      {
        question: 'Is Java programming required for SAP PI/PO?',
        answer: 'Basic Java knowledge is helpful for writing User-Defined Functions (UDFs) and Java mappings, but the majority of configuration is performed visually in ESR and Integration Directory.'
      },
      {
        question: 'How is SAP PI/PO related to SAP CPI?',
        answer: 'SAP PI/PO is the on-premise middleware, while SAP CPI is the cloud-native integration suite on SAP BTP. Many enterprises run both in hybrid landscapes. We teach the migration path between them.'
      },
      {
        question: 'Which certification exam does this training prepare me for?',
        answer: 'This training prepares you for C_PO_7517 (SAP Enterprise Technology Associate - SAP Process Orchestration 7.50).'
      },
      {
        question: 'Do we practice IDoc and REST integrations?',
        answer: 'Yes. IDoc, REST, SOAP, and JDBC integrations are practiced hands-on in the lab sandbox with live enterprise payloads.'
      }
    ]
  },

  // 14. SAP CPI (Cloud Platform Integration / BTP Integration Suite)
  'sap-cpi': {
    id: 14,
    code: 'SAP-CPI',
    slug: 'sap-cpi',
    title: 'SAP CPI Training',
    fullName: 'SAP Cloud Integration & BTP Integration Suite',
    type: 'technical',
    category: 'Technical Modules',
    heroBadge: 'Cloud-Native Middleware & API Management Mastery',
    heroHeadline: 'Connect Cloud & On-Premise Enterprise Ecosystems with',
    heroHighlight: 'SAP CPI & BTP Integration Suite',
    heroTagline: 'Master Integration Flows (iFlows), Groovy Scripting, REST/OData/AMQP Adapters, Content Enricher, Splitter/Gather, API Management, and Open Connectors.',
    heroImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d.jpg',
    featureImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#087FE5',
    accentGradient: 'from-[#087FE5] via-[#0284c7] to-[#0369a1]',
    workflowTitle: 'SAP BTP Cloud Integration (iFlow) Lifecycle',
    workflowSteps: [
      {
            "stepNum": "01",
            "title": "iFlow Architecture & Channels",
            "subtitle": "Integration Flow Design",
            "desc": "Design scalable iFlows in SAP Integration Suite using HTTPS, SFTP, AMQP, and ProcessDirect adapters with splitters and multicasting branches."
      },
      {
            "stepNum": "02",
            "title": "Data Transformation & Groovy",
            "subtitle": "Dynamic Message Processing",
            "desc": "Implement graphical Message Mapping, JSON-to-XML conversion, dynamic property evaluation, and custom Groovy scripts for complex transformations."
      },
      {
            "stepNum": "03",
            "title": "Security & Token Governance",
            "subtitle": "Enterprise Handshake",
            "desc": "Configure OAuth 2.0 Client Credentials, maintain Keystore certificates (X.509), implement PGP encryption, and restrict endpoint access with roles."
      },
      {
            "stepNum": "04",
            "title": "Event Mesh & Operations",
            "subtitle": "Observability & Monitoring",
            "desc": "Integrate SAP Advanced Event Mesh for asynchronous decoupled events, monitor trace logs, manage queues, and automate incident notifications."
      }
],
    duration: '10 Weeks (Weekend & Weekday Batches)',
    format: 'Live Interactive Mentor-Led + 24/7 Dedicated BTP Cloud Tenant',
    prerequisites: 'Basic understanding of APIs (REST/JSON, SOAP/XML), HTTP methods, or programming fundamentals.',
    certificationTrack: 'SAP Enterprise Development Associate - SAP BTP Integration Suite',
    certificationCode: 'C_CPE_15',
    rating: '4.99 / 5.0',
    enrolledStudents: '2,100+ Alumni Trained',
    metrics: [
      { val: '100%', label: 'Hands-on BTP Cloud Tenant' },
      { val: '24/7', label: 'Dedicated Integration Suite Lab' },
      { val: '2', label: 'End-to-End Enterprise Projects' },
      { val: '98%', label: 'Placement & Industry Readiness' }
    ],
    overviewHeading: 'Cloud-Native Enterprise Integration on SAP BTP',
    overviewSubheading: 'iFlows • Groovy Scripting • Content Modifiers • API Management • Open Connectors',
    overviewLead: 'SAP Cloud Integration (CPI), part of the SAP BTP Integration Suite, is the premier cloud-native integration platform connecting cloud SaaS applications, on-premise ERPs, and external digital ecosystems.',
    overviewParagraphs: [
      'As modern organizations migrate to cloud architectures, the ability to seamlessly connect S/4HANA Cloud, Salesforce, Workday, ServiceNow, Shopify, and banking gateways is the single most valuable technical competency in the SAP ecosystem.',
      'Our hands-on training immerses you into the SAP BTP Integration Suite console. You will learn to architect, deploy, and monitor complex Integration Flows (iFlows) using real-world enterprise patterns: Content Enrichers, General and Iterating Splitters, Aggregators, Routers, and Multicast branches.',
      'You will master custom Groovy scripting for advanced message manipulation, manage secure keystores and OAuth credentials, integrate with SAP Open Connectors, and govern enterprise API endpoints using SAP API Management.'
    ],
    keyHighlights: [
      { title: 'iFlow Architecture & Patterns', desc: 'Design resilient integration flows implementing Content Enrichers, Splitters, Gathers, Routers, and Exception Subprocesses.', icon: 'Workflow' },
      { title: 'Groovy Scripting Engine', desc: 'Write custom Groovy scripts for complex header/property manipulation, payload parsing, and Base64 encryption.', icon: 'Cpu' },
      { title: 'Cloud Adapters & Connectors', desc: 'Configure OData, REST, SOAP, HTTP, AMQP, SFTP, Mail, ProcessDirect, and Open Connectors.', icon: 'Layers' },
      { title: 'Security & API Management', desc: 'Implement OAuth 2.0, SSL certificates, User Credentials, API Policies, Rate Limiting, and Traffic Shaping.', icon: 'ShieldCheck' }
    ],
    architecturePillars: [
      { tag: 'BTP Cloud Architecture', title: 'SAP BTP Subaccounts & Cloud Foundry', desc: 'Configure subaccounts, entitlements, Integration Suite capabilities, and Cloud Connector on-premise tunnels.' },
      { tag: 'iFlow Pattern Library', title: 'Enterprise Integration Flow Modeling', desc: 'Implement Content Modifiers, Message Converters (JSON to XML), Routers, Multicast, and local integration processes.' },
      { tag: 'Dynamic Scripting Engine', title: 'Groovy & JavaScript Transformations', desc: 'Manipulate headers, exchange properties, and XML/JSON DOM nodes using Groovy scripts and regex pattern matchers.' },
      { tag: 'Governance & Edge Security', title: 'Security Artifacts & API Management', desc: 'Manage PGP encryption, Keystores, OAuth2 Client Credentials, API portals, and developer onboarding.' }
    ],
    curriculum: [
      {
        phaseNum: 'Phase 01',
        duration: 'Weeks 1 - 2',
        title: 'SAP BTP Foundations & Cloud Integration Architecture',
        description: 'Set up the cloud environment: SAP BTP Cockpit, Subaccounts, Integration Suite provisioning, and Cloud Connector.',
        topics: [
          'Overview of SAP Business Technology Platform (BTP) & Integration Suite Architecture',
          'Setting up BTP Subaccounts, Spaces, and Entitlements in Cloud Foundry',
          'Provisioning Cloud Integration (CPI), API Management, and Open Connectors capabilities',
          'Understanding the Cloud Connector: Secure Tunnel Architecture between Cloud and On-Premise S/4HANA',
          'Overview of Pre-Packaged Standard Content (SAP Business Accelerator Hub)'
        ],
        handsOnLab: 'Lab: Set up BTP Integration Suite tenant, configure Cloud Connector to on-premise ERP, and discover pre-packaged standard iFlows.'
      },
      {
        phaseNum: 'Phase 02',
        duration: 'Weeks 3 - 4',
        title: 'Integration Flow (iFlow) Core Design Patterns',
        description: 'Build enterprise iFlows: Content Modifiers, Routers, Splitters, Gathers, and Exception Subprocesses.',
        topics: [
          'Structure of an Integration Flow: Sender, Receiver, Message Exchange, and Processing Pipeline',
          'Content Modifier: Manipulating Message Header, Exchange Properties, and Body (XPath, Expressions)',
          'Message Converters: JSON to XML Converter, XML to JSON Converter, and CSV to XML',
          'Routing Patterns: Router (Exclusive), Multicast (Parallel), and Filter Elements',
          'Message Splitting & Aggregation: General Splitter, Iterating Splitter, and Gather Element',
          'Exception Handling: Exception Subprocess, Error Logging, and Custom Fault Payload generation'
        ],
        handsOnLab: 'Lab: Build an iFlow receiving multi-item orders, splitting items, validating against stock thresholds, and sending custom email alerts.'
      },
      {
        phaseNum: 'Phase 03',
        duration: 'Weeks 5 - 6',
        title: 'Groovy Scripting & Advanced Message Mapping',
        description: 'Write custom Groovy code for complex data parsing, Base64 encoding, REST token handling, and graphical mappings.',
        topics: [
          'Groovy Scripting Fundamentals in SAP CPI: Message Object, Headers, Properties, and Body Streams',
          'Parsing and Manipulating JSON (JsonSlurper / JsonOutput) and XML (XmlSlurper / StreamingMarkupBuilder)',
          'Handling Dynamic Token Generation for OAuth REST APIs using Groovy Scripts',
          'Graphical Message Mapping: Creating Source and Target XSDs, Standard Functions, and Context Queues',
          'Content Enricher: Enriching Incoming Payloads with External Master Data (Lookup Pattern)'
        ],
        handsOnLab: 'Lab: Write Groovy scripts to parse complex nested JSON, inject dynamic authorization tokens, and format outbound payloads.'
      },
      {
        phaseNum: 'Phase 04',
        duration: 'Weeks 7 - 8',
        title: 'Cloud Adapters, Security Artifacts & ProcessDirect',
        description: 'Connect heterogeneous endpoints: OData, REST, SFTP, AMQP, and configure Keystore certificates and OAuth.',
        topics: [
          'Configuring Inbound and Outbound Adapters: HTTPS, OData V2/V4, REST, SOAP, and SFTP',
          'ProcessDirect Adapter: Zero-Overhead Chaining between Multiple Integration Flows',
          'AMQP / JMS Adapter: Asynchronous Message Queuing and Guaranteed Delivery Patterns',
          'Security Material Management: Keystores, X.509 Certificates, User Credentials, and OAuth2 Client Credentials',
          'PGP Encryption and Decryption Elements in iFlows'
        ],
        handsOnLab: 'Lab: Configure end-to-end asynchronous integration: receive web order -> push to JMS queue -> ProcessDirect processing -> S/4HANA update.'
      },
      {
        phaseNum: 'Phase 05',
        duration: 'Weeks 9 - 10',
        title: 'API Management, Open Connectors & Certification Prep',
        description: 'Expose APIs, enforce traffic policies, connect third-party SaaS via Open Connectors, and achieve global certification.',
        topics: [
          'SAP API Management Architecture: API Portal, API Business Hub Enterprise, and Developer Onboarding',
          'Designing API Proxies: Security Policies (Verify API Key, OAuth, Spike Arrest, Rate Limiting)',
          'SAP Open Connectors: Pre-built Connectors for Salesforce, ServiceNow, HubSpot, and Google Drive',
          'Monitoring & Operational Governance: Message Monitoring, Trace Levels, and Log Inspection',
          'Preparation for SAP BTP Integration Suite Certification (C_CPE_15)'
        ],
        handsOnLab: 'Lab: Capstone Project: End-to-end B2B integration: Salesforce Lead -> CPI iFlow -> Open Connectors -> S/4HANA Business Partner.'
      }
    ],
    realWorldProjects: [
      {
        title: 'Enterprise Salesforce to S/4HANA Real-Time Order Synchronization',
        industry: 'High-Tech & SaaS Enterprises',
        challenge: 'A global technology firm needed instantaneous sales order creation in S/4HANA whenever an opportunity closed in Salesforce, with automated credit check return feedback.',
        solution: 'Built high-throughput CPI iFlows using REST and OData adapters, custom Groovy token injection, Content Enricher, and JMS guaranteed delivery queues.',
        deliverables: ['CPI Integration Architecture Guide', 'iFlow Packages (.zip)', 'Groovy Script Library', 'Security Keystore Configuration Specs']
      },
      {
        title: 'Shopify E-Commerce to S/4HANA Inventory & Fulfillment Pipeline',
        industry: 'Retail & Direct-to-Consumer (D2C)',
        challenge: 'Client faced inventory sync lag between online Shopify store and backend warehouse ERP, causing overselling and delayed customer shipment tracking.',
        solution: 'Engineered bi-directional iFlows: webhook listener for orders, automated inventory delta updates every 15 minutes, and outbound shipping notice synchronization.',
        deliverables: ['E-Commerce iFlow Blueprint', 'Webhook Security Setup Guide', 'Error Alerting Framework', 'UAT Sign-off Protocol']
      }
    ],
    careerOutcomes: [
      { role: 'SAP CPI / BTP Integration Developer', experience: '0 - 3 Years', salary: '₹9.0 - ₹15.5 LPA' },
      { role: 'Senior Cloud Integration Architect', experience: '3 - 6 Years', salary: '₹16.0 - ₹26.0 LPA' },
      { role: 'Lead BTP & Enterprise Integration Director', experience: '7+ Years', salary: '₹28.0 - ₹45.0+ LPA' }
    ],
    targetAudience: [
      'Java, Python, integration, and API developers seeking to enter high-demand cloud enterprise consulting',
      'Classical SAP PI/PO consultants modernizing to SAP BTP and cloud integration architecture',
      'Software engineers and technical analysts aiming for the highest-growth technology track in the SAP ecosystem'
    ],
    faqs: [
      {
        question: 'Why is SAP CPI currently in such high demand?',
        answer: 'As thousands of enterprises adopt cloud applications (S/4HANA Cloud, Ariba, SuccessFactors, Salesforce), SAP CPI on BTP is the mandatory integration backbone, creating unprecedented demand for professional consultants.'
      },
      {
        question: 'Do I get hands-on access to a real SAP BTP tenant?',
        answer: 'Yes. You will have 24/7 dedicated access to an enterprise SAP BTP Integration Suite environment to build, deploy, and monitor live iFlows.'
      },
      {
        question: 'What certification exam does this training prepare me for?',
        answer: 'This training prepares you directly for C_CPE_15 (SAP Enterprise Development Associate - SAP BTP Integration Suite).'
      },
      {
        question: 'Is Groovy scripting required for SAP CPI?',
        answer: 'While basic iFlows can be designed without coding, real-world enterprise implementations frequently require Groovy scripting. We teach complete Groovy scripting for CPI from the ground up.'
      }
    ]
  },

  // 15. SAP CIDS (Cloud Integration for Data Services)
  'sap-cids': {
    id: 15,
    code: 'SAP-CIDS',
    slug: 'sap-cids',
    title: 'SAP CIDS Training',
    fullName: 'SAP Cloud Integration for Data Services (CIDS)',
    type: 'technical',
    category: 'Technical Modules',
    heroBadge: 'Enterprise ETL & High-Volume Data Pipelines',
    heroHeadline: 'Engineer High-Speed Cloud ETL Pipelines with',
    heroHighlight: 'SAP CIDS & IBP Supply Chain Analytics',
    heroTagline: 'Master Data Provisioning Agent (DP Agent), Datastores, Tasks, Processes, Data Flow Transformations, Batch Loading into SAP IBP, and Hybrid Enterprise Scheduling.',
    heroImage: '/sap_hero_slide3_analytics.jpg',
    secondaryImage: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80',
    featureImage: '/photo-1531403009284-440f080d1e12.jpg',
    accentColor: '#059669',
    accentGradient: 'from-[#059669] via-[#0d9488] to-[#115e59]',
    workflowTitle: 'SAP IBP Cloud Data Integration (ETL) Lifecycle',
    workflowSteps: [
      {
            "stepNum": "01",
            "title": "DP Agent Installation & SSL",
            "subtitle": "Secure Connectivity",
            "desc": "Deploy on-premise Data Provisioning Agent (DP Agent), configure SSL handshake certificates, and establish bi-directional tunnel to SAP Cloud."
      },
      {
            "stepNum": "02",
            "title": "Datastore & Connection Setup",
            "subtitle": "Metadata Catalog",
            "desc": "Configure Datastores connecting on-premise S/4HANA CDS Views, SQL databases, and SAP IBP planning areas for master and transactional data."
      },
      {
            "stepNum": "03",
            "title": "Data Flows & Transformations",
            "subtitle": "ETL Pipeline Modeling",
            "desc": "Design data flows with join conditions, target projection mappings, row generation, and parent-child hierarchy flattening for supply chain nodes."
      },
      {
            "stepNum": "04",
            "title": "Task Scheduling & IBP Sync",
            "subtitle": "Automated Operations",
            "desc": "Define batch schedules, execute delta data extractions, handle error re-runs, and validate planning area synchronization inside SAP IBP."
      }
],
    duration: '8 Weeks (Weekend & Weekday Batches)',
    format: 'Live Interactive Mentor-Led + 24/7 Dedicated Server Access',
    prerequisites: 'Basic understanding of databases, SQL queries, ETL concepts, or data warehousing.',
    certificationTrack: 'SAP Enterprise Application Associate - SAP IBP & Cloud Data Integration',
    certificationCode: 'C_IBP_2311',
    rating: '4.92 / 5.0',
    enrolledStudents: '780+ Alumni Trained',
    metrics: [
      { val: '100%', label: 'Hands-on ETL Pipeline Builds' },
      { val: '24/7', label: 'Dedicated CIDS Sandbox Access' },
      { val: '2', label: 'End-to-End Enterprise Projects' },
      { val: '98%', label: 'Placement & Industry Readiness' }
    ],
    overviewHeading: 'High-Throughput Enterprise ETL & Data Extraction Pipelines',
    overviewSubheading: 'DP Agent • Datastores • Data Flows • Transformations • IBP Data Loading • Job Scheduling',
    overviewLead: 'SAP Cloud Integration for Data Services (CIDS) is the specialized enterprise ETL engine engineered to extract, transform, and load massive data volumes between on-premise ERPs and cloud analytics platforms like SAP IBP.',
    overviewParagraphs: [
      'Supply chain planning and advanced analytics require billions of operational data records—sales histories, stock balances, production capacities, and bills of materials—to be extracted and loaded on strict schedules without impacting transactional ERP performance.',
      'SAP CIDS is the purpose-built ETL solution designed specifically for high-throughput batch integration. Our hands-on training covers the full architecture: installing and configuring the on-premise Data Provisioning Agent (DP Agent), establishing secure SSL connections to cloud tenants, and defining diverse Datastores (SAP Applications, Oracle/SQL databases, and flat files).',
      'You will master the visual Data Flow designer: building complex transformations, joins, lookups, filters, and aggregations. You will configure automated task schedules, parameterized batch jobs, and error handling for SAP Integrated Business Planning (IBP).'
    ],
    keyHighlights: [
      { title: 'DP Agent Architecture', desc: 'Install and configure on-premise Data Provisioning Agents with secure SSL tunnels connecting to CIDS cloud.', icon: 'Cpu' },
      { title: 'Enterprise Datastores', desc: 'Create datastores connecting SAP S/4HANA, ECC, relational databases, web services, and cloud file targets.', icon: 'Workflow' },
      { title: 'Data Flow Transformations', desc: 'Build visual ETL data pipelines implementing projections, joins, lookups, target filters, and date/math functions.', icon: 'Layers' },
      { title: 'SAP IBP Master & Transactional ETL', desc: 'Load master data (products, locations, resources) and key figure time-series data into SAP IBP planning areas.', icon: 'ShieldCheck' }
    ],
    architecturePillars: [
      { tag: 'On-Premise Agent Gateway', title: 'Data Provisioning Agent (DP Agent)', desc: 'Deploy and register the secure DP Agent on Windows/Linux to bridge enterprise data behind corporate firewalls.' },
      { tag: 'Source & Target Connectivity', title: 'Heterogeneous Datastores', desc: 'Configure SAP Application Datastores (RFC/BAPI extraction), Database Datastores (JDBC), and File Formats.' },
      { tag: 'High-Volume ETL Engine', title: 'Tasks & Data Flow Pipeline Modeling', desc: 'Design scalable extraction tasks with parallel data readers, source queries, complex joins, and target upserts.' },
      { tag: 'Operational Scheduling', title: 'Processes, Parameters & Automated Runs', desc: 'Chain tasks into multi-step Processes, configure global runtime variables, and schedule automated batch executions.' }
    ],
    curriculum: [
      {
        phaseNum: 'Phase 01',
        duration: 'Weeks 1 - 2',
        title: 'SAP CIDS Architecture & DP Agent Installation',
        description: 'Understand the CIDS architecture: configure the web console, install the DP Agent, and establish secure connectivity.',
        topics: [
          'Overview of SAP Cloud Integration for Data Services (CIDS) vs SAP CPI vs SAP Data Services (BODS)',
          'CIDS Architecture: Cloud Web Console, Metadata Repository, and On-Premise Execution Framework',
          'Installing and Configuring the Data Provisioning Agent (DP Agent) on Windows/Linux',
          'Agent Registration, SSL Key Pair Exchange, and Testing Cloud-to-On-Premise Handshake',
          'Agent Groups, High Availability, and Load Balancing considerations'
        ],
        handsOnLab: 'Lab: Install and register the SAP DP Agent on a private server, configure SSL certificates, and verify active connectivity in CIDS console.'
      },
      {
        phaseNum: 'Phase 02',
        duration: 'Weeks 3 - 4',
        title: 'Datastore Configuration & Data Extraction',
        description: 'Connect diverse enterprise data sources: SAP ERP tables, Extractors, relational databases, and file formats.',
        topics: [
          'Overview of Datastores: Types, Capabilities, and Security Credentials',
          'Configuring SAP Application Datastores: Connecting to S/4HANA via RFC and Table Readers',
          'Importing Metadata: Extracting Tables (MARA, MARC, KNA1), Views, and Standard SAP Extractors',
          'Database Datastores: JDBC Connections for Oracle, Microsoft SQL Server, and PostgreSQL',
          'File Format Datastores: Delimited CSV, Fixed-Width, and Parquet File Configurations'
        ],
        handsOnLab: 'Lab: Configure SAP S/4HANA and SQL Server datastores, import metadata dictionaries, and test source data previews.'
      },
      {
        phaseNum: 'Phase 03',
        duration: 'Weeks 5 - 6',
        title: 'Task Modeling & Data Flow Transformations',
        description: 'Master the visual data transformation engine: projections, lookups, joins, target filters, and built-in functions.',
        topics: [
          'Architecture of a CIDS Task: Source Tables, Target Tables, and Data Flow Pipeline',
          'Transformation Components: Source Query, Projection, Filter, and Target Mapping',
          'Joining Heterogeneous Datastores (e.g., S/4HANA Master Data joined with external SQL Data)',
          'Lookup Functions: Key-Value Lookups against Datastores with Caching options',
          'Built-In Functions: String Manipulation, Date Conversions, Math Functions, and NULL Handling',
          'Target Update Modes: Insert, Update, Upsert, and Soft-Deletes'
        ],
        handsOnLab: 'Lab: Build an end-to-end transformation task: extract product and sales history from S/4HANA, enrich with external pricing, and map to target format.'
      },
      {
        phaseNum: 'Phase 04',
        duration: 'Weeks 7 - 8',
        title: 'SAP IBP Integration, Process Automation & Certification',
        description: 'Load master data and time-series key figures into SAP IBP, configure automated schedules, and prepare for certification.',
        topics: [
          'SAP Integrated Business Planning (IBP) Target Datastore: Planning Areas, Attributes, and Key Figures',
          'Loading IBP Master Data (Product, Location, Customer, Resource)',
          'Loading Time-Series Key Figures (Actual Sales History, Baseline Forecasts, Capacity Demands)',
          'Creating Multi-Step Processes: Chaining Dependent Tasks with Success/Failure Branches',
          'Global Variables and Parameters for Dynamic Delta Extraction Dates',
          'Job Execution Monitoring, Execution Logs, Error Diagnosis, and Certification Exam Prep'
        ],
        handsOnLab: 'Lab: Capstone Project: End-to-end design, data transformation, and scheduled automated loading of demand forecasts into an SAP IBP Planning Area.'
      }
    ],
    realWorldProjects: [
      {
        title: 'Global Supply Chain Demand History Extraction for SAP IBP',
        industry: 'Consumer Packaged Goods (CPG)',
        challenge: 'A global food manufacturer needed daily automated extraction of 15 million historical invoice line items from SAP ECC into SAP IBP for machine learning demand forecasting.',
        solution: 'Engineered high-throughput CIDS tasks using parallel table readers, delta date parameters, and automated nightly batch loading into IBP planning areas.',
        deliverables: ['CIDS ETL Architecture Blueprint', 'Datastore & Task Specifications', 'Delta Extraction Strategy Guide', 'Job Scheduling Runbook']
      },
      {
        title: 'Multi-Plant Production Capacity Data Pipeline for S&OP',
        industry: 'Automotive & Industrial Manufacturing',
        challenge: 'Client struggled with disconnected machine capacity spreadsheets across 12 manufacturing plants, preventing realistic Sales & Operations Planning.',
        solution: 'Configured automated CIDS extraction from S/4HANA work centers and routings, transforming machine hours and loading directly into IBP supply planning.',
        deliverables: ['Capacity ETL Specification', 'Transformation Mapping Sheet', 'Execution Monitoring Protocol', 'Cutover Master Plan']
      }
    ],
    careerOutcomes: [
      { role: 'SAP CIDS / IBP Data Integration Consultant', experience: '0 - 3 Years', salary: '₹8.5 - ₹14.0 LPA' },
      { role: 'Senior Enterprise ETL & Cloud Data Architect', experience: '3 - 6 Years', salary: '₹15.0 - ₹24.0 LPA' },
      { role: 'Lead Supply Chain Technology & Data Architect', experience: '7+ Years', salary: '₹26.0 - ₹40.0+ LPA' }
    ],
    targetAudience: [
      'ETL developers, data engineers, and BI analysts looking to specialize in high-demand SAP cloud supply chain integration',
      'SAP BODS (Data Services) and BW consultants modernizing their skillsets for SAP IBP and cloud data architecture',
      'IT professionals and engineers targeting niche, high-paying enterprise data engineering consulting roles'
    ],
    faqs: [
      {
        question: 'How is SAP CIDS different from SAP CPI?',
        answer: 'SAP CPI is designed for real-time transactional message routing (e.g., individual orders, API calls), whereas SAP CIDS is designed for high-volume batch ETL data loading (e.g., millions of records loaded into SAP IBP for planning).'
      },
      {
        question: 'Is prior experience in SAP BODS required?',
        answer: 'No. While knowledge of ETL concepts is beneficial, our course teaches all CIDS concepts—including DP Agent setup, Datastores, and Data Flow transformations—from the beginning.'
      },
      {
        question: 'Which certification exam does this training align with?',
        answer: 'This training aligns with C_IBP_2311 (SAP Enterprise Application Associate - SAP IBP & Cloud Data Integration).'
      },
      {
        question: 'Do we practice live data loading into SAP IBP?',
        answer: 'Yes. Phase 04 includes hands-on exercises loading master data attributes and time-series key figures into live SAP IBP planning areas.'
      }
    ]
  }
};
