import { Header } from "@/components/header"
import { HeroCarousel } from "@/components/hero-carousel"
import { FeaturesSection } from "@/components/features-section"
import { AboutSection } from "@/components/about-section"
import { VisionMissionSection } from "@/components/vision-mission-section"
import { ActivitiesSection } from "@/components/activities-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { StackingCardsContainer } from "@/components/stacking-cards"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroCarousel />
      <StackingCardsContainer>
        <FeaturesSection />
        <AboutSection />
        <VisionMissionSection />
        <ActivitiesSection />
        <CTASection />
      </StackingCardsContainer>
      <Footer />
    </main>
  )
}
