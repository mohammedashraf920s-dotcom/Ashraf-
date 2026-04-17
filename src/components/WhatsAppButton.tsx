/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/8801784517661" 
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-shadow"
    >
      <MessageCircle size={32} />
    </motion.a>
  );
};
