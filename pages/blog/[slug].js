import Head from "next/head"
import Slug from "../../components/blog/Slug"
import Navbar from "../../components/Navbar"
function Page({ data }) {
  console.log(data)
  return (
    <>
      <Head>
        <title>Golem Network</title>
        <meta name="google-site-verification" content="7TO2YTmVfu0A5AgihId9CSnSrQjFgHxAkZ-k_zIH18g" />
      </Head>
      <Navbar></Navbar>
      <Slug post={Object.values(data.posts)[0]}></Slug>
    </>
  )
}

// This gets called on every request
export async function getServerSideProps(context) {
  // Fetch data from external API
  const { slug } = context.params
  const res = await fetch(
    `https://blog.golemproject.net/ghost/api/v3/content/posts/slug/${slug}?key=${process.env.BLOG_API_KEY}&include=tags,authors`
  )
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default Page
