"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";

export type BlogAuthorInfoProps = {
    name: string;
    credentials?: string | null;
    bio?: string | null;
    /** Meta items shown beside the author (published / updated / views). They stay fixed when the panel opens. */
    children?: ReactNode;
};

export default function BlogAuthorInfo({
    name,
    credentials,
    bio,
    children,
}: BlogAuthorInfoProps) {
    const [open, setOpen] = useState(false);
    const panelId = useId();
    const closeBtnRef = useRef<HTMLButtonElement>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);

    const displayCredentials =
        credentials?.trim() || "Market Analyst · Flexy Markets";
    const displayBio =
        bio?.trim() ||
        `${name} contributes trading insights, market education, and analysis for Flexy Markets readers.`;

    useEffect(() => {
        if (!open) return;

        closeBtnRef.current?.focus();

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setOpen(false);
                triggerRef.current?.focus();
            }
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [open]);

    return (
        <div className="blog-author-info">
            {/* Meta row stays put — panel is a sibling BELOW this row */}
            <div className="blog-author-meta">
                <button
                    ref={triggerRef}
                    type="button"
                    className="blog-author-trigger d-inline-flex align-items-center border-0 bg-transparent p-0"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpen((prev) => !prev)}
                >
                    <i className="fas fa-user-circle me-2 fs-5" aria-hidden="true" />
                    <span className="fw-medium">{name}</span>
                </button>
                {children}
            </div>

            {/* Full-width slot under meta: only this grows, which pushes the image down */}
            <div
                id={panelId}
                className={`blog-author-panel${open ? " is-open" : ""}`}
                role="region"
                aria-label={`About ${name}`}
                aria-hidden={!open}
            >
                <div className="blog-author-panel-clip">
                    <div className="blog-author-panel-inner">
                        <div className="d-flex align-items-start justify-content-between gap-3">
                            <div className="text-start pe-2 flex-grow-1">
                                <div className="d-flex align-items-center mb-2">
                                    <span className="blog-author-avatar me-3" aria-hidden="true">
                                        <i className="fas fa-user" />
                                    </span>
                                    <div>
                                        <p className="h5 fw-bold mb-1 text-dark">{name}</p>
                                        <p className="mb-0 small text-emerald-700 fw-semibold">
                                            {displayCredentials}
                                        </p>
                                    </div>
                                </div>
                                <p className="mb-0 text-secondary blog-author-bio">{displayBio}</p>
                            </div>

                            <button
                                ref={closeBtnRef}
                                type="button"
                                className="blog-author-close"
                                aria-label="Close author details"
                                tabIndex={open ? 0 : -1}
                                onClick={() => {
                                    setOpen(false);
                                    triggerRef.current?.focus();
                                }}
                            >
                                <i className="fas fa-times" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .blog-author-info {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: stretch;
                }

                /* Fixed meta line: author + dates + views never reflow when panel opens */
                .blog-author-meta {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: center;
                    gap: 1rem 1.5rem;
                    color: #6c757d;
                    /* Lock this row so panel growth can't re-center its items */
                    flex: 0 0 auto;
                }

                .blog-author-trigger {
                    color: #374151;
                    cursor: pointer;
                    transition: color 0.2s ease;
                    flex: 0 0 auto;
                }

                .blog-author-trigger:hover,
                .blog-author-trigger:focus-visible {
                    color: #047857;
                    outline: none;
                }

                .blog-author-trigger:focus-visible {
                    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.25);
                    border-radius: 0.35rem;
                }

                /* Panel sits on its own row under meta; only this block changes height */
                .blog-author-panel {
                    display: grid;
                    grid-template-rows: 0fr;
                    opacity: 0;
                    margin-top: 0;
                    width: 100%;
                    pointer-events: none;
                    transition:
                        grid-template-rows 0.28s ease,
                        opacity 0.22s ease,
                        margin-top 0.28s ease;
                }

                .blog-author-panel.is-open {
                    grid-template-rows: 1fr;
                    opacity: 1;
                    margin-top: 1.25rem;
                    pointer-events: auto;
                }

                .blog-author-panel-clip {
                    overflow: hidden;
                    min-height: 0;
                }

                .blog-author-panel-inner {
                    width: 100%;
                    max-width: 42rem;
                    margin-left: auto;
                    margin-right: auto;
                    text-align: left;
                    border: 1px solid rgba(5, 150, 105, 0.18);
                    border-radius: 1rem;
                    background: rgba(255, 255, 255, 0.95);
                    box-shadow: 0 0.5rem 1.5rem rgba(15, 23, 42, 0.06);
                    padding: 1.15rem 1.25rem;
                }

                .blog-author-avatar {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 2.75rem;
                    height: 2.75rem;
                    border-radius: 999px;
                    background: #ecfdf5;
                    color: #059669;
                    flex-shrink: 0;
                }

                .blog-author-bio {
                    line-height: 1.7;
                    font-size: 0.98rem;
                }

                .blog-author-close {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 2.25rem;
                    height: 2.25rem;
                    border: 1px solid rgba(15, 23, 42, 0.08);
                    border-radius: 999px;
                    background: #f8fafc;
                    color: #334155;
                    flex-shrink: 0;
                    cursor: pointer;
                    transition:
                        background 0.2s ease,
                        color 0.2s ease;
                }

                .blog-author-close:hover,
                .blog-author-close:focus-visible {
                    background: #ecfdf5;
                    color: #047857;
                    outline: none;
                }

                .blog-author-close:focus-visible {
                    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.25);
                }

                .text-emerald-700 {
                    color: #047857;
                }
            `}</style>
        </div>
    );
}
