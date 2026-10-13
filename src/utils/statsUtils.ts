
export interface VerbStats {
  correctFirstTry: number;
  totalAttempts: number;
}

export type AppStats = Record<string, VerbStats>;

const STATS_KEY = 'rus_acc_stats';

export const getStats = (): AppStats => {
  const stored = localStorage.getItem(STATS_KEY);
  if (!stored) return {};
  try {
    return JSON.parse(stored);
  } catch (e) {
    console.error('Failed to parse stats', e);
    return {};
  }
};

export const saveVerbResult = (verbId: string, isCorrectFirstTry: boolean) => {
  const stats = getStats();
  const verbStats = stats[verbId] || { correctFirstTry: 0, totalAttempts: 0 };
  
  stats[verbId] = {
    correctFirstTry: verbStats.correctFirstTry + (isCorrectFirstTry ? 1 : 0),
    totalAttempts: verbStats.totalAttempts + 1
  };
  
  localStorage.setItem(STATS_KEY, JSON.stringify(stats));
};

export const resetVerbStats = (verbId: string) => {
  const stats = getStats();
  delete stats[verbId];
  localStorage.setItem(STATS_KEY, JSON.stringify(stats));
};

export const getVerbStats = (verbId: string): VerbStats => {
  const stats = getStats();
  return stats[verbId] || { correctFirstTry: 0, totalAttempts: 0 };
};
