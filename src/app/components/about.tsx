'use client';

import Image from 'next/image';
import { aboutData } from '@/data/about-data';

export default function About() {
  //PARA TECKSTACK ... PRIMENG TEM UM COMPONENTE QUE CHAMA KNOB ... É ELE QUE EU QUERO ... MAS PARECE QUE NÃO TEM NO SHADCN

  return (
    <section
      className="min-h-screen bg-[url(/img/background/bg.svg)] bg-cover"
      id="about"
    >
      <div>
        <Image
          src={aboutData.profileImg.src}
          alt={aboutData.profileImg.alt}
          width={150}
          height={150}
        />
        <div>
          <h1>{aboutData.name}</h1>
          <h2>{aboutData.title}</h2>
          <p>{aboutData.description}</p>
          <div>
            <p>{aboutData.techStackTitle}</p>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
