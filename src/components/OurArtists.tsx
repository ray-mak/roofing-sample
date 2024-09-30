import React from "react"
import ArtistGrid from "./ArtistGrid"

const OurArtists = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-6">
      <h2 className="text-white font-bold text-4xl">Our Artists</h2>
      <ArtistGrid />
      <div className="mt-8">
        <button className="text-white font-bold text-lg bg-amber-800 hover:bg-amber-900 px-8 py-3">
          Book an Appointment
        </button>
      </div>
    </div>
  )
}

export default OurArtists
