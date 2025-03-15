'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
// import Link from 'next/link';
// import image1 from './image/image1.gif';
import image2 from './image/image13.png';
import image3 from './image/image14.gif';
import image4 from './image/image15.png';
import image22 from './image/image22.png';


const Page = () => {
    const heroRef = useRef(null);
    const textRef = useRef(null);
    const buttonRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        gsap.from(heroRef.current, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out',
        });

        gsap.from(textRef.current, {
            opacity: 0,
            y: 20,
            duration: 1,
            delay: 0.3,
            ease: 'power3.out',
        });

        gsap.from(buttonRef.current, {
            opacity: 0,
            scale: 0.8,
            duration: 0.8,
            delay: 0.6,
            ease: 'power3.out',
        });

        gsap.from(swiperRef.current, {
            opacity: 0,
            y: 30,
            duration: 1,
            delay: 0.9,
            ease: 'power3.out',
        });

    }, []);


    useEffect(() => {
        setTimeout(() => {
          document.querySelectorAll('.swiper-slide-shadow').forEach(el => el.remove());
        },);
      }, []);

      const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let animationId;

    const startScrolling = () => {
      if (slider) {
        slider.style.animation = 'scroll 20s linear infinite';
      }
    };

    startScrolling();

    return () => cancelAnimationFrame(animationId);
  }, []);

  const [time, setTime] = useState({
    days: 0,
    hours: 9,
    minutes: 33,
    seconds: 30,
  });
  const [timeDone, setTimeDone] = useState(false);

  useEffect(() => {
    if (timeDone) return;

    const interval = setInterval(() => {
      setTime((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds -= 1;
        } else if (minutes > 0) {
          minutes -= 1;
          seconds = 59;
        } else if (hours > 0) {
          hours -= 1;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days -= 1;
          hours = 23;
          minutes = 59;
          seconds = 59;
        } else {
          setTimeDone(true);
          clearInterval(interval);
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timeDone]);

    return (
        <>
        <div className='backgroundndpadding  py-[12px] sm:py-[13px] md:py-[14px] lg:py-[15px] xl:py-[16px] 2xl:py-[20px] px-[24px] sm:px-[32px] md:px-[36px] lg:px-[40px] xl:px-[48px] 2xl:px-[67px] relative'>
        
        
        <div className='flex items-center justify-between'>
        <div>
            <svg width="49" height="14" viewBox="0 0 49 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7.04347" cy="6.9695" r="5.97337" fill="#FF007A" stroke="#334780" stroke-width="0.79645"/>
            <circle cx="24.565" cy="6.9695" r="5.97337" fill="#FDB215" stroke="#334780" stroke-width="0.79645"/>
            <circle cx="42.0874" cy="6.9695" r="5.97337" fill="#97E601" stroke="#334780" stroke-width="0.79645"/>
            </svg>
        </div>
        <div className='buypadidnsectoin text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]'>$EXTAIL PRESALE</div>
        <div className='opacity-0 pointer-event-none selector-none'>
            <svg width="49" height="14" viewBox="0 0 49 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7.04347" cy="6.9695" r="5.97337" fill="#FF007A" stroke="#334780" stroke-width="0.79645"/>
            <circle cx="24.565" cy="6.9695" r="5.97337" fill="#FDB215" stroke="#334780" stroke-width="0.79645"/>
            <circle cx="42.0874" cy="6.9695" r="5.97337" fill="#97E601" stroke="#334780" stroke-width="0.79645"/>
            </svg>
        </div>
        </div>
        <div className='flex justify-center flex-col xl:gap-0 gap-[2px] lg:gap-[20px] mt-[11px] sm:mt-[12px] md:mt-[13px] lg:mt-[14px] xl:mt-[15px] 2xl:mt-[16px] p-[13px] sm:p-[14px] md:p-[15px] lg:p-[16px] xl:p-[20px] 2xl:p-[22.5px] bg-[#EFF2F9] rounded-[10px] md:rounded-[12px] xl:rounded-[15.929px] mb-[13px] sm:mb-[14px] md:mb-[15px] lg:mb-[16px] xl:mb-[20px] 2xl:mb-[24px] border-[1px] border-[#646F82] relative'>

        <h1 className='flex justify-center items-center bueyextat text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px]'>BUY $EXTAI PRESALE</h1>

            <div className='flex justify-center items-center gap-[10px] sm:gap-[12px] xl:gap-[15px] pt-[12px] sm:pt-[13px] md:pt-[14px] lg:pt-[15px] xl:pt-[16px] 2xl:pt-[19px] pb-[7px] sm:pb-[8px] md:pb-[9px] lg:pb-[10px] xl:pb-[11px] 2xl:pb-[12.5px]'>

            <h1 className=''>
            <h1 className='timeing text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[48px]'>
                {String(time.days).padStart(2, '0')}
            </h1>
            </h1>
            <p className='timeing text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[48px]'>:</p>
            <h1 className=''>
            
            <h1 className='timeing text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[48px]'>
                {String(time.hours).padStart(2, '0')}
            </h1>
            </h1>
            <p className='timeing text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[48px]'>:</p>
            <h1 className=''>
            <h1 className='timeing text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[48px]'>
                {String(time.minutes).padStart(2, '0')}
            </h1>
            </h1>
            <p className='timeing text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[48px]'>:</p>
            <h1 className=''>    
            <h1 className='timeing text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[48px]'>
                {String(time.seconds).padStart(2, '0')}
            </h1>
            </h1>
            </div>
            {/* minutesecton */}
        <div className='flex justify-between items-center'>
            <h1 className='flex flex-col justify-center items-center'>
            <h2 className='dayingstyline text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]'>Days</h2>
            </h1>
            <h1 className='flex flex-col justify-center items-center'>
            <h2 className='dayingstyline text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]'>Hours</h2>
            </h1>
            <h1 className='flex flex-col justify-center items-center'>
            <h2 className='dayingstyline text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]'>Minutes</h2>
            </h1>
            <h1 className='flex flex-col justify-center items-center'>
            <h2 className='dayingstyline text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]'>Seconds</h2>
            </h1>
            </div>
            
        
        </div>
        <div className='overflow-hidden'>
        <div className='ratingre text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] pb-[11px] sm:pb-[12px] md:pb-[13px] lg:pb-[14px] xl:pb-[15px] 2xl:pb-[16.3px]'>
        $EXTAIL Sold: 3.805.500
    </div>

        <div className='lineone  p-[1.41px] relative mb-[12px] sm:mb-[13px] md:mb-[14px] lg:mb-[14px] xl:mb-[15px] 2xl:mb-[16px]'>
                <h3 className='untilprice text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] py-[6px] sm:py-[7px] xl:py-[9.557px]'>UNTIL PRICE RISE</h3>
        </div>
        <div className='flex justify-between items-center pb-[13px] sm:pb-[14px] md:pb-[15px] lg:pb-[16px] xl:pb-[20px] 2xl:pb-[24px]'>
            <div className='flex gap-[4px] lg:gap-[6px] items-center countering text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]'>Purchased $$EXTAIL= 0 <svg xmlns='http://www.w3.org/2000/svg' className='w-[13px] sm:w-[14px] md:w-[15px] lg:w-[16px] xl:w-[20px] 2xl:w-[22px]' viewBox='0 0 26 25' fill='none'>
            <path d='M12.5054 8.21667V9.20915M12.5054 11.6904V16.1566M12.5054 22.1115C17.9868 22.1115 22.4304 17.6679 22.4304 12.1866C22.4304 6.70526 17.9868 2.26175 12.5054 2.26175C7.02408 2.26175 2.58057 6.70526 2.58057 12.1866C2.58057 17.6679 7.02408 22.1115 12.5054 22.1115Z' stroke='white' stroke-width='1.78648' stroke-linecap='round' stroke-linejoin='round'/>
            </svg></div>
            <div className='flex gap-[4px] lg:gap-[6px] items-center countering text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]'>Stakeable $EXTAIL= 0 <svg xmlns='http://www.w3.org/2000/svg' className='w-[13px] sm:w-[14px] md:w-[15px] lg:w-[16px] xl:w-[20px] 2xl:w-[22px]' viewBox='0 0 26 25' fill='none'>
            <path d='M12.5054 8.21667V9.20915M12.5054 11.6904V16.1566M12.5054 22.1115C17.9868 22.1115 22.4304 17.6679 22.4304 12.1866C22.4304 6.70526 17.9868 2.26175 12.5054 2.26175C7.02408 2.26175 2.58057 6.70526 2.58057 12.1866C2.58057 17.6679 7.02408 22.1115 12.5054 22.1115Z' stroke='white' stroke-width='1.78648' stroke-linecap='round' stroke-linejoin='round'/>
            </svg></div>
        </div>
        
        <div className='flex justify-center items-center gap-[12px] md:gap-[16px] xl:gap-[21px] md:px-[16px] lg:px-[20px] xl:px-[24px] 2xl:px-[28px] sm:flex-row flex-col'>
            <button className='flex-1 borderlinisinsassing w-full py-[12px] sm:py-[13px] md:py-[14px] lg:py-[15px] xl:py-[16px] 2xl:py-[20px] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] cursor-pointer'>
                BUY WITH SOLANA
            </button>
            <button className='flex-1 w-full py-[12px] sm:py-[13px] md:py-[14px] lg:py-[15px] xl:py-[16px] 2xl:py-[20px] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] borderlinisinsa cursor-pointer'>
                Buy with USDC
            </button>
        </div>
        <div className='md:px-[16px] lg:px-[20px] xl:px-[24px] 2xl:px-[32px]'>
        <button className='flex-1 borderlinisinsassing w-full py-[12px] sm:py-[13px] md:py-[14px] lg:py-[15px] xl:py-[16px] 2xl:py-[20px] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] cursor-pointer !text-[#000] mt-[12px] sm:mt-[13px] md:mt-[14px] lg:mt-[15px] xl:mt-[16px] 2xl:mt-[18px] '>
            connect wallet
        </button>
        </div>
        </div>
        <div className='donthavwallet pt-[13px] sm:pt-[14px] md:pt-[15px] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[23.16px] pb-[4px] md:pb-[5px] lg:pb-[6px] xl:pb-[7px] 2xl:pb-[8px] cursor-pointer !text-[#353535] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px]'>
        Don&apos;t have a wallet?
        </div>

        <div className='flex items-center justify-center gap-[8px] md:gap-[10px] xl:gap-[12px] herosectionpowerby '><span className='!text-[461B0F] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] !text-[#461B0F]'>Powered by</span>
        
        <Image className='w-[14px] sm:w-[15px] md:w-[16px] lg:w-[20px] xl:w-[24px] 2xl:w-[26px] aspect-square' src={image22} alt=''/>
        <span className='text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px]'>PresaleShild</span>
        </div>
    </div>
    <div className='truestanssafety text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[23px] pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px] pb-[7] md:pb-[9px] xl:pb-[12px]'>trust and safety audits</div>
    <div className='flex justify-center items-center gap-[10px] md:gap-[14px] xl:gap-[19]'>

    <div className='svgcolokrchange duration-300 h-[32px] sm:h-[36px] md:h-[40px] lg:h-[48px] xl:h-[64px] 2xl:h-[70px] w-[32px] sm:w-[36px] md:w-[40px] lg:w-[48px] xl:w-[64px] 2xl:w-[70px] cursor-pointer group !rounded-[5px] !sm:rounded-auto'>
    <svg className="w-[15px] sm:w-[16px] md:w-[20px] lg:w-[24px] xl:w-[32px] 2xl:w-[36px]" viewBox="0 0 44 39" fill="none" xmlns="http://www.w3.org/2000/svg">
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

    <div className='svgcolokrchange duration-300 h-[32px] sm:h-[36px] md:h-[40px] lg:h-[48px] xl:h-[64px] 2xl:h-[70px] w-[32px] sm:w-[36px] md:w-[40px] lg:w-[48px] xl:w-[64px] 2xl:w-[70px] cursor-pointer group !rounded-[5px] !sm:rounded-auto'>
    <svg className="w-[15px] sm:w-[16px] md:w-[20px] lg:w-[24px] xl:w-[32px] 2xl:w-[36px]" viewBox="0 0 35 37" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </>
    );
};

export default Page;