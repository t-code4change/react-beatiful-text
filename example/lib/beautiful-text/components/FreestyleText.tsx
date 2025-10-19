import "../styles/freestyle.css";
import React, { useEffect, useRef, useMemo } from "react";

export interface FreestyleTextProps {
  text: string;
  style?: React.CSSProperties;
  className?: string;
}

export function FreestyleText({ text, style, className = "" }: FreestyleTextProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const patternRef = useRef<SVGPatternElement>(null);

  // Generate a unique ID once per component instance
  const patternId = useMemo(() => `slidePattern-${Math.random().toString(36).substr(2, 9)}`, []);

  useEffect(() => {
    if (!patternRef.current) return;

    const pattern = patternRef.current;
    const colors = ["#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF", "#FF922B", "#845EC2"];
    const columns = 20;
    const segmentHeight = 50;

    // Clear existing pattern
    pattern.innerHTML = "";

    // Create animated rectangles
    for (let i = 0; i < columns; i++) {
      const x = i * 50;
      for (let j = 0; j < 8; j++) {
        const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute("x", String(x));
        rect.setAttribute("y", String(j * segmentHeight));
        rect.setAttribute("width", "50");
        rect.setAttribute("height", String(segmentHeight));
        rect.setAttribute("fill", colors[Math.floor(Math.random() * colors.length)]);

        // Add CSS animation with random delay
        rect.style.animation = `freestyle-bounce ${1 + Math.random() * 0.5}s ease-in-out infinite alternate`;
        rect.style.animationDelay = `${Math.random() * 1}s`;
        rect.style.transformOrigin = "center";

        pattern.appendChild(rect);
      }
    }
  }, [text]);

  return (
    <div className={`freestyle-container ${className}`} style={style}>
      <svg
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 200"
        className="freestyle-svg"
      >
        <defs>
          <pattern
            ref={patternRef}
            id={patternId}
            patternUnits="userSpaceOnUse"
            width="1000"
            height="200"
          />
        </defs>
        <text
          x="50"
          y="150"
          fontSize="160"
          fill={`url(#${patternId})`}
          className="freestyle-text"
        >
          {text}
        </text>
      </svg>
    </div>
  );
}
