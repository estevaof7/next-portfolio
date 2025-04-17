import { Button } from '@/components/ui/button';
import { ProjectCard } from '@/models/projects-model';
import { TechData } from '@/models/tech-model';
import Image from 'next/image';
import Link from 'next/link';

enum Position {
  EVEN = 'even',
  ODD = 'odd'
}

export function Project({ index, data }: { index: number; data: ProjectCard }) {
  const position = index % 2 === 0 ? Position.EVEN : Position.ODD;

  return (
    <div
      className={`flex flex-col gap-6 md:gap-8 lg:gap-10
                  md:flex-row md:justify-between
                  ${position === Position.EVEN ? '' : 'md:flex-row-reverse'}`}
    >
      <div className="space-y-4 w-full md:w-1/2 lg:w-3/5">
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium">
            {data.title}
          </h1>
          <h2 className="text-gray-400 mt-1">
            {(data.start ? data.start + ' - ' : '') + data.end}
          </h2>
        </div>
        <div>{data.description()}</div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div className="flex space-x-3 sm:space-x-4 overflow-x-auto pb-2 sm:pb-0">
            {data.tech.map((item: TechData) => (
              <TechCard key={item.name} card={item} />
            ))}
          </div>
          <div className="flex space-x-3 sm:space-x-4">
            {data.buttons?.map((button) => (
              <Button key={button.text} className="text-sm sm:text-base">
                <Link href={button.link} target="_blank">
                  {button.text}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-2/5 order-first md:order-none">
        <Gif gifPath={data.gifPath} alt={data.alt} />
      </div>
    </div>
  );
}
function Gif({ gifPath, alt }: { gifPath: string; alt: string }) {
  return (
    <div
      className={`w-full h-auto rounded-lg sm:rounded-2xl bg-gray-300 ${gifPath.includes('sesc') && 'border-2'}`}
    >
      <Image
        src={gifPath}
        alt={alt}
        width={500}
        height={500}
        unoptimized
        className="rounded-lg sm:rounded-xl w-full h-auto"
      />
    </div>
  );
}

function TechCard({ card }: { card: TechData }) {
  return (
    <div className="rounded-full w-10 h-10 sm:w-12 sm:h-12 bg-secondary relative flex-shrink-0">
      <Image
        src={card.src}
        alt={card.name}
        width={30 * (card.zoom || 1)}
        height={30 * (card.zoom || 1)}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-[30px] sm:h-[30px]"
      />
    </div>
  );
}
