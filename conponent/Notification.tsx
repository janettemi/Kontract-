'use client';

import {
  Box,
  Typography,
  IconButton,
  Menu,
  Divider,
  MenuItem,
} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CheckIcon from '@mui/icons-material/Check';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useState } from 'react';
import Image from 'next/image';

type Notification = {
  title: string;
  actionText?: string;
  actionColor?: string;
  date?: string;
  userName?: string;
};

type NotificationDropdownProps = {
  notifications?: Notification[];
};

const NotificationDropdown = ({ notifications = [] }: NotificationDropdownProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [notifMenuAnchor, setNotifMenuAnchor] = useState<null | HTMLElement>(null);
  const [selectedNotificationIndex, setSelectedNotificationIndex] = useState<number | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  

  const handleNotifMenuClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
    setNotifMenuAnchor(event.currentTarget);
    setSelectedNotificationIndex(index);
  };

  const handleNotifMenuClose = () => {
    setNotifMenuAnchor(null);
    setSelectedNotificationIndex(null);
  };

  const handleMarkAsRead = () => {
  if (selectedNotificationIndex !== null) {
    const selected = notifications[selectedNotificationIndex];
    console.log('Marking as read:', selected.title); // Replace with your actual logic
  }
  handleNotifMenuClose();
};


  const handleClearNotification = () => {
    // implement logic
    handleNotifMenuClose();
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <NotificationsNoneIcon sx={{ color: '#333' }} />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          sx: {
            width: '531px',
            maxHeight: '639px',
            borderRadius: '10px',
            border: '1px solid #E0E0E0',
            backgroundColor: '#FFFFFF',
            mt: 1.5,
            p: 2,
            overflowY: 'auto',
          },
        }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        {/* Header */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
          <Typography fontWeight={600} fontSize="16px">
            Notifications
          </Typography>
          <IconButton size="small" style={{ color: '#0718B9' }}>
            <MoreHorizIcon />
          </IconButton>
        </Box>

        <Divider sx={{ mb: 2 }} />

        {/* Notification List */}
        {notifications.length === 0 ? (
          <Box textAlign="center">
            <Image src="/icons/Group (1).png" alt="notification" width={110} height={90} />
            <Typography color="text.secondary" py={4}>
              You’re all caught up!
            </Typography>
          </Box>
        ) : (
          notifications.map((note, idx) => (
            <Box
              key={idx}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                mb: 2,
                gap: 1,
              }}
            >
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Box
                  sx={{
                    width: 50,
                    height: 40,
                    border: '0.75px solid #0718B9',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 600,
                    fontSize: '14px',
                    color: '#0718B9',
                    textTransform: 'uppercase',
                  }}
                >
                  {note.userName?.charAt(0) || '-'}
                </Box>

                <Box>
                  <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>
                    {note.title}{' '}
                    {note.actionText && (
                      <Typography
                        component="span"
                        sx={{ color: note.actionColor || '#0718B9', fontWeight: 500 }}
                      >
                        {note.actionText}
                      </Typography>
                    )}
                  </Typography>
                  {note.date && (
                    <Typography sx={{ fontSize: '12px', color: '#A0A0A0', mt: 0.5 }}>
                      {note.date}
                    </Typography>
                  )}
                </Box>
              </Box>

              {/* Three-dot menu */}
              <Box>
                <IconButton size="small" onClick={(e) => handleNotifMenuClick(e, idx)}>
                  <MoreHorizIcon fontSize="small"  style={{color:"#0718B9"}}/>
                </IconButton>
              </Box>
            </Box>
          ))
        )}
      </Menu>

      {/* Per-notification dropdown */}
      <Menu
        anchorEl={notifMenuAnchor}
        open={Boolean(notifMenuAnchor)}
        onClose={handleNotifMenuClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem onClick={handleMarkAsRead}>
          <CheckIcon sx={{ fontSize: 18, mr: 1 }} />
          Mark as Read
        </MenuItem>
        <MenuItem onClick={handleClearNotification} sx={{ color: '#FF3B30' }}>
        <DeleteOutlineIcon sx={{ fontSize: 18, mr: 1, color: '#FF3B30' }} />
        Clear Notification
        </MenuItem>
      </Menu>
    </>
  );
};

export default NotificationDropdown;
