'use client';

import { projectsData } from '@/data/projects-data';
import { Project } from './project';
import { ProjectCardModel, VideoStartsOn } from '@/models/projects-model';

export default function Projects() {
  const professionalProjects = projectsData.professional.projects;
  const professionalLength = professionalProjects.length;
  const profLengthIsOdd = professionalLength % 2 !== 0;
  const personalProjects = projectsData.personal.projects;
  const videoStarts = projectsData.videoStarts;

  return (
    <section className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-10 sm:py-16 lg:py-20 space-y-10 sm:space-y-16 lg:space-y-20 animate-slide-from-bottom">
        <div
          id="professional-projects"
          className="space-y-10 sm:space-y-16 lg:space-y-20"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl border-b-2 pb-2 sm:pb-4">
            {projectsData.professional.title}
          </h1>
          {professionalProjects.map(
            (project: ProjectCardModel, index: number) => (
              <Project
                key={project.title}
                data={project}
                index={videoStarts === VideoStartsOn.LEFT ? index + 1 : index}
              />
            )
          )}
        </div>
        <div
          id="personal-projects"
          className="space-y-10 sm:space-y-16 lg:space-y-20"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl border-b-2 pb-2 sm:pb-4">
            {projectsData.personal.title}
          </h1>
          {personalProjects.map((project: ProjectCardModel, index: number) => (
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
