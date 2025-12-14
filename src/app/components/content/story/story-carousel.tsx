import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { AspectRatio } from "@/models/story-model";

export interface CarouselPicturesProps {
  pictures: { src: string; alt: string; objectFit?: "cover" | "contain" }[];
  aspectRatio: AspectRatio;
}

export const StoryCarousel = ({ pictures, aspectRatio }: CarouselPicturesProps) => {
  return (
    <div className="relative w-full overflow-hidden rounded-lg">
      <Carousel className="w-full">
        <CarouselContent parentClassName="h-full" className="h-full">
          {pictures.map((picture, index) => (
            <CarouselItem key={index} className="h-full overflow-hidden">
              <CarouselImage
                pictureUrl={picture.src}
                alt={picture.alt}
                style={{ aspectRatio: aspectRatio }}
                objectFit={picture.objectFit}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export const CarouselImage = ({
  pictureUrl,
  alt,
  onLoad,
  style,
  objectFit,
}: {
  pictureUrl: string;
  alt: string;
  index?: number;
  onLoad?: (img: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  style?: React.CSSProperties;
  objectFit?: "cover" | "contain";
}) => {
  const [hasError, setHasError] = useState(false);

  return !hasError ? (
    <Image
      src={pictureUrl}
      alt={alt}
      width={0}
      height={0}
      fill={false}
      sizes={"100%"}
      className={cn("h-full w-full object-cover", objectFit && `object-${objectFit}`)}
      onError={() => setHasError(true)}
      onLoad={onLoad}
      // unoptimized
      style={style}
    />
  ) : (
    <div className="flex h-full min-h-52 w-full items-center justify-center rounded-lg border border-neutral-200 text-sm text-neutral-500">
      Erro ao carregar imagem
    </div>
  );
};
