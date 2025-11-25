import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Rocket, Users, Target } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 z-0 bg-anstc-black">
          <div className="absolute inset-0 bg-grid-pattern bg-[size:50px_50px] opacity-[0.07]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-anstc-black/20 via-transparent to-anstc-black"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 border border-anstc-blue/30 bg-anstc-blue/5 px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-anstc-blue animate-pulse"></span>
            <span className="text-anstc-blue font-mono text-xs tracking-wider">GEN-EX-2025-10-01 // 改组完成</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight mb-6 font-sans leading-none"
          >
            渊穹科技<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">综合联合体</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto font-light mb-12"
          >
            Aether Nexus Science & Technology Corporation
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <NavLink to="/structure" className="group relative px-8 py-4 bg-white text-black font-bold font-mono tracking-widest overflow-hidden min-w-[200px]">
              <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center justify-center gap-2">
                探索架构 <ArrowRight size={16} />
              </span>
              <div className="absolute inset-0 bg-anstc-blue transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
            </NavLink>
            <NavLink to="/recruitment" className="px-8 py-4 border border-white/20 text-white font-mono tracking-widest hover:bg-white/5 transition-colors min-w-[200px]">
              申请加入
            </NavLink>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-600"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* Vision Statement */}
      <section className="py-24 bg-anstc-dark relative overflow-hidden">
        <div className="absolute right-0 top-0 opacity-10 pointer-events-none">
             <div className="text-[200px] font-black text-white stroke-text leading-none opacity-20 truncate">VISION</div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-anstc-blue pl-6">
              发展宗旨与愿景 <br/>
              <span className="text-anstc-blue text-lg font-mono font-normal block mt-2">DEVELOPMENT VISION</span>
            </h2>
            
            <div className="space-y-8 text-gray-300 leading-relaxed text-lg">
              <p>
                渊穹科技综合联合体（原渊穹科学联合技术集团）是徐州一中校方指导下的学生科技自治组织。
                2025年，我们正式完成改组，构建了结构清晰、管理科学、运行高效的"工作室-核心管理-分科"三级架构。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
                <div className="bg-white/5 p-6 border border-white/10 rounded-sm">
                   <Target className="text-anstc-blue mb-4" size={32} />
                   <h3 className="font-bold text-white mb-2">项目驱动</h3>
                   <p className="text-sm text-gray-400">以学生兴趣为导向，鼓励自主组建项目，将理论转化为实践。</p>
                </div>
                <div className="bg-white/5 p-6 border border-white/10 rounded-sm">
                   <Users className="text-anstc-blue mb-4" size={32} />
                   <h3 className="font-bold text-white mb-2">学长引路</h3>
                   <p className="text-sm text-gray-400">引入"渊穹技术应用综合工作室"，连接已毕业校友资源，提供前沿指导。</p>
                </div>
                <div className="bg-white/5 p-6 border border-white/10 rounded-sm">
                   <Rocket className="text-anstc-blue mb-4" size={32} />
                   <h3 className="font-bold text-white mb-2">规范发展</h3>
                   <p className="text-sm text-gray-400">在校方德育处指导下合规开展活动，设立安全总科保障运行安全。</p>
                </div>
              </div>
              <p>
                我们不仅仅是一个兴趣小组，更是一个模拟未来科技企业的孵化器。无论你是热衷于<span className="text-white font-bold">航空航天</span>的精密计算，
                还是<span className="text-white font-bold">人工智能</span>的逻辑构建，亦或是<span className="text-white font-bold">人文艺术</span>的创作，
                这里都有属于你的阵地。
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};