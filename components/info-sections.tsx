export function InfoSections() {
  return (
    <div className="w-full py-6 px-4 space-y-6">

      {/* ── How We Rate ── */}
      <div className="mx-auto max-w-[1000px] bg-white rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
        {/* Header */}
        <div className="border-b border-slate-200 px-6 py-5 bg-white">
          <h2 className="font-heading font-bold text-xl md:text-2xl uppercase tracking-tight text-slate-800 leading-none">
            How We Rate Betting Sites
          </h2>
          <p className="font-mono text-[10px] text-slate-500 mt-0.5 uppercase tracking-widest">
            Editorial Methodology
          </p>
        </div>

        <div className="px-6 py-5">
          <p className="font-sans text-slate-600 text-sm leading-relaxed mb-5 max-w-2xl">
            goldukbettingsites.com applies a structured, independent methodology to assess every UKGC-licensed bookmaker. Our editorial team conducts hands-on testing over several weeks before any review is published.
          </p>

          {/* Criteria grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-5">
            {[
              {
                title: "Licensing & Safety",
                color: "bg-primary/10 border-primary/30",
                titleColor: "text-primary",
                items: [
                  "Active UKGC licence verification",
                  "SSL encryption & data protection",
                  "Player fund protection status",
                  "Anti-fraud systems assessment",
                ],
              },
              {
                title: "Welcome Offers",
                color: "bg-accent/10 border-accent/30",
                titleColor: "text-accent",
                items: [
                  "Welcome offer value analysis",
                  "Wagering requirement review",
                  "Ongoing promotions quality",
                  "Terms transparency check",
                ],
              },
              {
                title: "Odds Quality",
                color: "bg-secondary/10 border-secondary/30",
                titleColor: "text-secondary",
                items: [
                  "Premier League odds comparison",
                  "Operator margin analysis",
                  "Market breadth assessment",
                  "In-play betting coverage",
                ],
              },
              {
                title: "Usability",
                color: "bg-primary/10 border-primary/30",
                titleColor: "text-primary",
                items: [
                  "Mobile and desktop testing",
                  "Registration process review",
                  "Navigation and design audit",
                  "Cash out functionality",
                ],
              },
              {
                title: "Payments",
                color: "bg-accent/10 border-accent/30",
                titleColor: "text-accent",
                items: [
                  "Deposit and withdrawal options",
                  "Withdrawal speed testing",
                  "Fee transparency check",
                  "Minimum and maximum limits",
                ],
              },
              {
                title: "Customer Support",
                color: "bg-secondary/10 border-secondary/30",
                titleColor: "text-secondary",
                items: [
                  "Live chat response time",
                  "Email support quality",
                  "Help centre depth",
                  "Problem resolution ability",
                ],
              },
            ].map((cat, i) => (
              <div
                key={i}
                className={`rounded-lg border p-4 ${cat.color}`}
              >
                <h3 className={`font-heading font-bold text-sm uppercase tracking-wide mb-3 pb-2 border-b border-current/20 ${cat.titleColor}`}>
                  {cat.title}
                </h3>
                <ul className="space-y-1.5" role="list">
                  {cat.items.map((item, j) => (
                    <li key={j} className="text-xs text-slate-600 flex items-start gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 ${cat.titleColor.replace("text-", "bg-")}`} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Scoring breakdown */}
          <div className="bg-muted/40 rounded-lg border border-border overflow-hidden">
            <div className="border-b border-slate-200 px-4 py-2.5 flex items-center gap-2">
              <span className="font-heading font-bold text-xs uppercase tracking-widest text-slate-700">
                Scoring Breakdown
              </span>
            </div>
            <div className="grid grid-cols-5">
              {[
                { label: "Licensing", pct: "30%", color: "text-primary" },
                { label: "Offers", pct: "25%", color: "text-amber-500" },
                { label: "Odds", pct: "20%", color: "text-secondary" },
                { label: "Usability", pct: "15%", color: "text-primary" },
                { label: "Support", pct: "10%", color: "text-slate-500" },
              ].map((item, i) => (
                <div key={i} className="text-center px-2 py-4 border-r border-slate-200 last:border-r-0">
                  <div className={`font-heading font-bold text-2xl leading-none ${item.color}`}>{item.pct}</div>
                  <div className="font-mono text-[8px] uppercase tracking-widest text-slate-400 mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Responsible Gambling ── */}
      <div className="mx-auto max-w-[1000px] bg-white rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
        {/* Header */}
        <div className="border-b border-slate-200 px-6 py-5 flex items-center justify-between bg-white">
          <div>
            <h2 className="font-heading font-bold text-xl md:text-2xl uppercase tracking-tight text-slate-800 leading-none">
              Responsible Gambling
            </h2>
            <p className="font-mono text-[10px] text-slate-500 mt-0.5 uppercase tracking-widest">
              Play Safe - Know Your Limits
            </p>
          </div>
          <span className="font-mono text-xs font-bold text-destructive border border-destructive bg-destructive/5 px-3 py-1 rounded uppercase tracking-widest flex-shrink-0">
            18+
          </span>
        </div>

        <div className="px-6 py-5 space-y-4">

          {/* Warning block */}
          <div className="bg-destructive/8 border border-destructive/30 rounded-lg px-4 py-3">
            <p className="font-sans text-sm text-slate-700 leading-relaxed">
              <span className="font-semibold text-destructive">Important: </span>
              Gambling can be addictive. Only bet with money you can afford to lose. If gambling is affecting your life, seek help immediately at{" "}
              <a href="https://www.begambleaware.org" className="text-primary underline underline-offset-2 font-semibold" target="_blank" rel="noopener noreferrer">
                BeGambleAware.org
              </a>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <h3 className="font-heading font-bold text-sm uppercase tracking-wide text-primary mb-3 pb-2 border-b border-primary/20">
                Safe Practices
              </h3>
              <ul className="space-y-2" role="list">
                {[
                  "Set a monthly budget and stick to it",
                  "Set time limits for each session",
                  "Never chase losses with bigger bets",
                  "Treat betting as entertainment only",
                  "Use deposit limits and self-exclusion tools",
                ].map((item, i) => (
                  <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                    <span className="text-primary font-bold mt-0.5" aria-hidden="true">+</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-4">
              <h3 className="font-heading font-bold text-sm uppercase tracking-wide text-destructive mb-3 pb-2 border-b border-destructive/20">
                Warning Signs
              </h3>
              <ul className="space-y-2" role="list">
                {[
                  "Betting more than you can afford to lose",
                  "Hiding gambling activity from others",
                  "Borrowing money to place bets",
                  "Neglecting work or personal responsibilities",
                  "Feeling anxious when unable to bet",
                ].map((item, i) => (
                  <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                    <span className="text-destructive font-bold mt-0.5" aria-hidden="true">!</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Support services */}
          <div className="bg-slate-50 rounded-lg border border-slate-200 overflow-hidden">
            <div className="border-b border-slate-200 px-4 py-2.5">
              <h3 className="font-heading font-bold text-xs uppercase tracking-widest text-slate-700">
                UK Support Services
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
              {[
                { name: "GambleAware", url: "www.begambleaware.org", desc: "Free, confidential support" },
                { name: "GamCare", url: "www.gamcare.org.uk", desc: "National gambling helpline" },
                { name: "Gambling Therapy", url: "www.gamblingtherapy.org", desc: "International online support" },
                { name: "GAMSTOP", url: "www.gamstop.co.uk", desc: "UK-wide self-exclusion scheme" },
              ].map((org, i) => (
                <div key={i} className="px-4 py-3">
                  <div className="font-heading font-bold text-sm text-slate-800">{org.name}</div>
                  <div className="text-primary font-mono text-[10px] mt-0.5">{org.url}</div>
                  <div className="text-slate-500 text-[10px] mt-0.5">{org.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-secondary text-secondary-foreground text-center py-3 rounded-lg">
            <span className="font-heading font-bold text-sm uppercase tracking-widest">
              Under 18s Must Not Gamble
            </span>
          </div>
        </div>
      </div>

    </div>
  )
}
