import type { Metadata } from 'next';
import LearningCentreContent from '@/components/LearningCentreContent';

export const metadata: Metadata = {
    title: 'Forex Learning Centre | Guides & Tutorials | Flexy Markets',
    description: 'Master the markets with our comprehensive forex learning center. Access free guides, tutorials, and articles for all skill levels.',
};

export default function LearningCentrePage() {
    return <LearningCentreContent />;
}
