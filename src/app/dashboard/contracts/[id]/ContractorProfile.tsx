'use client';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import { Box, Typography } from '@mui/material';
import BreadcrumbHeader from '@/conponent/BreadcrumbHeader';
import Image from 'next/image';
import { CalendarHeartIcon, LocationEditIcon, StarIcon } from 'lucide-react';
import CustomButton from '@/conponent/CustomButton';
import { useState } from 'react';

export interface ContractorProfileProps {
  contractorId: string;
  onBack: () => void;
}

const ContractorProfile = ({ contractorId, onBack }: ContractorProfileProps) => {
  const [showMore, setShowMore] = useState(false);

  const contractorData = {
    name: 'Abdulhamid Ayo',
    location: 'Oyo, Ibadan. NG',
    joinDate: 'Apr 15, 2025',
    avatarUrl: '/image/image (3).png',
    rating: 4,
    about:
      'This contract defines clear financial terms, including structured payment milestones, a well-defined budget, and specific contract duration to ensure transparency and alignment between both parties. Additional agreement clauses safeguard project timelines and deliverables, promoting successful execution with mutual accountability and understanding.',
    skills: [
      'Construction engineer',
      'Architecture',
      'Interior Design',
      'Civil Works',
      'Site Planning',
      'AutoCAD',
    ],
  };

  const workHistory = [
    {
      title: 'Kitchen Renovation - Modern Upgrade',
      image: '/image/Frame 1171276247.png',
      location: contractorData.location,
      date: contractorData.joinDate,
      rating: 2,
    },
    {
      title: 'Office Remodeling Project',
      image: '/image/Frame 1171276247.png',
      location: contractorData.location,
      date: contractorData.joinDate,
      rating: 3,
    },
    {
      title: 'Living Room Upgrade',
      image: '/image/Frame 1171276247.png',
      location: contractorData.location,
      date: contractorData.joinDate,
      rating: 4,
    },
    {
      title: 'Bathroom Reconstruction',
      image: '/image/Frame 1171276247.png',
      location: contractorData.location,
      date: contractorData.joinDate,
      rating: 5,
    },
  ];

  const truncatedText = contractorData.about.split(' ').slice(0, 20).join(' ') + '...';

  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <BreadcrumbHeader
        items={[
          { label: 'Contracts', onClick: onBack },
          { label: 'Construction of gutter in Ibadan', onClick: onBack },
          { label: 'All bids', onClick: onBack },
          { label: contractorId, isActive: true },
        ]}
      />

      {/* Profile Info */}
      <Box
        sx={{
          maxWidth: '1038px',
          borderRadius: '10px',
          bgcolor: '#F6F6F6',
          p: 2,
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Image
              src={contractorData.avatarUrl}
              alt={`${contractorData.name}'s avatar`}
              width={120}
              height={120}
              style={{ borderRadius: '50%' }}
            />
            <Box>
              <Typography fontWeight={600} fontSize="16px" color="#001C44">
                {contractorData.name}
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                {[...Array(contractorData.rating)].map((_, i) => (
                  <StarIcon key={i} size={18} strokeWidth={1.5} color="#FFB400" />
                ))}
              </Box>

              <Box sx={{ mt: 2, display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                <Typography fontSize="14px" fontWeight={600} color="#001C44" display="flex" alignItems="center" gap={1}>
                  <LocationEditIcon size={16} />
                  {contractorData.location}
                </Typography>
                <Typography fontSize="14px" fontWeight={600} color="#001C44" display="flex" alignItems="center" gap={1}>
                  <CalendarHeartIcon size={16} />
                  Joined: {contractorData.joinDate}
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: { xs: 2, sm: 0 } }}>
            <CustomButton bgColor="#0718B9" textColor="#fff">Message</CustomButton>
          </Box>
        </Box>
      </Box>

      {/* About Section */}
      <Box
        sx={{
          maxWidth: '1078px',
          borderRadius: '10px',
          backgroundColor: '#F2F2F2',
          padding: 3,
        }}
      >
        <Typography fontWeight={600} fontSize="16px" color="#001C44" mb={1}>
          About
        </Typography>
        <Typography color="#556882" fontSize="14px" lineHeight="24px">
          {showMore ? contractorData.about : truncatedText}
          <span
            onClick={() => setShowMore(!showMore)}
            style={{ color: '#0718B9', cursor: 'pointer', marginLeft: 8 }}
          >
            {showMore ? 'Show less' : 'Show more'}
          </span>
        </Typography>

        {/* Skills */}
        <Typography fontWeight={600} fontSize="16px" color="#001C44" mt={5}>
          Skills
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 1 }}>
          {contractorData.skills.map((skill, index) => (
            <Box
              key={index}
              sx={{
                width: 'auto',
                height: '28px',
                borderRadius: '999px',
                border: '1px solid #C0C0C0',
                px: 2,
                py: '2px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Typography fontSize="12px" color="#001C44">
                {skill}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Work History */}
        <Typography fontWeight={600} fontSize="16px" color="#001C44" mt={5}>
          Work History
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            mt: 1,
            overflowX: { xs: 'auto', md: 'unset' },
          }}
        >
          {workHistory.map((work, idx) => (
            <Box
              key={idx}
              sx={{
                width: '250px',
                height: '311px',
                borderRadius: '10px',
                border: '0.5px solid #EEEEEE',
              }}
            >
              <Image src={work.image} alt={work.title} width={250} height={151} style={{borderRadius:"10px"}} />
              <Box p={1}>
                <Typography>{work.title}</Typography>
                <Typography
                  fontSize="12px"
                  fontWeight={500}
                  color="#001C44"
                  display="flex"
                  alignItems="center"
                  gap={1}
                >
                  <LocationEditIcon size={16} />
                  {work.location}
                </Typography>
                <Typography
                  fontSize="14px"
                  fontWeight={600}
                  color="#001C44"
                  display="flex"
                  alignItems="center"
                  gap={1}
                >
                  <CalendarHeartIcon size={16} />
                  Joined: {work.date}
                </Typography>
                <Box sx={{ display: 'flex', gap: 0.5, mt: 1 }}>
                  {[...Array(work.rating)].map((_, i) => (
                    <StarIcon key={i} size={16} color="#FFB400" strokeWidth={1.5} />
                  ))}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ContractorProfile;
