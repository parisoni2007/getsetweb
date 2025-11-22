import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Send, Instagram, Phone, Mail, Loader2 } from 'lucide-react';

const Contact = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialService = queryParams.get('service') || '';
  const initialPlan = queryParams.get('plan') || '';

  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    serviceNeeded: initialService,
    phoneNumber: '',
    message: initialPlan ? `I am interested in the ${initialPlan} plan.` : ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, serviceNeeded: initialService }));
    }
    if (initialPlan) {
        setFormData(prev => ({ ...prev, message: `I am interested in the ${initialPlan} plan.` }));
    }
  }, [initialService, initialPlan]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate API call
    setTimeout(() => {
      // Construct mailto link as fallback/actual action
      const subject = `New Inquiry from ${formData.businessName}`;
      const body = `Name: ${formData.name}%0D%0ABusiness: ${formData.businessName}%0D%0AService: ${formData.serviceNeeded}%0D%0APhone: ${formData.phoneNumber}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
      
      window.location.href = `mailto:parisoni@gmail.com?subject=${subject}&body=${body}`;
      
      setStatus('success');
      setFormData({ name: '', businessName: '', serviceNeeded: '', phoneNumber: '', message: '' });
      
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-neon/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div>
            <h1 className="text-4xl font-bold text-white mb-4">Let's Work Together</h1>
            <p className="text-gray-400 text-lg">
              Ready to upgrade your business? Fill out the form and we will get back to you within 24 hours.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/5">
              <div className="bg-neon/10 p-3 rounded-full text-neon"><Mail /></div>
              <div>
                <p className="text-sm text-gray-400">Email Us</p>
                <p className="text-white font-medium">parisoni@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/5">
              <div className="bg-neon/10 p-3 rounded-full text-neon"><Instagram /></div>
              <div>
                <p className="text-sm text-gray-400">Follow Us</p>
                <div className="flex flex-col">
                  <a href="https://instagram.com/get_setweb" target="_blank" rel="noreferrer" className="text-white hover:text-neon transition-colors">@get_setweb</a>
                  <a href="https://instagram.com/getset_web" target="_blank" rel="noreferrer" className="text-white hover:text-neon transition-colors">@getset_web</a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-dark-card border border-white/10 p-8 rounded-2xl shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:border-neon focus:ring-1 focus:ring-neon outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Business Name</label>
                <input
                  type="text"
                  name="businessName"
                  required
                  value={formData.businessName}
                  onChange={handleChange}
                  className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:border-neon focus:ring-1 focus:ring-neon outline-none transition-all"
                  placeholder="My Company Ltd"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Service Needed</label>
                <select
                  name="serviceNeeded"
                  value={formData.serviceNeeded}
                  onChange={handleChange}
                  className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:border-neon focus:ring-1 focus:ring-neon outline-none transition-all appearance-none"
                >
                  <option value="">Select a service...</option>
                  <option value="Website Development">Website Development</option>
                  <option value="Ads & Posters">Ads & Posters</option>
                  <option value="Logo Design">Logo Design</option>
                  <option value="Custom Branding">Custom Branding</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  required
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:border-neon focus:ring-1 focus:ring-neon outline-none transition-all"
                  placeholder="+1 234 567 890"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:border-neon focus:ring-1 focus:ring-neon outline-none transition-all resize-none"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-neon text-black font-bold py-4 rounded-lg hover:bg-white hover:shadow-neon transition-all duration-300 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? (
                <Loader2 className="animate-spin mr-2" />
              ) : (
                <Send className="mr-2 w-5 h-5" />
              )}
              {status === 'sending' ? 'Processing...' : 'Send Message'}
            </button>
            
            {status === 'success' && (
              <p className="text-green-400 text-center text-sm mt-2">Opening your email client...</p>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
