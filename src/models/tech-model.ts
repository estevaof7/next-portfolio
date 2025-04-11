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

export type TechData = {
  name: string;
  src: string;
  zoom?: number;
};
