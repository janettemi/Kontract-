"use client"
import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Collapse,
  IconButton,
  //useMediaQuery,
  //useTheme,
} from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import { useRouter } from "next/navigation";


const faqs = [
  {
    question: "What makes Kontract different?",
    answer:
      "Thepeer is a business infrastructure provider enabling seamless transactions across multiple platforms through wallets. Integrating with Thepeer will grant a better payment experience to your customers and help you boost retention as you do not have to experience card payment failures.",
  },
  {
    question: "How can I pay a contractor on Contra?",
    answer: "Yes! We offer a free plan with basic features to help you get started.",
  },
  {
    question: "Does Thepeer work for customers or businesses?",
    answer:
      "You can subscribe to a higher plan or promote your listings using the promotion options available.",
  },
  {
    question: "Does Thepeer work for customers or businesses?",
    answer:
      "You can subscribe to a higher plan or promote your listings using the promotion options available.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
 // const theme = useTheme();
  //const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
const router = useRouter();
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Box
        sx={{
            backgroundColor: "#02083E",
            mx: "auto",
            mb:"6",
            px: { xs: 3, sm: 4 },
            py: { xs: 6, sm: 8 },
            width: "100%",
            maxWidth: "1056px", // This limits the width
            height: { xs: "auto", md: "556px" }, // Fixed height from md and up
            overflowY: "auto", // In case content exceeds height
        }}
        >
      <Box
        sx={{
          maxWidth: "1056px",
          mx: "auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 4, md: "162px" },
          alignItems: "flex-start",
        }}
      >
        {/* Left Side */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            p:"6px",
            color: "#fff",
            gap: 6,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              fontSize: { xs: "24px", sm: "32px" },
              lineHeight: 1.3,
            }}
          >
            How can we help you?
          </Typography>
          <Button
            onClick={() => router.push("/faqs")}
            variant="contained"
            sx={{
              backgroundColor: "#FFFFFF",
              color: "#02083E",
              textTransform: "none",
              borderRadius: "12px",
              width: "fit-content",
              px: 3,
              py: 1.5,
              "&:hover": {
                backgroundColor: "#e4e4e4",
              },
            }}
          >
            See all FAQs
          </Button>
        </Box>

        {/* Right Side - FAQ List */}
        <Box sx={{ flex: 2 }}>
          {faqs.map((faq, index) => (
            <Box
              key={index}
              sx={{
                mb: 2,
                borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: 500,
                  py: 1,
                }}
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <IconButton sx={{ color: "#fff" }}>
                  {openIndex === index ? <ExpandLess /> : <ExpandMore />}
                </IconButton>
              </Box>
              <Collapse in={openIndex === index} timeout="auto" unmountOnExit>
                <Typography
                  sx={{
                    color: "#ddd",
                    fontSize: "14px",
                    pb: 1,
                    pl: 1,
                    pr: 2,
                  }}
                >
                  {faq.answer}
                </Typography>
              </Collapse>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
