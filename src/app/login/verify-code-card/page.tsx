'use client';

import {
  Box,
  Button,
  TextField,
  Typography,
  InputBaseComponentProps,
} from '@mui/material';
import { useRef, useState } from 'react';
import Link from 'next/link';
import BackgroundGrid from '@/conponent/BackgroundGrid';
import Image from 'next/image';

export default function VerifyCodeCard() {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(''));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    const updated = [...otp];
    updated[index] = value;
    setOtp(updated);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleSubmit = () => {
    const code = otp.join('');
    alert(`Verifying code: ${code}`);
  };

  const handleResend = () => {
    alert('Resending code...');
  };

  return (
    <BackgroundGrid>
      <Box
        sx={{
          width: { xs: '90%', sm: 440 },
          maxWidth: '100%',
          bgcolor: '#fff',
          borderRadius: '24px',
          p: { xs: 3, sm: 4 },
          boxShadow: { xs: 'none', sm: '0px 4px 20px rgba(0,0,0,0.05)' },
          mx: 'auto',
          mt: 10,
          textAlign: 'center',
        }}
      >
        <Image src="/image/Custom Icon.png" alt="" width={88} height={88} />
        <Typography fontSize={{ xs: 20, sm: 24 }} fontWeight={600} mb={1}>
          Enter Verification Code
        </Typography>

        <Typography fontSize={14} color="text.secondary" mb={2}>
          We’ve sent a code to <strong>09124698709</strong>
        </Typography>

        {/* OTP Boxes */}
            <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: 1,
                mb: 4,
                flexWrap: 'nowrap', // ensure a single straight line
                maxWidth: { xs: 280, sm: 320, md: 360 },
                mx: 'auto', // center the line
            }}
            >
            {otp.map((digit, index) => (
                <TextField
                key={index}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                inputRef={(el) => (inputRefs.current[index] = el)}
                inputProps={{
                    maxLength: 1,
                    style: {
                    width: 48,
                    height: 48,
                    textAlign: 'center',
                    fontSize: 18,
                    borderRadius: 12,
                    border: '1px solid #E5E5E5',
                    background: '#F6F6F6',
                    },
                }}
                />
            ))}
            </Box>
        <Button
          onClick={handleSubmit}
          disabled={otp.some((digit) => digit === '')}
          variant="contained"
          fullWidth
          sx={{
            height: 48,
            borderRadius: '999px',
            textTransform: 'none',
            fontWeight: 600,
            fontSize: 16,
            bgcolor: '#0718B9',
            color: '#fff',
            opacity: otp.some((digit) => digit === '') ? 0.7 : 1,
            '&:disabled': {
              bgcolor: '#ACB2E8',
              color: '#FFFFFF',
            },
          }}
        >
          Submit Code
        </Button>

        <Typography
          fontSize={14}
          color="#556882"
          mt={3}
          sx={{ cursor: 'pointer', fontWeight: 500 }}
          onClick={handleResend}
        >
          Experiencing issues receiving the code?{' '}
        </Typography>
        <Box component="span" sx={{ textDecoration: 'underline' }}>
            Resend code
          </Box>
      </Box>
    </BackgroundGrid>
  );
}
