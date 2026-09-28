"use client";

import { useEffect } from 'react';

export default function BootstrapClient() {
    useEffect(() => {
        // The mobile offcanvas is the only Bootstrap JavaScript component in use.
        // @ts-expect-error Bootstrap's individual JavaScript plugins do not ship type declarations.
        const offcanvasModule = import('bootstrap/js/dist/offcanvas');
        let ready = false;
        let active = true;

        void offcanvasModule.then(() => { ready = true; });

        // Preserve the first click if a visitor opens the menu while its chunk loads.
        const handleEarlyToggle = (event: MouseEvent) => {
            if (ready || !(event.target instanceof Element)) return;
            const trigger = event.target.closest<HTMLElement>('[data-bs-toggle="offcanvas"]');
            const selector = trigger?.getAttribute('data-bs-target');
            if (!trigger || !selector) return;

            event.preventDefault();
            event.stopPropagation();
            void offcanvasModule.then(({ default: Offcanvas }) => {
                if (!active || !trigger.isConnected) return;
                const panel = document.querySelector(selector);
                if (!panel) return;
                panel.addEventListener('hidden.bs.offcanvas', () => trigger.focus(), { once: true });
                Offcanvas.getOrCreateInstance(panel).show(trigger);
            });
        };

        document.addEventListener('click', handleEarlyToggle, true);
        return () => {
            active = false;
            document.removeEventListener('click', handleEarlyToggle, true);
        };
    }, []);

    return null;
}
