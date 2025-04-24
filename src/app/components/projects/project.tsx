import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { ProjectCardModel } from '@/models/projects-model';
import { TechModel } from '@/models/tech-model';
import Image from 'next/image';
import Link from 'next/link';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';
// import { useEffect, useRef, useState } from 'react'; //RESPONSIVIDADE DIV CARDS/BOTÕES

enum Position {
  EVEN = 'even',
  ODD = 'odd'
}

export function Project({
  index,
  data
}: {
  index: number;
  data: ProjectCardModel;
}) {
  const position = index % 2 === 0 ? Position.EVEN : Position.ODD;
  const isMobile = useIsMobile();

  //RESPONSIVIDADE DIV CARDS/BOTÕES
  // const techAndButtons = useRef<HTMLDivElement>(null);
  // const [client, setClient] = useState<number>(0);
  // const [offset, setOffset] = useState<number>(0);

  // useEffect(() => {
  //   if (techAndButtons.current) {
  //     setClient(techAndButtons.current.clientWidth);
  //     setOffset(techAndButtons.current.offsetWidth);
  //   }
  //   // console.log('useEffect');
  //   // console.log('client', client);
  //   // console.log('offset', offset);
  // }, [techAndButtons.current?.clientWidth]);

  return (
    <div
      className={`flex flex-col gap-6 md:gap-8 lg:gap-14
                  md:flex-row md:justify-between
                  ${position === Position.EVEN ? '' : 'md:flex-row-reverse'}`}
    >
      {!isMobile ? (
        <>
          <div className="space-y-7 w-full md:w-1/2 lg:w-3/5">
            <div>
              <h1 className="text-3xl lg:text-4xl font-medium">{data.title}</h1>
              <h2 className="text-gray-400 mt-1">
                {(data.start ? data.start + ' - ' : '') + data.end}
              </h2>
            </div>
            <div>{data.description()}</div>
            <div
              className="flex flex-row justify-between items-center gap-4"
              // ref={techAndButtons} //RESPONSIVIDADE DIV CARDS/BOTÕES
            >
              <div className="flex space-x-4 overflow-x-auto">
                {data.tech.map((item: TechModel) => (
                  <TooltipProvider key={item.src}>
                    <Tooltip>
                      <TooltipTrigger>
                        <TechCard card={item} size="desktop" />
                      </TooltipTrigger>
                      <TooltipContent>{item.name}</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
              <div className="flex space-x-4">
                {data.buttons?.map((button) => (
                  <Button
                    key={button.text}
                    className="text-base"
                    variant={'secondary'}
                    // onClick={() => { //RESPONSIVIDADE DIV CARDS/BOTÕES
                    //   console.log('client', client);
                    //   console.log('offset', offset);
                    // }}
                  >
                    <Link href={button.href} target="_blank">
                      {button.text}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/5">
            <Gif gifPath={data.gifPath} alt={data.alt} size="desktop" />
          </div>
        </>
      ) : (
        <>
          <div>
            <h1 className="text-2xl font-medium">{data.title}</h1>
            <h2 className="text-gray-400 mt-1">
              {(data.start ? data.start + ' - ' : '') + data.end}
            </h2>
          </div>
          <div className="w-full">
            <Gif gifPath={data.gifPath} alt={data.alt} size="mobile" />
          </div>
          <div className="space-y-4 w-full">
            <div>{data.description()}</div>
            {/* <div className="flex flex-row justify-between items-center gap-4"> //RESPONSIVIDADE DIV CARDS/BOTÕES */}
            <div className="flex flex-col justify-between items-start gap-4 pt-4">
              <div className="flex space-x-3 overflow-x-auto pb-2">
                {data.tech.map((item: TechModel) => (
                  <TechCard key={item.name} card={item} size="mobile" />
                ))}
              </div>
              <div className="flex space-x-3">
                {data.buttons?.map((button) => (
                  <Button
                    key={button.text}
                    className="text-sm"
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
        </>
      )}
    </div>
  );
}
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
      className={`w-full h-auto ${size === 'desktop' ? 'rounded-2xl' : 'rounded-lg'} bg-gray-300 ${gifPath.includes('sesc') && 'border-2'}`}
    >
      <Image
        src={gifPath}
        alt={alt}
        width={500}
        height={500}
        unoptimized
        className={`${size === 'desktop' ? 'rounded-xl' : 'rounded-lg'} w-full h-auto`}
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
