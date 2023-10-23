import Link from "next/link"
import Typewriter from "typewriter-effect"
import React from "react"
import { useInView } from "react-intersection-observer"
import dynamic from "next/dynamic"
const GolemGlobe = dynamic(import("../components/Globe"), { ssr: false })

export default function Example() {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
    })
    const N = 20
    const arcsData = [...Array(N).keys()].map(() => ({
        startLat: (Math.random() - 0.5) * 180,
        startLng: (Math.random() - 0.5) * 360,
        endLat: (Math.random() - 0.5) * 180,
        endLng: (Math.random() - 0.5) * 360,
        color: [
            ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
            ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
        ],
    }))
    return (
        <div className="relative bggridbottom overflow-hidden w-full  " ref={ref}>
            <div className="relative  ">
                <main className="mx-auto max-w-7xl px-4 sm:px-6">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                        <div className="text-center md:max-w-2xl md:mx-auto lg:col-span-6 mt-12 lg:text-left">
                            <h1 className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                                    Decentralizing the Web with Golem
                            </h1>
                            <p className="mt-3 text-xl text-slate-600 sm:mt-5 ">
                                Golem is a powerful permissionless supercomputer accessible by anyone. Accelerate workloads like machine
                                learning, deep learning, CI/CD pipelines and much more at an instant.
                            </p>
                            <p className="text-base mt-8 -mb-2 col-span-12 font-medium text-gray-900  text-center lg:text-left ">
                                Let&apos;s get started
                            </p>
                            <div className=" grid grid-cols-12 gap-x-1 gap-y-1">
                                <Link href="/provider">
                                    <a className="mt-3 lg:col-span-4 col-span-6 md:col-span-6 text-center w-full px-6 py-3 border border-transparent text-sm lg:text-base font-medium rounded-md text-white bg-golemblue shadow-sm hover:bg-golemblue/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ">
                                        Start Providing
                                    </a>
                                </Link>
                                <Link href="/requestor">
                                    <a className="mt-3 lg:col-span-4 col-span-6 md:col-span-6 text-center w-full px-6 py-3 border border-transparent text-sm lg:text-base font-medium rounded-md text-white bg-golemblue shadow-sm hover:bg-golemblue/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ">
                                        Start Requesting
                                    </a>
                                </Link>
                                <Link href="/requestor">
                                    <a className="lg:mt-3 lg:col-span-4 col-span-12 md:col-span-12 text-center w-full px-6 py-3 border border-transparent text-base lg:text-base font-medium rounded-md text-white bg-golemblue shadow-sm hover:bg-golemblue/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ">
                                        Explore tokenomics
                                    </a>
                                </Link>
                                <p className=" text-sm text-gray-500 col-span-12">
                                    We care about the protection of your data. Read our
                                    <a href="#" className="font-medium text-gray-900 underline ml-1">
                                        Privacy Policy
                                    </a>
                                    .
                                </p>
                            </div>
                        </div>
                        <div className="relative hidden lg:visible sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                            <GolemGlobe />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
