'use client';

import Image from 'next/image';
import { aboutData } from '@/data/about-data';
import { ProgressCircle } from './tech-card';

export default function About() {
  //estou criando a tipagem que limita o range...
  //criar tipo do aboutData
  //colocar chave zoom nos cards ... para o mysql ... verificar se colocar em todos ou só nele ... quando colocar, basta fazer uma condicional com o width e height da Image
  //tem que ver o que está rolando com a foto de perfil... não está ficando redonda
  //pelo que estou vendo, o w/h da Image não pode ser proporcional ao elemento pai
  //responsividade (testar nas duas telas)
  //mobile

  const cards = aboutData.techStack.cards;

  return (
    <section
      className="min-h-screen bg-[url(/img/background/bg.svg)] bg-cover flex"
      id="about"
    >
      <div className="flex max-w-6xl my-auto mx-auto gap-40">
        <Image
          src={aboutData.profileImg.src}
          alt={aboutData.profileImg.alt}
          width={400}
          height={400}
          className="rounded-full h-60 w-60"
        />
        <div className="flex flex-col">
          <h1 className="text-5xl font-bold">{aboutData.name}</h1>
          <h2 className="text-3xl font-bold">{aboutData.title}</h2>
          <p className="mt-8 mb-16 mx-0">{aboutData.description}</p>
          <div className="flex flex-col space-y-3">
            <p className="text-xl font-bold">{aboutData.techStack.title}</p>
            <div className="grid grid-cols-5 gap-10 mt-3">
              {cards.map((card) => (
                <ProgressCircle
                  value={card.progress}
                  key={card.src}
                  iconPath={card.src}
                  alt={card.alt}
                  startAngle={aboutData.techStack.startAngle}
                  clockWise={aboutData.techStack.clockWise}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
