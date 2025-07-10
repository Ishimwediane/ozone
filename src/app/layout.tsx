import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Portfolio',
  description: 'Professional portfolio for photography, videography, modeling, event management, and empowering women.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black min-h-screen">
        {children}
      </body>
    </html>
  );
} 