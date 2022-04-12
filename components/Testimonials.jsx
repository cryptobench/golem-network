import clsx from "clsx"
import { useEffect, useRef, useState, useLayoutEffect } from "react"
import { useInView } from "react-intersection-observer"
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect
let testimonials = [
  // Column 1
  [
    {
      content: "I feel like an idiot for not using Tailwind CSS until now.",
      url: "https://twitter.com/ryanflorence/status/1187951799442886656",
      author: {
        name: "Ryan Florence",
        role: "Remix & React Training",
        image: "https://dappimg.com/media/image/dapp/4244a929e00d467cbb7f3acb66f07ce5.blob",
      },
    },
    {
      content: "I feel like an idiot for not using Tailwind CSS until now.",
      url: "https://twitter.com/ryanflorence/status/1187951799442886656",
      author: {
        name: "Ryan Florencweqe",
        role: "Remix & React Training",
        image: "https://dappimg.com/media/image/dapp/4244a929e00d467cbb7f3acb66f07ce5.blob",
      },
    },
    {
      content: "I feel like an idiot for not using Tailwind CSS until now.",
      url: "https://twitter.com/ryanflorence/status/1187951799442886656",
      author: {
        name: "Ryan Florenqqqqce",
        role: "Remix & React Training",
        image: "https://dappimg.com/media/image/dapp/4244a929e00d467cbb7f3acb66f07ce5.blob",
      },
    },
    {
      content: "I feel like an idiot for not using Tailwind CSS until now.",
      url: "https://twitter.com/ryanflorence/status/1187951799442886656",
      author: {
        name: "Ryan Flaorence",
        role: "Remix & React Training",
        image: "https://dappimg.com/media/image/dapp/4244a929e00d467cbb7f3acb66f07ce5.blob",
      },
    },
    {
      content: "I feel like an idiot for not using Tailwind CSS until now.",
      url: "https://twitter.com/ryanflorence/status/1187951799442886656",
      author: {
        name: "Ryan Floreewqence",
        role: "Remix & React Training",
        image: "https://dappimg.com/media/image/dapp/4244a929e00d467cbb7f3acb66f07ce5.blob",
      },
    },
    {
      content: "I feel like an idiot for not using Tailwind CSS until now.",
      url: "https://twitter.com/ryanflorence/status/1187951799442886656",
      author: {
        name: "Ryan Floreqqqnce",
        role: "Remix & React Training",
        image: "https://dappimg.com/media/image/dapp/4244a929e00d467cbb7f3acb66f07ce5.blob",
      },
    },
    {
      content: "I feel like an idiot for not using Tailwind CSS until now.",
      url: "https://twitter.com/ryanflorence/status/1187951799442886656",
      author: {
        name: "Ryan Florencqwee",
        role: "Remix & React Training",
        image: "https://dappimg.com/media/image/dapp/4244a929e00d467cbb7f3acb66f07ce5.blob",
      },
    },
    {
      content: "I feel like an idiot for not using Tailwind CSS until now.",
      url: "https://twitter.com/ryanflorence/status/1187951799442886656",
      author: {
        name: "Ryan Floreqeewnce",
        role: "Remix & React Training",
        image: "https://dappimg.com/media/image/dapp/4244a929e00d467cbb7f3acb66f07ce5.blob",
      },
    },
    {
      content: "I feel like an idiot for not using Tailwind CSS until now.",
      url: "https://twitter.com/ryanflorence/status/1187951799442886656",
      author: {
        name: "Ryan Flowqqewerence",
        role: "Remix & React Training",
        image: "https://dappimg.com/media/image/dapp/4244a929e00d467cbb7f3acb66f07ce5.blob",
      },
    },
    {
      content: "I feel like an idiot for not using Tailwind CSS until now.",
      url: "https://twitter.com/ryanflorence/status/1187951799442886656",
      author: {
        name: "Ryan Floqewqewrence",
        role: "Remix & React Training",
        image: "https://dappimg.com/media/image/dapp/4244a929e00d467cbb7f3acb66f07ce5.blob",
      },
    },
  ],
]

function Testimonial({ author, content, url, expanded }) {
  let [focusable, setFocusable] = useState(true)
  let ref = useRef()

  useEffect(() => {
    if (ref.current.offsetTop !== 0) {
      setFocusable(false)
    }
  }, [])

  return (
    <div ref={ref} className="col-span-6 md:col-span-4 lg:col-span-3 p-6  grid app bg-gray-900 rounded-xl">
      <div className="inline-block relative">
        <img
          className="h-20 w-20 rounded-lg shadow-lg mb-2 inline-block"
          src="https://dappimg.com/media/image/dapp/4244a929e00d467cbb7f3acb66f07ce5.blob"
        ></img>
        <span className="absolute top-0 right-0 -mr-1 -mt-2 bg-gray-700 text-sm px-2 py-1 rounded text-white">Tool</span>
      </div>
      <h5 className="text-white text-lg tracking-tight font-medium">Blender</h5>
      <p className="text-slate-400 text-md tracking-tight font-medium mb-1">Render complex 3D images</p>
    </div>
  )
}

export default function Testimonials() {
  let ref = useRef()
  let [expanded, setExpanded] = useState(false)
  let [showCollapseButton, setShowCollapseButton] = useState(false)
  let [transition, setTransition] = useState(false)
  let { ref: inViewRef, inView } = useInView({ threshold: 0 })
  let initial = useRef(true)

  useIsomorphicLayoutEffect(() => {
    if (initial.current) {
      initial.current = false
      return
    }
    if (expanded) {
      ref.current.focus({ preventScroll: expanded })
    } else {
      ref.current.focus()
      ref.current.scrollIntoView()
    }
    if (expanded) {
      setShowCollapseButton(false)
    }
  }, [expanded])

  useEffect(() => {
    setTimeout(() => setTransition(expanded), 0)
  }, [expanded])

  useEffect(() => {
    if (!expanded || !inView) return
    function onScroll() {
      let bodyRect = document.body.getBoundingClientRect()
      let rect = ref.current.getBoundingClientRect()
      let middle = rect.top + rect.height / 4 - bodyRect.top - window.innerHeight / 2
      let isHalfWay = window.scrollY > middle
      if (showCollapseButton && !isHalfWay) {
        setShowCollapseButton(false)
      } else if (!showCollapseButton && isHalfWay) {
        setShowCollapseButton(true)
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true })
    }
  }, [expanded, showCollapseButton, inView])

  return (
    <section ref={ref} tabIndex="-1" className="relative max-w-7xl mx-auto px-4 focus:outline-none sm:px-3 md:px-5">
      <h2 className="sr-only">Testimonials</h2>
      <div ref={inViewRef} className={clsx("grid grid-cols-12 col-span-12", !expanded && "max-h-[33rem] overflow-hidden")}>
        {testimonials.map((column, i) => (
          <ul
            key={i}
            className={clsx("space-y-8 grid grid-cols-12  col-span-12 gap-4", i === 1 && "hidden sm:block", i === 2 && "hidden lg:block")}
          >
            {column.map((testimonial) => (
              <Testimonial key={testimonial.author.name} expanded={expanded} {...testimonial} />
            ))}
          </ul>
        ))}
      </div>
      <div
        className={clsx(
          "inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-black pt-32 pb-8 pointer-events-none dark:from-slate-900",
          expanded ? "sticky -mt-52" : "absolute",
          transition && "transition-opacity duration-300",
          expanded && (showCollapseButton ? "opacity-100" : "opacity-0")
        )}
      >
        <button
          type="button"
          className={clsx(
            "relative bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 text-sm text-white font-semibold h-12 px-6 rounded-lg flex items-center dark:bg-slate-700 dark:hover:bg-slate-600",
            transition && "transition-transform",
            expanded && !showCollapseButton && "translate-y-4",
            (!expanded || showCollapseButton) && "pointer-events-auto"
          )}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Okay, I get the point" : "Show more..."}
        </button>
      </div>
    </section>
  )
}
