'use client';

import { projectsData } from '@/data/projects-data';
import { Project } from './project';
import { VideoStartsOn } from '@/models/projects-model';

export default function Projects() {
  //preciso entrar no app do sesc para fazer a captura de tela
  const professionalProjects = projectsData.professional.projects;
  const professionalLength = professionalProjects.length;
  const profLengthIsOdd = professionalLength % 2 !== 0;
  const personalProjects = projectsData.personal.projects;
  const videoStarts = projectsData.videoStarts;

  // const teste = professionalProjects[0].start;
  // teste.getFullYear()
  // teste.getMonth()

  return (
    <section className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto py-20 space-y-20">
        <div id="professional-projects" className="space-y-20">
          <h1 className="text-6xl border-b-2 pb-4">
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
        <div id="personal-projects" className="space-y-20">
          <h1 className="text-6xl border-b-2 pb-4">
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
