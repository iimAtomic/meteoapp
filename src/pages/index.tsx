import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/header/header'
import SearchBar from '@/components/searchBar/search'
import WeatherMap from '@/components/map/WeatherMap'
import { background } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  

  return (
    <>
      <Head>
        <title>METEO APP </title>
        <meta name="description" content="Votre App Meteo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/LOGO_MF.png" />
      </Head>
      <main>
        <Navbar />
        <div className={styles.div1}> 
           <h1 >METEO FRANCE</h1>
          <WeatherMap />
        </div>
        
      </main>
    </>
  )
}
