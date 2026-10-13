export interface Exercise {
  id: number;
  sentence: string;
  translation: string;
  options: string[];
  optionBases: string[]; // Base verbs for lookup
  correctIndex: number;
  verbPair: string;
  correctExplanation: string;
}

export interface Verb {
  id: string;
  cyrillic: string;
  translation: string;
  description: string;
  exercisesCount: number;
  category: 'prefix' | 'group';
  exercises?: Exercise[];
}
