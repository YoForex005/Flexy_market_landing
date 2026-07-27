export type BlogFaqItem = {
    question: string;
    answer: string;
};

type JsonObject = Record<string, unknown>;

const isJsonObject = (value: unknown): value is JsonObject => (
    typeof value === 'object'
    && value !== null
    && !Array.isArray(value)
);

const nonEmptyString = (value: unknown) => (
    typeof value === 'string' ? value.trim() : ''
);

const parseStoredFaq = (value: unknown): unknown => {
    if (typeof value !== 'string') return value;

    const trimmed = value.trim();
    if (!trimmed) return null;

    try {
        return JSON.parse(trimmed);
    } catch {
        return null;
    }
};

const faqCandidates = (value: unknown): unknown[] => {
    if (Array.isArray(value)) return value;
    if (!isJsonObject(value)) return [];

    for (const key of ['faqs', 'faq', 'items', 'mainEntity', 'faq_json']) {
        if (Array.isArray(value[key])) return value[key];
    }

    if (isJsonObject(value.schema) && Array.isArray(value.schema.faq)) {
        return value.schema.faq;
    }

    return value.question || value.q || value.name ? [value] : [];
};

export const normalizeBlogFaq = (storedFaq: unknown): BlogFaqItem[] => {
    const parsedFaq = parseStoredFaq(storedFaq);

    return faqCandidates(parsedFaq).flatMap((candidate) => {
        if (!isJsonObject(candidate)) return [];

        const question = nonEmptyString(candidate.question)
            || nonEmptyString(candidate.q)
            || nonEmptyString(candidate.name);
        let answer = nonEmptyString(candidate.answer)
            || nonEmptyString(candidate.answer_html)
            || nonEmptyString(candidate.a)
            || nonEmptyString(candidate.text);

        if (!answer && isJsonObject(candidate.acceptedAnswer)) {
            answer = nonEmptyString(candidate.acceptedAnswer.text);
        }

        return question && answer ? [{ question, answer }] : [];
    });
};

export const buildFaqPageSchema = (
    faqItems: readonly BlogFaqItem[]
): Record<string, unknown> => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(({ question, answer }) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: answer,
        },
    })),
});
