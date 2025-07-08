"use client"

import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "../ui/carousel";
import { JSX } from "react";

interface AutoplayCarouselProps {
  delay: number;
  loop: boolean;
  children: JSX.Element[]
}

export default function AutoplayCarousel({delay, loop, children}: AutoplayCarouselProps) {
  return (
    <Carousel className="w-full" opts={{ loop }} plugins={[Autoplay({ delay })]}>
      {children}
    </Carousel>
  );
}
