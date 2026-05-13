"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { RatingSection } from "@/components/rating-section"
import { OurChoiceSection } from "@/components/our-choice-section"
import { InfoSections } from "@/components/info-sections"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* Sections below hero: each has its own max-w-[1000px] card background */}
        <div className="pb-16 space-y-0">
          <RatingSection />
          <InfoSections />
          <OurChoiceSection />
        </div>
      </main>
    </>
  )
}
