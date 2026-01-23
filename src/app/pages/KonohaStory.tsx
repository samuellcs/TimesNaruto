import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { BackgroundDecor } from "@/app/components/BackgroundDecor";
import { StoryCard } from "@/app/components/StoryCard";
import { konohaStory, TeamType } from "@/app/data/konohaStory";

interface KonohaStoryProps {
  onBack?: () => void;
}

export function KonohaStory({ onBack }: KonohaStoryProps) {
  const [selectedTeam, setSelectedTeam] = useState<TeamType | "Todos">("Todos");

  const filteredStories = useMemo(() => {
    if (selectedTeam === "Todos") {
      return konohaStory;
    }
    return konohaStory.filter((story) => story.team === selectedTeam);
  }, [selectedTeam]);

  const teams: TeamType[] = ["Time 7", "Time 8", "Time 9", "Time 10"];

  return (
    <div className="min-h-screen relative">
      <BackgroundDecor />

      {/* Content */}
      <div className="relative z-10">
        {/* Back button */}
        {onBack && (
          <motion.button
            onClick={onBack}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="fixed top-8 left-6 md:left-20 z-50 px-4 md:px-6 py-2 md:py-3 rounded-full border border-white/20 hover:bg-white/10 transition-all duration-300 flex items-center gap-2 text-sm md:text-base backdrop-blur-sm bg-black/20"
            whileHover={{ x: -4 }}
          >
            <span>←</span>
            <span className="hidden md:inline">Voltar</span>
          </motion.button>
        )}

        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.19, 1.0, 0.22, 1.0] }}
            className="text-center mb-12 md:mb-20 max-w-4xl"
          >
            <h1
              className="text-5xl md:text-[80px] leading-[1.1] mb-4 md:mb-6 tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}
            >
              Aldeia da Folha
            </h1>

            <p
              className="text-xl md:text-2xl mb-4 md:mb-6"
              style={{ color: "#22C55E" }}
            >
              Vontade do Fogo • Laços acima de tudo
            </p>

            <p className="text-base md:text-lg opacity-70 leading-relaxed mb-8 md:mb-12">
              Descubra para qual time de futebol cada ninja torceria — e por quê.
            </p>

            {/* Team filter chips */}
            <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
              <motion.button
                onClick={() => setSelectedTeam("Todos")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full border-2 transition-all duration-300 ${
                  selectedTeam === "Todos"
                    ? "bg-[#22C55E]/20 border-[#22C55E] text-[#22C55E]"
                    : "bg-white/5 border-white/20 text-white/70 hover:bg-white/10 hover:border-white/30"
                }`}
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                }}
              >
                Todos
              </motion.button>
              {teams.map((team) => (
                <motion.button
                  key={team}
                  onClick={() => setSelectedTeam(team)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 md:px-6 py-2 md:py-3 rounded-full border-2 transition-all duration-300 ${
                    selectedTeam === team
                      ? "bg-[#22C55E]/20 border-[#22C55E] text-[#22C55E]"
                      : "bg-white/5 border-white/20 text-white/70 hover:bg-white/10 hover:border-white/30"
                  }`}
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                  }}
                >
                  {team}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Story Cards Section */}
        <section className="px-6 md:px-20 py-12 md:py-20">
          <div className="max-w-5xl mx-auto">
            {filteredStories.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <p className="text-lg md:text-xl opacity-60">
                  Nenhuma história encontrada para este filtro.
                </p>
              </motion.div>
            ) : (
              filteredStories.map((story, index) => (
                <StoryCard key={story.id} story={story} index={index} />
              ))
            )}
          </div>
        </section>

        {/* Footer spacing */}
        <div className="h-20 md:h-32" />
      </div>
    </div>
  );
}
