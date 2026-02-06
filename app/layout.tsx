import type { Metadata } from 'next';
import Script from 'next/script';
import localFont from 'next/font/local';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import 'aos/dist/aos.css';
import WhatsAppWidget from '@/components/WhatsAppWidget';

const tomato = localFont({
  src: [
    {
      path: './fonts/TomatoGrotesk-Medium.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/TomatoGrotesk-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/TomatoGrotesk-SemiBold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/TomatoGrotesk-SemiBold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/TomatoGrotesk-SemiBold.woff',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/TomatoGrotesk-Slanted.woff',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/TomatoGrotesk-Slanted.woff',
      weight: '500',
      style: 'italic',
    },
    {
      path: './fonts/TomatoGrotesk-SemiBoldSlanted.woff',
      weight: '600',
      style: 'italic',
    },
    {
      path: './fonts/TomatoGrotesk-SemiBoldSlanted.woff',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-tomato',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Flexy Markets - Trusted Forex Broker',
  description: 'Flexymarkets - A reliable forex broker offering seamless trading experience, competitive spreads, and advanced trading tools for global markets.',
  openGraph: {
    title: 'Flexy Markets - Trusted Forex Broker',
    description: 'Flexymarkets offers a seamless trading experience with competitive spreads and advanced trading tools for global markets.',
    url: 'https://www.flexymarkets.com/',
    type: 'website',
    images: ['https://flexymarkets.com/images/og_img.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={tomato.variable}>
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <Script id="json-ld" type="application/ld+json">
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
        {children}
        <WhatsAppWidget />

        {/* Scripts */}
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-823862486');
          `}
        </Script>

        {/* Suppress harmless iframe warnings from TradingView widgets */}
        <Script id="suppress-iframe-warnings" strategy="afterInteractive">
          {`
            if (typeof window !== 'undefined') {
              const originalError = console.error;
              console.error = function(...args) {
                // Filter out the specific iframe contentWindow error from TradingView
                if (args[0]?.toString().includes('contentWindow is not available') || 
                    args[0]?.toString().includes('Cannot listen to the event from the provided iframe')) {
                  return; // Suppress this specific error
                }
                originalError.apply(console, args);
              };
            }
          `}
        </Script>
      </body>
    </html>
  );
}
