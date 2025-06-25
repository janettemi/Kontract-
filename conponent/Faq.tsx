"use client";
import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Collapse,
  IconButton,
} from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import { useRouter } from "next/navigation";

const faqs = [
  {
    question: "What makes Kontract different?",
    answer:
      "Thepeer is a business infrastructure provider enabling seamless transactions across multiple platforms through wallets...",
  },
  {
    question: "How can I pay a contractor on Contra?",
    answer:
      "Yes! We offer a free plan with basic features to help you get started.",
  },
  {
    question: "Does Thepeer work for customers or businesses?",
    answer:
      "You can subscribe to a higher plan or promote your listings using the promotion options available.",
  },
  {
    question: "Is Thepeer secure?",
    answer:
      "Yes, Thepeer uses industry-standard security practices and encryption to keep your data safe.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const router = useRouter();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#02083E",
        mx: "auto",
        px: { xs: 3, sm: 4 },
        py: { xs: 6, sm: 8 },
        width: { xs: "100%", md: "1056px" },
        height: { xs: "auto", md: "556px" },
        overflowY: { md: "auto" }, // Scroll if content overflows on large screens
        borderRadius: "12px",
        mb:6
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: { xs: 6, md: "120px" },
        }}
      >
        {/* Left Column */}
        <Box
          sx={{
            flex: 1,
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            gap: 4,
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
              fontWeight: 500,
              "&:hover": {
                backgroundColor: "#e4e4e4",
              },
            }}
          >
            See all FAQs
          </Button>
        </Box>

        {/* Right Column - FAQ List */}
        <Box sx={{ flex: 2, width: "100%" }}>
          {faqs.map((faq, index) => (
            <Box
              key={index}
              sx={{
                mb: 2,
                borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              <Box
                onClick={() => toggleFAQ(index)}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: 500,
                  py: 1.5,
                }}
              >
                <Typography sx={{ flex: 1 }}>{faq.question}</Typography>
                <IconButton sx={{ color: "#fff" }} size="small">
                  {openIndex === index ? <ExpandLess /> : <ExpandMore />}
                </IconButton>
              </Box>
              <Collapse in={openIndex === index} timeout="auto" unmountOnExit>
                <Typography
                  sx={{
                    color: "#ddd",
                    fontSize: "14px",
                    pb: 2,
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
