import { useEffect, useRef } from "react"

export default function Map() {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const initMap = () => {
      const google = (window as any).google
      if (!google || !mapRef.current) return

      new google.maps.Map(mapRef.current, {
        center: { lat: 18.7883, lng: 98.9853 }, // เชียงใหม่
        zoom: 12,
      })
    }

    // ถ้าโหลดแล้ว
    if ((window as any).google) {
      initMap()
      return
    }

    const script = document.createElement("script")
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
    script.async = true
    script.defer = true
    script.onload = initMap

    document.head.appendChild(script)

    return () => {
      script.remove()
    }
  }, [])

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <div ref={mapRef} style={{ height: "100%", width: "100%" }} />
    </div>
  )
}
