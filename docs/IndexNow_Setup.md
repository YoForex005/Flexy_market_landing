# IndexNow Setup & Usage Guide

## Overview
This guide explains how to set up and use the IndexNow implementation for Flexy Markets. IndexNow allows for instant indexing of new or updated content by search engines like Bing and Yandex.

## 1. Setup

### Environment Variables
Ensure the following variables are set in your `.env.local` (and production environment):

```env
INDEXNOW_KEY=01db1dc76e994fbdbb0d5f38322c20d4
INDEXNOW_HOST=flexymarkets.com
INDEXNOW_ENDPOINT=https://api.indexnow.org/indexnow
API_SECRET_KEY=[Your Secure API Key]
CRON_SECRET=[Your Secure Cron Secret]
```

### Key File
The validation key file is located at `public/01db1dc76e994fbdbb0d5f38322c20d4.txt`.
**Verification:** Visit `https://your-domain.com/01db1dc76e994fbdbb0d5f38322c20d4.txt` to confirm it loads.

## 2. API Usage

### Manual Submission
Use this endpoint to submit specific URLs when content is created or updated.

**Endpoint:** `POST /api/indexnow/submit`
**Headers:**
- `x-api-key`: `[API_SECRET_KEY]`
- `Content-Type`: `application/json`

**Body:**
```json
{
  "url": "https://flexymarkets.com/new-page"
}
```
*OR*
```json
{
  "urls": [
    "https://flexymarkets.com/page-1",
    "https://flexymarkets.com/page-2"
  ]
}
```

### Automated Sync (Cron Job)
Use this endpoint to sync all URLs from your sitemap to IndexNow. Ideally, set this up as a daily cron job.

**Endpoint:** `POST /api/indexnow/sync`
**Headers:**
- `x-cron-secret`: `[CRON_SECRET]`

## 3. Programmatic Usage
You can import the library functions directly in your Next.js code:

```typescript
import { submitSingleUrl } from '@/lib/indexnow';

// Inside your API route or server action
await submitSingleUrl('https://flexymarkets.com/blog/new-post');
```
