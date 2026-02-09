import type { Metadata } from 'next';
import ExecutionPolicyContent from '@/components/ExecutionPolicyContent';

export const metadata: Metadata = {
    title: 'Order Execution Policy | Flexy Markets',
    description: 'Understand how Flexy Markets executes your orders. Transparency and best execution practices for your peace of mind.',
};

export default function ExecutionPolicy() {
    return <ExecutionPolicyContent />;
}
