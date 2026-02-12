
import type { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
    title: 'Deposit Bonus | Flexy Markets',
    description: 'Boost your trading capital with our exclusive deposit bonus offers. Terms and conditions apply.',
    openGraph: {
        title: 'Deposit Bonus | Flexy Markets',
        description: 'Boost your trading capital with our exclusive deposit bonus offers.',
        url: 'https://flexymarkets.com/promotions/deposit-bonus',
        siteName: 'Flexy Markets',
        locale: 'en_US',
        type: 'website',
    }
};

export default function DepositBonusPageWrapper() {
    return <ClientPage />;
}
