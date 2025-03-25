'use client';

import Image from 'next/image';
import { aboutData } from '@/data/about-data';
import { TechCard } from './tech-card';

export default function About() {
  //vou ter que ver no claude como colocar uma imagem dentro do chart
  //https://ui.shadcn.com/charts#area-chart
  //depois: mobile

  return (
    <section
      className="min-h-screen bg-[url(/img/background/bg.svg)] bg-cover flex"
      id="about"
    >
      <div className="flex max-w-6xl my-80 mx-auto gap-40">
        <Image
          src={aboutData.profileImg.src}
          alt={aboutData.profileImg.alt}
          width={400}
          height={400}
          className="rounded-full w-sm h-sm"
        />
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold">{aboutData.name}</h1>
          <h2 className="text-2xl font-bold">{aboutData.title}</h2>
          <p className="mt-8 mb-16 mx-0">{aboutData.description}</p>
          <div>
            <p>{aboutData.techStackTitle}</p>
            <div>
              <TechCard
                progress={aboutData.techStack[0].progress}
                iconPath={aboutData.techStack[0].src}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
