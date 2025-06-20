'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // <-- ✅ import useRouter
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function SignupChoice() {
  const [selected, setSelected] = useState<'client' | 'contractor' | null>(null);
  const router = useRouter(); // <-- ✅ initialize router

  const handleCreateAccount = () => {
    if (selected) {
      // Push to appropriate page based on selection
      router.push('/sign-up/create-account');
    }
  };
//  router.push(`/signup/create-account?role=${selected}`);
  return (
    <Box
      sx={{
        p: { xs: 2, sm: 4 },
        textAlign: 'center',
        maxWidth: 800,
        mx: 'auto',
      }}
    >
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: { xs: 24, sm: 30, md: 34 },
          lineHeight: '40px',
          letterSpacing: '-0.32%',
          fontFamily: 'BR Firma',
        }}
        gutterBottom
      >
        Join as a client or contractor
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 3,
          justifyContent: 'center',
          alignItems: 'stretch',
          mt: 4,
        }}
      >
        {/* CLIENT BOX */}
        <Box
          onClick={() => setSelected('client')}
          sx={{
            flex: 1,
            minWidth: { xs: '100%', sm: 300 },
            height: 178,
            borderRadius: '10px',
            border: '2px solid',
            borderColor: selected === 'client' ? '#0718B9' : '#ccc',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            p: 3,
            gap: 1,
            transition: 'all 0.3s ease',
          }}
        >
          <Image src="/icons/user-search.png" alt="client" width={40} height={40} />
          <Typography fontWeight={500} fontSize={24} mt={1}>I'm a Client</Typography>
          <Typography fontSize={19} color="#808DA1">
            I want to order freelance services
          </Typography>
        </Box>

        {/* CONTRACTOR BOX */}
        <Box
          onClick={() => setSelected('contractor')}
          sx={{
            flex: 1,
            minWidth: { xs: '100%', sm: 300 },
            height: 178,
            borderRadius: '10px',
            border: '2px solid',
            borderColor: selected === 'contractor' ? '#0718B9' : '#ccc',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            p: 3,
            gap: 1,
            transition: 'all 0.3s ease',
          }}
        >
          <Image src="/icons/user-edit.png" alt="contractor" width={40} height={40} />
          <Typography fontWeight={500} fontSize={24} mt={1}>I'm a Contractor</Typography>
          <Typography fontSize={20} color="#808DA1">
            I want to offer freelance services
          </Typography>
        </Box>
      </Box>

      <Button
        variant="contained"
        disabled={!selected}
        onClick={handleCreateAccount} // <-- ✅ call navigation handler
        fullWidth
        sx={{
          mt: 4,
          maxWidth: 300,
          mx: 'auto',
          bgcolor: '#0718B9',
          color: '#fff',
          px: 4,
          py: 1.5,
          borderRadius: '10px',
          fontWeight: 500,
          fontSize: 16,
          '&:disabled': {
            bgcolor: '#ACB2E8',
            color: '#FFFFFF',
          },
        }}
      >
        Create Account
      </Button>

      <Typography mt={2} fontSize={14}>
        Already have an account?{' '}
        <Link href="/login" style={{ color: '#0718B9', fontWeight: 500 }}>
          Log In
        </Link>
      </Typography>
    </Box>
  );
}
