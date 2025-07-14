import './globals.css';
import type { ReactNode } from 'react';
import { ThemeProvider } from '../context/ThemeContext';

export const metadata = {
  title: 'Portfolio',
  description: 'Professional portfolio for photography, videography, modeling, event management, and empowering women.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground min-h-screen transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
} 