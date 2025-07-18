'use client';

import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Link as MuiLink,
  Divider,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const mainItems = [
  { text: 'Dashboard', icon: '/icons/graph.png', href: '/dashboard' },
  { text: 'Browse', icon: '/icons/search-normal.png', href: '/dashboard/browse' },
  { text: 'My Contract', icon: '/icons/note.png', href: '/dashboard/contracts' },
  { text: 'My Services', icon: '/icons/briefcase.png', href: '/dashboard/services' },
  { text: 'My Bids', icon: '/icons/Mask group.png', href: '/dashboard/bids' },
  { text: 'Saved Items', icon: '/icons/save-add.png', href: '/dashboard/saved-items' },
  { text: 'Messages', icon: '/icons/sms-tracking.png', href: '/dashboard/messages' },
  { text: 'Transactions', icon: '/icons/receipt.png', href: '/dashboard/transactions-log' },
];

const otherItems = [
  { text: 'Profile', icon: '/icons/profile-circle.png', href: '/dashboard/profile' },
  { text: 'Settings', icon: '/icons/setting-2.png', href: '/dashboard/settings' },
  { text: 'Support', icon: '/icons/headphone.png', href: '/dashboard/support' },
];

export default function Sidebar({
  mobileOpen,
  onToggleSidebar,
}: {
  mobileOpen: boolean;
  onToggleSidebar: () => void;
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const pathname = usePathname();

  const renderNavItem = ({ text, icon, href }: { text: string; icon: string; href: string }) => {
    const isActive = pathname === href;

    return (
      <ListItem
        key={text}
        component={Link}
        href={href}
        onClick={isMobile ? onToggleSidebar : undefined}
        sx={{
          position: 'relative',
          width: 232,
          height: 36,
          borderRadius: '8px',
          px: '12px',
          py: '8px',
          gap: '8px',
          mb: 0.5,
          bgcolor: isActive ? '#FAFAFA' : 'transparent',
          display: 'flex',
          alignItems: 'center',
          fontWeight: isActive ? 600 : 400,
          color: isActive ? '#556882' : '#001C44',
          '&:hover': {
            bgcolor: '#F5F5F5',
          },
        }}
      >
        {/* Active left border */}
        {isActive && (
          <Box
            sx={{
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              width: 4,
              height: 20,
              bgcolor: '#0718B9',
              borderTopRightRadius: '4px',
              borderBottomRightRadius: '4px',
            }}
          />
        )}

        {/* Icon */}
        <ListItemIcon sx={{ minWidth: 24, color: isActive ? '#0718B9' : '#556882' }}>
          <Image
            src={icon}
            alt={text + ' icon'}
            width={20}
            height={20}
            style={{ transition: 'all 0.2s ease-in-out' }}
          />
        </ListItemIcon>

        {/* Text */}
        <ListItemText
          primary={text}
          primaryTypographyProps={{
            fontWeight: 400,
            fontSize: 14,
            lineHeight: '20px',
            letterSpacing: '-0.64%',
            color: isActive ? '#556882' : '#001C44',
          }}
        />
      </ListItem>
    );
  };

  const drawerContent = (
    <Box
      sx={{
        width: { xs: '100%', md: 272 },
        maxWidth: 272,
        height: { xs: 'auto', md: 1024 },
        borderRight: { xs: 'none', md: '1px solid #E0E0E0' },
        overflowY: 'auto',
      }}
    >
      {/* Logo */}
      <Box
        sx={{
          width: '100%',
          height: "70px",
          borderBottom: '1px solid #E0E0E0',
          p: '8.01px 24.03px',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Image src="/image/kontractlogo.png" alt="Kontract Logo" width={99} height={44} />
      </Box>

      {/* Nav List */}
      <Box
        sx={{
          height: { xs: 'auto', sm: 848 },
          gap: '14px',
          px: '20px',
          pt: '20px',
          pb: '16px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography variant="subtitle2" color="#9AA6AC" fontWeight={500} mb={1}>
          MAIN
        </Typography>
        <List>{mainItems.map(renderNavItem)}</List>

        <Divider sx={{ my: 2 }} />

        <Typography variant="subtitle2" color="#9AA6AC" fontWeight={600} mb={1}>
          OTHER
        </Typography>
        <List>{otherItems.map(renderNavItem)}</List>
      </Box>

      {/* Footer Section */}
      <Box bgcolor="#F1F5FF" borderRadius={2} p={2} textAlign="center" mt={4} fontSize={14}>
        <Typography fontWeight={500} color="#2B4263">
          Bids Remaining: <strong>5</strong>
        </Typography>
        <MuiLink
          component={Link}
          href="/dashboard/plans"
          underline="none"
          sx={{
            mt: 1,
            display: 'inline-block',
            color: '#0718B9',
            fontWeight: 500,
            fontSize: 14,
          }}
        >
          View Plan
        </MuiLink>
      </Box>
    </Box>
  );

  return isMobile ? (
    <Drawer
      variant="temporary"
      open={mobileOpen}
      onClose={onToggleSidebar}
      ModalProps={{ keepMounted: true }}
      sx={{ '& .MuiDrawer-paper': { width: 260, boxSizing: 'border-box' } }}
    >
      {drawerContent}
    </Drawer>
  ) : (
    <Drawer
      variant="permanent"
      open
      sx={{
        display: { xs: 'none', md: 'block' },
        width: 260,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 260,
          boxSizing: 'border-box',
          borderRight: '1px solid #eee',
          position: 'fixed',
          height: '100vh',
        },
      }}
    >
      {drawerContent}
    </Drawer>
  );
}
