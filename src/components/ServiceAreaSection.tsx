import React, { useState } from "react";
import { MapPin, CheckCircle, Search, Phone, ArrowRight } from "lucide-react";
import { BUSINESS_INFO } from "../data/concreteData";

interface ServiceAreaProps {
  onOpenQuote: (serviceName?: string) => void;
}

export const ServiceAreaSection: React.FC<ServiceAreaProps> = ({ onOpenQuote }) => {
  const [zipInput, setZipInput] = useState("");
  const [searchResult, setSearchResult] = useState<string | null>(null);

  // Verified Fargo area zip codes
  const fargoZips = ["58102", "58103", "58104", "58105", "58106", "58107", "58108", "58121", "58122", "58124", "58125", "58126"];

  const handleCheckZip = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanZip = zipInput.trim();
    if (!cleanZip) return;

    if (fargoZips.includes(cleanZip) || cleanZip.startsWith("581") || cleanZip.startsWith("580")) {
      setSearchResult("in-area");
    } else {
      setSearchResult("inquire");
    }
  };

  return (
    <section id="service-area" className="py-16 md:py-24 bg-white text-slate-900 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Service Area description */}
          <div className="lg:col-span-7 flex flex-col space-y-5">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="h-[1.5px] w-8 bg-blue-600"></span>
                <span className="text-xs uppercase tracking-[0.35em] font-bold text-blue-600">
                  Local Coverage & Service Radius
                </span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-slate-950 tracking-tight">
                Proudly Serving Fargo, North Dakota & Surrounding Communities
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              Stone Creek Concrete LLC is based locally in Fargo, North Dakota, with offices at 1760 42nd St S. We provide complete residential and commercial concrete services across the Fargo-Moorhead metropolitan area and surrounding communities throughout Cass County and the Red River Valley.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Whether you need a new driveway, a stamped decorative patio, front entry steps, garage floor, or a commercial foundation in Fargo, West Fargo, Horace, Moorhead, or Dilworth, our local crews provide punctual on-site evaluations and dependable execution.
            </p>

            {/* Coverage highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="bg-slate-50 border border-slate-200 rounded-sm p-4 flex items-start space-x-3 shadow-xs">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">Fargo Headquarters</h3>
                  <p className="text-xs text-slate-600 mt-0.5 font-normal">1760 42nd St S, Fargo, ND 58103 • ND Lic #000046657</p>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-sm p-4 flex items-start space-x-3 shadow-xs">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">Surrounding Metro Areas</h3>
                  <p className="text-xs text-slate-600 mt-0.5 font-normal">West Fargo, Moorhead, Horace, Dilworth, Casselton & Cass County</p>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-500 italic font-normal">
              *If your property is located in surrounding North Dakota or Minnesota border communities, please call (701) 712-0609 or submit our quote form with your address to confirm crew availability for your project scope.
            </p>
          </div>

          {/* Right Column: Interactive Zip Code / Location Checker Card */}
          <div className="lg:col-span-5">
            <div className="bg-blue-50/50 border border-blue-200 rounded-sm p-6 sm:p-8 shadow-sm relative overflow-hidden">
              <div className="flex items-center space-x-2 text-xs font-bold text-blue-600 uppercase tracking-[0.2em] mb-2">
                <Search className="w-4 h-4" />
                <span>Service Check</span>
              </div>

              <h3 className="font-heading text-xl font-bold uppercase text-slate-950 mb-2">
                Check Your Location
              </h3>
              <p className="text-xs text-slate-600 mb-5 leading-relaxed font-normal">
                Enter your 5-digit zip code to verify coverage for our Fargo concrete crews.
              </p>

              <form onSubmit={handleCheckZip} className="flex gap-2 mb-4">
                <input
                  type="text"
                  maxLength={5}
                  placeholder="e.g. 58104"
                  value={zipInput}
                  onChange={(e) => {
                    setZipInput(e.target.value.replace(/\D/g, ""));
                    setSearchResult(null);
                  }}
                  className="flex-1 px-4 py-2.5 rounded-sm bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-600 font-mono"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-sm bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-widest transition-colors cursor-pointer shadow-sm shadow-blue-600/20"
                >
                  Verify
                </button>
              </form>

              {/* Status Display */}
              {searchResult === "in-area" && (
                <div className="bg-white border border-emerald-500/40 rounded-sm p-4 mb-4 text-left animate-in fade-in duration-200 shadow-xs">
                  <div className="flex items-center space-x-2 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-1">
                    <CheckCircle className="w-4 h-4" />
                    <span>Location Verified: Standard Service Area</span>
                  </div>
                  <p className="text-xs text-slate-600 font-normal">
                    Your area is within our standard Fargo service radius. We provide free on-site consultations and estimates!
                  </p>
                  <button
                    onClick={() => onOpenQuote()}
                    className="mt-3 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 px-3.5 py-2 rounded-sm flex items-center shadow-xs cursor-pointer"
                  >
                    <span>Request Free Quote Now</span>
                    <ArrowRight className="w-3 h-3 ml-1.5" />
                  </button>
                </div>
              )}

              {searchResult === "inquire" && (
                <div className="bg-white border border-blue-200 rounded-sm p-4 mb-4 text-left animate-in fade-in duration-200 shadow-xs">
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1">
                    Regional Area Inquiry
                  </p>
                  <p className="text-xs text-slate-600 font-normal">
                    We frequently take on projects in surrounding regional communities depending on project scope and crew scheduling. Please call us directly at 701-712-0609 or submit your address.
                  </p>
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="mt-3 inline-flex items-center text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 px-3.5 py-2 rounded-sm shadow-xs"
                  >
                    <Phone className="w-3 h-3 mr-1.5" />
                    Call 701-712-0609
                  </a>
                </div>
              )}

              {/* Quick Contact Box */}
              <div className="pt-4 border-t border-blue-200/80 flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-500">Direct Inquiries:</p>
                  <p className="text-xs font-bold text-slate-900 mt-0.5">{BUSINESS_INFO.phoneDisplay}</p>
                </div>
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="text-xs font-bold uppercase tracking-wider text-blue-600 hover:underline flex items-center"
                >
                  <span>Call Crew Lead</span>
                  <ArrowRight className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
