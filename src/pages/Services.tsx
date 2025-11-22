import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowLeft } from 'lucide-react';

const servicesData = {
  website: {
    title: "Website Development",
    subtitle: "Build your digital home",
    description: "We create responsive, fast, and SEO-optimized websites that look great on all devices.",
    plans: [
      {
        name: "Starter",
        price: "$199",
        features: ["One Page Website", "Mobile Responsive", "Contact Form", "Social Media Links", "1 Week Support"],
        recommended: false
      },
      {
        name: "Business",
        price: "$499",
        features: ["5 Page Website", "SEO Optimization", "Speed Optimized", "Custom Design", "1 Month Support"],
        recommended: true
      },
      {
        name: "E-Commerce",
        price: "$999",
        features: ["Online Store", "Payment Gateway", "Product Management", "Admin Dashboard", "3 Months Support"],
        recommended: false
      }
    ]
  },
  ads: {
    title: "Ads & Posters",
    subtitle: "Capture attention instantly",
    description: "Engaging video ads and stunning graphic posters designed to stop the scroll.",
    plans: [
      {
        name: "Social Pack",
        price: "$99",
        features: ["3 Social Media Posters", "High Resolution", "Source Files", "2 Revisions", "2 Days Delivery"],
        recommended: false
      },
      {
        name: "Video Ad",
        price: "$149",
        features: ["30 Sec Promo Video", "Background Music", "Stock Footage", "Professional Editing", "Voiceover Optional"],
        recommended: true
      },
      {
        name: "Campaign",
        price: "$399",
        features: ["3 Video Ads", "10 Social Posters", "Ad Copywriting", "Multiple Formats", "Priority Support"],
        recommended: false
      }
    ]
  },
  logo: {
    title: "Logo Design",
    subtitle: "Define your identity",
    description: "Unique and memorable logos that represent your brand values and vision.",
    plans: [
      {
        name: "Basic",
        price: "$49",
        features: ["2 Logo Concepts", "High Res PNG/JPG", "Transparent BG", "2 Revisions", "48h Delivery"],
        recommended: false
      },
      {
        name: "Pro",
        price: "$129",
        features: ["5 Logo Concepts", "Vector Files (AI/EPS)", "Social Media Kit", "Unlimited Revisions", "Brand Color Palette"],
        recommended: true
      },
      {
        name: "Identity",
        price: "$299",
        features: ["All Pro Features", "Brand Guidelines", "Business Card Design", "Letterhead Design", "Copyright Transfer"],
        recommended: false
      }
    ]
  },
  custom: {
    title: "Custom Branding",
    subtitle: "Tailored solutions for you",
    description: "Need something specific? We offer custom packages for unique business requirements.",
    plans: [
      {
        name: "Consultation",
        price: "Free",
        features: ["Requirement Analysis", "Strategy Session", "Custom Quote", "Timeline Estimate", "Tech Stack Advice"],
        recommended: false
      },
      {
        name: "Full Brand",
        price: "Custom",
        features: ["Logo & Identity", "Website Development", "Social Media Setup", "Marketing Materials", "Launch Strategy"],
        recommended: true
      }
    ]
  }
};

const Services = () => {
  const { type } = useParams<{ type?: string }>();
  
  // Default to showing all services if no specific type or invalid type
  const isSpecificService = type && Object.keys(servicesData).includes(type);
  const currentService = isSpecificService ? servicesData[type as keyof typeof servicesData] : null;

  if (!isSpecificService) {
    return (
      <div className="min-h-screen pt-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Our Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(servicesData).map(([key, data]) => (
              <Link key={key} to={`/services/${key}`} className="block group">
                <div className="bg-dark-card border border-white/10 rounded-2xl p-8 hover:border-neon/50 transition-all duration-300 h-full flex flex-col items-center">
                  <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-neon">{data.title}</h2>
                  <p className="text-gray-400 mb-4">{data.subtitle}</p>
                  <span className="text-neon text-sm font-semibold flex items-center">
                    View Plans <ArrowLeft className="ml-2 w-4 h-4 rotate-180" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <Link to="/services" className="inline-flex items-center text-gray-400 hover:text-neon mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
        </Link>

        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            {currentService?.title}
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">{currentService?.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentService?.plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 border ${
                plan.recommended 
                  ? 'bg-dark-card border-neon shadow-[0_0_30px_-10px_rgba(0,243,255,0.3)]' 
                  : 'bg-dark-bg border-white/10'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-neon text-black text-xs font-bold px-3 py-1 rounded-full">
                  RECOMMENDED
                </div>
              )}
              
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold text-neon mb-6">{plan.price}</div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-gray-300 text-sm">
                    <Check className="w-5 h-5 text-neon mr-3 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link
                to={`/contact?service=${currentService.title}&plan=${plan.name}`}
                className={`block w-full py-3 rounded-lg text-center font-bold transition-all duration-300 ${
                  plan.recommended
                    ? 'bg-neon text-black hover:bg-white'
                    : 'bg-white/5 text-white hover:bg-white/10'
                }`}
              >
                Choose Plan
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
