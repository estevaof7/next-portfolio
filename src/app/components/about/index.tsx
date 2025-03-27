'use client';

import Image from 'next/image';
import { aboutData } from '@/data/about-data';
import { TechCard } from './tech-card';

export default function About() {
  //ver se colocar para o outro lado o progresso
  //ver como vai fazer com esse tech-stack
  //tem que ver o que está rolando com a foto de perfil... não está ficando redonda
  //depois: mobile
  //pelo que estou vendo, o w/h da Image não pode ser proporcional ao elemento pai

  const cards = aboutData.techStack.cards;

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
          className="rounded-full h-60 w-60"
        />
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold">{aboutData.name}</h1>
          <h2 className="text-2xl font-bold">{aboutData.title}</h2>
          <p className="mt-8 mb-16 mx-0">{aboutData.description}</p>
          <div>
            <p>{aboutData.techStack.title}</p>
            <div className="grid grid-cols-5">
              {cards.map((card) => (
                <TechCard
                  key={card.src}
                  progress={card.progress}
                  iconPath={card.src}
                  startAngle={aboutData.techStack.startAngle}
                  clockWise={aboutData.techStack.clockWise}
                  alt={card.alt}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
