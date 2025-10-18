import "@/styles/showgirl.css";
import { useEffect, useRef } from "react";

interface ShowGirlTextProps {
  text: string;
  style?: React.CSSProperties;
}

export default function ShowGirlText({ text, style }: ShowGirlTextProps) {
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
    <div className="showgirl-wrapper">
      <div className="logo" ref={ref} style={style}></div>
    </div>
  );  
}
