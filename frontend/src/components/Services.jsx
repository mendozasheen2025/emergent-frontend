import React from 'react';
import { Palette, Monitor, Search, Zap, Shield, Settings } from 'lucide-react';
import { services } from '../data/mock';

const iconMap = {
  Palette: Palette,
  Monitor: Monitor,
  Search: Search,
  Zap: Zap,
  Shield: Shield,
  Settings: Settings,
};

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2A3C] mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <div className="section-divider mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We create stunning, high-performance websites tailored to your unique needs and goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Monitor;
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 card-hover group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-[#1E2A3C]/5 flex items-center justify-center mb-6 group-hover:bg-[#1E2A3C] transition-colors duration-300">
                  <IconComponent className="w-7 h-7 text-[#1E2A3C] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-[#1E2A3C] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            All websites include free domain registration, hosting, and maintenance for the first year.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;