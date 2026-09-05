import React, { useState } from "react";
import { Calculator, ArrowRight, CheckCircle, Info, Sparkles } from "lucide-react";

interface EstimatorProps {
  onApplyToQuote: (sizeStr: string, serviceType: string) => void;
}

export const Estimator: React.FC<EstimatorProps> = ({ onApplyToQuote }) => {
  const [projectType, setProjectType] = useState<string>("Concrete Driveways");
  const [length, setLength] = useState<number>(30);
  const [width, setWidth] = useState<number>(20);
  const [thickness, setThickness] = useState<number>(5);

  const sqFt = Math.max(0, length * width);
  // Cubic yards = (sqFt * (thickness / 12)) / 27
  const cubicYards = ((sqFt * (thickness / 12)) / 27).toFixed(1);

  const handleApply = () => {
    const summary = `${sqFt} sq ft (${length}' × ${width}' at ${thickness}" depth ~ ${cubicYards} cu yds)`;
    onApplyToQuote(summary, projectType);
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50 text-slate-900 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-sm border border-slate-200 p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left explanation */}
            <div className="lg:col-span-6 flex flex-col space-y-4">
              <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 rounded-sm px-3 py-1 w-fit">
                <Calculator className="w-3.5 h-3.5 text-blue-600" />
                <span className="text-xs uppercase tracking-widest font-bold text-blue-700">
                  Interactive Planning Tool
                </span>
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-slate-950 tracking-tight">
                Concrete Sizing & Yardage Calculator
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Planning a new driveway, patio, or shop slab in Fargo? Input your approximate dimensions below to calculate your total surface square footage and estimated concrete cubic yardage.
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-center text-xs text-slate-700 font-medium">
                  <CheckCircle className="w-4 h-4 text-blue-600 mr-2.5 shrink-0" />
                  <span>4" standard for residential patios and pedestrian sidewalks</span>
                </div>
                <div className="flex items-center text-xs text-slate-700 font-medium">
                  <CheckCircle className="w-4 h-4 text-blue-600 mr-2.5 shrink-0" />
                  <span>5" - 6" recommended for driveways and vehicular garage floors</span>
                </div>
                <div className="flex items-center text-xs text-slate-700 font-medium">
                  <CheckCircle className="w-4 h-4 text-blue-600 mr-2.5 shrink-0" />
                  <span>One-click transfer directly into your free quote request</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Calculator Box */}
            <div className="lg:col-span-6 bg-blue-50/40 rounded-sm border border-blue-200/80 p-6 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                {/* Project Type */}
                <div className="sm:col-span-2">
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-1.5">
                    Project Type
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-sm bg-white border border-slate-300 text-slate-900 text-xs uppercase font-medium focus:outline-none focus:border-blue-600"
                  >
                    <option value="Concrete Driveways">Concrete Driveway</option>
                    <option value="Concrete Patios">Concrete Patio</option>
                    <option value="Garage & Shop Floors">Garage & Shop Floor</option>
                    <option value="Concrete Sidewalks & Walkways">Sidewalk / Walkway</option>
                    <option value="Concrete Slabs">Shed / Hot Tub Slab</option>
                    <option value="Decorative/Stamped Concrete">Decorative Stamped Patio</option>
                  </select>
                </div>

                {/* Length */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-1.5">
                    Length (feet)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="500"
                    value={length}
                    onChange={(e) => setLength(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-sm bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-600 font-mono"
                  />
                </div>

                {/* Width */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-1.5">
                    Width (feet)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="500"
                    value={width}
                    onChange={(e) => setWidth(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-sm bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-600 font-mono"
                  />
                </div>

                {/* Slab Depth / Thickness */}
                <div className="sm:col-span-2">
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-1.5">
                    Slab Thickness (inches)
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {[4, 5, 6, 8].map((d) => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => setThickness(d)}
                        className={`py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                          thickness === d
                            ? "bg-blue-600 text-white shadow-sm"
                            : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
                        }`}
                      >
                        {d} Inches
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Calculations Output Banner */}
              <div className="bg-white border border-blue-200 rounded-sm p-4 mb-5 flex items-center justify-around text-center shadow-xs">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">
                    Surface Area
                  </p>
                  <p className="text-xl font-black text-slate-900 mt-0.5 font-mono">
                    {sqFt.toLocaleString()} <span className="text-xs font-normal text-slate-500">sq ft</span>
                  </p>
                </div>
                <div className="h-8 w-px bg-slate-200"></div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">
                    Estimated Volume
                  </p>
                  <p className="text-xl font-black text-blue-600 mt-0.5 font-mono">
                    {cubicYards} <span className="text-xs font-normal text-slate-500">cu yds</span>
                  </p>
                </div>
              </div>

              {/* Apply to quote form button */}
              <button
                type="button"
                onClick={handleApply}
                className="w-full py-3.5 px-4 rounded-sm bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase text-xs tracking-widest flex items-center justify-center space-x-2 shadow-md shadow-blue-600/20 transition-all cursor-pointer"
              >
                <span>Apply Dimensions to Free Quote Request</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
