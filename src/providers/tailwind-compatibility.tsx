import { createContext, useContext, useState } from 'react';

const TailwindContext = createContext({
  isTailwindCompatible: true,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setIsTailwindCompatible: (value: boolean) => {}
});

export function TailwindProvider({ children }: { children: React.ReactNode }) {
  const [isTailwindCompatible, setIsTailwindCompatible] = useState(true);

  return (
    <TailwindContext.Provider
      value={{ isTailwindCompatible, setIsTailwindCompatible }}
    >
      {children}
    </TailwindContext.Provider>
  );
}

export function useTailwind() {
  return useContext(TailwindContext);
}
