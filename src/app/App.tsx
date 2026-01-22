import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Navigation } from "@/app/components/Navigation";
import { OrganizationCard } from "@/app/components/OrganizationCard";
import { TeamCard } from "@/app/components/TeamCard";
import { CharacterCard } from "@/app/components/CharacterCard";
import { Button } from "@/app/components/Button";
import { organizations } from "@/app/data/organizations";
import { teams } from "@/app/data/teams";
import valedofimGif from "@/images/valedofim.gif";

type View = 'hub' | 'organization';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('hub');
  const [selectedOrg, setSelectedOrg] = useState<string | null>(null);
  const [backgroundImage, setBackgroundImage] = useState<string>('');
  const [highlightedTeam, setHighlightedTeam] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState<number>(0);
  const [imagePosition, setImagePosition] = useState<number>(0);
  
  const teamRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const handleOrgHover = (image: string) => {
    setBackgroundImage(image);
  };

  const handleOrgLeave = () => {
    setBackgroundImage('');
  };

  const handleOrgClick = (orgId: string) => {
    setSelectedOrg(orgId);
    setCurrentView('organization');
    setBackgroundImage('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTeamClick = (teamNumber: number) => {
    const element = teamRefs.current[teamNumber];
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Highlight effect
      setHighlightedTeam(teamNumber);
      setTimeout(() => setHighlightedTeam(null), 2000);
    }
  };

  const currentOrg = organizations.find(org => org.id === selectedOrg);
  const currentTeams = selectedOrg ? teams[selectedOrg as keyof typeof teams] || [] : [];

  useEffect(() => {
    if (currentView === 'hub') {
      setSelectedOrg(null);
    }
  }, [currentView]);

  // Scroll effect for background image
  useEffect(() => {
    const handleScroll = () => {
      if (currentView !== 'hub' || backgroundImage) return;
      
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Calcula a posição da imagem baseado no scroll
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = Math.max(documentHeight - windowHeight, 1);
      
      // Calcula o progresso do scroll (0 = topo, 1 = fim)
      const scrollProgress = Math.min(Math.max(currentScrollY / maxScroll, 0), 1);
      
      // A imagem tem 200% de altura (2x a altura da tela)
      // Para mostrar do topo ao fim, precisamos mover de 0% até -100% da altura da tela
      // Isso corresponde a -50% da altura total da imagem (que é 200% da tela)
      // Quando scrollProgress = 0: translateY = 0% (mostra topo da imagem)
      // Quando scrollProgress = 1: translateY = -50% (mostra fim da imagem, travado)
      setImagePosition(-scrollProgress * 50);
    };

    // Set initial scroll position
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [currentView, backgroundImage]);

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Background with transition */}
      <div className="fixed inset-0 bg-[#07080B]">
        {/* Default GIF background for hub view */}
        {currentView === 'hub' && !backgroundImage && (
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <img 
              src={valedofimGif}
              alt="Background"
              className="absolute w-full object-cover"
              style={{
                minWidth: '100%',
                height: '200vh', // 200% da altura da viewport
                top: 0,
                left: 0,
                objectPosition: 'center top',
                transform: `translateY(${imagePosition}%)`,
                willChange: 'transform',
                transition: 'none', // Remove transições para movimento suave com scroll
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#07080B]/80 via-[#07080B]/70 to-[#07080B]" />
          </div>
        )}
        
        <AnimatePresence>
          {backgroundImage && (
            <motion.div
              key={backgroundImage}
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1.05 }}
              exit={{ opacity: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#07080B]/80 via-[#07080B]/70 to-[#07080B]" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Grain texture */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Navigation */}
      {/* <Navigation onNavigate={setCurrentView} /> */}

      {/* Content */}
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {currentView === 'hub' && (
            <motion.div
              key="hub"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Hero Section */}
              <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 pt-32 pb-20">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.19, 1.0, 0.22, 1.0] }}
                  className="text-center mb-20"
                >
                  <h1 
                    className="text-4xl md:text-[72px] leading-[1.1] mb-6 tracking-tight px-4"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}
                  >
                    Qual time seu <br />
                    <span 
                      className="bg-gradient-to-r from-[#22C55E] to-[#38BDF8] bg-clip-text text-transparent"
                    >
                      ninja torceria?
                    </span>
                  </h1>
                  
                  <p className="text-base md:text-xl opacity-60 mb-10 max-w-2xl mx-auto leading-relaxed px-4">
                    Escolha uma organização. Entre na história.<br />
                    Descubra qual time de futebol seus personagens favoritos apoiariam.
                  </p>

                  <Button onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
                    Escolher Organização
                  </Button>
                </motion.div>

                {/* Decorative kanji */}
                <div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[200px] md:text-[400px] opacity-[0.02] pointer-events-none select-none"
                  style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 600 }}
                >
                  忍
                </div>
              </section>

              {/* Organizations Grid */}
              <section className="min-h-screen px-6 md:px-20 py-20 md:py-32">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <h2 
                    className="text-3xl md:text-5xl mb-4"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}
                  >
                    Organizações Ninjas
                  </h2>
                  <p className="text-base md:text-lg opacity-60">
                    Cada organização tem sua própria história e filosofia
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  {organizations.map((org, index) => (
                    <OrganizationCard
                      key={org.id}
                      name={org.name}
                      tagline={org.tagline}
                      color={org.color}
                      icon={org.icon}
                      backgroundImage={org.backgroundImage}
                      onHover={() => handleOrgHover(org.backgroundImage)}
                      onLeave={handleOrgLeave}
                      onClick={() => handleOrgClick(org.id)}
                      index={index}
                    />
                  ))}
                </div>
              </section>
            </motion.div>
          )}

          {currentView === 'organization' && currentOrg && (
            <motion.div
              key="organization"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Organization Header */}
              <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 pt-32 pb-20 relative">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-center max-w-4xl px-4"
                >
                  {/* Back button */}
                  <motion.button
                    onClick={() => setCurrentView('hub')}
                    className="absolute top-32 left-6 md:left-20 px-4 md:px-6 py-2 md:py-3 rounded-full border border-white/20 hover:bg-white/10 transition-all duration-300 flex items-center gap-2 text-sm md:text-base"
                    whileHover={{ x: -4 }}
                  >
                    <span>←</span>
                    <span className="hidden md:inline">Voltar</span>
                  </motion.button>

                  <div 
                    className="text-xs md:text-sm tracking-[0.3em] uppercase mb-6 opacity-60"
                    style={{ color: currentOrg.color }}
                  >
                    {currentOrg.seal} Organização
                  </div>
                  
                  <h1 
                    className="text-4xl md:text-[64px] leading-[1.1] mb-6 tracking-tight"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}
                  >
                    {currentOrg.name}
                  </h1>
                  
                  <p className="text-lg md:text-2xl mb-6" style={{ color: currentOrg.color }}>
                    {currentOrg.tagline}
                  </p>

                  <p className="text-base md:text-lg opacity-60 leading-relaxed">
                    {currentOrg.description}
                  </p>
                </motion.div>

                {/* Seal decoration */}
                <div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[250px] md:text-[500px] opacity-[0.02] pointer-events-none select-none"
                  style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 600 }}
                >
                  {currentOrg.seal}
                </div>
              </section>

              {/* Teams Selection */}
              <section className="min-h-screen px-6 md:px-20 py-20 md:py-32">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mb-16"
                >
                  <h2 
                    className="text-3xl md:text-5xl mb-4"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}
                  >
                    Escolha seu Time
                  </h2>
                  <p className="text-base md:text-lg opacity-60">
                    Cada time possui sua própria dinâmica e história
                  </p>
                </motion.div>

                <div className="space-y-6 max-w-5xl">
                  {currentTeams.map((team, index) => (
                    <TeamCard
                      key={team.teamNumber}
                      teamNumber={team.teamNumber}
                      teamName={team.teamName}
                      members={team.members}
                      color={currentOrg.color}
                      onClick={() => handleTeamClick(team.teamNumber)}
                      index={index}
                    />
                  ))}
                </div>
              </section>

              {/* Team Chapters (Storytelling) */}
              {currentTeams.map((team, teamIndex) => (
                <section
                  key={team.teamNumber}
                  ref={(el: HTMLDivElement | null) => { teamRefs.current[team.teamNumber] = el; }}
                  className="min-h-screen px-6 md:px-20 py-20 md:py-32 relative"
                >
                  {/* Highlight glow effect */}
                  <AnimatePresence>
                    {highlightedTeam === team.teamNumber && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 rounded-3xl pointer-events-none"
                        style={{
                          boxShadow: `0 0 100px ${currentOrg.color}60, inset 0 0 80px ${currentOrg.color}30`
                        }}
                      />
                    )}
                  </AnimatePresence>

                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-200px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 md:mb-20"
                  >
                    <div 
                      className="text-xs md:text-sm tracking-[0.3em] uppercase mb-3 md:mb-4 opacity-60"
                      style={{ color: currentOrg.color }}
                    >
                      Capítulo {String(teamIndex + 1).padStart(2, '0')}
                    </div>
                    
                    <h2 
                      className="text-3xl md:text-6xl mb-4 md:mb-6 tracking-tight max-w-4xl"
                      style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}
                    >
                      {team.teamName}
                    </h2>

                    {/* Decorative line */}
                    <div className="relative h-0.5 md:h-1 w-24 md:w-32 mt-6 md:mt-8">
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full" />
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{ background: `linear-gradient(90deg, ${currentOrg.color}, transparent)` }}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                      />
                    </div>
                  </motion.div>

                  {/* Characters */}
                  <div className="space-y-8 md:space-y-12">
                    {team.characters.map((character, charIndex) => (
                      <CharacterCard
                        key={character.name}
                        {...character}
                        color={currentOrg.color}
                        index={charIndex}
                      />
                    ))}
                  </div>

                  {/* Section separator */}
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.5 }}
                    className="mt-32 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  />
                </section>
              ))}

              {/* Footer CTA */}
              <section className="px-6 md:px-20 py-20 md:py-40 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 
                    className="text-3xl md:text-5xl mb-4 md:mb-6"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}
                  >
                    Explorar Outras Organizações
                  </h2>
                  <p className="text-base md:text-lg opacity-60 mb-8 md:mb-10">
                    Descubra mais histórias e conexões inesperadas
                  </p>
                  <Button onClick={() => setCurrentView('hub')}>
                    Voltar ao Hub
                  </Button>
                </motion.div>
              </section>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Chakra particles (subtle animation) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  );
}