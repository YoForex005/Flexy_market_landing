import React from 'react';

type JsonLdProps = {
    data: Record<string, unknown> | Record<string, unknown>[];
};

const JsonLd = ({ data }: JsonLdProps) => {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
            key="json-ld"
        />
    );
};

export default JsonLd;
