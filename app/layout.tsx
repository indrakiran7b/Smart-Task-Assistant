import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Smart Task Assistant - AI-Powered Task Management",
  description:
    "Manage your tasks efficiently with AI-powered insights, categorization, and duration estimates powered by Gemini AI.",
  generator: "v0.app",
  keywords: ["task management", "AI assistant", "productivity", "todo"],
  openGraph: {
    title: "Smart Task Assistant",
    description: "AI-powered task management for better productivity",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
