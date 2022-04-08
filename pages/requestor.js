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
import Hero from "../components/requestor/Hero"
import Pricing from "../components/Pricing"
import Install from "../components/Install"
import Apis from "../components/requestor/Apis"
import Rentmachine from "../components/requestor/Rentmachine"
import LiveStats from "../components/LiveStats"

const navigation = [
  { name: "Products", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
]

export default function Example() {
  return (
    <div>
      <Head>
        <title>Golem Network</title>
        <meta name="google-site-verification" content="7TO2YTmVfu0A5AgihId9CSnSrQjFgHxAkZ-k_zIH18g" />
      </Head>
      <Hero></Hero>
      <LiveStats
        header="Unlimited quote on resources"
        title="Never before has this amount of resources been available for everyone"
        providers="832"
        cores="16949"
        memory="16.37"
        disk="128.75"
        center={false}
      ></LiveStats>
      <Pricing></Pricing>
      <Apis></Apis>
      <Rentmachine></Rentmachine>
    </div>
  )
}
