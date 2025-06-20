'use client';

import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import CategorySection from '@/conponent/CategoiesSection';
import Link from 'next/link';

const CATEGORIES = ['All', 'Food', 'Job Search', 'Plants', 'Life Work'];

const FOOD_ITEMS = [
  {
    img: '/image/Frame 2147207672.png',
    title: `Level Up by Building Your Personal Brand in 2023`,
    text: 'When it comes to climbing the corporate ladder, you’ve likely heard it all before… maybe it’s “work…',
    date: 'January 30, 2025',
    category: 'Food',
  },
  {
    img: '/image/Frame 2147207672 (1).png',
    title: `Level Up by Building Your Personal Brand in 2023`,
    text: 'When it comes to climbing the corporate ladder,you’ve likely heard it all before… maybe it’s “work…',
    date: 'February 10, 2025',
    category: 'Food',
  },
  {
    img: '/image/Frame 2147207672 (2).png',
    title: `Level Up by Building Your Personal Brand in 2023`,
    text: 'When it comes to climbing the corporate ladder,you’ve likely heard it all before… maybe it’s “work…',
    date: 'March 5, 2025',
    category: 'Food',
  },
];
const CONTRACTORS_ITEMS = [
{
    img: '/image/Frame 2147207672 (3).png',
    title: `Level Up by Building Your Personal Brand in 2023`,
    text: 'When it comes to climbing the corporate ladder, you’ve likely heard it all before… maybe it’s “work…',
    date: 'January 30, 2025',
    category: 'Contractors',
  },
  {
    img: '/image/Frame 2147207672 (4).png',
    title: `Level Up by Building Your Personal Brand in 2023`,
    text: 'When it comes to climbing the corporate ladder,you’ve likely heard it all before… maybe it’s “work…',
    date: 'February 10, 2025',
    category: 'Contractors',
  },
  {
    img: '/image/Frame 2147207672 (5).png',
    title: `Level Up by Building Your Personal Brand in 2023`,
    text: 'When it comes to climbing the corporate ladder,you’ve likely heard it all before… maybe it’s “work…',
    date: 'March 5, 2025',
    category: 'Contractors',
  },
];
const RESTAURANTS_ITEMS = [
  {
    img: '/image/Frame 2147207672 (6).png',
    title: `Level Up by Building Your Personal Brand in 2023`,
    text: 'When it comes to climbing the corporate ladder, you’ve likely heard it all before… maybe it’s “work…',
    date: 'January 30, 2025',
    category: 'Contractors',
  },
  {
    img: '/image/Frame 2147207672 (7).png',
    title: `Level Up by Building Your Personal Brand in 2023`,
    text: 'When it comes to climbing the corporate ladder,you’ve likely heard it all before… maybe it’s “work…',
    date: 'February 10, 2025',
    category: 'Contractors',
  },
  {
    img: '/image/Frame 2147207672 (8).png',
    title: `Level Up by Building Your Personal Brand in 2023`,
    text: 'When it comes to climbing the corporate ladder,you’ve likely heard it all before… maybe it’s “work…',
    date: 'March 5, 2025',
    category: 'Contractors',
  },
];
const TRENDING_ITEMS = [
    {
    img: '/image/Frame 2147207660 (1).png',
    title: `6 Overlooked Strategies\nThat Will Supercharge\nYour WFH Productivity`,
    category: 'Plants',
  },
  {
    img: '/image/Frame 2147207660 (2).png',
    title: `How To Strive at Salary Negotiation (+ a Free Template)`,
    category: 'Food',
  },
  {
    img: '/image/Frame 2147207660 (3).png',
    title: `Why Is Rage Applying All the Rage?`,
    category: 'Life Work',
  },
];

 export const ArticleCard = ({
  img,
  title,
  category,
}: {
  img: string;
  title: string;
  category: string;
}) => (
  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, mt: 6 }}>
    <Box
      component="img"
      src={img}
      alt={category}
      sx={{ width: { xs: '100%', md: 248 }, height: 159, borderRadius: 2, objectFit: 'cover' }}
    />
    <Box>
      <Typography fontSize={14} fontWeight="bold" whiteSpace="pre-line">{title}</Typography>
      <Button variant="outlined" sx={{ mt: 1, fontSize: 14,  border: '1px solid #E5E5E5', color:"black" ,borderRadius: '10px'  }}>{category}</Button>
    </Box>
  </Box>
);

const News = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {/* Header & Filter */}
      <Box sx={{ bgcolor: '#FAFAFA', px: 2, py: { xs: 4, md: 8 }, textAlign: 'center' }}>
        <Box sx={{ maxWidth: 570, mx: 'auto', display: 'flex', flexDirection: 'column', gap: 5 }}>
          <Typography fontWeight={700} fontSize={{ xs: 32, sm: 40, md: 60 }}>
            Latest Insights & Updates
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 1.5 }}>
            <TextField
              placeholder="Enter email for updates..."
              variant="outlined"
              fullWidth
              sx={{
                width: { xs: '100%', sm: 308 },
                '& .MuiOutlinedInput-root': {
                  height: 38,
                  borderRadius: 2,
                },
              }}
              inputProps={{ style: { padding: '8px 12px' } }}
            />
            <Button sx={{
                height: 38,
                px: 3,
                fontSize: 14,
                color: '#0718B9',
                borderRadius: '10px',
                border: '1px solid #0718B9',
                whiteSpace: 'nowrap',
              }}>
              Subscribe
            </Button>
          </Box>
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              flexWrap: { xs: 'nowrap', sm: 'wrap' },
              overflowX: { xs: 'auto', sm: 'visible' },
              pb: 1,
              width: '100%',
              // Optional: improve mobile scroll appearance
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none', // Firefox
              '&::-webkit-scrollbar': { display: 'none' }, // Chrome
            }}
          >
            {CATEGORIES.map((category) => (
              <Button
            key={category}
            onClick={() => setActiveCategory(category)}
            sx={{
              px: { xs: 2, sm: 2.5, md: 3 },       // reduced padding for md
              py: { xs: 1, sm: 1, md: 1.2 },       // slimmer vertical padding
              fontSize: { xs: 12, sm: 13, md: 14 }, // slightly smaller font
              borderRadius: '10px',
              textTransform: 'none',
              fontWeight: 500,
              color: activeCategory === category ? '#fff' : '#000',
              border: '1px solid',
              borderColor: activeCategory === category ? '#0718B9' : '#ccc',
              backgroundColor: activeCategory === category ? '#0718B9' : 'transparent',
              whiteSpace: 'nowrap',
              flexShrink: 0,
              '&:hover': {
                backgroundColor: activeCategory === category ? '#0718B9' : '#f0f0f0',
              },
            }}
          >
            {category}
          </Button>
            ))}
          </Box>
        </Box>
      </Box>
      {/* Article Sections */}


      {activeCategory === 'All' && (
        <>
          <Box sx={{ px: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', px: 2 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 4,
                bgcolor: '#FAFAFA',
                py: 6,
                px: 2,
                width: '100%',
                maxWidth: 1200,
              }}
            >
              {/* Featured Article */}
              <Box sx={{ flex: 2 }}>
                <Typography fontWeight={600} fontSize={28} mb="5px" fontFamily="BR Firma">
                  Trending Reads
                </Typography>

                <Image
                  src="/image/Frame 2147207660.png"
                  alt="Featured"
                  width={620}
                  height={300}
                  style={{ borderRadius: 10, width: '100%', height: 'auto' }}
                />

                <Typography fontWeight="bold" fontSize={20}>
                  Unlocking Hidden Job Markets in 2025
                </Typography>

                <Link href="/news/job-search" passHref>
                <Button
                  variant="outlined"
                  sx={{
                    mt: 1,
                    textTransform: 'none',
                    fontSize: 14,
                    borderRadius: '10px',
                    px: 4,
                     border: '1px solid #E5E5E5',
                    color: '#000917',
                  }}
                >
                  Job Search
                </Button>
                </Link>
              </Box>
              

              {/* Other Articles */}
              <Box sx={{ display: 'flex', flexDirection: 'column', width: { xs: '100%', md: 400 } }}>
                {TRENDING_ITEMS.map((item, index) => (
                  <ArticleCard key={index} {...item} />
                ))}
              </Box>
            </Box>
          </Box>
          </Box>
          <CategorySection title="Food" items={FOOD_ITEMS} />
          <CategorySection title="Restaurants" items={RESTAURANTS_ITEMS} />
          <CategorySection title="Contractors" items={CONTRACTORS_ITEMS} />
        </>
      )}
      <Box
        sx={{
          bgcolor: '#F6F6F6',
          height: '298px',
          display: 'flex',              // ✅ make it a flex container
          justifyContent: 'center',     // ✅ center horizontally
          alignItems: 'center',         // ✅ center vertically
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            width: '100%',
            px: 2, // optional padding for responsiveness on mobile
          }}
        >
          <Typography fontWeight={600} fontSize={40}>
            Get notified with new posts
          </Typography>
          <Typography fontSize={16} color="text.secondary">
            Get notified whenever a new article drops.
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 1.5,
              alignItems: 'center',
              width: '100%',
              maxWidth: 500, // optional max-width
            }}
          >
            <TextField
              placeholder="Enter email for updates..."
              variant="outlined"
              fullWidth
              sx={{
                width: { xs: '100%', sm: 308 },
                '& .MuiOutlinedInput-root': {
                  height: 38,
                  borderRadius: 2,
                },
              }}
              inputProps={{ style: { padding: '8px 12px' } }}
            />
            <Button
              sx={{
                height: 38,
                px: 3,
                fontSize: 14,
                color: '#0718B9',
                borderRadius: '10px',
                border: '1px solid #0718B9',
                whiteSpace: 'nowrap',
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Box>
      </Box>

    </Box>
  );
};

export default News;
