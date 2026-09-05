import React, { useState, useEffect } from "react";
import { Phone, Mail, Menu, X, Shield, ArrowRight, Layers } from "lucide-react";
import { BUSINESS_INFO } from "../data/concreteData";

interface HeaderProps {
  onOpenQuote: (serviceName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Service Area", href: "#service-area" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top micro-bar with Fargo ND and contact details */}
      <div className="bg-[#0F172A] border-b border-blue-900/60 text-xs text-blue-100 py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-white text-[11px] uppercase tracking-wider font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2 inline-block"></span>
              Fargo, ND • Mon-Sat 9AM - 6PM
            </span>
            <span className="text-blue-300/40">|</span>
            <span className="text-blue-200/90 text-[11px] uppercase tracking-wider font-medium">
              BBB Accredited A+ • HomeAdvisor 5.0 • ND Lic #000046657
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center text-white hover:text-blue-300 transition-colors text-[11px] uppercase tracking-widest font-bold"
              id="header-phone-link"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 text-blue-400" />
              {BUSINESS_INFO.phoneDisplay}
            </a>
            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              className="flex items-center text-blue-200/80 hover:text-white transition-colors text-[11px]"
              id="header-email-link"
            >
              <Mail className="w-3.5 h-3.5 mr-1.5 text-blue-400" />
              {BUSINESS_INFO.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-md py-3"
            : "bg-white border-b border-slate-200 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Wordmark with authentic uploaded emblem */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="flex items-center gap-3 group focus:outline-none"
              id="logo-brand"
            >
              <div className="w-11 h-11 border border-blue-200 bg-white p-1 flex items-center justify-center shrink-0 rounded-sm shadow-xs group-hover:border-blue-600 transition-all group-hover:scale-105">
                <img
                  src="/favicon.svg"
                  alt="Stone Creek Concrete LLC"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-base sm:text-lg font-extrabold tracking-tight text-slate-950 font-heading">
                  STONE CREEK <span className="text-blue-600">CONCRETE</span>
                </span>
                <span className="text-[10px] text-slate-500 tracking-[0.25em] uppercase font-bold mt-0.5">
                  Fargo, North Dakota
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.15em] text-slate-600">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="hover:text-blue-600 transition-colors focus:outline-none focus:text-blue-600"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action: Phone + Free Quote CTA */}
            <div className="hidden sm:flex items-center space-x-3">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="bg-blue-50 text-blue-700 border border-blue-200 px-5 py-2.5 font-bold text-xs uppercase tracking-widest rounded-sm hover:bg-blue-100 transition-all flex items-center"
                id="header-call-btn"
              >
                <Phone className="w-3.5 h-3.5 mr-1.5 text-blue-600" />
                {BUSINESS_INFO.phoneDisplay}
              </a>

              <button
                onClick={() => onOpenQuote()}
                className="bg-blue-600 text-white px-5 py-2.5 font-bold uppercase text-xs tracking-widest rounded-sm hover:bg-blue-700 transition-all shadow-sm shadow-blue-600/20 cursor-pointer flex items-center"
                id="header-quote-btn"
              >
                <span>Request Quote</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex sm:hidden items-center space-x-2">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="p-2.5 rounded-sm bg-blue-600 text-white"
                aria-label="Call Stone Creek Concrete"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-sm text-slate-700 hover:text-blue-600 bg-slate-100 border border-slate-200 focus:outline-none"
                aria-label="Toggle Navigation Menu"
                id="mobile-menu-toggle"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2 text-xs font-bold uppercase tracking-[0.15em] text-slate-700 hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-200 flex flex-col space-y-2">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="bg-blue-50 text-blue-700 border border-blue-200 py-2.5 px-4 rounded-sm font-bold text-xs uppercase tracking-widest text-center flex items-center justify-center"
                >
                  <Phone className="w-4 h-4 mr-2 text-blue-600" />
                  Call {BUSINESS_INFO.phoneDisplay}
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuote();
                  }}
                  className="bg-blue-600 text-white py-2.5 px-4 rounded-sm font-bold text-xs uppercase tracking-widest text-center shadow-md shadow-blue-600/20"
                >
                  Request a Free Quote
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
