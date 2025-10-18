import { EffectName } from "../components/BeautifulText";

export interface EffectInfo {
  name: EffectName;
  label: string;
  description: string;
  category: "basic" | "special" | "event";
}

export const EFFECTS: EffectInfo[] = [
  // Basic Effects
  {
    name: "neon",
    label: "Neon",
    description: "Flickering neon effect with random colors",
    category: "basic",
  },
  {
    name: "gradient",
    label: "Gradient",
    description: "Smooth animated gradient",
    category: "basic",
  },
  {
    name: "showgirl",
    label: "ShowGirl",
    description: "Theatrical showgirl-style animation",
    category: "basic",
  },
  {
    name: "glowing",
    label: "Glowing",
    description: "Pulsing glow effect",
    category: "basic",
  },
  {
    name: "spotlight",
    label: "Spotlight",
    description: "Animated spotlight beam",
    category: "basic",
  },
  {
    name: "curved",
    label: "Curved Loop",
    description: "Interactive curved marquee text",
    category: "basic",
  },
  // Special Effects
  {
    name: "fire",
    label: "Fire",
    description: "Burning fire effect with flickering flames",
    category: "special",
  },
  {
    name: "retro",
    label: "Retro 80s",
    description: "80s retro style with perspective",
    category: "special",
  },
  {
    name: "gold",
    label: "3D Gold",
    description: "Luxurious 3D gold with shine effect",
    category: "special",
  },
  {
    name: "luxury",
    label: "Luxury",
    description: "Elegant luxury style with metallic finish",
    category: "special",
  },
  // Event & Celebration Effects
  {
    name: "birthday",
    label: "Birthday",
    description: "Colorful birthday text with confetti",
    category: "event",
  },
  {
    name: "womanday",
    label: "Woman's Day",
    description: "Pink feminine style with floating flowers",
    category: "event",
  },
  {
    name: "teacherday",
    label: "Teacher's Day",
    description: "Academic style with books and stars",
    category: "event",
  },
  {
    name: "party",
    label: "Party",
    description: "Festive party lights and sparkles",
    category: "event",
  },
];

/**
 * Get all available effect names
 * @returns Array of all effect names
 */
export function getAllEffects(): EffectName[] {
  return EFFECTS.map((effect) => effect.name);
}

/**
 * Get all effects with their information
 * @returns Array of effect information objects
 */
export function getAllEffectsInfo(): EffectInfo[] {
  return EFFECTS;
}

/**
 * Get effects by category
 * @param category - The category to filter by
 * @returns Array of effects in the specified category
 */
export function getEffectsByCategory(
  category: "basic" | "special" | "event"
): EffectInfo[] {
  return EFFECTS.filter((effect) => effect.category === category);
}

/**
 * Get effect information by name
 * @param name - The effect name
 * @returns Effect information or undefined if not found
 */
export function getEffectInfo(name: EffectName): EffectInfo | undefined {
  return EFFECTS.find((effect) => effect.name === name);
}
