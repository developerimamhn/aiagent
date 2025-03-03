import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards,Autoplay,Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import Image from 'next/image';
import image1 from './image/dff030388a8640ddfbc3e7588ae56077.gif';


const Pagefive = () => {
    useEffect(() => {
        setTimeout(() => {
          document.querySelectorAll(".swiper-slide-shadow").forEach(el => el.remove());
        }, 100);
      }, []);

      const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let animationId;

    const startScrolling = () => {
      if (slider) {
        slider.style.animation = "scroll 30s linear infinite";
      }
    };

    startScrolling();

    return () => cancelAnimationFrame(animationId);
  }, []);

  


    return (
        <div className='relative !sbodycolor' id="Tokenomics">
            <div className='container mx-auto py-[32px] sm:py-[36px] md:py-[40px] lg:py-[48px] xl:py-[64px] 2xl:py-[100px] px-[24px] sm:px-[36px] md:px-[40px] lg:px-[48px] xl:px-[64px] 2xl:px-[100px]'>
                <h2 className=' tokengroup text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] xl:text-[64px] 2xl:text-[80px]'>TOKENOMICS</h2>
                <h3 className=' tokenmonygrop text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[61px]'>100.000.000</h3>
                <div className='flex justify-center items-center sm:flex-row flex-col sm:gap-0 gap-[20px] pt-[40px] sm:pt-[60px] md:pt-[80px] lg:pt-[110px] xl:pt-[130px] 2xl:pt-[150px]'>
                  <div className='flex justify-center items-center flex-1'>
                    <Image src={image1} alt='loading' className='h-full bg-lightgray bg-cover bg-no-repeat bg-center mix-blend-exclusion filter brightness-80 contrast-120 rounded-full'/>
                  </div>
                  <div className='flex-1 '>
                    <svg className='w-full ' viewBox="0 0 618 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_997_575)">
                    <rect y="0.5" width="618" height="26" rx="13" fill="#9C9B98"/>
                    <rect y="0.5" width="286" height="26" rx="13" fill="#FF5C00"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_997_575">
                    <rect y="0.5" width="618" height="26" rx="13" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                    <p className=' mypathes text-[14px] sm:text-[15px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[30px] pt-[7px] sm:pt-[8px] md:pt-[9px] lg:pt-[10px] xl:pt-[11px] 2xl:pt-[12px] pb-[14px] sm:pb-[15px] md:pb-[16px] lg:pb-[20px] xl:pb-[24px] 2xl:pb-[32px]'>25% — PRE AI</p>

                    <svg className='w-full ' viewBox="0 0 618 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_997_579)">
                    <rect y="0.5" width="618" height="26" rx="13" fill="#9C9B98"/>
                    <rect y="0.5" width="230" height="26" rx="13" fill="#8361E5"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_997_579">
                    <rect y="0.5" width="618" height="26" rx="13" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>

                    <p className=' mypathes text-[14px] sm:text-[15px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[30px] pt-[7px] sm:pt-[8px] md:pt-[9px] lg:pt-[10px] xl:pt-[11px] 2xl:pt-[12px] pb-[14px] sm:pb-[15px] md:pb-[16px] lg:pb-[20px] xl:pb-[24px] 2xl:pb-[32px]'>20% — AI Marketing</p>
                    <svg className='w-full ' viewBox="0 0 618 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_997_583)">
                    <rect y="0.5" width="618" height="26" rx="13" fill="#9C9B98"/>
                    <rect y="0.5" width="156" height="26" rx="13" fill="#E561C4"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_997_583">
                    <rect y="0.5" width="618" height="26" rx="13" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>

                    <p className=' mypathes text-[14px] sm:text-[15px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[30px] pt-[7px] sm:pt-[8px] md:pt-[9px] lg:pt-[10px] xl:pt-[11px] 2xl:pt-[12px] pb-[14px] sm:pb-[15px] md:pb-[16px] lg:pb-[20px] xl:pb-[24px] 2xl:pb-[32px]'>15% — AI Rewards</p>
                    <svg className='w-full ' viewBox="0 0 618 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_997_587)">
                    <rect y="0.5" width="618" height="26" rx="13" fill="#9C9B98"/>
                    <rect y="0.5" width="333" height="26" rx="13" fill="#39CEF3"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_997_587">
                    <rect y="0.5" width="618" height="26" rx="13" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>

                    <p className=' mypathes text-[14px] sm:text-[15px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[30px] pt-[7px] sm:pt-[8px] md:pt-[9px] lg:pt-[10px] xl:pt-[11px] 2xl:pt-[12px] pb-[14px] sm:pb-[15px] md:pb-[16px] lg:pb-[20px] xl:pb-[24px] 2xl:pb-[32px]'>30% — AI Pool</p>
                    <svg className='w-full ' viewBox="0 0 618 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_997_591)">
                    <rect y="0.5" width="618" height="26" rx="13" fill="#9C9B98"/>
                    <rect y="0.5" width="104" height="26" rx="13" fill="#9DDB63"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_997_591">
                    <rect y="0.5" width="618" height="26" rx="13" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>

                    <p className=' mypathes text-[14px] sm:text-[15px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[30px] pt-[7px] sm:pt-[8px] md:pt-[9px] lg:pt-[10px] xl:pt-[11px] 2xl:pt-[12px]'>10% — Exchanges</p>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Pagefive;