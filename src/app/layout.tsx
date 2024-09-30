import type { Metadata } from "next"
import "./globals.css"
import { Merriweather_Sans } from "next/font/google"
import { Navbar } from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Dimlight Studio",
  description: "Get your next tattoo today!",
}

const merriweather = Merriweather_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${merriweather.className} antialiased bg-zinc-950 text-gray-200`}
      >
        <Navbar />
        <main className="mt-[80px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
