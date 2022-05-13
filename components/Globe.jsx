import ReactDOM from "react-dom"
import React from "react"
import dynamic from "next/dynamic"
import Globe from "react-globe.gl"
import { useEffect, useState, useRef } from "react"

const MAP_CENTER = { lat: 37.6, lng: -16.6, altitude: 1.6 }

const Animate = () => {
  const globeEl = useRef()
  const [countries, setCountries] = useState({ features: [] })

  useEffect(() => {
    // load data
    fetch(
      "https://gist.githubusercontent.com/cryptobench/9bf07d45b5350b700fddcf2634b91e96/raw/d8bfb37ae4cdb3bd5b3bd4adbe0735267e9282cc/data.geojson"
    )
      .then((res) => res.json())
      .then(setCountries)
    globeEl.current.pointOfView(MAP_CENTER, 4000)
    globeEl.current.controls().autoRotate = true
    globeEl.current.controls().autoRotateSpeed = 0.7
    globeEl.current.controls().enableZoom = false
  }, [])

  const N = 20

  const arcsData = [...Array(N).keys()].map(() => ({
    startLat: (Math.random() - 0.5) * 180,
    startLng: (Math.random() - 0.5) * 360,
    endLat: (Math.random() - 0.5) * 180,
    endLng: (Math.random() - 0.5) * 360,
    color: [
      ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
      ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
    ],
  }))
  const colors = ["#0c14d4", "#ffffff"]

  return (
    <Globe
      ref={globeEl}
      globeImageUrl="/earth2.jpg"
      atmosphereColor="#09238A"
      polygonCapColor={() => "transparent"}
      polygonSideColor={() => "transparent"}
      polygonStrokeColor={true}
      hexPolygonColor={() => "#0a14b4"}
      polygonLabel={({ properties: d }) => `
        
        <div class="bg-black bg-opacity-80 p-6 w-96 rounded text-sm">
        <p class=" font-bold text-2xl mb-2">${d.ADMIN} (${d.ISO_A2})</p>
        <div class="grid grid-cols-2 gap-4">
            <div>
              <p class="text-xl font-bold block">
              ${Math.round(+d.POP_EST / 1e4) / 1e2 || 913} <span class="text-base font-semibold block ">Providers</span>
              </p>
            </div>
            <div>
              <p class="text-xl font-bold block">
                839 <span class=" font-semibold block text-base ">Cores</span>
              </p>
            </div>
            <div>
              <p class="text-xl font-bold inline-block">
                30.4 <span class=" font-semibold inline-block text-sm text-gray-400">TB</span><span class=" font-semibold block text-base">Memory</span>
              </p>
            </div>
            <div>
            <p class="text-xl font-bold inline-block">
                84.1 <span class=" font-semibold inline-block text-sm text-gray-400">TB</span><span class=" font-semibold block text-base">Disk</span>
              </p>
            </div>
          </div>
        </div>
        
      `}
      polygonsData={countries.features.filter((d) => d.properties.ISO_A2 !== "AQ")}
      atmosphereAltitude={0.13}
      backgroundColor="rgba(255, 0, 0, 0)"
      hexPolygonsData={countries.features}
      width={800}
      height={600}
      hexPolygonResolution={4}
      hexPolygonMargin={0.3}
      arcDashLength={() => Math.random()}
      arcLabel="test"
      arcDashGap={() => Math.random()}
      arcDashAnimateTime={() => Math.random() * 4000 + 500}
      arcsData={arcsData}
      arcColor={"color"}
    />
  )
}

export default React.memo(Animate)
