import Head from "next/head"
import Blog from "../components/News"
import Hero from "../components/Hero"
import Apps from "../components/Apps"
import Explainer from "../components/Explainer"
import Pricing from "../components/Pricing"
import LiveStats from "../components/LiveStats"
import Banner from "../components/Banner"
import Navbar from "../components/Navbar"
import Discordbutton from "../components/Discordbutton"
import { useEffect, useState } from "react"

function Page({ blogs, stats, pricing }) {
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
            <div className="relative  w-full  ">
                <Discordbutton></Discordbutton>

                <div className="hidden lg:block lg:absolute h-full w-full overflow-hidden" aria-hidden="true">
                    <svg className="absolute w-full test " width="100%" height="100%" fill="none">
                        <defs>
                            <pattern
                                id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
                                x={118}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} width={2} height={2} className="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect className="w-full" width="100%" height="100%" fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)" />
                    </svg>
                </div>
                <Navbar></Navbar>
                <Banner
                    cta="Click to read"
                    title="New Release! Beta V is out now, featuring new development tools for "
                    titlesm="We are hiring!"
                    href="/blog/beta-v-release"
                ></Banner>
                <Hero></Hero>

                <Explainer></Explainer>
                <LiveStats
                    header="Join the network"
                    title="Join the network like hundreds of others"
                    providers={stat.online}
                    cores={stat.cores}
                    memory={Math.round(stat.memory * 100) / 100}
                    disk={Math.round(stat.disk * 100) / 100}
                    center={true}
                ></LiveStats>
                <Pricing providers={pricing}></Pricing>
                <Apps></Apps>
                {/* <Blog displayTitle={true} posts={blogs} frontpage={true}></Blog> */}
            </div>
        </>
    )
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://api.localhost/v2/website/index`)
    const data = await res.json()
    const statsformatted = {
        memory: data.stats.memory / 1024,
        disk: data.stats.disk / 1024,
        cores: data.stats.threads,
        online: data.stats.online,
    }
    // Pass data to the page via props
    return {
        props: {
            // blogs: data.blogs,
            stats: statsformatted,
            pricing: data.providers,
        },
    }
}

export default Page
