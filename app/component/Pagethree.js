import React,{useEffect} from 'react';
import Image from 'next/image';
// import image9 from './image9.png';
import image12 from './image/image12.png';
import image14 from './image/image14.png';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Pagethree = () => {
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // Desktop Animation
      return gsap.from(".section3", {
        x: 250,
        duration: 2,
        scrollTrigger: {
          trigger: ".section3",
          start: "top 80%",
          end: "top 30%",
          scrub: 2,
        },
      });
    });

    mm.add("(max-width: 1023px)", () => {
      // Tablet & Mobile Animation
      return gsap.from(".section3", {
        x: 100, // Less movement on small screens
        duration: 1.5,
        scrollTrigger: {
          trigger: ".section3",
          start: "top 90%", // Adjusted start for better visibility
          end: "top 50%",
          scrub: 1,
        },
      });
    });

    return () => mm.revert(); // Cleanup GSAP animations on unmount
  }, []);

    return (
        <div className='overflow-hidden trasingviewsectionbackground relative py-[32px] sm:py-[36px] md:py-[40px] lg:py-[48px] xl:py-[64px] 2xl:py-[100px] !sbodycolor' id='about'>
            <div className='flex justify-center items-end sm:flex-row flex-col sm:gap-0 gap-[30px] pl-[50px] sm:pl-[70px] md:pl-[100px] lg:pl-[120px] xl:pl-[160px] 2xl:pl-[200x]'>
                <div className='flex-1'>
                    <h2 className='section3 artfinalelonms text-[25px] sm:text-[36px] md:text-[40px] lg:text-[48px] xl:text-[64px] 2xl:text-[73px]'>Who is the Artificial Intelligence Elon on the Solana Blockchain?</h2>
                    <p className='section3 elonmassdSD text-[14px] sm:text-[15px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[32px] pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px]'>Elon has reshaped entire industries - but what if he's not just a human visionary? What if he's an extraterrestrial AI, sent to guide humanity into the future? <br/> From Tesla to SpaceX, Neuralink, and The Boring Company, Elon has introduced groundbreaking technologies that seem almost too advanced. His ability to tackle challenges that others deem impossible has led many to question: Could there be more to Elon than meets the eye? <br/> $EXTAI on the Solana blockchain explores the idea that Elon might not just be a genius entrepreneur, but a higher intelligence pushing humanity toward an extraordinary future - all with the speed and scalability of the Solana blockchain.</p>
                    {/* <Image src={image13} alt="Background" className='filter brightness-88 mix-blend-overlay w-1/3' /> */}

                </div>
                <div className='flex-1 section3 '>
                    <div className='pr-[24px] sm:pr-[32px] md:pr-[36px] lg:pr-[40px] xl:pr-[48px] 2xl:pr-[52px] relative'>
                    <Image className='w-fit absolute -left-[50px] -top-[0px] sm:-left-10 sm:top-10 animate-bounce !w-[70%] md:w-[150px] xl:w-[177px]' alt="imageloasding" src={image14} />
                    <Image className='w-full ' alt="imageloasding" src={image12} />
                    
                    </div>
                </div>
            </div>        
        </div>
    );
};

export default Pagethree;