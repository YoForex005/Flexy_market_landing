"use client";

import { useEffect } from 'react';

const GOOGLE_TAG_ID = 'G-Q4GCWX9KQP';

export default function Analytics() {
    useEffect(() => {
        let idleId: number | undefined;
        let fallbackId: number | undefined;

        const loadGoogleTag = () => {
            if (document.getElementById('google-tag-loader')) return;

            const script = document.createElement('script');
            script.id = 'google-tag-loader';
            script.async = true;
            script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}`;
            document.head.appendChild(script);
        };

        // Let primary resources finish, then use idle time without waiting indefinitely.
        const scheduleGoogleTag = () => {
            if (typeof window.requestIdleCallback === 'function') {
                idleId = window.requestIdleCallback(loadGoogleTag, { timeout: 2000 });
            } else {
                fallbackId = window.setTimeout(loadGoogleTag, 0);
            }
        };

        if (document.readyState === 'complete') {
            scheduleGoogleTag();
        } else {
            window.addEventListener('load', scheduleGoogleTag, { once: true });
        }

        return () => {
            window.removeEventListener('load', scheduleGoogleTag);
            if (idleId !== undefined) window.cancelIdleCallback(idleId);
            window.clearTimeout(fallbackId);
        };
    }, []);

    return null;
}
