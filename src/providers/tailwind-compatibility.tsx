import { isTailwindCompatible } from '@/constants/tailwind-compatibility';

export const checkCompatibility = (className: string) => {
  if (isTailwindCompatible) {
    return className;
  } else {
    return className;
  }
};
