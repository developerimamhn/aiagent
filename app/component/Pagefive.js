import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import image1 from './image/dff030388a8640ddfbc3e7588ae56077.gif';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import  AnimatedSVG  from './AnimatedSVG'


const Pagefive = () => {
  const [count, setCount] = useState(0);
  const numberRef = useRef(null);




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




  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let animation = gsap.to({}, {
      duration: 2,
      onUpdate: function () {
        let progress = Math.round(animation.progress() * 100000000);
        setCount(progress);
      },
      scrollTrigger: {
        trigger: numberRef.current,
        start: "top 80%", // Animation starts when element is 80% in viewport
        toggleActions: "play none none none",
      },
    });

    return () => animation.kill(); // Cleanup on unmount
  }, []);

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);  // Start animation when component mounts
  }, []);


    return (
        <div className='relative !sbodycolor' id="Tokenomics">
            <div className='container mx-auto py-[32px] sm:py-[36px] md:py-[40px] lg:py-[48px] xl:py-[64px] 2xl:py-[100px] px-[24px] sm:px-[36px] md:px-[40px] lg:px-[48px] xl:px-[64px] 2xl:px-[100px]'>
                <h2 className=' tokengroup text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] xl:text-[64px] 2xl:text-[80px]'>TOKENOMICS</h2>
                <h3
                  ref={numberRef}
                  className="tokenmonygrop text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[61px]"
                >
                  {count.toLocaleString()}
                </h3>
                <AnimatedSVG/>
            </div>
        </div>
    );
};

export default Pagefive;