
import type { Metadata } from 'next';
import NewsAnalysisContent from './content';

export const metadata: Metadata = {
    title: 'Market News & Analysis | Daily Forex Updates | Flexy Markets',
    description: 'Get the latest expert market analysis and forex news. Make informed trading decisions with our daily updates and technical analysis.',
};

export default function NewsAnalysis() {
    return <NewsAnalysisContent />;
}
