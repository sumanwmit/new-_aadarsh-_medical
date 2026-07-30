import React, { useState } from 'react';
import { X, Send, PhoneCall, FileText, CheckCircle2, ShieldAlert } from 'lucide-react';
import { BUSINESS_INFO } from '../data/pharmacyData';
import { WhatsAppOrderData } from '../types';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledMedicine?: string;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({
  isOpen,
  onClose,
  prefilledMedicine = ''
}) => {
  const [formData, setFormData] = useState<WhatsAppOrderData>({
    customerName: '',
    mobileNumber: '',
    email: '',
    address: 'Sakurabad, Jehanabad',
    medicineName: prefilledMedicine || '',
    prescription: 'No',
    preferredDeliveryTime: 'Immediate (Morning/Evening)',
    message: ''
  });

  const [prescriptionFile, setPrescriptionFile] = useState<File | null>(null);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPrescriptionFile(e.target.files[0]);
      setFormData(prev => ({ ...prev, prescription: 'Yes' }));
    }
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = `Hello ${BUSINESS_INFO.name},

*NEW MEDICINE ORDER REQUEST*
----------------------------------------
*Customer Name:* ${formData.customerName || 'N/A'}
*Phone Number:* ${formData.mobileNumber || 'N/A'}
*Email:* ${formData.email || 'N/A'}
*Medicine Required:* ${formData.medicineName || 'N/A'}
*Delivery Address:* ${formData.address || 'N/A'}
*Prescription Available:* ${formData.prescription} ${prescriptionFile ? `(${prescriptionFile.name})` : ''}
*Preferred Time:* ${formData.preferredDeliveryTime}
*Notes / Special Instructions:* ${formData.message || 'None'}
----------------------------------------
Sent via ${window.location.hostname} website order portal.`;

    const encodedMessage = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/91${BUSINESS_INFO.whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden border border-slate-200 dark:border-slate-800 transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-5 text-white flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
              <Send className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold">WhatsApp Medicine Order</h3>
              <p className="text-xs text-emerald-100">{BUSINESS_INFO.name} • Instant Response</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/20 text-white/80 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body / Form */}
        <form onSubmit={handleSendWhatsApp} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
          <div className="bg-emerald-50 dark:bg-emerald-950/40 p-3 rounded-lg border border-emerald-200 dark:border-emerald-800/60 text-xs text-emerald-900 dark:text-emerald-200 flex items-start space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
            <p>
              Upload prescription or type required medicines. Clicking <strong>Send via WhatsApp</strong> opens direct chat with our verified pharmacist.
            </p>
          </div>

          {/* Customer Name */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Customer Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="customerName"
              required
              placeholder="e.g. Rahul Kumar"
              value={formData.customerName}
              onChange={handleChange}
              className="w-full px-3.5 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
          </div>

          {/* Mobile & Email Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="mobileNumber"
                required
                placeholder="10-digit phone"
                value={formData.mobileNumber}
                onChange={handleChange}
                className="w-full px-3.5 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Email Address (Optional)
              </label>
              <input
                type="email"
                name="email"
                placeholder="name@email.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3.5 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Medicine Required */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Medicine Name / Quantity <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="medicineName"
              required
              placeholder="e.g. Paracetamol 650mg (1 strip), Pan-D (2 strips)"
              value={formData.medicineName}
              onChange={handleChange}
              className="w-full px-3.5 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
          </div>

          {/* Prescription Upload & Selector */}
          <div className="bg-slate-50 dark:bg-slate-800/80 p-3 rounded-lg border border-slate-200 dark:border-slate-700 space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center">
                <FileText className="w-4 h-4 mr-1 text-emerald-600 dark:text-emerald-400" />
                Do you have a doctor's prescription?
              </label>
              <select
                name="prescription"
                value={formData.prescription}
                onChange={handleChange}
                className="px-2.5 py-1 text-xs rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200"
              >
                <option value="Yes">Yes</option>
                <option value="No">No (OTC / Non-Rx)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs text-slate-500 dark:text-slate-400 mb-1">
                Attach Prescription Photo (Optional - Can also be attached inside WhatsApp)
              </label>
              <input
                type="file"
                accept="image/*,.pdf"
                onChange={handleFileChange}
                className="w-full text-xs text-slate-600 dark:text-slate-300 file:mr-3 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-emerald-100 file:text-emerald-800 hover:file:bg-emerald-200 cursor-pointer"
              />
              {prescriptionFile && (
                <p className="text-xs text-emerald-600 font-medium mt-1">
                  Selected: {prescriptionFile.name}
                </p>
              )}
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Delivery Address (Sakurabad / Jehanabad) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="address"
              required
              placeholder="House/Village, Landmark, Sakurabad"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-3.5 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
          </div>

          {/* Preferred Delivery Time */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Preferred Delivery / Pickup Time
            </label>
            <select
              name="preferredDeliveryTime"
              value={formData.preferredDeliveryTime}
              onChange={handleChange}
              className="w-full px-3.5 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            >
              <option value="As soon as possible">As soon as possible (Urgent)</option>
              <option value="Morning (8:00 AM - 12:00 PM)">Morning (8:00 AM - 12:00 PM)</option>
              <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
              <option value="Evening (4:00 PM - 9:00 PM)">Evening (4:00 PM - 9:00 PM)</option>
            </select>
          </div>

          {/* Additional Notes */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Special Instructions / Notes
            </label>
            <textarea
              name="message"
              rows={2}
              placeholder="e.g. Please call before delivery or bring liquid form if available."
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3.5 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none resize-none"
            />
          </div>

          {/* Buttons */}
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 px-4 rounded-xl shadow-lg shadow-emerald-600/20 flex items-center justify-center space-x-2 transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Send via WhatsApp</span>
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="w-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center space-x-2 border border-slate-300 dark:border-slate-700 transition-all text-center"
            >
              <PhoneCall className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Call Now</span>
            </a>
          </div>

          <div className="text-[11px] text-slate-400 dark:text-slate-500 text-center flex items-center justify-center space-x-1">
            <ShieldAlert className="w-3.5 h-3.5 text-slate-400" />
            <span>Prescription medicines dispensed only upon valid doctor's prescription verification.</span>
          </div>
        </form>
      </div>
    </div>
  );
};
