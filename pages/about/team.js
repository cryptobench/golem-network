import Head from "next/head"
import Banner from "../../components/Banner"
import Navbar from "../../components/Navbar"
import { useEffect, useState } from "react"

function Page() {
  return (
    <>
      <Head>
        <title>Golem Network</title>
        <meta name="google-site-verification" content="7TO2YTmVfu0A5AgihId9CSnSrQjFgHxAkZ-k_zIH18g" />
      </Head>
      <Banner
        cta="Browse Positions"
        title="We are hiring! We are on the lookout for Developers, designers and HR!"
        titlesm="We are hiring!"
        href="/about/jobs"
      ></Banner>
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
        <div className="pb-24 relative bggridbottom overflow-hidden w-full ">
          <div className="relative  ">
            <main className="mt-20 mx-auto max-w-7xl px-4 sm:px-6">
              <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                <div
                  className="text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left "
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <h1>
                    <span className="block text-sm font-semibold uppercase tracking-wide text-golemblue">Team</span>
                    <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-4xl xl:text-6xl">Meet our board</span>
                  </h1>
                  <p className="mt-3 text-xl text-slate-600 sm:mt-5 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum elit sed tellus pretium
                  </p>
                </div>

                <div
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  className="mt-12 grid gap-y-10 grid-cols-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 "
                >
                  <div className="col-span-3 grid justify-items-center">
                    <img
                      className="inline-block h-20 w-20 rounded-md"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <p className="font-semibold mt-2">Piotr Janiuk</p>
                    <span className="text-sm text-center ">ACTING CEO, CTO, CO-FOUNDER</span>
                  </div>
                  <div className="col-span-3 grid justify-items-center">
                    <img
                      className="inline-block h-20 w-20 rounded-md"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <p className="font-semibold mt-2">Piotr Janiuk</p>
                    <span className="text-sm ">ACTING CEO, CTO, CO-FOUNDER</span>
                  </div>
                  <div className="col-span-3 grid justify-items-center">
                    <img
                      className="inline-block h-20 w-20 rounded-md"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <p className="font-semibold mt-2">Piotr Janiuk</p>
                    <span className="text-sm ">ACTING CEO, CTO, CO-FOUNDER</span>
                  </div>
                  <div className="col-span-3 grid justify-items-center">
                    <img
                      className="inline-block h-20 w-20 rounded-md"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <p className="font-semibold mt-2">Piotr Janiuk</p>
                    <span className="text-sm ">ACTING CEO, CTO, CO-FOUNDER</span>
                  </div>
                </div>

                <div className="col-span-6 ml-10 grid grid-cols-12 pt-32">
                  <div className="col-span-12"></div>
                </div>
              </div>
              <div className="lg:grid lg:grid-cols-12 lg:gap-8 mt-20">
                <div className="lg:col-span-12 lg:text-left " data-aos="fade-up" data-aos-duration="1000">
                  <h1>
                    <span className="block text-sm font-semibold uppercase tracking-wide text-golemblue">Team</span>
                    <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-4xl xl:text-6xl">Employees</span>
                  </h1>
                  <p className="mt-3 text-xl text-slate-600 sm:mt-5 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum elit sed tellus pretium
                  </p>
                </div>

                <div data-aos="fade-left" data-aos-duration="1000" className="mt-12 grid gap-y-10 grid-cols-12 relative col-span-12 ">
                  <div className="col-span-2 grid justify-items-center">
                    <img
                      className="inline-block h-20 w-20 rounded-md"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <p className="font-semibold mt-2">Piotr Janiuk</p>
                    <span className="text-sm text-center ">ACTING CEO, CTO, CO-FOUNDER</span>
                  </div>
                  <div className="col-span-2 grid justify-items-center">
                    <img
                      className="inline-block h-20 w-20 rounded-md"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <p className="font-semibold mt-2">Piotr Janiuk</p>
                    <span className="text-sm text-center ">ACTING CEO, CTO, CO-FOUNDER</span>
                  </div>
                  <div className="col-span-2 grid justify-items-center">
                    <img
                      className="inline-block h-20 w-20 rounded-md"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <p className="font-semibold mt-2">Piotr Janiuk</p>
                    <span className="text-sm text-center ">ACTING CEO, CTO, CO-FOUNDER</span>
                  </div>
                  <div className="col-span-2 grid justify-items-center">
                    <img
                      className="inline-block h-20 w-20 rounded-md"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <p className="font-semibold mt-2">Piotr Janiuk</p>
                    <span className="text-sm text-center ">ACTING CEO, CTO, CO-FOUNDER</span>
                  </div>
                  <div className="col-span-2 grid justify-items-center">
                    <img
                      className="inline-block h-20 w-20 rounded-md"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <p className="font-semibold mt-2">Piotr Janiuk</p>
                    <span className="text-sm text-center ">ACTING CEO, CTO, CO-FOUNDER</span>
                  </div>
                  <div className="col-span-2 grid justify-items-center">
                    <img
                      className="inline-block h-20 w-20 rounded-md"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <p className="font-semibold mt-2">Piotr Janiuk</p>
                    <span className="text-sm text-center ">ACTING CEO, CTO, CO-FOUNDER</span>
                  </div>
                  <div className="col-span-2 grid justify-items-center">
                    <img
                      className="inline-block h-20 w-20 rounded-md"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <p className="font-semibold mt-2">Piotr Janiuk</p>
                    <span className="text-sm text-center ">ACTING CEO, CTO, CO-FOUNDER</span>
                  </div>
                  <div className="col-span-2 grid justify-items-center">
                    <img
                      className="inline-block h-20 w-20 rounded-md"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <p className="font-semibold mt-2">Piotr Janiuk</p>
                    <span className="text-sm text-center ">ACTING CEO, CTO, CO-FOUNDER</span>
                  </div>
                  <div className="col-span-2 grid justify-items-center">
                    <img
                      className="inline-block h-20 w-20 rounded-md"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <p className="font-semibold mt-2">Piotr Janiuk</p>
                    <span className="text-sm text-center ">ACTING CEO, CTO, CO-FOUNDER</span>
                  </div>
                  <div className="col-span-2 grid justify-items-center">
                    <img
                      className="inline-block h-20 w-20 rounded-md"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <p className="font-semibold mt-2">Piotr Janiuk</p>
                    <span className="text-sm text-center ">ACTING CEO, CTO, CO-FOUNDER</span>
                  </div>
                  <div className="col-span-2 grid justify-items-center">
                    <img
                      className="inline-block h-20 w-20 rounded-md"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <p className="font-semibold mt-2">Piotr Janiuk</p>
                    <span className="text-sm text-center ">ACTING CEO, CTO, CO-FOUNDER</span>
                  </div>
                  <div className="col-span-2 grid justify-items-center">
                    <img
                      className="inline-block h-20 w-20 rounded-md"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <p className="font-semibold mt-2">Piotr Janiuk</p>
                    <span className="text-sm text-center ">ACTING CEO, CTO, CO-FOUNDER</span>
                  </div>
                  <div className="col-span-2 grid justify-items-center">
                    <img
                      className="inline-block h-20 w-20 rounded-md"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <p className="font-semibold mt-2">Piotr Janiuk</p>
                    <span className="text-sm text-center ">ACTING CEO, CTO, CO-FOUNDER</span>
                  </div>
                  <div className="col-span-2 grid justify-items-center">
                    <img
                      className="inline-block h-20 w-20 rounded-md"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <p className="font-semibold mt-2">Piotr Janiuk</p>
                    <span className="text-sm text-center ">ACTING CEO, CTO, CO-FOUNDER</span>
                  </div>
                  <div className="col-span-2 grid justify-items-center">
                    <img
                      className="inline-block h-20 w-20 rounded-md"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <p className="font-semibold mt-2">Piotr Janiuk</p>
                    <span className="text-sm text-center ">ACTING CEO, CTO, CO-FOUNDER</span>
                  </div>
                </div>

                <div className="col-span-6 ml-10 grid grid-cols-12 pt-32">
                  <div className="col-span-12"></div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API

  // Pass data to the page via props
  return {
    props: {},
  }
}

export default Page
