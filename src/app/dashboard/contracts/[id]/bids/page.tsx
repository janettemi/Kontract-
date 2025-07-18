// components/AllBids.tsx
'use client';

import { Box, Typography } from "@mui/material";
import BidCard from "@/conponent/BidCard";
import BreadcrumbHeader from "@/conponent/BreadcrumbHeader";
import { useState } from "react";
import ContractorProfile from "../ContractorProfile";


const AllBids = ({ onBack }: { onBack: () => void }) => {
const [selectedContractorId, setSelectedContractorId] = useState<string | null>(null);
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
        contractorId: "janet002",
        avatarUrl: "/image/image (3).png",
        name: "Janet Okoro",
        rating: 4.8,
        amount: "₦700,000",
        duration: "6 weeks",
    },
    {
        contractorId: "emeka003",
        avatarUrl: "/image/image (3).png",
        name: "Emeka John",
        rating: 4.2,
        amount: "₦450,000",
        duration: "3 weeks",
    },
  ];

  if (selectedContractorId) {
    return (
      <ContractorProfile
        contractorId={selectedContractorId}
        onBack={() => setSelectedContractorId(null)}
      />
    );
  }

  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <BreadcrumbHeader
        items={[
          { label: "Contracts", onClick: onBack },
          { label: "Construction of gutter in Ibadan" },
          { label: "All bids", isActive: true },
        ]}
      />

      <Typography fontSize="20px" fontWeight={600} color="#001C44">
        All Bids
      </Typography>

      {bids.map((bid, idx) => (
        <BidCard
          key={idx}
          {...bid}
          onViewProfile={() => setSelectedContractorId(bid.contractorId)}
        />
      ))}
    </Box>
  );
};

export default AllBids;
