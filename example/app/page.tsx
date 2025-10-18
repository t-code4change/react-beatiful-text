"use client";

import { FontPreview } from "@/components/font-preview";
import { RichTextToolbar } from "@/components/rich-text-toolbar";

export default function Home() {
  return (
    <main className="h-screen w-screen flex flex-col bg-black text-white">
      <section className="w-full flex items-center justify-center p-3 border-b border-white/10 bg-zinc-900/80 backdrop-blur-sm">
        <RichTextToolbar />
      </section>

      <section className="flex-1 flex items-center justify-center bg-zinc-950">
        <FontPreview />
      </section>
    </main>
  );
}
