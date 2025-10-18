import React, { useEffect, useRef } from "react";
import "../styles/neon.css";

export interface NeonTextProps {
  text: string;
  style?: React.CSSProperties;
  className?: string;
}

export function NeonText({ text, style, className = "" }: NeonTextProps) {
  const ref = useRef<HTMLHeadingElement>(null);

  const flickerLetter = (letter: string) =>
    `<span style="animation: text-flicker-in-glow ${Math.random() * 4}s linear both;">${letter}</span>`;

  const colorLetter = (letter: string) =>
    `<span style="color: hsla(${Math.random() * 360}, 100%, 80%, 1);">${letter}</span>`;

  const flickerAndColorText = (text: string) =>
    text.split("").map(flickerLetter).map(colorLetter).join("");

  const neonGlory = () => {
    if (!ref.current) return;
    ref.current.innerHTML = flickerAndColorText(text);
  };

  useEffect(() => {
    neonGlory();
  }, [text]);

  return (
    <h1
      ref={ref}
      style={style}
      className={`cursor-pointer leading-none text-center ${className}`}
      onClick={neonGlory}
    >
      {text}
    </h1>
  );
}
