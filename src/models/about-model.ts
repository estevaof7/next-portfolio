import { TechData } from './tech-model';

export type About = {
  profileImg: {
    src: string;
    alt: string;
  };
  name: string;
  title: string;
  description: string;
  techStack: TechStack;
};

type TechStack = {
  title: string;
  startAngle: Angle;
  clockWise: boolean;
  cards: Array<
    TechData & {
      progress: Progress;
    }
  >;
};

type Enumerate<
  N extends number,
  Acc extends number[] = []
> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>;

type IntRange<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;

type Progress = IntRange<0, 101>;
type Angle = IntRange<0, 361>;
