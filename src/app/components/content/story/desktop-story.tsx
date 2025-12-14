import { StoryModel } from "@/models/story-model";
import { StoryCarousel } from "./story-carousel";

export const DesktopStory = ({ story }: { story: StoryModel }) => {
  return (
    <>
      <div className="w-full space-y-7 md:w-1/2 lg:w-3/5">
        <div>
          <h1 className="text-3xl font-medium lg:text-4xl">{story.title}</h1>
        </div>
        <div>{story.description?.()}</div>
      </div>
      <div className="h-full w-full space-y-5 md:w-1/2 lg:w-2/5">
        <StoryCarousel pictures={story.images} aspectRatio={story.aspectRatio} />
      </div>
    </>
  );
};
