'use client';

import { AppBar, Box, Toolbar, Typography, IconButton } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const NAVBAR_HEIGHT = { xs: '64px', sm: '72px', md: '88px' };

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh" bgcolor="#fff">
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
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <Image
              src="/image/kontractlogo.png"
              alt="Kontract Logo"
              width={99}
              height={44}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Box>

          <Typography
            fontSize={14}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              color: '#556882',
            }}
          >
            Don’t have an account?
            <Link href="/sign-up" style={{ color: '#0718B9', marginLeft: 4 }}>
              Register
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Page Content */}
      <Box component="main" flex={1}>
        {children}
      </Box>
    </Box>
  );
}
