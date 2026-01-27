export interface OutrosStoryItem {
  id: string;
  name: string;
  clan: string;
  image: string;
  quoteTitle: string;
  story: string;
  tags: string[];
}

import yahikoKonanImg from "@/images/Outros/Yahikonan.png";

export const outrosStory: OutrosStoryItem[] = [
  {
    id: "yahiko-konan",
    name: "Yahiko e Konan",
    clan: "Amegakure (Ame)",
    image: yahikoKonanImg,
    quoteTitle: "Por que torcem pro São Paulo?",
    story:
      "Yahiko sempre teve alma tricolor, amava muito o time e ainda participava da Torcida Independente.\n\nAcreditava em mudanças, diálogo e união torcia pelo São Paulo do jeito que lutava pelo mundo: tentando resolver tudo de forma pacífica e estratégica.\n\nInfelizmente, sua história terminou cedo demais, em meio a um conflito de torcida organizada que saiu do controle.\n\nKonan nunca foi de futebol… até perder quem mais amava.\n\nDepois da morte de Yahiko, passou a torcer pelo São Paulo como uma forma de manter viva a memória dele.\n\nPara ela, não é só um time é uma lembrança, um vínculo, um pedaço do passado que ainda pulsa no coração.",
    tags: ["Origem", "Esperança", "Lealdade", "Resiliência"],
  },
  {
    id: "orochimaru",
    name: "Orochimaru",
    clan: "Som (Experimentos)",
    image:
      "https://images.unsplash.com/photo-1723653281310-5a14b70e4cc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    quoteTitle: "Por que não segue regras?",
    story:
      "Orochimaru é a personificação do ‘e se?’. Ele não aceita limites: testa hipóteses, rompe tradições e transforma curiosidade em obsessão. No mundo ninja, isso é perigoso — mas também é o que empurra a fronteira do impossível. Onde outros veem tabu, ele vê oportunidade.",
    tags: ["Curiosidade", "Poder", "Transgressão", "Ambição"],
  },
  {
    id: "kabuto",
    name: "Kabuto Yakushi",
    clan: "Som (Adaptação)",
    image:
      "https://images.unsplash.com/photo-1659225260593-f082454ca503?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    quoteTitle: "Por que muda de forma o tempo todo?",
    story:
      "Kabuto sobrevive porque se adapta. Ele aprende rápido, copia padrões e vira outra pessoa quando precisa — não por falta de identidade, mas por estratégia. Ele joga o jogo longo, escolhe o momento certo e usa informação como arma. No fim, o ‘Outros’ é isso: quem não cabe em caixinhas.",
    tags: ["Inteligência", "Adaptação", "Estratégia", "Disfarce"],
  },
];

