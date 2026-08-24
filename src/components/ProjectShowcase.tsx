import React from 'react';
import { Project } from '../types';
import { ProjectMockup } from './ProjectMockup';
import { ArrowUpRight, Sparkles, Eye, Compass, CornerRightDown } from 'lucide-react';

interface ProjectShowcaseProps {
  projects: Project[];
  onOpenPreviewModal: (project: Project) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ projects, onOpenPreviewModal }) => {
  const verticeCasaProject = projects.find((p) => p.id === 'vertice-casa') || projects[0];
  const secondaryProjects = projects.filter((p) => p.id !== 'vertice-casa');

  return (
    <section id="projetos" className="relative py-28 sm:py-36 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="max-w-3xl mb-16 sm:mb-24">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-white/70 text-xs font-mono tracking-widest uppercase mb-6">
          <Sparkles className="w-3.5 h-3.5 text-white/80" />
          <span>Curadoria de Trabalhos</span>
        </div>

        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
          Projetos selecionados
        </h2>

        <p className="mt-6 text-base sm:text-lg text-white/60 font-light leading-relaxed">
          Projetos concebidos para transformar a presença online de marcas através de design autoral, narrativa e experiências digitais memoráveis.
        </p>
      </div>

      {/* ========================================================================= */}
      {/* FLAGSHIP HERO SHOWCASE: VÉRTICE CASA */}
      {/* ========================================================================= */}
      {verticeCasaProject && (
        <div className="mb-32 sm:mb-44">
          <div className="relative group rounded-3xl p-6 sm:p-10 lg:p-14 bg-gradient-to-b from-white/[0.04] via-white/[0.015] to-transparent border border-white/10 hover:border-white/20 transition-all duration-700">
            
            {/* Subtle Flagship Indicator */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <span className="font-mono text-sm font-semibold text-[#e5ca93] tracking-widest">
                  PROJETO PRINCIPAL {verticeCasaProject.number}
                </span>
                <span className="w-8 h-[1px] bg-[#c29d59]/40" />
                <span className="text-xs uppercase tracking-widest font-medium px-3 py-1 rounded-full bg-[#c29d59]/10 text-[#e5ca93] border border-[#c29d59]/20">
                  {verticeCasaProject.category}
                </span>
              </div>

              <a
                href={verticeCasaProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-1.5 text-xs font-mono text-white/60 hover:text-[#e5ca93] transition-colors"
              >
                <span>Explorar projeto</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
            </div>

            {/* Giant Visual Preview Stage */}
            <div className="w-full mb-10 sm:mb-12">
              <ProjectMockup 
                project={verticeCasaProject} 
                onOpenPreviewModal={onOpenPreviewModal}
                isGrandHighlight={true}
              />
            </div>

            {/* Flagship Editorial Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pt-6 border-t border-white/10">
              <div className="lg:col-span-7">
                <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                  {verticeCasaProject.name}
                </h3>
                <p className="mt-4 text-base sm:text-lg text-white/70 font-light leading-relaxed max-w-2xl">
                  {verticeCasaProject.description}
                </p>

                {/* Architectural Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {verticeCasaProject.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 rounded-full text-xs font-mono text-white/60 bg-white/[0.03] border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-start lg:justify-end gap-4">
                <a
                  href={verticeCasaProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-[#f3dfba] transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95 flex items-center justify-center gap-3 cursor-pointer group/btn"
                >
                  <span>Ver projeto</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </a>

                <button
                  onClick={() => onOpenPreviewModal(verticeCasaProject)}
                  className="px-6 py-4 rounded-full bg-white/5 hover:bg-white/15 text-white/80 hover:text-white border border-white/10 text-xs font-semibold tracking-widest uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Eye className="w-4 h-4 text-white/60" />
                  <span>Explorar tela</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SECONDARY SELECTED PROJECTS LIST */}
      {/* ========================================================================= */}
      <div className="space-y-28 sm:space-y-36">
        {secondaryProjects.map((project, index) => {
          const isReversed = index % 2 !== 0;

          return (
            <div
              key={project.id}
              className={`flex flex-col ${
                isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } items-center gap-10 sm:gap-14 lg:gap-16 relative`}
            >
              {/* Visual Preview Column */}
              <div className="w-full lg:w-7/12">
                <ProjectMockup project={project} onOpenPreviewModal={onOpenPreviewModal} />
              </div>

              {/* Project Meta / Description Column */}
              <div className="w-full lg:w-5/12 flex flex-col justify-center">
                {/* Project Number & Category */}
                <div className="flex items-center space-x-3 mb-4">
                  <span className="font-mono text-sm font-semibold text-white/40 tracking-wider">
                    {project.number}
                  </span>
                  <span className="w-6 h-[1px] bg-white/20" />
                  <span 
                    className="text-xs uppercase tracking-wider font-medium px-2.5 py-1 rounded-full border"
                    style={{
                      backgroundColor: project.theme.badgeBg,
                      color: project.theme.badgeText,
                      borderColor: 'rgba(255,255,255,0.08)'
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                  {project.name}
                </h3>

                {/* Short Description */}
                <p className="mt-4 text-sm sm:text-base text-white/70 font-light leading-relaxed">
                  {project.description}
                </p>

                {/* Tags List */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono text-white/50 bg-white/[0.03] border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex items-center gap-4">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-all duration-300 shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    <span>Ver projeto</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => onOpenPreviewModal(project)}
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white/5 hover:bg-white/15 text-white/80 hover:text-white border border-white/10 text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer"
                  >
                    <span>Explorar tela</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

