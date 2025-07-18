'use client';

import ReusableTable from "@/conponent/ReusableTable";
import SearchInput from "@/conponent/SearchInput";
import { AccessTime, Cancel, CheckCircle, MoreHoriz } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { useState } from "react";

const getStatusUI = (status: string) => {
  const map = {
    Successful: {
      color: '#34C759',
      bg: 'rgba(52, 199, 89, 0.1)',
      icon: <CheckCircle sx={{ fontSize: 14, color: '#34C759' }} />,
    },
    Failed: {
      color: '#FF3B30',
      bg: 'rgba(255, 59, 48, 0.1)',
      icon: <Cancel sx={{ fontSize: 14, color: '#FF3B30' }} />,
    },
    Pending: {
      color: '#FF9500',
      bg: 'rgba(255, 149, 0, 0.1)',
      icon: <AccessTime sx={{ fontSize: 14, color: '#FF9500' }} />,
    },
  };

  const { color, icon, bg } = map[status as keyof typeof map] || map['Pending'];

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        backgroundColor: bg,
        color,
        px: 1.5,
        py: 0.5,
        borderRadius: 8,
        fontSize: 14,
        fontWeight: 500,
        width: 'fit-content',
      }}
    >
      {icon}
      {status}
    </Box>
  );
};

const TransactionLog = () => {
  const columns = [
    { label: 'Transaction ID', key: 'transactionID' },
    { label: 'Description', key: 'description' },
    {
      label: 'Amount',
      key: 'amount',
      render: (val: string) => (
        <Typography sx={{ color: val.startsWith('-') ? '#FF3B30' : '#34C759', fontWeight: 500 }}>
          {val}
        </Typography>
      ),
    },
    { label: 'Date', key: 'date' },
    {
      label: 'Status',
      key: 'status',
      render: (val: string) => getStatusUI(val),
    },
    {
      label: '',
      key: 'actions',
      render: () => (
        <IconButton>
          <MoreHoriz />
        </IconButton>
      ),
    },
  ];

  const rows = [
    {
      transactionID: 'DB-01000',
      description: 'Contract promotion payment',
      amount: '+₦5000',
      date: '8th Feb, 2020',
      status: 'Successful',
    },
  ];

  const [search, setSearch] = useState("");
    return (
        <Box sx={{display:"flex", flexDirection:"column", gap:3}}>
            <Box sx={{display:"flex", gap:3}}>
             <Box> 
            <Box
                sx={{
                    width: 500,
                    height: 172,
                    opacity: 1,
                    borderRadius: '12px',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: '#E0E0E0', 
                    backgroundColor: '#FFFFFF',
                }}
                >
                {/* Your content here */}
           </Box>
          <Box
            sx={{
                width: 500,
                height: 48,
                opacity: 1,
                borderRadius: '12px',
                backgroundColor: '#0718B9',
                borderTopStyle: 'solid',
                borderTopColor: '#E0E0E0', 
                mt:-3
            }}
            >
            {/* Optional content (e.g., reply input, button, etc.) */}
            </Box>
            </Box>  
            <Box
                sx={{
                    width: 500,
                    height: 172,
                    opacity: 1,
                    borderRadius: '12px',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: '#E0E0E0',
                    p: 2, 
                    bgcolor: '#FFFFFF',
                }}
                >
                {/* Message content here */}
                </Box>
            </Box>
            <Box>
            <SearchInput
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                placeholder="Search transaction ID"
            />
            </Box>
            <ReusableTable columns={columns} rows={rows} />
        </Box>
    )
}
export default TransactionLog