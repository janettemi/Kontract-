'use client';

import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import NotificationDropdown from './Notification';

export default function DashboardNavbar({ onToggleSidebar }: { onToggleSidebar: () => void }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const pathname = usePathname();

  const [showSearch, setShowSearch] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const toggleSearch = () => setShowSearch(!showSearch);

  const router = useRouter()

  const getTitle = (path: string) => {
    const last = path.split('/').pop() || 'Dashboard';
    const clean = last.replace(/-/g, ' ');
    return clean.charAt(0).toUpperCase() + clean.slice(1);
  };

  const handlePostClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlePostOptionClick = (type: 'contract' | 'service') => {
    router.push("/post-contract")
    //router.push("/post-service")
    handleClose();
  };
  const handlePostsOptionClick = (type: 'contract' | 'service') => {
    router.push("/post-service")
    handleClose();
  };
  


  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: '#fff',
        borderBottom: '1px solid #E0E0E0',
        width: { xs: '100%', md: 'calc(100% - 272px)' },
        left: { md: '272px' },
        zIndex: (theme) => theme.zIndex.drawer + 1,
        height: '88px',
        justifyContent: 'center',
        px: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '100%',
          flexWrap: 'nowrap',
        }}
      >
        {/* Left: Title & Menu Icon */}
        <Box display="flex" alignItems="center" gap={2}>
          {isMobile && (
            <IconButton onClick={onToggleSidebar} sx={{ color: '#0718B9' }}>
              <MenuIcon />
            </IconButton>
          )}
          <Typography
            sx={{
              fontFamily: '"BR Firma", sans-serif',
              fontWeight: 500,
              fontSize: '24px',
              lineHeight: '30px',
              letterSpacing: '-0.64%',
              color: '#000917',
            }}
          >
            {getTitle(pathname)}
          </Typography>
        </Box>

        {/* Right: Search, Notifications, Post */}
        <Box display="flex" alignItems="center" gap={{ xs: 1, sm: 2 }}>
          <Image
            src="/icons/search-normal.png"
            alt="search-icon"
            height={20}
            width={20}
            onClick={toggleSearch}
            style={{ cursor: 'pointer' }}
          />

          <NotificationDropdown
            notifications={[
              {
                title: 'A recent sig-in to your kontract account from chrome. A recent sig-in to your kontract account from chrome.',
                date: 'June 25, 2025',
                userName: 'Emeka',
              },
              {
                title: 'You have a bid for the contract you posted View ',
                 actionText: '“Event planner for presidential summit in lagos”.',
                actionColor: '#0718B9',
                date: 'June 24, 2025',
                userName: 'Emeka',
              },
            ]}
          />

          {/* Post Button with Dropdown */}
          <Box>
            <Button
              variant="contained"
              onClick={handlePostClick}
              sx={{
                backgroundColor: '#0718B9',
                width: { xs: 'auto', sm: '165px' },
                color: '#fff',
                height: '40px',
                borderRadius: '10px',
                textTransform: 'none',
                px: { xs: 1.5, sm: 2 },
                py: { xs: 0.5, sm: 1 },
                fontWeight: 500,
                fontSize: { xs: '12px', sm: '14px' },
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <AddIcon fontSize="small" />
              {!isMobile && 'Post'}
            </Button>

            <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            PaperProps={{
              sx: {
                width: '228px',
                height: '88px',
                borderRadius: '8px',
                border: '1px solid #F0F0F0', // Adjust this if you want a visible border
                backgroundColor: '#FFFFFF',
                boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
                overflow: 'hidden',
              },
            }}
          >
            <MenuItem onClick={() => handlePostOptionClick('contract')} 
            
            >Post a contract</MenuItem>
            <MenuItem onClick={() => handlePostsOptionClick('service')}>Post a service</MenuItem>
          </Menu>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
