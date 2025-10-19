import "../styles/spotlight.css";
import React from "react";

export interface SpotlightTextProps {
  text: string;
  style?: React.CSSProperties;
  className?: string;
}

export function SpotlightText({ text, style, className = "" }: SpotlightTextProps) {
  return (
    <div className={`spotlight-neon ${className}`} style={style}>
      <span className="spotlight-text" data-text={text}>
        {text}
      </span>
      <span className="spotlight-overlay" />
    </div>
  );
}
