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
        "$EXTAI is a cutting-edge, extraterrestrial-inspired AI project that blends artificial intelligence with unique, otherworldly concepts. The project offers insights, technology, and token benefits to early investors, positioning itself as a game-changer in the crypto space.",
    },
    {
      id: 2,
      question: "How does $EXTAI work?",
      answer:
        "$EXTAI utilizes advanced machine learning algorithms and blockchain technology to provide AI-driven solutions in various sectors.",
    },
    {
      id: 3,
      question: "What are the benefits of investing in $EXTAI?",
      answer:
        "Early investors gain exclusive access to AI technology, partnerships, and unique token benefits that enhance their investment portfolio.",
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
        <div className='sm:section7' id='FAQ'>
            <div className='container mx-auto pb-[50px] sm:pb-[70px] md:pb-[100px] lg:pb-[130px] xl:pb-[160px] 2xl:pb-[190px]'>
                <div className='relative mt-[40px] sm:mt-[40px] md:mt-[50px] lg:mt-[66px] xl:mt-[80px] 2xl:mt-[100px] pb-[32px] sm:pb-[36px] md:pb-[40px] lg:pb-[48px] xl:pb-[64px] 2xl:pb-[73px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-[250px] sm:w-[300px] md:w-[330px] lg:w-[350px] xl:w-[380px] 2xl:w-[497px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' width="497" height="111" viewBox="0 0 497 111" fill="none">
                    <path d="M9.11975 16.6303C10.9031 7.03 19.3582 0.12086 29.1214 0.285909L470.001 7.73909C480.044 7.90887 488.404 15.5016 489.536 25.4822L496.686 88.5254C498.079 100.811 488.103 111.405 475.757 110.752L19.12 86.5862C7.05518 85.9478 -1.69323 74.8399 0.513303 62.9615L9.11975 16.6303Z" fill="#E85400"/>
                    </svg>
                    <h2 className='howtobue text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[57px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>MIND OG PEPE FAQ</h2>
                </div>
                <div className='px-[60px] sm:px-[90px] md:px-[120px] lg:px-[150px] xl:px-[170px] 2xl:px-[200px] mt-[40px] sm:mt-[40px] md:mt-[50px] lg:mt-[66px] xl:mt-[80px] 2xl:mt-[100px]'>
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