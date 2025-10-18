"use client";

import { useEffect, useState } from "react";
import { useFontStore } from "@/lib/store";
import NeonText from "./font/NeonText";
import ShowGirlText from "./font/ShowGirlText";
import GradientText from "./font/GradientText";
import GlowingText from "./font/GlowingText";
import SpotlightText from "./font/SpotlightText";
import CurvedLoopText from "./font/CurvedLoopText";

export function FontPreview() {
  const { selectedTemplate } = useFontStore();
  const [settings, setSettings] = useState({
    text: "HELLO FONT",
    fontSize: 80,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const stored = localStorage.getItem("font-settings");
      if (stored) setSettings(JSON.parse(stored));
    }, 200);
    return () => clearInterval(interval);
  }, []);

  if (!selectedTemplate)
    return (
      <div className="h-full flex items-center justify-center text-gray-400 text-2xl">
        Chọn font để xem trước
      </div>
    );

  const textStyle: React.CSSProperties = {
    fontSize: `${settings.fontSize}px`,
    textAlign: "center",
  };

  switch (selectedTemplate.component) {
    case "NeonText":
      return <NeonText text={settings.text} style={textStyle} />;
    case "ShowGirlText":
      return <ShowGirlText text={settings.text} style={textStyle} />;
    case "GlowingText":
      return <GlowingText text={settings.text} style={textStyle} />;
    case "SpotlightText":
      return <SpotlightText text={settings.text} style={textStyle} />;
    case "GradientText":
      return <GradientText text={settings.text} style={textStyle} />;
    case "CurvedLoopText":
      return <CurvedLoopText text={settings.text} style={textStyle} />;
    default:
      return (
        <div style={textStyle} className="text-white">
          {settings.text}
        </div>
      );
  }
}
