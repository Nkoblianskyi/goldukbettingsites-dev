import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="bg-secondary/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-50 w-full shadow-lg">
      {/* Top sport accent bar — green + blue split */}
      <div className="w-full h-[4px] flex">
        <div className="flex-1 bg-primary" />
        <div className="flex-1 bg-secondary" />
      </div>

      <div className="px-4 py-3">
        <div className="flex items-center justify-between max-w-[1000px] mx-auto">

          {/* Logo wordmark */}
          <Link href="/" className="flex items-center gap-2.5 group" aria-label="Gold UK Betting Sites — Home">
            {/* Icon mark: podium-style star rating badge for a betting ranking site */}
            <Image src="/favicon.ico" width={32} height={32} alt="Gold UK Betting Sites"/>

            {/* Wordmark — single row, no wrapping */}
            <div className="flex items-center gap-0 leading-none whitespace-nowrap">
              <span className="font-heading font-bold text-xl tracking-tight text-accent uppercase">Gold</span>
              <span className="font-heading font-bold text-xl tracking-tight text-white uppercase mx-1">UK</span>
              <span className="font-heading font-bold text-xl tracking-tight text-primary uppercase">Betting</span>
              <span className="font-heading font-bold text-xl tracking-tight text-white/50 uppercase ml-1">Sites</span>
            </div>
          </Link>

          {/* Right nav + badges */}
          <div className="flex items-center gap-3">
            <nav className="hidden md:flex items-center gap-5" aria-label="Main navigation">
              <Link
                href="/about"
                className="text-[11px] font-mono font-semibold text-white/60 hover:text-primary transition-colors uppercase tracking-widest"
              >
                About
              </Link>
              <Link
                href="/responsible-gambling"
                className="text-[11px] font-mono font-semibold text-white/60 hover:text-primary transition-colors uppercase tracking-widest"
              >
                Responsible Gambling
              </Link>
            </nav>

            <span className="hidden sm:flex items-center text-[10px] font-mono font-semibold text-primary border border-primary/40 bg-primary/10 px-2.5 py-1 rounded uppercase tracking-widest">
              UKGC Licensed
            </span>
            <span className="text-[10px] font-mono font-bold text-destructive border border-destructive bg-destructive/5 px-2.5 py-1 rounded uppercase tracking-widest">
              18+
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
