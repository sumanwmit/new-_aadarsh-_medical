import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { X, ZoomIn, MessageCircle, Sparkles, Filter, Image as ImageIcon } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { GALLERY_ITEMS, BUSINESS_INFO } from '../data/pharmacyData';
import { GalleryItem } from '../types';

export const Gallery: React.FC = () => {
  const { handleOpenWhatsAppModal } = useOutletContext<{ handleOpenWhatsAppModal: (med?: string) => void }>();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Storefront', 'Medicine Shelves', 'Health Products', 'Medical Devices'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <>
      <SEOHead 
        title="Photo Gallery | New aadarsh Medical Hall Sakurabad"
        description="View photo gallery of New aadarsh Medical Hall store interior, medicine racks, health monitors, surgical instruments, and cold storage setup in Sakurabad, Jehanabad."
      />

      <Breadcrumbs currentPageTitle="Store Gallery" />

      {/* Header Banner */}
      <section className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold mb-4">
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Store Photos & Facilities</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Our Medical Store Gallery
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            Take a visual tour of our clean, well-stocked pharmacy, cold storage units, and diagnostic hardware in Sakurabad.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white dark:bg-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            <Filter className="w-4 h-4 text-slate-400 mr-2" />
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map(item => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group relative bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-slate-200 dark:border-slate-800 cursor-pointer transition-all duration-300"
              >
                <div className="aspect-4/3 overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-slate-900/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5 text-white">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">
                    {item.category}
                  </span>
                  <h3 className="font-bold text-base text-white">{item.title}</h3>
                  <p className="text-xs text-slate-300 line-clamp-2 mt-1">{item.description}</p>
                  
                  <div className="mt-3 flex items-center space-x-1 text-xs text-emerald-300 font-bold">
                    <ZoomIn className="w-4 h-4" />
                    <span>Click to Zoom</span>
                  </div>
                </div>

                <div className="p-4 bg-white dark:bg-slate-900 group-hover:hidden">
                  <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase block">
                    {item.category}
                  </span>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox Modal */}
          {selectedImage && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fadeIn"
              onClick={() => setSelectedImage(null)}
            >
              <div
                className="bg-slate-900 rounded-2xl max-w-3xl w-full overflow-hidden border border-slate-800 text-white relative shadow-2xl"
                onClick={e => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-800/80 text-white hover:bg-slate-700 transition-colors"
                  aria-label="Close image popup"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="max-h-[65vh] overflow-hidden bg-black flex items-center justify-center">
                  <img
                    src={selectedImage.imageUrl}
                    alt={selectedImage.title}
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      {selectedImage.category}
                    </span>
                    <span className="text-xs text-slate-400">{BUSINESS_INFO.name}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white">{selectedImage.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{selectedImage.description}</p>

                  <div className="pt-2 flex justify-end">
                    <button
                      onClick={() => {
                        setSelectedImage(null);
                        handleOpenWhatsAppModal(`Inquiry regarding ${selectedImage.title}`);
                      }}
                      className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold py-2 px-4 rounded-xl flex items-center space-x-1.5 shadow"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Inquire About This Service</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>
    </>
  );
};
