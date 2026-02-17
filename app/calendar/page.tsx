
import type { Metadata } from 'next';
import EconomicCalendarContent from './content';

export const metadata: Metadata = {
    title: 'Economic Calendar | Live Forex News & Events | Flexy Markets',
    description: 'Stay ahead of the markets with our real-time Economic Calendar. Track key global economic events, indicators, and news that impact currency prices.',
};

export default function EconomicCalendarPage() {
    return <EconomicCalendarContent />;
}
