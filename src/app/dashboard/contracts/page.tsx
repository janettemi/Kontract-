'use client';

import React, { useState } from "react";
import ReusableTable from "@/conponent/ReusableTable";
import SearchInput from "@/conponent/SearchInput";
import SelectInput from "@/conponent/SelectInput";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  ListItemText,
  Typography,
  Tooltip,
} from "@mui/material";
import { MoreHoriz } from "@mui/icons-material";
import Image from "next/image";
import ReusableModal from "@/components/ui/ReusableModal";
import CustomButton from "@/conponent/CustomButton";
import { useRouter } from "next/navigation";

const statusColors: Record<string, { color: string; bg: string }> = {
  "Expired": { color: "#D60000", bg: "#FDEDF0" },
  "In Progress": { color: "#007C91", bg: "#E5F7FA" },
  "Draft": { color: "#6B7280", bg: "#F2F2F2" },
  "In Review": { color: "#FF9500", bg: "#FFF1E5" },
  "Completed": { color: "#34C759", bg: "#EFFAF6" },
  "Posted": { color: "#5A65D0", bg: "#E6F0FA" },
};

const Contracts = () => {
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
      if (action === "view") router.push(`/dashboard/contracts/${row.id}/view-details`);
      if (action === "openDispute") router.push(`/dashboard/contracts/${row.id}/submit-dispute`);
      if (action === "bids") router.push(`/dashboard/contracts/${row.id}/bids`);
      if (action === "remove") onDelete(row);
      if (action === "edit") router.push(`/edit-contract`)
      handleClose();
    };

    const status = row.status;
    const showEdit = ["Draft", "In Progress", "Expired", "In Review", "Posted"].includes(status);
    const showView = true;
    const showBids = ["In Progress", "Posted"].includes(status);
    const showDelete = ["Draft", "Expired"].includes(status);
    const showMarkAsCompleted = status === "In Progress";

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
          {showEdit && (
            <MenuItem onClick={() => handleAction("edit")} sx={{ display: "flex", gap: 2 }}>
              <Image src="/icons/edit-2.png" alt="Edit" width={16} height={16} />
              <ListItemText>Edit contract</ListItemText>
            </MenuItem>
          )}
          {showBids && (
            <MenuItem onClick={() => handleAction("bids")} sx={{ display: "flex", gap: 2 }}>
              <Image src="/icons/Mask group.png" alt="Bids" width={16} height={16} />
              <ListItemText>Bids</ListItemText>
            </MenuItem>
          )}
          {status === "Completed" && (
            <MenuItem onClick={() => handleAction("openDispute")} sx={{ display: "flex", gap: 2 }}>
              <Image src="/icons/direct.png" alt="Dispute" width={16} height={16} />
              <ListItemText>Open a dispute</ListItemText>
            </MenuItem>
          )}
          {showView && (
            <MenuItem onClick={() => handleAction("view")} sx={{ display: "flex", gap: 2 }}>
              <Image src="/icons/eye.png" alt="View" width={16} height={16} />
              <ListItemText>View details</ListItemText>
            </MenuItem>
          )}
          {showDelete && (
            <MenuItem onClick={() => handleAction("remove")} sx={{ display: "flex", gap: 2, color: "#FF3B30" }}>
              <Image src="/icons/trash.png" alt="Delete" width={16} height={16} />
              <ListItemText>Remove contract</ListItemText>
            </MenuItem>
          )}
          {showMarkAsCompleted && (
            <MenuItem onClick={() => handleAction("markCompleted")} sx={{ display: "flex", gap: 2, color: "#34C759" }}>
              <Image src="/icons/Vector (4).png" alt="Complete" width={16} height={16} />
              <ListItemText>Mark as completed</ListItemText>
              <Tooltip title="When your contractor completes all required work, click to finalize." arrow>
                <InfoOutlinedIcon fontSize="small" sx={{ color: '#6B7280', cursor: 'pointer' }} />
              </Tooltip>
            </MenuItem>
          )}
        </Menu>
      </>
    );
  };

  const columns = [
    { label: 'Contract title', key: 'contractTitle' },
    { label: 'Amount', key: 'amount' },
    { label: 'Category/skill', key: 'categorySkill' },
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
    { label: 'Bids', key: 'bids' },
    { label: 'Date Created', key: 'dateCreated' },
    { label: 'Payment Method', key: 'paymentMethod' },
    {
      label: '',
      key: 'actions',
      render: (_: any, row: any) => <RowActionsMenu row={row} onDelete={handleDelete} />,
    },
  ];

  const rows = [
    { id: 'DB-01000', contractTitle: 'DB-01000', amount: '+₦5000', categorySkill: "Engineer", status: 'Draft', location: "Ibadan", bids: "20", dateCreated: "8th Feb, 2020", paymentMethod: "Escrow" },
    { id: 'DB-01001', contractTitle: 'DB-01001', amount: '+₦10,000', categorySkill: "Developer", status: 'In Progress', location: "Lagos", bids: "12", dateCreated: "10th Mar, 2021", paymentMethod: "Upfront" },
    { id: 'DB-01002', contractTitle: 'DB-01002', amount: '+₦8,000', categorySkill: "Designer", status: 'Expired', location: "Abuja", bids: "15", dateCreated: "20th Jan, 2023", paymentMethod: "Escrow" },
    { id: 'DB-01003', contractTitle: 'DB-01003', amount: '+₦8,000', categorySkill: "Designer", status: 'In Review', location: "Abuja", bids: "15", dateCreated: "20th Jan, 2023", paymentMethod: "Escrow" },
    { id: 'DB-01004', contractTitle: 'DB-01004', amount: '+₦8,000', categorySkill: "Designer", status: 'Completed', location: "Abuja", bids: "15", dateCreated: "20th Jan, 2023", paymentMethod: "Escrow" },
    { id: 'DB-01005', contractTitle: 'DB-01005', amount: '+₦8,000', categorySkill: "Designer", status: 'Posted', location: "Abuja", bids: "15", dateCreated: "20th Jan, 2023", paymentMethod: "Escrow" },
  ];

  const status = [
    { label: "All", value: "all" },
    { label: "Draft", value: "draft" },
    { label: "Posted", value: "posted" },
    { label: "In Review", value: "inReviw" },
    { label: "Completed", value: "completed" },
    { label: "Expired", value: "expired" },
    { label: "In Progress", value: "inProgress" },
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

      {rows.length === 0 ? (
        <Box sx={{ textAlign: "center", mt: 10 }}>
          <Image src="/image/Group 1000005612.png" alt="No Contracts" width={200} height={151.5} />
          <Typography>You don’t have any contract yet.</Typography>
          <Typography>
            Your pending and active contracts will be available here when you start post hiring contractor.
            <span
              style={{ color: "#0718B9", textDecoration: "underline", cursor: "pointer" }}
              onClick={() => router.push("/post-contract")}
            >
              {" Post a contract"}
            </span>
          </Typography>
        </Box>
      ) : (
        <ReusableTable columns={columns} rows={rows} />
      )}

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
            textAlign: "center", 
            alignItems: "center",
          }}
        >
          <Typography fontWeight={600} fontSize={16}>
            Delete contract
          </Typography>
          <Typography fontSize={14}>
            Are you sure you want to delete this contract?
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

export default Contracts;
