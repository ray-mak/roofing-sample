"use client"
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api"
import Link from "next/link"
import { Roboto } from "next/font/google"
import { useCallback, useState } from "react"
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

const MapComponent = ({ apiKey }: { apiKey: string }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: apiKey,
  })
  const [map, setMap] = useState(null)
  const onLoad = useCallback(function callback(map: any) {
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map: any) {
    setMap(null)
  }, [])
  const center = { lat: 33.73881, lng: -117.23706 }

  if (!isLoaded) return

  return (
    <div className="p-4">
      <GoogleMap
        center={center}
        zoom={17}
        mapContainerStyle={{ width: "100%", height: "480px" }}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
        }}
      >
        <Marker position={center} />
        <div
          style={{
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
          }}
          className={`${roboto.className} absolute flex gap-12 top-[12px] left-[12px] bg-white p-[12px] text-xs`}
        >
          <div>
            <h2 className="text-sm font-semibold">Business Location</h2>
            <p className="text-gray-600 ">123 Main Street</p>
            <p className="text-gray-600 mb-2"> San Diego, CA 92101</p>
            <Link
              href={`https://www.google.com/maps/dir/?api=1&destination=33.73881,-117.23706`}
              target="_blank"
              rel="noopener"
              className="text-blue-600"
            >
              View larger map
            </Link>
          </div>
          <div className="flex flex-col items-center hover:underline">
            <Link
              href={`https://www.google.com/maps/dir/?api=1&destination=33.73881,-117.23706`}
              target="_blank"
              rel="noopener"
              className="text-blue-600 flex flex-col items-center gap-1"
            >
              <div className="directions"></div>
              <p>Directions</p>
            </Link>
          </div>
        </div>
      </GoogleMap>
    </div>
  )
}

export default MapComponent
