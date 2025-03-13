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
          const mm = gsap.matchMedia();
      
          mm.add("(min-width: 1024px)", () => {
            // Desktop Animation
            return gsap.from(".section2", {
              opacity: 0,
              y: 250,
              duration: 2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".section2",
                start: "top 50%",
                end: "top 30%",
                scrub: 2,
                markers: false,
              },
            });
          });
      
          mm.add("(max-width: 1023px)", () => {
            // Tablet & Mobile Animation
            return gsap.from(".section2", {
              opacity: 0,
              y: 100, // Less movement on small screens
              duration: 1.5,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".section2",
                start: "top 75%", // Trigger later for better visibility
                end: "top 50%",
                scrub: 1,
                markers: false,
              },
            });
          });
      
          return () => mm.revert(); // Cleanup GSAP animations on unmount
        }, []);
      


    return (
        <div className='backgroundimage sm:section2 ' id="Techmap">
            <div className='container mx-auto'>
                <h1 className='roadmapsectojn text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] xl:text-[64px] 2xl:text-[73px] pb-[32px] sm:pb-[36px] md:pb-[40px] lg:pb-[48px] xl:pb-[64px] 2xl:pb-[100px]'>$EXTAI Roadmap</h1>
                <div className='grid grid-cols-2 justify-center items-center'>
                    <div className='flex'>
                      <div className='relative'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="522" height="306" viewBox="0 0 522 306" fill="none">
                        <g filter="url(#filter0_d_1040_2055)">
                          <path d="M0 40C0 17.9086 17.9086 0 40 0H452.177C474.269 0 492.177 17.9086 492.177 40V191.787C492.177 196.709 496.167 200.699 501.089 200.699C506.01 200.699 510 204.688 510 209.61V230.495C510 235.417 506.01 239.406 501.089 239.406C496.167 239.406 492.177 243.396 492.177 248.318V266.703C492.177 281.779 479.956 294 464.881 294H40C17.9086 294 0 276.091 0 254V40Z" fill="#202022"/>
                        </g>
                        <defs>
                          <filter id="filter0_d_1040_2055" x="0" y="0" width="522" height="306" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dx="12" dy="12"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1040_2055"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1040_2055" result="shape"/>
                          </filter>
                        </defs>
                      </svg>
                      <div className='absolute pl-[20px] sm:pl-[24px] md:pl-[32px] lg:pl-[36px] xl:pl-[40px] 2xl:pl-[44px]  pt-[24px] sm:pt-[32px] md:pt-[36px] lg:pt-[40px] xl:pt-[48px] 2xl:pt-[60px] pr-[24px] sm:pr-[32px] md:pr-[36px] lg:pr-[40px] xl:pr-[48px] 2xl:pr-[62px] pb-[24px] sm:pb-[32px] md:pb-[36px] lg:pb-[40px] xl:pb-[48px] 2xl:pb-[60px]'></div>
                      </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Pagetow;