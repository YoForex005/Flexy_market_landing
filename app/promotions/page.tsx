
import type { Metadata } from 'next';
import PromotionsContent from './content';

export const metadata: Metadata = {
    title: 'Trading Promotions & Bonuses | Flexy Markets',
    description: 'Boost your trading potential with Flexy Markets promotions. Claim No Deposit Bonuses and Deposit Bonuses to maximize your trading capital.',
};

export default function PromotionsPage() {
    return <PromotionsContent />;
}
