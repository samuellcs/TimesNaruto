export interface OutrosStoryItem {
  id: string;
  name: string;
  clan: string;
  image: string;
  quoteTitle: string;
  story: string;
}

import yahikoKonanImg from "@/images/Outros/Yahikonan.png";
import killerbeeImg from "@/images/Outros/killerb.png";
export const outrosStory: OutrosStoryItem[] = [
  {
    id: "yahiko-konan",
    name: "Yahiko e Konan",
    clan: "Amegakure (Ame)",
    image: yahikoKonanImg,
    quoteTitle: "Por que torcem pro São Paulo?",
    story:
      "Yahiko sempre teve alma tricolor, amava muito o time e ainda participava da Torcida Independente.\n\nAcreditava em mudanças, diálogo e união torcia pelo São Paulo do jeito que lutava pelo mundo: tentando resolver tudo de forma pacífica e estratégica.\n\nInfelizmente, sua história terminou cedo demais, em meio a um conflito de torcida organizada que saiu do controle.\n\nKonan nunca foi de futebol… até perder quem mais amava.\n\nDepois da morte de Yahiko, passou a torcer pelo São Paulo como uma forma de manter viva a memória dele.\n\nPara ela, não é só um time é uma lembrança, um vínculo, um pedaço do passado que ainda pulsa no coração.",
  },
  {
    id: "killerbee",
    name: "Killer Bee",
    clan: "Outros",
    image: killerbeeImg,
    quoteTitle: "Por que torce pro Vitória?",
    story:
      "Aqui não tem nem discussão: Killer Bee é aquele típico torcedor raiz do Vitória. A energia dele combina demais com a torcida rubro-negra intensa, barulhenta e cheia de presença. Dá pra imaginar ele fácil no meio do Carnaval de Salvador, gingando, brigando, rimando e levantando a galera como se estivesse num trio elétrico… só que vestindo o manto do Leão.",
  },
];

