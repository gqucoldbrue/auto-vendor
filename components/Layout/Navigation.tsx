"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Menu, 
  Search, 
  X, 
  ChevronDown 
} from 'lucide-react';

interface DropdownItem {
  path: string;
  label: string;
}

interface NavigationLink {
  path: string;
  label: string;
  dropdownItems?: DropdownItem[];
}

const Navigation = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [currentPath, setCurrentPath] = useState<string>('/');

  // Rest of your state and navigationLinks remain the same...

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent backdrop-blur-sm'
      }`}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link 
            href="/"
            className="group flex items-center space-x-2 transition-transform duration-300 hover:scale-105"
          >
            <span className="text-2xl font-light tracking-wider group-hover:tracking-widest transition-all">
              AUTO-VENDOR
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <div 
                key={link.path}
                className="relative"
                onMouseEnter={() => setActiveDropdown(link.path)}
              >
                <Link
                  href={link.path}
                  className={`flex items-center space-x-1 text-gray-600 hover:text-gray-900 
                    transition-all duration-200 text-sm font-light tracking-wider
                    hover:tracking-widest ${currentPath === link.path ? 'text-gray-900' : ''}`}
                >
                  {link.label}
                  {link.dropdownItems && (
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-200 
                        ${activeDropdown === link.path ? 'rotate-180' : ''}`}
                    />
                  )}
                </Link>

                {link.dropdownItems && activeDropdown === link.path && (
                  <div className="absolute top-full left-0 w-48 py-2 mt-1 bg-white shadow-lg rounded-lg
                    transform transition-all duration-200 opacity-100 scale-100">
                    {link.dropdownItems.map((item) => (
                      <Link
                        key={item.path}
                        href={item.path}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:text-gray-900
                          hover:bg-gray-50 transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Search form remains the same */}
          </div>

          {/* Mobile menu button remains the same */}
        </div>

        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-4">
            {/* Search form remains the same */}
            <div className="flex flex-col space-y-4">
              {navigationLinks.map((link) => (
                <div key={link.path}>
                  <Link
                    href={link.path}
                    className={`block text-gray-600 hover:text-gray-900 transition-colors
                      duration-200 text-sm font-light tracking-wider ${
                        currentPath === link.path ? 'text-gray-900' : ''
                      }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.dropdownItems && (
                    <div className="ml-4 mt-2 space-y-2">
                      {link.dropdownItems.map((item) => (
                        <Link
                          key={item.path}
                          href={item.path}
                          className="block text-sm text-gray-500 hover:text-gray-900
                            transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;