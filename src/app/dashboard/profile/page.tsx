'use client';
//import { ChevronLeft, ChevronRight } from 'lucide-react';
//import { useRef } from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { CalendarHeartIcon, LocationEditIcon, StarIcon } from 'lucide-react';
import CustomButton from '@/conponent/CustomButton';
import { useState } from 'react';
import EditIcon from "@mui/icons-material/Edit";

const ProfilePage = () => {
  const [showMore, setShowMore] = useState(false);

  const contractorData = {
    name: 'Abdulhamid Ayo',
    location: 'Oyo, Ibadan. NG',
    joinDate: 'Apr 15, 2023',
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
            <CustomButton   variant="outlined" bgColor="#0718B9" textColor="#0718B9">See public view</CustomButton>
            <CustomButton bgColor="#0718B9" textColor="#fff">Edit profile</CustomButton>
          </Box>
        </Box>
      </Box>

      {/* About Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: 2,
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
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
        </Box>
        <Box
          sx={{
            width: 30,
            height: 30,
            backgroundColor: '#0718B9',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            ml: 2,
          }}
        >
          <EditIcon sx={{ fontSize: 16, color: '#fff' }} />
        </Box>
      </Box>

      <hr color="#E0E0E0" style={{ margin: 0, marginBottom: 16 }} />
        <Box>
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

        <hr color="#E0E0E0" style={{ margin: 0, marginBottom: 16 }} />
        {/* More About Section */}
        <Typography fontWeight={600} fontSize="16px" color="#001C44" mt={5} mb={1}>
          More
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2, justifyContent:"space-between"}}>
          {/* Stats Row */}
          <Box sx={{ display: 'flex', gap: 3, overflowX: 'auto', flex: 1  }}>
            {/* Example stats, replace with real data as needed */}
            <Box sx={{ minWidth: 120, p: 2, textAlign: 'center' }}>
              <Typography fontSize="18px"fontWeight={600}  color="#001C44">Total Contracts</Typography>
              <Typography fontSize="13px">12</Typography>
            </Box>
            <Box sx={{ minWidth: 120, p: 2,   textAlign: 'center' }}>
              <Typography fontSize="18px" fontWeight={600} color="#001C44">Total Services</Typography>
              <Typography  fontSize="13px" >8</Typography>
            </Box>
            <Box sx={{ minWidth: 120, p: 2,  textAlign: 'center' }}>
               <Typography fontSize="18px" fontWeight={600} color="#001C44">Active Bids</Typography>
              <Typography fontSize="13px" >3</Typography>
            </Box>
            <Box sx={{ minWidth: 120, p: 2,  textAlign: 'center' }}>
              <Typography fontSize="18px" fontWeight={600} color="#001C44">Ongoing Contracts</Typography>
              <Typography  fontSize="13px">2</Typography>
            </Box>
            {/* Add more stats as needed */}
          </Box>
          {/* Right Arrow */}
          <Box sx={{ cursor: 'pointer', p: 0.5, borderRadius: '50%', '&:hover': { bgcolor: '#F0F0F0' } }}>
            <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 5l7 7-7 7" stroke="#0718B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Box>
        </Box>
 
       <hr color='#F2F2F2'/>

        {/* Work History */}
        <Typography fontWeight={600} fontSize="16px" color="#001C44" mt={5}>
          Work History
        </Typography>
        <Box
        sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            justifyContent: { xs: 'center', sm: 'flex-start' },
            mt: 1,
        }}
        >
        {workHistory.map((work, idx) => (
            <Box
            key={idx}
            sx={{
                width: { xs: '100%', sm: '47%', md: '250px' },
                height: 'auto',
                borderRadius: '10px',
                border: '0.5px solid #EEEEEE',
                overflow: 'hidden',
            }}
            >
             <Image
                src={work.image}
                alt={work.title}
                width={250}
                height={151}
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
              <Box p={1}>
                <Typography fontWeight={600}>{work.title}</Typography>
                <Typography fontSize="12px" fontWeight={500} display="flex" alignItems="center" gap={1}>
                <LocationEditIcon size={16} />
                {work.location}
                </Typography>
                <Typography fontSize="14px" fontWeight={600} display="flex" alignItems="center" gap={1}>
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

export default ProfilePage;