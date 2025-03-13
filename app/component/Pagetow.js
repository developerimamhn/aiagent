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
        <div className='backgroundimage section2 ' id="Techmap">
            <div className='container mx-auto py-[32px] sm:py-[36px] md:py-[40px] lg:py-[48px] xl:py-[64px] 2xl:py-[100px] sm:mt-[0]'>
                <h1 className='roadmapsectojn text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] xl:text-[64px] 2xl:text-[73px] pb-[32px] sm:pb-[36px] md:pb-[40px] lg:pb-[48px] xl:pb-[64px] 2xl:pb-[100px]'>$EXTAI Roadmap</h1>
                <div className='px-[50px] sm:px-[0] lg:px-[110px] xl:px-[170px] 2xl:px-[200px] relative flex flex-col gap-[36px] sm:gap-[40px] md:gap-[48px] lg:gap-[64px] xl:gap-[90px] 2xl:gap-[100px]'>
                <svg className='w-[46px] sm:w-[60px] md:w-[80px] lg:w-[100px] xl:w-[120px] 2xl:w-[142px] absolute left-0 sm:left-1/2 top-0 transform sm:-translate-x-1/2 sm:block hidden' viewBox="0 0 142 1535" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="71" y1="13" x2="71.0001" y2="1530" stroke="#334780" stroke-width="2"/>
                  <path d="M71.3781 1534.42C76.066 1534.18 79.6672 1530.18 79.4216 1525.49C79.1759 1520.8 75.1763 1517.2 70.4884 1517.44C65.8004 1517.69 62.1992 1521.69 62.4449 1526.38C62.6905 1531.07 66.6901 1534.67 71.3781 1534.42Z" fill="#FF5C00" stroke="black"/>
                  <path d="M71.0682 265.273C74.1016 265.114 76.4317 262.526 76.2728 259.492C76.1138 256.459 73.5259 254.129 70.4925 254.288C67.4591 254.447 65.1289 257.035 65.2878 260.068C65.4468 263.102 68.0348 265.432 71.0682 265.273Z" fill="#DCE1EE" stroke="#202022"/>
                  <path d="M71.0682 645.273C74.1016 645.114 76.4317 642.526 76.2728 639.493C76.1138 636.46 73.5259 634.129 70.4925 634.288C67.4591 634.447 65.1289 637.035 65.2878 640.069C65.4468 643.102 68.0348 645.432 71.0682 645.273Z" fill="#DCE1EE" stroke="#202022"/>
                  <path d="M71.0682 1433.27C74.1016 1433.11 76.4317 1430.53 76.2728 1427.49C76.1138 1424.46 73.5259 1422.13 70.4925 1422.29C67.4591 1422.45 65.1289 1425.04 65.2878 1428.07C65.4468 1431.1 68.0348 1433.43 71.0682 1433.27Z" fill="#DCE1EE" stroke="#202022"/>
                  <path d="M71.0682 1046.27C74.1016 1046.11 76.4317 1043.53 76.2728 1040.49C76.1138 1037.46 73.5259 1035.13 70.4925 1035.29C67.4591 1035.45 65.1289 1038.04 65.2878 1041.07C65.4468 1044.1 68.0348 1046.43 71.0682 1046.27Z" fill="#DCE1EE" stroke="#202022"/>
                  <path d="M71.3781 18.4215C76.066 18.1758 79.6672 14.1763 79.4216 9.48829C79.1759 4.8003 75.1763 1.19911 70.4884 1.44479C65.8004 1.69048 62.1992 5.69001 62.4449 10.378C62.6905 15.066 66.6901 18.6672 71.3781 18.4215Z" fill="#FF5C00" stroke="black"/>
                  <path d="M87.8966 93.3273L87.8968 117.624C87.8967 124.252 87.8968 127.566 87.4027 130.73C86.389 137.22 83.8397 143.375 79.9671 148.681C78.0793 151.267 75.7359 153.611 71.0489 158.298C70.8041 158.543 70.5978 158.524 70.3712 158.298C65.6842 153.611 63.3407 151.267 61.4533 148.681C57.5807 143.375 55.0313 137.22 54.0174 130.73C53.5233 127.566 53.5236 124.252 53.5233 117.624L53.5236 93.3273" fill="#FF5C00"/>
                  <path d="M87.8966 93.3273L87.8968 117.624C87.8967 124.252 87.8968 127.566 87.4027 130.73C86.389 137.22 83.8397 143.375 79.9671 148.681C78.0793 151.267 75.7359 153.611 71.0489 158.298C70.8041 158.543 70.5978 158.524 70.3712 158.298C65.6842 153.611 63.3407 151.267 61.4533 148.681C57.5807 143.375 55.0313 137.22 54.0174 130.73C53.5233 127.566 53.5236 124.252 53.5233 117.624L53.5236 93.3273" stroke="#141B34" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M87.0933 106.318C92.1105 101.301 99.4793 96.0579 102.229 89.4184C104.245 84.5534 103.476 78.7226 103.477 73.5518L89.562 79.1178C85.8744 80.5927 84.1949 75.7574 82.4856 73.1934C80.5809 70.3363 80.4665 70.2751 77.0329 70.2751L64.3875 70.2751C60.9538 70.2752 60.8393 70.3361 58.9348 73.1934C57.2253 75.7573 55.5459 80.5928 51.8586 79.1176L37.9437 73.5518C37.9437 78.7225 37.1756 84.5534 39.1908 89.4183C41.9409 96.0581 49.3098 101.301 54.327 106.318" fill="#FF5C00"/>
                  <path d="M87.0932 106.318C92.1105 101.301 99.4793 96.0579 102.229 89.4184C104.245 84.5534 103.476 78.7226 103.477 73.5518L89.562 79.1178C85.8744 80.5927 84.1949 75.7574 82.4856 73.1934C80.5809 70.3363 80.4665 70.2751 77.0329 70.2751L64.3875 70.2751C60.9538 70.2752 60.8393 70.3361 58.9348 73.1934C57.2253 75.7573 55.5459 80.5928 51.8586 79.1176L37.9437 73.5518C37.9437 78.7225 37.1756 84.5535 39.1908 89.4183C41.9409 96.0581 49.3098 101.301 54.327 106.318" stroke="#141B34" stroke-width="4.5" stroke-linejoin="round"/>
                  <path d="M47.1406 76.1406V70.2481V76.1406Z" fill="#E99C5C"/>
                  <path d="M47.1406 76.1406V70.2481" stroke="#141B34" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M94.2813 76.1406V70.2481V76.1406Z" fill="#E99C5C"/>
                  <path d="M94.2813 76.1406V70.2481" stroke="#141B34" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M85.2061 131.884C81.1402 134.889 76.0137 137.188 71.8258 137.133C66.8515 137.439 61.8715 136.127 56.2147 131.884" fill="#E99C5C"/>
                  <path d="M85.2061 131.884C81.1402 134.889 76.0137 137.188 71.8258 137.133C66.8515 137.439 61.8715 136.127 56.2147 131.884" stroke="#141B34" stroke-width="4.5" stroke-linecap="square"/>
                  <path d="M70.7095 134.713L70.7095 126.228L70.7095 134.713Z" fill="#E99C5C"/>
                  <path d="M70.7095 134.713L70.7095 126.228" stroke="#141B34" stroke-width="4.5" stroke-linecap="round"/>
                  </svg>

                    <div className='flex justify-center items-center gap-[36px] sm:gap-[40px] md:gap-[48px] lg:gap-[64px] xl:gap-[96px] 2xl:gap-[130px]'>
                      <div className='relative flex-1'>
                      <svg xmlns="http://www.w3.org/2000/svg" className='w-full' viewBox="0 0 522 306" fill="none">
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
                      <div className='absolute left-0 top-0 pl-[20px] sm:pl-[24px] md:pl-[32px] lg:pl-[36px] xl:pl-[40px] 2xl:pl-[44px]  pt-[24px] sm:pt-[32px] md:pt-[36px] lg:pt-[40px] xl:pt-[48px] 2xl:pt-[60px] pr-[24px] sm:pr-[32px] md:pr-[36px] lg:pr-[40px] xl:pr-[48px] 2xl:pr-[62px] pb-[24px] sm:pb-[32px] md:pb-[36px] lg:pb-[40px] xl:pb-[48px] 2xl:pb-[60px]'>
                        <h1 className='stepone text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px]'>Step 1</h1>
                        <p className='presons text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] pt-[13px] sm:pt-[14px] md:pt-[15px] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[24px]'>PresaleToken sale announced, early supporters get tokens at a discount. Community building through meme events.</p>
                      </div>
                      </div>
                      <div className='flex-1 sm:block hidden'></div>
                    </div>
                    <div className='flex justify-center items-center gap-[36px] sm:gap-[40px] md:gap-[48px] lg:gap-[64px] xl:gap-[96px] 2xl:gap-[130px]'>
                    <div className='flex-1 sm:block hidden'></div>
                      <div className='relative flex-1'>
                      <svg xmlns="http://www.w3.org/2000/svg" className='w-full' viewBox="0 0 522 306" fill="none">
                        <g filter="url(#filter0_d_1040_2067)">
                          <path d="M510 40C510 17.9086 492.091 0 470 0H57.8226C35.7312 0 17.8226 17.9086 17.8226 40V191.787C17.8226 196.709 13.8329 200.699 8.91129 200.699C3.98972 200.699 0 204.688 0 209.61V230.495C0 235.417 3.98972 239.406 8.91129 239.406C13.8329 239.406 17.8226 243.396 17.8226 248.318V266.703C17.8226 281.779 30.0438 294 45.1194 294H470C492.091 294 510 276.091 510 254V40Z" fill="#202022"/>
                        </g>
                        <defs>
                          <filter id="filter0_d_1040_2067" x="0" y="0" width="522" height="306" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dx="12" dy="12"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1040_2067"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1040_2067" result="shape"/>
                          </filter>
                        </defs>
                      </svg>
                      <div className='absolute left-0 top-0 pl-[24px] sm:pl-[32px] md:pl-[36px] lg:pl-[40px] xl:pl-[48px] 2xl:pl-[65px]  pt-[24px] sm:pt-[32px] md:pt-[36px] lg:pt-[40px] xl:pt-[48px] 2xl:pt-[60px] pr-[24px] sm:pr-[32px] md:pr-[36px] lg:pr-[40px] xl:pr-[48px] 2xl:pr-[62px] pb-[24px] sm:pb-[32px] md:pb-[36px] lg:pb-[40px] xl:pb-[48px] 2xl:pb-[60px]'>
                        <h1 className='stepone text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px]'>Step 2</h1>
                        <p className='presons text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] pt-[13px] sm:pt-[14px] md:pt-[15px] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[24px]'>Token Launch & Meme Expansion$EXTAI launches on Raydium (Solana). Viral meme campaigns and influencer collaborations for visibility.</p>
                      </div>
                      </div>
                      
                    </div>
                    <div className='flex justify-center items-center gap-[36px] sm:gap-[40px] md:gap-[48px] lg:gap-[64px] xl:gap-[96px] 2xl:gap-[130px]'>
                      <div className='relative flex-1'>
                      <svg xmlns="http://www.w3.org/2000/svg" className='w-full' viewBox="0 0 522 306" fill="none">
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
                      <div className='absolute left-0 top-0 pl-[20px] sm:pl-[24px] md:pl-[32px] lg:pl-[36px] xl:pl-[40px] 2xl:pl-[44px]  pt-[24px] sm:pt-[32px] md:pt-[36px] lg:pt-[40px] xl:pt-[48px] 2xl:pt-[60px] pr-[24px] sm:pr-[32px] md:pr-[36px] lg:pr-[40px] xl:pr-[48px] 2xl:pr-[62px] pb-[24px] sm:pb-[32px] md:pb-[36px] lg:pb-[40px] xl:pb-[48px] 2xl:pb-[60px]'>
                        <h1 className='stepone text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px]'>Step 3</h1>
                        <p className='presons text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] pt-[13px] sm:pt-[14px] md:pt-[15px] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[24px]'>I Meme GrowthRewards for meme creators.Regular meme campaigns to boost excitement.</p>
                      </div>
                      </div>
                      <div className='flex-1 sm:block hidden'></div>
                    </div>
                    <div className='flex justify-center items-center gap-[36px] sm:gap-[40px] md:gap-[48px] lg:gap-[64px] xl:gap-[96px] 2xl:gap-[130px]'>
                    <div className='flex-1 sm:block hidden'></div>
                      <div className='relative flex-1'>
                      <svg xmlns="http://www.w3.org/2000/svg" className='w-full' viewBox="0 0 522 306" fill="none">
                        <g filter="url(#filter0_d_1040_2067)">
                          <path d="M510 40C510 17.9086 492.091 0 470 0H57.8226C35.7312 0 17.8226 17.9086 17.8226 40V191.787C17.8226 196.709 13.8329 200.699 8.91129 200.699C3.98972 200.699 0 204.688 0 209.61V230.495C0 235.417 3.98972 239.406 8.91129 239.406C13.8329 239.406 17.8226 243.396 17.8226 248.318V266.703C17.8226 281.779 30.0438 294 45.1194 294H470C492.091 294 510 276.091 510 254V40Z" fill="#202022"/>
                        </g>
                        <defs>
                          <filter id="filter0_d_1040_2067" x="0" y="0" width="522" height="306" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dx="12" dy="12"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1040_2067"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1040_2067" result="shape"/>
                          </filter>
                        </defs>
                      </svg>
                      <div className='absolute left-0 top-0 pl-[24px] sm:pl-[32px] md:pl-[36px] lg:pl-[40px] xl:pl-[48px] 2xl:pl-[65px] pt-[24px] sm:pt-[32px] md:pt-[36px] lg:pt-[40px] xl:pt-[48px] 2xl:pt-[60px] pr-[24px] sm:pr-[32px] md:pr-[36px] lg:pr-[40px] xl:pr-[48px] 2xl:pr-[62px] pb-[24px] sm:pb-[32px] md:pb-[36px] lg:pb-[40px] xl:pb-[48px] 2xl:pb-[60px]'>
                        <h1 className='stepone text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px]'>Step 4</h1>
                        <p className='presons text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] pt-[13px] sm:pt-[14px] md:pt-[15px] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[24px]'>Meme Dominance$EXTAI becomes a top meme coin globally. AI-driven content and continuous community rewards.</p>
                      </div>
                      </div>
                      
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pagetow;