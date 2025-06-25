'use client';

import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import Image from 'next/image';

export default function InfoCardSection() {
  const cardData = [
    {
      iconSrc: "/icons/SVG (1).png",
      title: "Verified Contractors",
      description:
        "All contractors on our platform undergo a thorough verification process, including background checks and professional assessments, ensuring you work only with trusted, skilled professionals.",
    },
    {
      iconSrc: "/icons/Vector.png",
      title: "Secure Payments",
      description:
        "We use a reliable escrow payment system that holds funds until the job is completed and approved, protecting both clients and contractors from fraud or disputes.",
    },
    {
      iconSrc: "/icons/SVG.png",
      title: "Quick Turnaround",
      description:
        "With a competitive bidding process and readily available professionals, projects begin promptly and are completed within tight deadlines, helping you meet your goals faster.",
    },
    {
      iconSrc: "/icons/like.png",
      title: "Quality Guaranteed",
      description:
        "Every project is backed by our commitment to excellence. We monitor contractor performance and client satisfaction to ensure every job meets high-quality standards.",
    },
  ];

  const InfoCard = ({
    iconSrc,
    iconAlt = 'icon',
    title,
    description,
  }: {
    iconSrc: string;
    iconAlt?: string;
    title: string;
    description: string;
  }) => {
    return (
      <Card
        sx={{
          width: '100%',
          maxWidth: 500,
          height: '100%',
          mx: 'auto',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: 'none',
          borderRadius: '5px',
        }}
      >
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: 2,
          }}
        >
          <Box
            sx={{
              width: 60,
              height: 60,
              border: '1.5px solid #E9E9E9',
              borderRadius: 2,
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image src={iconSrc} alt={iconAlt} width={24} height={24} style={{ objectFit: 'contain' }} />
          </Box>

          <Typography variant="h6" sx={{ fontWeight: 500, color: '#001C44' }}>
            {title}
          </Typography>

          <Typography
            sx={{
              fontWeight: 400,
              fontSize: 16,
              lineHeight: '24px',
              color: '#2B4263',
              textAlign: 'left',
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    );
  };

  return (
    <Box
    sx={{
    display: 'grid',
    gridTemplateColumns: {
      xs: '1fr',
      sm: '1fr',
      md: 'repeat(2, 1fr)',
      lg: 'repeat(2, 1fr)',
      xl: 'repeat(4, 1fr)',
    },
    gap: {
      xs: 2,  // small gap on small screens  // moderate gap on md
      lg: 4,  // larger gap on lg and above
    },
    px: { xs: 2, sm: 4, md: 8 },
    py: { xs: 4, md: 8 },
    mx: 'auto',
  }}
  >
      {cardData.map((card, i) => (
        <InfoCard
          key={i}
          iconSrc={card.iconSrc}
          title={card.title}
          description={card.description}
        />
      ))}
    </Box>
  );
}
