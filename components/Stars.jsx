export default function Stars() {
  function addClass(element, className) {
    const arrayClasses = element.className.split(" ")
    if (arrayClasses.indexOf(className) === -1) {
      element.className += " " + className
    }
  }

  if (typeof window !== "undefined") {
    document.addEventListener("scroll", function (event) {
      const animatedBoxes = document.getElementsByClassName("apps")

      const windowOffsetTop = window.innerHeight + window.scrollY
      var fader = document.querySelector(".fader")
      var star = document.getElementsByClassName("animate-me")
      Array.prototype.forEach.call(animatedBoxes, (animatedBox) => {
        const animatedBoxOffsetTop = animatedBox.offsetTop

        if (windowOffsetTop >= animatedBoxOffsetTop) {
          addClass(fader, "fade-in")
          fader.classList.remove("opacity-0")
          Array.prototype.forEach.call(star, function (el) {
            addClass(el, "star")
          })
        }
      })
    })
  }

  return (
    <div className="absolute w-full h-full ">
      <div className="night ">
        <div className="animate-me "></div>
        <div className="animate-me"></div>
        <div className="animate-me"></div>
        <div className="animate-me"></div>
        <div className="animate-me"></div>
        <div className="animate-me"></div>
        <div className="animate-me"></div>
        <div className="animate-me"></div>
        <div className="animate-me"></div>
        <div className="animate-me"></div>
        <div className="animate-me"></div>
        <div className="animate-me"></div>
        <div className="animate-me"></div>
        <div className="animate-me"></div>
        <div className="animate-me"></div>
        <div className="animate-me"></div>
        <div className="animate-me"></div>
        <div className="animate-me"></div>
        <div className="animate-me"></div>
      </div>
    </div>
  )
}
