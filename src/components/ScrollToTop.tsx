import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-20 sm:bottom-6 left-4 sm:left-6 z-30 p-3 rounded-sm bg-white hover:bg-blue-600 text-slate-700 hover:text-white border border-slate-300 hover:border-blue-600 shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer focus:outline-none"
      aria-label="Scroll back to top"
      id="scroll-to-top-btn"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
