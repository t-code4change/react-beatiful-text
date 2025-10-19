import "../styles/birthday.css";
import React from "react";

export interface BirthdayTextProps {
  text: string;
  style?: React.CSSProperties;
  className?: string;
}

export function BirthdayText({ text, style, className = "" }: BirthdayTextProps) {
  return (
    <div className={`birthday-text-container ${className}`} style={style}>
      <span className="birthday-text">
        {text.split('').map((char, i) => (
          <span key={i} className="birthday-char" style={{ animationDelay: `${i * 0.1}s` }}>
            {char}
          </span>
        ))}
      </span>
      <div className="birthday-confetti">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="confetti"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              backgroundColor: ['#ff6b9d', '#c06c84', '#f67280', '#355c7d', '#6c5ce7'][i % 5]
            }}
          />
        ))}
      </div>
    </div>
  );
}
