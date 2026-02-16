"use client";

interface SectionSkeletonProps {
    height?: string;
    className?: string;
}

export default function SectionSkeleton({
    height = "600px",
    className = ""
}: SectionSkeletonProps) {
    return (
        <div
            className={`w-100 ${className}`}
            style={{
                height,
                backgroundColor: "#f8f9fa",
                width: "100%",
                position: "relative",
                overflow: "hidden"
            }}
            aria-hidden="true"
        >
            <div
                className="skeleton-shimmer"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
                    animation: "shimmer 2s infinite"
                }}
            />
            <style jsx>{`
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
            `}</style>
        </div>
    );
}
