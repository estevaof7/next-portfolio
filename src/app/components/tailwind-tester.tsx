import { useTailwind } from '@/providers/tailwind-compatibility';
import { useEffect, useRef } from 'react';

export default function TailwindTester() {
  const { setIsTailwindCompatible } = useTailwind();
  const tester = useRef(null);

  useEffect(() => {
    if (tester.current) {
      const computedBackgroundColor = getComputedStyle(
        tester.current
      ).backgroundColor;
      setIsTailwindCompatible(computedBackgroundColor.includes('oklch'));
    }
  });

  return <div className="hidden bg-red-50" ref={tester}></div>;
}
