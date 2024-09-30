import Link from "next/link"
import GalleryComponent from "./GalleryComponent"

const OurWorkSection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 py-20 bg-zinc-900">
      <h2 className="text-white font-bold text-4xl">Our Work</h2>
      <div className="w-full p-2">
        <GalleryComponent />
      </div>
      {/* <div className="mt-6">
        <Link
          href="/gallery"
          className="text-white font-bold text-lg bg-amber-800 hover:bg-amber-900 px-8 py-3"
        >
          See More of Our Work
        </Link>
      </div> */}
    </div>
  )
}

export default OurWorkSection
