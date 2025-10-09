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
      {/* KONTRACT Watermark */}
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: { xs: 0, sm: 180, md: 220 },
          display: { xs: 'none', sm: 'flex' },
          alignItems: 'center',
          justifyContent: 'center',
          opacity: 0.1,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <span
          style={{
            fontFamily: 'Arial',
            fontWeight: 700,
            fontSize: '8vw',
            lineHeight: '1',
            letterSpacing: '-0.64px',
            color: 'transparent',
            WebkitTextStroke: '2px #AAB3C1',
            textAlign: 'center',
            userSelect: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          KONTRACT
        </span>
      </Box>

      <Toolbar
        sx={{
          justifyContent: 'space-between',
          height: { xs: '64px', md: '88px' }, // Responsive height
          px: { xs: 1, sm: 2 },
          minHeight: 'unset !important',
        }}
      >
        <Box
          component={Link}
          href="/"
          aria-label="Home"
          sx={{
            display: 'flex',
            alignItems: 'center',
            minWidth: { xs: '70px', sm: '99px' },
          }}
        >
          <Image
            src="/image/kontractlogo.png"
            alt="Kontract Logo"
            width={99}
            height={44}
            style={{
              maxWidth: '100%',
              height: 'auto',
              width: 'auto',
              minWidth: 70,
            }}
          />
        </Box>

        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="primary"
              onClick={toggleDrawer}
              aria-label="menu"
              sx={{
                ml: 1,
                p: 1.5,
                borderRadius: 2,
              }}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={toggleDrawer}
              PaperProps={{
                sx: {
                  width: '80vw',
                  maxWidth: 320,
                  pt: 2,
                  px: 1,
                },
              }}
            >
              <Box sx={{ width: '100%', mt: 2 }} role="presentation">
                <List>
                  {centerLinks.map((item) => (
                    <ListItem
                      key={item.label}
                      component={Link}
                      href={item.href}
                      onClick={toggleDrawer}
                      sx={{
                        py: 1.5,
                        px: 2,
                        borderRadius: 2,
                        mb: 0.5,
                        '&:hover': { background: '#f5f5f5' },
                      }}
                    >
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                          sx: linkStyles(item.href),
                        }}
                      />
                    </ListItem>
                  ))}
                  <ListItem
                    component={Link}
                    href="/login"
                    onClick={toggleDrawer}
                    sx={{
                      py: 1.5,
                      px: 2,
                      borderRadius: 2,
                      mb: 0.5,
                      '&:hover': { background: '#f5f5f5' },
                    }}
                  >
                    <ListItemText
                      primary="Login"
                      primaryTypographyProps={{
                        sx: linkStyles('/login'),
                      }}
                    />
                  </ListItem>
                  <ListItem
                    component={Link}
                    href="/sign-up"
                    onClick={toggleDrawer}
                    sx={{
                      py: 1.5,
                      px: 2,
                      borderRadius: 2,
                      mb: 0.5,
                      '&:hover': { background: '#f5f5f5' },
                    }}
                  >
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
                  px: 2,
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
                  px: 2.5,
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
