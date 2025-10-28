import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center cursor-pointer" onClick={() => handleNavClick('home')}>
            <img
              src="/wof_logo_png (1).png"
              alt="Whoba Ogo Foundation Logo"
              className="h-16 w-auto"
            />
          </div>

          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => handleNavClick('home')}
              className={`${currentPage === 'home' ? 'text-[#E85D54]' : 'text-gray-700'} hover:text-[#E85D54] transition-colors font-medium`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`${currentPage === 'about' ? 'text-[#E85D54]' : 'text-gray-700'} hover:text-[#E85D54] transition-colors font-medium`}
            >
              About Us
            </button>
            <button
              onClick={() => handleNavClick('ict-hub')}
              className={`${currentPage === 'ict-hub' ? 'text-[#E85D54]' : 'text-gray-700'} hover:text-[#E85D54] transition-colors font-medium`}
            >
              ICT HUB
            </button>
            <button
              onClick={() => handleNavClick('gallery')}
              className={`${currentPage === 'gallery' ? 'text-[#E85D54]' : 'text-gray-700'} hover:text-[#E85D54] transition-colors font-medium`}
            >
              Gallery
            </button>
            <a href="#contact" className="text-gray-700 hover:text-[#E85D54] transition-colors font-medium">
              Contact
            </a>
          </div>

          <div className="hidden md:block">
            <a
              href="https://cohort.whobaogofoundation.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E85D54] text-white px-6 py-2.5 rounded-lg hover:bg-[#d54a41] transition-colors font-medium shadow-md"
            >
              JOIN OUR RECENT COHORT
            </a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <button onClick={() => handleNavClick('home')} className="text-gray-700 hover:text-[#E85D54] transition-colors py-2 text-left">
                Home
              </button>
              <button onClick={() => handleNavClick('about')} className="text-gray-700 hover:text-[#E85D54] transition-colors py-2 text-left">
                About Us
              </button>
              <button onClick={() => handleNavClick('ict-hub')} className="text-gray-700 hover:text-[#E85D54] transition-colors py-2 text-left">
                ICT HUB
              </button>
              <button onClick={() => handleNavClick('gallery')} className="text-gray-700 hover:text-[#E85D54] transition-colors py-2 text-left">
                Gallery
              </button>
              <a href="#contact" className="text-gray-700 hover:text-[#E85D54] transition-colors py-2">
                Contact
              </a>
              <a
                href="https://cohort.whobaogofoundation.org"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E85D54] text-white px-6 py-2.5 rounded-lg hover:bg-[#d54a41] transition-colors w-full text-center"
              >
                JOIN OUR RECENT COHORT
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
