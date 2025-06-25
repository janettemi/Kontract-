
//import './globals.css';
import LayoutClient from '@/conponent/LayoutClient';

export const metadata = {
  title: 'Kontract',
  description: 'Responsive MUI Navbar',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ paddingTop: '88px' }}>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}



 {/* KONTRACT Watermark */}
      // <Box
      //   sx={{
      //     height: { xs: 180, sm: 280, md: 360 },
      //     display: 'flex',
      //     alignItems: 'center',
      //     justifyContent: 'center',
      //     opacity: 0.15,
      //   }}
      // >
      //   <Typography
      //     sx={{
      //       fontFamily: 'Arial',
      //       fontWeight: 700,
      //       fontSize: { xs: '70px', sm: '150px', md: '220px' },
      //       lineHeight: '1',
      //       letterSpacing: '-0.64px',
      //       color: 'transparent',
      //       WebkitTextStroke: '2px #AAB3C1',
      //       textAlign: 'center',
      //       userSelect: 'none',
      //     }}
      //   >
      //     KONTRACT
      //   </Typography>
      // </Box>
