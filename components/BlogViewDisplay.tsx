"use client";

import { useEffect, useState } from 'react';

interface BlogViewDisplayProps {
    slug: string;
    initialViews: number;
}

export default function BlogViewDisplay({ slug, initialViews }: BlogViewDisplayProps) {
    const [views, setViews] = useState<number>(initialViews);

    useEffect(() => {
        const fetchViews = async () => {
            try {
                const response = await fetch(`/api/blog/view?slug=${slug}`);
                if (response.ok) {
                    const data = await response.json();
                    if (data.views !== undefined) {
                        setViews(data.views);
                    }
                }
            } catch (error) {
                console.error('Error fetching views:', error);
            }
        };

        fetchViews();
    }, [slug]);

    return (
        <div className="d-flex align-items-center" title={`${views} views`}>
            <i className="far fa-eye me-1"></i> {views}
        </div>
    );
}
