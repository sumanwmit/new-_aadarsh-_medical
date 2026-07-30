import React, { useEffect } from 'react';
import { BUSINESS_INFO } from '../data/pharmacyData';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  pageType?: 'website' | 'article' | 'pharmacy';
  schemaData?: object;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  canonicalUrl,
  schemaData
}) => {
  const defaultTitle = `${BUSINESS_INFO.name} | ${BUSINESS_INFO.tagline}`;
  const defaultDesc = `New aadarsh Medical Hall in Sakurabad, Jehanabad (Bihar) offers 100% genuine medicines, OTC drugs, health monitors, surgical items, baby care, and WhatsApp delivery. Call ${BUSINESS_INFO.phoneFormatted}.`;
  const defaultKeywords = "pharmacy in sakurabad, medical store jehanabad, new aadarsh medical hall, genuine medicines bihar, whatsapp medicine order sakurabad, medical shop pinjor, blood pressure monitor sakurabad, baby care store jehanabad";

  const metaTitle = title ? `${title} | ${BUSINESS_INFO.name}` : defaultTitle;
  const metaDesc = description || defaultDesc;
  const metaKeywords = keywords || defaultKeywords;
  const canonical = canonicalUrl || window.location.href;

  useEffect(() => {
    document.title = metaTitle;

    // Helper to update meta tag
    const updateMeta = (nameAttr: string, value: string, content: string) => {
      let element = document.querySelector(`meta[${nameAttr}="${value}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(nameAttr, value);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    updateMeta('name', 'description', metaDesc);
    updateMeta('name', 'keywords', metaKeywords);
    updateMeta('property', 'og:title', metaTitle);
    updateMeta('property', 'og:description', metaDesc);
    updateMeta('property', 'og:type', 'website');
    updateMeta('property', 'og:url', canonical);
    updateMeta('property', 'og:site_name', BUSINESS_INFO.name);
    updateMeta('name', 'twitter:card', 'summary_large_image');
    updateMeta('name', 'twitter:title', metaTitle);
    updateMeta('name', 'twitter:description', metaDesc);

    // Canonical link
    let linkCanonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonical);

    // Schema JSON-LD Injection
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": ["Pharmacy", "MedicalBusiness", "LocalBusiness"],
      "name": BUSINESS_INFO.name,
      "description": BUSINESS_INFO.tagline,
      "url": window.location.origin,
      "telephone": BUSINESS_INFO.phoneFormatted,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": BUSINESS_INFO.address.line1 + ", " + BUSINESS_INFO.address.line2,
        "addressLocality": "Sakurabad, Jehanabad",
        "addressRegion": "Bihar",
        "postalCode": BUSINESS_INFO.address.pincode,
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 25.1000,
        "longitude": 85.0000
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "07:00",
          "closes": "21:30"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Sunday"],
          "opens": "08:00",
          "closes": "20:00"
        }
      ],
      "priceRange": "₹"
    };

    let schemaScript = document.getElementById('json-ld-schema') as HTMLScriptElement;
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'json-ld-schema';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }
    
    const combinedSchema = schemaData ? [localBusinessSchema, schemaData] : localBusinessSchema;
    schemaScript.textContent = JSON.stringify(combinedSchema);

  }, [metaTitle, metaDesc, metaKeywords, canonical, schemaData]);

  return null;
};
