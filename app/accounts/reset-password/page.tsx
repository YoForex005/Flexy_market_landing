
import type { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
    title: 'Reset Password | Flexy Markets',
    description: 'Securely reset your password for your Flexy Markets trading account.',
    openGraph: {
        title: 'Reset Password | Flexy Markets',
        description: 'Securely reset your password for your Flexy Markets trading account.',
        url: 'https://flexymarkets.com/accounts/reset-password',
        siteName: 'Flexy Markets',
        locale: 'en_US',
        type: 'website',
    }
};

export default function ResetPasswordWrapper() {
    return <ClientPage />;
}
