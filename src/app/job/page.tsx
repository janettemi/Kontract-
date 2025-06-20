'use client';
import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import BackgroundGrid from '@/conponent/BackgroundGrid';
import Image from 'next/image';
import BuildSection from '@/conponent/BuildInfo';

export default function Job() {
  return (
    <Box>
    <BackgroundGrid>
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          px: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: { xs: 2, sm: 3 },
            maxWidth: 500,
            width: '100%',
          }}
        >
          <Image
            src="/image/Group (1).png"
            alt="timelogo"
            height={237}
            width={240}
            style={{ maxWidth: '100%', height: 'auto' }}
          />

          <Typography variant="h4" fontSize={{ xs: 20, sm: 24 }} color="#0718B9" gutterBottom>
            Coming Soon!!
          </Typography>

          <Typography variant="body1" fontSize={{ xs: 14, sm: 16 }}>
            We're working hard to bring you an extraordinary experience. Stay tuned for the big reveal!
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 1.5,
              width: '100%',
              justifyContent: 'center',
            }}
          >
            <TextField
              placeholder="Enter your email to get notified"
              variant="outlined"
              fullWidth
              sx={{
                maxWidth: { sm: 308 },
                '& .MuiOutlinedInput-root': {
                  height: 38,
                  borderRadius: 2,
                },
              }}
              inputProps={{ style: { padding: '8px 12px' } }}
            />
            <Button
              sx={{
                height: 38,
                px: 3,
                fontSize: 14,
                color: '#ffff',
                borderRadius: '10px',
                bgcolor:"#0718B9",
                whiteSpace: 'nowrap',
              }}
            >
              Notify me
            </Button>
          </Box>
        </Box>
      </Box>
    </BackgroundGrid>
    <BuildSection />
    </Box>
  );
}
