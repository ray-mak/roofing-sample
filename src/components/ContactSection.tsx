import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import ContactForm from "./ContactForm"
import SocialsContainer from "./SocialsContainer"

const ContactSection = () => {
  return (
    <div className="contact-section flex flex-col items-center justify-center gap-4 sm:gap-10 py-20">
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
            <Link href="tel:951-834-3893" className="flex gap-4 items-center">
              <FontAwesomeIcon icon={faPhoneVolume} className="w-8 h-8" />
              <p className="text-2xl font-semibold">951-834-3893</p>
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
  )
}

export default ContactSection
