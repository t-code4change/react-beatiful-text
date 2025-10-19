import type React from "react"
import type { Metadata } from "next"
import { Be_Vietnam_Pro } from "next/font/google"
import { Suspense } from "react"
import { FontProvider } from "@/lib/store"
import "./globals.css"
import "@/styles/showgirl.css"
import "@/styles/neon.css"
import "@/styles/glowing.css"
import "@/styles/spotlight.css"
import '@/styles/gradient.css';
import '@/styles/curvedloop.css';

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["vietnamese", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-be-vietnam-pro",
})

export const metadata: Metadata = {
  title: "Font Template System",
  description: "Hệ thống quản lý và xem trước font mẫu với animation",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html>
      <body className={`font-sans ${beVietnamPro.variable}`}>
        <FontProvider>
          <Suspense fallback={null}>{children}</Suspense>
        </FontProvider>
      </body>
    </html>
  )
}
