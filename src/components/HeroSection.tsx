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
      <div className="p-6 w-full md:w-5/6 lg:w-3/4 lg:max-w-6xl items-center justify-center grid xl:grid-cols-2">
        <div className="flex flex-col gap-8 lg:gap-12 text-gray-100">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl xl:text-6xl font-bold tracking-wider">
              Experienced roofing repair in Murrieta, CA
            </h1>
            <div className="w-[60px] h-[4px] bg-cyan-600"></div>
            <p className="md:text-xl tracking-wide">
              We are a full-service roofing installation and repair company
              dedicated to prividing the best service and the best quality work.
            </p>
          </div>
          <div className="w-fit flex flex-col lg:flex-row gap-6 mt-8">
            <Link
              href="/about"
              className="uppercase px-12 border-2 border-white hover:bg-white text-white hover:text-cyan-800 font-semibold rounded tracking-widest py-3"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="uppercase px-12 border-2 border-cyan-700 bg-cyan-700 hover:border-cyan-800 hover:bg-cyan-800 text-white font-semibold rounded tracking-widest py-3"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
