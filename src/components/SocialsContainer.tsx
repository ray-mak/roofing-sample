import {
  faFacebookF,
  faInstagram,
  faPinterestP,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

const SocialsContainer = () => {
  return (
    <div className="w-fit grid grid-cols-4 gap-4">
      <div>
        <Link
          href="https://www.facebook.com/people/Dim-Light-Studio/100089748133065/"
          target="_blank"
          className="relative group flex items-center justify-center overflow-hidden"
        >
          <FontAwesomeIcon
            icon={faFacebookF}
            className="text-cyan-400 w-6 h-6 group-hover:-translate-y-full transition-transform duration-300"
          />
          <FontAwesomeIcon
            icon={faFacebookF}
            className="absolute top-full text-gray-200 w-6 h-6 group-hover:-translate-y-full transition-transform duration-300"
          />
        </Link>
      </div>
      <div>
        <Link
          href="https://www.twitter.com/"
          target="_blank"
          className="relative group flex items-center justify-center overflow-hidden"
        >
          <FontAwesomeIcon
            icon={faXTwitter}
            className="text-cyan-400 w-6 h-6 group-hover:-translate-y-full transition-transform duration-300"
          />
          <FontAwesomeIcon
            icon={faXTwitter}
            className="absolute top-full text-gray-200 w-6 h-6 group-hover:-translate-y-full transition-transform duration-300"
          />
        </Link>
      </div>
      <div>
        <Link
          href="https://www.instagram.com/dimlightstudio_murrieta/"
          target="_blank"
          className="relative group flex items-center justify-center overflow-hidden"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-cyan-400 w-6 h-6 group-hover:-translate-y-full transition-transform duration-300"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className="absolute top-full text-gray-200 w-6 h-6 group-hover:-translate-y-full transition-transform duration-300"
          />
        </Link>
      </div>
      <div>
        <Link
          href="https://www.pinterest.com/"
          target="_blank"
          className="relative group flex items-center justify-center overflow-hidden"
        >
          <FontAwesomeIcon
            icon={faPinterestP}
            className="text-cyan-400 w-6 h-6 group-hover:-translate-y-full transition-transform duration-300"
          />
          <FontAwesomeIcon
            icon={faPinterestP}
            className="absolute top-full text-gray-200 w-6 h-6 group-hover:-translate-y-full transition-transform duration-300"
          />
        </Link>
      </div>
    </div>
  )
}

export default SocialsContainer
