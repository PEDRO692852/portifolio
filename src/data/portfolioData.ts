import { BrandConfig, Project, Service, ProcessStep, Concept } from '../types';

/**
 * ============================================================================
 * CONFIGURAÇÃO DA IDENTIDADE E MARCA (FÁCIL DE EDITAR)
 * ============================================================================
 */
export const BRAND_CONFIG: BrandConfig = {
  name: 'VÉRTICE DIGITAL',
  shortName: 'VÉRTICE',
  authorName: 'Pedro Domingues',
  positioning: 'Sites que fazem marcas serem percebidas.',
  subtext: 'Experiências digitais personalizadas para marcas que querem ir além do comum.',
  heroSubtitle: 'Design, desenvolvimento e experiências digitais criadas para transformar a presença online de uma marca.',
  whatsappNumber: '5561981767473',
  whatsappDisplay: '+55 61 98176-7473',
  email: 'dominguespedro582@gmail.com',
  location: 'Brasil · Atendimento Global',
  availability: 'Disponível para novos projetos selecionados',
  instagramUrl: 'https://instagram.com/',
  githubUrl: 'https://github.com/',
  // linkedinUrl: 'https://linkedin.com/in/...', // Preparado para quando criar
};

/**
 * Gera o link direto para o WhatsApp com mensagem personalizada
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const defaultMessage = 'Olá, Pedro! Vi seu portfólio e gostaria de conversar sobre um projeto.';
  const message = encodeURIComponent(customMessage || defaultMessage);
  return `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${message}`;
}

/**
 * ============================================================================
 * PROJETOS SELECIONADOS
 * ============================================================================
 */
export const PROJECTS: Project[] = [
  {
    id: 'vertice-casa',
    number: '01',
    name: 'VÉRTICE CASA',
    category: 'Arquitetura · Experiência digital',
    description: 'Uma experiência digital cinematográfica criada para apresentar uma residência contemporânea de alto padrão.',
    url: 'https://vertice-casa.vercel.app/',
    featured: true,
    year: '2025',
    tags: ['Arquitetura Contemporânea', 'Experiência Cinematográfica', 'Design Editorial', 'Alto Padrão'],
    metrics: 'Experiência Cinematográfica de Alto Padrão',
    theme: {
      accentColor: '#c29d59', // Dourado sutil
      badgeBg: 'rgba(194, 157, 89, 0.12)',
      badgeText: '#e5ca93',
      gradient: 'from-[#1c1710] to-[#0c0d10]',
    },
  },
  {
    id: 'aviap',
    number: '02',
    name: 'AVIAP',
    category: 'Aviação · Experiência digital',
    description: 'Uma experiência digital editorial inspirada no universo da aviação, construída para transformar a navegação em uma jornada.',
    url: 'https://aviaosite.vercel.app/',
    featured: true,
    year: '2025',
    tags: ['Aviação Executiva', 'Narrativa Visual', 'Interações Avançadas', 'Tipografia Editorial'],
    metrics: 'Jornada Digital Interativa',
    theme: {
      accentColor: '#4f8cff', // Azul aero
      badgeBg: 'rgba(79, 140, 255, 0.12)',
      badgeText: '#90b8ff',
      gradient: 'from-[#0b1424] to-[#080a0f]',
    },
  },
  {
    id: 'loyal-barbearia',
    number: '03',
    name: 'LOYAL BARBEARIA',
    category: 'Barbearia · Landing page premium',
    description: 'Uma presença digital sofisticada para uma barbearia de alto padrão, com foco em experiência, serviços e agendamento.',
    url: 'https://loyal-barbearia.vercel.app/',
    featured: false,
    year: '2025',
    tags: ['Barbearia Clássica', 'Agendamento Direto', 'Branding Dark', 'Conversão'],
    metrics: 'Presença Digital de Alta Conversão',
    theme: {
      accentColor: '#d4af37', // Ouro velho
      badgeBg: 'rgba(212, 175, 55, 0.12)',
      badgeText: '#f3d97f',
      gradient: 'from-[#1a160d] to-[#0a0a0c]',
    },
  },
  {
    id: 'aura-mu-pied',
    number: '04',
    name: 'AURA MU PIED',
    category: 'Bem-estar · Branding digital',
    description: 'Uma experiência digital elegante criada para apresentar uma marca de cuidado e bem-estar.',
    url: 'https://aura-mu-pied.vercel.app/',
    featured: false,
    year: '2025',
    tags: ['Cuidado & Estética', 'Minimalismo Orgânico', 'Fotografia Curada', 'Harmonia Visual'],
    metrics: 'Posicionamento e Identidade Digital',
    theme: {
      accentColor: '#bfa094', // Rosa terracota suave
      badgeBg: 'rgba(191, 160, 148, 0.12)',
      badgeText: '#debdb1',
      gradient: 'from-[#191312] to-[#090a0d]',
    },
  },
  {
    id: 'brasa-burger',
    number: '05',
    name: 'BRASA BURGER',
    category: 'Gastronomia · Landing page',
    description: 'Uma experiência digital para uma marca gastronômica, combinando identidade visual, cardápio e conversão.',
    url: 'https://hamburgueria-five-xi.vercel.app/',
    featured: false,
    year: '2025',
    tags: ['Gastronomia Gourmet', 'Cardápio Interativo', 'Direcionamento WhatsApp/iFood', 'Apetite Visual'],
    metrics: 'Cardápio Visual e Engajamento',
    theme: {
      accentColor: '#e05338', // Fogo/Brasa
      badgeBg: 'rgba(224, 83, 56, 0.12)',
      badgeText: '#ff8a73',
      gradient: 'from-[#220d08] to-[#0a0a0d]',
    },
  },
  {
    id: 'atendeia',
    number: '06',
    name: 'ATENDEIA',
    category: 'SaaS · Produto digital',
    description: 'Um conceito de plataforma digital focada em organização de clientes, pedidos, orçamentos e atendimento.',
    url: 'https://atende-ia-roan.vercel.app/',
    featured: false,
    year: '2025',
    tags: ['Plataforma SaaS', 'UI/UX de Gestão', 'Dashboard Integrado', 'Fluxos Operacionais'],
    metrics: 'Gestão Inteligente & Automação',
    theme: {
      accentColor: '#38bdf8', // Cyan moderno
      badgeBg: 'rgba(56, 189, 248, 0.12)',
      badgeText: '#7dd3fc',
      gradient: 'from-[#081826] to-[#07090d]',
    },
  },
];

/**
 * ============================================================================
 * CONCEITOS DA SEÇÃO SOBRE
 * ============================================================================
 */
export const ABOUT_CONCEPTS: Concept[] = [
  {
    number: '01',
    title: 'Estratégia',
    description: 'Entender o negócio antes de construir.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Criar uma identidade visual que faça sentido para a marca.',
  },
  {
    number: '03',
    title: 'Experiência',
    description: 'Transformar navegação em uma experiência memorável.',
  },
];

/**
 * ============================================================================
 * SERVIÇOS
 * ============================================================================
 */
export const SERVICES: Service[] = [
  {
    id: 'landing-pages',
    number: '01',
    title: 'LANDING PAGES',
    description: 'Páginas focadas em apresentar negócios, produtos e serviços e gerar contatos.',
    deliverables: [
      'Estrutura focada em conversão',
      'Copywriting estratégico alinhado',
      'Integração direta com WhatsApp e CRM',
      'Tempo de carregamento ultra-rápido',
    ],
  },
  {
    id: 'sites-premium',
    number: '02',
    title: 'SITES PREMIUM',
    description: 'Sites personalizados para marcas que precisam de uma presença digital mais sofisticada.',
    deliverables: [
      'Identidade visual e direção de arte única',
      'Múltiplas páginas com hierarquia fluida',
      'Layout sob medida sem templates prontos',
      'Responsividade milimétrica em qualquer tela',
    ],
  },
  {
    id: 'experiencias-interativas',
    number: '03',
    title: 'EXPERIÊNCIAS INTERATIVAS',
    description: 'Sites com animações, storytelling e interações pensadas para tornar a navegação memorável.',
    deliverables: [
      'Microinterações e transições fluidas',
      'Storytelling que guia a atenção do usuário',
      'Sensação de produto digital de vanguarda',
      'Design sonoro e visual imersivo',
    ],
  },
];

/**
 * ============================================================================
 * PROCESSO DE TRABALHO
 * ============================================================================
 */
export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Descoberta',
    description: 'Entendo a marca, o público e o objetivo.',
  },
  {
    number: '02',
    title: 'Direção',
    description: 'Defino a linguagem visual e a estrutura.',
  },
  {
    number: '03',
    title: 'Desenvolvimento',
    description: 'Transformo o conceito em uma experiência real e responsiva.',
  },
  {
    number: '04',
    title: 'Lançamento',
    description: 'Publico, testo e entrego o projeto.',
  },
];
