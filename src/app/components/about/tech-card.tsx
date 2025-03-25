'use client';

import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart
} from 'recharts';

import { ChartConfig, ChartContainer } from '@/components/ui/chart';
// import Image from 'next/image';

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
  iconPath
}: {
  progress: number;
  iconPath: string;
}) {
  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-[250px]"
    >
      <RadialBarChart
        data={chartData}
        endAngle={(18 * progress) / 5 + 90}
        startAngle={90}
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
        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                // console.log('viewBox', viewBox);
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="fill-foreground text-4xl font-bold"
                    >
                      {chartData[0].visitors.toLocaleString()}
                      {iconPath}
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 24}
                      className="fill-muted-foreground"
                    >
                      teste 2
                    </tspan>
                  </text>
                );
              }
            }}
            // <Image src={iconPath} alt="icon" width={100} height={100} />
          />
        </PolarRadiusAxis>
      </RadialBarChart>
    </ChartContainer>
  );
}
