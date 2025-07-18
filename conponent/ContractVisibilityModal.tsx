'use client';

import { Box, Typography } from '@mui/material';
import CustomButton from '@/conponent/CustomButton';
import ReusableModal from '@/components/ui/ReusableModal';
import Image from 'next/image';
import React, { useState } from 'react';
import ContractCheckoutModal from './ContractCheckoutModal';

type VisibilityModalProps = {
  open: boolean;
  onClose: () => void;
};

const ContractVisibilityModal = ({ open, onClose }: VisibilityModalProps) => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [checkoutPlan, setCheckoutPlan] = useState<{ label: string; desc: string; price: string } | null>(null);

  const plans = [
    {
      label: 'Daily',
      desc: 'Our daily plan offers clients 24-hour access to post their contracts and connect with potential candidates.',
      price: '₦990/day',
    },
    {
      label: 'Weekly',
      desc: 'Keep your post visible for 7 days. Ideal for ongoing roles needing consistent visibility.',
      price: '₦5,800/week',
    },
    {
      label: 'Monthly',
      desc: 'Best for long-term roles. Stay on top of contractor searches for 30 days.',
      price: '₦22,000/month',
    },
  ];

  const handleBoostClick = () => {
    const selected = plans.find((p) => p.label === selectedPlan);
    if (selected) {
      setCheckoutPlan(selected); 
      setCheckoutOpen(true);    
      onClose();              
    }
  };

  return (
    <>
      <ReusableModal open={open} onClose={onClose}>
        <Box
          sx={{
            width: 750,
            borderRadius: '10px',
            backgroundColor: '#fff',
            padding: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
          }}
        >
          <Typography sx={{ fontSize: 24, fontWeight: 400, color: '#001C44', textAlign: "start" }}>
            Contract visibility plans
          </Typography>

          <Typography
            sx={{
              fontSize: 16,
              fontWeight: 400,
              color: '#556882',
              lineHeight: '24px',
              textAlign: "start",
              maxWidth: 800,
            }}
          >
            Boost your visibility with our promotion plans! Choose daily, weekly, or monthly options to keep your contract posts at the top.
            Perfect for reaching more candidates faster and getting quicker responses.
            Stay seen, stay ahead—promote your posts based on your hiring urgency and budget.
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}>
            {plans.map((plan) => {
              const isSelected = selectedPlan === plan.label;

              return (
                <Box
                  key={plan.label}
                  onClick={() => setSelectedPlan(plan.label)}
                  sx={{
                    border: isSelected ? '2px solid #0718B9' : '1px solid #E0E0E0',
                    borderRadius: '10px',
                    padding: 2,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    backgroundColor: isSelected ? '#F5F8FF' : '#fff',
                  }}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, maxWidth: "80%" }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                      <Image src="/icons/image 3.png" alt="icon" width={20} height={20} />
                      <Typography sx={{ fontWeight: 400, fontSize: 20, color: '#001C44' }}>
                        {plan.label}
                      </Typography>
                    </Box>
                    <Typography sx={{ fontSize: 14, fontWeight: 400, color: '#001C44' }}>
                      {plan.desc}
                    </Typography>
                  </Box>

                  <Typography sx={{ fontWeight: 500, fontSize: 20, whiteSpace: 'nowrap' }}>
                    {plan.price}
                  </Typography>
                </Box>
              );
            })}
          </Box>

          <CustomButton
            bgColor="#0718B9"
            textColor="#fff"
            rounded
            disabled={!selectedPlan}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1.5,
              backgroundColor: selectedPlan ? "#0718B9" : "#ACB2E8",
              color: "#fff",
              width: 200,
              mt: 2,
              textTransform: "none",
              '&:hover': {
                backgroundColor: selectedPlan ? '#0A119B' : '#ccc',
              },
              cursor: selectedPlan ? 'pointer' : 'not-allowed',
            }}
            onClick={handleBoostClick}
          >
            <Image src="/icons/image 3.png" alt="Promote" width={20} height={20} />
            <span>Boost contract</span>
          </CustomButton>
        </Box>
      </ReusableModal>

      {/* Separate checkout modal here */}
      {checkoutOpen && checkoutPlan && (
        <ContractCheckoutModal
          open={checkoutOpen}
          onClose={() => setCheckoutOpen(false)}
          plan={checkoutPlan}
        />
      )}
    </>
  );
};

export default ContractVisibilityModal;
