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
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1>
                <span className="block text-sm font-semibold uppercase tracking-wide text-golemblue">Explainer</span>
                <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-4xl xl:text-6xl">
                  Here&apos;s a short introduction
                </span>
              </h1>
              <p className="mt-3 text-xl text-slate-600 sm:mt-5 ">
                Spend 2 minutes to learn the idea behind the Golem Network with our 2018 Promo Video. Don&apos;t worry, you don&apos;t need
                to be a developer to understand - we&apos;ve simplified it.
              </p>
            </div>

            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
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
