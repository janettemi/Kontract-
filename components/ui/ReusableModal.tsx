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

{/* Payment Modal */}
  //     <ReusableModal open={showPaymentModal} onClose={() => setShowPaymentModal(false)}>
  //       {paymentPlan && (
  //         <Box sx={{ width: 400, bgcolor: '#fff', borderRadius: 2, p: 3, boxShadow: 3 }}>
  //           <Typography fontWeight={700} fontSize="18px" color="#0718B9" mb={2}>
  //             Pay for {paymentPlan.name} Plan
  //           </Typography>
  //           <Typography fontSize="14px" color="#001C44" mb={1}>
  //             {paymentPlan.desc}
  //           </Typography>
  //           <Typography fontWeight={600} fontSize="14px" color="#001C44" mt={2} mb={1}>
  //             Includes:
  //           </Typography>
  //           <Box component="ul" sx={{ pl: 2, m: 0, mb: 2 }}>
  //             {paymentPlan.features.map((feature: string, idx: number) => (
  //               <Box component="li" key={idx} sx={{ display: 'flex', alignItems: 'center', mb: 0.5, gap: 1, color: '#001C44', fontSize: '13px', listStyle: 'none' }}>
  //                 <span style={{ color: '#4CAF50', fontSize: 16 }}>✔</span>
  //                 <span>{feature}</span>
  //               </Box>
  //             ))}
  //           </Box>
  //           <CustomButton
  //             rounded
  //             bgColor="#0718B9"
  //             textColor="#fff"
  //             sx={{ width: '100%', mt: 2, fontWeight: 600, fontSize: '15px', borderRadius: '8px' }}
  //             onClick={() => {/* payment logic here */ setShowPaymentModal(false); }}
  //           >
  //             Pay
  //           </CustomButton>
  //         </Box>
  //       )}
  //     </ReusableModal>

  // const [showPaymentModal, setShowPaymentModal] = useState(false);
  // const [paymentPlan, setPaymentPlan] = useState<any>(null);

  // const handlePayClick = (plan: any) => {
  //   setPaymentPlan(plan);
  //   setShowPaymentModal(true);
  // };

export default ReusableModal;
