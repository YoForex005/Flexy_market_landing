# SEO & AI Strategy Overview

## Introduction
This documentation covers the implemented strategies for modern SEO, including instant indexing (IndexNow) and optimization for the new era of AI-driven search (GEO/AEO).

## Components

### 1. Instant Indexing (IndexNow)
Ensure your content is indexed immediately by Bing and Yandex.
- [Setup & Usage Guide](./IndexNow_Setup.md)

### 2. AI Optimization (GEO)
Prepare your site for AI crawlers like ChatGPT and Perplexity.
- **Files**: `public/llms.txt`, `public/ai.txt`
- **Configuration**: Updated `robots.txt`
- [AI Optimization Guide](./AI_Optimization_Guide.md)

### 3. Voice Search Optimization (AEO)
Structure your data for voice assistants.
- **Components**: `SpeakableSchema`, `HowToSchema`
- [AI Optimization Guide](./AI_Optimization_Guide.md)

## Deployment Checklist
1.  Add environment variables from `.env.example` to your production deployment.
2.  Deploy the code changes.
3.  Verify the existence of `/llms.txt`, `/ai.txt`, and key file.
4.  Test the API endpoints.
5.  Set up a cron job for `/api/indexnow/sync` (optional but recommended).
