"use client";

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import backgroundimage from './image/backgronhero.gif';


const Footer = () => {
    useEffect(() => {
        const ctx = gsap.context(() => {
          gsap.from(".section4", {
            y: 300,
            duration: 2,
            scrollTrigger: {
              trigger: ".section4",
              start: "top 80%",
              end: "top 50%",
              scrub: 2,
            },
          });
        });
      
        ScrollTrigger.refresh();
        return () => ctx.revert();
      }, []);
    return (
        <div className='relative backgroundfooter overflow-hidden sm:section4' id='Staking'>
          <div className='voerflow w-full h-full absolute top-0 left-0 z-[-2]' ></div>
          <Image src={backgroundimage} alt="Background" objectFit="cover"  className='object-cover w-full h-full absolute top-0 left-0 z-[-3]'/>
            <div className='container mx-auto  mb-[9px] md:pb-[10px] lg:pb-[11px] xl:pb-[12px] 2xl:pb-[13px] pt-[32px] sm:pt-[36px] md:pt-[40px] lg:pt-[48px] xl:pt-[64px] 2xl:pt-[72px] sm:px-0 px-[24px]'>
                <h2 className='footerites text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px]'>Extraterrestrial<br/>
                Artificial Intelligence</h2>
                <p className='alwaysdow text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[26px] pt-[5px] lg:pt-[8px] pb-[14px] sm:pb-[15px] md:pb-[16px] lg:pb-[20px] xl:pb-[24px] 2xl:pb-[29px]'>Always do your own research about the best crypto to buy, best ICO, or new <br className='lg:block hidden'/> cryptocurrency. Nothing here is financial advice. This is an AI Agent meme coin.<br className='lg:block hidden'/>
                © 2025 MIND of Pepe. All rights reserved.</p>
                <div className='flex justify-center items-center gap-[10px] md:gap-[13px] xl:gap-[18px]'>
                <div className='svgcolokrchange duration-300 h-[24px] sm:h-[32px] md:h-[36px] lg:h-[40px] xl:h-[48px] 2xl:h-[60px] w-[24px] sm:w-[32px] md:w-[36px] lg:w-[40px] xl:w-[48px] 2xl:w-[60px] cursor-pointer group'>
                        <svg className="w-[14px] sm:w-[15px] md:w-[16px] lg:w-[17px] xl:w-[22px] 2xl:w-[27px]" viewBox="0 0 44 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1017_469)">
                        <g clip-path="url(#clip1_1017_469)">
                        <g clip-path="url(#clip2_1017_469)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M25.2228 29.1566L19.4375 34.0048L17.8017 34.2265L14.1415 21.6142L1.26562 17.3851L40.9056 2.27533L42.7754 2.31716L36.5299 36.2889L25.2228 29.1566ZM35.137 8.65887L16.9734 19.5478L19.0652 28.4705L19.6382 28.3409L21.8218 21.4552L36.3376 8.8011L35.137 8.65887Z" className='fill-black group-hover:fill-white'/>
                        </g>
                        </g>
                        </g>
                        <defs>
                        <clipPath id="clip0_1017_469">
                        <rect width="43.4709" height="35.7295" fill="white" transform="translate(0.5 0.903992)"/>
                        </clipPath>
                        <clipPath id="clip1_1017_469">
                        <rect width="43.4709" height="35.7295" fill="white" transform="translate(0.5 0.903992)"/>
                        </clipPath>
                        <clipPath id="clip2_1017_469">
                        <rect width="43.4709" height="35.7083" fill="white" transform="translate(0.5 0.914612)"/>
                        </clipPath>
                        </defs>
                        </svg>

                        </div>
                        <div className='svgcolokrchange duration-300 h-[24px] sm:h-[32px] md:h-[36px] lg:h-[40px] xl:h-[48px] 2xl:h-[60px] w-[24px] sm:w-[32px] md:w-[36px] lg:w-[40px] xl:w-[48px] 2xl:w-[60px] cursor-pointer group !rounded-[9.37px] !sm:rounded-auto'>
                        <svg className="w-[14px] sm:w-[15px] md:w-[16px] lg:w-[17px] xl:w-[22px] 2xl:w-[27px]" viewBox="0 0 35 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1017_476)">
                        <g clip-path="url(#clip1_1017_476)">
                        <path d="M20.3598 15.6468L32.5579 1.46747H29.6673L19.0758 13.7791L10.6163 1.46747H0.859375L13.6517 20.0848L0.859375 34.9539H3.75009L14.9351 21.9524L23.8689 34.9539H33.6259L20.3598 15.6468ZM16.4007 20.2489L15.1045 18.3949L4.79165 3.64354H9.23161L17.5541 15.5485L18.8504 17.4023L29.6687 32.8769H25.2287L16.4007 20.2489Z" className='fill-black group-hover:fill-white'/>
                        </g>
                        </g>
                        <defs>
                        <clipPath id="clip0_1017_476">
                        <rect width="34.2408" height="35.7295" fill="white" transform="translate(0.5 0.598083)"/>
                        </clipPath>
                        <clipPath id="clip1_1017_476">
                        <rect width="34.2408" height="35.7295" fill="white" transform="translate(0.5 0.598083)"/>
                        </clipPath>
                        </defs>
                        </svg>


                        </div>
                </div>
                <h3 className='extreactonasd text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] pt-[32px] sm:pt-[36px] md:pt-[40px] lg:pt-[48px] xl:pt-[64px] 2xl:pt-[83px]'>© 2025 Extraterrestrial Artificial Intelligence. All rights reserved.</h3>
            </div>
        </div>
    );
};

export default Footer;