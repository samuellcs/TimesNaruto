import { motion } from "motion/react";
import { ReactNode } from "react";

interface OrganizationCardProps {
  name: string;
  tagline: string;
  color: string;
  icon: ReactNode;
  backgroundImage: string;
  onHover: () => void;
  onLeave: () => void;
  onClick: () => void;
  index: number;
}

export function OrganizationCard({
  name,
  tagline,
  color,
  icon,
  onHover,
  onLeave,
  onClick,
  index
}: OrganizationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.1,
        ease: [0.19, 1.0, 0.22, 1.0]
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
      className="group relative cursor-pointer h-[400px] md:h-[520px] rounded-2xl md:rounded-3xl overflow-hidden"
    >
      {/* Glass background */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl transition-all duration-700 group-hover:bg-white/10 group-hover:border-white/20" />
      
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          boxShadow: `0 0 60px ${color}40, inset 0 0 40px ${color}20`
        }}
      />
      
      {/* Content */}
      <div className="relative h-full p-6 md:p-12 flex flex-col justify-between">
        {/* Text */}
        <div>
          <motion.div
            className="mb-3 md:mb-4 text-xs md:text-sm tracking-[0.2em] uppercase opacity-60"
            style={{ color }}
          >
            Organização
          </motion.div>
          
          <h3 
            className="text-3xl md:text-5xl mb-2 md:mb-3 tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}
          >
            {name}
          </h3>
          
          <p className="text-base md:text-lg opacity-60 leading-relaxed max-w-xs">
            {tagline}
          </p>
          
          <motion.div
            className="mt-6 md:mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ color }}
          >
            <span className="text-sm tracking-wide">Explorar</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.div>
        </div>
      </div>

      {/* Decorative kanji */}
      <div 
        className="absolute top-6 md:top-8 right-6 md:right-8 text-[80px] md:text-[120px] opacity-[0.03] pointer-events-none"
        style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 600 }}
      >
        忍
      </div>
    </motion.div>
  );
}