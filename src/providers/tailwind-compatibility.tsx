// import { createContext, useContext, useState } from 'react';

// const TailwindContext = createContext(true);

// export function TailwindProvider({ children }: { children: React.ReactNode }) {
//   const [isTailwindCompatible, setIsTailwindCompatible] = useState(true);

//   return (
//     <TailwindContext.Provider value={{ isTailwindCompatible }}>
//       {children}
//     </TailwindContext.Provider>
//   );
// }

// export function useTailwind() {
//   return useContext(TailwindContext);
// }
