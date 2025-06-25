'use client';

import { useState } from 'react';
import Sidebar from '@/conponent/Sidebar';
import DashboardNavbar from '@/conponent/DashboardNavbar';
import { Box } from '@mui/material';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleToggleSidebar = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box display="flex">
      <Sidebar mobileOpen={mobileOpen} onToggleSidebar={handleToggleSidebar} />
      <Box flexGrow={1}>
        <DashboardNavbar onToggleSidebar={handleToggleSidebar} />
        <Box sx={{p: 2 }}>{children}</Box>
      </Box>
    </Box>
  );
}
