"use client";

import Image from 'next/image';
import Link from 'next/link';
import BlogViewDisplay from '@/components/BlogViewDisplay';
import { BLOG_AUTHOR } from '@/lib/siteIdentity';

interface Post {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    image_url: string;
    author?: string | null;
    created_at?: string | null;
    published_at?: string | null;
    updated_at?: string | null;
    tags: string[];
    views: number;
}

export default function BlogCard({ post }: { post: Post }) {
    // Use the first tag or default to 'Market Insights' if no tags
    const displayTag = post.tags && post.tags.length > 0 ? post.tags[0] : 'Market Insights';
    const authorName = post.author || BLOG_AUTHOR;
    const publishedLabel = post.published_at || post.created_at || null;
    const updatedLabel = post.updated_at || null;

    return (

        <Link href={`/blog/${post.slug}`} className="text-decoration-none h-100 d-block">
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

                </div>

                {/* Card Content */}
                <div className="card-body p-4 d-flex flex-column">
                    <div className="d-flex align-items-start mb-3 text-muted small justify-content-between gap-2">
                        <div className="d-flex flex-column gap-1">
                            <div className="d-flex align-items-center">
                                <i className="fas fa-user-circle me-2"></i>
                                <span className="fw-medium text-dark">{authorName}</span>
                            </div>
                            {publishedLabel && (
                                <div className="d-flex align-items-center">
                                    <i className="far fa-calendar-alt me-2"></i>
                                    <span>Published {publishedLabel}</span>
                                </div>
                            )}
                            {updatedLabel && (
                                <div className="d-flex align-items-center">
                                    <i className="fas fa-sync-alt me-2"></i>
                                    <span>Updated {updatedLabel}</span>
                                </div>
                            )}
                        </div>
                        <BlogViewDisplay slug={post.slug} initialViews={post.views} />
                    </div>

                    <h3 className="h5 fw-bold mb-3 text-dark">{post.title}</h3>

                    <p className="text-secondary small mb-4 flex-grow-1" style={{ lineHeight: '1.6' }}>
                        {post.excerpt}
                    </p>

                    <button className="btn btn-emerald rounded-pill fw-bold w-100 mt-auto transition-colors">
                        Read Article
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
