'use client'

import React,{useEffect} from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Image from 'next/image';
import image1 from './image/image2.png';
import image2 from './image/image3.png';
import image3 from './image/image4.png';
import image4 from './image/image5.png';
import image5 from './image/image6.png';

const images = [
  { src: image1, caption: "Image 1" },
  { src: image2, caption: "Image 2" },
  { src: image3, caption: "Image 3" },
  { src: image4, caption: "Image 4" },
  { src: image5, caption: "Image 1" },
  { src: image1, caption: "Image 1" },
  { src: image2, caption: "Image 2" },
  { src: image3, caption: "Image 3" },
  { src: image4, caption: "Image 4" },
  { src: image5, caption: "Image 1" },
  { src: image1, caption: "Image 1" },
  { src: image2, caption: "Image 2" },
  { src: image3, caption: "Image 3" },
  { src: image4, caption: "Image 4" },
  { src: image5, caption: "Image 1" },
];



const Pageone = () => {
  useEffect(() => {
    const mm = gsap.matchMedia();
    
    mm.add("(min-width: 1024px)", () => {
      // Desktop animation
      return gsap.from(".section1", {
        opacity: 0,
        y: 250,
        duration: 2,
        scrollTrigger: {
          trigger: ".section1",
          start: "top 80%",
          end: "top 50%",
          scrub: 2,
        },
      });
    });

    mm.add("(max-width: 1023px)", () => {
      // Mobile & Tablet animation
      return gsap.from(".section1", {
        opacity: 0,
        y: 100, // Smaller movement for smaller screens
        duration: 1.5, 
        scrollTrigger: {
          trigger: ".section1",
          start: "top 90%",
          end: "top 60%",
          scrub: 1,
        },
      });
    });

    return () => mm.revert(); // Cleanup on unmount

  }, []);
    return ( 
        <div className='section1 relative z-[8] ' id="HowItWorks">
            <div className='py-[12px] sm:py-[13px] md:py-[14px] lg:py-[15px] xl:py-[16px] 2xl:py-[20px]'>
              <div className="scroll-container">
                  <div className="scroll-contents gap-[17px] sm:gap-[20px] md:gap-[25px] lg:gap-[30px] xl:gap-[40px] 2xl:gap-[51px]">
                      {[...images, ...images].map((image, index) => (
                      <div key={index} className="flex flex-col items-center w-[170px] sm:w-[230px] xl:w-[280px] xl:w-[337px] ">
                          <Image src={image.src} alt={image.caption} />
                      </div>
                      ))}
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Pageone;