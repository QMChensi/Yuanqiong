import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/UI';
import { Newspaper, Coins, School, GraduationCap, Briefcase } from 'lucide-react';

export const Activities = () => {
  return (
    <div className="min-h-screen bg-anstc-black pb-24">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="Studio & Projects" 
          subtitle="工作室职能与项目生态 // ECOSYSTEM"
          className="pt-10"
        />

        {/* Studio Section */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 p-8 rounded-sm"
            >
               <div className="flex items-center gap-3 mb-6">
                 <Briefcase className="text-anstc-gold" size={32} />
                 <h3 className="text-2xl font-bold font-tech text-white">渊穹技术应用综合工作室</h3>
               </div>
               <p className="text-gray-400 leading-relaxed mb-6">
                 由联合体创始人成立，汇聚已毕业的精英学长与外部专业人员。它不仅仅是最高领导层，更是连接高中校园与前沿产业的桥梁。
               </p>
               <ul className="space-y-4">
                 <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-anstc-gold mt-2 flex-shrink-0" />
                    <span className="text-sm text-gray-300"><strong>文创补给站：</strong> 自主设计并拥有版权的一中/ANSTC文创产品开发。</span>
                 </li>
                 <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-anstc-gold mt-2 flex-shrink-0" />
                    <span className="text-sm text-gray-300"><strong>技术支援：</strong> 为校方提供专业级航拍、技术指导及资源对接。</span>
                 </li>
                 <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-anstc-gold mt-2 flex-shrink-0" />
                    <span className="text-sm text-gray-300"><strong>生涯引航：</strong> 为在校生提供大学专业选择建议与行业前瞻。</span>
                 </li>
               </ul>
            </motion.div>

            <div className="grid grid-cols-1 gap-6">
               <motion.div 
                 whileHover={{ y: -5 }}
                 className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 p-6 rounded-sm"
               >
                 <div className="flex justify-between items-start mb-4">
                   <Newspaper className="text-purple-400" />
                   <span className="text-[10px] font-mono text-purple-400 border border-purple-500/30 px-2 py-0.5 rounded-full">MONTHLY</span>
                 </div>
                 <h4 className="text-xl font-bold text-white mb-2">墨枢奇点新媒介报</h4>
                 <p className="text-xs text-gray-400">
                   每月一期的高质量科技校刊。包含技术前沿、行业应用、心理健康、断网补全计划等版块。
                 </p>
               </motion.div>

               <motion.div 
                 whileHover={{ y: -5 }}
                 className="bg-gradient-to-br from-green-900/20 to-black border border-green-500/20 p-6 rounded-sm"
               >
                 <div className="flex justify-between items-start mb-4">
                   <Coins className="text-green-400" />
                   <span className="text-[10px] font-mono text-green-400 border border-green-500/30 px-2 py-0.5 rounded-full">FUNDING</span>
                 </div>
                 <h4 className="text-xl font-bold text-white mb-2">渊穹德育与科研基金</h4>
                 <p className="text-xs text-gray-400">
                   提取文创利润的20%设立专项基金，反哺学校德育活动与学生科研项目。单次申请额度500-1000元。
                 </p>
               </motion.div>
            </div>
          </div>
        </section>

        {/* Activity Types */}
        <SectionHeader 
          title="Events & Collaboration" 
          subtitle="活动开展机制 // MECHANISM"
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             {
               icon: School,
               title: "校内大型活动",
               desc: "如科技节、体育节。由综合主管统筹，联合体各部门联动（航拍、急救、摄影）提供全方位支持。"
             },
             {
               icon: GraduationCap,
               title: "自主科研项目",
               desc: "鼓励成员自行组建课题组。经总辖构件科批准后，可获得资金支持与工作室技术指导。"
             },
             {
               icon: Briefcase,
               title: "外部联动",
               desc: "组织校外参访、春游等活动。工作室协调校外专业资源，拓展学生视野。"
             }
           ].map((item, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="text-center p-6"
             >
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 text-anstc-blue">
                  <item.icon size={32} />
                </div>
                <h4 className="text-lg font-bold text-white mb-3">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.desc}</p>
             </motion.div>
           ))}
        </div>
      </div>
    </div>
  );
};