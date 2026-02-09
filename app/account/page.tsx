import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import type { Metadata } from 'next';
import AccountContent from './content';

export const metadata: Metadata = {
    title: 'Trading Account Types | Standard, VIP & ECN | Flexy Markets',
    description: 'Compare Flexy Markets trading accounts. Choose from Standard, ECN, and VIP accounts with competitive spreads, leverage, and commission structures.',
};

export default function Account() {
    return <AccountContent />;
}
