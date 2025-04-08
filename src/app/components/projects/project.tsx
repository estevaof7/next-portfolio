import Image from 'next/image';
import { JSX } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Project({ index, data }: { index: number; data: any }) {
  //anotei no projects-data como vou pedir para o gpt ... começar a elaborar as descrições
  //colocar data

  const position = index % 2 === 0 ? Position.EVEN : Position.ODD;

  return (
    <div
      className={`flex justify-between gap-10 ${position === Position.EVEN ? '' : 'flex-row-reverse'}`}
    >
      <div className="space-y-4">
        <Title title={data.title} />
        <Description description={data.description} />
      </div>
      <Gif gifPath={data.gifPath} alt={data.alt} />
    </div>
  );
}

function Title({ title }: { title: string }) {
  return <h1 className="text-4xl">{title}</h1>;
}
function Description({ description }: { description: () => JSX.Element }) {
  return <div>{description()}</div>;
}
function Gif({ gifPath, alt }: { gifPath: string; alt: string }) {
  return (
    <Image
      src={gifPath}
      alt={alt}
      width={500}
      height={500}
      unoptimized
      className="rounded-xl"
    />
  );
}

enum Position {
  EVEN = 'even',
  ODD = 'odd'
}
