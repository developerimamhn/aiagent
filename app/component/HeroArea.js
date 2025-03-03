'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

import image1 from './image/image1.gif';
import image2 from './image/image13.png';
import image3 from './image/image14.gif';



const HeroArea = () => {
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
// ref={heroRef}
    return (
        <div  className='relative' id='Home'>
            <div className='container px-[24px] sm:px-[0] mx-auto pt-[64px] sm:pt-[72px] md:pt-[80px] lg:pt-[96px] xl:pt-[128px] 2xl:pt-[154px]'>
                <div className='flex justify-between items-start sm:flex-row flex-col sm:gap-[0] gap-[40px] sm:pb-[0] pb-[25px]'>
                  <div className='flex-1'>
                        <span className='savestaking text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]'>487% Staking rewards</span>
                        <h3 className='elonmuxcoin text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] xl:text-[64px] 2xl:text-[72px] pt-[13px] sm:pt-[14px] md:pt-[15px] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[24px] pb-[11px] sm:pb-[12px] md:pb-[13px] lg:pb-[14px] xl:pb-[15px] 2xl:pb-[16px]'>Elon eXtraterrestrial AI</h3>
                        <p className='extaithefutere text-[14px] sm:text-[15px] md:text-[16px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px]'> $EXTAI &ndash; The Future is Now! Ever wondered if Elon is more than just human? Maybe he&rsquo;s an extraterrestrial AI! $EXTAI is not just a token &ndash; it&rsquo;s the first step into a new era of technology. Get in early and claim your piece of the future!</p>
                        <div className='flex items-center gap-[11px] sm:gap-[12px] md:gap-[13px] lg:gap-[14px] xl:gap-[15px] 2xl:gap-[16px] mt-[13px] sm:mt-[14px] md:mt-[15px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[24px] mb-[20px] sm:mb-[24px] md:mb-[32px] lg:mb-[36px] xl:mb-[40px] 2xl:mb-[43px]'>
                        <button className='w-[110px] sm:w-[120px] xl:w-[150px] 2xl:w-[190px] py-[10px] sm:py-[11px] md:py-[12px] lg:py-[13px] xl:py-[14px] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[19px] borderlinisinsasss cursor-pointer'>
                          Join us
                        </button>

                        <button className='w-[110px] sm:w-[120px] xl:w-[150px] 2xl:w-[190px] py-[10px] sm:py-[11px] md:py-[12px] lg:py-[13px] xl:py-[14px] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[19px] borderlinisinsa cursor-pointer'>
                        Buy with Crypto
                      </button>

                      </div>
                    <div className='w-full pr-[32px] sm:pr-[36px] md:pr-[40px] lg:pr-[48px] xl:pr-[64px] 2xl:pr-[95px] relative'>
                      <Image src={image2} alt=''/>
                      <Image className='absolute top-[18%] right-[10%] w-[60px] lg:w-[80px] xl:w-[120px] 2xl:w-[134px] -z-[1]' src={image3} alt=''/>
                      <Image className='absolute top-[0%] left-[0%] w-[60px] lg:w-[80px] xl:w-[120px] 2xl:w-[134px] -z-[1]' src={image3} alt=''/>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <div className=' sm:pl-[40px] md:pl-[70px] lg:pl-[90px] xl:pl-[120px] 2xl:pl-[151px]'>
                      <div className='backgroundndpadding pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px]  px-[14px] sm:px-[15px] md:px-[16px] lg:px-[20px] xl:px-[24px] 2xl:px-[32px] pb-[15px] sm:pb-[16px] md:pb-[20px] lg:pb-[24px] xl:pb-[32px] 2xl:pb-[35px]'>
                          <div className='buypadidnsectoin text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[36px] 2xl:text-[41px]'>Buy  MIND presale now!</div>
                          <div className='flex justify-center xl:gap-0 gap-[2px] lg:gap-[20px] mt-[11px] sm:mt-[12px] md:mt-[13px] lg:mt-[14px] xl:mt-[15px] 2xl:mt-[16px] pb-[7px] sm:pb-[8px] md:pb-[9px] lg:pb-[10px] xl:pb-[11px] 2xl:pb-[12px] pt-[5px] md:pt-[6px]  2xl:pt-[7.44px] bg-[#000001] rounded-[5.955px] mb-[11px] sm:mb-[12px] md:mb-[13px] lg:mb-[14px] xl:mb-[15px] 2xl:mb-[17px]'>

                              <h1 className='flex flex-col justify-center items-center gap-[5px] xl:gap-[7.44px] w-[70px] sm:w-[80px] md:w-[90px] lg:w-[100px]  xl:w-[117px]'>
                                <h2 className='dayingstyline text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]'>Days</h2>
                                <h1 className='timeing text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[48px]'>
                                  {String(time.days).padStart(2, '0')}
                                </h1>
                              </h1>
                              <h1 className='flex flex-col justify-center items-center gap-[5px] xl:gap-[7.44px]  w-[70px] sm:w-[80px] md:w-[90px] lg:w-[100px]  xl:w-[117px]'>
                                <h2 className='dayingstyline text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]'>hours</h2>
                                <h1 className='timeing text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[48px]'>
                                  {String(time.hours).padStart(2, '0')}
                                </h1>
                              </h1>
                              <h1 className='flex flex-col justify-center items-center gap-[5px] xl:gap-[7.44px]  w-[70px] sm:w-[80px] md:w-[90px] lg:w-[100px]  xl:w-[117px]'>
                                <h2 className='dayingstyline text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]'>minutes</h2>
                                <h1 className='timeing text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[48px]'>
                                  {String(time.minutes).padStart(2, '0')}
                                </h1>
                              </h1>
                              <h1 className='flex flex-col justify-center items-center gap-[5px] xl:gap-[7.44px]  w-[70px] sm:w-[80px] md:w-[90px] lg:w-[100px]  xl:w-[117px]'>
                                <h2 className='dayingstyline text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]'>seconds</h2>
                                <h1 className='timeing text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[48px]'>
                                  {String(time.seconds).padStart(2, '0')}
                                </h1>
                              </h1>
                            
                          </div>
                          <div className='overflow-hidden'>
                          <div className='ratingre text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] pb-[11px] sm:pb-[12px] md:pb-[13px] lg:pb-[14px] xl:pb-[15px] 2xl:pb-[17px]'>
                          USDT Raised: <span> 4,595,727.56 &frasl; 5,105,064</span>
                        </div>

                            <div className='lineone h-[14px] sm:h-[15px] md:h-[16px] lg:h-[20px] xl:h-[24px] 2xl:h-[32px] p-[1.41px] relative mb-[10px] sm:mb-[11px] md:mb-[12px] lg:mb-[13px] xl:mb-[14px] 2xl:mb-[15px]'>
                              <div className='linetwo h-full w-8/9'></div>
                                  <h3 className='untilprice text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] absolute left-1/2 top-[54%] transform -translate-x-1/2 -translate-y-1/2'>UNTIL PRICE RISE</h3>
                            </div>
                            <div className='flex justify-between items-center pb-[13px] sm:pb-[14px] md:pb-[15px] lg:pb-[16px] xl:pb-[20px] 2xl:pb-[24px]'>
                                <div className='flex gap-[4px] lg:gap-[6px] items-center countering text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px]'>My purchased = 0 <svg xmlns='http://www.w3.org/2000/svg' className='w-[13px] sm:w-[14px] md:w-[15px] lg:w-[16px] xl:w-[20px] 2xl:w-[25px]' viewBox='0 0 26 25' fill='none'>
                                <path d='M12.5054 8.21667V9.20915M12.5054 11.6904V16.1566M12.5054 22.1115C17.9868 22.1115 22.4304 17.6679 22.4304 12.1866C22.4304 6.70526 17.9868 2.26175 12.5054 2.26175C7.02408 2.26175 2.58057 6.70526 2.58057 12.1866C2.58057 17.6679 7.02408 22.1115 12.5054 22.1115Z' stroke='white' stroke-width='1.78648' stroke-linecap='round' stroke-linejoin='round'/>
                                </svg></div>
                                <div className='flex gap-[4px] lg:gap-[6px] items-center countering text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px]'>My stakeable = 0 <svg xmlns='http://www.w3.org/2000/svg' className='w-[13px] sm:w-[14px] md:w-[15px] lg:w-[16px] xl:w-[20px] 2xl:w-[25px]' viewBox='0 0 26 25' fill='none'>
                                <path d='M12.5054 8.21667V9.20915M12.5054 11.6904V16.1566M12.5054 22.1115C17.9868 22.1115 22.4304 17.6679 22.4304 12.1866C22.4304 6.70526 17.9868 2.26175 12.5054 2.26175C7.02408 2.26175 2.58057 6.70526 2.58057 12.1866C2.58057 17.6679 7.02408 22.1115 12.5054 22.1115Z' stroke='white' stroke-width='1.78648' stroke-linecap='round' stroke-linejoin='round'/>
                              </svg></div>
                            </div>
                            <div className='grid grid-cols-3 items-center justify-between pb-[14px] sm:pb-[15px] md:pb-[16px] lg:pb-[20px] xl:pb-[24px] 2xl:pb-[32px]'>
                              {/* Left SVG */}
                              <svg className='w-full col-span-1 pr-[20px] sm:pr-[24px] md:pr-[32px] lg:pr-[36px] xl:pr-[40px] 2xl:pr-[48px]' height='3' viewBox='0 0 119 3' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <rect x='0.973633' y='0.677185' width='117.893' height='1.48873' fill='white' />
                              </svg>

                              {/* Center Text */}
                              <div className='col-span-1 mindcllinges text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]'>
                                1  MIND =  0.0032273
                              </div>

                              {/* Right SVG */}
                              <svg className='w-full col-span-1 pl-[20px] sm:pl-[24px] md:pl-[32px] lg:pl-[36px] xl:pl-[40px] 2xl:pl-[48px]' height='3' viewBox='0 0 119 3' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <rect x='0.973633' y='0.677185' width='117.893' height='1.48873' fill='white' />
                              </svg>
                          </div>
                          <div className='flex justify-center items-center gap-[12px] md:gap-[16px] xl:gap-[21px]'>
                              <button className='flex-1 borderlinisinsassing w-full py-[12px] sm:py-[13px] md:py-[14px] lg:py-[15px] xl:py-[16px] 2xl:py-[20px] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[28px] cursor-pointer'>
                              Buy with Crypto
                            </button>
                            <button className='flex-1 w-full py-[12px] sm:py-[13px] md:py-[14px] lg:py-[15px] xl:py-[16px] 2xl:py-[20px] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[28px] borderlinisinsa cursor-pointer'>
                              Buy with Crypto
                            </button>
                          </div>
                          </div>
                          <div className='donthavwallet pt-[13px] sm:pt-[14px] md:pt-[15px] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[24px] pb-[12px] sm:pb-[13px] md:pb-[14px] lg:pb-[15px] xl:pb-[16px] 2xl:pb-[18px] cursor-pointer'>
                          Don&apos;t have a wallet?
                        </div>

                          <div className='flex items-center justify-center gap-[8px] md:gap-[10px] xl:gap-[12px] herosectionpowerby text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px]'>Powered by

                          <svg xmlns='http://www.w3.org/2000/svg' className='h-[13px] sm:h-[14px] md:h-[15px] lg:h-[16px] xl:h-[20px] 2xl:h-[25px]' viewBox='0 0 180 25' fill='none'>
                          <g clip-path='url(#clip0_943_587)'>
                            <path d='M25.2938 19.2307L21.2798 4.04241H24.2524L26.9862 16.128L30.1975 4.04241H33.2569L36.3814 16.128L39.1152 4.04241H42.1095L37.9869 19.2307H34.6889L31.6729 7.9697L28.5702 19.2307H25.2938ZM47.4911 19.4911C46.4063 19.4911 45.4443 19.2596 44.6054 18.7967C43.7664 18.3338 43.1082 17.683 42.6309 16.8439C42.1536 16.005 41.9149 15.0358 41.9149 13.9365C41.9149 12.8227 42.1463 11.8319 42.6092 10.9639C43.0865 10.0961 43.7375 9.42343 44.562 8.94605C45.4009 8.45425 46.3845 8.20835 47.5129 8.20835C48.5688 8.20835 49.5018 8.43976 50.3118 8.90264C51.1219 9.36553 51.7511 10.002 52.1995 10.812C52.6624 11.6076 52.8938 12.4972 52.8938 13.4808C52.8938 13.64 52.8866 13.8063 52.8722 13.9799C52.8722 14.1535 52.8649 14.3343 52.8504 14.5223H44.6705C44.7283 15.3613 45.0176 16.0195 45.5383 16.4968C46.0735 16.9742 46.7173 17.2128 47.4694 17.2128C48.0336 17.2128 48.5037 17.0898 48.8798 16.8439C49.2703 16.5836 49.5596 16.2509 49.7477 15.8458H52.5684C52.3659 16.5257 52.0259 17.1478 51.5486 17.7119C51.0857 18.2615 50.5071 18.6955 49.8128 19.0137C49.1329 19.3319 48.3591 19.4911 47.4911 19.4911ZM47.5129 10.4649C46.833 10.4649 46.2327 10.6602 45.7119 11.0507C45.1912 11.4268 44.8585 12.0054 44.7139 12.7865H50.0731C50.0298 12.0778 49.7694 11.5136 49.292 11.0941C48.8147 10.6746 48.2216 10.4649 47.5129 10.4649ZM60.9578 19.4911C60.1478 19.4911 59.439 19.3392 58.8315 19.0355C58.224 18.7317 57.7321 18.3049 57.3561 17.7553L57.0523 19.2307H54.5788V3.60846H57.3561V10.0092C57.7032 9.53193 58.1588 9.11238 58.723 8.75081C59.3016 8.38917 60.0466 8.20835 60.9578 8.20835C61.9704 8.20835 62.8745 8.45425 63.6701 8.94605C64.4657 9.43786 65.0949 10.1105 65.5578 10.9639C66.0207 11.8174 66.2521 12.7865 66.2521 13.8714C66.2521 14.9563 66.0207 15.9254 65.5578 16.7789C65.0949 17.6178 64.4657 18.2833 63.6701 18.7751C62.8745 19.2524 61.9704 19.4911 60.9578 19.4911ZM60.372 17.0609C61.2544 17.0609 61.9848 16.7644 62.5635 16.1713C63.1421 15.5783 63.4314 14.8117 63.4314 13.8714C63.4314 12.9312 63.1421 12.1573 62.5635 11.5498C61.9848 10.9423 61.2544 10.6384 60.372 10.6384C59.4752 10.6384 58.7375 10.9423 58.1589 11.5498C57.5947 12.1428 57.3127 12.9095 57.3127 13.8497C57.3127 14.7899 57.5947 15.5638 58.1589 16.1713C58.7375 16.7644 59.4752 17.0609 60.372 17.0609ZM73.116 19.4911C72.1179 19.4911 71.2138 19.3175 70.4038 18.9703C69.5937 18.6087 68.9428 18.059 68.451 17.3213C67.9592 16.5836 67.6988 15.6579 67.6699 14.544H70.4038C70.4182 15.2817 70.6569 15.9038 71.1198 16.4101C71.5971 16.9019 72.2625 17.1478 73.116 17.1478C73.926 17.1478 74.548 16.9235 74.9819 16.4751C75.4161 16.0267 75.6327 15.4625 75.6327 14.7827C75.6327 13.9871 75.3436 13.3868 74.765 12.9818C74.2008 12.5623 73.4704 12.3526 72.5735 12.3526H71.4453V10.0743H72.5952C73.3329 10.0743 73.9477 9.90074 74.4395 9.5536C74.9313 9.20645 75.1772 8.69291 75.1772 8.01304C75.1772 7.44893 74.9892 7.00051 74.6131 6.66781C74.2515 6.32065 73.7452 6.14707 73.0942 6.14707C72.3854 6.14707 71.8286 6.35682 71.4235 6.77631C71.033 7.19579 70.816 7.70929 70.7726 8.31684H68.0604C68.1183 6.91372 68.6029 5.80715 69.5141 4.9971C70.4399 4.18706 71.6333 3.78204 73.0942 3.78204C74.1357 3.78204 75.0109 3.97009 75.7194 4.34618C76.4427 4.7078 76.9852 5.19238 77.3468 5.79991C77.7234 6.40744 77.9109 7.08007 77.9109 7.81779C77.9109 8.67124 77.6726 9.39444 77.1951 9.98756C76.7319 10.5661 76.1535 10.9567 75.4594 11.1592C76.3127 11.3328 77.0068 11.7523 77.5426 12.4177C78.0776 13.0686 78.3451 13.8931 78.3451 14.8912C78.3451 15.7302 78.1426 16.4968 77.7376 17.1912C77.3326 17.8855 76.7393 18.4423 75.9585 18.8618C75.1917 19.2814 74.2442 19.4911 73.116 19.4911ZM80.4215 19.2307V4.04241H86.0411C87.2561 4.04241 88.2618 4.24492 89.0575 4.64994C89.8526 5.05496 90.4458 5.61187 90.8366 6.32065C91.2266 7.02944 91.4224 7.82502 91.4224 8.7074C91.4224 9.54635 91.2341 10.3202 90.8583 11.029C90.4817 11.7234 89.8959 12.2875 89.1009 12.7215C88.3051 13.1409 87.2852 13.3507 86.0411 13.3507H83.1988V19.2307H80.4215ZM83.1988 11.0941H85.8678C86.8369 11.0941 87.531 10.8843 87.951 10.4649C88.3843 10.0309 88.6018 9.4451 88.6018 8.7074C88.6018 7.9552 88.3843 7.36937 87.951 6.94988C87.531 6.51593 86.8369 6.29896 85.8678 6.29896H83.1988V11.0941ZM95.9175 19.4911C94.9917 19.4911 94.2318 19.3464 93.6393 19.0571C93.0461 18.7533 92.6052 18.3556 92.3153 17.8638C92.0261 17.3719 91.8819 16.8295 91.8819 16.2364C91.8819 15.2384 92.272 14.4283 93.0535 13.8063C93.8343 13.1843 95.0059 12.8733 96.5683 12.8733H99.3023V12.613C99.3023 11.8752 99.0923 11.3328 98.6732 10.9857C98.2532 10.6384 97.7324 10.4649 97.1108 10.4649C96.5466 10.4649 96.055 10.6023 95.6351 10.8772C95.2159 11.1375 94.9551 11.528 94.8543 12.0488H92.142C92.2144 11.2677 92.4745 10.5879 92.9228 10.0092C93.386 9.43061 93.9793 8.98947 94.7026 8.68566C95.4259 8.36743 96.2358 8.20835 97.1324 8.20835C98.6657 8.20835 99.8739 8.59166 100.756 9.35828C101.638 10.125 102.08 11.2098 102.08 12.613V19.2307H99.7147L99.454 17.4949C99.1357 18.0735 98.6873 18.5508 98.109 18.927C97.5449 19.303 96.8141 19.4911 95.9175 19.4911ZM96.5467 17.3213C97.3424 17.3213 97.9566 17.0609 98.3907 16.5402C98.839 16.0195 99.1215 15.3758 99.2373 14.6091H96.8724C96.1342 14.6091 95.6067 14.7465 95.2884 15.0214C94.9701 15.2817 94.8109 15.6072 94.8109 15.9978C94.8109 16.4172 94.9701 16.7427 95.2884 16.9742C95.6067 17.2056 96.0259 17.3213 96.5467 17.3213ZM105.064 24.0041L107.559 18.5147H106.908L102.721 8.46875H105.736L108.753 16.0412L111.898 8.46875H114.85L108.015 24.0041H105.064ZM116.014 19.2307V8.46875H118.466L118.705 9.92248C119.052 9.40169 119.508 8.98947 120.072 8.68566C120.65 8.36743 121.315 8.20835 122.068 8.20835C123.731 8.20835 124.91 8.85206 125.604 10.1394C125.995 9.54635 126.516 9.07621 127.167 8.72907C127.832 8.38192 128.556 8.20835 129.336 8.20835C130.74 8.20835 131.817 8.62782 132.57 9.46677C133.322 10.3058 133.698 11.5353 133.698 13.1554V19.2307H130.92V13.4158C130.92 12.49 130.74 11.7812 130.378 11.2894C130.031 10.7976 129.488 10.5517 128.751 10.5517C127.998 10.5517 127.391 10.8265 126.928 11.3762C126.48 11.9259 126.256 12.6925 126.256 13.6762V19.2307H123.478V13.4158C123.478 12.49 123.298 11.7812 122.936 11.2894C122.574 10.7976 122.017 10.5517 121.265 10.5517C120.527 10.5517 119.927 10.8265 119.464 11.3762C119.015 11.9259 118.791 12.6925 118.791 13.6762V19.2307H116.014ZM140.913 19.4911C139.828 19.4911 138.866 19.2596 138.027 18.7967C137.188 18.3338 136.53 17.683 136.052 16.8439C135.575 16.005 135.336 15.0358 135.336 13.9365C135.336 12.8227 135.568 11.8319 136.03 10.9639C136.508 10.0961 137.159 9.42343 137.984 8.94605C138.823 8.45425 139.806 8.20835 140.934 8.20835C141.99 8.20835 142.923 8.43976 143.733 8.90264C144.543 9.36553 145.172 10.002 145.621 10.812C146.084 11.6076 146.316 12.4972 146.316 13.4808C146.316 13.64 146.308 13.8063 146.294 13.9799C146.294 14.1535 146.286 14.3343 146.272 14.5223H138.092C138.15 15.3613 138.439 16.0195 138.96 16.4968C139.495 16.9742 140.139 17.2128 140.891 17.2128C141.455 17.2128 141.925 17.0898 142.302 16.8439C142.692 16.5836 142.981 16.2509 143.169 15.8458H145.99C145.787 16.5257 145.447 17.1478 144.97 17.7119C144.507 18.2615 143.928 18.6955 143.234 19.0137C142.554 19.3319 141.781 19.4911 140.913 19.4911ZM140.934 10.4649C140.254 10.4649 139.654 10.6602 139.134 11.0507C138.613 11.4268 138.28 12.0054 138.135 12.7865H143.495C143.452 12.0778 143.191 11.5136 142.713 11.0941C142.236 10.6746 141.643 10.4649 140.934 10.4649ZM148.001 19.2307V8.46875H150.452L150.669 10.2913C151.002 9.65484 151.479 9.14854 152.101 8.77248C152.738 8.39642 153.483 8.20835 154.336 8.20835C155.667 8.20835 156.701 8.62782 157.439 9.46677C158.177 10.3058 158.546 11.5353 158.546 13.1554V19.2307H155.768V13.4158C155.768 12.49 155.58 11.7812 155.204 11.2894C154.828 10.7976 154.242 10.5517 153.446 10.5517C152.665 10.5517 152.022 10.8265 151.515 11.3762C151.024 11.9259 150.778 12.6925 150.778 13.6762V19.2307H148.001ZM165.345 19.2307C164.217 19.2307 163.313 18.9559 162.633 18.4062C161.954 17.8565 161.614 16.8801 161.614 15.477V10.7903H159.769V8.46875H161.614L161.939 5.58294H164.391V8.46875H167.298V10.7903H164.391V15.4987C164.391 16.0195 164.499 16.3811 164.716 16.5836C164.948 16.7716 165.338 16.8657 165.888 16.8657H167.233V19.2307H165.345ZM173.48 19.4911C172.525 19.4911 171.686 19.3392 170.962 19.0355C170.239 18.7172 169.661 18.2833 169.227 17.7336C168.793 17.1839 168.533 16.5475 168.446 15.8242H171.245C171.332 16.2437 171.563 16.6053 171.939 16.909C172.33 17.1983 172.829 17.343 173.436 17.343C174.044 17.343 174.485 17.2201 174.76 16.9742C175.049 16.7283 175.194 16.4462 175.194 16.128C175.194 15.6651 174.991 15.354 174.586 15.195C174.181 15.0214 173.617 14.855 172.894 14.6959C172.431 14.5947 171.961 14.4717 171.483 14.327C171.006 14.1824 170.565 14.0016 170.16 13.7846C169.769 13.5532 169.451 13.2639 169.205 12.9167C168.959 12.5551 168.837 12.1139 168.837 11.5931C168.837 10.6384 169.213 9.83566 169.965 9.18471C170.732 8.53383 171.802 8.20835 173.176 8.20835C174.449 8.20835 175.461 8.50484 176.214 9.09796C176.98 9.691 177.436 10.5083 177.58 11.5498H174.955C174.796 10.7542 174.196 10.3564 173.154 10.3564C172.633 10.3564 172.228 10.4576 171.939 10.6602C171.664 10.8627 171.527 11.1158 171.527 11.4196C171.527 11.7378 171.737 11.9909 172.156 12.179C172.576 12.3671 173.132 12.5406 173.827 12.6997C174.579 12.8733 175.266 13.0686 175.888 13.2856C176.525 13.4881 177.031 13.7991 177.407 14.2185C177.783 14.6236 177.971 15.2094 177.971 15.9761C177.985 16.6415 177.812 17.2418 177.45 17.777C177.089 18.3122 176.568 18.7317 175.888 19.0355C175.208 19.3392 174.406 19.4911 173.48 19.4911Z' fill='white'/>
                            <path d='M7.96292 20.9123C10.2522 20.9123 12.108 19.0565 12.108 16.7673C12.108 14.4781 10.2522 12.6223 7.96292 12.6223C5.67367 12.6223 3.81787 14.4781 3.81787 16.7673C3.81787 19.0565 5.67367 20.9123 7.96292 20.9123Z' fill='white'/>
                            <path d='M12.5393 13.2269C14.3516 13.2269 15.8208 11.7577 15.8208 9.94538C15.8208 8.13306 14.3516 6.66388 12.5393 6.66388C10.727 6.66388 9.25781 8.13306 9.25781 9.94538C9.25781 11.7577 10.727 13.2269 12.5393 13.2269Z' fill='white'/>
                            <path d='M6.06303 8.47731C7.68458 8.47731 8.9991 7.16279 8.9991 5.54124C8.9991 3.91969 7.68458 2.60516 6.06303 2.60516C4.44148 2.60516 3.12695 3.91969 3.12695 5.54124C3.12695 7.16279 4.44148 8.47731 6.06303 8.47731Z' fill='white'/>
                            <path d='M4.33648 12.6224C5.29033 12.6224 6.06358 11.8491 6.06358 10.8953C6.06358 9.9414 5.29033 9.16815 4.33648 9.16815C3.38263 9.16815 2.60938 9.9414 2.60938 10.8953C2.60938 11.8491 3.38263 12.6224 4.33648 12.6224Z' fill='white'/>
                          </g>
                          <defs>
                            <clipPath id='clip0_943_587'>
                              <rect width='178.504' height='23.6113' fill='white' transform='translate(0.56543 0.401489)'/>
                            </clipPath>
                          </defs>
                        </svg>
                          </div>
                      </div>
                      <div className='truestanssafety text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[23px] pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px] pb-[7] md:pb-[9px] xl:pb-[12px]'>trust and safety audits</div>
                        <div className='flex justify-center items-center gap-[10px] md:gap-[14px] xl:gap-[19]'>
                        <svg className='w-[24px] sm:w-[32px] md:w-[36px] lg:w-[40px] xl:w-[48px] 2xl:w-[70px] cursor-pointer hover:sepia duraction-300' viewBox='0 0 70 70' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <g filter='url(#filter0_d_943_596)'>
                        <path d='M0.5 9.61036C0.5 4.43569 4.6949 0.240784 9.86958 0.240784H56.1304C61.3051 0.240784 65.5 4.43569 65.5 9.61036V55.8712C65.5 61.0459 61.3051 65.2408 56.1304 65.2408H9.86958C4.6949 65.2408 0.5 61.0459 0.5 55.8712V9.61036Z' fill='white'/>
                        <g clip-path='url(#clip0_943_596)'>
                        <g clip-path='url(#clip1_943_596)'>
                        <g clip-path='url(#clip2_943_596)'>
                        <path fill-rule='evenodd' clip-rule='evenodd' d='M36.2233 42.1566L30.4379 47.0049L28.8022 47.2266L25.142 34.6143L12.2661 30.3852L51.9061 15.2754L53.7759 15.3172L47.5304 49.289L36.2233 42.1566ZM46.1375 21.6589L27.9739 32.5478L30.0656 41.4706L30.6387 41.3409L32.8223 34.4553L47.338 21.8012L46.1375 21.6589Z' fill='black'/>
                        </g>
                        </g>
                        </g>
                        </g>
                        <defs>
                        <filter id='filter0_d_943_596' x='0.5' y='0.240784' width='69' height='69' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'>
                        <feFlood flood-opacity='0' result='BackgroundImageFix'/>
                        <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/>
                        <feOffset dx='4' dy='4'/>
                        <feComposite in2='hardAlpha' operator='out'/>
                        <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/>
                        <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_943_596'/>
                        <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_943_596' result='shape'/>
                        </filter>
                        <clipPath id='clip0_943_596'>
                        <rect width='43.4709' height='35.7295' fill='white' transform='translate(11.5 13.904)'/>
                        </clipPath>
                        <clipPath id='clip1_943_596'>
                        <rect width='43.4709' height='35.7295' fill='white' transform='translate(11.5 13.904)'/>
                        </clipPath>
                        <clipPath id='clip2_943_596'>
                        <rect width='43.4709' height='35.7083' fill='white' transform='translate(11.5 13.9146)'/>
                        </clipPath>
                        </defs>
                        </svg>
                        <svg className='w-[24px] sm:w-[32px] md:w-[36px] lg:w-[40px] xl:w-[48px] 2xl:w-[70px] cursor-pointer hover:sepia duraction-300' viewBox='0 0 70 70' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <g filter='url(#filter0_d_943_601)'>
                        <path d='M0.5 9.61036C0.5 4.43569 4.6949 0.240784 9.86958 0.240784H56.1304C61.3051 0.240784 65.5 4.43569 65.5 9.61036V55.8712C65.5 61.0459 61.3051 65.2408 56.1304 65.2408H9.86958C4.6949 65.2408 0.5 61.0459 0.5 55.8712V9.61036Z' fill='white'/>
                        <g clip-path='url(#clip0_943_601)'>
                        <g clip-path='url(#clip1_943_601)'>
                        <g clip-path='url(#clip2_943_601)'>
                        <path d='M35.3598 31.6468L47.5579 17.4675H44.6673L34.0758 29.7791L25.6163 17.4675H15.8594L28.6517 36.0848L15.8594 50.9539H18.7501L29.9351 37.9524L38.8689 50.9539H48.6259L35.3598 31.6468ZM31.4007 36.2489L30.1045 34.3949L19.7916 19.6435H24.2316L32.5541 31.5485L33.8504 33.4023L44.6687 48.8769H40.2287L31.4007 36.2489Z' fill='black'/>
                        </g>
                        </g>
                        </g>
                        </g>
                        <defs>
                        <filter id='filter0_d_943_601' x='0.5' y='0.240784' width='69' height='69' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'>
                        <feFlood flood-opacity='0' result='BackgroundImageFix'/>
                        <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/>
                        <feOffset dx='4' dy='4'/>
                        <feComposite in2='hardAlpha' operator='out'/>
                        <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/>
                        <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_943_601'/>
                        <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_943_601' result='shape'/>
                        </filter>
                        <clipPath id='clip0_943_601'>
                        <rect width='34.2408' height='35.7295' fill='white' transform='translate(15.5 16.5981)'/>
                        </clipPath>
                        <clipPath id='clip1_943_601'>
                        <rect width='34.2408' height='35.7295' fill='white' transform='translate(15.5 16.5981)'/>
                        </clipPath>
                        <clipPath id='clip2_943_601'>
                        <rect width='34.2408' height='35.7295' fill='white' transform='translate(15.5 16.5981)'/>
                        </clipPath>
                        </defs>
                        </svg>

                        </div>
                      </div>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default HeroArea;
