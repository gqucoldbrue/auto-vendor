// components/Layout/Layout.tsx
"use client";
import React from 'react';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 py-16">
        {children}
      </main>
    </div>
  );
};

export default Layout;