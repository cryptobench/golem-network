import Install from "../Install"
import Typewriter from "typewriter-effect"

export default function Example() {
  return (
    <div className="relative bggridbottom overflow-hidden w-full pb-24">
      <div className="relative  ">
        <main className="mt-40 mx-auto max-w-7xl px-4 sm:px-6">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1>
                <span className="block text-sm font-semibold uppercase tracking-wide text-golemblue">Installation</span>
                <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-4xl xl:text-6xl">Installing is super easy</span>
              </h1>
              <p className="mt-3 text-xl text-slate-600 sm:mt-5 ">
                Copy and paste the following code into your terminal to install the Golem Network. The only requirement is a Linux machine
                with virtualization enabled in BIOS.
              </p>
            </div>

            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6">
              <div className="flex h-full">
                <div className="m-auto">
                  <div className="relative mx-auto w-full rounded-lg   col-span-12">
                    <span className="text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
                      <Typewriter
                        onInit={(typewriter) => {
                          typewriter

                            .typeString("1) Copy")

                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("2) Paste")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("3) Provide")

                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("Copy and paste into Linux Terminal")
                            .start()
                        }}
                      />
                    </span>
                    <Install command="curl -sSf https://join.golem.network/as-provider | bash -"></Install>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
