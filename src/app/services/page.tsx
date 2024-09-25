import Image from "next/image"

const ServicesPage = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center justify-center">
        <div className="banner text-white flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Our Services
          </h1>
        </div>
        <div className=" w-full md:w-5/6 lg:w-3/4 lg:max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 p-4 md:p-0 my-16">
          <div className="flex items-center justify-center overflow-hidden">
            <Image
              src="/images/portfolio1.webp"
              width={500}
              height={500}
              alt="picture of someone getting a tattoo"
              className="w-full hover:scale-[1.15] transition duration-500 object-cover"
            />
          </div>
          <div className="flex flex-col gap-6 justify-center text-gray-300">
            <h2 className="text-4xl font-bold text-amber-600">Tattooing</h2>
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Faucibus
              conubia accumsan neque tellus viverra. Sed nisl justo eros fusce
              rutrum varius odio platea rhoncus.
            </p>
            <p>
              Dapibus lobortis viverra libero accumsan, vel praesent laoreet.
              Litora torquent nostra dui per proin aptent gravida libero. Per
              placerat ridiculus ad lacinia hendrerit neque. Nullam per senectus
              elementum donec vel vehicula imperdiet.
            </p>
          </div>
        </div>
        <div className=" w-full md:w-5/6 lg:w-3/4 lg:max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 p-4 md:p-0">
          <div className="flex items-center justify-center lg:order-2 overflow-hidden">
            <Image
              src="/images/piercing-img.webp"
              width={500}
              height={500}
              alt="picture of a woman with a piercing"
              className="w-full hover:scale-125 transition duration-500"
            />
          </div>
          <div className="flex flex-col gap-6 justify-center lg:order-1 text-gray-300">
            <h2 className="text-3xl font-bold text-amber-600">Piercing</h2>
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Faucibus
              conubia accumsan neque tellus viverra. Sed nisl justo eros fusce
              rutrum varius odio platea rhoncus.
            </p>
            <p>
              Dapibus lobortis viverra libero accumsan, vel praesent laoreet.
              Litora torquent nostra dui per proin aptent gravida libero. Per
              placerat ridiculus ad lacinia hendrerit neque. Nullam per senectus
              elementum donec vel vehicula imperdiet.
            </p>
          </div>
        </div>
        <div className=" w-full md:w-5/6 lg:w-3/4 lg:max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 p-4 md:p-0 my-16">
          <div className="flex items-center justify-center overflow-hidden">
            <Image
              src="/images/removal-img.webp"
              width={500}
              height={500}
              alt="picture of tattoo removal"
              className="w-full hover:scale-[1.15] transition duration-500 object-cover"
            />
          </div>
          <div className="flex flex-col gap-6 justify-center text-gray-300">
            <h2 className="text-4xl font-bold text-amber-600">Removal</h2>
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Faucibus
              conubia accumsan neque tellus viverra. Sed nisl justo eros fusce
              rutrum varius odio platea rhoncus.
            </p>
            <p>
              Dapibus lobortis viverra libero accumsan, vel praesent laoreet.
              Litora torquent nostra dui per proin aptent gravida libero. Per
              placerat ridiculus ad lacinia hendrerit neque. Nullam per senectus
              elementum donec vel vehicula imperdiet.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesPage
