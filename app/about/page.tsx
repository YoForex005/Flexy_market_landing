
import type { Metadata } from 'next';
import AboutContent from './content';

export const metadata: Metadata = {
    title: 'About Flexy Markets | Regulated Forex Broker | Our Story',
    description: 'Learn about Flexy Markets, a globally recognized regulated broker. Discover our mission to democratize trading with cutting-edge technology and expert support.',
};

export default function AboutPage() {
    return <AboutContent />;
}
