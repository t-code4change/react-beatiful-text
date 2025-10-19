import "../styles/gold.css";
import React from "react";

export interface GoldTextProps {
  text: string;
  style?: React.CSSProperties;
  className?: string;
}

export function GoldText({ text, style, className = "" }: GoldTextProps) {
  return (
    <div className={`gold-text-container ${className}`} style={style}>
      <span className="gold-text">
        {text}
      </span>
    </div>
  );
}
