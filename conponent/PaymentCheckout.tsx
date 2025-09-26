import { Box, Divider, Typography } from "@mui/material";
import Image from "next/image";
import CustomButton from "./CustomButton";

interface PaymentPlan {
  name: string;
  desc: string;
  features: string[];
}

interface PaymentCheckoutProps {
  paymentPlan: PaymentPlan;
  onPay?: () => void;
}

const paymentCheckoutFeatures = [
  "Verified badge on your profile",
  "Priority in search results",
  "Access to premium clients",
];

const PaymentCheckout = ({ paymentPlan, onPay }: PaymentCheckoutProps) => {
  return (
    <Box sx={{ width: 500, bgcolor: '#fff', borderRadius: 2, p: 3, boxShadow: 3 }}>
      <Typography fontWeight={500} fontSize="18px">Payment checkout</Typography>
      <Divider sx={{ marginTop: "10px", width: "100%" }} />
      <Box sx={{ display: 'flex', gap: 2, marginTop: "20px" }}>
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
          <Image src="/image/Top Status [1.0].png" alt="verify" width={18.1} height={18.1} />
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Typography fontWeight={700} fontSize="18px">
            Profile verification
          </Typography>
          <Typography fontWeight={400} fontSize="14px">
            Verified profile status for 12 months
          </Typography>
        </Box>
      </Box>
      <Box component="ul" sx={{ pl: 2, pb: 3, m: 0, mb: 2, bgcolor: "#FAFAFA" }}>
        <Typography fontWeight={600} fontSize="14px" color="#001C44" mt={3} mb={1}>
          What you’ll get:
        </Typography>
        {paymentCheckoutFeatures.map((feature, idx) => (
          <Box component="li" key={idx} sx={{ display: 'flex', alignItems: 'center', mb: 0.5, gap: 1, color: '#001C44', fontSize: '13px', listStyle: 'none' }}>
            <Image src="/icons/Icon.png" alt="markIcon" width={10.67} height={7.33} />
            <span>{feature}</span>
          </Box>
        ))}
      </Box>
      <Typography fontWeight={500} fontSize="16px" color='#000917'>Payment summary</Typography>
      <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
        <Typography fontSize="16px" fontWeight={400} color="#001C44" mb={1}>
          {paymentPlan.name}
        </Typography>
        <Typography fontSize="16px" fontWeight={400} color="#001C44" mb={1}>
          {paymentPlan.desc}
        </Typography>
      </Box>
      <Divider sx={{ marginTop: "5px", width: "100%" }} />
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
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
        sx={{ width: '100%', mt: 2, fontWeight: 500, fontSize: '15px', borderRadius: '8px', bgcolor: '#0718B9', color: '#fff', textTransform: 'capitalize', px: 2, py: 1 }}
        onClick={onPay}
      >
        Pay {paymentPlan.desc}
      </CustomButton>
    </Box>
  );
};

export default PaymentCheckout;