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

import Nav from "../components/Nav"
import { Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import Typewriter from "typewriter-effect"

const navigation = [
  { name: "Products", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
]

export default function Example() {
  return (
    <div className="relative bg-white overflow-hidden w-full">
      <div className="hidden lg:block lg:absolute lg:inset-0 w-full" aria-hidden="true">
        <svg className="absolute w-full" width="100%" height="100%" fill="none">
          <defs>
            <pattern id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047" x={118} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
              <rect x={0} y={0} width={2} height={2} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect className="w-full" width="100%" height="100%" fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)" />
        </svg>
      </div>

      <div className="relative pb-16 sm:pb-24 lg:pb-32 ">
        <Nav className="w-full"></Nav>
        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-24">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1>
                <span className="block text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
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
                <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
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
              <p className="mt-3 text-xl text-slate-600 sm:mt-5 ">
                Golem is a powerful permissionless supercomputer accessible by anyone. Accelerate workloads like machine learning, deep
                learning, CI/CD pipelines and much more at an instant.
              </p>
              <div className="mt-8  sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <p className="text-base font-medium text-gray-900 mb-1">Let's get started</p>

                <button
                  type="submit"
                  className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0  sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                >
                  Start Providing
                </button>
                <button
                  type="submit"
                  className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                >
                  Start Requesting
                </button>
                <button
                  type="submit"
                  className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                >
                  Explore tokenomics
                </button>
                <p className="mt-3 text-sm text-gray-500">
                  We care about the protection of your data. Read our
                  <a href="#" className="font-medium text-gray-900 underline ml-1">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <svg
                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden"
                width={640}
                height={784}
                fill="none"
                viewBox="0 0 640 784"
                aria-hidden="true"
              >
                <defs>
                  <pattern id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e" x={118} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect y={72} width={640} height={640} className="text-gray-50" fill="currentColor" />
                <rect x={118} width={404} height={784} fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)" />
              </svg>
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <button
                  type="button"
                  className="relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="sr-only">Watch our video to learn more</span>
                  <iframe
                    className="w-full"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/FZb_w5JXvJ8?controls=0"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
