import "@/styles/gradient.css";
import React from "react";

interface GradientTextProps {
  text: string;
  style?: React.CSSProperties;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
}

export default function GradientText({
  text,
  style,
  //colors = ["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"],
  colors = ["#40FFAA", "#4079FF", "#FFE740", "#FF40C0", "#FF7A00"],
  animationSpeed = 2,
  showBorder = false,
}: GradientTextProps) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    ...(style || {}),
  };

  return (
    <div className="animated-gradient-text" style={style}>
      {showBorder && <div className="gradient-overlay" style={gradientStyle}></div>}
      <div className="text-content" style={gradientStyle}>
        {text}
      </div>
    </div>
  );
}
