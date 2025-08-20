import Image from 'next/image';
import type React from 'react';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { TechModel } from '@/models/tech-model';
import { Progress } from '@/models/about-model';
import { TechModal } from './tech-modal';
import { Tech } from '@/data/tech-data';

//peguei desse site: https://github.com/shadcn-ui/ui/issues/697 (último comentário)

export interface ProgressCircleProps extends React.ComponentProps<'svg'> {
  card: TechModel & {
    progress: Progress;
  };
  tech: Tech;
  className?: string;
  startAngle: number;
  clockWise: boolean;
  modal: {
    title: string;
    description: string;
    buttonLabel: string;
  };
}

function clamp(input: number, a: number, b: number): number {
  return Math.max(Math.min(input, Math.max(a, b)), Math.min(a, b));
}

const size = 24;
const strokeWidth = 2;

const total = 100;

export const ProgressCircle = ({
  card,
  tech,
  className,
  startAngle,
  clockWise,
  modal,
  ...restSvgProps
}: ProgressCircleProps) => {
  const normalizedValue = clamp(card.progress, 0, total);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (normalizedValue / total) * circumference;
  const halfSize = size / 2;

  const commonParams = {
    cx: halfSize,
    cy: halfSize,
    r: radius,
    fill: 'none',
    strokeWidth
  };

  return (
    <Dialog>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <DialogTrigger asChild>
              {/* TAILWIND COMPATIBILITY algum lugar AQUI */}
              <div className="relative aspect-square cursor-pointer hover:scale-110 transition-all">
                <svg
                  role="progressbar"
                  viewBox={`0 0 ${size} ${size}`}
                  className={`w-full h-full text-primary z-20 ${className}`}
                  aria-valuenow={normalizedValue}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  {...restSvgProps}
                >
                  <circle {...commonParams} className="stroke-current/25" />
                  <circle
                    {...commonParams}
                    stroke="currentColor"
                    strokeDasharray={circumference}
                    strokeDashoffset={
                      clockWise
                        ? circumference - progress
                        : circumference + progress
                    }
                    strokeLinecap="round"
                    transform={`rotate(${startAngle} ${halfSize} ${halfSize})`}
                    className="stroke-current"
                  />
                </svg>
                <Image
                  src={card.src}
                  alt={card.alt}
                  width={50 * (card.zoom || 1)}
                  height={50 * (card.zoom || 1)}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 xl:scale-100 md:scale-90"
                />
              </div>
            </DialogTrigger>
          </TooltipTrigger>
          <TooltipContent>{card.name}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DialogContent className="sm:max-w-[425px] md:min-w-2xl h-2/3 flex flex-col justify-between">
        <TechModal
          title={modal.title}
          description={modal.description}
          buttonLabel={modal.buttonLabel}
          tech={tech}
        />
      </DialogContent>
    </Dialog>
  );
};
