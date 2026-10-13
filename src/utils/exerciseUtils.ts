export function getFeedback(
  selectedIndex: number, 
  correctIndex: number, 
  optionBases: string[], 
  verbPair: string, 
  correctExplanation: string,
  explanationMap: Record<string, string>
): string {
  if (selectedIndex === correctIndex) {
    return `Corretto! ${correctExplanation}`;
  }

  const selectedBase = optionBases[selectedIndex];
  const selectedExplanation = explanationMap[selectedBase] || "Significato non disponibile per questo placeholder.";

  return `Sbagliato, la risposta giusta è ${correctExplanation} (${selectedBase}): ${selectedExplanation}`;
}
