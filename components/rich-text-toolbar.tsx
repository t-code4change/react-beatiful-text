"use client";

import { useFontStore } from "@/lib/store";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";

export function RichTextToolbar() {
  const { templates, selectedTemplate, setSelectedTemplate } = useFontStore();

  const [text, setText] = useState("HELLO FONT");
  const [fontSize, setFontSize] = useState(80);

  const handleFontChange = (fontId: string) => {
    const template = templates.find((t) => t.id === fontId);
    if (template) setSelectedTemplate(template);
  };

  useEffect(() => {
    localStorage.setItem("font-settings", JSON.stringify({ text, fontSize }));
  }, [text, fontSize]);

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 p-3 bg-background/60 backdrop-blur-md border rounded-lg w-full max-w-3xl">
      {/* chọn font */}
      <Select value={selectedTemplate?.id || ""} onValueChange={handleFontChange}>
        <SelectTrigger className="w-[160px]">
          <SelectValue placeholder="Chọn font" />
        </SelectTrigger>
        <SelectContent>
          {templates.map((t) => (
            <SelectItem key={t.id} value={t.id}>
              {t.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* nhập nội dung */}
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-[200px] bg-zinc-800 text-white"
        placeholder="Nhập nội dung..."
      />

      {/* kích thước chữ */}
      <Input
        type="number"
        min={20}
        max={200}
        value={fontSize}
        onChange={(e) => setFontSize(Number(e.target.value))}
        className="w-[80px] text-center bg-zinc-800 text-white"
      />
    </div>
  );
}
