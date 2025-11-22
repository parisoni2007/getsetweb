import React from 'react';
import { motion } from 'framer-motion';
import { Code, Video, PenTool, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative px-4 py-20 md:py-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-neon/20 rounded-full blur-[120px] -z-10" />
        
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-neon/10 border border-neon/20 text-neon text-sm font-medium mb-6">
              Digital Solutions for Modern Businesses
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Get Set <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-blue-500 text-glow">Web</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
              Transform your digital presence with professional websites, stunning ads, and unique branding designed to convert.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/services"
                className="px-8 py-4 rounded-lg bg-neon text-black font-bold text-lg hover:bg-white hover:shadow-neon transition-all duration-300 w-full sm:w-auto"
              >
                Explore Services
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 rounded-lg bg-white/5 text-white border border-white/10 font-bold text-lg hover:bg-white/10 transition-all duration-300 w-full sm:w-auto flex items-center justify-center"
              >
                Contact Us <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-dark-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Expertise</h2>
            <p className="text-gray-400">Everything you need to establish and grow your brand online.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              title="Website Development"
              description="Custom, responsive, and fast websites tailored to your business needs."
              icon={Code}
              link="/services/website"
              delay={0.1}
            />
            <ServiceCard
              title="Ads & Posters"
              description="High-converting video ads and eye-catching poster designs."
              icon={Video}
              link="/services/ads"
              delay={0.2}
            />
            <ServiceCard
              title="Logo Design"
              description="Memorable logos that define your brand identity."
              icon={PenTool}
              link="/services/logo"
              delay={0.3}
            />
            <ServiceCard
              title="Custom Branding"
              description="Full digital branding packages for a cohesive online presence."
              icon={Sparkles}
              link="/services/custom"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose <span className="text-neon">Get Set Web</span>?
              </h2>
              <p className="text-gray-400 mb-8">
                We don't just build websites; we build digital experiences that drive growth. Our team combines creativity with technical expertise to deliver results that matter.
              </p>
              
              <div className="space-y-4">
                {[
                  "Modern, Clean & Responsive Designs",
                  "Affordable Pricing for All Businesses",
                  "Fast Turnaround Times",
                  "Dedicated Support & Maintenance"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="text-neon w-6 h-6" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-neon/20 to-blue-500/20 rounded-2xl blur-2xl" />
              <div className="relative bg-dark-card border border-white/10 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-dark-bg p-6 rounded-xl text-center">
                    <h3 className="text-3xl font-bold text-neon mb-2">100+</h3>
                    <p className="text-sm text-gray-400">Projects Completed</p>
                  </div>
                  <div className="bg-dark-bg p-6 rounded-xl text-center">
                    <h3 className="text-3xl font-bold text-neon mb-2">98%</h3>
                    <p className="text-sm text-gray-400">Client Satisfaction</p>
                  </div>
                  <div className="bg-dark-bg p-6 rounded-xl text-center">
                    <h3 className="text-3xl font-bold text-neon mb-2">24/7</h3>
                    <p className="text-sm text-gray-400">Support Available</p>
                  </div>
                  <div className="bg-dark-bg p-6 rounded-xl text-center">
                    <h3 className="text-3xl font-bold text-neon mb-2">Fast</h3>
                    <p className="text-sm text-gray-400">Delivery Time</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-b from-dark-card to-dark-bg border border-white/10 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">Ready to Start Your Project?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto relative z-10">
            Let's discuss your vision and how we can bring it to life. Get a free quote today.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 rounded-lg bg-neon text-black font-bold text-lg hover:bg-white hover:shadow-neon transition-all duration-300 relative z-10"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
