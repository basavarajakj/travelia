import CTA from '@/components/Cta'
import Destination from '@/components/Destination'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import Gallery from '@/components/Gallery'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Preloader from '@/components/Preloader'
import Service from '@/components/Service'

export default function Home() {
  return (
    <>
      {/* <Preloader />  */}
      <Header />
      <Hero />
      <Service />
      <Destination />
      <Experience />
      <Gallery />
      <CTA />
      <Footer />
    </> 
  )
}
