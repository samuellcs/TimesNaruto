import { motion } from "motion/react";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  className?: string;
}

export function Button({ children, onClick, variant = "primary", className = "" }: ButtonProps) {
  const baseStyles = "px-8 py-4 rounded-full transition-all duration-500 relative overflow-hidden";
  
  const variants = {
    primary: "bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/15 hover:shadow-[0_0_28px_rgba(255,255,255,0.15)]",
    ghost: "border border-white/20 hover:bg-white/5 hover:shadow-[0_0_28px_rgba(255,255,255,0.1)]"
  };

  return (
    <motion.button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      <span className="relative z-10 font-medium tracking-wide">{children}</span>
    </motion.button>
  );
}
