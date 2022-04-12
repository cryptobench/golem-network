import "../styles/globals.css"
import Head from "next/head"
import Footer from "../components/Footer"
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>

      <Component {...pageProps} />
      <Footer></Footer>
    </>
  )
}

export default MyApp
