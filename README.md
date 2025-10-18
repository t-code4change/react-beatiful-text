# React Beautiful Text

A collection of beautiful, animated text components for React applications. Create stunning text effects with minimal effort!

Perfect for events, celebrations, lucky draws, and special occasions.

## Features

- 14 unique text animation styles
- Two usage methods: Individual components or unified component
- TypeScript support
- Easy to use with select options
- Customizable styling
- Lightweight
- No external dependencies beyond React
- Perfect for events, celebrations, and special occasions

## Installation

```bash
npm install react-beautiful-text
```

or

```bash
yarn add react-beautiful-text
```

## Usage Methods

### Method 1: Unified Component (Recommended)

Use the `BeautifulText` component with effect names. Perfect for dynamic effect selection with dropdowns.

```tsx
import { BeautifulText, getAllEffects } from 'react-beautiful-text';

function App() {
  const [effect, setEffect] = useState('neon');
  const effects = getAllEffects();

  return (
    <div>
      {/* Select dropdown for effect switching */}
      <select value={effect} onChange={(e) => setEffect(e.target.value)}>
        {effects.map((effectName) => (
          <option key={effectName} value={effectName}>
            {effectName}
          </option>
        ))}
      </select>

      {/* Single component with dynamic effect */}
      <BeautifulText
        text="LUCK4YOU"
        effect={effect}
        style={{ fontSize: '80px' }}
      />
    </div>
  );
}
```

### Method 2: Individual Components

Import and use specific components directly.

```tsx
import { NeonText, FireText, GoldText } from 'react-beautiful-text';

function App() {
  return (
    <div>
      <NeonText text="LUCK4YOU" style={{ fontSize: '80px' }} />
      <FireText text="LUCK4YOU" style={{ fontSize: '80px' }} />
      <GoldText text="LUCK4YOU" style={{ fontSize: '80px' }} />
    </div>
  );
}
```

## All Available Effects

### Basic Effects
1. **neon** - Flickering neon effect with random colors
2. **gradient** - Smooth animated gradient
3. **showgirl** - Theatrical showgirl-style animation
4. **glowing** - Pulsing glow effect
5. **spotlight** - Animated spotlight beam
6. **curved** - Interactive curved marquee text

### Special Effects
7. **fire** - Burning fire effect with flickering flames
8. **retro** - 80s retro style with perspective
9. **gold** - Luxurious 3D gold with shine effect
10. **luxury** - Elegant luxury style with metallic finish

### Event & Celebration Effects
11. **birthday** - Colorful birthday text with confetti
12. **womanday** - Pink feminine style with floating flowers
13. **teacherday** - Academic style with books and stars
14. **party** - Festive party lights and sparkles

## Utility Functions

### getAllEffects()

Get all available effect names as an array.

```tsx
import { getAllEffects } from 'react-beautiful-text';

const effects = getAllEffects();
// Returns: ['neon', 'gradient', 'showgirl', 'glowing', ...]
```

### getAllEffectsInfo()

Get detailed information about all effects.

```tsx
import { getAllEffectsInfo } from 'react-beautiful-text';

const effectsInfo = getAllEffectsInfo();
// Returns array of: { name, label, description, category }
```

### getEffectsByCategory()

Get effects filtered by category.

```tsx
import { getEffectsByCategory } from 'react-beautiful-text';

const basicEffects = getEffectsByCategory('basic');
const specialEffects = getEffectsByCategory('special');
const eventEffects = getEffectsByCategory('event');
```

### getEffectInfo()

Get information about a specific effect.

```tsx
import { getEffectInfo } from 'react-beautiful-text';

const info = getEffectInfo('neon');
// Returns: { name: 'neon', label: 'Neon', description: '...', category: 'basic' }
```

## Complete Examples

### Example 1: Effect Selector with Dropdown

```tsx
import React, { useState } from 'react';
import { BeautifulText, getAllEffectsInfo } from 'react-beautiful-text';

function EffectSelector() {
  const [selectedEffect, setSelectedEffect] = useState('gold');
  const [text, setText] = useState('LUCK4YOU');
  const [fontSize, setFontSize] = useState(80);

  const effects = getAllEffectsInfo();

  return (
    <div>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text"
        />

        <input
          type="number"
          value={fontSize}
          onChange={(e) => setFontSize(Number(e.target.value))}
          min={20}
          max={200}
        />

        <select
          value={selectedEffect}
          onChange={(e) => setSelectedEffect(e.target.value)}
        >
          {effects.map((effect) => (
            <option key={effect.name} value={effect.name}>
              {effect.label} - {effect.description}
            </option>
          ))}
        </select>
      </div>

      <BeautifulText
        text={text}
        effect={selectedEffect}
        style={{ fontSize: `${fontSize}px` }}
      />
    </div>
  );
}
```

### Example 2: Category-Based Selection

```tsx
import { BeautifulText, getEffectsByCategory } from 'react-beautiful-text';

function CategorySelector() {
  const [effect, setEffect] = useState('party');
  const eventEffects = getEffectsByCategory('event');

  return (
    <div>
      <h2>Event Effects</h2>
      {eventEffects.map((effectInfo) => (
        <button
          key={effectInfo.name}
          onClick={() => setEffect(effectInfo.name)}
        >
          {effectInfo.label}
        </button>
      ))}

      <BeautifulText
        text="LUCK4YOU"
        effect={effect}
        style={{ fontSize: '100px' }}
      />
    </div>
  );
}
```

### Example 3: Lucky Draw Application

```tsx
import { BeautifulText } from 'react-beautiful-text';

function LuckyDraw() {
  const [winner, setWinner] = useState('');
  const [isDrawing, setIsDrawing] = useState(false);

  const drawWinner = () => {
    setIsDrawing(true);
    // Simulate drawing
    setTimeout(() => {
      setWinner('WINNER #123');
      setIsDrawing(false);
    }, 3000);
  };

  return (
    <div>
      <button onClick={drawWinner}>Draw Winner</button>

      {isDrawing ? (
        <BeautifulText
          text="DRAWING..."
          effect="fire"
          style={{ fontSize: '120px' }}
        />
      ) : winner ? (
        <BeautifulText
          text={winner}
          effect="gold"
          style={{ fontSize: '120px' }}
        />
      ) : (
        <BeautifulText
          text="LUCK4YOU"
          effect="party"
          style={{ fontSize: '100px' }}
        />
      )}
    </div>
  );
}
```

## Individual Component Examples

### NeonText
```tsx
import { NeonText } from 'react-beautiful-text';

<NeonText text="LUCK4YOU" style={{ fontSize: '80px' }} />
```

### GradientText
```tsx
import { GradientText } from 'react-beautiful-text';

<GradientText
  text="LUCK4YOU"
  colors={["#40FFAA", "#4079FF", "#FFE740", "#FF40C0"]}
  animationSpeed={2}
  style={{ fontSize: '80px' }}
/>
```

**Props:**
- `text`: string (required, default: "LUCK4YOU")
- `colors`: string[] (optional)
- `animationSpeed`: number (optional)
- `showBorder`: boolean (optional)
- `style`: React.CSSProperties (optional)
- `className`: string (optional)

### FireText
```tsx
import { FireText } from 'react-beautiful-text';

<FireText text="LUCK4YOU" style={{ fontSize: '80px' }} />
```

### GoldText
```tsx
import { GoldText } from 'react-beautiful-text';

<GoldText text="LUCK4YOU" style={{ fontSize: '80px' }} />
```

### PartyText
```tsx
import { PartyText } from 'react-beautiful-text';

<PartyText text="LUCK4YOU" style={{ fontSize: '80px' }} />
```

### CurvedLoopText
```tsx
import { CurvedLoopText } from 'react-beautiful-text';

<CurvedLoopText
  text="LUCK4YOU"
  speed={2}
  curveAmount={400}
  direction="left"
  interactive={true}
  style={{ fontSize: '80px' }}
/>
```

**Props:**
- `text`: string (required, default: "LUCK4YOU")
- `marqueeText`: string (optional)
- `speed`: number (optional, default: 2)
- `curveAmount`: number (optional, default: 400)
- `direction`: 'left' | 'right' (optional, default: 'left')
- `interactive`: boolean (optional, default: true)
- `style`: React.CSSProperties (optional)
- `className`: string (optional)

## Common Props

All components support these common props:

- `text`: string (required, default: "LUCK4YOU")
- `style`: React.CSSProperties (optional)
- `className`: string (optional)

## TypeScript

Full TypeScript support with exported types:

```tsx
import type {
  BeautifulTextProps,
  EffectName,
  EffectInfo,
  // Individual component props
  NeonTextProps,
  GradientTextProps,
  FireTextProps,
  GoldTextProps,
  PartyTextProps,
  // ... and more
} from 'react-beautiful-text';
```

## Browser Support

Works in all modern browsers that support:
- CSS animations
- ES6+
- React 18+

## Use Cases

- 🎰 Lucky draw applications
- 🎉 Event announcements
- 🎊 Celebration banners
- 💎 Premium product showcases
- 🎂 Birthday greetings
- 📚 Educational platforms
- 🎪 Event websites
- 📱 Social media content

## Credits

Created with ❤️ by the React Beautiful Text team.

Special thanks to **[Lucky4you - quaysotrungthuong.vn](https://quaysotrungthuong.vn/app)** - Professional lucky draw software for events.

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Repository

https://github.com/t-code4change/react-beautiful-text

## Support

If you like this project, please give it a ⭐ on GitHub!
