
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import pool from '@/lib/db';
import AnimatedBackground from '@/components/AnimatedBackground';
import Link from 'next/link';
import BlogStyles from '@/components/BlogStyles';
import BlogImage from '@/components/BlogImage';

// Helper to format date
const formatDate = (dateString: Date) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
};

// Helper to sanitize/fix image paths
const fixImagePath = (path: string) => {
    if (!path) return '/images/candlestick-chart-3d.webp';
    if (path.startsWith('/') || path.startsWith('http')) return path;
    return `/images/${path}`;
};

async function getPost(slugOrId: string) {
    try {
        // Try finding by slug first (if slug is not empty)


        // Since the prompt shows empty slugs, we might need to fallback to ID if we pass ID in URL.
        // For now, let's assume we might pass ID if slug is empty.
        // BUT, nice URLs usually use slugs.

        // Let's check if the input looks like an ID (numeric)
        if (/^\d+$/.test(slugOrId)) {
            const res = await pool.query('SELECT * FROM blogs WHERE id = $1', [slugOrId]);
            return res.rows[0];
        }

        const res = await pool.query('SELECT * FROM blogs WHERE (slug = $1 OR seo_slug = $1)', [slugOrId]);

        return res.rows[0];

    } catch (error) {
        console.error('Error fetching post:', error);
        return null;
    }
}

import type { Metadata } from 'next';

// ... (previous imports)

// ... (getPost function remains the same)

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        return {
            title: 'Post Not Found | Flexy Markets',
        };
    }

    return {
        title: `${post.title} | Flexy Markets Blog`,
        description: post.excerpt || `Read ${post.title} on Flexy Markets Blog.`,
        openGraph: {
            title: post.title,
            description: post.excerpt || `Read ${post.title} on Flexy Markets Blog.`,
            images: post.featured_image ? [fixImagePath(post.featured_image)] : [],
        }
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        return (
            <main className="min-h-screen flex flex-col items-center justify-center">
                <NavBar />
                <div className="container text-center pt-5 mt-5">
                    <h1 className="display-4 fw-bold mb-4">Post Not Found</h1>
                    <p className="lead mb-4">The article you are looking for does not exist or has been moved.</p>
                    <Link href="/blog" className="btn btn-primary rounded-pill px-4">
                        Back to Blog
                    </Link>
                </div>
                <Footer />
            </main>
        );
    }

    // Process content to fix inline images if necessary (assuming they might be relative)
    // For now, we trust the HTML content from the DB but could add regex replacement here if needed.
    // Process content:
    // 1. Remove the first H1 tag if it appears at the very beginning (assumed to be the duplicate title)
    // 2. Downgrade any other H1 tags to H2 to maintain hierarchy
    let contentHtml = post.content || '';

    // Remove leading H1 (and surrounding whitespace)
    contentHtml = contentHtml.replace(/^\s*<h1[^>]*>.*?<\/h1>\s*/i, '');

    // Replace any remaining <h1> with <h2> (in case they are subheadings)
    contentHtml = contentHtml.replace(/<h1[^>]*>(.*?)<\/h1>/gi, '<h2>$1</h2>');

    const tags = post.tags ? post.tags.split(',').map((t: string) => t.trim()) : [];

    return (
        <main className="position-relative bg-white" style={{ minHeight: "100vh" }}>
            <div className="position-fixed top-0 start-0 w-100 h-100" style={{ zIndex: 0 }}>
                <AnimatedBackground variant="aurora" />
            </div>

            <NavBar />

            <article className="position-relative z-1 mt-5 pb-5" style={{ paddingTop: '150px' }}>
                {/* Hero / Header */}
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            {tags.length > 0 && (
                                <div className="d-inline-block px-3 py-1 mb-4 rounded-pill bg-emerald-50 text-emerald-800 fw-bold small text-uppercase spacing-wide border border-emerald-100">
                                    {tags[0]}
                                </div>
                            )}

                            <h1 className="display-4 fw-bold mb-4 text-dark lh-tight">
                                {post.title}
                            </h1>

                            <div className="d-flex align-items-center justify-content-center text-secondary mb-5">
                                <div className="d-flex align-items-center me-4">
                                    <i className="fas fa-user-circle me-2 fs-5"></i>
                                    <span className="fw-medium">{post.author || 'Flexy Team'}</span>
                                </div>
                                <div className="d-flex align-items-center me-4">
                                    <i className="far fa-calendar-alt me-2 fs-5"></i>
                                    <span>{formatDate(post.created_at)}</span>
                                </div>
                                {post.views > 0 && (
                                    <div className="d-flex align-items-center">
                                        <i className="far fa-eye me-2 fs-5"></i>
                                        <span>{post.views} views</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Featured Image */}
                    {post.featured_image && (
                        <div className="row justify-content-center mb-5">
                            <div className="col-lg-10">
                                <div className="rounded-5 overflow-hidden shadow-lg position-relative" style={{ minHeight: '400px' }}>
                                    <BlogImage
                                        src={fixImagePath(post.featured_image)}
                                        alt={post.title}
                                        className="w-100 h-100 object-fit-cover position-absolute top-0 start-0"
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div
                                className="blog-content fs-5 text-dark lh-lg"
                                dangerouslySetInnerHTML={{ __html: contentHtml }}
                            />

                            {/* Tags List */}
                            {tags.length > 0 && (
                                <div className="mt-5 pt-4 border-top">
                                    <div className="d-flex flex-wrap gap-2 align-items-center">
                                        <span className="fw-bold me-2"><i className="fas fa-tags me-2 text-emerald-600"></i>Tags:</span>
                                        {tags.map((tag: string, index: number) => (
                                            <span key={index} className="badge bg-light text-dark border fw-normal px-3 py-2 rounded-pill">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Back Button */}
                            <div className="mt-5 text-center">
                                <Link href="/blog" className="btn btn-outline-dark rounded-pill px-5 py-2 fw-bold hover-lift">
                                    <i className="fas fa-arrow-left me-2"></i> Back to All Articles
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <div className="position-relative z-1">
                <Footer />
            </div>

            <BlogStyles />
        </main>
    );
}
