import Golem from "./svg/Golem"
const people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    department: "Optimization",
    email: "lindsay.walton@example.ceom",
    role: "Member",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    department: "Optimization",
    email: "lindsay.walton@example.cwwom",
    role: "Member",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    role: "Member",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  // More people...
]

export default function Example() {
  return (
    <div className="py-24 mx-auto max-w-7xl px-4 sm:px-6 relative ">
      <div className="grid grid-cols-12 overflow-scroll">
        <div className="text-center  lg:col-span-12 mb-12 ">
          <h1>
            <span className="block text-sm font-semibold uppercase tracking-wide text-golemblue">Pricing</span>
            <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-4xl xl:text-6xl">Revolutionary low pricing</span>
          </h1>
          <p className="mt-3 text-xl text-slate-600 sm:mt-5 ">
            The Golem Network is made up by providers all around the world wanting to share their idle resources with you and i.
            There&apos;s no central authority which means it&apos;s pure competition, and that drives the super low price!
          </p>
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
            <tr className="hover:bg-gray-300  cursor-pointer my-12 golemtr">
              <td className="px-6 py-4 rounded-l-lg">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-12 w-12  rounded-md p-2 relative">
                    <img className="inline-block mr-1 max-w-full" alt="do-logo" src="https://i.imgur.com/hrXL0p8.png"></img>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900 golemtext ">Golem Network</div>
                    <div className="text-sm text-gray-500 golemtext">Available Globally</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="text-sm font-medium text-gray-900 golemtext">4 Cores</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="text-sm font-medium text-gray-900 golemtext">4 GB</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="text-sm font-medium text-gray-900 golemtext">20 GB</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <span className="text-sm font-medium text-gray-900 golemtext">Unlimited</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium rounded-r-lg">
                <span className="text-sm font-medium text-gray-900 golemtext">0.34 GLM / $0.32</span>
              </td>
            </tr>
            <tr className="hover:bg-gray-300  cursor-pointer my-12 golemtr">
              <td className="px-6 py-4 rounded-l-lg">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-12 w-12  rounded-md p-3 relative">
                    <img
                      className="inline-block mr-1"
                      width={18}
                      height={18}
                      alt="do-logo"
                      src="https://www.digitalocean.com/_next/static/media/do-logo.d3eb8550.svg"
                    ></img>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900 golemtext ">Digital Ocean</div>
                    <div className="text-sm text-gray-500 golemtext">Available Globally</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="text-sm font-medium text-gray-900 golemtext">2 Cores</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="text-sm font-medium text-gray-900 golemtext">2 GB</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="text-sm font-medium text-gray-900 golemtext">10 GB</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <span className="text-sm font-medium text-gray-900 golemtext">5 TB</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium rounded-r-lg">
                <span className="text-sm font-medium text-gray-900 golemtext">0.6 GLM / $1.2</span>
              </td>
            </tr>
            <tr className="hover:bg-gray-300  cursor-pointer my-12 golemtr">
              <td className="px-6 py-4 rounded-l-lg">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-12 w-12  rounded-md p-3 relative">
                    <img
                      className="inline-block mr-1"
                      width={20}
                      height={20}
                      alt="do-logo"
                      src="https://www.digitalocean.com/_next/static/media/aws-logo.72288ec5.svg"
                    ></img>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900 golemtext ">Amazon Web Services</div>
                    <div className="text-sm text-gray-500 golemtext">Available Globally</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="text-sm font-medium text-gray-900 golemtext">2 Cores</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="text-sm font-medium text-gray-900 golemtext">1 GB</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="text-sm font-medium text-gray-900 golemtext">10 GB</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <span className="text-sm font-medium text-gray-900 golemtext">Pay per GB</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium rounded-r-lg">
                <span className="text-sm font-medium text-gray-900 golemtext">0.70 GLM / $1.4</span>
              </td>
            </tr>
            <tr className="hover:bg-gray-300  cursor-pointer my-12 golemtr">
              <td className="px-6 py-4 rounded-l-lg">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-12 w-12  rounded-md p-3 relative">
                    <img
                      className="inline-block mr-1"
                      width={20}
                      height={20}
                      alt="do-logo"
                      src="https://www.digitalocean.com/_next/static/media/gcp-logo.e05c1f98.svg"
                    ></img>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900 golemtext ">Google Cloud Platform</div>
                    <div className="text-sm text-gray-500 golemtext">Available Globally</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="text-sm font-medium text-gray-900 golemtext">2 Cores</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="text-sm font-medium text-gray-900 golemtext">1 GB</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="text-sm font-medium text-gray-900 golemtext">5 GB</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <span className="text-sm font-medium text-gray-900 golemtext">Pay per GB</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium rounded-r-lg">
                <span className="text-sm font-medium text-gray-900 golemtext">0.71 GLM / $1.45</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
