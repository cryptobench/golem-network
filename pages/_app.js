import "../styles/globals.css"
import Head from "next/head"
import Footer from "../components/Footer"
import NextNProgress from "nextjs-progressbar"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>
      <NextNProgress color="#0c14d4" />
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  )
}

export default MyApp
