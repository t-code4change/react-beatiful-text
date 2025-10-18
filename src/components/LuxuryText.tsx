import "../styles/luxury.css";
import React from "react";

export interface LuxuryTextProps {
  text: string;
  style?: React.CSSProperties;
  className?: string;
}

export function LuxuryText({ text, style, className = "" }: LuxuryTextProps) {
  return (
    <div className={`luxury-text-container ${className}`} style={style}>
      <span className="luxury-text">
        {text}
      </span>
    </div>
  );
}
