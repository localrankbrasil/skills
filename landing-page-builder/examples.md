# Landing Page Builder — Usage Examples

## Quick Start: Ask Claude to Create Your Landing Page

### Example 1: SaaS Product (Simple)

**You say:**
```
Create a landing page for my SaaS tool called "ProjectHub".
It's a project management platform for remote teams.
I want a clean, professional, minimalist look.
```

**Claude generates:**
- A complete HTML landing page with the Minimalist aesthetic
- Sections: Hero, Features, Testimonials, CTA
- Ready to deploy

**Next steps:**
1. Review the page
2. Customize the copy, colors, or sections
3. Deploy to Netlify/Vercel

---

### Example 2: Creative Agency (Visual & Bold)

**You say:**
```
Build a landing page for my design agency "Studio X".
We create stunning brand identities and web experiences.
Make it bold and eye-catching. Use the Maximalist aesthetic.
Add: our process, portfolio section, client logos, case study.
```

**Claude generates:**
- Bold Maximalist design with gradients and vibrant colors
- Portfolio grid with client work
- Client logos section (social proof)
- Case study section with metrics
- CTAs throughout

**Customizations you can request:**
- "Change the primary color to teal"
- "Add a pricing table"
- "Replace the testimonials with case studies"
- "Make the layout more brutalist instead"

---

### Example 3: Startup (Quick MVP)

**You say:**
```
I need a landing page for my startup "DataFlow".
We're an AI platform for data analysis.
Target audience: data teams at enterprises.
Make it professional and trustworthy.
Include social proof (logos of companies using us).
```

**Claude generates:**
- Professional Minimalist or Editorial design
- Hero section with strong positioning
- Key metrics/benefits section
- Customer logos section
- Testimonials from actual users
- FAQ section
- Final CTA with urgency

---

### Example 4: Retro/Fun Aesthetic (B2C)

**You say:**
```
Create a landing page for "RetroFit", an 80s-themed fitness app.
It's gamified fitness tracking with a nostalgic vibe.
Use the Retro-Futuristic aesthetic.
Add: features, pricing, sign-up form.
```

**Claude generates:**
- Neon colors, geometric shapes, 80s typography
- Feature cards with retro styling
- Pricing table with highlight
- Email capture form
- Social proof section
- High energy, fun design

---

## Aesthetic Showcase

### Minimalist
- Best for: SaaS, professional services, luxury brands
- Characteristics: Whitespace, simple typography, one accent color
- Vibe: Clean, modern, trustworthy

### Maximalist
- Best for: Creative agencies, startups, vibrant brands
- Characteristics: Bold colors, gradients, lots of visual elements
- Vibe: Eye-catching, energetic, memorable

### Retro-Futuristic
- Best for: Tech companies, gaming, youth-focused
- Characteristics: Neon colors, geometric shapes, monospace fonts
- Vibe: Edgy, futuristic, bold

### Organic
- Best for: Wellness, sustainability, lifestyle
- Characteristics: Natural curves, earthy colors, warm feeling
- Vibe: Approachable, natural, warm

### Editorial
- Best for: Publishing, design, media, high-end brands
- Characteristics: Large typography, imagery-driven, magazine-style
- Vibe: Sophisticated, visual, premium

### Brutalist
- Best for: Tech companies, developer tools, rebellious brands
- Characteristics: Raw, bold fonts, monospace, minimal decoration
- Vibe: No-nonsense, authentic, technical

---

## Advanced Customizations

After Claude generates your landing page, you can request:

### Content Changes
- "Update the hero headline to emphasize speed"
- "Add more features (make it 6 instead of 3)"
- "Replace testimonials with actual customer quotes"
- "Add a comparison table vs. competitors"

### Design Changes
- "Change primary color to navy blue"
- "Use different fonts (serif instead of sans-serif)"
- "Add animations/transitions"
- "Make the layout wider/narrower"

### Section Additions
- "Add a pricing section"
- "Add a team section"
- "Add a FAQ section"
- "Add a contact form"
- "Add social proof (customer logos)"

### Technical Options
- "Generate as Next.js project instead of HTML"
- "Add email capture form"
- "Add analytics tracking (Google Analytics)"
- "Create 3 different variants for A/B testing"

---

## Output Formats

### Option A: Single HTML File (Default)
```bash
# Generated file: landing-page.html
# Size: ~8-10KB
# Deploy: Anywhere (GitHub Pages, Netlify, Vercel, your server)
# Customization: Edit HTML directly
```

### Option B: Next.js Project
```bash
# Generated: Full Next.js 14+ project
# Size: ~200KB (optimized)
# Deploy: Vercel, Netlify, any Node.js host
# Customization: TypeScript, components, easy updates
# Features: Built-in SEO, form handling, CMS-ready
```

---

## Real-World Workflow

### Step 1: Brief Claude
```
Create a landing page for [your product].
It does [what it does].
Target audience: [who uses it].
Aesthetic: [minimalist/maximalist/etc].
Include: [specific sections you want].
```

### Step 2: Claude Generates Preview
Claude shows you 3 different aesthetic previews to choose from.
You pick the one that feels right.

### Step 3: Full Generation
Claude creates your complete landing page with:
- All 11 essential conversion elements
- Chosen aesthetic applied throughout
- Mobile-responsive design
- SEO optimized

### Step 4: Iterate & Refine
Request changes:
- "Make the CTA more urgent"
- "Change the color scheme"
- "Add this section"
- "Rewrite this copy"

### Step 5: Optimize & Deploy
- Replace placeholder images with real assets
- Connect forms to email service
- Set up analytics
- Deploy to hosting

---

## Tips for Best Results

### ✅ DO
- Be specific about your target audience
- Describe your product's key benefits
- Mention competitive advantages
- Include real customer testimonials (if available)
- Specify aesthetic direction clearly
- Request specific changes (not vague ones)

### ❌ DON'T
- Use generic placeholder copy for long (rewrite headlines especially)
- Keep low-quality images (optimize before deploy)
- Forget mobile testing (always test on real devices)
- Ignore analytics after launch (track what works)
- Deploy without customizing (make it yours!)

---

## Deployment Guide

### Netlify (Easiest)
1. Drag and drop your HTML file to Netlify
2. Get a live URL instantly
3. Done!

### Vercel
1. Create account on vercel.com
2. For HTML: Upload as static site
3. For Next.js: Connect GitHub repo
4. Auto-deploys on push

### GitHub Pages
1. Create `index.html` in repo
2. Push to `gh-pages` branch
3. Live at: `username.github.io/repo-name`

### Your Own Server
1. FTP the HTML file to your server
2. Point domain to server
3. Configure SSL
4. Done!

---

## Troubleshooting

### Page looks blank?
- Check browser console (F12) for errors
- Make sure fonts loaded (Google Fonts CDN)
- Try a different browser

### Colors look wrong?
- Clear browser cache (Cmd+Shift+R on Mac)
- Check if custom fonts loaded
- Try viewing in incognito/private mode

### Mobile doesn't look good?
- Check viewport meta tag (should be in head)
- Test on actual mobile device, not browser devtools
- Click all buttons with thumb (not mouse)

### Form not working?
- HTML version has placeholder form
- Connect to Mailchimp, Zapier, or your backend
- For Next.js version, see `/pages/api/subscribe.ts`

---

## Next Steps After Launch

1. **Analytics Setup**
   - Add Google Analytics
   - Track button clicks, form submissions
   - Monitor traffic sources

2. **A/B Testing**
   - Test different headlines
   - Try different CTAs
   - Experiment with colors

3. **Optimization**
   - Improve conversion rate
   - Speed up page load
   - Mobile optimization

4. **Scale**
   - When landing page converts, add more pages
   - Create full website
   - Build out marketing site

---

## Questions?

- "How do I change the colors?"
- "Can I add more sections?"
- "How do I connect a form?"
- "Can I export as PDF?"
- "How do I get analytics?"

Just ask Claude! This skill is designed for iteration and customization.
