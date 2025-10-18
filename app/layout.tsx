import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Be_Vietnam_Pro } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
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
    <html lang="vi" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${beVietnamPro.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
