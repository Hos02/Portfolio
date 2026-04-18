"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export type ProjectSlide = {
  title: string;
  tagline?: string;
  description: string;
  liveUrl: string;
  liveLabel?: string;
  linkClassName?: string;
};

const projects: ProjectSlide[] = [
  {
    title: "WineRoad.am",
    description:
      "WineRoad.am is a digital platform dedicated to Armenian wine culture, connecting winemakers, wine lovers, and wine tourism experiences in one ecosystem. It allows users to explore local wines, discover producers, and learn more about Armenia's wine heritage through a modern and accessible interface.",
    liveUrl: "https://wineroad.am/en",
    liveLabel: "Live site",
    linkClassName: "text-rose-400",
  },
  {
    title: "Aygi.Ai",
    description:
      "Aygi.ai is an Armenian AgTech startup that uses artificial intelligence to help farmers diagnose and treat plant diseases. By simply uploading a photo, farmers receive AI-powered insights and expert recommendations, combining technology with human expertise to ensure healthier crops and more sustainable agriculture.",
    liveUrl: "https://aygi-ai-vercel.vercel.app/",
    liveLabel: "Live site",
    linkClassName: "text-green-400",
  },
  {
    title: "JermTravel.com",
    description:
      "JermTravel.com is a tour operator based in Armenia, offering private tours, transfers, and customizable travel packages across Armenia and Georgia. Their mission is to make every guest feel at home while showcasing the region's scenic beauty, cultural richness, and warm hospitality.",
    liveUrl: "https://jermtravel.com/",
    liveLabel: "Live site",
    linkClassName: "text-amber-400",
  },
];

export default function ProjectsCarousel() {
  return (
    <div className="mt-8 w-full max-w-5xl mx-auto px-11 sm:px-14">
      <Carousel
        opts={{ align: "start", loop: true }}
        className="relative w-full"
        aria-label="Project highlights"
      >
        <CarouselContent className="-ml-2 sm:-ml-4">
          {projects.map((project) => (
            <CarouselItem
              key={project.title}
              className="pl-2 sm:pl-4 basis-full sm:basis-1/2"
            >
              <article className="card animate-fadeInUp h-full min-h-[200px] sm:min-h-[240px] flex flex-col justify-between">
                <div>
                  <h2 className="text-lg sm:text-xl font-semibold tracking-tight">{project.title}</h2>
                  {project.tagline ? (
                    <p className="mt-2 text-sm font-medium text-foreground/90 italic">
                      &ldquo;{project.tagline}&rdquo;
                    </p>
                  ) : null}
                  <p className="mt-3 text-sm text-foreground/80 leading-relaxed">{project.description}</p>
                </div>
                <div className="mt-4 text-sm">
                  <a
                    className={`link-underline ${project.linkClassName ?? "text-foreground/90"}`}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.liveLabel ?? "Live"}
                  </a>
                </div>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          className="!-left-1 sm:!-left-2 top-1/2 -translate-y-1/2 z-10 border-foreground/25 bg-background/95 shadow-sm"
          aria-label="Previous projects"
        />
        <CarouselNext
          className="!-right-1 sm:!-right-2 top-1/2 -translate-y-1/2 z-10 border-foreground/25 bg-background/95 shadow-sm"
          aria-label="Next projects"
        />
      </Carousel>
    </div>
  );
}
