import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { DashboardLayout } from '@/components/layout/dashboard-layout';

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Production Analytics Dashboard',
  description: 'Premium SaaS Analytics Dashboard for Orders and Customers',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${outfit.variable} font-sans antialiased h-full`}
      >
        <DashboardLayout>{children}</DashboardLayout>
      </body>
    </html>
  );
}
