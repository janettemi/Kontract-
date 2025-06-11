"use client";

import { Box, BoxProps } from "@mui/material";

const BackgroundGrid = ({ children, ...props }: BoxProps) => {
  const columns = 15;
  const rows = 6;

  return (
    <Box
      {...props}
      sx={{
        position: "relative",
        backgroundColor: '#f5f5f5',
        overflow: "hidden",
        minHeight: "100vh",
        ...props.sx,
      }}
    >
      {/* Vertical Lines */}
      {Array.from({ length: columns + 1 }).map((_, i) => (
        <Box
          key={`v-${i}`}
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: `calc(${(i / columns) * 100}%)`,
            width: "1px",
            backgroundColor: "rgba(207, 209, 211, 0.4)",
            zIndex: 0,
          }}
        />
      ))}

      {/* Horizontal Lines */}
      {Array.from({ length: rows + 1 }).map((_, i) => (
        <Box
          key={`h-${i}`}
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            top: `calc(${(i / rows) * 100}%)`,
            height: "1px",
            backgroundColor: "rgba(207, 209, 211, 0.4)",
            zIndex: 0,
          }}
        />
      ))}

      {/* Content */}
      <Box sx={{ position: "relative", zIndex: 1 }}>{children}</Box>
    </Box>
  );
};

export default BackgroundGrid;
