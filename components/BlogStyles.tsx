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
        `}</style>
    );
}
