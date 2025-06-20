'use client';

import { AppBar, Box, Toolbar, Typography, IconButton } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

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

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          borderTop: '1px solid #eee',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 3,
          py: 2,
          fontSize: 14,
          flexWrap: 'wrap',
        }}
      >
        <Typography color="#556882">© 2025 Kontract</Typography>

        <Box display="flex" alignItems="center" gap={2}>
          <IconButton size="small" aria-label="Facebook" sx={{ color: '#556882' }}>
            <FacebookIcon fontSize="small" />
          </IconButton>
          <Typography color="#556882">ENG</Typography>
          <IconButton size="small" aria-label="Twitter" sx={{ color: '#556882' }}>
            <TwitterIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
