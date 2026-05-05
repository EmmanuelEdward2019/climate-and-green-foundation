'use client'

import { useEffect, useRef } from 'react'

/* Markers to render on the map */
const markers = [
  {
    lat: 9.082,
    lng: 8.6753,
    label: 'Nigeria',
    sublabel: 'Active restoration sites',
    color: '#1C5E2C',
    ring: '#3ABE2C',
  },
  {
    lat: 14.5,
    lng: 1.5,
    label: 'Sahel — Niger',
    sublabel: 'Landscape restoration',
    color: '#3ABE2C',
    ring: '#1C5E2C',
  },
  {
    lat: 13.5,
    lng: 8.0,
    label: 'Sahel — Nigeria North',
    sublabel: 'Desertification defense',
    color: '#3ABE2C',
    ring: '#1C5E2C',
  },
]

export default function MapLeaflet() {
  const mapRef = useRef<HTMLDivElement>(null)
  const instanceRef = useRef<unknown>(null)

  useEffect(() => {
    if (typeof window === 'undefined' || instanceRef.current) return

    /* Dynamically import Leaflet so Next.js SSR never touches it */
    import('leaflet').then((L) => {
      if (!mapRef.current || instanceRef.current) return

      /* Leaflet uses a bundler default icon that breaks in Next.js — fix it */
      // @ts-expect-error — _getIconUrl is a private method
      delete L.Icon.Default.prototype._getIconUrl
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: '',
        iconUrl: '',
        shadowUrl: '',
      })

      const map = L.map(mapRef.current!, {
        center: [11, 8],
        zoom: 4,
        scrollWheelZoom: false,
        zoomControl: true,
        attributionControl: true,
      })

      instanceRef.current = map

      /* CartoDB Positron — clean greyscale, matches the brand palette */
      L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: 'abcd',
          maxZoom: 19,
        }
      ).addTo(map)

      /* Highlight Nigeria polygon-like fill — crude approach using a circle overlay */
      L.circle([9.082, 8.6753], {
        radius: 500000,
        color: '#1C5E2C',
        fillColor: '#1C5E2C',
        fillOpacity: 0.08,
        weight: 1.5,
        opacity: 0.4,
      }).addTo(map)

      /* Sahel belt — wider ellipse-like area via circles */
      L.circle([14.0, 5.0], {
        radius: 900000,
        color: '#3ABE2C',
        fillColor: '#3ABE2C',
        fillOpacity: 0.06,
        weight: 1,
        opacity: 0.3,
      }).addTo(map)

      /* Custom SVG pulse markers */
      markers.forEach((m) => {
        const svgIcon = L.divIcon({
          className: '',
          iconSize: [36, 36],
          iconAnchor: [18, 18],
          popupAnchor: [0, -20],
          html: `
            <div style="position:relative;width:36px;height:36px;">
              <span style="
                position:absolute;inset:0;border-radius:50%;
                background:${m.ring}22;
                animation:leaflet-pulse 2s ease-out infinite;
              "></span>
              <span style="
                position:absolute;inset:6px;border-radius:50%;
                background:${m.color};
                border:2.5px solid white;
                box-shadow:0 2px 8px rgba(0,0,0,0.25);
              "></span>
            </div>
          `,
        })

        L.marker([m.lat, m.lng], { icon: svgIcon })
          .addTo(map)
          .bindPopup(
            `<div style="font-family:'EB Garamond',serif;padding:4px 2px;">
              <strong style="font-size:15px;color:#1C5E2C;">${m.label}</strong><br/>
              <span style="font-size:13px;color:#5F6368;">${m.sublabel}</span>
            </div>`,
            { maxWidth: 200, className: 'cgwf-popup' }
          )
      })
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
        @keyframes leaflet-pulse {
          0%   { transform: scale(1); opacity: 0.7; }
          70%  { transform: scale(2.5); opacity: 0; }
          100% { transform: scale(2.5); opacity: 0; }
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
      <div
        ref={mapRef}
        className="w-full h-full rounded-2xl overflow-hidden"
        style={{ minHeight: '420px' }}
      />
    </>
  )
}
