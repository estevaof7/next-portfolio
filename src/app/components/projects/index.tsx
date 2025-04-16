'use client';

import { projectsData } from '@/data/projects-data';
import { Project } from './project';
import { VideoStartsOn } from '@/models/projects-model';

export enum Responsividade {
  EU = 'eu',
  CLAUDE = 'claude',
  GPT = 'gpt'
}

export const responsividade: Responsividade = Responsividade.EU;

export default function Projects() {
  const professionalProjects = projectsData.professional.projects;
  const professionalLength = professionalProjects.length;
  const profLengthIsOdd = professionalLength % 2 !== 0;
  const personalProjects = projectsData.personal.projects;
  const videoStarts = projectsData.videoStarts;

  return (
    <section className="min-h-screen bg-black text-white">
      <div
        className={
          ' ' +
          ((responsividade === Responsividade.EU ||
            responsividade === Responsividade.GPT) &&
            'max-w-6xl mx-auto py-20 space-y-20') +
          (responsividade === Responsividade.CLAUDE &&
            'max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-10 sm:py-16 lg:py-20 space-y-10 sm:space-y-16 lg:space-y-20')
        }
      >
        <div
          id="professional-projects"
          className={
            ' ' +
            ((responsividade === Responsividade.EU ||
              responsividade === Responsividade.GPT) &&
              'space-y-20') +
            (responsividade === Responsividade.CLAUDE &&
              'space-y-10 sm:space-y-16 lg:space-y-20')
          }
        >
          <h1
            className={
              ' ' +
              (responsividade === Responsividade.EU &&
                'text-6xl border-b-2 pb-4') +
              (responsividade === Responsividade.CLAUDE &&
                'text-3xl sm:text-4xl md:text-5xl lg:text-6xl border-b-2 pb-2 sm:pb-4') +
              (responsividade === Responsividade.GPT &&
                'text-4xl md:text-6xl border-b-2 pb-4')
            }
          >
            {projectsData.professional.title}
          </h1>
          {professionalProjects.map((project, index) => (
            <Project
              key={project.title}
              data={project}
              index={videoStarts === VideoStartsOn.LEFT ? index + 1 : index}
            />
          ))}
        </div>
        <div
          id="personal-projects"
          className={
            ' ' +
            ((responsividade === Responsividade.EU ||
              responsividade === Responsividade.GPT) &&
              'space-y-20') +
            (responsividade === Responsividade.CLAUDE &&
              'space-y-10 sm:space-y-16 lg:space-y-20')
          }
        >
          <h1
            className={
              ' ' +
              (responsividade === Responsividade.EU &&
                'text-6xl border-b-2 pb-4') +
              (responsividade === Responsividade.CLAUDE &&
                'text-3xl sm:text-4xl md:text-5xl lg:text-6xl border-b-2 pb-2 sm:pb-4') +
              (responsividade === Responsividade.GPT &&
                'text-4xl md:text-6xl border-b-2 pb-4')
            }
          >
            {projectsData.personal.title}
          </h1>
          {personalProjects.map((project, index) => (
            <Project
              key={project.title}
              data={project}
              index={
                (videoStarts === VideoStartsOn.RIGHT && !profLengthIsOdd) ||
                (videoStarts === VideoStartsOn.LEFT && profLengthIsOdd)
                  ? index
                  : index + 1
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
