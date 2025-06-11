"use client";

import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import BackgroundGrid from "@/conponent/BackgroundGrid";
import PricingCard from "@/conponent/PricingCard";
import BuildSection from "@/conponent/BuildInfo";

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
      title: "Basic Promotion",
      description: "Promote your listing to get noticed by clients.",
      dailyAmount: "₦1,999/week",
      buttonText: "Promote Now",
      listTitle: "What’s included:",
      features: [
        "Priority listing in searches",
        "Highlight your job posting",
        "Attract more qualified contractors",
        "One-time promotion with no subscription",
      ],
    },
    {
      title: "Boosted Plan",
      description: "Double your visibility with ongoing promotions.",
      dailyAmount: "₦6,999/month",
      buttonText: "Boost Visibility",
      listTitle: "All basic promotion features plus:",
      features: [
        "Pinned listing on dashboard",
        "Analytics on views & clicks",
        "Custom call-to-action",
        "Renew automatically every month",
      ],
    },
    {
      title: "Elite Exposure",
      description: "Get maximum reach across the platform.",
      dailyAmount: "₦14,999/month",
      buttonText: "Go Elite",
      listTitle: "All boosted features plus:",
      features: [
        "Featured in newsletters",
        "Highlighted on home page",
        "SMS notifications to contractors",
        "24/7 promotion support",
      ],
    },
  ],
};

const Pricing = () => {
  const [activeTab, setActiveTab] = useState<"bids" | "promotion">("bids");

  const TabButton = ({ label, value }: { label: string; value: "bids" | "promotion" }) => {
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
    <BackgroundGrid py={10} px={6} sx={{ position: "relative", zIndex: 1 }}>
      <Box sx={{ maxWidth: 800, mx: "auto", textAlign: "center", mb: 4 }}>
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
        <Typography variant="body1" color="text.secondary">
          Let nothing in your way as you scale your freelance enterprise.
          <br />
          Get started with a free plan or go pro today.
        </Typography>
      </Box>

      {/* Tab Container */}
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

    {/* Card Container - Overlapping the BackgroundGrid */}
    <Box
      sx={{
        display:"flex",
        flexDirection:"row",
         gap:2,
        justifyContent:"center", 
        mt: -40, // Negative margin to lift cards up into the BackgroundGrid
        zIndex: 2,
        position: "relative",
        p: 2,
        // flexWrap: "wrap", // Optional for mobile responsiveness
      }}
    >
      {pricingPlans[activeTab].map((plan, index) => (
        <PricingCard key={index} {...plan} />
      ))}
    </Box>
    <BuildSection />
  </>
);
};

export default Pricing;
