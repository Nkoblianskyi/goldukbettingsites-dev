import { Header } from "@/components/header"
import { PageLayout, ContentBlock } from "@/components/page-layout"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageLayout
        title="About Gold UK Betting Sites"
        subtitle="goldukbettingsites.com - Independent UK Bookmaker Comparison"
      >

        <ContentBlock title="Our Mission">
          <p className="font-sans text-muted-foreground text-sm leading-relaxed">
            Gold UK Betting Sites was built to help UK bettors make confident, informed decisions about licensed bookmakers. We provide transparent, independently researched comparisons without commercial bias - every operator we feature holds a current UKGC licence, and our ratings are never influenced by affiliate relationships.
          </p>
        </ContentBlock>

        <ContentBlock title="What We Do">
          <div className="space-y-0 divide-y divide-border">
            {[
              {
                title: "In-Depth Operator Reviews",
                desc: "We test each bookmaker against strict, published criteria before any assessment goes live. Our team places real bets, tests customer support, and evaluates withdrawal speed.",
              },
              {
                title: "Monthly Updated Rankings",
                desc: "Our ratings are reviewed and updated every month to reflect current operator standards. Rankings change - we do not give permanent placement to any operator.",
              },
              {
                title: "Transparent Scoring",
                desc: "Every score on goldukbettingsites.com is derived from our published methodology. You can see exactly how much weight each criterion carries.",
              },
              {
                title: "Responsible Gambling First",
                desc: "We promote safe betting habits and signpost UK support services on every page. We will never feature an operator with a poor responsible gambling track record.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                <div className="w-1 flex-shrink-0 bg-primary rounded-full mt-0.5 self-stretch" aria-hidden="true" />
                <div>
                  <h3 className="font-heading font-bold text-sm text-foreground uppercase tracking-wide">{item.title}</h3>
                  <p className="font-sans text-muted-foreground text-xs mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </ContentBlock>

        <ContentBlock title="Our Values">
          <div className="grid grid-cols-2 gap-3">
            {[
              { title: "Transparency", desc: "Objective criteria, clearly published.", color: "bg-primary/8 border-primary/25" },
              { title: "Independence", desc: "No operator influences our ratings.", color: "bg-secondary/8 border-secondary/25" },
              { title: "Responsibility", desc: "Responsible gambling featured on every page.", color: "bg-accent/8 border-accent/25" },
              { title: "Accuracy", desc: "Monthly updates keep our rankings current.", color: "bg-primary/8 border-primary/25" },
            ].map((item, i) => (
              <div key={i} className={`rounded-lg border px-4 py-3 ${item.color}`}>
                <h3 className="font-heading font-bold text-primary text-xs uppercase tracking-wide mb-1">{item.title}</h3>
                <p className="font-sans text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </ContentBlock>

        <div className="bg-muted/60 rounded-xl border border-border px-5 py-4">
          <p className="font-sans text-muted-foreground text-xs leading-relaxed">
            <strong className="text-foreground font-semibold">Disclaimer:</strong> goldukbettingsites.com is an informational comparison site. We are not a bookmaker and do not accept bets. All operators we recommend hold a current UKGC licence. Please gamble responsibly. 18+ only.
          </p>
        </div>

      </PageLayout>
    </div>
  )
}
