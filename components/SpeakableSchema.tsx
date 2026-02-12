import React from 'react';
import JsonLd from './JsonLd';

interface SpeakableSchemaProps {
    url?: string;
    headline?: string;
    cssSelectors: string[];
}

const SpeakableSchema: React.FC<SpeakableSchemaProps> = ({ url, headline, cssSelectors }) => {
    const data = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        ...(url && { url }),
        ...(headline && { name: headline }),
        speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: cssSelectors
        }
    };

    return <JsonLd data={data} />;
};

export default SpeakableSchema;
