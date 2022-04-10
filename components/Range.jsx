import React, { useState, useEffect, useRef } from "react"

export default function Slider(props) {
  const [rangeval, setRangeval] = useState("1")
  const showGB = props.showGB

  return showGB ? (
    <div className="relative">
      <label htmlFor="cores" className="inline-block mt-4 font-medium">
        {props.label}
      </label>
      <span className="ml-2 relative text-sm inline-block">
        {rangeval} <span className="text-sm text-gray-400 font-semibold">GB</span>
      </span>{" "}
      <input
        type="range"
        className="range"
        id={props.rangeid}
        min={props.min}
        max={props.max}
        step={props.step}
        onChange={(event) => setRangeval(event.target.value)}
      />
    </div>
  ) : (
    <div className="relative">
      <label htmlFor="cores" className="inline-block mt-4 font-medium">
        {props.label}
      </label>
      <span className="ml-2 relative text-sm inline-block">{rangeval}</span>{" "}
      <input
        type="range"
        className="range"
        id={props.rangeid}
        min={props.min}
        max={props.max}
        step={props.step}
        onChange={(event) => setRangeval(event.target.value)}
      />
    </div>
  )
}
