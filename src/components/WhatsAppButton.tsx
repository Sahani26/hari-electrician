import { MessageSquare, Phone, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../data';

export default function WhatsAppButton() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="floating-actions" className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          id="scroll-to-top-btn"
          onClick={scrollToTop}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-dark shadow-md hover:bg-gray-100 transition-all duration-200 border border-gray-100"
          title="Scroll to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating Call Button */}
      <a
        id="floating-call-btn"
        href={`tel:${BUSINESS_INFO.phone}`}
        className="flex items-center gap-2 px-4 h-12 rounded-full bg-primary text-white shadow-lg hover:bg-dark transition-all duration-300 md:hidden animate-bounce"
        style={{ animationDuration: '3s' }}
      >
        <Phone className="w-5 h-5 animate-pulse" />
        <span className="text-sm font-semibold">Call Now</span>
      </a>

      {/* Floating WhatsApp Button */}
      <a
        id="floating-whatsapp-btn"
        href={BUSINESS_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-5 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#128C7E] transition-all duration-300 hover:scale-105 active:scale-95 group"
        title="Chat on WhatsApp"
      >
        <MessageSquare className="w-6 h-6 fill-current group-hover:rotate-12 transition-transform duration-200" />
        <span className="font-semibold text-sm tracking-wide hidden sm:inline">WhatsApp Help</span>
      </a>
    </div>
  );
}
