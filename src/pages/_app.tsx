import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ParallaxProvider } from 'react-scroll-parallax'

export default function App({ Component, pageProps }: AppProps) {
  return( 
    <>
    <ParallaxProvider>
      <Navbar />
      <Component {...pageProps} />
    </ParallaxProvider>
    </>
  )
}
