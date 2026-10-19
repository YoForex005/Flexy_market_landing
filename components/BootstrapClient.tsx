"use client";

import { useEffect } from 'react';

export default function BootstrapClient() {
    useEffect(() => {
        let active = true;

        // The mobile offcanvas is the only Bootstrap JavaScript component in use.
        // Do not download it until somebody actually opens the mobile menu.
        const handleEarlyToggle = (event: MouseEvent) => {
            if (!(event.target instanceof Element)) return;
            const trigger = event.target.closest<HTMLElement>('[data-bs-toggle="offcanvas"]');
            const selector = trigger?.getAttribute('data-bs-target');
            if (!trigger || !selector) return;

            event.preventDefault();
            event.stopPropagation();
            // @ts-expect-error Bootstrap's individual JavaScript plugins do not ship type declarations.
            void import('bootstrap/js/dist/offcanvas').then(({ default: Offcanvas }) => {
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
