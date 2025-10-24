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
import { cn } from '@/lib/utils';
import { useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

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

  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from([cardRef.current], {
      scrollTrigger: {
        trigger: cardRef.current,
        start: `-${100 * index}px bottom`,
        // gambiarra: não sabia mas parece que o y:80 faz o top de todos os elementos ficarem para baixo
        // a cada elemento que você desce, o top vai ficando mais embaixo ainda
        toggleActions: "play none none none",
        markers: index === 5 ? true : false,
      },
      y: 80,
      opacity: 0,
      duration: 2,
      ease: "power3.out",
      stagger: 0.2,
    });
  });

  return (
    <div
      ref={cardRef}
      className={`flex flex-col gap-6 md:gap-8 lg:gap-14
                  md:flex-row md:justify-between
                  ${position === Position.EVEN ? '' : 'md:flex-row-reverse'}`}
    >
      {!isMobile ? (
        <DesktopProject data={data} position={position} />
      ) : (
        <MobileProject data={data} />
      )}
    </div>
  );
}

function DesktopProject({
  data,
  position
}: {
  data: ProjectCardModel;
  position: Position;
}) {
  return (
    <>
      <div className="space-y-7 w-full md:w-1/2 lg:w-3/5">
        <div>
          <h1 className="text-3xl lg:text-4xl font-medium">{data.title}</h1>
          <h2 className="text-gray-400 mt-1">
            {(data.start ? data.start + ' - ' : '') + data.end}
          </h2>
        </div>
        <div>{data.description()}</div>
        {data.techPosition === 'text' && (
          <TechAndButtons data={data} position={position} />
        )}
      </div>
      <div className="w-full md:w-1/2 lg:w-2/5 space-y-5 h-full">
        <Gif gifPath={data.gifPath} alt={data.alt} size="desktop" />
        {data.techPosition === 'image' && (
          <TechAndButtons data={data} position={position} />
        )}
      </div>
    </>
  );
}
function TechAndButtons({
  data,
  position
}: {
  data: ProjectCardModel;
  position: Position;
}) {
  return (
    <div
      className={cn(
        'flex flex-row justify-between items-center gap-4',
        position === Position.EVEN &&
          data.techPosition === 'image' &&
          'justify-end'
      )}
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
  );
}
function MobileProject({ data }: { data: ProjectCardModel }) {
  return (
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
      className={`relative w-full h-auto max-h-2/3 ${size === 'desktop' ? 'rounded-2xl' : 'rounded-lg'}  ${(gifPath.includes('sesc') || gifPath.includes('pgfn')) && 'border-2 border-gray-400'}`}
    >
      {/* TAILWIND COMPATIBILITY AQUI */}
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
      className={`rounded-full ${size === 'desktop' ? 'w-12 h-12' : 'w-10 h-10'} bg-secondary relative shrink-0`}
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
