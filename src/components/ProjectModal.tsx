import React, { useState } from 'react';
import { Project } from '../types';
import { 
  X, 
  ArrowUpRight, 
  Monitor, 
  Smartphone, 
  Tablet, 
  ExternalLink,
  ShieldCheck,
  Sparkles,
  Info
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [deviceView, setDeviceView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  if (!project) return null;

  const getContainerWidth = () => {
    switch (deviceView) {
      case 'mobile':
        return 'max-w-[420px]';
      case 'tablet':
        return 'max-w-[768px]';
      default:
        return 'max-w-6xl';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-7xl h-[90vh] bg-[#0c0d12] border border-white/15 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#12141c]">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-mono text-white/50">{project.number}</span>
            <h3 className="text-base font-semibold text-white tracking-wide">{project.name}</h3>
            <span className="hidden sm:inline-block px-2.5 py-0.5 rounded text-[11px] font-medium bg-white/10 text-white/80">
              {project.category}
            </span>
          </div>

          {/* Viewport switcher */}
          <div className="hidden md:flex items-center space-x-1 bg-black/40 p-1 rounded-lg border border-white/10">
            <button
              onClick={() => setDeviceView('desktop')}
              className={`px-3 py-1 text-xs rounded-md flex items-center gap-1.5 transition-colors ${
                deviceView === 'desktop' ? 'bg-white text-black font-semibold' : 'text-white/60 hover:text-white'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Desktop</span>
            </button>
            <button
              onClick={() => setDeviceView('tablet')}
              className={`px-3 py-1 text-xs rounded-md flex items-center gap-1.5 transition-colors ${
                deviceView === 'tablet' ? 'bg-white text-black font-semibold' : 'text-white/60 hover:text-white'
              }`}
            >
              <Tablet className="w-3.5 h-3.5" />
              <span>Tablet</span>
            </button>
            <button
              onClick={() => setDeviceView('mobile')}
              className={`px-3 py-1 text-xs rounded-md flex items-center gap-1.5 transition-colors ${
                deviceView === 'mobile' ? 'bg-white text-black font-semibold' : 'text-white/60 hover:text-white'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile</span>
            </button>
          </div>

          {/* Action buttons */}
          <div className="flex items-center space-x-3">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-white text-black font-semibold text-xs tracking-wider uppercase flex items-center gap-1.5 hover:bg-neutral-200 transition-colors"
            >
              <span>Abrir site original</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-lg text-white/60 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body & Frame */}
        <div className="relative flex-1 bg-[#060709] p-4 sm:p-6 overflow-auto flex items-center justify-center">
          <div className={`w-full h-full transition-all duration-300 ${getContainerWidth()} mx-auto flex flex-col`}>
            <div className="relative flex-1 rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#090a0d]">
              <iframe
                src={project.url}
                title={project.name}
                className="w-full h-full border-0"
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                loading="lazy"
              />
            </div>
            
            {/* Safe notice under frame */}
            <div className="mt-3 flex items-center justify-between text-xs text-white/50 px-2">
              <span className="flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-white/40" />
                <span>Navegação ao vivo em ambiente de preview seguro.</span>
              </span>
              <span className="font-mono text-[11px] text-white/40">{project.url}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
