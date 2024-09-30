import Link from "next/link"
import { Oswald } from "next/font/google"

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
})

const HeroSection = () => {
  return (
    <div
      className={`${oswald.className} relative hero-section flex items-center justify-center `}
    >
      <div className="p-6 w-full md:w-5/6 lg:w-3/4 lg:max-w-6xl items-center justify-center">
        <div className="flex flex-col gap-12 text-gray-100 ">
          <h1 className="uppercase text-xl md:text-3xl xl:text-7xl font-bold tracking-wider text-center">
            Welcome to Dimlight Studio
          </h1>
          <p className="md:text-xl text-center tracking-wide">
            Custom tattoos crafted with passion and precision. Bring your ideas
            to life with our expert artists.
          </p>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="px-16 bg-amber-800 hover:bg-amber-900 text-white font-semibold tracking-wider py-3"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
