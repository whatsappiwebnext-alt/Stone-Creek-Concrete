import React, { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { TrustCards } from "./components/TrustCards";
import { ServicesSection } from "./components/ServicesSection";
import { Estimator } from "./components/Estimator";
import { AboutSection } from "./components/AboutSection";
import { ProjectsGallery } from "./components/ProjectsGallery";
import { ServiceAreaSection } from "./components/ServiceAreaSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { FaqSection } from "./components/FaqSection";
import { QuoteSection } from "./components/QuoteSection";
import { Footer } from "./components/Footer";
import { AiChatbot } from "./components/AiChatbot";
import { ScrollToTop } from "./components/ScrollToTop";
import { StickyMobileBar } from "./components/StickyMobileBar";

export default function App() {
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string | undefined>(undefined);
  const [selectedSizeForQuote, setSelectedSizeForQuote] = useState<string | undefined>(undefined);

  const handleOpenQuote = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForQuote(serviceName);
    }
    const quoteElement = document.getElementById("contact");
    if (quoteElement) {
      quoteElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleApplyEstimatorToQuote = (sizeStr: string, serviceType: string) => {
    setSelectedSizeForQuote(sizeStr);
    setSelectedServiceForQuote(serviceType);
    const quoteElement = document.getElementById("contact");
    if (quoteElement) {
      quoteElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Navigation Header */}
      <Header onOpenQuote={handleOpenQuote} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenQuote={handleOpenQuote} />

        {/* Trust / Value Pillars */}
        <TrustCards />

        {/* Concrete Services Showcase (All 10 Services with specs) */}
        <ServicesSection onOpenQuote={handleOpenQuote} />

        {/* Sizing & Yardage Estimator */}
        <Estimator onApplyToQuote={handleApplyEstimatorToQuote} />

        {/* About Stone Creek Concrete LLC */}
        <AboutSection />

        {/* Projects Gallery with Filter & Lightbox */}
        <ProjectsGallery onOpenQuote={handleOpenQuote} />

        {/* Service Area: Fargo, ND & Zip Code Checker */}
        <ServiceAreaSection onOpenQuote={handleOpenQuote} />

        {/* Customer Confidence & Testimonials */}
        <TestimonialsSection />

        {/* FAQ Section */}
        <FaqSection onOpenQuote={handleOpenQuote} />

        {/* High-Converting Contact & Quote Request Form */}
        <QuoteSection
          initialService={selectedServiceForQuote}
          initialSize={selectedSizeForQuote}
        />
      </main>

      {/* Comprehensive Footer */}
      <Footer onOpenQuote={handleOpenQuote} />

      {/* Floating AI Concrete Assistant / Chatbot Widget */}
      <AiChatbot onOpenQuote={handleOpenQuote} />

      {/* Floating Scroll-To-Top Button */}
      <ScrollToTop />

      {/* Mobile-Only Sticky Bottom Bar */}
      <StickyMobileBar onOpenQuote={handleOpenQuote} />
    </div>
  );
}
