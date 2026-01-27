export interface AkatsukiStoryItem {
  id: string;
  name: string;
  clan: string;
  image: string;
  quoteTitle: string;
  story: string;
  tags: string[];
}

import itachiImg from "@/images/Akatsuki/Itachi.png";

export const akatsukiStory: AkatsukiStoryItem[] = [
  {
    id: "itachi",
    name: "Itachi Uchiha",
    clan: "Uchiha",
    image: itachiImg,
    quoteTitle: "Por que não gosta de futebol?",
    story:
      "Ele prefere o silêncio, a estratégia e as partidas longas da madrugada com os parceiros no CS.\n\nEnquanto o mundo corre atrás de rivalidades esportivas, Itachi escolhe a calma do seu quarto, fone no ouvido e mente focada porque, pra ele, o verdadeiro jogo é sempre sobre controle, leitura e precisão.",
    tags: ["Disciplina", "Estratégia", "Controle", "Sacrifício"],
  },
  {
    id: "deidara",
    name: "Deidara",
    clan: "Iwagakure",
    image: "https://images.unsplash.com/photo-1659225260593-f082454ca503?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    quoteTitle: "Por que torce pro PSG?",
    story: "O PSG é puro espetáculo e explosão criativa — como as bombas de argila de Deidara. Um show de habilidades individuais, jogadas inesquecíveis e momentos que explodem a torcida. Arte em campo. Deidara vê beleza na destruição momentânea, e o PSG transforma cada jogo em uma obra-prima efêmera.",
    tags: ["Explosão", "Arte", "Espectáculo"]
  },
  {
    id: "sasori",
    name: "Sasori",
    clan: "Sunagakure",
    image: "https://images.unsplash.com/photo-1723653281310-5a14b70e4cc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    quoteTitle: "Por que torce pro AC Milan?",
    story: "O Milan histórico é sobre legado eterno. Sasori torceria para um time que transcende gerações, onde lendas nunca morrem e a tradição é preservada como arte. Assim como ele transformou seu próprio corpo em marionete eterna, o Milan preserva sua grandeza através dos tempos.",
    tags: ["Eternidade", "Tradição", "Legado"]
  }
];
