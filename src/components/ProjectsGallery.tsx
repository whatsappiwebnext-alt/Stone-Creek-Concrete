import React, { useState } from "react";
import { GALLERY_PROJECTS } from "../data/concreteData";
import { GalleryProject } from "../types";
import { Maximize2, X, MapPin, Layers, CheckCircle, ArrowRight } from "lucide-react";

interface ProjectsGalleryProps {
  onOpenQuote: (serviceName?: string) => void;
}

export const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({ onOpenQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<GalleryProject | null>(null);

  const categories = [
    "All",
    "Driveways",
    "Patios",
    "Sidewalks",
    "Decorative Concrete",
    "Foundations",
    "Commercial Projects",
  ];

  const filteredProjects = selectedCategory === "All"
    ? GALLERY_PROJECTS
    : GALLERY_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-16 md:py-24 bg-slate-50 text-slate-900 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="h-[1.5px] w-8 bg-blue-600"></span>
            <span className="text-xs uppercase tracking-[0.35em] font-bold text-blue-600">
              Craftsmanship in Action
            </span>
            <span className="h-[1.5px] w-8 bg-blue-600"></span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-slate-950 tracking-tight">
            Featured Concrete Projects & Gallery
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed font-normal">
            A showcase of recent residential and commercial flatwork completed across Fargo, North Dakota and surrounding communities. Click any project to inspect specs, finishes, and dimensions.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs uppercase tracking-wider px-3.5 py-2 rounded-sm font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                  : "bg-white text-slate-600 hover:text-blue-600 hover:bg-blue-50 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group relative rounded-sm overflow-hidden bg-white border border-slate-200 hover:border-blue-500 cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>

                {/* Top Badge */}
                <div className="absolute top-3 left-3 flex items-center space-x-2">
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded-sm bg-white/95 backdrop-blur-md text-blue-700 border border-blue-200 shadow-sm">
                    {project.category}
                  </span>
                </div>

                {/* Maximize Icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-sm bg-white/90 backdrop-blur-md flex items-center justify-center text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity border border-blue-200 shadow-sm">
                  <Maximize2 className="w-3.5 h-3.5 text-blue-600" />
                </div>

                {/* Bottom Details Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center space-x-1.5 text-white/80 text-xs mb-1 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="font-heading text-base font-bold uppercase text-white group-hover:text-blue-300 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-white/70 mt-1 line-clamp-1 font-normal">
                    {project.specs}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeProject && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-white border border-slate-200 rounded-sm max-w-3xl w-full max-h-[92vh] overflow-y-auto text-slate-900 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-sm bg-white/90 hover:bg-white text-slate-700 backdrop-blur-md transition-colors border border-slate-200 shadow-sm"
                aria-label="Close project view"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Large Image Header */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={activeProject.imageUrl}
                  alt={activeProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-sm bg-white/95 backdrop-blur-md text-blue-700 border border-blue-200 shadow-sm">
                    {activeProject.category}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center space-x-2 text-xs text-slate-500 mb-1">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span>{activeProject.location}</span>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase text-slate-950 mb-2">
                  {activeProject.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  {activeProject.description}
                </p>

                {/* Specs Box */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 bg-blue-50/60 p-4 rounded-sm border border-blue-100">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-slate-500">
                      Project Dimensions & Specs
                    </p>
                    <p className="text-xs font-bold text-slate-900 mt-1">
                      {activeProject.specs}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-slate-500">
                      Finish & Texture Type
                    </p>
                    <p className="text-xs font-bold text-blue-700 mt-1">
                      {activeProject.finishType}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-200">
                  <button
                    onClick={() => {
                      const serviceTarget = activeProject.category;
                      setActiveProject(null);
                      onOpenQuote(serviceTarget);
                    }}
                    className="w-full sm:w-auto flex-1 py-3.5 px-6 rounded-sm bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase text-xs tracking-widest text-center shadow-md shadow-blue-600/20 transition-all"
                  >
                    Request a Project Like This
                  </button>
                  <button
                    onClick={() => setActiveProject(null)}
                    className="w-full sm:w-auto py-3.5 px-6 rounded-sm bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs uppercase font-bold tracking-wider transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
