import React, { useState, useRef } from "react";
import { Phone, ArrowRight, CheckCircle2, Volume2, VolumeX } from "lucide-react";
import { BUSINESS_INFO } from "../data/concreteData";

interface HeroProps {
  onOpenQuote: (serviceName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleAudio = () => {
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  const quickServices = [
    "Concrete Driveways",
    "Concrete Patios",
    "Steps & Stoops",
    "Sidewalks & Walkways",
    "Masonry Inlays",
    "Slabs & Foundations",
    "Permeable Pavers",
    "Exposed Pea Gravel",
    "Foundation Repair",
    "Commercial Flatwork",
  ];

  return (
    <section id="home" className="relative text-slate-900 overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-slate-200">
      {/* Background Video with subtle overlay for contrast */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source
            src="https://qn7t1dmxlsklzpip.public.blob.vercel-storage.com/Stone%20Creek%20Concrete%20LLC.mp4"
            type="video/mp4"
          />
        </video>
        {/* Lightened scrim to make the video 50% more visible */}
        <div className="absolute inset-0 bg-white/25"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/75"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/5 via-transparent to-blue-950/5"></div>
      </div>

      {/* Floating Video Audio Control Toggle Button */}
      <button
        type="button"
        onClick={toggleAudio}
        className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 flex items-center gap-2 bg-slate-950/80 hover:bg-slate-900 text-white backdrop-blur-md px-3.5 py-2 rounded-full border border-white/20 shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer text-xs font-semibold uppercase tracking-wider"
        aria-label={isMuted ? "Unmute background video" : "Mute background video"}
        title={isMuted ? "Click to unmute video" : "Click to mute video"}
        id="hero-audio-toggle"
      >
        {isMuted ? (
          <>
            <VolumeX className="w-4 h-4 text-slate-300" />
            <span className="text-[11px] font-medium">Unmute Video</span>
          </>
        ) : (
          <>
            <Volume2 className="w-4 h-4 text-blue-400 animate-pulse" />
            <span className="text-[11px] font-medium text-blue-200">Mute Video</span>
          </>
        )}
      </button>

      {/* Subtle blue ambient glow and grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:24px_24px] z-[1]"></div>
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-[130px] pointer-events-none z-[1]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          {/* Fargo Header Tag with Balanced Blue Hairlines */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-[1.5px] w-10 bg-blue-600"></span>
            <span className="text-blue-700 text-xs font-bold uppercase tracking-[0.35em] bg-white/80 backdrop-blur-xs px-3 py-1 rounded-sm border border-slate-200/60 shadow-xs">
              Fargo, North Dakota & Surrounding Areas
            </span>
            <span className="h-[1.5px] w-10 bg-blue-600"></span>
          </div>

          {/* Headline in Blue and White Architecture */}
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-[72px] font-black leading-[0.92] tracking-tighter uppercase mb-6 text-slate-950 text-center drop-shadow-sm">
            QUALITY CRAFTSMANSHIP.<br />
            DURABLE{" "}
            <span className="text-blue-600">
              MATERIALS.
            </span>
          </h1>

          {/* Supporting Copy from stonecreekconcretellc.com */}
          <p className="text-base sm:text-lg text-slate-900 max-w-2xl mx-auto mb-8 leading-relaxed font-medium text-center bg-white/75 backdrop-blur-sm p-4 rounded-sm border border-slate-200/70 shadow-xs">
            At Stone Creek Concrete LLC, we understand that concrete is more than just a material — it is the foundation of your home or business. We deliver expert concrete driveways, patios, steps, foundations, and decorative masonry with precision, punctuality, and professionalism.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-1 w-full">
            <button
              onClick={() => onOpenQuote()}
              className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 font-bold uppercase text-xs tracking-widest rounded-sm hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/25 flex items-center justify-center cursor-pointer"
              id="hero-quote-cta"
            >
              <span>Request Free Consultation</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="w-full sm:w-auto bg-white/95 backdrop-blur-sm border-2 border-slate-300 hover:border-blue-600 text-slate-800 hover:text-blue-600 px-8 py-4 font-bold uppercase text-xs tracking-widest rounded-sm transition-all flex items-center justify-center shadow-sm"
              id="hero-call-cta"
            >
              <Phone className="w-4 h-4 mr-2.5 text-blue-600" />
              <span>Call (701) 712-0609</span>
            </a>
          </div>

          {/* Quick Service Scoping Shortcuts */}
          <div className="pt-8 flex flex-col items-center">
            <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-slate-600 mb-3 text-center">
              Our Concrete Specialties:
            </p>
            <div className="flex flex-wrap justify-center gap-2 max-w-3xl">
              {quickServices.map((service) => (
                <button
                  key={service}
                  onClick={() => onOpenQuote(service)}
                  className="text-[11px] px-3.5 py-1.5 rounded-sm bg-white/95 backdrop-blur-sm hover:bg-blue-50 text-slate-800 hover:text-blue-600 border border-slate-200 hover:border-blue-400 shadow-xs transition-all hover:scale-[1.02] cursor-pointer font-medium"
                >
                  + {service}
                </button>
              ))}
            </div>
          </div>

          {/* Trust Highlights Checklist from stonecreekconcretellc.com */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 mt-6 max-w-3xl mx-auto w-full justify-items-center bg-white/80 backdrop-blur-md rounded-sm p-3.5 border border-slate-200/80 shadow-xs">
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
              <span className="text-xs font-semibold text-slate-800">BBB Accredited A+ & HomeAdvisor Pro</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
              <span className="text-xs font-semibold text-slate-800">ND State Licensed #000046657</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
              <span className="text-xs font-semibold text-slate-800">Free Estimates & Warranties</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
