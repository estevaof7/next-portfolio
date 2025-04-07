'use client';

import { projectsData } from '@/data/projects-data';
import { Project } from './project';
import { VideoStartsOn } from '@/models/projects-model';

export default function Projects() {
  //preciso entrar no app do sesc para fazer a captura de tela
  const professionalProjects = projectsData.professional.projects;
  // const professionalLength = professionalProjects.length;
  // const profLenghtIsOdd = professionalLength % 2 !== 0;
  // VOU TER QUE PENSAR QUAL É A LÓGICA CERTA PARA O INDEX DO PERSONAL PROJECTS
  // TALVEZ EU TENHA QUE MEXER COM A CLASSE ROW DIRECTION
  const personalProjects = projectsData.personal.projects;
  const videoStarts = projectsData.videoStarts;

  //vou ter que pegar o starts on right/left ... mandar como props e ainda fazer uma contagem de quantos tem no professional porque vai depender se o personal vai começar na direita ou na esquerda

  return (
    <section className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto py-10 space-y-10">
        <div id="professional-projects" className="space-y-10">
          <h1 className="text-5xl">{projectsData.professional.title}</h1>
          {professionalProjects.map((project, index) => (
            <Project
              key={project.title}
              data={project}
              index={videoStarts === VideoStartsOn.LEFT ? index + 1 : index}
            />
          ))}
        </div>
        <div id="personal-projects" className="space-y-10">
          <h1 className="text-5xl">{projectsData.personal.title}</h1>
          {personalProjects.map((project, index) => (
            <Project key={project.title} data={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
