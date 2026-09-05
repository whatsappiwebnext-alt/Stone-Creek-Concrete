import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, User, Phone, Sparkles, Loader2, ArrowRight } from "lucide-react";
import { BUSINESS_INFO } from "../data/concreteData";
import { ChatMessage } from "../types";

interface AiChatbotProps {
  onOpenQuote: (serviceName?: string) => void;
}

export const AiChatbot: React.FC<AiChatbotProps> = ({ onOpenQuote }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "initial-1",
      sender: "bot",
      text: "Hello! I'm the virtual assistant for Stone Creek Concrete LLC in Fargo, North Dakota. Ask me about concrete thicknesses, finishes, project planning, or requesting a free estimate!",
      timestamp: "Just now",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleSend = async (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim() || loading) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      sender: "user",
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text.trim(),
          history: messages.map((m) => ({ sender: m.sender, text: m.text })),
        }),
      });

      const data = await response.json();
      const botMsg: ChatMessage = {
        id: `b-${Date.now()}`,
        sender: "bot",
        text: data.reply || "Thanks for asking! You can reach us directly at 701-712-0609 or submit a quote request.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
      const fallbackMsg: ChatMessage = {
        id: `b-${Date.now()}`,
        sender: "bot",
        text: "Stone Creek Concrete LLC provides free quotes across Fargo, ND. Please call us at 701-712-0609 or submit the online form!",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setLoading(false);
    }
  };

  const quickPrompts = [
    "What thickness is recommended for a driveway?",
    "Difference between broom and stamped finish?",
    "How to calculate square footage?",
    "How do I request a free quote?",
  ];

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center space-x-2.5 px-4 py-3 rounded-sm bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-xl shadow-blue-600/30 hover:scale-105 active:scale-95 transition-all cursor-pointer border border-blue-400/30 uppercase text-xs tracking-widest"
          id="open-chatbot-btn"
        >
          <div className="relative">
            <MessageSquare className="w-4 h-4 text-white" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 border border-white"></span>
          </div>
          <span>Ask Concrete AI</span>
        </button>
      )}

      {/* Chat Window Modal */}
      {isOpen && (
        <div className="bg-white border border-slate-200 rounded-sm w-[92vw] sm:w-[380px] h-[520px] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="bg-blue-600 border-b border-blue-700 p-3.5 flex items-center justify-between text-white">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-sm bg-white p-0.5 flex items-center justify-center shrink-0 shadow-xs">
                <img
                  src="/favicon.svg"
                  alt="Stone Creek Concrete"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-white flex items-center">
                  Stone Creek Assistant
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 ml-1.5 inline-block"></span>
                </h3>
                <p className="text-[10px] text-blue-100 font-normal">Fargo, ND Concrete Expert</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close Chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Call Header Banner */}
          <div className="bg-blue-50 px-3.5 py-2 border-b border-blue-100 flex items-center justify-between text-[11px]">
            <span className="text-slate-600 font-normal">Call our crew lead:</span>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="text-blue-600 font-bold uppercase tracking-wider hover:underline flex items-center"
            >
              <Phone className="w-3 h-3 mr-1" />
              {BUSINESS_INFO.phoneDisplay}
            </a>
          </div>

          {/* Chat Messages Log */}
          <div className="flex-1 p-3.5 overflow-y-auto space-y-3 bg-slate-50">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex items-start space-x-2 ${
                  m.sender === "user" ? "flex-row-reverse space-x-reverse" : "flex-row"
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-sm flex items-center justify-center text-[10px] shrink-0 ${
                    m.sender === "user"
                      ? "bg-blue-600 text-white font-bold"
                      : "bg-white text-slate-600 border border-slate-200"
                  }`}
                >
                  {m.sender === "user" ? <User className="w-3 h-3" /> : <Bot className="w-3 h-3" />}
                </div>

                <div
                  className={`p-3 rounded-sm text-xs max-w-[82%] leading-relaxed ${
                    m.sender === "user"
                      ? "bg-blue-600 text-white font-medium"
                      : "bg-white border border-slate-200 text-slate-800 font-normal shadow-xs"
                  }`}
                >
                  <p>{m.text}</p>
                  <span
                    className={`text-[9px] block mt-1 ${
                      m.sender === "user" ? "text-blue-100 text-right" : "text-slate-400"
                    }`}
                  >
                    {m.timestamp}
                  </span>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex items-center space-x-2 text-xs text-slate-500 font-normal">
                <Loader2 className="w-3.5 h-3.5 animate-spin text-blue-600" />
                <span>Stone Creek AI is answering...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Suggestions */}
          <div className="px-3 py-2 bg-white border-t border-slate-200 flex space-x-1.5 overflow-x-auto no-scrollbar">
            {quickPrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(p)}
                className="whitespace-nowrap text-[10px] uppercase tracking-wider px-2.5 py-1.5 rounded-sm bg-slate-100 text-slate-700 hover:text-blue-600 hover:bg-blue-50 border border-slate-200 transition-colors cursor-pointer font-medium"
              >
                {p}
              </button>
            ))}
          </div>

          {/* User Input Field */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white border-t border-slate-200 flex items-center space-x-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about concrete in Fargo..."
              className="flex-1 px-3 py-2 rounded-sm bg-slate-50 border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="p-2.5 rounded-sm bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-40 transition-colors cursor-pointer"
              aria-label="Send message"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

          {/* Quick Quote trigger inside chat footer */}
          <div className="bg-slate-50 px-3 py-2 text-center border-t border-slate-200">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenQuote();
              }}
              className="text-[10px] font-bold uppercase tracking-wider text-blue-600 hover:underline inline-flex items-center cursor-pointer"
            >
              <span>Ready for an estimate? Open Free Quote Form</span>
              <ArrowRight className="w-3 h-3 ml-1" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
