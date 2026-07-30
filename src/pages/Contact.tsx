import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { 
  MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2, 
  ExternalLink, Sparkles, Navigation, ShieldCheck 
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BUSINESS_INFO } from '../data/pharmacyData';

export const Contact: React.FC = () => {
  const { handleOpenWhatsAppModal } = useOutletContext<{ handleOpenWhatsAppModal: (med?: string) => void }>();

  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Auto redirect to WhatsApp with query
    setTimeout(() => {
      const text = `Hello ${BUSINESS_INFO.name},\n*Contact Form Message:*\nName: ${formState.name}\nPhone: ${formState.phone}\nEmail: ${formState.email}\nSubject: ${formState.subject}\nMessage: ${formState.message}`;
      window.open(`https://wa.me/91${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
      setSubmitted(false);
    }, 1200);
  };

  return (
    <>
      <SEOHead 
        title="Contact Us & Map Directions | New aadarsh Medical Hall Sakurabad"
        description="Contact New aadarsh Medical Hall in Sakurabad, Jehanabad, Bihar (804429). Phone: 8651804316. Directions, business hours, and quick contact form."
      />

      <Breadcrumbs currentPageTitle="Contact Us" />

      {/* Header Banner */}
      <section className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>Sakurabad, Jehanabad (Bihar 804429)</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Contact & Store Location
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            Get in touch with our friendly medical team, find Google Maps directions, or send a quick message directly.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white dark:bg-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left 5 Cols: Store Details & Action Buttons */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-slate-50 dark:bg-slate-800/80 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-5">
                <h2 className="text-xl font-extrabold text-slate-900 dark:text-white pb-3 border-b border-slate-200 dark:border-slate-700">
                  Store Contact Information
                </h2>

                {/* Address */}
                <div className="flex items-start space-x-3">
                  <div className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900 dark:text-white">Store Address</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mt-0.5">
                      {BUSINESS_INFO.address.full}
                    </p>
                    <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold mt-1">
                      Landmark: {BUSINESS_INFO.address.landmarks}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-3">
                  <div className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900 dark:text-white">Phone & Helpline</h3>
                    <a href={`tel:${BUSINESS_INFO.phone}`} className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline block mt-0.5">
                      +91 {BUSINESS_INFO.phone}
                    </a>
                    <p className="text-[11px] text-slate-500">24x7 Emergency Calls Supported</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3">
                  <div className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900 dark:text-white">Email Address</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">{BUSINESS_INFO.email}</p>
                  </div>
                </div>

                {/* Working Hours Table */}
                <div className="pt-2">
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center mb-2">
                    <Clock className="w-4 h-4 mr-1.5 text-emerald-600" />
                    Business Working Hours
                  </h3>
                  <div className="bg-white dark:bg-slate-900 rounded-xl p-3 border border-slate-200 dark:border-slate-700 space-y-1.5 text-xs">
                    {BUSINESS_INFO.workingHours.map((wh, idx) => (
                      <div key={idx} className="flex justify-between items-center text-slate-700 dark:text-slate-300">
                        <span className="font-medium">{wh.days}</span>
                        <span className="font-bold text-emerald-600 dark:text-emerald-400">{wh.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  onClick={() => handleOpenWhatsAppModal()}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-3 rounded-xl shadow text-xs flex items-center justify-center space-x-1.5"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp</span>
                </button>

                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="bg-slate-900 dark:bg-slate-800 text-white font-bold py-3 px-3 rounded-xl shadow text-xs flex items-center justify-center space-x-1.5 border border-slate-700"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Call Store</span>
                </a>

                <a
                  href={BUSINESS_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-teal-700 hover:bg-teal-800 text-white font-bold py-3 px-3 rounded-xl shadow text-xs flex items-center justify-center space-x-1.5"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Directions</span>
                </a>
              </div>
            </div>

            {/* Right 7 Cols: Contact Form & Google Maps Embed */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Contact Form */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-700 shadow-md">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Send Us a Direct Message</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                  Have a question about medicine availability, price quote, or home pickup? Write to us below.
                </p>

                {submitted ? (
                  <div className="p-8 text-center bg-emerald-50 dark:bg-emerald-950/60 rounded-xl border border-emerald-200 text-emerald-900 dark:text-emerald-200 space-y-2">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                    <h4 className="font-bold text-base">Opening WhatsApp Connection...</h4>
                    <p className="text-xs">Your message is being forwarded directly to our pharmacist in Sakurabad.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Your Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Ramesh Singh"
                          value={formState.name}
                          onChange={e => setFormState({ ...formState, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="10-digit mobile number"
                          value={formState.phone}
                          onChange={e => setFormState({ ...formState, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
                        <input
                          type="email"
                          placeholder="name@example.com"
                          value={formState.email}
                          onChange={e => setFormState({ ...formState, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Subject</label>
                        <select
                          value={formState.subject}
                          onChange={e => setFormState({ ...formState, subject: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                        >
                          <option value="Medicine Availability">Medicine Availability</option>
                          <option value="Prescription Delivery">Prescription Delivery</option>
                          <option value="Health Device Demo">Health Device Demo</option>
                          <option value="General Query">General Query</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Your Message *</label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Write details about required medicines, questions, or address..."
                        value={formState.message}
                        onChange={e => setFormState({ ...formState, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg flex items-center justify-center space-x-2 transition-all text-sm"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message & Connect on WhatsApp</span>
                    </button>
                  </form>
                )}
              </div>

              {/* Embedded Google Map */}
              <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-md">
                <div className="p-4 bg-slate-900 text-white flex items-center justify-between text-xs">
                  <span className="font-bold flex items-center">
                    <MapPin className="w-4 h-4 mr-1 text-emerald-400" />
                    Google Maps Location: Sakurabad, Jehanabad, Bihar
                  </span>
                  <a
                    href={BUSINESS_INFO.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:underline flex items-center font-bold"
                  >
                    <span>Full Map View</span>
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
                <div className="h-64 sm:h-80 w-full relative">
                  <iframe
                    title="New aadarsh Medical Hall Google Map Location"
                    src={BUSINESS_INFO.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
};
