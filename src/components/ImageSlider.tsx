"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  { src: "/banner-1.jpg", alt: "Slide 1" },
  { src: "/banner-2.jpg", alt: "Slide 2" },
  { src: "/banner-4.jpg", alt: "Slide 3" },
  { src: "/banner-5.jpg", alt: "Slide 4" },
];

export default function ImageSlider() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <Card className="border-none">
                <CardContent className="p-0">
                  <Image
                    className="object-contain border border-gray-300 rounded-xl"
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={300}
                    style={{ objectFit: "contain" }}
                    priority={index === 0}
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </section>
  );
}
