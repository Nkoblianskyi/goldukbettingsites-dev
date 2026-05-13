import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground w-full">
      {/* Top sport accent bar */}
      <div className="w-full h-1 flex">
        <div className="flex-1 bg-primary" />
        <div className="flex-1 bg-accent" />
      </div>

      <div className="max-w-[1000px] mx-auto px-4 pt-8 pb-6">

        {/* Logo + nav row */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 pb-6 border-b border-secondary-foreground/15">
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-3" aria-label="Gold UK Betting Sites — Home">
              <Image src="/favicon.ico" width={32} height={32} alt="Gold UK Betting Sites" />
              <div className="flex items-baseline gap-0 leading-none whitespace-nowrap">
                <span className="font-heading font-bold text-xl tracking-tight text-accent uppercase">Gold</span>
                <span className="font-heading font-bold text-xl tracking-tight text-secondary-foreground uppercase mx-1">UK</span>
                <span className="font-heading font-bold text-xl tracking-tight text-primary uppercase">Betting</span>
                <span className="font-heading font-bold text-xl tracking-tight text-secondary-foreground/60 uppercase ml-1">Sites</span>
              </div>
            </Link>
            <p className="text-secondary-foreground/60 text-xs max-w-xs leading-relaxed font-sans">
              Independent comparison of UKGC-licensed bookmakers. We do not operate a bookmaker.
            </p>
            <p className="text-secondary-foreground/30 text-[10px] mt-1 font-mono uppercase tracking-widest">
              goldukbettingsites.com
            </p>
          </div>

          <nav className="flex flex-col gap-2" aria-label="Footer navigation">
            <span className="text-[10px] font-mono text-secondary-foreground/30 uppercase tracking-widest mb-1">Navigation</span>
            {[
              { href: "/privacy-policy", label: "Privacy Policy" },
              { href: "/cookie-policy", label: "Cookie Policy" },
              { href: "/about", label: "About Us" },
              { href: "/responsible-gambling", label: "Responsible Gambling" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-xs text-secondary-foreground/60 hover:text-primary transition-colors uppercase tracking-wide font-mono"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Regulatory bodies */}
        <div className="py-6 border-b border-secondary-foreground/15">
          <p className="text-[10px] font-mono text-secondary-foreground/30 uppercase tracking-widest mb-4">
            Regulatory Bodies &amp; Safer Gambling
          </p>
          <div className="flex flex-wrap items-center gap-6">
            {[
              { href: "https://www.gamstop.co.uk/", src: "/gamstop.svg", alt: "GamStop" },
              { href: "https://www.begambleaware.org/", src: "/gamble.webp", alt: "BeGambleAware" },
              { href: "https://www.gamcare.org.uk/", src: "/gamecare.svg", alt: "GamCare" },
              { href: "https://gordonmoody.org.uk/", src: "/gordon.png", alt: "Gordon Moody" },
              { href: "https://www.gamblingcommission.gov.uk/", src: "/commission.png", alt: "UK Gambling Commission" },
            ].map(({ href, src, alt }) => (
              <a
                key={alt}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={alt}
                className="hover:opacity-90 transition-opacity"
              >
                <img src={src} alt={alt} className="h-7 w-auto object-contain" />
              </a>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="pt-5 pb-4">
          <p className="text-secondary-foreground/40 text-[11px] leading-relaxed font-sans">
            goldukbettingsites.com is an independent comparison website. We receive commission when users visit operators through our links. This does not influence our editorial ratings. All operators listed hold a valid UKGC licence. Gambling involves risk - please gamble responsibly.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[10px] text-secondary-foreground/20 font-mono uppercase tracking-widest pt-3 border-t border-secondary-foreground/10">
          <span>&copy; 2026 goldukbettingsites.com</span>
          <span>Independent UK Betting Sites Comparison</span>
        </div>
      </div>
    </footer>
  )
}
