'use client';

import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Link from 'next/link';
import { useState } from 'react';
import BackgroundGrid from '@/conponent/BackgroundGrid';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // ✅ Add this

export default function LoginCard() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const router = useRouter(); // ✅ Init router

  const handleLogin = () => {
    // Simulate authentication logic here
    // If successful:
    router.push('/login/verify-code-card'); // ✅ Navigate to VerifyCodeCard route
  };

  return (
    <BackgroundGrid>
      <Box
        sx={{
          width: { xs: '100%', sm: 440 },
          maxWidth: '100%',
          borderRadius: '24px',
          padding: { xs: 3, sm: 4 },
          bgcolor: '#FFFFFF',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 3,
          mx: 'auto',
          mt: 10,
          boxShadow: { xs: 'none', sm: '0px 4px 20px rgba(0,0,0,0.05)' },
        }}
      >
        <Box
          sx={{
            p: { xs: 2, sm: 4 },
            textAlign: 'center',
            maxWidth: 800,
            mx: 'auto',
          }}
        >
          <Image src="/icons/Custom Icon.png" alt="" width={88} height={88} />
          <Typography fontSize={{ xs: 20, sm: 24 }} fontWeight={600} mb={1}>
            Login to your account
          </Typography>
          <Typography fontSize={14} color="text.secondary">
            Enter your details to login.
          </Typography>
        </Box>

        {/* Email Field */}
        <Box>
          <Typography fontWeight={500} fontSize={14} mb={1}>
            Email Address
          </Typography>
          <TextField
            fullWidth
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon color="action" />
                </InputAdornment>
              ),
              sx: {
                height: 48,
                borderRadius: '999px',
                bgcolor: '#F6F6F6',
              },
            }}
          />
        </Box>

        {/* Password Field */}
        <Box>
          <Typography fontWeight={500} fontSize={14} mb={1}>
            Password
          </Typography>
          <TextField
            fullWidth
            placeholder="Enter your password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon color="action" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword((prev) => !prev)} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
              sx: {
                height: 48,
                borderRadius: '999px',
                bgcolor: '#F6F6F6',
              },
            }}
          />
        </Box>

        {/* Checkbox & Forgot Password */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 1,
          }}
        >
          <FormControlLabel
            control={
              <Checkbox
                checked={keepLoggedIn}
                onChange={(e) => setKeepLoggedIn(e.target.checked)}
                sx={{ color: '#0718B9' }}
              />
            }
            label="Keep me logged in"
            sx={{ fontSize: 14 }}
          />
          <Link href="/forgot-password" style={{ color: '#0718B9', fontWeight: 500, fontSize: 14 }}>
            Forgot password?
          </Link>
        </Box>

        {/* Login Button */}
        <Button
          onClick={handleLogin}
          variant="contained"
          fullWidth
          disabled={!email || !password}
          sx={{
            bgcolor: '#0718B9',
            color: '#fff',
            height: 48,
            borderRadius: '999px',
            textTransform: 'none',
            fontWeight: 600,
            fontSize: 16,
            opacity: !email || !password ? 0.7 : 1,
            '&:disabled': {
              bgcolor: '#ACB2E8',
              color: '#FFFFFF',
            },
          }}
        >
          Login
        </Button>

        {/* Register Link */}
        <Typography textAlign="center" fontSize={14}>
          Don’t have an account?{' '}
          <Link href="/sign-up" style={{ color: '#0718B9', fontWeight: 500 }}>
            Register
          </Link>
        </Typography>
      </Box>
    </BackgroundGrid>
  );
}
