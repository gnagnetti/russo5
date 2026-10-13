import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function Header() {
  return (
    <header id="app-header" className="pt-8 pb-10 md:pt-12 md:pb-16 text-center max-w-3xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 bg-blue-50 text-brand-blue px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 md:mb-6 border border-blue-100"
      >
        <Sparkles size={14} />
        Accademia di Russo
      </motion.div>
      
      <motion.h1
        id="main-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-900 mb-4 md:mb-6 tracking-tight font-serif"
      >
        Padroneggia i Verbi
      </motion.h1>
      
      <motion.p
        id="main-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-slate-600 text-xs md:text-base font-medium uppercase tracking-wider leading-relaxed"
      >
        Esercizi interattivi per distinguere l'uso dei prefissi e dei verbi russi più complessi.
      </motion.p>
    </header>
  );
}
