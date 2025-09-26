'use client';

import React, { useState } from "react";
import ReusableTable from "@/conponent/ReusableTable";
import SearchInput from "@/conponent/SearchInput";
import SelectInput from "@/conponent/SelectInput";
//import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { MoreHoriz } from "@mui/icons-material";
import Image from "next/image";
import ReusableModal from "@/components/ui/ReusableModal";
import CustomButton from "@/conponent/CustomButton";
import { useRouter } from "next/navigation";

const statusColors: Record<string, { color: string; bg: string }> = {
  "Closed": { color: "#D60000", bg: "#FDEDF0" },
  "In Progress": { color: "#007C91", bg: "#E5F7FA" },
  "Opened": { color: "#34C759", bg: "#EFFAF6" }
};

const Bids = () => {
  const [role, setRole] = useState("");
  const [department, setDepartment] = useState("");
  const [search, setSearch] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedContract, setSelectedContract] = useState<any>(null);
  const router = useRouter();

  const handleDelete = (row: any) => {
    setSelectedContract(row);
    setShowDeleteModal(true);
  };

  const RowActionsMenu = ({ row, onDelete }: { row: any; onDelete: (row: any) => void }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => setAnchorEl(null);

    const handleAction = (action: string) => {
      if (action === "view") router.push(`/dashboard/bids/${row.id}/view-bids`);
      if (action === "remove") onDelete(row);
      handleClose();
    };

    return (
      <>
        <IconButton onClick={handleClick}><MoreHoriz /></IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
        >

            <MenuItem onClick={() => handleAction("view")} sx={{ display: "flex", gap: 2 }}>
              <Image src="/icons/eye.png" alt="View" width={16} height={16} />
              <ListItemText>View bids</ListItemText>
            </MenuItem>
        
          
            <MenuItem onClick={() => handleAction("remove")} sx={{ display: "flex", gap: 2, color: "#FF3B30" }}>
              <Image src="/icons/trash.png" alt="Delete" width={16} height={16} />
              <ListItemText>Remove bids</ListItemText>
            </MenuItem>
    
        </Menu>
      </>
    );
  };

  const columns = [
    { label: 'Contract title', key: 'contractTitle' },
    { label: 'Amount', key: 'amount' },
    {
      label: 'Status',
      key: 'status',
      render: (value: any) => {
        const { color, bg } = statusColors[value] || { color: "#000", bg: "#EEE" };
        return (
          <Box sx={{ color, backgroundColor: bg, px: 1, py: 0.5, borderRadius: "6px", fontSize: 12, fontWeight: 500 }}>
            {value}
          </Box>
        );
      },
    },
    { label: 'Location', key: 'location' },
    { label: 'Date Created', key: 'dateCreated' },
    { label: 'Proposed Due Date', key: 'proposedDueDate' },
    {
      label: '',
      key: 'actions',
      render: (_: any, row: any) => <RowActionsMenu row={row} onDelete={handleDelete} />,
    },
  ];

  const rows = [
    { id: 'DB-01000', contractTitle: 'DB-01000', amount: '+₦5000',  status: 'In Progress', location: "Ibadan",  dateCreated: "8th Feb, 2020",proposedDueDate: "Escrow" },
    { id: 'DB-01001', contractTitle: 'DB-01001', amount: '+₦10,000',  status: 'Closed', location: "Lagos",  dateCreated: "10th Mar, 2021", proposedDueDate: "Upfront" },
    { id: 'DB-01002', contractTitle: 'DB-01002', amount: '+₦8,000',  status: 'Closed', location: "Abuja", dateCreated: "20th Jan, 2023", proposedDueDate: "Escrow" },
    { id: 'DB-01003', contractTitle: 'DB-01003', amount: '+₦8,000',  status: 'In Progress', location: "Abuja", dateCreated: "20th Jan, 2023", proposedDueDate: "Escrow" },
    { id: 'DB-01004', contractTitle: 'DB-01004', amount: '+₦8,000',  status: 'Opened', location: "Abuja",  dateCreated: "20th Jan, 2023", proposedDueDate: "Escrow" },
    { id: 'DB-01005', contractTitle: 'DB-01005', amount: '+₦8,000',  status: 'In Progress', location: "Abuja",  dateCreated: "20th Jan, 2023", proposedDueDate: "Escrow" },
  ];

  const status = [
    { label: "All", value: "all" },
    { label: "Closed", value: "closed" },
    { label: "Opended", value: "opened" },
  ];

  const paymentTerm = [
    { label: "All", value: "all" },
    { label: "Upfront payment", value: "upFrontPayment" },
    { label: "EscrowPayment", value: "escrowPayment" },
    { label: "Contractor-Funded", value: "contractorFunded" },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 2, mb: 4 }}>
        <SearchInput value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search contracts" />
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <SelectInput label="Status" value={role} options={status} onChange={setRole} />
          <SelectInput label="Payment terms" value={department} options={paymentTerm} onChange={setDepartment} />
        </Box>
      </Box>
        <ReusableTable columns={columns} rows={rows} />
      <ReusableModal open={showDeleteModal} onClose={() => setShowDeleteModal(false)}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            width: 390,
            borderRadius: "12px",
            border: "1px solid #ccc",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            bgcolor: "#fff",
            textAlign: "center", //  Center all text
            alignItems: "center", // Center children horizontally
          }}
        >
          <Typography fontWeight={600} fontSize={16}>
            Delete Bid
          </Typography>
          <Typography fontSize={14}>
            Are you sure you want to delete this bid?
          </Typography>
          <Box display="flex" justifyContent="center" gap={2}>
            <CustomButton
              bgColor="#E5E7EB"
              textColor="#000"
              onClick={() => setShowDeleteModal(false)}
            >
              No, Cancel
            </CustomButton>
            <CustomButton
              bgColor="#FF3B30"
              textColor="#fff"
              onClick={() => {
                console.log("Deleting contract:", selectedContract);
                setShowDeleteModal(false);
              }}
            >
              Yes, Delete
            </CustomButton>
          </Box>
        </Box>
      </Box>
    </ReusableModal>
    </Box>
  );
};

export default Bids;
