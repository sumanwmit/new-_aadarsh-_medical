import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Phone, MessageCircle, Moon, Sun, Menu, X, Shield, PlusCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/pharmacyData';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenWhatsAppModal: (prefilledMed?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenWhatsAppModal }) => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services & Stock', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors shadow-sm">
      {/* Top Notification Bar */}
      <div className="bg-slate-900 text-white text-[11px] sm:text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-2">
            <Shield className="w-3.5 h-3.5 text-[#0A8F6A]" />
            <span className="font-medium text-slate-300">
              100% Genuine Medicines • Sakurabad, Jehanabad, Bihar (804429)
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="hidden sm:inline text-slate-400">
              Timings: 8:00 AM - 10:00 PM (Daily)
            </span>
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="font-bold text-[#0A8F6A] hover:underline flex items-center space-x-1"
            >
              <Phone className="w-3 h-3" />
              <span>Call: {BUSINESS_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 bg-[#0A8F6A] rounded-lg flex items-center justify-center text-white shadow-md shadow-[#0A8F6A]/20 group-hover:scale-105 transition-transform">
            <PlusCircle className="w-6 h-6 text-white" />
          </div>
          <div>
            <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white block leading-tight">
              New Aadarsh <span className="text-[#0A8F6A]">Medical Hall</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#0A8F6A] font-semibold block leading-none mt-0.5">
              Sakurabad Pharmacy
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                  isActive
                    ? 'text-[#0A8F6A] dark:text-[#0A8F6A] bg-[#0A8F6A]/10 font-bold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-[#0A8F6A] dark:hover:text-[#0A8F6A] hover:bg-slate-100 dark:hover:bg-slate-800'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center space-x-3">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
          </button>

          {/* WhatsApp Order Button */}
          <button
            onClick={() => onOpenWhatsAppModal()}
            className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-5 py-2.5 rounded-full flex items-center space-x-2 transition-all hover:scale-105 shadow-md"
          >
            <MessageCircle className="w-4 h-4 text-[#0A8F6A]" />
            <span>Order via WhatsApp</span>
          </button>

          {/* Direct Phone Call */}
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="bg-[#0A8F6A] hover:bg-[#087758] text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center space-x-1.5 transition-all shadow-md shadow-[#0A8F6A]/20"
          >
            <Phone className="w-3.5 h-3.5 text-white" />
            <span className="hidden xl:inline">Call Pharmacist</span>
          </a>
        </div>

        {/* Mobile Menu Trigger Button */}
        <div className="flex items-center space-x-2 lg:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-3 transition-colors animate-fadeIn">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-2.5 rounded-xl text-base font-semibold transition-all ${
                    isActive
                      ? 'bg-emerald-600 text-white font-bold shadow-md'
                      : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWhatsAppModal();
              }}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center space-x-1.5 shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Order</span>
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="w-full bg-slate-900 dark:bg-slate-800 text-white font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center space-x-1.5 border border-slate-700"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
