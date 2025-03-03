"use client";


import React from 'react';
import NavBar from './NavBar';
import HeroArea from './HeroArea';
import Image from 'next/image';
import backgroundimage from './image/backgronhero.gif';

const Header = () => {
    
    return (
        <div className=' setbackground relative overflow-hidden'>
            <div className='voerflow w-full h-full absolute top-0 left-0 z-[-2]' ></div>
            <Image src={backgroundimage} alt="Background" objectFit="cover"  className='w-full h-full absolute top-0 left-0 z-[-3]'/>
            <NavBar/>
            <HeroArea/>
        </div>
    );
};

export default Header;