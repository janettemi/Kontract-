// components/ReusableModal.tsx
'use client';
import { Box, Modal } from '@mui/material';
import React from 'react';

type ReusableModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const ReusableModal = ({ open, onClose, children }: ReusableModalProps) => {
  return (
    <Modal open={open} onClose={onClose}>
  <Box
    sx={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      outline: 'none',
    }}
  >
    {children}
  </Box>
</Modal>

  );
};

export default ReusableModal;
