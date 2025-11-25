import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/UI';
import { FileText, UserCheck, Video, ClipboardCheck } from 'lucide-react';
import { RecruitmentStep } from '../types';

const STEPS: RecruitmentStep[] = [
  {
    step: 1,
    title: "宣讲与了解",
    desc: "在新高一各班播放招新视频（20分钟）。了解联合体架构与文化。"
  },
  {
    step: 2,
    title: "领取申请书",
    desc: "前往总部 A416 门口处领取纸质申请书，填写完毕后放回回执袋。"
  },
  {
    step: 3,
    title: "审核与录用",
    desc: "人事部与行政主管筛选申请书，录入人员信息库。制作专属录用信与胸牌。"
  },
  {
    step: 4,
    title: "送达与入职",
    desc: "录用文件袋将在1-2个工作日内由人事部专人送至班级。内含部门胸牌与操作凭证。"
  }
];

export const Recruitment = () => {
  return (
    <div className="min-h-screen bg-anstc-black pb-24">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="Join Us" 
          subtitle="招新流程 // RECRUITMENT PROCESS"
          className="pt-10"
        />

        {/* Steps Timeline */}
        <div className="relative max-w-4xl mx-auto mb-20">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12">
            {STEPS.map((step, index) => (
              <motion.div 
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Icon Bubble */}
                <div className="w-12 h-12 rounded-full bg-anstc-blue text-black font-bold flex items-center justify-center z-10 border-4 border-anstc-black shrink-0">
                  {step.step}
                </div>

                {/* Content Card */}
                <div className={`flex-1 w-full p-6 bg-white/5 border border-white/10 rounded-sm hover:border-anstc-blue/50 transition-colors ${index % 2 === 1 ? 'md:text-right' : 'md:text-left'} text-center`}>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </div>
                
                {/* Spacer for alternate side */}
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Special Instructions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
           <div className="bg-red-900/10 border border-red-500/20 p-8 rounded-sm">
              <h3 className="text-red-400 font-bold font-mono mb-4 flex items-center gap-2">
                <ClipboardCheck size={20} />
                特殊岗位说明
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                若申请<strong className="text-white">航拍技术部</strong>或<strong className="text-white">摄影技术部</strong>：<br/>
                请勿直接投递普通申请书。请自行寻找人事部部长或行政主管报备详细信息（包含自有设备型号）。
                <br/><br/>
                <span className="text-red-300 text-xs">注意：联合体将为通过考核的专业设备操作人员颁发正式操作证明与挂绳，大型活动时必须佩戴。</span>
              </p>
           </div>

           <div className="bg-blue-900/10 border border-blue-500/20 p-8 rounded-sm">
              <h3 className="text-blue-400 font-bold font-mono mb-4 flex items-center gap-2">
                <UserCheck size={20} />
                换届与管理
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                实行 <strong className="text-white">1+1 换届制度</strong>。<br/>
                管理层由一名高二（正职）与一名高一（预备）组成。高三自动卸任。
                <br/><br/>
                有意组建个人工作室或新部门？请填写《项目申请书》找行政主管曹一龙（高二1班）报备，经批准后可获得官方支持与资金。
              </p>
           </div>
        </div>

      </div>
    </div>
  );
};