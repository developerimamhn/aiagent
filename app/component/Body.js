import React from 'react';
import Pageone from './Pageone';
import Pagetow from './Pagetow';
import Pagethree from './Pagethree';
import Pagefive from './Pagefive';
import Pagesix from './Pagesix';
import Pageseven from './Pageseven';
import backgroundimage from './image/backgronhero.gif';
import Image from 'next/image';

const Body = () => {
    return (
        <div className=''>
            <Pageone/>
            <Pagethree/>
            <Pagefive/>
            <Pagesix/>
            <Pagetow/>
            <Pageseven/>
        </div>
    );
};

export default Body;