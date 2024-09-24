import Image from "next/image"
import React from "react"

const OurArtists = () => {
  const artists = [
    { name: "Oscar", image: "/images/artist1.webp", title: "Tattoo Artist" },
    {
      name: "Emily",
      image: "/images/artist2.webp",
      title: "Tattoo Artist/Piercer",
    },
    { name: "Alex", image: "/images/artist3.webp", title: "Tattoo Artist" },
  ]
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-6">
      <h2 className="text-white font-bold text-4xl">Our Artists</h2>
      <div className="mt-6 w-full md:w-5/6 lg:w-3/4 lg:max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 md:p-0 text-gray-200">
        {artists.map((artist, index) => (
          <div key={index} className="w-full flex items-center justify-center">
            <div className="relative overflow-hidden transition-colors duration-300 border border-transparent hover:border hover:border-amber-500">
              <Image
                alt={`picture of ${artist.name}`}
                src={artist.image}
                width={300}
                height={300}
                className="transition duration-300 hover:scale-[1.15]"
              />
              <div className="absolute w-full bottom-0 left-0 p-4 flex flex-col items-center justify-center bg-black bg-opacity-90">
                <h3 className="text-xl font-bold">{artist.name}</h3>
                <p className="text-sm text-amber-500">{artist.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <button className="text-white font-bold text-lg bg-amber-800 hover:bg-amber-900 px-8 py-3">
          Book an Appointment
        </button>
      </div>
    </div>
  )
}

export default OurArtists
