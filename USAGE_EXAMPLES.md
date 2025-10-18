# React Beautiful Text - Usage Examples

## Two Ways to Use This Library

### Method 1: Unified Component (Recommended for Dynamic Selection)

Perfect when you want users to select effects from a dropdown or dynamically change effects.

```tsx
import { BeautifulText, getAllEffects } from 'react-beautiful-text';

function App() {
  const [effect, setEffect] = useState('gold');
  const effects = getAllEffects();

  return (
    <div>
      <select value={effect} onChange={(e) => setEffect(e.target.value)}>
        {effects.map((name) => (
          <option key={name} value={name}>{name}</option>
        ))}
      </select>

      <BeautifulText
        text="LUCK4YOU"
        effect={effect}
        style={{ fontSize: '80px' }}
      />
    </div>
  );
}
```

### Method 2: Individual Components (Recommended for Static Usage)

Perfect when you know exactly which effect you want to use.

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

## Complete Lucky Draw Example

```tsx
import React, { useState } from 'react';
import {
  BeautifulText,
  getAllEffectsInfo,
  getEffectsByCategory
} from 'react-beautiful-text';

function LuckyDrawApp() {
  const [currentEffect, setCurrentEffect] = useState('party');
  const [text, setText] = useState('LUCK4YOU');
  const [fontSize, setFontSize] = useState(100);
  const [isDrawing, setIsDrawing] = useState(false);

  const allEffects = getAllEffectsInfo();
  const eventEffects = getEffectsByCategory('event');
  const specialEffects = getEffectsByCategory('special');

  const startDraw = () => {
    setIsDrawing(true);
    setCurrentEffect('fire');
    setText('DRAWING...');

    setTimeout(() => {
      setIsDrawing(false);
      setCurrentEffect('gold');
      setText('WINNER #123');
    }, 3000);
  };

  return (
    <div className="app">
      {/* Control Panel */}
      <div className="controls">
        <h2>Lucky Draw Controls</h2>

        <div>
          <label>Text:</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            disabled={isDrawing}
          />
        </div>

        <div>
          <label>Font Size:</label>
          <input
            type="range"
            min="40"
            max="200"
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
          />
          <span>{fontSize}px</span>
        </div>

        <div>
          <label>Effect:</label>
          <select
            value={currentEffect}
            onChange={(e) => setCurrentEffect(e.target.value)}
            disabled={isDrawing}
          >
            <optgroup label="Event Effects">
              {eventEffects.map((effect) => (
                <option key={effect.name} value={effect.name}>
                  {effect.label}
                </option>
              ))}
            </optgroup>
            <optgroup label="Special Effects">
              {specialEffects.map((effect) => (
                <option key={effect.name} value={effect.name}>
                  {effect.label}
                </option>
              ))}
            </optgroup>
          </select>
        </div>

        <button onClick={startDraw} disabled={isDrawing}>
          {isDrawing ? 'Drawing...' : 'Start Draw'}
        </button>
      </div>

      {/* Display Area */}
      <div className="display">
        <BeautifulText
          text={text}
          effect={currentEffect}
          style={{ fontSize: `${fontSize}px` }}
        />
      </div>

      {/* Effect Gallery */}
      <div className="gallery">
        <h3>All Available Effects</h3>
        <div className="effect-grid">
          {allEffects.map((effect) => (
            <div
              key={effect.name}
              className="effect-card"
              onClick={() => setCurrentEffect(effect.name)}
            >
              <div className="effect-preview">
                <BeautifulText
                  text="LUCK4YOU"
                  effect={effect.name}
                  style={{ fontSize: '40px' }}
                />
              </div>
              <div className="effect-info">
                <h4>{effect.label}</h4>
                <p>{effect.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LuckyDrawApp;
```

## Effect Selector with Categories

```tsx
import React, { useState } from 'react';
import {
  BeautifulText,
  getEffectsByCategory,
  EffectName
} from 'react-beautiful-text';

function EffectSelector() {
  const [selectedEffect, setSelectedEffect] = useState<EffectName>('neon');
  const [category, setCategory] = useState<'basic' | 'special' | 'event'>('basic');

  const effects = getEffectsByCategory(category);

  return (
    <div>
      {/* Category Tabs */}
      <div className="tabs">
        <button onClick={() => setCategory('basic')}>Basic</button>
        <button onClick={() => setCategory('special')}>Special</button>
        <button onClick={() => setCategory('event')}>Events</button>
      </div>

      {/* Effect Buttons */}
      <div className="effect-buttons">
        {effects.map((effect) => (
          <button
            key={effect.name}
            onClick={() => setSelectedEffect(effect.name)}
            className={selectedEffect === effect.name ? 'active' : ''}
          >
            {effect.label}
          </button>
        ))}
      </div>

      {/* Preview */}
      <div className="preview">
        <BeautifulText
          text="LUCK4YOU"
          effect={selectedEffect}
          style={{ fontSize: '120px' }}
        />
      </div>
    </div>
  );
}
```

## Individual Component Usage

### Using Specific Components

```tsx
// For Neon Effect
import { NeonText } from 'react-beautiful-text';
<NeonText text="LUCK4YOU" style={{ fontSize: '80px' }} />

// For Fire Effect
import { FireText } from 'react-beautiful-text';
<FireText text="LUCK4YOU" style={{ fontSize: '80px' }} />

// For Gold Effect with custom styling
import { GoldText } from 'react-beautiful-text';
<GoldText
  text="LUCK4YOU"
  style={{
    fontSize: '100px',
    fontFamily: 'Arial Black',
    textAlign: 'center'
  }}
  className="my-custom-class"
/>

// For Gradient with custom colors
import { GradientText } from 'react-beautiful-text';
<GradientText
  text="LUCK4YOU"
  colors={['#FF0080', '#7928CA', '#FF0080']}
  animationSpeed={3}
  style={{ fontSize: '80px' }}
/>

// For Curved Loop with custom settings
import { CurvedLoopText } from 'react-beautiful-text';
<CurvedLoopText
  text="LUCK4YOU"
  speed={5}
  curveAmount={600}
  direction="right"
  interactive={true}
  style={{ fontSize: '60px' }}
/>
```

## Utility Functions Examples

### Get All Effects

```tsx
import { getAllEffects } from 'react-beautiful-text';

const effectNames = getAllEffects();
console.log(effectNames);
// ['neon', 'gradient', 'showgirl', 'glowing', ...]
```

### Get All Effects with Info

```tsx
import { getAllEffectsInfo } from 'react-beautiful-text';

const effects = getAllEffectsInfo();
console.log(effects);
// [
//   {
//     name: 'neon',
//     label: 'Neon',
//     description: 'Flickering neon effect...',
//     category: 'basic'
//   },
//   ...
// ]
```

### Get Effects by Category

```tsx
import { getEffectsByCategory } from 'react-beautiful-text';

const basicEffects = getEffectsByCategory('basic');
const specialEffects = getEffectsByCategory('special');
const eventEffects = getEffectsByCategory('event');
```

### Get Single Effect Info

```tsx
import { getEffectInfo } from 'react-beautiful-text';

const neonInfo = getEffectInfo('neon');
console.log(neonInfo);
// {
//   name: 'neon',
//   label: 'Neon',
//   description: 'Flickering neon effect with random colors',
//   category: 'basic'
// }
```

## TypeScript Usage

```tsx
import type {
  BeautifulTextProps,
  EffectName,
  EffectInfo
} from 'react-beautiful-text';

// Define component with types
const MyComponent: React.FC = () => {
  const [effect, setEffect] = useState<EffectName>('gold');

  const handleEffectChange = (newEffect: EffectName) => {
    setEffect(newEffect);
  };

  return (
    <BeautifulText
      text="LUCK4YOU"
      effect={effect}
      style={{ fontSize: '80px' }}
    />
  );
};
```

## Common Use Cases

### 1. Lucky Draw Winner Display

```tsx
<BeautifulText
  text="WINNER #123"
  effect="gold"
  style={{ fontSize: '150px' }}
/>
```

### 2. Event Announcement

```tsx
<BeautifulText
  text="YEAR END PARTY"
  effect="party"
  style={{ fontSize: '120px' }}
/>
```

### 3. Birthday Greeting

```tsx
<BeautifulText
  text="HAPPY BIRTHDAY"
  effect="birthday"
  style={{ fontSize: '100px' }}
/>
```

### 4. Premium Product Showcase

```tsx
<BeautifulText
  text="LUXURY EDITION"
  effect="luxury"
  style={{ fontSize: '90px' }}
/>
```

## Performance Tips

1. **Use Individual Components** when you know the effect won't change
2. **Use Unified Component** when effects need to change dynamically
3. **Memoize** the BeautifulText component if used in lists
4. **Lazy load** effects if you have many on one page

```tsx
const MemoizedText = React.memo(BeautifulText);

// Use in lists
{items.map((item) => (
  <MemoizedText
    key={item.id}
    text={item.text}
    effect={item.effect}
  />
))}
```

Happy coding with React Beautiful Text! 🎉

Special thanks to **Lucky4you - quaysotrungthuong.vn** for inspiring this library!
