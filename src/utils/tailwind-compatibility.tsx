import { tailwindColors } from '@/constants/tailwind-colors';

export const tailwindCompatibility = (
  isTailwindCompatible: boolean,
  className: string
): string => {
  if (isTailwindCompatible) {
    return className;
  } else {
    return `[${tailwindColors[className]}]` || className;
  }
};
