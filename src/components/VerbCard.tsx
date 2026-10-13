import React, { useState, MouseEvent } from 'react';
import { motion } from 'motion/react';
import { BookOpen, Play, PieChart as ChartIcon, RotateCcw } from 'lucide-react';
import { Verb } from '../types';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { getVerbStats, resetVerbStats } from '../utils/statsUtils';

interface VerbCardProps {
  verb: Verb;
  index: number;
  onStart: () => void;
}

export const VerbCard: React.FC<VerbCardProps> = ({ verb, index, onStart }) => {
  const [stats, setStats] = useState(getVerbStats(verb.id));
  const [isResetting, setIsResetting] = useState(false);

  const handleReset = (e: MouseEvent) => {
    e.stopPropagation();
    resetVerbStats(verb.id);
    setStats({ correctFirstTry: 0, totalAttempts: 0 });
    
    // Visual feedback for reset
    setIsResetting(true);
    setTimeout(() => setIsResetting(false), 1000);
  };

  const data = stats.totalAttempts > 0 ? [
    { name: 'Corretti', value: stats.correctFirstTry, color: '#10b981' }, // emerald-500
    { name: 'Errati', value: stats.totalAttempts - stats.correctFirstTry, color: '#f43f5e' } // rose-500
  ] : [
    { name: 'Inizia', value: 1, color: '#e2e8f0' } // slate-200
  ];

  return (
    <motion.div
      id={`verb-card-${verb.id}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="card-gradient rounded-2xl p-5 md:p-6 shadow-sm border border-slate-200 flex flex-col h-full relative group"
    >
      {/* Exercise Count Badge */}
      <div 
        id={`badge-${verb.id}`}
        className="absolute top-4 right-4 bg-blue-50 text-blue-800 text-[9px] md:text-[10px] font-bold px-2 py-0.5 rounded-full border border-blue-100 flex items-center gap-1 uppercase tracking-tighter z-10"
      >
        <BookOpen size={10} />
        {verb.exercisesCount} ES.
      </div>

      <div className="flex gap-4 mb-4">
        <div className="flex-grow">
          <h3 
            id={`verb-title-${verb.id}`}
            className="text-xl md:text-2xl font-bold text-blue-900 mb-0.5 md:mb-1"
          >
            {verb.cyrillic}
          </h3>
          <p 
            id={`verb-translation-${verb.id}`}
            className="text-slate-600 text-xs md:text-sm font-medium italic"
          >
            ({verb.translation})
          </p>
        </div>

        {/* Small Pie Chart */}
        <div 
          className="w-16 h-16 shrink-0 relative cursor-alias group-hover:scale-110 transition-transform"
          onDoubleClick={handleReset}
          title="Doppio clic per azzerare le statistiche"
        >
          {isResetting ? (
            <div className="absolute inset-0 flex items-center justify-center bg-white/80 rounded-full animate-pulse z-20">
              <RotateCcw size={16} className="text-blue-600 animate-spin" />
            </div>
          ) : null}
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={18}
                outerRadius={28}
                paddingAngle={2}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, idx) => (
                  <Cell key={`cell-${idx}`} fill={entry.color} />
                ))}
              </Pie>
              {stats.totalAttempts > 0 && <Tooltip 
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-slate-900 text-white text-[10px] px-2 py-1 rounded shadow-lg border border-slate-700">
                        {`${payload[0].name}: ${payload[0].value}`}
                      </div>
                    );
                  }
                  return null;
                }}
              />}
            </PieChart>
          </ResponsiveContainer>
          {stats.totalAttempts > 0 && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-[10px] font-bold text-slate-500">
                {Math.round((stats.correctFirstTry / stats.totalAttempts) * 100)}%
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="flex-grow">
        <p 
          id={`verb-description-${verb.id}`}
          className="text-slate-500 text-[11px] md:text-xs leading-relaxed mb-5 md:mb-6 h-[4.5em] overflow-hidden"
        >
          {verb.description}
        </p>

        {stats.totalAttempts > 0 && (
          <div className="mb-6 flex items-center gap-3">
            <div className="flex-1 h-1 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-emerald-500" 
                style={{ width: `${(stats.correctFirstTry / stats.totalAttempts) * 100}%` }}
              />
            </div>
            <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <ChartIcon size={12} />
              Accuratezza
            </div>
          </div>
        )}
      </div>

      <motion.button
        id={`btn-start-${verb.id}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onStart}
        className="w-full bg-emerald-600 text-white text-[11px] md:text-xs font-bold py-3 md:py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-emerald-700 transition-colors shadow-sm cursor-pointer min-h-[44px] mt-auto"
      >
        <Play size={14} fill="currentColor" />
        {stats.totalAttempts > 0 ? 'Continua Allenamento' : 'Inizia Esercizio'}
      </motion.button>
    </motion.div>
  );
};

export default VerbCard;
