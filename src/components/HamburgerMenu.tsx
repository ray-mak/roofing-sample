"use client"
import { Oswald } from "next/font/google"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
})

export default function HamburgerMenu() {
  const pathname = usePathname()
  const [hamburgerMenu, setHamburgerMenu] = useState(false)
  function toggleHamburger() {
    setHamburgerMenu((prevState) => !prevState)
  }

  function closeHamburger() {
    setHamburgerMenu(false)
  }
  return (
    <>
      <div
        onClick={toggleHamburger}
        className={`hamburger  ${hamburgerMenu ? "opened" : ""}`}
      >
        <span className="bar bg-gray-200"></span>
        <span className="bar bg-gray-200"></span>
        <span className="bar bg-gray-200"></span>
      </div>
      <div className={`dimmer ${hamburgerMenu ? "opened" : ""}`}></div>
      <div
        className={`navmenu ${
          oswald.className
        } uppercase bg-gray-800 md:bg-inherit flex gap-6 ml-auto items-center justify-center text-2xl text-gray-900 ${
          hamburgerMenu ? "opened" : ""
        } `}
      >
        <Link
          href="/"
          className={`underline-animation font-medium md:underline-offset-[25px] decoration-4 decoration-cyan-700 hover:text-cyan-700 ${
            pathname === "/" ? "underline text-cyan-700" : ""
          }`}
          onClick={closeHamburger}
        >
          Home
        </Link>
        <Link
          href="/services"
          className={`underline-animation font-medium md:underline-offset-[25px] decoration-4 decoration-cyan-700  hover:text-cyan-700 ${
            pathname === "/services" ? "underline text-cyan-700" : ""
          }`}
          onClick={closeHamburger}
        >
          Services
        </Link>
        {/* <Link
          href="/gallery"
          className={`underline-animation font-medium md:underline-offset-[25px] decoration-4 decoration-amber-700  hover:text-amber-700 ${
            pathname === "/gallery" ? "underline text-amber-700" : ""
          }`}
          onClick={closeHamburger}
        >
          Gallery
        </Link> */}
        <Link
          href="/about"
          className={`underline-animation font-medium md:underline-offset-[25px] decoration-4 decoration-cyan-700 hover:text-cyan-700 ${
            pathname === "/about" ? "underline text-cyan-700" : ""
          }`}
          onClick={closeHamburger}
        >
          About
        </Link>
        <Link
          href="/contact"
          className={`underline-animation font-medium md:underline-offset-[25px] decoration-4 decoration-cyan-700 hover:text-cyan-700 ${
            pathname === "/contact" ? "underline text-cyan-700" : ""
          }`}
          onClick={closeHamburger}
        >
          Contact
        </Link>
      </div>
    </>
  )
}
