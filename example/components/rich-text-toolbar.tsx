"use client";

import { useFontStore } from "@/lib/store";
import { useState, useEffect } from "react";

// Beautiful fonts that support Vietnamese & English
export const VIETNAMESE_FONTS = [
  // Vietnamese & Universal Fonts
  { id: 'be-vietnam-pro', name: 'Be Vietnam Pro', family: 'Be Vietnam Pro, sans-serif', category: 'vietnamese' },
  { id: 'inter', name: 'Inter', family: 'Inter, sans-serif', category: 'universal' },
  { id: 'roboto', name: 'Roboto', family: 'Roboto, sans-serif', category: 'universal' },
  { id: 'montserrat', name: 'Montserrat', family: 'Montserrat, sans-serif', category: 'universal' },
  { id: 'poppins', name: 'Poppins', family: 'Poppins, sans-serif', category: 'universal' },
  { id: 'open-sans', name: 'Open Sans', family: 'Open Sans, sans-serif', category: 'universal' },
  { id: 'nunito', name: 'Nunito', family: 'Nunito, sans-serif', category: 'universal' },
  { id: 'work-sans', name: 'Work Sans', family: 'Work Sans, sans-serif', category: 'universal' },
  { id: 'lora', name: 'Lora', family: 'Lora, serif', category: 'universal' },

  // English Display Fonts
  { id: 'playfair', name: 'Playfair Display', family: 'Playfair Display, serif', category: 'display' },
  { id: 'bebas', name: 'Bebas Neue', family: 'Bebas Neue, sans-serif', category: 'display' },
  { id: 'oswald', name: 'Oswald', family: 'Oswald, sans-serif', category: 'display' },
  { id: 'raleway', name: 'Raleway', family: 'Raleway, sans-serif', category: 'display' },
  { id: 'merriweather', name: 'Merriweather', family: 'Merriweather, serif', category: 'display' },
  { id: 'cinzel', name: 'Cinzel', family: 'Cinzel, serif', category: 'elegant' },
  { id: 'righteous', name: 'Righteous', family: 'Righteous, sans-serif', category: 'display' },
  { id: 'russo', name: 'Russo One', family: 'Russo One, sans-serif', category: 'display' },

  // Event & Handwriting Fonts
  { id: 'great-vibes', name: 'Great Vibes', family: 'Great Vibes, cursive', category: 'handwriting' },
  { id: 'dancing-script', name: 'Dancing Script', family: 'Dancing Script, cursive', category: 'handwriting' },
  { id: 'pacifico', name: 'Pacifico', family: 'Pacifico, cursive', category: 'handwriting' },

  // Fun & Party Fonts
  { id: 'bangers', name: 'Bangers', family: 'Bangers, cursive', category: 'fun' },
  { id: 'permanent-marker', name: 'Permanent Marker', family: 'Permanent Marker, cursive', category: 'fun' },
  { id: 'fredoka', name: 'Fredoka One', family: 'Fredoka One, cursive', category: 'fun' },
];

export interface TextSettings {
  text: string;
  fontSize: number;
  fontFamily: string;
}

export function RichTextToolbar() {
  const { templates, selectedTemplate, setSelectedTemplate } = useFontStore();

  const [text, setText] = useState("HELLO FONT");
  const [fontSize, setFontSize] = useState(80);
  const [fontFamily, setFontFamily] = useState(VIETNAMESE_FONTS[0].family);

  const handleFontChange = (fontId: string) => {
    const template = templates.find((t) => t.id === fontId);
    if (template) setSelectedTemplate(template);
  };

  const handleFontFamilyChange = (family: string) => {
    setFontFamily(family);
  };

  // Load settings from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("font-settings");
    if (saved) {
      try {
        const settings = JSON.parse(saved);
        if (settings.text) setText(settings.text);
        if (settings.fontSize) setFontSize(settings.fontSize);
        if (settings.fontFamily) setFontFamily(settings.fontFamily);
      } catch (e) {
        // Ignore parse errors
      }
    }
  }, []);

  // Save settings to localStorage
  useEffect(() => {
    localStorage.setItem("font-settings", JSON.stringify({ text, fontSize, fontFamily }));
  }, [text, fontSize, fontFamily]);

  return {
    text,
    setText,
    fontSize,
    setFontSize,
    fontFamily,
    setFontFamily: handleFontFamilyChange,
  };
}
