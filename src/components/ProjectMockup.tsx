import React, { useState } from 'react';
import { Project } from '../types';
import { 
  ExternalLink, 
  Sparkles, 
  ArrowUpRight, 
  Compass, 
  Flame, 
  Layers, 
  Maximize2,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Clock,
  MapPin,
  TrendingUp,
  Users,
  Eye,
  Bot,
  Zap,
  Activity
} from 'lucide-react';

interface ProjectMockupProps {
  project: Project;
  onOpenPreviewModal?: (project: Project) => void;
  isGrandHighlight?: boolean;
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ 
  project, 
  onOpenPreviewModal, 
  isGrandHighlight = false 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Render bespoke simulated interface based on project ID
  const renderVisualInterface = () => {
    switch (project.id) {
      case 'vertice-casa':
        return (
          <div className="relative w-full h-full bg-[#0d0e12] overflow-hidden flex flex-col justify-between p-6 sm:p-12 lg:p-16 font-serif select-none transition-all duration-700">
            {/* Ambient Lighting & Architectural Glow */}
            <div className={`absolute top-0 right-0 w-[500px] h-[500px] bg-[#c29d59]/15 rounded-full blur-3xl pointer-events-none transition-transform duration-700 ${isHovered ? 'scale-110 translate-x-4 -translate-y-4' : ''}`} />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1e2029]/50 rounded-full blur-2xl pointer-events-none" />
            
            {/* Subtle Blueprint Grid Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#c29d59_0.75px,transparent_0.75px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

            {/* Header Mock */}
            <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-5">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 border border-[#c29d59] rotate-45 flex items-center justify-center transition-transform duration-500 group-hover:rotate-90">
                  <div className="w-2 h-2 bg-[#c29d59]" />
                </div>
                <span className="font-sans text-xs tracking-[0.28em] text-[#e5ca93] uppercase font-semibold">
                  Vértice Casa · Residencial Contemporâneo
                </span>
              </div>
              <div className="hidden sm:flex items-center space-x-8 text-[11px] font-sans tracking-[0.2em] text-white/60">
                <span>CONCEITO</span>
                <span>GALERIA</span>
                <span>PLANTA BAIXA</span>
                <span className="text-[#e5ca93] border-b border-[#e5ca93] pb-0.5">AGENDAR VISITA PRIVADA</span>
              </div>
            </div>

            {/* Visual Hero Showcase */}
            <div className="relative z-10 my-auto py-8 sm:py-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c29d59]/15 border border-[#c29d59]/30 text-[#e5ca93] text-[11px] font-sans tracking-widest mb-6">
                <Sparkles className="w-3.5 h-3.5 text-[#e5ca93]" />
                <span>ARQUITETURA DE ALTO PADRÃO · 1.250 M²</span>
              </div>

              <h4 className="text-3xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.1] tracking-tight max-w-2xl transition-transform duration-700">
                Onde o design encontra a{' '}
                <span className="italic text-[#e5ca93] font-normal font-serif">
                  atemporalidade
                </span>.
              </h4>

              <p className="mt-6 text-sm sm:text-base text-white/70 font-sans max-w-xl leading-relaxed font-light">
                Linhas limpas, concreto aparente, lâminas de vidro e iluminação natural esculpida em uma experiência digital cinematográfica imersiva.
              </p>

              {/* Architectural telemetry highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/10 max-w-2xl font-sans">
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] text-white/40 uppercase tracking-widest block font-mono">Área Construída</span>
                  <span className="text-sm sm:text-base font-semibold text-white tracking-wide mt-0.5 block">1.250 m²</span>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] text-white/40 uppercase tracking-widest block font-mono">Suítes Master</span>
                  <span className="text-sm sm:text-base font-semibold text-white tracking-wide mt-0.5 block">05 Suítes</span>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] text-white/40 uppercase tracking-widest block font-mono">Living Integrado</span>
                  <span className="text-sm sm:text-base font-semibold text-white tracking-wide mt-0.5 block">Pé-Direito Duplo</span>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] text-white/40 uppercase tracking-widest block font-mono">Localização</span>
                  <span className="text-sm sm:text-base font-semibold text-[#e5ca93] tracking-wide mt-0.5 block">Jardins · SP</span>
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="relative z-10 flex items-center justify-between font-sans text-[11px] text-white/50 pt-4 border-t border-white/10">
              <span className="tracking-widest font-mono">CINEMATIC DIGITAL ARCHITECTURE</span>
              <span className="text-[#e5ca93] font-mono tracking-widest">VERTICE-CASA.VERCEL.APP</span>
            </div>
          </div>
        );

      case 'aviap':
        return (
          <div className="relative w-full h-full bg-[#070b14] overflow-hidden flex flex-col justify-between p-6 sm:p-10 font-sans">
            {/* Aero Grid and Flight Horizon Lines */}
            <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
            <div className="absolute top-1/3 -right-20 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="relative z-10 flex items-center justify-between border-b border-blue-500/20 pb-4">
              <div className="flex items-center space-x-2">
                <Compass className="w-5 h-5 text-blue-400 animate-spin-slow" />
                <span className="text-xs tracking-[0.3em] text-white font-bold uppercase">
                  AVIAP <span className="text-blue-400">·</span> AERO JOURNAL
                </span>
              </div>
              <div className="flex items-center space-x-3 text-[11px] font-mono text-blue-400/80 bg-blue-950/60 px-3 py-1 rounded border border-blue-800/40">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>FLIGHT ALT: 41,000 FT</span>
              </div>
            </div>

            {/* Visual Hero */}
            <div className="relative z-10 my-auto py-6">
              <div className="text-[11px] font-mono tracking-widest text-blue-400 mb-2 uppercase">
                // A AVIAÇÃO COMO NARRATIVA EDITORIAL
              </div>
              <h4 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-none uppercase">
                A Jornada Começa <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-200">
                  Além do Horizonte.
                </span>
              </h4>
              <p className="mt-4 text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed font-light">
                Construído para transcender uma página institucional comum. Uma imersão editorial que conecta jatos particulares, destinos exclusivos e storytelling.
              </p>

              <div className="mt-6 flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-3 py-1.5 rounded bg-blue-900/40 border border-blue-500/30 text-blue-300">
                  ROTAS EXECUTIVAS
                </span>
                <span className="px-3 py-1.5 rounded bg-blue-900/40 border border-blue-500/30 text-blue-300">
                  FROTA G700 & BOMBARDIER
                </span>
                <span className="px-3 py-1.5 rounded bg-blue-900/40 border border-blue-500/30 text-blue-300">
                  EXPERIÊNCIA INTERATIVA
                </span>
              </div>
            </div>

            {/* Flight telemetry footer */}
            <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-slate-400 pt-3 border-t border-blue-500/20">
              <span>LAT 23°32'S · LON 46°38'W</span>
              <span className="text-blue-400">EDITORIAL EXPERIENCE 02</span>
            </div>
          </div>
        );

      case 'loyal-barbearia':
        return (
          <div className="relative w-full h-full bg-[#0e0c08] overflow-hidden flex flex-col justify-between p-6 sm:p-10 font-sans">
            {/* Warm vintage luxury glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="relative z-10 flex items-center justify-between border-b border-[#d4af37]/20 pb-4">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 bg-[#d4af37] rotate-45" />
                <span className="text-xs tracking-[0.25em] text-[#f3d97f] font-serif font-bold uppercase">
                  LOYAL BARBEARIA
                </span>
              </div>
              <div className="text-[11px] text-[#f3d97f] border border-[#d4af37]/30 px-3 py-1 rounded-sm bg-[#d4af37]/5">
                EST. 2024 · ALTO PADRÃO
              </div>
            </div>

            {/* Visual Hero */}
            <div className="relative z-10 my-auto py-6">
              <div className="text-[11px] tracking-widest text-[#d4af37] uppercase mb-2">
                EXPERIÊNCIA & TRADIÇÃO
              </div>
              <h4 className="text-2xl sm:text-4xl font-serif text-white font-normal leading-tight">
                O ritual clássico do homem contemporâneo.
              </h4>
              <p className="mt-3 text-xs sm:text-sm text-stone-300 max-w-md leading-relaxed font-light">
                Landing page concebida para converter clientes exigentes com agendamento fluido, exibição de cortes e ambiente privativo.
              </p>

              {/* Service Cards Snapshot */}
              <div className="grid grid-cols-2 gap-3 mt-5 max-w-sm">
                <div className="p-2.5 rounded bg-stone-900/80 border border-stone-800">
                  <div className="text-xs text-white font-medium">Corte & Barboterapia</div>
                  <div className="text-[11px] text-[#d4af37] mt-0.5">Toalha quente & Navalha</div>
                </div>
                <div className="p-2.5 rounded bg-stone-900/80 border border-stone-800">
                  <div className="text-xs text-white font-medium">Agendamento Online</div>
                  <div className="text-[11px] text-emerald-400 mt-0.5">Disponível em 1 clique</div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="relative z-10 flex items-center justify-between text-[11px] text-stone-400 pt-3 border-t border-stone-800">
              <span>AGENDAMENTO PREMIUM</span>
              <span className="text-[#f3d97f]">PROJETO 03</span>
            </div>
          </div>
        );

      case 'aura-mu-pied':
        return (
          <div className="relative w-full h-full bg-[#120e0d] overflow-hidden flex flex-col justify-between p-6 sm:p-10 font-sans">
            {/* Soft terracotta and rose aura */}
            <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#bfa094]/15 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="relative z-10 flex items-center justify-between border-b border-[#bfa094]/20 pb-4">
              <span className="text-xs tracking-[0.3em] text-[#debdb1] font-light uppercase">
                AURA MU PIED · SOINS
              </span>
              <span className="text-[11px] text-[#debdb1]/70 italic font-serif">
                Rituel & Bien-être
              </span>
            </div>

            {/* Visual Hero */}
            <div className="relative z-10 my-auto py-6">
              <div className="text-[10px] tracking-[0.25em] text-[#debdb1] uppercase mb-2">
                WELLNESS & ORGANIC CARE
              </div>
              <h4 className="text-2xl sm:text-4xl font-serif text-white font-light leading-snug">
                Harmonia essencial para o corpo e a mente.
              </h4>
              <p className="mt-3 text-xs sm:text-sm text-[#d4c2ba] max-w-md leading-relaxed font-light">
                Uma identidade digital etérea e refinada com transições táteis, tipografia editorial e apresentação sensorial de produtos.
              </p>

              <div className="mt-5 flex items-center gap-3">
                <div className="px-3 py-1 rounded-full bg-[#bfa094]/10 border border-[#bfa094]/25 text-[11px] text-[#debdb1]">
                  ✦ 100% Orgânico
                </div>
                <div className="px-3 py-1 rounded-full bg-[#bfa094]/10 border border-[#bfa094]/25 text-[11px] text-[#debdb1]">
                  ✦ Rituais Terapêuticos
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="relative z-10 flex items-center justify-between text-[11px] text-[#debdb1]/60 pt-3 border-t border-white/5">
              <span>BRANDING DIGITAL & ELEVADA ESTÉTICA</span>
              <span className="text-[#debdb1]">PROJETO 04</span>
            </div>
          </div>
        );

      case 'brasa-burger':
        return (
          <div className="relative w-full h-full bg-[#140805] overflow-hidden flex flex-col justify-between p-6 sm:p-10 font-sans">
            {/* Fiery ember glow */}
            <div className="absolute top-0 right-1/4 w-80 h-80 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="relative z-10 flex items-center justify-between border-b border-orange-500/20 pb-4">
              <div className="flex items-center space-x-2">
                <Flame className="w-5 h-5 text-orange-500 animate-pulse" />
                <span className="text-xs tracking-wider text-orange-400 font-extrabold uppercase">
                  BRASA BURGER · ARTESANAL
                </span>
              </div>
              <div className="text-[11px] font-bold text-orange-300 bg-orange-950/80 border border-orange-500/30 px-3 py-1 rounded">
                GRELHADO NO FOGO FORTE
              </div>
            </div>

            {/* Visual Hero */}
            <div className="relative z-10 my-auto py-6">
              <div className="text-[11px] font-bold tracking-widest text-orange-500 uppercase mb-2">
                // SABOR DEFUMADO & SUCULÊNCIA REAL
              </div>
              <h4 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight leading-none">
                O Verdadeiro Burger <br />
                <span className="text-orange-500">Feito na Brasa.</span>
              </h4>
              <p className="mt-3 text-xs sm:text-sm text-stone-300 max-w-md leading-relaxed">
                Landing page com visual apetitoso de alto impacto, cardápio interativo e direcionamento instantâneo para pedidos e delivery.
              </p>

              <div className="mt-5 flex items-center gap-3">
                <div className="px-3 py-1.5 rounded bg-orange-600 text-white text-xs font-bold shadow-lg shadow-orange-600/30">
                  Cardápio Digital
                </div>
                <div className="px-3 py-1.5 rounded bg-neutral-900 border border-orange-500/30 text-orange-200 text-xs">
                  Blend Angus 180g
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="relative z-10 flex items-center justify-between text-[11px] text-stone-400 pt-3 border-t border-orange-500/20">
              <span>ALTA CONVERSÃO & PEDIDO RÁPIDO</span>
              <span className="text-orange-400">PROJETO 05</span>
            </div>
          </div>
        );

      case 'atendeia':
        return (
          <div className="relative w-full h-full bg-[#050e17] overflow-hidden flex flex-col justify-between p-6 sm:p-10 font-sans">
            {/* Modern SaaS cyan glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="relative z-10 flex items-center justify-between border-b border-sky-500/20 pb-4">
              <div className="flex items-center space-x-2">
                <Layers className="w-5 h-5 text-sky-400" />
                <span className="text-xs tracking-wider text-white font-bold uppercase">
                  ATENDE<span className="text-sky-400">IA</span>
                </span>
              </div>
              <div className="flex items-center space-x-2 text-[11px] text-sky-300 bg-sky-950/60 border border-sky-800/40 px-3 py-1 rounded-md">
                <TrendingUp className="w-3.5 h-3.5 text-sky-400" />
                <span>TAXA DE ATENDIMENTO 99.4%</span>
              </div>
            </div>

            {/* Visual Hero */}
            <div className="relative z-10 my-auto py-6">
              <div className="text-[11px] font-mono text-sky-400 tracking-wider mb-2 uppercase">
                // PLATAFORMA SAAS INTELIGENTE
              </div>
              <h4 className="text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                Organização, Pedidos & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-300">
                  Atendimento em Tempo Real.
                </span>
              </h4>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed font-light">
                Interface intuitiva de gestão projetada para centralizar orçamentos, funil de vendas e suporte automatizado para empresas em expansão.
              </p>

              {/* SaaS Metrics bar */}
              <div className="grid grid-cols-3 gap-2 mt-5 max-w-md">
                <div className="p-2 rounded bg-slate-900/90 border border-sky-900/50">
                  <div className="text-[10px] text-slate-400">Tempo de Resposta</div>
                  <div className="text-xs font-bold text-sky-300">&lt; 30 segundos</div>
                </div>
                <div className="p-2 rounded bg-slate-900/90 border border-sky-900/50">
                  <div className="text-[10px] text-slate-400">Clientes Ativos</div>
                  <div className="text-xs font-bold text-white">+1.400 empresas</div>
                </div>
                <div className="p-2 rounded bg-slate-900/90 border border-sky-900/50">
                  <div className="text-[10px] text-slate-400">Automação</div>
                  <div className="text-xs font-bold text-emerald-400">24/7 Ativa</div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="relative z-10 flex items-center justify-between text-[11px] text-slate-400 pt-3 border-t border-sky-500/20">
              <span>SAAS PRODUCT & DASHBOARD DESIGN</span>
              <span className="text-sky-400">PROJETO 06</span>
            </div>
          </div>
        );

      case 'zapflow-ai':
        return (
          <div className="relative w-full h-full bg-[#050e12] overflow-hidden flex flex-col justify-between p-6 sm:p-10 font-sans">
            {/* AI Emerald & Teal ambient lighting */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="relative z-10 flex items-center justify-between border-b border-emerald-500/20 pb-4">
              <div className="flex items-center space-x-2.5">
                <div className="w-6 h-6 rounded-lg bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center">
                  <Bot className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <span className="text-xs tracking-wider text-white font-bold uppercase">
                  ZAPFLOW <span className="text-emerald-400">AI</span>
                </span>
              </div>
              <div className="flex items-center space-x-2 text-[11px] text-emerald-300 bg-emerald-950/60 border border-emerald-700/40 px-3 py-1 rounded-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>DEMONSTRAÇÃO DO SISTEMA · IA ATIVA</span>
              </div>
            </div>

            {/* Visual Dashboard Presentation */}
            <div className="relative z-10 my-auto py-6">
              <div className="text-[11px] font-mono text-emerald-400 tracking-wider mb-2 uppercase flex items-center gap-1.5">
                <Zap className="w-3 h-3 text-emerald-400" />
                <span>// AUTOMAÇÃO & GESTÃO COM INTELIGÊNCIA ARTIFICIAL</span>
              </div>
              <h4 className="text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                Atendimento Inteligente, Agendamentos & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                  Painel de Gestão Completo.
                </span>
              </h4>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 max-w-lg leading-relaxed font-light">
                Sistema automatizado com IA para atendimento ágil, controle de clientes, agendamentos e automação de fluxos com interface moderna.
              </p>

              {/* System Features & Modules Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-5 max-w-xl">
                <div className="p-2.5 rounded-lg bg-slate-900/90 border border-emerald-900/40">
                  <div className="flex items-center gap-1 text-[10px] text-slate-400 mb-1">
                    <Bot className="w-3 h-3 text-emerald-400" />
                    <span>Atendimento IA</span>
                  </div>
                  <div className="text-xs font-bold text-emerald-300">Triagem Rápida</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/90 border border-emerald-900/40">
                  <div className="flex items-center gap-1 text-[10px] text-slate-400 mb-1">
                    <Users className="w-3 h-3 text-teal-400" />
                    <span>Gestão de Clientes</span>
                  </div>
                  <div className="text-xs font-bold text-white">Histórico & CRM</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/90 border border-emerald-900/40">
                  <div className="flex items-center gap-1 text-[10px] text-slate-400 mb-1">
                    <Calendar className="w-3 h-3 text-cyan-400" />
                    <span>Agendamentos</span>
                  </div>
                  <div className="text-xs font-bold text-cyan-300">Controle de Horários</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/90 border border-emerald-900/40">
                  <div className="flex items-center gap-1 text-[10px] text-slate-400 mb-1">
                    <Activity className="w-3 h-3 text-emerald-400" />
                    <span>Painel Admin</span>
                  </div>
                  <div className="text-xs font-bold text-emerald-400">Automações</div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="relative z-10 flex items-center justify-between text-[11px] text-slate-400 pt-3 border-t border-emerald-500/20">
              <span className="font-mono">SISTEMA DE ATENDIMENTO & PAINEL ADMINISTRATIVO</span>
              <span className="text-emerald-400 font-mono font-bold">PROJETO 07</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-full flex items-center justify-center p-8 bg-neutral-900 text-white">
            <h4 className="text-2xl font-bold">{project.name}</h4>
          </div>
        );
    }
  };

  return (
    <div 
      className={`group relative w-full ${
        isGrandHighlight 
          ? 'h-[460px] sm:h-[540px] lg:h-[620px] rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]' 
          : 'h-[360px] sm:h-[440px] lg:h-[480px] rounded-2xl shadow-2xl'
      } overflow-hidden border border-white/10 transition-all duration-700 ease-out hover:border-white/30 hover:shadow-[0_30px_70px_rgba(0,0,0,0.95)] ${
        isHovered && isGrandHighlight ? 'scale-[1.012] -translate-y-1.5' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Browser Bar */}
      <div className="h-11 bg-[#0c0d12]/95 backdrop-blur border-b border-white/10 px-5 flex items-center justify-between select-none z-20 relative">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          <span className="ml-3 text-[11px] font-mono text-white/50 hidden sm:inline-block truncate max-w-[280px]">
            {project.url.replace('https://', '')}
          </span>
        </div>

        <div className="flex items-center space-x-2.5">
          {onOpenPreviewModal && (
            <button
              onClick={() => onOpenPreviewModal(project)}
              className="px-3 py-1.5 text-[11px] font-medium text-white/70 hover:text-white bg-white/5 hover:bg-white/15 rounded-md flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Expandir prévia em modal"
            >
              <Maximize2 className="w-3 h-3" />
              <span className="hidden md:inline">Expandir</span>
            </button>
          )}

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-3.5 py-1.5 text-[11px] font-semibold rounded-md flex items-center gap-1.5 transition-all duration-300 cursor-pointer ${
              isGrandHighlight
                ? 'bg-white text-black hover:bg-[#f3dfba] shadow-md'
                : 'text-white bg-white/10 hover:bg-white/20'
            }`}
            title="Abrir site oficial"
          >
            <span>Ver projeto</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Main Canvas Presentation */}
      <div className="relative w-full h-[calc(100%-44px)] overflow-hidden">
        <div className={`w-full h-full transition-transform duration-700 ease-out ${
          isHovered ? 'scale-[1.02]' : 'scale-100'
        }`}>
          {renderVisualInterface()}
        </div>

        {/* Hover Overlay with Action Buttons */}
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-[2px] transition-all duration-500 flex items-center justify-center gap-3.5 p-4 z-30 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
          }`}
        >
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-full bg-white text-black font-bold text-xs tracking-widest uppercase flex items-center gap-2.5 shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span>Ver projeto real</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {onOpenPreviewModal && (
            <button
              onClick={() => onOpenPreviewModal(project)}
              className="px-5 py-3.5 rounded-full bg-neutral-900/90 text-white border border-white/20 font-medium text-xs tracking-wider uppercase flex items-center gap-2 hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              <Eye className="w-4 h-4 text-white/80" />
              <span>Explorar</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
