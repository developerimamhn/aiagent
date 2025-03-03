import React,{useEffect} from 'react';
import Image from 'next/image';
// import image9 from './image9.png';
import image12 from './image/image12.png';
import image13 from './image/image3.gif';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Pagethree = () => {
    useEffect(() => {
        const ctx = gsap.context(() => {
          gsap.from(".section3", {
            y: 250,
            duration: 2,
            scrollTrigger: {
              trigger: ".section3",
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
        <div className=' trasingviewsectionbackground relative py-[32px] sm:py-[36px] md:py-[40px] lg:py-[48px] xl:py-[64px] 2xl:py-[100px] !sbodycolor' id="About">
            <div className='flex justify-center items-end sm:flex-row flex-col sm:gap-0 gap-[30px] pl-[50px] sm:pl-[70px] md:pl-[100px] lg:pl-[120px] xl:pl-[160px] 2xl:pl-[200x]'>
                <div className='flex-1'>
                    <h2 className='section3 artfinalelonms text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] xl:text-[64px] 2xl:text-[73px]'>Who is the Artificial <br/> Intelligence Elon Musk?</h2>
                    <p className='section3 elonmassdSD text-[14px] sm:text-[15px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[32px] pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px]'>Elon has reshaped entire industries - but what if he's not just a human visionary? What if Musk is an extraterrestrial AI, sent to guide humanity into the future?From Tesla to SpaceX, Neuralink, and The Boring Company, Elon has introduced groundbreaking technologies that seem almost too advanced. His ability to tackle challenges that others deem impossible has led many to question: Could there be more to Elon than meets the eye?$EXTAI delves into the idea that Elon might not just be a genius entrepreneur, but a higher intelligence pushing humanity towards an extraordinary future.</p>
                    <Image src={image13} alt="Background" className='filter brightness-88 mix-blend-overlay w-1/3' />

                </div>
                <div className='flex-1 section3'>
                    <div className='pr-[24px] sm:pr-[32px] md:pr-[36px] lg:pr-[40px] xl:pr-[48px] 2xl:pr-[52px]'>
                    <Image className='w-full ' src={image12} />
                    </div>
                </div>
            </div>        
        </div>
    );
};

export default Pagethree;