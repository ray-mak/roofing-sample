import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"

const ArtistGrid = () => {
  const artists = [
    { name: "Oscar", image: "/images/artist1.webp", title: "Tattoo Artist" },
    {
      name: "Emily",
      image: "/images/artist2.webp",
      title: "Tattoo Artist",
    },
    { name: "Alex", image: "/images/artist3.webp", title: "Tattoo Artist" },
  ]
  return (
    <div className="mt-6 w-full md:w-5/6 lg:w-3/4 lg:max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 md:p-0 text-gray-200">
      {artists.map((artist, index) => (
        <div key={index} className="w-full flex items-center justify-center">
          <div className="relative group overflow-hidden transition-colors duration-300 border border-transparent hover:border hover:border-amber-500">
            <Image
              alt={`picture of ${artist.name}`}
              src={artist.image}
              width={300}
              height={300}
              className="transition duration-300 group-hover:scale-[1.15]"
            />
            <div className="absolute w-full bottom-0 left-0 p-4 flex flex-col items-center justify-center bg-black bg-opacity-90 translate-y-[40%] transition-transform duration-300 group-hover:translate-y-[0%]">
              <h3 className="text-xl font-bold">{artist.name}</h3>
              <p className="text-sm">{artist.title}</p>
              <div className="mt-4 mb-2 flex items-center justify-center flex gap-2 items-center text-amber-500">
                <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
                <p className="text-sm">@artist_name</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ArtistGrid
