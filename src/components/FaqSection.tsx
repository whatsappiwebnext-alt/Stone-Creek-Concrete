import React, { useState } from "react";
import { FAQS, BUSINESS_INFO } from "../data/concreteData";
import { ChevronDown, HelpCircle, Phone, ArrowRight } from "lucide-react";

interface FaqSectionProps {
  onOpenQuote: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenQuote }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 md:py-24 bg-white text-slate-900 border-b border-slate-200 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="h-[1.5px] w-8 bg-blue-600"></span>
            <span className="text-xs uppercase tracking-[0.35em] font-bold text-blue-600">
              Answers & Clarity
            </span>
            <span className="h-[1.5px] w-8 bg-blue-600"></span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-slate-950 tracking-tight">
            Frequently Asked Concrete Questions
          </h2>
          <p className="text-slate-600 text-sm mt-2 font-normal">
            Everything you need to know about planning, pouring, and curing concrete in Fargo, North Dakota.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200 rounded-sm overflow-hidden transition-colors hover:border-blue-400 shadow-xs"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full text-left p-5 flex items-center justify-between space-x-4 cursor-pointer focus:outline-none"
              >
                <span className="text-sm sm:text-base font-bold uppercase tracking-wider text-slate-900">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-blue-600 shrink-0 transition-transform duration-200 ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === idx && (
                <div className="px-5 pb-5 text-slate-700 text-xs sm:text-sm leading-relaxed border-t border-slate-200/80 pt-4 animate-in fade-in duration-200 font-normal">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Banner inside FAQ */}
        <div className="mt-12 bg-blue-50/60 border border-blue-200 rounded-sm p-6 sm:p-8 text-center sm:flex sm:items-center sm:justify-between shadow-xs">
          <div className="text-left mb-4 sm:mb-0">
            <h3 className="font-heading text-base font-bold uppercase text-slate-950">
              Have a specific question about your project?
            </h3>
            <p className="text-xs text-slate-600 mt-1 font-normal">
              Call us directly at {BUSINESS_INFO.phoneDisplay} or submit a quote inquiry.
            </p>
          </div>
          <button
            onClick={onOpenQuote}
            className="w-full sm:w-auto px-6 py-3 rounded-sm bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-widest transition-colors cursor-pointer shadow-sm shadow-blue-600/20"
          >
            Ask in Quote Request
          </button>
        </div>
      </div>
    </section>
  );
};

