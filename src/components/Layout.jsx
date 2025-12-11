import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Menu, X, Globe } from 'lucide-react';

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  // Disable right-click context menu
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
      return false;
    };

    const handleKeyDown = (e) => {
      // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+S, Ctrl+Shift+C
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
        (e.ctrlKey && (e.key === 'u' || e.key === 'U' || e.key === 's' || e.key === 'S'))
      ) {
        e.preventDefault();
        return false;
      }
    };

    const handleCopy = (e) => {
      e.preventDefault();
      return false;
    };

    const handleCut = (e) => {
      e.preventDefault();
      return false;
    };

    const handleDragStart = (e) => {
      e.preventDefault();
      return false;
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('copy', handleCopy);
    document.addEventListener('cut', handleCut);
    document.addEventListener('dragstart', handleDragStart);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('cut', handleCut);
      document.removeEventListener('dragstart', handleDragStart);
    };
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/expertise', label: 'Expertise' },
    { path: '/experience', label: 'Experience' },
    { path: '/certifications', label: 'Certifications' }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'glass-strong shadow-2xl shadow-purple-900/10' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold tracking-tight flex items-center gap-3 py-5 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <Shield className="w-8 h-8 text-white relative" />
            </div>
            <span className="gradient-text font-black">
              NIKHIL PANDEY
            </span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-3 py-2 transition-all duration-300 hover:text-white ${
                  location.pathname === link.path ? 'text-white' : ''
                } group`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 ${
                  location.pathname === link.path ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}></span>
              </Link>
            ))}
            <a
              href="/#contact"
              className="relative px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
            >
              <span className="relative z-10">Contact Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-slate-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 p-6 flex flex-col gap-4 shadow-2xl">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-left ${
                  location.pathname === link.path
                    ? 'text-blue-400 font-bold'
                    : 'text-slate-300 hover:text-blue-400'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a href="/#contact" className="text-left text-blue-400 font-bold">
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="select-none">{children}</main>

      {/* Footer */}
      <footer className="text-center py-8 text-slate-500 text-sm border-t border-slate-800">
        <p>© {new Date().getFullYear()} Nikhil Pandey. All rights reserved.</p>
        <p className="text-xs mt-1 text-slate-600">Content is protected. Unauthorized copying is prohibited.</p>
        <div className="flex items-center justify-center gap-2 mt-2">
          <Globe className="w-3 h-3" />
          <span>Hosted on Microsoft Azure</span>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
