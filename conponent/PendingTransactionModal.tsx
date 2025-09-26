import { Box, Typography } from '@mui/material';
import CustomButton from './CustomButton';
import Image from 'next/image';

interface PendingTransactionModalProps {
  open: boolean;
  onClose: () => void;
  amount: string;
  transactionId: string;
  date: string;
  planName: string;
}

const PendingTransactionModal = ({ open, onClose, amount, transactionId, date, planName }: PendingTransactionModalProps) => {
  if (!open) return null;
  return (
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
        <Image src="/icons/clock.png" alt="Pending" width={200} height={200} />
      </Box>

      <Typography sx={{ fontSize: 22, fontWeight: 600, color: '#FFA500' }}>
        Payment Pending
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
            Amount:
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

      <Typography fontSize={16} color="#808DA1" mt={2} mb={2}>
        Your payment for <b>{planName}</b> is being processed.
      </Typography>

      <CustomButton
        bgColor="#FFA500"
        textColor="#fff"
        fullWidth
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1.5,
          backgroundColor: '#FFA500',
          color: '#fff',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#FFB84D',
          },
        }}
        onClick={onClose}
      >
        Close
      </CustomButton>
    </Box>
  );
};

export default PendingTransactionModal;
