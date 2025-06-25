'use client';

import React from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const centerLinks = [
    { label: 'Home', href: '/' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Jobs', href: '/job' },
    { label: 'News', href: '/news' },
    { label: 'About us', href: '/about-us' },
  ];

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const linkStyles = React.useCallback(
  (href: string) => {
    let isActive = false;

    if (href === '/') {
      isActive = pathname === '/' || pathname.startsWith('/browse-jobs');
    } else {
      isActive = pathname === href || pathname.startsWith(`${href}/`);
    }

    return {
      fontWeight: 600,
      fontSize: '14px',
      lineHeight: '20px',
      letterSpacing: '-0.32%',
      textTransform: 'none',
      color: isActive ? '#000000' : '#808DA1',
      '&:hover': {
        color: '#000000',
        backgroundColor: 'transparent',
      },
    };
  },
  [pathname]
);


  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{
        boxShadow: 'none',
        backgroundColor: '#fff',
        borderBottom: '1px solid #eee',
        width: '100%',
        mx: 'auto',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          height: '88px',
          px: 2,
        }}
      >
        <Box
          component={Link}
          href="/"
          aria-label="Home"
          sx={{ display: 'flex', alignItems: 'center', minWidth: '99px' }}
        >
          <Image
            src="/image/kontractlogo.png"
            alt="Kontract Logo"
            width={99}
            height={44}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </Box>

        {isMobile ? (
          <>
            <IconButton edge="end" color="primary" onClick={toggleDrawer} aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
              <Box sx={{ width: 250, marginTop:10 }} role="presentation">
                <List>
                  {centerLinks.map((item) => (
                    <ListItem
                      key={item.label}
                      component={Link}
                      href={item.href}
                      z-10
                      onClick={toggleDrawer}
                    >
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                          sx: linkStyles(item.href),
                        }}
                      />
                    </ListItem>
                  ))}
                  <ListItem component={Link} href="/login" onClick={toggleDrawer}>
                    <ListItemText
                      primary="Login"
                      primaryTypographyProps={{
                        sx: linkStyles('/login'),
                      }}
                    />
                  </ListItem>
                  <ListItem component={Link} href="/sign-up" onClick={toggleDrawer}>
                    <ListItemText
                      primary="Sign Up"
                      primaryTypographyProps={{
                        sx: linkStyles('/sign-up'),
                      }}
                    />
                  </ListItem>
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          <>
            <Box sx={{ display: 'flex', gap: 2 }}>
              {centerLinks.map((item) => (
                <Button
                  key={item.label}
                  component={Link}
                  href={item.href}
                  sx={linkStyles(item.href)}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                component={Link}
                href="/login"
                sx={{
                  fontWeight: 600,
                  fontSize: '14px',
                  lineHeight: '20px',
                  letterSpacing: '-0.32%',
                  textTransform: 'none',
                  color: '#000000',
                  '&:hover': {
                    backgroundColor: 'transparent',
                    color: '#000000',
                  },
                }}
              >
                Login
              </Button>

              <Button
                variant="contained"
                component={Link}
                href="/sign-up"
                sx={{
                  fontWeight: 600,
                  fontSize: '14px',
                  lineHeight: '20px',
                  letterSpacing: '-0.32%',
                  textTransform: 'none',
                  color: '#fff',
                  backgroundColor: '#0718B9',
                  '&:hover': {
                    backgroundColor: '#0615a3',
                  },
                }}
              >
                Sign Up
              </Button>
            </Box>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
