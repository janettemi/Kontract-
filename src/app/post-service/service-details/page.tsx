'use client';
import ReusableModal from "@/components/ui/ReusableModal";
import CustomButton from "@/conponent/CustomButton";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Divider, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ContractVisibilityModal from "@/conponent/ContractVisibilityModal";


const ServiceDetails = () => {
    const router = useRouter()
     const [open, setOpen] = useState(false);
     const [promote, setPromote] = useState(false)
     const [showVisibilityModal, setShowVisibilityModal] = useState(false);

     const handlePostWithoutPromotion = () => {
  // Example: simulate saving the contract with "Posted" status
     console.log("Service posted without promotion");

  // Close modal
  setPromote(false);

  // Optional: redirect or update frontend state
  router.push("/dashboard/services"); // or reload the table
};

     
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        position: 'absolute',
        top: '160px',
        left: '120px',
        width: '1200px',
        height: '1160px',
        opacity: 1,
      }}
    >
      <Typography
        sx={{
          fontWeight: 500,
          fontStyle: 'normal',
          fontSize: '32px',
          lineHeight: '45px',
          color: '#001C44',
          letterSpacing: '-0.6%',
          verticalAlign: 'bottom',
        }}
      >
        Service details
      </Typography>

      <Box
        sx={{
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
          border: '1px solid #E0E0E0',
          backgroundColor: '#fff',
          padding: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: 500,
              fontStyle: 'normal',
              fontSize: '24px',
              lineHeight: '45px',
              color: '#001C44',
              letterSpacing: '-0.6%',
              verticalAlign: 'bottom',
            }}
          >
            Fashion design
          </Typography>

          <Box
            sx={{
              width: 30,
              height: 30,
              backgroundColor: '#0718B9',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <EditIcon sx={{ fontSize: 16, color: '#fff' }} />
          </Box>
        </Box>

        <Divider sx={{ mt:"20px"}}/>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt:"20px"
          }}
        >
          <Typography
            sx={{
              width:"491px",
              height:"150px",
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '16px',
              color: '#001C44',
            }}
          >
            Give me a little writeup that explains "Financial terms" in creating of contract post. 
            Let it be mainly base on" payment terms, budget and contract duration. 
            Let it be between 10 words? Make sounds formal 
            like using it on a design for clients to see before posting a contra
          </Typography>

          <Box
            sx={{
              width: 30,
              height: 30,
              backgroundColor: '#0718B9',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <EditIcon sx={{ fontSize: 16, color: '#fff' }} />
          </Box>
        </Box>

        <Divider sx={{ mt:"10px"}}/>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt:"10px"
          }}
        >
            <Box>
          <Typography
            sx={{
              fontWeight: 600,
              fontStyle: 'normal',
              fontSize: '18px',
              color: '#001C44',
            }}
          >
            Category 
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '16px',
              color: '#001C44',
            }}
          >
            Construction
          </Typography>
          </Box>
          <Box
            sx={{
              width: 30,
              height: 30,
              backgroundColor: '#0718B9',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <EditIcon sx={{ fontSize: 16, color: '#fff' }} />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt:"10px"
          }}
        >
            <Box>
          <Typography
            sx={{
              fontWeight: 600,
              fontStyle: 'normal',
              fontSize: '18px',
              color: '#001C44',
            }}
          >
            Skill
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '16px',
              color: '#001C44',
            }}
          >
            Engineering
          </Typography>
          </Box>
          <Box
            sx={{
              width: 30,
              height: 30,
              backgroundColor: '#0718B9',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <EditIcon sx={{ fontSize: 16, color: '#fff' }} />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt:"10px"
          }}
        >
            <Box>
          <Typography
            sx={{
              fontWeight: 600,
              fontStyle: 'normal',
              fontSize: '18px',
              color: '#001C44',
            }}
          >
            Skill
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '16px',
              color: '#001C44',
            }}
          >
            Engineer
          </Typography>
          </Box>
          <Box
            sx={{
              width: 30,
              height: 30,
              backgroundColor: '#0718B9',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <EditIcon sx={{ fontSize: 16, color: '#fff' }} />
          </Box>
        </Box>
        

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt:"10px"
          }}
        >
            <Box>
          <Typography
            sx={{
              fontWeight: 600,
              fontStyle: 'normal',
              fontSize: '18px',
              color: '#001C44',
            }}
          >
            Number of contractors
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '16px',
              color: '#001C44',
            }}
          >
            1
          </Typography>
          </Box>
          <Box
            sx={{
              width: 30,
              height: 30,
              backgroundColor: '#0718B9',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <EditIcon sx={{ fontSize: 16, color: '#fff' }} />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt:"10px"
          }}
        >
            <Box>
          <Typography
            sx={{
              fontWeight: 600,
              fontStyle: 'normal',
              fontSize: '18px',
              color: '#001C44',
            }}
          >
            Language 
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '16px',
              color: '#001C44',
            }}
          >
            English
          </Typography>
          </Box>
          <Box
            sx={{
              width: 30,
              height: 30,
              backgroundColor: '#0718B9',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <EditIcon sx={{ fontSize: 16, color: '#fff' }} />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt:"10px"
          }}
        >
            <Box>
          <Typography
            sx={{
              fontWeight: 600,
              fontStyle: 'normal',
              fontSize: '18px',
              color: '#001C44',
            }}
          >
            Payment terms
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '16px',
              color: '#001C44',
            }}
          >
            Upfront payment
          </Typography>
          </Box>
          <Box
            sx={{
              width: 30,
              height: 30,
              backgroundColor: '#0718B9',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <EditIcon sx={{ fontSize: 16, color: '#fff' }} />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt:"10px"
          }}
        >
            <Box>
          <Typography
            sx={{
              fontWeight: 600,
              fontStyle: 'normal',
              fontSize: '18px',
              color: '#001C44',
            }}
          >
            Country
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '16px',
              color: '#001C44',
            }}
          >
            Nigeria
          </Typography>
          </Box>
          <Box
            sx={{
              width: 30,
              height: 30,
              backgroundColor: '#0718B9',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <EditIcon sx={{ fontSize: 16, color: '#fff' }} />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt:"10px"
          }}
        >
            <Box>
          <Typography
            sx={{
              fontWeight: 600,
              fontStyle: 'normal',
              fontSize: '18px',
              color: '#001C44',
            }}
          >
            State
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '16px',
              color: '#001C44',
            }}
          >
            Lagos
          </Typography>
          </Box>
          <Box
            sx={{
              width: 30,
              height: 30,
              backgroundColor: '#0718B9',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <EditIcon sx={{ fontSize: 16, color: '#fff' }} />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt:"10px"
          }}
        >
            <Box>
          <Typography
            sx={{
              fontWeight: 600,
              fontStyle: 'normal',
              fontSize: '18px',
              color: '#001C44',
            }}
          >
            Budget
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '16px',
              color: '#001C44',
            }}
          >
             2,000,000.00-6,000,000.00
          </Typography>
          </Box>
          <Box
            sx={{
              width: 30,
              height: 30,
              backgroundColor: '#0718B9',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <EditIcon sx={{ fontSize: 16, color: '#fff' }} />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt:"10px"
          }}
        >
            <Box>
          <Typography
            sx={{
              fontWeight: 600,
              fontStyle: 'normal',
              fontSize: '18px',
              color: '#001C44',
            }}
          >
            Contract duration
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '16px',
              color: '#001C44',
            }}
          >
           1 week
          </Typography>
          </Box>
          <Box
            sx={{
              width: 30,
              height: 30,
              backgroundColor: '#0718B9',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <EditIcon sx={{ fontSize: 16, color: '#fff' }} />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
            position:"absolute",
            bottom: 0,
            left: 0,
           width: '100%',
            maxWidth: '1440px',
            height: '90px',
            mt: 5,
            borderTop: '1px solid #E5E7EB',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: 4,
            py: 2,
            backgroundColor: '#fff',
            zIndex: 1000,
        }}
        >
        <Box
            component="button"
            type="button"
            sx={{
            border: '1px solid #0718B9',
            borderRadius: '16px',
            px: 4,
            py: 1.5,
            fontWeight: 500,
            color: '#0718B9',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: '#f3f4f6',
            },
            }}
            onClick={() => router.push("/post-service/service-financial-terms")}
        >
            Back
        </Box>

        <Box
            component="button"
            type="button"
            sx={{
            border: 'none',
            borderRadius: '16px',
            px: 4,
            py: 1.5,
            fontWeight: 500,
            color: 'white',
            backgroundColor: '#0718B9',
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: '#144b2f',
            },
            }}
            onClick={() => setOpen(true)}
        >
            Next: post service
        </Box>
        </Box>
        <ReusableModal
         open={open} 
         onClose={() => setOpen(false)}>
        <Box
        sx={{
          width: 600,
          height: 500,
          borderRadius: '10px',
          backgroundColor: '#fff',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 4,
          gap: 4,
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
         <Typography
         sx={{
              fontWeight: 600,
              fontSize: '40px',
              color: '#001C44',
            }}
          >Congratulations</Typography>
          <Image src="/icons/clapping (1) 1.png" alt="" height={200} width={200} />
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: '20px',
              color: '#001C44',
            }}
          >
           Your Service Is Now Live!🎉 
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: '14px',
              color: '#001C44',
              width: '378px',
              lineHeight: '24px',
              letterSpacing: '-0.32%',
              textAlign: 'center',
            }}
          >
            Your service offering has been posted and is now visible to potential clients.
             Stay alert for messages or job invites.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 4,  }}>
          <CustomButton  bgColor="#0718B9"
            textColor="#fff"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#0718B9',
              color: '#fff',
              width: 600,
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#0A119B',
              },
            }}
          >
           View Service
          </CustomButton>
        </Box>
      </Box>
    </ReusableModal>
    </Box>

  );
};

export default ServiceDetails;
