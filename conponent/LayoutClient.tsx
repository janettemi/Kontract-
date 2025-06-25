'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';

// List of paths where Navbar/Footer should be hidden
const HIDDEN_LAYOUT_PATHS = [
  '/login',
  '/sign-up',
  '/sign-up/create-account',
  '/sign-up/confirm-phone-page',
  '/sign-up/confirm-email-page',
  '/login/verify-code-card',
  '/dashboard',
];

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Hide layout if current path matches any OR starts with `/dashboard`
  const hideLayout = HIDDEN_LAYOUT_PATHS.some((path) =>
    pathname === path || pathname.startsWith('/dashboard')
  );

  return (
    <>
      {!hideLayout && <Navbar />}
      <main>{children}</main>
      {!hideLayout && <Footer />}
    </>
  );
}
