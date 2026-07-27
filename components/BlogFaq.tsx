import JsonLd from '@/components/JsonLd';
import {
    buildFaqPageSchema,
    type BlogFaqItem,
} from '@/lib/blogFaq';

type BlogFaqProps = {
    items: readonly BlogFaqItem[];
};

const containsHtml = (value: string) => /<\/?[a-z][^>]*>/i.test(value);

export default function BlogFaq({ items }: BlogFaqProps) {
    if (items.length === 0) return null;

    return (
        <>
            <JsonLd data={buildFaqPageSchema(items)} />

            <section
                id="faq"
                className="blog-faq mt-5 pt-5 border-top"
                aria-labelledby="blog-faq-heading"
                data-blog-faq="true"
            >
                <div className="mb-4">
                    <span className="blog-faq-eyebrow">FAQ</span>
                    <h2 id="blog-faq-heading" className="blog-faq-heading mb-0">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="blog-faq-list">
                    {items.map((item, index) => (
                        <details
                            className="blog-faq-item"
                            data-blog-faq-item="true"
                            key={`${index}-${item.question}`}
                            open={index === 0}
                        >
                            <summary className="blog-faq-summary">
                                <span>{item.question}</span>
                                <span className="blog-faq-toggle" aria-hidden="true" />
                            </summary>
                            {containsHtml(item.answer) ? (
                                <div
                                    className="blog-faq-answer"
                                    // Super Admin sanitizes allowed FAQ answer fragments before injection.
                                    dangerouslySetInnerHTML={{ __html: item.answer }}
                                />
                            ) : (
                                <div className="blog-faq-answer">
                                    <p>{item.answer}</p>
                                </div>
                            )}
                        </details>
                    ))}
                </div>
            </section>
        </>
    );
}
