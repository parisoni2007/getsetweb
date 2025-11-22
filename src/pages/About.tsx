import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-neon">Get Set Web</span>
          </h1>
          <p className="text-xl text-gray-400">
            Empowering businesses with affordable, high-quality digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              At <strong className="text-white">Get Set Web</strong>, we believe that every business deserves a stunning digital presence without breaking the bank. Founded with a passion for design and technology, we bridge the gap between affordability and premium quality.
            </p>
            <p>
              Whether you are a startup looking for your first logo, or an established company needing a website overhaul, we have the tools and expertise to get you set for the web.
            </p>
            <p>
              Our mission is simple: To provide accessible, professional, and fast digital services including website development, ad creation, and branding to help you stand out in a crowded digital marketplace.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-neon/20 rounded-2xl blur-3xl" />
            <div className="relative bg-dark-card border border-white/10 rounded-2xl p-8 h-full flex flex-col justify-center space-y-8">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-neon/10 text-neon">
                  <Zap size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold">Fast Execution</h3>
                  <p className="text-sm text-gray-400">We value your time and deliver promptly.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-neon/10 text-neon">
                  <Target size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold">Result Oriented</h3>
                  <p className="text-sm text-gray-400">Designs that focus on conversion and growth.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-neon/10 text-neon">
                  <Users size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold">Client Centric</h3>
                  <p className="text-sm text-gray-400">Your vision is our command.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
