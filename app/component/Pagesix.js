import React,{useEffect} from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Pagesix = () => {

    useEffect(() => {
        const ctx = gsap.context(() => {
          gsap.from(".section6", {
            y: 300,
            duration: 2,
            scrollTrigger: {
              trigger: ".section6",
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
        <div className='relative section6' id="HowToBuy">
            <div className='container mx-auto py-[32px] sm:py-[36px] md:py-[40px] lg:py-[48px] xl:py-[64px] 2xl:py-[100px] px-[24px] sm:px-[36px] md:px-[40px] lg:px-[48px] xl:px-[64px] 2xl:px-[100px]'>
            <div className='relative mt-[20px] sm:mt-[24px] md:mt-[32px] lg:mt-[36px] xl:mt-[40px] 2xl:mt-[50px]'>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-[250px] sm:w-[300px] md:w-[330px] lg:w-[350px] xl:w-[380px] 2xl:w-[440px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' viewBox="0 0 440 111" fill="none">
                <path d="M8.68749 17.4558C10.3022 7.6522 18.869 0.520381 28.8029 0.709782L413.349 8.0416C423.472 8.23461 431.854 15.9625 432.867 26.0367L439.15 88.5151C440.383 100.769 430.353 111.215 418.059 110.481L19.6484 86.7018C7.80547 85.995 -0.822212 75.1933 1.10589 63.487L8.68749 17.4558Z" fill="#E85400"/>
                </svg>
                <h2 className='howtobue text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[57px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>HOW TO BUY</h2>
                
            </div>
            <div className='relative mt-[40px] sm:mt-[60px] md:mt-[90px] lg:mt-[120px] xl:mt-[150px] 2xl:mt-[175px] pt-[50px] sm:pt-[24px] md:pt-[32px] lg:pt-[36px] xl:pt-[40px] 2xl:pt-[46px] '>
                <div className='flex justify-between items-center lg:flex-row flex-col gap-[50px] sm:gap-[40px] md:gap-[70px] lg:gap-[93px] xl:gap-[120px] 2xl:gap-[147px]'>
                    <div className='relative hwobysection px-[14px] sm:px-[15px] md:px-[16px] lg:px-[20px] xl:px-[24px] 2xl:px-[32px] flex flex-col justify-center items-center flex-1 py-[32px] sm:py-[36px] md:py-[40px] lg:py-[48px] xl:py-[64px] 2xl:py-[82px]'>
                        <p className='onetext text-[36px] sm:text-[40px] md:text-[48px] lg:text-[64px] xl:text-[96px] 2xl:text-[114px] absolute -top-1/3 lg:-top-1/5 left-1/2 transform -translate-x-1/2'>1</p>
                        <h2 className='getwallet text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[54px] '>Get Wallet</h2>
                        <p className="paragonsectoin text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[22px] pt-[13px] sm:pt-[14px] md:pt-[15px] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[24px]">You will need a wallet to store your $EXTAI presale tokens. We recommend using Phantom wallet, which allows you to easily view your token balance after purchase.</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className='absolute -bottom-1/10 lg:-bottom-1/6 left-1/2 transform -translate-x-1/2 w-[32px] sm:w-[36px] md:w-[40px] lg:w-[48px] xl:w-[64px] 2xl:w-[91px]' viewBox="0 0 91 91" fill="none">
                        <circle cx="45.5" cy="45.5" r="43.5" fill="#FF5C00" stroke="#000001" stroke-width="4"/>
                        <path d="M41.2604 24C46.1875 29.3369 58.2812 40.0106 65 41.8404M65 41.8404C59.1771 46.7199 49.5021 60.4128 48.4271 67M65 41.8404C52.0104 43.6702 29.8833 44.0362 22 52.8191" stroke="white" stroke-width="5"/>
                        </svg>
                    </div>
                    <div className='h-full relative hwobysection px-[14px] sm:px-[15px] md:px-[16px] lg:px-[20px] xl:px-[24px] 2xl:px-[32px] flex flex-col justify-center items-center flex-1 py-[32px] sm:py-[36px] md:py-[40px] lg:py-[48px] xl:py-[64px] 2xl:py-[82px]'>
                        <p className='onetext text-[36px] sm:text-[40px] md:text-[48px] lg:text-[64px] xl:text-[96px] 2xl:text-[114px] absolute -top-1/3 lg:-top-1/5 left-1/2 transform -translate-x-1/2'>2</p>
                        <h2 className='getwallet text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[54px] '>Add Crypto</h2>
                        <p className="paragonsectoin text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[22px] pt-[13px] sm:pt-[14px] md:pt-[15px] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[24px]">To buy $EXTAI, simply use any exchange of your choice to send SOLANA or USDC to your wallet.</p>
                        <p className="paragonsectoin text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[22px] opacity-0 select-event-none ">.</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className='absolute -bottom-1/10 lg:-bottom-1/10 lg:-bottom-1/6 left-1/2 transform -translate-x-1/2 w-[32px] sm:w-[36px] md:w-[40px] lg:w-[48px] xl:w-[64px] 2xl:w-[91px]' viewBox="0 0 91 91" fill="none">
                        <circle cx="45.5" cy="45.5" r="43.5" fill="#FF5C00" stroke="#000001" stroke-width="4"/>
                        <path d="M41.2604 24C46.1875 29.3369 58.2812 40.0106 65 41.8404M65 41.8404C59.1771 46.7199 49.5021 60.4128 48.4271 67M65 41.8404C52.0104 43.6702 29.8833 44.0362 22 52.8191" stroke="white" stroke-width="5"/>
                        </svg>
                    </div>
                </div>
                <div className='flex justify-center items-center pt-[50px] sm:pt-[36px] md:pt-[40px] lg:pt-[48px] xl:pt-[64px] 2xl:pt-[83px]'>
                <div className='relative hwobysection px-[14px] sm:px-[15px] md:px-[16px] lg:px-[20px] xl:px-[24px] 2xl:px-[32px] inline-flex flex-col justify-center items-center py-[32px] sm:py-[36px] md:py-[40px] lg:py-[48px] xl:py-[64px] 2xl:py-[82px]'>
                        <p className='onetext text-[36px] sm:text-[40px] md:text-[48px] lg:text-[64px] xl:text-[96px] 2xl:text-[114px] absolute -top-1/3 lg:-top-1/5 left-1/2 transform -translate-x-1/2'>3</p>
                        <h2 className='getwallet text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[54px] '>Get Wallet</h2>
                        <p className="paragonsectoin text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[22px] pt-[13px] sm:pt-[14px] md:pt-[15px] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[24px]">You will need a wallet to store your $EXTAI presale tokens. We recommend <br className='hidden sm:block'/> using Phantom wallet, which allows you to easily view your token balance <br className='hidden sm:block'/> after purchase.</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className='absolute -bottom-1/10 lg:-bottom-1/6 left-1/2 transform -translate-x-1/2 w-[32px] sm:w-[36px] md:w-[40px] lg:w-[48px] xl:w-[64px] 2xl:w-[91px]' viewBox="0 0 91 91" fill="none">
                        <circle cx="45.5" cy="45.5" r="43.5" fill="#FF5C00" stroke="#000001" stroke-width="4"/>
                        <path d="M41.2604 24C46.1875 29.3369 58.2812 40.0106 65 41.8404M65 41.8404C59.1771 46.7199 49.5021 60.4128 48.4271 67M65 41.8404C52.0104 43.6702 29.8833 44.0362 22 52.8191" stroke="white" stroke-width="5"/>
                        </svg>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Pagesix;