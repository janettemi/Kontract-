//import './globals.css';
import Footer from '@/conponent/Footer';
import Navbar from '@/conponent/Navbar';

export const metadata = {
  title: 'Kontract',
  description: 'Responsive MUI Navbar',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main style={{ paddingTop: '88px' }}>
          {children}</main>
          <Footer />
      </body>
    </html>
  );
}
