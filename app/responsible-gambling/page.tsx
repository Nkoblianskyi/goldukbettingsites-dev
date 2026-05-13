import { Header } from "@/components/header"
import { PageLayout, ContentBlock } from "@/components/page-layout"

export default function ResponsibleGamblingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageLayout
        title="Responsible Gambling"
        subtitle="Betting should always remain entertainment - goldukbettingsites.com"
        badge={{ text: "18+", className: "border-destructive text-destructive bg-destructive/5" }}
      >

        {/* Critical warning */}
        <div className="rounded-xl border-2 border-destructive/50 bg-destructive/8 px-5 py-4">
          <p className="font-sans text-sm text-foreground leading-relaxed">
            <strong className="text-destructive uppercase tracking-wide">Important Warning: </strong>
            Sports betting can be addictive and cause serious financial and personal harm. Never bet money you cannot afford to lose. If gambling is affecting your life, seek help immediately at{" "}
            <a href="https://www.begambleaware.org" className="text-primary underline underline-offset-2 font-semibold" target="_blank" rel="noopener noreferrer">
              BeGambleAware.org
            </a>
          </p>
          <p className="text-destructive font-heading font-bold text-sm mt-2 uppercase tracking-widest">
            Strictly 18+ Only
          </p>
        </div>

        <ContentBlock title="What Is Responsible Gambling?">
          <p className="font-sans text-muted-foreground text-sm leading-relaxed">
            Responsible gambling means betting in a conscious, controlled and safe way - maintaining a healthy balance between entertainment and your personal and financial wellbeing. All UKGC-licensed operators are legally required to provide tools to help you gamble safely.
          </p>
        </ContentBlock>

        <ContentBlock title="Key Principles">
          <div className="divide-y divide-border">
            {[
              {
                num: "01",
                title: "Only Bet What You Can Afford to Lose",
                desc: "Never use money set aside for bills, rent, food or essential expenses. Treat your betting budget as entertainment spend.",
              },
              {
                num: "02",
                title: "Set Limits Before You Start",
                desc: "Decide your budget and time limits in advance and stick to them. All UKGC operators must offer deposit limits and session reminders.",
              },
              {
                num: "03",
                title: "Never Chase Losses",
                desc: "Accepting a loss is part of gambling. Chasing losses with bigger stakes is the leading cause of problem gambling.",
              },
              {
                num: "04",
                title: "Do Not Bet Under the Influence",
                desc: "Avoid betting when emotional, tired, stressed, or under the influence of alcohol. Impaired judgment leads to poor decisions.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                <div className="font-heading font-bold text-primary text-xl leading-none w-10 flex-shrink-0 pt-0.5">
                  {item.num}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm uppercase tracking-wide text-foreground">
                    {item.title}
                  </h3>
                  <p className="font-sans text-muted-foreground text-xs mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </ContentBlock>

        <div className="grid md:grid-cols-2 gap-4">
          <ContentBlock title="Safe Practices">
            <ul className="space-y-2" role="list">
              {[
                "Set a strict monthly betting budget",
                "Use deposit limits on your account",
                "Keep other leisure activities in your life",
                "Take regular breaks from betting",
                "Use self-exclusion tools if needed",
              ].map((item, i) => (
                <li key={i} className="font-sans text-xs text-muted-foreground flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5" aria-hidden="true">+</span>
                  {item}
                </li>
              ))}
            </ul>
          </ContentBlock>

          <ContentBlock title="Warning Signs">
            <ul className="space-y-2" role="list">
              {[
                "Betting more than you can afford",
                "Hiding gambling from family or friends",
                "Borrowing money to gamble",
                "Neglecting work or responsibilities",
                "Feeling anxious when you cannot bet",
              ].map((item, i) => (
                <li key={i} className="font-sans text-xs text-muted-foreground flex items-start gap-2">
                  <span className="text-destructive font-bold mt-0.5" aria-hidden="true">!</span>
                  {item}
                </li>
              ))}
            </ul>
          </ContentBlock>
        </div>

        <ContentBlock title="UK Support Services">
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { name: "GambleAware", url: "www.begambleaware.org", desc: "Free confidential support and advice" },
              { name: "GamCare", url: "www.gamcare.org.uk", desc: "National gambling helpline and counselling" },
              { name: "GAMSTOP", url: "www.gamstop.co.uk", desc: "UK self-exclusion scheme for all sites" },
              { name: "Gambling Therapy", url: "www.gamblingtherapy.org", desc: "Free international online support" },
            ].map((org, i) => (
              <div key={i} className="rounded-lg border border-primary/20 bg-primary/5 px-4 py-3">
                <div className="font-heading font-bold text-sm text-foreground">{org.name}</div>
                <div className="text-primary font-mono text-[10px] mt-0.5">{org.url}</div>
                <div className="font-sans text-muted-foreground text-[10px] mt-0.5">{org.desc}</div>
              </div>
            ))}
          </div>
        </ContentBlock>

        <div className="bg-secondary text-secondary-foreground text-center py-4 rounded-xl">
          <span className="font-heading font-bold text-base uppercase tracking-widest">
            Under 18s Must Not Gamble
          </span>
        </div>

      </PageLayout>
    </div>
  )
}
