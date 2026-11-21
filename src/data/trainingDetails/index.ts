import { DetailedTrainingModule } from './types';
import { FUNCTIONAL_MODULES } from './functionalModules';
import { TECHNICAL_MODULES } from './technicalModules';

export * from './types';
export { FUNCTIONAL_MODULES } from './functionalModules';
export { TECHNICAL_MODULES } from './technicalModules';

export const DETAILED_TRAINING_MAP: Record<string, DetailedTrainingModule> = {
  ...FUNCTIONAL_MODULES,
  ...TECHNICAL_MODULES
};

export const ALL_TRAINING_MODULES: DetailedTrainingModule[] = Object.values(DETAILED_TRAINING_MAP);

export const getTrainingBySlug = (slug: string): DetailedTrainingModule | undefined => {
  if (!slug) return undefined;
  const clean = slug.toLowerCase().trim();
  if (DETAILED_TRAINING_MAP[clean]) {
    return DETAILED_TRAINING_MAP[clean];
  }
  // Try finding by slug or code
  return ALL_TRAINING_MODULES.find(
    (m) => m.slug.toLowerCase() === clean || m.code.toLowerCase().replace(/[^a-z0-9]/g, '-') === clean || m.code.toLowerCase() === clean
  );
};

export const getTrainingById = (id: number): DetailedTrainingModule | undefined => {
  return ALL_TRAINING_MODULES.find((m) => m.id === id);
};
