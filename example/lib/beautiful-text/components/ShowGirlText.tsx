import React, { useEffect, useRef } from "react";
import "../styles/showgirl.css";

export interface ShowGirlTextProps {
  text: string;
  style?: React.CSSProperties;
  className?: string;
}

export function ShowGirlText({ text, style, className = "" }: ShowGirlTextProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const letters = text
      .split("")
      .map((ch) => `<span style="font-size:${style?.fontSize}">${ch}</span>`)
      .join("");
    ref.current.innerHTML = `<b>${letters}</b>`;
  }, [text]);

  return (
    <div className={`showgirl-wrapper ${className}`}>
      <div className="logo" ref={ref} style={style}></div>
    </div>
  );
}
