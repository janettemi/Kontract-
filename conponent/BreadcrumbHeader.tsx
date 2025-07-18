// components/BreadcrumbHeader.tsx
'use client';

import { Box, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

interface BreadcrumbHeaderProps {
  items: {
    label: string;
    onClick?: () => void;
    isActive?: boolean;
  }[];
}

const BreadcrumbHeader = ({ items }: BreadcrumbHeaderProps) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      {items.map((item, index) => (
        <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {item.onClick && (
            <ArrowBackIosIcon
              sx={{
                fontSize: "16px",
                cursor: "pointer",
                color: "#556882",
              }}
              onClick={item.onClick}
            />
          )}
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 600,
              color: item.isActive ? "#001C44" : "#556882",
              cursor: item.onClick ? "pointer" : "default",
              fontFamily: "BR Firma",
            }}
            onClick={item.onClick}
          >
            {item.label}
          </Typography>
          {index < items.length - 1 && (
            <Typography sx={{ fontWeight: 600, color: "#556882" }}>{">"}</Typography>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default BreadcrumbHeader;
