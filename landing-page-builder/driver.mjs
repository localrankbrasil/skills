#!/usr/bin/env node

/**
 * Landing Page Builder Driver
 * Generates high-converting landing pages with visual style discovery
 *
 * Usage:
 *   node driver.mjs --style minimalist --format html --output page.html
 *   node driver.mjs --preview [style] [style] [style]
 */

import fs from 'fs';
import path from 'path';

// ============================================================================
// AESTHETIC STYLES
// ============================================================================

const AESTHETICS = {
  minimalist: {
    name: 'Minimalist',
    description: 'Clean, spacious, professional. Focus on whitespace and typography.',
    colors: {
      primary: '#000000',
      secondary: '#666666',
      accent: '#0066cc',
      background: '#ffffff',
      surface: '#f5f5f5',
      text: '#000000',
      textLight: '#666666'
    },
    fonts: {
      heading: "'Inter', 'Helvetica Neue', sans-serif",
      body: "'Inter', 'Helvetica Neue', sans-serif"
    },
    spacing: 'generous',
    shadows: 'subtle'
  },

  maximalist: {
    name: 'Maximalist',
    description: 'Bold colors, gradients, visual abundance. Eye-catching and vibrant.',
    colors: {
      primary: '#ff00ff',
      secondary: '#00ffff',
      accent: '#ffff00',
      background: '#1a1a2e',
      surface: '#16213e',
      text: '#ffffff',
      textLight: '#b0b0b0'
    },
    fonts: {
      heading: "'Poppins', 'Arial Black', sans-serif",
      body: "'Poppins', sans-serif"
    },
    spacing: 'compact',
    shadows: 'bold'
  },

  retrofuturistic: {
    name: 'Retro-Futuristic',
    description: '80s/90s vibes with neon colors and geometric shapes.',
    colors: {
      primary: '#ff006e',
      secondary: '#00d9ff',
      accent: '#ffbe0b',
      background: '#0a0e27',
      surface: '#16213e',
      text: '#ffffff',
      textLight: '#8892b0'
    },
    fonts: {
      heading: "'Orbitron', 'Impact', sans-serif",
      body: "'Space Mono', monospace"
    },
    spacing: 'medium',
    shadows: 'neon'
  },

  organic: {
    name: 'Organic',
    description: 'Natural curves, earthy colors, hand-drawn feeling. Warm and inviting.',
    colors: {
      primary: '#2d5016',
      secondary: '#8b6f47',
      accent: '#d4a574',
      background: '#faf9f6',
      surface: '#f0ebe0',
      text: '#3d3d3d',
      textLight: '#8b8b8b'
    },
    fonts: {
      heading: "'Playfair Display', serif",
      body: "'Lato', sans-serif"
    },
    spacing: 'generous',
    shadows: 'soft'
  },

  editorial: {
    name: 'Editorial',
    description: 'Magazine-style, large typography, imagery-driven. Sophisticated.',
    colors: {
      primary: '#1a1a1a',
      secondary: '#cccccc',
      accent: '#c41e3a',
      background: '#ffffff',
      surface: '#f8f8f8',
      text: '#1a1a1a',
      textLight: '#666666'
    },
    fonts: {
      heading: "'Georgia', 'Garamond', serif",
      body: "'Droid Serif', serif"
    },
    spacing: 'medium',
    shadows: 'none'
  },

  brutalist: {
    name: 'Brutalist',
    description: 'Raw, unpolished, bold fonts, lots of white space. Rebellious.',
    colors: {
      primary: '#000000',
      secondary: '#ffffff',
      accent: '#000000',
      background: '#ffffff',
      surface: '#f0f0f0',
      text: '#000000',
      textLight: '#555555'
    },
    fonts: {
      heading: "'IBM Plex Mono', monospace",
      body: "'IBM Plex Mono', monospace"
    },
    spacing: 'generous',
    shadows: 'none'
  }
};

// ============================================================================
// STYLE PREVIEW GENERATOR
// ============================================================================

function generateStylePreview(aestheticKey) {
  const aesthetic = AESTHETICS[aestheticKey];

  if (!aesthetic) {
    return null;
  }

  const css = `
    /* ${aesthetic.name} Style */
    :root {
      --primary: ${aesthetic.colors.primary};
      --secondary: ${aesthetic.colors.secondary};
      --accent: ${aesthetic.colors.accent};
      --bg: ${aesthetic.colors.background};
      --surface: ${aesthetic.colors.surface};
      --text: ${aesthetic.colors.text};
      --text-light: ${aesthetic.colors.textLight};
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: ${aesthetic.fonts.body};
      background: var(--bg);
      color: var(--text);
      line-height: 1.6;
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: ${aesthetic.fonts.heading};
      color: var(--text);
      margin-bottom: 1rem;
    }

    h1 { font-size: 3.5rem; line-height: 1.1; font-weight: 900; }
    h2 { font-size: 2.5rem; line-height: 1.2; margin-top: 2rem; }
    h3 { font-size: 1.75rem; }

    .hero {
      background: var(--surface);
      ${aesthetic.spacing === 'generous' ? 'padding: 120px 40px;' : 'padding: 80px 20px;'}
      text-align: center;
      ${aesthetic.name === 'Brutalist' ? 'border: 2px solid var(--text);' : ''}
    }

    .cta-button {
      display: inline-block;
      background: var(--accent);
      color: ${aesthetic.colors.background === '#ffffff' ? 'white' : 'black'};
      padding: 16px 32px;
      border: none;
      font-size: 1.1rem;
      cursor: pointer;
      ${aesthetic.shadows === 'none' ? '' : 'box-shadow: 0 4px 6px rgba(0,0,0,0.1);'}
      transition: all 0.3s ease;
    }

    .cta-button:hover {
      transform: translateY(-2px);
      ${aesthetic.shadows === 'none' ? '' : 'box-shadow: 0 6px 12px rgba(0,0,0,0.15);'}
    }

    .feature {
      background: var(--surface);
      padding: ${aesthetic.spacing === 'generous' ? '40px' : '24px'};
      border-radius: 8px;
      margin: 20px 0;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: ${aesthetic.spacing === 'generous' ? '40px' : '20px'};
      max-width: 1200px;
      margin: 0 auto;
    }
  `;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${aesthetic.name} Style Preview</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;900&family=Inter:wght@400;600;700&family=Playfair+Display:wght@700&family=Lato:wght@400;700&family=IBM+Plex+Mono:wght@400;700&family=Orbitron:wght@700;900&family=Space+Mono:wght@400;700&family=Georgia&family=Droid+Serif:wght@400;700&display=swap" rel="stylesheet">
  <style>
    ${css}
  </style>
</head>
<body>
  <section class="hero">
    <h1>${aesthetic.name} Landing Page</h1>
    <p style="font-size: 1.3rem; color: var(--text-light); margin: 20px 0;">
      ${aesthetic.description}
    </p>
    <button class="cta-button">Get Started</button>
  </section>

  <section style="padding: 80px 40px; max-width: 1200px; margin: 0 auto;">
    <h2>Key Features</h2>
    <div class="grid">
      <div class="feature">
        <h3>⚡ Fast</h3>
        <p>Lightning quick performance and smooth interactions.</p>
      </div>
      <div class="feature">
        <h3>🎨 Beautiful</h3>
        <p>Stunning design that converts visitors into customers.</p>
      </div>
      <div class="feature">
        <h3>📱 Responsive</h3>
        <p>Looks perfect on phones, tablets, and desktops.</p>
      </div>
    </div>
  </section>

  <style>
    footer {
      background: var(--surface);
      color: var(--text-light);
      text-align: center;
      padding: 40px;
      margin-top: 80px;
      border-top: 1px solid var(--text-light);
    }
  </style>
  <footer>
    <p>© 2024 ${aesthetic.name} Landing Page</p>
  </footer>
</body>
</html>`;

  return { html, aesthetic };
}

// ============================================================================
// FULL LANDING PAGE GENERATOR
// ============================================================================

function generateFullLandingPage(config) {
  const {
    title = 'Amazing Product',
    subtitle = 'The best solution for your needs',
    heroImage = 'https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=600&fit=crop',
    features = [
      { icon: '⚡', title: 'Feature One', description: 'Key benefit here' },
      { icon: '🎯', title: 'Feature Two', description: 'Another great benefit' },
      { icon: '🚀', title: 'Feature Three', description: 'Third amazing benefit' }
    ],
    testimonials = [
      { quote: 'This product changed my business!', author: 'Happy Customer 1', role: 'Founder' },
      { quote: 'Best decision ever.', author: 'Satisfied User', role: 'CEO' }
    ],
    ctaText = 'Get Started Free',
    aesthetic = 'minimalist'
  } = config;

  const style = AESTHETICS[aesthetic];
  if (!style) {
    throw new Error(`Unknown aesthetic: ${aesthetic}`);
  }

  const featuresHtml = features.map(f => `
    <div class="feature-item">
      <div class="feature-icon">${f.icon}</div>
      <h3>${f.title}</h3>
      <p>${f.description}</p>
    </div>
  `).join('');

  const testimonialsHtml = testimonials.map(t => `
    <div class="testimonial-card">
      <p class="quote">"${t.quote}"</p>
      <p class="author">— ${t.author}, ${t.role}</p>
    </div>
  `).join('');

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="${subtitle}">
  <title>${title}</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;900&family=Inter:wght@400;600;700&family=Playfair+Display:wght@700&family=Lato:wght@400;700&family=IBM+Plex+Mono:wght@400;700&family=Orbitron:wght@700;900&family=Space+Mono:wght@400;700&family=Georgia&family=Droid+Serif:wght@400;700&display=swap" rel="stylesheet">
  <style>
    /* ============================================
       ROOT VARIABLES
       ============================================ */
    :root {
      --primary: ${style.colors.primary};
      --secondary: ${style.colors.secondary};
      --accent: ${style.colors.accent};
      --bg: ${style.colors.background};
      --surface: ${style.colors.surface};
      --text: ${style.colors.text};
      --text-light: ${style.colors.textLight};
      --radius: ${style.name === 'Brutalist' ? '0' : '8px'};
    }

    /* ============================================
       RESET
       ============================================ */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    /* ============================================
       GLOBAL
       ============================================ */
    body {
      font-family: ${style.fonts.body};
      background: var(--bg);
      color: var(--text);
      line-height: 1.6;
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: ${style.fonts.heading};
      color: var(--text);
      margin-bottom: 1rem;
    }

    h1 { font-size: clamp(2rem, 8vw, 4rem); line-height: 1.1; font-weight: 900; }
    h2 { font-size: clamp(1.5rem, 6vw, 3rem); line-height: 1.2; margin-top: 2rem; }
    h3 { font-size: 1.5rem; }

    p { font-size: 1.1rem; color: var(--text-light); margin-bottom: 1rem; }

    a { color: var(--accent); text-decoration: none; transition: all 0.3s ease; }
    a:hover { opacity: 0.7; }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 40px;
    }

    @media (max-width: 768px) {
      .container { padding: 0 20px; }
      h1 { font-size: 2rem; }
      h2 { font-size: 1.5rem; }
    }

    /* ============================================
       BUTTONS
       ============================================ */
    .button {
      display: inline-block;
      background: var(--accent);
      color: ${style.colors.background === '#ffffff' ? '#000' : '#fff'};
      padding: 16px 32px;
      border-radius: var(--radius);
      border: 2px solid var(--accent);
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      text-decoration: none;
    }

    .button:hover {
      transform: translateY(-2px);
      ${style.shadows === 'none' ? '' : 'box-shadow: 0 6px 12px rgba(0,0,0,0.15);'}
    }

    .button-secondary {
      background: transparent;
      color: var(--accent);
      border: 2px solid var(--accent);
    }

    .button-secondary:hover {
      background: var(--accent);
      color: ${style.colors.background === '#ffffff' ? '#000' : '#fff'};
    }

    /* ============================================
       HEADER / NAV
       ============================================ */
    header {
      background: var(--bg);
      border-bottom: 1px solid var(--surface);
      padding: 20px 0;
      position: sticky;
      top: 0;
      z-index: 100;
    }

    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: 900;
      color: var(--primary);
    }

    .nav-links {
      display: flex;
      gap: 30px;
      list-style: none;
    }

    .nav-links a {
      color: var(--text);
      font-weight: 600;
    }

    @media (max-width: 768px) {
      .nav-links { gap: 15px; font-size: 0.9rem; }
    }

    /* ============================================
       HERO SECTION
       ============================================ */
    .hero {
      background: var(--surface);
      padding: ${style.spacing === 'generous' ? '120px 40px' : '80px 40px'};
      text-align: center;
      ${style.name === 'Brutalist' ? 'border-bottom: 3px solid var(--text);' : ''}
    }

    .hero h1 {
      margin-bottom: 1rem;
    }

    .hero p {
      font-size: 1.3rem;
      margin-bottom: 2rem;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
    }

    .hero-cta {
      display: flex;
      gap: 20px;
      justify-content: center;
      flex-wrap: wrap;
    }

    /* ============================================
       FEATURES SECTION
       ============================================ */
    .features {
      padding: ${style.spacing === 'generous' ? '120px 40px' : '80px 40px'};
      background: var(--bg);
    }

    .features h2 {
      text-align: center;
      margin-bottom: 4rem;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: ${style.spacing === 'generous' ? '40px' : '20px'};
    }

    .feature-item {
      background: var(--surface);
      padding: ${style.spacing === 'generous' ? '40px' : '24px'};
      border-radius: var(--radius);
      text-align: center;
      transition: all 0.3s ease;
      ${style.name === 'Brutalist' ? 'border: 2px solid var(--text);' : ''}
    }

    .feature-item:hover {
      ${style.shadows === 'none' ? '' : 'box-shadow: 0 8px 16px rgba(0,0,0,0.1);'}
      transform: translateY(-5px);
    }

    .feature-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .feature-item h3 {
      margin-bottom: 1rem;
    }

    /* ============================================
       TESTIMONIALS SECTION
       ============================================ */
    .testimonials {
      padding: ${style.spacing === 'generous' ? '120px 40px' : '80px 40px'};
      background: var(--surface);
    }

    .testimonials h2 {
      text-align: center;
      margin-bottom: 4rem;
    }

    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: ${style.spacing === 'generous' ? '40px' : '20px'};
    }

    .testimonial-card {
      background: var(--bg);
      padding: ${style.spacing === 'generous' ? '40px' : '24px'};
      border-radius: var(--radius);
      ${style.name === 'Brutalist' ? 'border: 2px solid var(--text);' : ''}
    }

    .quote {
      font-style: italic;
      font-size: 1.1rem;
      margin-bottom: 1.5rem;
      color: var(--text);
    }

    .author {
      font-weight: 600;
      color: var(--text);
    }

    /* ============================================
       CTA SECTION
       ============================================ */
    .cta-final {
      background: var(--primary);
      color: ${style.colors.background === '#ffffff' ? '#fff' : style.colors.text};
      padding: ${style.spacing === 'generous' ? '100px 40px' : '60px 40px'};
      text-align: center;
      ${style.name === 'Brutalist' ? 'border-top: 3px solid var(--text);' : ''}
    }

    .cta-final h2 {
      color: inherit;
      margin-bottom: 1.5rem;
    }

    .cta-final p {
      color: inherit;
      margin-bottom: 2rem;
      font-size: 1.2rem;
    }

    .cta-final .button {
      background: ${style.colors.accent};
      color: ${style.colors.background === '#ffffff' ? '#000' : '#fff'};
    }

    /* ============================================
       FOOTER
       ============================================ */
    footer {
      background: var(--bg);
      border-top: 1px solid var(--surface);
      color: var(--text-light);
      text-align: center;
      padding: 40px;
    }

    footer p {
      margin: 0.5rem 0;
      font-size: 0.95rem;
    }
  </style>
</head>
<body>
  <!-- HEADER -->
  <header>
    <nav class="container">
      <div class="logo">${title.split(' ')[0]}</div>
      <ul class="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#cta">Get Started</a></li>
      </ul>
    </nav>
  </header>

  <!-- HERO -->
  <section class="hero">
    <div class="container">
      <h1>${title}</h1>
      <p>${subtitle}</p>
      <div class="hero-cta">
        <button class="button">${ctaText}</button>
        <button class="button button-secondary">Learn More</button>
      </div>
    </div>
  </section>

  <!-- FEATURES -->
  <section id="features" class="features">
    <div class="container">
      <h2>Why Choose Us</h2>
      <div class="features-grid">
        ${featuresHtml}
      </div>
    </div>
  </section>

  <!-- TESTIMONIALS -->
  <section id="testimonials" class="testimonials">
    <div class="container">
      <h2>What Our Customers Say</h2>
      <div class="testimonials-grid">
        ${testimonialsHtml}
      </div>
    </div>
  </section>

  <!-- FINAL CTA -->
  <section id="cta" class="cta-final">
    <div class="container">
      <h2>Ready to Get Started?</h2>
      <p>Join thousands of happy customers today.</p>
      <button class="button">${ctaText}</button>
    </div>
  </section>

  <!-- FOOTER -->
  <footer>
    <p>&copy; 2024 ${title}. All rights reserved.</p>
    <p>Built with Landing Page Builder</p>
  </footer>
</body>
</html>`;

  return html;
}

// ============================================================================
// CLI
// ============================================================================

async function main() {
  const args = process.argv.slice(2);

  if (!args.length || args[0] === '--help' || args[0] === '-h') {
    console.log('Landing Page Builder Driver\n');
    console.log('Usage:');
    console.log('  node driver.mjs --list-styles');
    console.log('  node driver.mjs --preview [style1] [style2] [style3]');
    console.log('  node driver.mjs --generate [style] [output-file]\n');
    console.log('Examples:');
    console.log('  node driver.mjs --preview minimalist maximalist organic');
    console.log('  node driver.mjs --generate minimalist landing.html\n');
    process.exit(0);
  }

  const command = args[0];

  if (command === '--list-styles') {
    console.log('Available Aesthetics:\n');
    Object.entries(AESTHETICS).forEach(([key, style]) => {
      console.log(`  ${key.padEnd(20)} - ${style.description}`);
    });
    console.log();
  }

  else if (command === '--preview') {
    const styles = args.slice(1);
    if (!styles.length) {
      console.error('Error: Please specify which styles to preview');
      process.exit(1);
    }

    styles.forEach(style => {
      const preview = generateStylePreview(style);
      if (preview) {
        const filename = `style-preview-${style}.html`;
        fs.writeFileSync(filename, preview.html);
        console.log(`✓ Generated: ${filename}`);
      } else {
        console.error(`✗ Unknown style: ${style}`);
      }
    });
  }

  else if (command === '--generate') {
    const style = args[1] || 'minimalist';
    const outputFile = args[2] || 'landing-page.html';

    const html = generateFullLandingPage({ aesthetic: style });
    fs.writeFileSync(outputFile, html);
    console.log(`✓ Generated: ${outputFile}`);
    console.log(`\nStyle: ${AESTHETICS[style].name}`);
    console.log(`Size: ${(html.length / 1024).toFixed(1)}KB\n`);
    console.log('Next steps:');
    console.log(`  1. Open the file: open ${outputFile}`);
    console.log(`  2. Customize the content, colors, and copy`);
    console.log(`  3. Deploy to your hosting provider`);
  }

  else {
    console.error(`Unknown command: ${command}`);
    process.exit(1);
  }
}

main().catch(console.error);
