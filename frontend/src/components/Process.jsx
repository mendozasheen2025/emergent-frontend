import React from 'react';
import { processSteps } from '../data/mock';
import { MessageSquare, PenTool, Code, Rocket } from 'lucide-react';

const iconMap = {
  1: MessageSquare,
  2: PenTool,
  3: Code,
  4: Rocket,
};

const Process = () => {
  return (
    <section id="process" className="py-20 lg:py-28 bg-[#1E2A3C] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our <span className="gradient-text">Process</span>
          </h2>
          <div className="section-divider mx-auto mb-6"></div>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            From consultation to launch, we guide you through every step of creating your perfect website.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((item, index) => {
            const IconComponent = iconMap[item.step] || MessageSquare;
            return (
              <div key={item.step} className="relative">
                {/* Connector line (hidden on last item and mobile) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[calc(50%+32px)] w-[calc(100%-64px)] h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                )}

                <div className="text-center">
                  {/* Step number and icon */}
                  <div className="relative inline-flex">
                    <div className="w-24 h-24 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center mb-6 group hover:bg-white/10 transition-colors">
                      <IconComponent className="w-10 h-10 text-cyan-400" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline note */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            <span className="text-white/80 text-sm">Typical project timeline: 3-14 days depending on package</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;