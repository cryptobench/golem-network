import WithLineNumbers from "../Code"
import { useState, useEffect } from "react"
import Typewriter from "typewriter-effect"
import { useInView } from "react-intersection-observer"

export default function Example() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  })
  const [foundProviders, setFoundProviders] = useState("")
  const fetchProviders = () => {
    fetch("https://api.stats.golem.network/v1/network/online")
      .then((r) => r.json())

      .then((data) => {
        setFoundProviders(data)
      })
  }
  useEffect(() => {
    fetchProviders()
  }, [])
  return (
    <div className="bg-white pb-24 " ref={ref}>
      <header className="relative overflow-hidden">
        {/* Hero section */}
        <div className=" py-24">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
            <div className="sm:max-w-lg">
              <h1>
                <span className="block text-sm font-semibold uppercase tracking-wide text-golemblue">Golem Network</span>
                <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-4xl xl:text-6xl ">
                  Join the global supercomputer
                </span>
              </h1>
              <p className="my-4 text-xl inline-block text-slate-600 sm:mt-5 ">
                The Golem Network is decentralizing the cloud. Join the global supercomputer and earn cryptocurrency like hundreds of others
                already are.
              </p>

              {inView ? (
                <div className="mb-2">
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
                </div>
              ) : (
                <span>no</span>
              )}
              <WithLineNumbers
                center={true}
                language="bash"
                code="curl -sSf https://join.golem.network/as-provider | bash -"
              ></WithLineNumbers>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full">
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8 ">
                    <div className="flex items-center space-x-6 lg:space-x-8 ">
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-24 scroller">
                        {foundProviders && foundProviders.length > 0
                          ? foundProviders.slice(50, 75).map((user, index) => (
                              <div
                                key={user.node_id}
                                className={
                                  "p-6 grid text-center bg-gray-900 rounded-xl w-44 h-64 overflow-hidden " + (index == 1 ? "mt-48" : "")
                                }
                              >
                                <div className="inline-block relative">
                                  <img
                                    className="h-20 w-20 rounded-lg shadow-lg mb-2 inline-block"
                                    src="https://dappimg.com/media/image/dapp/4244a929e00d467cbb7f3acb66f07ce5.blob"
                                  ></img>
                                </div>
                                <h5 className="text-white text-xl tracking-tight mb-2 font-medium">{user.data["golem.node.id.name"]}</h5>
                                <span className="text-slate-400 text-sm tracking-tight font-medium mb-1">
                                  {user.data["golem.inf.cpu.threads"]} Cores
                                </span>
                                <span className="text-slate-400 text-sm tracking-tight font-medium mb-1">
                                  {Math.round(user.data["golem.inf.mem.gib"] * 100) / 100} GB RAM
                                </span>
                                <span className="text-slate-400 text-sm tracking-tight font-medium mb-1">
                                  {Math.round(user.data["golem.inf.storage.gib"] * 100) / 100} GB Disk
                                </span>
                              </div>
                            ))
                          : null}
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8 scroller">
                        {foundProviders && foundProviders.length > 0
                          ? foundProviders.slice(0, 25).map((user) => (
                              <div key={user.node_id} className="p-6 grid bg-gray-900 text-center rounded-xl w-44 h-64 overflow-hidden">
                                <div className="inline-block relative">
                                  <img
                                    className="h-20 w-20 rounded-lg shadow-lg mb-2 inline-block"
                                    src="https://dappimg.com/media/image/dapp/4244a929e00d467cbb7f3acb66f07ce5.blob"
                                  ></img>
                                </div>
                                <h5 className="text-white text-xl tracking-tight mb-2 font-medium overflow-scroll no-scrollbar">
                                  {user.data["golem.node.id.name"].slice(0, 10)}
                                </h5>
                                <span className="text-slate-400 text-sm tracking-tight font-medium mb-1">
                                  {user.data["golem.inf.cpu.threads"]} Cores
                                </span>
                                <span className="text-slate-400 text-sm tracking-tight font-medium mb-1">
                                  {Math.round(user.data["golem.inf.mem.gib"] * 100) / 100} GB RAM
                                </span>
                                <span className="text-slate-400 text-sm tracking-tight font-medium mb-1">
                                  {Math.round(user.data["golem.inf.storage.gib"] * 100) / 100} GB Disk
                                </span>
                              </div>
                            ))
                          : null}
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-24 scroller">
                        {foundProviders && foundProviders.length > 0
                          ? foundProviders.slice(25, 50).map((user, index) => (
                              <div
                                key={user.node_id}
                                className={
                                  "p-6 grid text-center bg-gray-900 rounded-xl w-44 h-64 overflow-hidden " + (index == 1 ? "mt-48" : "")
                                }
                              >
                                <div className="inline-block relative">
                                  <img
                                    className="h-20 w-20 rounded-lg shadow-lg mb-2 inline-block"
                                    src="https://dappimg.com/media/image/dapp/4244a929e00d467cbb7f3acb66f07ce5.blob"
                                  ></img>
                                </div>
                                <h5 className="text-white text-xl tracking-tight mb-2 font-medium">{user.data["golem.node.id.name"]}</h5>
                                <span className="text-slate-400 text-sm tracking-tight font-medium mb-1">
                                  {user.data["golem.inf.cpu.threads"]} Cores
                                </span>
                                <span className="text-slate-400 text-sm tracking-tight font-medium mb-1">
                                  {Math.round(user.data["golem.inf.mem.gib"] * 100) / 100} GB RAM
                                </span>
                                <span className="text-slate-400 text-sm tracking-tight font-medium mb-1">
                                  {Math.round(user.data["golem.inf.storage.gib"] * 100) / 100} GB Disk
                                </span>
                              </div>
                            ))
                          : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
