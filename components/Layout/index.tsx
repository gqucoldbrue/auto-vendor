// components/Layout/index.tsx
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <header className="bg-white shadow">
        <nav className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Luxury Auto Auctions</h1>
          {/* We'll add navigation links here later */}
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-auto">
        <div className="container mx-auto px-4 py-6">
          <p>&copy; {new Date().getFullYear()} Luxury Auto Auctions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;