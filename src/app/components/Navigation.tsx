import { motion } from "motion/react";

interface NavigationProps {
  onNavigate: (view: string) => void;
}

export function Navigation({ onNavigate }: NavigationProps) {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.19, 1.0, 0.22, 1.0] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-20 py-4 md:py-8"
    >
      <div className="flex items-center justify-between backdrop-blur-2xl bg-white/5 border border-white/10 rounded-full px-4 md:px-8 py-3 md:py-4">
        <button
          onClick={() => onNavigate('hub')}
          className="text-lg md:text-2xl tracking-tight hover:opacity-70 transition-opacity duration-300"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}
        >
          <span className="hidden md:inline">忍 Shinobi Match</span>
          <span className="md:hidden">忍 Shinobi</span>
        </button>
        
        <div className="flex items-center gap-4 md:gap-8">
          <button
            onClick={() => onNavigate('hub')}
            className="text-xs md:text-sm tracking-wide opacity-70 hover:opacity-100 transition-opacity duration-300"
          >
            <span className="hidden md:inline">Organizações</span>
            <span className="md:hidden">Org</span>
          </button>
          <button className="hidden md:block text-sm tracking-wide opacity-70 hover:opacity-100 transition-opacity duration-300">
            Sobre
          </button>
          <button className="px-4 md:px-6 py-1.5 md:py-2 rounded-full bg-white/10 border border-white/20 text-xs md:text-sm hover:bg-white/15 transition-all duration-300">
            <span className="hidden md:inline">Começar História</span>
            <span className="md:hidden">Start</span>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}