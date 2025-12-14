import { cn } from "@/lib/utils";
import Projects from "./projects";
import { useLanguageStore } from "@/stores/language.store";
import { useTabStore } from "@/stores/tab.store";
import { StoryView } from "./story";

export const Content = () => {
  const { isPt } = useLanguageStore();
  const { activeTab, setActiveTab } = useTabStore();

  return (
    <div className="min-h-screen bg-[#101113] text-[#ececec]">
      <div className="mx-auto max-w-6xl px-6 py-10 sm:py-16 md:px-8 lg:px-10 lg:py-20">
        <div className="mb-8 flex justify-center">
          <div className="relative inline-flex items-center gap-1 rounded-lg bg-[#1a1b1e] p-1.5 shadow-inner">
            <button
              onClick={() => setActiveTab("projects")}
              className={cn(
                "relative z-10 rounded-md px-6 py-2.5 text-sm font-medium transition-all duration-300 ease-in-out",
                activeTab === "projects"
                  ? "bg-[#ececec] text-[#101113] shadow-sm"
                  : "text-[#ececec]/60 hover:text-[#ececec]/80",
              )}
            >
              {isPt ? "Meus projetos" : "My projects"}
            </button>
            <button
              onClick={() => setActiveTab("story")}
              className={cn(
                "relative z-10 rounded-md px-6 py-2.5 text-sm font-medium transition-all duration-300 ease-in-out",
                activeTab === "story"
                  ? "bg-[#ececec] text-[#101113] shadow-sm"
                  : "text-[#ececec]/60 hover:text-[#ececec]/80",
              )}
            >
              {isPt ? "Minha história" : "My story"}
            </button>
          </div>
        </div>
        <div className="overflow-hidden" id="content">
          <div
            className={cn(
              "flex w-[200%] transition-transform duration-500 ease-in-out",
              activeTab === "projects" ? "translate-x-0" : "translate-x-[-50%]",
            )}
            onTouchMove={(e) => {
              if (e.touches.length === 1) {
                if (!(window as any).__touchStartX) {
                  (window as any).__touchStartX = e.touches[0].clientX;
                } else {
                  const deltaX = e.touches[0].clientX - (window as any).__touchStartX;
                  if (Math.abs(deltaX) > 60) {
                    if (deltaX < 0) {
                      setActiveTab("projects");
                    } else {
                      setActiveTab("story");
                    }
                    (window as any).__touchStartX = null;
                  }
                }
              }
              e.currentTarget.ontouchend = () => {
                (window as any).__touchStartX = null;
              };
            }}
          >
            <div className="w-1/2 shrink-0">
              <Projects />
            </div>
            <div className="w-1/2 shrink-0">
              <StoryView />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
