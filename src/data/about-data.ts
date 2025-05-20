import { isPt } from '@/constants/language';
import { AboutModel } from '@/models/about-model';
import { getTech, Tech2 } from './tech-data';

export const aboutData: AboutModel = {
  profileImg: {
    src: '/img/profile-pic/profile-pic.JPG',
    alt: 'Profile image'
  },
  name: 'Estêvão Ferreira',
  title: isPt ? 'Desenvolvedor Front End' : 'Front End Developer',
  description: isPt
    ? 'Olá, muito prazer! Meu nome é Estêvão, sou um Desenvolvedor Front End em busca de novos desafios. Desenvolvi este ambiente para estar apresentando alguns de meus projetos de maneira simplificada. Espero que goste!'
    : 'Hey! My name is Estêvão, I am a Front End Developer seeking new challenges. I have developed this environment to present some of my projects in a simplified way. I hope you like it!',
  techStack: {
    title: 'Tech Stack',
    startAngle: 90,
    //0 - 3h
    //90 - 6h
    //180 - 9h
    //270 - 12h
    clockWise: true,
    modal: {
      title: isPt ? 'Projetos em que usei...' : 'Projects I used...',
      description: isPt
        ? 'Aqui estão alguns projetos em que eu utilizei'
        : 'Here are some projects where I used',
      buttonLabel: isPt ? 'Fechar' : 'Close'
    },
    cards: [
      {
        ...getTech(Tech2.JS),
        progress: 100
      },
      {
        ...getTech(Tech2.HTML),
        progress: 100
      },
      {
        ...getTech(Tech2.CSS),
        progress: 100
      },
      {
        ...getTech(Tech2.TS),
        progress: 95
      },
      {
        ...getTech(Tech2.REACT),
        progress: 90
      },
      {
        ...getTech(Tech2.NEXT),
        progress: 85
      },
      {
        ...getTech(Tech2.NODE),
        progress: 60
      },
      {
        ...getTech(Tech2.ANGULAR),
        progress: 80
      },
      {
        ...getTech(Tech2.MONGODB),
        progress: 50
      },
      {
        ...getTech(Tech2.JAVA),
        progress: 20
      },
      {
        ...getTech(Tech2.MYSQL),
        progress: 25
      },
      {
        ...getTech(Tech2.TAILWIND),
        progress: 100
      },
      {
        ...getTech(Tech2.BOOTSTRAP),
        progress: 100
      }
    ]
  }
};
