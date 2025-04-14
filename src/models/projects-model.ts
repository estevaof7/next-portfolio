import { JSX } from 'react';
import { TechData } from './tech-model';

export enum VideoStartsOn {
  RIGHT = 'right',
  LEFT = 'left'
}

export type Projects = {
  videoStarts: VideoStartsOn;
  professional: {
    title: string;
    projects: Project[];
  };
  personal: {
    title: string;
    projects: Project[];
  };
};

type Project = {
  title: string;
  description: () => JSX.Element;
  gifPath: string;
  alt: string;
  links?: {
    repo?: string;
    demo?: string;
    youtube?: string;
  };
  start?: string;
  end: string;
  tech: TechData[];
};
