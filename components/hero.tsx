import { ShieldCheck, Star, RefreshCw } from "lucide-react"

function getRatingDate() {
  return new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

export function Hero() {
  return (
    <section className="relative w-full max-h-[250px] md:max-h-[400px] flex flex-col justify-center items-center overflow-hidden px-4 py-6 md:py-10">

      {/* Subtle diagonal tint */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(135deg, rgba(34,197,94,0.07) 0%, transparent 55%, rgba(29,78,216,0.09) 100%)",
        }}
      />

      {/* Content column */}
      <div className="relative z-10 w-full max-w-[1000px] mx-auto flex flex-col items-start">

        {/* Eyebrow pills */}
        <div className="flex flex-wrap items-center gap-2 mb-3 md:mb-4">
          <span className="inline-flex items-center gap-1.5 bg-primary/15 border border-primary/40 text-primary font-mono text-[9px] md:text-[10px] font-bold uppercase tracking-[0.18em] px-2.5 py-1 rounded-full">
            <ShieldCheck className="w-3 h-3" aria-hidden="true" />
            UKGC Licensed Only
          </span>
          <span className="inline-flex items-center gap-1.5 bg-accent/15 border border-accent/40 text-accent font-mono text-[9px] md:text-[10px] font-bold uppercase tracking-[0.18em] px-2.5 py-1 rounded-full">
            <Star className="w-3 h-3" aria-hidden="true" />
            Independent Editorial
          </span>
          <span className="inline-flex items-center gap-1.5 bg-white/8 border border-white/20 text-white/60 font-mono text-[9px] md:text-[10px] font-bold uppercase tracking-[0.18em] px-2.5 py-1 rounded-full">
            <RefreshCw className="w-3 h-3" aria-hidden="true" />
            Rating updated: {getRatingDate()}
          </span>
        </div>

        {/* Main headline */}
        <h1 className="font-heading font-bold uppercase tracking-tight text-white text-balance leading-none mb-2 md:mb-3">
          <span className="block text-4xl md:text-6xl lg:text-7xl">
            <span className="text-accent">Gold</span>
            <span className="text-white mx-2 md:mx-3">UK</span>
            <span className="text-primary">Betting</span>
            <span className="text-white/70 ml-2 md:ml-3">Sites</span>
          </span>
        </h1>

        {/* Sport accent line */}
        <div className="flex gap-0 mb-3 md:mb-5" aria-hidden="true">
          <div className="h-1 w-16 bg-primary rounded-l-full" />
          <div className="h-1 w-8 bg-accent" />
          <div className="h-1 w-16 bg-secondary rounded-r-full" />
        </div>

        {/* Sub-headline */}
        <p className="font-sans text-white/70 text-sm md:text-lg leading-relaxed max-w-2xl">
          Expert-ranked UKGC-licensed bookmakers for UK players. Honest reviews, top welcome offers, and independent ratings - no paid placements, no bias.
        </p>
      </div>
    </section>
  )
}
