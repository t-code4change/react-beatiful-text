import "../styles/spotlight.css";
import React from "react";

export interface SpotlightTextProps {
  text: string;
  style?: React.CSSProperties;
  className?: string;
}

export function SpotlightText({ text, style, className = "" }: SpotlightTextProps) {
  return (
    <div className={`neon text-center ${className}`} style={{ fontSize: style?.fontSize }}>
      <span className="text" data-text={text}>
        {text}
      </span>
      <span className="gradient" />
      <span className="spotlight" />
    </div>
  );
}
