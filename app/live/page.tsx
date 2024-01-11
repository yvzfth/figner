// pages/index.js
'use client';
import { Button, Container, Typography } from '@mui/material';
import {
  FaHeart,
  FaUser,
  FaCalendar,
  FaMapMarker,
  FaInfoCircle,
} from 'react-icons/fa';
import { Toaster, toast } from 'react-hot-toast';

const Home = () => {
  const handleButtonClick = () => {
    toast.success('Button clicked!');
  };

  return (
    <Container className='flex flex-col items-center justify-center min-h-screen'>
      <Typography variant='h4' className='my-4'>
        Welcome to the Dating App
      </Typography>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {/* Match Cards */}
        <div className='bg-white p-4 rounded-md shadow-md'>
          <FaUser className='text-4xl mb-2' />
          <Typography variant='h6'>John Doe</Typography>
          <Typography variant='subtitle1'>Age: 28</Typography>
          <Typography variant='subtitle1'>Location: New York</Typography>
          <Typography variant='body2' className='mt-2'>
            A brief bio/description goes here...
          </Typography>
          <Button
            variant='contained'
            color='primary'
            className='mt-4'
            onClick={handleButtonClick}
          >
            View Profile
          </Button>
        </div>

        {/* Feature Descriptions */}
        <div className='bg-white p-4 rounded-md shadow-md'>
          <FaInfoCircle className='text-4xl mb-2' />
          <Typography variant='h6'>App Features</Typography>
          <Typography variant='body2' className='mt-2'>
            Describe key functionalities and features of the dating app. Use
            visuals to communicate the benefits.
          </Typography>
        </div>

        {/* Premium Plan Details */}
        <div className='bg-white p-4 rounded-md shadow-md'>
          <FaHeart className='text-4xl mb-2' />
          <Typography variant='h6'>Premium Plans</Typography>
          <Typography variant='body2' className='mt-2'>
            Display different subscription tiers with respective features,
            prices, and durations.
          </Typography>
          <Button
            variant='contained'
            color='primary'
            className='mt-4'
            onClick={() => handleButtonClick()}
          >
            Upgrade Now
          </Button>
        </div>
      </div>

      {/* Event Announcements */}
      <div className='bg-white p-4 rounded-md shadow-md my-8'>
        <FaCalendar className='text-4xl mb-2' />
        <Typography variant='h6'>Special Events</Typography>
        <Typography variant='body2' className='mt-2'>
          Showcase ongoing or upcoming special events such as live streams,
          meetups, or exclusive community gatherings.
        </Typography>
        <Button
          variant='contained'
          color='primary'
          className='mt-4'
          onClick={handleButtonClick}
        >
          Join Event
        </Button>
      </div>

      {/* Call-to-Action Elements */}
      <div className='flex space-x-4'>
        <Button variant='contained' color='primary' onClick={handleButtonClick}>
          Explore Matches
        </Button>
        <Button
          variant='contained'
          color='secondary'
          onClick={() => handleButtonClick()}
        >
          Upgrade Now
        </Button>
      </div>

      {/* Visual Design */}
      <div className='bg-gray-200 p-8 mt-8 rounded-md'>
        <Typography variant='h6' className='mb-4'>
          Visual Design
        </Typography>
        <Typography variant='body2'>
          Maintain a visually appealing layout with high-quality images and an
          intuitive user interface. Use vibrant colors, clear typography, and
          effective spacing to enhance readability and engagement.
        </Typography>
      </div>

      {/* React Hot Toast */}
      <Toaster />
    </Container>
  );
};

export default Home;
