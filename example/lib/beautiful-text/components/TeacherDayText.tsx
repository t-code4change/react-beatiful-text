import "../styles/teacherday.css";
import React from "react";

export interface TeacherDayTextProps {
  text: string;
  style?: React.CSSProperties;
  className?: string;
}

export function TeacherDayText({ text, style, className = "" }: TeacherDayTextProps) {
  return (
    <div className={`teacherday-text-container ${className}`} style={style}>
      <span className="teacherday-text">
        {text}
      </span>
      <div className="teacherday-decorations">
        <div className="book">📚</div>
        <div className="apple">🍎</div>
        <div className="star star-1">⭐</div>
        <div className="star star-2">⭐</div>
        <div className="star star-3">⭐</div>
      </div>
    </div>
  );
}
