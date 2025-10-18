import React from "react";
import { NeonText } from "./NeonText";
import { GradientText } from "./GradientText";
import { ShowGirlText } from "./ShowGirlText";
import { GlowingText } from "./GlowingText";
import { SpotlightText } from "./SpotlightText";
import { CurvedLoopText } from "./CurvedLoopText";
import { FireText } from "./FireText";
import { RetroText } from "./RetroText";
import { GoldText } from "./GoldText";
import { LuxuryText } from "./LuxuryText";
import { BirthdayText } from "./BirthdayText";
import { WomanDayText } from "./WomanDayText";
import { TeacherDayText } from "./TeacherDayText";
import { PartyText } from "./PartyText";

export type EffectName =
  | "neon"
  | "gradient"
  | "showgirl"
  | "glowing"
  | "spotlight"
  | "curved"
  | "fire"
  | "retro"
  | "gold"
  | "luxury"
  | "birthday"
  | "womanday"
  | "teacherday"
  | "party";

export interface BeautifulTextProps {
  text: string;
  effect: EffectName;
  style?: React.CSSProperties;
  className?: string;
  // GradientText specific props
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
  // CurvedLoopText specific props
  marqueeText?: string;
  speed?: number;
  curveAmount?: number;
  direction?: "left" | "right";
  interactive?: boolean;
}

export function BeautifulText({
  text = "LUCK4YOU",
  effect,
  style,
  className,
  colors,
  animationSpeed,
  showBorder,
  marqueeText,
  speed,
  curveAmount,
  direction,
  interactive,
}: BeautifulTextProps) {
  const commonProps = { text, style, className };

  switch (effect) {
    case "neon":
      return <NeonText {...commonProps} />;
    case "gradient":
      return (
        <GradientText
          {...commonProps}
          colors={colors}
          animationSpeed={animationSpeed}
          showBorder={showBorder}
        />
      );
    case "showgirl":
      return <ShowGirlText {...commonProps} />;
    case "glowing":
      return <GlowingText {...commonProps} />;
    case "spotlight":
      return <SpotlightText {...commonProps} />;
    case "curved":
      return (
        <CurvedLoopText
          {...commonProps}
          marqueeText={marqueeText}
          speed={speed}
          curveAmount={curveAmount}
          direction={direction}
          interactive={interactive}
        />
      );
    case "fire":
      return <FireText {...commonProps} />;
    case "retro":
      return <RetroText {...commonProps} />;
    case "gold":
      return <GoldText {...commonProps} />;
    case "luxury":
      return <LuxuryText {...commonProps} />;
    case "birthday":
      return <BirthdayText {...commonProps} />;
    case "womanday":
      return <WomanDayText {...commonProps} />;
    case "teacherday":
      return <TeacherDayText {...commonProps} />;
    case "party":
      return <PartyText {...commonProps} />;
    default:
      return <div {...commonProps}>{text}</div>;
  }
}
