import { TechModel } from '@/models/tech-model';

export enum Tech {
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

export const getTech = (tech: Tech): TechModel => {
  return techData.find((t) => t.name === tech) as TechModel;
};

const techData: TechModel[] = [
  {
    name: Tech.JS,
    alt: Tech.JS + ' logo',
    src: '/img/tech/js-icon.svg',
    zoom: 0.8
  },
  {
    name: Tech.TS,
    alt: Tech.TS + ' logo',
    src: '/img/tech/typescript-icon.svg',
    zoom: 0.8
  },
  {
    name: Tech.HTML,
    alt: Tech.HTML + ' logo',
    src: '/img/tech/html-icon.svg'
  },
  {
    name: Tech.CSS,
    alt: Tech.CSS + ' logo',
    src: '/img/tech/css-icon.svg'
  },
  {
    name: Tech.REACT,
    alt: Tech.REACT + ' logo',
    src: '/img/tech/react-icon.svg'
  },
  {
    name: Tech.NEXT,
    alt: Tech.NEXT + ' logo',
    src: '/img/tech/next-icon.svg'
  },
  {
    name: Tech.NODE,
    alt: Tech.NODE + ' logo',
    src: '/img/tech/nodejs-icon.svg'
  },
  {
    name: Tech.ANGULAR,
    alt: Tech.ANGULAR + ' logo',
    src: '/img/tech/angular-icon.svg'
  },
  {
    name: Tech.MONGODB,
    alt: Tech.MONGODB + ' logo',
    src: '/img/tech/mongodb-icon.svg'
  },
  {
    name: Tech.JAVA,
    alt: Tech.JAVA + ' logo',
    src: '/img/tech/java-icon.svg'
  },
  {
    name: Tech.MYSQL,
    alt: Tech.MYSQL + ' logo',
    src: '/img/tech/mysql-icon.svg',
    zoom: 1.7
  },
  {
    name: Tech.TAILWIND,
    alt: Tech.TAILWIND + ' logo',
    src: '/img/tech/tailwind-icon.svg',
    zoom: 1.1
  },
  {
    name: Tech.BOOTSTRAP,
    alt: Tech.BOOTSTRAP + ' logo',
    src: '/img/tech/bootstrap-icon.svg'
  }
];
