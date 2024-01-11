// pages/profile/[username].js
'use client';
import { useRouter, usePathname } from 'next/navigation';
import { Box, Typography, Grid, Avatar, Button, Divider } from '@mui/material';
// Placeholder data (replace with actual data)
const userProfileData = {
  fullName: 'John Doe',
  dob: 'January 1, 1990',
  gender: 'Male',
  location: 'City, State, Country',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  relationshipStatus: 'Single',
  occupation: 'Software Developer',
  education: "Bachelor's in Computer Science",
  interests: 'Reading, Coding, Traveling',
  hobbies: 'Photography, Hiking, Cooking',
  socialMediaLinks: {
    facebook: 'https://www.facebook.com/johndoe',
    twitter: 'https://twitter.com/johndoe',
    instagram: 'https://www.instagram.com/johndoe/',
  },
  profilePictures: [
    '/d2.jpg',
    '/d3.png',
    // Add more image URLs as needed
  ],
  privacySettings: {
    profileVisibility: 'Public',
  },
  accountSettings: {
    email: 'john.doe@example.com',
  },
  notificationPreferences: {
    emailNotifications: true,
    appNotifications: true,
  },
  subscriptionDetails: {
    plan: 'Premium',
    expiryDate: 'January 1, 2023',
  },
  matchStatistics: {
    totalMatches: 50,
    successRate: '75%',
  },
  activityInsights: {
    loginsFrequency: 'Daily',
    messagesSent: 200,
    messagesReceived: 150,
  },
  compatibilityMetrics: {
    averageCompatibilityScore: 85,
  },
  testimonials: [
    {
      user: 'Jane Smith',
      content: 'Met an amazing person on this app! Highly recommended.',
    },
    // Add more testimonials as needed
  ],
  badges: ['Active User', 'Premium Member'],
};

const UserProfile = () => {
  const router = useRouter();
  const username = usePathname().split('/').pop();
  //   const { username } = pathname;

  // Handle case when username is not available
  if (!username) {
    return <Typography variant='h4'>Loading...</Typography>;
  }
  console.log(username);
  const {
    fullName,
    dob,
    gender,
    location,
    bio,
    relationshipStatus,
    occupation,
    education,
    interests,
    hobbies,
    socialMediaLinks,
    profilePictures,
    privacySettings,
    accountSettings,
    notificationPreferences,
    subscriptionDetails,
    matchStatistics,
    activityInsights,
    compatibilityMetrics,
    testimonials,
    badges,
  } = userProfileData;

  return (
    <Box className='my-8'>
      {/* Basic Information */}
      <Typography variant='h4' className='mb-4'>
        {fullName}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Avatar
            alt={fullName}
            src={profilePictures[0]}
            className='w-32 h-32 mb-4'
          />
          {/* Extended Details */}
          <Typography variant='h6' className='mb-2'>
            Extended Details
          </Typography>
          <Typography variant='body1'>Bio: {bio}</Typography>
          <Typography variant='body1'>
            Relationship Status: {relationshipStatus}
          </Typography>
          <Typography variant='body1'>Occupation: {occupation}</Typography>
          <Typography variant='body1'>Education: {education}</Typography>
          <Typography variant='body1'>Interests: {interests}</Typography>
          <Typography variant='body1'>Hobbies: {hobbies}</Typography>
          {/* Social Media Links */}
          <Typography variant='h6' className='mt-4 mb-2'>
            Social Media Links
          </Typography>
          <div>
            {socialMediaLinks.facebook && (
              <Button
                variant='outlined'
                color='primary'
                href={socialMediaLinks.facebook}
                target='_blank'
                rel='noopener noreferrer'
                className='mr-2'
              >
                Facebook
              </Button>
            )}
            {socialMediaLinks.twitter && (
              <Button
                variant='outlined'
                color='primary'
                href={socialMediaLinks.twitter}
                target='_blank'
                rel='noopener noreferrer'
                className='mr-2'
              >
                Twitter
              </Button>
            )}
            {socialMediaLinks.instagram && (
              <Button
                variant='outlined'
                color='primary'
                href={socialMediaLinks.instagram}
                target='_blank'
                rel='noopener noreferrer'
              >
                Instagram
              </Button>
            )}
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          {/* Privacy Settings */}
          <Typography variant='h6' className='mb-2'>
            Privacy Settings
          </Typography>
          <Typography variant='body1'>
            Profile Visibility: {privacySettings.profileVisibility}
          </Typography>
          <Divider className='my-3' />
          {/* Account Settings */}
          <Typography variant='h6' className='mb-2'>
            Account Settings
          </Typography>
          <Typography variant='body1'>
            Email: {accountSettings.email}
          </Typography>
          <Divider className='my-3' />
          {/* Notification Preferences */}
          <Typography variant='h6' className='mb-2'>
            Notification Preferences
          </Typography>
          <Typography variant='body1'>
            Email Notifications:{' '}
            {notificationPreferences.emailNotifications
              ? 'Enabled'
              : 'Disabled'}
          </Typography>
          <Typography variant='body1'>
            App Notifications:{' '}
            {notificationPreferences.appNotifications ? 'Enabled' : 'Disabled'}
          </Typography>
          <Divider className='my-3' />
          {/* Subscription Details */}
          <Typography variant='h6' className='mb-2'>
            Subscription Details
          </Typography>
          <Typography variant='body1'>
            Plan: {subscriptionDetails.plan}
          </Typography>
          <Typography variant='body1'>
            Expiry Date: {subscriptionDetails.expiryDate}
          </Typography>
        </Grid>
      </Grid>

      {/* Statistics and Usage Data */}
      <Typography variant='h4' className='my-4'>
        Statistics and Usage Data
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          {/* Match Statistics */}
          <Typography variant='h6' className='mb-2'>
            Match Statistics
          </Typography>
          <Typography variant='body1'>
            Total Matches: {matchStatistics.totalMatches}
          </Typography>
          <Typography variant='body1'>
            Success Rate: {matchStatistics.successRate}
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          {/* Activity Insights */}
          <Typography variant='h6' className='mb-2'></Typography>
          {/* Activity Insights */}
          <Typography variant='h6' className='mb-2'>
            Activity Insights
          </Typography>
          <Typography variant='body1'>
            Logins Frequency: {activityInsights.loginsFrequency}
          </Typography>
          <Typography variant='body1'>
            Messages Sent: {activityInsights.messagesSent}
          </Typography>
          <Typography variant='body1'>
            Messages Received: {activityInsights.messagesReceived}
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          {/* Compatibility Metrics */}
          <Typography variant='h6' className='mb-2'>
            Compatibility Metrics
          </Typography>
          <Typography variant='body1'>
            Average Compatibility Score:{' '}
            {compatibilityMetrics.averageCompatibilityScore}
          </Typography>
        </Grid>
      </Grid>

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <>
          <Typography variant='h4' className='my-4'>
            Testimonials
          </Typography>
          {testimonials.map((testimonial, index) => (
            <div key={index} className='mb-3'>
              <Typography variant='subtitle1'>{testimonial.user}</Typography>
              <Typography variant='body1'>{testimonial.content}</Typography>
            </div>
          ))}
        </>
      )}

      {/* Badges */}
      {badges.length > 0 && (
        <>
          <Typography variant='h4' className='my-4'>
            Badges
          </Typography>
          <div className='flex'>
            {badges.map((badge, index) => (
              <div key={index} className='mr-2'>
                <Typography
                  variant='body1'
                  className='bg-blue-500 text-white p-2 rounded'
                >
                  {badge}
                </Typography>
              </div>
            ))}
          </div>
        </>
      )}
    </Box>
  );
};

export default UserProfile;
