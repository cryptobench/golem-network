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

import { Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"

export default function Example() {
  return (
    <div class=" grid justify-items-center relative ">
      <div class="my-4 rounded  mb-1 ">
        <p class=" border-solid border-l rounded-l border-t border-b py-2 px-4 inline-block bg-gray-800 text-white" id="copyMe">
          curl -sSf https://join.golem.network/as-requestor | bash -
          <button class="  font-bold py-2 pl-4  rounded  text-gray-300 hover:text-white  " onclick="copyMeOnClipboard()">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block " fill="none" stroke="currentColor" strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          </button>
        </p>
      </div>
      <div className="text-gray-400 hover:text-black">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-1" fill="none" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
        <a href="#" className="text-sm inline-block">
          Documentation
        </a>
      </div>
    </div>
  )
}
