import type { Metadata } from "next"
import "./globals.css"
import { Merriweather_Sans } from "next/font/google"
import { Navbar } from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Providers } from "@/providers"

export const metadata: Metadata = {
  title: "Roofing Service",
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${merriweather.className} antialiased`}>
        <Providers>
          <Navbar />
          <main className="mt-[80px]">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
