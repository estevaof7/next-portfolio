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
import { ProjectCardModel } from '@/models/projects-model';
import { TechModel } from '@/models/tech-model';
import Link from 'next/link';
import Image from 'next/image';

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
  const projects: ProjectCardModel[] = [
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
      <ScrollArea className="h-72 w-full rounded-md flex-1">
        <div className="py-4">
          {projects.map((project) => {
            return project.tech.map((techUsed) => {
              return (
                techUsed.name === tech && (
                  <div key={project.title}>
                    <div>
                      <h1 className="text-2xl font-medium">{project.title}</h1>
                      <h2 className="text-gray-400 mt-1">
                        {project.type} (
                        {(project.start ? project.start + ' - ' : '') +
                          project.end}
                        )
                      </h2>
                    </div>
                    <div className="w-full md:px-20 md:py-10 py-5">
                      <Gif
                        gifPath={project.gifPath}
                        alt={project.alt}
                        size="mobile"
                      />
                    </div>
                    <div className="space-y-4 w-full">
                      <div>{project.description()}</div>
                      <div className="flex flex-col justify-between items-start gap-4 pt-4">
                        <div className="flex space-x-3 overflow-x-auto pb-2">
                          {project.tech.map((item: TechModel) => (
                            <TechCard
                              key={item.name}
                              card={item}
                              size="mobile"
                            />
                          ))}
                        </div>
                        <div className="flex space-x-3">
                          {project.buttons?.map((button) => (
                            <Button
                              key={button.text}
                              className="text-sm mb-5"
                              variant={'secondary'}
                            >
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

function Gif({
  gifPath,
  alt,
  size
}: {
  gifPath: string;
  alt: string;
  size: 'mobile' | 'desktop';
}) {
  return (
    <div
      className={`relative w-full h-auto max-h-2/3 ${size === 'desktop' ? 'rounded-2xl' : 'rounded-lg'}  ${gifPath.includes('sesc') && 'border-2'}`}
    >
      <div
        className={`${size === 'desktop' ? 'rounded-2xl' : 'rounded-xl'} absolute w-full h-full animate-pulse bg-gray-200`}
      ></div>
      <Image
        src={gifPath}
        alt={alt}
        width={500}
        height={500}
        unoptimized
        className={`${size === 'desktop' ? 'rounded-xl' : 'rounded-lg'} w-full h-auto relative`}
      />
    </div>
  );
}

function TechCard({
  card,
  size
}: {
  card: TechModel;
  size: 'mobile' | 'desktop';
}) {
  return (
    <div
      className={`rounded-full ${size === 'desktop' ? 'w-12 h-12' : 'w-10 h-10'} bg-secondary relative flex-shrink-0`}
    >
      <Image
        src={card.src}
        alt={card.name}
        width={
          size === 'desktop' ? 30 * (card.zoom || 1) : 24 * (card.zoom || 1)
        }
        height={
          size === 'desktop' ? 30 * (card.zoom || 1) : 24 * (card.zoom || 1)
        }
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
}
