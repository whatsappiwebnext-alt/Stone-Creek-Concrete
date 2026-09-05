import React, { useState } from "react";
import { CONCRETE_SERVICES } from "../data/concreteData";
import { ConcreteService } from "../types";
import { ArrowRight, Check, Sparkles, X, ChevronRight, Layers, Shield } from "lucide-react";

interface ServicesSectionProps {
  onOpenQuote: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenQuote }) => {
  const [selectedService, setSelectedService] = useState<ConcreteService | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const filteredServices = filter === "all"
    ? CONCRETE_SERVICES
    : CONCRETE_SERVICES.filter(s => s.category === filter);

  return (
    <section id="services" className="py-16 md:py-24 bg-white text-slate-900 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="h-[1.5px] w-8 bg-blue-600"></span>
              <span className="text-xs uppercase tracking-[0.35em] font-bold text-blue-600">
                Comprehensive Concrete Services
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight uppercase">
              Engineered Concrete Solutions
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mt-3 leading-relaxed font-normal">
              Serving residential homeowners and commercial property managers throughout Fargo, North Dakota. Every project is formed with precision, reinforced for durability, and finished to high industry standards.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {[
              { id: "all", label: "All Services (10)" },
              { id: "residential", label: "Residential Flatwork" },
              { id: "decorative", label: "Decorative & Stamped" },
              { id: "structural", label: "Slabs & Foundations" },
              { id: "commercial", label: "Commercial" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`text-xs uppercase tracking-wider px-3.5 py-2 rounded-sm font-bold transition-all cursor-pointer ${
                  filter === tab.id
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                    : "bg-slate-100 text-slate-600 hover:text-blue-600 hover:bg-blue-50 border border-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-slate-200 hover:border-blue-500 rounded-sm overflow-hidden flex flex-col justify-between group transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              <div>
                {/* Image Header with Badge */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={service.imageUrl}
                    alt={`${service.title} concrete work by Stone Creek Concrete LLC in Fargo ND`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 text-[9px] uppercase font-bold tracking-[0.2em] px-2.5 py-1 rounded-sm bg-white/95 backdrop-blur-md text-blue-700 border border-blue-200 shadow-sm">
                    {service.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold uppercase text-slate-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-normal">
                    {service.shortDescription}
                  </p>

                  {/* Bullet Key Points */}
                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <div key={i} className="flex items-start text-xs text-slate-700 font-medium">
                        <Check className="w-3.5 h-3.5 text-blue-600 mr-2 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="p-6 pt-0 flex items-center justify-between gap-2 border-t border-slate-100 mt-4 pt-4">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-blue-600 flex items-center cursor-pointer"
                >
                  <span>Specs & Details</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-0.5 text-blue-600" />
                </button>

                <button
                  onClick={() => onOpenQuote(service.title)}
                  className="text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-sm bg-blue-600 hover:bg-blue-700 text-white shadow-sm shadow-blue-600/20 transition-all cursor-pointer flex items-center"
                >
                  <span>Quote</span>
                  <ArrowRight className="w-3 h-3 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Service Detail Modal */}
        {selectedService && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white border border-slate-200 rounded-sm max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 text-slate-900 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
              {/* Close button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 rounded-sm bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.25em] font-bold text-blue-600 mb-1">
                <Layers className="w-4 h-4" />
                <span>Service Specification</span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase tracking-tight text-slate-950 mb-3">
                {selectedService.title}
              </h3>

              <div className="rounded-sm overflow-hidden aspect-[16/9] mb-5 bg-slate-100 border border-slate-200">
                <img
                  src={selectedService.imageUrl}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                {selectedService.fullDescription}
              </p>

              {/* Technical Specifications Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 bg-blue-50/60 p-4 rounded-sm border border-blue-100">
                <div>
                  <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-500">
                    Slab Thickness
                  </p>
                  <p className="text-xs font-bold text-slate-900 mt-1">
                    {selectedService.recommendedThickness}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-500">
                    Reinforcement
                  </p>
                  <p className="text-xs font-bold text-slate-900 mt-1">
                    {selectedService.typicalReinforcement}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-500">
                    Surface Finish
                  </p>
                  <p className="text-xs font-bold text-blue-700 mt-1">
                    {selectedService.idealFinish}
                  </p>
                </div>
              </div>

              {/* Workmanship Features */}
              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-slate-900 mb-3">
                  Stone Creek Workmanship Standards
                </h4>
                <div className="space-y-2">
                  {selectedService.features.map((feat, i) => (
                    <div key={i} className="flex items-start text-xs sm:text-sm text-slate-700 font-normal">
                      <Check className="w-4 h-4 text-blue-600 mr-2 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-200">
                <button
                  onClick={() => {
                    const title = selectedService.title;
                    setSelectedService(null);
                    onOpenQuote(title);
                  }}
                  className="w-full sm:w-auto flex-1 py-3.5 px-6 rounded-sm bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase text-xs tracking-widest text-center shadow-md shadow-blue-600/25 transition-all"
                >
                  Request a Free Quote for {selectedService.title}
                </button>
                <button
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto py-3.5 px-6 rounded-sm bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs uppercase font-bold tracking-wider transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
