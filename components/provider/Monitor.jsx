import Install from "../Install"
import Typewriter from "typewriter-effect"

export default function Example() {
  return (
    <div className="relative bggridbottom overflow-hidden w-full pb-24">
      <div className="relative  ">
        <main className="mt-40 mx-auto max-w-7xl px-4 sm:px-6">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="text-center  lg:col-span-12 ">
              <h1>
                <span className="block text-sm font-semibold uppercase tracking-wide text-golemblue">Monitoring</span>
                <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-4xl xl:text-6xl">
                  Monitor live via Golem Stats
                </span>
              </h1>
              <p className="mt-3 text-xl text-slate-600 sm:mt-5 ">
                The Golem Network provides a stats page for the network. Explore data from competing providers and monitor your own
                provider.
              </p>
            </div>

            <a className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-12 app">
              <div className="flex h-full">
                <div className="m-auto">
                  <div className="relative mx-auto w-full rounded-lg   col-span-12">
                    <img className="h-full w-auto   rounded-lg" src="https://i.imgur.com/XzLUt2N.png" alt="" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </main>
      </div>
    </div>
  )
}
