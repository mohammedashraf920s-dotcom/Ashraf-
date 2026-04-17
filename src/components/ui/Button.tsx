/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'neon';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'btn-gradient text-white shadow-lg',
      secondary: 'bg-transparent text-white border border-border hover:bg-white/5',
      outline: 'border border-border bg-transparent hover:bg-white/5 text-white',
      ghost: 'bg-transparent hover:bg-white/5 text-text-dim hover:text-white',
      neon: 'bg-transparent border border-brand-purple/50 text-brand-purple hover:bg-brand-purple/10',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-[11px] uppercase tracking-wider',
      md: 'px-6 py-3 text-sm font-semibold uppercase tracking-wider',
      lg: 'px-8 py-4 text-base font-bold uppercase tracking-widest',
      icon: 'p-2',
    };

    return (
      <motion.button
        whileHover={{ opacity: 0.9 }}
        whileTap={{ scale: 0.98 }}
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-[4px] transition-all focus:outline-none focus:ring-1 focus:ring-brand-blue/30 disabled:opacity-50 disabled:cursor-not-allowed',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };
