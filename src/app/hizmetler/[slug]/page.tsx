import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllServiceSlugs, getServiceBySlug } from '@/data/servicesData';
import { ServiceHubView } from '@/components/hizmetler/ServiceHubView';
import { ServiceStructuredData } from '@/components/hizmetler/ServiceStructuredData';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Hizmet Bulunamadı | Bumex Garage',
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `/hizmetler/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://bumexgarage.com/hizmetler/${service.slug}`,
      siteName: 'Bumex Garage',
      locale: 'tr_TR',
      type: 'website',
      images: [
        {
          url: 'https://bumexgarage.com/og-image.jpg',
          width: 1200,
          height: 630,
          alt: `${service.title} — Bumex Garage Bahçelievler`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: service.metaTitle,
      description: service.metaDescription,
      images: ['https://bumexgarage.com/og-image.jpg'],
    },
  };
}

export default async function ServiceHubPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <ServiceStructuredData service={service} />
      <ServiceHubView service={service} />
    </>
  );
}
