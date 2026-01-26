import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { OrganizationsContainer } from "@/app/components/OrganizationsContainer";
import { TeamCard } from "@/app/components/TeamCard";
import { CharacterCard } from "@/app/components/CharacterCard";
import { Button } from "@/app/components/Button";
import { StoryCard } from "@/app/components/StoryCard";
import { organizations } from "@/app/data/organizations";
import { teams } from "@/app/data/teams";
import { konohaStory } from "@/app/data/konohaStory";
import { akatsukiStory } from "@/app/data/akatsukiStory";
import valedofimGif from "@/images/TelaInicial/valedofim.gif";
import konohaGif from "@/images/TelaInicial/konohagif.gif";
import akatsukiGif from "@/images/TelaInicial/akatsuki.gif";
import time7Gif from "@/images/Konoha/Time7gif.gif";

type View = 'hub' | 'organization';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('hub');
  const [selectedOrg, setSelectedOrg] = useState<string | null>(null);
  const [backgroundImage, setBackgroundImage] = useState<string>('');
  const [highlightedTeam, setHighlightedTeam] = useState<number | null>(null);
  const [selectedTeam, setSelectedTeam] = useState<number | null>(null);
  const [imagePosition, setImagePosition] = useState<number>(0);
  const [teamHoverBackground, setTeamHoverBackground] = useState<string>('');
  
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
    // Marcar time como selecionado primeiro
    setSelectedTeam(teamNumber);
    
    // Se for Time 7, definir o background
    if (teamNumber === 7 && currentOrg?.id === 'konoha') {
      setTeamHoverBackground(time7Gif);
    }
    
    // Highlight effect
    setHighlightedTeam(teamNumber);
    setTimeout(() => setHighlightedTeam(null), 2000);
    
    // Aguardar um pouco para o DOM atualizar e então fazer scroll
    setTimeout(() => {
      const element = teamRefs.current[teamNumber];
      if (element) {
        const offset = 120;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      } else {
        // Se não encontrou, tentar novamente após mais tempo
        setTimeout(() => {
          const retryElement = teamRefs.current[teamNumber];
          if (retryElement) {
            const offset = 120;
            const elementPosition = retryElement.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - offset;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 200);
      }
    }, 150);
  };

  const currentOrg = organizations.find(org => org.id === selectedOrg);
  const allTeams = selectedOrg ? teams[selectedOrg as keyof typeof teams] || [] : [];
  // Filtrar apenas Time 7 para Konoha por enquanto, mostrar todos os times para outras organizações
  const currentTeams = currentOrg?.id === 'konoha' 
    ? allTeams.filter(team => team.teamNumber === 7)
    : allTeams;

  useEffect(() => {
    if (currentView === 'hub') {
      setSelectedOrg(null);
      setSelectedTeam(null);
      setTeamHoverBackground('');
    }
  }, [currentView]);

  // Manter time7gif quando Time 7 estiver selecionado
  useEffect(() => {
    if (selectedTeam === 7 && currentOrg?.id === 'konoha') {
      setTeamHoverBackground(time7Gif);
    }
  }, [selectedTeam, currentOrg?.id]);

  // Scroll effect for background image
  useEffect(() => {
    const handleScroll = () => {
      if (currentView !== 'hub' || backgroundImage) return;
      
      const currentScrollY = window.scrollY;
      
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

        {/* Time 7 GIF background - hover ou quando selecionado (prioridade) */}
        <AnimatePresence>
          {currentView === 'organization' && currentOrg?.id === 'konoha' && (teamHoverBackground || selectedTeam === 7) && (
            <motion.div
              key="time7-background"
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1.05 }}
              exit={{ opacity: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full overflow-hidden"
            >
              <img 
                src={time7Gif}
                alt="Time 7 Background"
                className="absolute w-full h-full object-cover"
                style={{
                  width: '100%',
                  height: '100%',
                  objectPosition: 'center center',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#07080B]/80 via-[#07080B]/70 to-[#07080B]" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Konoha GIF background for Konoha organization view (fallback) */}
        <AnimatePresence>
          {currentView === 'organization' && currentOrg?.id === 'konoha' && !teamHoverBackground && selectedTeam !== 7 && (
            <motion.div
              key="konoha-background"
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1.05 }}
              exit={{ opacity: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full overflow-hidden"
            >
              <img 
                src={konohaGif}
                alt="Konoha Background"
                className="absolute w-full h-full object-cover"
                style={{
                  width: '100%',
                  height: '100%',
                  objectPosition: 'center center',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#07080B]/80 via-[#07080B]/70 to-[#07080B]" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Akatsuki GIF background for Akatsuki organization view */}
        <AnimatePresence>
          {currentView === 'organization' && currentOrg?.id === 'akatsuki' && (
            <motion.div
              key="akatsuki-background"
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1.05 }}
              exit={{ opacity: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full overflow-hidden"
            >
              <img 
                src={akatsukiGif}
                alt="Akatsuki Background"
                className="absolute w-full h-full object-cover"
                style={{
                  width: '100%',
                  height: '100%',
                  objectPosition: 'center center',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#07080B]/80 via-[#07080B]/70 to-[#07080B]" />
            </motion.div>
          )}
        </AnimatePresence>
        
        <AnimatePresence>
          {backgroundImage && currentView === 'hub' && (
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

                <OrganizationsContainer
                  organizations={organizations}
                  onHover={(image) => handleOrgHover(image)}
                  onLeave={handleOrgLeave}
                  onClick={(orgId) => handleOrgClick(orgId)}
                />
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

                {/* Seal decoration - mais visível */}
                <div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[250px] md:text-[500px] opacity-[0.08] pointer-events-none select-none"
                  style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 600 }}
                >
                  {currentOrg.seal}
                </div>
              </section>

              {/* Teams Selection - apenas para organizações que não sejam Akatsuki */}
              {currentOrg.id !== 'akatsuki' && (
                <section className="min-h-screen px-6 md:px-20 py-20 md:py-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: currentOrg.id === 'konoha' ? 0.6 : 0.4 }}
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
                      <div
                        key={team.teamNumber}
                        onMouseEnter={() => {
                          if (team.teamNumber === 7 && currentOrg.id === 'konoha') {
                            setTeamHoverBackground(time7Gif);
                          }
                        }}
                        onMouseLeave={() => {
                          // Só remove o hover background se o time não estiver selecionado
                          if (selectedTeam !== 7) {
                            setTeamHoverBackground('');
                          }
                        }}
                      >
                        <TeamCard
                          teamNumber={team.teamNumber}
                          teamName={team.teamName}
                          members={team.members}
                          color={currentOrg.color}
                          onClick={() => handleTeamClick(team.teamNumber)}
                          index={index}
                        />
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Story Cards Section - Akatsuki (direto, sem seleção de time) */}
              {currentOrg.id === 'akatsuki' && (
                <section
                  className="min-h-screen px-6 md:px-20 py-20 md:py-32 relative"
                  style={{ paddingTop: '28vh' }}
                >
                  <div className="space-y-8 md:space-y-12">
                    {akatsukiStory.map((story, index) => (
                      <StoryCard 
                        key={story.id} 
                        story={{
                          id: story.id,
                          name: story.name,
                          clan: story.clan,
                          team: "Time 7" as any, // Tipo compatível para StoryCard
                          image: story.image,
                          quoteTitle: story.quoteTitle,
                          story: story.story,
                          tags: story.tags
                        }} 
                        index={index} 
                      />
                    ))}
                  </div>
                </section>
              )}

              {/* Story Cards Section - Konoha (aparece quando Time 7 é selecionado) */}
              {currentOrg.id === 'konoha' && selectedTeam === 7 && (
                <section
                  ref={(el: HTMLDivElement | null) => { teamRefs.current[7] = el; }}
                  className="min-h-screen px-6 md:px-20 py-20 md:py-32 relative"
                >
                  {/* Highlight glow effect */}
                  <AnimatePresence>
                    {highlightedTeam === 7 && (
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

                  <div className="space-y-8 md:space-y-12">
                    {konohaStory
                      .filter(story => story.team === "Time 7")
                      .map((story, index) => (
                        <StoryCard key={story.id} story={story} index={index} />
                      ))}
                  </div>
                </section>
              )}

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