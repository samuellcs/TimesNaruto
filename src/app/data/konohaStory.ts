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
  tags: string[];
}

export const konohaStory: KonohaStoryItem[] = [
  {
    id: "naruto",
    name: "Naruto Uzumaki",
    clan: "Uzumaki",
    team: "Time 7",
    image: "https://images.unsplash.com/photo-1723653281310-5a14b70e4cc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    quoteTitle: "Por que torce pro Flamengo?",
    story: "Assim como o Flamengo, Naruto representa a paixão ardente e a torcida mais vibrante. Sua energia inesgotável e capacidade de virar jogos impossíveis espelham a Nação rubro-negra que nunca para de acreditar. O 'Nunca Desistir' do Flamengo é o mesmo 'Dattebayo!' que move Naruto em cada batalha.",
    tags: ["Determinação", "Coragem", "Paixão"]
  },
  {
    id: "sasuke",
    name: "Sasuke Uchiha",
    clan: "Uchiha",
    team: "Time 7",
    image: sasukeGremio,
    quoteTitle: "Por que torce pro Grêmio?",
    story: "Sasuke é Grêmio porque ele vive como um verdadeiro copeiro: silencioso, intenso e movido por rivalidade. Ele não busca aprovação, busca respeito. Do mesmo jeito que um gremista raiz defende o Sul com orgulho e postura firme, Sasuke defende o nome Uchiha como se fosse lei do mundo ninja. Tradição, confronto, guerra mental e vitória no detalhe… isso é Sasuke. Isso é Grêmio.",
    tags: ["Estratégia", "Poder", "Tradição", "Rivalidade"]
  },
  {
    id: "sakura",
    name: "Sakura Haruno",
    clan: "Haruno",
    team: "Time 7",
    image: "https://images.unsplash.com/photo-1602827114696-738d7ee10b3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    quoteTitle: "Por que torce pro Barcelona?",
    story: "Como o Barcelona, Sakura representa a evolução técnica e tática. Começou com potencial, treinou incansavelmente e se tornou uma das melhores. O tiki-taka do Barça é como seu chakra preciso — elegante e devastador. A perfeição através do trabalho duro.",
    tags: ["Cura", "Força", "Evolução"]
  },
  {
    id: "kakashi",
    name: "Kakashi Hatake",
    clan: "Hatake",
    team: "Time 7",
    image: "https://images.unsplash.com/photo-1723653281310-5a14b70e4cc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    quoteTitle: "Por que torce pro Manchester United?",
    story: "Kakashi e o Manchester United compartilham a tradição de grandes líderes e momentos históricos inesquecíveis. O 'Copy Ninja' e o 'Theatre of Dreams' — ambos lugares onde lendas são forjadas e táticas são copiadas, mas nunca igualadas. A versatilidade tática do United espelha a adaptabilidade do Sharingan de Kakashi.",
    tags: ["Liderança", "Tradição", "Versatilidade"]
  },
  {
    id: "hinata",
    name: "Hinata Hyuga",
    clan: "Hyuga",
    team: "Time 8",
    image: "https://images.unsplash.com/photo-1602827114696-738d7ee10b3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    quoteTitle: "Por que torce pro Leicester City?",
    story: "Hinata é a história do Leicester campeão inglês. Subestimada, tímida, mas com um coração imbatível. Sua jornada de underdog à heroína espelha a conquista mais improvável do futebol moderno. A garra silenciosa que vence contra todas as probabilidades.",
    tags: ["Gentileza", "Evolução", "Perseverança"]
  },
  {
    id: "kiba",
    name: "Kiba Inuzuka",
    clan: "Inuzuka",
    team: "Time 8",
    image: "https://images.unsplash.com/photo-1668119064420-fb738fb05e32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    quoteTitle: "Por que torce pro Atlético Mineiro?",
    story: "A massa do Galo e a ferocidade de Kiba são inseparáveis. Um time raçudo, que joga com garra e nunca se intimida. Kiba torceria pro Atlético porque entende a beleza da luta de quem caça o título com unhas e dentes, sempre ao lado de seu parceiro leal.",
    tags: ["Ferocidade", "Lealdade", "Garra"]
  },
  {
    id: "shino",
    name: "Shino Aburame",
    clan: "Aburame",
    team: "Time 8",
    image: "https://images.unsplash.com/photo-1723653281310-5a14b70e4cc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    quoteTitle: "Por que torce pro Juventus?",
    story: "Juventus é sobre estratégia defensiva impecável e paciência tática. Shino torceria pela Velha Senhora porque, como ele, a Juve sabe esperar o momento certo para atacar com precisão cirúrgica. A arte de observar, analisar e vencer sem alarde.",
    tags: ["Análise", "Paciência", "Estratégia"]
  },
  {
    id: "shikamaru",
    name: "Shikamaru Nara",
    clan: "Nara",
    team: "Time 10",
    image: "https://images.unsplash.com/photo-1659225260593-f082454ca503?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    quoteTitle: "Por que torce pro Manchester City?",
    story: "Shikamaru e o City de Guardiola são a perfeição da estratégia. Cada movimento calculado, cada jogada pensada 10 passos à frente. O gênio tático que transforma preguiça aparente em domínio absoluto do campo. 'Que trabalho chato' — mas que resultado perfeito.",
    tags: ["Estratégia", "Inteligência", "Tática"]
  },
  {
    id: "choji",
    name: "Choji Akimichi",
    clan: "Akimichi",
    team: "Time 10",
    image: "https://images.unsplash.com/photo-1668119064420-fb738fb05e32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    quoteTitle: "Por que torce pro Bayern de Munique?",
    story: "Choji e o Bayern compartilham a força física dominante e a eficiência alemã. Quando Choji expande seu corpo, é como o Bayern expandindo seu domínio no campo — imponente, irresistível e sempre em busca da vitória. A potência pura.",
    tags: ["Força", "Lealdade", "Potência"]
  },
  {
    id: "ino",
    name: "Ino Yamanaka",
    clan: "Yamanaka",
    team: "Time 10",
    image: "https://images.unsplash.com/photo-1602827114696-738d7ee10b3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    quoteTitle: "Por que torce pro Paris Saint-Germain?",
    story: "Ino e o PSG são sobre estilo, elegância e controle mental. A arte de ler a mente do adversário e dominar o jogo através da percepção. Como o PSG, Ino sabe que a verdadeira vitória vem do controle total — do campo e da mente.",
    tags: ["Percepção", "Elegância", "Controle"]
  },
  {
    id: "neji",
    name: "Neji Hyuga",
    clan: "Hyuga",
    team: "Time 9",
    image: "https://images.unsplash.com/photo-1723653281310-5a14b70e4cc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    quoteTitle: "Por que torce pro Liverpool?",
    story: "Neji e o Liverpool compartilham a filosofia do 'destino não é destino'. O Byakugan que vê tudo e o 'You'll Never Walk Alone' que nunca desiste. Ambos provaram que o destino pode ser mudado através de determinação e trabalho em equipe.",
    tags: ["Técnica", "Determinação", "Destino"]
  },
  {
    id: "lee",
    name: "Rock Lee",
    clan: "Sem Clã",
    team: "Time 9",
    image: "https://images.unsplash.com/photo-1668119064420-fb738fb05e32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    quoteTitle: "Por que torce pro Borussia Dortmund?",
    story: "Lee e o Dortmund são a personificação do trabalho duro superando talento. Sem jutsu genial, mas com determinação que move montanhas. O 'Yellow Wall' e os 'Portões dos Oito' — ambos símbolos de que esforço e paixão podem superar qualquer limitação.",
    tags: ["Esforço", "Paixão", "Superação"]
  },
  {
    id: "tenten",
    name: "Tenten",
    clan: "Sem Clã",
    team: "Time 9",
    image: "https://images.unsplash.com/photo-1602827114696-738d7ee10b3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    quoteTitle: "Por que torce pro Arsenal?",
    story: "Tenten e o Arsenal são sobre precisão técnica e elegância no jogo. Cada kunai lançado com perfeição, cada passe do Arsenal com precisão cirúrgica. A arte de fazer o simples parecer extraordinário através de técnica impecável.",
    tags: ["Precisão", "Técnica", "Elegância"]
  }
];
