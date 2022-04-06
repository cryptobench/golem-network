/* This example requires Tailwind CSS v2.0+ */
export default function Example() {
  return (
    <div className="bg-black relative">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block text-white">Explore our SDK</span>
          <span className="block text-xl font-bold text-white opacity-40">Multiple high-level languages supported</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-golemblue bg-white hover:bg-indigo-700"
            >
              Python
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-golemblue bg-white hover:bg-indigo-50"
            >
              Javascript
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
