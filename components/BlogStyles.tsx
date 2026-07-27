'use client';

export default function BlogStyles() {
    return (
        <style jsx global>{`
            .blog-content h2 { margin-top: 2rem; margin-bottom: 1rem; font-weight: 700; color: #111; }
            .blog-content h3 { margin-top: 1.5rem; margin-bottom: 1rem; font-weight: 600; color: #333; }
            .blog-content p { 
                margin-bottom: 1.5rem; 
                text-align: justify; 
                line-height: 1.8;
                font-size: 1.1rem;
            }
            .blog-content ul, .blog-content ol { margin-bottom: 1.5rem; padding-left: 1.5rem; }
            .blog-content li { margin-bottom: 0.5rem; }
            .blog-content img { max-width: 100%; height: auto; border-radius: 1rem; margin: 1.5rem 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
            .text-emerald-800 { color: #065f46; }
            .text-emerald-600 { color: #059669; }
            .bg-emerald-50 { background-color: #ecfdf5; }
            .border-emerald-100 { border-color: #d1fae5; }
            .hover-lift:hover { transform: translateY(-2px); box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
            .blog-faq-eyebrow {
                display: inline-block;
                margin-bottom: 0.65rem;
                color: #047857;
                font-size: 0.78rem;
                font-weight: 800;
                letter-spacing: 0.14em;
                text-transform: uppercase;
            }
            .blog-faq-heading {
                color: #111827;
                font-size: clamp(1.75rem, 3vw, 2.35rem);
                font-weight: 750;
                line-height: 1.2;
            }
            .blog-faq-list {
                display: grid;
                gap: 0.9rem;
            }
            .blog-faq-item {
                overflow: hidden;
                border: 1px solid rgba(5, 150, 105, 0.18);
                border-radius: 1rem;
                background: rgba(255, 255, 255, 0.9);
                box-shadow: 0 0.35rem 1.2rem rgba(15, 23, 42, 0.05);
                transition: border-color 180ms ease, box-shadow 180ms ease;
            }
            .blog-faq-item[open] {
                border-color: rgba(5, 150, 105, 0.42);
                box-shadow: 0 0.5rem 1.5rem rgba(5, 150, 105, 0.08);
            }
            .blog-faq-summary {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 1.25rem;
                padding: 1.2rem 1.35rem;
                color: #172033;
                cursor: pointer;
                font-size: 1.05rem;
                font-weight: 700;
                line-height: 1.5;
                list-style: none;
            }
            .blog-faq-summary::-webkit-details-marker { display: none; }
            .blog-faq-summary::marker { content: ""; }
            .blog-faq-summary:focus-visible {
                outline: 3px solid rgba(16, 185, 129, 0.35);
                outline-offset: -3px;
            }
            .blog-faq-toggle {
                position: relative;
                width: 1.5rem;
                height: 1.5rem;
                flex: 0 0 1.5rem;
                border-radius: 999px;
                background: #ecfdf5;
                transition: transform 180ms ease;
            }
            .blog-faq-toggle::before,
            .blog-faq-toggle::after {
                position: absolute;
                top: 50%;
                left: 50%;
                width: 0.72rem;
                height: 2px;
                border-radius: 999px;
                background: #047857;
                content: "";
                transform: translate(-50%, -50%);
            }
            .blog-faq-toggle::after {
                transform: translate(-50%, -50%) rotate(90deg);
            }
            .blog-faq-item[open] .blog-faq-toggle {
                transform: rotate(45deg);
            }
            .blog-faq-answer {
                padding: 1.1rem 1.35rem 1.35rem;
                border-top: 1px solid rgba(5, 150, 105, 0.13);
                color: #374151;
            }
            .blog-faq-answer p {
                font-size: 1rem;
                line-height: 1.8;
                white-space: pre-line;
            }
            .blog-faq-answer > :first-child { margin-top: 0; }
            .blog-faq-answer > :last-child { margin-bottom: 0; }
            .blog-faq-answer a {
                color: #047857;
                text-decoration-thickness: 1px;
                text-underline-offset: 0.15em;
            }
            .blog-faq-answer ul,
            .blog-faq-answer ol {
                margin-bottom: 1rem;
                padding-left: 1.4rem;
            }
            @media (max-width: 575.98px) {
                .blog-faq-summary {
                    padding: 1rem;
                    font-size: 1rem;
                }
                .blog-faq-answer {
                    padding: 1rem;
                }
            }
        `}</style>
    );
}
