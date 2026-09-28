# Flexy Markets SEO validation

Verified 2026-09-28 against a local production build at http://127.0.0.1:3100/.

**Lighthouse SEO: 100/100 on mobile and desktop.** The initial mobile score was 92/100. These are measured automated SEO results, not a guarantee of rankings or a 100/100 comprehensive SEO health score. The live website has not been deployed by this task.

## Measured results

Lighthouse 13.5.0, Chrome headless; mobile simulated throttling and a separate desktop profile. Audits ran with real third-party requests enabled. Performance scores vary with machine load, network conditions, and external services.

| Category | Initial mobile | Current mobile | Current desktop |
| --- | ---: | ---: | ---: |
| seo | 92 | 100 | 100 |
| accessibility | 92 | 100 | 100 |
| performance | 37 | 79 | 75 |
| best-practices | 73 | 77 | 73 |

Mobile lab measurements: LCP 4.2 s, TBT 310 ms, CLS 0.
Desktop lab measurements: LCP 0.9 s, TBT 580 ms, CLS 0.021.
Current values use the standard mobile and desktop Lighthouse presets. See [the performance report](PERFORMANCE_VALIDATION.md) for the separate comparable desktop repeats, changes, and the original custom desktop profile limitation.
No real-user Core Web Vitals or INP were collected. TBT is a lab metric, not INP.

## Implemented changes

- Fixed the generic link text that failed the original Lighthouse SEO audit; added descriptive links to trading products, education, account conditions, and legal documents.
- Corrected duplicate brand suffixes, route-specific Open Graph URLs, homepage title/description, and social previews. Added a rendered 1200 x 630 social image.
- Removed the blocking full-page loader and JavaScript-dependent streamed homepage sections. Main content and account introduction now appear in the initial HTML; offscreen painting is deferred without removing content.
- Corrected robots rules that unintentionally blocked /promotions, added /privacy-policy to the sitemap, removed invented modification dates, and excluded authentication pages from indexing.
- Aligned Organization data with visible site identity, used Service markup on ten trading-market pages, and added truthful BlogPosting data, article canonicals, and real missing-article 404 responses.
- Replaced unsupported homepage regulation, awards, outcome guarantees, and statistics with descriptive copy. Removed fabricated fallback author credentials and risk-free promotional metadata.
- Compressed the hero video from 29,389,499 to 3,675,672 bytes. Kept the original. Added a 120,176-byte poster, delayed desktop playback, and avoided video downloads for mobile, reduced motion, and constrained connections. Enabled server gzip compression.

## Validation

- Production build: passed (Next.js compilation, TypeScript, and static generation).
- HTTP SEO verification: 87 checks passed, including every local homepage navigation link, canonicals, sitemap, robots, social image, schema JSON, and authentication indexing directives.
- Browser checks: desktop, mobile, and JavaScript-disabled content; no horizontal overflow, one H1, working desktop/mobile menus and slider, reduced-motion video behavior, no uncaught JavaScript errors.
- Changed-file lint: 39 files, 0 errors, 0 warnings. Whitespace/diff validation passed.
- Blog checks: sitemap returned 427 URLs; /blog/what-is-forex returned HTTP 200 with matching canonical, Open Graph URL, visible dates and BlogPosting. A nonexistent article returned HTTP 404 and noindex. Raw HTTP/read-only SQL checks did not increment article views.
- No published article currently has FAQ data, so a populated FAQ end-to-end case could not be tested.

## Remaining limits

The broader repository lint command still reports six pre-existing errors in IndexNow code, an unused HowTo component, and useMobile, plus eleven warnings. All edited files pass lint.

Performance and Best Practices are separate from SEO. The performance pass improved loading and rendering; see [the performance report](PERFORMANCE_VALIDATION.md). Advertising cookies, third-party scripts, and shared CSS still affect other categories. This is not a claim that all Lighthouse categories score 100.

Existing company registration, social ownership, credentials, testimonials, and claims on pages beyond the homepage still need business evidence. The older SEO_Complete_Report.md is a historical report, not evidence for this verification. Search Console coverage, backlinks, regulator records, Google rich-result eligibility, and real-user performance were not independently validated.

## Reproduce and inspect

Run npm run build, then npm run start -- --port 3100. In another terminal, run npm run verify:seo -- --base-url=http://127.0.0.1:3100. Run Lighthouse 13.5.0 against the production server, or against the live URL after deployment.

Local generated artifacts (ignored by Git):

- [Mobile Lighthouse report](../.seo-cache/lighthouse-mobile.html)
- [Desktop Lighthouse report](../.seo-cache/lighthouse-desktop-standard.html)
- [Initial mobile Lighthouse report](../.seo-cache/lighthouse-before.html)
- [HTTP check details](../.seo-cache/verification.json)
- [Browser check details](../.seo-cache/browser-checks.json)

Guidance used: [AgriciDaniel/codex-seo](https://github.com/AgriciDaniel/codex-seo), revision 9a644f6, its page/technical/schema/sitemap/content/performance workflows; [Next.js metadata image documentation](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image) and [Google Article structured data documentation](https://developers.google.com/search/docs/appearance/structured-data/article).
