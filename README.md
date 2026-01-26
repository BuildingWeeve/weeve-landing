# Weeve Landing Page

A modern, animated landing page for Weeve - your universal save layer.

## Features

- ✨ Built with Next.js 14 and TypeScript
- 🎨 Styled with Tailwind CSS
- 🎭 Smooth animations with Framer Motion
- 📱 Fully responsive design
- 🎯 SEO optimized
- 🚀 Performance optimized

## Getting Started

### Prerequisites

**Important:** This project requires Node.js 18.17 or later. Your current Node version (v14.16.1) is too old.

To update Node.js:

1. **Using Homebrew (recommended for macOS):**

   ```bash
   brew install node@20
   ```

2. **Or download from nodejs.org:**
   Visit https://nodejs.org/ and download the LTS version

3. **Or use nvm (Node Version Manager):**
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   nvm install 20
   nvm use 20
   ```

### Installation

Once you have Node 18.17+, install dependencies:

```bash
cd weeve-landing
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
weeve-landing/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main landing page
│   └── globals.css      # Global styles
├── components/
│   ├── Navbar.tsx       # Navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── Features.tsx     # Features grid
│   ├── HowItWorks.tsx   # How it works section
│   ├── ProductDemo.tsx  # Interactive demo
│   ├── Testimonials.tsx # User testimonials
│   ├── FinalCTA.tsx     # Call-to-action
│   └── Footer.tsx       # Footer
├── public/
│   └── images/          # Static images
└── tailwind.config.ts   # Tailwind configuration
```

## Customization

### Colors

The primary orange color (#ff7900) is configured in `tailwind.config.ts`. You can adjust it and add more brand colors there.

### Fonts

The project uses:

- **Inter** for body text (loaded from Google Fonts)
- **Satisfy** for the logo (script/cursive style)

Change fonts in `app/layout.tsx` and `tailwind.config.ts`.

### Content

Update content in each component file:

- Hero messaging: `components/Hero.tsx`
- Features: `components/Features.tsx`
- Testimonials: `components/Testimonials.tsx`

### Images

Add product screenshots and images to `public/images/` and reference them in components.

## Technologies

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## Performance

The landing page is optimized for:

- Fast loading with Next.js Image optimization
- Smooth animations with Framer Motion
- Minimal bundle size
- SEO with proper metadata

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

Private project for Weeve.
