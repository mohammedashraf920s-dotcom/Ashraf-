/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Play, Star, Quote, ChevronRight, Facebook, Instagram } from 'lucide-react';

const REVIEWS = [
  {
    id: "REV-001",
    name: "John Anderson",
    role: "CEO, TechFlow Solutions",
    content: "Ashraf's digital marketing strategy completely transformed our online presence. Our conversion rate increased by 40% in just three months.",
    type: "VIDEO REVIEW",
    thumbnail: "https://pollinations.ai/p/professional-businessman-office-cinematic-lighting-8k?width=800&height=500&nologo=true",
    link: "#"
  },
  {
    id: "REV-002",
    name: "Sarah Jenkins",
    role: "Marketing Director, GlowUp Ecommerce",
    content: "The TikTok content creation and short video editing is top-notch. Our branch reached 1M views organically with his strategy.",
    type: "VIDEO REVIEW",
    thumbnail: "https://pollinations.ai/p/creative-studio-marketing-agency-happy-client-8k?width=800&height=500&nologo=true",
    link: "#"
  },
  {
    id: "REV-003",
    name: "David Chen",
    role: "Owner, Chen Digital Agency",
    content: "Mastering Facebook algorithms isn't easy, but Ashraf makes it look like play. Truly an expert in the paid ads field.",
    type: "CASE STUDY",
    thumbnail: "https://pollinations.ai/p/modern-corporate-meeting-room-success-vibe-8k?width=800&height=500&nologo=true",
    link: "#"
  },
  {
    id: "REV-004",
    name: "Michael Roberts",
    role: "Founder, Zenith Gear",
    content: "The Instagram ad campaign Ashraf ran generated a 5x ROAS for our winter collection. His attention to detail and creative hooks are unmatched.",
    type: "VIDEO REVIEW",
    thumbnail: "https://pollinations.ai/p/professional-entrepreneur-startup-office-cinematic-8k?width=800&height=500&nologo=true",
    link: "#"
  },
  {
    id: "REV-005",
    name: "Emily Watson",
    role: "CEO, Watson Lifestyle",
    content: "Our YouTube channel subscriber growth doubled within two months of implementing Ashraf's content strategy. Highly recommended!",
    type: "VIDEO REVIEW",
    thumbnail: "https://pollinations.ai/p/successful-female-ceo-modern-office-bright-lighting-8k?width=800&height=500&nologo=true",
    link: "#"
  },
  {
    id: "REV-006",
    name: "Robert King",
    role: "Marketing Manager, Prime Realty",
    content: "The lead generation funnel Ashraf built for our real estate business has been a game-changer. The quality of leads is incredible.",
    type: "CASE STUDY",
    thumbnail: "https://pollinations.ai/p/real-estate-office-professional-marketing-meeting-8k?width=800&height=500&nologo=true",
    link: "#"
  }
];

export const Testimonials = () => {
  return (
    <section id="reviews" className="py-24 bg-bg border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="bg-accent/10 border border-accent/20 text-accent px-8 py-2.5 rounded-full text-[14px] font-bold uppercase tracking-[3px] mb-8 inline-block italic">Customer Success</span>
          <h2 className="serif-heading text-6xl md:text-8xl">
            Client <span className="text-accent">Reviews</span>
          </h2>
          <p className="text-text-dim mt-8 max-w-2xl mx-auto text-lg leading-relaxed">
             Hear directly from our global clients who have scaled their businesses using our advanced marketing strategies and creative solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-secondary-bg/20 border border-white/10 rounded-[40px] overflow-hidden flex flex-col h-full hover:border-accent/40 transition-all duration-500 hover:accent-glow">
                {/* Video Placeholder Card */}
                <div className="aspect-[16/11] overflow-hidden relative group/video">
                   <img 
                     src={review.thumbnail} 
                     alt={review.name} 
                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                     referrerPolicy="no-referrer"
                     onError={(e) => {
                        const img = e.target as HTMLImageElement;
                        img.src = `https://picsum.photos/seed/${review.id}/800/500`;
                     }}
                   />
                   <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover/video:bg-black/20 transition-all">
                      <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center text-white shadow-[0_0_30px_rgba(255,184,0,0.5)] group-hover/video:scale-110 transition-transform cursor-pointer">
                        <Play size={32} fill="white" />
                      </div>
                   </div>
                   <div className="absolute top-6 left-6 font-mono text-[10px] text-white/50 tracking-[2px] uppercase bg-black/40 px-3 py-1.5 rounded-md backdrop-blur-md border border-white/10">
                    ID: {review.id}
                  </div>
                </div>

                <div className="p-10 space-y-6 flex flex-col flex-grow">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="#FFB800" className="text-accent" />
                    ))}
                  </div>
                  
                  <div className="relative">
                    <Quote className="absolute -top-4 -left-4 text-accent/10" size={40} />
                    <p className="text-[16px] text-text-dim leading-relaxed font-medium italic relative z-10">
                      "{review.content}"
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/10 mt-auto">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xl font-bold text-white mb-1">{review.name}</div>
                        <div className="text-[11px] font-bold text-accent uppercase tracking-widest">{review.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Proof CTA */}
        <div className="mt-24 lg:mt-32 p-12 lg:p-20 rounded-[60px] bg-gradient-to-br from-accent/10 to-transparent border border-accent/20 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="text-center lg:text-left">
                <h3 className="serif-heading text-4xl md:text-5xl mb-6">Join 500+ Happy Clients</h3>
                <p className="text-text-dim text-lg max-w-xl">
                    Ready to scale your business? Let's discuss your custom digital transformation strategy today.
                </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6">
                <a 
                    href="https://wa.me/8801784517661"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary px-10 py-5 text-lg"
                >
                    Book a Free Call
                    <ChevronRight size={20} />
                </a>
                <div className="flex gap-4">
                    <a 
                        href="https://www.facebook.com/share/18Mghu7spM/?mibextid=wwXIfr" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-black transition-all"
                    >
                        <Facebook size={24} />
                    </a>
                    <a 
                        href="https://www.instagram.com/ashraf_920s?igsh=MWw3cWYyam1lc2lucg==" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-black transition-all"
                    >
                        <Instagram size={24} />
                    </a>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
