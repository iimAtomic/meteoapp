import '@/styles/globals.css'
import styles from '@/styles/Home.module.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return <ChakraProvider>
    <Head>
    <link rel="icon" href="/images/LOGO_MF.png" />
      </Head>
    <Component {...pageProps} />
    </ChakraProvider>
}
