import { useStoryData } from "@/data/story-data";
import { StoryModel } from "@/models/story-model";
import { Story } from "./story";

export const StoryView = () => {
  const storyData = useStoryData();

  return (
    <section>
      <div className="space-y-10 sm:space-y-16 lg:space-y-20">
        <div className="space-y-10 sm:space-y-16 lg:space-y-20">
          <h1 className="border-b-2 pb-2 text-3xl sm:pb-4 sm:text-4xl md:text-5xl lg:text-6xl">
            {storyData.title}
          </h1>
          {storyData.stories.map((story: StoryModel, index: number) => (
            <Story key={story.title} index={index} story={story} />
          ))}
        </div>
      </div>
    </section>
  );
};
