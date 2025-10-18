import React, { FC } from 'react';

type EffectName = "neon" | "gradient" | "showgirl" | "glowing" | "spotlight" | "curved" | "fire" | "retro" | "gold" | "luxury" | "birthday" | "womanday" | "teacherday" | "party";
interface BeautifulTextProps {
    text: string;
    effect: EffectName;
    style?: React.CSSProperties;
    className?: string;
    colors?: string[];
    animationSpeed?: number;
    showBorder?: boolean;
    marqueeText?: string;
    speed?: number;
    curveAmount?: number;
    direction?: "left" | "right";
    interactive?: boolean;
}
declare function BeautifulText({ text, effect, style, className, colors, animationSpeed, showBorder, marqueeText, speed, curveAmount, direction, interactive, }: BeautifulTextProps): React.JSX.Element;

interface EffectInfo {
    name: EffectName;
    label: string;
    description: string;
    category: "basic" | "special" | "event";
}
declare const EFFECTS: EffectInfo[];
/**
 * Get all available effect names
 * @returns Array of all effect names
 */
declare function getAllEffects(): EffectName[];
/**
 * Get all effects with their information
 * @returns Array of effect information objects
 */
declare function getAllEffectsInfo(): EffectInfo[];
/**
 * Get effects by category
 * @param category - The category to filter by
 * @returns Array of effects in the specified category
 */
declare function getEffectsByCategory(category: "basic" | "special" | "event"): EffectInfo[];
/**
 * Get effect information by name
 * @param name - The effect name
 * @returns Effect information or undefined if not found
 */
declare function getEffectInfo(name: EffectName): EffectInfo | undefined;

interface NeonTextProps {
    text: string;
    style?: React.CSSProperties;
    className?: string;
}
declare function NeonText({ text, style, className }: NeonTextProps): React.JSX.Element;

interface GradientTextProps {
    text: string;
    style?: React.CSSProperties;
    className?: string;
    colors?: string[];
    animationSpeed?: number;
    showBorder?: boolean;
}
declare function GradientText({ text, style, className, colors, animationSpeed, showBorder, }: GradientTextProps): React.JSX.Element;

interface ShowGirlTextProps {
    text: string;
    style?: React.CSSProperties;
    className?: string;
}
declare function ShowGirlText({ text, style, className }: ShowGirlTextProps): React.JSX.Element;

interface GlowingTextProps {
    text: string;
    style?: React.CSSProperties;
    className?: string;
}
declare function GlowingText({ text, style, className }: GlowingTextProps): React.JSX.Element;

interface SpotlightTextProps {
    text: string;
    style?: React.CSSProperties;
    className?: string;
}
declare function SpotlightText({ text, style, className }: SpotlightTextProps): React.JSX.Element;

interface CurvedLoopTextProps {
    text: string;
    marqueeText?: string;
    speed?: number;
    className?: string;
    curveAmount?: number;
    direction?: 'left' | 'right';
    interactive?: boolean;
    style?: React.CSSProperties;
}
declare const CurvedLoopText: FC<CurvedLoopTextProps>;

interface FireTextProps {
    text: string;
    style?: React.CSSProperties;
    className?: string;
}
declare function FireText({ text, style, className }: FireTextProps): React.JSX.Element;

interface RetroTextProps {
    text: string;
    style?: React.CSSProperties;
    className?: string;
}
declare function RetroText({ text, style, className }: RetroTextProps): React.JSX.Element;

interface GoldTextProps {
    text: string;
    style?: React.CSSProperties;
    className?: string;
}
declare function GoldText({ text, style, className }: GoldTextProps): React.JSX.Element;

interface LuxuryTextProps {
    text: string;
    style?: React.CSSProperties;
    className?: string;
}
declare function LuxuryText({ text, style, className }: LuxuryTextProps): React.JSX.Element;

interface BirthdayTextProps {
    text: string;
    style?: React.CSSProperties;
    className?: string;
}
declare function BirthdayText({ text, style, className }: BirthdayTextProps): React.JSX.Element;

interface WomanDayTextProps {
    text: string;
    style?: React.CSSProperties;
    className?: string;
}
declare function WomanDayText({ text, style, className }: WomanDayTextProps): React.JSX.Element;

interface TeacherDayTextProps {
    text: string;
    style?: React.CSSProperties;
    className?: string;
}
declare function TeacherDayText({ text, style, className }: TeacherDayTextProps): React.JSX.Element;

interface PartyTextProps {
    text: string;
    style?: React.CSSProperties;
    className?: string;
}
declare function PartyText({ text, style, className }: PartyTextProps): React.JSX.Element;

export { BeautifulText, type BeautifulTextProps, BirthdayText, type BirthdayTextProps, CurvedLoopText, type CurvedLoopTextProps, EFFECTS, type EffectInfo, type EffectName, FireText, type FireTextProps, GlowingText, type GlowingTextProps, GoldText, type GoldTextProps, GradientText, type GradientTextProps, LuxuryText, type LuxuryTextProps, NeonText, type NeonTextProps, PartyText, type PartyTextProps, RetroText, type RetroTextProps, ShowGirlText, type ShowGirlTextProps, SpotlightText, type SpotlightTextProps, TeacherDayText, type TeacherDayTextProps, WomanDayText, type WomanDayTextProps, getAllEffects, getAllEffectsInfo, getEffectInfo, getEffectsByCategory };
