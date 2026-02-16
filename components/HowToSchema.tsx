import React from 'react';
import JsonLd from './JsonLd';

interface HowToStep {
    name: string;
    text: string;
    url?: string;
    image?: string;
}

interface HowToSchemaProps {
    name: string;
    description: string;
    steps: HowToStep[];
    totalTime?: string; // ISO 8601 duration format, e.g., "PT10M"
    estimatedCost?: {
        currency: string;
        value: string;
    };
    tools?: string[];
}

/**
 * HowToSchema component for step-by-step guides.
 * Helps search engines understand the steps required to complete a task.
 */
const HowToSchema: React.FC<HowToSchemaProps> = ({
    name,
    description,
    steps,
    totalTime,
    estimatedCost,
    tools
}) => {
    const data: any = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": name,
        "description": description,
        "step": steps.map((step, index) => ({
            "@type": "HowToStep",
            "url": step.url,
            "name": step.name,
            "itemListElement": [{
                "@type": "HowToDirection",
                "text": step.text
            }],
            "image": step.image
        }))
    };

    if (totalTime) {
        data.totalTime = totalTime;
    }

    if (estimatedCost) {
        data.estimatedCost = {
            "@type": "MonetaryAmount",
            "currency": estimatedCost.currency,
            "value": estimatedCost.value
        };
    }

    if (tools && tools.length > 0) {
        data.tool = tools.map(tool => ({
            "@type": "HowToTool",
            "name": tool
        }));
    }

    return <JsonLd data={data} />;
};

export default HowToSchema;
