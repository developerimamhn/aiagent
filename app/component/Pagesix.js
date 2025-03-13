'use client'

import React,{useEffect} from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import image1 from './image/image17.png';
import image2 from './image/image18.png';
import image3 from './image/image19.png';
import image4 from './image/image20.png';
import image5 from './image/image21.png';
import Image from 'next/image';

const Pagesix = () => {

    useEffect(() => {
        const ctx = gsap.context(() => {
          gsap.from(".section6", {
            opacity: 0,
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
      useEffect(() => {
        const ctx = gsap.context(() => {
          gsap.from(".section61", {
            opacity: 0,
            y: 300,
            duration: 2,
            scrollTrigger: {
              trigger: ".section61",
              start: "top 80%",
              end: "top 50%",
              scrub: 2,
            },
          });
        });
      
        ScrollTrigger.refresh();
        return () => ctx.revert();
      }, []);
      useEffect(() => {
        const ctx = gsap.context(() => {
          gsap.from(".section62", {
            opacity: 0,
            y: 300,
            duration: 2,
            scrollTrigger: {
              trigger: ".section62",
              start: "top 80%",
              end: "top 50%",
              scrub: 2,
            },
          });
        });
      
        ScrollTrigger.refresh();
        return () => ctx.revert();
      }, []);
      useEffect(() => {
        const ctx = gsap.context(() => {
          gsap.from(".section63", {
            opacity: 0,
            y: 300,
            duration: 2,
            scrollTrigger: {
              trigger: ".section63",
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
        <div className='relative ' id="HowToBuy">
            <div className='container mx-auto py-[32px] sm:py-[36px] md:py-[40px] lg:py-[48px] xl:py-[64px] 2xl:py-[100px] px-[24px] sm:px-[36px] md:px-[40px] lg:px-[48px] xl:px-[64px] 2xl:px-[100px]'>
            <div className='relative mt-[20px] sm:mt-[24px] md:mt-[32px] lg:mt-[36px] xl:mt-[40px] 2xl:mt-[50px]'>
                <h2 className='howtobue text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] xl:text-[64px] 2xl:text-[73px] '>How can I get $EXTAI?</h2>
                <p className=' extalyoull text-[14px] sm:text-[15px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[32px] mt-[11px] sm:mt-[12px] md:mt-[13px] lg:mt-[14px] xl:mt-[15px] 2xl:mt-[16px]'>To get $EXTAI, you&apos;ll need a crypto wallet that supports Solana tokens, such as Phantom <br className='xl:block hidden' /> Wallet. Follow these simple steps to acquire $EXTAI during the presale:</p>
            </div>
            <div className='relative mt-[35px] sm:mt-[45px] md:mt-[60px] lg:mt-[90px] xl:mt-[120px] 2xl:mt-[150px] pt-[50px] sm:pt-[24px] md:pt-[32px] lg:pt-[36px] xl:pt-[40px] 2xl:pt-[46px] flex flex-col gap-[40px] sm:gap-[50px] md:gap-[60px] lg:gap-[70px] xl:gap-[80px] 2xl:gap-[103px]'>
                <div className='grid grid-cols-1 section6 sm:grid-cols-2 justify-between items-end flex-row '>
                    <div className='relative hwobysection px-[14px] sm:px-[15px] md:px-[16px] lg:px-[20px] xl:px-[24px] 2xl:px-[32px] flex flex-col justify-start items-start flex-1 py-[32px] sm:py-[36px] md:py-[40px] lg:py-[48px] xl:py-[64px] 2xl:py-[82px] group'>
                        <p className='onetext transition-all xl:absolute -top-1/3 lg:-top-1/5 left-[20px] sm:left-[30px] xl:left-[40px] transform'>
                            <Image className='w-[40px] md:w-[50px] lg:w-[60px] xl:w-[80px] 2xl:w-[100px]' src={image1} alt='loading'/>
                        </p>
                        <h2 className='getwallet group-hover:text-[#202022] text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] !text-left'>Set up a Wallet: </h2>
                        <p className="paragonsectoin group-hover:text-[#616166] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[22px]  sm:pt-[14px] md:pt-[15px] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[22px] !text-left">The presale token sale has been announced! Early supporters can acquire tokens at a discount. We are building a strong community through fun meme events!</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-1/2 sm:ml-[11px] sm:mt-[0] mt-[11px] sm:block hidden' viewBox="0 0 337 144" fill="none">
                        <path d="M2 0.5C1.17157 0.5 0.5 1.17157 0.5 2C0.5 2.82843 1.17157 3.5 2 3.5V0.5ZM324.576 142.774C325.162 143.36 326.111 143.36 326.697 142.774L336.243 133.228C336.829 132.642 336.829 131.693 336.243 131.107C335.657 130.521 334.708 130.521 334.122 131.107L325.637 139.592L317.151 131.107C316.565 130.521 315.616 130.521 315.03 131.107C314.444 131.693 314.444 132.642 315.03 133.228L324.576 142.774ZM2 3.5H6.91566V0.5H2V3.5ZM16.747 3.5H26.5783V0.5H16.747V3.5ZM36.4096 3.5H46.241V0.5H36.4096V3.5ZM56.0723 3.5H65.9036V0.5H56.0723V3.5ZM75.7349 3.5H85.5662V0.5H75.7349V3.5ZM95.3976 3.5H105.229V0.5H95.3976V3.5ZM115.06 3.5H124.892V0.5H115.06V3.5ZM134.723 3.5H144.554V0.5H134.723V3.5ZM154.386 3.5H164.217V0.5H154.386V3.5ZM174.048 3.5H183.879V0.5H174.048V3.5ZM193.711 3.5H203.542V0.5H193.711V3.5ZM213.373 3.5H223.205V0.5H213.373V3.5ZM233.036 3.5H242.867V0.5H233.036V3.5ZM252.699 3.5H262.53V0.5H252.699V3.5ZM272.361 3.5H282.193V0.5H272.361V3.5ZM292.024 3.5H296.94V0.5H292.024V3.5ZM296.94 3.5C298.758 3.5 300.533 3.67822 302.249 4.0177L302.831 1.07473C300.925 0.69753 298.954 0.5 296.94 0.5V3.5ZM312.05 8.07999C315.016 10.066 317.57 12.6204 319.557 15.5869L322.049 13.9179C319.845 10.6256 317.011 7.79127 313.719 5.58709L312.05 8.07999ZM323.619 25.3874C323.958 27.1034 324.137 28.8786 324.137 30.6968H327.137C327.137 28.682 326.939 26.7119 326.562 24.8052L323.619 25.3874ZM324.137 30.6968V35.3225H327.137V30.6968H324.137ZM324.137 44.5739V53.8253H327.137V44.5739H324.137ZM324.137 63.0767V72.3281H327.137V63.0767H324.137ZM324.137 81.5794V90.8308H327.137V81.5794H324.137ZM324.137 100.082V109.334H327.137V100.082H324.137ZM324.137 118.585V127.836H327.137V118.585H324.137ZM324.137 137.088V141.713H327.137V137.088H324.137Z" fill="#202022"/>
                        </svg>
                </div>
                <div className='grid grid-cols-1 section61 sm:grid-cols-2 justify-center items-end flex-row '>
                    <div className='flex justify-end items-end'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-1/2 ml-[11px] sm:block hidden' viewBox="0 0 338 143" fill="none">
                        <path d="M335.637 0.213379C336.465 0.213379 337.137 0.884952 337.137 1.71338C337.137 2.54181 336.465 3.21338 335.637 3.21338V0.213379ZM13.0609 142.487C12.4751 143.073 11.5253 143.073 10.9396 142.487L1.39361 132.942C0.807825 132.356 0.807825 131.406 1.39361 130.82C1.9794 130.234 2.92915 130.234 3.51493 130.82L12.0002 139.305L20.4855 130.82C21.0713 130.234 22.021 130.234 22.6068 130.82C23.1926 131.406 23.1926 132.356 22.6068 132.942L13.0609 142.487ZM335.637 3.21338H330.721V0.213379H335.637V3.21338ZM320.89 3.21338H311.058V0.213379H320.89V3.21338ZM301.227 3.21338H291.396V0.213379H301.227V3.21338ZM281.564 3.21338H271.733V0.213379H281.564V3.21338ZM261.902 3.21338H252.07V0.213379H261.902V3.21338ZM242.239 3.21338H232.408V0.213379H242.239V3.21338ZM222.577 3.21338H212.745V0.213379H222.577V3.21338ZM202.914 3.21338H193.083V0.213379H202.914V3.21338ZM183.251 3.21338H173.42V0.213379H183.251V3.21338ZM163.589 3.21338H153.757V0.213379H163.589V3.21338ZM143.926 3.21338H134.095V0.213379H143.926V3.21338ZM124.263 3.21338H114.432V0.213379H124.263V3.21338ZM104.601 3.21338H94.7693V0.213379H104.601V3.21338ZM84.9379 3.21338H75.1066V0.213379H84.9379V3.21338ZM65.2753 3.21338H55.4439V0.213379H65.2753V3.21338ZM45.6126 3.21338H40.697V0.213379H45.6126V3.21338ZM40.697 3.21338C38.8788 3.21338 37.1036 3.3916 35.3876 3.73108L34.8054 0.788114C36.7121 0.410909 38.6822 0.213379 40.697 0.213379V3.21338ZM25.5871 7.79337C22.6206 9.77939 20.0662 12.3338 18.0802 15.3003L15.5873 13.6313C17.7915 10.339 20.6258 7.50465 23.9181 5.30047L25.5871 7.79337ZM14.0179 25.1008C13.6784 26.8168 13.5002 28.5919 13.5002 30.4102H10.5002C10.5002 28.3954 10.6977 26.4253 11.0749 24.5186L14.0179 25.1008ZM13.5002 30.4102V35.0359H10.5002V30.4102H13.5002ZM13.5002 44.2873V53.5387H10.5002V44.2873H13.5002ZM13.5002 62.79V72.0414H10.5002V62.79H13.5002ZM13.5002 81.2928V90.5442H10.5002V81.2928H13.5002ZM13.5002 99.7956V109.047H10.5002V99.7956H13.5002ZM13.5002 118.298V127.55H10.5002V118.298H13.5002ZM13.5002 136.801V141.427H10.5002V136.801H13.5002Z" fill="#202022"/>
                    </svg>
                    </div>
                    <div className='relative hwobysection px-[14px] sm:px-[15px] md:px-[16px] lg:px-[20px] xl:px-[24px] 2xl:px-[32px] flex flex-col justify-start items-start flex-1 py-[32px] sm:py-[36px] md:py-[40px] lg:py-[48px] xl:py-[64px] 2xl:py-[82px] group'>
                        <p className='onetext transition-all xl:absolute -top-1/3 lg:-top-1/5 left-[20px] sm:left-[30px] xl:left-[40px] transform'>
                            <Image className='w-[40px] md:w-[50px] lg:w-[60px] xl:w-[80px] 2xl:w-[100px]' src={image2} alt='loading'/>
                        </p>
                        <h2 className='getwallet group-hover:text-[#202022] text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] '>Set up a Wallet: </h2>
                        <p className="paragonsectoin group-hover:text-[#616166] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[22px]  sm:pt-[14px] md:pt-[15px] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[22px] !text-left">To get $EXTAI, you will need either Solana (SOL) or USDC in your wallet. You can purchase these cryptocurrencies on exchanges like Binance or Coinbase and transfer them to your Phantom Wallet.</p>
                    </div>
                    
                </div>
                <div className='grid grid-cols-1 section62 sm:grid-cols-2 justify-between items-end flex-row '>
                    <div className='relative hwobysection px-[14px] sm:px-[15px] md:px-[16px] lg:px-[20px] xl:px-[24px] 2xl:px-[32px] flex flex-col justify-start items-start flex-1 py-[32px] sm:py-[36px] md:py-[40px] lg:py-[48px] xl:py-[64px] 2xl:py-[82px] group'>
                        <p className='onetext transition-all  xl:absolute -top-1/3 lg:-top-1/5 left-[20px] sm:left-[30px] xl:left-[40px] transform'>
                            <Image className='w-[40px] md:w-[50px] lg:w-[60px] xl:w-[80px] 2xl:w-[100px]' src={image3} alt='loading'/>
                        </p>
                        <h2 className='getwallet group-hover:text-[#202022] text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] '>Fund Your Wallet:</h2>
                        <p className="paragonsectoin group-hover:text-[#616166] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[22px]  sm:pt-[14px] md:pt-[15px] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[22px] !text-left">After connecting your wallet, go to the Presale section and choose how much Solana (SOL) or USDC you want to exchange for $EXTAI tokens. The presale platform will automatically calculate the amount of $EXTAI you will receive.</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-1/2 ml-[11px] sm:block hidden' viewBox="0 0 337 144" fill="none">
                        <path d="M2 0.5C1.17157 0.5 0.5 1.17157 0.5 2C0.5 2.82843 1.17157 3.5 2 3.5V0.5ZM324.576 142.774C325.162 143.36 326.111 143.36 326.697 142.774L336.243 133.228C336.829 132.642 336.829 131.693 336.243 131.107C335.657 130.521 334.708 130.521 334.122 131.107L325.637 139.592L317.151 131.107C316.565 130.521 315.616 130.521 315.03 131.107C314.444 131.693 314.444 132.642 315.03 133.228L324.576 142.774ZM2 3.5H6.91566V0.5H2V3.5ZM16.747 3.5H26.5783V0.5H16.747V3.5ZM36.4096 3.5H46.241V0.5H36.4096V3.5ZM56.0723 3.5H65.9036V0.5H56.0723V3.5ZM75.7349 3.5H85.5662V0.5H75.7349V3.5ZM95.3976 3.5H105.229V0.5H95.3976V3.5ZM115.06 3.5H124.892V0.5H115.06V3.5ZM134.723 3.5H144.554V0.5H134.723V3.5ZM154.386 3.5H164.217V0.5H154.386V3.5ZM174.048 3.5H183.879V0.5H174.048V3.5ZM193.711 3.5H203.542V0.5H193.711V3.5ZM213.373 3.5H223.205V0.5H213.373V3.5ZM233.036 3.5H242.867V0.5H233.036V3.5ZM252.699 3.5H262.53V0.5H252.699V3.5ZM272.361 3.5H282.193V0.5H272.361V3.5ZM292.024 3.5H296.94V0.5H292.024V3.5ZM296.94 3.5C298.758 3.5 300.533 3.67822 302.249 4.0177L302.831 1.07473C300.925 0.69753 298.954 0.5 296.94 0.5V3.5ZM312.05 8.07999C315.016 10.066 317.57 12.6204 319.557 15.5869L322.049 13.9179C319.845 10.6256 317.011 7.79127 313.719 5.58709L312.05 8.07999ZM323.619 25.3874C323.958 27.1034 324.137 28.8786 324.137 30.6968H327.137C327.137 28.682 326.939 26.7119 326.562 24.8052L323.619 25.3874ZM324.137 30.6968V35.3225H327.137V30.6968H324.137ZM324.137 44.5739V53.8253H327.137V44.5739H324.137ZM324.137 63.0767V72.3281H327.137V63.0767H324.137ZM324.137 81.5794V90.8308H327.137V81.5794H324.137ZM324.137 100.082V109.334H327.137V100.082H324.137ZM324.137 118.585V127.836H327.137V118.585H324.137ZM324.137 137.088V141.713H327.137V137.088H324.137Z" fill="#202022"/>
                        </svg>
                </div>
                <div className='grid grid-cols-1 section6 sm:grid-cols-2 justify-center items-end flex-row '>
                    <div className='flex justify-end items-end'>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-1/2 ml-[11px] sm:block hidden' viewBox="0 0 338 143" fill="none">
                    <path d="M335.637 0.213379C336.465 0.213379 337.137 0.884952 337.137 1.71338C337.137 2.54181 336.465 3.21338 335.637 3.21338V0.213379ZM13.0609 142.487C12.4751 143.073 11.5253 143.073 10.9396 142.487L1.39361 132.942C0.807825 132.356 0.807825 131.406 1.39361 130.82C1.9794 130.234 2.92915 130.234 3.51493 130.82L12.0002 139.305L20.4855 130.82C21.0713 130.234 22.021 130.234 22.6068 130.82C23.1926 131.406 23.1926 132.356 22.6068 132.942L13.0609 142.487ZM335.637 3.21338H330.721V0.213379H335.637V3.21338ZM320.89 3.21338H311.058V0.213379H320.89V3.21338ZM301.227 3.21338H291.396V0.213379H301.227V3.21338ZM281.564 3.21338H271.733V0.213379H281.564V3.21338ZM261.902 3.21338H252.07V0.213379H261.902V3.21338ZM242.239 3.21338H232.408V0.213379H242.239V3.21338ZM222.577 3.21338H212.745V0.213379H222.577V3.21338ZM202.914 3.21338H193.083V0.213379H202.914V3.21338ZM183.251 3.21338H173.42V0.213379H183.251V3.21338ZM163.589 3.21338H153.757V0.213379H163.589V3.21338ZM143.926 3.21338H134.095V0.213379H143.926V3.21338ZM124.263 3.21338H114.432V0.213379H124.263V3.21338ZM104.601 3.21338H94.7693V0.213379H104.601V3.21338ZM84.9379 3.21338H75.1066V0.213379H84.9379V3.21338ZM65.2753 3.21338H55.4439V0.213379H65.2753V3.21338ZM45.6126 3.21338H40.697V0.213379H45.6126V3.21338ZM40.697 3.21338C38.8788 3.21338 37.1036 3.3916 35.3876 3.73108L34.8054 0.788114C36.7121 0.410909 38.6822 0.213379 40.697 0.213379V3.21338ZM25.5871 7.79337C22.6206 9.77939 20.0662 12.3338 18.0802 15.3003L15.5873 13.6313C17.7915 10.339 20.6258 7.50465 23.9181 5.30047L25.5871 7.79337ZM14.0179 25.1008C13.6784 26.8168 13.5002 28.5919 13.5002 30.4102H10.5002C10.5002 28.3954 10.6977 26.4253 11.0749 24.5186L14.0179 25.1008ZM13.5002 30.4102V35.0359H10.5002V30.4102H13.5002ZM13.5002 44.2873V53.5387H10.5002V44.2873H13.5002ZM13.5002 62.79V72.0414H10.5002V62.79H13.5002ZM13.5002 81.2928V90.5442H10.5002V81.2928H13.5002ZM13.5002 99.7956V109.047H10.5002V99.7956H13.5002ZM13.5002 118.298V127.55H10.5002V118.298H13.5002ZM13.5002 136.801V141.427H10.5002V136.801H13.5002Z" fill="#202022"/>
                    </svg>
                    </div>
                    <div className='relative hwobysection px-[14px] sm:px-[15px] md:px-[16px] lg:px-[20px] xl:px-[24px] 2xl:px-[32px] flex flex-col justify-start items-start flex-1 py-[32px] sm:py-[36px] md:py-[40px] lg:py-[48px] xl:py-[64px] 2xl:py-[82px] group'>
                        <p className='onetext transition-all xl:absolute -top-1/3 lg:-top-1/5 left-[20px] sm:left-[30px] xl:left-[40px] transform'>
                            <Image className='w-[40px] md:w-[50px] lg:w-[60px] xl:w-[80px] 2xl:w-[100px]' src={image4} alt='loading'/>
                        </p>
                        <h2 className='getwallet group-hover:text-[#202022] text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] '>Connect Your Wallet: </h2>
                        <p className="paragonsectoin group-hover:text-[#616166] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[22px]  sm:pt-[14px] md:pt-[15px] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[22px] !text-left">Once you have entered the desired amount, confirm the transaction, and the $EXTAI tokens will be sent directly to your connected wallet.</p>
                    </div>
                    
                </div>
                <div className='grid grid-cols-1 section63 sm:grid-cols-2 justify-between items-end flex-row '>
                    <div className='relative hwobysection px-[14px] sm:px-[15px] md:px-[16px] lg:px-[20px] xl:px-[24px] 2xl:px-[32px] flex flex-col justify-start items-start flex-1 py-[32px] sm:py-[36px] md:py-[40px] lg:py-[48px] xl:py-[64px] 2xl:py-[82px] group'>
                        <p className='onetext transition-all xl:absolute -top-1/3 lg:-top-1/5 left-[20px] sm:left-[30px] xl:left-[40px] transform'>
                            <Image className='w-[40px] md:w-[50px] lg:w-[60px] xl:w-[80px] 2xl:w-[100px]' src={image5} alt='loading'/>
                        </p>
                        <h2 className='getwallet group-hover:text-[#202022] text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] '>Exchange Solana or USDC for $EXTAI: </h2>
                        <p className="paragonsectoin group-hover:text-[#616166] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[22px]  sm:pt-[14px] md:pt-[15px] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[22px] !text-left">If you do not already have one, download and set up Phantom Wallet (available as a browser extension or mobile app). Be sure to secure your wallet with a strong password and back up your recovery phrase.</p>
                    </div>
                    <></>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Pagesix;