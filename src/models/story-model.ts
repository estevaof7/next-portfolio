export type StorySectionModel = {
  title: string;
  stories: StoryModel[];
  pictureStartsOn: "left" | "right";
};

export type StoryModel = {
  title: string;
  description: (() => React.ReactNode) | null;
  images: {
    src: string;
    alt: string;
    objectFit?: "cover" | "contain";
  }[];
  aspectRatio: AspectRatio;
};

export type AspectRatio = "16/9" | "4/3" | "3/4";
