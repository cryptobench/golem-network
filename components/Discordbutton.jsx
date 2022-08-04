import React, { useState } from "react"
import Discord from "../components/svg/Discord"
import { XIcon } from "@heroicons/react/outline"

export default function Button(props) {
  const [open, setOpen] = useState(true)
  return open ? (
    <button
      onClick={() => {
        window.open("https://chat.golem.network")
      }}
      className="z-50 bottom-2 inline-block fixed right-5 mt-3 text-center  px-6 py-3 border border-transparent text-sm lg:text-base font-medium rounded-lg text-white bg-discordblue shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      <Discord className="w-5 h-5 mr-3 mb-0.5 inline-block"></Discord>Join our Discord
      <span className="sr-only">Dismiss</span>
      <XIcon className="h-6 w-6 text-white inline-block hover:bg-indigo-500  ml-4" aria-hidden="true" onClick={() => setOpen(false)} />
    </button>
  ) : null
}
