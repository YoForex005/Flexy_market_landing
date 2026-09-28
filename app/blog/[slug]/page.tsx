
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import pool from '@/lib/db';
import AnimatedBackground from '@/components/AnimatedBackground';
import Link from 'next/link';
import BlogStyles from '@/components/BlogStyles';
import BlogImage from '@/components/BlogImage';
import BlogViewCounter from '@/components/BlogViewCounter';
import BlogAuthorInfo from '@/components/BlogAuthorInfo';
import BlogFaq from '@/components/BlogFaq';
import JsonLd from '@/components/JsonLd';
import { normalizeBlogFaq } from '@/lib/blogFaq';
import { BLOG_AUTHOR, SITE_PUBLISHER } from '@/lib/siteIdentity';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { cache } from 'react';

const BASE_URL = 'https://flexymarkets.com';

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

// Share the lookup between metadata and content for this request. Database errors
// must remain server errors so an outage cannot mark published articles as missing.
const getPost = cache(async (slug: string) => {
    const res = await pool.query(
        `SELECT b.*
         FROM blogs b
         INNER JOIN seo_meta sm ON b.id = sm.post_id
         WHERE sm.seo_slug = $1
           AND b.status = 'published'`,
        [slug]
    );

    return res.rows[0];
});

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        notFound();
    }

    const canonicalUrl = `${BASE_URL}/blog/${encodeURIComponent(slug)}`;
    const authorName = post.author?.trim() || BLOG_AUTHOR;
    const publishedDate = post.published_at || post.created_at;
    const updatedDate = post.updated_at || publishedDate;

    return {
        title: `${post.title} | Flexy Markets Blog`,
        description: post.excerpt || `Read ${post.title} on Flexy Markets Blog.`,
        authors: [{ name: authorName }],
        publisher: SITE_PUBLISHER,
        alternates: { canonical: canonicalUrl },
        openGraph: {
            title: post.title,
            description: post.excerpt || `Read ${post.title} on Flexy Markets Blog.`,
            images: post.featured_image ? [fixImagePath(post.featured_image)] : [],
            type: 'article',
            url: canonicalUrl,
            publishedTime: publishedDate ? new Date(publishedDate).toISOString() : undefined,
            modifiedTime: updatedDate ? new Date(updatedDate).toISOString() : undefined,
            authors: [authorName],
        },
        twitter: {
            card: 'summary_large_image',
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
        notFound();
    }

    // Process content to fix inline images if necessary (assuming they might be relative)
    // For now, we trust the HTML content from the DB but could add regex replacement here if needed.
    // Process content:
    // 1. Remove the first H1 tag if it appears at the very beginning (assumed to be the duplicate title)
    // 2. Downgrade any other H1 tags to H2 to maintain hierarchy
    let contentHtml = post.content || '';

    // Remove any H1 tags (and their content if it's the title) to avoid duplicates
    // Strategy:
    // 1. Try to find H1 at the start and remove it.
    // 2. Replace any other H1 with H2.
    contentHtml = contentHtml.replace(/<h1[^>]*>.*?<\/h1>/i, ''); // Remove first H1
    contentHtml = contentHtml.replace(/<h1[^>]*>(.*?)<\/h1>/gi, '<h2>$1</h2>'); // Replace others with H2

    const tags = post.tags ? post.tags.split(',').map((t: string) => t.trim()) : [];
    const faqItems = normalizeBlogFaq(post.faq_json);
    const authorName = post.author?.trim() || BLOG_AUTHOR;
    const publishedDate = post.published_at || post.created_at;
    const updatedDate = post.updated_at || null;
    const canonicalUrl = `${BASE_URL}/blog/${encodeURIComponent(slug)}`;
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        '@id': `${canonicalUrl}#article`,
        url: canonicalUrl,
        mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
        headline: post.title,
        ...(post.excerpt ? { description: post.excerpt } : {}),
        ...(post.featured_image ? {
            image: new URL(fixImagePath(post.featured_image), BASE_URL).href,
        } : {}),
        ...(publishedDate ? { datePublished: new Date(publishedDate).toISOString() } : {}),
        ...(updatedDate ? { dateModified: new Date(updatedDate).toISOString() } : {}),
        author: {
            '@type': authorName === BLOG_AUTHOR || authorName === SITE_PUBLISHER ? 'Organization' : 'Person',
            name: authorName,
        },
        publisher: {
            '@type': 'Organization',
            '@id': `${BASE_URL}/#organization`,
            name: SITE_PUBLISHER,
            url: BASE_URL,
            logo: { '@type': 'ImageObject', url: `${BASE_URL}/hd_logo.webp` },
        },
        inLanguage: 'en',
    };

    return (
        <main className="position-relative bg-white" style={{ minHeight: "100vh" }}>
            <JsonLd data={articleSchema} />
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

                            <div className="mb-4">
                                <BlogAuthorInfo
                                    name={authorName}
                                    credentials={post.author_credentials}
                                    bio={post.author_bio}
                                >
                                    {publishedDate && (
                                        <div className="d-flex align-items-center flex-shrink-0">
                                            <i className="far fa-calendar-alt me-2 fs-5"></i>
                                            <span>
                                                <span className="text-muted me-1">Published</span>
                                                <time dateTime={new Date(publishedDate).toISOString()}>
                                                    {formatDate(publishedDate)}
                                                </time>
                                            </span>
                                        </div>
                                    )}
                                    {updatedDate && (
                                        <div className="d-flex align-items-center flex-shrink-0">
                                            <i className="fas fa-sync-alt me-2 fs-5"></i>
                                            <span>
                                                <span className="text-muted me-1">Updated</span>
                                                <time dateTime={new Date(updatedDate).toISOString()}>
                                                    {formatDate(updatedDate)}
                                                </time>
                                            </span>
                                        </div>
                                    )}
                                    <div className="flex-shrink-0">
                                        <BlogViewCounter slug={slug} initialViews={Number(post.views || 0)} />
                                    </div>
                                </BlogAuthorInfo>
                            </div>
                        </div>
                    </div>

                    {/* Featured Image — this is what shifts down when author panel opens */}
                    {post.featured_image && (
                        <div className="row justify-content-center mb-5">
                            <div className="col-lg-10">
                                <div className="rounded-5 overflow-hidden shadow-lg position-relative w-100" style={{ aspectRatio: '16/9' }}>
                                    <BlogImage
                                        src={fixImagePath(post.featured_image)}
                                        alt={post.title}
                                        className="w-100 h-100 position-absolute top-0 start-0"
                                        style={{ objectFit: 'contain' }}
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

                            <BlogFaq items={faqItems} />

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
