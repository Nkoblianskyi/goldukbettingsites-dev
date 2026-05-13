"use client"

import { Button } from "@/components/ui/button"
import { Star, X } from "lucide-react"
import { bettingSites } from "@/lib/mock-data"
import { useEffect, useState } from "react"

export function TopSitesModal() {
  const [isOpen, setIsOpen] = useState(false)
  const topSite = bettingSites[0]

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 9000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset"
    return () => { document.body.style.overflow = "unset" }
  }, [isOpen])

  if (!isOpen || !topSite) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] p-4">
      <div className="bg-card border border-border w-full max-w-xs relative">
        {/* Header */}
        <div className="bg-secondary px-4 py-3 flex items-center justify-between">
          <span className="font-heading font-700 text-sm uppercase tracking-wide text-secondary-foreground">
            Our Top Pick
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-secondary-foreground/60 hover:text-secondary-foreground p-1 transition-colors"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          <div className="border border-border p-3 flex items-center justify-center bg-muted">
            <img
              src={topSite.logo || "/placeholder.svg"}
              alt="Top operator"
              className="h-24 w-auto object-contain"
            />
          </div>

          <div className="border-l-4 border-primary bg-secondary px-3 py-2.5 flex flex-col items-center text-center">
            <div className="text-[10px] uppercase tracking-widest text-white/60 mb-1">Welcome Offer</div>
            <p className="text-accent font-heading font-bold text-base leading-snug">{topSite.bonus}</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < topSite.stars ? "text-primary fill-primary" : "text-muted"}`} />
              ))}
            </div>
            <span className="font-heading font-700 text-2xl text-primary">
              {topSite.rating.toFixed(1)}<span className="text-xs text-muted-foreground font-sans font-normal">/10</span>
            </span>
          </div>

          <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-700 uppercase tracking-wide text-xs h-10">
            <a href={topSite.url} target="_blank" rel="noopener noreferrer nofollow sponsored">
              Visit Site
            </a>
          </Button>

          <p className="text-center text-muted-foreground text-[10px] uppercase tracking-wide">
            <span className="text-destructive font-semibold">18+</span> | Responsible Gambling | T&Cs Apply
          </p>
        </div>
      </div>
    </div>
  )
}
