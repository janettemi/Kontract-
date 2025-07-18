'use client';
import {
  Box,
  TextField,
  Typography,
  MenuItem,
  Tooltip,
} from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const FinancialTerms = () => {
  const [paymentTerm, setPaymentTerm] = useState('');
  const [minBudget, setMinBudget] = useState('');
  const [maxBudget, setMaxBudget] = useState('');
  const [duration, setDuration] = useState('');
  const [durationUnit, setDurationUnit] = useState('');
  const [bankName, setBankName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const router = useRouter();

  const paymentOptions = [
    { label: 'Upfront payment', value: 'fixed' },
    {
      label: 'Escrow payment',
      value: 'hourly',
      tooltip:
        'Escrow payment system ensures secure transactions between clients and contractors. Funds are held until project completion. A 5% fee on the project value is deducted before release, offering protection and trust for both parties throughout the contract.',
    },
    { label: 'Contractor-funded', value: 'milestone' },
  ];

  const durationUnitOptions = [
    { label: 'Days', value: 'days' },
    { label: 'Weeks', value: 'weeks' },
    { label: 'Months', value: 'months' },
  ];

  const inputStyles = {
    '& .MuiOutlinedInput-root': {
      borderRadius: '16px',
    },
  };

  const handleTooltipOpen = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation(); // Prevent menu selection
    setAnchorEl(event.currentTarget);
  };

  const handleTooltipClose = () => {
    setAnchorEl(null);
  };

  const isPopoverOpen = Boolean(anchorEl);

  return (
    <Box sx={{ display: 'flex', gap: 15, alignItems: 'flex-start', flexWrap: 'wrap' }}>
      {/* Left */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400 }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Typography sx={{ fontWeight: 500, fontSize: 16, color: '#6B7280' }}>3/3</Typography>
          <Typography sx={{ fontWeight: 600, fontSize: 18 }}>Create contract</Typography>
        </Box>

        <Typography variant="h6" sx={{ fontWeight: 600 }}>Financial terms</Typography>

        <Typography sx={{ color: '#6B7280', fontSize: 14 }}>
          Outlines agreed payment structure, specified budget constraints,
          and the duration of the contract to ensure clarity and mutual understanding before engagement.
        </Typography>
      </Box>

      {/* Right */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flex: 1, minWidth: 300 }}>
        {/* Payment Terms */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <label style={{ fontSize: 14, fontWeight: 500, color: '#1A1A1A' }}>
            Payment Terms
          </label>

          <TextField
            select
            fullWidth
            value={paymentTerm}
            onChange={(e) => setPaymentTerm(e.target.value)}
            sx={inputStyles}
          >
           {paymentOptions.map((opt) => (
            <MenuItem key={opt.value} value={opt.value}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <span>{opt.label}</span>
                {opt.tooltip && (
                    <Tooltip
                    title={
                        <Typography sx={{ fontSize: 14, maxWidth: 330 }}>
                        <strong>{opt.label}:</strong> {opt.tooltip}
                        </Typography>
                    }
                    placement="right"
                    arrow
                    >
                    <InfoOutlinedIcon fontSize="small" sx={{ color: '#6B7280', cursor: 'pointer' }} />
                    </Tooltip>
                )}
                </Box>
            </MenuItem>
            ))}
          </TextField>
        </Box>

        {/* Escrow Fields */}
        {paymentTerm === 'hourly' && (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <label style={{ fontSize: 14, fontWeight: 500, color: '#1A1A1A' }}>Bank Name</label>
              <TextField
                fullWidth
                placeholder="Enter bank name"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
                sx={inputStyles}
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <label style={{ fontSize: 14, fontWeight: 500, color: '#1A1A1A' }}>Account Number</label>
              <TextField
                fullWidth
                placeholder="Enter account number"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                sx={inputStyles}
              />
            </Box>
          </Box>
        )}

        {/* Budget */}
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
            <label style={{ fontSize: 14, fontWeight: 500, color: '#1A1A1A' }}>Min. budget</label>
            <TextField
              fullWidth
              placeholder="#"
              value={minBudget}
              onChange={(e) => setMinBudget(e.target.value)}
              sx={inputStyles}
            />
          </Box>
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
            <label style={{ fontSize: 14, fontWeight: 500, color: '#1A1A1A' }}>Max. budget</label>
            <TextField
              fullWidth
              placeholder="#"
              value={maxBudget}
              onChange={(e) => setMaxBudget(e.target.value)}
              sx={inputStyles}
            />
          </Box>
        </Box>

        {/* Duration */}
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
            <label style={{ fontSize: 14, fontWeight: 500, color: '#1A1A1A' }}>Contract duration</label>
            <TextField
              fullWidth
              placeholder="Enter contract duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              sx={inputStyles}
            />
          </Box>
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
            <label style={{ fontSize: 14, fontWeight: 500, color: '#1A1A1A' }}>Duration Unit</label>
            <TextField
              select
              fullWidth
              value={durationUnit}
              onChange={(e) => setDurationUnit(e.target.value)}
              sx={inputStyles}
            >
              {durationUnitOptions.map((opt) => (
                <MenuItem key={opt.value} value={opt.value}>
                  {opt.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        </Box>
      </Box>

      {/* Navigation */}
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
          onClick={() => router.push('/post-contract/location')}
        >
          Back
        </Box>

        <Box
          component="button"
          type="button"
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
          onClick={() => router.push('/post-contract/contract-details')}
        >
          Next: Review contract
        </Box>
      </Box>
    </Box>
  );
};

export default FinancialTerms;
