import React, { useState } from 'react';
import { Phone, Mail, Facebook, MapPin, Send, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { companyInfo } from '../data/mock';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    package: 'basic'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success('Message sent successfully! We will contact you soon.');
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        package: 'basic'
      });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Phone,
      label: 'Phone',
      value: companyInfo.contact.phone,
      href: `tel:${companyInfo.contact.phone}`,
      description: 'Call us directly'
    },
    {
      icon: Facebook,
      label: 'Facebook',
      value: 'Message us on Facebook',
      href: companyInfo.contact.facebook,
      description: 'Quick response guaranteed'
    },
    {
      icon: Mail,
      label: 'Email',
      value: companyInfo.contact.email,
      href: `mailto:${companyInfo.contact.email}`,
      description: 'Send us an email'
    }
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2A3C] mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="section-divider mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ready to start your project? Contact us today for a free consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-[#1E2A3C] mb-6">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Whether you need a simple landing page or a complex business website, 
              we're here to help. Get in touch and let's discuss how we can bring your vision to life.
            </p>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  target={method.label === 'Facebook' ? '_blank' : undefined}
                  rel={method.label === 'Facebook' ? 'noopener noreferrer' : undefined}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white hover:bg-[#1E2A3C] group transition-all duration-300 shadow-sm hover:shadow-lg"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#1E2A3C]/5 group-hover:bg-white/10 flex items-center justify-center flex-shrink-0 transition-colors">
                    <method.icon className="w-6 h-6 text-[#1E2A3C] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1E2A3C] group-hover:text-white transition-colors">
                      {method.label}
                    </p>
                    <p className="text-gray-600 group-hover:text-white/80 text-sm transition-colors">
                      {method.value}
                    </p>
                    <p className="text-gray-400 group-hover:text-white/60 text-xs mt-1 transition-colors">
                      {method.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Business Hours */}
            <div className="mt-8 p-6 bg-white rounded-xl shadow-sm">
              <h4 className="font-semibold text-[#1E2A3C] mb-3">Business Hours</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-medium">9:00 AM - 12:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-medium">Closed</span>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-[#1E2A3C] mb-6">
              Send Us a Message
            </h3>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h4 className="text-xl font-bold text-[#1E2A3C] mb-2">Message Sent!</h4>
                <p className="text-gray-600">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Juan dela Cruz"
                    className="contact-input"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="juan@email.com"
                      className="contact-input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="09123456789"
                      className="contact-input"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Interested Package
                  </label>
                  <select
                    name="package"
                    value={formData.package}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E2A3C]/20 focus:border-[#1E2A3C] transition-colors bg-white"
                  >
                    <option value="basic">Basic - ₱15,000</option>
                    <option value="advance">Advance - ₱30,000</option>
                    <option value="professional">Professional - ₱50,000</option>
                    <option value="custom">Custom Project</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="contact-input resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1E2A3C] hover:bg-[#2a3a50] text-white font-semibold py-6 btn-shine"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message
                      <Send className="w-4 h-4" />
                    </span>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;