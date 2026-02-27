import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else if (location.pathname !== '/') {
        // If not on home page, we need to navigate there first
        // handled by Link to="/" with hash
      }
    }
  };

  const navLinks = [
    { name: 'Home', href: '/#' },
    { name: 'Services', href: '/#services' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || location.pathname !== '/'
        ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100/50'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 group cursor-pointer">
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-2 rounded-xl shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/30 transition-all duration-300">
              <Terminal size={24} className="text-white" />
            </div>
            <span className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r font-display transition-all duration-300 ${isScrolled || location.pathname !== '/'
              ? 'from-gray-900 to-gray-700'
              : 'from-white to-gray-200'
              }`}>
              Code<span className="text-purple-600">&</span>Pixels
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              // Handle home page hash links vs cross-page links
              // Simply using /#hash usually works with HashRouter or standard browser behavior if on Home.
              // But for better UX, we can check path.
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${isScrolled || location.pathname !== '/'
                    ? 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  onClick={() => {
                    // small timeout to allow nav
                    setTimeout(() => handleNavClick(link.href.replace('/', '')), 100);
                  }}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              to="/#contact"
              className={`ml-4 px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-lg ${isScrolled || location.pathname !== '/'
                ? 'text-white bg-slate-900 hover:bg-slate-800 shadow-slate-900/20 hover:shadow-slate-900/30'
                : 'text-gray-900 bg-white hover:bg-gray-100 shadow-white/10 hover:shadow-white/20'
                }`}
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-colors focus:outline-none ${isScrolled || location.pathname !== '/'
                ? 'text-gray-600 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
                }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="block px-4 py-3 rounded-xl text-base font-medium text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-all duration-200"
              onClick={() => {
                setTimeout(() => handleNavClick(link.href.replace('/', '')), 100);
              }}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 px-4">
            <Link
              to="/#contact"
              className="block w-full text-center px-6 py-3 text-base font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all duration-300 shadow-lg shadow-slate-900/20"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}