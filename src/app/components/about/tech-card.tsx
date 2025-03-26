'use client';

import {
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart
} from 'recharts';

import { ChartConfig, ChartContainer } from '@/components/ui/chart';
import Image from 'next/image';

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
  startAngle
  // clockWise
}: {
  progress: number;
  iconPath: string;
  startAngle: number;
  clockWise: boolean;
}) {
  return (
    <div className="relative">
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[250px]"
      >
        <RadialBarChart
          data={chartData}
          endAngle={(18 * progress) / 5 + startAngle}
          //TEM QUE FAZER A LÓGICA DO CLOCKWISE!!!!!!!!!
          startAngle={startAngle}
          innerRadius={80}
          outerRadius={140}
        >
          <PolarGrid
            gridType="circle"
            radialLines={false}
            stroke="none"
            className="first:fill-muted last:fill-background"
            polarRadius={[86, 74]}
          />
          <RadialBar dataKey="visitors" background />
          <PolarRadiusAxis
            tick={false}
            tickLine={false}
            axisLine={false}
          ></PolarRadiusAxis>
        </RadialBarChart>
      </ChartContainer>
      <Image
        src={iconPath}
        alt="Icon"
        width={100}
        height={100}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
}
