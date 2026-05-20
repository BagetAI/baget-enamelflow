import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EnamelFlow | Vertical SaaS for Independent Dental Practices',
  description: 'Online booking, automated recalls, and insurance pre-auth tracking for small dental clinics.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&family=Plus+Jakarta+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
