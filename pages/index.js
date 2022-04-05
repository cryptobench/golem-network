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
import Head from "next/head"
import Test from "../components/News"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Apps from "../components/Apps"
import Explainer from "../components/Explainer"
import Footer from "../components/Footer"
import Cost from "../components/Cost"

const navigation = [
  { name: "Products", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
]

export default function Example() {
  return (
    <div>
      <div className="relative   w-full  ">
        <div className="hidden lg:block lg:absolute h-full w-full overflow-x-hidden" aria-hidden="true">
          <svg className="absolute w-full test " width="100%" height="100%" fill="none">
            <defs>
              <pattern id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047" x={118} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
                <rect x={0} y={0} width={2} height={2} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect className="w-full" width="100%" height="100%" fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)" />
          </svg>
        </div>
        <Head>
          <title>Golem Network</title>
          <meta name="google-site-verification" content="7TO2YTmVfu0A5AgihId9CSnSrQjFgHxAkZ-k_zIH18g" />
        </Head>
        <Navbar></Navbar>
        <Hero></Hero>
        <Explainer></Explainer>
        <Cost></Cost>
        <Apps></Apps>
        <Test></Test>
      </div>
      <Footer></Footer>
    </div>
  )
}
