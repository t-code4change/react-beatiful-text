"use client";

import { BeautifulText, getAllEffects } from '../../src';
import { useState, useEffect } from "react";
import { Sparkles, Palette, Type, Sliders } from 'lucide-react';
import { VIETNAMESE_FONTS } from '@/components/rich-text-toolbar';

export default function Home() {
  const [effect, setEffect] = useState<any>('neon');
  const [customText, setCustomText] = useState('BEAUTIFUL TEXT');
  const [fontSize, setFontSize] = useState(80);
  const [fontFamily, setFontFamily] = useState(VIETNAMESE_FONTS[0].family);
  const effects = getAllEffects();

  // Load saved settings from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('font-settings');
    if (saved) {
      try {
        const { text, fontSize: savedFontSize, fontFamily: savedFontFamily } = JSON.parse(saved);
        if (text) setCustomText(text);
        if (savedFontSize) setFontSize(savedFontSize);
        if (savedFontFamily) setFontFamily(savedFontFamily);
      } catch (e) {
        // Ignore parse errors
      }
    }
  }, []);

  // Save settings to localStorage
  useEffect(() => {
    localStorage.setItem('font-settings', JSON.stringify({ text: customText, fontSize, fontFamily }));
  }, [customText, fontSize, fontFamily]);

  return (
    <div className="overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Background decoration */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent pointer-events-none" />
      <div className="fixed inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />

      <div className="relative h-screen overflow-y-scroll">
        <header className="border-b border-white/10 backdrop-blur-xl bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">React Beautiful Text</h1>
                <p className="text-sm text-slate-400">Animated text effects for React</p>
              </div>
            </div>
          </div>
        </header>
        {/* Main content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col overflow-auto py-4">
          {/* Preview Section */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6 ">
              <Palette className="w-5 h-5 text-purple-400" />
              <h2 className="text-xl font-semibold text-white">Live Preview</h2>
            </div>

            <div className="sticky top-0 rounded-2xl borderborder-white/10 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl p-12 sm:p-16 overflow-hidden">
              {/* Glow effect */}
              {/*<div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 blur-3xl" />*/}

              <div className=" ">
                <BeautifulText
                  text={customText}
                  effect={effect}
                  style={{ fontSize: `${fontSize}px`, fontFamily: fontFamily }}
                />
              </div>
            </div>
          </div>

          {/* Rich Text Toolbar - Controls Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-xl font-semibold text-white">Text Controls</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Text Input */}
              <div className="space-y-4 md:col-span-2">
                <label className="block">
                  <span className="text-sm font-medium text-slate-300 mb-2 flex items-center gap-2">
                    <Type className="w-4 h-4" />
                    Custom Text
                  </span>
                  <input
                    type="text"
                    value={customText}
                    onChange={(e) => setCustomText(e.target.value)}
                    placeholder="Enter your text..."
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-slate-900/50 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all backdrop-blur-xl"
                  />
                </label>
              </div>

              {/* Font Family Selector */}
              <div className="space-y-4">
                <label className="block">
                  <span className="text-sm font-medium text-slate-300 mb-2 flex items-center gap-2">
                    <Type className="w-4 h-4" />
                    Font Family
                  </span>
                  <div className="relative">
                    <select
                      value={fontFamily}
                      onChange={(e) => setFontFamily(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-slate-900/50 text-white appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all backdrop-blur-xl"
                    >
                      <optgroup label="Vietnamese & Universal" className="bg-slate-800">
                        {VIETNAMESE_FONTS.filter(f => f.category === 'vietnamese' || f.category === 'universal').map((font) => (
                          <option
                            key={font.id}
                            value={font.family}
                            className="bg-slate-900"
                            style={{ fontFamily: font.family }}
                          >
                            {font.name}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Display Fonts" className="bg-slate-800">
                        {VIETNAMESE_FONTS.filter(f => f.category === 'display' || f.category === 'elegant').map((font) => (
                          <option
                            key={font.id}
                            value={font.family}
                            className="bg-slate-900"
                            style={{ fontFamily: font.family }}
                          >
                            {font.name}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Handwriting & Events" className="bg-slate-800">
                        {VIETNAMESE_FONTS.filter(f => f.category === 'handwriting').map((font) => (
                          <option
                            key={font.id}
                            value={font.family}
                            className="bg-slate-900"
                            style={{ fontFamily: font.family }}
                          >
                            {font.name}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Fun & Party" className="bg-slate-800">
                        {VIETNAMESE_FONTS.filter(f => f.category === 'fun').map((font) => (
                          <option
                            key={font.id}
                            value={font.family}
                            className="bg-slate-900"
                            style={{ fontFamily: font.family }}
                          >
                            {font.name}
                          </option>
                        ))}
                      </optgroup>
                    </select>


                  </div>
                </label>
              </div>
                <div className="space-y-4">
                    <label className="block">
                <span className="text-sm font-medium text-slate-300 mb-2 flex items-center gap-2">
                  <Sliders className="w-4 h-4" />
                  Font Size ({fontSize}px)
                </span>
                        <div className="flex gap-4 items-center">
                            <input
                                min={20}
                                max={200}
                                value={fontSize}
                                className="w-full px-4 py-3 rounded-xl border border-white/10 bg-slate-900/50 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all backdrop-blur-xl"

                                onChange={(e) => setFontSize(Number(e.target.value))}
                            />
                        </div>
                    </label>
                </div>
            </div>

            {/* Font Size Control - Full Width */}

          </div>

          {/* Effects Grid */}
          <div className="mt-12">
            <h3 className="text-lg font-semibold text-white mb-6">Available Effects</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {effects.map((effectName) => (
                <button
                  key={effectName}
                  onClick={() => setEffect(effectName)}
                  className={`px-4 py-3 rounded-lg border transition-all text-sm font-medium ${
                    effect === effectName
                      ? 'border-purple-500 bg-purple-500/20 text-purple-300'
                      : 'border-white/10 bg-slate-900/30 text-slate-400 hover:border-purple-500/50 hover:bg-slate-800/50 hover:text-slate-300'
                  }`}
                >
                  {effectName.charAt(0).toUpperCase() + effectName.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </main>

      </div>
    </div>
  );
}
