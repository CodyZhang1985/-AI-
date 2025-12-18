import React from 'react';
import { 
  Rocket, 
  Users, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  TrendingUp, 
  Search, 
  Layers, 
  Briefcase,
  Award,
  Swords,
  Network
} from 'lucide-react';
import { Section } from './ui/Section.tsx';
import { TechCard } from './ui/TechCard.tsx';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  ResponsiveContainer 
} from 'recharts';

const profileData = [
  { subject: '自我驱动', A: 100, fullMark: 100 },
  { subject: '技术敏感', A: 90, fullMark: 100 },
  { subject: '业务洞察', A: 95, fullMark: 100 },
  { subject: '抗压能力', A: 85, fullMark: 100 },
  { subject: '表达能力', A: 80, fullMark: 100 },
  { subject: '创新意愿', A: 95, fullMark: 100 },
];

export const PlanView: React.FC = () => {
  return (
    <div className="space-y-32 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface-dark/80 to-surface-dark"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto space-y-6">
          <div className="inline-block px-4 py-1 rounded-full border border-neon-cyan/50 bg-neon-cyan/10 text-neon-cyan text-sm font-semibold tracking-wider mb-4">
            海纳万商 V1.0 内部专项
          </div>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-white mb-2">
            智能<span className="text-gradient">先锋计划</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 font-light tracking-wide">
            打造AI驱动型“超级个体” —— 智先队
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 mt-6 text-xl leading-relaxed">
            在“新能力时代”的组织升级契机下，构建一支以AI为核心能力、推动“五力”全面升级的特种部队。
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <div className="flex items-center gap-2 px-6 py-3 rounded-lg glass-panel text-white hover:bg-white/5 transition-colors">
              <Zap className="text-yellow-400" size={20} />
              <span className="text-lg">低扰动</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 rounded-lg glass-panel text-white hover:bg-white/5 transition-colors">
              <ShieldCheck className="text-green-400" size={20} />
              <span className="text-lg">强可控</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 rounded-lg glass-panel text-white hover:bg-white/5 transition-colors">
              <Award className="text-purple-400" size={20} />
              <span className="text-lg">精英遴选</span>
            </div>
          </div>
        </div>
      </section>

      {/* Redesigned 5 Forces */}
      <Section className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">计划背景：新能力时代的<span className="text-gradient">五力升级</span></h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-xl">AI不仅仅是工具，更是“核心引擎”。它位于能力模型的中心，源源不断地向业务场景输出算力与智慧，驱动其他四力完成质的飞跃。</p>
        </div>

        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] -z-10 opacity-30">
            <svg width="100%" height="100%" viewBox="0 0 600 300">
               <line x1="150" y1="150" x2="60" y2="60" stroke="#00f3ff" strokeWidth="2" strokeDasharray="5,5" />
               <line x1="150" y1="150" x2="60" y2="240" stroke="#00f3ff" strokeWidth="2" strokeDasharray="5,5" />
               <line x1="450" y1="150" x2="540" y2="60" stroke="#00f3ff" strokeWidth="2" strokeDasharray="5,5" />
               <line x1="450" y1="150" x2="540" y2="240" stroke="#00f3ff" strokeWidth="2" strokeDasharray="5,5" />
               <line x1="300" y1="150" x2="150" y2="150" stroke="#00f3ff" strokeWidth="2" />
               <line x1="300" y1="150" x2="450" y2="150" stroke="#00f3ff" strokeWidth="2" />
            </svg>
          </div>
          
          <div className="space-y-6 w-full max-w-sm">
            <TechCard title="产品力" icon={Layers} accentColor="blue" description="借助AI提升产品库构建能力，加速方案生产，实现高度模块化输出。" />
            <TechCard title="服务力" icon={Users} accentColor="blue" description="利用智能客服与自动化响应，大幅提高运营效率与客户体验。" />
          </div>

          <div className="w-full max-w-md relative">
            <div className="absolute -inset-4 bg-neon-cyan/20 blur-xl rounded-full animate-pulse-slow"></div>
            <TechCard 
              title="科技力 (CORE)" 
              icon={Cpu} 
              accentColor="cyan" 
              variant="core"
              className="transform hover:scale-105 transition-transform"
              description="最具突破性的落地工具，从“基础数字化”迈向“智能化运营”的关键一步。它是整个系统的动力源。"
            >
              <div className="mt-6 flex items-center justify-between text-sm text-neon-cyan font-mono border-t border-neon-cyan/20 pt-4">
                <span>STATUS: ONLINE</span>
                <span className="animate-pulse">PROCESSING...</span>
              </div>
            </TechCard>
          </div>

          <div className="space-y-6 w-full max-w-sm">
             <TechCard title="组织力" icon={Briefcase} accentColor="blue" description="实现组织隐性知识固化、SOP流程自动化，大幅减少低效重复劳动。" />
             <TechCard title="市场力" icon={TrendingUp} accentColor="blue" description="强化全网市拓嗅探能力，利用大数据分析辅助商业洞察，精准捕捉商机。" />
          </div>
        </div>
      </Section>

      {/* Narrative Section */}
      <Section className="container mx-auto px-4 py-16 relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-surface-card to-transparent">
        <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/10 rounded-full blur-[100px]"></div>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-neon-cyan font-mono text-sm tracking-widest mb-2">THE CONCEPT</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              何为 <span className="text-white">“智能先锋”</span>？
            </h2>
            <p className="text-gray-300 text-xl leading-relaxed mb-6">
              智能先锋不仅仅是会使用工具的员工，他们是<b>连接业务场景与AI算力的桥梁</b>。他们懂得如何将模糊的业务需求，翻译成精准的机器语言；懂得如何将重复的劳动，封装成自动化的工作流。
            </p>
            <p className="text-gray-300 text-xl leading-relaxed">
              在这个计划中，我们称最初的火种为——<span className="text-neon-purple font-bold">“0号体”</span>。
            </p>
          </div>
          <div className="space-y-6">
            <div className="glass-panel p-8 rounded-xl border-l-4 border-neon-purple">
              <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Network size={24} className="text-neon-purple"/> 0号体 (Zero Body)
              </h4>
              <p className="text-gray-300 text-lg leading-relaxed">
                海纳万商内部最早觉醒的AI原住民。他们是未来的种子，是系统的原型机。我们不追求数量，只寻找那最敏锐的 <b>6-12</b> 人，通过实战打磨，将他们的能力复制给整个组织。
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Profiling */}
      <Section className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              寻找 <span className="text-gradient-purple">“0号体”</span>
            </h2>
            <p className="text-gray-300 mb-10 text-xl leading-relaxed">
              如果你不满足于现状，如果你对新技术充满狂热，如果你在深夜思考如何让工作更高效——你可能就是我们在寻找的“0号体”。
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-neon-purple/10 rounded-lg text-neon-purple group-hover:scale-110 transition-transform"><Rocket size={28}/></div>
                <div>
                  <h4 className="font-bold text-white text-xl mb-1">自我驱动型人格</h4>
                  <p className="text-gray-400 text-lg">不依赖安排，主动探索，具备极强的Owner意识。</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-neon-purple/10 rounded-lg text-neon-purple group-hover:scale-110 transition-transform"><Zap size={28}/></div>
                <div>
                  <h4 className="font-bold text-white text-xl mb-1">技术敏感与快速学习</h4>
                  <p className="text-gray-400 text-lg">面对新工具不恐惧，能短时间掌握并迁移应用。</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-neon-purple/10 rounded-lg text-neon-purple group-hover:scale-110 transition-transform"><Search size={28}/></div>
                <div>
                  <h4 className="font-bold text-white text-xl mb-1">深刻的业务洞察力</h4>
                  <p className="text-gray-400 text-lg">能识别痛点，将业务问题拆解为AI可解决的场景。</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[500px] glass-panel rounded-2xl flex items-center justify-center relative border border-white/10 bg-black/40">
            <h3 className="absolute top-6 left-6 text-xs font-mono text-neon-purple tracking-widest z-10">Target_Profile_Scan_v1.0</h3>
            <div className="w-full h-full p-8 pt-16">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={profileData}>
                  <PolarGrid stroke="#374151" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#9ca3af', fontSize: 12 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} />
                  <Radar
                    name="0号体"
                    dataKey="A"
                    stroke="#bc13fe"
                    fill="#bc13fe"
                    fillOpacity={0.4}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};