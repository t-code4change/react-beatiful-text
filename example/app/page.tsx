"use client";

import { BeautifulText, getAllEffects } from '@/lib/beautiful-text';
import { useState, useEffect } from "react";
import { Sparkles, Palette, Type, Sliders, Code, Copy, Check } from 'lucide-react';
import { VIETNAMESE_FONTS } from '@/components/rich-text-toolbar';

export default function Home() {
  const [effect, setEffect] = useState<any>('neon');
  const [customText, setCustomText] = useState('BEAUTIFUL TEXT');
  const [fontSize, setFontSize] = useState(80);
  const [fontFamily, setFontFamily] = useState(VIETNAMESE_FONTS[0].family);
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);
  const effects = getAllEffects();

  // Generate code snippet
  const codeSnippet = `import { BeautifulText } from 'react-beautiful-text';

function App() {
  return (
    <BeautifulText
      text="${customText}"
      effect="${effect}"
      style={{ fontSize: '${fontSize}px', fontFamily: '${fontFamily}' }}
    />
  );
}`;

  // Copy code to clipboard
  const copyCode = async () => {
    await navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
          <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-6">
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
        {/* Main content - Full Width 2 Column Layout */}
        <main className="container w-screen px-4 py-4">
          <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-8">

            {/* LEFT COLUMN - Preview & Code */}
            <div className="space-y-8">
              {/* Preview Section */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Palette className="w-5 h-5 text-purple-400" />
                  <h2 className="text-xl font-semibold text-white">Live Preview</h2>
                </div>

                <div className="rounded-2xl border w-full border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl p-12 sm:p-16 overflow-hidden">
                  <div className="flex items-center justify-center min-h-[300px]">
                    <BeautifulText
                      text={customText}
                      effect={effect}
                      style={{ fontSize: `${fontSize}px`, fontFamily: fontFamily }}
                    />
                  </div>
                </div>
              </div>

              {/* Code Section */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Code className="w-5 h-5 text-purple-400" />
                    <h2 className="text-xl font-semibold text-white">Code</h2>
                  </div>
                  <button
                    onClick={() => setShowCode(!showCode)}
                    className="px-4 py-2 rounded-lg border border-white/10 bg-slate-900/30 text-slate-300 hover:border-purple-500/50 hover:bg-slate-800/50 transition-all text-sm font-medium"
                  >
                    {showCode ? 'Hide Code' : 'Show Code'}
                  </button>
                </div>

                {showCode && (
                  <div className="relative rounded-2xl border border-white/10 bg-slate-900/90 backdrop-blur-xl overflow-hidden">
                    <div className="flex items-center justify-between px-6 py-3 border-b border-white/10 bg-slate-800/50">
                      <span className="text-sm text-slate-400 font-mono">React Component</span>
                      <button
                        onClick={copyCode}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 transition-all text-sm font-medium"
                      >
                        {copied ? (
                          <>
                            <Check className="w-4 h-4" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            Copy Code
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="p-6 overflow-x-auto">
                      <code className="text-sm text-slate-300 font-mono">
                        {codeSnippet}
                      </code>
                    </pre>
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT COLUMN - Controls & Effects */}
            <div className="space-y-8">
              {/* Rich Text Toolbar - Controls Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  <Sliders className="w-5 h-5 text-purple-400" />
                  <h2 className="text-xl font-semibold text-white">Text Controls</h2>
                </div>

                <div className="space-y-4">
                  {/* Text Input */}
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

                  {/* Font Family Selector */}
                  <label className="block">
                    <span className="text-sm font-medium text-slate-300 mb-2 flex items-center gap-2">
                      <Type className="w-4 h-4" />
                      Font Family
                    </span>
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
                  </label>

                  {/* Font Size */}
                  <label className="block">
                    <span className="text-sm font-medium text-slate-300 mb-2 flex items-center gap-2">
                      <Sliders className="w-4 h-4" />
                      Font Size ({fontSize}px)
                    </span>
                    <input
                      type="number"
                      min={20}
                      max={200}
                      value={fontSize}
                      onChange={(e) => setFontSize(Number(e.target.value))}
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-slate-900/50 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all backdrop-blur-xl"
                    />
                  </label>
                </div>
              </div>

              {/* Effects Grid */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="w-5 h-5 text-purple-400" />
                  <h2 className="text-xl font-semibold text-white">Available Effects</h2>
                </div>
                <div className="grid grid-cols-2 gap-3">
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
            </div>
          </div>
        </main>

      </div>
    </div>
  );
}
