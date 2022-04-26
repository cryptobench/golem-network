import Golem from "../svg/Golem"
import { SearchIcon } from "@heroicons/react/solid"
import { Fragment } from "react"
import { Transition, Dialog } from "@headlessui/react"
import React, { useState, useEffect, useRef } from "react"
import Range from "../Range"
import WithLineNumbers from "../Code"

const exampleCode = `
#!/usr/bin/env python3
import asyncio
from datetime import timedelta
import pathlib
import random
import sys
import string
from uuid import uuid4


from datetime import datetime

from yapapi import (
    Golem,
    __version__ as yapapi_version,
)
from yapapi.log import enable_default_logger, log_summary, log_event_repr  # noqa
from yapapi.payload import vm
from yapapi.services import Service

examples_dir = pathlib.Path(__file__).resolve().parent.parent
sys.path.append(str(examples_dir))

from utils import (
    build_parser,
    TEXT_COLOR_CYAN,
    TEXT_COLOR_DEFAULT,
    TEXT_COLOR_RED,
    TEXT_COLOR_YELLOW,
    run_golem_example,
    print_env_info,
)


class SshService(Service):
    @staticmethod
    async def get_payload():
        return await vm.repo(
            image_hash="1e06505997e8bd1b9e1a00bd10d255fc6a390905e4d6840a22a79902",
            min_mem_gib=0.5,
            min_storage_gib=2.0,
            # we're adding an additional constraint to only select those nodes that
            # are offering VPN-capable VM runtimes so that we can connect them to the VPN
            capabilities=[vm.VM_CAPS_VPN],
        )

    async def start(self):
        # perform the initialization of the Service
        # (which includes sending the network details within the deploy command)
        async for script in super().start():
            yield script

        password = "".join(random.choice(string.ascii_letters + string.digits) for _ in range(8))

        script = self._ctx.new_script(timeout=timedelta(seconds=10))
        script.run("/bin/bash", "-c", "syslogd")
        script.run("/bin/bash", "-c", "ssh-keygen -A")
        script.run("/bin/bash", "-c", f'echo -e "{password}\n{password}" | passwd')
        script.run("/bin/bash", "-c", "/usr/sbin/sshd")
        yield script

        connection_uri = self.network_node.get_websocket_uri(22)
        app_key = self.cluster.service_runner._job.engine._api_config.app_key

        print(
            "Connect with:\n"
            f"{TEXT_COLOR_CYAN}"
            f"ssh -o ProxyCommand='websocat asyncstdio: {connection_uri} --binary -H=Authorization:\"Bearer {app_key}\"' root@{uuid4().hex}"
            f"{TEXT_COLOR_DEFAULT}"
        )

        print(f"{TEXT_COLOR_RED}password: {password}{TEXT_COLOR_DEFAULT}")

    async def reset(self):
        # We don't have to do anything when the service is restarted
        pass


async def main(subnet_tag, payment_driver=None, payment_network=None, num_instances=2):
    # By passing event_consumer=log_summary() we enable summary logging.
    # See the documentation of the yapapi.log module on how to set
    # the level of detail and format of the logged information.
    async with Golem(
        budget=1.0,
        subnet_tag=subnet_tag,
        payment_driver=payment_driver,
        payment_network=payment_network,
    ) as golem:
        print_env_info(golem)

        network = await golem.create_network("192.168.0.1/24")
        async with network:
            cluster = await golem.run_service(
                SshService, network=network, num_instances=num_instances
            )
            instances = cluster.instances

            while True:
                print(instances)
                try:
                    await asyncio.sleep(5)
                except (KeyboardInterrupt, asyncio.CancelledError):
                    break

            cluster.stop()

            cnt = 0
            while cnt < 3 and any(s.is_available for s in instances):
                print(instances)
                await asyncio.sleep(5)
                cnt += 1


if __name__ == "__main__":
    parser = build_parser("Golem VPN SSH example")
    parser.add_argument(
        "--num-instances",
        type=int,
        default=2,
        help="Number of instances to spawn",
    )
    now = datetime.now().strftime("%Y-%m-%d_%H.%M.%S")
    parser.set_defaults(log_file=f"ssh-yapapi-{now}.log")
    args = parser.parse_args()

    run_golem_example(
        main(
            subnet_tag=args.subnet_tag,
            payment_driver=args.payment_driver,
            payment_network=args.payment_network,
            num_instances=args.num_instances,
        ),
        log_file=args.log_file,
    )
`.trim()

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
      <div data-aos="fade-up" data-aos-duration="1000" className="pt-24  mx-auto max-w-7xl px-4 sm:px-6 relative  w-full ">
        <div className=" grid justify-items-center text-center relative ">
          <div className="my-6 rounded  ">
            <h2 className="text-3xl tracking-tight font-extrabold sm:text-3xl xl:text-5xl ">Rent a provider</h2>
            <p className="block text-xl mt-1 font-medium text-slate-600 ">
              Browse the offers from the providers of the network, and click the rent button to get started
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-x-4">
          <div className="col-span-12 mb-2">
            <p className="font-semibold text-xl">Filters</p>
          </div>
          <div className="col-span-12 md:col-span-12 lg:col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-2 gap-x-4 mb-4">
            <div className="mt-1 relative flex items-center">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                name="search"
                id="search"
                onChange={filter}
                placeholder="Provider Name..."
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md"
              />
              <div className="absolute inset-y-0 right-0 flex py-3 pr-1.5">
                <kbd className="inline-flex items-center border border-gray-200 rounded px-2 text-sm font-sans font-medium text-gray-400">
                  ⌘K
                </kbd>
              </div>
            </div>
            <div className="rounded ">
              <Range min="1" max="256" step="1" rangeid="cores" onChange={filter} label="Cores" showGB={false}></Range>
            </div>
            <div className="rounded ">
              <Range min="0.1" max="512" step="0.5" rangeid="memory" label="Memory" showGB={true}></Range>
            </div>
            <div className="rounded ">
              <Range min="0.5" max="50000" step="1" rangeid="disk" label="Disk" showGB={true}></Range>
            </div>
          </div>
          <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {foundProviders && foundProviders.length > 0 ? (
              foundProviders.slice(0, 5).map((user) => (
                <div key={user.node_id} className=" p-6 grid bg-gray-900 rounded-xl">
                  <div className="inline-block relative">
                    <img
                      className="h-20 w-20 rounded-lg shadow-lg mb-2 inline-block"
                      src="https://dappimg.com/media/image/dapp/4244a929e00d467cbb7f3acb66f07ce5.blob"
                    ></img>

                    <span className="absolute top-0 right-0 -mr-1 -mt-2 bg-black text-sm px-2 py-1 rounded text-white">
                      v{user.version}
                    </span>
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
                      className="w-full py-2 px-4 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-blue-300 "
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
                  <div className="h-full overflow-y-auto bg-white p-8 col-span-12">
                    <div className="space-y-6 ">
                      <div>
                        <div className="aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg"></div>
                        <div className="mt-4 flex items-start justify-between">
                          <div className="text-center w-full">
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
                  <div className="col-span-12 overflow-y-scroll  rounded-lg">
                    <WithLineNumbers showLines={true} language="python" code={exampleCode}></WithLineNumbers>
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
