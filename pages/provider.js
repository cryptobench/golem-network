import Head from "next/head"
import Hero from "../components/provider/Hero"
import Navbar from "../components/Navbar"
import Stats from "../components/Stats"
import Gui from "../components/provider/Gui"

export default function Example() {
  return (
    <>
      <Head>
        <title>Golem Network</title>
        <meta name="google-site-verification" content="7TO2YTmVfu0A5AgihId9CSnSrQjFgHxAkZ-k_zIH18g" />
      </Head>
      <div className="relative   w-full  ">
        <div className="hidden lg:block lg:absolute h-full w-full overflow-hidden" aria-hidden="true">
          <svg className="absolute w-full test " width="100%" height="100%" fill="none">
            <defs>
              <pattern id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047" x={118} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
                <rect x={0} y={0} width={2} height={2} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect className="w-full" width="100%" height="100%" fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)" />
          </svg>
        </div>
        <Navbar></Navbar>
        <Hero></Hero>
        <Gui></Gui>
        <Stats></Stats>
      </div>
    </>
  )
}

export async function getStaticProps() {
  // Pass data to the page via props
  return {
    props: {}, // will be passed to the page component as props
  }
}
