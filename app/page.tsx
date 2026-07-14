// app/page.tsx
import LoadingScreen from "../components/ui/LoadingScreen"
import PageTransition from "../components/ui/PageTransition"
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import Hero from "../components/sections/Hero"
import ServicesPremium from "../components/sections/ServicesPremium"
import StatsCounter from "../components/sections/StatsCounter"
import BeforeAfter from "../components/sections/BeforeAfter"
import GalleryImmersive from "../components/sections/GalleryImmersive"
import ProcessInteractive from "../components/sections/ProcessInteractive"
import Testimonials from "../components/sections/Testimonials"
import Engagement from "../components/sections/Engagement"
import CTA from "../components/sections/CTA"
import Configurator from "../components/sections/Configurator"

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <PageTransition>
        <Navbar />
        <main>
          <Hero />
          <ServicesPremium />
          <StatsCounter />
          <BeforeAfter />
          <GalleryImmersive />
          <ProcessInteractive />
          <Configurator />
          <Testimonials />
          <Engagement />
          <CTA />
        </main>
        <Footer />
      </PageTransition>
    </>
  )
}
