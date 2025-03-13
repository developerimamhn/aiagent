"use client";


import React,{useEffect,useState} from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Image from 'next/image';
import backgroundimage from './image/backgronhero.gif';


const faqs = [
  {
    id: 1,
    question: "What is $EXTAI?",
    answer:
      "$EXTAI is a groundbreaking meme coin project on the Solana blockchain, based on the intriguing concept that Elon could be something more than just human - what if he's actually an extraterrestrial AI entity? This isn't just another presale in 2025; it's your opportunity to become part of a pioneering movement that merges the future of blockchain technology with the capabilities of artificial intelligence. Get ready to embrace a new era with $EXTAI!",
  },
  {
    id: 2,
    question: "How do I participate in staking?",
    answer:
      "Staking is incredibly simple! Just link your wallet in the staking section, and then choose the amount you wish to stake.",
  },
  {
    id: 3,
    question: "When does the PRESALE end?",
    answer:
      "The presale will conclude once the target funding is reached or when we officially announce its end. Rest assured, you'll get all the latest updates and key information through our Telegram and X (formerly Twitter) channels. Don't wait too long - secure your place in this exciting project before it's too late!",
  },
  {
    id: 4,
    question: "On which exchange will the launch take place?",
    answer:
      "The launch will take place on Rydium, and you can track the progress and price on platforms like Dextool or Dexscreener. Be sure to follow along as the excitement builds - this is a launch you how not want to miss!",
  },
  {
    id: 5,
    question: "What's next for $EXTAI?",
    answer:
      "$EXTAI isn't just about the present - it's about shaping the future. As a holder, you'll gain access to exclusive insights collected by our AI agent, revealing valuable information that will influence the development of both blockchain and AI technologies. Our goal is to build a thriving community while pushing the limits of what's possible with these technologies. Join us in this journey into the future!",
  },
];




const Pageseven = () => {
    const [openFaq, setOpenFaq] = useState(faqs[0].id); // First item always open

  const toggleFaq = (id) => {
    setOpenFaq((prev) => (prev === id ? null : id)); // Always keeps one open
  };

    useEffect(() => {
        const ctx = gsap.context(() => {
          gsap.from(".section7", {
            y: 250,
            duration: 2,
            scrollTrigger: {
              trigger: ".section7",
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
        <div className='section7' id='FAQ'>
            <div className='container mx-auto py-[32px] sm:py-[36px] md:py-[40px] lg:py-[48px] xl:py-[64px] 2xl:py-[100px]'>
                <div className='relative mt-[40px] sm:mt-[40px] md:mt-[50px] lg:mt-[66px] xl:mt-[80px] 2xl:mt-[100px] pb-[32px] sm:pb-[36px] md:pb-[40px] lg:pb-[48px] xl:pb-[64px] 2xl:pb-[73px]'>
                    <h2 className='howtobue text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] xl:text-[64px] 2xl:text-[73px]'>FAQ</h2>
                </div>
                <div className='px-[60px] sm:px-[90px] md:px-[120px] lg:px-[150px] xl:px-[170px] 2xl:px-[200px] :mt-[20px] md:mt-[30px] lg:mt-[46px] xl:mt-[50px] 2xl:mt-[60px]'>
                    <div className='flex flex-col justify-center items-center '>
                    <div className="w-full flex flex-col gap-6">

                    {faqs.map((faq) => (
                        <div key={faq.id} className="benifitsepepe py-[15px] sm:py-[16px] md:py-[20px] lg:py-[24px] xl:py-[32px] 2xl:py-[34px] px-[20px] sm:px-[24px] md:px-[32px] lg:px-[36px] xl:px-[40px] 2xl:px-[45px] w-full">
                        <div className="flex items-center justify-between w-full">
                            <div className="whatisextass text-[15px] sm:text-[16px] md:text-[20px] lg:text-[24px] xl:text-[32px] 2xl:text-[36px]">
                            {faq.question}
                            </div>
                            <div onClick={() => toggleFaq(faq.id)} className="group cursor-pointer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`w-[20px] sm:w-[24px] md:w-[32px] lg:w-[36px] xl:w-[40px] 2xl:w-[46px] cursor-pointer transition-transform duration-300 ${
                                openFaq === faq.id ? "rotate-180" : "rotate-0"
                                }`}
                                viewBox="0 0 46 47"
                                fill="none"
                            >
                                <g clipPath="url(#clip0_997_651)">
                                <path
                                    d="M22.9831 45.4864C34.8736 45.4864 44.5127 35.8473 44.5127 23.9568C44.5127 12.0664 34.8736 2.42725 22.9831 2.42725C11.0927 2.42724 1.45354 12.0664 1.45354 23.9568C1.45354 35.8473 11.0927 45.4864 22.9831 45.4864Z"
                                    fill={openFaq === faq.id ? "#FF5C00" : "white"}
                                />
                                <path
                                    d="M22.9831 45.4864C34.8736 45.4864 44.5127 35.8473 44.5127 23.9568C44.5127 12.0664 34.8736 2.42725 22.9831 2.42725C11.0927 2.42724 1.45354 12.0664 1.45354 23.9568C1.45354 35.8473 11.0927 45.4864 22.9831 45.4864Z"
                                    stroke={openFaq === faq.id ? "#fff" : "black"}
                                    strokeWidth="1.43149"
                                />
                                <path
                                    d="M12.7183 19.6084L22.8997 29.7898L33.0811 19.6084"
                                    stroke={openFaq === faq.id ? "#fff" : "black"}
                                    strokeWidth="2.14723"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                </g>
                                <defs>
                                <clipPath id="clip0_997_651">
                                    <rect width="46.2703" height="45.8076" fill={openFaq === faq.id ? "#FF5C00" : "white"} transform="translate(45.8896 0.710938) rotate(90)" />
                                </clipPath>
                                </defs>
                            </svg>
                            </div>
                        </div>
                        {openFaq === faq.id && (
                            <p className="extasiscuting text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[26px] pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[17px] pr-[14px] sm:pr-[15px] md:pr-[16px] lg:pr-[20px] xl:pr-[24px] 2xl:pr-[32px]">
                            {faq.answer}
                            </p>
                        )}
                        </div>
                    ))}
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pageseven;