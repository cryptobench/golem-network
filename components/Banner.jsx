import React, { useState } from "react"
import { SpeakerphoneIcon, XIcon } from "@heroicons/react/outline"
import Link from "next/link"

export default function Example(props) {
  const title = props.title
  const titlesm = props.title
  const cta = props.cta
  const [open, setOpen] = useState(true)
  return (
    <>
      {open ? (
        <div className="fixed inset-x-0 bottom-0 z-50">
          <div className="bg-black">
            <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between flex-wrap">
                <div className="w-0 flex-1 flex items-center">
                  <span className="flex p-1 rounded-lg bg-white"></span>
                  <p className="ml-3 font-medium text-white truncate">
                    <span className="md:hidden">{titlesm}</span>
                    <span className="hidden md:inline">{title}</span>
                  </p>
                </div>
                <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                  <Link href={props.href}>
                    <a className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-white hover:bg-indigo-50">
                      {cta}
                    </a>
                  </Link>
                </div>
                <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                  <button
                    onClick={() => setOpen(false)}
                    type="button"
                    className="-mr-1 flex p-2 rounded-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                  >
                    <span className="sr-only">Dismiss</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
