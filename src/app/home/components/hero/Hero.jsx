// "use client"
// import Container from "@/partials/elements/container/Container";
// import Autoplay from "embla-carousel-autoplay";
// import useEmblaCarousel from "embla-carousel-react";
// import React, { useEffect } from "react";
// import Image from "next/image";
// import hero1 from './../../../assets/hero1.jpg';
// import hero2 from './../../../assets/hero2.png';
// import hero3 from './../../../assets/hero3.jpg';

// const Hero = () => {
//     const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 2500 })]);

//     useEffect(() => {
//         if (emblaApi) {
//             console.log(emblaApi.slideNodes());
//         }
//     }, [emblaApi]);

//     const images = [hero1, hero2, hero3];

//     return (
//         <div className="pt-28 w-full relative">
//             <Container>
//                 <div className="embla" ref={emblaRef}>
//                     <div className="embla__container">
//                         {images.map((image, index) => (
//                             <div key={index} className="embla__slide relative">
//                                 <Image
//                                     src={image}
//                                     alt={`Hero Image ${index + 1}`}
//                                     className="w-full h-[650px] object-cover"
//                                     width={1920}
//                                     height={650}
//                                 />
//                                 {/* Centered Content */}
//                                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
//                                     <h2 className="text-3xl lg:text-5xl font-bold mb-4">
//                                         Elevating Your Business to New Heights
//                                     </h2>
//                                     <button className="bg-blue-500 text-white py-2 px-6 rounded-lg text-lg hover:bg-blue-600">
//                                         Explore Services
//                                     </button>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </Container>
//         </div>
//     );
// };

// export default Hero;

"use client";
import Container from "@/partials/elements/container/Container";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import React, { useEffect } from "react";
import Image from "next/image";
import hero1 from "@/assets/hero1.jpg";
import hero2 from "@/assets/hero2.png";
import hero3 from "@/assets/hero3.jpg";
import Heading from "@/partials/elements/heading/Heading";

const Hero = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2500 }),
  ]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);

  const images = [hero1, hero2, hero3];

  return (
    <div className="pt-28 w-full relative">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {/* Background images */}
            {images.map((image, index) => (
              <div key={index} className="embla__slide relative">
                <Image
                  src={image}
                  alt={`Hero Image ${index + 1}`}
                  className="w-full h-[650px] object-cover"
                  width={1920}
                  height={650}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Fixed Content (Heading and CTA Button) */}
        <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
          <Heading
            heading=" Elevating Your Business to New Heights"
            className="text-center mb-8"
          />

          <button className="bg-blue-500 text-white py-2 px-6 rounded-lg text-lg hover:bg-blue-600">
            Explore Services
          </button>
        </div>
    </div>
  );
};

export default Hero;
