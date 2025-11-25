import React from 'react';
import { motion } from 'framer-motion';
import { Department } from '../types';

export const SectionHeader: React.FC<{ title: string; subtitle: string; className?: string }> = ({ title, subtitle, className = "" }) => (
  <div className={`mb-16 text-center ${className}`}>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-black text-white mb-4 font-tech uppercase tracking-tighter"
    >
      {title}
    </motion.h2>
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: 100 }}
      viewport={{ once: true }}
      className="h-1 bg-anstc-blue mx-auto mb-4"
    />
    <motion.p 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="text-gray-500 font-mono text-sm tracking-widest"
    >
      {subtitle}
    </motion.p>
  </div>
);

export const DeptCard: React.FC<{ dept: Department; index: number }> = ({ dept, index }) => {
  const Icon = dept.icon;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="group relative h-full bg-anstc-card border border-white/10 overflow-hidden flex flex-col"
    >
      {/* Header with Color Accent */}
      <div className={`h-1 w-full bg-gradient-to-r from-transparent via-${dept.color.replace('border-', '')} to-transparent opacity-50`}></div>
      
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-start mb-6">
           <div className={`w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-gray-200 group-hover:text-white group-hover:bg-white/10 transition-colors border border-white/5 ${dept.color.replace('border', 'group-hover:border')}`}>
              <Icon size={24} strokeWidth={1.5} />
           </div>
           <span className="font-mono text-[10px] text-gray-600 border border-white/10 px-2 py-1 rounded-full">{dept.id}</span>
        </div>

        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-anstc-blue transition-colors">{dept.name}</h3>
        <p className="text-xs font-mono text-gray-500 uppercase tracking-tight mb-4">{dept.englishName}</p>
        
        <p className="text-sm text-gray-400 leading-relaxed">
          {dept.description}
        </p>
      </div>

      <div className="px-6 py-4 bg-black/20 border-t border-white/5 mt-auto flex justify-between items-center">
         <span className="text-[10px] text-gray-600 font-mono">STATUS: ACTIVE</span>
         <div className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
      </div>
    </motion.div>
  );
};