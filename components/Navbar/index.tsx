import React from 'react';
import NavLink from './NavLink';
import Link from 'next/link';
import NavDrawer from './NavDrawer';
import Image from 'next/image';

const Navbar = () => {
  return (
    <header id='header'>
      <div className='flex items-center backdrop-blur-md bg-white bg-opacity-[0.85] border-b '>
        <div className='flex items-center justify-between container mx-auto px-4 sm:px-8'>
          {/* <div className='fixed top-0 z-50 backdrop-blur-sm bg-white bg-opacity-[0.85] border-b shadow-sm w-full'>
        <div
        className=' flex py-2 px-4 space-x-4 justify-between lg:justify-between 
        items-center container mx-auto'
      > */}
          <div className='inline-flex lg:hidden pt-2'>
            <NavDrawer />
          </div>
          <Link href='/'>
            <Image
              width={50}
              height={50}
              className=' m-1'
              src='/android-chrome-512x512.png'
              alt='logo'
            />
          </Link>

          <div className='h-10 w-10'></div>
          <div className='hidden lg:flex space-x-2 lg:space-x-4 pt-2'>
            <NavLink />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
