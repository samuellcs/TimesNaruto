import { motion } from "motion/react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

interface CharacterPanelProps {
  name: string;
  clan: string;
  image: string;
  isVisible: boolean;
}

export function CharacterPanel({
  name,
  clan,
  image,
  isVisible,
}: CharacterPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
      animate={
        isVisible
          ? { opacity: 1, x: 0, filter: "blur(0px)" }
          : { opacity: 0, x: -30, filter: "blur(10px)" }
      }
      transition={{ duration: 0.8, ease: [0.19, 1.0, 0.22, 1.0] }}
      className="group relative w-full md:w-[25%] flex-shrink-0"
    >
      {/* Character image - sem bordas */}
      <div className="relative w-full">
        {/* Imagem do personagem */}
        <div className="relative rounded-t-md md:rounded-t-lg overflow-hidden"
          style={{
            aspectRatio: "3/4",
          }}
        >
          <ImageWithFallback
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            loading="lazy"
          />

          {/* Chakra glow on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#22C55E]/0 via-[#22C55E]/0 to-[#22C55E]/0 group-hover:from-[#22C55E]/10 group-hover:via-[#22C55E]/5 group-hover:to-[#22C55E]/10 transition-all duration-500"
          />
        </div>

        {/* Name and clan section (wooden bar at bottom) - completa a largura */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative w-full"
          style={{ marginTop: 0 }}
        >
          {/* Wooden bar background - largura completa */}
          <div
            className="relative w-full px-3 md:px-4 py-2 md:py-2.5 rounded-b-md md:rounded-b-lg"
            style={{
              background: "linear-gradient(135deg, #654321 0%, #8B6F47 50%, #654321 100%)",
              boxShadow: `
                inset 0 2px 4px rgba(0,0,0,0.3),
                0 2px 8px rgba(0,0,0,0.2),
                inset 0 -2px 4px rgba(255,255,255,0.1)
              `,
            }}
          >
            {/* Text content */}
            <div className="relative z-10 text-center">
              <h3
                className="text-sm md:text-lg font-bold"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "#F5F1E8",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                }}
              >
                {name}
              </h3>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
