'use client';

import {
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart
} from 'recharts';

import { ChartConfig, ChartContainer } from '@/components/ui/chart';
import Image from 'next/image';

type TechCardProps = {
  progress: number;
  iconPath: string;
  startAngle: number;
  clockWise: boolean;
  alt: string;
};

//ESTOU ACHANDO QUE VAI SER MAIS FÁCIL SE EU FAZER ESSE COMPONENTE DO ZERO!!!
//adicionar tooltip com os nomes das tecnologias!

const chartData = [
  { browser: 'safari', visitors: 1260, fill: 'var(--color-safari)' }
];

const chartConfig = {
  visitors: {
    label: 'Visitors'
  },
  safari: {
    label: 'Safari',
    color: 'hsl(var(--chart-2))'
  }
} satisfies ChartConfig;

export function TechCard({
  progress,
  iconPath,
  startAngle,
  clockWise,
  alt
}: TechCardProps) {
  return (
    <div className="relative">
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[250px]"
      >
        <RadialBarChart
          data={chartData}
          endAngle={((clockWise ? -1 : 1) * (18 * progress)) / 5 + startAngle}
          startAngle={startAngle}
          innerRadius={80}
          outerRadius={140}
          className="w-20 h-20"
        >
          <PolarGrid
            gridType="circle"
            radialLines={false}
            stroke="none"
            className="w-20 h-20 first:fill-muted last:fill-background"
            polarRadius={[86, 74]}
          />
          <RadialBar dataKey="visitors" background />
          <PolarRadiusAxis
            tick={false}
            tickLine={false}
            axisLine={false}
            className="w-20 h-20"
          ></PolarRadiusAxis>
        </RadialBarChart>
      </ChartContainer>
      <Image
        src={iconPath}
        alt={alt}
        width={50}
        height={50}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
}
