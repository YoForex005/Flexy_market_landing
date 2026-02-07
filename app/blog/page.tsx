import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import BlogGrid from '@/components/BlogGrid';
import BlogSkeleton from '@/components/BlogSkeleton';
import { Suspense } from 'react';

// Revalidate every 60 seconds (ISR)
export const revalidate = 60;

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
    const { page: pageParam } = await searchParams; // Await searchParams
    const page = parseInt(pageParam || '1');

    return (
        <main className="position-relative bg-white" style={{ minHeight: "100vh" }}>
            {/* Background Animation */}
            <div className="position-fixed top-0 start-0 w-100 h-100" style={{ zIndex: 0 }}>
                <AnimatedBackground variant="aurora" intensity="medium" />
            </div>

            <NavBar />

            {/* HERO SECTION */}
            <div className="container position-relative z-1 pt-5 mt-5">
                <div className="text-center py-5">
                    <div className="d-inline-flex align-items-center justify-content-center mb-4 px-3 py-1 rounded-pill border border-emerald-200 bg-emerald-50 text-emerald-800 shadow-sm">
                        <span className="fw-bold text-uppercase fs-7 tracking-wide">
                            Market Insights
                        </span>
                    </div>

                    <h1 className="display-3 fw-bold mb-3 text-dark tracking-tight">
                        Latest <span style={{ color: '#0f4941' }}>Trading Analysis</span>
                    </h1>

                    <p className="lead mx-auto mb-5 text-secondary" style={{ maxWidth: "600px" }}>
                        Stay ahead of the markets with expert insights, educational guides, and breaking financial news.
                    </p>
                </div>
            </div>

            {/* BLOG GRID with Suspense Streaming */}
            <div className="container position-relative z-1 pb-5 mb-5">
                <Suspense fallback={<BlogSkeleton />}>
                    <BlogGrid page={page} />
                </Suspense>
            </div>

            <div className="position-relative z-1">
                <Footer />
            </div>
        </main>
    );
}

