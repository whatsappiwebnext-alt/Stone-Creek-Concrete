import React from "react";
import { BUSINESS_INFO } from "../data/concreteData";
import { ShieldCheck, Check, Layers, Award, Hammer, Compass, Users } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white text-slate-900 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image Collage & Craftsmanship Accent */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-sm overflow-hidden border border-slate-200 shadow-xl bg-slate-100">
              <img
                src="https://stonecreekconcretellc.com/images/gallery/gallery_61.jpg"
                alt="Stone Creek Concrete LLC concrete installation and craftsmanship in Fargo ND"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md border border-slate-200 rounded-sm p-4 shadow-lg">
                <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-blue-600">
                  Our Core Commitment
                </p>
                <p className="text-sm font-bold uppercase tracking-wider text-slate-900 mt-0.5">
                  "Precision, Punctuality, and Professionalism"
                </p>
                <p className="text-xs text-slate-600 mt-1 font-normal">
                  Treating concrete not just as a material, but as the foundation of your home or business.
                </p>
              </div>
            </div>

            {/* Quick credentials card */}
            <div className="mt-4 bg-slate-50 border border-slate-200 rounded-sm p-4 text-xs text-slate-700 flex flex-col space-y-1.5 shadow-xs">
              <div className="flex items-center gap-3 pb-2 mb-2 border-b border-slate-200">
                <img
                  src="/favicon.svg"
                  alt="Stone Creek Concrete LLC Emblem"
                  className="w-8 h-8 object-contain shrink-0"
                />
                <div>
                  <span className="font-heading font-bold uppercase tracking-wider text-slate-950 text-xs block">
                    Stone Creek Concrete LLC
                  </span>
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold block">
                    Fargo, North Dakota
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold uppercase tracking-wider text-slate-900">ND Contractor License:</span>
                <span className="font-mono font-semibold text-blue-600">#000046657</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold uppercase tracking-wider text-slate-900">Better Business Bureau:</span>
                <span className="font-semibold text-emerald-600">A+ Accredited</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold uppercase tracking-wider text-slate-900">HomeAdvisor:</span>
                <span className="font-semibold text-amber-600">5.0 Star Approved Pro</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold uppercase tracking-wider text-slate-900">Registered Office:</span>
                <span className="text-slate-600">1760 42nd St S, Fargo, ND</span>
              </div>

              {/* Official Badges from stonecreekconcretellc.com */}
              <div className="pt-2 mt-2 border-t border-slate-200 flex items-center justify-between gap-2">
                <img
                  src="https://seal-minnesota.bbb.org/seals/blue-seal-293-61-whitetxt-bbb-1000057183.png"
                  alt="BBB Accredited Business A+ Rating"
                  className="h-8 max-w-[140px] object-contain rounded-xs"
                  loading="lazy"
                />
                <div className="flex items-center gap-1.5">
                  <img
                    src="https://www.homeadvisor.com/images/sp-badges/elite-solid-border.png"
                    alt="HomeAdvisor Elite Service"
                    className="h-8 w-auto object-contain"
                    loading="lazy"
                  />
                  <img
                    src="https://www.homeadvisor.com/images/sp-badges/soap-solid-border.png"
                    alt="HomeAdvisor Top Rated"
                    className="h-8 w-auto object-contain"
                    loading="lazy"
                  />
                  <img
                    src="https://www.homeadvisor.com/images/sp-badges/1year-solid-border.png"
                    alt="HomeAdvisor Screened & Approved"
                    className="h-8 w-auto object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Mission, Values, and Workmanship Discipline */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="h-[1.5px] w-8 bg-blue-600"></span>
                <span className="text-xs uppercase tracking-[0.35em] font-bold text-blue-600">
                  About Stone Creek Concrete LLC
                </span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-slate-950 tracking-tight">
                Quality Craftsmanship. Durable Materials.
              </h2>
            </div>

            <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-medium italic border-l-2 border-blue-600 pl-4 bg-blue-50/50 py-2">
              "{BUSINESS_INFO.philosophy}"
            </p>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
              Based in Fargo, North Dakota, Stone Creek Concrete LLC delivers specialized concrete solutions for both residential and commercial projects. With years of experience in the concrete construction industry, our team of skilled and certified professionals is dedicated to bringing your unique vision to life.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              We understand that each project is unique, which is why we take the time to listen to your needs and preferences, ensuring a customized solution that exceeds your expectations. From new driveways, custom stamped patios, and frost-anchored steps to permeable pavers, masonry inlays, and commercial flatwork, we handle every pour with meticulous care.
            </p>

            {/* Core Values / Commitments Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-slate-50 border border-slate-200 rounded-sm p-5 hover:border-blue-400 hover:bg-blue-50/30 transition-colors shadow-xs">
                <div className="flex items-center space-x-2.5 mb-2">
                  <div className="w-8 h-8 rounded-sm bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                    <Hammer className="w-4 h-4" />
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Precision Craftsmanship
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Every site is graded, compacted with crushed stone, and checked for proper slope away from buildings. Forms are laser-squared and edges are hand-tooled cleanly.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-sm p-5 hover:border-blue-400 hover:bg-blue-50/30 transition-colors shadow-xs">
                <div className="flex items-center space-x-2.5 mb-2">
                  <div className="w-8 h-8 rounded-sm bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Durable Materials
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  We use laboratory-verified, air-entrained 4,000+ PSI mixes and continuous structural steel rebar to resist harsh Fargo freeze-thaw cycles and clay soil settling.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-sm p-5 hover:border-blue-400 hover:bg-blue-50/30 transition-colors shadow-xs">
                <div className="flex items-center space-x-2.5 mb-2">
                  <div className="w-8 h-8 rounded-sm bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                    <Compass className="w-4 h-4" />
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Punctual Timelines
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  We value your time. We arrive when promised, maintain direct communication throughout the pour, and keep project schedules on track from excavation to sealing.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-sm p-5 hover:border-blue-400 hover:bg-blue-50/30 transition-colors shadow-xs">
                <div className="flex items-center space-x-2.5 mb-2">
                  <div className="w-8 h-8 rounded-sm bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                    <Users className="w-4 h-4" />
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Exceptional Service
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  With Stone Creek Concrete LLC, you work directly with experienced local concrete experts who provide free estimates, courteous crew members, and respectful site cleanup.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
