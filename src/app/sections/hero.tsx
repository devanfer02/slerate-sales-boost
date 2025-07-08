import AutoplayCarousel from "@/components/shared/autoplay-carousel";
import { Button } from "@/components/ui/button";
import {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

const slideContent = [
  {
    headline: "Go From Data to Decisions, Instantly.",
    subtext: "Slerate's AI turns complex analytics into clear, actionable steps, so you always know what move to make next.",
    alt: "A business consultant pointing at a laptop screen, showing a client a Slerate dashboard.",
    imgSrc: "/assets/hero/hero3.jpg"
  },
  {
    headline: "Your Partner in Sustainable Growth.",
    subtext: "We're more than a tool. We're an extension of your team, helping you navigate the path to increased revenue and customer loyalty.",
    alt: "Two business partners walking and discussing strategy in a modern office.",
    imgSrc: "/assets/hero/hero2.jpg"
  },
  {
    headline: "The Clarity You've Been Searching For.",
    subtext: "Stop guessing. Start growing. Experience the confidence that comes from having a clear view of your entire sales pipeline.",
    alt: "A confident business owner feeling successful after using Slerate.",
    imgSrc: "/assets/hero/hero1.jpg"
  }
];

export default function Hero() {
  return (
    <div id="hero">
      <AutoplayCarousel delay={3000} loop={true}>
        <CarouselContent>
          {slideContent.map((content, index) => (
            <CarouselItem key={index}>
              <div className="relative lg:aspect-video h-screen w-full">
                <Image
                  src={content.imgSrc}
                  alt={content.alt}
                  fill
                  className="object-cover brightness-50"
                  priority
                  sizes="100vw"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-8">
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-md">
                    {content.headline}
                  </h1>
                  <p className="mt-4 max-w-xl lg:text-xl text-lg opacity-90 drop-shadow-md">
                    {content.subtext}
                  </p>
                  <Button size="lg" className="mt-6 bg-slerate-primary duration-300 ease-in-out hover:bg-white hover:text-slerate-primary">
                    <a href={index === slideContent.length - 1 ? "#get-started" : "#features"}>
                      {index === slideContent.length - 1 ? "Start Free Trial" : "Learn More"}
                    </a>
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </AutoplayCarousel>
    </div>
  );
}
