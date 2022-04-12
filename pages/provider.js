import Head from "next/head"
import Hero from "../components/provider/Hero"

import Explainer from "../components/provider/Explainer"
import Stats from "../components/Stats"
import Gui from "../components/provider/Gui"

export default function Example() {
  return (
    <div>
      <Head>
        <title>Golem Network</title>
        <meta name="google-site-verification" content="7TO2YTmVfu0A5AgihId9CSnSrQjFgHxAkZ-k_zIH18g" />
      </Head>
      <Hero></Hero>
      <Explainer></Explainer>
      <Gui></Gui>
      <Stats></Stats>
    </div>
  )
}
