import type { Metadata } from 'next';
import LegalDocumentsContent from '@/components/LegalDocumentsContent';

export const metadata: Metadata = {
    title: 'Legal Documents | Terms & Conditions | Flexy Markets',
    description: 'Review Flexy Markets legal documents including Terms and Conditions, Privacy Policy, and Risk Disclosure.',
};

export default function LegalDocumentsPage() {
    return <LegalDocumentsContent />;
}
