# 💕 Birthday Romantic Website

A beautiful, immersive, and romantic birthday greeting website built with Next.js 15, Tailwind CSS v4, and Framer Motion.

## ✨ Features

- **Opening Invitation** - Elegant entrance with auto-play music
- **Hero Section** - Polaroid-style photo frame with floating decorations
- **Memory Gallery** - Masonry grid with hover effects
- **Wishes Slider** - Swipeable cards supporting images AND videos
- **Make a Wish** - Interactive candle-blowing with confetti explosion
- **Mobile-First Design** - Looks like a native app on all devices
- **Background Music** - Automatic playback with toggle control

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
npm start
```

## 📝 Customization Guide

### 1. Edit Content (`src/data/content.ts`)

This is the main file you'll edit to personalize the website:

```typescript
// Hero Section
export const heroContent = {
  greeting: "Happy Birthday",
  name: "My Dearest Love",  // Change this!
  tagline: "May your day be as beautiful as your smile",
  date: "January 22, 2026",  // Update the date
  mainImage: "YOUR_IMAGE_URL_HERE",  // Replace with your photo
};

// Wishes Slides - Add your personal messages
export const wishesSlides = [
  {
    id: 1,
    title: "Your Title",
    content: "Your heartfelt message here...",
    mediaType: 'image',  // or 'video'
    mediaSrc: "YOUR_MEDIA_URL",
  },
  // Add more slides...
];

// Gallery Images
export const galleryImages = [
  {
    id: 1,
    src: "YOUR_PHOTO_URL",
    alt: "Memory description",
    span: 'tall',  // 'tall', 'wide', or 'normal'
  },
  // Add more photos...
];
```

### 2. Change Colors (`src/app/globals.css`)

Find the `@theme` section and modify:

```css
@theme {
  --color-soft-pink: #fff1f2;
  --color-cream: #fffbeb;
  --color-gold: #fde047;
  --color-rose: #fda4af;
  /* ... */
}
```

### 3. Add Your Music

In `src/data/content.ts`:

```typescript
export const musicConfig = {
  src: "YOUR_MP3_URL_HERE",
  autoPlay: true,
  loop: true
};
```

### 4. Using Your Own Photos

**Option A: Use Unsplash (recommended for testing)**
```
https://images.unsplash.com/photo-ID?w=600&h=400&fit=crop&q=80
```

**Option B: Upload to your hosting**
- Use services like Cloudinary, Imgur, or your own server
- Update the `next.config.ts` to allow your domain:

```typescript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'your-domain.com',
    },
  ],
},
```

### 5. Adding Videos to Wishes

```typescript
{
  id: 3,
  title: "Our Special Moment",
  content: "Remember this day...",
  mediaType: 'video',  // Set to 'video'
  mediaSrc: "https://your-video-url.mp4",
  mediaAlt: "Video description"
}
```

## 🎨 Theme Variants

### Rose Gold Theme
```css
--color-soft-pink: #f8e8e8;
--color-gold: #d4a574;
--color-rose: #c9a0a0;
```

### Lavender Theme
```css
--color-soft-pink: #f3e8ff;
--color-gold: #c4b5fd;
--color-rose: #a78bfa;
```

### Mint Theme
```css
--color-soft-pink: #ecfdf5;
--color-gold: #6ee7b7;
--color-rose: #34d399;
```

## 📱 Mobile App Experience

The website is designed to look like a mobile app:
- Maximum width of 500px on desktop
- Centered with subtle shadows
- Touch-friendly interactions
- Swipe gestures for slider

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Confetti**: canvas-confetti
- **Language**: TypeScript

## 📂 Project Structure

```
src/
├── app/
│   ├── globals.css      # Tailwind + Custom styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Main page
├── components/
│   ├── Opening.tsx      # Invitation overlay
│   ├── Hero.tsx         # Hero section
│   ├── Gallery.tsx      # Photo gallery
│   ├── Wishes.tsx       # Swipeable wishes
│   ├── MakeWish.tsx     # Birthday cake + confetti
│   └── AudioPlayer.tsx  # Music control
└── data/
    └── content.ts       # All editable content
```

## 💝 Made with Love

Feel free to customize and make it your own special gift!

---

*Happy Birthday to your special someone!* 🎂✨
