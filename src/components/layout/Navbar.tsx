/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/src/constants';
import { Button } from '@/src/components/ui/Button';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ['rgba(10, 10, 9, 0)', 'rgba(10, 10, 9, 0.9)']
  );

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Blog', href: '#blog' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      style={{ backgroundColor }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/[0.05] backdrop-blur-md"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 h-[90px] flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="text-2xl font-bold tracking-tight">
            <span className="text-accent">Ashraf</span> <span className="text-white">Marketo</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[14px] font-medium text-text-dim hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-sm px-7 py-2.5"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-[90px] left-0 right-0 bg-secondary-bg border-b border-white/5 p-8 flex flex-col gap-6"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xl font-medium text-text-dim hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <button 
            onClick={() => {
              setIsOpen(false);
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary w-full py-4 text-lg"
          >
            Hire Me
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
};
