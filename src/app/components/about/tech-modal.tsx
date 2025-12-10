import { Button } from "@/components/ui/button";
import { DialogClose, DialogDescription, DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tech } from "@/data/tech-data";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useProjectsData } from "@/data/projects-data";
import { ProjectCardModel } from "@/models/projects-model";
import { TechModel } from "@/models/tech-model";
import Link from "next/link";
import Image from "next/image";

export const TechModal = ({
  title,
  description,
  buttonLabel,
  tech,
}: {
  title: string;
  description: string;
  buttonLabel: string;
  tech: Tech;
}) => {
  const projectsData = useProjectsData();

  const projects: ProjectCardModel[] = [
    ...projectsData.professional.projects,
    ...projectsData.personal.projects,
  ];

  return (
    <>
      <DialogHeader className="border-b-2">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>
          {description} <b>{tech}:</b>
        </DialogDescription>
      </DialogHeader>
      <ScrollArea className="h-72 w-full flex-1 rounded-md">
        <div className="py-4">
          {projects.map((project) => {
            return project.tech.map((techUsed) => {
              return (
                techUsed.name === tech && (
                  <div key={project.title}>
                    <div>
                      <h1 className="text-2xl font-medium">{project.title}</h1>
                      <h2 className="mt-1 text-gray-400">
                        {project.type} ({(project.start ? project.start + " - " : "") + project.end}
                        )
                      </h2>
                    </div>
                    <div className="w-full py-5 md:px-20 md:py-10">
                      <Gif gifPath={project.gifPath} alt={project.alt} />
                    </div>
                    <div className="w-full space-y-4">
                      <div>{project.description()}</div>
                      <div className="flex flex-col items-start justify-between gap-4 pt-4 md:me-3 md:flex-row">
                        <div className="flex space-x-3 overflow-x-auto pb-2">
                          {project.tech.map((item: TechModel) => (
                            <TechCard key={item.name} card={item} size="mobile" />
                          ))}
                        </div>
                        <div className="flex space-x-3">
                          {project.buttons?.map((button) => (
                            <Button key={button.text} className="mb-5 text-sm" variant="default">
                              <Link href={button.href} target="_blank">
                                {button.text}
                              </Link>
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              );
            });
          })}
        </div>
      </ScrollArea>

      <DialogFooter>
        <DialogClose asChild>
          <Button type="button" variant="secondary">
            {buttonLabel}
          </Button>
        </DialogClose>
      </DialogFooter>
    </>
  );
};

function Gif({ gifPath, alt }: { gifPath: string; alt: string }) {
  return (
    <div className="relative h-auto max-h-2/3 w-full rounded-lg border-2 border-gray-200">
      <div className="absolute h-full w-full animate-pulse rounded-xl bg-gray-200"></div>
      <Image
        src={gifPath}
        alt={alt}
        width={500}
        height={500}
        unoptimized
        className="relative h-auto w-full rounded-lg"
      />
    </div>
  );
}

function TechCard({ card, size }: { card: TechModel; size: "mobile" | "desktop" }) {
  return (
    <div
      className={`rounded-full ${size === "desktop" ? "h-12 w-12" : "h-10 w-10"} bg-secondary relative flex-shrink-0`}
    >
      <Image
        src={card.src}
        alt={card.name}
        width={size === "desktop" ? 30 * (card.zoom || 1) : 24 * (card.zoom || 1)}
        height={size === "desktop" ? 30 * (card.zoom || 1) : 24 * (card.zoom || 1)}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
}
