import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle } from 'lucide-react';
import { Verb, Exercise } from '../types';
import { getFeedback } from '../utils/exerciseUtils';
import { saveVerbResult } from '../utils/statsUtils';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

import { BIT_VERB_MAP } from '../data/bitExercises';
import { BRAT_VERB_MAP } from '../data/bratExercises';
import { BROSAT_VERB_MAP } from '../data/brosatExercises';
import { GOVORIT_VERB_MAP } from '../data/govoritExercises';
import { DAT_VERB_MAP } from '../data/datExercises';
import { DUMAT_VERB_MAP } from '../data/dumatExercises';
import { ZHIT_VERB_MAP } from '../data/zhitExercises';
import { STARATSYA_VERB_MAP } from '../data/staratsyaExercises';
import { DOSTIGAT_VERB_MAP } from '../data/dostigatExercises';
import { VIPOLNYAT_VERB_MAP } from '../data/vipolnyatExercises';
import { ODEVATSYA_VERB_MAP } from '../data/odevatsyaExercises';
import { IZMENIT_VERB_MAP } from '../data/izmenitExercises';
import { POLZOVATSYA_VERB_MAP } from '../data/polzovatsyaExercises';
import { PRIGOTOVIT_VERB_MAP } from '../data/prigotovitExercises';
import { UCHITSYA_VERB_MAP } from '../data/uchitsyaExercises';
import { VESTIRE_VERB_MAP } from '../data/vestireExercises';
import { VLADET_VERB_MAP } from '../data/vladetExercises';
import { ISPRAVIT_VERB_MAP } from '../data/ispravitExercises';
import { LIT_VERB_MAP } from '../data/litExercises';
import { RUKOVODIT_VERB_MAP } from '../data/rukovoditExercises';
import { LYUBOVATSYA_VERB_MAP } from '../data/lyubovatsyaExercises';
import { TSENIT_VERB_MAP } from '../data/tsenitExercises';

interface ExerciseViewProps {
  verb: Verb;
  onBack: () => void;
}

export default function ExerciseView({ verb, onBack }: ExerciseViewProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [isFinished, setIsFinished] = useState(false);
  const [sessionCorrect, setSessionCorrect] = useState(0);
  const exercises = verb.exercises || [];
  const currentExercise = exercises[currentIdx];

  const { shuffledOptions, shuffledCorrectIdx } = useMemo(() => {
    if (!currentExercise) return { shuffledOptions: [], shuffledCorrectIdx: 0 };
    
    const optionsWithOriginalIndices = currentExercise.options.map((option, index) => ({
      option,
      isCorrect: index === currentExercise.correctIndex
    }));
    
    // Fisher-Yates Shuffle
    const shuffled = [...optionsWithOriginalIndices];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return {
      shuffledOptions: shuffled.map(o => o.option),
      shuffledCorrectIdx: shuffled.findIndex(o => o.isCorrect)
    };
  }, [currentIdx, currentExercise]);

  const handleOptionClick = (idx: number) => {
    if (selectedIdx !== null) return;
    setSelectedIdx(idx);
    const correct = idx === shuffledCorrectIdx;
    setIsCorrect(correct);
    
    if (correct) {
      setSessionCorrect(prev => prev + 1);
    }
    
    // Save statistic
    saveVerbResult(verb.id, correct);
  };

  const handleNext = () => {
    if (currentIdx < exercises.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setSelectedIdx(null);
      setIsCorrect(null);
    } else {
      setIsFinished(true);
    }
  };

  if (isFinished) {
    const sessionData = [
      { name: 'Corretti', value: sessionCorrect, color: '#10b981' },
      { name: 'Errati', value: exercises.length - sessionCorrect, color: '#f43f5e' }
    ];

    return (
      <div id="exercise-summary" className="max-w-4xl mx-auto px-4 py-12 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-100"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-blue-900 mb-4">Ottimo Lavoro!</h2>
          <p className="text-slate-600 mb-8 italic">Hai completato gli esercizi per "{verb.cyrillic}"</p>
          
          <div className="w-64 h-64 mx-auto mb-8 relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={sessionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {sessionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-4xl font-bold text-slate-800">
                {Math.round((sessionCorrect / exercises.length) * 100)}%
              </span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Accuratezza</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-12 max-w-sm mx-auto">
            <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100">
              <div className="text-2xl font-bold text-emerald-600">{sessionCorrect}</div>
              <div className="text-[10px] font-bold text-emerald-800 uppercase tracking-widest">Corretti</div>
            </div>
            <div className="bg-rose-50 p-4 rounded-2xl border border-rose-100">
              <div className="text-2xl font-bold text-rose-600">{exercises.length - sessionCorrect}</div>
              <div className="text-[10px] font-bold text-rose-800 uppercase tracking-widest">Errati</div>
            </div>
          </div>

          <button
            onClick={onBack}
            className="bg-blue-900 text-white font-bold py-4 px-12 rounded-2xl hover:bg-blue-800 transition-all shadow-xl hover:shadow-2xl cursor-pointer"
          >
            Torna alla Dashboard
          </button>
        </motion.div>
      </div>
    );
  }

  if (!currentExercise) return null;

  const explanationMap = verb.id === 'bit' 
    ? BIT_VERB_MAP 
    : verb.id === 'brat' 
      ? BRAT_VERB_MAP 
      : verb.id === 'brosat'
        ? BROSAT_VERB_MAP
        : verb.id === 'govorit'
          ? GOVORIT_VERB_MAP
          : verb.id === 'dat'
            ? DAT_VERB_MAP
            : verb.id === 'dumat'
              ? DUMAT_VERB_MAP
              : verb.id === 'zhit'
                ? ZHIT_VERB_MAP
                : verb.id === 'staratsya'
                  ? STARATSYA_VERB_MAP
                  : verb.id === 'obiettivi'
                    ? DOSTIGAT_VERB_MAP
                    : verb.id === 'radice-legata'
                      ? VIPOLNYAT_VERB_MAP
                      : verb.id === 'abbigliamento'
                        ? ODEVATSYA_VERB_MAP
                        : verb.id === 'trasformazione'
                          ? IZMENIT_VERB_MAP
                          : verb.id === 'utilizzo'
                            ? POLZOVATSYA_VERB_MAP
                            : verb.id === 'preparazione'
                              ? PRIGOTOVIT_VERB_MAP
                              : verb.id === 'studiare'
                                ? UCHITSYA_VERB_MAP
                                : verb.id === 'vestire'
                                  ? VESTIRE_VERB_MAP
                                  : verb.id === 'possesso'
                                    ? VLADET_VERB_MAP
                                    : verb.id === 'riparazione'
                                      ? ISPRAVIT_VERB_MAP
                                      : verb.id === 'lit'
                                        ? LIT_VERB_MAP
                                        : verb.id === 'comando'
                                          ? RUKOVODIT_VERB_MAP
                                          : verb.id === 'apprezzamento'
                                            ? LYUBOVATSYA_VERB_MAP
                                            : TSENIT_VERB_MAP;

  const feedback = selectedIdx !== null 
    ? getFeedback(
        selectedIdx, 
        shuffledCorrectIdx, 
        currentExercise.optionBases, 
        currentExercise.verbPair, 
        currentExercise.correctExplanation,
        explanationMap
      ) 
    : "";

  return (
    <div id="exercise-view" className="max-w-4xl mx-auto px-4 py-6 md:py-12">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-slate-500 hover:text-brand-blue transition-colors mb-8 md:mb-12 font-bold uppercase text-[10px] md:text-xs tracking-widest cursor-pointer"
      >
        <ArrowLeft size={16} />
        Dashboard
      </button>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-6 md:mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-blue-900 mb-1 md:mb-2">{verb.cyrillic}</h2>
          <p className="text-slate-500 uppercase text-[9px] md:text-[10px] font-bold tracking-[0.2em]">Esercizio {currentIdx + 1} di {exercises.length}</p>
        </div>
        <div className="h-1.5 w-full sm:w-48 bg-slate-200 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${((currentIdx + 1) / exercises.length) * 100}%` }}
            className="h-full bg-brand-blue"
          />
        </div>
      </div>

      <motion.div
        key={currentIdx}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-xl border border-slate-100 mb-6 md:mb-8"
      >
        <div className="mb-8 md:mb-12 space-y-3 md:space-y-4">
          <p className="text-xl md:text-3xl font-bold text-slate-800 leading-relaxed font-serif">
            {currentExercise.sentence.split('...').map((part, i, arr) => (
              <span key={i}>
                {part}
                {i < arr.length - 1 && (
                  <span className="inline-block min-w-[80px] md:min-w-[120px] border-b-2 md:border-b-4 border-slate-200 mx-1 md:mx-2 text-brand-blue text-center">
                    {selectedIdx !== null ? currentExercise.options[currentExercise.correctIndex] : ""}
                  </span>
                )}
              </span>
            ))}
          </p>
          <p className="text-base md:text-lg italic text-slate-500 font-serif">
            {currentExercise.translation}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {shuffledOptions.map((opt, idx) => {
            let statusClasses = "border-slate-200 hover:border-brand-blue hover:bg-blue-50";
            if (selectedIdx !== null) {
              if (idx === shuffledCorrectIdx) statusClasses = "bg-emerald-50 border-emerald-500 text-emerald-700";
              else if (idx === selectedIdx) statusClasses = "bg-rose-50 border-rose-500 text-rose-700";
              else statusClasses = "opacity-50 border-slate-100";
            }

            return (
              <button
                key={idx}
                disabled={selectedIdx !== null}
                onClick={() => handleOptionClick(idx)}
                className={`p-4 md:p-5 rounded-xl md:rounded-2xl border-2 font-bold text-base md:text-lg transition-all text-left flex justify-between items-center ${statusClasses} cursor-pointer min-h-[56px]`}
              >
                <span className="flex-1 mr-2">{opt}</span>
                {selectedIdx !== null && idx === shuffledCorrectIdx && <CheckCircle2 className="text-emerald-500 shrink-0" size={24} />}
                {selectedIdx !== null && idx === selectedIdx && idx !== shuffledCorrectIdx && <XCircle className="text-rose-500 shrink-0" size={24} />}
              </button>
            );
          })}
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`p-6 md:p-8 rounded-2xl md:rounded-3xl border-2 mb-8 ${isCorrect ? 'bg-emerald-50 border-emerald-100' : 'bg-rose-50 border-rose-100'}`}
          >
            <div className="flex items-start gap-3 md:gap-4">
              <div className={`p-1.5 md:p-2 rounded-full shrink-0 ${isCorrect ? 'bg-emerald-500' : 'bg-rose-500'} text-white`}>
                {isCorrect ? <CheckCircle2 size={20} className="md:w-6 md:h-6" /> : <XCircle size={20} className="md:w-6 md:h-6" />}
              </div>
              <div className="flex-1">
                <p className={`text-base md:text-xl font-bold mb-2 md:mb-3 ${isCorrect ? 'text-emerald-900' : 'text-rose-900'}`}>
                  {feedback.split(': ')[0]}
                </p>
                <div className="text-slate-700 leading-relaxed text-sm md:text-base">
                   {feedback.split(': ').slice(1).join(': ')}
                </div>
              </div>
            </div>
            
            <div className="mt-6 md:mt-8 flex justify-center md:justify-end">
              <button
                onClick={handleNext}
                className="w-full md:w-auto bg-slate-900 text-white font-bold py-3 md:py-3 px-8 rounded-xl md:rounded-2xl flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors shadow-lg cursor-pointer"
              >
                {currentIdx < exercises.length - 1 ? 'Prossimo Esercizio' : 'Completa Corso'}
                <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
