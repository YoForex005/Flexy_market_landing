
import type { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
    title: 'Sign Up | Flexy Markets',
    description: 'Create a Flexy Markets trading account today. Start your journey with regulated trading, tight spreads, and fast execution.',
    openGraph: {
        title: 'Sign Up | Flexy Markets',
        description: 'Create a Flexy Markets trading account today.',
        url: 'https://flexymarkets.com/accounts/signUp',
        siteName: 'Flexy Markets',
        locale: 'en_US',
        type: 'website',
    }
};

export default function SignUpPageWrapper() {
    return <ClientPage />;
}
