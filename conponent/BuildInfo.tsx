'use client';

import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import CustomButton from './CustomButton';
import Image from 'next/image';

const Dot = styled('div')({
  width: '7.08px',
  height: '7.08px',
  backgroundColor: '#D0D5DD',
  borderRadius: '50%',
});

const DotGrid = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '20px',
  left: '20px',
  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)',
  gap: '20px',

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const Container = styled(Box)(({ theme }) => ({
  position: 'relative',
  backgroundColor: '#F6F6F6',
  borderRadius: '16px',
  
  [theme.breakpoints.up('md')]: {
    maxWidth: '1440px',
    height: '500px',
  },

  [theme.breakpoints.down('md')]: {
    padding: '32px 16px',
    height: 'auto',
  },
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
  gap: '67px', // ← updated based on your request
  width: '1163px', // ← fixed width
  height: '360px', // ← fixed height
  marginTop: '70px', // ← top offset
  marginLeft: '155px', // ← left offset

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column-reverse',
    textAlign: 'center',
    width: '100%',
    height: 'auto',
    marginLeft: 0,
    marginTop: '40px',
    gap: '32px',
  },
}));


export default function BuildSection() {
  return (
    <Container>
      {/* Dot Grid */}
      <DotGrid>
        {Array.from({ length: 18 }).map((_, idx) => (
          <Dot key={idx} />
        ))}
      </DotGrid>

      {/* Main Content */}
      <ContentWrapper>
        {/* Text Section */}
        <Box flex={1} zIndex={1}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '28px', sm: '36px', md: '44px' },
              fontWeight: 600,
              lineHeight: { xs: '36px', sm: '44px', md: '52.51px' },
              color: '#001C44',
              fontFamily: 'BR Firma',
              mb: 2,
            }}
          >
            Build Contracts. Build Trust. Build the Future.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '14px', sm: '15px', md: '16px' },
              fontWeight: 400,
              lineHeight: '24px',
              color: '#2B4263',
              fontFamily: 'BR Firma',
              mb: 4,
            }}
          >
            Whether you're hiring top talent or landing your next big project — manage contracts,
            communication, and deliverables all in one powerful platform.
          </Typography>

          {/* Buttons */}
          <Box
            sx={{
              display: 'flex',
              gap: '20px',
              flexWrap: 'wrap',
              justifyContent: { xs: 'center', md: 'flex-start' },
              '@media (max-width: 600px)': {
                flexDirection: 'column',
                gap: '12px',
              },
            }}
          >
            <CustomButton rounded bgColor="#0718B9" textColor="#fff">
              Find Talent
            </CustomButton>
            <CustomButton
              rounded
              variant="outlined"
              textColor="#0718B9"
              borderColor="#0718B9"
            >
              Browse Jobs
            </CustomButton>
          </Box>
        </Box>

        {/* Image Section */}
        <Box flex={1} zIndex={1} display="flex" justifyContent="center">
          <Box sx={{ width: { xs: '100%', sm: '80%', md: '270px' } }}>
            <Image
              src="/image/Frame 2147207718 (2).png"
              alt="group"
              width={270}
              height={287}
              style={{ width: '100%', height: 'auto' }}
            />
          </Box>
        </Box>
      </ContentWrapper>
    </Container>
  );
}
