import React from 'react';
import { SERVICES } from '../data/portfolioData';
import { Sparkles, ArrowRight, Check } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="servicos" className="relative py-28 sm:py-36 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-white/10">
      {/* Section Header */}
      <div className="max-w-3xl mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-white/70 text-xs font-mono tracking-widest uppercase mb-6">
          <Sparkles className="w-3.5 h-3.5 text-white/80" />
          <span>Especialidades Digitais</span>
        </div>

        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
          O que posso criar
        </h2>

        <p className="mt-6 text-base sm:text-lg text-white/60 font-light leading-relaxed">
          Soluções digitais sob medida para transformar a percepção da sua marca e gerar negócios reais.
        </p>
      </div>

      {/* 3 Distinct Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            className="group relative p-8 sm:p-10 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/25 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Service Number */}
              <div className="font-mono text-xs text-white/40 mb-6 tracking-widest">
                {service.number} // CAPABILTY
              </div>

              {/* Service Title */}
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight mb-4">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-sm sm:text-base text-white/60 font-light leading-relaxed mb-8">
                {service.description}
              </p>

              {/* Deliverables checklist */}
              <div className="space-y-3 pt-6 border-t border-white/10">
                {service.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-white/70 font-light">
                    <Check className="w-4 h-4 text-white/90 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick action */}
            {onSelectService && (
              <div className="mt-10 pt-6 border-t border-white/10">
                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full py-2.5 rounded-lg bg-white/5 hover:bg-white hover:text-black text-white text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Solicitar este formato</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
