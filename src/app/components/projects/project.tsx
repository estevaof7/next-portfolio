import Image from 'next/image';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Project({ index, data }: { index: number; data: any }) {
  const position = index % 2 === 0 ? Position.EVEN : Position.ODD;

  return (
    <div
      className={`flex justify-between ${position === Position.EVEN ? '' : 'flex-row-reverse'}`}
    >
      <div>
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
function Description({ description }: { description: string }) {
  return <p>{description}</p>;
}
function Gif({ gifPath, alt }: { gifPath: string; alt: string }) {
  return <Image src={gifPath} alt={alt} width={500} height={500} unoptimized />;
}

enum Position {
  EVEN = 'even',
  ODD = 'odd'
}
