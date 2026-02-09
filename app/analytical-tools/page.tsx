
import type { Metadata } from 'next';
import AnalyticalToolsContent from './content';

export const metadata: Metadata = {
    title: 'Analytical Tools | Forex Calculators & Analysis | Flexy Markets',
    description: 'Access professional forex analytical tools including currency converters, margin calculators, and profit calculators to enhance your trading strategy.',
};

export default function AnalyticalTools() {
    return <AnalyticalToolsContent />;
}
