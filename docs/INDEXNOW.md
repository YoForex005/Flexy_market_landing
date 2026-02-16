# IndexNow Implementation

IndexNow is a protocol that allows website owners to instantly notify search engines about recent content changes on their website. This implementation allows `flexymarkets.com` to push updates to search engines like Bing and Yandex automatically.

## Files Created

- `public/47a2b9c3d8e5f1a0b7c4d9e2f6a1b3c5.txt`: The key verification file required by search engines.
- `lib/indexnow.ts`: Core library containing functions for URL submission and sitemap processing.
- `app/api/indexnow/submit/route.ts`: API route for manual or trigger-based URL submission.
- `app/api/indexnow/sync/route.ts`: API route for full sitemap synchronization (designed for cron jobs).

## Setup Instructions

1. **Environment Variables**: Add the following to your `.env` file:
   ```env
   INDEXNOW_KEY=47a2b9c3d8e5f1a0b7c4d9e2f6a1b3c5
   INDEXNOW_HOST=https://flexymarkets.com
   INDEXNOW_ENDPOINT=www.bing.com
   API_SECRET_KEY=your_secure_api_key
   CRON_SECRET=your_secure_cron_secret
   ```

2. **Verify Key File**: Ensure the key file is accessible at `https://flexymarkets.com/47a2b9c3d8e5f1a0b7c4d9e2f6a1b3c5.txt`.

## Usage

### Single URL Submission
Submit a single URL using the API:
```bash
curl -X POST https://flexymarkets.com/api/indexnow/submit \
  -H "Content-Type: application/json" \
  -H "x-api-key: your_secure_api_key" \
  -d '{"url": "https://flexymarkets.com/blog/your-new-post"}'
```

### Bulk URL Submission
```bash
curl -X POST https://flexymarkets.com/api/indexnow/submit \
  -H "Content-Type: application/json" \
  -H "x-api-key: your_secure_api_key" \
  -d '{"urls": ["https://url1.com", "https://url2.com"]}'
```

### Full Sitemap Sync (Cron Job)
Configure a cron job to call the sync endpoint periodically:
```bash
curl -X POST https://flexymarkets.com/api/indexnow/sync \
  -H "x-cron-secret: your_secure_cron_secret"
```

## Security
All API routes are protected by secret headers (`x-api-key` or `x-cron-secret`). Ensure these secrets are kept private and are complex enough to prevent unauthorized access.

## AI Crawler Optimization

We have implemented standard files to help AI agents and large language models (LLMs) better understand and cite our website content.

- `public/llms.txt`: A detailed markdown-formatted file containing company profile, products, differentiators, and key stats. Optimized for consumption by LLMs during search and synthesis.
- `public/ai.txt`: A concise configuration file for AI crawlers, specifying preferred content sections and citation formats.

These files are located in the `public/` directory and are automatically served at the root level:
- `https://flexymarkets.com/llms.txt`
- `https://flexymarkets.com/ai.txt`

## SEO Schema Components

We have added reusable React components to implement advanced schema types for better search visibility.

### SpeakableSchema
Used for voice search optimization. It identifies sections of a page that are appropriate for text-to-speech conversion.
**Usage:**
```tsx
import SpeakableSchema from '@/components/SpeakableSchema';

<SpeakableSchema 
  url="https://flexymarkets.com"
  headline="Flexy Markets | Regulated Online Trading Broker"
  cssSelectors={['.hero-title', '.hero-description']}
/>
```

### HowToSchema
Used for step-by-step guides, helping search engines understand the steps required to complete a task.
**Usage:**
```tsx
import HowToSchema from '@/components/HowToSchema';

<HowToSchema 
  name="How to Start Trading"
  description="Follow these simple steps to begin your trading journey."
  steps={[
    { name: "Register", text: "Create an account on our platform." },
    { name: "Verify", text: "Upload your documents for verification." },
    { name: "Deposit", text: "Fund your account using our secure methods." }
  ]}
/>
```
