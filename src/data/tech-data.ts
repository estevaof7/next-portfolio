import { TechModel } from '@/models/tech-model';

export enum Tech {
  JS = 0,
  TS = 1,
  HTML = 2,
  CSS = 3,
  REACT = 4,
  NEXT = 5,
  NODE = 6,
  ANGULAR = 7,
  MONGODB = 8,
  JAVA = 9,
  MYSQL = 10,
  TAILWIND = 11,
  BOOTSTRAP = 12
}

export enum Tech2 {
  JS = 'JavaScript',
  TS = 'TypeScript',
  HTML = 'HTML',
  CSS = 'CSS',
  REACT = 'React',
  NEXT = 'Next.js',
  NODE = 'Node',
  ANGULAR = 'Angular',
  MONGODB = 'Mongo DB',
  JAVA = 'Java',
  MYSQL = 'MySql',
  TAILWIND = 'Tailwind',
  BOOTSTRAP = 'Bootstrap'
}

export const getTech = (tech: Tech2): TechModel => {
  return techData.find((t) => t.name === tech) as TechModel;
};

const techData: TechModel[] = [
  {
    name: Tech2.JS,
    alt: Tech2.JS + ' logo',
    src: '/img/tech/js-icon.svg',
    zoom: 0.8
  },
  {
    name: Tech2.TS,
    alt: Tech2.TS + ' logo',
    src: '/img/tech/typescript-icon.svg',
    zoom: 0.8
  },
  {
    name: Tech2.HTML,
    alt: Tech2.HTML + ' logo',
    src: '/img/tech/html-icon.svg'
  },
  {
    name: Tech2.CSS,
    alt: Tech2.CSS + ' logo',
    src: '/img/tech/css-icon.svg'
  },
  {
    name: Tech2.REACT,
    alt: Tech2.REACT + ' logo',
    src: '/img/tech/react-icon.svg'
  },
  {
    name: Tech2.NEXT,
    alt: Tech2.NEXT + ' logo',
    src: '/img/tech/next-icon.svg'
  },
  {
    name: Tech2.NODE,
    alt: Tech2.NODE + ' logo',
    src: '/img/tech/nodejs-icon.svg'
  },
  {
    name: Tech2.ANGULAR,
    alt: Tech2.ANGULAR + ' logo',
    src: '/img/tech/angular-icon.svg'
  },
  {
    name: Tech2.MONGODB,
    alt: Tech2.MONGODB + ' logo',
    src: '/img/tech/mongodb-icon.svg'
  },
  {
    name: Tech2.JAVA,
    alt: Tech2.JAVA + ' logo',
    src: '/img/tech/java-icon.svg'
  },
  {
    name: Tech2.MYSQL,
    alt: Tech2.MYSQL + ' logo',
    src: '/img/tech/mysql-icon.svg',
    zoom: 1.7
  },
  {
    name: Tech2.TAILWIND,
    alt: Tech2.TAILWIND + ' logo',
    src: '/img/tech/tailwind-icon.svg',
    zoom: 1.1
  },
  {
    name: Tech2.BOOTSTRAP,
    alt: Tech2.BOOTSTRAP + ' logo',
    src: '/img/tech/bootstrap-icon.svg'
  }
];
