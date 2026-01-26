export interface AkatsukiStoryItem {
  id: string;
  name: string;
  clan: string;
  image: string;
  quoteTitle: string;
  story: string;
  tags: string[];
}

export const akatsukiStory: AkatsukiStoryItem[] = [
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
