"use client";

import { useEffect } from 'react';

const GOOGLE_TAG_ID = 'G-Q4GCWX9KQP';

export default function Analytics() {
    useEffect(() => {
        let loaded = false;
        const analyticsWindow = window as typeof window & {
            dataLayer?: unknown[][];
            gtag?: (...args: unknown[]) => void;
        };

        const loadGoogleTag = () => {
            if (loaded || document.getElementById('google-tag-loader')) return;
            loaded = true;

            analyticsWindow.dataLayer = analyticsWindow.dataLayer || [];
            analyticsWindow.gtag = analyticsWindow.gtag || ((...args: unknown[]) => analyticsWindow.dataLayer?.push(args));
            analyticsWindow.gtag('js', new Date());
            analyticsWindow.gtag('config', GOOGLE_TAG_ID, { page_location: window.location.href });
            analyticsWindow.gtag('config', 'AW-823862486');

            const script = document.createElement('script');
            script.id = 'google-tag-loader';
            script.async = true;
            script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}`;
            document.head.appendChild(script);
        };

        // Analytics must never compete with the initial render. A real interaction
        // loads it promptly; the fallback preserves measurement for reading visits.
        const scheduleGoogleTag = () => window.setTimeout(loadGoogleTag, 0);
        const interactionEvents: Array<keyof WindowEventMap> = ['pointerdown', 'keydown', 'touchstart'];
        interactionEvents.forEach((event) => window.addEventListener(event, scheduleGoogleTag, { once: true, passive: true }));
        const fallbackId = window.setTimeout(loadGoogleTag, 15_000);

        return () => {
            interactionEvents.forEach((event) => window.removeEventListener(event, scheduleGoogleTag));
            window.clearTimeout(fallbackId);
        };
    }, []);

    return null;
}
