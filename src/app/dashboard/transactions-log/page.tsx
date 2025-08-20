'use client';

import { useState } from "react";
import { Box, IconButton, ListItemText, Menu, MenuItem, TextField, Typography } from "@mui/material";
import { AccessTime, Cancel, CheckCircle, MoreHoriz } from "@mui/icons-material";
import Image from "next/image";
import ReusableTable from "@/conponent/ReusableTable";
import SearchInput from "@/conponent/SearchInput";
import SelectInput from "@/conponent/SelectInput";
import ReusableModal from "@/components/ui/ReusableModal";
import CustomButton from "@/conponent/CustomButton";

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

  const { color, icon, bg } = map[status as keyof typeof map] || map.Pending;


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
const [search, setSearch] = useState("");
const [role, setRole] = useState("");
const [bankName, setBankName] = useState("")
const [accountNumber,setAccountNumber] = useState("")
const [amount, setAmount] = useState("")
const [showRequectModal, setShowRequestModal] = useState(false);
  const status = [
    { label: "All", value: "all" },
    { label: "Successful", value: "Successful" },
    { label: "Pending", value: "Pending" },
    { label: "Failed", value: "Failed" },
  ];

  const inputStyles = {
    '& .MuiOutlinedInput-root': {
      borderRadius: '16px',
    },
  };

   const RowActionsMenu = ({ row }: { row: any }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => setAnchorEl(null);

    const handleAction = (action: string) => {
    //   if (action === "edit") {
    //     router.push(`/dashboard/services/${row.id}/edit`);
    //   } else if (action === "view") {
    //     router.push(`/dashboard/services/${row.id}/view-service-detail`);
    //   } else if (action === "promote") {
    //     alert(`Promoting ${row.serviceTitle}`);
    //   } else if (action === "remove") {
    //     setSelectedContract(row);
    //     setShowDeleteModal(true);
    //   }
      handleClose();
    };
 
  return (
      <>
        <IconButton onClick={handleClick}>
          <MoreHoriz />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <MenuItem onClick={() => handleAction("view")} sx={{ display: "flex", gap: 2 }}>
            <Image src="/icons/eye.png" alt="View" width={16} height={16} />
            <ListItemText>View receipt</ListItemText>
          </MenuItem>
          <MenuItem onClick={() => handleAction("remove")} sx={{ display: "flex", gap: 2 }}>
            <Image src="/icons/trash.png" alt="Delete" width={16} height={16} />
            <ListItemText>Download receipt</ListItemText>
          </MenuItem>
        </Menu>
      </>
    );
  };
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
      label: "",
      key: "actions",
      render: (_: any, row: any) => <RowActionsMenu row={row} />,
    },
  ];

   const bankNameList = [
    { label: 'United Bank of Africa', value: 'United Bank of Africa' },
    { label: 'GTB', value: 'GTB' },
  ];

  const rows = [
    {
      transactionID: 'DB-01000',
      description: 'Contract promotion payment',
      amount: '+₦5000',
      date: '8th Feb, 2020',
      status: 'Successful',
    },
    {
      transactionID: 'DB-01001',
      description: 'Contract promotion payment',
      amount: '-₦5000',
      date: '8th Feb, 2020',
      status: 'Pending',
    },
    {
      transactionID: 'DB-01002',
      description: 'Contract promotion payment',
      amount: '-₦5000',
      date: '8th Feb, 2020',
      status: 'Failed',
    },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <Box sx={{ display: "flex", gap: 3,  }}>
        {/* Payment Request Box */}
        <Box>
          <Box
            sx={{
              width: 470,
              height: 172,
              borderRadius: '12px',
              border: '1px solid #E0E0E0',
              backgroundColor: '#FFFFFF',
              p: 2,
              display: 'flex',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: '96px',
                border: '1px solid #ccc',
                padding: '4px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image src="/image/Vector (5).png" alt="arrow" width={10.82} height={10.82} />
            </Box>
            <Box>
              <Typography fontWeight={600}>Escrow Payment</Typography>
              <Typography fontSize={14}>₦450,000.00</Typography>
            </Box>
          </Box>

          <Box
            sx={{
              width: 500,
              height: 48,
              mt: -5,
              borderRadius: '12px',
              backgroundColor: '#0718B9',
              borderTop: '1px solid #E0E0E0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor:"pointer"
            }}
             onClick={() => { 
             setShowRequestModal(true);
            }}
          >
            <Typography color="white" fontWeight={500}>Request withdrawal</Typography>
          </Box>
        </Box>

        {/* Expenses Box */}
        <Box
          sx={{
            width: 470,
            height: 172,
            borderRadius: '12px',
            border: '1px solid #E0E0E0',
            backgroundColor: '#FFFFFF',
            p: 2,
            display: 'flex',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Box
            sx={{
              width: 48,
              height: 48,
              borderRadius: '96px',
              border: '1px solid #ccc',
              padding: '4px',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image src="/image/Vector (6).png" alt="arrow" width={10.82} height={10.82} />
          </Box>
          <Box>
            <Typography fontWeight={600}>Expenses</Typography>
            <Typography fontSize={14}>₦500,000.00</Typography>
          </Box>
        </Box>
      </Box>

      {/* Search Input */}
      <Box sx={{display:"flex", gap:3}}>
        <SearchInput
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder="Search transaction ID"
        />
        <SelectInput label="Status" value={role} options={status} onChange={setRole} />
      </Box>

      {/* Table */}
      <ReusableTable columns={columns} rows={rows} />

      <ReusableModal open={showRequectModal} onClose={() => setShowRequestModal(false)}>
        <Box sx={{ display: "flex", justifyContent: "center", p: 4 }}>
          <Box
            sx={{
              width: 500,
              borderRadius: "12px",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              bgcolor: "#fff",
            }}
          >
            <Typography sx={{
                fontSize:"18px",
                fontWeight: 500,
                color:"#000917"
             }}>Withdrawal request</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt:3}}>
                <label style={{ fontSize: 14, fontWeight: 500, color: '#1A1A1A' }}>Bank name</label>
                <TextField
                    select
                    fullWidth
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                    sx={inputStyles}
                >
                    {bankNameList.map((opt) => (
                    <MenuItem key={opt.value} value={opt.value}>
                        {opt.label}
                    </MenuItem>
                    ))}
                </TextField>
             </Box>
             <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <label style={{ fontSize: 14, fontWeight: 500, color: '#1A1A1A' }}>
                    Account Number
                </label>
                <TextField
                    fullWidth
                    type="number"
                    placeholder="000000000"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                    sx={inputStyles}
                />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <label style={{ fontSize: 14, fontWeight: 500, color: '#1A1A1A' }}>
                    Amount
                </label>
                <TextField
                    fullWidth
                    type="number"
                    placeholder="000000000"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    sx={inputStyles}
                />
            </Box>
             <Box  gap={2}>
              <CustomButton 
              bgColor="#0718B9"
                textColor="#fff"
                rounded
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1.5,
              backgroundColor:"#0718B9",
              color: "#fff",
              width: "100%",
              mt: 2,
              textTransform: "none",
              '&:hover': {
                backgroundColor: "#0718B9"
              },
            }}
              >
                Withdraw
              </CustomButton>
            </Box>
          </Box>
        </Box>
      </ReusableModal>
    </Box>
  );
};

export default TransactionLog;
