"use client";


import React, { useState,useEffect } from "react"; 
import Image from 'next/image';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import image1 from './image/image7.png';
import image2 from './image/image8.png';
import image3 from './image/image9.png';
import image4 from './image/image10.png';
import image5 from './image/image11.png';

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





const Pagetow = () => {
    const [active, setActive] = useState("$10K");
   

  const handleClick = (value) => {
    setActive(value);
  };

  const buttonStyles = (value) =>
    `buttonchallentesectiontoin ${
      active === value ? "bg-[#283555]" : "bg-[#ffffff0a]"
    }`;


    const [activetow, setActivetow] = useState("2 Step");
   

    const handleClicktwo = (value) => {
        setActivetow(value);
      };
      

      const buttonStylestwo = (value) =>
        `setp2section ${
          activetow === value ? "bg-custom-gradient outline outline-2 outline-white/10" : "bg-[#ffffff0a] outline outline-2 outline-white/0"
        }`;


        useEffect(() => {
            let ctx = gsap.context(() => {
              gsap.from(".section2", {
                opacity: 0,
                y: 250,
                duration: 2,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: ".section2",
                  start: "top 80%",
                  end: "top 50%",
                  scrub: 2,
                  markers: false, // Set to true for debugging
                },
              });
            });
        
            // Refresh ScrollTrigger to detect changes
            ScrollTrigger.refresh();
        
            return () => ctx.revert(); // Cleanup GSAP animations on unmount
          }, []);
      


    return (
        <div className='backgroundimage section2' id="Techmap">
            <div className=' px-[24px] sm:px-[0] mx-auto py-[32px] sm:py-[36px] md:py-[40px] lg:py-[48px] xl:py-[64px] 2xl:py-[100px]'>
                <div className='startchallenge text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] xl:text-[64px] 2xl:text-[73px] text-center'>What is an ai agent?</div>
                <p className='yourhavefoive text-[14px] sm:text-[15px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[32px] xl:px-[14%]    pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px] '>$MIND goes well beyond just being the best crypto presale in 2025. The MIND of Pepe ICO gives holders access to insights gathered by the AI Agent itself. Check out this video about AI agents and how MIND will rule the blockchain / AI crossover.</p>
                <div className="scroll-container mt-[32px] sm:mt-[36px] md:mt-[40px] lg:mt-[48px] xl:mt-[64px] 2xl:mt-[72px]">
                    <div className="scroll-content gap-[11px] sm:gap-[12px] md:gap-[13px] lg:gap-[14px] xl:gap-[15px] 2xl:gap-[16px]">
                        {[...images, ...images].map((image, index) => (
                        <div key={index} className="flex flex-col items-center w-[170px] sm:w-[266px] ">
                            <Image src={image.src} alt={image.caption} />
                        </div>
                        ))}
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Pagetow;