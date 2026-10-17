"use client";

import dynamic from 'next/dynamic';

const TelegramWidget = dynamic(() => import('./WhatsAppWidget'), {
    ssr: false,
});

export default function DynamicWhatsApp() {
    return <TelegramWidget />;
}
