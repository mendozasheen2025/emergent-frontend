import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import { companyInfo } from '../data/mock';

const MapLocation = () => {
  return (
    <section className="py-16 bg-[#1E2A3C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                title="The Website Maker Location - Subic Bay Freeport Zone"
                src={companyInfo.location.mapUrl}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </div>

          {/* Location Info */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Visit Our <span className="gradient-text">Location</span>
            </h2>
            <div className="section-divider mb-8"></div>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Our Address</h3>
                  <p className="text-white/70">{companyInfo.location.address}</p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Business Hours</h3>
                  <p className="text-white/70">Open <span className="text-cyan-400 font-bold">{companyInfo.businessHours}</span></p>
                  <p className="text-white/50 text-sm">We're always available to serve you!</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Call Us</h3>
                  <a href={`tel:${companyInfo.contact.phone}`} className="text-white/70 hover:text-cyan-400 transition-colors">
                    {companyInfo.contact.phone}
                  </a>
                </div>
              </div>

              {/* Emails */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Email Us</h3>
                  <a href={`mailto:${companyInfo.contact.email}`} className="block text-white/70 hover:text-cyan-400 transition-colors">
                    {companyInfo.contact.email}
                  </a>
                  <a href={`mailto:${companyInfo.contact.email2}`} className="block text-white/70 hover:text-cyan-400 transition-colors">
                    {companyInfo.contact.email2}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapLocation;