import Head from "next/head"
import Blog from "../components/News"
import Hero from "../components/Hero"
import Apps from "../components/Apps"
import Explainer from "../components/Explainer"
import Pricing from "../components/Pricing"
import LiveStats from "../components/LiveStats"
import Navbar from "../components/Navbar"

function Page({ data, memory, disk, online, cores }) {
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

        <Explainer></Explainer>
        <LiveStats
          header="Join the network"
          title="Join the network like hundreds of others"
          providers={online}
          cores={cores}
          memory={Math.round(memory * 100) / 100}
          disk={Math.round(disk * 100) / 100}
          center={true}
        ></LiveStats>
        <Pricing></Pricing>
        <Apps></Apps>
        <Blog displayTitle={true} posts={data} frontpage={true}></Blog>
      </div>
    </>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://blog.golemproject.net/ghost/api/v3/content/posts/?key=${process.env.BLOG_API_KEY}&include=tags,authors&limit=3`
  )
  const data = await res.json()
  const stats = await fetch(`https://api.stats.golem.network/v1/network/online/stats`)
  const statsdata = await stats.json()

  // Pass data to the page via props
  return {
    props: {
      data: data,
      memory: statsdata.memory / 1024,
      disk: statsdata.disk / 1024,
      cores: statsdata.threads,
      online: statsdata.online,
    },
  }
}

export default Page
