import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface PageLayoutProps {
  title: string
  subtitle?: string
  badge?: { text: string; className: string }
  children: React.ReactNode
}

export function PageLayout({ title, subtitle, badge, children }: PageLayoutProps) {
  return (
    <div className="min-h-screen">

      {/* Inner page hero — transparent so sports bg shows through */}
      <div className="w-full px-4 pt-8 pb-10 relative">
        <div className="mx-auto max-w-[1000px]">

          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-mono text-[10px] text-white/50 hover:text-primary transition-colors mb-6 uppercase tracking-widest"
          >
            <ArrowLeft className="w-3 h-3" aria-hidden="true" />
            Back to Rankings
          </Link>

          {/* Hero card — glassmorphism panel, NOT full-width block */}
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            style={{ background: "rgba(10, 20, 45, 0.65)", backdropFilter: "blur(12px)" }}
          >
            {/* Top accent bar */}
            <div className="flex h-1" aria-hidden="true">
              <div className="flex-1 bg-primary" />
              <div className="w-16 bg-accent" />
              <div className="flex-1 bg-secondary" />
            </div>

            <div className="px-7 py-8 flex items-center justify-between gap-6">
              <div className="flex items-start gap-5">
                {/* Vertical accent */}
                <div className="w-1 self-stretch bg-primary rounded-full flex-shrink-0 mt-1" aria-hidden="true" />

                <div>
                  <h1 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight text-white leading-tight text-balance">
                    {title}
                  </h1>
                  {subtitle && (
                    <p className="font-mono text-[10px] text-white/45 mt-2.5 uppercase tracking-widest">
                      {subtitle}
                    </p>
                  )}
                </div>
              </div>

              {badge && (
                <span className={`flex-shrink-0 font-mono text-sm font-bold border px-4 py-2 rounded-lg uppercase tracking-widest ${badge.className}`}>
                  {badge.text}
                </span>
              )}
            </div>

            {/* Bottom accent bar */}
            <div className="flex h-0.5" aria-hidden="true">
              <div className="w-24 bg-primary/40" />
              <div className="flex-1 bg-white/5" />
            </div>
          </div>
        </div>
      </div>

      {/* Page content */}
      <div className="mx-auto max-w-[1000px] px-4 pb-12 space-y-4">
        {children}
      </div>
    </div>
  )
}

interface ContentBlockProps {
  title: string
  children: React.ReactNode
  accentColor?: string
}

export function ContentBlock({ title, children, accentColor }: ContentBlockProps) {
  return (
    <div className="bg-white rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
      <div className="border-b border-slate-200 px-5 py-4 flex items-center gap-3 bg-white">
        <div className={`w-1 h-6 rounded-full flex-shrink-0 ${accentColor ?? "bg-primary"}`} aria-hidden="true" />
        <h2 className="font-heading font-bold text-sm md:text-base uppercase tracking-wide text-slate-800">
          {title}
        </h2>
      </div>
      <div className="px-5 py-5 text-slate-700">{children}</div>
    </div>
  )
}
