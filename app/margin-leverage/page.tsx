import type { Metadata } from 'next';
import MarginLeverageContent from '@/components/MarginLeverageContent';

export const metadata: Metadata = {
    title: 'Forex Margin and Leverage | Trading Conditions | Flexy Markets',
    description: 'Learn about margin requirements and leverage options at Flexy Markets. Maximize your trading potential with our flexible leverage conditions.',
};

export default function MarginLeveragePage() {
    return <MarginLeverageContent />;
}
