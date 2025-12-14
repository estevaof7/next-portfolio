import { StoryModel } from "@/models/story-model";
import { TechModel } from "@/models/tech-model";
import { StoryCarousel } from "./story-carousel";

export const MobileStory = ({ story }: { story: StoryModel }) => {
  return (
    <>
      <div>
        <h1 className="text-2xl font-medium">{story.title}</h1>
      </div>
      <div className="w-full">
        <StoryCarousel pictures={story.images} aspectRatio={story.aspectRatio} />
      </div>
      <div className="w-full space-y-4">
        <div>{story.description?.()}</div>
      </div>
    </>
  );
};
