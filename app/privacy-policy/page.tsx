
import type { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
    title: 'Privacy Policy | Flexy Markets',
    description: 'Read the Flexy Markets Privacy Policy. Learn how we protect your personal information and ensure data security.',
    openGraph: {
        title: 'Privacy Policy | Flexy Markets',
        description: 'Read the Flexy Markets Privacy Policy.',
        url: 'https://flexymarkets.com/privacy-policy',
        siteName: 'Flexy Markets',
        locale: 'en_US',
        type: 'website',
    }
};

export default function PrivacyPolicyWrapper() {
    return <ClientPage />;
}
