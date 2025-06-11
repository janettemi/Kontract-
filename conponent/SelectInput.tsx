'use client';

import React from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

interface SelectInputProps {
  label?: string;
  value: string;
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
  fullWidth?: boolean;
}

export default function SelectInput({
  label,
  value,
  options,
  onChange,
  fullWidth = true,
}: SelectInputProps) {
  const handleChange = (event: SelectChangeEvent<string>) => {
    onChange(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth={fullWidth}>
        {label && <InputLabel>{label}</InputLabel>}
        <Select
          value={value}
          label={label}
          onChange={handleChange}
          sx={{
            borderRadius: '16px',
            backgroundColor: '#fff',
            height: '48px',
          }}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
