This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses `next/font` to serve the supplied Tomato Grotesk fonts locally.
Small Latin subsets load first; complete fonts remain available for other supported characters.

## SEO verification

Build and start the production server before checking SEO:

```bash
npm run build
npm run start -- --port 3100
# In a second terminal:
npm run verify:seo -- --base-url=http://127.0.0.1:3100
```

The verifier checks rendered metadata, structured data, internal links, sitemap
coverage, indexing directives, and content availability without page JavaScript.
See [the measured SEO validation report](docs/SEO_VALIDATION.md) for Lighthouse
results, changes, and remaining limitations. Generated local audit artifacts are
stored in the ignored `.seo-cache/` directory.

## Performance verification

See [the performance validation report](docs/PERFORMANCE_VALIDATION.md) for
before/after production-build measurements, changes, and testing conditions.
Run performance audits against a production server, not `next dev`.

Font Awesome is served locally with subsets for icons used in `app/` and
`components/`. Full local faces remain available for additional icons. To update
the checked-in font assets after adding icons, run:

```bash
# Optional maintenance dependencies; normal builds do not need Python.
python -m pip install "fonttools[woff]"
python scripts/subset-fonts.py
```

Keep dynamically constructed icon names in the script's explicit safelist.
Font Awesome's license is included in `app/fonts/Font-Awesome-LICENSE.txt`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
