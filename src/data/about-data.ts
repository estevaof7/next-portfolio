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
        src: '/img/tech/js-icon.svg',
        alt: 'JS logo',
        progress: 100
      },
      {
        src: '/img/tech/html-icon.svg',
        alt: 'Html logo',
        progress: 100
      },
      {
        src: '/img/tech/css-icon.svg',
        alt: 'Css logo',
        progress: 100
      },
      {
        src: '/img/tech/react-icon.svg',
        alt: 'React logo',
        progress: 90
      },
      {
        src: '/img/tech/next-icon.svg',
        alt: 'Next logo',
        progress: 90
      },
      {
        src: '/img/tech/nodejs-icon.svg',
        alt: 'NodeJS logo',
        progress: 80
      },
      {
        src: '/img/tech/angular-icon.svg',
        alt: 'Angular logo',
        progress: 60
      },
      {
        src: '/img/tech/mongodb-icon.svg',
        alt: 'MongoDB logo',
        progress: 50
      },
      {
        src: '/img/tech/java-icon.svg',
        alt: 'Java logo',
        progress: 25
      },
      {
        src: '/img/tech/mysql-icon.svg',
        alt: 'MySql logo',
        progress: 25,
        zoom: 1.7
        // 1- normal
        // 2 dobro
      }
    ]
  }
};

//Para restringir o range de número
// type Enumerate<
//   N extends number,
//   Acc extends number[] = []
// > = Acc['length'] extends N
//   ? Acc[number]
//   : Enumerate<N, [...Acc, Acc['length']]>;

// type IntRange<F extends number, T extends number> = Exclude<
//   Enumerate<T>,
//   Enumerate<F>
// >;

// type Progress = IntRange<0, 100>;
// type Angle = IntRange<0, 360>;
