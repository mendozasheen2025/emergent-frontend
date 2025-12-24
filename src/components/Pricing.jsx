import React from 'react';
import { Check, Star, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { pricingPlans, companyInfo } from '../data/mock';

const Pricing = () => {
  const handleGetStarted = (planName) => {
    const message = `Hi! I'm interested in the ${planName} package for website development.`;
    const fbUrl = companyInfo.contact.facebook;
    window.open(fbUrl, '_blank');
  };

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2A3C] mb-4">
            Affordable <span className="gradient-text">Pricing</span>
          </h2>
          <div className="section-divider mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Choose the perfect package for your needs. All plans include free domain and hosting for your first year.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl p-8 transition-all duration-300 card-hover ${
                plan.popular
                  ? 'bg-[#1E2A3C] text-white ring-4 ring-cyan-400/30 scale-105 lg:scale-110 z-10'
                  : 'bg-white border-2 border-gray-100 hover:border-[#1E2A3C]/20'
              }`}
            >
              {plan.popular && (
                <div className="popular-badge flex items-center gap-1">
                  <Star className="w-3 h-3" fill="currentColor" />
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-[#1E2A3C]'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.popular ? 'text-white/70' : 'text-gray-500'}`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className={`text-lg font-semibold ${plan.popular ? 'text-white/80' : 'text-gray-500'}`}>
                    {plan.currency}
                  </span>
                  <span className={`text-5xl font-extrabold ${plan.popular ? 'text-white' : 'text-[#1E2A3C]'}`}>
                    {plan.price}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.popular ? 'bg-cyan-400/20' : 'bg-[#1E2A3C]/10'
                    }`}>
                      <Check className={`w-3 h-3 ${plan.popular ? 'text-cyan-400' : 'text-[#1E2A3C]'}`} />
                    </div>
                    <span className={`text-sm ${plan.popular ? 'text-white/90' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => handleGetStarted(plan.name)}
                className={`w-full py-6 font-semibold text-base group ${
                  plan.popular
                    ? 'bg-white text-[#1E2A3C] hover:bg-gray-100'
                    : 'bg-[#1E2A3C] text-white hover:bg-[#2a3a50]'
                } btn-shine`}
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        {/* Payment Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Flexible payment terms available. 50% upfront, 50% on completion.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;