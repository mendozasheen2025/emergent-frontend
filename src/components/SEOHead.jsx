import React from 'react';
import { Helmet } from 'react-helmet-async';
import { seoData, companyInfo } from '../data/mock';

const SEOHead = ({ 
  title = seoData.title,
  description = seoData.description,
  keywords = seoData.keywords,
  image = seoData.image,
  url = seoData.url,
  type = seoData.type
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={seoData.author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={seoData.locale} />
      <meta property="og:site_name" content={companyInfo.name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="PH-ZMB" />
      <meta name="geo.placename" content="Subic Bay Freeport Zone" />
      <meta name="geo.position" content="14.7942;120.2833" />
      <meta name="ICBM" content="14.7942, 120.2833" />

      {/* Mobile Optimization */}
      <meta name="format-detection" content="telephone=yes" />
      <meta name="theme-color" content="#1E2A3C" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(seoData.schema)}
      </script>

      {/* FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How long does it take to build a website?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Typically, a basic single-page website takes 3-5 business days. Multi-page websites take 1-2 weeks, and professional websites with admin portals take 2-4 weeks depending on complexity."
              }
            },
            {
              "@type": "Question",
              "name": "What is included in the website packages?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "All packages include free domain for 1 year, free hosting for 1 year, 3 months basic maintenance, and mobile responsive design."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer payment plans?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we offer flexible payment terms. You can pay 50% upfront and 50% upon completion."
              }
            }
          ]
        })}
      </script>

      {/* BreadcrumbList Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://dev.gokalakal.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Services",
              "item": "https://dev.gokalakal.com/#services"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Pricing",
              "item": "https://dev.gokalakal.com/#pricing"
            },
            {
              "@type": "ListItem",
              "position": 4,
              "name": "Contact",
              "item": "https://dev.gokalakal.com/#contact"
            }
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;