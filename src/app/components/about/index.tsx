'use client';

import Image from 'next/image';
import { aboutData } from '@/data/about-data';
import { ProgressCircle } from './tech-card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';
import { TechModel } from '@/models/tech-model';
import { Progress } from '@/models/about-model';

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

export default function About() {
  const cards = aboutData.techStack.cards;

  return (
    <section
      className="min-h-screen bg-[url(/img/background/bg.svg)] bg-cover flex py-32 px-10 md:px-12 2xl:py-24"
      id="about"
    >
      <div className="flex flex-col md:flex-row max-w-6xl w-full my-auto mx-auto gap-8 md:gap-12 lg:gap-16 items-center md:items-start animate-slide-from-bottom">
        <Image
          src={aboutData.profileImg.src}
          alt={aboutData.profileImg.alt}
          width={400}
          height={400}
          className="rounded-full h-48 w-48 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80 object-cover"
        />
        <div className="flex flex-col mt-6 md:mt-0 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            {aboutData.name}
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
            {aboutData.title}
          </h2>
          <p className="mt-4 mb-8 sm:mt-6 sm:mb-10 md:mt-8 md:mb-12 lg:mb-16 mx-0">
            {aboutData.description}
          </p>
          <Dialog>
            {/* VER COMO DEIXAR MAIOR */}
            <DialogTrigger asChild>
              <Button variant="outline">Edit Profile</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>teste</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when youre done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">teste</div>
                <div className="grid grid-cols-4 items-center gap-4">teste</div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Close
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <div className="flex flex-col space-y-3">
            <p className="text-lg sm:text-xl font-bold">
              {aboutData.techStack.title}
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-12 mt-3">
              {cards.map(
                (
                  card: TechModel & {
                    progress: Progress;
                  }
                ) => (
                  <TooltipProvider key={card.src}>
                    <Tooltip>
                      <TooltipTrigger>
                        <ProgressCircle
                          value={card.progress}
                          iconPath={card.src}
                          alt={card.alt}
                          startAngle={aboutData.techStack.startAngle}
                          clockWise={aboutData.techStack.clockWise}
                          zoom={card.zoom || 1}
                        />
                      </TooltipTrigger>
                      <TooltipContent>{card.name}</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
