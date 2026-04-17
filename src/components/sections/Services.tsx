/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  ChevronRight, 
  Facebook,
  Instagram,
  Youtube,
  Play,
  Apple,
  ShoppingBag,
  Smartphone,
  TrendingUp
} from 'lucide-react';

const SPECIALIZED_SERVICES = [
  {
    title: 'Facebook Marketing',
    description: 'High-ROI ad campaigns tailored to drive sales and active engagement.',
    icon: Facebook,
  },
  {
    title: 'Instagram Marketing',
    description: 'Visual storytelling and community management to grow your brand presence.',
    icon: Instagram,
  },
  {
    title: 'TikTok Marketing',
    description: 'Viral content strategies designed for the next generation of social media.',
    icon: Smartphone,
  },
  {
    title: 'YouTube Marketing',
    description: 'Channel growth tactics and SEO optimization to dominate the video search landscape.',
    icon: Youtube,
  },
  {
    title: 'Short Video Editing',
    description: 'Professional editing for Reels, Shorts, and TikToks optimized for high retention.',
    icon: Play,
  },
  {
    title: 'Apple ID Marketing',
    description: 'Specialized lead generation and account creation marketing strategies.',
    icon: Apple,
  },
  {
    title: 'E-commerce Development',
    description: 'AI-powered, high-converting online stores built for scale and performance.',
    icon: ShoppingBag,
  },
  {
    title: 'Growth Strategy',
    description: 'Full-scale marketing strategies designed to scale your business operations.',
    icon: TrendingUp,
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="bg-accent/10 border border-accent/20 text-accent px-6 py-2 rounded-full text-[14px] font-bold uppercase tracking-[2px] mb-6 inline-block italic">Our Services</span>
          <h2 className="serif-heading text-5xl md:text-6xl mb-6">
            Our <span className="gradient-gold">Digital Expertise</span>
          </h2>
          <p className="text-text-dim max-w-2xl mx-auto">
            From social media dominance to custom high-converting e-commerce platforms — I provide everything you need to grow.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPECIALIZED_SERVICES.map((service, index) => (
            <motion.div 
              key={service.title} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-premium h-full flex flex-col group hover:accent-glow p-8"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/5 border border-white/5 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-black transition-all duration-300">
                <service.icon size={24} />
              </div>
              
              <h3 className="serif-heading text-xl mb-3 group-hover:text-accent transition-colors underline-offset-4 group-hover:underline">
                {service.title}
              </h3>
              
              <p className="text-text-dim text-[13px] leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>

              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-white/50 group-hover:text-accent transition-colors"
              >
                Inquire Now
                <ChevronRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <button 
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary text-sm px-10"
            >
                View Case Studies
                <ChevronRight size={18} />
            </button>
        </div>
      </div>
    </section>
  );
};
