import { TechModel } from './tech-model';

export type AboutModel = {
  profileImg: {
    src: string;
    alt: string;
  };
  name: string;
  title: string;
  description: string;
  techStack: TechStackModel;
};

type TechStackModel = {
  title: string;
  startAngle: Angle;
  clockWise: boolean;
  modal: {
    title: string;
    description: string;
    buttonLabel: string;
  };
  cards: Array<
    TechModel & {
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

export type Progress = IntRange<0, 101>;
type Angle = IntRange<0, 361>;
