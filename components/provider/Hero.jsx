import Install from "../Install"
export default function Example() {
  return (
    <div className="relative   overflow-hidden w-ful ">
      <main className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-12 min-h-screen -mt-32 content-center relative">
        <div className="text-center  col-span-8 col-start-3 ">
          <h1>
            <span className="block text-sm font-semibold uppercase tracking-wide text-golemblue">Golem Network</span>
            <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-4xl xl:text-6xl ">
              Become part of a global supercomputer and{" "}
              <span className=" bg-gradient-to-r from-golemblue via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {" "}
                earn cryptocurrency
              </span>
            </span>
          </h1>
          <p className="mt-3 text-xl text-slate-600 sm:mt-5 ">
            The Golem Network is a global supercomputer consisting of computers just like yours. Rent our your hardware just like 711 other
            providers and earn cryptocurrency.
            <span className="inline-block font-bold text-1xl bg-gradient-to-r from-golemblue via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Installing takes under 30 seconds
            </span>
          </p>
        </div>
        <div className="text-center  col-span-8 col-start-3 ">
          <Install command="curl -sSf https://join.golem.network/as-provider | bash -"></Install>
        </div>
      </main>
    </div>
  )
}
