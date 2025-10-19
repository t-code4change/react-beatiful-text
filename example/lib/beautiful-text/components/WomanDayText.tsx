import "../styles/womanday.css";
import React from "react";

export interface WomanDayTextProps {
  text: string;
  style?: React.CSSProperties;
  className?: string;
}

export function WomanDayText({ text, style, className = "" }: WomanDayTextProps) {
  return (
    <div className={`womanday-text-container ${className}`} style={style}>
      <span className="womanday-text">
        {text}
      </span>
      <div className="womanday-flowers">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="flower"
            style={{
              left: `${10 + i * 12}%`,
              animationDelay: `${i * 0.2}s`
            }}
          >
            ❀
          </div>
        ))}
      </div>
    </div>
  );
}
