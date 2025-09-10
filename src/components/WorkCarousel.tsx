import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

interface WorkImage {
  src: string;
  alt: string;
  title?: string;
}

interface WorkCarouselProps {
  images: WorkImage[];
  title: string;
}

export default function WorkCarousel({ images, title }: WorkCarouselProps) {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-4">{title} Gallery</h3>
      <Carousel className="w-full max-w-4xl mx-auto">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                {image.title && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white text-sm font-medium">{image.title}</p>
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {images.length > 1 && (
          <>
            <CarouselPrevious />
            <CarouselNext />
          </>
        )}
      </Carousel>
    </div>
  );
}
