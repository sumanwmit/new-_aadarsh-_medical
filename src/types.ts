export interface MedicineStockItem {
  id: string;
  name: string;
  brand: string;
  saltName: string;
  category: string;
  mrp: number;
  discountedPrice?: number;
  availableQuantity: number;
  expiry: string;
  status: 'Available' | 'Limited Stock' | 'Out of Stock';
  dosageForm: string; // e.g., Tablet, Syrup, Injection, Ointment, Capsule
  requiresPrescription: boolean;
  description: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  popularItems: string[];
  features: string[];
  bgGradient?: string;
}

export interface CustomerReview {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  source: 'Google Review' | 'Verified Customer';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Storefront' | 'Medicine Shelves' | 'Health Products' | 'Medical Devices' | 'Staff & Care';
  imageUrl: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Orders' | 'Medicines' | 'Delivery' | 'Services' | 'General';
}

export interface WhatsAppOrderData {
  customerName: string;
  mobileNumber: string;
  email: string;
  address: string;
  medicineName: string;
  prescription: 'Yes' | 'No';
  preferredDeliveryTime: string;
  message: string;
}

export interface QuickInquiryData {
  name: string;
  phone: string;
  service: string;
  message: string;
}
