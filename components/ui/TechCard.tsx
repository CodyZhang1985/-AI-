import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TechCardProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  icon?: LucideIcon;
  accentColor?: 'cyan' | 'purple' | 'blue' | 'gold';
  className?: string;
  variant?: 'default' | 'core';
}

export const TechCard: React.FC<TechCardProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  children, 
  accentColor = 'cyan',
  className = '',
  variant = 'default'
}) => {
  const accentClass = {
    cyan: 'border-neon-cyan/30 text-neon-cyan shadow-[0_0_20px_rgba(0,243,255,0.1)]',
    purple: 'border-neon-purple/30 text-neon-purple shadow-[0_0_20px_rgba(188,19,254,0.1)]',
    blue: 'border-neon-blue/30 text-neon-blue shadow-[0_0_20px_rgba(0,102,255,0.1)]',
    gold: 'border-yellow-500/30 text-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.1)]'
  }[accentColor];

  const hoverClass = {
    cyan: 'group-hover:border-neon-cyan/80',
    purple: 'group-hover:border-neon-purple/80',
    blue: 'group-hover:border-neon-blue/80',
    gold: 'group-hover:border-yellow-500/80'
  }[accentColor];

  const isCore = variant === 'core';

  return (
    <div className={`
      relative overflow-hidden group transition-all duration-500
      ${isCore ? 'glass-panel bg-surface-dark/80 border-2' : 'glass-panel'}
      ${isCore ? accentClass : ''}
      ${className}
      ${isCore ? 'rounded-2xl' : 'rounded-xl'}
    `}>
      {/* Background Glow Effect */}
      <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity
        ${accentColor === 'cyan' ? 'bg-cyan-500' : 
          accentColor === 'purple' ? 'bg-purple-500' : 
          accentColor === 'gold' ? 'bg-yellow-500' : 'bg-blue-500'}
      `} />
      
      <div className="relative z-10 p-6">
        <div className={`flex items-center gap-3 mb-4 ${isCore ? 'flex-col items-start' : ''}`}>
          {Icon && (
            <div className={`
              p-2 rounded-lg bg-white/5 transition-transform duration-300
              ${variant === 'default' ? accentClass : 'bg-transparent p-0 mb-2'}
              ${variant === 'default' ? hoverClass : ''}
              group-hover:scale-110
            `}>
              <Icon size={isCore ? 40 : 24} />
            </div>
          )}
          <h3 className={`font-bold text-white transition-colors group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300
            ${isCore ? 'text-2xl' : 'text-xl'}
          `}>
            {title}
          </h3>
        </div>
        
        {description && (
          <p className="text-gray-300 leading-relaxed mb-4 text-base md:text-lg">
            {description}
          </p>
        )}
        
        {children}
      </div>
      
      {/* Interactive border effect for Core cards */}
      {isCore && (
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/10 rounded-2xl pointer-events-none transition-all duration-500"></div>
      )}
    </div>
  );
};