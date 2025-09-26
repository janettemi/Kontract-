import ReusableModal from '@/components/ui/ReusableModal';
import CustomButton from '@/conponent/CustomButton';
import PaymentSuccessfulModal from '@/conponent/PaymentSuccessfulModal';
import PendingTransactionModal from '@/conponent/PendingTransactionModal';
import PaymentCheckout from '@/conponent/PaymentCheckout';
import Receipt from '@/conponent/Receipt';
import { Box, Typography, Button, Divider } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';

export default function BillingsPayments() {
  const [showPlans, setShowPlans] = useState(false);
  const [currentPlan, setCurrentPlan] = useState('Basic');
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentPlan, setPaymentPlan] = useState<any>(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [pendingPayment, setPendingPayment] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState<'unverified' | 'inreview' | 'verified'>('unverified');
  const plans = [
    {
      name: 'Basic',
      desc: 'Free plan',
      bg: '#FAFAFA',
      color: '#001C44',
      features: [
        'Submit 1 bid per month',
        'Access to basic contractor profiles',
        'Standard application messaging tools',
        'Basic contract views & application insights',
      ],
      whatGet:[
        "Faster decision-making",
        "Clear expectations",
        "Saves time and effort",
      ]
    },
    {
      name: 'One-time bid',
      desc: 'Pay as you go',
      bg: '#0718B9',
      color: '#FFFFFF',
      features: [
        'Submit 1 bid (one-time)',
        'Access to all contractor profiles',
        'Priority messaging tools',
        'Standard contract views',
      ],
      whatGet:[
        "Faster decision-making",
        "Clear expectations",
        "Saves time and effort",
      ]
    },
  ];

  const plans2 = [
    {
      name: 'Starter',
      button: "Go starter",
      desc: '₦4,999 per week',
      bg: '#040C5D',
      color: '#FFFFFF',
      features: [
        'Submit up to 5 bids per month',
        'Access to all contractor profiles',
        'Enhanced messaging tools',
        'Advanced contract views & insights',
      ],
      whatGet:[
        "Faster decision-making",
        "Clear expectations",
        "Saves time and effort",
      ]
    },
    {
      name: 'Professional',
      button: "Unlock Pro Power",
      desc: '₦14,999 per month',
      bg: '#000917',
      color: '#FFFFFF',
      features: [
        'Unlimited bids',
        'Access to all contractor profiles',
        'Premium messaging tools',
        'Full contract analytics & insights',
      ],
      whatGet:[
        "Faster decision-making",
        "Clear expectations",
        "Saves time and effort",
      ]
    },
  ];

  // No selectedPlan needed

  const handlePayClick = (plan: any) => {
    setPaymentPlan(plan);
    //setSelectedPlan(plan);
    setShowPaymentModal(true);
  };

  return (
    <>
      {showPlans ? (
        <Box
          sx={{
            width: { xs: '100%', sm: 789 },
            bgcolor: '#FFFFFF',
            borderRadius: '10px',
            border: '1px solid #E0E0E0',
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            mt: 2,
          }}
        >
          <Typography fontWeight={600} fontSize="16px" color="#001C44" mb={2}>
            Bid plans
          </Typography>
          {/* First group of plans */}
          <Box sx={{ width: '100%', display: 'flex', gap: 2 }}>
            {plans.map((plan) => (
              <Box
                key={plan.name}
                sx={{
                  width: { xs: '100%', sm: '48%' },
                  p: 2,
                  bgcolor: plan.bg,
                  color: plan.color,
                  border:
                    plan.name === currentPlan
                      ? '2px solid #0718B9'
                      : '1px solid #E0E0E0',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  boxShadow:
                    plan.name === currentPlan
                      ? '0 2px 8px 0 rgba(7,24,185,0.08)'
                      : 'none',
                  transition: 'all 0.2s',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <Box
                  sx={{ display: 'flex', gap: 2, justifyContent: 'space-between' }}
                >
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '6.25px',
                      border: '0.8px solid #F6F6F6',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Image src="/icons/image 3.png" alt="Bids" width={32} height={32} />
                  </Box>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography fontWeight={600} fontSize="14px" color={plan.color}>
                      {plan.name}
                    </Typography>
                    <Typography fontSize="12px" color={plan.color} mb={1}>
                      {plan.desc}
                    </Typography>
                  </Box>

                  {currentPlan === plan.name ? (
                    <Typography
                      fontSize="12px"
                      fontWeight={500}
                      color="#001C44"
                      sx={{ alignSelf: 'center' }}
                    >
                      This is my current plan
                    </Typography>
                  ) : (
                    <CustomButton
                      rounded
                      bgColor="#EEF0FF"
                      textColor="#0718B9"
                      sx={{
                        fontSize: '12px',
                        fontWeight: 500,
                        borderRadius: '10px',
                        bgcolor: '#EEF0FF',
                        color: '#040C5D',
                        textTransform: 'capitalize',
                        px: 2,
                        py: 1,
                      }}
                      onClick={() => handlePayClick(plan)}
                    >
                      {plan.desc}
                    </CustomButton>
                  )}
                </Box>

                <Typography fontSize="12px" color={plan.color} sx={{ mt: 1 }}>
                  Includes:
                </Typography>
                <Box component="ul" sx={{ pl: 2, m: 0, mt: 0.5 }}>
                  {plan.features.map((feature, idx) => (
                    <Box
                      component="li"
                      key={idx}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 0.5,
                        gap: 1,
                        color: plan.color,
                        fontSize: '12px',
                        listStyle: 'none',
                      }}
                    >
                        <Image src="/image/Icon (2).png" alt="markIcon" width={10.67} height={7.33} color='#38C793' />
                      <span>{feature}</span>
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>

          {/* Second group of plans */}
          <Box sx={{ width: '100%', display: 'flex', gap: 2 }}>
            {plans2.map((plan) => (
              <Box
                key={plan.name}
                sx={{
                  width: { xs: '100%', sm: '48%' },
                  p: 2,
                  bgcolor: plan.bg,
                  color: plan.color,
                  border:
                    plan.name === currentPlan
                      ? '2px solid #0718B9'
                      : '1px solid #E0E0E0',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  boxShadow:
                    plan.name === currentPlan
                      ? '0 2px 8px 0 rgba(7,24,185,0.08)'
                      : 'none',
                  transition: 'all 0.2s',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '6.25px',
                      border: '0.8px solid #F6F6F6',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Image src="/icons/image 3.png" alt="Bids" width={32} height={32} />
                  </Box>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography fontWeight={600} fontSize="14px" color={plan.color}>
                      {plan.name}
                    </Typography>
                    <Typography fontSize="12px" color={plan.color} mb={1}>
                      {plan.desc}
                    </Typography>
                  </Box>

                  {currentPlan === plan.name ? (
                    <Typography
                      fontSize="12px"
                      fontWeight={500}
                      color="#FFFFFF"
                      sx={{ alignSelf: 'center' }}
                    >
                      This is my current plan
                    </Typography>
                  ) : (
                    <CustomButton
                      rounded
                      bgColor="#EEF0FF"
                      textColor="#0718B9"
                      sx={{
                        fontSize: '12px',
                        fontWeight: 500,
                        borderRadius: '10px',
                        bgcolor: '#FFFFFF',
                        color: '#040C5D',
                        textTransform: 'capitalize',
                        px: 2,
                        py: 1,
                      }}
                      onClick={() => handlePayClick(plan)}
                    >
                      {plan.button}
                    </CustomButton>
                  )}
                </Box>

                <Typography fontSize="12px" color={plan.color} sx={{ mt: 1 }}>
                  Includes:
                </Typography>
                <Box component="ul" sx={{ pl: 2, m: 0 }}>
                  {plan.features.map((feature, idx) => (
                    <Box
                      component="li"
                      key={idx}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 0.5,
                        gap: 1,
                        color: plan.color,
                        fontSize: '12px',
                        listStyle: 'none',
                      }}
                    >
                      <Image src="/icons/Icon (1).png" alt="markIcon" width={10.67} height={7.33} />
                      <span>{feature}</span>
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            width: { xs: '100%', sm: 789 },
            bgcolor: '#FFFFFF',
            borderRadius: '10px',
            border: '1px solid #E0E0E0',
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            mt: 2,
          }}
        >
          <Typography fontWeight={600} fontSize="18px" color="#001C44">
            Bid plans and profile verification
          </Typography>

          {/* Contract Plan Box */}
          <Box
            sx={{
              width: 700,
              minHeight: 82,
              borderRadius: '10px',
              border: '1px solid #E0E0E0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              px: 3,
              py: 2,
              background: '#F9F9F9',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Image src="/icons/image 3.png" alt="Bids" width={32} height={32} />
              <Box>
                <Typography fontWeight={600} fontSize="14px" color="#001C44">
                  Bids
                </Typography>
                <Typography fontSize="12px" color="#808DA1">
                  Contract plan:{' '}
                  <span style={{ color: '#0718B9', fontWeight: 500 }}>
                    {currentPlan}
                  </span>
                </Typography>
              </Box>
            </Box>
            <Button
              variant="outlined"
              sx={{
                borderColor: '#0718B9',
                color: '#0718B9',
                borderRadius: '8px',
                textTransform: 'none',
                fontWeight: 500,
                minWidth: 120,
                px: 2,
                py: 1,
              }}
              onClick={() => setShowPlans(true)}
            >
              Change plan
            </Button>
          </Box>

          {/* Profile Verification Box */}
          <Box
            sx={{
              width: 700,
              height: 82,
              borderRadius: '10px',
              border: '1px solid #E0E0E0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              px: 3,
              py: 2,
              background: '#F9F9F9',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Image
                src="/image/Top Status [1.0].png"
                alt="Verification"
                width={32}
                height={32}
              />
              <Box>
                <Typography fontWeight={600} fontSize="14px" color="#001C44">
                  Profile verification
                </Typography>
                <Typography fontSize="12px" color={
                  verificationStatus === 'verified' ? '#38C793' : verificationStatus === 'inreview' ? '#F2AE40' : '#808DA1'
                }>
                  {verificationStatus === 'verified' ? 'Verified' : verificationStatus === 'inreview' ? 'In Review' : 'Unverified'}
                </Typography>
              </Box>
            </Box>
            {verificationStatus === 'verified' ? (
              <Button
                variant="contained"
                sx={{
                  bgcolor: '#38C793',
                  color: '#fff',
                  borderRadius: '8px',
                  textTransform: 'none',
                  fontWeight: 500,
                  minWidth: 120,
                  px: 2,
                  py: 1,
                  '&:hover': { bgcolor: '#38C793' },
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
                disabled
              >
                <Image
                src="/image/Top Status [1.0].png"
                alt="Verification"
                width={32}
                height={32}
              />
                Verified
              </Button>
            ) : verificationStatus === 'inreview' ? (
              <Button
                variant="contained"
                sx={{
                  bgcolor: '#F2AE40',
                  color: '#fff',
                  borderRadius: '8px',
                  textTransform: 'none',
                  fontWeight: 500,
                  minWidth: 120,
                  px: 2,
                  py: 1,
                  '&:hover': { bgcolor: '#F2AE40' },
                }}
                disabled
              >
                In Review
              </Button>
            ) : (
              <Button
                variant="outlined"
                sx={{
                  borderColor: '#0718B9',
                  color: '#0718B9',
                  borderRadius: '8px',
                  textTransform: 'none',
                  fontWeight: 500,
                  minWidth: 120,
                  px: 2,
                  py: 1,
                }}
                onClick={() => {
                  setPaymentPlan({
                    name: 'Profile Verification',
                    desc: '₦2,000 one-time',
                    features: [
                      'Verified badge on your profile',
                      'Priority in search results',
                      'Access to premium clients',
                    ],
                  });
                  setShowCheckout(true);
                }}
              >
                Verify now
              </Button>
            )}
          </Box>
        </Box>
      )}

      {/* PaymentCheckout Modal */}
      <ReusableModal open={showCheckout} onClose={() => setShowCheckout(false)}>
        {paymentPlan && (
          <PaymentCheckout
            paymentPlan={paymentPlan}
            onPay={() => {
              setShowCheckout(false);
              setPaymentPlan(paymentPlan);
              // Show success modal only for verification
              if (paymentPlan.name === 'Profile Verification') {
                setPaymentSuccess(true);
              } else {
                // For bids, you can keep previous logic or customize
                const isSuccess = true;
                if (isSuccess) {
                  setPaymentSuccess(true);
                } else {
                  setPendingPayment(true);
                }
              }
            }}
          />
        )}
      </ReusableModal>
      
      <ReusableModal open={pendingPayment} onClose={() => setPendingPayment(false)}>
        <PendingTransactionModal
          open={pendingPayment}
          onClose={() => setPendingPayment(false)}
          amount={paymentPlan ? paymentPlan.desc : '₦2,000 one-time'}
          transactionId="TX123456789"
          date={new Date().toLocaleDateString()}
          planName={paymentPlan ? paymentPlan.name : 'Profile Verification'}
        />
      </ReusableModal>

        <ReusableModal open={showPaymentModal} onClose={() => setShowPaymentModal(false)}>
        {paymentPlan && (
          <Box sx={{ width: 500, bgcolor: '#fff', borderRadius: 2, p: 3, boxShadow: 3, }}>
            <Typography fontWeight={500} fontSize="18px" >Payment checkout</Typography>
            <Divider sx={{marginTop:"10px",width:"100%"}}/>
             <Box sx={{ display: 'flex', gap: 2,  marginTop:"20px",}}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '6.25px',
                      border: '0.8px solid #F6F6F6',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                  <Image src="/icons/image 3.png" alt="Bids" width={32} height={32} />
                  </Box>
                   <Box sx={{ flexGrow: 1 }}>
                  <Typography fontWeight={700} fontSize="18px">
                    Bid-{paymentPlan.name}
                  </Typography>
                  <Typography fontWeight={400} fontSize="14px">
                    Pay once to bid and access verified contracts.
                  </Typography>
                  </Box>
                  </Box>
                  <Box component="ul" sx={{ pl: 2, pb:3, m: 0,  mb: 2 ,bgcolor:"#FAFAFA"}}>
                    <Typography fontWeight={600} fontSize="14px" color="#001C44" mt={3} mb={1}>
                    What you’ll get:
                  </Typography>
                  {paymentPlan.features.map((feature: string, idx: number) => (
                    <Box component="li" key={idx} sx={{ display: 'flex', alignItems: 'center', mb: 0.5, gap: 1, color: '#001C44', fontSize: '13px', listStyle: 'none' }}>
                      <span style={{ color: '#4CAF50', fontSize: 16 }}>✔</span>
                      <span>{feature}</span>
                    </Box>
                  ))}
                  </Box>
                    <Typography fontWeight={500} fontSize="16px" color='#000917'>Payment summary</Typography>
                    <Box sx={{mt:2, display:"flex", justifyContent:"space-between"}}>
                      <Typography fontSize="16px" fontWeight={400} color="#001C44" mb={1}>
                      {paymentPlan.name}
                     </Typography>
                    <Typography fontSize="16px" fontWeight={400} color="#001C44" mb={1}>
                      {paymentPlan.desc}
                  </Typography>
                  </Box>
                   <Divider sx={{marginTop:"5px",width:"100%"}}/>
                    <Box sx={{ display:"flex", justifyContent:"space-between",mt:2}}>
                      <Typography fontSize="20px" fontWeight={500} color="#001C44" mb={1}>
                      Total
                     </Typography>
                    <Typography fontSize="16px" fontWeight={400} color="#001C44" mb={1}>
                      {paymentPlan.desc}
                  </Typography>
                  </Box>
                    <CustomButton
                      rounded
                      bgColor="#0718B9"
                      textColor="#fff"
                      sx={{ width: '100%',
                         mt: 2, fontWeight: 500,
                        fontSize: '15px', borderRadius: '8px',
                        bgcolor: '#0718B9',
                        color: '#fff',
                        textTransform: 'capitalize',
                        px: 2,
                        py: 1,
                        }}
                      onClick={() => {
                        setShowPaymentModal(false);
                        setCurrentPlan(paymentPlan.name);
                        setPaymentSuccess(true);
                      }}>
                        Pay {paymentPlan.desc}
                    </CustomButton>
              </Box>
            )}
      </ReusableModal>   
      
      <ReusableModal open={paymentSuccess} onClose={() => {
        setPaymentSuccess(false);
        if (paymentPlan && paymentPlan.name === 'Profile Verification') {
          setVerificationStatus('verified');
        }
      }}>
        {paymentPlan && (
          <PaymentSuccessfulModal
            open={paymentSuccess}
            onClose={() => {
              setPaymentSuccess(false);
              if (paymentPlan && paymentPlan.name === 'Profile Verification') {
                setVerificationStatus('verified');
              }
            }}
            amount={paymentPlan.desc}
            transactionId="TX123456789"
            date={new Date().toLocaleDateString()}
            onViewReceipt={() => {
              setPaymentSuccess(false);
              setShowReceipt(true);
              if (paymentPlan && paymentPlan.name === 'Profile Verification') {
                setVerificationStatus('verified');
              }
            }}
          />
        )}
      </ReusableModal>

      <ReusableModal open={showReceipt} onClose={() => setShowReceipt(false)}>
        {paymentPlan && (
          <Receipt
           bankName='Paystack-Titan'
           paymentDescription= "One-time bid"
           beneficiaryName="Abdulhamid Ayo"
           accountNumber="1234567890"
           status='Pending'
            time={new Date().toLocaleTimeString()}
            amount={paymentPlan.desc}
            transactionId="TX123456789"
            date={new Date().toLocaleDateString()}
            planName={paymentPlan.name}
            onShare={() => {/* share logic */}}
            onDownload={() => {/* download logic */}}
          />
        )}
      </ReusableModal>
    </>
  );
}
