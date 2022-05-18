import React, { useState } from "react"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Example(props) {
  const [cores, setCores] = useState(2)
  const pricing = props.providers

  return (
    <div data-aos="fade-up" data-aos-duration="1000" className="py-24 mx-auto max-w-7xl px-4 sm:px-6 relative ">
      <div className="grid grid-cols-12 overflow-scroll">
        <div className="text-center  col-span-12">
          <h1>
            <span className="block text-sm font-semibold uppercase tracking-wide text-golemblue">Pricing</span>
            <span className="mt-1 block text-3xl tracking-tight font-extrabold sm:text-4xl xl:text-6xl">Revolutionary low pricing</span>
          </h1>
          <p className="mt-3 text-xl text-slate-600 sm:mt-5 ">
            The Golem Network is made up by providers all around the world wanting to share their idle resources with you and i.
            There&apos;s no central authority which means it&apos;s pure competition, and that drives the super low price!
          </p>
          <div className="grid grid-cols-12 gap-4 py-6">
            <div
              onClick={() => {
                setCores(2)
              }}
              className={classNames(
                cores == 2
                  ? "p-2 col-span-2 col-start-3 bg-black text-white rounded-lg"
                  : "p-2 col-span-2 col-start-3 hover:bg-opacity-100 hover:cursor-pointer bg-black bg-opacity-10 text-white rounded-lg"
              )}
            >
              <p>2 vCores</p>
            </div>
            <div
              onClick={() => {
                setCores(8)
              }}
              className={classNames(
                cores == 8
                  ? "p-2 col-span-2  bg-black text-white rounded-lg"
                  : "p-2 col-span-2 hover:bg-opacity-100 hover:cursor-pointer bg-black bg-opacity-10 text-white rounded-lg"
              )}
            >
              <p>8 vCores</p>
            </div>
            <div
              onClick={() => {
                setCores(32)
              }}
              className={classNames(
                cores == 32
                  ? "p-2 col-span-2  bg-black text-white rounded-lg"
                  : "p-2 col-span-2 hover:bg-opacity-100 hover:cursor-pointer bg-black bg-opacity-10 text-white rounded-lg"
              )}
            >
              <p>32 vCores</p>
            </div>
            <div
              onClick={() => {
                setCores(64)
              }}
              className={classNames(
                cores == 64
                  ? "p-2 col-span-2 bg-black text-white rounded-lg"
                  : "p-2 col-span-2 hover:bg-opacity-100 hover:cursor-pointer bg-black bg-opacity-10 text-white rounded-lg"
              )}
            >
              <p>64 vCores</p>
            </div>
          </div>
        </div>

        <table className="v-table divide-y-12 divide-gray-900  w-full inline-block lg:table md:table xl:table col-span-12">
          <thead className="bg-gray-900">
            <tr>
              <th scope="col" className="px-6 py-5 text-left text-xs font-medium text-white uppercase tracking-wider rounded-l-lg">
                Provider
              </th>
              <th scope="col" className="px-6 py-5 text-left text-xs font-medium text-white uppercase tracking-wider">
                Cores
              </th>
              <th scope="col" className="px-6 py-5 text-left text-xs font-medium text-white uppercase tracking-wider">
                Memory
              </th>
              <th scope="col" className="px-6 py-5 text-left text-xs font-medium text-white uppercase tracking-wider">
                Disk
              </th>
              <th className="v-th px-6 py-5 text-left text-xs font-medium text-white uppercase tracking-wider" scope="col">
                <div className="">
                  <span> Bandwidth </span>
                </div>
              </th>
              <th scope="col" className="px-6 py-5 text-left text-xs font-medium text-white uppercase tracking-wider rounded-r-lg">
                Monthly Cost
              </th>
            </tr>
          </thead>
          <tbody className="">
            {Object.keys(pricing[cores]).map((keyName, i) => (
              <tr className="hover:bg-gray-300  cursor-pointer my-12 golemtr">
                <td className="px-6 py-4 rounded-l-lg">
                  <div className="flex items-center">
                    {pricing[cores][keyName].name == "Golem Network" ? (
                      <div className="flex-shrink-0 h-12 w-12  rounded-md p-2 relative">
                        <img className="inline-block mr-1 max-w-full" alt="do-logo" src="/golem.png"></img>
                      </div>
                    ) : (
                      <div className="flex-shrink-0 h-12 w-12  rounded-md p-3 relative">
                        <img className="inline-block mr-1" width={18} height={18} alt="do-logo" src={pricing[cores][keyName].img}></img>
                      </div>
                    )}

                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900 golemtext ">{pricing[cores][keyName].name}</div>
                      <div className="text-sm text-gray-500 golemtext">Available Globally</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm font-medium text-gray-900 golemtext">{pricing[cores][keyName].cores}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm font-medium text-gray-900 golemtext">
                    {Math.round(pricing[cores][keyName].memory * 100) / 100} GB
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm font-medium text-gray-900 golemtext">
                    {Math.round(pricing[cores][keyName].disk * 100) / 100} GB
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  {pricing[cores][keyName].bandwidth == "Unlimited" ? (
                    <span className="text-sm font-medium text-gray-900 golemtext">Unlimited</span>
                  ) : (
                    <span className="text-sm font-medium text-gray-900 golemtext">{pricing[cores][keyName].bandwidth} TB</span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium rounded-r-lg">
                  <span className={classNames(i == 0 ? "text-green-500" : "text-rose-600", "text-xl font-medium  golemtext")}>
                    ${Math.round(pricing[cores][keyName].usd_monthly * 100) / 100}
                  </span>
                  <span className="text-sm font-medium block text-gray-900 golemtext">
                    ~ {Math.round(pricing[cores][keyName].glm * 100) / 100} GLM
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
