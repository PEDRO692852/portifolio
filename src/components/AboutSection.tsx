import React from 'react';
import { ABOUT_CONCEPTS } from '../data/portfolioData';
import { Sparkles, Target, Palette, Zap } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const getConceptIcon = (num: string) => {
    switch (num) {
      case '01':
        return <Target className="w-5 h-5 text-white/80" />;
      case '02':
        return <Palette className="w-5 h-5 text-white/80" />;
      case '03':
        return <Zap className="w-5 h-5 text-white/80" />;
      default:
        return <Sparkles className="w-5 h-5 text-white/80" />;
    }
  };

  return (
    <section id="sobre" className="relative py-28 sm:py-36 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-white/10">
      {/* Background radial accent */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: Headline and Manifesto Statement */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-white/70 text-xs font-mono tracking-widest uppercase mb-6 w-fit">
            <span>Manifesto & Visão</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Não faço apenas sites.
          </h2>

          <p className="mt-6 text-base sm:text-lg text-white/70 font-light leading-relaxed">
            Crio experiências digitais pensadas para comunicar o valor de cada marca. Cada projeto parte de uma identidade, um objetivo e uma experiência específica — não de um template pronto.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex items-center space-x-6 text-xs font-mono text-white/40">
            <div>
              <span className="text-white text-base font-bold block font-display">100%</span>
              <span>Personalizado</span>
            </div>
            <div className="w-[1px] h-8 bg-white/10" />
            <div>
              <span className="text-white text-base font-bold block font-display">Foco</span>
              <span>Em Percepção de Valor</span>
            </div>
          </div>
        </div>

        {/* Right Column: 3 Structured Concepts */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          {ABOUT_CONCEPTS.map((concept) => (
            <div
              key={concept.number}
              className="group p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex items-start gap-6">
                {/* Concept Number Badge */}
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:border-white/30 transition-all">
                  <span className="font-mono text-sm font-bold text-white">
                    {concept.number}
                  </span>
                </div>

                {/* Concept Content */}
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {concept.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-white/60 font-light leading-relaxed">
                    {concept.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
