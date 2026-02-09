import type { Metadata } from 'next';
import Script from 'next/script';
import localFont from 'next/font/local';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import Loader from '@/components/Loader';
import JsonLd from '@/components/JsonLd';

const tomato = localFont({
  src: [
    {
      path: './fonts/TomatoGrotesk-Medium.woff',
      weight: '400 500',
      style: 'normal',
    },
    {
      path: './fonts/TomatoGrotesk-SemiBold.woff',
      weight: '600 800',
      style: 'normal',
    },
  ],
  variable: '--font-tomato',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://flexymarkets.com'),
  title: {
    default: 'Flexy Markets | Regulated Online Trading Broker',
    template: '%s | Flexy Markets',
  },
  description: 'Trade CFD on Forex, Shares, Indices, Commodities & Cryptocurrencies with a regulated broker. Access 1,400+ assets with tight spreads and fast execution.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://flexymarkets.com',
    siteName: 'Flexy Markets',
    images: [
      {
        url: '/images/og-image.jpg', // Ensure this exists or use a placeholder
        width: 1200,
        height: 630,
        alt: 'Flexy Markets - Regulated Online Trading',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@FlexyMarkets',
    creator: '@FlexyMarkets',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Flexy Markets',
    url: 'https://flexymarkets.com',
    logo: 'https://flexymarkets.com/images/logo.png',
    sameAs: [
      'https://www.facebook.com/FlexyMarkets',
      'https://twitter.com/FlexyMarkets',
      'https://www.instagram.com/flexymarkets',
      'https://www.linkedin.com/company/flexy-markets',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+44-3300-271632',
      contactType: 'customer service',
      areaServed: 'Global',
      availableLanguage: ['English', 'Spanish', 'Italian', 'German'],
    },
  };

  return (
    <html lang="en" data-scroll-behavior="smooth" className={tomato.variable}>
      <head>
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <Script id="json-ld" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "https://schema.org/Corporation",
            "name": "Flexy Markets",
            "url": "https://flexymarkets.com",
            "logo": "https://flexymarkets.com/images/header_logo_dark.png",
            "sameAs": [
              "https://www.facebook.com/flexymarkets/",
              "https://www.instagram.com/flexy.markets/",
              "https://flexymarkets.com/",
              "https://www.linkedin.com/company/flexy-market/"
            ]
          })}
        </Script>
      </head>
      <body>
        <Loader />
        {children}
        <WhatsAppWidget />

        {/* Font Awesome - loaded async to avoid render-blocking (was blocking FCP by ~200-400ms) */}
        <Script id="load-fontawesome" strategy="afterInteractive">
          {`(function(){var l=document.createElement('link');l.rel='stylesheet';l.href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';document.head.appendChild(l)})()`}
        </Script>

        {/* Bootstrap JS - lazy loaded since only needed for dropdowns/modals */}
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" strategy="lazyOnload" />
        <JsonLd data={organizationSchema} />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-823862486');
          `}
        </Script>

        {/* Suppress harmless iframe warnings from TradingView widgets */}
        <Script id="suppress-iframe-warnings" strategy="lazyOnload">
          {`
            var o=console.error;console.error=function(){var a=arguments[0];if(a&&a.toString&&(a.toString().includes('contentWindow is not available')||a.toString().includes('Cannot listen to the event from the provided iframe')))return;o.apply(console,arguments)};
          `}
        </Script>
      </body>
    </html>
  );
}
