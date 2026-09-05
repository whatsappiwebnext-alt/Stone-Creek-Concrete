import React from "react";
import { BUSINESS_INFO, CONCRETE_SERVICES } from "../data/concreteData";
import { Phone, Mail, MapPin, Layers, ArrowUpRight } from "lucide-react";

interface FooterProps {
  onOpenQuote: (serviceName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote }) => {
  return (
    <footer className="bg-slate-900 text-slate-200 border-t border-slate-800 pt-16 pb-20 sm:pb-14 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Contact */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-sm bg-white p-1 flex items-center justify-center shadow-md">
                <img
                  src="/favicon.svg"
                  alt="Stone Creek Concrete LLC"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-black text-lg uppercase tracking-tight text-white">
                  STONE CREEK <span className="text-blue-400">CONCRETE</span>
                </span>
                <span className="text-[10px] tracking-[0.25em] text-slate-400 uppercase font-semibold">
                  Fargo, North Dakota
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm font-normal">
              Dedicated concrete contractor delivering durable flatwork engineered for North Dakota's climate. Driveways, patios, sidewalks, slabs, garage floors, and commercial flatwork.
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="text-white hover:text-blue-400 font-bold tracking-wider transition-colors"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="text-slate-300 hover:text-blue-400 transition-colors font-normal"
                >
                  {BUSINESS_INFO.email}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-slate-300 font-normal">{BUSINESS_INFO.address}</span>
              </div>
              <div className="pt-2 text-[11px] text-slate-400 border-t border-slate-800 space-y-1">
                <p><span className="text-slate-200 font-semibold">Hours:</span> {BUSINESS_INFO.hours}</p>
                <p><span className="text-slate-200 font-semibold">ND License:</span> {BUSINESS_INFO.license}</p>
                <p><span className="text-slate-200 font-semibold">Accreditation:</span> {BUSINESS_INFO.bbbRating} • {BUSINESS_INFO.homeAdvisorRating}</p>
              </div>
            </div>
          </div>

          {/* Col 2: Services Column 1 */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-3">
              Concrete Services
            </h4>
            <ul className="space-y-2 text-xs">
              {CONCRETE_SERVICES.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => onOpenQuote(service.title)}
                    className="text-slate-400 hover:text-blue-400 transition-colors text-left flex items-center cursor-pointer font-normal"
                  >
                    <span>{service.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services Column 2 */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-3">
              Specialized Solutions
            </h4>
            <ul className="space-y-2 text-xs">
              {CONCRETE_SERVICES.slice(5, 10).map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => onOpenQuote(service.title)}
                    className="text-slate-400 hover:text-blue-400 transition-colors text-left flex items-center cursor-pointer font-normal"
                  >
                    <span>{service.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Local Service Area */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-3">
              Local Service
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400 font-normal">
              <li>Fargo, ND</li>
              <li>South Fargo</li>
              <li>North Fargo</li>
              <li>West Fargo Metro</li>
              <li>Cass County</li>
              <li>Red River Valley</li>
            </ul>
            <div className="mt-4">
              <button
                onClick={() => onOpenQuote()}
                className="text-xs font-bold uppercase tracking-wider text-blue-400 hover:text-blue-300 hover:underline flex items-center cursor-pointer"
              >
                <span>Request Estimate</span>
                <ArrowUpRight className="w-3 h-3 ml-0.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Local SEO Keywords Strip */}
        <div className="pt-6 pb-6 text-[11px] text-slate-400 border-b border-slate-800 text-center leading-relaxed font-normal">
          <span className="font-bold text-slate-200 uppercase tracking-wider">Fargo Concrete Services: </span>
          Concrete contractor Fargo ND • Concrete driveway Fargo • Concrete patio Fargo • Concrete sidewalks Fargo ND • Garage shop floors Fargo • Concrete slabs Fargo ND • Residential concrete Fargo • Commercial concrete flatwork
        </div>

        {/* Bottom Attribution & Copyright */}
        <div className="pt-6 flex flex-col items-center justify-center space-y-2 text-xs text-slate-400 text-center font-normal">
          <p>
            © {new Date().getFullYear()} Stone Creek Concrete LLC. All rights reserved. Fargo, North Dakota.
          </p>
          <p className="text-slate-400">
            Developed by{" "}
            <a
              href="https://iwebnext.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline transition-colors font-medium"
            >
              iWebNext
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

