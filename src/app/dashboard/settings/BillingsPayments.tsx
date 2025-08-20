import { Box, Typography, Button } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';

export default function BillingsPayments() {
  const [showPlans, setShowPlans] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('Basic');
  // Merge all plans into a single array for 2x2 grid
  const plans = [
    {
      name: 'Basic',
      desc: 'For getting started',
      bg: '#FAFAFA',
      color: '#001C44',
      features: [
        'Submit 1 bid per month',
        'Access to basic contractor profiles',
        'Standard application messaging tools',
        'Basic contract views & application insights',
      ],
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
    },
  ];

  const plans2 = [
    {
      name: 'Starter',
      desc: 'For new professionals',
      bg: '#040C5D',
      color: '#FFFFFF',
      features: [
        'Submit up to 5 bids per month',
        'Access to all contractor profiles',
        'Enhanced messaging tools',
        'Advanced contract views & insights',
      ],
    },
    {
      name: 'Professional',
      desc: 'For growing teams',
      bg: '#000917',
      color: '#FFFFFF',
      features: [
        'Unlimited bids',
        'Access to all contractor profiles',
        'Premium messaging tools',
        'Full contract analytics & insights',
      ],
    },
  ]
    return (
      <>
        {showPlans ? (
          <Box
            sx={{
              width: '789px',
              height: '528px',
              position: 'absolute',
              top: '128px',
              left: '531px',
              borderRadius: '10px',
              border: '1px solid #ccc',
              opacity: 1,
              backgroundColor: '#fff',
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
            }}
          >
            <Typography fontWeight={600} fontSize="16px" color="#001C44" mb={2}>
              Bid plans
            </Typography>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                gap: 2,
              }}
            >
              {plans.map((plan) => (
                <Box
                  key={plan.name}
                  onClick={() => setSelectedPlan(plan.name)}
                  sx={{
                    width: { xs: '100%', sm: '48%' },
                    p: 2,
                    bgcolor: plan.bg,
                    color: plan.color,
                    border: plan.name === selectedPlan ? '2px solid #0718B9' : '1px solid #E0E0E0',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    boxShadow: plan.name === selectedPlan ? '0 2px 8px 0 rgba(7,24,185,0.08)' : 'none',
                    transition: 'all 0.2s',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box sx={{display:"flex" ,gap:2}}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "6.25px",
                      border: "0.8px solid #F6F6F6",
                      opacity: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src="/icons/image 3.png"
                      alt="Bids"
                      width={32}
                      height={32}
                    />
                  </Box>
                  <Box>
                  <Typography fontWeight={600} fontSize="14px" color={plan.color}>{plan.name}</Typography>
                  <Typography fontSize="12px" color={plan.color} mb={1}>{plan.desc}</Typography>
                  </Box>
                  </Box>
                  <Box component="ul" sx={{ pl: 2, m: 0 }}>
                    {plan.features.map((feature, idx) => (
                      <Typography component="li" fontSize="12px" color={plan.color} key={idx} sx={{ mb: 0.5 }}>
                        {feature}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>

            <Box
              sx={{
                width: '100%',
                display: 'flex',
                gap: 2,
              }}
            >
              {plans2.map((plans2) => (
                <Box
                  key={plans2.name}
                  onClick={() => setSelectedPlan(plans2.name)}
                  sx={{
                    width: { xs: '100%', sm: '48%' },
                    p: 2,
                    bgcolor: plans2.bg,
                    color: plans2.color,
                    border: plans2.name === selectedPlan ? '2px solid #0718B9' : '1px solid #E0E0E0',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    boxShadow: plans2.name === selectedPlan ? '0 2px 8px 0 rgba(7,24,185,0.08)' : 'none',
                    transition: 'all 0.2s',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box sx={{display:"flex" ,gap:2}}>
                 <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "6.25px",
                      border: "0.8px solid #F6F6F6",
                      opacity: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src="/icons/image 3.png"
                      alt="Bids"
                      width={32}
                      height={32}
                    />
                  </Box>
                  <Box>
                  <Typography fontWeight={600} fontSize="14px" color={plans2.color}>{plans2.name}</Typography>
                  <Typography fontSize="12px" color={plans2.color} mb={1}>{plans2.desc}</Typography>
                  </Box>
                  </Box>
                  <Box component="ul" sx={{ pl: 2, m: 0 }}>
                    {plans2.features.map((feature, idx) => (
                      <Typography component="li" fontSize="12px" color={plans2.color} key={idx} sx={{ mb: 0.5 }}>
                        {feature}
                      </Typography>
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
              minWidth: 320,
              maxWidth: '100%',
              bgcolor: '#FFFFFF',
              borderRadius: '10px',
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: '#E0E0E0',
              opacity: 1,
              p: 3,
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
              mt: 2,
            }}
          >
            <Typography fontWeight={600} fontSize="18px" color="#001C44">
              Bid plans and profile verification
            </Typography>
            <Box
              sx={{
                width: 700,
                minHeight: 82,
                opacity: 1,
                borderRadius: '10px',
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: '#E0E0E0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                px: 3,
                py: 2,
                mt: 2,
                background: '#F9F9F9',
                position: 'relative',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Image src="/icons/image 3.png" alt="Bids" width={32} height={32} />
                <Box>
                  <Typography fontWeight={600} fontSize="14px" color="#001C44">Bids</Typography>
                  <Typography fontSize="12px" color="#808DA1">Contract plan: <span style={{ color: '#0718B9', fontWeight: 500 }}>{selectedPlan}</span></Typography>
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
            <Box
              sx={{
                width: 700,
                height: 82,
                opacity: 1,
                borderRadius: '10px',
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: '#E0E0E0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                px: 3,
                py: 2,
                mt: 2,
                background: '#F9F9F9',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Image src="/image/Top Status [1.0].png" alt="Bids" width={32} height={32} />
                <Box>
                  <Typography fontWeight={600} fontSize="14px" color="#001C44">Profile verification</Typography>
                  <Typography fontSize="12px" color="#808DA1">unverified</Typography>
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
              >
                Verify now
              </Button>
            </Box>
          </Box>
        )}
      </>
    );
}
