import { HeroSection } from "@/components/oxygen-sensor/hero-section"
import { TechnologySection } from "@/components/oxygen-sensor/technology-section"
import { HowItWorksSection } from "@/components/oxygen-sensor/how-it-works-section"
import { SpecsSection } from "@/components/oxygen-sensor/specs-section"
import { AdvantagesSection } from "@/components/oxygen-sensor/advantages-section"
import { ApplicationsSection } from "@/components/oxygen-sensor/applications-section"
import { ContactSection } from "@/components/oxygen-sensor/contact-section"
import { Footer } from "@/components/footer"
import { SiteHeader } from "@/components/site-header"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />
      <HeroSection />
      <TechnologySection />
      <HowItWorksSection />
      <SpecsSection />
      <AdvantagesSection />
      <ApplicationsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
