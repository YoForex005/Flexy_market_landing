import type { Metadata } from 'next';
import LiveEducationContent from '@/components/LiveEducationContent';

export const metadata: Metadata = {
    title: 'Live Forex Education | Webinars & Seminars | Flexy Markets',
    description: 'Join our live forex webinars and seminars. Learn from expert traders, ask questions in real-time, and improve your trading skills.',
};

export default function LiveEducationPage() {
    return <LiveEducationContent />;
}
