import { create } from "zustand";

export interface FontTemplate {
  id: string;
  name: string;
  component: string;
}

interface FontState {
  templates: FontTemplate[];
  selectedTemplate: FontTemplate | null;
  setSelectedTemplate: (template: FontTemplate) => void;
}

export const useFontStore = create<FontState>((set) => ({
  templates: [
    { id: "neon-1", name: "Neon", component: "NeonText" },
    { id: "showgirl-1", name: "ShowGirl", component: "ShowGirlText" },
    { id: "glow-1", name: "Glowing", component: "GlowingText" },
    { id: "spotlight-1", name: "Spotlight", component: "SpotlightText" },
    { id: "gradient-1", name: "Gradient", component: "GradientText" },
    { id: "curvedloop-1", name: "CurvedLoop", component: "CurvedLoopText" },
  ],
  selectedTemplate: null,
  setSelectedTemplate: (template) => set({ selectedTemplate: template }),
}));
