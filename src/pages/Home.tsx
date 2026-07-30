import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { 
  Phone, MessageCircle, MapPin, Search, ArrowRight, ShieldCheck, 
  Clock, CheckCircle2, Award, HeartHandshake, Pill, Stethoscope, 
  Activity, Star, ChevronDown, Sparkles, Mail, UserCheck, PackageCheck, Tag
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { BUSINESS_INFO, SERVICES_LIST, WHY_CHOOSE_US, CUSTOMER_REVIEWS, FAQ_ITEMS, HEALTH_TIPS } from '../data/pharmacyData';
import medicineStockData from '../data/medicineStock.json';

export const Home: React.FC = () => {
  const { handleOpenWhatsAppModal } = useOutletContext<{ handleOpenWhatsAppModal: (med?: string) => void }>();
  const [heroSearchTerm, setHeroSearchTerm] = useState('');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  // Featured 6 services
  const featuredServices = SERVICES_LIST.slice(0, 6);

  // Quick search filter for stock preview
  const quickSearchResults = heroSearchTerm
    ? medicineStockData.filter(item =>
        item.name.toLowerCase().includes(heroSearchTerm.toLowerCase()) ||
        item.saltName.toLowerCase().includes(heroSearchTerm.toLowerCase()) ||
        item.brand.toLowerCase().includes(heroSearchTerm.toLowerCase())
      ).slice(0, 4)
    : [];

  return (
    <>
      <SEOHead 
        title="Home | Genuine Medicines & Healthcare Sakurabad" 
        description="New aadarsh Medical Hall in Sakurabad O1 Road, Jehanabad, Bihar. Authentic prescription medicines, health devices, baby care, surgical items with WhatsApp delivery."
      />

      {/* Hero Banner Section - Geometric Balance Theme */}
      <section className="relative bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 overflow-hidden border-b border-slate-200 dark:border-slate-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 relative min-h-[580px]">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-center gap-6 relative">
            {/* Geometric Accent Blob */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#0A8F6A]/10 rounded-br-full -z-0 pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 dark:bg-blue-950/80 dark:text-blue-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-200 dark:border-blue-800">
                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                <span>Registered & Genuine Pharmaceutical Care</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-[1.15] tracking-tight">
                Your Trusted <span className="text-[#0A8F6A]">Medical Store</span> for Genuine Care
              </h1>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
                Providing genuine medicines, healthcare products, surgical supplies, baby care, and daily medical essentials at affordable prices in Sakurabad, Jehanabad, Bihar.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 relative z-10">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="bg-[#0A8F6A] hover:bg-[#087758] text-white px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base shadow-xl shadow-[#0A8F6A]/20 flex items-center gap-2.5 transition-all transform hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4" />
                <span>Call Pharmacist</span>
              </a>

              <button
                onClick={() => handleOpenWhatsAppModal()}
                className="bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-800 dark:hover:bg-slate-700 px-6 py-3.5 rounded-xl font-bold text-sm flex items-center gap-2 shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#0A8F6A]" />
                <span>WhatsApp Order</span>
              </button>

              <a
                href={BUSINESS_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 px-5 py-3 rounded-xl font-bold text-sm hover:border-[#0A8F6A] dark:hover:border-[#0A8F6A] transition-colors flex items-center gap-1.5"
              >
                <MapPin className="w-4 h-4 text-[#0A8F6A]" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Geometric Metric Grid */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-2 relative z-10">
              <div className="p-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm">
                <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">100%</div>
                <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider">Genuine Meds</div>
              </div>
              <div className="p-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm">
                <div className="text-xl sm:text-2xl font-black text-[#0A8F6A]">24/7</div>
                <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider">Help Line</div>
              </div>
              <div className="p-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm">
                <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">804429</div>
                <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider">Sakurabad, Bihar</div>
              </div>
            </div>
          </div>

          {/* Right Column: Stock Checker / Feature Column with Glassmorphism */}
          <div className="lg:col-span-5 bg-gradient-to-br from-blue-700 via-teal-800 to-[#0A8F6A] relative p-6 sm:p-10 flex flex-col justify-center">
            
            {/* Stock Checker Glass Component */}
            <div className="relative z-10 h-full flex flex-col justify-center">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden flex flex-col">
                <div className="flex justify-between items-center mb-5">
                  <h3 className="text-white font-bold text-lg sm:text-xl flex items-center gap-2">
                    <Search className="w-5 h-5 text-emerald-300" />
                    Medicine Stock Checker
                  </h3>
                  <span className="bg-emerald-400 text-slate-900 text-[10px] px-2.5 py-1 rounded-full font-extrabold uppercase tracking-wider">
                    Live Store Inventory
                  </span>
                </div>

                <div className="relative mb-5">
                  <input
                    type="text"
                    placeholder="Search medicine (e.g. Paracetamol, Dolo 650, Moxikind)..."
                    value={heroSearchTerm}
                    onChange={(e) => setHeroSearchTerm(e.target.value)}
                    className="w-full bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/70 outline-none text-xs sm:text-sm focus:ring-2 focus:ring-white/50"
                  />
                  <Search className="w-4 h-4 absolute right-4 top-3.5 text-white/70" />
                </div>

                {/* Live Stock Results or Featured Items */}
                <div className="space-y-2.5 flex-1 max-h-64 overflow-y-auto pr-1">
                  {heroSearchTerm ? (
                    quickSearchResults.length > 0 ? (
                      quickSearchResults.map(item => (
                        <div
                          key={item.id}
                          onClick={() => handleOpenWhatsAppModal(item.name)}
                          className="bg-white/15 hover:bg-white/25 p-3 rounded-2xl flex justify-between items-center border border-white/10 cursor-pointer transition-colors"
                        >
                          <div>
                            <p className="text-white font-bold text-xs">{item.name}</p>
                            <p className="text-white/70 text-[10px]">{item.brand} • ₹{item.discountedPrice || item.mrp}</p>
                          </div>
                          <span className="bg-emerald-500/30 text-emerald-200 text-[10px] px-2 py-0.5 rounded-md font-bold uppercase border border-emerald-400/30">
                            {item.status}
                          </span>
                        </div>
                      ))
                    ) : (
                      <div className="bg-white/10 p-3 rounded-2xl text-center text-xs text-white/80">
                        No exact match for "{heroSearchTerm}". Request custom medicine via WhatsApp.
                      </div>
                    )
                  ) : (
                    medicineStockData.slice(0, 4).map(item => (
                      <div
                        key={item.id}
                        onClick={() => handleOpenWhatsAppModal(item.name)}
                        className="bg-white/10 hover:bg-white/20 p-3 rounded-2xl flex justify-between items-center border border-white/10 cursor-pointer transition-colors"
                      >
                        <div>
                          <p className="text-white font-semibold text-xs">{item.name}</p>
                          <p className="text-white/60 text-[10px]">{item.brand}</p>
                        </div>
                        <span className={`text-[10px] px-2 py-0.5 rounded-md font-bold uppercase border ${
                          item.status === 'Available'
                            ? 'bg-emerald-500/30 text-emerald-200 border-emerald-400/30'
                            : item.status === 'Limited Stock'
                            ? 'bg-amber-500/30 text-amber-200 border-amber-400/30'
                            : 'bg-rose-500/30 text-rose-200 border-rose-400/30'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                    ))
                  )}
                </div>

                <Link
                  to="/services"
                  className="w-full mt-5 bg-white text-[#0A8F6A] text-center py-3 rounded-xl font-bold text-xs sm:text-sm hover:bg-slate-100 transition-colors shadow-lg block"
                >
                  Check Complete Store Inventory →
                </Link>
              </div>
            </div>

          </div>

        </div>

        {/* Geometric Bottom Utility Bar */}
        <div className="bg-slate-900 text-white px-4 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-3 text-xs border-t border-slate-800">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#0A8F6A]" />
              <span className="text-slate-300">Manish House, Sakurabad, Jehanabad, Bihar 804429</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#0A8F6A]" />
              <span className="text-slate-300">8:00 AM - 10:00 PM (Daily)</span>
            </div>
          </div>
          <div className="flex items-center gap-3 text-slate-400 text-[11px]">
            <span>© {new Date().getFullYear()} New Aadarsh Medical Hall</span>
            <span className="text-slate-700">|</span>
            <Link to="/contact" className="hover:text-white">Contact & Directions</Link>
          </div>
        </div>
      </section>

      {/* Short About Preview Section */}
      <section className="py-16 bg-white dark:bg-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 aspect-4/3">
                <img
                  src="/src/assets/images/pharmacy_interior_storefront_1785397861924.jpg"
                  alt="New aadarsh Medical Hall Store Interior"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-slate-900 text-white p-5 rounded-2xl shadow-xl hidden sm:block border border-slate-800">
                <p className="text-2xl font-black text-[#0A8F6A]">8+ Years</p>
                <p className="text-xs font-semibold text-slate-300">Serving Sakurabad & Jehanabad</p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#0A8F6A]/10 text-[#0A8F6A] text-xs font-bold">
                <HeartHandshake className="w-3.5 h-3.5 text-[#0A8F6A]" />
                <span>About New Aadarsh Medical Hall</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Your Health, Our Sacred Priority in Sakurabad
              </h2>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Located at Manish House Sakurabad (near Middle School, O1 Road), New Aadarsh Medical Hall has been a trusted healthcare pillar in Jehanabad. We stock 100% genuine allopathic, Ayurvedic, pediatric, diabetic, and surgical medications sourced directly from licensed pharma companies.
              </p>

              <div className="grid grid-cols-2 gap-4 text-xs font-semibold text-slate-700 dark:text-slate-300 pt-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0A8F6A]" />
                  <span>Licensed Pharmacist Verification</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0A8F6A]" />
                  <span>Cold Storage Insulin Protection</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0A8F6A]" />
                  <span>Discounts on Monthly Chronic Care</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0A8F6A]" />
                  <span>Fast WhatsApp Medicine Delivery</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center space-x-2 text-[#0A8F6A] font-bold hover:underline text-sm"
                >
                  <span>Learn More About Our Journey & Standards</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Services (Maximum 6) */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Comprehensive Healthcare Services
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              From prescription medicines to home care equipment, explore our complete healthcare services in Sakurabad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map(service => (
              <div
                key={service.id}
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {service.iconName === 'Pill' && <Pill className="w-6 h-6" />}
                    {service.iconName === 'Stethoscope' && <Stethoscope className="w-6 h-6" />}
                    {service.iconName === 'Activity' && <Activity className="w-6 h-6" />}
                    {service.iconName === 'ShieldCheck' && <ShieldCheck className="w-6 h-6" />}
                    {service.iconName === 'HeartHandshake' && <HeartHandshake className="w-6 h-6" />}
                    {service.iconName === 'Leaf' && <Award className="w-6 h-6" />}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-2">
                    {service.tagline}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-500">Sakurabad Store Stock</span>
                  <button
                    onClick={() => handleOpenWhatsAppModal(`Inquiry for ${service.title}`)}
                    className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center space-x-1"
                  >
                    <span>Inquire Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-all"
            >
              <span>View All Services & Search Medicine Inventory</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white dark:bg-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Why Families Trust New aadarsh Medical Hall
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              Built on transparency, fair pricing, and strict medicine authenticity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-emerald-500 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold mb-4 shadow-md">
                  {idx === 0 && <ShieldCheck className="w-5 h-5" />}
                  {idx === 1 && <Tag className="w-5 h-5" />}
                  {idx === 2 && <UserCheck className="w-5 h-5" />}
                  {idx === 3 && <MessageCircle className="w-5 h-5" />}
                  {idx === 4 && <Clock className="w-5 h-5" />}
                  {idx === 5 && <PackageCheck className="w-5 h-5" />}
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products / Medicine Stock Quick Preview */}
      <section className="py-16 bg-slate-100 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                Live Inventory
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
                Popular Medicines & Devices
              </h2>
            </div>
            <Link
              to="/services"
              className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center"
            >
              <span>Explore Complete Stock Portal</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {medicineStockData.slice(0, 4).map(item => (
              <div key={item.id} className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-emerald-600 uppercase block">{item.category}</span>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm mt-0.5">{item.name}</h3>
                  <p className="text-xs text-slate-500 mt-1">Brand: {item.brand}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-sm font-extrabold text-slate-900 dark:text-white">₹{item.discountedPrice || item.mrp}</span>
                    {item.discountedPrice && <span className="text-[10px] text-slate-400 line-through ml-1.5">₹{item.mrp}</span>}
                  </div>
                  <button
                    onClick={() => handleOpenWhatsAppModal(item.name)}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-bold py-1.5 px-3 rounded-lg shadow"
                  >
                    Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Preview */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              What Sakurabad Customers Say
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Verified feedback from patients and doctors in Jehanabad district.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CUSTOMER_REVIEWS.map(rev => (
              <div key={rev.id} className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-5 border border-slate-200 dark:border-slate-700 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-1 text-amber-400 mb-2">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed italic mb-4">
                    "{rev.comment}"
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200 dark:border-slate-700/80">
                  <p className="text-xs font-bold text-slate-900 dark:text-white">{rev.author}</p>
                  <p className="text-[11px] text-slate-500">{rev.location} • {rev.source}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview Accordion */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Quick answers about medicine availability, prescriptions, and WhatsApp ordering.
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.slice(0, 4).map(faq => (
              <div
                key={faq.id}
                className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaqId(openFaqId === faq.id ? null : faq.id)}
                  className="w-full text-left p-4 font-bold text-sm text-slate-900 dark:text-white flex items-center justify-between focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-emerald-600 transition-transform ${openFaqId === faq.id ? 'rotate-180' : ''}`} />
                </button>
                {openFaqId === faq.id && (
                  <div className="px-4 pb-4 pt-1 text-xs text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800/60 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Health Tips Preview */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Pharmacist Advice</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Health & Wellness Guidance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HEALTH_TIPS.map(tip => (
              <div key={tip.id} className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950 px-2.5 py-1 rounded-full">
                  {tip.category}
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mt-3 mb-2">{tip.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{tip.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA & Newsletter */}
      <section className="py-16 bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-800 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Need Medicines Urgently in Sakurabad?
          </h2>
          <p className="text-sm sm:text-base text-emerald-100 max-w-2xl mx-auto">
            Send us your prescription on WhatsApp or call our Sakurabad medical team directly. We are ready to assist you.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={() => handleOpenWhatsAppModal()}
              className="bg-white hover:bg-slate-100 text-emerald-900 font-extrabold py-3.5 px-8 rounded-xl shadow-xl flex items-center space-x-2 text-sm"
            >
              <MessageCircle className="w-5 h-5 fill-emerald-800" />
              <span>WhatsApp Medicine Order</span>
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="bg-slate-900 hover:bg-slate-800 text-white font-extrabold py-3.5 px-8 rounded-xl border border-emerald-500/40 flex items-center space-x-2 text-sm"
            >
              <Phone className="w-5 h-5 text-emerald-400" />
              <span>Call Pharmacist Now</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
