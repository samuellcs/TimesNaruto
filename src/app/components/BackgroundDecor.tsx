import { motion } from "motion/react";

export function BackgroundDecor() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Background texture */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='paper' x='0' y='0' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Crect fill='%23f5f1e8' width='100' height='100'/%3E%3Cpath d='M0 50h100M50 0v100' stroke='%23e8dcc6' stroke-width='0.5' opacity='0.3'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23paper)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Gradient overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/95 via-[#0f0f0f]/90 to-[#0a0a0a]/95" />

      {/* Konoha Seal in corner - mais visível */}
      <motion.div
        className="absolute top-8 right-8 md:top-12 md:right-12 text-[80px] md:text-[120px] opacity-[0.12]"
        style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 600 }}
        animate={{
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        火
      </motion.div>

      {/* Decorative kanji in background - mais visível */}
      <div className="absolute top-1/4 left-8 text-[100px] md:text-[200px] opacity-[0.08]"
        style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 600 }}
      >
        忍
      </div>
      <div className="absolute bottom-1/4 right-8 text-[100px] md:text-[200px] opacity-[0.08]"
        style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 600 }}
      >
        葉
      </div>

      {/* Falling leaves (optional, subtle) */}
      {[...Array(8)].map((_, i) => {
        const randomX = Math.random() * 50 - 25;
        const randomDuration = 15 + Math.random() * 10;
        const randomDelay = Math.random() * 5;
        
        return (
          <motion.div
            key={i}
            className="absolute text-[20px] opacity-[0.08]"
            style={{
              left: `${10 + i * 12}%`,
              top: "-20px",
            }}
            animate={{
              y: [0, typeof window !== 'undefined' ? window.innerHeight + 100 : 1000],
              x: [0, randomX],
              rotate: [0, 360],
            }}
            transition={{
              duration: randomDuration,
              repeat: Infinity,
              delay: randomDelay,
              ease: "linear",
            }}
          >
            🍃
          </motion.div>
        );
      })}
    </div>
  );
}
