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
];

