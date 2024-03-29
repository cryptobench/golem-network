import React, { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
export default function Stats(props) {
  const center = props.center

  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return !center ? (
    <div data-aos="fade-up" data-aos-duration="1000" className=" mx-auto max-w-7xl px-4 sm:px-6 relative  ">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="  lg:col-span-8 ">
          <h1>
            <span className="block text-sm font-semibold uppercase tracking-wide text-golemblue">{props.header}</span>
            <span className="mt-1 block text-3xl tracking-tight font-extrabold sm:text-4xl xl:text-6xl ">
              <span className="fader">{props.title}</span>
            </span>
          </h1>
          <p className="mt-3 text-xl text-slate-600 sm:mt-5 "></p>
        </div>
        <div className="col-span-7 col-start-1 grid grid-cols-4 gap-x-0">
          <div>
            <p className="text-4xl font-bold block">
              {props.providers}{" "}
              <span className="text-xl font-semibold block text-golemblue">
                Providers
              </span>
            </p>
          </div>
          <div>
            <p className="text-4xl font-bold block">
              {props.cores}{" "}
              <span className="text-xl font-semibold block text-golemblue">
                Cores
              </span>
            </p>
          </div>
          <div>
            <p className="text-4xl text-center font-bold block">
              {props.memory} <span className="text-sm text-gray-500">TB</span>{" "}
              <span className="text-xl font-semibold block text-golemblue">
                Memory
              </span>
            </p>
          </div>
          <div>
            <p className="text-4xl font-bold block">
              {props.disk} <span className="text-sm text-gray-500">TB</span>{" "}
              <span className="text-xl font-semibold block text-golemblue">
                Disk
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div data-aos="fade-up" className="py-24 mx-auto max-w-7xl px-4 sm:px-6 relative ">
      <div className="grid grid-cols-12 lg:gap-8 gap-x-2 gap-y-4">
        <div className="text-center  lg:col-span-12 col-span-12 ">
          <h1>
            <span className="block text-sm font-semibold uppercase tracking-wide text-golemblue">{props.header}</span>
            <span className="mt-1 block text-3xl tracking-tight font-extrabold sm:text-4xl xl:text-6xl">{props.title}</span>
          </h1>
          <p className="mt-3 text-xl text-slate-600 sm:mt-5 "></p>
        </div>

        <div className="col-span-12 md:col-span-3 lg:col-span-2 lg:col-start-3 text-center">
          <p className="text-4xl font-bold block relative">
            {props.providers}{" "}
            <span className="text-xl font-semibold block text-golemblue">
              Providers
            </span>
          </p>
        </div>
        <div className="col-span-12 md:col-span-3 lg:col-span-2 text-center">
          <p className="text-4xl font-bold block">
            {props.cores}{" "}
            <span className="text-xl font-semibold block text-golemblue">
              Cores
            </span>
          </p>
        </div>
        <div className="col-span-12 md:col-span-3 lg:col-span-2 text-center">
          <p className="text-4xl font-bold block text-center">
            {props.memory} <span className="text-sm text-gray-500">TB</span>{" "}
            <span className="text-xl font-semibold block text-golemblue">
              Memory
            </span>
          </p>
        </div>
        <div className="col-span-12 md:col-span-3 lg:col-span-2 text-center">
          <p className="text-4xl font-bold block">
            {props.disk} <span className="text-sm text-gray-500">TB</span>{" "}
            <span className="text-xl font-semibold block text-golemblue">
              Disk
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
