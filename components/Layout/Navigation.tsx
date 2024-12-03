import React, { useState, useEffect, useCallback } from 'react';
import { 
  Menu, 
  Search, 
  X, 
  ChevronDown
} from 'lucide-react';

// Define TypeScript interfaces for better type safety
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
  // State management with proper typing
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  // Move currentPath state to use window only after mount to avoid SSR issues
  const [currentPath, setCurrentPath] = useState<string>('/');
  
  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  // Navigation structure moved outside component for better organization
  const navigationLinks: NavigationLink[] = [
    { 
      path: '/', 
      label: 'Home' 
    },
    { 
      path: '/auctions', 
      label: 'Auctions',
      dropdownItems: [
        { path: '/auctions/live', label: 'Live Auctions' },
        { path: '/auctions/upcoming', label: 'Upcoming' },
        { path: '/auctions/past', label: 'Past Results' }
      ]
    },
    { 
      path: '/gallery', 
      label: 'Gallery',
      dropdownItems: [
        { path: '/gallery/featured', label: 'Featured Vehicles' },
        { path: '/gallery/sold', label: 'Recently Sold' }
      ]
    },
    { path: '/membership', label: 'Membership' },
    { path: '/contact', label: 'Contact' }
  ];

  // Enhanced scroll handler with throttling
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth page transitions
  const handleNavigation = useCallback((path: string) => {
    const currentScroll = window.scrollY;
    const mainElement = document.querySelector('main');
    
    if (mainElement) {
      mainElement.classList.add('fade-out');
      
      setTimeout(() => {
        window.location.href = path;
        setCurrentPath(path);
        window.scrollTo(0, currentScroll);
        
        requestAnimationFrame(() => {
          mainElement.classList.remove('fade-out');
          mainElement.classList.add('fade-in');
        });
      }, 300);
    }
  }, []);

  // Enhanced search handling with validation
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim().length < 3) {
      const searchInput = (e.target as HTMLFormElement).querySelector('input');
      searchInput?.classList.add('shake');
      setTimeout(() => searchInput?.classList.remove('shake'), 500);
      return;
    }
    
    handleNavigation(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent backdrop-blur-sm'
      }`}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button 
            onClick={() => handleNavigation('/')}
            className="group flex items-center space-x-2 transition-transform duration-300 hover:scale-105"
          >
            <span className="text-2xl font-light tracking-wider group-hover:tracking-widest transition-all">
              AUTO-VENDOR
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <div 
                key={link.path}
                className="relative"
                onMouseEnter={() => setActiveDropdown(link.path)}
              >
                <button
                  onClick={() => handleNavigation(link.path)}
                  className={`flex items-center space-x-1 text-gray-600 hover:text-gray-900 
                    transition-all duration-200 text-sm font-light tracking-wider
                    hover:tracking-widest ${currentPath === link.path ? 'text-gray-900' : ''}`}
                >
                  <span>{link.label}</span>
                  {link.dropdownItems && (
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-200 
                        ${activeDropdown === link.path ? 'rotate-180' : ''}`}
                    />
                  )}
                </button>

                {/* Dropdown Menu */}
                {link.dropdownItems && activeDropdown === link.path && (
                  <div className="absolute top-full left-0 w-48 py-2 mt-1 bg-white shadow-lg rounded-lg
                    transform transition-all duration-200 opacity-100 scale-100">
                    {link.dropdownItems.map((item) => (
                      <button
                        key={item.path}
                        onClick={() => handleNavigation(item.path)}
                        className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:text-gray-900
                          hover:bg-gray-50 transition-colors duration-200"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Search Bar */}
            <form 
              onSubmit={handleSearch}
              className={`relative transition-all duration-300 ${
                isSearchOpen ? 'w-64' : 'w-8'
              }`}
            >
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchOpen(true)}
                onBlur={() => !searchQuery && setIsSearchOpen(false)}
                placeholder="Search auctions..."
                className="w-full px-4 py-2 rounded-full bg-gray-100 focus:outline-none
                  focus:ring-2 focus:ring-gray-200 text-sm transition-all duration-300"
              />
              <button 
                type="submit"
                className="absolute right-3 top-2 transition-transform hover:scale-110"
              >
                <Search className="w-5 h-5 text-gray-400" />
              </button>
            </form>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900
              transition-transform duration-200 hover:scale-110"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-4">
            <form onSubmit={handleSearch} className="mb-4">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search auctions..."
                className="w-full px-4 py-2 rounded-full bg-gray-100 focus:outline-none
                  focus:ring-2 focus:ring-gray-200 text-sm"
              />
            </form>
            <div className="flex flex-col space-y-4">
              {navigationLinks.map((link) => (
                <div key={link.path}>
                  <button
                    onClick={() => {
                      handleNavigation(link.path);
                      setIsOpen(false);
                    }}
                    className={`text-left text-gray-600 hover:text-gray-900 transition-colors
                      duration-200 text-sm font-light tracking-wider ${
                        currentPath === link.path ? 'text-gray-900' : ''
                      }`}
                  >
                    {link.label}
                  </button>
                  {link.dropdownItems && (
                    <div className="ml-4 mt-2 space-y-2">
                      {link.dropdownItems.map((item) => (
                        <button
                          key={item.path}
                          onClick={() => {
                            handleNavigation(item.path);
                            setIsOpen(false);
                          }}
                          className="block text-left text-sm text-gray-500 hover:text-gray-900
                            transition-colors duration-200"
                        >
                          {item.label}
                        </button>
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