'use client';
import { useState } from 'react';
import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ClientSignup() {
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = () => {
    if (agreed) {
      router.push('/sign-up/confirm-phone-page');
    }
  };

  return (
    <Box 
      sx={{
      width: '100%',
      maxWidth: 993,
      height: 692,
      gap: '5px',
      display: 'flex',
      flexDirection: 'column',
      mx: 'auto', // center horizontally
      p: { xs: 2, sm: 4 },
    }}
    >
      <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        px: 2, // responsive horizontal padding
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 480, // or 300 if you want it narrower
          textAlign: 'center',
        }}
      >
        <Typography variant="h6" fontWeight={600} fontSize={34} mb={3}>
          Sign up to hire contractors
        </Typography>

        {/* Google Signup */}
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            alignItems: 'center',
            borderRadius: '35px',
            bgcolor: '#F6F6F6',
            border: '1px solid #E0E0E0',
            p: 1.5,
            mb: 4, 
            cursor: 'pointer',
            justifyContent: 'center',
          }}
        >
          <Image src="/icons/google 2.png" alt="Google" width={23} height={23} />
          <Typography fontSize={14}>Sign up with Google</Typography>
        </Box>
      </Box>
    </Box>
      {/* First & Last Name */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 3,
          mb: 3,
        }}
      >
        <Box sx={{ width: { xs: '100%', sm: 480 } }}>
          <Typography fontWeight={500} fontSize={14} mb={1}>
            First Name
          </Typography>
          <TextField
            fullWidth
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            sx={{
              height: 30,
              '& .MuiOutlinedInput-root': {
                height: '50px',
                borderRadius: '12px',
                borderWidth: '1px',
              },
            }}
          />
        </Box>

        <Box sx={{ width: { xs: '100%', sm: 480 } }}>
          <Typography fontWeight={500} fontSize={14} mb={1}>
            Last Name
          </Typography>
          <TextField
            fullWidth
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            sx={{
              height: 30,
              '& .MuiOutlinedInput-root': {
                height: '50px',
                borderRadius: '12px',
                borderWidth: '1px',
              },
            }}
          />
        </Box>
      </Box>

      {/* Email */}
      <Box sx={{ mb: 3, width: '100%', maxWidth: 993 }}>
        <Typography fontWeight={500} fontSize={14} mb={1}>
          Email Address
        </Typography>
        <TextField
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            '& .MuiOutlinedInput-root': {
              height: '50px',
              borderRadius: '12px',
              borderWidth: '1px',
            },
          }}
        />
      </Box>

      {/* Phone */}
      <Box sx={{ mb: 3, width: '100%', maxWidth: 993 }}>
        <Typography fontWeight={500} fontSize={14} mb={1}>
          Phone Number
        </Typography>
        <TextField
          fullWidth
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          sx={{
            '& .MuiOutlinedInput-root': {
              height: '50px',
              borderRadius: '12px',
              borderWidth: '1px',
            },
          }}
        />
      </Box>

      {/* Password */}
      <Box sx={{ mb: 3, width: '100%', maxWidth: 993 }}>
        <Typography fontWeight={500} fontSize={14} mb={1}>
          Password
        </Typography>
        <TextField
          fullWidth
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            '& .MuiOutlinedInput-root': {
              height: '50px',
              borderRadius: '12px',
              borderWidth: '1px',
            },
          }}
        />
      </Box>

      {/* Agreement */}
      <FormControlLabel
        control={
          <Checkbox
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            sx={{ color: '#0718B9' }}
          />
        }
        sx={{ alignItems: 'flex-start'}}
        label={
          <Typography fontSize={14}>
            Yes, I understand and agree to the{' '}
            <Link href="#" style={{ color: '#0718B9', fontWeight: 500 }}>Kontract Terms of Service</Link>, including the{' '}
            <Link href="#" style={{ color: '#0718B9', fontWeight: 500 }}>User Agreement</Link> and{' '}
            <Link href="#" style={{ color: '#0718B9', fontWeight: 500 }}>Privacy Policy</Link>.
          </Typography>
        }
      />
        {/* Submit */}
      <Button
        variant="contained"
        fullWidth
        disabled={!agreed}
        onClick={handleSubmit}
        sx={{
          mt: 2,
          maxWidth: 300,
          mx: 'auto',
          bgcolor: '#0718B9',
          color: '#fff',
          px: 4,
          py: 1.5,
          textTransform: 'lowercase',
          borderRadius: '10px',
          fontWeight: 500,
          fontSize: 16,
          '&:disabled': {
            bgcolor: '#ACB2E8',
            color: '#FFFFFF',
          },
        }}
      >
        Create my account
      </Button>
      <Typography mt={2} fontSize={14} textAlign="center">
        Already have an account?{' '}
        <Link href="/login" style={{ color: '#0718B9', fontWeight: 500 }}>
          Log In
        </Link>
      </Typography>
    </Box>
  );
}
