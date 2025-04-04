import Image from 'next/image';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Project({ index, data }: { index: number; data: any }) {
  const position = index % 2 === 0 ? Position.EVEN : Position.ODD;

  return (
    <div>
      <Title title={data.title} />
      <Description description={data.description} />
      <Gif gifPath={data.gifPath} alt={data.alt} />
      <p>{position}</p>
    </div>
  );
}

function Title({ title }: { title: string }) {
  return <h1>{title}</h1>;
}
function Description({ description }: { description: string }) {
  return <h1>{description}</h1>;
}
function Gif({ gifPath, alt }: { gifPath: string; alt: string }) {
  return <Image src={gifPath} alt={alt} width={500} height={500} />;
}

enum Position {
  EVEN = 'even',
  ODD = 'odd'
}
