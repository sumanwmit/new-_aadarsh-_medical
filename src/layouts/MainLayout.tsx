import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FloatingActions } from '../components/FloatingActions';
import { WhatsAppModal } from '../components/WhatsAppModal';
import { QuickInquiryModal } from '../components/QuickInquiryModal';

export const MainLayout: React.FC = () => {
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [prefilledMedicine, setPrefilledMedicine] = useState('');
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  const handleOpenWhatsAppModal = (medicineName?: string) => {
    if (medicineName) {
      setPrefilledMedicine(medicineName);
    } else {
      setPrefilledMedicine('');
    }
    setIsWhatsAppModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors selection:bg-emerald-500 selection:text-white">
      <Navbar onOpenWhatsAppModal={handleOpenWhatsAppModal} />

      <main className="flex-grow">
        <Outlet context={{ handleOpenWhatsAppModal, setIsInquiryModalOpen }} />
      </main>

      <Footer />

      <FloatingActions onOpenWhatsAppModal={() => handleOpenWhatsAppModal()} />

      <WhatsAppModal
        isOpen={isWhatsAppModalOpen}
        onClose={() => setIsWhatsAppModalOpen(false)}
        prefilledMedicine={prefilledMedicine}
      />

      <QuickInquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
      />
    </div>
  );
};
