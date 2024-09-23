import Image from "next/image"

const ServicesSection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 py-20">
      <h2 className="text-white font-bold text-4xl">What We Do</h2>
      <p className="text-gray-300 text-center">
        We create custom designs or bring your ideas to life with your own
        sketches. <br />
        Our shop specializes in high-quality, long-lasting tattoos
      </p>
      <div className="mt-6 w-full md:w-5/6 lg:w-3/4 lg:max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 p-4 md:p-0 text-gray-200">
        <div className="grid grid-cols-10 bg-zinc-900 transition duration-300 border border-transparent hover:border hover:border-amber-500">
          <div className="col-span-7 py-6 px-8">
            <div className="flex flex-col gap-4">
              <p className="text-right font-bold">Tattooing</p>
              <p className="text-right text-sm text-zinc-400">
                From custom designs to classic styles, our expert artists bring
                your vision to life with precision and creativity.
              </p>
              <p className="text-right text-sm text-amber-500">From $50</p>
            </div>
          </div>
          <div className="col-span-3 flex items-center justify-center p-6 bg-zinc-800">
            <Image
              alt="tattoo icon"
              src="/images/tattoo-icon.png"
              width={80}
              height={80}
            />
          </div>
        </div>
        <div className="grid grid-cols-10 bg-zinc-900 transition duration-300 border border-transparent hover:border hover:border-amber-500">
          <div className="col-span-3 flex items-center justify-center p-6 bg-zinc-800">
            <Image
              alt="tattoo icon"
              src="/images/piercing-icon.png"
              width={80}
              height={80}
            />
          </div>
          <div className="col-span-7 py-6 px-8">
            <div className="flex flex-col gap-4">
              <p className="text-left font-bold">Tattooing</p>
              <p className="text-left text-sm text-zinc-400">
                Professional body piercings with a variety of styles to choose
                from. Express yourself with confidence.
              </p>
              <p className="text-left text-sm text-amber-500">From $30</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-10 bg-zinc-900 transition duration-300 border border-transparent hover:border hover:border-amber-500">
          <div className="col-span-7 py-6 px-8">
            <div className="flex flex-col gap-4">
              <p className="text-right font-bold">Removal</p>
              <p className="text-right text-sm text-zinc-400">
                We offer effective tattoo removal solutions, helping you make
                room for new ink or restore your skin.
              </p>
              <p className="text-right text-sm text-amber-500">From $50</p>
            </div>
          </div>
          <div className="col-span-3 flex items-center justify-center p-6 bg-zinc-800">
            <Image
              alt="tattoo icon"
              src="/images/removal-icon.png"
              width={80}
              height={80}
            />
          </div>
        </div>
        <div className="grid grid-cols-10 bg-zinc-900 transition duration-300 border border-transparent hover:border hover:border-amber-500">
          <div className="col-span-3 flex items-center justify-center p-6 bg-zinc-800">
            <Image
              alt="tattoo ink icon"
              src="/images/coverup-icon.png"
              width={80}
              height={80}
            />
          </div>
          <div className="col-span-7 py-6 px-8">
            <div className="h-full flex flex-col gap-4">
              <p className="text-left font-bold">Cover Up</p>
              <p className="text-left text-sm text-zinc-400 flex-grow">
                Turn old or unwanted tattoos into fresh works of art with our
                expert cover-up services.
              </p>
              <p className="text-left text-sm text-amber-500">From $30</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesSection
