"use client";

import { useEffect, useState } from 'react';

interface BlogViewCounterProps {
    slug: string;
    initialViews: number;
}

export default function BlogViewCounter({ slug, initialViews }: BlogViewCounterProps) {
    const [views, setViews] = useState<number>(initialViews);

    useEffect(() => {
        const incrementViews = async () => {
            try {
                const response = await fetch('/api/blog/view', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ slug }),
                });

                if (response.ok) {
                    const data = await response.json();
                    if (data.views) {
                        setViews(data.views);
                    }
                } else {
                    console.error('Failed to increment views');
                }
            } catch (error) {
                console.error('Error incrementing views:', error);
            }
        };

        incrementViews();
    }, [slug]);

    return (
        <div className="d-flex align-items-center">
            <i className="far fa-eye me-2 fs-5"></i>
            <span>{views} views</span>
        </div>
    );
}
