import { BettingSiteCard } from "./betting-site-card"
import { bettingSites } from "@/lib/mock-data"

export function OurChoiceSection() {
  const topSite = bettingSites[0]

  return (
    <div className="w-full py-6 px-4">
      {/* Section box — max 1000px, own background */}
      <div className="mx-auto max-w-[1000px] bg-white rounded-2xl shadow-2xl border border-white/20 overflow-hidden">

        {/* Section header */}
        <div className="border-b border-slate-200 px-6 py-5 flex items-center justify-between bg-white">
          <div>
            <h2 className="font-heading font-bold text-2xl md:text-3xl uppercase tracking-tight text-slate-800 leading-none">
              Our Gold Pick
            </h2>
            <p className="font-mono text-[10px] text-slate-500 mt-0.5 uppercase tracking-widest">
              Highest-rated operator this month - chosen by our editorial team
            </p>
          </div>
          {/* Gold seal */}
          <div className="hidden sm:flex flex-col items-center justify-center w-14 h-14 bg-amber-50 border-2 border-amber-400 rounded-lg flex-shrink-0">
            <span className="font-heading font-bold text-amber-500 text-lg leading-none">#1</span>
            <span className="font-mono text-[8px] text-amber-400 uppercase tracking-widest leading-tight mt-0.5">Gold</span>
          </div>
        </div>

        {/* Top pick card */}
        <div className="p-4">
          <BettingSiteCard site={topSite} rank={1} />
        </div>

        {/* Editorial note */}
        <div className="mx-4 mb-4 bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 flex gap-3 items-start">
          <div className="w-1 self-stretch flex-shrink-0 bg-primary rounded-full" aria-hidden="true" />
          <div>
            <p className="font-mono text-[9px] text-slate-400 uppercase tracking-widest mb-1">Editorial Note</p>
            <p className="font-sans text-sm text-slate-600 leading-relaxed">
              Our Gold Pick is selected based on overall composite scoring across licensing, welcome offer value, odds quality, usability, and customer support. The selection is reviewed monthly and reflects current operator standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
