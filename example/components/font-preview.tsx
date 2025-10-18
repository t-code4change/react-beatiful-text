"use client";

import { useEffect, useState } from "react";
import { useFontStore } from "@/lib/store";
import { NeonText } from "@/src/components/NeonText";
import { ShowGirlText } from "@/src/components/ShowGirlText";
import { GradientText } from "@/src/components/GradientText";
import { GlowingText } from "@/src/components/GlowingText";
import { SpotlightText } from "@/src/components/SpotlightText";
import { CurvedLoopText } from "@/src/components/CurvedLoopText";
import { FireText } from "@/src/components/FireText";
import { RetroText } from "@/src/components/RetroText";
import { GoldText } from "@/src/components/GoldText";
import { LuxuryText } from "@/src/components/LuxuryText";
import { BirthdayText } from "@/src/components/BirthdayText";
import { WomanDayText } from "@/src/components/WomanDayText";
import { TeacherDayText } from "@/src/components/TeacherDayText";
import { PartyText } from "@/src/components/PartyText";

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
    case "FireText":
      return <FireText text={settings.text} style={textStyle} />;
    case "RetroText":
      return <RetroText text={settings.text} style={textStyle} />;
    case "GoldText":
      return <GoldText text={settings.text} style={textStyle} />;
    case "LuxuryText":
      return <LuxuryText text={settings.text} style={textStyle} />;
    case "BirthdayText":
      return <BirthdayText text={settings.text} style={textStyle} />;
    case "WomanDayText":
      return <WomanDayText text={settings.text} style={textStyle} />;
    case "TeacherDayText":
      return <TeacherDayText text={settings.text} style={textStyle} />;
    case "PartyText":
      return <PartyText text={settings.text} style={textStyle} />;
    default:
      return (
        <div style={textStyle} className="text-white">
          {settings.text}
        </div>
      );
  }
}
