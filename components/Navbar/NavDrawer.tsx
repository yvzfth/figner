'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FiMenu } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import Link from 'next/link';
import { styled, useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

import { useRouter } from 'next/navigation';

const links = [
  {
    endpoint: 'live',
    name: 'Live',
  },
  { endpoint: 'login', name: 'Login' },
  {
    endpoint: 'signup',
    name: 'Signup',
  },
];
type Anchor = 'top' | 'left' | 'bottom' | 'right';
import { useState } from 'react';
export default function TemporaryDrawer() {
  const router = useRouter();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 250 }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          <IoClose />
        </IconButton>
      </DrawerHeader>
      <List>
        {links.map((link, index) => (
          <Link
            key={index}
            title={link.name}
            href={link.endpoint}
            className={
              navigator.userAgent.includes(`/${link.endpoint}`)
                ? 'text-green-500 '
                : ''
            }
          >
            <ListItem
              sx={{
                textTransform: 'capitalize',
                paddingTop: '0.7rem',
                paddinBottm: '0.7rem',
              }}
              disablePadding
            >
              <ListItemButton>
                <ListItemText primary={link.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={'left'}>
        <FiMenu
          onClick={toggleDrawer('left', true)}
          className='w-[1.4rem] h-[1.4rem]'
        />

        <Drawer
          anchor={'left'}
          open={state['left']}
          onClose={toggleDrawer('left', false)}
        >
          {list('left')}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));
