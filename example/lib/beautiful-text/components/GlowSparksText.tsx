import "../styles/glowsparks.css";
import React, { useEffect, useRef } from "react";

export interface GlowSparksTextProps {
  text: string;
  style?: React.CSSProperties;
  className?: string;
  fontSize?: number;
}

interface Particle {
  x: number;
  y: number;
  hsl: { h: number; s: number; l: number };
  si: number;
  s: number;
  l: number;
  mx: number;
  my: number;
  active: boolean;
  isFirework?: boolean;
  fireworkDelay?: number;
}

interface MaskPoint {
  x: number;
  y: number;
  o: number;
  t: number;
}

interface LetterMask {
  hsl: { h: number; s: number; l: number };
  points: MaskPoint[];
}

export function GlowSparksText({
  text,
  style,
  className = "",
  fontSize = 40,
}: GlowSparksTextProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(null);
  const particlesRef = useRef<Particle[]>([]);
  const letterMasksRef = useRef<LetterMask[]>([]);
  const tickRef = useRef(0);
  const opaRef = useRef(1);
  const fireworkTimerRef = useRef(0);

  // Predefined colors for each letter - vibrant and bright
  const letterColors = [
    { h: 197, s: 100, l: 65 },  // Bright Cyan
    { h: 0, s: 100, l: 60 },    // Bright Red
    { h: 45, s: 100, l: 60 },   // Bright Orange
    { h: 120, s: 100, l: 55 },  // Bright Green
    { h: 280, s: 100, l: 65 },  // Bright Purple
    { h: 60, s: 100, l: 60 },   // Bright Yellow
    { h: 300, s: 100, l: 65 },  // Bright Magenta
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    const buildTextMask = (customFontSize: number): LetterMask[] => {
      const letterMasks: LetterMask[] = [];
      const width = 400;
      const height = 200;

      const tempCanvas = document.createElement("canvas");
      const tempCtx = tempCanvas.getContext("2d");
      if (!tempCtx) return letterMasks;

      tempCanvas.width = width;
      tempCanvas.height = height;

      // Scale fontSize to canvas - use customFontSize as base
      const scaledFontSize = Math.max(20, Math.min(180, customFontSize * 2));
      tempCtx.font = `bold ${scaledFontSize}px Arial`;

      // Measure total text width
      const totalMetrics = tempCtx.measureText(text);
      const totalWidth = totalMetrics.width;
      let currentX = (width - totalWidth) / 2;
      const y = height / 2 + scaledFontSize * 0.35;

      // Process each letter separately
      text.split('').forEach((letter, index) => {
        tempCtx.clearRect(0, 0, width, height);
        tempCtx.fillStyle = "#000";
        tempCtx.fillText(letter, currentX, y);

        const letterWidth = tempCtx.measureText(letter).width;
        const imageData = tempCtx.getImageData(0, 0, width, height);
        const data = imageData.data;

        const points: MaskPoint[] = [];
        for (let i = 0; i < width * height; i++) {
          if (data[i * 4 + 3] > 128) {
            points.push({
              x: (i % width) / width,
              y: Math.floor(i / width) / height,
              o: Math.random(),
              t: Math.random(),
            });
          }
        }

        if (points.length > 0) {
          letterMasks.push({
            hsl: letterColors[index % letterColors.length],
            points: points,
          });
        }

        currentX += letterWidth;
      });

      return letterMasks;
    };

    const createParticles = (count: number) => {
      const letterMasks = letterMasksRef.current;
      if (letterMasks.length === 0) return;

      for (let i = 0; i < count; i++) {
        // Pick random letter mask
        const letterMask = letterMasks[Math.floor(Math.random() * letterMasks.length)];
        const maskElement = letterMask.points[Math.floor(Math.random() * letterMask.points.length)];

        const r1 = Math.random();
        const r2 = Math.random();
        const r3 = Math.random();
        const rad = r3 * Math.PI * 2;

        const speed = 0.003 + (r1 + r2) / 20;

        particlesRef.current.push({
          x: maskElement.x + (-0.5 + r1) / 300,
          y: maskElement.y + (-0.5 + r2) / 300,
          hsl: letterMask.hsl,
          si: 1 + Math.floor(Math.random() * 4),
          s: speed,
          l: 0,
          mx: Math.cos(rad) * (speed / (r1 < 0.05 ? 10 : 400)),
          my: Math.sin(rad) * (speed / (r1 < 0.05 ? 10 : 400)),
          active: true,
        });
      }
    };

    const createFirework = () => {
      const x = 0.2 + Math.random() * 0.6;
      const y = 0.3 + Math.random() * 0.4;
      const color = letterColors[Math.floor(Math.random() * letterColors.length)];
      const particleCount = 50;

      for (let i = 0; i < particleCount; i++) {
        const angle = (i / particleCount) * Math.PI * 2;
        const speed = 0.01 + Math.random() * 0.01;

        particlesRef.current.push({
          x: x,
          y: y,
          hsl: color,
          si: 2 + Math.floor(Math.random() * 3),
          s: 0.005,
          l: 0,
          mx: Math.cos(angle) * speed,
          my: Math.sin(angle) * speed - 0.002, // Add gravity
          active: true,
          isFirework: true,
        });
      }
    };

    const drawStatic = () => {
      const letterMasks = letterMasksRef.current;
      const step = 0.01;

      letterMasks.forEach((letterMask) => {
        letterMask.points.forEach((pos, i) => {
          const opa =
            ((1 +
              Math.cos(pos.x * 5 * pos.y * 5 + tickRef.current / 10)) /
              2) *
            opaRef.current *
            pos.t *
            0.5;

          ctx.fillStyle = `hsla(${letterMask.hsl.h}, ${letterMask.hsl.s}%, ${letterMask.hsl.l}%, ${opa})`;
          ctx.fillRect(
            pos.x * canvas.width,
            pos.y * canvas.height,
            canvas.width / 150,
            canvas.width / 150
          );

          if (i % 2 === 0) return;

          pos.o += step;
          const glowOpa = Math.max(0, Math.sin(pos.o * Math.PI * 2));
          const padding = glowOpa * (canvas.width / 200);

          ctx.fillStyle = `hsla(${letterMask.hsl.h}, ${letterMask.hsl.s}%, ${letterMask.hsl.l}%, ${opaRef.current * glowOpa * 0.2})`;

          if (pos.t < 0.5) {
            ctx.beginPath();
            ctx.arc(
              pos.x * canvas.width,
              pos.y * canvas.height,
              canvas.width / 500 + padding,
              0,
              Math.PI * 2
            );
            ctx.fill();
          } else {
            ctx.fillRect(
              pos.x * canvas.width - padding,
              pos.y * canvas.height - padding,
              canvas.width / 150 + padding * 2,
              canvas.width / 150 + padding * 2
            );
          }
        });
      });
    };

    const drawParticles = () => {
      particlesRef.current = particlesRef.current.filter((particle) => {
        if (!particle.active || particle.l >= 1) {
          return false;
        }

        particle.l += particle.s;
        particle.x += particle.mx;
        particle.y += particle.my;

        // Add gravity for fireworks
        if (particle.isFirework) {
          particle.my += 0.0002; // Gravity effect
        }

        const alpha =
          opaRef.current * Math.sin(particle.l * Math.PI);

        ctx.fillStyle = `hsla(${particle.hsl.h}, ${particle.hsl.s}%, ${particle.hsl.l}%, ${alpha})`;

        // Draw firework particles as glowing circles
        if (particle.isFirework) {
          ctx.beginPath();
          ctx.arc(
            particle.x * canvas.width,
            particle.y * canvas.height,
            particle.si,
            0,
            Math.PI * 2
          );
          ctx.fill();
        } else {
          ctx.fillRect(
            particle.x * canvas.width,
            particle.y * canvas.height,
            particle.si,
            particle.si
          );
        }

        return true;
      });
    };

    const animate = () => {
      tickRef.current++;
      fireworkTimerRef.current++;

      // Create firework every 120 frames (approximately 2 seconds at 60fps)
      if (fireworkTimerRef.current >= 120) {
        createFirework();
        fireworkTimerRef.current = 0;
      }

      // Clear canvas
      ctx.fillStyle = "transparent";
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Use lighter composite for glow effect
      ctx.globalCompositeOperation = "lighter";

      drawStatic();
      createParticles(50);
      drawParticles();

      ctx.globalCompositeOperation = "source-over";

      animationRef.current = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);

    letterMasksRef.current = buildTextMask(fontSize);
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [text, fontSize, letterColors]);

  return (
    <div
      ref={containerRef}
      className={`glowsparks-container ${className}`}
      style={{
        ...style,
        minHeight: `${Math.max(100, fontSize * 2.5)}px`,
      }}
    >
      <canvas ref={canvasRef} className="glowsparks-canvas" />
    </div>
  );
}
