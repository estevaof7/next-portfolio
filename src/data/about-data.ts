import { isPt } from '@/language';

export const aboutData = {
  profileImg: {
    src: '/img/profile-pic/profile-pic.JPG',
    alt: 'Profile image'
  },
  name: 'Estêvão Ferreira',
  title: isPt ? 'Desenvolvedor Front End' : 'Front End Developer',
  description: isPt
    ? 'Olá, muito prazer! Meu nome é Estêvão, sou um Desenvolvedor Front End em busca de novos desafios. Desenvolvi este ambiente para estar apresentando alguns de meus projetos de maneira simplificada. Espero que goste!'
    : 'Hey! My name is Estêvão, I am a Front End Developer seeking new challenges. I have developed this environment to present some of my projects in a simplified way. I hope you like it!',
  techStackTitle: 'Tech Stack',
  techStack: [
    {
      src: '/img/tech/java-icon.svg',
      alt: '',
      progress: 50
    },
    {
      src: '',
      alt: '',
      progress: 0
    },
    {
      src: '',
      alt: '',
      progress: 0
    }
  ]
};
