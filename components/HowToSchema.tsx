import React from 'react';
import JsonLd from './JsonLd';

interface Step {
    name: string;
    text: string;
    image?: string;
    url?: string;
}

interface Supply {
    name: string;
}

interface Tool {
    name: string;
}

interface HowToSchemaProps {
    name: string;
    description: string;
    image?: string;
    totalTime?: string; // ISO 8601 format (e.g., PT15M)
    estimatedCost?: {
        currency: string;
        value: string | number;
    };
    steps: Step[];
    supplies?: Supply[];
    tools?: Tool[];
}

const HowToSchema: React.FC<HowToSchemaProps> = ({
    name,
    description,
    image,
    totalTime,
    estimatedCost,
    steps,
    supplies,
    tools
}) => {
    const data = {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name,
        description,
        ...(image && { image: { '@type': 'ImageObject', url: image } }),
        ...(totalTime && { totalTime }),
        ...(estimatedCost && {
            estimatedCost: {
                '@type': 'MonetaryAmount',
                currency: estimatedCost.currency,
                value: estimatedCost.value
            }
        }),
        ...(supplies && {
            supply: supplies.map(s => ({
                '@type': 'HowToSupply',
                name: s.name
            }))
        }),
        ...(tools && {
            tool: tools.map(t => ({
                '@type': 'HowToTool',
                name: t.name
            }))
        }),
        step: steps.map((step, index) => ({
            '@type': 'HowToStep',
            url: step.url,
            name: step.name,
            text: step.text,
            image: step.image ? { '@type': 'ImageObject', url: step.image } : undefined,
            position: index + 1
        }))
    };

    return <JsonLd data={data} />;
};

export default HowToSchema;
