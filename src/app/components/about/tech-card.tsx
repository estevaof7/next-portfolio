import Image from 'next/image';
import type React from 'react';

//peguei desse site: https://github.com/shadcn-ui/ui/issues/697 (último comentário)

export interface ProgressCircleProps extends React.ComponentProps<'svg'> {
  value: number;
  className?: string;
  iconPath: string;
  alt: string;
  startAngle: number;
  clockWise: boolean;
}

function clamp(input: number, a: number, b: number): number {
  return Math.max(Math.min(input, Math.max(a, b)), Math.min(a, b));
}

const size = 24;
const strokeWidth = 2;

const total = 100;

export const ProgressCircle = ({
  value,
  className,
  iconPath,
  alt,
  startAngle,
  clockWise,
  ...restSvgProps
}: ProgressCircleProps) => {
  const normalizedValue = clamp(value, 0, total);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (normalizedValue / total) * circumference;
  const halfSize = size / 2;

  const commonParams = {
    cx: halfSize,
    cy: halfSize,
    r: radius,
    fill: 'none',
    strokeWidth
  };

  return (
    <div className="relative aspect-square">
      <svg
        role="progressbar"
        viewBox={`0 0 ${size} ${size}`}
        className={`w-full h-full text-primary ${className}`}
        aria-valuenow={normalizedValue}
        aria-valuemin={0}
        aria-valuemax={100}
        {...restSvgProps}
      >
        <circle {...commonParams} className="stroke-current/25" />
        <circle
          {...commonParams}
          stroke="currentColor"
          strokeDasharray={circumference}
          strokeDashoffset={
            clockWise ? circumference - progress : circumference + progress
          }
          strokeLinecap="round"
          transform={`rotate(${startAngle} ${halfSize} ${halfSize})`}
          className="stroke-current"
        />
      </svg>
      <Image
        src={iconPath}
        alt={alt}
        width={50}
        height={50}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
};
