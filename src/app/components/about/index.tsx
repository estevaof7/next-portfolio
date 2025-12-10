"use client";

import Image from "next/image";
import { useAboutData } from "@/data/about-data";
import { ProgressCircle } from "./tech-card";
import { TechModel } from "@/models/tech-model";
import { Tech } from "@/data/tech-data";
import { Progress } from "@/models/about-model";

export default function About() {
  const aboutData = useAboutData();

  const cards = aboutData.techStack.cards;
  const modal = aboutData.techStack.modal;

  return (
    <section
      className="flex min-h-screen bg-[url(/img/background/bg.svg)] bg-cover px-10 py-32 md:px-12 2xl:py-24"
      id="about"
    >
      <div className="animate-slide-from-bottom mx-auto my-auto flex w-full max-w-6xl flex-col items-center gap-8 md:flex-row md:items-start md:gap-12 lg:gap-16">
        <Image
          src={aboutData.profileImg.src}
          alt={aboutData.profileImg.alt}
          width={400}
          height={400}
          className="h-48 w-48 rounded-full object-cover sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80"
        />
        <div className="mt-6 flex flex-col text-center md:mt-0 md:text-left">
          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">{aboutData.name}</h1>
          <h2 className="text-xl font-bold sm:text-2xl lg:text-3xl">{aboutData.title}</h2>
          <p className="mx-0 mt-4 mb-8 sm:mt-6 sm:mb-10 md:mt-8 md:mb-12 lg:mb-16">
            {aboutData.description}
          </p>
          <div className="flex flex-col space-y-3">
            <p className="text-lg font-bold sm:text-xl">{aboutData.techStack.title}</p>
            <div className="mt-3 grid grid-cols-3 gap-4 sm:grid-cols-4 sm:gap-6 lg:grid-cols-5 lg:gap-12">
              {cards.map(
                (
                  card: TechModel & {
                    progress: Progress;
                  },
                ) => (
                  <ProgressCircle
                    key={card.src}
                    card={card}
                    tech={card.name as Tech}
                    className="h-full w-full"
                    startAngle={aboutData.techStack.startAngle}
                    clockWise={aboutData.techStack.clockWise}
                    modal={modal}
                  />
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
