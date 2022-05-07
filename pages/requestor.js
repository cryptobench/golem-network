import Head from "next/head"
import Hero from "../components/requestor/Hero"
import Pricing from "../components/Pricing"
import Apps from "../components/Apps"
import Navbar from "../components/Navbar"
import Apis from "../components/requestor/Apis"
import Rentmachine from "../components/requestor/Rentmachine"
import LiveStats from "../components/LiveStats"
import { useEffect, useState } from "react"

export default function Page({ stats }) {
  const [stat, setStat] = useState(stats)
  const fetchStats = () => {
    fetch("https://api.stats.golem.network/v1/network/online/stats")
      .then((r) => r.json())

      .then((response) => {
        setStat({ memory: response.memory / 1024, disk: response.disk / 1024, cores: response.threads, online: response.online })
      })
  }
  useEffect(() => {
    setInterval(() => {
      fetchStats()
    }, 15000)
  }, [])
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

        <LiveStats
          header="Unlimited quote on resources"
          title="Never before has this amount of resources been available for everyone"
          providers={stat.online}
          cores={stat.cores}
          memory={Math.round(stat.memory * 100) / 100}
          disk={Math.round(stat.disk * 100) / 100}
          center={true}
        ></LiveStats>
        <Pricing></Pricing>
        <Apis></Apis>
        <Apps></Apps>
        <Rentmachine></Rentmachine>
      </div>
    </>
  )
}
export async function getStaticProps() {
  // Fetch data from external API

  const fetchstats = await fetch(`https://api.stats.golem.network/v1/network/online/stats`)
  const statsdata = await fetchstats.json()
  const statsformatted = {
    memory: statsdata.memory / 1024,
    disk: statsdata.disk / 1024,
    cores: statsdata.threads,
    online: statsdata.online,
  }
  // Pass data to the page via props
  return {
    props: {
      stats: statsformatted,
    },
    revalidate: 60, // In seconds
  }
}
