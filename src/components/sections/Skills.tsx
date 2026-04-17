/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { SKILLS } from '@/src/constants';

export const Skills = () => {
  return (
    <div className="space-y-8">
       <span className="text-[10px] uppercase tracking-[2px] text-text-dim block mb-3">Skills</span>
       {Object.values(SKILLS).flat().slice(0, 6).map((skill) => (
         <div key={skill.name} className="space-y-2">
           <div className="flex justify-between text-[12px] font-medium">
             <span className="text-gray-300">{skill.name}</span>
             <span className="text-brand-blue">{skill.level}%</span>
           </div>
           <div className="h-[4px] w-full bg-border rounded-full overflow-hidden">
             <motion.div
               initial={{ width: 0 }}
               whileInView={{ width: `${skill.level}%` }}
               transition={{ duration: 1.5, ease: "easeOut" }}
               viewport={{ once: true }}
               className="h-full bg-brand-blue rounded-full"
             />
           </div>
         </div>
       ))}
    </div>
  );
};
