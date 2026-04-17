/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Mail, Send, MessageCircle, Linkedin, ChevronRight } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <span className="bg-accent/10 border border-accent/20 text-accent px-8 py-2.5 rounded-full text-[14px] font-bold uppercase tracking-[3px] mb-8 inline-block italic">Get in Touch</span>
              <h2 className="serif-heading text-5xl md:text-6xl mb-6">
                Let's Build Something <br/> 
                <span className="text-accent">Extraordinary</span>
              </h2>
              <p className="text-text-dim text-lg max-w-md leading-relaxed">
                Whether you have a specific project in mind or just want to explore the possibilities of AI in your business, I'm here to help.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Mail, label: 'Email Me', value: 'sheikhhridoy456@gmail.com', href: 'mailto:sheikhhridoy456@gmail.com' },
                { icon: Linkedin, label: 'LinkedIn', value: 'Ashraf Marketo', href: 'https://linkedin.com' },
                { icon: MessageCircle, label: 'WhatsApp', value: '+880 1784 517661', href: 'https://wa.me/8801784517661' }
              ].map((item) => (
                <a 
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? "_blank" : undefined}
                  rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-5 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-secondary-bg border border-border flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-all">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-text-dim uppercase tracking-[2px] mb-1">{item.label}</div>
                    <div className="text-lg font-bold text-white group-hover:text-accent transition-colors">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-premium p-10 lg:p-14"
          >
            <form 
              className="space-y-6" 
              onSubmit={(e) => {
                e.preventDefault();
                (e.target as HTMLFormElement).reset();
              }}
            >
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-widest text-text-dim px-2">Your Name</label>
                <input 
                  type="text" 
                  placeholder="Ashraf Marketo"
                  className="w-full bg-bg/50 border border-border rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-all text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-widest text-text-dim px-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="sheikhhridoy456@gmail.com"
                  className="w-full bg-bg/50 border border-border rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-all text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-widest text-text-dim px-2">Your Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-bg/50 border border-border rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-all text-white resize-none"
                />
              </div>
              
              <button className="btn-primary w-full py-5 text-lg">
                Send Message
                <ChevronRight size={20} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
