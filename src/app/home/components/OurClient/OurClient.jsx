"use client";
import Heading from "@/partials/elements/heading/Heading";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";

const OurClient = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2500 }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const logos = ["Client Logo", "Client Logo", "Client Logo", "Client Logo"];

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  return (
    <div className="w-full relative bg-gray-800 text-white h-[700px] flex flex-col items-center justify-between py-8">
      {/* Heading */}
      <div className="text-center">
        <Heading heading="Our Clients" className="text-3xl font-semibold" />
      </div>

      {/* Logos Slider */}
      <div className="embla w-full max-w-7xl flex-grow flex items-center" ref={emblaRef}>
        <div className="embla__container flex gap-8 px-4 overflow-visible">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="embla__slide flex items-center justify-center bg-gray-600 rounded-md w-32 h-32 text-white text-lg font-bold"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8">
        {logos.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
            className={`w-3 h-3 rounded-full mx-1 ${
              selectedIndex === index ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default OurClient;
