import Image from "next/image"

const WhatWeDoSection = () => {
  return (
    <div className="image-section flex flex-col items-center justify-center gap-8 px-4 md:py-16">
      <div className="lg:mt-6 grid grid-cols-1 xl:grid-cols-2 w-full lg:max-w-6xl p-4 gap-8 lg:gap-0 ">
        <div>
          <Image
            src="/images/what-we-do.webp"
            width={500}
            height={500}
            alt="what we do image"
          />
        </div>
        <div className="flex flex-col justify-center gap-6 leading-relaxed">
          <h2 className="text-4xl font-bold text-gray-800">
            From Leaks to Peaks, We've Got You Covered
          </h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, aperiam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit.Nullam per senectus elementum donec vel vehicula
            imperdiet. Per eget gravida erat cubilia sed porttitor ornare.
          </p>
          <p className="text-gray-600">
            Dapibus lobortis viverra libero accumsan, vel praesent laoreet.
            Litora torquent nostra dui per proin aptent gravida libero. Per
            placerat ridiculus ad lacinia hendrerit neque. Nullam per senectus
            elementum donec vel vehicula imperdiet. Per eget gravida erat
            cubilia sed porttitor ornare.
          </p>
          <p className="text-gray-600">
            Vulputate tortor blandit elit venenatis aenean natoque erat urna.
            Dictum fermentum morbi magnis accumsan penatibus eleifend. Sit
            placerat ex vehicula maecenas nibh mollis tortor. Persapiente
            pulvinar aenean neque. Pellentesque pellentesque dignissim
            pellentesque.
          </p>
        </div>
      </div>
    </div>
  )
}

export default WhatWeDoSection
