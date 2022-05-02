import Head from "next/head"

import Navbar from "../components/Navbar"
import Metamask from "../components/svg/Metamask"
import Radio from "../components/migrate/radio"

export default function Example() {
  return (
    <>
      <Head>
        <title>Golem Network</title>
        <meta name="google-site-verification" content="7TO2YTmVfu0A5AgihId9CSnSrQjFgHxAkZ-k_zIH18g" />
      </Head>
      <div className="relative   w-full  ">
        <div className="hidden lg:block lg:absolute h-full w-full overflow-hidden" aria-hidden="true">
          <svg className="absolute w-full test " width="100%" height="100%" fill="none">
            <defs>
              <pattern id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047" x={118} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
                <rect x={0} y={0} width={2} height={2} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect className="w-full" width="100%" height="100%" fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)" />
          </svg>
        </div>
        <Navbar></Navbar>
        <div className="pb-24 relative bggridbottom overflow-hidden w-full ">
          <div className="relative  ">
            <main className="mt-20 mx-auto max-w-7xl px-4 sm:px-6">
              <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                <div
                  className="text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left "
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <h1>
                    <span className="block text-sm font-semibold uppercase tracking-wide text-golemblue">Migrate</span>
                    <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-4xl xl:text-6xl">Migrate GNT to GLM</span>
                  </h1>
                  <p className="mt-3 text-xl text-slate-600 sm:mt-5 ">
                    Migrate your old GNT to the new token version GLM. Connect your wallet to view your available GNT balance and start
                    migrating.
                  </p>
                  <span className="mt-2 block  text-golemblue font-bold">Current live cost with 120k gas limit is $11 dollars</span>
                  <button className="mt-4 lg:col-span-4 inline-block col-span-6 md:col-span-6 text-center  px-6 py-3 border border-transparent text-sm lg:text-base font-medium rounded-md text-white bg-black shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ">
                    <Metamask className="inline-block mr-4"></Metamask>
                    Migrate with MetaMask
                  </button>
                </div>

                <div
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
                >
                  <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md  justify-items-center col-span-12">
                    <button
                      type="button"
                      className="relative block w-full  rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <span className="sr-only">Watch our video to learn more</span>

                      <iframe
                        className="w-full"
                        width="572"
                        height="315"
                        src="https://www.youtube.com/embed/DYX9Xn2HyWw"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </button>
                  </div>
                </div>
                <div className="col-span-6 pt-32">
                  <h1>
                    <span className="block text-sm font-semibold uppercase tracking-wide text-golemblue">Step 1</span>
                    <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-4xl xl:text-6xl">
                      Connecting your wallet
                    </span>
                  </h1>
                  <p className="mt-3 text-xl text-slate-600 sm:mt-5 ">
                    The first step is to hit the <b>Migrate with MetaMask</b> button above. This will open up your MetaMask and ask you to
                    connect your wallet. Select the wallet containing your GNT tokens.
                  </p>
                </div>
                <div className="col-span-4 col-start-8 pt-32">
                  <img className="w-full rounded-lg shadow-lg" src="https://i.imgur.com/10FV9p5.png"></img>
                </div>
                <div className="col-span-6 pt-32">
                  <h1>
                    <span className="block text-sm font-semibold uppercase tracking-wide text-golemblue">Step 2</span>
                    <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-4xl xl:text-6xl">
                      Specify amount of tokens to migrate
                    </span>
                  </h1>
                  <p className="mt-3 text-xl text-slate-600 sm:mt-5 ">
                    The first step is to hit the <b>Migrate with MetaMask</b> button above. This will open up your MetaMask and ask you to
                    connect your wallet. Select the wallet containing your GNT tokens.
                  </p>
                </div>

                <div className="col-span-6 ml-10 grid grid-cols-12 pt-32">
                  <div className="col-span-12">
                    <Radio></Radio>
                  </div>
                </div>
                <div className="col-span-6 pt-32">
                  <h1>
                    <span className="block text-sm font-semibold uppercase tracking-wide text-golemblue">Step 3</span>
                    <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-4xl xl:text-6xl">
                      Confirm the transaction
                    </span>
                  </h1>
                  <p className="mt-3 text-xl text-slate-600 sm:mt-5 ">
                    Once you have hit confirm inside of MetaMask, the transaction will be sent to the blockchain and in a minutes time it
                    will be confirmed and your GNT has been migrated to GLM tokens
                  </p>
                </div>

                <div className="col-span-6 ml-10 grid grid-cols-12 pt-32">
                  <div className="col-span-12"></div>
                </div>
                <div className="col-span-6 pt-32">
                  <h1>
                    <span className="block text-sm font-semibold uppercase tracking-wide text-golemblue">Step 4</span>
                    <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-4xl xl:text-6xl">Celebrate!</span>
                  </h1>
                  <p className="mt-3 text-xl text-slate-600 sm:mt-5 ">
                    Congratulations, you&apos;ve completed the migration of your GNT tokens to GLM tokens. You can now use new ERC-20
                    standard GLM tokens on networks like Polygon to facilitate ultra cheap transactions and swaps!
                  </p>
                </div>

                <div className="col-span-6 ml-10 grid grid-cols-12 pt-32">
                  <div className="col-span-12"></div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  )
}
