import { Button } from '@/components/ui/button';
import {
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tech2 } from '@/data/tech-data';
import { DialogTitle } from '@radix-ui/react-dialog';
import { projectsData } from '@/data/projects-data';

export const TechModal = ({
  title,
  description,
  buttonLabel,
  tech
}: {
  title: string;
  description: string;
  buttonLabel: string;
  tech: Tech2;
}) => {
  const projects = [
    ...projectsData.professional.projects,
    ...projectsData.personal.projects
  ];

  return (
    <>
      <DialogHeader className="border-b-2">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>
          {description} <b>{tech}</b>
        </DialogDescription>
      </DialogHeader>
      <ScrollArea className="h-72 w-full rounded-md">
        <div className="py-4">
          {projects.map((project) => {
            return project.tech.map((techUsed) => {
              return (
                techUsed.name === tech && (
                  <p key={project.title}>{project.title}</p>
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
