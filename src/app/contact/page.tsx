"use client"
import ContactSection from "@/components/ContactSection"
import { useEffect, useState } from "react"

import getMapsData from "../actions/getMapsData"
import MapComponent from "./_components/MapComponent"

const ContactPage = () => {
  const [apiKey, setApiKey] = useState<string | null>()
  useEffect(() => {
    const fetchMapData = async () => {
      try {
        const response = await getMapsData()
        if (response.error) {
          console.error(response.error)
          return
        } else if (response.apiKey) {
          setApiKey(response.apiKey)
        }
      } catch (error) {
        console.error(error)
      }
    }

    fetchMapData()
  }, [])

  if (apiKey) {
    return (
      <div className="flex flex-col">
        <div className="flex flex-col items-center justify-center">
          <div className="banner text-white flex items-center justify-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Contact Us
            </h1>
          </div>
        </div>
        <MapComponent apiKey={apiKey} />
      </div>
    )
  }
}

export default ContactPage
