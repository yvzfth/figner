'use client';
import Navbar from '@/components/Navbar';
import { Button } from '@nextui-org/react';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className='font-sans bg-gray-100'>
      <Navbar />
      {/* Banner Section */}
      <section className='py-12 px-16 lg:px-20 flex flex-col lg:flex-row justify-center items-center lg:items-center bg-white text-center relative h-screen'>
        <div className=''>
          <div className='text-3xl tracking-wider'>Find your love</div>
          <div className='text-5xl tracking-wider'>By Being</div>
          <div className='text-6xl'>Yourself</div>

          <Button
            radius='full'
            className='bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg py-4 px-6 rounded-full text-xl tracking-widest mt-4'
          >
            Your Love
          </Button>
        </div>
        {/* <img
          className='absolute w-[40%] mt-32 z-10 bg-transparent'
          src='/Vector 1.svg'
          alt=''
        /> */}
        <div className='w-full relative ml-[8%] lg:ml-[30%] mt-[20%] lg:-mt-[40%] group'>
          {/* Card 1 */}
          <div
            className='w-48 bg-orange-500 rounded-2xl overflow-hidden shadow-lg absolute top-0 left-0 -rotate-6 border-4 border-orange-500
              transition-transform duration-300  group-hover:rotate-0 group-hover:-translate-x-36 group-hover:translate-y-10'
            style={{ zIndex: 3 }}
          >
            <img
              src='/Online dating-rafiki.png'
              alt='User 1'
              className='w-full h-60 object-cover bg-white rounded-2xl'
              loading='lazy'
            />
            <div className='p-4'>
              <p className='text-white'>Find Your Love</p>
            </div>
          </div>
          {/* Card 2 */}
          <div
            className='w-48 rounded-2xl overflow-hidden shadow-lg absolute top-10 left-16 border-4 border-rose-500 bg-rose-500
              transition-transform duration-300 '
            style={{ zIndex: 2 }}
          >
            <img
              src='/d2.jpg'
              alt='User 2'
              className='w-full h-60 object-cover rounded-2xl'
            />
            <div className='p-4'>
              <p className='text-white'>Made with Love</p>
            </div>
          </div>
          {/* Card 3 */}
          <div
            className='w-48 rounded-2xl overflow-hidden shadow-lg absolute top-20 left-32 rotate-6 border-4 border-purple-500 bg-purple-500
              transition-transform duration-300 group-hover:rotate-0 group-hover:translate-x-36 group-hover:-translate-y-10'
            style={{ zIndex: 1 }}
          >
            <img
              src='/d3.png'
              alt='User 3'
              className='w-full h-60 object-cover bg-white rounded-2xl'
            />
            <div className='p-4'>
              <p className='text-white'>Meet People</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className='bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-24 text-center text-white'>
        <h1 className='text-4xl font-bold mb-4'>Welcome to Our Dating App!</h1>
        <p className='text-lg'>
          Find your perfect match and enjoy meaningful connections.
        </p>
        {/* Add any hero image or video here */}
      </section>

      {/* Features Section */}
      <section className='py-16 bg-white'>
        <h2 className='text-3xl font-semibold text-center mb-8'>
          Key Features
        </h2>
        <div className='flex justify-center gap-8'>
          {/* Feature Cards/Grid */}
          <div className='w-64 bg-gray-100 rounded-lg p-6 shadow-md'>
            <h3 className='text-xl font-semibold mb-4'>Video Calls</h3>
            <p className='text-gray-600'>
              Connect with your match through video calls.
            </p>
          </div>
          {/* More feature cards */}
        </div>
      </section>

      {/* Premium Plans Section */}
      <section className='py-16 bg-gray-200'>
        <h2 className='text-3xl font-semibold text-center mb-8'>
          Premium Plans
        </h2>
        <div className='flex justify-center gap-8'>
          {/* Pricing Cards/Comparison Table */}
          <div className='w-64 bg-white rounded-lg p-6 shadow-md'>
            <h3 className='text-xl font-semibold mb-2'>Basic</h3>
            <p className='text-gray-600'>Free</p>
            <ul className='text-gray-600 mt-2'>
              <li>Basic Features</li>
              {/* More basic features */}
            </ul>
            <a
              href='#'
              className='block text-center py-2 px-4 bg-blue-500 text-white rounded mt-4 hover:bg-blue-600'
            >
              Upgrade
            </a>
          </div>
          {/* More plan cards */}
        </div>
      </section>

      {/* Special Events Section */}
      <section className='py-16 bg-white'>
        <h2 className='text-3xl font-semibold text-center mb-8'>
          Special Events
        </h2>
        <div className='flex justify-center gap-8'>
          {/* Event Highlights */}
          <div className='w-64 bg-gray-100 rounded-lg p-6 shadow-md'>
            <h3 className='text-xl font-semibold mb-2'>Virtual Meetup</h3>
            <p className='text-gray-600'>Join our virtual meetup on [date].</p>
            <a
              href='#'
              className='block text-center py-2 px-4 bg-blue-500 text-white rounded mt-4 hover:bg-blue-600'
            >
              Details
            </a>
          </div>
          {/* More event highlights */}
        </div>
      </section>

      {/* Live Chats & Private Chat Rooms Section */}
      <section className='py-16 bg-gray-200'>
        <h2 className='text-3xl font-semibold text-center mb-8'>
          Live Chats & Private Chat Rooms
        </h2>
        <div className='flex justify-center gap-8'>
          {/* Live Chat Widget */}
          <div className='w-64 bg-white rounded-lg p-6 shadow-md'>
            {/* Add live chat display */}
          </div>
          {/* Private Chat Room Showcase */}
          <div className='w-64 bg-white rounded-lg p-6 shadow-md'>
            {/* Add private chat room descriptions */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
