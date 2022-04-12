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

      <Explainer></Explainer>
      <LiveStats
        header="Join the network"
        title="Join the network like hundreds of others"
        providers="832"
        cores="16949"
        memory="16.37"
        disk="128.75"
        center={true}
      ></LiveStats>
      <Pricing></Pricing>
      <Apps></Apps>
      <Test></Test>
    </div>
  )
}
