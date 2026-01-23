import { motion } from "motion/react";

interface Organization {
  id: string;
  name: string;
  tagline: string;
  color: string;
  backgroundImage: string;
}

interface OrganizationsContainerProps {
  organizations: Organization[];
  onHover: (image: string) => void;
  onLeave: () => void;
  onClick: (orgId: string) => void;
}

export function OrganizationsContainer({
  organizations,
  onHover,
  onLeave,
  onClick
}: OrganizationsContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.19, 1.0, 0.22, 1.0] }}
      className="relative"
    >
      {/* Glass background container */}
      <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden">
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-700"
          style={{
            boxShadow: `0 0 60px rgba(255, 255, 255, 0.1), inset 0 0 40px rgba(255, 255, 255, 0.05)`
          }}
        />
        
        {/* Content */}
        <div className="relative p-6 md:p-10">
          {/* Grid de organizações */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {organizations.map((org, index) => (
              <motion.div
                key={org.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: [0.19, 1.0, 0.22, 1.0]
                }}
                onMouseEnter={() => onHover(org.backgroundImage)}
                onMouseLeave={onLeave}
                onClick={() => onClick(org.id)}
                className="group relative cursor-pointer p-5 md:p-6 rounded-xl border border-white/5 hover:border-white/20 transition-all duration-300 hover:bg-white/5"
              >
                {/* Glow effect individual */}
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    boxShadow: `0 0 30px ${org.color}30, inset 0 0 20px ${org.color}15`
                  }}
                />
                
                {/* Content */}
                <div className="relative">
                  <div
                    className="mb-2 md:mb-3 text-xs tracking-[0.2em] uppercase opacity-60"
                    style={{ color: org.color }}
                  >
                    Organização
                  </div>
                  
                  <h3 
                    className="text-xl md:text-2xl mb-2 tracking-tight"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}
                  >
                    {org.name}
                  </h3>
                  
                  <p className="text-xs md:text-sm opacity-60 leading-relaxed">
                    {org.tagline}
                  </p>
                  
                  <motion.div
                    className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ color: org.color }}
                  >
                    <span className="text-xs tracking-wide">Explorar</span>
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.div>
                </div>

                {/* Decorative kanji */}
                <div 
                  className="absolute bottom-2 right-2 text-[40px] md:text-[50px] opacity-[0.02] pointer-events-none"
                  style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 600 }}
                >
                  忍
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
