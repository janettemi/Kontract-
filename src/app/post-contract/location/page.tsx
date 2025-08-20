'use client';

import { Box, TextField, Typography, MenuItem, LinearProgress } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Location = () => {
  const router = useRouter();

  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [lga, setLga] = useState('');
  const [loading, setLoading] = useState(false); //  Loading state

    const handleNextClick = () => {
    setLoading(true);
    setTimeout(() => {
     router.push('/post-contract/financial-terms')
    }, 1000); // simulate delay
  };

  const countryOptions = [
    { label: 'Nigeria', value: 'nigeria' },
    { label: 'Ghana', value: 'ghana' },
    { label: 'Kenya', value: 'kenya' },
  ];

  const stateOptions = [
    { label: 'Lagos', value: 'lagos' },
    { label: 'Oyo', value: 'oyo' },
    { label: 'Abuja', value: 'abuja' },
  ];

  const lgaOptions = [
    { label: 'Ikeja', value: 'ikeja' },
    { label: 'Alimosho', value: 'alimosho' },
    { label: 'Ibadan North', value: 'ibadan-north' },
  ];

  const inputStyles = {
    '& .MuiOutlinedInput-root': {
      borderRadius: '16px',
    },
  };

  return (
    <Box sx={{ display: 'flex', gap: 15, alignItems: 'flex-start', flexWrap: 'wrap' }}>
      {/* Left Section */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400 }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Typography sx={{ fontWeight: 500, fontSize: 16, color: '#6B7280' }}>2/3</Typography>
          <Typography sx={{ fontWeight: 600, fontSize: 18 }}>Create contract</Typography>
        </Box>

        <Typography variant="h6" sx={{ fontWeight: 600 }}>Location</Typography>

        <Typography sx={{ color: '#6B7280', fontSize: 14 }}>
          Specifies the jurisdictional framework (country, state/province, local government) <br />
          under which this contract shall be executed and governed.
        </Typography>
      </Box>

      {/* Right Section */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flex: 1, minWidth: 300 }}>

        {/* Country */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <label style={{ fontSize: 14, fontWeight: 500, color: '#1A1A1A' }}>Country</label>
          <TextField
            select
            fullWidth
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            sx={inputStyles}
          >
            {countryOptions.map((opt) => (
              <MenuItem key={opt.value} value={opt.value}>
                {opt.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        {/* State */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <label style={{ fontSize: 14, fontWeight: 500, color: '#1A1A1A' }}>State</label>
          <TextField
            select
            fullWidth
            value={state}
            onChange={(e) => setState(e.target.value)}
            sx={inputStyles}
          >
            {stateOptions.map((opt) => (
              <MenuItem key={opt.value} value={opt.value}>
                {opt.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        {/* LGA */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <label style={{ fontSize: 14, fontWeight: 500, color: '#1A1A1A' }}>Local Government Area (LGA)</label>
          <TextField
            select
            fullWidth
            value={lga}
            onChange={(e) => setLga(e.target.value)}
            sx={inputStyles}
          >
            {lgaOptions.map((opt) => (
              <MenuItem key={opt.value} value={opt.value}>
                {opt.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      </Box>

      {/* Bottom Navigation Buttons */}
      <Box
        sx={{
          width: '100%',
          maxWidth: '1440px',
          height: '90px',
          mt: 5,
          borderTop: '1px solid #E5E7EB',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 4,
          backgroundColor: '#fff',
        }}
      >
        <Box
          component="button"
          type="button"
          sx={{
            border: '1px solid #0718B9',
            borderRadius: '16px',
            px: 4,
            py: 1.5,
            fontWeight: 500,
            color: '#0718B9',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: '#f3f4f6',
            },
          }}
          onClick={() => router.push('/post-contract')}
        >
          Back
        </Box>

        <Box
          component="button"
          type="button"
          onClick={handleNextClick}
          sx={{
            border: 'none',
            borderRadius: '16px',
            px: 4,
            py: 1.5,
            fontWeight: 500,
            color: 'white',
            backgroundColor: '#0718B9',
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: '#144b2f',
            },
          }}
        >
          Next: Financial terms
        </Box>
      </Box>
       {/* Loading Indicator */}
            {loading && (
              <Box sx={{ width: '100%' }}>
                <LinearProgress />
              </Box>
            )}
    </Box>
  );
};

export default Location;
