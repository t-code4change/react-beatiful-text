import "@/styles/spotlight.css";
import React from "react";

interface SpotlightTextProps {
  text: string;
  style?: React.CSSProperties;
}

export default function SpotlightText({ text, style }: SpotlightTextProps) {
  return (
    <div className="neon text-center" style={{ fontSize: style?.fontSize }}>
      <span className="text" data-text={text}>
        {text}
      </span>
      <span className="gradient" />
      <span className="spotlight" />
    </div>
  );
}
