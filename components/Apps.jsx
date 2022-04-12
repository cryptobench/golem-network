import { SearchIcon } from "@heroicons/react/solid"
import Stars from "./Stars"

export default function Apps() {
  return (
    <section className="   relative apps ">
      <Stars></Stars>

      <div className="py-24 mx-auto max-w-7xl px-4 sm:px-6 opacity-0 fader  w-full z-40 relative">
        <div className="grid grid-cols-12 ">
          <span className="block col-span-12  text-sm font-semibold uppercase tracking-wide text-golemblue opacity-70">Apps</span>
          <div className="col-span-12  mt-1  ">
            <h3 className="text-3xl tracking-tight font-extrabold sm:text-3xl xl:text-5xl">Explore the ecosystem of apps</h3>
            <p className="mt-3 text-xl text-slate-600 sm:mt-5 ">Browse and search projects built on the Golem Network. </p>
          </div>
          <div className="col-span-12  mt-1  "></div>

          <div className="col-span-4 mt-8">
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700">
                Find Application
              </label>

              <div className="mt-1 relative flex items-center">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Quick search..."
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md"
                />
                <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                  <kbd className="inline-flex items-center border border-gray-200 rounded px-2 text-sm font-sans font-medium text-gray-400">
                    ⌘K
                  </kbd>
                </div>
              </div>
            </div>
          </div>
          <div className="  col-span-12  py-2  grid grid-cols-12  gap-4 mt-4 rounded-r-lg rounded-bl-lg">
            <div className="col-span-6 md:col-span-6 lg:col-span-3 p-6  grid app bg-gray-900 rounded-xl">
              <div className="inline-block relative">
                <img
                  className="h-20 w-20 rounded-lg shadow-lg mb-2 inline-block"
                  src="https://dappimg.com/media/image/dapp/4244a929e00d467cbb7f3acb66f07ce5.blob"
                ></img>
                <span className="absolute top-0 right-0 -mr-1 -mt-2 bg-black text-sm px-2 py-1 rounded text-white">Rendering</span>
              </div>
              <h5 className="text-white text-lg tracking-tight font-medium">Blender</h5>
              <p className="text-slate-400 text-md tracking-tight font-medium mb-1">Render complex 3D images</p>
            </div>
            <div className="col-span-6 md:col-span-6 lg:col-span-3 p-6  grid app bg-gray-900 rounded-xl">
              <div className="inline-block relative">
                <img
                  className="h-20 w-20 rounded-lg shadow-lg mb-2 inline-block"
                  src="https://dappimg.com/media/image/app/cdb2d057b5694a2a90f0be82e26a01ed.jpg"
                ></img>
                <span className="absolute top-0 right-0 -mr-1 -mt-2 bg-black text-sm px-2 py-1 rounded text-white">Rendering</span>
              </div>
              <h5 className="text-white text-lg tracking-tight font-medium">Octane</h5>
              <p className="text-slate-400 text-md tracking-tight font-medium mb-1">Render complex 3D scenes</p>
            </div>
            <div className="col-span-6 md:col-span-6 lg:col-span-3 p-6  grid app bg-gray-900 rounded-xl">
              <div className="inline-block relative">
                <img
                  className="h-20 w-20 rounded-lg shadow-lg mb-2 inline-block"
                  src="https://dappimg.com/media/image/dapp/c915ac1844814c0f92f7b38ec4fd7d03.jpg"
                ></img>
                <span className="absolute top-0 right-0 -mr-1 -mt-2 bg-black text-sm px-2 py-1 rounded text-white">Data Science</span>
              </div>
              <h5 className="text-white text-lg tracking-tight font-medium">Application 5</h5>
              <p className="text-slate-400 text-md tracking-tight font-medium mb-1">Lorem Ipsum blabla whatup</p>
            </div>
            <div className="col-span-6 md:col-span-6 lg:col-span-3 p-6  grid app bg-gray-900 rounded-xl">
              <div className="inline-block relative">
                <img
                  className="h-20 w-20 rounded-lg shadow-lg mb-2 inline-block"
                  src="https://dappimg.com/media/image/dapp/23c1f984fbf94d3b99c6ae6905ecb05d.blob"
                ></img>
                <span className="absolute top-0 right-0 -mr-1 -mt-2 bg-black text-sm px-2 py-1 rounded text-white">Machine Learning</span>
              </div>
              <h5 className="text-white text-lg tracking-tight font-medium">DeML</h5>
              <p className="text-slate-400 text-md tracking-tight font-medium mb-1">
                Decentralized Machine Learning on top of the Golem Network
              </p>
            </div>
            <div className="col-span-6 md:col-span-6 lg:col-span-3 p-6  grid app bg-gray-900 rounded-xl">
              <div className="inline-block relative">
                <img
                  className="h-20 w-20 rounded-lg shadow-lg mb-2 inline-block"
                  src="https://dappimg.com/media/image/dapp/8dc747fa286642acb1b7ccbff7a33a9d.blob"
                ></img>
                <span className="absolute top-0 right-0 -mr-1 -mt-2 bg-black text-sm px-2 py-1 rounded text-white">
                  Artifical Intelligence
                </span>
              </div>
              <h5 className="text-white text-lg tracking-tight font-medium">Badger</h5>
              <p className="text-slate-400 text-md tracking-tight font-medium mb-1">Artificial intelligence on pair with OpenAI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
