'use client';

import { projectsData } from '@/data/projects-data';
import { Project } from './project';

export default function Projects() {
  //preciso entrar no app do sesc para fazer a captura de tela
  const professionalProjects = projectsData.professional.projects;
  const personalProjects = projectsData.personal.projects;

  //vou ter que pegar o starts on right/left ... mandar como props e ainda fazer uma contagem de quantos tem no professional porque vai depender se o personal vai começar na direita ou na esquerda

  return (
    <section className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto py-10">
        <div id="professional-projects">
          <h1 className="text-5xl">{projectsData.professional.title}</h1>
          {professionalProjects.map((project, index) => (
            <Project key={project.title} data={project} index={index} />
          ))}
        </div>
        <div id="personal-projects">
          <h1 className="text-5xl">{projectsData.personal.title}</h1>
          {personalProjects.map((project, index) => (
            <Project key={project.title} data={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
