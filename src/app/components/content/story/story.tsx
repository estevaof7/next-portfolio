import { useIsMobile } from "@/hooks/use-mobile";
import { StoryModel } from "@/models/story-model";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { DesktopStory } from "./desktop-story";
import { Position } from "@/enum/position.enum";
import { MobileStory } from "./mobile-story";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

export const Story = ({ index, story }: { index: number; story: StoryModel }) => {
  const position = index % 2 === 0 ? Position.EVEN : Position.ODD;
  const isMobile = useIsMobile();

  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from([cardRef.current], {
      scrollTrigger: {
        trigger: cardRef.current,
        start: `-${120 * index}px bottom`,
        // gambiarra: não sabia mas parece que o y:80 faz o top de todos os elementos ficarem para baixo
        // a cada elemento que você desce, o top vai ficando mais embaixo ainda
        toggleActions: "play none none none",
      },
      y: 80,
      opacity: 0,
      duration: 2,
      ease: "power3.out",
      stagger: 0.2,
    });
  });

  return (
    <div
      ref={cardRef}
      className={`flex flex-col gap-6 md:flex-row md:justify-between md:gap-8 lg:gap-14 ${position === Position.EVEN ? "" : "md:flex-row-reverse"}`}
    >
      {!isMobile ? <DesktopStory story={story} /> : <MobileStory story={story} />}
    </div>
  );
};
