"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Box,
  IconButton,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { MoreHoriz } from "@mui/icons-material";
import ReusableTable from "@/conponent/ReusableTable";
import SearchInput from "@/conponent/SearchInput";
import SelectInput from "@/conponent/SelectInput";
import CustomButton from "@/conponent/CustomButton";
import ReusableModal from "@/components/ui/ReusableModal";

const Services = () => {
  const [role, setRole] = useState("");
  const [department, setDepartment] = useState("");
  const [search, setSearch] = useState("");

  const [rows, setRows] = useState([
    { id: 'DB-01000', serviceTitle: 'DB-01000', priceRange: '+₦5000', categorySkill: "Engineer",  location: "Ibadan",  dateCreated: "8th Feb, 2020", paymentMethod: "Escrow" },
    { id: 'DB-01001', serviceTitle: 'DB-01001', priceRange: '+₦10,000', categorySkill: "Developer", location: "Lagos",  dateCreated: "10th Mar, 2021", paymentMethod: "Upfront" },
    { id: 'DB-01002', serviceTitle: 'DB-01002', priceRange: '+₦8,000', categorySkill: "Designer",  location: "Abuja",  dateCreated: "20th Jan, 2023", paymentMethod: "Escrow" },
    { id: 'DB-01003', serviceTitle: 'DB-01003', priceRange: '+₦8,000', categorySkill: "Designer",  location: "Abuja", dateCreated: "20th Jan, 2023", paymentMethod: "Escrow" },
    { id: 'DB-01004', serviceTitle: 'DB-01004', priceRange: '+₦8,000', categorySkill: "Designer", location: "Abuja",  dateCreated: "20th Jan, 2023", paymentMethod: "Escrow" },
    { id: 'DB-01005', serviceTitle: 'DB-01005', priceRange: '+₦8,000', categorySkill: "Designer", location: "Abuja",  dateCreated: "20th Jan, 2023", paymentMethod: "Escrow" },
  ]);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedContract, setSelectedContract] = useState<any>(null);

  const router = useRouter();

  const handleDelete = () => {
    if (selectedContract) {
      setRows(prev => prev.filter(row => row.id !== selectedContract.id));
      setSelectedContract(null);
      setShowDeleteModal(false);
    }
  };

  const RowActionsMenu = ({ row }: { row: any }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => setAnchorEl(null);

    const handleAction = (action: string) => {
      if (action === "edit") {
        router.push(`/dashboard/services/${row.id}/edit`);
      } else if (action === "view") {
        router.push(`/dashboard/services/${row.id}/view-service-detail`);
      } else if (action === "promote") {
        alert(`Promoting ${row.serviceTitle}`);
      } else if (action === "remove") {
        setSelectedContract(row);
        setShowDeleteModal(true);
      }
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
          <MenuItem onClick={() => handleAction("edit")} sx={{ display: "flex", gap: 2 }}>
            <Image src="/icons/edit-2.png" alt="Edit" width={16} height={16} />
            <ListItemText>Edit service</ListItemText>
          </MenuItem>
          <MenuItem onClick={() => handleAction("promote")} sx={{ display: "flex", gap: 2 }}>
            <Image src="/icons/image 3.png" alt="Promote" width={16} height={16} />
            <ListItemText>Promote</ListItemText>
          </MenuItem>
          <MenuItem onClick={() => handleAction("view")} sx={{ display: "flex", gap: 2 }}>
            <Image src="/icons/eye.png" alt="View" width={16} height={16} />
            <ListItemText>View details</ListItemText>
          </MenuItem>
          <MenuItem onClick={() => handleAction("remove")} sx={{ color: "#FF3B30", display: "flex", gap: 2 }}>
            <Image src="/icons/trash.png" alt="Delete" width={16} height={16} />
            <ListItemText>Remove service</ListItemText>
          </MenuItem>
        </Menu>
      </>
    );
  };

  const columns = [
    { label: "Service title", key: "serviceTitle" },
    { label: "Price Range", key: "priceRange" },
    { label: "Category/skill", key: "categorySkill" },
    { label: "Location", key: "location" },
    { label: "Date Created", key: "dateCreated" },
    { label: "Payment Method", key: "paymentMethod" },
    {
      label: "",
      key: "actions",
      render: (_: any, row: any) => <RowActionsMenu row={row} />,
    },
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
    { label: "Escrow Payment", value: "escrowPayment" },
    { label: "Contractor-Funded", value: "contractorFunded" },
  ];

  return (
    <>
      {/* Filters */}
      <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 2, mb: 4 }}>
        <SearchInput value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search Service" />
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <SelectInput label="Status" value={role} options={status} onChange={setRole} />
          <SelectInput label="Payment terms" value={department} options={paymentTerm} onChange={setDepartment} />
        </Box>
      </Box>

      {/* Empty or Table */}
      {rows.length === 0 ? (
        <Box sx={{ textAlign: "center", mt: 10 }}>
          <Image src="/image/Group (2).png" alt="No Contracts" width={200} height={151.5} />
          <Typography>You don’t have any service yet.</Typography>
          <Typography>
            <span style={{ color: "#0718B9", textDecoration: "underline", cursor: "pointer" }} onClick={() => router.push("/post-service")}>
              Post a service
            </span>
          </Typography>
        </Box>
      ) : (
        <ReusableTable columns={columns} rows={rows} />
      )}

      {/* Delete Modal */}
      <ReusableModal open={showDeleteModal} onClose={() => setShowDeleteModal(false)}>
        <Box sx={{ display: "flex", justifyContent: "center", p: 4 }}>
          <Box
            sx={{
              width: 390,
              borderRadius: "12px",
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
              Delete service
            </Typography>
            <Typography fontSize={14}>
              Are you sure you want to delete <strong>{selectedContract?.serviceTitle}</strong>?
            </Typography>
            <Box display="flex" justifyContent="center" gap={2}>
              <CustomButton bgColor="#E5E7EB" textColor="#000" onClick={() => setShowDeleteModal(false)}>
                No, Cancel
              </CustomButton>
              <CustomButton bgColor="#FF3B30" textColor="#fff" onClick={handleDelete}>
                Yes, Delete
              </CustomButton>
            </Box>
          </Box>
        </Box>
      </ReusableModal>
    </>
  );
};

export default Services;
