import type React from "react"
import type { Metadata } from "next"
import { Inter, Oswald, Barlow_Condensed } from "next/font/google"
import "./globals.css"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { TopSitesModal } from "@/components/top-sites-modal"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
})

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
})

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
})

export const metadata: Metadata = {
  title: "Gold UK Betting Sites - Best UK Bookmakers 2026",
  description:
    "Independent ranking of the best UKGC-licensed betting sites in the United Kingdom. Expert reviews, welcome offers, and unbiased ratings for UK bettors. goldukbettingsites.com",
  robots: "index, follow",
  referrer: "strict-origin-when-cross-origin",
  other: {
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "X-XSS-Protection": "1; mode=block",
  },
}

export const viewport = {
  themeColor: "#1a5c35",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} ${barlow.variable}`}
    >
      <body className="font-sans antialiased">
        <div id="page-root" className="min-h-screen w-full">
          {children}
          <Footer />
          <CookieBanner />
          <TopSitesModal />
        </div>
      </body>
    </html>
  )
}
