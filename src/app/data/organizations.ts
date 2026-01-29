import akatsukiGif from "@/images/TelaInicial/akatsuki.gif";
import konohaGif from "@/images/TelaInicial/konohagif.gif";
import shinobiGif from "@/images/TelaInicial/shinobigif.gif";
import outrosGif from "@/images/TelaInicial/outrosgif.gif";

export const organizations = [
  {
    id: 'akatsuki',
    name: 'Akatsuki',
    tagline: 'Sonhadores da revolução, unidos pela dor',
    color: '#E11D48',
    backgroundImage: akatsukiGif,
    icon: '☁',
    description: 'Uma organização de ninjas renegados, unidos por um ideal revolucionário e pela vontade de mudar o mundo através de métodos radicais.',
    seal: '雲'
  },
  {
    id: 'konoha',
    name: 'Aldeia da Folha',
    tagline: 'A vontade de fogo nunca se apaga',
    color: '#22C55E',
    backgroundImage: konohaGif,
    icon: '🍃',
    description: 'A mais poderosa das vilas ocultas, berço de heróis e lendas. Seus ninjas carregam a vontade de proteger e servir.',
    seal: '火'
  },
  {
    id: 'alliance',
    name: 'Aliança Shinobi',
    tagline: 'Unidos pela paz, fortes pela união',
    color: '#38BDF8',
    backgroundImage: shinobiGif,
    icon: '⚡',
    description: 'A aliança que une todas as nações ninjas em busca da paz duradoura e cooperação entre os povos.',
    seal: '和'
  },
  {
    id: 'sound',
    name: 'Outros',
    tagline: 'Onde se encaixam os que não se encaixam',
    color: '#A855F7',
    backgroundImage: outrosGif,
    icon: '♪',
    description: 'Mestres das técnicas sonoras e experimentos ninjas, buscam poder através de métodos não convencionais.',
    seal: '音'
  }
];
