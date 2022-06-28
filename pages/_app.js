import "../styles/globals.css"
import Head from "next/head"
import Footer from "../components/Footer"
import NextNProgress from "nextjs-progressbar"
import { AnimatePresence } from "framer-motion"
import { motion } from "framer-motion"

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>
      <NextNProgress color="#0c14d4" />
      <motion.div
        key={router.pathname}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Component {...pageProps} />
      </motion.div>
      <Footer></Footer>
    </>
  )
}

export default MyApp
