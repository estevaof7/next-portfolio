import { createContext, useContext, useState } from 'react';

const TailwindContext = createContext({
  isTailwindCompatible: true,
  getTailwindCompatibility: () => {}
});

export function TailwindProvider({ children }: { children: React.ReactNode }) {
  const [isTailwindCompatible, setIsTailwindCompatible] = useState(true);

  //acho que vou ter que faer um useRef mesmo (gambiarra)
  const getTailwindCompatibility = () => {
    const tempElement = document.createElement('div');
    tempElement.style.display = 'none';
    tempElement.className = 'bg-red-50';

    document.body.appendChild(tempElement);
    const computedBackgroundColor =
      window.getComputedStyle(tempElement).backgroundColor;

    console.log('computedBackgroundColor', computedBackgroundColor);
  };

  return (
    <TailwindContext.Provider
      value={{ isTailwindCompatible, getTailwindCompatibility }}
    >
      {children}
    </TailwindContext.Provider>
  );
}

export function useTailwind() {
  return useContext(TailwindContext);
}
