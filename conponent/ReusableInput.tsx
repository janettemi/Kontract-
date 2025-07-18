'use client';

import { TextField } from '@mui/material';
import React from 'react';

type Props = {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const ReusableInput = ({ placeholder, value, onChange }: Props) => {
  return (
    <TextField
      fullWidth
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      variant="outlined"
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: '16px',
          height: '48px',
          paddingX: '16px',
        },
        '& .MuiInputBase-input': {
          padding: 0,
        },
      }}
    />
  );
};

export default ReusableInput;
