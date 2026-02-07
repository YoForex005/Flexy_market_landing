"use client";

import Image from 'next/image';
import Link from 'next/link';

interface Post {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    image_url: string;
    author: string;
    created_at: string;
    tags: string[];
    views: number;
}

export default function BlogCard({ post }: { post: Post }) {
    // Use the first tag or default to 'Market Insights' if no tags
    const displayTag = post.tags && post.tags.length > 0 ? post.tags[0] : 'Market Insights';

    return (

        <Link href={`/blog/${post.slug || post.id}`} className="text-decoration-none h-100 d-block">
            <div className="card h-100 border-0 rounded-4 overflow-hidden shadow-lg hover-lift group"
                style={{
                    background: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease'
                }}>

                {/* Card Image */}
                <div className="position-relative overflow-hidden" style={{ height: "200px" }}>
                    <Image
                        src={post.image_url}
                        alt={post.title}
                        fill
                        className="object-fit-cover transition-transform duration-500 group-hover:scale-110"
                        style={{ transition: 'transform 0.5s ease', objectFit: 'cover' }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        unoptimized // Bypass Next.js optimization server to prevent timeouts on R2 images
                    // onError handled by Next.js automatically or needs separate state, strictly Next/Image doesn't have onError like img. 
                    // For simplicity in this env, we assume valid URLs or fallback logic in parent.
                    />
                    <div className="position-absolute top-0 end-0 m-3 px-3 py-1 rounded-pill bg-white shadow-sm fw-bold small text-emerald-800" style={{ zIndex: 1 }}>
                        {displayTag}
                    </div>
                </div>

                {/* Card Content */}
                <div className="card-body p-4 d-flex flex-column">
                    <div className="d-flex align-items-center mb-3 text-muted small justify-content-between">
                        <div className="d-flex align-items-center">
                            <i className="fas fa-user-circle me-2"></i> {post.author}
                            <span className="mx-2">•</span>
                            <i className="far fa-calendar-alt me-2"></i> {post.created_at}
                        </div>
                        {post.views > 0 && (
                            <div className="d-flex align-items-center" title={`${post.views} views`}>
                                <i className="far fa-eye me-1"></i> {post.views}
                            </div>
                        )}
                    </div>

                    <h3 className="h5 fw-bold mb-3 text-dark">{post.title}</h3>

                    <p className="text-secondary small mb-4 flex-grow-1" style={{ lineHeight: '1.6' }}>
                        {post.excerpt}
                    </p>

                    <button className="btn btn-emerald rounded-pill fw-bold w-100 mt-auto transition-colors">
                        Read Article <i className="fas fa-arrow-right ms-2"></i>
                    </button>
                </div>

                <style jsx>{`
                .text-emerald-800 { color: #065f46; }
                .hover-lift:hover { transform: translateY(-5px); box-shadow: 0 15px 30px rgba(0,0,0,0.1) !important; }
                .group:hover img { transform: scale(1.05); }
                
                .btn-emerald {
                    background-color: #10b981;
                    color: white;
                    border: none;
                    transition: all 0.3s ease;
                }
                .btn-emerald:hover {
                    background-color: #059669;
                    color: white;
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(16, 185, 129, 0.3);
                }
            `}</style>
            </div>
        </Link>
    );
}
