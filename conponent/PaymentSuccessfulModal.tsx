'use client';

import { Box, Typography } from '@mui/material';
import ReusableModal from '@/components/ui/ReusableModal';
import CustomButton from '@/conponent/CustomButton';
import Image from 'next/image';
import React from 'react';

type Props = {
  open: boolean;
  onClose: () => void;
  amount: string;
  transactionId: string;
  date: string;
  onViewReceipt?: () => void;
};

const PaymentSuccessfulModal = ({
  open,
  onClose,
  amount,
  transactionId,
  date,
  onViewReceipt,
}: Props) => {
  return (
    <ReusableModal open={open} onClose={onClose}>
      <Box
        sx={{
          width: 500,
          borderRadius: '10px',
          backgroundColor: '#fff',
          padding: 4,
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: 200,
            height: 200,
            borderRadius: '8.33px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image src="/icons/Group 1063.png" alt="Success" width={200} height={200} />
        </Box>

        <Typography sx={{ fontSize: 22, fontWeight: 600, color: '#001C44' }}>
          Payment Successful
        </Typography>

        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Box
                sx={{
                display: 'flex',
                justifyContent: 'space-between',
                fontWeight: 600,
                mt: 1,
                fontSize: 16,
                color: '#001C44',
                }}>
            <Typography sx={{ fontSize: 16, fontWeight: 500, color: '#001C44' }}>
             Amount Paid:
            </Typography>
            <Typography sx={{ fontSize: 16, fontWeight: 400, color: '#001C44', mb: 1 }}>{amount}</Typography>
            </Box>

           <Box
                sx={{
                display: 'flex',
                justifyContent: 'space-between',
                fontWeight: 600,
                mt: 1,
                fontSize: 16,
                color: '#001C44',
                }}>
            <Typography sx={{ fontSize: 16, fontWeight: 500, color: '#001C44' }}>
             Transaction ID:
            </Typography>
            <Typography sx={{ fontSize: 16, fontWeight: 400, color: '#001C44', mb: 1 }}>{transactionId}</Typography>
            </Box>

            <Box
                sx={{
                display: 'flex',
                justifyContent: 'space-between',
                fontWeight: 600,
                mt: 1,
                fontSize: 16,
                color: '#001C44',
                }}>
            <Typography sx={{ fontSize: 16, fontWeight: 500, color: '#001C44' }}>
              Date:
            </Typography>
            <Typography sx={{ fontSize: 16, fontWeight: 400, color: '#001C44', mb: 1 }}>{date}</Typography>
            </Box>
        </Box>

        <CustomButton
          bgColor="#0718B9"
            textColor="#fff"
            fullWidth
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1.5,
              backgroundColor: '#0718B9',
              color: '#fff',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#0A119B',
              },
            }}
          onClick={onViewReceipt}
        >
          View Receipt
        </CustomButton>
      </Box>
    </ReusableModal>
  );
};

export default PaymentSuccessfulModal;
