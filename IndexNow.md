# IndexNow Implementation Guide

This document explains how to use the newly implemented IndexNow protocol for your website.

## 1. key Configuration

The IndexNow key has been generated and placed in `public/01db1dc76e994fbdbb0d5f38322c20d4.txt`.

**Action Required:**
Add the following to your `.env` file (local and production):

```env
INDEXNOW_KEY=01db1dc76e994fbdbb0d5f38322c20d4
INDEXNOW_HOST=[YOUR_DOMAIN] (e.g., www.flexymarket.com)
INDEXNOW_ENDPOINT=https://api.indexnow.org/indexnow
API_SECRET_KEY=[Generate a generic secret for API access]
CRON_SECRET=[Generate a secret for cron job access]
```

## 2. Testing the Implementation

### Verify Key File
Visit `https://[YOUR_DOMAIN]/01db1dc76e994fbdbb0d5f38322c20d4.txt`. You should see the key displayed.

### Manual Submission (API)
You can manually submit a URL using a tool like Postman or `curl`.

```bash
curl -X POST https://[YOUR_DOMAIN]/api/indexnow/submit \
  -H "x-api-key: [API_SECRET_KEY]" \
  -H "Content-Type: application/json" \
  -d '{"url": "https://[YOUR_DOMAIN]/new-page"}'
```

### Automated Sync (Cron Job)
You can set up a cron job to call the sync endpoint daily. This will parse your sitemap and submit URLs to IndexNow.

```bash
curl -X POST https://[YOUR_DOMAIN]/api/indexnow/sync \
  -H "x-cron-secret: [CRON_SECRET]"
```

## 3. programmatic Usage

You can also use the library directly in your code (e.g., when a new post is created):

```typescript
import { submitSingleUrl } from '@/lib/indexnow';

await submitSingleUrl('https://[YOUR_DOMAIN]/blog/new-post');
```
