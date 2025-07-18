// app/dashboard/post-contract/layout.tsx
'use client';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

export default function EditContractLayout({ children }: { children: React.ReactNode }) {
  const navbarHeight = 72; // adjust if needed

  return (
    <>
      {/* Fixed Top Navbar */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          height: `${navbarHeight}px`,
          padding: '20px 24px',
          borderBottom: '1px solid #E0E0E0',
          backgroundColor: '#fff',
        }}
      >
        <Image
          src="/image/Background (3).png"
          alt="Post Contract Icon"
          width={40}
          height={40}
          style={{ borderRadius: '7.27px' }}
        />
        <Typography sx={{ color: '#001C44', fontSize: 18, fontWeight: 600 }}>
          Edit Contract
        </Typography>
      </Box>

      {/* Page content with top padding to avoid overlap */}
      <Box sx={{ padding: '24px', paddingTop: `${navbarHeight + 16}px` }}>
        {children}
      </Box>
    </>
  );
}
