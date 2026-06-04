---
name: landing-page-builder
description: Create stunning, high-converting landing pages with visual design discovery. Build zero-dependency HTML or full Next.js projects with proven conversion frameworks.
aliases: [build-landing-page, create-landing-page, landing-page]
tags: [design, frontend, conversion, marketing, html, nextjs]
---

# Landing Page Builder

Build beautiful, high-converting landing pages with **visual design discovery** and **proven conversion frameworks**. This skill combines exceptional design quality with functional conversion optimization.

## What This Skill Does

Landing Page Builder is an AI-driven design system that:

- **Creates landing pages from scratch** — Describe your product/service, and we generate a complete landing page
- **Offers visual style discovery** — Shows 3 distinct design previews; you pick your preferred aesthetic
- **Follows conversion frameworks** — Every page includes the 11 Essential Elements for maximum conversion
- **Zero-dependency HTML** — Generates pure HTML/CSS/JS that runs everywhere (no build tools needed)
- **Or full Next.js projects** — For teams that need TypeScript, ShadCN components, and advanced customization
- **Multiple aesthetic directions** — Minimalist, Maximalist, Retro-Futuristic, Organic, Editorial, or Brutalist

## How It Works

### Quick Start (Ask Claude)

Tell Claude what you need:

```
"Create a landing page for my SaaS product. It's a project management tool for remote teams. 
I want it to feel modern and professional."
```

Claude will:
1. **Discover your product** — Ask clarifying questions about your offering, target audience, and goals
2. **Suggest 3 aesthetic directions** — Show you visual previews of different design styles applied to your content
3. **You pick your favorite** — Choose which aesthetic resonates most
4. **We generate your page** — Full landing page HTML (or Next.js project) ready to deploy

### The 11 Essential Elements

Every landing page includes these proven conversion drivers:

1. **Hero Section** — Compelling headline + subheadline + CTA button
2. **Social Proof** — Logos of customers, testimonials, or trust badges
3. **Problem Statement** — Validate visitor's pain point
4. **Solution Highlight** — Show how you solve the problem
5. **Key Benefits** — 3-5 major benefits in scannable format
6. **Feature Breakdown** — Detailed features with icons/visuals
7. **Testimonials** — 2-3 customer testimonials with photos
8. **Case Study / Results** — Real metrics (revenue, time saved, etc.)
9. **FAQ Section** — Address common objections
10. **Comparison Table** — vs. competitors or alternatives (optional)
11. **Final CTA** — Strong closing call-to-action with urgency

### Aesthetic Directions

Choose one that matches your brand:

- **Minimalist** — Clean, spacious, sans-serif, focus on whitespace. Best for: luxury, SaaS, professional
- **Maximalist** — Bold colors, gradients, lots of visual elements. Best for: creative agencies, startups, vibrant brands
- **Retro-Futuristic** — 80s/90s vibes + neon colors + geometric shapes. Best for: tech, gaming, youth-focused
- **Organic** — Natural curves, earthy colors, hand-drawn elements. Best for: wellness, sustainability, lifestyle
- **Editorial** — Magazine-style layouts, large typography, imagery-driven. Best for: publishing, design, media
- **Brutalist** — Raw, unpolished, lots of white space, bold fonts. Best for: tech companies, developer tools, rebels

## Usage Examples

### Example 1: Generate HTML (Zero Dependencies)

```
I want an HTML landing page for my AI writing tool.
Target audience: freelance writers
Aesthetic: Minimalist
```

**Output:** A single `.html` file with inline CSS & JavaScript. No build step, no npm install. Deploy anywhere.

### Example 2: Next.js Project (Full Customization)

```
Create a Next.js landing page for our B2B invoicing platform.
Features: real-time collaboration, AI categorization, integrations
Style: Professional, clean aesthetic
Include: form capture for email list
```

**Output:** Full Next.js 14+ project with:
- TypeScript
- Tailwind CSS + ShadCN UI components
- Responsive mobile-first design
- Built-in form handling & CMS setup ready
- Animation library (Framer Motion optional)

### Example 3: Enhance Existing Design

```
I have this landing page draft [paste HTML/describe design].
Make it more compelling. Add social proof section. 
Use the Maximalist aesthetic.
```

**Output:** Enhanced version with improved structure, new sections, animations.

## Output Formats

### Option 1: Zero-Dependency HTML (Recommended for Speed)

Single `.html` file. Run it anywhere:

```bash
# Just open in browser
open landing-page.html

# Or serve locally
python3 -m http.server 8000
# Visit http://localhost:8000/landing-page.html
```

**Pros:**
- Deploy anywhere (Netlify, Vercel, GitHub Pages, your server)
- No build step
- Fast updates
- Single file to manage

**Cons:**
- Less customizable
- No component reuse across pages

### Option 2: Next.js Project (Recommended for Teams)

Full project structure:

```bash
cd landing-page-project
npm install
npm run dev
# Visit http://localhost:3000
```

**Pros:**
- TypeScript for safety
- ShadCN UI components for advanced customization
- Tailwind CSS for easy design tweaks
- SEO optimized (Next.js meta tags)
- Easy to convert to full marketing site
- Form handling built-in

**Cons:**
- Requires Node.js
- Slightly longer setup

## Key Features

✨ **Visual Style Discovery** — See 3 aesthetic options before committing

🎯 **Conversion Optimized** — Built on 11 Essential Elements framework

📱 **Mobile-First** — All pages are responsive and mobile-optimized

🎨 **Highly Customizable** — Change colors, fonts, sections, content easily

🚀 **Production Ready** — SEO optimized, fast loading, accessible

⚡ **Zero Dependencies** — HTML version requires no build tools

🔄 **Iterative** — Easy to request changes and regenerate sections

## When to Use This Skill

Use Landing Page Builder when you need to:

- ✅ Create a landing page for a product launch
- ✅ Build a homepage for a startup
- ✅ Design a lead-capture page for a campaign
- ✅ Redesign an existing landing page
- ✅ Test a new product idea with a quick landing page
- ✅ Create multiple variations for A/B testing

**Don't** use this for:
- ❌ Multi-page websites (use frontend-slides or frontend-design for that)
- ❌ Blog sites (use WordPress or Markdown-based generators)
- ❌ E-commerce sites (use Shopify, WooCommerce)

## Customization Options

After generating your landing page, you can customize:

- **Colors** — Change primary, secondary, accent colors
- **Fonts** — Swap typography (Google Fonts included)
- **Sections** — Add/remove 11 Essential Elements as needed
- **Content** — Update copy, headlines, CTAs
- **Images** — Replace placeholder images with your own
- **Animations** — Add Framer Motion animations
- **Forms** — Connect to email capture (Mailchimp, Convertkit, etc.)

## Gotchas & Best Practices

### ⚠️ Image Placeholder Strategy

- Landing Page Builder uses Unsplash placeholders
- **Before deploying:** Replace all images with your real brand assets
- Images are critical for conversion — use high-quality, on-brand photography

### ⚠️ Copy Is Everything

- Our AI writes good copy, but **you know your customers best**
- Review all headlines, subheadlines, and CTAs
- A/B test your messaging before launching

### ⚠️ Mobile Testing

- Always test on mobile devices (not just responsive design view)
- Click all buttons and forms on mobile
- Ensure CTAs are thumb-friendly (large touch targets)

### ⚠️ Form Handling (Next.js Version)

- The form is a placeholder
- Connect to your email service: Mailchimp, Convertkit, Zapier, etc.
- See `pages/api/subscribe.ts` for the integration point

### ⚠️ Performance

- Minimize external fonts (we include 1-2 only)
- Optimize all images (use TinyPNG, Squoosh before deploying)
- Test with Lighthouse (aim for 90+ on all metrics)

## Workflow

### Step 1: Describe Your Product/Service
Tell Claude about what you're building, who it's for, and what problem it solves.

### Step 2: Visual Discovery
Claude will generate 3 aesthetic previews. Review and pick your favorite.

### Step 3: Generate Full Landing Page
Claude creates your complete landing page with all 11 Essential Elements.

### Step 4: Review & Customize
Review the generated page. Request changes to specific sections, colors, copy, or aesthetic.

### Step 5: Optimize & Deploy
Final touches: image optimization, form connections, analytics setup. Then deploy!

## Technical Details

### Zero-Dependency HTML Version

**Stack:**
- Pure HTML5
- CSS3 (Grid, Flexbox, Animations)
- Vanilla JavaScript (no jQuery, React, etc.)
- Responsive design (mobile-first)
- Intersection Observer API for scroll animations

**Size:** Typically 50-100KB per page (highly optimized)

**Browser Support:** All modern browsers (Chrome, Firefox, Safari, Edge)

### Next.js Version

**Stack:**
- Next.js 14+ (App Router)
- React 18+
- TypeScript
- Tailwind CSS
- ShadCN UI components
- Framer Motion (optional)

**Build Size:** ~200KB (optimized with Next.js)

**Deployment:** Vercel, Netlify, any Node.js host

## Examples

All example landing pages are available:

- **SaaS Product** — `examples/saas-minimalist.html`
- **Startup** — `examples/startup-maximalist.html`
- **B2B Service** — `examples/b2b-professional.html`
- **Creative Agency** — `examples/agency-editorial.html`

## Getting Help

### Common Requests

- "Change the color scheme to blue and green"
- "Add a pricing table"
- "Rewrite the hero section"
- "Add testimonials from real customers"
- "Make it feel more like [brand] aesthetic"
- "Add social proof section"
- "Remove the FAQ and add a comparison table instead"

Just ask Claude to make any changes!

## Next Steps

Once your landing page is live:

1. **Set up analytics** — Google Analytics, Hotjar for heatmaps
2. **A/B test** — Try different headlines, CTAs, colors
3. **Capture emails** — Connect to your email service
4. **Iterate** — Update copy based on user feedback
5. **Grow your site** — When it's working, expand to additional pages

---

**Ready to build?** Just tell Claude what you're creating, and we'll build it together.
