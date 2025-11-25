import React, { useState, useEffect } from 'react';
import { NavLink as RouterNavLink, useLocation } from 'react-router-dom';
import { Menu, X, Github, Mail, MapPin, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../constants';

export const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled ? 'bg-anstc-black/90 backdrop-blur-md border-white/10 py-3' : 'bg-transparent border-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <RouterNavLink to="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center">
               <motion.div 
                 className="absolute inset-0 border border-anstc-blue rounded-full"
                 animate={{ rotate: 360 }}
                 transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                 style={{ borderRightColor: 'transparent', borderBottomColor: 'transparent' }}
               />
               <span className="font-tech font-bold text-lg text-white group-hover:text-anstc-blue transition-colors">A</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-bold text-sm tracking-wider font-tech text-white">ANSTC</span>
              <span className="text-[10px] text-gray-500 font-mono tracking-widest">AETHER NEXUS</span>
            </div>
          </RouterNavLink>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <RouterNavLink 
                key={link.path} 
                to={link.path} 
                className={({ isActive }) => `
                  text-xs font-mono tracking-widest uppercase transition-all relative
                  ${isActive ? 'text-anstc-blue' : 'text-gray-400 hover:text-white'}
                `}
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">{link.name}</span>
                    {isActive && (
                      <motion.div 
                        layoutId="nav-underline"
                        className="absolute -bottom-1 left-0 right-0 h-px bg-anstc-blue"
                      />
                    )}
                  </>
                )}
              </RouterNavLink>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-anstc-black pt-24 px-6 md:hidden border-l border-white/10"
          >
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <RouterNavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) => `
                    text-xl font-bold font-tech border-b border-white/5 pb-4 flex justify-between items-center
                    ${isActive ? 'text-anstc-blue border-anstc-blue/30' : 'text-gray-400'}
                  `}
                >
                  {link.name}
                  <ChevronRight size={16} />
                </RouterNavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-16 mt-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-anstc-blue/50 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <span className="font-bold font-tech text-2xl text-white">ANSTC</span>
                <span className="bg-anstc-blue text-black text-[10px] font-bold px-2 py-0.5 rounded-sm">2025-2027</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed max-w-md font-mono">
                渊穹科技综合联合体 (Aether Nexus Science & Technology Corp) <br/>
                徐州市第一中学官方学生科技组织。打破学科壁垒，将课本知识转化为改变现实的技术力量。
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs font-mono">Contact / 联系</h4>
              <div className="space-y-4 text-gray-400 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="mt-1 text-anstc-blue" />
                  <span>中国 · 江苏 · 徐州<br/>徐州市第一中学<br/>总部 A416</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-anstc-blue" />
                  <span>contact@anstc.edu.cn</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs font-mono">Social / 关注</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-anstc-blue hover:text-black hover:border-anstc-blue transition-all duration-300">
                  <Github size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-anstc-blue hover:text-black hover:border-anstc-blue transition-all duration-300">
                  <span className="font-bold text-xs">B</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-700 font-mono">
            <p>&copy; 2025 ANSTC STUDIO. All rights reserved.</p>
            <p>DESIGNED BY ANSTC AI & IT DIVISION</p>
          </div>
        </div>
      </footer>
    </div>
  );
};