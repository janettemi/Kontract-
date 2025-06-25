"use client";

import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import BackgroundGrid from "@/conponent/BackgroundGrid";
import PricingCard from "@/conponent/PricingCard";
import BuildSection from "@/conponent/BuildInfo";
import FAQSection from "@/conponent/Faq";

const pricingPlans = {
  bids: [
    {
      title: "Free Plan",
      description: "Basic job listing with limited reach for beginners",
      dailyAmount: "$0/year",
      buttonText: "Sign up free",
      listTitle: "What’s included:",
      features: [
        "Submit 1 bid per month",
        "Access to basic contractor profiles",
        "Standard application messaging tools",
        "Basic contract views & application insights",
      ],
    },
    {
      title: "One-time bid",
      description: "Pay once to bid and access verified contracts.",
      dailyAmount: "₦999/daily",
      buttonText: "Place a Bid — No Commitment",
      listTitle: "All free features plus:",
      features: [
        "Pay once to submit a bid.",
        "No recurring subscription.",
        "Access to contracts posted by verified clients.",
        "Best for occasional users or those testing the platform.",
      ],
    },
    {
      title: "Starter plan",
      description: "Weekly bidding access with alerts and visibility tools.",
      dailyAmount: "₦4999/week",
      buttonText: "Go Starter",
      listTitle: "All one-time bid features plus:",
      features: [
        "Submit up to 10 bids per week",
        "Email alerts for new and relevant contracts.",
        "Basic profile visibility.",
        "Access to public counter-offers and bids.",
      ],
    },
    {
      title: "Professional plan",
      description: "Unlimited bids with alerts and full profile exposure.",
      dailyAmount: "₦14,999/Month",
      buttonText: "Unlock Pro Power",
      listTitle: "All starter features plus:",
      features: [
        "Unlimited contract bids.",
        "Email and SMS alerts.",
        "Enhanced profile visibility.",
        "Access to public counter-offers and bids.",
      ],
    },
  ],
  promotion: [
    {
      title: "Free",
      description: "Basic job listing with limited reach—perfect for getting started.",
      dailyAmount: "₦0/year",
      buttonText: "Sign up free",
      listTitle: "What’s included:",
      features: [
        "Unlimited posting of contracts and services",
        "Standard contractor applicant messaging.",
        "Access to public contractor profiles.",
        "Basic reporting on contract views and applications.",
      ],
    },
    {
      title: "Daily",
      description: "Boost your job every day for top visibility and fast matches.",
      dailyAmount: "₦999/daily",
      buttonText: "Boost Daily",
      listTitle: "All free features plus:",
      features: [
        "Unlimited contract postings with premium visibility for a week.",
        "Basic search visibility for contractors",
        "24-hour response guarantee for applicant messages",
        "Simple contract template access (5 templates)",
      ],
    },
    {
      title: "Weekly",
      description: "Keep your job visible all week—steady exposure, better chances.",
      dailyAmount: "₦4999/week",
      buttonText: "Stay Visible",
      listTitle: "All free features plus:",
      features: [
        "Unlimited contract postings with premium visibility for a week.",
        "Advanced contractor filtering and matching algorithm.",
        "Dedicated account manager for ongoing support.",
        "Custom contract template builder with legal review option.",
      ],
    },
    {
      title: "Monthly",
      description: "Maximum visibility all month—ideal for long-term hiring goals.",
      dailyAmount: "₦14,999/Month",
      buttonText: "Go All In",
      listTitle: "All free features plus:",
      features: [
        "Unlimited contract postings with premium visibility.",
        "Advanced contractor filtering and matching algorithm.",
        "Dedicated account manager for ongoing support.",
        "Custom contract template builder with legal review option.",
      ],
    },
  ],
};

const Pricing = () => {
  const [activeTab, setActiveTab] = useState<"bids" | "promotion">("bids");

  const TabButton = ({
    label,
    value,
  }: {
    label: string;
    value: "bids" | "promotion";
  }) => {
    const isActive = activeTab === value;

    return (
      <Button
        onClick={() => setActiveTab(value)}
        sx={{
          textTransform: "none",
          width: "78px",
          height: "38px",
          borderRadius: "8px",
          backgroundColor: isActive ? "#0718B9" : "transparent",
          color: isActive ? "#fff" : "#0718B9",
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "20px",
          minWidth: 0,
          padding: 0,
          "&:hover": {
            backgroundColor: isActive ? "#0718B9" : "rgba(7, 24, 185, 0.1)",
          },
        }}
      >
        {label}
      </Button>
    );
  };

  return (
    <>
      <BackgroundGrid >
        <Box sx={{ maxWidth: 800,  mx: "auto", textAlign: "center", mb: 4  ,mt:10}}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: { xs: "36px", md: "70px" },
              lineHeight: { xs: "52px", md: "105px" },
              letterSpacing: "-0.64px",
            }}
          >
            Choose the plan for you
          </Typography>
          <Typography variant="body1" color="text.secondary" marginTop="6px">
            Let nothing in your way as you scale your freelance enterprise.
            <br />
            Get started with a free plan or go pro today.
          </Typography>
        </Box>

        <Box
          sx={{
            width: "214px",
            height: "48px",
            border: "1px solid #0718B9",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: "8px",
            mx: "auto",
            mb: 4,
          }}
        >
          <TabButton label="Bids" value="bids" />
          <TabButton label="Promotion" value="promotion" />
        </Box>
      </BackgroundGrid>

      {/* Pricing Cards */}
       <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          maxWidth: "1192px",
          width: "100%",
          mx:"auto",
          mt:"-40px",
          justifyContent: "center",
        }}
      >
        {pricingPlans[activeTab].map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </Box>

      {/* Comparison Table */}
      <Box
        sx={{
          
          mx: "auto",
          mt: 10,
          mb: 6,
          px: 2,
           display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          maxWidth: "1192px",
          width: "100%",
         
          
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            fontSize: { xs: "24px", md: "32px" },
            lineHeight: "1.4",
            textAlign: "center",
            mb: 3,
          }}
        >
          Compare Plans & Features
        </Typography>

        <Box sx={{ width: "100%", overflowX: "auto" }}>
          <Box
            component="table"
            sx={{
              width: "100%",
              borderCollapse: "collapse",
              minWidth: "600px", // Optional: helps make the table scroll on small screens
            }}
          >
            <thead>
              <tr>
                <th style={{ textAlign: "left", padding: "12px", border: "1px solid #ccc" }}>Features</th>
                {(activeTab === "bids" ? pricingPlans.bids : pricingPlans.promotion).map((plan, idx) => (
                  <th
                    key={idx}
                    style={{
                      textAlign: "center",
                      padding: "12px",
                      border: "1px solid #ccc",
                    }}
                  >
                    {plan.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {(activeTab === "bids"
                ? [
                    "Bid submissions",
                    "Alerts",
                    "Profile visibility",
                    "Contract access",
                    "Time commitment",
                    "Recurring Payment",
                    "Counter-offer Access",
                    "Saved Contracts",
                  ]
                : [
                    "Visibility",
                    "Contract",
                    "Advanced Features",
                    "Templates",
                    "Contractor Filtering",
                    "Boost Duration",
                    "Job Posting Quota",
                  ]
              ).map((featureTitle, rowIdx) => (
                <tr key={rowIdx}>
                  <td style={{ padding: "10px", border: "1px solid #ccc" }}>{featureTitle}</td>
                  {(activeTab === "bids" ? pricingPlans.bids : pricingPlans.promotion).map((plan, planIdx) => {
                    const match = plan.features.find((f) =>
                      f.toLowerCase().includes(featureTitle.toLowerCase())
                    );
                    return (
                      <td
                        key={planIdx}
                        style={{
                          textAlign: "center",
                          padding: "10px",
                          border: "1px solid #ccc",
                        }}
                      >
                        {match || "—"}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </Box>
        </Box>
        </Box>
      <FAQSection />
      <BuildSection />
    </>
  );
};

export default Pricing;
