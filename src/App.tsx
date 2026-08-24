import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectShowcase } from './components/ProjectShowcase';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { PROJECTS } from './data/portfolioData';
import { Project } from './types';

export default function App() {
  const [selectedPreviewProject, setSelectedPreviewProject] = useState<Project | null>(null);
  const [selectedService, setSelectedService] = useState<string>('Site Premium');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    scrollToSection('contato');
  };

  return (
    <div className="relative min-h-screen bg-[#08090c] text-[#e4e7ec] bg-grid-pattern overflow-x-hidden selection:bg-white selection:text-black">
      {/* Subtle global gradient glow */}
      <div className="fixed inset-0 bg-radial-gradient pointer-events-none z-0" />

      {/* Navigation */}
      <Navbar onNavigate={scrollToSection} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* 1. Hero */}
        <Hero
          onExploreProjects={() => scrollToSection('projetos')}
          onContactClick={() => scrollToSection('contato')}
        />

        {/* 2. Projetos Selecionados */}
        <ProjectShowcase
          projects={PROJECTS}
          onOpenPreviewModal={(project) => setSelectedPreviewProject(project)}
        />

        {/* 3. Sobre */}
        <AboutSection />

        {/* 4. Serviços */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 5. Processo */}
        <ProcessSection />

        {/* 6. CTA Final */}
        <CtaSection initialService={selectedService} />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Interactive Project Preview Modal */}
      <ProjectModal
        project={selectedPreviewProject}
        onClose={() => setSelectedPreviewProject(null)}
      />
    </div>
  );
}
