"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { Star, Verified } from "@mui/icons-material";
import Image from "next/image";
import CustomButton from "./CustomButton";

interface JobCardProps {
  postedTime: string;
  title: string;
  jobTitle: string;
  description: string;
  priceRange: string;
  rating?: number;
  location?: string;
  dueDate?: string;
  bids?: number;
  showVerified?: boolean;
  showLikeDislike?: boolean;
  showStars?: boolean;
  showPromotedButton?: boolean;
  showContactButton?: boolean;
  buttonText?: string;
  onButtonClick?: () => void;
}

const JobCard: React.FC<JobCardProps> = ({
  postedTime,
  title,
  jobTitle,
  description,
  priceRange,
  rating,
  location,
  dueDate,
  bids,
  showVerified = true,
  showLikeDislike = true,
  showStars = true,
  showPromotedButton = false,
  showContactButton = false,
  buttonText = "Contact Contractor",
  onButtonClick,
}) => {
  const [seeMore, setSeeMore] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 450,
        minHeight: 365,
        border: "1px solid #E0E0E0",
        borderRadius: "10px",
        backgroundColor: "#F6F6F6",
        padding: { xs: 2, sm: 3 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Posted Time */}
      <Typography sx={{ fontSize: 12, color: "#888" }}>{postedTime}</Typography>

      {/* Title & Icons */}
      <Box
        sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
      >
        <Box sx={{ flexGrow: 1, minWidth: "60%" }}>
          <Typography
            variant="h6"
            sx={{
              letterSpacing: "-0.32px",
              fontWeight: 600,
              mt: 1,
              color: "#0718B9",
              fontSize: { xs: "16px", sm: "18px", md: "20px" },
            }}
          >
            {title}
            {showVerified && (
              <Verified fontSize="small" color="primary" sx={{ ml: 1 }} />
            )}
          </Typography>
        </Box>

        {showLikeDislike && (
          <Box sx={{ display: "flex", gap: 1, mt: isMobile ? 1 : 0 }}>
            <IconButton size="small">
              <Image
                src="/image/dislike.png"
                width={20.88}
                height={20.88}
                alt="dislike icon"
              />
            </IconButton>
            <IconButton>
              <Image
                src="/image/heart.png"
                width={20.88}
                height={20.88}
                alt="heart icon"
              />
            </IconButton>
          </Box>
        )}
      </Box>

      {/* Job Title */}
      <Typography sx={{ fontSize: 12, color: "#888", mt: 1 }}>{jobTitle}</Typography>

      {/* Description */}
      <Typography
        variant="body2"
        sx={{
          mt: 2,
          fontFamily: "BR Firma",
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "20px",
          color: "#444",
        }}
      >
        {seeMore || description.length <= 100
          ? description
          : `${description.slice(0, 100)}...`}
        {description.length > 100 && (
          <Button
            size="small"
            onClick={() => setSeeMore(!seeMore)}
            sx={{ textTransform: "none", fontSize: "12px" }}
          >
            {seeMore ? "less" : "more"}
          </Button>
        )}
      </Typography>

      {/* Budget & Due Date */}
      <Box
        sx={{
          mt: 2,
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Box>
          <Typography variant="body2" sx={{ fontSize: 14, color: "#444" }}>
            Est. Budget
          </Typography>
          <Typography sx={{ fontWeight: 600, fontSize: 14, color: "#444" }}>
            {priceRange}
          </Typography>
        </Box>
        <Box>
          <Typography variant="body2" sx={{ fontSize: 14, color: "#444" }}>
            Due Date
          </Typography>
          <Typography sx={{ fontSize: 14, color: "#444" }}>{dueDate}</Typography>
        </Box>
      </Box>

      {/* Location & Stars */}
      <Box
        sx={{
          mt: 2,
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        {location && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Image
              src="/image/location.png"
              width={20.88}
              height={20.88}
              alt="location icon"
            />
            <Typography variant="body2">{location}</Typography>
          </Box>
        )}

        {showStars && rating !== undefined && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                sx={{
                  width: "12px",
                  height: "12px",
                  color: i < rating ? "#FACC15" : "#D1D5DB",
                }}
              />
            ))}
          </Box>
        )}
      </Box>

      {/* Bids & Promoted */}
      <Box
        sx={{
          mt: 2,
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        {bids !== undefined && (
          <Box>
            <Typography variant="body2">
              <strong>Bids:</strong>{" "}
              <span style={{ color: "#0718B9" }}>{bids}</span>
            </Typography>
          </Box>
        )}
        {showPromotedButton && (
          <Button
            size="small"
            variant="contained"
            startIcon={<RocketLaunchIcon />}
            sx={{
              backgroundColor: "#000",
              color: "#fff",
              textTransform: "none",
              borderRadius: "8px",
              fontSize: "14px",
              padding: "4px 12px",
              height: "28px",
              minWidth: "auto",
            }}
          >
            Promoted
          </Button>
        )}
      </Box>

      {/* Contact Button */}
      {showContactButton && onButtonClick && (
        <Box sx={{ mt: 2 }}>
          <CustomButton
            rounded
            variant="outlined"
            textColor="#0718B9"
            borderColor="#0718B9"
            fullWidth
            onClick={onButtonClick}
            sx={{
              borderRadius: "8px",
              textTransform: "none",
              fontSize: "14px",
            }}
          >
            {buttonText}
          </CustomButton>
        </Box>
      )}
    </Box>
  );
};

export default JobCard;
