import Golem from "../svg/Golem"

import { Fragment } from "react"
import { Transition, Dialog } from "@headlessui/react"
import React, { useState, useEffect, useRef } from "react"
import Range from "../Range"

export default function Example() {
  const [data, setData] = useState("")
  const [foundProviders, setFoundProviders] = useState("")
  const [rentProvider, setRentProvider] = useState({})
  const [open, setOpen] = useState(false)
  const cancelButtonRef = useRef(null)
  const fetchProviders = () => {
    fetch("https://api.stats.golem.network/v1/network/online")
      .then((r) => r.json())

      .then((data) => {
        setData(data)
        setFoundProviders(data)
      })
  }
  useEffect(() => {
    fetchProviders()
  }, [])

  const loadModal = (provider) => {
    setRentProvider(provider)
    setOpen(true)
  }
  const [name, setName] = useState("")

  // the search result

  const filter = (e) => {
    console.log(e)
    const keyword = e.target.value

    if (keyword !== "") {
      const results = data.filter((user) => {
        console.log(user.node_id.toLowerCase().startsWith(keyword.toLowerCase()))
        return user.data["golem.node.id.name"].toLowerCase().startsWith(keyword.toLowerCase())
        // Use the toLowerCase() method to make it case-insensitive
      })
      setFoundProviders(results)
    } else {
      setFoundProviders(data)
      // If the text field is empty, show all users
    }

    setName(keyword)
  }
  return (
    <div>
      <div data-aos="fade-up" data-aos-duration="1000" className="pt-24 pb-24 mx-auto max-w-7xl px-4 sm:px-6 relative  w-full ">
        <div className=" grid justify-items-center relative ">
          <div className="my-6 rounded  ">
            <h4 className="text-4xl font-bold">Rent a provider</h4>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-x-4">
          <div className="col-span-12 mb-2">
            <p className="font-semibold text-xl">Filters</p>
          </div>
          <div className="col-span-12 md:col-span-12 lg:col-span-3">
            <div className="rounded ">
              <div className="border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
                <label htmlFor="name" className="block text-xs font-medium text-gray-900">
                  Provider name
                </label>
                <input
                  type="search"
                  value={name}
                  onChange={filter}
                  name="name"
                  id="name"
                  className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                  placeholder="Node 1"
                />
              </div>
            </div>
            <div className="rounded ">
              <Range min="1" max="256" step="1" rangeid="cores" onChange={filter} label="Cores" showGB={false}></Range>
            </div>
            <div className="rounded ">
              <Range min="0.1" max="512" step="0.5" rangeid="memory" label="Memory" showGB="true"></Range>
            </div>
            <div className="rounded ">
              <Range min="0.5" max="50000" step="1" rangeid="disk" label="Disk" showGB="true"></Range>
            </div>
          </div>
          <div className="col-span-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {foundProviders && foundProviders.length > 0 ? (
              foundProviders.slice(0, 5).map((user) => (
                <div key={user.node_id} className=" p-6 grid bg-gray-900 rounded-xl">
                  <div className="inline-block relative">
                    <img
                      className="h-20 w-20 rounded-lg shadow-lg mb-2 inline-block"
                      src="https://dappimg.com/media/image/dapp/4244a929e00d467cbb7f3acb66f07ce5.blob"
                    ></img>

                    <span className="absolute top-0 right-0 -mr-1 -mt-2 bg-black text-sm px-2 py-1 rounded text-white">Provider</span>
                  </div>
                  <h5 className="text-white text-xl tracking-tight mb-2 font-medium">{user.data["golem.node.id.name"]}</h5>
                  <span className="text-slate-400 text-sm tracking-tight font-medium mb-1">{user.data["golem.inf.cpu.threads"]} Cores</span>
                  <span className="text-slate-400 text-sm tracking-tight font-medium mb-1">
                    {Math.round(user.data["golem.inf.mem.gib"] * 100) / 100} GB RAM
                  </span>
                  <span className="text-slate-400 text-sm tracking-tight font-medium mb-1">
                    {Math.round(user.data["golem.inf.storage.gib"] * 100) / 100} GB Disk
                  </span>
                  <span className="text-slate-200 text-lg tracking-tight font-medium mt-1">0.53 GLM / $0.2 per month</span>
                  <div className="flex mt-4 space-x-3 lg:mt-6">
                    <a
                      onClick={() => loadModal(user)}
                      href="#"
                      className="w-full py-2 px-4 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                    >
                      Rent Provider
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <h1>No results found!</h1>
            )}
          </div>
        </div>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
          <div className="flex  min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="relative inline-block bg-white rounded-lg px-4 pt-5 pb-4 text-left  shadow-xl transform transition-all sm:my-8  w-3/4">
                <div>
                  <div className=" text-center ">
                    <h1 className="text-2xl font-semibold">Start SSH connection </h1>
                  </div>
                </div>
                <div className="grid grid-cols-12">
                  <div className="h-full overflow-y-auto bg-white p-8 col-span-6">
                    <div className="space-y-6 pb-16">
                      <div>
                        <div className="aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg"></div>
                        <div className="mt-4 flex items-start justify-between">
                          <div>
                            <div className="w-auto inline-block bg-golemblue rounded-md p-3">
                              <Golem className="h-6 w-6"></Golem>
                            </div>
                            <h2 className="text-lg font-medium text-gray-900">
                              <span className="sr-only">Details for </span>
                              {rentProvider.node_id ? <p>{rentProvider.data["golem.node.id.name"]}</p> : <p>None</p>}
                            </h2>
                            <p className="text-sm font-medium text-gray-500">
                              {rentProvider.node_id ? <p>{rentProvider.node_id}</p> : <p>None</p>}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Information</h3>
                        <dl className="mt-2 divide-y divide-gray-200 border-t border-b border-gray-200">
                          <div className="flex justify-between py-3 text-sm font-medium">
                            <dt className="text-gray-500">Cores</dt>
                            <dd className="text-gray-900">
                              {rentProvider.node_id ? <p className="text-sm">{rentProvider.data["golem.inf.cpu.threads"]}</p> : <p>None</p>}
                            </dd>
                          </div>
                          <div className="flex justify-between py-3 text-sm font-medium">
                            <dt className="text-gray-500">Memory</dt>
                            <dd className="text-gray-900">
                              {" "}
                              {rentProvider.node_id ? (
                                <p className="text-sm">{Math.round(rentProvider.data["golem.inf.mem.gib"] * 100) / 100} GB </p>
                              ) : (
                                <p>None</p>
                              )}
                            </dd>
                          </div>
                          <div className="flex justify-between py-3 text-sm font-medium">
                            <dt className="text-gray-500">Disk</dt>
                            <dd className="text-gray-900">
                              {" "}
                              {rentProvider.node_id ? (
                                <p className="text-sm">{Math.round(rentProvider.data["golem.inf.storage.gib"] * 100) / 100} GB </p>
                              ) : (
                                <p>None</p>
                              )}
                            </dd>
                          </div>
                          <div className="flex justify-between py-3 text-sm font-medium">
                            <dt className="text-gray-500">Subnet Tag</dt>
                            <dd className="text-gray-900">
                              {rentProvider.node_id ? <p>{rentProvider.data["golem.node.debug.subnet"]}</p> : <p>None</p>}
                            </dd>
                          </div>
                          <div className="flex justify-between py-3 text-sm font-medium">
                            <dt className="text-gray-500">Provider Version</dt>
                            <dd className="text-gray-900">
                              {rentProvider.node_id ? <p className="text-sm">{rentProvider.version}</p> : <p>None</p>}
                            </dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-6">
                    <iframe
                      src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-dark&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=Code%2520snippet%2520to%2520run%2520SSH%2520example%2520on%2520Requestor%2520here"
                      className="h-full w-full"
                      sandbox="allow-scripts allow-same-origin"
                    ></iframe>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-1 sm:gap-3 sm:grid-flow-row-dense">
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Close
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  )
}
