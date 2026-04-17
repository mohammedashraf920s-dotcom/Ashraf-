/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from 'react';
import { motion } from 'motion/react';
import { Calendar, MousePointer2, Briefcase } from 'lucide-react';

const profileImg = '/profile.jpeg';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 px-6 lg:px-20 overflow-hidden bg-bg">
      <div className="max-w-[1440px] mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h1 className="serif-heading text-5xl md:text-7xl lg:text-8xl mb-8">
            Digital <br/>
            <span className="gradient-gold">Marketing</span> <br/>
            <span className="gradient-gold">Specialist.</span>
          </h1>

          <div className="flex flex-wrap gap-3 mb-8">
            {['Facebook & Instagram', 'TikTok & YouTube', 'Short Video Editing', 'E-commerce Dev'].map((badge) => (
              <span key={badge} className="badge-pill">{badge}</span>
            ))}
          </div>

          <p className="text-lg md:text-xl text-text-dim mb-10 max-w-xl leading-relaxed">
            I help businesses grow with powerful social media marketing, high-converting e-commerce solutions, and short video content.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary w-full sm:w-auto"
            >
              <Calendar size={18} />
              Book a Consultation
            </button>
          </div>
        </motion.div>

        {/* Right Content - Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[500px] aspect-[4/5] rounded-[40px] overflow-hidden bg-white/5 border border-white/10 accent-glow">
            <img 
              src={profileImg} 
              alt="Ashraf - Digital Marketing Specialist" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const img = e.target as HTMLImageElement;
                // Avoid infinite loops
                if (img.dataset.errorAttempted) return;
                
                if (img.src.includes('profile.jpeg')) {
                  img.src = '/profile_alt.png';
                } else if (img.src.includes('profile_alt.png')) {
                  img.dataset.errorAttempted = 'true';
                  img.src = 'https://pollinations.ai/p/professional-digital-marketing-specialist-man-blazer-vintage-aesthetic-cinematic-8k?width=800&height=1000&nologo=true';
                }
              }}
            />
            
            {/* Project Deliver Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-8 right-8 bg-[#1a1a1a]/80 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-3 shadow-2xl z-20"
            >
               <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent shadow-[0_0_15px_rgba(255,190,51,0.3)]">
                 <Briefcase size={20} />
               </div>
               <div>
                  <div className="text-xl font-bold leading-none text-white">50+</div>
                  <div className="text-[10px] text-text-dim uppercase tracking-tighter">Projects Delivered</div>
               </div>
            </motion.div>

            {/* Status Indicator */}
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-8 left-8 bg-[#0a0a0a]/90 backdrop-blur-md border border-white/20 px-5 py-2.5 rounded-full flex items-center gap-3 shadow-2xl z-20"
            >
               <span className="relative flex h-3 w-3">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
               </span>
               <span className="text-sm font-semibold text-white">Open for Projects</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full p-1 flex justify-center">
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-accent rounded-full"
          />
        </div>
      </div>
    </section>
  );
};
