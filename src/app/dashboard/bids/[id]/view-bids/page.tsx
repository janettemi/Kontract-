'use client';

import {
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { LocationOn, Star, Verified } from "@mui/icons-material";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
// import { useParams } from "next/navigation";
// import { useState } from "react";

const ViewBidDetail = () => {
  //const params = useParams();
  //const contractId = params?.id;

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));


  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3, width: "100%" }}>
      {/* Title */}
      <Typography sx={{ fontSize: "24px", fontWeight: 500, color: "#001C44" }}>
        Construction of gutter in Ibadan
      </Typography>

      {/* Meta Info */}
      <Box
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          gap: isSmallScreen ? 1 : 10,
        }}
      >
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "14px",
            color: "#556882",
            lineHeight: "18px",
            letterSpacing: "-0.006em",
          }}
        >
          Posted 5 minutes ago
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <LocationOn sx={{ fontSize: "16px", color: "#556882" }} />
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "14px",
              color: "#556882",
              lineHeight: "18px",
              letterSpacing: "-0.006em",
            }}
          >
            Oyo, Ibadan. NG
          </Typography>
        </Box>
      </Box>

      {/* Contract Details */}
      <Box
        sx={{
          maxWidth: "1078px",
          border: "1px solid #F2F2F2",
          padding: 3,
          borderRadius: "16px",
        }}
      >
        <Typography fontWeight={600} mb={1} fontSize={20}>
          About the contract:
        </Typography>

        <Typography fontWeight={400} fontSize={14} mb={4} color="#001C44">
          Covers payment terms, contract budget, and expected duration.
        </Typography>

        <hr color="#F2F2F2" />

        {/* Contract Meta */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            mt: 3,
          }}
        >
          {[
            { label: "Category", value: "Construction" },
            { label: "Skills", value: "$4,000" },
            { label: "Payment terms", value: "3 Months" },
            { label: "Budget", value: "Milestone" },
            { label: "Duration", value: "Aug 1, 2025" },
            { label: "Number of Contractors", value: "Oct 30, 2025" },
          ].map((item, index) => (
            <Box key={index} sx={{ minWidth: "150px" }}>
              <Typography
                sx={{
                  fontFamily: "BR Firma",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: "-0.006em",
                  color: "#001C44",
                }}
              >
                {item.label}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "BR Firma",
                  fontWeight: 600,
                  fontSize: "14px",
                  lineHeight: "20px",
                  letterSpacing: "-0.006em",
                  color: "#556882",
                }}
              >
                {item.value}
              </Typography>
            </Box>
          ))}
        </Box>

        <hr color="#F2F2F2" />

        {/* Attachments */}
  
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3, mt: 3 }}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "24px",
              letterSpacing: "-0.006em",
              color: "#001C44",
            }}
          >
            Attachments
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              mt: 2,
            }}
          >
            {[
              { name: "blueprint.pdf", type: "pdf" },
              { name: "design.jpg", type: "image", url: "/image/Frame 2147207950.png" },
              { name: "quote.docx", type: "doc" },
            ].map((file, index) => (
              <Box
                key={index}
                sx={{
                  width: 200,
                  height: 200,
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  px: 1,
                }}
              >
                {file.type === "image" ? (
                  <img
                    src={file.url}
                    alt={file.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                ) : (
                  <Box>
                    <InsertDriveFileIcon sx={{ fontSize: 40, color: "#556882" }} />
                    <Typography
                      variant="caption"
                      sx={{
                        fontSize: 10,
                        overflowWrap: "break-word",
                        maxWidth: 100,
                      }}
                    >
                      {file.name}
                    </Typography>
                  </Box>
                )}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* About the Client */}
      <Box
        sx={{
          maxWidth: "1078px",
          border: "1px solid #F2F2F2",
          padding: 3,
          borderRadius: "16px",
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "20px",
            lineHeight: "32px",
            verticalAlign: "bottom",
            color: "#001C44",
          }}
        >
          About the client
        </Typography>

        {/* Client Info Fields */}
        {[
          { label: "Member since", value: "April 04, 2025" },
          { label: "Total amount spent", value: "₦5,000,000" },
          { label: "Location", value: "Oyo, Ibadan" },
          { label: "Contracts posted", value: "6" },
          { label: "Hire rate", value: "50%" },
          {
            label: "Ranking",
            value: (
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <Star sx={{ fontSize: 16, color: "#FBBF24" }} />
                <Typography sx={{ fontSize: "14px", color: "#556882" }}>4.8</Typography>
              </Box>
            ),
          },
          {
            label: "Profile verification",
            value: (
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <Typography sx={{ fontSize: "14px", color: "#556882" }}>Verified</Typography>
                <Verified sx={{ fontSize: 16, color: "#22C55E" }} />
              </Box>
            ),
          },
        ].map((item, index) => (
          <Box key={index} sx={{ display: "flex", flexDirection: "column", mt:3 }}>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "22px",
                verticalAlign: "bottom",
                color: "#001C44",
              }}
            >
              {item.label}
            </Typography>
            {typeof item.value === "string" ? (
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "20px",
                  letterSpacing: "-0.006em",
                  verticalAlign: "bottom",
                  color: "#556882",
                }}
              >
                {item.value}
              </Typography>
            ) : (
              item.value
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ViewBidDetail;
