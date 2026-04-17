/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import profilePng from '../../profile.png';

const WHY_WORK_WITH_ME = [
  'Expert in Facebook & Instagram Ad algorithms.',
  'Creative Short Video editor for Reels & TikTok.',
  'High-converting E-commerce website developer.',
  'Proven strategies for YouTube channel growth.',
  'Apple ID marketing for digital infrastructure setup.'
];

export const About = () => {
  const [imgSrc, setImgSrc] = React.useState('/profile.jpeg');
  const [errorCount, setErrorCount] = React.useState(0);

  const handleImgError = () => {
    if (errorCount === 0) {
      setImgSrc('/profile_alt.png');
    } else if (errorCount === 1) {
      setImgSrc(profilePng);
    } else if (errorCount === 2) {
      setImgSrc('https://pollinations.ai/p/professional-portrait-digital-marketing-specialist-man-suit-clean-background-8k?width=800&height=1200&nologo=true');
    }
    setErrorCount(prev => prev + 1);
  };

  return (
    <section id="about" className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Image */}
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="relative"
        >
          <div className="aspect-[2/3] md:aspect-[3/4.5] rounded-[40px] overflow-hidden border border-white/10 bg-white/5 accent-glow">
             <img 
               src={imgSrc} 
               alt="Ashraf - Digital Marketing Specialist" 
               className="w-full h-full object-cover object-top"
               onError={handleImgError}
             />
          </div>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="space-y-8"
        >
          <div>
            <span className="bg-accent/10 border border-accent/20 text-accent px-6 py-2 rounded-full text-[14px] font-bold uppercase tracking-[2px] mb-6 inline-block italic">About Me</span>
            <h2 className="serif-heading text-5xl md:text-6xl mb-6">
              Empowering Brands with <br/> 
              <span className="text-accent">Digital Strategy</span>
            </h2>
          </div>

          <div className="space-y-6 text-text-dim text-[16px] leading-relaxed max-w-xl">
            <p>
              Hi, I’m <span className="text-white font-bold">Ashraf</span> — a passionate and results-driven Digital Marketing Specialist dedicated to helping businesses grow in the digital world.
            </p>
            <p>
              I specialize in powerful social media marketing across Facebook, Instagram, TikTok, and YouTube, creating strategies that increase engagement, build brand awareness, and drive real results. From content planning to execution, I focus on what actually works.
            </p>
            <p>
              I’m also experienced in short video editing, producing eye-catching content that captures attention and keeps audiences engaged. In addition, I provide Apple ID creation support to help clients smoothly set up their digital ecosystem.
            </p>
            <p>
              Beyond marketing, I design and develop modern e-commerce websites that are clean, user-friendly, and optimized for conversions. My goal is simple — to help your business grow faster with smart, effective digital solutions.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {['Social Media Marketing', 'Short Video Editing', 'E-commerce Dev', 'Apple ID Support'].map((badge) => (
              <span key={badge} className="badge-pill text-[11px] px-3">{badge}</span>
            ))}
          </div>

          <div className="bg-secondary-bg/50 border border-border p-8 rounded-[32px] space-y-4">
             <h4 className="font-bold text-white mb-4">Why Work With Me?</h4>
             <div className="space-y-3">
                {WHY_WORK_WITH_ME.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-text-dim leading-snug">{item}</span>
                  </div>
                ))}
             </div>
          </div>

          <button 
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-sm px-10"
          >
            Learn More About Me
            <ChevronRight size={18} />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
