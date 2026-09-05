import React from "react";
import { TESTIMONIALS_SAMPLE } from "../data/concreteData";
import { Star, MessageSquare, Quote } from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50 text-slate-900 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="h-[1.5px] w-8 bg-blue-600"></span>
            <span className="text-xs uppercase tracking-[0.35em] font-bold text-blue-600">
              Client Experiences
            </span>
            <span className="h-[1.5px] w-8 bg-blue-600"></span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-slate-950 tracking-tight">
            Committed to Customer Satisfaction
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-2 font-normal">
            Clear communication, on-schedule performance, and concrete flatwork finished with pride.
          </p>
          <p className="text-[10px] uppercase tracking-wider text-slate-400 mt-1 font-mono">
            *Representative project feedback from recent Fargo-area concrete installations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS_SAMPLE.map((t) => (
            <div
              key={t.id}
              className="bg-white border border-slate-200 rounded-sm p-6 sm:p-8 flex flex-col justify-between shadow-sm relative group hover:border-blue-400 hover:shadow-md transition-all"
            >
              <Quote className="w-8 h-8 text-blue-100 group-hover:text-blue-200 transition-colors absolute top-4 right-4" />

              <div>
                {/* 5 Stars */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-blue-600 text-blue-600" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal italic">
                  "{t.comment}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-900">{t.clientName}</p>
                <div className="flex items-center justify-between text-[11px] text-slate-500 mt-1 font-normal">
                  <span>{t.location}</span>
                  <span className="text-blue-600 font-bold uppercase text-[10px] tracking-wider">{t.projectType}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

