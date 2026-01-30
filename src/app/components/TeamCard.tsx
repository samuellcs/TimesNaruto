import { motion } from "motion/react";

interface TeamCardProps {
  teamNumber: number;
  teamName: string;
  members: string[];
  color: string;
  onClick: () => void;
  onHover?: () => void;
  onLeave?: () => void;
  index: number;
}

export function TeamCard({ teamNumber, teamName, members, color, onClick, onHover, onLeave, index }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.19, 1.0, 0.22, 1.0]
      }}
      onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="group relative cursor-pointer"
    >
      {/* Card */}
      <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-8 transition-all duration-500 hover:bg-white/10 hover:border-white/20 overflow-hidden">
        {/* Glow on hover */}
        <motion.div
          className="absolute inset-0 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            boxShadow: `0 0 40px ${color}30, inset 0 0 30px ${color}15`
          }}
        />

        {/* Content */}
        <div className="relative flex items-center gap-4 md:gap-8">
          {/* Team number badge */}
          <div 
            className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-lg md:rounded-xl flex items-center justify-center border-2 transition-all duration-500 group-hover:scale-110"
            style={{ 
              borderColor: color,
              background: `${color}20`
            }}
          >
            <span 
              className="text-xl md:text-2xl"
              style={{ 
                fontFamily: "'Space Grotesk', sans-serif", 
                fontWeight: 700,
                color
              }}
            >
              {teamNumber}
            </span>
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <h4 
              className="text-lg md:text-2xl mb-1 md:mb-2 truncate"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
            >
              {teamName}
            </h4>
            
            {/* Member chips */}
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {members.map((member, i) => (
                <span
                  key={i}
                  className="px-2 md:px-3 py-0.5 md:py-1 rounded-full bg-white/10 border border-white/20 text-[10px] md:text-xs tracking-wide"
                >
                  {member}
                </span>
              ))}
            </div>
          </div>

          {/* Arrow */}
          <motion.div
            className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            style={{ color }}
          >
            <motion.span
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-lg md:text-xl"
            >
              →
            </motion.span>
          </motion.div>
        </div>

        {/* Subtle pattern */}
        <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 opacity-[0.02] pointer-events-none">
          <div 
            className="text-[60px] md:text-[80px]"
            style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 600 }}
          >
            隊
          </div>
        </div>
      </div>
    </motion.div>
  );
}