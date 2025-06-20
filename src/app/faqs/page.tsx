"use client";

import {
  Box,
  Typography,
  TextField,
  Collapse,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
//import { FaRegLightbulb } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import Image from "next/image";

// Structured FAQ data
const fullFaqs = [
  {
    section: "Getting Started",
    icon:<Image src="/icons/Frame 1171276363.png" alt="icon plan" width={72} height={72} />,
    intro: "Learn how to create a high-quality profile on Kontract",
    nested: [
      {
        question: "About Kontract",
        answer:
          "Kontract is a digital platform that connects businesses with freelancers securely and efficiently.",
      },
      {
        question: "Our Fees",
        answer:
          "We charge a small service fee on each transaction to maintain platform quality and support.",
      },
    ],
  },
  {
    section: "Profile & Account",
    icon:<Image src="/icons/Frame 1171276363 (1).png" alt="icon plan" width={72} height={72} />,
    intro: "Learn how to sign up, manage your account and get support",
    nested: [
      {
        question: "About Kontract",
        answer:
          "Kontract is a digital platform that connects businesses with freelancers securely and efficiently.",
      },
      {
        question: "Our Fees",
        answer:
          "We charge a small service fee on each transaction to maintain platform quality and support.",
      },
    ],
  },
   {
    section: "Payment Disputes",
    icon:<Image src="/icons/Frame 1171276363 (2).png" alt="icon plan" width={72} height={72} />,
    intro: "Learn how to sign up, manage your account and get support",
    nested: [
      {
        question: "About Kontract",
        answer:
          "Kontract is a digital platform that connects businesses with freelancers securely and efficiently.",
      },
      {
        question: "Our Fees",
        answer:
          "We charge a small service fee on each transaction to maintain platform quality and support.",
      },
    ],
  },
   {
    section: "Contracts",
    icon:<Image src="/icons/Frame 2147207558.png" alt="icon plan" width={72} height={72} />,
    intro: "Learn how to sign up, manage your account and get support",
    nested: [
      {
        question: "About Kontract",
        answer:
          "Kontract is a digital platform that connects businesses with freelancers securely and efficiently.",
      },
      {
        question: "Our Fees",
        answer:
          "We charge a small service fee on each transaction to maintain platform quality and support.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openSectionIndex, setOpenSectionIndex] = useState<number | null>(null);
  const [openNestedIndex, setOpenNestedIndex] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (index: number) => {
    setOpenSectionIndex(prev => (prev === index ? null : index));
  };

  const toggleNested = (key: string) => {
    setOpenNestedIndex(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <>
      {/* Gradient Header Only */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #5A65D0 0%, #FFFFFF00 100%)",
          px: { xs: 2, md: 6 },
          py: { xs: 4, md: 10},
        }}
      >
        <Box sx={{ maxWidth: "1140px", mx: "auto" }}>
          <Typography
            sx={{
              mb: 1,
              fontWeight: 400,
              fontSize: "18px",
            }}
          >
            Kontract Support
          </Typography>
          <Typography
            variant="h4"
            sx={{
               color: "#000",
              fontWeight: 600,
              mb: 0,
            }}
          >
            How can we help you?
          </Typography>
        </Box>
      </Box>

      {/* Search Input Outside Background */}
      <Box
        sx={{
          px: { xs: 2, md: 6 },
          mt: -4, // Pull it slightly closer to the gradient
          mb: 4,
        }}
      >
        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: "10px",
            border: "1px solid #ccc",
            px: 2,
            display: "flex",
            alignItems: "center",
            height: "68px",
             maxWidth: "1140px",
            mx: "auto",
          }}
        >
          <TextField
            placeholder="Search FAQ..."
            variant="standard"
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start">
                  <CiSearch size={22} />
                </InputAdornment>
              ),
            }}
            fullWidth
            sx={{
              fontSize: "16px",
              "& input": {
                padding: "8px 0px",
              },
            }}
          />
        </Box>
      </Box>

     {fullFaqs.map((section, sectionIdx) => {
        const isOpen = openSectionIndex === sectionIdx;
        return (
          <Box
            key={sectionIdx}
            sx={{
              mb: 4,
              background: "#FAFAFA",
              borderRadius: "8px",
              p: 3,
              maxWidth: "1140px",
              mx: "auto",
            }}
          >
            {/* Section Header */}
            <Box
              onClick={() => toggleSection(sectionIdx)}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                cursor: "pointer",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
                <Box>{section.icon}</Box>
                <Box sx={{  alignItems: "center", gap: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {section.section}
                  </Typography>
                  <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
                  {section.intro}
                </Typography>
                </Box>
              </Box>
              <IconButton sx={{color:"#0718B9"}}>{isOpen ? <ExpandLess /> : <ExpandMore />}</IconButton>
            </Box>

            {/* Section Content */}
            <Collapse in={isOpen} timeout="auto" unmountOnExit>
              <Box mt={2}>

                {/* Nested items */}
                {section.nested.map((faq, faqIdx) => {
                  const nestedKey = `${sectionIdx}-${faqIdx}`;
                  const nestedOpen = openNestedIndex[nestedKey] || false;

                  return (
                    <Box key={nestedKey} sx={{ mb: 2 }}>
                      <Box
                        onClick={() => toggleNested(nestedKey)}
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          cursor: "pointer",
                          fontWeight: 500,
                          fontSize: "16px",
                        }}
                      >
                        <Typography>{faq.question}</Typography>
                        <IconButton size="small" sx={{color:"#0718B9"}}>
                          {nestedOpen ? <ExpandLess /> : <ExpandMore />}
                        </IconButton>
                      </Box>
                      <Collapse in={nestedOpen}>
                        <Typography sx={{ fontSize: "14px", pt: 1 }}>
                          {faq.answer}
                        </Typography>
                      </Collapse>
                    </Box>
                  );
                })}
              </Box>
            </Collapse>
          </Box>
        );
      })}
    </>
  );
}
