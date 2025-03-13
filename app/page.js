"use client"

import Image from "next/image";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import React, { useEffect, useState } from "react";


export default function Home() {
  const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
  
    useEffect(() => {
      const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };
  
      window.addEventListener("mousemove", handleMouseMove);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);
  
    return (
      <div
        className="w-[16px] blur-[0px] h-[16px] bg-white mt-[8px] rounded-full fixed pointer-events-none transition-transform duration-[2s] z-[99]"
        style={{
          top: position.y,
          left: position.x,
          transform: "translate(-50%, -50%)",
        }}
      ></div>
    );
  };

  return (
    <div className='scroll-auto'>
      <Header/>
      {/* <CustomCursor className='md:block hidden' /> */}
      <Body/>
      <Footer/>
    </div>
  );
}
