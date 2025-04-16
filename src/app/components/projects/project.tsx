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
      className={`flex justify-between gap-10 ${position === Position.EVEN ? '' : 'flex-row-reverse'}`}
    >
      <div className="space-y-4 w-3/5">
        <div>
          <h1 className="text-4xl font-medium">{data.title}</h1>
          <h2 className="text-gray-400 mt-1">
            {(data.start ? data.start + ' - ' : '') + data.end}
          </h2>
        </div>
        <div>{data.description()}</div>
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            {data.tech.map((item: TechData) => (
              <TechCard key={item.name} card={item} />
            ))}
          </div>
          <div className="space-x-4">
            {data.buttons?.map((button) => (
              <Button key={button.text}>
                <Link href={button.link} target="_blank">
                  {button.text}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="w-2/5">
        <Gif gifPath={data.gifPath} alt={data.alt} />
      </div>
    </div>
  );
}
function Gif({ gifPath, alt }: { gifPath: string; alt: string }) {
  return (
    <div
      className={`w-full h-auto rounded-2xl bg-gray-300 ${gifPath.includes('sesc') && 'border-2'}`}
    >
      <Image
        src={gifPath}
        alt={alt}
        width={500}
        height={500}
        unoptimized
        className="rounded-xl"
      />
    </div>
  );
}

function TechCard({ card }: { card: TechData }) {
  return (
    <div className="rounded-full w-12 h-12 bg-secondary relative">
      <Image
        src={card.src}
        alt={card.name}
        width={30 * (card.zoom || 1)}
        height={30 * (card.zoom || 1)}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
}
