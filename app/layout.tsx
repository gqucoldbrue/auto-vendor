// app/layout.tsx
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import Layout from '@/components/Layout/Layout';
import './globals.css';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Auto Vendor',
  description: 'Luxury Automotive Auction Platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}