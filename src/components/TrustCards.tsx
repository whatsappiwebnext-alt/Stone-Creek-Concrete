import React from "react";
import { Snowflake, ShieldCheck, MessageSquare, Clock, Ruler } from "lucide-react";

export const TrustCards: React.FC = () => {
  const pillars = [
    {
      icon: <Snowflake className="w-5 h-5 text-blue-600" />,
      title: "Built for ND Freeze-Thaw",
      description:
        "Fargo winters put immense hydraulic and thermal stress on concrete. We utilize air-entrained mix designs, properly compacted aggregate bases, and steel rebar to mitigate heaving and cracking.",
    },
    {
      icon: <Ruler className="w-5 h-5 text-blue-600" />,
      title: "Disciplined Workmanship",
      description:
        "From laser-verified grade prep and square formwork to hand-tooled control joints and uniform broom finishes, we focus on the structural details that ensure longevity.",
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-blue-600" />,
      title: "Clear, Honest Communication",
      description:
        "We respect your time and property. You will receive responsive scheduling updates, clear project timelines, and straightforward answers without high-pressure sales tactics.",
    },
    {
      icon: <Clock className="w-5 h-5 text-blue-600" />,
      title: "Fast, Free On-Site Quotes",
      description:
        "Every property is unique. We provide transparent, no-obligation project consultations in Fargo and surrounding communities so you know exactly what your project entails.",
    },
  ];

  return (
    <section className="bg-slate-50 py-16 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-[1.5px] w-8 bg-blue-600"></span>
            <span className="text-xs uppercase tracking-[0.35em] font-bold text-blue-600">
              The Stone Creek Standard
            </span>
            <span className="h-[1.5px] w-8 bg-blue-600"></span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight uppercase">
            Why Fargo Property Owners Choose Stone Creek Concrete
          </h2>
          <p className="text-slate-600 text-sm mt-3 leading-relaxed font-normal">
            Concrete flatwork is permanent. Cutting corners on subgrade preparation or mix quality results in premature settling and spalling. We engineer durability from the ground up.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 hover:border-blue-500 rounded-sm p-6 transition-all duration-300 shadow-sm hover:shadow-md group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-sm bg-blue-50 border border-blue-100 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {pillar.icon}
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
