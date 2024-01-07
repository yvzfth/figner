import Navbar from '@/components/Navbar';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className='font-sans bg-gray-100'>
      <Navbar />
      {/* Banner Section */}
      <section className='py-12 bg-white text-center relative h-screen'>
        <h2 className='text-3xl font-semibold  mb-4'>Potential Matches</h2>
        <div className='flex justify-end items-end w-full relative ml-[50%] group'>
          {/* Card 1 */}
          <div
            className='w-48 bg-orange-500 rounded-2xl overflow-hidden shadow-lg absolute top-0 left-0 -rotate-6 border-4 border-orange-500
              transition-transform duration-300  group-hover:rotate-0 group-hover:-translate-x-36 group-hover:translate-y-10'
            style={{ zIndex: 3 }}
          >
            <img
              src='https://via.placeholder.com/400'
              alt='User 1'
              className='w-full h-60 object-cover rounded-2xl'
            />
            <div className='p-4'>
              <p className='text-gray-600'>Find Your Love</p>
            </div>
          </div>
          {/* Card 2 */}
          <div
            className='w-48 rounded-2xl overflow-hidden shadow-lg absolute top-10 left-16 border-4 border-rose-500 bg-rose-500
              transition-transform duration-300 '
            style={{ zIndex: 2 }}
          >
            <img
              src='https://via.placeholder.com/400'
              alt='User 2'
              className='w-full h-60 object-cover rounded-2xl'
            />
            <div className='p-4'>
              <p className='text-gray-600'>Made with Love</p>
            </div>
          </div>
          {/* Card 3 */}
          <div
            className='w-48 rounded-2xl overflow-hidden shadow-lg absolute top-20 left-32 rotate-6 border-4 border-purple-500 bg-purple-500
              transition-transform duration-300 group-hover:rotate-0 group-hover:translate-x-36 group-hover:-translate-y-10'
            style={{ zIndex: 1 }}
          >
            <img
              src='https://via.placeholder.com/400'
              alt='User 3'
              className='w-full h-60 object-cover rounded-2xl'
            />
            <div className='p-4'>
              <p className='text-gray-600'>Meet People</p>
            </div>
          </div>
        </div>
        <p className='mt-4 text-gray-600'>Explore more potential matches...</p>
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
