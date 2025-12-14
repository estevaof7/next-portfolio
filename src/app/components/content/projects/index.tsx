"use client";

import { Project } from "./project";
import { ProjectCardModel, VideoStartsOn } from "@/models/projects-model";
import { useProjectsData } from "@/data/projects-data";

export default function Projects() {
  const projectsData = useProjectsData();

  const professionalProjects = projectsData.professional.projects;
  const professionalLength = professionalProjects.length;
  const profLengthIsOdd = professionalLength % 2 !== 0;
  const personalProjects = projectsData.personal.projects;
  const videoStarts = projectsData.videoStarts;

  return (
    <section>
      <div className="space-y-10 pr-0.5 sm:space-y-16 lg:space-y-20">
        <div className="space-y-10 sm:space-y-16 lg:space-y-20">
          <h1 className="border-b-2 pb-2 text-3xl sm:pb-4 sm:text-4xl md:text-5xl lg:text-6xl">
            {projectsData.professional.title}
          </h1>
          {professionalProjects.map((project: ProjectCardModel, index: number) => (
            <Project
              key={project.title}
              data={project}
              index={videoStarts === VideoStartsOn.LEFT ? index + 1 : index}
            />
          ))}
        </div>
        <div id="personal-projects" className="space-y-10 sm:space-y-16 lg:space-y-20">
          <h1 className="border-b-2 pb-2 text-3xl sm:pb-4 sm:text-4xl md:text-5xl lg:text-6xl">
            {projectsData.personal.title}
          </h1>
          {personalProjects.map((project: ProjectCardModel, index: number) => (
            <Project
              key={project.title}
              data={project}
              index={
                (videoStarts === VideoStartsOn.RIGHT && !profLengthIsOdd) ||
                (videoStarts === VideoStartsOn.LEFT && profLengthIsOdd)
                  ? index + professionalLength
                  : index + 1 + professionalLength
                // para que cada um tenha um index associado à sua posição no array
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
