import React from "react";
import { Phone, ArrowRight } from "lucide-react";
import { BUSINESS_INFO } from "../data/concreteData";

interface StickyMobileBarProps {
  onOpenQuote: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenQuote }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 sm:hidden shadow-lg">
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex items-center justify-center py-3 px-3 rounded-sm bg-slate-50 border border-slate-200 text-slate-800 font-bold uppercase tracking-wider text-xs"
          id="mobile-sticky-call"
        >
          <Phone className="w-4 h-4 mr-1.5 text-blue-600" />
          <span>Call Now</span>
        </a>

        <button
          onClick={onOpenQuote}
          className="flex items-center justify-center py-3 px-3 rounded-sm bg-blue-600 text-white font-bold uppercase tracking-wider text-xs shadow-md shadow-blue-600/20"
          id="mobile-sticky-quote"
        >
          <span>Get Quote</span>
          <ArrowRight className="w-3.5 h-3.5 ml-1 text-white" />
        </button>
      </div>
    </div>
  );
};

