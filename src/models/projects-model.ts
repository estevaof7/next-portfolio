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
    projects: ProjectCard[];
  };
  personal: {
    title: string;
    projects: ProjectCard[];
  };
};

export type ProjectCard = {
  title: string;
  description: () => JSX.Element;
  gifPath: string;
  alt: string;
  buttons?: {
    text: string;
    link: string;
  }[];
  start?: string;
  end: string;
  tech: TechData[];
};
