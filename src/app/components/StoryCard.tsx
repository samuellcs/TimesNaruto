import { motion } from "motion/react";
import { CharacterPanel } from "./CharacterPanel";
import { ScrollParchment } from "./ScrollParchment";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";

export interface StoryCardData {
  id: string;
  name: string;
  clan: string;
  image: string;
  quoteTitle: string;
  story: string;
}

interface StoryCardProps {
  story: StoryCardData;
  index: number;
}

export function StoryCard({ story, index }: StoryCardProps) {
  const { ref, isVisible } = useScrollReveal({
    threshold: 0.15,
    rootMargin: "-100px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.19, 1.0, 0.22, 1.0],
      }}
      className="w-full mb-12 md:mb-20"
    >
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
        <CharacterPanel
          name={story.name}
          clan={story.clan}
          image={story.image}
          isVisible={isVisible}
        />
        <ScrollParchment
          title={story.quoteTitle}
          story={story.story}
          isVisible={isVisible}
        />
      </div>
    </motion.div>
  );
}
