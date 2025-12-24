import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Facebook } from 'lucide-react';
import { Button } from './ui/button';
import { companyInfo } from '../data/mock';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Process', href: '#process' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#1E2A3C]/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={companyInfo.logoUrl}
              alt={companyInfo.name}
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="nav-link text-white/90 hover:text-white font-medium text-sm tracking-wide"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${companyInfo.contact.phone}`}
              className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">{companyInfo.contact.phone}</span>
            </a>
            <Button
              onClick={() => scrollToSection('#contact')}
              className="bg-white text-[#1E2A3C] hover:bg-gray-100 font-semibold px-6 btn-shine"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#1E2A3C]/98 backdrop-blur-lg border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left text-white/90 hover:text-white font-medium py-2"
              >
                {link.name}
              </button>
            ))}
            <div className="pt-4 border-t border-white/10 space-y-4">
              <a
                href={`tel:${companyInfo.contact.phone}`}
                className="flex items-center gap-2 text-white/90 hover:text-white"
              >
                <Phone className="w-4 h-4" />
                <span>{companyInfo.contact.phone}</span>
              </a>
              <a
                href={companyInfo.contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/90 hover:text-white"
              >
                <Facebook className="w-4 h-4" />
                <span>Facebook</span>
              </a>
              <Button
                onClick={() => scrollToSection('#contact')}
                className="w-full bg-white text-[#1E2A3C] hover:bg-gray-100 font-semibold"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;