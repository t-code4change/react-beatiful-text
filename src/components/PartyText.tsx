import "../styles/party.css";
import React from "react";

export interface PartyTextProps {
  text: string;
  style?: React.CSSProperties;
  className?: string;
}

export function PartyText({ text, style, className = "" }: PartyTextProps) {
  return (
    <div className={`party-text-container ${className}`} style={style}>
      <span className="party-text">
        {text.split('').map((char, i) => (
          <span
            key={i}
            className="party-char"
            style={{
              animationDelay: `${i * 0.05}s`
            }}
          >
            {char}
          </span>
        ))}
      </span>
      <div className="party-lights">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="light"
            style={{
              left: `${(i / 15) * 100}%`,
              animationDelay: `${i * 0.1}s`,
              backgroundColor: ['#ff0080', '#00ff80', '#0080ff', '#ff8000', '#ff0080'][i % 5]
            }}
          />
        ))}
      </div>
      <div className="party-sparkles">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            ✨
          </div>
        ))}
      </div>
    </div>
  );
}
