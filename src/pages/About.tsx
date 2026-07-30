import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { 
  Award, ShieldCheck, HeartHandshake, CheckCircle2, 
  MapPin, Clock, Phone, MessageCircle, ArrowRight, UserCheck, 
  Calendar, Building2, Sparkles, PlusCircle
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BUSINESS_INFO, COMPANY_STORY, WHY_CHOOSE_US } from '../data/pharmacyData';

export const About: React.FC = () => {
  const { handleOpenWhatsAppModal } = useOutletContext<{ handleOpenWhatsAppModal: (med?: string) => void }>();

  return (
    <>
      <SEOHead 
        title="About Us | Trusted Pharmacy in Sakurabad, Jehanabad"
        description="Learn about New aadarsh Medical Hall in Sakurabad, Bihar. Our story, mission, certified pharmacists, cold-chain insulin storage, and commitment to genuine medicines."
      />

      <Breadcrumbs currentPageTitle="About Our Medical Hall" />

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>Serving Sakurabad Since 2018</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            About New aadarsh Medical Hall
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            Delivering authentic healthcare solutions, verified pharmaceuticals, and patient-first guidance at Manish House, Sakurabad, Jehanabad, Bihar.
          </p>
        </div>
      </section>

      {/* Main Story & Overview */}
      <section className="py-16 bg-white dark:bg-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-5">
              <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                Our Genesis & Commitment
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Empowering Community Healthcare with Integrity
              </h2>
              
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                New aadarsh Medical Hall was founded with a singular vision: to eradicate counterfeit or low-quality medicines from local healthcare supplies in Sakurabad and surrounding rural areas of Jehanabad district.
              </p>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Whether it is a late-night fever emergency, monthly diabetic medication refills, or specialized surgical dressings for minor procedures, our medical hall ensures batch-verified pharmaceuticals directly from authorized company hubs.
              </p>

              <div className="p-4 bg-emerald-50 dark:bg-emerald-950/50 rounded-2xl border border-emerald-200 dark:border-emerald-800 space-y-2">
                <h4 className="font-bold text-sm text-emerald-900 dark:text-emerald-200 flex items-center">
                  <UserCheck className="w-4 h-4 mr-1.5 text-emerald-600" />
                  Pharmacist Commitment
                </h4>
                <p className="text-xs text-emerald-800 dark:text-emerald-300 leading-relaxed">
                  "Every prescription brought to our counter is thoroughly audited for safety, drug interactions, and correct dosage instructions before being handed to patients."
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 aspect-square">
                <img
                  src="/src/assets/images/pharmacy_hero_banner_1785397846872.jpg"
                  alt="Medical Store Counter"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 aspect-square">
                <img
                  src="/src/assets/images/pharmacy_interior_storefront_1785397861924.jpg"
                  alt="Medicine Shelves"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Our Core Principles
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              Guided by clinical ethics and unconditional patient care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Vision */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Our Vision</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {COMPANY_STORY.vision}
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold mb-4">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Our Mission</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {COMPANY_STORY.mission}
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_STORY.values.map((val, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 mb-3" />
                <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">{val.title}</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">{val.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Timeline */}
      <section className="py-16 bg-white dark:bg-slate-900 transition-colors">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Milestones</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Our Growth Journey in Sakurabad
            </h2>
          </div>

          <div className="relative border-l-2 border-emerald-500/40 ml-4 md:ml-32 space-y-8">
            {COMPANY_STORY.timeline.map((item, idx) => (
              <div key={idx} className="relative pl-6">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-emerald-600 border-4 border-white dark:border-slate-900" />
                <span className="md:absolute md:-left-28 md:top-1 font-extrabold text-emerald-600 dark:text-emerald-400 text-sm block md:inline mb-1 md:mb-0">
                  {item.year}
                </span>
                <div className="bg-slate-50 dark:bg-slate-800/80 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                  <p className="text-xs md:text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {item.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Store Overview Card */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-slate-900 to-teal-950 text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
              <div>
                <h3 className="text-2xl font-extrabold mb-3">Visit New aadarsh Medical Hall</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  Conveniently situated at Manish House Sakurabad (near Government Middle School, O1 Road). Easy parking for bikes and cars with immediate pharmacist attention.
                </p>
                <div className="space-y-2 text-xs text-slate-300">
                  <p className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-emerald-400" /> {BUSINESS_INFO.address.full}</p>
                  <p className="flex items-center"><Clock className="w-4 h-4 mr-2 text-emerald-400" /> Mon - Sat: 07:00 AM - 09:30 PM | Sun: 08:00 AM - 08:00 PM</p>
                  <p className="flex items-center"><Phone className="w-4 h-4 mr-2 text-emerald-400" /> +91 {BUSINESS_INFO.phone}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => handleOpenWhatsAppModal()}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-6 rounded-xl shadow-lg flex items-center justify-center space-x-2 text-xs"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp Order</span>
                </button>
                <Link
                  to="/contact"
                  className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-xl border border-white/20 flex items-center justify-center space-x-2 text-xs"
                >
                  <span>Contact Page & Map</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
