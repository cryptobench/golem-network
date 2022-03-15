export default function Apps() {
  function addClass(element, className) {
    const arrayClasses = element.className.split(" ")
    if (arrayClasses.indexOf(className) === -1) {
      element.className += " " + className
    }
  }

  if (typeof window !== "undefined") {
    document.addEventListener("scroll", function (event) {
      const animatedBoxes = document.getElementsByClassName("apps")

      const windowOffsetTop = window.innerHeight + window.scrollY - 500
      var appsContainer = document.querySelector(".apps")
      var star = document.getElementsByClassName("animate-me")
      Array.prototype.forEach.call(animatedBoxes, (animatedBox) => {
        const animatedBoxOffsetTop = animatedBox.offsetTop

        if (windowOffsetTop >= animatedBoxOffsetTop) {
          console.log("added class")
          Array.prototype.forEach.call(star, function (el) {
            addClass(el, "star")
          })
        }
      })
    })
  }

  return (
    <section className="bg-black relative apps overflow-x-hidden">
      <div className="absolute  top-0 w-full h-full bind-right">
        <div className="night">
          <div className="animate-me"></div>
          <div className="animate-me"></div>
          <div className="animate-me"></div>
          <div className="animate-me"></div>
          <div className="animate-me"></div>
        </div>
      </div>
      <div className="py-24 mx-auto max-w-7xl px-4 sm:px-6  w-full z-40 relative">
        <div className="grid grid-cols-12 ">
          <span className="block col-span-12 text-center text-sm font-semibold uppercase tracking-wide text-white opacity-70">Apps</span>
          <div className="col-span-12 text-center mt-1 text-3xl tracking-tight font-extrabold sm:text-3xl xl:text-5xl pb-4 text-white">
            Explore the ecosystem of apps 🔥
          </div>

          <div className="col-span-2  mt-4 rounded-l-lg text-center">
            <div className="col-span-12 bg-white rounded-l-lg h-20">
              <div className="flex h-full shadow-lg ">
                <div className="m-auto">
                  <span className="block text-sm font-semibold uppercase tracking-wide text-golemblue">Machine Learning</span>
                </div>
              </div>
            </div>
            <div className="col-span-12 h-20">
              <div className="flex h-full ">
                <div className="m-auto">
                  <span className="block text-sm font-semibold uppercase tracking-wide text-white opacity-60">Rendering</span>
                </div>
              </div>
            </div>
            <div className="col-span-12 h-20">
              <div className="flex h-full ">
                <div className="m-auto">
                  <span className="block text-sm font-semibold uppercase tracking-wide text-white opacity-60">Webservers</span>
                </div>
              </div>
            </div>
            <div className="col-span-12 h-20">
              <div className="flex h-full ">
                <div className="m-auto">
                  <span className="block text-sm font-semibold uppercase tracking-wide text-white opacity-60">CAD</span>
                </div>
              </div>
            </div>
          </div>
          <div className="  col-span-8 bg-white px-4 py-2  grid grid-cols-12 gap-x-16 mt-4 rounded-r-lg rounded-bl-lg">
            <div className="col-span-2 py-4 justify-items-center grid ">
              <img
                className="h-16 w-16 rounded-lg shadow-lg"
                src="https://dappimg.com/media/image/dapp/1924f1317b074d6e8a34ed8f21b4325b.blob"
              ></img>
              <p className="block text-gray-500 text-lg tracking-tight font-light">App 1</p>
            </div>
            <div className="col-span-2 py-4 justify-items-center grid ">
              <img
                className="h-16 w-16 rounded-lg shadow-lg"
                src="https://dappimg.com/media/image/dapp/4244a929e00d467cbb7f3acb66f07ce5.blob"
              ></img>
              <p>App 1</p>
            </div>
            <div className="col-span-2 py-4 justify-items-center grid ">
              <img
                className="h-16 w-16 rounded-lg shadow-lg"
                src="https://dappimg.com/media/image/app/cdb2d057b5694a2a90f0be82e26a01ed.jpg"
              ></img>
              <p>App 1</p>
            </div>
            <div className="col-span-2 py-4 justify-items-center grid ">
              <img
                className="h-16 w-16 rounded-lg shadow-lg"
                src="https://dappimg.com/media/image/dapp/c74121a543544389b5dcb5bc59a39905.jpg"
              ></img>
              <p>App 1</p>
            </div>
            <div className="col-span-2 py-4 justify-items-center grid ">
              <img
                className="h-16 w-16 rounded-lg shadow-lg"
                src="https://dappimg.com/media/image/dapp/4121556bcff4421ea18a427895cee2ee.blob"
              ></img>
              <p>App 1</p>
            </div>
            <div className="col-span-2 py-4 justify-items-center grid ">
              <img
                className="h-16 w-16 rounded-lg shadow-lg"
                src="https://dappimg.com/media/image/dapp/23c1f984fbf94d3b99c6ae6905ecb05d.blob"
              ></img>
              <p>App 1</p>
            </div>
            <div className="col-span-2 py-4 justify-items-center grid ">
              <img
                className="h-16 w-16 rounded-lg shadow-lg"
                src="https://dappimg.com/media/image/app/9f65c47c-8c39-460b-9e4b-6fe1ce447fac.png"
              ></img>
              <p>App 1</p>
            </div>
            <div className="col-span-2 py-4 justify-items-center grid ">
              <img
                className="h-16 w-16 rounded-lg shadow-lg"
                src="https://dappimg.com/media/image/dapp/8dc747fa286642acb1b7ccbff7a33a9d.blob"
              ></img>
              <p>App 1</p>
            </div>
            <div className="col-span-2 py-4 justify-items-center grid ">
              <img
                className="h-16 w-16 rounded-lg shadow-lg"
                src="https://dappimg.com/media/image/dapp/46ade934a4624ae0ae6a89a8726cc3f7.blob"
              ></img>
              <p>App 1</p>
            </div>
            <div className="col-span-2 py-4 justify-items-center grid ">
              <img
                className="h-16 w-16 rounded-lg shadow-lg"
                src="https://dappimg.com/media/image/dapp/c915ac1844814c0f92f7b38ec4fd7d03.jpg"
              ></img>
              <p>App 1</p>
            </div>
          </div>
          <span className="block col-span-12 text-center text-xs font-semibold tracking-wide text-white opacity-30 pt-4">
            *Note: These are highlighted apps and more are available{" "}
            <a className="underline" href="#">
              here
            </a>
          </span>
        </div>
      </div>
    </section>
  )
}
