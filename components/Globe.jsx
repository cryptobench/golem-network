import ReactDOM from "react-dom"
import React from "react"
import dynamic from "next/dynamic"
import Globe from "react-globe.gl"
import { useEffect, useState, useRef } from "react"

const MAP_CENTER = { lat: 37.6, lng: -16.6, altitude: 1.5 }

const Animate = () => {
  const globeEl = useRef()
  const [countries, setCountries] = useState({ features: [] })

  useEffect(() => {
    // load data
    fetch(
      "https://gist.githubusercontent.com/cryptobench/fc9f8791e8ec2197aaf14b1edf996abc/raw/5d5cbebc0efc3d7b84ca9f041dd0d107add1cf11/test.geojson"
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
  const colors = ["#000000", "#ffffff"]
  return (
    <Globe
      className="globelort"
      ref={globeEl}
      globeImageUrl="/earth.jpeg"
      atmosphereColor="#09238A"
      atmosphereAltitude={0.13}
      backgroundColor="rgba(255, 0, 0, 0)"
      hexPolygonsData={countries.features}
      width={800}
      height={600}
      hexPolygonResolution={4}
      pointOfView={MAP_CENTER}
      hexPolygonMargin={0.1}
      arcDashLength={() => Math.random()}
      arcDashGap={() => Math.random()}
      arcDashAnimateTime={() => Math.random() * 4000 + 500}
      hexPolygonColor={() => colors[Math.floor(Math.random() * colors.length)]}
      arcsData={arcsData}
      arcColor={"color"}
    />
  )
}

export default React.memo(Animate)
