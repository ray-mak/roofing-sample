// import ArtistGrid from "@/components/ArtistGrid"
import ContactSection from "@/components/ContactSection"
import Image from "next/image"
import React from "react"

const AboutPage = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center justify-center">
        <div className="banner text-white flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            About Us
          </h1>
        </div>
        <div className="w-full md:w-5/6 lg:w-3/4 lg:max-w-6xl grid grid-cols-1 md:grid-cols-5 gap-8 py-20 px-4">
          <div className="col-span-1 md:col-span-3 flex flex-col ustify-center gap-4">
            <h2 className="text-white font-bold text-5xl">
              <span className="text-amber-500">Who</span> We Are
            </h2>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, aperiam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
            <p className="text-gray-300">
              Dapibus lobortis viverra libero accumsan, vel praesent laoreet.
              Litora torquent nostra dui per proin aptent gravida libero. Per
              placerat ridiculus ad lacinia hendrerit neque. Nullam per senectus
              elementum donec vel vehicula imperdiet. Per eget gravida erat
              cubilia sed porttitor ornare.
            </p>
            <p className="text-gray-300">
              Vulputate tortor blandit elit venenatis aenean natoque erat urna.
              Dictum fermentum morbi magnis accumsan penatibus eleifend. Sit
              placerat ex vehicula maecenas nibh mollis tortor.
            </p>
            <button className="mt-6 text-white font-bold text-lg bg-amber-800 hover:bg-amber-900 px-8 py-3 w-fit ">
              Book an Appointment
            </button>
          </div>
          <div className="col-span-1 md:col-span-2 relative w-full h-full aspect-square flex items-center justify-center">
            <Image
              src="/images/about-img.webp"
              fill
              className="w-full object-cover"
              alt="picture of owner"
            />
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center bg-gray-950 py-20 px-4">
          <h2 className="text-white font-bold text-5xl mb-12">Meet Our Team</h2>
          {/* <ArtistGrid /> */}
        </div>
      </div>
      <ContactSection />
    </div>
  )
}

export default AboutPage
