'use client';

import { projectsData } from '@/data/projects-data';

export default function Session2() {
  //data: array com objeto e chaves title, gif, description, botão opcional, tecnologias utilizadas, etc.

  return (
    <section className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto py-10">
        <div id="professional-projects">
          <h1 className="text-5xl">{projectsData.professional.title}</h1>
        </div>
        <div id="personal-projects">
          <h1 className="text-5xl">{projectsData.personal.title}</h1>
        </div>
      </div>
    </section>
  );
}
