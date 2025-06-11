import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import Image from 'next/image';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const footerLinks = {
  clients: ['How It Works', 'Pricing', 'Find contractors', 'Success Stories'],
  contractors: ['Join as Contractor', 'Resources', 'Fee Structure', 'FAQ'],
  company: ['About Us', 'Contact', 'Join Our Team', 'News', 'Privacy Policy', 'Terms of Service'],
};

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#000917',
        color: '#fff',
        pt: 6,
        pb: 4,
        px: { xs: 3, md: 10 },
      }}
    >
      {/* Main Footer Content */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          flexWrap: 'wrap',
          gap: { xs: 4, md: 10 },
          justifyContent: 'space-between',
        }}
      >
        {/* Logo and Description */}
        <Box sx={{ maxWidth: 300 }}>
          <Box sx={{ mb: 3 }}>
            <Image src="/image/kontractlogo.png" alt="Company Logo" width={150} height={50} />
          </Box>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: { xs: '12px', sm: '13px', md: '15px' },
              lineHeight: '26px',
              mb: 2,
            }}
          >
            The trusted platform connecting businesses with skilled contractors for seamless
            project execution.
          </Typography>

          {/* Social Icons */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Link href="https://facebook.com" target="_blank" rel="noopener" color="inherit">
              <FacebookIcon fontSize="small" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener" color="inherit">
              <LinkedInIcon fontSize="small" />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener" color="inherit">
              <InstagramIcon fontSize="small" />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener" color="inherit">
              <TwitterIcon fontSize="small" />
            </Link>
          </Box>
        </Box>

        {/* Footer Columns */}
        {[['For Clients', footerLinks.clients], ['For Contractors', footerLinks.contractors], ['Company', footerLinks.company]].map(
          ([title, links], index) => (
            <Box key={index} sx={{ minWidth: 150 }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, fontSize: { xs: 14, md: 16 } }}>
                {title}
              </Typography>
              {(links as string[]).map((text) => (
                <Link
                  key={text}
                  href="#"
                  underline="hover"
                  sx={{
                    display: 'block',
                    mb: 2,
                    color: 'inherit',
                    fontSize: { xs: 12, sm: 13, md: 14 },
                    cursor: 'pointer',
                  }}
                >
                  {text}
                </Link>
              ))}
            </Box>
          )
        )}
      </Box>

      {/* KONTRACT Watermark */}
      <Box
        sx={{
          height: { xs: 180, sm: 280, md: 360 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: 0.15,
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Arial',
            fontWeight: 700,
            fontSize: { xs: '70px', sm: '150px', md: '220px' },
            lineHeight: '1',
            letterSpacing: '-0.64px',
            color: 'transparent',
            WebkitTextStroke: '2px #AAB3C1',
            textAlign: 'center',
            userSelect: 'none',
          }}
        >
          KONTRACT
        </Typography>
      </Box>

      {/* Footer Bottom */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          mt: 4,
          gap: 2,
        }}
      >
        <Box sx={{ display: 'flex', gap: 3 }}>
          <Typography sx={{ fontSize: 12 }}>Privacy Policy</Typography>
          <Typography sx={{ fontSize: 12 }}>Terms & Conditions</Typography>
        </Box>
        <Typography variant="caption" sx={{ fontSize: 12, textAlign: 'center' }}>
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
