'use client';

import { Box, AppBar, Toolbar } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NAVBAR_HEIGHT = { xs: '64px', sm: '72px', md: '88px' }; // responsive height

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box sx={{ bgcolor: '#fff' }}>
      {/* Navbar */}
      <AppBar
        position="fixed"
      color="transparent"
      elevation={0}
      sx={{
        boxShadow: 'none',
        backgroundColor: '#fff',
         bgcolor: '#fff',
            borderBottom: '1px solid #eee',
        // Removed borderBottom
        width: '100%',
        mx: 'auto',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', minHeight: NAVBAR_HEIGHT }}>
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
        </Toolbar>
      </AppBar>

      {/* Page Content */}
      <Box
        component="main"
      >
        {children}
      </Box>
    </Box>
  );
}
