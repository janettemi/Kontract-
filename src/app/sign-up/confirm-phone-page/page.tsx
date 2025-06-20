'use client';

import { Box, Button, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation'; // at top

export default function ConfirmPhonePage() {
  const [otp, setOtp] = useState(['', '', '', '', '']);
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const router = useRouter(); // inside your component

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 4) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleResend = () => {
    alert('Code resent!');
  };

  const handleSubmit = () => {
    const code = otp.join('');
    alert(`Submitting code: ${code}`);
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: 'auto',
        px: { xs: 2, sm: 4 },
        py: { xs: 4, sm: 6 },
        textAlign: 'center',
      }}
    >
      <Image src="/icons/Group 9.png" alt="" height={128} width={221} />
      <Typography
        fontSize={{ xs: 24, sm: 30, md: 34 }}
        fontWeight={700}
        mb={1}
      >
        Confirm your phone number
      </Typography>
      <Typography
        fontSize={{ xs: 14, sm: 16, md: 20 }}
        fontWeight={400}
        color="text.secondary"
        mb={2}
      >
        Enter the verification code we sent to: <span>09124698709</span>
      </Typography>

      <Typography
        fontSize={20}
        color="#556882"
        sx={{
          cursor: 'pointer',
          '&:hover': { textDecoration: 'underline', color: '#556882' },
          mb: 3,
        }}
        onClick={() => router.push('/sign-up/confirm-email-page')}
      >
        (Use your email)
      </Typography>

      {/* OTP Inputs */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '8.75px',
          mb: 4,
          flexWrap: 'wrap',
        }}
      >
        {otp.map((digit, index) => (
          <TextField
            key={index}
            inputRef={(el) => (inputRefs.current[index] = el!)}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            inputProps={{
              maxLength: 1,
             style: {
            textAlign: 'center',
            fontSize: 18,
            width: '40px',           // Small size
            height: '48px',
            padding: '10px',
            borderRadius: 8,
            border: '1px solid #E5E5E5',
          },
            }}
          />
        ))}
      </Box>

      {/* Resend */}
      <Typography
        onClick={handleResend}
        sx={{
          color: '#556882',
          mb: 4,
          cursor: 'pointer',
          fontWeight: 500,
          '&:hover': { textDecoration: 'underline' },
        }}
      >
        Resend Code
      </Typography>

      {/* Submit */}
      <Button
        onClick={handleSubmit}
        disabled={otp.some((digit) => digit === '')}
        variant="contained"
        sx={{
          width: { xs: '100%', sm: 520 },
          height: 60,
          borderRadius: '12px',
          px: 4,
          py: '8px',
          fontWeight: 500,
          fontSize: 16,
          bgcolor: '#0718B9',
          textTransform: 'lowercase',
          color: '#fff',
          opacity: otp.some((digit) => digit === '') ? 0.7 : 1,
          '&:disabled': {
            bgcolor: '#ACB2E8',
            color: '#FFFFFF',
          },
        }}
      >
        Submit
      </Button>
    </Box>
  );
}
