export default function Stats(props) {
  return (
    <div className="py-16 mx-auto max-w-7xl px-4 sm:px-6 relative ">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="text-center  lg:col-span-12 ">
          <h1>
            <span className="block text-sm font-semibold uppercase tracking-wide text-golemblue">Join the network</span>
            <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-4xl xl:text-6xl">
              The network is expanding rapidly
            </span>
          </h1>
          <p className="mt-3 text-xl text-slate-600 sm:mt-5 "></p>
        </div>

        <div className="col-span-2 col-start-3 text-center">
          <p className="text-4xl font-bold block">
            {props.providers}{" "}
            <span className="text-xl font-semibold block bg-gradient-to-r from-golemblue via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Providers
            </span>
          </p>
        </div>
        <div className="col-span-2 text-center">
          <p className="text-4xl font-bold block">
            {props.cores}{" "}
            <span className="text-xl font-semibold block bg-gradient-to-r from-golemblue via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Cores
            </span>
          </p>
        </div>
        <div className="col-span-2 text-center">
          <p className="text-4xl font-bold block">
            {props.memory} <span className="text-sm text-gray-500">TB</span>{" "}
            <span className="text-xl font-semibold block bg-gradient-to-r from-golemblue via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Memory
            </span>
          </p>
        </div>
        <div className="col-span-2 text-center">
          <p className="text-4xl font-bold block">
            {props.disk} <span className="text-sm text-gray-500">TB</span>{" "}
            <span className="text-xl font-semibold block bg-gradient-to-r from-golemblue via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Disk
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
