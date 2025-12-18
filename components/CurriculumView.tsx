import React from 'react';
import { 
  Brain, 
  Database, 
  MessageSquareCode, 
  ShieldAlert, 
  Code,
  ArrowDown,
  Target,
  Zap,
  CheckCircle2,
  Cpu,
  Server,
  Workflow,
  Terminal,
  Activity,
  Lock,
  Search,
  FileText,
  AlertTriangle,
  Globe,
  Eye,
  BarChart3
} from 'lucide-react';
import { Section } from './ui/Section';

const phases = [
  {
    id: 1,
    title: '第一阶段：祛魅与通识',
    subtitle: '构建AI世界观',
    desc: '从黑盒到白盒，理解AI的底层逻辑，打破神秘感。',
    color: 'cyan',
    icon: Brain,
    highlight: 'Transformer架构解析 / 6张牌模型',
    impact: '认知升级：理解AI的“思考”方式，不再盲目崇拜或恐惧。',
    details: [
      '底层原理：Token与概率预测本质',
      '感知世界：计算机视觉(CV)与多模态原理',
      '宏观格局：大模型竞争格局与AGI演进路径'
    ]
  },
  {
    id: 2,
    title: '第二阶段：兵器库',
    subtitle: '掌握核心工具',
    desc: '装备最先进的武器。从提示词工程到本地部署，建立私人军火库。',
    color: 'blue',
    icon: Database,
    highlight: '本地部署(Ollama) / MCP协议连接器',
    impact: '执行力倍增：拥有独立的AI工具链，实现从构思到产出的秒级转化。',
    details: [
      '选型智慧：开源vs闭源，云端vs本地决策树',
      '超级连接器：用AI操作Excel/SQL，打通数据孤岛',
      '全感官交互：TTS声音克隆与图像生成实战'
    ]
  },
  {
    id: 3,
    title: '第三阶段：驾驭术',
    subtitle: '逻辑与Agent',
    desc: '赋予超级士兵战术思维。学习思维链(CoT)与工作流编排。',
    color: 'purple',
    icon: MessageSquareCode,
    highlight: 'CoT思维链 / Workflow编排 / 智能体设计',
    impact: '自主决策：从“下指令”进阶到“定目标”，让AI自主拆解并完成复杂任务。',
    details: [
      '重构提问：结构化Prompt框架 (Role-Task-Format)',
      '复杂任务拆解：引导AI进行多步推理',
      '自主智能体：设计一个能自我修正的Agent'
    ]
  },
  {
    id: 4,
    title: '第四阶段：护城河',
    subtitle: '安全与合规',
    desc: '装备防御装甲。在利用AI的同时，确保数据安全与合规边界。',
    color: 'green',
    icon: ShieldAlert,
    highlight: 'PII红线 / 幻觉免疫 / 伦理合规',
    impact: '风险免疫：在安全边界内最大化AI效能，避免数据泄露与合规风险。',
    details: [
      '数据红线：识别核心机密，物理隔离部署方案',
      '幻觉控制：建立Human-in-the-loop复核机制',
      '伦理边界：版权风险规避与偏见审查'
    ]
  }
];

// Phase 1: Neural Network Topology
const NeuralViz = () => (
  <div className="w-full h-full relative flex items-center justify-center overflow-hidden bg-black/40">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent"></div>
    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
    
    <div className="w-full h-full p-8 flex items-center justify-center">
      <svg className="w-full h-full" viewBox="0 0 500 350" preserveAspectRatio="xMidYMid meet">
        <defs>
          <filter id="glow-cyan" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        <g stroke="rgba(0, 243, 255, 0.15)" strokeWidth="1">
          {[60, 140, 220, 300].map(y1 => 
            [100, 180, 260].map(y2 => 
              <line key={`l1-${y1}-${y2}`} x1="100" y1={y1} x2="250" y2={y2} />
            )
          )}
          {[100, 180, 260].map(y1 => 
            [80, 180, 280].map(y2 => 
              <line key={`l2-${y1}-${y2}`} x1="250" y1={y1} x2="400" y2={y2} />
            )
          )}
        </g>

        <g>
          <text x="100" y="30" fill="#00f3ff" fontSize="12" textAnchor="middle" opacity="0.7" fontFamily="monospace">INPUT_LAYER</text>
          {[60, 140, 220, 300].map((y, i) => (
            <g key={`in-${i}`}>
              <circle cx="100" cy={y} r="6" fill="#030712" stroke="#00f3ff" strokeWidth="2" />
              <text x="80" y={y+4} fill="rgba(255,255,255,0.5)" fontSize="10" textAnchor="end">x_{i}</text>
            </g>
          ))}
        </g>

        <g>
          <text x="250" y="50" fill="#00f3ff" fontSize="12" textAnchor="middle" opacity="0.7" fontFamily="monospace">HIDDEN_LAYER</text>
          {[100, 180, 260].map((y, i) => (
            <circle key={`h1-${i}`} cx="250" cy={y} r="8" fill="#00f3ff" fillOpacity="0.2" stroke="#00f3ff" strokeWidth="1" />
          ))}
        </g>

        <g>
          <text x="400" y="40" fill="#00f3ff" fontSize="12" textAnchor="middle" opacity="0.7" fontFamily="monospace">PROBABILITIES</text>
          {[80, 180, 280].map((y, i) => (
            <g key={`out-${i}`}>
              <circle cx="400" cy={y} r="10" fill={i === 1 ? "#00f3ff" : "#030712"} fillOpacity={i === 1 ? "0.3" : "1"} stroke="#00f3ff" strokeWidth="2" filter={i===1 ? "url(#glow-cyan)" : ""} />
              <rect x="420" y={y-6} width={40 + (i === 1 ? 30 : 0)} height="12" fill="rgba(0, 243, 255, 0.1)" rx="2" />
              <text x="425" y={y+4} fill="#00f3ff" fontSize="9" fontFamily="monospace">{i === 1 ? "92%" : "0.4%"}</text>
            </g>
          ))}
        </g>

        <circle r="3" fill="#fff">
          <animateMotion dur="2s" repeatCount="indefinite" path="M100,140 L250,180" />
        </circle>
        <circle r="3" fill="#fff">
          <animateMotion dur="2s" repeatCount="indefinite" begin="0.5s" path="M100,300 L250,260" />
        </circle>
        <circle r="3" fill="#fff">
          <animateMotion dur="2s" repeatCount="indefinite" begin="1s" path="M250,180 L400,180" />
        </circle>
      </svg>
    </div>
    
    <div className="absolute bottom-4 left-4 font-mono text-[10px] text-neon-cyan/40">
      <div>MODEL: GPT-TRANSFORMER</div>
      <div>PARAMS: 175B_ACTIVE</div>
    </div>
  </div>
);

// Phase 2: Arsenal Dashboard
const ArsenalViz = () => (
  <div className="w-full h-full relative flex flex-col bg-surface-dark border-l border-r border-neon-blue/20">
     <div className="h-10 border-b border-neon-blue/20 bg-neon-blue/5 flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
           <Terminal size={14} className="text-neon-blue" />
           <span className="text-xs font-mono text-neon-blue font-bold tracking-wider">ARSENAL_DASHBOARD</span>
        </div>
        <div className="flex gap-4 text-[10px] font-mono text-neon-blue/60">
           <span>CPU: 42%</span>
           <span>MEM: 12GB</span>
           <span className="text-green-400">NET: ONLINE</span>
        </div>
     </div>

     <div className="flex-1 p-4 grid grid-cols-2 gap-3 overflow-hidden relative">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,102,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,102,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        
        <div className="bg-surface-dark border border-neon-blue/30 rounded p-3 relative group hover:bg-neon-blue/5 transition-colors">
           <div className="flex justify-between mb-2">
              <Server size={18} className="text-neon-blue" />
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
           </div>
           <div className="text-sm font-bold text-white mb-1">Local_LLM</div>
           <div className="text-[10px] text-gray-400 mb-2">Ollama / Llama3</div>
           <div className="w-full bg-gray-800 h-1 rounded overflow-hidden">
              <div className="bg-neon-blue h-full w-[80%]"></div>
           </div>
        </div>

        <div className="bg-surface-dark border border-neon-blue/30 rounded p-3 relative group hover:bg-neon-blue/5 transition-colors">
           <div className="flex justify-between mb-2">
              <Workflow size={18} className="text-neon-blue" />
              <Activity size={12} className="text-neon-blue/50" />
           </div>
           <div className="text-sm font-bold text-white mb-1">RAG_Pipeline</div>
           <div className="text-[10px] text-gray-400 mb-2">LangChain / VectorDB</div>
           <div className="flex gap-1 mt-2">
              {[1,2,3,4,5].map(i => <div key={i} className={`w-1 h-3 rounded-sm ${i<4 ? 'bg-neon-blue' : 'bg-gray-700'}`}></div>)}
           </div>
        </div>

        <div className="bg-surface-dark border border-neon-blue/30 rounded p-3 relative group hover:bg-neon-blue/5 transition-colors">
           <div className="flex justify-between mb-2">
              <Brain size={18} className="text-neon-blue" />
              <span className="text-[10px] font-mono text-neon-blue">v2.5</span>
           </div>
           <div className="text-sm font-bold text-white mb-1">DeepSeek_R1</div>
           <div className="text-[10px] text-gray-400 mb-2">Reasoning Core</div>
           <div className="text-[10px] text-neon-blue font-mono border border-neon-blue/30 px-1 py-0.5 inline-block rounded">API_READY</div>
        </div>

        <div className="bg-surface-dark border border-neon-blue/30 rounded p-3 relative group hover:bg-neon-blue/5 transition-colors">
           <div className="flex justify-between mb-2">
              <Code size={18} className="text-neon-blue" />
           </div>
           <div className="text-sm font-bold text-white mb-1">Cursor_IDE</div>
           <div className="text-[10px] text-gray-400 mb-2">AI Pair Programmer</div>
           <div className="w-full border-t border-neon-blue/20 pt-1 mt-1">
              <div className="text-[8px] font-mono text-gray-500">Lines generated: 14k+</div>
           </div>
        </div>
     </div>

     <div className="h-24 bg-black/40 border-t border-neon-blue/20 p-3 font-mono text-[10px] text-neon-blue/80 overflow-hidden leading-relaxed relative">
        <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-black/20 to-transparent"></div>
        <div>{">"} init_system_check... OK</div>
        <div>{">"} loading_model_weights [==========] 100%</div>
        <div>{">"} connecting_to_vector_store... OK</div>
        <div className="text-green-400">{">"} system_ready_for_deployment</div>
        <div className="animate-pulse">{">"} _</div>
     </div>
  </div>
);

// Phase 3: Workflow Node Graph
const WorkflowViz = () => (
  <div className="w-full h-full relative bg-[#0a0a0a] overflow-hidden flex font-sans">
    <div className="absolute inset-0 bg-[radial-gradient(#2a2a2a_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>

    <div className="w-3/4 relative p-6 flex flex-col justify-between z-10">
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
             <path d="M 50% 15% L 50% 35%" stroke="#4b5563" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
             <path d="M 50% 55% C 50% 65%, 20% 65%, 20% 75%" stroke="#bc13fe" strokeWidth="2" fill="none" strokeDasharray="4 4" className="animate-pulse" />
             <path d="M 50% 55% C 50% 65%, 80% 65%, 80% 75%" stroke="#bc13fe" strokeWidth="2" fill="none" strokeDasharray="4 4" className="animate-pulse" />
             <path d="M 20% 85% C 20% 90%, 50% 90%, 50% 95%" stroke="#4b5563" strokeWidth="2" fill="none" opacity="0.5" />
             <path d="M 80% 85% C 80% 90%, 50% 90%, 50% 95%" stroke="#4b5563" strokeWidth="2" fill="none" opacity="0.5" />
             <defs>
               <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                 <polygon points="0 0, 10 3.5, 0 7" fill="#4b5563" />
               </marker>
             </defs>
        </svg>

        <div className="flex justify-center z-10 h-[15%] items-center">
            <div className="px-5 py-2.5 bg-surface-dark border border-gray-600 rounded-full shadow-lg flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse"></div>
                <span className="text-sm font-bold text-white">User Prompt</span>
            </div>
        </div>

        <div className="flex justify-center z-10 h-[25%] items-center">
            <div className="w-64 bg-surface-dark/90 backdrop-blur border border-neon-purple rounded-xl shadow-[0_0_25px_rgba(188,19,254,0.15)] p-4 flex flex-col gap-2">
                <div className="flex items-center justify-between border-b border-neon-purple/30 pb-2">
                    <div className="flex items-center gap-2">
                        <Brain size={16} className="text-neon-purple" />
                        <span className="text-xs font-bold text-neon-purple uppercase tracking-wider">Agent Orchestrator</span>
                    </div>
                    <span className="text-[10px] bg-neon-purple/20 text-neon-purple px-1.5 rounded">ACTIVE</span>
                </div>
                <div className="space-y-2">
                    <div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-neon-purple w-[60%]"></div>
                    </div>
                    <div className="flex justify-between text-[10px] text-gray-400 font-mono">
                         <span>Analysis...</span>
                         <span>78%</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex justify-between px-8 z-10 h-[15%] items-center">
             <div className="w-32 p-2 bg-surface-dark border border-gray-700 rounded-lg flex flex-col items-center gap-1 shadow-md">
                <div className="flex items-center gap-1.5 text-gray-400">
                    <Globe size={12} />
                    <span className="text-[10px] font-bold">Web Search</span>
                </div>
                <div className="text-[9px] text-gray-500">Querying...</div>
             </div>
             
             <div className="w-32 p-2 bg-surface-dark border border-neon-purple rounded-lg flex flex-col items-center gap-1 shadow-[0_0_15px_rgba(188,19,254,0.2)]">
                <div className="flex items-center gap-1.5 text-neon-purple">
                    <Code size={12} />
                    <span className="text-[10px] font-bold">Python Exec</span>
                </div>
                <div className="text-[9px] text-white bg-gray-800 px-2 py-0.5 rounded font-mono">running</div>
             </div>
        </div>

        <div className="flex justify-center z-10 h-[15%] items-end">
            <div className="w-full max-w-sm px-4 py-3 bg-gradient-to-r from-neon-purple/10 to-transparent border-l-2 border-neon-purple flex items-center gap-3">
                <FileText size={18} className="text-neon-purple" />
                <div className="flex flex-col">
                    <span className="text-xs font-bold text-white">Synthesized Response</span>
                    <span className="text-[10px] text-gray-400">Ready for user presentation</span>
                </div>
            </div>
        </div>
    </div>

    <div className="w-1/4 border-l border-white/10 bg-black/40 p-0 flex flex-col font-mono text-[10px]">
        <div className="p-3 border-b border-white/10 bg-white/5 font-bold text-gray-400 flex items-center gap-2">
            <Terminal size={12} /> TRACE_LOG
        </div>
        <div className="flex-1 overflow-hidden p-3 space-y-3 relative">
            <div className="opacity-50 text-gray-500">[00:00] Init Sequence</div>
            <div className="text-white">
                <span className="text-blue-400">[USER]</span> "Analyze Q3 sales"
            </div>
            <div className="pl-2 border-l border-gray-700 text-gray-400">
                <div className="text-neon-purple mb-1">Thinking...</div>
                <div>1. Search data</div>
                <div>2. Calculate growth</div>
            </div>
            <div className="text-yellow-500">
                [TOOL] Calling Python...
            </div>
            <div className="p-2 bg-gray-900 rounded text-gray-300">
                df = pd.read_csv()<br/>
                print(df.sum())
            </div>
            <div className="text-green-500">[SYS] Output generated.</div>
            <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-black to-transparent"></div>
        </div>
    </div>
  </div>
);

// Phase 4: Security Shield
const SecurityViz = () => (
  <div className="w-full h-full relative bg-[#050505] overflow-hidden flex flex-col">
     <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] aspect-square border border-green-900/20 rounded-full animate-spin-slow"></div>
     </div>

     <div className="relative z-10 h-12 border-b border-green-900/30 flex items-center justify-between px-6 bg-black/40 backdrop-blur-sm">
         <div className="flex items-center gap-2 text-green-500">
             <ShieldAlert size={16} />
             <span className="text-xs font-bold tracking-widest">SECURITY_MATRIX_V4</span>
         </div>
         <div className="flex gap-4">
             <div className="flex items-center gap-1.5">
                 <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                 <span className="text-[10px] text-green-400 font-mono">LIVE_MONITORING</span>
             </div>
         </div>
     </div>

     <div className="flex-1 relative z-10 p-6 grid grid-cols-3 grid-rows-2 gap-4">
         <div className="col-span-1 row-span-2 bg-green-900/5 border border-green-500/10 rounded-xl p-4 flex flex-col gap-4">
             <div className="flex items-center gap-2 border-b border-green-500/20 pb-2">
                 <AlertTriangle size={14} className="text-green-400" />
                 <span className="text-[10px] font-bold text-green-400">THREAT_INTEL</span>
             </div>
             <div className="space-y-2 flex-1 overflow-hidden">
                 {[
                    { type: 'SQL_INJ', status: 'BLOCKED', ip: '192.168.x.x' },
                    { type: 'XSS_ATT', status: 'BLOCKED', ip: '10.0.x.x' },
                    { type: 'PII_LEAK', status: 'FILTERED', ip: 'INTERNAL' },
                    { type: 'BAD_BOT', status: 'DENIED', ip: '45.33.x.x' }
                 ].map((item, i) => (
                     <div key={i} className="flex justify-between items-center bg-black/40 p-2 rounded border border-green-900/30 text-[9px]">
                         <span className="text-gray-400">{item.type}</span>
                         <span className="text-green-500 font-bold">{item.status}</span>
                     </div>
                 ))}
             </div>
         </div>

         <div className="col-span-1 row-span-2 relative flex items-center justify-center">
             <div className="relative flex items-center justify-center">
                 <div className="absolute w-48 h-48 border-2 border-dashed border-green-500/20 rounded-full animate-spin-slow"></div>
                 <div className="absolute w-40 h-40 border border-green-500/30 rounded-full"></div>
                 <div className="w-28 h-28 bg-black border border-green-500 shadow-[0_0_30px_rgba(34,197,94,0.3)] rounded-full flex flex-col items-center justify-center z-20">
                     <Lock size={32} className="text-green-400 mb-1" />
                     <span className="text-[10px] text-white font-bold">SECURE</span>
                 </div>
                 <div className="absolute top-1/2 left-1/2 w-40 h-40 -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg,transparent_0deg,rgba(34,197,94,0.15)_360deg)] animate-spin-slow rounded-full pointer-events-none"></div>
             </div>
         </div>

         <div className="col-span-1 bg-green-900/5 border border-green-500/10 rounded-xl p-4">
              <div className="flex items-center justify-between border-b border-green-500/20 pb-2 mb-3">
                 <span className="text-[10px] font-bold text-green-400">COMPLIANCE</span>
                 <FileText size={14} className="text-green-400" />
             </div>
             <div className="grid grid-cols-2 gap-2">
                 <div className="bg-black/40 p-2 rounded text-center border border-green-900/30">
                     <div className="text-[8px] text-gray-500">GDPR</div>
                     <div className="text-green-400 font-bold text-xs">PASS</div>
                 </div>
                 <div className="bg-black/40 p-2 rounded text-center border border-green-900/30">
                     <div className="text-[8px] text-gray-500">SOC2</div>
                     <div className="text-green-400 font-bold text-xs">PASS</div>
                 </div>
             </div>
         </div>

         <div className="col-span-1 bg-green-900/5 border border-green-500/10 rounded-xl p-4 flex flex-col justify-end">
             <div className="flex items-center gap-2 mb-3">
                 <Globe size={14} className="text-green-400" />
                 <span className="text-[10px] font-bold text-green-400">DATA_FLOW</span>
             </div>
             <div className="flex gap-1 h-16 items-end justify-between px-1">
                 {[40, 70, 45, 90, 60, 80, 50, 75].map((h, i) => (
                     <div key={i} className="w-1.5 bg-green-500/40 rounded-t" style={{height: `${h}%`}}></div>
                 ))}
             </div>
         </div>
     </div>
  </div>
);

const PhaseVisualWrapper = ({ phaseId, color }: { phaseId: number, color: string }) => {
  const themeShadow = color === 'purple' ? 'shadow-[0_0_30px_rgba(188,19,254,0.15)]'
    : color === 'blue' ? 'shadow-[0_0_30px_rgba(0,102,255,0.15)]'
    : color === 'green' ? 'shadow-[0_0_30px_rgba(74,222,128,0.15)]'
    : 'shadow-[0_0_30px_rgba(0,243,255,0.15)]';
  
  const themeBorder = color === 'purple' ? 'border-neon-purple/30'
    : color === 'blue' ? 'border-neon-blue/30'
    : color === 'green' ? 'border-green-500/30'
    : 'border-neon-cyan/30';

  return (
    <div className={`relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 ${themeShadow} bg-surface-dark group`}>
       <div className={`absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 ${themeBorder} rounded-tl-xl z-20`}></div>
       <div className={`absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 ${themeBorder} rounded-br-xl z-20`}></div>
       
       {phaseId === 1 && <NeuralViz />}
       {phaseId === 2 && <ArsenalViz />}
       {phaseId === 3 && <WorkflowViz />}
       {phaseId === 4 && <SecurityViz />}

       <div className="absolute top-4 right-4 z-30">
          <div className="px-3 py-1 bg-black/60 backdrop-blur border border-white/10 rounded-full text-xs font-mono text-gray-400 border-l-2 border-l-white/50">
             SYS.MOD.0{phaseId}
          </div>
       </div>
    </div>
  );
};

export const CurriculumView: React.FC = () => {
  return (
    <div className="pb-32">
      <section className="relative py-24 px-4 text-center border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-tech-950/20"></div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,243,255,0.03)_1px,transparent_1px),linear-gradient(rgba(0,243,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-neon-cyan/30 text-neon-cyan text-xs font-mono mb-4 animate-pulse">
            <Code size={14} /> SYSTEM: UPGRADE_PROTOCOL_V2.0
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
            超级个体 <span className="text-gradient">武装日程</span>
          </h1>
          <p className="text-xl text-gray-400 font-light">
            通过四个阶段的系统性“改装”，将普通个体升级为企业特种兵。
          </p>
          <div className="flex justify-center mt-12 animate-bounce">
            <ArrowDown className="text-gray-600" size={24} />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-20 space-y-32">
        {phases.map((phase, index) => {
          const themeColorText = phase.color === 'purple' ? 'text-neon-purple' 
            : phase.color === 'blue' ? 'text-neon-blue' 
            : phase.color === 'green' ? 'text-green-400' 
            : 'text-neon-cyan';
            
          const themeDetailBg = phase.color === 'purple' ? 'bg-purple-500/20' 
            : phase.color === 'blue' ? 'bg-blue-500/20' 
            : phase.color === 'green' ? 'bg-green-500/20' 
            : 'bg-cyan-500/20';

          return (
            <Section key={phase.id} className="relative group">
              {index !== phases.length - 1 && (
                <div className="absolute left-1/2 bottom-[-140px] top-[100%] w-px bg-gradient-to-b from-white/10 to-transparent hidden lg:block"></div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                 <div className="order-1">
                    <PhaseVisualWrapper 
                      phaseId={phase.id} 
                      color={phase.color} 
                    />
                 </div>

                 <div className="space-y-8 order-2">
                    <div>
                       <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">{phase.title}</h2>
                       <p className={`text-2xl md:text-3xl ${themeColorText} font-light tracking-wide`}>
                         {phase.subtitle}
                       </p>
                    </div>

                    <p className="text-xl text-gray-300 leading-relaxed border-l-4 border-white/10 pl-6">
                       {phase.desc}
                    </p>

                    <div className="grid grid-cols-1 gap-4">
                        <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors">
                            <div className="flex items-center gap-2 mb-3 text-yellow-400 font-bold tracking-wider uppercase text-sm">
                                <Target size={18} /> Key Highlights
                            </div>
                            <p className="text-white text-lg font-medium leading-relaxed">
                                {phase.highlight}
                            </p>
                        </div>
                        <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors">
                            <div className="flex items-center gap-2 mb-3 text-green-400 font-bold tracking-wider uppercase text-sm">
                                <Zap size={18} /> Function Upgrade
                            </div>
                            <p className="text-white text-lg font-medium leading-relaxed">
                                {phase.impact}
                            </p>
                        </div>
                    </div>

                    <div className="space-y-5 pt-4">
                       {phase.details.map((detail, i) => (
                          <div key={i} className="flex items-start gap-4">
                             <div className={`mt-1.5 p-1 rounded-full ${themeDetailBg}`}>
                                <CheckCircle2 className={themeColorText} size={20} />
                             </div>
                             <span className="text-gray-300 text-lg md:text-xl font-light">{detail}</span>
                          </div>
                       ))}
                    </div>
                 </div>
              </div>
            </Section>
          );
        })}
      </div>
    </div>
  );
};