import Image from 'next/image';
import type React from 'react';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogTrigger
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

//peguei desse site: https://github.com/shadcn-ui/ui/issues/697 (último comentário)

export interface ProgressCircleProps extends React.ComponentProps<'svg'> {
  value: number;
  className?: string;
  iconPath: string;
  alt: string;
  startAngle: number;
  clockWise: boolean;
  zoom: number;
}

function clamp(input: number, a: number, b: number): number {
  return Math.max(Math.min(input, Math.max(a, b)), Math.min(a, b));
}

const size = 24;
const strokeWidth = 2;

const total = 100;

export const ProgressCircle = ({
  value,
  className,
  iconPath,
  alt,
  startAngle,
  clockWise,
  zoom,
  ...restSvgProps
}: ProgressCircleProps) => {
  const normalizedValue = clamp(value, 0, total);

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
                  src={iconPath}
                  alt={alt}
                  width={50 * zoom}
                  height={50 * zoom}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 xl:scale-100 md:scale-90"
                />
              </div>
            </DialogTrigger>
          </TooltipTrigger>
          <TooltipContent>teste!</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DialogContent className="sm:max-w-[425px] md:min-w-2xl">
        <DialogHeader>
          <DialogTitle>teste</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when youre done.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-72 w-full rounded-md">
          <div className="grid gap-4 py-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla odit
            quaerat incidunt? Nobis, aspernatur fugit porro quibusdam alias
            vitae cumque aut officia laboriosam vel obcaecati tempora a
            consectetur ex dolorem dignissimos consequatur Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Minus ratione quia natus
            assumenda, nostrum nam eveniet perferendis praesentium nemo non?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
            facilis sunt totam libero ipsam optio exercitationem maxime qui
            praesentium repudiandae, et voluptates nisi dolorem velit
            consequatur ab itaque, enim tempore deserunt
          </div>
        </ScrollArea>

        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
