import Install from "../Install"
import WithLineNumbers from "../Code"
export default function Example() {
  return (
    <div className="relative   overflow-hidden w-ful ">
      <main className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-12 min-h-screen lg:-mt-32 content-center relative">
        <div className="text-center col-span-12 lg:col-span-8 lg:col-start-3 ">
          <h1>
            <span className="block text-sm font-semibold uppercase tracking-wide text-golemblue">Golem Network</span>
            <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-4xl xl:text-6xl ">
              A supercomputer right at your hands
            </span>
          </h1>
          <p className="mt-3 text-xl inline-block text-slate-600 sm:mt-5 ">
            Never has is been that easy to access hardware that can run at the speed of a supercomputer. On Golem Network there is no signup
            list and you do not need permission from anyone.
            <span className="block font-bold text-1xl bg-gradient-to-r from-golemblue via-purple-500 to-pink-500 bg-clip-text text-transparent">
              You are in control of the resources.
            </span>
          </p>
        </div>
        <div className="  col-span-12 lg:col-span-8 lg:col-start-3 ">
          <WithLineNumbers language="bash" code="curl -sSf https://join.golem.network/as-requestor | bash -"></WithLineNumbers>
        </div>
      </main>
    </div>
  )
}
