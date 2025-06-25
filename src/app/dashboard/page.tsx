'use client';
import SearchInput from "@/conponent/SearchInput";
import { Box, Button, Divider, Radio, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import ReusableTable from "@/conponent/ReusableTable";

const Dashboard = () => {
    
const columns = [
  { label: 'Transaction ID', key: 'transactionID' },
  { label: 'Description', key: 'description' },
  { label: 'Amount', key: 'amount' },
  { label: 'Date', key: 'date' },
  { label: 'Status', key: 'status' },
];

const rows = [
  { transactionID: 'DB-01000',
     description: 'Contract promotion payment', amount: '+₦5000',date:"8th Feb, 2020",sstatus: 'Successful'},
];
// const 
// rows = [
//   { id: 'TXN001', amount: '+₦5000',  },
//   { id: 'TXN002', amount: '-₦2000', status: 'Failed' },
//   { id: 'TXN003', amount: '+₦1000', status: 'Pending' },
// ];

const [search, setSearch] = useState("");
  const steps = [
    "Complete onboarding",
    "Verify your profile",
    "Post a contract"
  ];

  const items = [
    { text: 'Total Contracts', count: 3, bg: '#E6EBFF' },
    { text: 'Total Services', count: 5, bg: '#FFE6E6' },
    { text: 'Active Bids', count: 2, bg: '#E6FFF1' },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: 'column', gap: 3, px: { xs: 2, md: 2 }, py: 2 }}>
      <Typography
        sx={{
          fontFamily: '"BR Firma", sans-serif',
          fontWeight: 500,
          fontSize: { xs: '18px', md: '24px' },
          lineHeight: '28px',
          letterSpacing: '-0.64%',
          color: '#000917',
        }}
      >
        Good afternoon, Abdulhamid
      </Typography>

      {/* Cards container */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          flexWrap: { xs: "wrap", md: "nowrap" },
          gap: 3,
        }}
      >
        {/* Action Items Card */}
        <Box
          sx={{
            width: { xs: '100%', md: '50%' },
            minWidth: { md: '45%' },
            minHeight: 268,
            border: "1px solid #E5E5E5",
            borderRadius: "12px",
            p: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Box display="flex" gap={1} alignItems="center">
            <Typography fontWeight={600}>Your action items</Typography>
            <Box
              sx={{
                width: 20,
                height: 22,
                borderRadius: '999px',
                border: '1px solid #DF1C41',
                padding: '2px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#DF1C41',
                fontSize: '12px',
                fontWeight: 600,
                color: '#FFFFFF',
              }}
            >
              2
            </Box>
          </Box>

          <Divider />

          <Box display="flex" gap={1} alignItems="center">
            <Typography>Finish setting up your account</Typography>
            <Box
              sx={{
                width: 20,
                height: 22,
                borderRadius: '999px',
                border: '1px solid #F6F6F6',
                padding: '2px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#E6EBFF',
                fontSize: '12px',
                fontWeight: 600,
                color: '#001C44',
              }}
            >
              3
            </Box>
          </Box>

          {steps.map((text, idx) => (
            <Box key={idx} display="flex" alignItems="center" gap={1} mb={1}>
              <Radio
                sx={{
                  color: '#E5E5E5',
                  p: 0.5,
                  '&.Mui-checked': {
                    color: '#E5E5E5',
                  },
                }}
              />
              <Typography sx={{ fontSize: "16px", color: "#2B4263", fontWeight: "400" }}>{text}</Typography>
              <Image src="/icons/arrow-right.png" alt="arrow-right" height={24} width={24} />
            </Box>
          ))}
        </Box>

        {/* Contracts Card */}
        <Box
          sx={{
            width: { xs: '100%', md: '50%' },
            minWidth: { md: '45%' },
            minHeight: 268,
            border: "1px solid #E5E5E5",
            borderRadius: "12px",
            p: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography fontWeight={600}>Contracts</Typography>
          <Divider />

          {items.map((item, idx) => (
            <Box key={idx} display="flex" alignItems="center" gap={1.5} mb={1}>
              <Radio
                sx={{
                  color: '#E5E5E5',
                  p: 0.5,
                  '&.Mui-checked': {
                    color: '#E5E5E5',
                  },
                }}
              />
              <Typography sx={{ fontSize: "16px", color: "#2B4263", fontWeight: "400" }}>
                {item.text}
              </Typography>
              <Box
                sx={{
                  minWidth: 20,
                  height: 22,
                  borderRadius: '999px',
                  border: '1px solid #F6F6F6',
                  padding: '2px 6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: item.bg,
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#001C44',
                }}
              >
                {item.count}
              </Box>
              <Image src="/icons/arrow-right.png" alt="arrow-right" height={24} width={24} />
            </Box>
          ))}
          <Divider sx={{ my: 2 }} />
          <Typography color="#0718B9" fontWeight={500} align="center">
            Browse
          </Typography>
        </Box>
      </Box>
      <Box sx={{display:"flex", gap:3}}>
      <Box
          sx={{
            width: { xs: '100%', md: '50%' },
            minWidth: { md: '45%' },
            minHeight: 151,
            border: "1px solid #E5E5E5",
            borderRadius: "12px",
            p: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography fontWeight={500} fontSize={18}>Escrow Balance</Typography>
          <Box display="flex" alignItems="baseline">
            <Typography sx={{ fontSize: '16px', fontWeight: 500 }}>₦</Typography>
            <Typography sx={{ fontSize: '32px', fontWeight: 700 }}>0</Typography>
         </Box>
            <Divider />
            <Typography color="#0718B9" fontWeight={500} align="center">
            View escrow balance
          </Typography>
         </Box>
         <Box
          sx={{
            width: { xs: '100%', md: '50%' },
            minWidth: { md: '45%' },
            minHeight: 151,
            border: "1px solid #E5E5E5",
            borderRadius: "12px",
            p: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography fontWeight={500} fontSize={18}>Amount  Spent</Typography>
          <Box display="flex" alignItems="baseline">
            <Typography sx={{ fontSize: '16px', fontWeight: 500 }}>₦</Typography>
            <Typography sx={{ fontSize: '32px', fontWeight: 700 }}>0</Typography>
         </Box>
          <Divider />
          <Typography color="#0718B9" fontWeight={500} align="center">
            View amount spent
          </Typography>
         </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 2 }}>
        {/* Left Side */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box
            sx={{
                width: 40,
                height: 40,
                borderRadius: '96px',
                border: '1px solid #ccc', // Replace #ccc with your preferred color
                padding: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            >
            <Image src="/icons/receipt.png" alt="icon" width={24} height={24} />
            </Box>
            <Box>
            <Typography sx={{ fontWeight: 600, fontSize: "16px" }}>Recent Transactions</Typography>
            <Typography sx={{ fontSize: "13px", color: "#6B7280" }}>
                Display the recent transactions in the table below.
            </Typography>
            </Box>
        </Box>

        {/* Right Side */}
        <Box sx={{ display: "flex", flexDirection: "row", gap: 2, alignItems: "center" }}>
        <SearchInput
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            placeholder="Search transaction ID"
        />
            <Button
                variant="outlined"
                sx={{
                 color:"#0718B9"  , 
                 border:"1px solid #0718B9",
                 borderRadius:"10px",
                textTransform: "none",
                fontSize: "14px",
                whiteSpace: "nowrap",
                height: "40px", // match height with input if needed
                }}
            >
                See all
            </Button>
        </Box>
        </Box>
        <ReusableTable columns={columns} rows={rows} />
    </Box>
  );
};

export default Dashboard;
