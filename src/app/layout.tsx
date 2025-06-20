// app/layout.tsx
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
