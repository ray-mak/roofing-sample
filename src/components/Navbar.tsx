"use client"
import Link from "next/link"
import HamburgerMenu from "./HamburgerMenu"

export function Navbar() {
  return (
    <nav className="navbar bg-gray-100 border-b border-gray-900 fixed top-0 z-20 flex w-full h-[80px] p-4 md:p-0 flex items-center justify-center shadow-xl">
      <div className="w-full md:w-5/6 lg:w-3/4 lg:max-w-6xl flex items-center ">
        <Link href="/" className={`text-4xl font-bold `}>
          LOGO
        </Link>
        <HamburgerMenu />
      </div>
    </nav>
  )
}
