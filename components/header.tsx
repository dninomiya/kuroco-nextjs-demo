import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { useAuth } from '../context/auth';

const navs = [
  {
    label: 'News',
    to: '/news',
  },
  {
    label: 'Contact',
    to: '/contact',
  },
];

const Header = () => {
  const { isLoggedIn, logout } = useAuth();

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          gap: 2,
        }}
      >
        <Link href="/">
          <a>
            <Typography
              variant="h6"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
              component="div"
            >
              Kuroco Demo
            </Typography>
          </a>
        </Link>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {navs.map((nav) => (
            <Link key={nav.label} href={nav.to} passHref>
              <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                {nav.label}
              </Button>
            </Link>
          ))}
        </Box>
        {isLoggedIn ? (
          <Button onClick={logout} color="inherit">
            Logout
          </Button>
        ) : (
          <>
            <Link passHref href="/signup">
              <Button variant="contained" color="secondary">
                Sign Up
              </Button>
            </Link>
            <Link passHref href="/signin">
              <Button color="inherit">Sign In</Button>
            </Link>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
