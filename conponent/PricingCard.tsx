import { Box, Typography, List, ListItem, ListItemIcon } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CustomButton from "./CustomButton";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface PricingCardProps {
  title: string;
  description: string;
  dailyAmount: string;
  buttonText: string;
  listTitle: string;
  features: string[];
}

const PricingCard = ({
  title,
  description,
  dailyAmount,
  buttonText,
  listTitle,
  features,
}: PricingCardProps) => {
  const [amount, period] = dailyAmount.split("/");
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
  sx={{
    position: "relative",
    maxWidth: "286px",
    flex: "1 1 286px",
    height: "536px",
    mt: { xs: 5, md: -6 }, // ← Add this line
  }}
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
>
      {/* Recommended Label */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              position: "absolute",
              top: "-28px",
              left: "0",
              width: "286px",
              height: "28px",
              backgroundColor: "#0718B9",
              color: "#fff",
              borderTopLeftRadius: "12.11px",
              borderTopRightRadius: "12.11px",
              border: "3px solid #0718B9",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 500,
              gap: "6px",
              zIndex: 2,
            }}
          >
            <ThumbUpIcon fontSize="small" />
            Recommended
          </motion.div>
        )}
      </AnimatePresence>

      {/* Card */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        style={{
          borderRadius: "12px",
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "column",
          padding: "24px",
          border: isHovered ? "3px solid #0718B9" : "1px solid #ccc",
          boxShadow: isHovered ? "0px 4px 20px rgba(0,0,0,0.04)" : "none",
          height: "100%",
          transition: "all 0.3s ease",
        }}
      >
        <Typography variant="h6" fontWeight={600} mb={1}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={2}>
          {description}
        </Typography>

        <Box display="flex" alignItems="baseline" mb={1}>
          <Typography fontSize="32px" fontWeight={700}>
            {amount}
          </Typography>
          <Typography
            component="span"
            fontSize="14px"
            color="text.secondary"
            ml={0.5}
          >
            /{period}
          </Typography>
        </Box>

        <CustomButton
          rounded
          variant="outlined"
          textColor="#0718B9"
          borderColor="#0718B9"
          fullWidth={false}
          sx={{
            width: "246px",
            height: "36px",
            borderRadius: "10px",
            textTransform: "none",
            mt: 2,
            mb: 4,
            border: "1px solid #0718B9",
            color: "#0718B9",
            "&:hover": {
              backgroundColor: "#0718B9",
              color: "#fff",
            },
          }}
        >
          {buttonText}
        </CustomButton>

        <Typography fontSize="14px" fontWeight={600} mb={2}>
          {listTitle}
        </Typography>

        <List dense sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {features.map((feature, index) => (
            <ListItem key={index} sx={{ pl: 0 }}>
              <ListItemIcon sx={{ minWidth: "35px" }}>
                <CheckIcon fontSize="small" sx={{ color: "green" }} />
              </ListItemIcon>
              <Typography fontSize="14px" color="#001C44">
                {feature}
              </Typography>
            </ListItem>
          ))}
        </List>
      </motion.div>
    </Box>
  );
};

export default PricingCard;
