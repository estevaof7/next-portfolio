import { JSX } from 'react';
import { TechModel } from './tech-model';
import { LinkModel } from './link-model';

export enum VideoStartsOn {
  RIGHT = 'right',
  LEFT = 'left'
}

export enum ProjectType {
  PERSONAL = 'personal',
  PROFESSIONAL = 'professional'
}

export type ProjectsModel = {
  videoStarts: VideoStartsOn;
  professional: {
    title: string;
    projects: ProjectCardModel[];
  };
  personal: {
    title: string;
    projects: ProjectCardModel[];
  };
};

export type ProjectCardModel = {
  title: string;
  description: () => JSX.Element;
  gifPath: string;
  alt: string;
  buttons?: Array<LinkModel>;
  start?: string;
  end: string;
  tech: TechModel[];
  techPosition?: 'text' | 'image';
  type: string;
};
