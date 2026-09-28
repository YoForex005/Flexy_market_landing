# Flexy Markets performance validation

Verified 2026-09-28 on a local Next.js production build at http://127.0.0.1:3100/. These changes have not been deployed.

## Current standard-preset results

| Profile | Performance | SEO | Accessibility | LCP | TBT | CLS |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Mobile | 79 | 100 | 100 | 4.2 s | 310 ms | 0 |
| Desktop | 75 | 100 | 100 | 0.9 s | 580 ms | 0.021 |

These are one final-build run per standard Lighthouse profile, with real third-party requests enabled. The separate desktop standard-preset report corrects the user-agent mismatch in the original custom comparison below. There is no matching standard-preset desktop baseline, so its score should not be treated as a strict before/after comparison with 61.

## Comparable before/after measurements

| Metric | Mobile before | Mobile after | Custom desktop before | Custom desktop after |
| --- | ---: | ---: | ---: | ---: |
| Performance score | 39 | 79 | 61 | 70 |
| First contentful paint | 4.5 s | 1.5 s | 1.0 s | 0.4 s |
| Largest contentful paint | 8.1 s | 4.2 s | 1.9 s | 0.9 s |
| Total blocking time | 1,280 ms | 310 ms | 170 ms | 960 ms |
| Layout shift (CLS) | 0 | 0 | 0.368 | 0.021 |
| SEO | 100 | 100 | 100 | 100 |
| Accessibility | 100 | 100 | 100 | 100 |

The desktop after column uses the median performance run out of three; its other metrics come from that same run. Final-build desktop scores were 70, 69, 86. The mobile after column is one final-build run. The original before values were single runs following the SEO work, before this performance pass. The earlier 37 mobile score belongs to the original SEO baseline.

Lighthouse 13.5.0, headless Chrome. Mobile uses default simulated throttling. The desktop comparison retains the baseline's custom desktop layout (1350 x 940, DPR1), 40ms RTT, 10,240Kbps throughput, and 1x CPU. This custom runner retained Lighthouse's mobile user-agent string even for the desktop layout; these are comparable local results, not standard PageSpeed desktop results. All Lighthouse runs included real Google Analytics and Ads requests; none used the functional-test request stubs. Third-party script execution caused substantial desktop score variation. Production hosting, device load, and network conditions can change these results.

No field Core Web Vitals or INP were measured. TBT is a lab responsiveness metric and is not INP.

## Changes

- Reduced measured initial mobile font transfers from 396.9KiB to 70.9KiB. Served local WOFF2 text and icon subsets, retaining full fonts for additional characters/icons and preserving the supplied text font's metrics.
- Prioritized a responsive version of the existing hero poster and sized navigation logos correctly. Decorative video remains desktop-only and respects reduced motion and connection constraints.
- Moved hero geometry into compiled CSS, stabilized the initial header state, and changed the progress animation from width changes to transform scaling.
- Replaced multiple blurred animated background layers with one gradient layer. Animations pause offscreen or in a hidden tab and remain static on touch/mobile and with reduced motion. Shared observers avoid repeated forced layout during hydration.
- Replaced the full CDN Bootstrap JavaScript bundle with the local offcanvas module while preserving early menu clicks.
- Fetch account details only when the section approaches the viewport, with an eight-second timeout and a truthful failure state.
- Queue both Google tracking configurations immediately and load the shared library after window load at the next idle opportunity (two-second idle timeout). This bounded deferral can miss very short visits that end before the library sends queued events. No tracking ID or tag was removed.

## Validation

- Production build, TypeScript, and static generation passed.
- All 87 HTTP SEO checks passed.
- All 39 changed TypeScript/TSX/MJS files passed ESLint with zero warnings; diff whitespace checks passed. Unrelated pre-existing repository-wide lint failures remain documented in the SEO report.
- Desktop/mobile navigation and carousel checks passed; no horizontal overflow or uncaught page errors. Main content remains readable without JavaScript. Mobile/reduced-motion video behavior passed.
- All 11 focused functional checks passed: account deferral/timeout, analytics initialization, responsive poster, subset/full-font fallback, mobile video avoidance, and decorative background pause/resume. Functional test stubs are not benchmark results.

Google Analytics/Ads execution and render-blocking shared CSS remain the main improvement opportunities. Best Practices is still below 100; this work does not claim all audit categories are 100.

## Inspect and reproduce

Build with `npm run build`, start with `npm run start -- --port 3100`, then run `npm run verify:seo -- --base-url=http://127.0.0.1:3100`. Run Lighthouse 13.5.0 against the production server with mobile and standard desktop presets after deployment. Full settings for the local comparisons are embedded in the JSON reports.

Generated artifacts are ignored by Git:

- [Standard desktop report](../.seo-cache/lighthouse-desktop-standard.html).
- [Mobile report](../.seo-cache/lighthouse-mobile.html) and [desktop median report](../.seo-cache/lighthouse-desktop.html).
- [Desktop run1](../.seo-cache/performance-after-desktop-run1.html), [run2](../.seo-cache/performance-after-desktop-run2.html), [run3](../.seo-cache/performance-after-desktop-run3.html).
- [Mobile before](../.seo-cache/performance-before-mobile.html) and [desktop before](../.seo-cache/performance-before-desktop.html).
- [Browser checks](../.seo-cache/browser-checks.json) and [performance behavior checks](../.seo-cache/performance-behavior-checks.json).
