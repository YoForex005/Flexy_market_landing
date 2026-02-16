# Advanced SEO Optimization Guide: IndexNow, AEO, and GEO

This guide covers the implementation and usage of the advanced SEO strategies implemented for **Flexy Markets**. These include instant indexing (IndexNow), AI Engine Optimization (GEO), and Answer Engine Optimization (AEO/Voice Search).

---

## 1. IndexNow (Instant Indexing)
IndexNow allows the site to instantly notify search engines (Bing, Yandex, etc.) whenever content is created or updated.

### Key Components:
- **Verification File**: `public/47a2b9c3d8e5f1a0b7c4d9e2f6a1b3c5.txt`
- **Library**: `lib/indexnow.ts`
- **Submission API**: `POST /api/indexnow/submit` (requires `x-api-key`)
- **Sync API (Cron)**: `POST /api/indexnow/sync` (requires `x-cron-secret`)

### Environment Setup:
```env
INDEXNOW_KEY=47a2b9c3d8e5f1a0b7c4d9e2f6a1b3c5
INDEXNOW_HOST=https://flexymarkets.com
INDEXNOW_ENDPOINT=www.bing.com
API_SECRET_KEY=yoursecretkey
CRON_SECRET=yourcronsecret
```

---

## 2. GEO (AI Engine Optimization)
Ensures that Large Language Models (LLMs) and AI search engines correctly understand and cite the company.

### Optimization Files:
- **`public/llms.txt`**: A detailed, markdown-formatted company profile containing products, differentiators, and key stats.
- **`public/ai.txt`**: Configuration for AI crawlers, specifying preferred content and citation formats.
- **`app/robots.ts`**: Updated to explicitly allow major AI bots (GPTBot, ClaudeBot, etc.).

---

## 3. AEO (Voice Search & Rich Snippets)
Implemented Answer Engine Optimization features to capture "Position Zero" and voice search queries.

### Components:
- **`SpeakableSchema.tsx`**: Identifies specific sections for voice assistants (Alexa, Siri).
- **`HowToSchema.tsx`**: Generates rich snippets for step-by-step guides (e.g., "How to start trading").

---

## 4. Usage Examples

### Manual IndexNow Trigger
```bash
curl -X POST https://flexymarkets.com/api/indexnow/submit \
  -H "x-api-key: your-api-key" \
  -d '{"url": "https://flexymarkets.com/new-page"}'
```

### Implementing Voice Search in a Page:
```tsx
<SpeakableSchema 
  url="https://flexymarkets.com"
  headline="Flexy Markets Trading"
  cssSelectors={['.hero-title']}
/>
```

---

## 5. Security & Maintenance
- **API Keys**: Ensure `API_SECRET_KEY` and `CRON_SECRET` are rotated periodically and kept secure in your environment.
- **Key File**: The file `public/47a2b9c3d8e5f1a0b7c4d9e2f6a1b3c5.txt` must always match the `INDEXNOW_KEY` in your environment.
