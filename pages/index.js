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

import Test from "../components/News"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Apps from "../components/Apps"
import Explainer from "../components/Explainer"
import { Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import Typewriter from "typewriter-effect"

const navigation = [
  { name: "Products", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
]

export default function Example() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Explainer></Explainer>
      <Apps></Apps>
      <Test></Test>
    </div>
  )
}
