import Image from 'next/image';
import { JSX } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Project({ index, data }: { index: number; data: any }) {
  //verificar se deu certo o about
  //terminar a parte tech no projects-data
  //verificar aquea tipagem de intervalo para dar certo de colocar 0 e 100, pois ele está verificando que tem que ser menor que 100 e não menor/igual
  //verificar se esse jeito que eu fiz com as logos de tecnologias é a melhor maneira

  const position = index % 2 === 0 ? Position.EVEN : Position.ODD;

  return (
    <div
      className={`flex justify-between gap-10 ${position === Position.EVEN ? '' : 'flex-row-reverse'}`}
    >
      <div className="space-y-4 w-3/5">
        <div>
          <Title title={data.title} />
          <h2 className="text-gray-400 mt-1">
            {(data.start ? data.start + ' - ' : '') + data.end}
          </h2>
        </div>
        <Description description={data.description} />
        <div className="flex space-x-4">
          <div className="rounded-full w-12 h-12 bg-gray-300"></div>
          <div className="rounded-full w-12 h-12 bg-gray-300"></div>
          <div className="rounded-full w-12 h-12 bg-gray-300"></div>
        </div>
      </div>
      <div className="w-2/5">
        <Gif gifPath={data.gifPath} alt={data.alt} />
      </div>
    </div>
  );
}

function Title({ title }: { title: string }) {
  return <h1 className="text-4xl font-medium">{title}</h1>;
}
function Description({ description }: { description: () => JSX.Element }) {
  return <div>{description()}</div>;
}
function Gif({ gifPath, alt }: { gifPath: string; alt: string }) {
  return (
    <div className="w-full h-auto rounded-2xl bg-gray-300">
      <Image
        src={gifPath}
        alt={alt}
        width={500}
        height={500}
        unoptimized
        className="rounded-xl"
      />
    </div>
  );
}

enum Position {
  EVEN = 'even',
  ODD = 'odd'
}
