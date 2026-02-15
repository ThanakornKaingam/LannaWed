import { useEffect, useRef } from "react"

declare global {
  interface Window {
    google: any
  }
}

export default function Map() {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const loadMap = () => {
      if (!window.google) return

      new window.google.maps.Map(mapRef.current!, {
        center: { lat: 18.7883, lng: 98.9853 },
        zoom: 12,
      })
    }

    const script = document.createElement("script")
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
    script.async = true
    script.onload = loadMap
    document.body.appendChild(script)
  }, [])

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <div ref={mapRef} style={{ height: "100%", width: "100%" }} />
    </div>
  )
}
