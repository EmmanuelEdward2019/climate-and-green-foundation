'use client'

import { useEffect, useRef } from 'react'

export default function MapContact() {
  const mapRef = useRef<HTMLDivElement>(null)
  const instanceRef = useRef<unknown>(null)

  useEffect(() => {
    if (typeof window === 'undefined' || instanceRef.current) return

    import('leaflet').then((L) => {
      if (!mapRef.current || instanceRef.current) return

      // @ts-expect-error — _getIconUrl is private
      delete L.Icon.Default.prototype._getIconUrl
      L.Icon.Default.mergeOptions({ iconRetinaUrl: '', iconUrl: '', shadowUrl: '' })

      const map = L.map(mapRef.current!, {
        center: [6.5244, 3.3792],
        zoom: 11,
        scrollWheelZoom: false,
        zoomControl: true,
        attributionControl: true,
      })

      instanceRef.current = map

      L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: 'abcd',
          maxZoom: 19,
        }
      ).addTo(map)

      const svgIcon = L.divIcon({
        className: '',
        iconSize: [40, 40],
        iconAnchor: [20, 20],
        popupAnchor: [0, -24],
        html: `
          <div style="position:relative;width:40px;height:40px;">
            <span style="
              position:absolute;inset:0;border-radius:50%;
              background:#3ABE2C22;
              animation:contact-pulse 2s ease-out infinite;
            "></span>
            <span style="
              position:absolute;inset:7px;border-radius:50%;
              background:#1C5E2C;
              border:3px solid white;
              box-shadow:0 2px 10px rgba(0,0,0,0.3);
            "></span>
          </div>
        `,
      })

      L.marker([6.5244, 3.3792], { icon: svgIcon })
        .addTo(map)
        .bindPopup(
          `<div style="font-family:'EB Garamond',serif;padding:4px 2px;">
            <strong style="font-size:15px;color:#1C5E2C;">Climate & Green World Foundation</strong><br/>
            <span style="font-size:13px;color:#5F6368;">Lagos, Nigeria</span>
          </div>`,
          { maxWidth: 220, className: 'cgwf-popup' }
        )
        .openPopup()
    })

    return () => {
      if (instanceRef.current) {
        ;(instanceRef.current as { remove: () => void }).remove()
        instanceRef.current = null
      }
    }
  }, [])

  return (
    <>
      <style>{`
        @keyframes contact-pulse {
          0%   { transform: scale(1); opacity: 0.7; }
          70%  { transform: scale(2.8); opacity: 0; }
          100% { transform: scale(2.8); opacity: 0; }
        }
        .cgwf-popup .leaflet-popup-content-wrapper {
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.15);
          border: 1px solid #E5E7EB;
        }
        .cgwf-popup .leaflet-popup-tip-container { display: none; }
        .leaflet-container { font-family: 'EB Garamond', serif; }
        .leaflet-control-attribution {
          font-family: 'Comfortaa', sans-serif;
          font-size: 10px !important;
        }
      `}</style>
      <div ref={mapRef} className="w-full h-full" style={{ minHeight: '320px' }} />
    </>
  )
}
