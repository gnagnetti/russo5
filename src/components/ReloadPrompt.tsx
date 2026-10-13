import { useState, useEffect } from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';
import { RefreshCw, WifiOff, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ReloadPrompt() {
  const swResult = useRegisterSW({
    onRegistered(r) {
      console.log('SW Registered');
    },
    onRegisterError(error) {
      console.error('SW registration error', error);
    },
  });

  // Safe destructuring
  const {
    offlineReady: [offlineReady, setOfflineReady] = [false, () => {}],
    needUpdate: [needUpdate, setNeedUpdate] = [false, () => {}],
    updateServiceWorker,
  } = swResult || {};

  const close = () => {
    if (setOfflineReady) setOfflineReady(false);
    if (setNeedUpdate) setNeedUpdate(false);
  };

  // If the hook is not working properly, just render the offline indicator
  if (!swResult || !updateServiceWorker) {
    return (
      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3 pointer-events-none">
        <OfflineIndicator />
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3 pointer-events-none">
      <AnimatePresence>
        {offlineReady && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="pointer-events-auto bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-3 rounded-xl shadow-lg flex items-center gap-3 backdrop-blur-sm"
          >
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            <div className="flex flex-col">
              <span className="text-sm font-bold">Pronto per l'uso offline</span>
              <span className="text-xs opacity-80">L'app è stata salvata sul tuo dispositivo.</span>
            </div>
            <button 
              onClick={close}
              className="ml-2 text-[10px] uppercase tracking-wider font-bold hover:text-emerald-900 transition-colors"
            >
              Chiudi
            </button>
          </motion.div>
        )}

        {needUpdate && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="pointer-events-auto bg-blue-600 text-white px-5 py-4 rounded-xl shadow-2xl flex items-center gap-4"
          >
            <RefreshCw className="w-6 h-6 animate-spin" style={{ animationDuration: '3s' }} />
            <div className="flex flex-col">
              <span className="text-sm font-bold">Nuovo aggiornamento</span>
              <span className="text-xs text-blue-100">Clicca per aggiornare.</span>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => updateServiceWorker(true)}
                className="bg-white text-blue-600 px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-blue-50 transition-colors"
              >
                Aggiorna
              </button>
              <button 
                onClick={close}
                className="text-white/80 hover:text-white px-2 py-1.5 text-xs font-medium"
              >
                Ignora
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <OfflineIndicator />
    </div>
  );
}

function OfflineIndicator() {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  
  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (!isOffline) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="pointer-events-auto bg-slate-900/90 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-3 backdrop-blur-md border border-white/10"
    >
      <WifiOff className="w-4 h-4 text-amber-400" />
      <span className="text-xs font-medium">Sei offline.</span>
    </motion.div>
  );
}

