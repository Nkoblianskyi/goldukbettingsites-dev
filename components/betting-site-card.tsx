"use client"

import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import type { BettingSite } from "@/lib/mock-data"

interface BettingSiteCardProps {
  site: BettingSite
  rank: number
}

export function BettingSiteCard({ site, rank }: BettingSiteCardProps) {
  const getPrimaryBadge = () => {
    if (site.isTopRating) return { text: "Gold Pick", color: "bg-accent text-accent-foreground" }
    if (site.isTopLine) return { text: "Best Choice", color: "bg-primary text-primary-foreground" }
    if (site.isPopular) return { text: "Popular", color: "bg-secondary text-secondary-foreground" }
    if (site.isTrending) return { text: "Trending", color: "bg-muted text-muted-foreground border border-border" }
    return null
  }

  const renderStars = (count: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${i < Math.floor(count) ? "fill-accent text-accent" : "fill-muted text-muted-foreground"}`}
        aria-hidden="true"
      />
    ))
  }

  const primaryBadge = getPrimaryBadge()
  const isFirst = rank === 1

  return (
    <a
      href={site.url}
      target="_blank"
      rel="noopener noreferrer nofollow sponsored"
      className={`block relative transition-all group hover:bg-muted/30 ${
        isFirst ? "bg-primary/4 border-l-4 border-l-primary" : "border-l-4 border-l-transparent hover:border-l-primary/40"
      }`}
      aria-label={`Visit ${site.name} — ${site.bonus}`}
    >
      {/* Badge strip */}
      {primaryBadge && (
        <div className="absolute top-2 left-4">
          <span className={`${primaryBadge.color} px-2.5 py-1 text-[9px] font-mono font-semibold uppercase tracking-[0.18em] rounded`}>
            {primaryBadge.text}
          </span>
        </div>
      )}

      {/* Desktop layout */}
      <div className="hidden md:grid md:grid-cols-[44px_140px_1fr_110px_148px] md:items-center gap-0 px-5 py-4 pt-8">

        {/* Rank */}
        <div
          className={`w-8 h-8 flex items-center justify-center font-heading font-bold text-base rounded flex-shrink-0 ${
            isFirst ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
          }`}
          aria-label={`Rank ${rank}`}
        >
          {rank}
        </div>

        {/* Logo */}
        <div className="flex-shrink-0 h-12 flex items-center justify-center px-3 overflow-hidden">
          <img
            src={site.logo || "/placeholder.svg"}
            alt={`${site.name} logo`}
            className="max-h-9 max-w-full object-contain"
          />
        </div>

        {/* Bonus */}
        <div className="flex flex-col items-center justify-center text-center px-4">
          <p className="font-heading font-bold text-xl md:text-2xl text-primary leading-tight">
            {site.bonus}
          </p>
          <div className="flex gap-2 mt-1.5 flex-wrap justify-center">
            {site.features.slice(0, 2).map((f, i) => (
              <span
                key={i}
                className="font-mono text-[9px] text-muted-foreground uppercase tracking-wide bg-muted px-1.5 py-0.5 rounded"
              >
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* Rating */}
        <div className="text-center flex-shrink-0">
          <div className="font-heading font-bold text-3xl text-secondary leading-none">
            {site.rating.toFixed(1)}
          </div>
          <div className="font-mono text-[9px] text-muted-foreground">/&nbsp;10</div>
          <div className="flex items-center justify-center gap-0.5 mt-1.5" aria-label={`${site.stars} out of 5 stars`}>
            {renderStars(site.stars)}
          </div>
        </div>

        {/* CTA */}
        <div className="flex-shrink-0 text-center pl-4">
          <Button
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono uppercase tracking-widest text-[10px] font-semibold px-4 py-2.5 h-auto w-full rounded-lg"
            aria-label={`Visit ${site.name}`}
          >
            Claim Offer
          </Button>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden px-4 py-3 pt-8">
        <div className="flex items-center gap-3 mb-3">
          <div
            className={`w-7 h-7 flex items-center justify-center font-heading font-bold text-sm rounded flex-shrink-0 ${
              isFirst ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
            }`}
          >
            {rank}
          </div>
          <div className="flex-shrink-0 h-9 flex items-center justify-center px-2">
            <Image
              src={site.logo || "/placeholder.svg"}
              alt={`${site.name} logo`}
              width={90}
              height={32}
              className="h-6 w-auto object-contain"
            />
          </div>
          <div className="flex-1 text-right">
            <div className="font-heading font-bold text-2xl text-secondary leading-none">{site.rating.toFixed(1)}</div>
            <div className="flex justify-end gap-0.5 mt-0.5" aria-label={`${site.stars} out of 5 stars`}>
              {renderStars(site.stars)}
            </div>
          </div>
        </div>

        <div className="text-center py-2 mb-3">
          <p className="font-heading font-bold text-xl text-primary leading-tight">{site.bonus}</p>
        </div>

        <Button
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-mono uppercase tracking-widest text-[10px] font-semibold h-10 rounded-lg"
          aria-label={`Visit ${site.name}`}
        >
          Claim Offer
        </Button>
      </div>

      {/* Disclaimer */}
      <div className="px-4 md:px-5 pb-2 border-t border-border/60">
        <p className="text-muted-foreground/70 text-[9px] pt-1.5 font-mono">
          <span className="text-destructive font-semibold">18+</span> | {site.terms}
        </p>
      </div>
    </a>
  )
}
