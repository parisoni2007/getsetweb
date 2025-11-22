import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, link, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative h-full"
    >
      <div className="absolute inset-0 bg-neon/5 rounded-2xl blur-xl group-hover:bg-neon/20 transition-all duration-500 opacity-0 group-hover:opacity-100" />
      <div className="relative h-full p-8 rounded-2xl bg-dark-card border border-white/5 hover:border-neon/30 transition-all duration-300 flex flex-col">
        <div className="w-14 h-14 rounded-xl bg-neon/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-7 h-7 text-neon" />
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neon transition-colors">{title}</h3>
        <p className="text-gray-400 mb-6 flex-grow">{description}</p>
        
        <Link 
          to={link} 
          className="inline-flex items-center text-sm font-semibold text-white group-hover:text-neon transition-colors"
        >
          View Plans <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
