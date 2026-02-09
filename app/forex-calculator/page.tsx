
import type { Metadata } from 'next';
import ForexCalculatorContent from './content';

export const metadata: Metadata = {
    title: 'Forex Calculators | Margin, Pip, Profit | Flexy Markets',
    description: 'Use our free forex calculators to manage your risk and plan your trades. Calculate margin, pip value, and potential profit/loss instantly.',
};

export default function ForexCalculatorPage() {
    return <ForexCalculatorContent />;
}
