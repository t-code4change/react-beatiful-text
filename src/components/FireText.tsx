import "../styles/fire.css";
import React from "react";

export interface FireTextProps {
  text: string;
  style?: React.CSSProperties;
  className?: string;
}

export function FireText({ text, style, className = "" }: FireTextProps) {
  return (
    <div className={`fire-text-container ${className}`} style={style}>
      <span className="fire-text" data-text={text}>
        {text}
      </span>
    </div>
  );
}
