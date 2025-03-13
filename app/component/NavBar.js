"use client";


import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useRef, useEffect, createContext, useContext  } from 'react';
import { LiaBarsSolid } from "react-icons/lia";
import { VscChromeClose } from "react-icons/vsc";
import usimage from './image/us.png';
import chimage from './image/ch.jpg';




const NavBar = () => {
    const [toggle, setToggle] = useState(false);
    const menuRef = useRef(null); 
    const menuButtonRef = useRef(null);
    const [scrolled, setScrolled] = useState(false);
    // const [selectedCountry, setSelectedCountry] = useState(countries[0]);


    const handleClickOutside = (event) => {
        // Close menu if clicked outside of menu and toggle button
        if (
            menuRef.current &&
            !menuRef.current.contains(event.target) &&
            (!menuButtonRef.current || !menuButtonRef.current.contains(event.target))
        ) {
            setToggle(false);
        }
    };

    useEffect(() => {
        // Add event listener for clicks outside the component
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    const handleScroll = (e, sectionId) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
          window.scrollTo({
            top: section.offsetTop - 50,
            behavior: "smooth",
          });
          setToggle(false);
        }
      };

      useEffect(() => {
          const handleScroll = () => {
              if (window.scrollY > 50) {
                  setScrolled(true);
              } else {
                  setScrolled(false);
              }
          };
          window.addEventListener("scroll", handleScroll);
          return () => {
              window.removeEventListener("scroll", handleScroll);
          };
      }, []);

    //   aase

    const [selectedImage, setSelectedImage] = useState(usimage); // Default to the first image
  const [isOpen, setIsOpen] = useState(false); // State to manage open/close dropdown

  const handleSelect = (image) => {
    setSelectedImage(image); // Update the selected image
    setIsOpen(false); // Close the dropdown after selecting an option
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle dropdown visibility
  };
  const options = [
    { image: usimage,},
    { image: chimage,},
  ];



    return (
        <div className={` header ${scrolled ? "scrolled" : ""}  w-full`}>
            
            <header className={`roundermine container mx-auto flex justify-between items-center py-[9px] sm:py-[13px] relative px-[24px] sm:px-0`}>
                <div className='sm:hidden relative top-[-11px]'>
                    <div 
                        className={`transition-transform duration-300 ease-in-out ${toggle ? 'opacity-100' : 'opacity-0 -translate-x-2'}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <VscChromeClose className='text-[#000] text-[25px] absolute' />
                    </div>
                    <div ref={menuButtonRef}
                        className={`transition-transform duration-300 ease-in-out ${toggle ? 'opacity-0 translate-x-2' : 'opacity-100'}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <LiaBarsSolid className='text-[#000] text-[25px] absolute' />
                    </div>
                </div>
                <Link href="/" className='Froggo-Logo text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]'>Extraterrestrial <br/> Artificial Intelligence </Link>
                <nav ref={menuRef} className={`navbar-items-main absolute sm:top-0 top-[100%] sm:right-0 sm:relative duration-1000 z-50 sm:opacity-100 flex justify-between items-start sm:items-center gap-[14px] md:gap-[16px] lg:gap-[18px] xl:gap-[20px] 2xl:gap-[22px] p-[8px] md:p-[12px] xl:p-[16px] sm:bg-transparent bg-[#fff] sm:flex-row flex-col p-[20px] sm:p-[0]
                    ${toggle ? 'right-[10]' :'right-[130%]' }
                    ${toggle ? 'opacity-100' : 'opacity-10'} 
                    `} >
                    <a className="Link-manu-bar" href="#Home" onClick={(e) => handleScroll(e, "Home")}>
                    Home
                    </a>
                    {/* <a className="Link-manu-bar" href="#about " onClick={(e) => handleScroll(e, "about ")}>
                    About 
                    </a> */}
                    <a className="Link-manu-bar" href="#about" onClick={(e) => handleScroll(e, "about")}>
                    About
                    </a>
                    <a className="Link-manu-bar" href="#Techmap" onClick={(e) => handleScroll(e, "Techmap")}>
                    Techmap
                    </a>
                    <a className="Link-manu-bar" href="#Tokenomics" onClick={(e) => handleScroll(e, "Tokenomics")}>
                    Tokenomicss
                    </a>
                    <a className="Link-manu-bar" href="#HowToBuy" onClick={(e) => handleScroll(e, "HowToBuy")}>
                    How To Buy
                    </a>
                    <a className="Link-manu-bar" href="#FAQ" onClick={(e) => handleScroll(e, "FAQ")}>
                     FAQ
                    </a>
                    <a className="Link-manu-bar" href="#staking" onClick={(e) => handleScroll(e, "staking")}>
                    staking
                    </a>
                    <a className="Link-manu-bar" href="#whitepaper" onClick={(e) => handleScroll(e, "whitepaper")}>
                    whitepaper
                    </a>
                </nav>
                <div className='flex justify-end items-center gap-[7px] sm:gap-[8px] md:gap-[9px] lg:gap-[10px] xl:gap-[11px] 2xl:gap-[12px]'>
                    <button className='cursor-pointer Link-manu-bar-btn px-[15px] sm:px-[16px] md:px-[20px] lg:px-[24px] xl:px-[32px] 2xl:px-[34px] py-[10px] sm:py-[11px] md:py-[12px] lg:py-[13px] xl:py-[14px]'>Buy $MIND
                    </button>
                    <div className="select-wrapper ">
                        <div className="select-box gap-[4px] lg:gap-[6px] p-[5px] sm:p-[6px] md:p-[7px] lg:p-[8px] xl:p-[9px] 2xl:p-[10px]" onClick={toggleDropdown}>
                            <Image className='rounded-[36px] sm:rounded-[40px] md:rounded-[48px] lg:rounded-[64px] xl:rounded-[96px] 2xl:rounded-[128px] object-cover border-[1px] border-[#A0A0A0]' src={selectedImage} alt="Selected" width={20} height={20} />
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M2.93056 5.15807L7.61556 9.76907C7.71779 9.8702 7.85577 9.92692 7.99956 9.92692C8.14336 9.92692 8.28134 9.8702 8.38356 9.76907L13.0686 5.15907C13.1714 5.05799 13.3099 5.00136 13.4541 5.00136C13.5983 5.00136 13.7367 5.05799 13.8396 5.15907C13.8902 5.20845 13.9305 5.26746 13.9579 5.33264C13.9854 5.39781 13.9996 5.46783 13.9996 5.53857C13.9996 5.6093 13.9854 5.67932 13.9579 5.7445C13.9305 5.80968 13.8902 5.86869 13.8396 5.91807L9.15556 10.5281C8.84704 10.831 8.43194 11.0007 7.99956 11.0007C7.56719 11.0007 7.15209 10.831 6.84356 10.5281L2.15956 5.91807C2.10876 5.86868 2.06838 5.8096 2.04081 5.74433C2.01323 5.67906 1.99902 5.60892 1.99902 5.53807C1.99902 5.46721 2.01323 5.39708 2.04081 5.33181C2.06838 5.26654 2.10876 5.20746 2.15956 5.15807C2.26242 5.05699 2.40086 5.00036 2.54506 5.00036C2.68927 5.00036 2.82771 5.05699 2.93056 5.15807Z" fill="#3C3C3C"/>
                            </svg>
                        </div>

                        {isOpen && (
                            <div className="options">
                            {options.map((option, index) => (
                              <div key={index} onClick={() => handleSelect(option.image)}>
                                <Image src={option.image} alt={option.alt} className='w-[12px] sm:w-[13px] md:w-[14px] lg:w-[15px] xl:w-[16px] 2xl:w-[20px]' />
                              </div>
                            ))}
                          </div>
                        )}
                        </div>

                </div>
            </header>
            <div className='w-full h-[1px] gradinganiction '></div>
        </div>
    );
};

export default NavBar;