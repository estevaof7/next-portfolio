"use client";

import { Project } from "./project";
import { ProjectCardModel, VideoStartsOn } from "@/models/projects-model";
import { useProjectsData } from "@/data/projects-data";
import { Button } from "@/components/ui/button";
import { useTabStore } from "@/stores/tab.store";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Projects() {
  const projectsData = useProjectsData();
  const { activeTab } = useTabStore();
  const [showMore, setShowMore] = useState(false);

  const professionalProjects = projectsData.professional.projects;
  const professionalLength = professionalProjects.length;
  const profLengthIsOdd = professionalLength % 2 !== 0;
  const personalProjects = projectsData.personal.projects;
  const videoStarts = projectsData.videoStarts;

  useEffect(() => {
    if (activeTab === "story") {
      setShowMore(false);
    }
  }, [activeTab]);

  return (
    <section>
      <div
        className={cn(
          "relative max-h-1400 space-y-10 overflow-hidden pr-0.5 sm:space-y-16 md:max-h-1000 lg:space-y-20",
          showMore && "max-h-none md:max-h-none",
        )}
      >
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
        <div className="space-y-10 sm:space-y-16 lg:space-y-20">
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
        {!showMore && (
          <div className="absolute bottom-0 flex h-72 w-full items-end justify-center bg-linear-to-t from-[#101113] from-30% to-transparent to-70% pb-10">
            <Button variant="outline" onClick={() => setShowMore(true)} className="w-64">
              Ver mais
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
