import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { 
  Pill, Stethoscope, Activity, ShieldCheck, HeartHandshake, 
  Leaf, CheckCircle2, ShoppingCart, MessageCircle, Phone, ArrowRight, Sparkles 
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { MedicineStockChecker } from '../components/MedicineStockChecker';
import { SERVICES_LIST, BUSINESS_INFO } from '../data/pharmacyData';

export const Services: React.FC = () => {
  const { handleOpenWhatsAppModal } = useOutletContext<{ handleOpenWhatsAppModal: (med?: string) => void }>();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredServices = activeCategory === 'all'
    ? SERVICES_LIST
    : SERVICES_LIST.filter(s => s.id === activeCategory);

  return (
    <>
      <SEOHead 
        title="Services & Medicine Stock Checker | New aadarsh Medical Hall"
        description="Check live medicine stock in Sakurabad, Jehanabad. Complete catalog of prescription drugs, OTC medicines, glucometers, BP monitors, surgical supplies, and baby care."
      />

      <Breadcrumbs currentPageTitle="Services & Stock Checker" />

      {/* Header Banner */}
      <section className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Pharmacy Care & Inventory</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Our Healthcare Services & Stock Checker
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            Search genuine medicine availability in real-time or explore our specialized pharmaceutical categories at Sakurabad.
          </p>
        </div>
      </section>

      {/* Section 1: EXCLUSIVE Medicine Stock Checker Component */}
      <section className="py-12 bg-slate-100 dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MedicineStockChecker onOrderClick={(medName) => handleOpenWhatsAppModal(medName)} />
        </div>
      </section>

      {/* Section 2: Full Detailed Category Services */}
      <section className="py-16 bg-white dark:bg-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Service Categories</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Explore Our Healthcare Offerings
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === 'all'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
              }`}
            >
              All Categories
            </button>
            {SERVICES_LIST.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map(service => (
              <div
                key={service.id}
                className="bg-slate-50 dark:bg-slate-800/80 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-4 shadow-md">
                    {service.iconName === 'Pill' && <Pill className="w-6 h-6" />}
                    {service.iconName === 'Stethoscope' && <Stethoscope className="w-6 h-6" />}
                    {service.iconName === 'Activity' && <Activity className="w-6 h-6" />}
                    {service.iconName === 'ShieldCheck' && <ShieldCheck className="w-6 h-6" />}
                    {service.iconName === 'HeartHandshake' && <HeartHandshake className="w-6 h-6" />}
                    {service.iconName === 'Leaf' && <Leaf className="w-6 h-6" />}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {service.title}
                  </h3>
                  <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-3">
                    {service.tagline}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <div className="mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2">
                      Popular Medicines & Supplies:
                    </span>
                    <ul className="space-y-1">
                      {service.popularItems.map((item, i) => (
                        <li key={i} className="text-xs text-slate-700 dark:text-slate-300 flex items-center">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mr-1.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-700/80 space-y-2">
                  <button
                    onClick={() => handleOpenWhatsAppModal(`Order request for ${service.title}`)}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow flex items-center justify-center space-x-2 transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Order {service.title} on WhatsApp</span>
                  </button>
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="w-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 text-xs font-bold py-2 px-4 rounded-xl flex items-center justify-center space-x-1.5 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>Inquire via Call</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
