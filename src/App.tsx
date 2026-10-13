import { useState } from 'react';
import Header from './components/Header';
import VerbCard from './components/VerbCard';
import ExerciseView from './components/ExerciseView';
import ReloadPrompt from './components/ReloadPrompt';
import { VERBS } from './constants';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, Group } from 'lucide-react';
import { Verb } from './types';

export default function App() {
  const [selectedVerb, setSelectedVerb] = useState<Verb | null>(null);

  const prefixVerbs = VERBS.filter(v => v.category === 'prefix');
  const groupVerbs = VERBS.filter(v => v.category === 'group');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const dashboardView = (
    <div id="dashboard-content">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 1: Verbi con Prefissi */}
        <section id="prefix-section" className="mb-16 md:mb-24">
          <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-10">
            <div className="accent-line" />
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight font-serif">
              Sezione 1: Verbi con Prefissi
            </h2>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {prefixVerbs.map((verb, index) => (
              <VerbCard 
                key={verb.id} 
                verb={verb} 
                index={index} 
                onStart={() => setSelectedVerb(verb)}
              />
            ))}
          </motion.div>
        </section>

        {/* Section 2: Gruppi di Verbi Correlati */}
        <section id="group-section" className="mb-16 md:mb-24">
          <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-10">
            <div className="accent-line" />
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight font-serif">
              Sezione 2: Gruppi di Verbi Correlati
            </h2>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {groupVerbs.map((verb, index) => (
              <VerbCard 
                key={verb.id} 
                verb={verb} 
                index={index} 
                onStart={() => setSelectedVerb(verb)}
              />
            ))}
          </motion.div>
        </section>
      </main>

      <footer id="app-footer" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-12">
        <div className="flex flex-col md:flex-row justify-between items-center bg-slate-800 text-white px-6 md:px-8 py-5 md:py-6 rounded-2xl shadow-xl gap-4 md:gap-6 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-6 w-full md:w-auto">
            <div className="flex flex-col gap-1.5 w-full md:w-auto items-center md:items-start">
               <div className="h-2 w-full max-w-[200px] md:w-48 bg-slate-700 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '33%' }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-emerald-400" 
                />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Progressi Corso: 33%</span>
            </div>
          </div>
          <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">
            Livello Avanzato • B2-C1
          </div>
        </div>
      </footer>
    </div>
  );

  return (
    <div id="app-root" className="min-h-screen bg-brand-bg">
      <AnimatePresence mode="wait">
        {selectedVerb ? (
          <motion.div
            key="exercise"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <ExerciseView 
              verb={selectedVerb} 
              onBack={() => setSelectedVerb(null)} 
            />
          </motion.div>
        ) : (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {dashboardView}
          </motion.div>
        )}
      </AnimatePresence>
      <ReloadPrompt />
    </div>
  );
}
