import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DivisionType } from '../types';
import { DEPARTMENTS } from '../constants';
import { DeptCard, SectionHeader } from '../components/UI';

export const Structure = () => {
  const [activeTab, setActiveTab] = useState<DivisionType | 'ALL'>('ALL');

  const filteredDepts = activeTab === 'ALL' 
    ? DEPARTMENTS 
    : DEPARTMENTS.filter(d => d.type === activeTab);

  const tabs = [
    { id: 'ALL', label: '全部' },
    { id: DivisionType.MANAGEMENT, label: '核心管理' },
    { id: DivisionType.RESEARCH, label: '科研科' },
    { id: DivisionType.ADMIN, label: '事务科' },
    { id: DivisionType.COMPREHENSIVE, label: '综合科' },
    { id: DivisionType.SAFETY, label: '安全科' },
  ];

  return (
    <div className="min-h-screen bg-anstc-black pb-24">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="Organization Structure" 
          subtitle="核心架构 // STRATEGIC DIVISIONS"
          className="pt-10"
        />

        {/* Introduction to Management Structure */}
        <div className="mb-12 max-w-5xl mx-auto bg-gradient-to-r from-anstc-blue/10 to-transparent border-l-2 border-anstc-blue p-6 text-gray-300 text-sm md:text-base">
          <p className="mb-4"><strong className="text-white">三级管理体制：</strong></p>
          <ul className="list-disc list-inside space-y-2 font-mono text-xs md:text-sm">
             <li><span className="text-anstc-blue">L1 顶层决策</span> - 渊穹技术应用综合工作室（校友/创始人）</li>
             <li><span className="text-anstc-blue">L2 核心执行</span> - 四大主管 (CTO, CAO, CCO, CSO) + 总辖构件科</li>
             <li><span className="text-anstc-blue">L3 职能部门</span> - 各科室下属具体技术与行政部门</li>
          </ul>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-6 py-2 rounded-sm text-sm font-mono tracking-wider transition-all border ${
                activeTab === tab.id 
                  ? 'bg-white text-black border-white' 
                  : 'bg-transparent text-gray-500 border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredDepts.map((dept, idx) => (
             <DeptCard key={dept.id} dept={dept} index={idx} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};