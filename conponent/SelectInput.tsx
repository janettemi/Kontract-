'use client';

import React from 'react';
import {
  Box,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
  Checkbox,
  ListItemText,
} from '@mui/material';
import { Cancel } from '@mui/icons-material';

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

  const handleClear = () => {
    onChange('');
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
          renderValue={(selected) => {
            const selectedOption = options.find((opt) => opt.value === selected);
            return selectedOption ? selectedOption.label : '';
          }}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              <Checkbox checked={value === option.value} />
              <ListItemText primary={option.label} />
            </MenuItem>
          ))}

          <Divider />

          <MenuItem onClick={handleClear} sx={{ display: 'flex', justifyContent: 'space-between', }}>
            <Typography sx={{color:"#0A0D14", fontWeight:"400"}}>Clear</Typography>
            <Cancel sx={{ fontSize: 18, color:"#0718B9" }} />
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
