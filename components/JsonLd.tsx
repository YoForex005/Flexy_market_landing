import React from 'react';

type JsonLdProps = {
    data: Record<string, unknown> | Record<string, unknown>[];
};

const JsonLd = ({ data }: JsonLdProps) => {
    const serializedData = JSON.stringify(data)
        .replace(/</g, '\\u003c')
        .replace(/\u2028/g, '\\u2028')
        .replace(/\u2029/g, '\\u2029');

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: serializedData }}
            key="json-ld"
        />
    );
};

export default JsonLd;
