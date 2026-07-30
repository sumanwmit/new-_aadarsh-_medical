import React, { useState } from 'react';
import { X, Send, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/pharmacyData';
import { QuickInquiryData } from '../types';

interface QuickInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickInquiryModal: React.FC<QuickInquiryModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<QuickInquiryData>({
    name: '',
    phone: '',
    service: 'General Query',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Also offer sending to WhatsApp
      const text = `Hello ${BUSINESS_INFO.name},\nInquiry from website:\nName: ${formData.name}\nPhone: ${formData.phone}\nTopic: ${formData.service}\nMessage: ${formData.message}`;
      window.open(`https://wa.me/91${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
      setSubmitted(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden border border-slate-200 dark:border-slate-800">
        <div className="bg-gradient-to-r from-blue-700 to-emerald-700 p-5 text-white flex justify-between items-center">
          <div>
            <h3 className="text-lg font-bold">Quick Health & Stock Inquiry</h3>
            <p className="text-xs text-blue-100">{BUSINESS_INFO.name}</p>
          </div>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-white/20 text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-3">
            <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto animate-bounce" />
            <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100">Inquiry Sent Successfully!</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Opening WhatsApp chat with our pharmacist now...
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Your Name *</label>
              <input
                type="text"
                required
                placeholder="Full Name"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Phone Number *</label>
              <input
                type="tel"
                required
                placeholder="Mobile Number"
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3.5 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Inquiry Topic</label>
              <select
                value={formData.service}
                onChange={e => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-3.5 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm"
              >
                <option value="Medicine Availability">Medicine Availability</option>
                <option value="Health Device Demo / Price">Health Device Demo / Price</option>
                <option value="Special Order Request">Special Order Request</option>
                <option value="General Query">General Query</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Message / Question</label>
              <textarea
                rows={3}
                placeholder="Type your question or required medicine name here..."
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 rounded-xl flex items-center justify-center space-x-2 transition-all shadow-md"
            >
              <Send className="w-4 h-4" />
              <span>Submit & Open WhatsApp</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
