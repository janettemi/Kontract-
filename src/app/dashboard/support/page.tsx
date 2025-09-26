"use client"
import CustomButton from "@/conponent/CustomButton";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Support = () => {
    const [message, setMessage] = useState("");
    const router = useRouter();
  return (
   <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, }}>
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
        <Typography fontSize={18} fontWeight={500}>Let's answer some of your questions:</Typography>
         <CustomButton
            variant="outlined"
            style={{ borderColor: '#0718B9', 
            color: '#0718B9', minWidth: 100 }}
            onClick={() => router.push('/faqs')}>
                FAQs
            </CustomButton>
            
    </Box>

     <Box 
        sx={{
            width: { xs: '100%', sm: 789, },
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
            <Typography fontSize={18} fontWeight={500}>Still need help? Contact our support team:</Typography>
            <Typography fontSize={14} fontWeight={400} color="#556882">Help us improve your experience</Typography>
            <Box sx={{ mt: 2 }}>
            <Typography fontSize={14} fontWeight={500} color="#001C44" mb={1}>Message</Typography>
            <textarea
                rows={5}
                style={{
                    width: '100%',
                    borderRadius: '8px',
                    border: '1px solid #E0E0E0',
                    padding: '4px',
                    fontSize: '15px',
                    color: '#001C44',
                    resize: 'vertical',
                    outline: 'none',
                    marginBottom: '8px',
                }}
                placeholder="Type your message here..."
                value={message}
                onChange={e => setMessage(e.target.value)}
            />
            <CustomButton
                rounded
                bgColor="#0718B9"
                textColor="#fff"
                sx={{ width: '163px', mt: 2, fontWeight: 500, fontSize: '15px', borderRadius: '8px', bgcolor: '#0718B9', color: '#fff', textTransform: 'capitalize', px: 2, py: 1 }}
                disabled={message.trim() === ""}
            >
                Send message
            </CustomButton>
        </Box>
        </Box>
    </Box>
  )
}


export default Support;