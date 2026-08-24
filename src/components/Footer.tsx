import React from 'react';
import { BRAND_CONFIG } from '../data/portfolioData';
import { ArrowUp, Mail, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Projetos', id: 'projetos' },
    { label: 'Sobre', id: 'sobre' },
    { label: 'Serviços', id: 'servicos' },
    { label: 'Processo', id: 'processo' },
    { label: 'Contato', id: 'contato' },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#07080b] py-16 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col justify-between space-y-12">
        {/* Top Tier */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-6 h-6 border border-white/40 flex items-center justify-center rotate-45">
                <div className="w-1.5 h-1.5 bg-white" />
              </div>
              <span className="font-display font-bold text-base tracking-[0.2em] text-white uppercase">
                {BRAND_CONFIG.name}
              </span>
            </div>
            <p className="text-xs text-white/50 font-mono tracking-wider">
              {BRAND_CONFIG.authorName} · Desenvolvimento Web & Experiências Digitais
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center gap-6 sm:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className="text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}

            {/* Direct mail link in nav */}
            <a
              href={`mailto:${BRAND_CONFIG.email}`}
              className="text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors"
            >
              E-mail ↗
            </a>
          </nav>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-white/15 bg-white/5 hover:bg-white hover:text-black text-white flex items-center justify-center transition-all cursor-pointer"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Tier */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 font-mono gap-4">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} {BRAND_CONFIG.name} · {BRAND_CONFIG.authorName}</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href={`mailto:${BRAND_CONFIG.email}`} 
              className="hover:text-white transition-colors"
            >
              {BRAND_CONFIG.email}
            </a>
            <span>·</span>
            <span>{BRAND_CONFIG.location}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
