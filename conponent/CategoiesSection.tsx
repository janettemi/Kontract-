import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

interface TrendingItem {
  img: string;
  title: string;
  text?: string;
  date?: string;
}

interface Props {
  title: string;
  items: TrendingItem[];
}

const CategorySection: React.FC<Props> = ({ title, items }) => (
  <Box sx={{ px: 2, py: 6, maxWidth: 1200, mx: 'auto' }}>
    <Typography fontWeight={600} fontSize="28px" lineHeight="36px" mb={4}>
      {title}
    </Typography>
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
        gap: 5,
      }}
    >
      {items.map((item, idx) => (
        <Box key={idx} sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          <Image
            src={item.img}
            alt={item.title}
            width={382}
            height={236}
            style={{ borderRadius: 15, width: '100%', objectFit: 'cover' }}
          />
          <Typography fontWeight={600} fontSize="18px" lineHeight="24px">
            {item.title}
          </Typography>
          {item.text && (
            <Typography fontSize="14px" color="text.secondary">
              {item.text}
            </Typography>
          )}
          {item.date && (
            <Typography fontSize="13px" color="#888">
              {item.date}
            </Typography>
          )}
        </Box>
      ))}
    </Box>
  </Box>
);

export default CategorySection;
