
import type { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
    title: 'Flexy150 Bonus | Flexy Markets',
    description: 'Explore the Flexy150 no-deposit trading bonus. Review eligibility, trading requirements, and withdrawal terms before participating.',
    openGraph: {
        title: 'Flexy150 Bonus | Flexy Markets',
        description: 'Claim your $150 no-deposit trading bonus.',
        url: 'https://flexymarkets.com/flexy-150',
        siteName: 'Flexy Markets',
        locale: 'en_US',
        type: 'website',
    }
};

export default function Flexy150PageWrapper() {
    return <ClientPage />;
}
