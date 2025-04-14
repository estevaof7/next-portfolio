import { TechData } from '@/models/tech-model';
import Image from 'next/image';

enum Position {
  EVEN = 'even',
  ODD = 'odd'
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Project({ index, data }: { index: number; data: any }) {
  //testar as tecnologiar de cada projeto
  //verificar aquea tipagem de intervalo para dar certo de colocar 0 e 100, pois ele está verificando que tem que ser menor que 100 e não menor/igual
  //gif sesc

  const position = index % 2 === 0 ? Position.EVEN : Position.ODD;

  return (
    <div
      className={`flex justify-between gap-10 ${position === Position.EVEN ? '' : 'flex-row-reverse'}`}
    >
      <div className="space-y-4 w-3/5">
        <div>
          <h1 className="text-4xl font-medium">{data.title}</h1>
          <h2 className="text-gray-400 mt-1">
            {(data.start ? data.start + ' - ' : '') + data.end}
          </h2>
        </div>
        <div>{data.description()}</div>
        <div className="flex space-x-4">
          {data.tech.map((item: TechData) => (
            <TechCard key={item.name} src={item.src} alt={item.name} />
          ))}
          {/* <div className="rounded-full w-12 h-12 bg-gray-300"></div>
          <div className="rounded-full w-12 h-12 bg-gray-300"></div>
          <div className="rounded-full w-12 h-12 bg-gray-300"></div> */}
        </div>
      </div>
      <div className="w-2/5">
        <Gif gifPath={data.gifPath} alt={data.alt} />
      </div>
    </div>
  );
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

function TechCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="rounded-full w-12 h-12 bg-gray-300">
      <Image src={src} alt={alt} />
    </div>
  );
}
