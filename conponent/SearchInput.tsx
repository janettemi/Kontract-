// components/SearchInput.tsx
'use client';

import React from 'react';
import { Box, InputBase, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface SearchInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  width?: string | number;
}

export default function SearchInput({
  value,
  onChange,
  placeholder = 'Search...',
  width = '100%',
}: SearchInputProps) {
  return (
    <Box
      sx={{
        width,
        maxWidth: 400,
        height: 48,
        display: 'flex',
        alignItems: 'center',
        borderRadius: '12px',
        border: '1px solid #D0D5DD',
        px: 2,
        backgroundColor: '#fff',
      }}
    >
      <InputBase
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        fullWidth
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon sx={{ color: '#667085' }} />
          </InputAdornment>
        }
        sx={{
          fontSize: 16,
          color: '#101828',
        }}
      />
    </Box>
  );
}
