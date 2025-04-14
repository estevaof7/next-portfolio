import { isPt } from '@/language';
import { About } from '@/models/about-model';
import { techData } from './tech-data';
import { Tech } from '@/models/tech-model';

export const aboutData: About = {
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
    cards: [
      {
        ...techData[Tech.JS],
        progress: 100
      },
      {
        ...techData[Tech.TS],
        progress: 100
      },
      {
        ...techData[Tech.HTML],
        progress: 100
      },
      {
        ...techData[Tech.CSS],
        progress: 100
      },
      {
        ...techData[Tech.REACT],
        progress: 90
      },
      {
        ...techData[Tech.NEXT],
        progress: 90
      },
      {
        ...techData[Tech.NODE],
        progress: 80
      },
      {
        ...techData[Tech.ANGULAR],
        progress: 60
      },
      {
        ...techData[Tech.MONGODB],
        progress: 50
      },
      {
        ...techData[Tech.JAVA],
        progress: 25
      },
      {
        ...techData[Tech.MYSQL],
        progress: 25
      },
      {
        ...techData[Tech.TAILWIND],
        progress: 100
      },
      {
        ...techData[Tech.BOOTSTRAP],
        progress: 100
      }
    ]
  }
};
