export interface TrainingCurriculumPhase {
  phaseNum: string;
  duration: string;
  title: string;
  description: string;
  topics: string[];
  handsOnLab: string;
}

export interface TrainingProject {
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  deliverables: string[];
}

export interface TrainingFAQ {
  question: string;
  answer: string;
}

export interface TrainingWorkflowStep {
  stepNum: string;
  title: string;
  subtitle: string;
  desc: string;
}

export interface DetailedTrainingModule {
  id: number;
  code: string;
  slug: string;
  title: string;
  fullName: string;
  type: 'functional' | 'technical';
  category: 'Functional Modules' | 'Technical Modules';
  heroBadge: string;
  heroHeadline: string;
  heroHighlight: string;
  heroTagline: string;
  heroImage: string;
  secondaryImage: string;
  featureImage?: string;
  accentColor?: string;
  accentGradient?: string;
  duration: string;
  format: string;
  prerequisites: string;
  certificationTrack: string;
  certificationCode: string;
  rating: string;
  enrolledStudents: string;
  metrics: { val: string; label: string }[];
  overviewHeading: string;
  overviewSubheading: string;
  overviewLead: string;
  overviewParagraphs: string[];
  keyHighlights: { title: string; desc: string; icon: string }[];
  architecturePillars: { tag: string; title: string; desc: string }[];
  workflowTitle?: string;
  workflowSteps?: TrainingWorkflowStep[];
  curriculum: TrainingCurriculumPhase[];
  realWorldProjects: TrainingProject[];
  careerOutcomes: { role: string; experience: string; salary: string }[];
  targetAudience: string[];
  faqs: TrainingFAQ[];
}
