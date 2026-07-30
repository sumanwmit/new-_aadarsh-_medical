import React, { useState, useMemo } from 'react';
import { Search, AlertCircle, CheckCircle2, Clock, ShoppingCart, RefreshCw, Filter, Sparkles, AlertTriangle } from 'lucide-react';
import medicineData from '../data/medicineStock.json';
import { MedicineStockItem } from '../types';

interface MedicineStockCheckerProps {
  onOrderClick?: (medicineName: string) => void;
}

export const MedicineStockChecker: React.FC<MedicineStockCheckerProps> = ({ onOrderClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');

  // Load inventory from medicineStock.json (allows easy future API hook replacement)
  const stockList: MedicineStockItem[] = medicineData as MedicineStockItem[];

  const categories = useMemo(() => {
    const cats = new Set(stockList.map(item => item.category));
    return ['All', ...Array.from(cats)];
  }, [stockList]);

  const filteredMedicines = useMemo(() => {
    return stockList.filter(item => {
      const matchesSearch = 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.saltName.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesStatus = selectedStatus === 'All' || item.status === selectedStatus;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [searchTerm, selectedCategory, selectedStatus, stockList]);

  const getStatusBadge = (status: MedicineStockItem['status'], quantity: number) => {
    switch (status) {
      case 'Available':
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
            <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-emerald-600 dark:text-emerald-400" />
            In Stock ({quantity} Left)
          </span>
        );
      case 'Limited Stock':
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
            <Clock className="w-3.5 h-3.5 mr-1 text-amber-600 dark:text-amber-400" />
            Limited Stock ({quantity} Left)
          </span>
        );
      case 'Out of Stock':
      default:
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-800 dark:bg-rose-950/80 dark:text-rose-300 border border-rose-300 dark:border-rose-800">
            <AlertTriangle className="w-3.5 h-3.5 mr-1 text-rose-600 dark:text-rose-400" />
            Out of Stock
          </span>
        );
    }
  };

  return (
    <div id="stock-checker" className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 transition-colors">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Live Inventory Portal</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
            Medicine Stock Availability Checker
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Search genuine medicines, health monitors, and daily supplements available at New aadarsh Medical Hall.
          </p>
        </div>

        <button 
          onClick={() => { setSearchTerm(''); setSelectedCategory('All'); setSelectedStatus('All'); }}
          className="inline-flex items-center space-x-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold hover:underline self-start md:self-auto"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Reset Filters</span>
        </button>
      </div>

      {/* Search Input Box */}
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="w-5 h-5 text-slate-400" />
        </div>
        <input
          type="text"
          placeholder="Type medicine name, active salt (e.g. Paracetamol, Amoxyclav), or brand name..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/90 text-slate-900 dark:text-white text-sm md:text-base focus:ring-2 focus:ring-emerald-500 focus:outline-none shadow-inner"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            Clear
          </button>
        )}
      </div>

      {/* Filter Chips */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
        {/* Category Filters */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none w-full md:w-auto">
          <Filter className="w-4 h-4 text-slate-400 flex-shrink-0" />
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex-shrink-0">Category:</span>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Status Filters */}
        <div className="flex items-center space-x-2">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Status:</span>
          {['All', 'Available', 'Limited Stock', 'Out of Stock'].map(st => (
            <button
              key={st}
              onClick={() => setSelectedStatus(st)}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                selectedStatus === st
                  ? 'bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-900 font-bold'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-4">
        <span>Showing <strong>{filteredMedicines.length}</strong> items in inventory</span>
        <span>Store Address: Sakurabad O1 Road</span>
      </div>

      {/* Medicine Grid */}
      {filteredMedicines.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredMedicines.map(med => (
            <div
              key={med.id}
              className="bg-slate-50 dark:bg-slate-800/60 rounded-xl p-4 border border-slate-200 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all flex flex-col justify-between group shadow-sm hover:shadow-md"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <span className="text-[10px] font-bold tracking-wider uppercase text-emerald-600 dark:text-emerald-400 block">
                      {med.category} • {med.dosageForm}
                    </span>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {med.name}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
                  <strong className="text-slate-700 dark:text-slate-300">Brand:</strong> {med.brand}
                </p>

                <p className="text-xs italic text-slate-600 dark:text-slate-400 mb-3 bg-white dark:bg-slate-900/60 p-2 rounded border border-slate-200/60 dark:border-slate-800">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Salt Composition:</span> {med.saltName}
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 mb-3">
                  {med.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200 dark:border-slate-700/80 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-baseline space-x-1.5">
                      <span className="text-lg font-extrabold text-slate-900 dark:text-white">
                        ₹{med.discountedPrice || med.mrp}
                      </span>
                      {med.discountedPrice && (
                        <span className="text-xs text-slate-400 line-through">
                          ₹{med.mrp}
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] text-slate-500 block">Expiry: {med.expiry}</span>
                  </div>

                  <div>{getStatusBadge(med.status, med.availableQuantity)}</div>
                </div>

                <div className="flex items-center space-x-2 pt-1">
                  {med.status === 'Out of Stock' ? (
                    <button
                      onClick={() => onOrderClick && onOrderClick(`Special Request: ${med.name}`)}
                      className="w-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 text-xs font-bold py-2 px-3 rounded-lg flex items-center justify-center space-x-1 transition-colors"
                    >
                      <Clock className="w-3.5 h-3.5 text-amber-500" />
                      <span>Request Pre-Order (24h)</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => onOrderClick && onOrderClick(med.name)}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2 px-3 rounded-lg flex items-center justify-center space-x-1.5 shadow-sm transition-all"
                    >
                      <ShoppingCart className="w-3.5 h-3.5" />
                      <span>Order on WhatsApp</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-slate-50 dark:bg-slate-800/40 rounded-xl p-8 text-center border border-dashed border-slate-300 dark:border-slate-700">
          <AlertCircle className="w-10 h-10 text-amber-500 mx-auto mb-2" />
          <h4 className="text-base font-bold text-slate-800 dark:text-slate-200">
            No exact matches found for "{searchTerm}"
          </h4>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-md mx-auto">
            Don't worry! We stock over 5,000+ medicines. Simply send us your required medicine name or prescription via WhatsApp, and our Sakurabad team will arrange it for you.
          </p>
          <button
            onClick={() => onOrderClick && onOrderClick(searchTerm || 'Custom Medicine Request')}
            className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs py-2.5 px-5 rounded-xl shadow-md transition-all inline-flex items-center space-x-1.5"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Ask Pharmacist via WhatsApp</span>
          </button>
        </div>
      )}
    </div>
  );
};
