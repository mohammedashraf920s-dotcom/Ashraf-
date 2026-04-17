/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ExternalLink, Github, Instagram, Linkedin, Twitter, Facebook } from 'lucide-react';
import { NAV_LINKS } from '@/src/constants';

const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-bg flex flex-col items-center gap-8 px-10 text-[14px] text-text-dim">
      <div className="flex gap-8">
        {[
          { label: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/share/18Mghu7spM/?mibextid=wwXIfr' },
          { label: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/ashraf_920s?igsh=MWw3cWYyam1lc2lucg==' },
          { label: 'TikTok', icon: TikTokIcon, href: '#' },
          { label: 'LinkedIn', icon: Linkedin, href: '#' }
        ].map((social) => (
          <a 
            key={social.label} 
            href={social.href} 
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-black transition-all"
            title={social.label}
          >
            <social.icon size={20} />
          </a>
        ))}
      </div>
      <div>&copy; {new Date().getFullYear()} Ashraf Marketo. All Rights Reserved.</div>
    </footer>
  );
};
