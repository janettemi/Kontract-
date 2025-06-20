// components/LayoutClient.tsx
'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';

const HIDDEN_LAYOUT_ROUTES = ['/sign-up', '/login','/sign-up/create-account', 
  '/sign-up/confirm-phone-page','/sign-up/confirm-email-page','/login/verify-code-card'
];

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideLayout = HIDDEN_LAYOUT_ROUTES.includes(pathname);

  return (
    <>
      {!hideLayout && <Navbar />}
      <main>{children}</main>
      {!hideLayout && <Footer />}
    </>
  );
}
