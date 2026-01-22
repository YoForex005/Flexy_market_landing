import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import 'aos/dist/aos.css';

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
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
      </body>
    </html>
  );
}
