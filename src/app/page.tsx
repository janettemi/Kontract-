'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import {
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CustomButton from '@/conponent/CustomButton';
import Card from '@/conponent/Card';
import JobCard from '@/conponent/JobCard';
import StepBadge from '@/conponent/StepBadge';
import InfoCard from '@/conponent/InfoCard';
import SatisfactionBox from '@/conponent/SatisfactionBox';
import BuildSection from '@/conponent/BuildInfo';
import BackgroundGrid from '@/conponent/BackgroundGrid';


export default function Home() {
const [canScrollLeft, setCanScrollLeft] = useState(false);
const [canScrollRight, setCanScrollRight] = useState(true);
 const router = useRouter();
const checkScrollPosition = () => {
  const scrollElement = scrollRef.current;
  if (!scrollElement) return;

  const { scrollLeft, scrollWidth, clientWidth } = scrollElement;
  setCanScrollLeft(scrollLeft > 0);
  setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
};

useEffect(() => {
  const element = scrollRef.current;
  if (!element) return;
  checkScrollPosition();
  element.addEventListener('scroll', checkScrollPosition);
  return () => element.removeEventListener('scroll', checkScrollPosition);
}, []);

  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const scrollRef = useRef<HTMLDivElement>(null);
  const images = ['/image/used1.png', '/image/used2.png', '/image/used3.png', '/image/used3.png'];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  const jobs = [
  {
    postedTime: "Posted 5 minutes ago",
    title: "Website Redesign",
    jobTitle: "Web Development",
    description: "Redesign React-based e-commerce platform.",
    priceRange: "$500 - $1000",
    rating: 4,
    location: "Lagos, Nigeria",
    dueDate: "June 15, 2025",
    bids: 12,
    showPromotedButton: true,
    showContactButton: true,
  },
  {
    postedTime: "Posted 1 hour ago",
    title: "Mobile App UI Fixes",
    jobTitle: "UI/UX Design",
    description: "Fix spacing in our React Native app.",
    priceRange: "$200 - $400",
    rating: 5,
    location: "Abuja, Nigeria",
    dueDate: "June 20, 2025",
    bids: 8,
    showPromotedButton: true,
    showContactButton: true,
  },
  {
    postedTime: "Posted yesterday",
    title: "Build Admin Dashboard",
    jobTitle: "Frontend Development",
    description: "Build dashboard using Next.js & Tailwind.",
    priceRange: "$800 - $1200",
    rating: 4.5,
    location: "PH, Nigeria",
    dueDate: "June 25, 2025",
    bids: 15,
    
  },
];


  return (
    <>
      {/* Hero Section */}
      <BackgroundGrid>
        <Box 
         sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          mx: 'auto',
          minHeight: '100vh',
          gap: 4,
          flexDirection: {
            xs: 'column',
            md: 'row',
          },
          px: { xs: 2, md: 0 },
          py: { xs: 4, md: 0 },
        }}
        >
        {/* Left Card Stack (desktop only) */}
        <Box
          sx={{
            position: 'relative',
            width: { xs: '100%', md: 380 },
            height: { xs: 300, md: 350 },
            mb: { xs: 6, md: 0 },
            mx: { xs: 'auto', md: 'initial' },
            display: { xs: 'none', md: 'block' },
          }}
        >
          <Box sx={{ position: 'absolute', top: 0, left: 0 }}>
            <Card
              imageSrc="/image/image.png"
              text="Startup Founder"
              title="Found the perfect web developer in 2 days!"
              content="Lagos, Nigeria"
              angle={-3.99}
            />
          </Box>
          <Box sx={{ position: 'absolute', top: 115, left: 125 }}>
            <Card
              imageSrc="/image/image (1).png"
              text="Construction Manager"
              title="Found quality contractors faster than ever before"
              content="Lagos, Nigeria"
              angle={5}
            />
          </Box>
          <Box sx={{ position: 'absolute', top: 225, left: 40 }}>
            <Card
              imageSrc="/image/image (2).png"
              text="E-commerce Owner"
              title="As a first-time client, the process was seamless."
              content="Lagos, Nigeria"
              angle={12}
            />
          </Box>
        </Box>

        {/* Center Text Content */}
        <Box
          sx={{
            flex: 1,
            width: { xs: '100%', md: 'auto' },
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: { xs: 6, md: 0 },
          }}
        >
          <Box
            sx={{
              width: { xs: '100%', sm: 480, md: 604 },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '20px',
              px: { xs: 2, md: 0 },
            }}
          >
            <Box
              sx={{
                width: { xs: '100%', sm: 360, md: 391 },
                height: 50,
                backgroundColor: '#FAFAFA',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                padding: '6px 12px',
                gap: '12px',
                justifyContent: 'center',
                overflow: 'hidden',
              }}
            >
              <Box sx={{ display: 'flex', gap: '4px' }}>
                {images.map((src, idx) => (
                  <Image
                    key={idx}
                    src={src}
                    alt={`Avatar ${idx + 1}`}
                    width={24}
                    height={24}
                    style={{
                      borderRadius: '9999px',
                      objectFit: 'cover',
                      marginLeft: idx !== 0 ? '-10px' : '0',
                      border: '2px solid #FAFAFA',
                    }}
                  />
                ))}
              </Box>
              <span
                style={{
                  fontSize: '14px',
                  fontWeight: 400,
                  lineHeight: '20px',
                  textAlign: 'center',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                Trusted by thousands of users worldwide
              </span>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontWeight: 600,
                fontSize: { xs: '28px', sm: '36px', md: '42px' },
                lineHeight: { xs: '38px', sm: '46px', md: '55px' },
                textAlign: 'center',
                color: '#001C44',
              }}
            >
              Connect with trusted contractors for your projects
            </Typography>

            <Typography
              component="span"
              sx={{
                fontWeight: 400,
                fontSize: { xs: '14px', md: '16px' },
                lineHeight: { xs: '20px', md: '25px' },
                textAlign: 'center',
                color: '#2B4263',
                maxWidth: '520px',
              }}
            >
              Kontract is a secure marketplace connecting businesses with skilled contractors
              for seamless project execution.
            </Typography>

             <Box sx={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <CustomButton rounded bgColor="#0718B9" textColor="#fff">
                Find Talent
              </CustomButton>
              <CustomButton
                rounded
                variant="outlined"
                textColor="#0718B9"
                borderColor="#0718B9"
                 onClick={() => router.push('/browse-job')}
              >
                Browse Jobs
              </CustomButton>
            </Box>
          </Box>
        </Box>

        {/* Right Card Stack */}
        <Box
          sx={{
            position: 'relative',
            width: { xs: '100%', md: 380 },
            height: { xs: 300, md: 350 },
            mb: { xs: 6, md: 0 },
            mx: { xs: 'auto', md: 'initial' },
            display: { xs: 'none', md: 'block' },
          }}
        >
          <Box sx={{ position: 'absolute', top: 0, left:120 }}>
            <Card
              imageSrc="/image/image (2).png"
              text="General Contractor"
              title="Simplified finding reliable subcontractors"
              content="Lagos, Nigeria"
              angle={10}
            />
          </Box>
          <Box sx={{ position: 'absolute', top: 130, left: 100 }}>
            <Card
              imageSrc="/image/image (2).png"
              text="Project Manager"
              title="Seamlessly manage multiple projects"
              content="Abuja, Nigeria"
              angle={-6}
            />
          </Box>
          <Box sx={{ position: 'absolute', top: 260, left: 120 }}>
            <Card
              imageSrc="/image/image (2).png"
              text="Electrical Engineer"
              title="Access to verified electrical experts"
              content="PH, Nigeria"
              angle={12}
            />
          </Box>
        </Box>
        </Box>
         </BackgroundGrid>

      {/* Contracts and Services Section */}
      <Box sx={{ mt: '20px', px: { xs: 2, md: 4 }, py: 5, display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {/* Header */}
       <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: { xs: 'column', sm: 'column', md: 'row' },
              gap: { xs: '24px', sm: '24px', md: '16px' },
              textAlign: { xs: 'center', md: 'left' },
              width: '100%',
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: '28px', sm: '32px', md: '40px' },
                  lineHeight: { xs: '36px', sm: '42px', md: '50px' },
                  color: '#001C44',
                }}
              >
                Contracts and Services
              </Typography>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: { xs: '14px', sm: '15px', md: '16px' },
                  lineHeight: { xs: '22px', sm: '24px', md: '25px' },
                  color: '#2B4263',
                }}
              >
                Discover the latest opportunities
              </Typography>
            </Box>

            <CustomButton
              variant="outlined"
              textColor="#0718B9"
              borderColor="#0718B9"
              sx={{
                fontSize: { xs: '12px', sm: '13px', md: '14px' }, // smaller font on mobile
                textTransform: 'none', // prevent uppercase
                width: { xs: '100%', sm: 'auto' },
                alignSelf: { xs: 'center', md: 'flex-start' },
                justifyContent: 'center',
              }}
            >
              View all
            </CustomButton>
          </Box>

        {/* Scrollable Job Cards */}
        <Box sx={{ position: 'relative' }}>
          <Box sx={{ position: 'relative' }}>
            <Box
              ref={scrollRef}
              sx={{
                overflowX: 'auto',
                display: 'flex',
                gap: 2,
                scrollBehavior: 'smooth',
                "&::-webkit-scrollbar": { display: 'none' },
                pb: 2,
              }}
            >
              {jobs.map((job, index) => (
                <Box
                  key={index}
                  sx={{
                    flexShrink: 0,
                    width: {
                      xs: '100%',
                      sm: 'calc(100% / 1.1)',
                      md: 'calc(100% / 2.5)',
                    },
                  }}
                >
                  <JobCard {...job} />
                </Box>
              ))}
            </Box>
          </Box>
         {isLargeScreen && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                gap: 8,
                mt: 1,
              }}
            >
              <IconButton
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              sx={{
                border: `2px solid ${canScrollLeft ? '#0718B9' : '#E5E5E5'}`,
                color: canScrollLeft ? '#0718B9' : '#E5E5E5',
                width: 40,
                height: 40,
                borderRadius: '50%',
                backgroundColor: 'transparent',
                cursor: canScrollLeft ? 'pointer' : 'default',
                '&:hover': {
                  backgroundColor: canScrollLeft ? 'rgba(7, 24, 185, 0.05)' : 'transparent',
                },
              }}
            >
              <ChevronLeftIcon />
            </IconButton>

            <IconButton
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              sx={{
                border: `2px solid ${canScrollRight ? '#0718B9' : '#E5E5E5'}`,
                color: canScrollRight ? '#0718B9' : '#E5E5E5',
                width: 40,
                height: 40,
                borderRadius: '50%',
                backgroundColor: 'transparent',
                cursor: canScrollRight ? 'pointer' : 'default',
                '&:hover': {
                  backgroundColor: canScrollRight ? 'rgba(7, 24, 185, 0.05)' : 'transparent',
                },
              }}
            >
              <ChevronRightIcon />
            </IconButton>
          </Box>
          )}
          </Box>
         <Box sx={{ minHeight: { xs: 'auto', md: '700px' }, mx: 'auto', py: { xs: 4, md: 8 } }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: { xs: 4, md: '40px' },
            px: { xs: 2, md: 6 },
          }}
        >
          {/* Text and StepBadge */}
          <Box
            sx={{
              flex: 1,
              maxWidth: { md: '50%' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
              gap: 4,
            }}
          >
            <Box>
                <Typography
                  sx={{
                    color: '#001C44',
                    fontWeight: 600,
                    fontSize: { xs: '32px', md: '50px' },
                    lineHeight: { xs: '42px', md: '65px' },
                    letterSpacing: '-0.64px',
                    mb: { xs: 3, md: 4 },
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  How Kontract Works
                </Typography>
              </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    flexGrow: 1,
                    height: { md: 450 },
                  }}>
               <StepBadge
                steps={[
                  { title: 'Create an account', text: 'Register as a client or contractor and complete your professional profile.' },
                  { title: 'Post or Bid on contracts', text: 'Clients post detailed contracts while contractors submit competitive bids.' },
                  { title: 'Secure payments', text: 'Our escrow system ensures secure transactions and project delivery.' },
                ]}
              />
            </Box>

            <CustomButton style={{ width: 150 }} bgColor="#0718B9" textColor="#fff">
              Sign up now
            </CustomButton>
          </Box>

          {/* Image */}
          <Box
            sx={{
              width: { xs: '100%', sm: 400, md: 470 },
              height: { xs: 300, sm: 400, md: 648 },
              borderRadius: '10px',
              overflow: 'hidden',
              flexShrink: 0,
            }}
          >
            <Image
              src="/image/Avater.png"
              alt="avatar"
              width={470}
              height={648}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Box>
        </Box>
      </Box>
     </Box>
      <Box sx={{ bgcolor: '#FAFAFA', display:"flex", flexDirection:"column",gap:5, minHeight: '100vh', px: { xs: 2, sm: 4 }, py: { xs: 6, md: 10 } }}>
          <Box
            sx={{
              maxWidth: 600,
              margin: '0 auto',
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 600,
                fontSize: { xs: '28px', sm: '36px', md: '42px' },
                lineHeight: { xs: '38px', sm: '46px', md: '55px' },
                color: '#001C44',
                mb: 3,
              }}
            >
              Why Choose Us?
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: { xs: '16px', sm: '18px', md: '20px' },
                lineHeight: { xs: '24px', sm: '28px', md: '30px' },
                color: '#2B4263',
                maxWidth: { xs: 500, md: 600 }, // narrower on md to force line break
                mx: 'auto',
                whiteSpace: 'normal',
                wordBreak: 'break-word',
              }}
            >
              Whether you're hiring or getting hired, Kontract connects the right people with the right opportunities—quickly and seamlessly.
            </Typography>
          </Box>
          <Box>
            <InfoCard />
          </Box>
        </Box>
        <Box>
          <SatisfactionBox />
        </Box>
          <BuildSection />
    </>
  );
}
