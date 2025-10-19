import "../styles/fire.css";
import React from "react";

export interface FireTextProps {
  text: string;
  style?: React.CSSProperties;
  className?: string;
  particleCount?: number;
}

export function FireText({
  text,
  style,
  className = "",
  particleCount = 12
}: FireTextProps) {
  // Generate random positions for fire particles
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    xPos: Math.random() * 100,
    xDrift: (Math.random() - 0.5) * 2,
  }));

  return (
    <div className={`fire-wrapper ${className}`} style={style}>
      {/* Fire glow effects */}
      <div className="fire-glow-bottom" />
      <div className="fire-glow-top" />

      {/* Main text with fire background */}
      <h1 className="fire-title">{text}</h1>

      {/* Fire particles around text */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="fire-particle"
          style={{
            '--x-pos': particle.xPos,
            '--x-drift': particle.xDrift,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
