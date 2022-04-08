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
import Hero from "../components/Hero"
import Apps from "../components/Apps"
import Explainer from "../components/Explainer"
import Pricing from "../components/Pricing"
import LiveStats from "../components/LiveStats"

export default function Example() {
  return (
    <div>
      <Head>
        <title>Golem Network</title>
        <meta name="google-site-verification" content="7TO2YTmVfu0A5AgihId9CSnSrQjFgHxAkZ-k_zIH18g" />
      </Head>
      <Hero></Hero>
      <LiveStats providers="832" cores="16949" memory="16.37" disk="128.75"></LiveStats>
      <Explainer></Explainer>
      <Pricing></Pricing>
      <Apps></Apps>
      <Test></Test>
    </div>
  )
}
