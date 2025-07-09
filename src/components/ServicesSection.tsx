import Image from "next/image"
import Link from "next/link"

const ServicesSection = () => {
  const features = [
    {
      title: "Roof Repair",
      image: "/images/repair.png",
      description:
        "We are a full-service roofing installation and repair company dedicated to prividing the best service and the best quality work.",
    },
    {
      title: "Roof Installation",
      image: "/images/house.png",
      description:
        "We are a full-service roofing installation and repair company dedicated to prividing the best service and the best quality work.",
    },
    {
      title: "Roof Tear Offs",
      image: "/images/tear.png",
      description:
        "We are a full-service roofing installation and repair company dedicated to prividing the best service and the best quality work.",
    },
  ]
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-28">
      <h2 className="font-bold text-4xl text-center">
        Customer Service is Our{" "}
        <span className="text-cyan-500">Top Priority</span>
      </h2>
      <p className="text-center p-4 w-full md:w-5/6 lg:w-3/4 lg:max-w-4xl">
        We are roofing contractors that specialize in roof repair, new roof
        installation, metal roofing, commercial roofing, and flat roofing. Our
        company is on a mission to provide our community with the safest roofing
        materials and do so with honesty, integrity, and top-notch quality
      </p>
      <div className="my-16 w-full md:w-5/6 lg:w-3/4 lg:max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 p-4 md:p-0">
        {features.map((feature, index) => (
          <div key={index} className="group relative flex flex-col items-center justify-center gap-4 border border-gray-300 bg-gray-50 dark:bg-gray-800 p-6 hover:border-teal-700 hover:shadow-xl  transition-colors duration-300">
            <div>
              <Image
                src={feature.image}
                width={70}
                height={70}
                alt={`icon of ${feature.title}`}
              />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 text-center">
              {feature.title}
            </h2>
            <p className="text-center text-gray-800 dark:text-gray-200">
              {feature.description}
            </p>
            <div className="absolute top-0 h-1 bg-cyan-600 dark:bg-cyan-500 w-1/3 group-hover:w-full  duration-300 justify-center"></div>
          </div>
        ))}
      </div>
      <h2 className="font-bold text-4xl text-center">
        <span className="text-cyan-500">Roofing Repair</span> Contractors in
        Murrieta, CA
      </h2>
      <p className="text-center p-4 w-full md:w-5/6 lg:w-3/4 lg:max-w-4xl">
        We are proud to offer a one-year warrantee on every job we complete, so
        our clients can rest assured that their new roof install or repair will
        withstand the test of time. In addition, our roofing contractors are
        happy to come out and complete an emergency roof repair at any time of
        the day or night!
      </p>
      <div>
        <Link
          href="/contact"
          className="uppercase px-12 border-2 border-cyan-700 bg-cyan-700 hover:border-cyan-800 hover:bg-cyan-800 text-white font-semibold rounded tracking-wider py-3"
        >
          Roofing Services
        </Link>
      </div>
    </div>
  )
}

export default ServicesSection
