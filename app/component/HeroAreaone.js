'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import Link from 'next/link';
import image1 from './image/image1.gif';
import image2 from './image/image13.png';
import image3 from './image/image14.gif';
import image4 from './image/image15.png';
import image22 from './image/image22.png';
import image23 from './image/image23.png';


const HeroAreaone = () => {
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
                    <div className='w-full pr-[32px] sm:pr-[36px] md:pr-[40px] lg:pr-[48px] xl:pr-[64px] 2xl:pr-[95px] relative '>
                      <Image src={image2} alt=''/>
                      <Image className='absolute top-[18%] right-[10%] w-[60px] lg:w-[80px] xl:w-[120px] 2xl:w-[134px] -z-[1]' src={image3} alt=''/>
                      <Image className='absolute top-[0%] left-[0%] w-[60px] lg:w-[80px] xl:w-[120px] 2xl:w-[134px] -z-[1]' src={image3} alt=''/>

                      <div className='group absolute top-[44%] right-[14%] w-[65px] lg:w-[85px] xl:w-[125px] 2xl:w-[145px] z-[1] flex justify-center items-center flex-col gap-[10px] lg:gap-[15px]'>
                        <Image className='w-[14px] sm:w-[15px] md:w-[16px] lg:w-[20px] xl:w-[24px] 2xl:w-[31px] cursor-pointer' src={image4} alt='loading'/>

                        <svg className='group-hover:opacity-100 opacity-0 duration-300 w-[65px] lg:w-[85px] xl:w-[125px] 2xl:w-[145px]' viewBox="0 0 145 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="144.675" height="55.8838" rx="12" fill="white"/>
                      <g clip-path="url(#clip0_1017_1104)">
                      <path d="M23.79 29.7595H15.0785V27.598H26.3118C26.017 26.681 25.0673 25.8295 23.397 25.8295H15.2423C13.3755 25.8295 12.2948 26.5172 12.2948 28.0237V29.6285C12.2948 30.9385 13.4083 31.6917 15.0458 31.6917H23.8555V33.9842H12C12.2948 35.2287 13.2445 35.8837 14.9475 35.8837H23.8228C25.6895 35.8837 26.6065 35.1632 26.6065 33.624V32.0192C26.6065 30.611 25.5258 29.8577 23.79 29.7595Z" fill="black"/>
                      <path d="M40.3484 25.8295H29.6064V35.8837H32.6522V32.0192H40.5777C42.7719 32.0192 43.9837 31.266 43.9837 29.4975V28.384C43.9509 26.7465 42.5754 25.8295 40.3484 25.8295ZM41.3309 29.039C41.3309 29.7595 41.1999 30.1525 40.0209 30.1525H32.6522L32.6849 27.5325H39.8899C41.1999 27.5325 41.3637 27.9255 41.3637 28.6132V29.039H41.3309Z" fill="black"/>
                      <path d="M53.7959 25.4038L51.9619 27.6636L55.0731 31.9538H48.5886L46.9839 33.6568H56.3504L57.9551 35.8838H61.5576L53.7959 25.4038Z" fill="black"/>
                      <path d="M67.6361 27.6308H79.0331C78.7384 26.4518 77.5921 25.8623 75.9546 25.8623H67.4396C65.9659 25.8623 64.5576 26.4518 64.5576 28.0566V33.6896C64.5576 35.2943 65.9659 35.8838 67.4396 35.8838H76.0529C78.0179 35.8838 78.7056 35.3271 79.0331 33.9843H67.6361V27.6308Z" fill="black"/>
                      <path d="M85.1117 33.9843V30.9058H91.236V29.2028H82.0332V35.8838H95.6245V33.9843H85.1117Z" fill="black"/>
                      <path d="M96.0826 25.8295H82.3604V27.598H96.0826V25.8295Z" fill="black"/>
                      <path d="M140.675 20C114.475 21.5065 102.358 32.707 99.6393 35.3597L99.0825 35.8837H103.93C117.03 22.751 135.861 20.4257 140.675 20Z" fill="black"/>
                      <path d="M98.7655 25.9087H94.3608L99.5499 29.9114C100.304 29.3713 101.179 28.7995 101.963 28.323L98.7655 25.9087ZM105.161 30.8962C104.407 31.4362 103.653 32.0398 102.929 32.6116L106.851 35.6295H111.286L105.161 30.8962Z" fill="black"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_1017_1104">
                      <rect width="120.675" height="15.8837" fill="white" transform="translate(12 20)"/>
                      </clipPath>
                      </defs>
                      </svg>
                      </div>

                      <div className='group absolute top-[67%] right-[25%] w-[65px] lg:w-[85px] xl:w-[125px] 2xl:w-[145px] z-[1] flex justify-center items-center flex-col gap-[10px] lg:gap-[15px]'>
                        <Image className='w-[14px] sm:w-[15px] md:w-[16px] lg:w-[20px] xl:w-[24px] 2xl:w-[31px] cursor-pointer' src={image4} alt='loading'/>

                        <svg className='group-hover:opacity-100 opacity-0 duration-300 w-[65px] lg:w-[85px] xl:w-[125px] 2xl:w-[145px]' viewBox="0 0 145 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="145" height="53" rx="12" fill="white"/>
                        <path d="M37.7716 17.6428V12.7684H36.5V11.3764H40.8172V12.7684H39.4804V17.6428H37.7716Z" fill="black"/>
                        <path d="M41.4302 17.6428V11.3764H43.139V13.7212H45.3658V11.3764H47.0746V17.6428H45.3658V15.1144H43.139V17.6428H41.4302Z" fill="black"/>
                        <path d="M48.2896 17.6428V11.3764H51.8856V12.7772H50.0216V13.7136H51.8124V15.2388H50.0216V16.1232H51.8856V17.6428H48.2896Z" fill="black"/>
                        <path d="M74.937 32.5044V19.9915H78.253V32.5044H74.937Z" fill="black"/>
                        <path d="M74.4448 41.4446L75.4992 35.0926L77.19 35.1074L78.398 38.2602L79.6064 35.1074L81.2968 35.0926L82.3513 41.4446H80.6409L80.092 38.139L78.8248 41.4446H77.9712L76.7044 38.139L76.1556 41.4446H74.4448Z" fill="black"/>
                        <path d="M87.8457 41.4446L90.2745 35.093H92.1117L94.5405 41.4446H92.6581L92.3177 40.4262H90.0685L89.7277 41.4446H87.8457ZM91.1933 37.2338L90.5613 39.0382H91.8249L91.1933 37.2338Z" fill="black"/>
                        <path d="M104.07 41.4304V38.4356L101.716 35.0932L103.789 35.0928L104.93 36.8176L106.072 35.0928L108.144 35.0932L105.769 38.466V41.4304H104.07Z" fill="black"/>
                        <path d="M69.5591 32.5044L66.5811 27.8684V32.5044H63.2095V19.9915H68.8015C71.0503 19.9915 72.5223 21.7644 72.5223 23.8292C72.5223 25.582 71.6087 26.9856 69.8579 27.3852L73.6747 32.3628V32.5044H69.5591ZM66.5811 22.5716V25.4584H67.5039C68.4639 25.4584 69.0643 24.8088 69.0643 24.0148C69.0643 23.2212 68.2979 22.5716 67.5039 22.5716H66.5811Z" fill="black"/>
                        <path d="M83.21 41.4304V35.0932H85.64C87.4752 35.0932 88.1064 36.0952 88.1064 37.262C88.1064 38.4388 87.4672 39.3928 85.9576 39.3928H84.9844V41.4304H83.21ZM84.9844 36.5516V37.982H85.5652C86.5612 37.982 86.5336 36.5516 85.6068 36.5516H84.9844Z" fill="black"/>
                        <path d="M101.993 28.0337V25.3753H108.448C108.888 29.3513 106.55 32.8538 101.985 32.8538C98.1565 32.8538 95.3589 30.1673 95.3589 26.2209C95.3589 22.2745 98.0901 19.5705 102.02 19.5705C104.789 19.5705 106.835 20.8613 107.869 23.1381L104.671 24.5065C104.185 23.1753 103.229 22.5249 101.997 22.5249C100.203 22.5249 98.8841 24.0085 98.9197 26.2345C98.9197 28.4785 100.004 29.8633 101.98 29.8633C103.319 29.8633 104.379 29.3981 104.593 28.0337H101.993Z" fill="black"/>
                        <path d="M80.7339 32.5044V19.9915H84.1051L89.9215 27.3864V19.9915H93.2595V32.5044H89.9215L84.1051 25.09V32.5044H80.7339Z" fill="black"/>
                        <path d="M95.0586 41.4304V35.0932H96.7658L99.6694 38.828V35.0932H101.36V41.4304H99.6778L96.7658 37.7184V41.4304H95.0586Z" fill="black"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M54.3856 19.6009C58.51 19.6009 61.32 22.5677 61.32 26.2273C61.32 29.8869 58.4028 32.8538 54.3856 32.8538C50.3684 32.8538 47.4512 29.8869 47.4512 26.2273C47.4512 22.5677 50.2616 19.6009 54.3856 19.6009Z" fill="black"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M70.3535 36.6448C71.3631 36.6448 72.0511 37.3828 72.0511 38.2928C72.0511 39.2028 71.3367 39.9408 70.3535 39.9408C69.3695 39.9408 68.6555 39.2028 68.6555 38.2928C68.6555 37.3828 69.3435 36.6448 70.3535 36.6448ZM70.3535 34.962C72.4283 34.962 73.8423 36.4532 73.8423 38.2928C73.8423 40.1325 72.3747 41.6237 70.3535 41.6237C68.3319 41.6237 66.8643 40.1325 66.8643 38.2928C66.8643 36.4532 68.2783 34.962 70.3535 34.962Z" fill="black"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M40.1344 27.3036L40.8824 27.3016C42.1252 27.2984 42.9656 27.7172 42.9656 28.5684C42.9656 29.3804 42.3276 29.8016 41.4192 29.8144L40.1344 29.8332V27.3036ZM40.1344 22.5088H40.696C41.408 22.5088 42.068 22.8516 42.068 23.6804C42.068 24.49 41.4076 24.852 40.696 24.852H40.1344V22.5088ZM36.7632 32.5044V19.9915H41.9784C44.2396 19.9915 45.1868 21.4755 45.1868 23.1864C45.1868 24.328 44.736 25.3028 43.9012 25.7428C45.5492 26.1224 46.3728 27.22 46.3728 28.7024C46.3728 30.6604 45.2872 32.5044 41.828 32.5044H36.7632Z" fill="black"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M64.5994 34.962C65.1666 34.962 65.681 35.0856 66.127 35.3056V37.29H66.0234C65.735 36.898 65.2694 36.6452 64.6966 36.6452C63.7174 36.6452 63.0506 37.3828 63.0506 38.2928C63.0506 39.2028 63.743 39.9404 64.6966 39.9404C65.2538 39.9404 65.7214 39.6884 66.0146 39.2972H66.127V41.2689C65.6774 41.4957 65.161 41.6237 64.5994 41.6237C62.6818 41.6237 61.2886 40.1325 61.2886 38.2928C61.2886 36.4532 62.6306 34.962 64.5994 34.962Z" fill="black"/>
                        </svg>

                      </div>


                      <div className='group absolute top-[65%] right-[50%] w-[65px] lg:w-[85px] xl:w-[125px] 2xl:w-[145px] z-[1] flex justify-center items-center flex-col gap-[10px] lg:gap-[15px]'>
                        <Image className='w-[14px] sm:w-[15px] md:w-[16px] lg:w-[20px] xl:w-[24px] 2xl:w-[31px] cursor-pointer' src={image4} alt='loading'/>

                        <svg className='group-hover:opacity-100 opacity-0 duration-300 w-[65px] lg:w-[85px] xl:w-[125px] 2xl:w-[145px]' viewBox="0 0 145 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="145" height="53" rx="12" fill="white"/>
                        <g clip-path="url(#clip0_1017_1143)">
                        <path d="M118.215 23.0108L116.831 20.3014L116.182 20.9758L115.749 23.0108H114.412L115.796 16.3924H117.133L116.541 19.2297L119.278 16.3924H121L117.857 19.499L119.787 23.0108H118.215ZM110.561 23.0082L108.793 18.5623L107.982 23.0082H106.831L108.023 16.4184H109.208L110.926 20.7061L111.713 16.4184H112.864L111.671 23.0082H110.561ZM102.633 22.9885L103.953 16.3874H105.228L103.907 22.9885H102.633ZM96.4203 22.9446L97.8239 16.4517H99.179L98.0438 21.7277H100.726L100.467 22.9446H96.4203ZM77.042 23.1408C76.2574 23.1408 75.6493 22.9348 75.2176 22.5227C74.7859 22.1107 74.5701 21.5487 74.5701 20.8367C74.5701 20.6719 74.5845 20.5238 74.6134 20.3925L75.3625 16.4275H76.5893L75.8485 20.3539C75.8252 20.4195 75.8136 20.5283 75.8136 20.6803C75.8136 21.0356 75.9257 21.3285 76.1498 21.559C76.3751 21.7895 76.6725 21.9047 77.0421 21.9047C77.8255 21.9047 78.3138 21.3878 78.5069 20.3539L79.2576 16.4275H80.4928L79.7354 20.3828C79.5423 21.3523 79.2254 22.0547 78.7849 22.4899C78.3443 22.9238 77.7634 23.1408 77.042 23.1408ZM93.1418 23.0501L92.9983 21.9213H90.5805L90.0144 23.0501H88.5868L92.0097 16.3926H93.5132L94.4423 23.0501H93.1418ZM92.5576 17.8099L91.1465 20.6737H92.896L92.5576 17.8099ZM85.4924 22.9909L84.788 20.6457H83.8063L83.3407 22.9909H82.0731L83.386 16.3882H85.9301C86.4543 16.3882 86.892 16.5648 87.2431 16.9179C87.5941 17.2711 87.7696 17.7152 87.7696 18.2501C87.7696 18.8366 87.6086 19.3412 87.2866 19.764C86.9658 20.1868 86.5613 20.4472 86.073 20.5451L86.8943 22.9909H85.4924ZM85.386 19.4082C85.7196 19.4082 85.9783 19.3128 86.1619 19.1221C86.3468 18.93 86.4392 18.6851 86.4392 18.3874C86.4392 18.1631 86.3631 17.9801 86.2108 17.8383C86.0597 17.6965 85.8859 17.6256 85.6894 17.6256H84.413L84.0556 19.4082H85.386ZM67.9636 23.0053L69.2535 16.3414H73.3937L73.1471 17.5903H70.2624L69.9901 18.9992H72.8148L72.5681 20.2481H69.7451L69.4556 21.7565H72.3403L72.1039 23.0053H67.9636ZM64.0282 22.9859L62.2911 18.5472L61.4948 22.9859H60.3643L61.5353 16.4069H62.6985L64.3859 20.6876L65.1588 16.4069H66.2894L65.1184 22.9859H64.0282Z" fill="black"/>
                        <path d="M24.0005 30.9309H51.5671L51.3563 29.4321H27.7336L44.5357 13.2367C46.8394 10.933 50.9077 12.4248 51.58 16.0981C52.7876 23.6891 53.7453 31.7684 54.7705 39.5395C55.3011 42.4852 58.456 43.1689 60.323 41.3019L72.0557 29.4392H56.7354L56.9399 30.9117H68.5428L59.3923 40.1348C58.1188 41.4082 56.6016 41.3634 56.0273 39.2204L52.8346 15.4605C52.1009 11.1764 46.9358 9.01705 43.5279 12.1338L24.0005 30.9309Z" fill="black"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1017_1143">
                        <rect width="96.9996" height="31.6829" fill="white" transform="translate(24.0005 10.6586)"/>
                        </clipPath>
                        </defs>
                        </svg>


                      </div>
                      
                      

                    </div>
                  </div>
                  <div className='flex-1'>
                    <div className=' sm:pl-[40px] md:pl-[70px] lg:pl-[90px] xl:pl-[120px] 2xl:pl-[151px] w-full'>
                      <div className='backgroundndpadding  pt-[12px] sm:pt-[13px] md:pt-[14px] lg:pt-[15px] xl:pt-[16px] 2xl:pt-[20px] px-[14px] sm:px-[15px] md:px-[16px] lg:px-[20px] xl:px-[24px] 2xl:px-[29px] relative pb-[24px] sm:pb-[32px] md:pb-[36px] lg:pb-[40px] xl:pb-[48px] 2xl:pb-[58px]'>

                          <div className='flex items-center justify-center flex-col gap-[8px] md:gap-[12px] xl:gap-[16px] absolute right-0 top-[50%] transform translate-x-1/2 -translate-y-1/2'>
                            <Link href="/">
                            <button className='buybuttonss w-[40px] sm:w-[40px] md:w-[48px] lg:w-[64px] xl:w-[96px] 2xl:w-[105px] flex justify-center items-center rounded-[6px] md:rounded-[8px] xl:rounded-[10px] h-[20px] sm:h-[24px] md:h-[32px] lg:h-[36px] xl:h-[40px] 2xl:h-[50px] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px]'>Buy</button>
                            </Link>
                            <Link href="/stake">
                            <button className='buybuttonssddd w-[40px] sm:w-[40px] md:w-[48px] lg:w-[64px] xl:w-[96px] 2xl:w-[105px] flex justify-center items-center rounded-[6px] md:rounded-[8px] xl:rounded-[10px] h-[20px] sm:h-[24px] md:h-[32px] lg:h-[36px] xl:h-[40px] 2xl:h-[50px] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px]'>Stake</button>
                            </Link>
                          </div>
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
                          <div className='flex justify-center flex-col xl:gap-0 gap-[2px] lg:gap-[20px] mt-[11px] sm:mt-[12px] md:mt-[13px] lg:mt-[14px] xl:mt-[15px] 2xl:mt-[16px] p-[14px] sm:p-[15px] md:p-[16px] lg:p-[20px] xl:p-[24px] 2xl:p-[27px] bg-[#EFF2F9] rounded-[10px] md:rounded-[12px] xl:rounded-[15.929px] mb-[13px] sm:mb-[14px] md:mb-[15px] lg:mb-[16px] xl:mb-[20px] 2xl:mb-[24px] border-[1px] border-[#646F82] relative'>
                              <div className='flex justify-between items-center gap-[10px] gap-[12px] '>
                                <div className='flex items-center flex-col justify-center gap-[6px] sm:gap-[8px] xl:gap-[12px]'>
                                    <div className='currentpages text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]'>Current Staking</div>
                                    <h2 className='extras text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[22px]'>0 $EXTAI</h2>
                                </div>
                                <div className='flex items-center flex-col justify-center gap-[6px] sm:gap-[8px] xl:gap-[12px]'>
                                    <div className='currentpages text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]'>Daily Interest</div>
                                    <h2 className='extras text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[22px]'>0 $EXTAI</h2>
                                </div>
                                <div className='flex items-center flex-col justify-center gap-[6px] sm:gap-[8px] xl:gap-[12px]'>
                                    <div className='currentpages text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]'>Average APY</div>
                                    <h2 className='extras text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[22px]'>90%</h2>
                                </div>
                                <div className='flex items-center flex-col justify-center gap-[6px] sm:gap-[8px] xl:gap-[12px]'>
                                    <div className='currentpages text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]'>Rewards on Launch</div>
                                    <h2 className='extras text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[22px]'>$0</h2>
                                </div>
                            </div> 
                          </div>
                          <div className='flex justify-center items-center flex-col'>
                          <div className='ratingre text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] pb-[11px] sm:pb-[12px] md:pb-[13px] lg:pb-[14px] xl:pb-[15px] 2xl:pb-[16.3px]'>
                          My Staking
                        </div>

                            <Image className='' src={image23} alt=''/>
                            <div className='flex justify-between items-center pb-[16px] sm:pb-[20px] md:pb-[24px] lg:pb-[32px] xl:pb-[36px] 2xl:pb-[43px]'>
                                <h2 className='extaiscas text-[14px] sm:text-[15px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[32px]'>0$ $EXTAI</h2>
                            </div>

                            <div className='w-full flex justify-start items-start flex-col'>
                                <label htmlFor="btfd-wallet" className='btfdinwalet text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] pb-[6px] lg:pb-[8px]'>$BTFD in wallet <span className='!text-[#fff]'>0</span></label>

                                <div className='w-full backgroundimae flex justify-between items-center h-[50px] px-[11px] sm:px-[12px] md:px-[13px] lg:px-[14px] xl:px-[15px] 2xl:px-[16px] h-[20px] sm:h-[24px] md:h-[32px] lg:h-[36px] xl:h-[40px] 2xl:h-[50px]'>
                                    <input id="btfd-wallet" className='text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] placeholder:text-[#000]' type='email' placeholder='00.00'/>
                                    <h2 className='extaling text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]'>$EXTAI</h2>
                                </div>
                                <div className='flex justify-between items-center w-full mt-[10px]'>
                                    <button className='stakecansa p-[6px] xl:p-[8px] rounded-[2px] xl:rounded-[4px]'>Max can stake 0</button>
                                    <button className='stakecansa p-[6px] xl:p-[8px] rounded-[2px] xl:rounded-[4px]'>Max can Unstake 0</button>
                                </div>
                            </div>
                            
                          <div className='flex justify-center items-center gap-[12px] md:gap-[16px] xl:gap-[21px] sm:flex-row flex-col w-full pt-[16px] sm:pt-[20px] md:pt-[24px] lg:pt-[32px] xl:pt-[36px] 2xl:pt-[43px]'>
                              <button className='flex-1 borderlinisinsassing w-full py-[12px] sm:py-[13px] md:py-[14px] lg:py-[15px] xl:py-[16px] 2xl:py-[21px] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[27px] cursor-pointer !text-[#000] !hover:text-[#fff]'>
                                  Stake
                              </button>
                              <button className='flex-1 w-full py-[12px] sm:py-[13px] md:py-[14px] lg:py-[15px] xl:py-[16px] 2xl:py-[21px] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[27px] borderlinisinsa cursor-pointer '>
                              unstake
                              </button>
                          </div>
                          </div>
                          
                      </div>
                      <div className='flex justify-center items-center gap-[10px] md:gap-[14px] xl:gap-[19] pt-[20px] xl:pt-[24px]'>

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
                      </div>
                      
                  </div>
                </div>
            </div>
        </div>
    );
};

export default HeroAreaone;
