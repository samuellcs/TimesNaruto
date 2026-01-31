import sasukeGremio from "@/images/Konoha/SasukeGremio.png";
import sakura from "@/images/Konoha/sakura.png";
import ino from "@/images/Konoha/ino.png"
import kiba from "@/images/Konoha/kiba.png";
import hinata from "@/images/Konoha/hinata.png";
import shikamaru from "@/images/Konoha/shikamaru.png";
import shino from "@/images/Konoha/shino.png";
import kurenai from "@/images/Konoha/kurenai.png";
import asuma from "@/images/Konoha/asuma.png";

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
    id: "asuma",
    name: "Asuma Sarutobi",
    clan: "Sarutobi",
    team: "Time 10",
    image: asuma,
    quoteTitle: "Por que torce pro Corinthians?",
    story: "O Asuma é aquele clássico corinthiano raiz, do bando de loucos. Gosta de uma cerveja gelada no churrasco, cercado dos parceiros, jogo passando na TV e o coração na mão.\n\nCada partida do Corinthians tira a paciência dele, é raiva, tensão e sofrimento do início ao fim e é aí que entra o cigarro, quase como parte do ritual. Reclama, xinga, sofre… mas nunca deixa de assistir.\n\nPorque ser corinthiano não é sobre tranquilidade, é sobre lealdade. O Corinthians faz o Asuma passar raiva, mas é exatamente isso que faz ele amar o time.",
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
    id: "kurenai",
    name: "Kurenai Yuhi",
    clan: "Yuhi",
    team: "Time 8",
    image: kurenai,
    quoteTitle: "Por que torce pro São Paulo?",
    story: "A Kurenai torceria para o São Paulo porque o clube carrega exatamente as qualidades que definem o jeito dela de ser: elegância, inteligência e discrição aliadas à eficiência. O São Paulo nunca precisou de alarde para ser grande, construiu sua história com disciplina, estratégia e respeito, valores que combinam com a postura calma e observadora da Kurenai.\n\nAssim como ela domina o genjutsu com precisão e controle emocional, o São Paulo sempre se destacou por jogos bem pensados, decisões frias nos momentos decisivos e uma mentalidade vencedora em competições importantes. É um time que sabe esperar, ler o adversário e atacar no momento certo, exatamente como a Kurenai em batalha.\n\nAlém disso, o São Paulo tem uma tradição forte, sólida e respeitada, algo que combina com a maturidade e a liderança silenciosa da Kurenai. Não é sobre fazer barulho, é sobre fazer história. Por isso, o tricolor paulista seria a escolha natural para alguém que valoriza classe, estratégia e grandeza construída com constância. 🔴⚪⚫",
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
  {
    id: "shino",
    name: "Shino Aburame",
    clan: "Aburame",
    team: "Time 8",
    image: shino,
    quoteTitle: "Por que torce pro Fluminense?",
    story: "O Shino é fluminense porque o Fluminense combina com quem observa mais do que fala. Ele não grita gol, não provoca, não discute, ele apenas sabe.\n\nTorcer pro Flu é entender que tradição não precisa de barulho. É gostar de um clube que carrega história, identidade e um certo ar de mistério, exatamente como ele. O Shino se identifica com a elegância silenciosa do Fluminense, com o jogo pensado, estratégico, quase científico.\n\nEnquanto outros torcem no impulso, o Shino torce na lógica. Ele acompanha, analisa, guarda tudo na memória. Não precisa explicar por que é Fluminense — quem observa com atenção percebe.\n\nSer fluminense, pra ele, é isso: constância, identidade e a certeza de que não é preciso aparecer para ser gigante.",
  },

  {
    id: "shikamaru",
    name: "Shikamaru Nara",
    clan: "Nara",
    team: "Time 10",
    image: shikamaru,
    quoteTitle: "Por que torce pro Santos?",
    story: "O Shikamaru é aquele santista raiz que começou a odiar futebol por puro cansaço emocional. Imagina o churrasco rolando, todo mundo reunido, cerveja na mão, e a galera grudada na TV vendo jogo… enquanto o Shikamaru tá num canto, visivelmente irritado.\n\nAlguém puxa assunto e pergunta: “E aí, Shikamaru, torce pra quem?”\n\nEle solta, sem nem levantar a cabeça:\n\n“Eu torcia pro Santos… mas esse time horroroso conseguiu me fazer detestar futebol depois do rebaixamento.”\n\nMesmo assim, ele sabe tudo do clube, acompanha as notícias, defende o Santos quando alguém fala mal, só finge que não liga. No fone de ouvido, tá sempre tocando Charlie Brown Jr. e Emicida, porque sofrer com consciência é o verdadeiro jeito santista de viver.",
  },
]
