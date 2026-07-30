import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp, ShoppingBag } from 'lucide-react';
import { BUSINESS_INFO } from '../data/pharmacyData';

interface FloatingActionsProps {
  onOpenWhatsAppModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenWhatsAppModal }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Action Buttons Column (Bottom Right) */}
      <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end space-y-3">
        {/* Back To Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full bg-slate-800/90 hover:bg-slate-900 text-white shadow-lg flex items-center justify-center transition-all transform hover:scale-110 border border-slate-700"
            title="Back to Top"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Floating Direct Call Button */}
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="w-12 h-12 rounded-full bg-slate-900 text-white shadow-xl flex items-center justify-center transition-all transform hover:scale-110 border-2 border-slate-700 group relative"
          title="Call Pharmacist Directly"
          aria-label="Call Pharmacist"
        >
          <Phone className="w-5 h-5 text-emerald-400 group-hover:rotate-12 transition-transform" />
          <span className="absolute right-14 bg-slate-900 text-white text-xs font-bold py-1 px-2.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
            Call Pharmacist
          </span>
        </a>

        {/* Floating WhatsApp Button */}
        <button
          onClick={onOpenWhatsAppModal}
          className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl shadow-emerald-500/40 flex items-center justify-center transition-all transform hover:scale-110 relative group border-2 border-white dark:border-slate-800 animate-pulse hover:animate-none"
          title="Order Medicines via WhatsApp"
          aria-label="WhatsApp Medicine Order"
        >
          <MessageCircle className="w-7 h-7 fill-white" />
          {/* Active Badge */}
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-300 border-2 border-white"></span>
          </span>
          <span className="absolute right-16 bg-emerald-700 text-white text-xs font-bold py-1.5 px-3 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
            WhatsApp Order Portal
          </span>
        </button>
      </div>

      {/* Sticky Mobile Bottom Navigation CTA (Mobile First) */}
      <div className="fixed bottom-0 left-0 right-0 z-30 sm:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 p-2.5 flex items-center justify-around shadow-2xl">
        <button
          onClick={onOpenWhatsAppModal}
          className="flex-1 mr-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center space-x-1.5 shadow-md"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>WhatsApp Order</span>
        </button>

        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex-1 ml-1.5 bg-slate-900 dark:bg-slate-800 text-white font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center space-x-1.5 border border-slate-700"
        >
          <Phone className="w-4 h-4 text-emerald-400" />
          <span>Call Store</span>
        </a>
      </div>
    </>
  );
};
