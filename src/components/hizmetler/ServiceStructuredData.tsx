import React from 'react';
import { ServiceHubData } from '@/data/servicesData';

interface ServiceStructuredDataProps {
  service: ServiceHubData;
}

export function ServiceStructuredData({ service }: ServiceStructuredDataProps) {
  const pageUrl = `https://bumexgarage.com/hizmetler/${service.slug}`;

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AutoRepair',
        '@id': 'https://bumexgarage.com/#business',
        name: 'Bumex Garage Bahçelievler',
        alternateName: ['Bumex Garage', 'Bumex Detailing'],
        url: 'https://bumexgarage.com',
        telephone: '+905524703610',
        priceRange: '₺₺',
        currenciesAccepted: 'TRY',
        paymentAccepted: 'Nakit, Kredi Kartı, Havale/EFT',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Prof. Muammer Aksoy Cad. (2. Cd.) No: 48',
          addressLocality: 'Bahçelievler, Çankaya',
          addressRegion: 'Ankara',
          postalCode: '06490',
          addressCountry: 'TR',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 39.9277018,
          longitude: 32.8246501,
        },
      },
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: service.title,
        serviceType: service.title,
        description: service.metaDescription,
        provider: {
          '@id': 'https://bumexgarage.com/#business',
        },
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'Bahçelievler' },
          { '@type': 'AdministrativeArea', name: 'Emek' },
          { '@type': 'AdministrativeArea', name: 'Beşevler' },
          { '@type': 'AdministrativeArea', name: 'Çankaya' },
          { '@type': 'AdministrativeArea', name: 'Balgat' },
          { '@type': 'AdministrativeArea', name: 'Söğütözü' },
          { '@type': 'City', name: 'Ankara' },
        ],
        offers: {
          '@type': 'Offer',
          priceCurrency: 'TRY',
          availability: 'https://schema.org/InStock',
          url: pageUrl,
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Bumex Garage Ana Sayfa',
            item: 'https://bumexgarage.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Hizmetlerimiz',
            item: 'https://bumexgarage.com/#hizmetler',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: service.title,
            item: pageUrl,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        mainEntity: service.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
