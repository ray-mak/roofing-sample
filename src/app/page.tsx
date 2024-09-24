import HeroSection from "@/components/HeroSection"
import OurArtists from "@/components/OurArtists"
import OurWorkSection from "@/components/OurWorkSection"
import ServicesSection from "@/components/ServicesSection"

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <OurWorkSection />
      <OurArtists />
    </div>
  )
}
