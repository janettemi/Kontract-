'use client';

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import CustomButton from "@/conponent/CustomButton";
import StarIcon from "@mui/icons-material/Star";

type BidCardProps = {
  avatarUrl: string;
  name: string;
  rating: number;
  amount: string;
  duration: string;
  onViewProfile: () => void;
};

const BidCard = ({ avatarUrl,
  name,
  //rating,
  amount,
  duration,
  onViewProfile,
}: BidCardProps) => {
  return (
    <Box
      sx={{
        maxWidth: "1038px",
        height: "auto",
        borderRadius: "10px",
        bgcolor: "#F6F6F6",
        p: 2,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
        {/* Left: Avatar and Name */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Image src={avatarUrl} alt={name} width={120} height={120} style={{ borderRadius: "50%" }} />
          <Box>
            <Typography sx={{ fontWeight: 600, fontSize: "16px", color: "#001C44" }}>{name}</Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <StarIcon sx={{ color: "#FFB400", fontSize: "18px" }} />
               <StarIcon sx={{ color: "#FFB400", fontSize: "18px" }} />
                <StarIcon sx={{ color: "#FFB400", fontSize: "18px" }} />
                 <StarIcon sx={{ color: "#FFB400", fontSize: "18px" }} />
            </Box>
            <Box sx={{ mt: { xs: 2, sm: 0 },  display :"flex ",  gap:4}}>
          <Typography sx={{ fontSize: "14px", fontWeight: 600, color: "#001C44" }}>
            Proposed Amount: <span style={{ color: "#556882" }}>{amount}</span>
          </Typography>
          <Typography sx={{ fontSize: "14px", fontWeight: 600, color: "#001C44" }}>
            Contract Duration: <span style={{ color: "#556882" }}>{duration}</span>
          </Typography>
        </Box>
          </Box>
        </Box>
        {/* Right: Actions */}
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: { xs: 2, sm: 0 } }}>
          <CustomButton bgColor="#0718B9" textColor="#fff">
            Message
          </CustomButton>
          <CustomButton variant="outlined"
            textColor="#0718B9"
            borderColor="#0718B9"
            onClick={onViewProfile}
            >
            View profile
          </CustomButton>
        </Box>
      </Box>
    </Box>
  );
};

export default BidCard;
