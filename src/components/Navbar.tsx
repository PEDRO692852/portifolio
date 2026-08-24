import React, { useState, useEffect } from 'react';
import { BRAND_CONFIG, getWhatsAppUrl } from '../data/portfolioData';
import { Menu, X, ArrowUpRight, MessageSquare } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Projetos', id: 'projetos' },
    { label: 'Sobre', id: 'sobre' },
    { label: 'Serviços', id: 'servicos' },
    { label: 'Processo', id: 'processo' },
    { label: 'Contato', id: 'contato' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08090c]/85 backdrop-blur-md border-b border-white/10 py-3.5 shadow-lg'
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          onClick={() => handleLinkClick('hero')}
          className="flex items-center space-x-3 text-left group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-sm bg-gradient-to-tr from-white/10 to-white/25 border border-white/30 flex items-center justify-center group-hover:border-white transition-colors">
            <div className="w-2.5 h-2.5 bg-white rotate-45 group-hover:scale-110 transition-transform" />
          </div>
          <div>
            <span className="font-display font-bold text-sm tracking-[0.2em] text-white uppercase block leading-none">
              {BRAND_CONFIG.name}
            </span>
            <span className="text-[10px] tracking-wider text-white/40 font-mono block mt-1 uppercase">
              Digital Studio
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className="text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors cursor-pointer py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Action button */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => handleLinkClick('contato')}
            className="px-5 py-2.5 rounded-full border border-white/20 bg-white/5 hover:bg-white hover:text-black text-white text-xs font-semibold tracking-wider uppercase transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center gap-2"
          >
            <span>Vamos conversar</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white/80 hover:text-white focus:outline-none"
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0b0f] border-b border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="text-left text-sm uppercase tracking-wider text-white/80 hover:text-white py-2 border-b border-white/5 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => handleLinkClick('contato')}
              className="w-full py-3 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Vamos conversar</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
