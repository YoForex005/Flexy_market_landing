
import type { Metadata } from 'next';
import ContactContent from './content';

export const metadata: Metadata = {
    title: 'Contact Us | 24/7 Customer Support | Flexy Markets',
    description: 'Contact Flexy Markets customer support. Available 24/7 via email, phone, and live chat to assist you with your trading needs.',
};

export default function ContactPage() {
    return <ContactContent />;
}
