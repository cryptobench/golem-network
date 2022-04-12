import Head from "next/head"
import Slug from "../../components/blog/Slug"
import Navbar from "../../components/Navbar"
export default function Example() {
  return (
    <div>
      <Head>
        <title>Golem Network</title>
        <meta name="google-site-verification" content="7TO2YTmVfu0A5AgihId9CSnSrQjFgHxAkZ-k_zIH18g" />
      </Head>
      <Navbar></Navbar>
      <Slug></Slug>
    </div>
  )
}
