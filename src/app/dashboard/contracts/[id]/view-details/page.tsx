'use client';

import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { LocationOn } from "@mui/icons-material";
import Image from "next/image";
import CustomButton from "@/conponent/CustomButton";
import BidCard from "@/conponent/BidCard";
import { useState } from "react";
import AllBids from "../AllBids";
//import { useRouter } from "next/navigation";
import ContractorProfile from "../ContractorProfile";
import { useParams } from "next/navigation";


const bids = [
  {
    contractorId: "hamid001",
    avatarUrl: "/image/image (3).png",
    name: "Abdulhamid Ayo",
    rating: 4.5,
    amount: "₦500,000",
    duration: "4 weeks",
  },
  {
    contractorId: "grace002",
    avatarUrl: "/image/image (3).png",
    name: "Grace Okafor",
    rating: 4.8,
    amount: "₦450,000",
    duration: "3 weeks",
  },
];

const ViewDetail = () => {
  const params = useParams(); // ✅ GET THE PARAMS
  const contractId = params?.id; // ✅ GET THE id FROM URL

  const [selectedContractorId, setSelectedContractorId] = useState<string | null>(null);
  const [showAllBids, setShowAllBids] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  console.log("Viewing Contract ID:", contractId); // ✅ Check if it's working

   if (selectedContractorId) {
    return (
      <ContractorProfile
        contractorId={selectedContractorId}
        onBack={() => setSelectedContractorId(null)}
      />
    );
  }

  return (
    <>
    {showAllBids ? (
        <AllBids onBack={() => setShowAllBids(false)} />
        ) : ( 
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3, width: "100%" }}>
      {/* Title */}
      <Typography sx={{ fontSize: "24px", fontWeight: 500, color: "#001C44" }}>
        Construction of gutter in Ibadan
      </Typography>

      {/* Meta Info */}
      <Box
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          gap: isSmallScreen ? 1 : 10,
        }}
      >
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "14px",
            color: "#556882",
            lineHeight: "18px",
            letterSpacing: "-0.006em",
          }}
        >
          Posted 5 minutes ago
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <LocationOn sx={{ fontSize: "16px", color: "#556882" }} />
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "14px",
              color: "#556882",
              lineHeight: "18px",
              letterSpacing: "-0.006em",
            }}
          >
            Oyo, Ibadan. NG
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          maxWidth: "1078px",
          border: "1px solid #fff",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          padding: 3,
          backgroundColor: "#F2F2F2",
        }}
      >
        <Typography fontWeight={600} mb={1} fontSize={20}>
          About the contract:
        </Typography>

        <Typography fontWeight={400} fontSize={14} mb={4} color="#001C44">
          Clearly defined payment terms, project budget, and contract duration included.
        </Typography>

        <hr color="#F2F2F2" />

        {/* Contract Meta */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            mt: 3,
          }}
        >
          {[
            { label: "Category", value: "Construction" },
            { label: "Skills", value: "$4,000" },
            { label: "Payment terms", value: "3 Months" },
            { label: "Budget", value: "Milestone" },
            { label: "Duration", value: "Aug 1, 2025" },
            { label: "Number of Contractors", value: "Oct 30, 2025" },
          ].map((item, index) => (
            <Box key={index} sx={{ minWidth: "150px" }}>
              <Typography
                sx={{
                  fontFamily: "BR Firma",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: "-0.006em",
                  color: "#001C44",
                }}
              >
                {item.label}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "BR Firma",
                  fontWeight: 600,
                  fontSize: "14px",
                  lineHeight: "20px",
                  letterSpacing: "-0.006em",
                  color: "#556882",
                }}
              >
                {item.value}
              </Typography>
            </Box>
          ))}
        </Box>

        <hr color="#F2F2F2" />

        {/* Attachments */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3, mt: 3 }}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "24px",
              letterSpacing: "-0.006em",
              color: "#001C44",
            }}
          >
            Attachments
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: isSmallScreen ? "center" : "space-between",
            }}
          >
            {[1, 2, 3, 4].map((_, index) => (
              <Image
                key={index}
                src="/image/Frame 2147207950.png"
                alt={`Attachment ${index + 1}`}
                width={200}
                height={200}
                style={{ borderRadius: 8 }}
              />
            ))}
          </Box>
        </Box>
      </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ color: "#001C44", fontSize: "20px", fontWeight: "600" }}>Bids</Typography>
            <CustomButton bgColor="#0718B9" textColor="#fff"
            onClick={() => setShowAllBids(true)}
            >View all bids</CustomButton>
        </Box>
        
        {bids.map((bid, index) => (
        <BidCard
            key={index}
            avatarUrl={bid.avatarUrl}
            name={bid.name}
            rating={bid.rating}
            amount={bid.amount}
            duration={bid.duration}
            onViewProfile={() => setSelectedContractorId(bid.contractorId)}
        />
        ))}
        </Box>
    </Box>
    )}
    </>
  );
};

export default ViewDetail;
