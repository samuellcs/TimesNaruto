import { motion } from "motion/react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

interface CharacterCardProps {
  name: string;
  image: string;
  tags: string[];
  story: string;
  footballTeam: string;
  reason: string;
  personality: {
    courage: number;
    loyalty: number;
    strategy: number;
    determination: number;
  };
  color: string;
  index: number;
}

export function CharacterCard({
  name,
  image,
  tags,
  story,
  footballTeam,
  reason,
  personality,
  color,
  index
}: CharacterCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        ease: [0.19, 1.0, 0.22, 1.0]
      }}
      className="group relative"
    >
      <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-700 hover:bg-white/8 hover:border-white/20">
        {/* Hover glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            boxShadow: `0 0 50px ${color}25, inset 0 0 35px ${color}15`
          }}
        />

        {/* Pergaminho texture overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JhaW4iIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuMDUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhaW4pIi8+PC9zdmc+')] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        />

        <div className="relative p-6 md:p-10 flex flex-col md:flex-row gap-6 md:gap-10">
          {/* Character Image */}
          <motion.div
            className="flex-shrink-0 w-full md:w-64 h-64 md:h-80 rounded-xl md:rounded-2xl overflow-hidden bg-white/5 border border-white/10"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <ImageWithFallback
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Content */}
          <div className="flex-1 flex flex-col justify-between">
            {/* Header */}
            <div>
              <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <h4 
                  className="text-2xl md:text-4xl"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}
                >
                  {name}
                </h4>
                {tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 md:px-3 py-0.5 md:py-1 rounded-full bg-white/10 border border-white/20 text-[10px] md:text-xs tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Story */}
              <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 opacity-80">
                {story}
              </p>

              {/* Football team */}
              <div 
                className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full border-2 mb-3 md:mb-4"
                style={{ 
                  borderColor: color,
                  background: `${color}15`
                }}
              >
                <span className="text-xs md:text-sm opacity-60">Torceria para</span>
                <span 
                  className="text-base md:text-lg"
                  style={{ 
                    fontFamily: "'Space Grotesk', sans-serif", 
                    fontWeight: 700,
                    color
                  }}
                >
                  {footballTeam}
                </span>
              </div>

              {/* Reason */}
              <p className="text-sm md:text-base leading-relaxed opacity-70 italic">
                "{reason}"
              </p>
            </div>

            {/* Chakra meters */}
            <div className="space-y-2 md:space-y-3 mt-4 md:mt-6">
              <div className="text-[10px] md:text-xs tracking-[0.15em] uppercase opacity-50 mb-2 md:mb-3">
                Chakra da Personalidade
              </div>
              {Object.entries(personality).map(([trait, value]) => (
                <div key={trait} className="space-y-1">
                  <div className="flex items-center justify-between text-xs md:text-sm">
                    <span className="capitalize opacity-70">{trait}</span>
                    <span className="opacity-50">{value}%</span>
                  </div>
                  <div className="h-1 md:h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.15 + 0.3, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ 
                        background: `linear-gradient(90deg, ${color}80, ${color})`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}