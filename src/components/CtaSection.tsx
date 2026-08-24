import React, { useState } from 'react';
import { BRAND_CONFIG, getWhatsAppUrl } from '../data/portfolioData';
import { MessageSquare, ArrowUpRight, Mail, Copy, Check, Sparkles, Phone, User, Linkedin } from 'lucide-react';

interface CtaSectionProps {
  initialService?: string;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ initialService }) => {
  const [selectedFormat, setSelectedFormat] = useState<string>(initialService || 'Site Premium');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const formats = [
    'Site Premium',
    'Landing Page',
    'Experiência Interativa',
    'Projeto Personalizado',
  ];

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(BRAND_CONFIG.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const getCustomWhatsAppLink = () => {
    const message = `Olá, Pedro! Vi seu portfólio e gostaria de conversar sobre um projeto de ${selectedFormat}.`;
    return getWhatsAppUrl(message);
  };

  return (
    <section id="contato" className="relative py-28 sm:py-36 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-white/10 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-white/80 text-xs font-mono tracking-widest uppercase mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Vamos conversar</span>
        </div>

        {/* Headline */}
        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight max-w-3xl">
          Vamos conversar.
        </h2>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-xl text-white/60 font-light leading-relaxed max-w-2xl">
          Tem um projeto em mente? Vamos transformar sua ideia em uma experiência digital.
        </p>

        {/* Quick Format Selector */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 max-w-xl">
          {formats.map((fmt) => (
            <button
              key={fmt}
              onClick={() => setSelectedFormat(fmt)}
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all cursor-pointer ${
                selectedFormat === fmt
                  ? 'bg-white text-black font-semibold shadow-lg scale-105'
                  : 'bg-white/5 text-white/70 border border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              {fmt}
            </button>
          ))}
        </div>

        {/* Primary Action Button (WhatsApp) */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href={getCustomWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-5 rounded-full bg-white text-black font-bold text-sm uppercase tracking-widest hover:bg-neutral-200 transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95 flex items-center justify-center gap-3 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Falar no WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Direct Email Action */}
          <a
            href={`mailto:${BRAND_CONFIG.email}`}
            className="w-full sm:w-auto px-8 py-5 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/15 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2.5 cursor-pointer"
            title="Enviar e-mail para Pedro Domingues"
          >
            <Mail className="w-4 h-4 text-white/70" />
            <span>{BRAND_CONFIG.email}</span>
          </a>
        </div>

        {/* Direct contact information card */}
        <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-2xl text-left">
          <div className="flex flex-col">
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-1">
              Contato Direto
            </span>
            <span className="text-sm font-medium text-white">
              {BRAND_CONFIG.authorName}
            </span>
            <span className="text-xs text-white/50 font-mono mt-0.5">
              Desenvolvedor Web
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-1">
              WhatsApp
            </span>
            <a 
              href={getWhatsAppUrl()} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm font-medium text-white hover:text-emerald-400 transition-colors"
            >
              {BRAND_CONFIG.whatsappDisplay}
            </a>
            <span className="text-xs text-emerald-400/80 font-mono mt-0.5">
              Resposta rápida
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-1">
              E-mail
            </span>
            <div className="flex items-center gap-2">
              <a 
                href={`mailto:${BRAND_CONFIG.email}`}
                className="text-sm font-medium text-white hover:underline truncate"
              >
                {BRAND_CONFIG.email}
              </a>
              <button 
                onClick={handleCopyEmail}
                className="text-white/40 hover:text-white transition-colors cursor-pointer"
                title="Copiar e-mail"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
            <span className="text-xs text-white/40 font-mono mt-0.5">
              Propostas e projetos
            </span>
          </div>
        </div>

        {/* LinkedIn structure placeholder */}
        {BRAND_CONFIG.linkedinUrl && (
          <div className="mt-6 flex items-center justify-center gap-2 text-xs font-mono text-white/50">
            <Linkedin className="w-3.5 h-3.5" />
            <a 
              href={BRAND_CONFIG.linkedinUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Conectar no LinkedIn ↗
            </a>
          </div>
        )}
      </div>
    </section>
  );
};
