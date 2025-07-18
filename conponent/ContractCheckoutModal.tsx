'use client';

import { Box, Divider, Typography } from '@mui/material';
import ReusableModal from '@/components/ui/ReusableModal';
import CustomButton from '@/conponent/CustomButton';
import Image from 'next/image';
import React, { useState } from 'react';
import PaymentSuccessfulModal from './PaymentSuccessfulModal';

type ContractCheckoutModalProps = {
  open: boolean;
  onClose: () => void;
  plan?: {
    label: string;
    price: string;
  };
};

const ContractCheckoutModal = ({
  open,
  onClose,
  plan = {
    label: 'Daily',
    price: '₦990/day',
  },
}: ContractCheckoutModalProps) => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const benefits = [
    'Top placement in search results',
    '3x more visibility to qualified contractors',
    'Highlighted listing with priority badge',
  ];

  return (
    <>
      <ReusableModal open={open} onClose={onClose}>
        <Box
          sx={{
            width: 600,
            borderRadius: '10px',
            backgroundColor: '#fff',
            padding: 3,
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
          }}
        >
          <Box>
            <Typography sx={{ fontSize: 18, fontWeight: 500, color: '#000917' }}>
              Payment checkout
            </Typography>
            <Divider sx={{ mt: 3 }} />
            <Box sx={{ display: 'flex', gap: 3, mt: 5 }}>
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: '8.33px',
                  backgroundColor: '#FAFAFA',
                  opacity: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image src="/icons/image 3.png" alt="Pay" width={25} height={25} />
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography sx={{ fontSize: 18, fontWeight: 500, color: '#000917' }}>
                  Contract visibility - {plan.label}
                </Typography>
                <Typography sx={{ fontSize: 14, fontWeight: 400, color: '#556882' }}>
                  {plan.label === 'Daily'
                    ? '24-hour premium placement'
                    : plan.label === 'Weekly'
                    ? '7-day boosted placement'
                    : '30-day top visibility'}
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box>
            <Typography sx={{ fontSize: 16, fontWeight: 600, color: '#001C44', mb: 1 }}>
              What you’ll get:
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {benefits.map((item, index) => (
                <Box key={index} sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                  <Image src="/icons/Icon.png" alt="checkmark" width={18} height={18} />
                  <Typography sx={{ fontSize: 14, color: '#001C44' }}>{item}</Typography>
                </Box>
              ))}
            </Box>
          </Box>

          <Box>
            <Typography sx={{ fontSize: 16, fontWeight: 600, color: '#001C44', mb: 1 }}>
              Payment Summary
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: 14,
                color: '#001C44',
              }}
            >
              <Typography sx={{ fontSize: 16, fontWeight: 400, color: '#001C44', mb: 1 }}>
                Boost Plan
              </Typography>
              <Typography sx={{ fontSize: 16, fontWeight: 400, color: '#001C44', mb: 1 }}>
                {plan.price}
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                fontWeight: 600,
                mt: 1,
                fontSize: 16,
                color: '#001C44',
              }}
            >
              <Typography sx={{ fontSize: 20, fontWeight: 500, color: '#001C44', mb: 1 }}>
                Total
              </Typography>
              <Typography sx={{ fontSize: 18, fontWeight: 500, color: '#001C44', mb: 1 }}>
                {plan.price}
              </Typography>
            </Box>
          </Box>

          <CustomButton
            bgColor="#0718B9"
            textColor="#fff"
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
            onClick={() => {
            // onClose(); // Closes checkout modal
            setPaymentSuccess(true); // ✅ Shows payment success modal
            }}
          >
            <Image src="/icons/image 3.png" alt="Pay" width={20} height={20} />
            <span>Pay {plan.price}</span>
          </CustomButton>
        </Box>
      </ReusableModal>

      {/*  Payment success modal */}
      <PaymentSuccessfulModal
        open={paymentSuccess}
        onClose={() => setPaymentSuccess(false)}
        amount={plan.price}
        transactionId="TX123456789"
        date="July 8, 2025"
        onViewReceipt={() => {
          console.log('View receipt clicked');
        }}
      />
    </>
  );
};

export default ContractCheckoutModal;
