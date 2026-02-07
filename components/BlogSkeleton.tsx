export default function BlogSkeleton() {
    return (
        <div className="row g-4 justify-content-center">
            {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="col-lg-4 col-md-6">
                    <div className="card h-100 border-0 rounded-4 overflow-hidden shadow-sm" aria-hidden="true">
                        {/* Image Placeholder */}
                        <div className="placeholder-glow" style={{ height: "200px" }}>
                            <span className="placeholder w-100 h-100 bg-secondary opacity-25"></span>
                        </div>

                        {/* Content Placeholder */}
                        <div className="card-body p-4 d-flex flex-column">
                            <div className="d-flex align-items-center mb-3 justify-content-between placeholder-glow">
                                <span className="placeholder col-4 bg-secondary opacity-25 rounded"></span>
                                <span className="placeholder col-2 bg-secondary opacity-25 rounded"></span>
                            </div>

                            <h5 className="card-title placeholder-glow mb-3">
                                <span className="placeholder col-10 bg-secondary opacity-25 rounded"></span>
                                <span className="placeholder col-7 bg-secondary opacity-25 rounded"></span>
                            </h5>

                            <p className="card-text placeholder-glow mb-4">
                                <span className="placeholder col-12 bg-secondary opacity-25 rounded mb-1"></span>
                                <span className="placeholder col-12 bg-secondary opacity-25 rounded mb-1"></span>
                                <span className="placeholder col-8 bg-secondary opacity-25 rounded"></span>
                            </p>

                            <div className="mt-auto placeholder-glow">
                                <span className="placeholder col-12 py-3 bg-secondary opacity-25 rounded-pill"></span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
