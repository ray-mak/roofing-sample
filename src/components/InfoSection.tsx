import Image from "next/image"

const InfoSection = () => {
  return (
    <div className="-mt-20 flex items-center justify-center">
      <div className="w-full md:w-5/6 lg:w-3/4 lg:max-w-6xl grid grid-cols-1 lg:grid-cols-3 p-8 bg-neutral-900 rounded z-[2]">
        <div className="p-6 flex gap-8">
          <div>
            <Image
              src="/images/phone-icon.png"
              width={80}
              height={80}
              alt="phone icon"
              className="p-4"
            />
          </div>
          <div>
            <p className="text-white">Call Now</p>
            <p className="text-xl font-bold text-cyan-500 mt-4">555-555-5555</p>
          </div>
        </div>
        <div className="p-6 flex gap-8 border-y lg:border-y-0 lg:border-x border-neutral-600">
          <div>
            <Image
              src="/images/clock-icon.png"
              width={80}
              height={80}
              alt="clock icon"
              className="p-4"
            />
          </div>
          <div>
            <p className="text-white">Working Hours</p>
            <p className="text-white mt-4">Mon-Fri: 9am-6pm</p>
          </div>
        </div>
        <div className="p-6 flex gap-8">
          <div>
            <Image
              src="/images/location-icon.png"
              width={80}
              height={80}
              alt="location icon"
              className="p-4"
            />
          </div>
          <div>
            <p className="text-white">Location</p>
            <p className="text-xl font-bold text-white mt-4">Perris, CA</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoSection
