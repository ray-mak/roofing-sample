import ContactSection from "@/components/ContactSection"
import HeroSection from "@/components/HeroSection"
import InfoSection from "@/components/InfoSection"
import OurArtists from "@/components/OurArtists"
import OurWorkSection from "@/components/OurWorkSection"
import ServicesSection from "@/components/ServicesSection"
import ReviewsSection from "@/components/TestimonialsSection"
import ReactDOM from "react-dom"

export default function Home() {
  ReactDOM.preload("/images/hero-bg.webp", { as: "image" })
  return (
    <div>
      <HeroSection />
      <InfoSection />
    </div>
  )
}
