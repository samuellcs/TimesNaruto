import sasukeGremio from "@/images/Konoha/SasukeGremio.png";

export type TeamType = "Time 7" | "Time 8" | "Time 9" | "Time 10";

export interface KonohaStoryItem {
  id: string;
  name: string;
  clan: string;
  team: TeamType;
  image: string;
  quoteTitle: string;
  story: string;
}

export const konohaStory: KonohaStoryItem[] = [

  {
    id: "sasuke",
    name: "Sasuke Uchiha",
    clan: "Uchiha",
    team: "Time 7",
    image: sasukeGremio,
    quoteTitle: "Por que torce pro Grêmio?",
    story: "Sasuke é Grêmio porque ele vive como um verdadeiro copeiro: silencioso, intenso e movido por rivalidade. Ele não busca aprovação, busca respeito. Do mesmo jeito que um gremista raiz defende o Sul com orgulho e postura firme, Sasuke defende o nome Uchiha como se fosse lei do mundo ninja. Tradição, confronto, guerra mental e vitória no detalhe… isso é Sasuke. Isso é Grêmio.",
  },
]
