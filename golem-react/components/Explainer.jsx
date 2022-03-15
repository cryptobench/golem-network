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
      <div className="hidden lg:block lg:absolute lg:inset-0 w-full" aria-hidden="true">
        <svg className="absolute w-full test" width="100%" height="100%" fill="none">
          <defs>
            <pattern id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047" x={118} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
              <rect x={0} y={0} width={2} height={2} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect className="w-full" width="100%" height="100%" fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)" />
        </svg>
      </div>

      <div className="relative  ">
        <main className="mt-40 mx-auto max-w-7xl px-4 sm:px-6">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1>
                <span className="block text-sm font-semibold uppercase tracking-wide text-golemblue">Explainer</span>
                <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-4xl xl:text-6xl">
                  Here's a short introduction
                </span>
              </h1>
              <p className="mt-3 text-xl text-slate-600 sm:mt-5 ">
                Spend 2 minutes to learn the idea behind the Golem Network with our 2018 Promo Video. Don't worry, you don't need to be a
                developer to understand - we've simplified it.
              </p>
            </div>

            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div class="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md  justify-items-center col-span-12">
                <button
                  type="button"
                  class="relative block w-full  rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span class="sr-only">Watch our video to learn more</span>
                  <iframe
                    className="w-full"
                    width="572"
                    height="315"
                    src="https://www.youtube.com/embed/FZb_w5JXvJ8?controls=0"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
