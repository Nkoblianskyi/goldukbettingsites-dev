import { BettingSiteCard } from "./betting-site-card"
import { bettingSites } from "@/lib/mock-data"

export function RatingSection() {
  return (
    <div className="w-full py-10 px-4">
      {/* Section box — max 1000px, own white background */}
      <div className="mx-auto max-w-[1000px] bg-white rounded-2xl shadow-2xl border border-white/20 overflow-hidden">

        {/* Section header */}
        <div className="border-b border-slate-200 px-6 py-5 flex items-center justify-between bg-white">
          <div>
            <h2 className="font-heading font-bold text-2xl md:text-3xl uppercase tracking-tight text-slate-800 leading-none">
              Top Betting Sites UK
            </h2>
            <p className="font-mono text-[10px] text-slate-500 mt-0.5 uppercase tracking-widest">
              Ranked by our independent editorial team - updated monthly
            </p>
          </div>
          <span className="hidden sm:flex items-center font-mono text-[10px] font-semibold text-primary border border-primary/30 bg-primary/10 px-3 py-1.5 rounded uppercase tracking-widest">
            {bettingSites.length} reviewed
          </span>
        </div>

        {/* Cards list */}
        <div className="divide-y divide-border">
          {bettingSites.map((site, index) => (
            <BettingSiteCard key={site.id} site={site} rank={index + 1} />
          ))}
        </div>

        {/* Footer note */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200">
          <p className="font-mono text-[9px] text-slate-400 uppercase tracking-widest leading-relaxed">
            Rankings based on independent editorial assessment. Affiliate links used. Gambling involves risk. 18+ only. BeGambleAware.org
          </p>
        </div>
      </div>
    </div>
  )
}
