import React from 'react';
import JsonLd from './JsonLd';

interface SpeakableSchemaProps {
    url: string;
    headline: string;
    cssSelectors: string[];
}

/**
 * SpeakableSchema component for voice search optimization (Alexa, Siri, Google Assistant).
 * It identifies sections of a page that are particularly appropriate for text-to-speech (TTS) conversion.
 */
const SpeakableSchema: React.FC<SpeakableSchemaProps> = ({ url, headline, cssSelectors }) => {
    const data = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": headline,
        "url": url,
        "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": cssSelectors
        }
    };

    return <JsonLd data={data} />;
};

export default SpeakableSchema;
