import "@/styles/glowing.css";
import React from "react";

interface GlowingTextProps {
  text: string;
  style?: React.CSSProperties;
}

export default function GlowingText({ text, style }: GlowingTextProps) {
  const chars = text.split("");

  return (
    <div className="glow-container text-center" style={style}>
      {chars.map((char, i) => (
        <span
          key={i}
          className="glow-char"
          style={{
            animationDelay: `${(i / chars.length) * -2}s`,
            fontSize: style?.fontSize,
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
}
