import React from 'react';
import { ArrowRight, CheckCircle, Monitor, Smartphone, Tablet } from 'lucide-react';
import { Button } from './ui/button';
import { companyInfo } from '../data/mock';

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const highlights = [
    'Free Domain & Hosting (1 Year)',
    '3 Months Maintenance',
    'Mobile Responsive Design',
  ];

  return (
    <section id="home" className="relative min-h-screen hero-pattern overflow-hidden">
      {/* Floating shapes */}
      <div className="floating-shape shape-1"></div>
      <div className="floating-shape shape-2"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-180px)]">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-white/90 text-sm font-medium">Limited Slots Available</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up">
              Build Your
              <span className="block gradient-text">Professional Website</span>
              <span className="block">Today</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in-up delay-100">
              Get a stunning website for your personal brand or business. 
              Starting at <span className="text-white font-bold">₱15,000</span> with free domain and hosting.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 animate-fade-in-up delay-200">
              <Button
                onClick={() => scrollToSection('#pricing')}
                size="lg"
                className="bg-white text-[#1E2A3C] hover:bg-gray-100 font-bold text-lg px-8 py-6 btn-shine group"
              >
                View Pricing
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => scrollToSection('#contact')}
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold text-lg px-8 py-6"
              >
                Contact Us
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in-up delay-300">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-white/80">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative hidden lg:block animate-slide-in-right">
            <div className="relative">
              {/* Device mockups */}
              <div className="relative z-10">
                {/* Desktop */}
                <div className="bg-[#2a3a50] rounded-lg p-2 shadow-2xl">
                  <div className="flex gap-1.5 mb-2">
                    <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  </div>
                  <div className="bg-white rounded-md aspect-video flex items-center justify-center">
                    <div className="text-center p-8">
                      <Monitor className="w-16 h-16 text-[#1E2A3C] mx-auto mb-4" />
                      <p className="text-[#1E2A3C] font-semibold">Your Website Here</p>
                      <p className="text-gray-500 text-sm">Desktop View</p>
                    </div>
                  </div>
                </div>

                {/* Tablet */}
                <div className="absolute -bottom-8 -left-12 bg-[#2a3a50] rounded-lg p-2 shadow-xl w-48 animate-float">
                  <div className="bg-white rounded-md aspect-[3/4] flex items-center justify-center">
                    <div className="text-center p-4">
                      <Tablet className="w-10 h-10 text-[#1E2A3C] mx-auto mb-2" />
                      <p className="text-[#1E2A3C] font-semibold text-xs">Tablet</p>
                    </div>
                  </div>
                </div>

                {/* Mobile */}
                <div className="absolute -bottom-4 -right-8 bg-[#2a3a50] rounded-xl p-1.5 shadow-xl w-28 animate-float delay-500">
                  <div className="bg-white rounded-lg aspect-[9/16] flex items-center justify-center">
                    <div className="text-center p-2">
                      <Smartphone className="w-8 h-8 text-[#1E2A3C] mx-auto mb-1" />
                      <p className="text-[#1E2A3C] font-semibold text-[10px]">Mobile</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-20 h-20 border-2 border-cyan-400/30 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 border-2 border-blue-400/20 rounded-full translate-y-1/4 -translate-x-1/4"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;