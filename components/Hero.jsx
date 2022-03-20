/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

import { Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import Typewriter from "typewriter-effect"
import Animate from "../components/Globe"

const navigation = [
  { name: "Products", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
]

export default function Example() {
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
  return (
    <div className="relative bggridbottom overflow-hidden w-full  ">
      <div className="relative  ">
        <main className=" px-4 sm:px-6">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="text-center md:max-w-7xl md:mx-auto lg:col-span-6 mt-16 lg:text-left">
              <h1>
                <span className="block text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base 2xl:text-2xl">
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter

                        .typeString("Decentralized")

                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Innovative")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Groundbreaking")

                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Futuristic")
                        .start()
                    }}
                  />
                </span>
                <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl 2xl:text-9xl">
                  <span className="block text-gray-900">
                    <span className="block text-golemblue">Golem</span> is{" "}
                    <span id="typewriter" className="text-black">
                      decentralizing
                    </span>
                  </span>
                  <span>
                    The{" "}
                    <span className="inline-block bg-gradient-to-r from-golemblue via-purple-500 to-pink-500 bg-clip-text text-transparent">
                      world wide web
                    </span>
                  </span>
                </span>
              </h1>
              <p className="mt-3 text-xl 2xl:text-4xl text-slate-600 sm:mt-5 md:max-w-6xl ">
                Golem is a powerful permissionless supercomputer accessible by anyone. Accelerate workloads like machine learning, deep
                learning, CI/CD pipelines and much more at an instant.
              </p>
              <div className="mt-8  sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <p className="text-base 2xl:text-4xl font-medium text-gray-900 mb-1 text-center lg:text-left">Let&apos;s get started</p>

                <button
                  type="submit"
                  className="mt-3 w-full px-6 py-3 2xl:py-6 2xl:px-12 border border-transparent text-base 2xl:text-4xl font-medium rounded-md text-white bg-black shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0  sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                >
                  Start Providing
                </button>
                <button
                  type="submit"
                  className="mt-3 w-full px-6 py-3 2xl:py-6 2xl:px-12 border border-transparent text-base 2xl:text-4xl font-medium rounded-md text-white bg-black shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                >
                  Start Requesting
                </button>
                <button
                  type="submit"
                  className="mt-3 w-full px-6 py-3 2xl:py-6 2xl:px-12 border border-transparent text-base 2xl:text-4xl font-medium rounded-md text-white bg-black shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                >
                  Explore tokenomics
                </button>
                <p className="mt-3 text-sm text-gray-500 2xl:text-2xl">
                  We care about the protection of your data. Read our
                  <a href="#" className="font-medium text-gray-900 underline ml-1">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </div>
            <div className="relative hidden lg:visible sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <Animate
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                arcsData={arcsData}
                arcColor={"color"}
                arcDashLength={() => Math.random()}
                arcDashGap={() => Math.random()}
                arcDashAnimateTime={() => Math.random() * 4000 + 500}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
