# AI & Voice Search Optimization (GEO/AEO)

## Overview
This project includes optimizations for Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO) to improve visibility in AI search results (ChatGPT, Perplexity, Gemini) and voice assistants (Siri, Alexa).

## 1. GEO (AI Crawlers)

### Context Files
We provide structured context for AI agents in the `public/` directory:

- **`public/llms.txt`**: Detailed company info, products, and FAQs. Optimized for LLM training and retrieval.
- **`public/ai.txt`**: Directives for AI agents on how to prioritize content and cite sources.

### Robots.txt
The `app/robots.ts` file has been updated to explicitly allow the following AI bots:
- GPTBot
- ChatGPT-User
- Google-Extended
- ClaudeBot
- anthropic-ai
- CCBot
- PerplexityBot
- Bytespider

## 2. AEO (Voice Search)

We have created React components to easily add structured data for voice search.

### SpeakableSchema
Use this component on pages with long-form text (like blog posts) to highlight sections that are good for text-to-speech.

```tsx
import SpeakableSchema from '@/components/SpeakableSchema';

<SpeakableSchema 
  url="https://flexymarkets.com/news/market-update"
  headline="Daily Market Update"
  cssSelectors={['#summary', '.key-takeaways']}
/>
```

### HowToSchema
Use this component for step-by-step guides (e.g., "How to Open an Account").

```tsx
import HowToSchema from '@/components/HowToSchema';

<HowToSchema
  name="How to Open a Trading Account"
  description="Step-by-step guide to registering with Flexy Markets."
  totalTime="PT5M"
  steps={[
    { name: "Register", text: "Fill out the registration form.", url: "https://..." },
    { name: "Verify", text: "Upload your ID documents." }
  ]}
/>
```
