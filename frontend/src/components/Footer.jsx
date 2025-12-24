import React from 'react';
import { Phone, Mail, Facebook, ArrowUp } from 'lucide-react';
import { companyInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    services: [
      { name: 'Custom Web Design', href: '#services' },
      { name: 'Responsive Development', href: '#services' },
      { name: 'SEO Optimization', href: '#services' },
      { name: 'Website Maintenance', href: '#services' },
    ],
    company: [
      { name: 'About Us', href: '#home' },
      { name: 'Our Process', href: '#process' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Contact', href: '#contact' },
    ],
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1E2A3C] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={companyInfo.logoUrl}
                alt={companyInfo.name}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Professional web development services for your personal and business needs. 
              Quality websites at affordable prices.
            </p>
            <div className="flex gap-3">
              <a
                href={companyInfo.contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={`tel:${companyInfo.contact.phone}`}
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${companyInfo.contact.email}`}
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
            <div className="space-y-4">
              <a
                href={`tel:${companyInfo.contact.phone}`}
                className="flex items-center gap-3 text-white/70 hover:text-white text-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                {companyInfo.contact.phone}
              </a>
              <a
                href={`mailto:${companyInfo.contact.email}`}
                className="flex items-center gap-3 text-white/70 hover:text-white text-sm transition-colors"
              >
                <Mail className="w-4 h-4" />
                {companyInfo.contact.email}
              </a>
              <a
                href={companyInfo.contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-white text-sm transition-colors"
              >
                <Facebook className="w-4 h-4" />
                Facebook Page
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              © {currentYear} {companyInfo.name} {companyInfo.tagline}. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;