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
      <nav className={`fixed top-0 w-full z-50 transition-all ${isScrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2 py-4">
            <Shield className="w-8 h-8 text-blue-500" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              NIKHIL PANDEY
            </span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`hover:text-blue-400 transition-colors ${
                  location.pathname === link.path ? 'text-blue-400' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/#contact"
              className="px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white transition-all"
            >
              Contact Me
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
      <main>{children}</main>

      {/* Footer */}
      <footer className="text-center py-8 text-slate-500 text-sm border-t border-slate-800">
        <p>© {new Date().getFullYear()} Nikhil Pandey. All rights reserved.</p>
        <div className="flex items-center justify-center gap-2 mt-2">
          <Globe className="w-3 h-3" />
          <span>Hosted on Microsoft Azure</span>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
