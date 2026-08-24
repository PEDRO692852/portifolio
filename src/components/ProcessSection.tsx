import React from 'react';
import { PROCESS_STEPS } from '../data/portfolioData';
import { Sparkles, ArrowRight } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  return (
    <section id="processo" className="relative py-28 sm:py-36 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-white/10">
      {/* Section Header */}
      <div className="max-w-3xl mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-white/70 text-xs font-mono tracking-widest uppercase mb-6">
          <Sparkles className="w-3.5 h-3.5 text-white/80" />
          <span>Metodologia Transparente</span>
        </div>

        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
          Do conceito ao lançamento.
        </h2>

        <p className="mt-6 text-base sm:text-lg text-white/60 font-light leading-relaxed">
          Um fluxo direto e estruturado para garantir que cada detalhe reflita a essência da sua marca.
        </p>
      </div>

      {/* 4 Process Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {PROCESS_STEPS.map((step, index) => (
          <div
            key={step.number}
            className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-2xl font-bold text-white/40">
                  {step.number}
                </span>
                {index < PROCESS_STEPS.length - 1 && (
                  <ArrowRight className="hidden lg:block w-4 h-4 text-white/20" />
                )}
              </div>

              <h3 className="font-display text-xl font-bold text-white tracking-tight mb-3">
                {step.title}
              </h3>

              <p className="text-sm text-white/60 font-light leading-relaxed">
                {step.description}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 text-[11px] font-mono text-white/30 uppercase tracking-widest">
              ETAPA {step.number} DE 04
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
