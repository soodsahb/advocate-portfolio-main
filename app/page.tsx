import { PageLayout } from "@/components/page-layout"
import { HeroSection } from "@/components/hero-section"
import { ServicesHighlights } from "@/components/services-highlights"
import { Testimonials } from "@/components/testimonials"

export default function HomePage() {
  return (
    <PageLayout>
      <HeroSection />
      <ServicesHighlights />
      <Testimonials />
    </PageLayout>
  )
}
