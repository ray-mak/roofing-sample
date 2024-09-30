"use client"
import { useEffect, useState } from "react"

import getMapsData from "../actions/getMapsData"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons"
import SocialsContainer from "@/components/SocialsContainer"
import ContactForm from "@/components/ContactForm"

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
        <div className=" flex flex-col items-center justify-center gap-4 sm:gap-10 py-20">
          <h2 className="text-white font-bold text-4xl p-4">Contact Us</h2>
          <div className="mt-6 w-full md:w-5/6 lg:w-3/4 lg:max-w-6xl grid grid-cols-1 xl:grid-cols-3 gap-12 p-4 md:p-0 text-gray-200">
            <div className="flex flex-col gap-2">
              <p className="text-amber-500 tracking-wider">BOOK YOUR</p>
              <p className="text-4xl font-bold tracking-wider">APPOINTMENT</p>
              <p className="text-gray-300">
                Ready to get started? Schedule your session with one of our
                specialists today!
              </p>
              <div className="mt-4 text-gray-300">
                <Link
                  href="tel:555-555-5555"
                  className="flex gap-4 items-center"
                >
                  <FontAwesomeIcon icon={faPhoneVolume} className="w-8 h-8" />
                  <p className="text-2xl font-semibold">555-555-5555</p>
                </Link>
              </div>
              <div className="mt-6">
                <SocialsContainer />
              </div>
            </div>
            <div className="col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
        <div className="w-full p-4">
          <iframe
            height="450"
            loading="lazy"
            className="w-full"
            src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}
    &q=The+Human+Body+Shop,Perris`}
          ></iframe>
        </div>
      </div>
    )
  }
}

export default ContactPage
