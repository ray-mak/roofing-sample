import ContactSection from "@/components/ContactSection"
import HeroSection from "@/components/HeroSection"
import OurArtists from "@/components/OurArtists"
import OurWorkSection from "@/components/OurWorkSection"
import ServicesSection from "@/components/ServicesSection"
import ReviewsSection from "@/components/TestimonialsSection"

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <OurWorkSection />
      <OurArtists />
      <ContactSection />
      <ReviewsSection />
    </div>
  )
}
