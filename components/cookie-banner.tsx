"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        const consent = localStorage.getItem("cookieConsent")
        if (!consent) setIsVisible(true)
      }
    } catch {
      setIsVisible(true)
    }
  }, [])

  const handleChoice = (choice: "accepted" | "rejected") => {
    try {
      localStorage.setItem("cookieConsent", choice)
      localStorage.setItem("cookieConsentDate", new Date().toISOString())
    } catch {
      // silent
    }
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-secondary text-secondary-foreground border-t border-white/10 px-4 py-3 z-50">
      <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="text-xs text-secondary-foreground/70 leading-relaxed flex-1">
          This site uses cookies to improve your experience. See our{" "}
          <Link href="/cookie-policy" className="text-primary underline underline-offset-2">
            Cookie Policy
          </Link>{" "}
          for details.
        </p>
        <div className="flex items-center gap-2 flex-shrink-0">
          <Button
            onClick={() => handleChoice("rejected")}
            variant="outline"
            size="sm"
            className="border-white/20 text-secondary-foreground bg-transparent hover:bg-white/10 text-xs uppercase tracking-wide font-heading font-700 h-7 px-3"
          >
            Essential Only
          </Button>
          <Button
            onClick={() => handleChoice("accepted")}
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs uppercase tracking-wide font-heading font-700 h-7 px-3"
          >
            Accept All
          </Button>
        </div>
      </div>
    </div>
  )
}
