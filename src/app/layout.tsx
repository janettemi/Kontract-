// app/layout.tsx
import LayoutClient from '@/conponent/LayoutClient';

export const metadata = {
  title: 'Kontract',
  description: 'Kontract app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        style={{
          paddingTop: '88px',
          // Responsive padding for Navbar height
          // 64px for mobile, 88px for desktop
          position: 'relative',
          minHeight: '100vh',
        }}
      >
        {/* KONTRACT Watermark */}
        <div
          style={{
            position: 'fixed',
            left: 0,
            right: 0,
            top: 0,
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0.08,
            zIndex: 0,
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          <span
            style={{
              fontFamily: 'Arial',
              fontWeight: 700,
              fontSize: '14vw',
              lineHeight: '1',
              letterSpacing: '-0.64px',
              color: 'transparent',
              WebkitTextStroke: '2px #AAB3C1',
              textAlign: 'center',
              userSelect: 'none',
              whiteSpace: 'nowrap',
              display: 'block',
            }}
          >
            KONTRACT
          </span>
        </div>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
