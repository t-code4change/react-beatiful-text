import "../styles/glowing.css";
import React from "react";

export interface GlowingTextProps {
  text: string;
  style?: React.CSSProperties;
  className?: string;
}

export function GlowingText({ text, style, className = "" }: GlowingTextProps) {
  const chars = text.split("");

  return (
    <div className={`glow-container text-center ${className}`} style={style}>
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
