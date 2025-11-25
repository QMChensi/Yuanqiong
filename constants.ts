import { 
  Rocket, Cpu, Microscope, Atom, Zap, FlaskConical, 
  ShieldAlert, Database, Swords, Settings, Wallet, 
  Users, Truck, Megaphone, Calendar, Brain, PenTool, 
  Camera, Radio, Palette, Stethoscope, Gamepad2, 
  Crown, Briefcase
} from 'lucide-react';
import { Department, DivisionType } from './types';

export const NAV_LINKS = [
  { name: '首页', path: '/' },
  { name: '组织架构', path: '/structure' },
  { name: '工作室与项目', path: '/activities' },
  { name: '招新与加入', path: '/recruitment' },
];

export const DEPARTMENTS: Department[] = [
  // --- Management ---
  {
    id: 'STUDIO',
    name: '渊穹技术应用综合工作室',
    englishName: 'Aether Nexus Application Studio',
    type: DivisionType.MANAGEMENT,
    icon: Crown,
    description: '联合体最高领导层。由创始人与已毕业学长组成，负责商务对接、文创开发及顶层战略规划。',
    color: 'border-white'
  },
  {
    id: 'CMPT-CTRL',
    name: '总辖构件科',
    englishName: 'Computation & Control',
    type: DivisionType.MANAGEMENT,
    icon: Settings,
    description: '直属工作室，负责高阶项目孵化与联合体纪律监察，协调各科室运作。',
    color: 'border-white'
  },

  // --- Research (Science) ---
  {
    id: 'ENG-MECH',
    name: '工程机械构建部',
    englishName: 'Engineering & Mechanical',
    type: DivisionType.RESEARCH,
    icon: Zap,
    description: '专注于工程结构设计、3D打印技术应用及精密机械制造。',
    color: 'border-blue-500'
  },
  {
    id: 'AERO',
    name: '航空航天部',
    englishName: 'Aerospace & Aeronautics',
    type: DivisionType.RESEARCH,
    icon: Rocket,
    description: '无人机系统研发、空气动力学研究及航模设计制作。',
    color: 'border-blue-500'
  },
  {
    id: 'AI-IT',
    name: '人工智能与信息技术部',
    englishName: 'AI & Information Tech',
    type: DivisionType.RESEARCH,
    icon: Cpu,
    description: '算法研究、软件开发、网络攻防及校园信息化支持。',
    color: 'border-cyan-500'
  },
  {
    id: 'BIO-ECO',
    name: '生物生态学部',
    englishName: 'Biology & Ecology',
    type: DivisionType.RESEARCH,
    icon: Microscope,
    description: '探索生命科学、生态循环系统模拟及微观生物研究。',
    color: 'border-green-500'
  },
  {
    id: 'ASTRO',
    name: '天文学部',
    englishName: 'Astronomy & Astrophysics',
    type: DivisionType.RESEARCH,
    icon: Atom,
    description: '深空观测、天体物理理论探讨及天文摄影技术。',
    color: 'border-purple-500'
  },
  {
    id: 'MIL-TECH',
    name: '军工科技部',
    englishName: 'Military Technology',
    type: DivisionType.RESEARCH,
    icon: Swords,
    description: '前沿国防科技理论研究与模型推演。',
    color: 'border-red-500'
  },
  {
    id: 'GEN-CHEM',
    name: '通用化学技术部',
    englishName: 'General Chemistry',
    type: DivisionType.RESEARCH,
    icon: FlaskConical,
    description: '基础与进阶化学实验、新材料合成及反应机理研究。',
    color: 'border-teal-500'
  },

  // --- Administrative ---
  {
    id: 'BIZ',
    name: '商务部',
    englishName: 'Business & Finance',
    type: DivisionType.ADMIN,
    icon: Wallet,
    description: '负责联合体资金管理、财务报表及外部商业合作（义卖等）。',
    color: 'border-yellow-500'
  },
  {
    id: 'HR',
    name: '人事部',
    englishName: 'Human Resources',
    type: DivisionType.ADMIN,
    icon: Users,
    description: '人员档案管理、面试考核组织及内部人力资源调配。',
    color: 'border-yellow-500'
  },
  {
    id: 'LOG',
    name: '后勤部',
    englishName: 'Logistics & Support',
    type: DivisionType.ADMIN,
    icon: Truck,
    description: '物资采购、运输、仓储管理及活动现场物资保障。',
    color: 'border-yellow-500'
  },
  {
    id: 'PR',
    name: '宣传与调研部',
    englishName: 'Publicity & Research',
    type: DivisionType.ADMIN,
    icon: Megaphone,
    description: '对外宣传形象设计、通知发布及校园师生意见调研。',
    color: 'border-yellow-500'
  },
  {
    id: 'PLAN',
    name: '活动策划部',
    englishName: 'Event Planning',
    type: DivisionType.ADMIN,
    icon: Calendar,
    description: '大型活动流程设计、方案撰写及跨部门协调统筹。',
    color: 'border-yellow-500'
  },

  // --- Comprehensive ---
  {
    id: 'PSY',
    name: '伦理心域研讨会',
    englishName: 'Ethics & Psyche',
    type: DivisionType.COMPREHENSIVE,
    icon: Brain,
    description: '心理学、科技伦理探讨及人格分析研究（与校心理中心合作）。',
    color: 'border-purple-400'
  },
  {
    id: 'EDIT',
    name: '墨枢编辑部',
    englishName: 'InkPivot Editorial',
    type: DivisionType.COMPREHENSIVE,
    icon: PenTool,
    description: '负责《墨枢奇点新媒介报》编撰、文学艺术交流。',
    color: 'border-purple-400'
  },
  {
    id: 'DRONE',
    name: '航拍技术部',
    englishName: 'Aerial Photography',
    type: DivisionType.COMPREHENSIVE,
    icon: Rocket, // Reusing Rocket or a distinct icon
    description: '专业航拍支持、无人机编队飞行及校园全景影像记录。',
    color: 'border-purple-400'
  },
  {
    id: 'PHOTO',
    name: '摄影技术部',
    englishName: 'Photo & Videography',
    type: DivisionType.COMPREHENSIVE,
    icon: Camera,
    description: '校园活动记录、摄影艺术创作及影像后期处理。',
    color: 'border-purple-400'
  },
  {
    id: 'RADIO',
    name: '无线电技术部',
    englishName: 'Radio Telecom',
    type: DivisionType.COMPREHENSIVE,
    icon: Radio,
    description: '无线电通联、业余无线电技术研究及通讯保障。',
    color: 'border-purple-400'
  },
  {
    id: 'OC',
    name: 'OC与概念设计部',
    englishName: 'Original Concept',
    type: DivisionType.COMPREHENSIVE,
    icon: Palette,
    description: '原创角色设计、世界观构建及美术概念图绘制。',
    color: 'border-purple-400'
  },
  {
    id: 'MED',
    name: '通用医学部',
    englishName: 'General Medicine',
    type: DivisionType.COMPREHENSIVE,
    icon: Stethoscope,
    description: '急救技能普及、医学常识推广及活动医疗辅助。',
    color: 'border-purple-400'
  },
  {
    id: 'GAME',
    name: '第九艺术开发部',
    englishName: 'Game Dev Studio',
    type: DivisionType.COMPREHENSIVE,
    icon: Gamepad2,
    description: '独立游戏策划、开发引擎学习及交互艺术探索。',
    color: 'border-purple-400'
  },

  // --- Safety ---
  {
    id: 'SAFE',
    name: '安全总科',
    englishName: 'General Safety Office',
    type: DivisionType.SAFETY,
    icon: ShieldAlert,
    description: '实验室安全监管、活动秩序维护及应急预案执行。',
    color: 'border-red-600'
  }
];