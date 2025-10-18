import "../styles/retro.css";
import React from "react";

export interface RetroTextProps {
  text: string;
  style?: React.CSSProperties;
  className?: string;
}

export function RetroText({ text, style, className = "" }: RetroTextProps) {
  return (
    <div className={`retro-text-container ${className}`} style={style}>
      <span className="retro-text" data-text={text}>
        {text}
      </span>
    </div>
  );
}
