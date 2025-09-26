import { Box, Typography } from '@mui/material';
import CustomButton from './CustomButton';

interface ReceiptProps {
    amount: string;
    beneficiaryName:string;
    accountNumber:string;
    bankName:string;
    transactionId: string;
    paymentDescription:string
    date: string;
    time: string;
    planName: string;
    status: 'Successful' | 'Pending';
    onShare?: () => void;
    onDownload?: () => void;
}

const Receipt = ({ amount, bankName, transactionId,beneficiaryName, 
    time, date, planName,accountNumber, status, onShare, onDownload }: ReceiptProps) => {
    return (
        <Box
            sx={{
                width: 400,
                bgcolor: '#fff',
                borderRadius: 2,
                p: 3,
                boxShadow: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
            }}
        >
            <Box sx={{width: '100%',  border: '1px solid #E0E0E0', borderRadius:"10px",p: 1}}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Box sx={{ display: 'flex', flexDirection:"column",  alignItems: 'center', gap: 2 }}>
                    <Typography fontSize={20} fontWeight={600} color="#001C44">
                     {amount}
                    </Typography>
                    <Box sx={{display:"flex", gap:1}}>
                    <Typography fontSize={16} fontWeight={500} color="#001C44">
                        {date}
                    </Typography>
                        <Typography fontSize={16} fontWeight={500} color="#001C44">{time}</Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: 90,
                        height: 30,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        borderRadius: '10px',
                        padding: '10px',
                        opacity: 1,
                        background: `#${status === 'Successful' ? '#00BF691A' : 'FFF4E5'}`,
                       // border: `1px solid ${status === 'Successful' ? '#00BF69' : '#FFA500'}`,
                        color: status === 'Successful' ? '#00BF69' : '#FFA500',
                        fontWeight: 400,
                        fontSize: '14px',
                    }}
                >
                    {status}
                </Box>
                </Box>
            </Box>

            <Box sx={{display:"flex",flexDirection:"column", gap:3, width: '100%', mt: 2 , border: '1px solid #E0E0E0', borderRadius:"10px",p: 1}}>
                <Box sx={{ display: 'flex', justifyContent:"space-between", gap: 1 }}>
                 <Typography fontSize={20} fontWeight={400} color="#556882">
                    Transaction ID
                </Typography>
                <Typography style={{ color: '#2B4263' }}>{transactionId}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent:"space-between", gap: 1 }}>
                 <Typography fontSize={20} fontWeight={400} color="#556882">
                    Beneficiary name
                </Typography>
                <Typography style={{ color: '#2B4263' }}>{beneficiaryName}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent:"space-between", gap: 1 }}>
                 <Typography fontSize={20} fontWeight={400} color="#556882">
                     Bank name
                </Typography>
                <Typography style={{ color: '#2B4263' }}>{ bankName}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent:"space-between", gap: 1 }}>
                 <Typography fontSize={20} fontWeight={400} color="#556882">
                    Account number
                </Typography>
                <Typography style={{ color: '#2B4263' }}>{accountNumber}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent:"space-between", gap: 1 }}>
                 <Typography fontSize={20} fontWeight={400} color="#556882">
                    Payment description 
                </Typography>
                <Typography style={{ color: '#2B4263' }}>{planName}</Typography>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: 2, mt: 3, width: '100%' }}>
                <CustomButton
                    fullWidth
                    rounded
                    variant="outlined"
                    textColor="#0718B9"
                    borderColor="#0718B9"
                    sx={{
                     fontWeight: 600,
                     fontSize: '15px',
                     borderRadius: '8px',
                     textTransform:"capitalize",
                     color:"#0718B9"
                     }}
                    onClick={onShare}
                >
                    Share Receipt
                </CustomButton>
                <CustomButton
                    fullWidth
                    rounded
                    bgColor="#EEF0FF"
                    textColor="#0718B9"
                    sx={{ fontWeight: 600, fontSize: '15px',
                         borderRadius: '8px', 
                         textTransform:"capitalize" ,
                         bgcolor:"#0718B9"
                        }}
                    onClick={onDownload}
                >
                    Download
                </CustomButton>
            </Box>
        </Box>
    );
};

export default Receipt;