import { Oswald } from "next/font/google"
import SocialsContainer from "./SocialsContainer"
import Link from "next/link"

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
})

const Footer = () => {
  const hoursOfOperation = [
    {
      day: "Sunday",
      hours: "10:00 AM - 5:00 PM",
    },
    {
      day: "Monday",
      hours: "10:00 AM - 5:00 PM",
    },
    {
      day: "Tuesday",
      hours: "10:00 AM - 5:00 PM",
    },
    {
      day: "Wednesday",
      hours: "10:00 AM - 5:00 PM",
    },
    {
      day: "Thursday",
      hours: "10:00 AM - 5:00 PM",
    },
    {
      day: "Friday",
      hours: "10:00 AM - 5:00 PM",
    },
    {
      day: "Saturday",
      hours: "10:00 AM - 5:00 PM",
    },
  ]
  return (
    <div
      className={`${oswald.className} flex flex-col items-center justify-center bg-gray-800 py-4`}
    >
      <div className="md:w-5/6 lg:w-3/4 lg:max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 px-4 md:px-0 py-16 text-gray-200 gap-16">
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl tracking-wider">CONTACT</h3>
          <p className="text-gray-400">
            555 S. Main Street <br /> Anytown, CA 55555
          </p>
          <p className="text-2xl text-gray-200">555-555-5555</p>
          <p className="underline underline-offset-4 decoration-cyan-500 text-gray-400">
            info@gmail.com
          </p>
          <div className="mt-4">
            <SocialsContainer />
          </div>
        </div>
        <div>
          <h3 className="text-3xl tracking-wide">HOURS OF OPERATION</h3>
          <div className="flex flex-col gap-1 mt-4">
            {hoursOfOperation.map((day, index) => (
              <div
                key={index}
                className="flex justify-between items-center whitespace-nowrap text-gray-400"
              >
                <span className="flex-shrink-0">{day.day}</span>
                <span className="flex-grow mx-2 border-b border-dotted h-3"></span>
                <span className="flex-shrink-0">{day.hours}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="md:ml-12 flex flex-col gap-2">
          <h3 className="text-3xl tracking-wide">NAVIGATION</h3>
          <div>
            <Link href="/" className="text-lg text-gray-400 hover:underline">
              Home
            </Link>
          </div>
          <div>
            <Link
              href="/services"
              className="text-lg text-gray-400 hover:underline"
            >
              Services
            </Link>
          </div>
          <div>
            <Link
              href="/about"
              className="text-lg text-gray-400 hover:underline"
            >
              About
            </Link>
          </div>
          <div>
            <Link
              href="/contact"
              className="text-lg text-gray-400 hover:underline"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div className="w-fullflex items-center justify-center p-4 text-gray-200 text-center">
        <p>
          Copyright &copy; {new Date().getFullYear()} All Rights Reserved |
          Designed and Developed by{" "}
          <Link href="https://codecraftwebdesign.com" target="_blank">
            CodeCraft Web Design
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Footer
