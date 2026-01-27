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
];

