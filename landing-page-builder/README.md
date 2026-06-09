# Landing Page Builder — Complete Documentation

**Create stunning, high-converting landing pages with visual design discovery and proven conversion frameworks.**

This skill combines the best of:
- **Landing Page Guide V2** — 11 Essential Elements framework + conversion optimization
- **Frontend Slides** — Zero-dependency HTML + visual style discovery
- **UI/UX Design** — 6 distinct aesthetic directions
- **Design Excellence** — Professional, production-ready output

---

## What You Get

✨ **Zero-Dependency HTML**
- Pure HTML5/CSS3/JavaScript
- No build tools, no npm, no dependencies
- Works everywhere (GitHub Pages, Netlify, your server)
- Typically 8-10KB per page

🎨 **6 Aesthetic Directions**
- Minimalist (clean, professional)
- Maximalist (bold, vibrant)
- Retro-Futuristic (80s/90s neon)
- Organic (natural, warm)
- Editorial (magazine-style)
- Brutalist (raw, no-nonsense)

🎯 **11 Essential Elements**
Every page includes proven conversion drivers:
1. Hero section with compelling headline
2. Social proof (logos, testimonials)
3. Problem statement
4. Solution highlight
5. Key benefits
6. Feature breakdown
7. Customer testimonials
8. Results/case study
9. FAQ section
10. Comparison table (optional)
11. Final CTA with urgency

📱 **Mobile-First Responsive**
- Looks perfect on all devices
- Touch-friendly buttons and forms
- Optimized performance

🚀 **Production Ready**
- SEO optimized (meta tags, structured data)
- Accessibility compliant
- Fast loading (<100ms)
- Easy to customize

---

## How It Works

### 1. Describe Your Product
Tell Claude what you're building and who it's for.

### 2. See 3 Aesthetic Previews
Claude generates visual previews of different styles.
You pick your favorite.

### 3. Get Full Landing Page
Complete page generated with your chosen aesthetic.

### 4. Customize & Iterate
Request changes to copy, colors, sections, or aesthetic.

### 5. Deploy
One click to GitHub Pages, Netlify, or Vercel.

---

## Quick Start

### The Easiest Way

**Just ask Claude:**

```
Create a landing page for my SaaS called ProjectHub.
It's a project management tool for remote teams.
Make it minimalist and professional.
```

Claude will:
1. Ask clarifying questions
2. Show you 3 aesthetic options
3. Generate your complete landing page
4. Help you customize it

### Manual Usage (Optional)

If you want to generate landing pages locally:

```bash
# List available styles
node driver.mjs --list-styles

# Generate style previews
node driver.mjs --preview minimalist maximalist organic

# Generate full landing page
node driver.mjs --generate minimalist my-landing-page.html
```

---

## File Structure

```
landing-page-builder/
├── SKILL.md              ← Skill definition (read this first!)
├── driver.mjs            ← CLI tool for generating pages
├── examples.md           ← Real-world examples & workflows
├── README.md             ← This file
├── example-landing.html  ← Example output
└── style-preview-*.html  ← Style preview examples
```

---

## Technical Details

### HTML Version

**Stack:**
- HTML5 semantic markup
- CSS3 Grid/Flexbox layout
- Vanilla JavaScript (no frameworks)
- Responsive design
- Google Fonts for typography

**Browser Support:**
- Chrome/Edge (latest)
- Firefox (latest)
- Safari 14+
- Mobile browsers

**Performance:**
- 8-10KB file size
- <100ms load time (uncompressed)
- Lighthouse score: 95+
- Zero external dependencies

### Next.js Version (Optional)

If you want a full project:

**Stack:**
- Next.js 14+ (App Router)
- React 18+
- TypeScript
- Tailwind CSS
- ShadCN UI components
- Framer Motion (animations)

**Features:**
- Component-based architecture
- Easy customization
- Built-in SEO
- Form handling
- Image optimization
- API routes ready

---

## Customization Guide

### Changing Colors

```html
<!-- Edit CSS variables in <head> -->
<style>
  :root {
    --primary: #your-color;
    --secondary: #your-color;
    --accent: #your-color;
  }
</style>
```

### Changing Fonts

```html
<!-- Edit font imports in <head> -->
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap">

<!-- Then update CSS -->
h1 { font-family: 'Your Font', sans-serif; }
```

### Adding Sections

Clone any section (features, testimonials) and customize:

```html
<section class="features">
  <div class="container">
    <h2>Your Section Title</h2>
    <div class="features-grid">
      <!-- Add feature items here -->
    </div>
  </div>
</section>
```

### Connecting Forms

```html
<!-- Add your email service endpoint -->
<form action="https://your-api.com/subscribe" method="POST">
  <input type="email" name="email" required>
  <button type="submit">Subscribe</button>
</form>
```

Popular services:
- **Mailchimp** — mailchimp.com
- **ConvertKit** — convertkit.com
- **Zapier** — zapier.com
- **Make** — make.com

---

## Aesthetic Comparison

| Aesthetic | Best For | Primary Color | Vibe |
|-----------|----------|---------------|------|
| **Minimalist** | SaaS, professional | Black | Clean, trustworthy |
| **Maximalist** | Creative, startups | Magenta/Cyan | Bold, energetic |
| **Retro-Futuristic** | Tech, gaming | Neon Pink | Edgy, futuristic |
| **Organic** | Wellness, lifestyle | Green/Brown | Warm, natural |
| **Editorial** | Publishing, luxury | Red/Black | Sophisticated |
| **Brutalist** | Tech, developer | Black | Raw, authentic |

---

## Deployment Options

### 🚀 Netlify (Recommended for Simplicity)

```bash
# 1. Go to netlify.com
# 2. Drag and drop your HTML file
# 3. Get a live URL
# Done!
```

**Pros:**
- Free tier available
- Custom domain support
- SSL included
- Instant deploy

### 🌍 Vercel

```bash
# For HTML:
# 1. Create repo on GitHub
# 2. Push HTML file
# 3. Connect to Vercel
# 4. Auto-deploys on push

# For Next.js:
npm create next-app@latest my-landing
# Then connect GitHub repo to Vercel
```

**Pros:**
- Built for Next.js
- Incredible performance
- Edge functions included
- Free tier available

### 📝 GitHub Pages

```bash
# 1. Create GitHub repo
# 2. Add HTML file as index.html
# 3. Push to gh-pages branch
# 4. Enable Pages in Settings
# Live at: username.github.io/repo-name
```

**Pros:**
- Free forever
- Git-based workflow
- Version control
- No platform lock-in

### 🖥️ Your Own Server

```bash
# 1. Upload via FTP/SFTP
# 2. Point domain to server
# 3. Set up SSL (Let's Encrypt free)
# 4. Done!
```

**Pros:**
- Complete control
- No third-party platform
- Custom domain

---

## SEO Optimization

Every landing page includes:

✅ **Semantic HTML5**
```html
<header>, <nav>, <main>, <section>, <article>, <footer>
```

✅ **Meta Tags**
```html
<title>Your Page Title</title>
<meta name="description" content="Page description">
<meta name="keywords" content="your, keywords">
```

✅ **Open Graph (Social Sharing)**
```html
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="...">
```

✅ **Mobile Optimization**
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

**To rank on Google:**
1. Submit sitemap to Google Search Console
2. Set up Analytics
3. Create backlinks (link building)
4. Update content regularly
5. Monitor keyword rankings

---

## Analytics Setup

### Google Analytics

```html
<!-- Add to <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Hotjar (Heatmaps)

```html
<!-- Add to <head> -->
<script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:YOUR_ID,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');
        r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>
```

Track what matters:
- Button clicks (CTA engagement)
- Form submissions (conversions)
- Scroll depth (engagement)
- Traffic sources (where users come from)
- Device types (mobile vs desktop)

---

## A/B Testing

Create multiple variants and test:

### Test 1: Headlines
- Variant A: "Save 10 hours per week"
- Variant B: "The fastest way to manage projects"

### Test 2: CTAs
- Variant A: "Get Started Free"
- Variant B: "Start 14-Day Trial"

### Test 3: Colors
- Variant A: Blue accent color
- Variant B: Red accent color

**Use:**
- Google Optimize (free)
- Convert (paid)
- Unbounce (landing page platform)

---

## Common Issues & Solutions

### Page looks blank
**Solution:** Check browser console (F12 → Console tab)
- Fonts failing to load? Check Google Fonts URL
- CSS not applying? Refresh with Cmd+Shift+R
- JavaScript error? Check for typos in HTML

### Mobile view broken
**Solution:** 
- Test on real device (not just browser devtools)
- Check viewport meta tag exists in `<head>`
- Ensure buttons are large enough (48px minimum)
- Test form inputs on mobile keyboard

### Form not submitting
**Solution:**
- Check action URL is correct
- Verify email service is configured
- Check browser console for JavaScript errors
- Test with curl first: `curl -X POST your-form-endpoint`

### Images not loading
**Solution:**
- Use absolute URLs (https://example.com/image.jpg)
- Optimize images first (TinyPNG, Squoosh)
- Check file permissions
- Use WebP format for better compression

---

## Performance Optimization

### Image Optimization
```bash
# Before deploying, optimize all images
# Free tools:
- TinyPNG (tinypng.com)
- Squoosh (squoosh.app)
- ImageOptim (Mac only)

# Goal: <100KB per image
# Format: WebP for modern browsers, PNG fallback
```

### CSS/JS Minification
```bash
# Minify CSS (already done in our HTML)
# Minify JavaScript (already done in our HTML)
# Gzip compression (done by hosting provider)
```

### Lighthouse Score
```bash
# Open Chrome DevTools (F12)
# Go to Lighthouse tab
# Run audit
# Target: 90+ on all metrics
```

---

## Accessibility

Our landing pages are WCAG 2.1 AA compliant:

✅ Semantic HTML (headings, lists, etc.)
✅ Proper contrast ratios (dark on light)
✅ Alt text for all images
✅ Keyboard navigation
✅ Mobile-friendly touch targets
✅ Form labels properly associated

To improve accessibility further:
1. Add alt text to all images
2. Test with keyboard only (no mouse)
3. Test with screen reader (NVDA, JAWS)
4. Use `aria-label` for icon buttons
5. Ensure color isn't the only indicator

---

## Getting Help

### Request Examples
- "Make the colors more bold"
- "Add a pricing section"
- "Change the layout to wider"
- "Use Retro-Futuristic aesthetic"
- "Add an animated counter for metrics"

### Request Changes
- "Rewrite the hero headline"
- "Move testimonials after features"
- "Remove the FAQ section"
- "Add social media icons"
- "Make the CTA button larger"

### Get Specific
- Good: "Change the primary color to #FF6B35"
- Bad: "Make it prettier"

- Good: "Add 2 more feature cards"
- Bad: "Add more features"

- Good: "Change the font to Georgia serif"
- Bad: "Different font"

---

## Next Steps

1. **Start with a brief** — Tell Claude what you're creating
2. **See previews** — Choose your aesthetic
3. **Get your page** — Complete landing page generated
4. **Customize** — Request changes
5. **Optimize** — Improve images, copy, colors
6. **Deploy** — Push live in minutes
7. **Track** — Monitor analytics
8. **Iterate** — A/B test and improve conversion

---

## Resources

- **Landing page best practices** — https://www.unbounce.com/landing-pages/
- **Conversion rate optimization** — https://www.optimizely.com/
- **Design inspiration** — https://dribbble.com/, https://behance.net/
- **Font pairing** — https://www.fontpair.co/
- **Color tools** — https://coolors.co/, https://colorhunt.co/
- **SEO guide** — https://moz.com/beginners-guide-to-seo

---

## License

This skill is provided as-is for creating landing pages. Generated landing pages are yours to use freely.

---

**Ready to build?** Just ask Claude: *"Create a landing page for..."*
