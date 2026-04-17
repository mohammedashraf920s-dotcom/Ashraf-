/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Calendar, ChevronRight } from 'lucide-react';

const MARKETING_ARTICLES = [
  {
    pickId: "FB-MKT",
    title: "Facebook Ad Algorithms: How to Win in 2024",
    category: "FACEBOOK MARKETING",
    date: "April 15, 2024",
    image: "https://pollinations.ai/p/cinematic%20digital%20marketing%20dashboard%20facebook%20advertising%20blue%20neon%20tech?width=800&height=500&nologo=true",
    excerpt: "Learn how to master the latest Facebook ad algorithm updates to lower your CPA and increase conversions for your business."
  },
  {
    pickId: "VID-EDT",
    title: "TikTok Growth: Scaling Your Brand with Reels & Shorts",
    category: "SHORT VIDEO CONTENT",
    date: "April 10, 2024",
    image: "https://pollinations.ai/p/viral%20video%20editing%20workspace%20colorful%20neon%20lights%20smartphone%20tiktok?width=800&height=500&nologo=true",
    excerpt: "The secret to virality isn't luck. Discover how our short-form video editing techniques drive millions of organic views."
  },
  {
    pickId: "WEB-DEV",
    title: "E-commerce Website Strategy for High Conversion",
    category: "WEB DEVELOPMENT",
    date: "March 28, 2024",
    image: "https://pollinations.ai/p/luxury%20ecommerce%20website%20design%20laptop%20screen%20minimalist%20gold%20tones?width=800&height=500&nologo=true",
    excerpt: "Building a store is easy, but making it sell is hard. We explore the essential UX/UI elements every e-commerce brand needs."
  },
  {
    pickId: "ADV-IDX",
    title: "Apple ID Marketing: Building Secure Digital Pipelines",
    category: "SPECIALIZED MARKETING",
    date: "March 15, 2024",
    image: "https://pollinations.ai/p/abstract%20cyber%20security%20digital%20network%20glowing%20lines%20complex%20infrastructure?width=800&height=500&nologo=true",
    excerpt: "A deep dive into how we create robust digital infrastructures for client acquisition through specialized account marketing."
  },
  {
    pickId: "YT-SEO",
    title: "YouTube SEO: Dominating Search Result Rankings",
    category: "YOUTUBE MARKETING",
    date: "March 02, 2024",
    image: "https://pollinations.ai/p/professional%20youtube%20studio%20lighting%20camera%20content%20creation%20modern%20setup?width=800&height=500&nologo=true",
    excerpt: "Stop uploading and start ranking. Master the keywords, tags, and engagement metrics that force the algorithm to recommend your content."
  },
  {
    pickId: "IG-BRD",
    title: "Instagram Aesthetic: Crafting a Luxury Brand Voice",
    category: "INSTAGRAM MARKETING",
    date: "Feb 20, 2024",
    image: "https://pollinations.ai/p/luxury%20instagram%20profile%20aesthetic%20lifestyle%20gold%20and%20black%20theme?width=800&height=500&nologo=true",
    excerpt: "How to use Instagram to build high-end brand loyalty and visual storytelling that converts followers into paying customers."
  }
];

export const Blog = () => {
  return (
    <section id="blog" className="py-24 bg-bg border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="bg-accent/10 border border-accent/20 text-accent px-8 py-2.5 rounded-full text-[14px] font-bold uppercase tracking-[3px] mb-8 inline-block italic">Insights & Strategy</span>
          <h2 className="serif-heading text-6xl md:text-8xl">
            Marketing <span className="text-accent">Blog</span>
          </h2>
          <p className="text-text-dim mt-8 max-w-2xl mx-auto text-lg leading-relaxed">
             Expert marketing advice and digital strategies to help your business scale in an ever-evolving digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {MARKETING_ARTICLES.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="bg-secondary-bg/20 border border-white/10 rounded-[40px] overflow-hidden flex flex-col h-full hover:border-accent/40 transition-all duration-500 hover:accent-glow">
                <div className="aspect-[16/11] overflow-hidden relative bg-accent/5">
                   <img 
                     src={post.image} 
                     alt={post.title} 
                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                     referrerPolicy="no-referrer"
                     onError={(e) => {
                       (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${post.pickId}/800/500`;
                     }}
                   />
                   <div className="absolute top-6 right-6 font-mono text-[10px] text-white/50 tracking-[2px] uppercase bg-black/40 px-3 py-1.5 rounded-md backdrop-blur-md border border-white/10">
                    ID: {post.pickId}
                  </div>
                </div>
                <div className="p-10 space-y-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between">
                     <span className="text-[11px] font-black text-accent tracking-[4px] uppercase">{post.category}</span>
                     <div className="flex items-center gap-2 text-text-dim text-[11px] font-bold uppercase tracking-wider">
                        <Calendar size={14} className="text-accent/50" />
                        {post.date}
                     </div>
                  </div>
                  <h3 className="serif-heading text-3xl md:text-4xl group-hover:text-accent transition-colors duration-300 leading-tight">{post.title}</h3>
                  <p className="text-[15px] text-text-dim leading-relaxed line-clamp-2 font-medium">
                    {post.excerpt}
                  </p>
                  <div className="pt-6 flex items-center gap-3 text-xs font-black text-white group/btn uppercase tracking-[3px] border-t border-white/10 mt-auto group-hover:text-accent transition-colors">
                     Read Strategy
                     <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-20 text-center">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary px-12 py-4"
            >
                Get Custom Strategy
                <ChevronRight size={20} />
            </button>
        </div>
      </div>
    </section>
  );
};
