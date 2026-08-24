import React from 'react';
import { BRAND_CONFIG } from '../data/portfolioData';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreProjects: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects, onContactClick }) => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-32 sm:pt-40 pb-12 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Discreet Atmospheric Glows */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[450px] bg-gradient-to-b from-white/[0.07] via-white/[0.02] to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-40 w-72 h-72 bg-blue-500/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-2/3 -right-40 w-80 h-80 bg-amber-500/[0.03] rounded-full blur-3xl pointer-events-none" />

      {/* Hero Content with generous negative space */}
      <div className="my-auto max-w-4xl z-10">
        {/* Subtle studio tag */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-white/70 text-xs font-mono tracking-wider mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="uppercase">{BRAND_CONFIG.name} · DIGITAL STUDIO</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-bold text-white tracking-[-0.03em] leading-[1.08] max-w-4xl">
          Sites que fazem <br className="hidden sm:block" />
          marcas serem <span className="text-white underline decoration-white/30 decoration-1 underline-offset-8">percebidas</span>.
        </h1>

        {/* Secondary Subtitle */}
        <p className="mt-8 text-lg sm:text-xl text-white/60 font-light leading-relaxed max-w-2xl">
          {BRAND_CONFIG.heroSubtitle}
        </p>

        {/* Action Buttons */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
          <button
            onClick={onExploreProjects}
            className="px-8 py-4 rounded-full bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-neutral-200 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Ver projetos</span>
            <ArrowDown className="w-4 h-4" />
          </button>

          <button
            onClick={onContactClick}
            className="px-8 py-4 rounded-full bg-white/[0.05] hover:bg-white/[0.12] text-white border border-white/15 font-semibold text-xs uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Vamos conversar</span>
            <ArrowUpRight className="w-4 h-4 text-white/70" />
          </button>
        </div>
      </div>

      {/* Discreet Bottom Bar & Scroll Indicator */}
      <div className="pt-12 z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between border-t border-white/10 text-xs text-white/40 font-mono gap-4">
        <div className="flex items-center space-x-3">
          <span className="text-white/60 uppercase">{BRAND_CONFIG.location}</span>
          <span>—</span>
          <span>{BRAND_CONFIG.availability}</span>
        </div>

        <button
          onClick={onExploreProjects}
          className="group flex items-center space-x-2 text-white/50 hover:text-white transition-colors cursor-pointer"
        >
          <span className="uppercase tracking-widest text-[11px]">Rolar para explorar</span>
          <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white transition-colors">
            <ArrowDown className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" />
          </div>
        </button>
      </div>
    </section>
  );
};
