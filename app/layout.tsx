import type { Metadata } from 'next';
import Script from 'next/script';
import localFont from 'next/font/local';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './icon-fonts.css';
import './globals.css';
import JsonLd from '@/components/JsonLd';
import { BLOG_AUTHOR, SITE_PUBLISHER } from '@/lib/siteIdentity';

import DynamicWhatsApp from '@/components/DynamicWhatsApp';
import Analytics from '@/components/Analytics';
import BootstrapClient from '@/components/BootstrapClient';

const tomato = localFont({
  src: [
    {
      path: './fonts/TomatoGrotesk-Medium.woff2',
      weight: '400 500',
      style: 'normal',
    },
    {
      path: './fonts/TomatoGrotesk-SemiBold.woff2',
      weight: '600 800',
      style: 'normal',
    },
  ],
  variable: '--font-tomato',
  preload: false,
});

const tomatoLatin = localFont({
  src: [
    { path: './fonts/TomatoGrotesk-Medium.latin.woff2', weight: '400 500', style: 'normal' },
    { path: './fonts/TomatoGrotesk-SemiBold.latin.woff2', weight: '600 800', style: 'normal' },
  ],
  variable: '--font-tomato-latin',
  adjustFontFallback: false,
  declarations: [{ prop: 'unicode-range', value: 'U+0020-00FF, U+2000-206F, U+20A0-20CF, U+2122, U+2190-21FF' }],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://flexymarkets.com'),
  authors: [{ name: BLOG_AUTHOR }],
  publisher: SITE_PUBLISHER,
  // Page titles already include the brand, so a template would duplicate it.
  title: 'Forex & CFD Trading Platform | Flexy Markets',
  description: 'Explore forex and CFD trading with Flexy Markets. Compare trading accounts, discover the RTX 5 platform, and access market analysis and educational resources.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: './',
    siteName: 'Flexy Markets',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Flexy Markets — Forex & CFD Trading',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/opengraph-image'],
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
  alternates: {
    canonical: './',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0f664a',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://flexymarkets.com/#organization',
        name: SITE_PUBLISHER,
        legalName: 'Flexy Markets Limited',
        url: 'https://flexymarkets.com',
        logo: 'https://flexymarkets.com/hd_logo.webp',
        sameAs: [
          'https://www.facebook.com/flexymarkets/',
          'https://www.instagram.com/officialflexymarktes',
          'https://www.linkedin.com/company/flexy-market/',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+44-3300-271632',
          email: 'support@flexymarkets.com',
          contactType: 'customer service',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://flexymarkets.com/#website',
        url: 'https://flexymarkets.com/',
        name: 'Flexy Markets',
        inLanguage: 'en',
        publisher: { '@id': 'https://flexymarkets.com/#organization' },
      },
    ],
  };

  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${tomatoLatin.variable} ${tomato.variable}`}>
      <head>
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        {/* Queue the initial page view immediately; load the library after primary resources. */}
        <Script id="google-tag-queue" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};
            if (!window.__flexyAnalyticsInitialized) {
              window.__flexyAnalyticsInitialized = true;
              window.gtag('js', new Date());
              window.gtag('config', 'G-Q4GCWX9KQP', { page_location: window.location.href });
              window.gtag('config', 'AW-823862486');
            }
          `}
        </Script>
      </head>
      <body>
        {children}
        <DynamicWhatsApp />

        <BootstrapClient />
        <Analytics />
        <JsonLd data={organizationSchema} />

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
