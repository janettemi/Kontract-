'use client';

import CustomButton from "@/conponent/CustomButton";
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  MoreHorizontalIcon,
  CheckIcon,
  ArchiveIcon,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

const Messages = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedMessage, setSelectedMessage] = useState<any>(null);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMarkAllAsRead = () => {
    console.log("Marked all as read");
    handleMenuClose();
  };

  const handleViewArchived = () => {
    console.log("View archived conversations");
    handleMenuClose();
  };

  const formatDate = (date: Date) => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    const dayName = days[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];

    let suffix = "th";
    if (day === 1 || day === 21 || day === 31) suffix = "st";
    else if (day === 2 || day === 22) suffix = "nd";
    else if (day === 3 || day === 23) suffix = "rd";

    return `${dayName} ${day}${suffix} of ${month}`;
  };

  const messages = [
    {
      id: 1,
      initials: "TA",
      date: "2025-04-29",
      name: "Toyin Adeniyi",
      subject: "Event planner needed for a presidential summit",
      lastMessage: "What’s the update about the project",
      amount: "₦500,000",
      ContractDuration: "4 weeks",
      sender: "other",
      content: "Hello, just checking in!",
      timestamp: "2025-04-29T10:00:00Z"
    },
    {
      id: 2,
      initials: "AA",
      date: "2025-04-29",
      name: "Ayo Ayo",
      subject: "Construction: Ibadan Gutter",
      lastMessage: "What’s the update about the project",
      amount: "₦500,000",
      ContractDuration: "4 weeks",
      sender: "user",
      content: "We're currently in progress.",
      timestamp: "2025-04-29T10:05:00Z"
    },
     {
      id: 3,
      initials: "FM",
      date: "2025-04-29",
      name: "Ayo Ayo",
      subject: "Construction: Ibadan Gutter",
      lastMessage: "What’s the update about the project",
      amount: "₦500,000",
      ContractDuration: "4 weeks",
      sender: "user",
      content: "We're currently in progress.",
      timestamp: "2025-04-29T10:05:00Z"
    }
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: isSmallScreen ? "column" : "row", height: "100vh", width: "100%" }}>
      {/* Sidebar */}
      <Box sx={{ width: isSmallScreen ? "100%" : 341, height: "100%", borderRight: isSmallScreen ? "none" : "1px solid #E0E0E0", borderBottom: isSmallScreen ? "1px solid #E0E0E0" : "none", p: 3 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
          <Typography sx={{ fontFamily: "BR Firma, sans-serif", fontWeight: 500, fontSize: "20px", lineHeight: "24px", letterSpacing: "-0.12px" }}>Messages</Typography>
          <IconButton size="small" style={{ color: "#0718B9" }} onClick={handleMenuOpen}><MoreHorizontalIcon /></IconButton>
          <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
            <MenuItem onClick={handleMarkAllAsRead}><CheckIcon size={16} style={{ marginRight: 8 }} />Mark all as read</MenuItem>
            <MenuItem onClick={handleViewArchived}><ArchiveIcon size={16} style={{ marginRight: 8 }} />View archived conversations</MenuItem>
          </Menu>
        </Box>
        <Box sx={{ display: "flex", gap: 3 }}>
          <CustomButton rounded bgColor="#0718B9" textColor="#fff" style={{ width: 84, height: 24, fontSize: 12 }}>All</CustomButton>
          <CustomButton rounded bgColor="#F2F2F2" textColor="#001C44" style={{ width: 84, height: 24, fontSize: 12 }}>Unread</CustomButton>
        </Box>
        <Divider sx={{ my: 4 }} />
        {messages.length === 0 ? (
          <Box sx={{ mt: 10, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Image src="/image/sms-tracking.png" alt="No Saved Items" width={60} height={60} />
            <Typography sx={{ fontWeight: 500, fontSize: 16, mt: 2, color: "#556882" }}>You don’t have any conversations</Typography>
            <Typography sx={{ fontSize: 12, color: "#808DA1", mb: 3 }}>Once you start collaborating, your conversation will appear here.</Typography>
            <CustomButton rounded bgColor="#0718B9" textColor="#fff"><Image src="/icons/add.png" alt="Post contract icon" width={20} height={20} /> Post contract</CustomButton>
          </Box>
        ) : (
          messages.map((msg) => (
            <Box key={msg.id} sx={{ display: "flex", gap: 2, mb: 3, cursor: "pointer" }} onClick={() => setSelectedMessage(msg)}>
              <Box sx={{ width: 40, height: 40, border: '0.75px solid #0718B9', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0718B9', fontWeight: 'bold', fontSize: '14px' }}>{msg.initials}</Box>
              <Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <Typography sx={{ fontWeight: 600 }}>{msg.name}</Typography>
                    <Image src="/image/Top Status [1.0].png" alt="verified" width={12} height={12} />
                  </Box>
                  <Typography>{msg.date}</Typography>
                </Box>
                <Typography sx={{ fontSize: 13, color: "#667085" }}>{msg.subject}</Typography>
                <Typography sx={{ fontSize: 12, color: "#999999" }}>You: {msg.lastMessage}</Typography>
              </Box>
            </Box>
          ))
        )}
      </Box>

      {/* Message Display */}
      <Box sx={{ flex: 1 }}>
        {selectedMessage ? (
          <>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2, bgcolor: "#F2F2F2", p: 2 }}>
            <Box sx={{display:"flex",justifyContent:"space-between"}}> 
            <Box>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>{selectedMessage.name}</Typography>
                <Image src="/image/Top Status [1.0].png" alt="verified" width={18} height={18} />
              </Box>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Image src="/image/briefcase.png" alt="briefcase" width={18} height={18} />
                <Typography>{selectedMessage.subject}</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Typography sx={{ fontSize: 13, color: "#667085" }}>Proposed Amount: {selectedMessage.amount}</Typography>
                <Typography sx={{ fontSize: 13, color: "#667085" }}>Contract Duration: {selectedMessage.ContractDuration}</Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: '10px' }}>
                <Button variant="contained" startIcon={<CheckIcon />} sx={{ backgroundColor: '#38C793', '&:hover': { backgroundColor: '#2cab83' } }}>Accept</Button>
                <Button variant="outlined" startIcon={<CloseIcon />} sx={{ color: '#FF3B30', borderColor: '#FF3B30', '&:hover': { backgroundColor: '#ffeaea' } }}>Reject</Button>
              </Box>
             </Box>
             </Box> 

            <Box sx={{ p: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', pt: 2 }}>
                <Typography variant="body2" sx={{ color: 'gray' }}>{formatDate(new Date(selectedMessage.date))}</Typography>
              </Box>

              <Box sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 2 }}>
                {messages.map((message) => (
                  <Box key={message.id} sx={{ display: "flex", justifyContent: message.sender === "user" ? "flex-end" : "flex-start", gap: 1 }}>
                    {message.sender === "other" && <Avatar sx={{ width: 30, height: 30 }}><Image src="/image/woman.png" alt="Client" width={30} height={30} /></Avatar>}
                    <Box sx={{ maxWidth: "75%", bgcolor: message.sender === "user" ? "#5A65D0" : "#FAFAFA", color: message.sender === "user" ? "#fff" : "#000", px: 2, py: 1.5, borderTopRightRadius: message.sender === "user" ? 0 : 8, borderTopLeftRadius: message.sender === "user" ? 8 : 0, borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}>
                      <Typography variant="body2">{message.content}</Typography>
                      {message.timestamp && <Typography variant="caption" sx={{ display: "block", opacity: 0.6 }}>{new Date(message.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</Typography>}
                    </Box>
                    {message.sender === "user" && <Avatar sx={{ width: 30, height: 30 }}><Image src="/image/Logo.png" alt="You" width={30} height={30} /></Avatar>}
                  </Box>
                ))}
              </Box>
            </Box>
          </>
        ) : (
          <Typography sx={{ color: "#999", textAlign: "center", mt: 10 }}>Select a message to view conversation</Typography>
        )}
      </Box>
    </Box>
  );
};

export default Messages;