export const isPt: boolean =
  typeof window !== 'undefined'
    ? navigator.language.toLowerCase().startsWith('pt')
    : false;
