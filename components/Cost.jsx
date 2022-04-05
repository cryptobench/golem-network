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

export default function Example() {
  return (
    <div className="relative bggridbottom overflow-hidden w-full pb-24">
      <div className="relative  ">
        <main className="mt-40 mx-auto max-w-7xl px-4 sm:px-6">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1>
                <span className="block text-sm font-semibold uppercase tracking-wide text-golemblue">Pricing</span>
                <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-4xl xl:text-6xl ">
                  Revolutionary low pricing
                </span>
              </h1>
              <p className="mt-3 text-xl text-slate-600 sm:mt-5 ">
                The Golem Network is made up by providers all around the world wanting to share their idle resources with you and i.
                There&apos;s no central authority which means it&apos;s pure competition, and that drives the super low price!
              </p>
            </div>

            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="grid grid-cols-12">
                <div className="col-span-12 col-start-2 grid grid-cols-12 bg-golemblue w-full h-full rounded-lg text-white">
                  <div className="col-span-12 text-center">
                    <p className="text-4xl px-4 pt-8 pb-4 font-bold ">Golem Price Comparison</p>
                  </div>
                  <div className="col-span-12 text-center">
                    <p className="text-medium px-4 font-base text-medium">
                      Cheapest monthly pricing for a machine that can be spun up at anytime.
                    </p>
                  </div>
                  <div className="col-span-12 grid grid-cols-12 p-4 gap-4">
                    <div className="col-span-3">
                      <button className="bg-blue-500 rounded py-3 px-6">2 vCPU</button>
                    </div>
                    <div className="col-span-3">
                      <button className="hover:bg-blue-500 rounded py-3 px-6">8 vCPU</button>
                    </div>
                    <div className="col-span-3">
                      <button className="hover:bg-blue-500 rounded py-3 px-6">16 vCPU</button>
                    </div>
                    <div className="col-span-3">
                      <button className="hover:bg-blue-500 rounded py-3 px-6">64 vCPU</button>
                    </div>
                  </div>
                  <div className="col-span-12 grid grid-cols-12 bg-white  shadow rounded-b gap-y-4">
                    <a
                      href="https://stats.golem.network/network/provider/0x49b04a7a035df0d4f9bbbe853a7c9fc2cb147366"
                      target={"_blank"}
                      rel="noreferrer"
                      className="col-span-12 grid grid-cols-12 cursor-pointer hover:bg-gray-100 "
                    >
                      <div className="col-span-8 text-black text-lg font-medium border-b border-dashed px-4">
                        <p className="pt-4 inline-block align-middle">Golem Network</p>
                        <span className="block text-sm text-slate-400 ">16 GB RAM</span>
                        <span className="block text-sm text-slate-400 ">250 GB Disk</span>
                        <span className="block text-sm text-slate-400 pb-4">Unlimited Bandwidth</span>
                      </div>
                      <div className="col-span-4 text-black text-lg text-right font-medium border-b border-dashed px-4">
                        <p className="pt-12 inline-block align-middle text-golemblue">0.542 GLM ~ $1</p>
                      </div>
                    </a>
                    <div className="col-span-8 text-black text-lg font-medium border-b border-dashed px-4">
                      <img
                        className="inline-block mr-1"
                        width={20}
                        alt="do-logo"
                        src="https://www.digitalocean.com/_next/static/media/do-logo.d3eb8550.svg"
                      ></img>
                      <p className=" inline-block align-middle">Digital Ocean</p>
                      <span className="block text-sm text-slate-400 ">4 GB RAM</span>
                      <span className="block text-sm text-slate-400 ">150 GB Disk</span>
                      <span className="block text-sm text-slate-400 pb-4">1 TB Bandwidth</span>
                    </div>
                    <div className="col-span-4 text-black text-lg text-right font-medium border-b border-dashed px-4">
                      <p className="pt-6 pb-8 inline-block align-middle text-red-500">0.542 GLM ~ $1</p>
                    </div>
                    <div className="col-span-8 text-black text-lg font-medium border-b border-dashed px-4">
                      <img
                        className="inline-block mr-1"
                        width={20}
                        alt="do-logo"
                        src="https://www.digitalocean.com/_next/static/media/gcp-logo.e05c1f98.svg"
                      ></img>

                      <p className=" inline-block align-middle">Google Cloud Platform</p>
                      <span className="block text-sm text-slate-400 ">2 GB RAM</span>
                      <span className="block text-sm text-slate-400 ">100 GB Disk</span>
                      <span className="block text-sm text-slate-400 pb-4">Pay per GB</span>
                    </div>
                    <div className="col-span-4 text-black text-lg text-right font-medium border-b border-dashed px-4">
                      <p className="pt-6 pb-8 inline-block align-middle text-red-500">0.542 GLM ~ $1</p>
                    </div>
                    <div className="col-span-8 text-black text-lg font-medium  px-4">
                      <img
                        className="inline-block mr-1 "
                        width={24}
                        alt="do-logo"
                        src="https://www.digitalocean.com/_next/static/media/aws-logo.72288ec5.svg"
                      ></img>

                      <p className=" inline-block align-middle">Amazon Web Services</p>
                      <span className="block text-sm text-slate-400 ">2 GB RAM</span>
                      <span className="block text-sm text-slate-400 ">50 GB Disk</span>
                      <span className="block text-sm text-slate-400 pb-4">Pay per GB</span>
                    </div>
                    <div className="col-span-4 text-black text-lg text-right font-medium  px-4">
                      <p className="pt-6 pb-8 inline-block align-middle text-red-500">0.542 GLM ~ $1</p>
                    </div>
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
