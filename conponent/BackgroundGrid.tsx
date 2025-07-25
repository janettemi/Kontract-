'use client';

import { Box, BoxProps, useTheme, useMediaQuery } from '@mui/material';

const BackgroundGrid = ({ children, ...props }: BoxProps) => {
  const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const columns = isXs ? 6 : isSm ? 10 : 15;
  const rows = isXs ? 4 : isSm ? 5 : 6;

  return (
    <Box
      {...props}
      sx={{
        position: 'relative',
        backgroundColor: '#F6F8FA',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        pt: '88px', // Ensure grid content is not hidden under navbar
        width: '100%',
        px: 2,
        ...props.sx,
      }}
    >
      {/* Vertical Grid Lines */}
      {Array.from({ length: columns + 1 }).map((_, i) => (
        <Box
          key={`v-${i}`}
          sx={{
            position: 'absolute',
            top: '10%',
            bottom: '10%',
            left: `${(i / columns) * 100}%`,
            width: '1px',
            backgroundColor: '#CFD1D3',
            opacity: 0.5,
            zIndex: 0,
          }}
        />
      ))}

      {/* Horizontal Grid Lines */}
      {Array.from({ length: rows + 1 }).map((_, i) => (
        <Box
          key={`h-${i}`}
          sx={{
            position: 'absolute',
            left: '10%',
            right: '10%',
            top: `${(i / rows) * 100}%`,
            height: '1px',
            backgroundColor: '#CFD1D3',
            opacity: 0.5,
            zIndex: 0,
          }}
        />
      ))}

      {/* Content goes here */}
      <Box sx={{ position: 'relative', zIndex: 1, width: '100%' }}>
        {children}
      </Box>
    </Box>
  );
};

export default BackgroundGrid;
