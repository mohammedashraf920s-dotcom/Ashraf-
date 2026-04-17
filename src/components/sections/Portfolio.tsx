/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ExternalLink, CheckCircle2, ShoppingCart, Layout, Globe, ChevronRight, Play, Smartphone, Share2 } from 'lucide-react';
import { getGeneratedImage } from '@/src/lib/imageGenerator';

const CASE_STUDIES = [
  {
    pickId: 'EC-01',
    title: 'ShopMaster',
    tag: 'AI POWERED E-COMMERCE SOLUTION',
    description: 'Built a complete automated e-commerce system that handles inventory, orders, and customer support — reducing manual work by 80%.',
    solution: 'End-to-end sales funnel with AI-powered customer support and automated order processing.',
    stats: [
      { label: 'Time Saved', value: '80%' },
      { label: 'Revenue Boost', value: '3x' }
    ],
    image: getGeneratedImage('ShopMaster', 'AI e-commerce dashboard and automated storefront'),
    icon: ShoppingCart
  },
  {
    pickId: 'SM-05',
    title: 'Viral TikTok Engine',
    tag: 'SOCIAL MEDIA GROWTH CAMPAIGN',
    description: 'Generated 5M+ views for a boutique brand using data-driven hooks and professional short-form editing.',
    solution: 'High-retention video editing paired with trend-prediction algorithms for maximum reach.',
    stats: [
      { label: 'Views Generated', value: '5M+' },
      { label: 'Engagement', value: '18%' }
    ],
    image: getGeneratedImage('Viral TikTok', 'Professional video editing workspace and viral social media analytics'),
    icon: Share2
  },
  {
    pickId: 'LD-12',
    title: 'Apple ID Lead Gen',
    tag: 'SPECIALIZED MARKETING PIPELINE',
    description: 'Developed a custom digital infrastructure marketing system for high-volume lead generation.',
    solution: 'Automated landing pages with secure validation and seamless account integration.',
    stats: [
      { label: 'Leads/Day', value: '200+' },
      { label: 'Accuracy', value: '99.9%' }
    ],
    image: getGeneratedImage('Apple ID Marketing', 'Sleek smartphone interface and digital marketing security'),
    icon: Layout
  },
  {
    pickId: 'YT-08',
    title: 'YouTube Dominance',
    tag: 'CHANNEL SCALE STRATEGY',
    description: 'Scaled a tech channel from 0 to 50k subscribers in 4 months using strategic SEO and thumbnail optimization.',
    solution: 'Custom SEO frameworks and high-CTR thumbnail design systems built for the YouTube algorithm.',
    stats: [
      { label: 'Subscribers', value: '50K+' },
      { label: 'CTR Growth', value: '4x' }
    ],
    image: getGeneratedImage('YouTube Growth', 'Professional video studio and viral thumbnail analytics'),
    icon: Play
  },
  {
    pickId: 'BA-03',
    title: 'Global Brand Launch',
    tag: 'MARKETING ARCHITECTURE',
    description: 'Developed the complete marketing ecosystem for a luxury fashion brand entering the South Asian market.',
    solution: 'Omni-channel presence with unified messaging across Instagram, Pinterest, and personal shopping avenues.',
    stats: [
      { label: 'Market Share', value: '15%' },
      { label: 'Brand Loyalty', value: 'High' }
    ],
    image: getGeneratedImage('Luxury Brand Launch', 'Premium fashion marketing and retail architecture'),
    icon: Globe
  }
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="bg-accent/10 border border-accent/20 text-accent px-8 py-2.5 rounded-full text-[14px] font-bold uppercase tracking-[3px] mb-8 inline-block italic">Selected Works</span>
          <h2 className="serif-heading text-6xl md:text-7xl">
            Case <span className="text-accent">Studies</span>
          </h2>
          <p className="text-text-dim mt-6 max-w-2xl mx-auto">
             Real solutions I've built for real businesses — focused on automation, efficiency, and measurable results.
          </p>
        </div>

        <div className="space-y-32">
          {CASE_STUDIES.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="aspect-video rounded-[32px] overflow-hidden border border-border bg-white/5 accent-glow relative">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${study.pickId}/800/450`;
                    }}
                  />
                  <div className="absolute top-6 left-6 w-12 h-12 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-accent z-10">
                    <study.icon size={24} />
                  </div>
                  <div className="absolute bottom-6 right-6 bg-accent text-black font-black text-[12px] px-4 py-1.5 rounded-full shadow-xl">
                    ID: {study.pickId}
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div>
                   <span className="text-[10px] font-bold text-accent tracking-[2px] uppercase mb-3 block">{study.tag}</span>
                   <h3 className="serif-heading text-4xl md:text-5xl mb-6">{study.title}</h3>
                   <p className="text-text-dim text-lg leading-relaxed">{study.description}</p>
                </div>

                <div className="bg-secondary-bg/50 border border-border p-6 rounded-2xl">
                   <div className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-accent shrink-0 mt-1" />
                      <div>
                         <span className="text-[11px] font-bold text-white uppercase tracking-widest block mb-2">The Solution</span>
                         <p className="text-sm text-text-dim leading-relaxed">{study.solution}</p>
                      </div>
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                   {study.stats.map(stat => (
                     <div key={stat.label} className="bg-secondary-bg/30 border border-border p-4 rounded-xl text-center">
                        <div className="text-2xl font-bold text-accent">{stat.value}</div>
                        <div className="text-[10px] text-text-dim uppercase tracking-widest mt-1">{stat.label}</div>
                     </div>
                   ))}
                </div>

                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-outline text-xs px-8 py-3.5 group"
                >
                  View Case Study
                  <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-32 text-center">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary px-12 py-4"
          >
             Start Your Project
             <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};
