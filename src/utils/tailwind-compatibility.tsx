const tailwindColors: { [key: string]: string } = {
  'gray-300': '#d1d5db'
};

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
