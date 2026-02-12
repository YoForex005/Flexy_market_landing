
import type { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
    title: 'Sign In | Flexy Markets',
    description: 'Access your Flexy Markets trading account securely. Log in to manage your portfolio and trade.',
    openGraph: {
        title: 'Sign In | Flexy Markets',
        description: 'Access your Flexy Markets trading account securely.',
        url: 'https://flexymarkets.com/accounts/signIn',
        siteName: 'Flexy Markets',
        locale: 'en_US',
        type: 'website',
    }
};

export default function SignInPageWrapper() {
    return <ClientPage />;
}
