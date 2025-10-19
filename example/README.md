# React Beautiful Text - Example Application

This is a Next.js example application demonstrating the usage of `react-beautiful-text` library.

## 🎨 Features

- Interactive text effect previews
- Real-time text customization
- Font size adjustment
- 14 stunning text effects:
  - Neon Text - Flickering neon lights
  - ShowGirl Text - Theatrical animation
  - Glowing Text - Pulsing glow effect
  - Spotlight Text - Animated spotlight
  - Gradient Text - Smooth gradients
  - Curved Loop Text - Interactive curved text
  - Fire Text - Burning flames
  - Retro 80s Text - Retro style
  - 3D Gold Text - Luxury gold
  - Luxury Text - Elegant metallic
  - Birthday Text - Celebration theme
  - Woman Day Text - Pink & feminine
  - Teacher Day Text - Academic style
  - Party Text - Festive lights

## 🚀 Quick Start

### Install Dependencies

```bash
npm install --legacy-peer-deps
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### Build for Production

```bash
npm run build
npm run start
```

## 📦 Project Structure

```
example/
├── app/              # Next.js app directory
│   ├── layout.tsx    # Root layout with fonts
│   ├── page.tsx      # Main page
│   └── globals.css   # Global styles
├── components/       # React components
│   ├── font-preview.tsx   # Effect preview
│   └── rich-text-toolbar.tsx  # Control toolbar
├── lib/              # Utilities
│   └── store.tsx     # Font state management
├── styles/           # CSS for text effects
└── package.json      # Dependencies
```

## 🔗 Using the Library

This example imports the library as a local dependency:

```json
{
  "dependencies": {
    "react-beautiful-text": "file:.."
  }
}
```

In production, use the npm package:

```bash
npm install react-beautiful-text
```

Then import:

```tsx
import { NeonText, GradientText } from "react-beautiful-text";

<NeonText text="Hello World" style={{ fontSize: "48px" }} />
```

## 🌐 Deploy to Vercel

See [QUICK_DEPLOY.md](../QUICK_DEPLOY.md) for deployment instructions.

Quick deploy:
```bash
vercel login
vercel
vercel --prod
```

## 🛠 Tech Stack

- **Framework**: Next.js 15.2.4
- **React**: 19.2.0
- **Styling**: Tailwind CSS 4.1.9
- **Fonts**: Geist, Be Vietnam Pro
- **Analytics**: Vercel Analytics

## 📝 Note

This example application is separate from the main library and is not included in the npm package. It serves as a demonstration and testing environment for the library components.
