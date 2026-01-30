import sasukeGremio from "@/images/Konoha/SasukeGremio.png";
import sakura from "@/images/Konoha/sakura.png";
import ino from "@/images/Konoha/ino.png"
import kiba from "@/images/Konoha/kiba.png";
import hinata from "@/images/Konoha/hinata.png";

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
  {
    id: "sakura",
    name: "Sakura Haruno",
    clan: "Haruno",
    team: "Time 7",
    image: sakura,
    quoteTitle: "Por que torce pro Internacional?",
    story: "A Sakura seria muito colorada, daquelas gaúchas raiz mesmo. Não perde um churrasco em dia de jogo do Inter, veste a camisa com orgulho e vive cada partida como se estivesse no meio do campo. Intensidade, paixão e lealdade não faltam bem o estilo dela e bem a cara do Internacional.",
  },
  {
    id: "ino",
    name: "Ino Yamanaka",
    clan: "Yamanaka",
    team: "Time 10",
    image: ino, //    placeholder até adicionar ino.png em src/images/Konoha/
    quoteTitle: "Por que torce pro Flamengo?",
    story: "A Ino é a definição de torcedora modinha rubro-negra. Não sabe a escalação, não entende a regra do impedimento, mas o look do dia combina perfeitamente com a camisa do Flamengo. Ela torce pelos títulos, pelo hype e pelo status de fazer parte da maior torcida do Brasil. Dia de jogo? Só descobre que teve partida quando posta ‘Mengão ❤️🖤’ depois que o time já ganhou.",
  },
  {
    id: "kiba",
    name: "Kiba Inuzuka",
    clan: "Inuzuka",
    team: "Time 8",
    image: kiba,
    quoteTitle: "Por que torce pro Flamengo?",
    story: "O Kiba é aquele flamenguista raiz, clássico mesmo. Começou a torcer por influência da família, ainda quando era criança, e desde então não largou mais. Gosta de acompanhar os jogos de verdade, sabe a escalação, reclama do técnico e vive cada partida como se estivesse dentro de campo. Mas também é aquele tipo de flamenguista chato no melhor estilo provocador. Adora encher o saco dos rivais, manda mensagem depois de cada vitória e não perde a chance de lembrar dos títulos. Pra ele, torcer não é hobby, é estilo de vida.",
  },
  {
    id: "hinata",
    name: "Hinata Hyuuga",
    clan: "Hyuuga",
    team: "Time 8",
    image: hinata,
    quoteTitle: "Por que torce pro time?",
    story: "A Hinata não é muito de acompanhar futebol no dia a dia. Ela só se envolve mais durante os jogos do Brasil na Copa do Mundo, mas não é nem pelo esporte em si é pelos momentos em família. Reservada e carinhosa, ela valoriza acima de tudo estar perto de quem ama. Pra Hinata, o importante não é o placar, é a união, a torcida junto no sofá, as risadas e a energia boa de todo mundo reunido.",
  },
]
