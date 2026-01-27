export interface AllianceStoryItem {
  id: string;
  name: string;
  clan: string;
  image: string;
  quoteTitle: string;
  story: string;
  tags: string[];
}

import areiaImg from "@/images/ShinobiAlliance/Areia.png";

export const allianceStory: AllianceStoryItem[] = [
  {
    id: "areia",
    name: "Gaara, Temari e Kankuro",
    clan: "Sunagakure",
    image: areiaImg,
    quoteTitle: "Porque torcem pro Corinthians?",
    story:
      "Kankuro e Temari são corinthianos raiz, daqueles que vivem o jogo como se fosse missão ninja. São os que vão pro estádio junto com a gaviões e cantam os 90 minutos e defendem o time com a mesma intensidade que defendem sua vila. Arquibancada é território deles.\n\nGaara já é diferente.\n\nMais silencioso e introspectivo, ele não acompanha tanto futebol… mas torce pelo Corinthians por lealdade aos irmãos.\n\nPra ele, não é sobre o jogo é sobre estar ao lado de quem ele ama.",
    tags: ["Sincronia", "Estratégia", "Família", "Controle"],
  },
  {
    id: "raikage-a",
    name: "A (Raikage)",
    clan: "Kumogakure",
    image:
      "https://images.unsplash.com/photo-1659225260593-f082454ca503?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    quoteTitle: "Por que toma decisões no impacto?",
    story:
      "O Raikage lidera com velocidade: ele corta a dúvida antes que ela vire fraqueza. Na Aliança, ele é o braço que puxa o grupo pra frente quando a conversa ameaça travar. Ele acredita em ação, em compromisso e em assumir o peso das consequências. Pra ele, proteger é se colocar na frente — primeiro, sempre.",
    tags: ["Liderança", "Ação", "Força", "Determinação"],
  },
  {
    id: "mei",
    name: "Mei Terumi",
    clan: "Kirigakure",
    image:
      "https://images.unsplash.com/photo-1602827114696-738d7ee10b3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    quoteTitle: "Por que quer quebrar o ciclo da névoa sangrenta?",
    story:
      "Mei carrega um passado pesado: uma vila marcada por medo e violência. Na Aliança Shinobi, ela representa o outro lado da força — a coragem de mudar por dentro. Liderar, pra ela, é reconstruir confiança, encerrar a era do terror e provar que tradição não precisa ser prisão. Paz é decisão política e emocional, não sorte.",
    tags: ["Mudança", "Coragem", "Reconstrução", "Paz"],
  },
];

