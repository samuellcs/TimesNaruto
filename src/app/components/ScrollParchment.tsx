import { motion } from "motion/react";

interface ScrollParchmentProps {
  title: string;
  story: string;
  isVisible: boolean;
}

export function ScrollParchment({
  title,
  story,
  isVisible,
}: ScrollParchmentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0, filter: "blur(10px)" }}
      animate={
        isVisible
          ? { opacity: 1, scaleX: 1, filter: "blur(0px)" }
          : { opacity: 0, scaleX: 0, filter: "blur(10px)" }
      }
      transition={{
        duration: 1.2,
        delay: 0.3,
        ease: [0.19, 1.0, 0.22, 1.0],
      }}
      style={{
        transformOrigin: "left center",
      }}
      className="relative w-full md:w-[73%] flex-shrink-0 group"
    >
      {/* Scroll container */}
      <div className="relative px-6 md:px-12 py-8 md:py-12">
        {/* Scroll body (parchment) */}
        <div
          className="relative rounded-lg md:rounded-xl px-6 md:px-10 py-8 md:py-12"
          style={{
            background: "linear-gradient(135deg, #F5F1E8 0%, #E8DCC6 50%, #F5F1E8 100%)",
            boxShadow: `
              inset 0 0 60px rgba(101, 67, 33, 0.1),
              0 4px 20px rgba(0,0,0,0.2),
              inset 0 2px 4px rgba(255,255,255,0.3)
            `,
          }}
        >
          {/* Paper texture overlay */}
          <div
            className="absolute inset-0 rounded-lg md:rounded-xl opacity-30 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='paper' x='0' y='0' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Crect fill='%23f5f1e8' width='100' height='100'/%3E%3Cpath d='M0 50h100M50 0v100' stroke='%23d4c4a8' stroke-width='0.5' opacity='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23paper)'/%3E%3C/svg%3E")`,
              backgroundSize: "150px 150px",
            }}
          />

          {/* Top border with scroll rolls */}
          <div className="absolute -top-2 left-0 right-0 h-4 flex items-center">
            {/* Left roll */}
            <div
              className="absolute left-0 w-8 h-8 rounded-full"
              style={{
                background: "radial-gradient(circle, #8B6F47 0%, #654321 70%, #8B6F47 100%)",
                boxShadow: "inset -2px -2px 4px rgba(0,0,0,0.3), 2px 2px 4px rgba(0,0,0,0.2)",
              }}
            />
            {/* Right roll */}
            <div
              className="absolute right-0 w-8 h-8 rounded-full"
              style={{
                background: "radial-gradient(circle, #8B6F47 0%, #654321 70%, #8B6F47 100%)",
                boxShadow: "inset -2px -2px 4px rgba(0,0,0,0.3), 2px 2px 4px rgba(0,0,0,0.2)",
              }}
            />
            {/* Connecting border */}
            <div
              className="absolute left-4 right-4 h-1"
              style={{
                background: "#654321",
                boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
              }}
            />
          </div>

          {/* Bottom border with scroll rolls */}
          <div className="absolute -bottom-2 left-0 right-0 h-4 flex items-center">
            {/* Left roll */}
            <div
              className="absolute left-0 w-8 h-8 rounded-full"
              style={{
                background: "radial-gradient(circle, #8B6F47 0%, #654321 70%, #8B6F47 100%)",
                boxShadow: "inset -2px -2px 4px rgba(0,0,0,0.3), 2px 2px 4px rgba(0,0,0,0.2)",
              }}
            />
            {/* Right roll */}
            <div
              className="absolute right-0 w-8 h-8 rounded-full"
              style={{
                background: "radial-gradient(circle, #8B6F47 0%, #654321 70%, #8B6F47 100%)",
                boxShadow: "inset -2px -2px 4px rgba(0,0,0,0.3), 2px 2px 4px rgba(0,0,0,0.2)",
              }}
            />
            {/* Connecting border */}
            <div
              className="absolute left-4 right-4 h-1"
              style={{
                background: "#654321",
                boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10">
            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl md:text-3xl font-bold mb-4 md:mb-6 text-center"
              style={{
                fontFamily: "'Noto Serif JP', serif",
                color: "#654321",
                textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
                letterSpacing: "0.05em",
              }}
            >
              {title}
            </motion.h2>

            {/* Story text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-sm md:text-base leading-relaxed text-justify"
              style={{
                color: "#3E2723",
                fontFamily: "'Inter', sans-serif",
                lineHeight: "1.8",
              }}
            >
              {story}
            </motion.p>
          </div>
        </div>

        {/* Hover effect */}
        <motion.div
          className="absolute inset-0 rounded-lg md:rounded-xl pointer-events-none"
          whileHover={{
            boxShadow: "0 0 30px rgba(139, 111, 71, 0.3), inset 0 0 20px rgba(139, 111, 71, 0.1)",
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
}
