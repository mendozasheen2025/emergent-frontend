import React, { useState } from 'react';
import { ExternalLink, Eye } from 'lucide-react';
import { portfolioSamples } from '../data/mock';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredItem, setHoveredItem] = useState(null);

  const categories = ['All', ...new Set(portfolioSamples.map(item => item.category))];

  const filteredItems = activeFilter === 'All'
    ? portfolioSamples
    : portfolioSamples.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2A3C] mb-4">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <div className="section-divider mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Browse through our sample website designs. See what we can create for your business.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-[#1E2A3C] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 card-hover"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-[#1E2A3C] via-[#1E2A3C]/60 to-transparent transition-opacity duration-300 ${
                hoveredItem === item.id ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-cyan-400/20 text-cyan-300 text-xs font-medium rounded-full mb-3">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/80 text-sm mb-4">{item.description}</p>
                  <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white text-[#1E2A3C] rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
                      <Eye className="w-4 h-4" />
                      Preview
                    </button>
                  </div>
                </div>
              </div>

              {/* Static Info (shown when not hovered) */}
              <div className={`absolute bottom-0 left-0 right-0 p-4 bg-white transition-opacity duration-300 ${
                hoveredItem === item.id ? 'opacity-0' : 'opacity-100'
              }`}>
                <span className="text-xs text-cyan-600 font-medium">{item.category}</span>
                <h3 className="font-semibold text-[#1E2A3C]">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-4">
            Want to see more? Contact us for a personalized portfolio review.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;