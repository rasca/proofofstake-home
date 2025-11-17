import { HeroSection } from '@/components/hero-section'
import { SteakGrid } from '@/components/steak-grid'
import { FloatingActions } from '@/components/floating-actions'
import { VeggieSection } from '@/components/veggie-section'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <SteakGrid />
      <VeggieSection />
      <Footer />
      <FloatingActions />
    </main>
  )
}
